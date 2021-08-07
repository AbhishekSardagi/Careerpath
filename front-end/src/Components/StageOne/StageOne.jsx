import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import styles from "./stageone.module.css";
function StageOne() {
  return (
    <div className={styles.cont}>
      <h1>WHAT IS YOUR YOUR STREAM?</h1>
      <Grid container>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.freeiconspng.com/thumbs/science-icon/science-icon-4.png"
            alt="science"
          />{" "}
          <br />
          <Link className={styles.mh3} to="/stageone/singlecourse">
            Science
          </Link>
        </Box>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.kindpng.com/picc/m/465-4653491_international-e-commerce-e-commerce-icon-png-transparent.png"
            alt="commerce"
          />{" "}
          <br />
          <Link className={styles.mh3} to="/stageone/singlecourse">
            {" "}
            Commerce
          </Link>
        </Box>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://static.thenounproject.com/png/1248506-200.png"
            alt="Arts"
          />{" "}
          <br />
          <Link className={styles.mh3} to="/stageone/singlecourse">
            {" "}
            Arts
          </Link>
        </Box>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="http://cdn.onlinewebfonts.com/svg/img_554175.png"
            alt="Diploma"
          />
          <br />
          <Link className={styles.mh3} to="/stageone/singlecourse">
            {" "}
            Diploma
          </Link>
        </Box>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.pngitem.com/pimgs/m/0-1566_tool-png-transparent-image-tools-black-and-white.png"
            alt="iti"
          />
          <br />
          <Link className={styles.mh3} to="/stageone/singlecourse">
            {" "}
            ITI
          </Link>
        </Box>
      </Grid>
    </div>
  );
}
export { StageOne };
