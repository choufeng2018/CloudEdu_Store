import { required } from 'vuelidate/lib/validators'

export const isRequired = (value, errorMessage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(required(value) || `* ${errorMessage}`)
    }, 1000)
  })
}
