import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styles from "./yourpath.module.css";
function YourPath() {
  return (
    <div className={styles.container}>
      <h1>This is your path</h1>
      <div>
        <Grid container>
          <div className={styles.classflex}>
            <Box
              boxShadow={3}
              bgcolor="background.paper"
              m={10}
              p={5}
              style={{ width: "50rem", height: "3rem" }}
            >
              <h1> 1.Class 10th</h1>
            </Box>{" "}
          </div>
          <Box
            boxShadow={3}
            bgcolor="background.paper"
            m={10}
            p={5}
            style={{ width: "50rem", height: "3rem" }}
          >
            <h1>2. Class 12/science</h1>
          </Box>{" "}
          <br />
          <Box
            boxShadow={3}
            bgcolor="background.paper"
            m={10}
            p={5}
            style={{ width: "50rem", height: "3rem" }}
          >
            <h1>3. Bacheloer of Engineeering</h1>
          </Box>{" "}
          <br />
          <Box
            boxShadow={3}
            bgcolor="background.paper"
            m={10}
            p={5}
            style={{ width: "50rem", height: "3rem" }}
          >
            <h1>4.Mechanical Engineering</h1>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export { YourPath };
