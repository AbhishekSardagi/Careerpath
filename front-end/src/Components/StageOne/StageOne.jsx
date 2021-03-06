import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import styles from "./stageone.module.css";
import { useDispatch } from "react-redux";
import { courseDetails } from "../../Redux/StageOne/action";
function StageOne() {
  const dispatch = useDispatch();
  const handleClick = (val) => {
    dispatch(courseDetails(val));
  };
  return (
    <div className={styles.cont}>
      <h1>WHICH STREAM ARE YOU INTERESTED IN?</h1>
      <Grid container>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "12rem", height: "12rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.freeiconspng.com/thumbs/science-icon/science-icon-4.png"
            alt="science"
          />{" "}
          <br />
          <Link
            onClick={() => handleClick("stage1s")}
            className={styles.mh3}
            to="/stageone/singlecourse"
          >
            Science
          </Link>
        </Box>
        <Box
          className={styles.a}
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "12rem", height: "12rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.kindpng.com/picc/m/465-4653491_international-e-commerce-e-commerce-icon-png-transparent.png"
            alt="commerce"
          />{" "}
          <br />
          <Link
            onClick={() => handleClick("stage1c")}
            className={styles.mh3}
            to="/stageone/singlecourse"
          >
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
          style={{ width: "12rem", height: "12rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://static.thenounproject.com/png/1248506-200.png"
            alt="Arts"
          />{" "}
          <br />
          <Link
            onClick={() => handleClick("stage1a")}
            className={styles.mh3}
            to="/stageone/singlecourse"
          >
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
          style={{ width: "12rem", height: "12rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="http://cdn.onlinewebfonts.com/svg/img_554175.png"
            alt="Diploma"
          />
          <br />
          <Link
            onClick={() => handleClick("stage1d")}
            className={styles.mh3}
            to="/stageone/singlecourse"
          >
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
          style={{ width: "12rem", height: "12rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.pngitem.com/pimgs/m/0-1566_tool-png-transparent-image-tools-black-and-white.png"
            alt="iti"
          />
          <br />
          <Link
            onClick={() => handleClick("stage1i")}
            className={styles.mh3}
            to="/stageone/singlecourse"
          >
            {" "}
            ITI
          </Link>
        </Box>
      </Grid>
    </div>
  );
}
export { StageOne };
