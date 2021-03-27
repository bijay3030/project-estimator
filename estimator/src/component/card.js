import React, { useState, useContext } from 'react';
import { Card } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import DesktopIcon from "../Assets/deskktop.png";
import MobileIcon from "../Assets/mobile.png";
import OtherIcon from "../Assets/other.png";
import { makeStyles } from '@material-ui/core/styles';
import FrontendIcon from "../Assets/front-end.png";
import BackendIcon from "../Assets/backenddd.png";
import DesignIcon from "../Assets/design.png";
import { DataContext } from '../Contexts/DataContext';


const Cardformat = () => {
  const classes = useStyles();
  const { setEstimate } = useContext(DataContext);
  const [price, setPrice] = useState({
    desktop: 10000,
    mobile: 8000,
    other: 5000,
    frontend: 8000,
    backend: 10000,
    design: 5000,
  });

  const handleEstimator = (e) => {
    setEstimate(prevState => prevState + parseInt(e.target.value, 10));

  };

  return (
    <div className={classes.root}>
      <div >
        <h1>Get an estimate</h1>
        <h5 className={classes.heading}>Fill out this simple form. Our team will contact you promptly to discussnext steps.
        </h5>
      </div>
      <div className={classes.cardSection}>
        <div>
          <h2>what is your device of your project?  </h2>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} name="desktop" value={price.desktop} onChange={handleEstimator} />
            <img src={DesktopIcon} alt="dsktop icon " />
            <h3>Desktop</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} name="mobile" value={price.mobile} onChange={handleEstimator} />
            <img src={MobileIcon} alt="mobile icon " />
            <h3>Mobile</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} name="other" value={price.other} onChange={handleEstimator} />
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
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} name="frontend" value={price.frontend} onChange={handleEstimator} />
            <img src={FrontendIcon} alt="dsktop icon " />
            <h3>Frontend</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} name="backend" value={price.backend} onChange={handleEstimator} />
            <img src={BackendIcon} alt="mobile icon " />
            <h3>Backend</h3>
          </Card>
        </div>
        <div className={classes.grid}>
          <Card variant="outlined">
            <Checkbox inputProps={{ 'aria-label': 'disabled checkbox' }} name="design" value={price.design} onChange={handleEstimator} />
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
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down('md')]: {
      gap: "20px",
      margin: "3%",
    },
  },

  cardSection2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down('md')]: {
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
  },
  heading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "20px"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "24px",
    },
  }
}));

export default Cardformat;