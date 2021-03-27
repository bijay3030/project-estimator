export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = 'Firstname required';
  }

  if (!values.lastname) {
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



  if (!values.description) {
    errors.description = 'description required';
  }


  return errors;
}