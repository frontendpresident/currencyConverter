import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { RatesContext } from "../context";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";

const CurrencyRates = ({ rate }) => {
  const { setFavoriteCurrency } = useContext(RatesContext);

  const { name, id, value, favorites } = rate;

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className="rates-container"
      onClick={() => setFavoriteCurrency(id)}
    >
      <Box width={400}>
        <Grid container justifyContent="flex-start">
          <Grid xs={1} className="favorites-container">
            {favorites && <StarIcon className="favorites-icon" />}
          </Grid>
          <Grid xs={3}>
            <Typography variant="body1" className="rates-name" align="left">
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid>
        <Typography variant="body1" className="rates-name">
          {value.toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CurrencyRates;
