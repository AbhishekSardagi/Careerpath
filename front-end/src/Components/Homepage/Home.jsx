import { Box } from '@material-ui/core'
import React from 'react';
import styles from "./Home.module.css";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    aboutBox: {
        width: '70vw',
        margin: "10vh auto 5vh",
        padding: "2vw"
    },
    searchBox: {
        width: '70vw',
        margin: "auto",
        padding: "0.2vw",
        marginBottom: "5vh"
    },
    careerPathButtonsBox: {
        width: '70vw',
        margin: "auto",
        padding: "2vw",
        marginBottom: "5vh"
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
                            <img className={styles.aboutIMG} alt="career" src="./download.jfif" />
                        </div>

                        <div className={styles.content}>
                            <h3>Find the best educational path for YOU.</h3>
                            <h3>Know how to reach to your educational goals.</h3>
                        </div>

                    </div>
                </Box>
            </div>

            {/* <div>
                <Box className={classes.searchBox} boxShadow={3}>
                    <input className={styles.inputFieldClass} type="text" placeholder="What is your dream?" />
                    <button className={styles.inputButtonClass}>Search</button>
                </Box>
            </div> */}

            <div className={styles.current}>
                <h1>What are you currently studying?</h1>
            </div>

            <div>
                <Box className={classes.careerPathButtonsBox} boxShadow={3}>
                    <div className={styles.options}>
                        <Link to="/stageone">
                            <button className={styles.careerChoiceButtons} >Higher secondary Education(8th, 9th and 10th)</button>
                        </Link>
                        <button className={styles.careerChoiceButtons}>Intermediate Education(11th and 12th)</button>
                    </div>
                    {/* <button className={styles.careerChoiceButtons}>Pilot</button>
                    <button className={styles.careerChoiceButtons}>Fashion Designer</button> */}
                </Box>
            </div>
            {/* <div style={{ height: "500px" }}>

            </div> */}
        </div>
    )
}

export { Home }
