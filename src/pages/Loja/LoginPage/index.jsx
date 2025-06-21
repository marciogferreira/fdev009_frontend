import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

// Definindo o esquema de validação com Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email inválido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

const LoginPage = () => {

  const { setIsLogged } = useContext(AuthContext)
  const navigate = useNavigate();
  // Função de envio do formulário
  const handleSubmit = (values, form) => {
   if(values.email === 'admin@admin.com' && values.password === '123123') {
    alert("Usuario Logado com Sucesso")
    setIsLogged(true)
    navigate('/')
   } else {
    alert("Login ou Senha Incorreto")
   }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className='row'>
        <div className="border p-5 rounded" style={{ width: '400px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-center mb-4">Entrar</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleSubmit,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor="">E-mail</label>
                  <Field
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                    className="form-control"
                  />
                  <div className='error'>
                    <ErrorMessage name='email' />
                  </div>
                </div>
                <div className='mb-3'>
                  <label>Senha</label>
                  <Field
                    type="password"
                    placeholder="Digite sua senha"
                    name="password"
                    className="form-control"
                  />
                  <div className='error'>
                    <ErrorMessage name='password' />
                  </div>
                </div>
                <button className="btn" style={{ backgroundColor: '#e71663', color: '#fff' }} type="submit">
                  Entrar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
