import React from 'react';
import { Card } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import DesktopIcon from "../Assets/deskktop.png";
import MobileIcon from "../Assets/mobile.png";
import OtherIcon from "../Assets/other.png";
import { makeStyles } from '@material-ui/core/styles';
import FrontendIcon from "../Assets/front-end.png";
import BackendIcon from "../Assets/backenddd.png";
import DesignIcon from "../Assets/design.png";

const Cardformat = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div >
        <h1>Get an estimate</h1>
        <h5>Fill out this simple form. Our team will contact you promptly to discuss      next steps.
        </h5>
      </div>
      <div className={classes.cardSection}>
        <div>
          <h2>what is your device of your project?  </h2>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <img src={DesktopIcon} alt="dsktop icon " />
            <h3>Desktop</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <img src={MobileIcon} alt="mobile icon " />
            <h3>Mobile</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <img src={OtherIcon} alt="other icons " />
            <h3>Other</h3>
          </Card>
        </div>
      </div>
      <div className={classes.cardSection2}>
        <div>
          <h2>what is your scope of your project?  </h2>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <img src={FrontendIcon} alt="dsktop icon " />
            <h3>Frontend</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <img src={BackendIcon} alt="mobile icon " />
            <h3>Backend</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <img src={DesignIcon} alt="other icons " />
            <h3>Design</h3>
          </Card>
        </div>
      </div>

    </div>
  )
};
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5%",
  },
  cardSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",

    [theme.breakpoints.down('sm')]: {

      flexDirection: "column",
    },
    [theme.breakpoints.down('md')]: {
      gap: "20px",
      margin: "3%",
      flexDirection: "row",
    },

  },

  cardSection2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: "row",
      gap: "20px",
      margin: "3%",
    },


  },
  grid: {
    width: "15.937rem",
    marginBottom: "2%",
    [theme.breakpoints.down('sm')]: {
      width: "21rem",
      marginLeft: "7%",
    },
    [theme.breakpoints.down('md')]: {
      width: "14rem",
    },
  }
}));

export default Cardformat;