import { Divider, Grid, Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useState } from "react";
import CurrencyRate from "./CurrencyRate";
import usePagination from "./Pagination";

const CurrencyRatesContainer = ({ data }) => {
  const [page, setPage] = useState(1);

  const pageSize = 13;
  const count = Math.ceil(data.length / pageSize);

  const ratesData = usePagination(data, pageSize);

  const handleChangePagination = (e, p) => {
    setPage(p);
    ratesData.jump(p);
  };

  return (
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
      {ratesData.currentData().map((rate) => (
        <CurrencyRate key={rate.name} rate={rate} />
      ))}
      <Grid container justifyContent="center" marginTop={2}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          onChange={handleChangePagination}
        />
      </Grid>
    </Box>
  );
};

export default CurrencyRatesContainer;
