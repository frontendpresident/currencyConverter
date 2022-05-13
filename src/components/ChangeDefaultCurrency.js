import { Grid, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { RatesContext } from "../context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 80,
    },
  },
};

const ChangeDefaultCurrency = () => {
  const { defaultCurrency, ratesData, handleChangeDefaultCurrency } =
    useContext(RatesContext);

  return (
    <Box paddingRight={4} width={300}>
      <Grid container justifyContent="space-around" alignContent="center">
        <Typography
          variant="body1"
          align="center"
          paddingTop={1}
          className="default-currency"
        >
          Change default currency:
        </Typography>
        <Select
          onChange={(e) => handleChangeDefaultCurrency(e.target.value)}
          value={defaultCurrency}
          MenuProps={MenuProps}
          variant="standard"
        >
          {ratesData.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Box>
  );
};

export default ChangeDefaultCurrency;
