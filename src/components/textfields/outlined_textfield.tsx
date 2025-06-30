import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';



const OutlinedTextField =  ({
    label,
    value,
    onChange,
    type = "text",
    required = false,
    fullWidth = true,
    disabled = false,
    helperText = ""
}) => {

    return (
        <TextField
            variant="outlined"
            label={label}
            value={value}
            onChange={onChange}
            type={type}
            required={required}
            fullWidth={fullWidth}
            disabled={disabled}
            helperText={helperText}
        />
    );
};


OutlinedTextField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    helperText: PropTypes.string
};

OutlinedTextField.defaultProps = {
    type: "text",
    required: false,
    fullWidth: true,
    disabled: false,
    helperText: ""
};

export default OutlinedTextField;