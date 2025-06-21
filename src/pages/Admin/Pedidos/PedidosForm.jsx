import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import LayoutDefault from "../../../layouts/LayoutDefault";

function PedidosForm() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState({
    usuario_id: "",
    data_hora: "",
    total: "",
    status: "",
  });

  async function getData() {
    if (params.id) {
      const response = await axios.get(
        "http://localhost:3000/pedidos/" + params.id
      );
      setData(response.data);
    }
  }

  async function salvarDados(values, forms) {
    if (params.id) {
      await axios.put("http://localhost:3000/pedidos/" + params.id, values);
      swal("Sucesso!", "Pedido Atualizado com Sucesso.", "success");
    } else {
      await axios.post("http://localhost:3000/pedidos", values);
      swal("Sucesso!", "Pedido Salvo com Sucesso.", "success");
    }

    // Limpa os dados do formulário
    forms.resetForm();
    navigate("/pedidos"); // Redireciona para a lista de pedidos
  }

  // Configura os campos para validação
  const validationSchema = Yup.object({
    usuario_id: Yup.number().required("Campo Obrigatório"),
    data_hora: Yup.string().required("Campo Obrigatório"),
    total: Yup.number()
      .required("Campo Obrigatório")
      .positive("Total deve ser maior que zero"),
    status: Yup.string().required("Campo Obrigatório"),
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutDefault>
      <h5>Formulário de Pedidos</h5>
      <Formik
        enableReinitialize={true}
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={salvarDados}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="usuario_id">ID do Usuário:</label>
              <Field
                type="number"
                id="usuario_id"
                name="usuario_id"
                className="form-control"
                required
              />
              <span className="error">
                <ErrorMessage name="usuario_id" />
              </span>
            </div>
            <div>
              <label htmlFor="data_hora">Data/Hora:</label>
              <Field
                type="text"
                id="data_hora"
                name="data_hora"
                className="form-control"
                required
              />
              <span className="error">
                <ErrorMessage name="data_hora" />
              </span>
            </div>
            <div>
              <label htmlFor="total">Total:</label>
              <Field
                type="number"
                id="total"
                name="total"
                className="form-control"
                required
              />
              <span className="error">
                <ErrorMessage name="total" />
              </span>
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <Field
                type="text"
                id="status"
                name="status"
                className="form-control"
                required
              />
              <span className="error">
                <ErrorMessage name="status" />
              </span>
            </div>
            <div className="mt-3 d-flex justify-content-end">
              <button type="submit" className="btn btn-success btn-sm">
                Salvar
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={() => navigate("/pedidos")}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </LayoutDefault>
  );
}

export default PedidosForm;
