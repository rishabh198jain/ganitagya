import React from 'react';

const FormField = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows,
  options = [],
  showPasswordToggle = false,
  showPassword = false,
  onPasswordToggle,
  className = '',
  ...props
}) => {
  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows || 4}
            className={`form-input ${error ? 'error' : ''} ${className}`}
            {...props}
          />
        );

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`form-input ${error ? 'error' : ''} ${className}`}
            {...props}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'password':
        return (
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              className={`form-input ${error ? 'error' : ''} ${className}`}
              {...props}
            />
            {showPasswordToggle && (
              <button
                type="button"
                className="password-toggle"
                onClick={onPasswordToggle}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            )}
          </div>
        );

      case 'radio':
        return (
          <div className="radio-group">
            {options.map((option, index) => (
              <label key={index} className={`radio-option ${value === option.value ? 'active' : ''}`}>
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  required={required}
                  {...props}
                />
                {option.icon && <span className="option-icon">{option.icon}</span>}
                <span className="option-label">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <label className="checkbox-group">
            <input
              type="checkbox"
              name={name}
              checked={value}
              onChange={onChange}
              required={required}
              className={`checkbox-input ${error ? 'error' : ''} ${className}`}
              {...props}
            />
            <span className="checkbox-label">{label}</span>
          </label>
        );

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`form-input ${error ? 'error' : ''} ${className}`}
            {...props}
          />
        );
    }
  };

  if (type === 'checkbox') {
    return (
      <div className="form-group">
        {renderInput()}
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }

  return (
    <div className="form-group">
      {label && type !== 'checkbox' && (
        <label htmlFor={name}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      {renderInput()}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormField;
