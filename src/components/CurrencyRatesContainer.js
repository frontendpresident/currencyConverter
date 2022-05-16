import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React from "react";
import CurrencyRatesContent from "./CurrencyRatesContent";

const CurrencyRatesContainer = ({ data }) => (
  <Box marginTop={4}>
    <Box marginBottom={4}>
      <Box paddingLeft={2}>
        <Typography variant="body1" align="left">
          {moment(new Date()).format("DD MMM, YYYY")}
        </Typography>

        <Typography variant="h4" align="left">
          1 USD equals:
        </Typography>
      </Box>

      <Divider />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="rates-head"
      >
        <Grid>
          <Typography variant="body1">Currency name</Typography>
        </Grid>

        <Grid>
          <Typography variant="body1">Value</Typography>
        </Grid>
      </Grid>
    </Box>
    <CurrencyRatesContent data={data} />
  </Box>
);

export default CurrencyRatesContainer;
