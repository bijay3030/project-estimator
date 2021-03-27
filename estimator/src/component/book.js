import { useState } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    budget: 0,
    phonenumber: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleEstimate = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true)
  };

  return { handleChange, values, handleEstimate, errors };
};

export default useForm;