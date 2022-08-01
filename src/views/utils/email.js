import emailjs, { init } from 'emailjs-com'
import Swal from 'sweetalert2'

const emailSend = ({ data }) => {
  console.log('--------> emailSend.emailSendemailSend DATA', data)
  const serviceID = 'default_service'
  const templateID = 'template_rvgqsba'
  const showName = data.name?.split(' ')[0]
  init('user_5HJvI2zi5tRGkdRn7cAvt')

  emailjs.send(serviceID, templateID, data).then(
    (result) => {
      console.log('--------> emailjs.sending DATA', data)
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
      console.log('--------> emailjs.error DATA', data)
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
