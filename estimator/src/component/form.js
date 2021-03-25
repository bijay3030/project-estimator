import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useForm from './useForm';
import validate from './validateInfo';

const Form = () => {
  const { handleChange, values, handleEstimate, errors } = useForm(validate);
  const classes = useStyles();
  const [desktop, setDesktop] = useState();
  const [mobile, setMobile] = useState();
  const [other, setOther] = useState();
  const [frontend, setFrontend] = useState();
  const [backend, setBackend] = useState();
  const [design, setDesign] = useState();
  return (
    <div>
      <div>
        <h2>Fill the form and get an estimate. </h2>
      </div>

      <form onSubmit={handleEstimate}>
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
              name="budget" label="Budget" type="text" variant="outlined" margin="normal" value={values.budget}
              onChange={handleChange} />
            {errors.budget && <p>{errors.budget}</p>}
            <TextField
              name="description" label="Short Description of project " type="text" variant="outlined" margin="normal" value={values.description}
              onChange={handleChange} />
            {errors.description && <p>{errors.description}</p>}
            <button>Estimate </button>
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
    width: "50%",
  },
  formsection1: {
    display: "flex",
    justifyContent: "center",

  },
  name: {
    width: "47.65%",
    marginRight: "2%",

  },

  lastname: {
    width: "47.55%",
  }

}));

export default Form;