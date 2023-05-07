import emailjs, { init } from 'emailjs-com'
import Swal from 'sweetalert2'

const emailSend = (data, DIC, resetForm) => {
  const serviceID = 'service_1xubnpl'
  const templateID = 'template_rvgqsba'
  const showName = data.name?.split(' ')[0]
  init('user_5HJvI2zi5tRGkdRn7cAvt')
  console.log({ serviceID, templateID, data })
  emailjs.send(serviceID, templateID, data).then(
    (result) => {
      Swal.fire({
        title: `${DIC.TOAST_SUCCESS_TITLE}${showName}!`,
        text: `${result.text}${DIC.TOAST_SUCCESS_TEXT}`,
        icon: 'success',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: DIC.TOAST_ERROR_CLOSE,
      })
      resetForm()
    },
    (error) => {
      console.log({ error })
      Swal.fire({
        title: `${DIC.TOAST_ERROR_TITLE} ${showName}:`,
        text: `${DIC.TOAST_ERROR_TRYAGAIN}: (error ${error.status}, ${error.text})`,
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: DIC.TOAST_ERROR_CLOSE,
      })
    },
  )
}

export default emailSend
