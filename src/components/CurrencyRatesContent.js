import React, { useState } from "react";
import CurrencyRate from "./CurrencyRate";
import usePagination from "../hooks/usePagination";
import { Grid, Pagination } from "@mui/material";

const CurrencyRatesContent = ({ data }) => {
  const [page, setPage] = useState(1);

  const pageSize = 13;
  const count = Math.ceil(data.length / pageSize);

  const ratesData = usePagination(data, pageSize);

  const handleChangePagination = (e, p) => {
    setPage(p);
    ratesData.jump(p);
  };

  return (
    <>
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
    </>
  );
};

export default CurrencyRatesContent;
