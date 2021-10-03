import isEmail from 'validator/lib/isEmail'
import isValidPassword from 'validations/isValidPassword'

export default {
    type: {
        email: ({ value }) => isEmail(value),
        password: ({ value }) => isValidPassword(value)
    }
}