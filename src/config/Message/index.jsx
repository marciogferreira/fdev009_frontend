import swal from 'sweetalert';

const Message = {
    success: (msg) => {
        swal("Sucesso", msg, "success");
    },
    error: (msg) => {
        swal("Oops!", msg, "error");
    },
    infor: (msg) => {
        swal("Oops!", msg, "info");
    },
    confirmation: (msg, callback) => {
        swal({
          title: msg,
          text: "Confirme abaixo",
          icon: "warning",
          buttons: {
            cancel: {
              text: "Cancel",
              value: null,
              visible: true,
              className: "",
              closeModal: true,
            },
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "",
              closeModal: true
            }
          },
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            callback();
          }
        });
    },
    validation: async (error) => {
        const errors = error?.response.data.validation;
        Object.keys(errors).map(name => {
            if(errors[name].length) {
                Message.error(errors[name][0]);
            }
        });
    }
}

export default Message;