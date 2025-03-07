import React from 'react';

const Textarea = ({ placeholder, className }) => {
    return (
        <textarea
            placeholder={placeholder}
            className={className}
        />
    );
};

export default Textarea; 