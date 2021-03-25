export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = 'Firstname required';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'Lastname required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phonenumber) {
    errors.phonenumber = 'PhoneNumber required';
  }

  if (!values.budget) {
    errors.budget = 'Budget required';
  }

  if (!values.description) {
    errors.description = 'description required';
  }


  return errors;
}