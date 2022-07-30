import emailjs, { init } from 'emailjs-com'
import Swal from 'sweetalert2'

const emailSend = ({ data }) => {
  const serviceID = 'default_service'
  const templateID = process.env.REACT_APP_EMAIL_Template_ID
  const showName = data.from_name?.split(' ')[0]
  init(process.env.REACT_APP_EMAIL_User_ID)

  emailjs.send(serviceID, templateID, data).then(
    (result) => {
      Swal.fire({
        title: `Gracias, ${showName}!`,
        text: `Gracias, Tu petición ha sido enviada. En breve nos pondremos en contacto contigo. ${result.text}`,
        icon: 'success',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Cierra',
      })
    },
    (error) => {
      Swal.fire({
        title: `Lo siento, ${showName}:`,
        text: `Parece que algo no ha funcionado.(${error}) Inténtalo de nuevo por favor. `,
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Cierra',
      })
    },
  )
}

export default emailSend
