import { Box } from '@material-ui/core'
import React from 'react';
import styles from "./Home.module.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  aboutBox: {
    width: '70vw',
    margin:"auto",
    padding:"0.2vw",
    marginBottom:"5vh"
    
  },
  searchBox:{
    width: '70vw',
    margin:"auto",
    padding:"0.2vw",
    marginBottom:"5vh"
  },
  careerPathButtonsBox:{
    width: '70vw',
    margin:"auto",
    padding:"0.2vw",
    marginBottom:"5vh"
  }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={styles.aboutsectionMainClass}>
                <Box className={classes.aboutBox} boxShadow={3}>
                    <div className={styles.aboutSectionFlexClass}>
                        <div>
                            <img className={styles.aboutIMG} alt="career" src="./careerladder.jpg" />
                        </div>
                        
                        <div>
                            <h1>Find the best career path for YOU.</h1>
                            <h1>Know how to reach to your career goal </h1>
                        </div>
                        
                    </div>
                </Box>
            </div>

                <div>
                    <Box className={classes.searchBox} boxShadow={3}>
                        <input className={styles.inputFieldClass} type="text" placeholder="What is your dream?"  />
                        <button className={styles.inputButtonClass}>Search</button>
                    </Box>
                </div>

                <div>
                    <Box className={classes.careerPathButtonsBox} boxShadow={3}>
                        <button className={styles.careerChoiceButtons}>Engineer</button> <button className={styles.careerChoiceButtons}>Doctor</button>
                        <button className={styles.careerChoiceButtons}>Pilot</button> <button className={styles.careerChoiceButtons}>Fashion Designer</button>
                    </Box>
                </div>
                <div style={{height:"500px"}}>

                </div>
        </div>
    )
}

export {Home}
