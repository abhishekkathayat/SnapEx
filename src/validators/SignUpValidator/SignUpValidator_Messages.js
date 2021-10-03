export default {
    general: {
        missing: 'Please provide the required field',
        invalid: 'Mentioned value is invalid'
    },
    type: {
        email: {
            missing: 'Please provide an e-mail',
            invalid: 'The e-mail mentioned by you is invalid'
        },
        password: {
            rule: {
                capitalLetter: 'Password should contain at least one capital letter',
                oneNumber: 'Password should contain at least one number',
                minLength: 'Length of Password must be at least 8 characters'
            }
        }
    },
    name: {
        confirmPassword: {
            rule: {
                matches: 'The mentioned passwords do not match'
            }
        }
    }
}