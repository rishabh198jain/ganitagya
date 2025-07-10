import React, { useState } from 'react';
import FormField from './FormField';
import { validateForm } from '../../data/formConfigs';

const DynamicForm = ({
  fields,
  onSubmit,
  submitText = 'Submit',
  loading = false,
  error = null,
  initialData = {},
  className = '',
  showPasswordStates = {},
  onPasswordToggle = () => {},
  children
}) => {
  const [formData, setFormData] = useState(() => {
    const initial = {};
    fields.forEach(field => {
      initial[field.name] = initialData[field.name] || 
        (field.type === 'checkbox' ? false : '');
    });
    return initial;
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(fields, formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`dynamic-form ${className}`}>
      {error && (
        <div className="error-message global-error">
          {error}
        </div>
      )}

      {fields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
          showPassword={showPasswordStates[field.name]}
          onPasswordToggle={() => onPasswordToggle(field.name)}
        />
      ))}

      {children}

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading-spinner"></span>
            Processing...
          </>
        ) : (
          submitText
        )}
      </button>
    </form>
  );
};

export default DynamicForm;
