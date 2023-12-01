import { useState } from "react";
import { registerValidator } from "../utils/formValidations";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({})

    const onChange = (e) => {
        // if (errors){
        //     setErrors({})
        // }
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(registerValidator(values));
        console.log(errors);
        
        if (Object.keys(errors).length == 0){
            console.log(errors);
            submitHandler(values);
        } else{
            return errors
        }
    };

    return {
        errors,
        values,
        onChange,
        onSubmit,
    }
}