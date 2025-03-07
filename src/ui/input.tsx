import React from 'react';

const Input = ({ placeholder, type = "text", className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
        />
    );
};

export default Input; 