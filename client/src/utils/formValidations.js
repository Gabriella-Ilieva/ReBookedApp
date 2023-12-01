export function registerValidator(values) {
    let errors = {}
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    for (const value of Object.keys(values)) {

        if (['username', 'email', 'password', 'confirm-password'].includes(value) && (values[value] == '')){
            errors[value] = 'Required'
        } else if (value === 'email' && (!emailRegex.test(values[value]))){
            errors[value] = 'Invalid email address'
        } else if (value === 'username' && values[value].length <= 3){
            errors[value] = 'The username should be at least 4 characters'
        } else if (value === 'password' && values[value].length < 6){
            errors[value] = 'Password should be at least 6 characters'
        }
    }


    if (values['password'] !== values['confirm-password']){
        errors['confirm-password'] = 'The value should be the same as the Password value'
    }

    return errors
}