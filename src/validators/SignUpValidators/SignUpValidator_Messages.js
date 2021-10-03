export default {
    general: {
        missing: 'Please provide the required field',
        invalid: 'Mentioned value is invalid'
    },
    type: {
        username: {
            missing: 'Please provide a username',
            invalid: 'The username provided by you is invalid. Username should only contains alphabets, numbers and _.'
        },
        email: {
            missing: 'Please provide an e-mail',
            invalid: 'The e-mail provided by you is invalid.'
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