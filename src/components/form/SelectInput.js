import React from "react";
import { useField } from 'formik';

const SelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="add-modal-field-container">
            <label htmlFor={props.id || props.name} className="add-modal-field-label">{label}</label>
            <select {...field} {...props} multiple className="add-modal-field-input" />
            {meta.touched && meta.error ? (
                <div className="add-modal-field-error">{meta.error}</div>
            ) : null}
        </div>
    );
};
export default SelectInput;