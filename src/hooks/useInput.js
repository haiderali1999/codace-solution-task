import { useState } from "react";

const useInput = (initialValue = {}, validateFn) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (validateFn) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateFn(name, value), // Validate the specific field
      }));
    }
  };

  const reset = () => {
    setValues(initialValue);
    setErrors({});
  };

  const validateAll = () => {
    const _errors = {};
    let valid = true;
    for (let key in values) {
      _errors[key] = validateFn(key, values[key]);
    }
    for (let key in _errors) {
      if (_errors[key]) {
        valid = false;
        break;
      }
    }
    setErrors(_errors);
    return valid;
  };

  return {
    values,
    handleChange,
    reset,
    errors,
    validateAll,
    setValues,
  };
};

export default useInput;
