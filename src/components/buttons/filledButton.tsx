import React from 'react';
import PropTypes from 'prop-types';
import styles from './filledButton.module.css';



const FilledButtonRect = ({ onClick, label, disabled, variant }) => {
    const className = `${styles.filledButton} ${styles[variant]}`;
    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {label}
        </button>
    );
};

FilledButtonRect.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

FilledButtonRect.defaultProps = {
	onClick: () => { },
    className: '',
};

export default FilledButtonRect;