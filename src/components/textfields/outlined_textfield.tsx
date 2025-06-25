import { TextField } from '@mui/material';
import React from 'react';


interface OutlinedTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    helperText?: string;
}

const OutlinedTextField: React.FC<OutlinedTextFieldProps> = ({
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

export default OutlinedTextField;