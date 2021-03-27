import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import validate from './validateInfo';
import { DataContext } from '../Contexts/DataContext';

const Form = () => {
  const classes = useStyles();
  const { budget, setBudget } = useContext(DataContext);
  const { estimate } = useContext(DataContext);
  const [values, setValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    budget: 0,
    phonenumber: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(0);

  const handleBudget = (e) => {
    setBudget((e.target.value));
  }

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
    console.log("hell0", budget);
    setIsSubmitting(budget - estimate);
  };

  return (
    <div>
      <div>
        <h2>Fill the form and get an estimate. </h2>
      </div>
      <form >
        <div className={classes.formsection1}>
          <div className={classes.formsection2}>
            <TextField required name="email" label="Email" type="email" variant="outlined" margin="normal"
              value={values.email}
              onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <Grid container item={true} direction="row" >
              <TextField className={classes.name}
                name="firstname" label="First Name" type="text" variant="outlined" margin="normal"
                value={values.firstname}
                onChange={handleChange} />{errors.firstname && <p>{errors.firstname}</p>}
              <TextField className={classes.name}
                name="lastname" label="Last Name" type="text" variant="outlined" margin="normal"
                value={values.lastname}
                onChange={handleChange} />
              {errors.lastname && <p>{errors.lastname}</p>}

            </Grid>
            <TextField name="phonenumber" label="Phone Number" type="tel" variant="outlined" margin="normal"
              value={values.phonenumber}
              onChange={handleChange} />
            {errors.phonenumber && <p>{errors.phonenumber}</p>}
            <TextField
              name="budget" label="Budget" type="text" variant="outlined" margin="normal" value={budget}
              onChange={handleBudget} />
            {errors.budget && <p>{errors.budget}</p>}
            <TextField
              name="description" label="Short Description of project " type="text" variant="outlined" margin="normal" value={values.description}
              onChange={handleChange} />
            {errors.description && <p>{errors.description}</p>}
            <button onClick={handleEstimate} className={classes.button} >Estimate </button>
            {Math.abs(isSubmitting) === 0 ? <p>Your estimation for the project is {estimate}</p> : <p> You are out of budget for this project </p>}
          </div>
        </div>
      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  formsection2: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      width: "auto",
      margin: "5%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "103%",
      margin: "5%",
    },
    [theme.breakpoints.up('md')]: {
      width: "65%",
      margin: "5%",
    },
  },
  formsection1: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },

  },
  name: {
    width: "47.99%",
    marginRight: "2%",
  },

  lastname: {
    width: "47.99%",
  },

  button: {
    [theme.breakpoints.down('sm')]: {
      width: "70%",
      margin: "auto",
    },
  }
}));

export default Form;