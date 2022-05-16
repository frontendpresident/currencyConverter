import { Grid } from "@mui/material";
import React from "react";

const Header = () => (
  <Grid
    container
    className="header-container"
    justifyContent="flex-start"
    alignItems="center"
  >
    <h1 style={{ color: "white", margin: 0 }}>Currency converter</h1>
  </Grid>
);

export default Header;
