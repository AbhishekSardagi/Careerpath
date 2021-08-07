import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AirplayIcon from "@material-ui/icons/Airplay";
import FlightIcon from "@material-ui/icons/Flight";
import GavelIcon from "@material-ui/icons/Gavel";
import { Link } from "react-router-dom";
function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <AirplayIcon style={{ fontSize: 100 }} /> <br />
          <Link to="/searchpage/singlecourse">Engineering</Link>
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <FlightIcon style={{ fontSize: 100 }} /> <br />
          Aviation
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <GavelIcon style={{ fontSize: 100 }} /> <br />
          Law
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "100px" }}
            src="https://www.freeiconspng.com/uploads/doctor-icon-png-24.png"
          />
          <br />
          Doctor
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "230px", marginLeft: "-35px" }}
            src="data:image/png;base64,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"
          />
          Fasion Designing
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "150px" }}
            src="https://image.flaticon.com/icons/png/512/57/57589.png"
          />
          <br />
          Commerce
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "150px" }}
            src="https://static.thenounproject.com/png/4221-200.png"
          />
          <br />
          Agriculture
        </Box>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={5}
          p={5}
          style={{ width: "10rem", height: "10rem" }}
        >
          <img
            style={{ width: "150px" }}
            src="https://image.flaticon.com/icons/png/512/61/61259.png"
          />
          <br />
          Hotel Management
        </Box>
      </Grid>
    </div>
  );
}

export { SearchPage };
