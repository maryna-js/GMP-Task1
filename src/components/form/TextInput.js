import React from "react";
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="add-modal-field-container">
            <label htmlFor={props.id || props.name} className="add-modal-field-label">{label}</label>
            <input className="add-modal-field-input" {...field} {...props}
            />
            {meta.touched && meta.error ? (
                <div className="add-modal-field-error">{meta.error}</div>
            ) : null}
        </div>
    );
};
export default TextInput;