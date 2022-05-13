import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import React, { useContext, useState } from "react";
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

const ConvertInputs = ({ data }) => {
  const {
    getConvertValue,
    currencyValue2,
    currencyValue1,
    defaultCurrency,
    handleChangeCurrency,
  } = useContext(RatesContext);
  const [value, setValue] = useState(defaultCurrency);
  const [convertValue, setConvertValue] = useState("RUB");

  return (
    <Box marginTop={10}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        className="convert-inputs-container"
        direction="column"
      >
        <Box marginBottom={2}>
          <TextField
            label="Enter currency"
            onChange={(e) =>
              getConvertValue(e.target.value, value, convertValue, true)
            }
            value={currencyValue1}
          />
          <Select
            onChange={(e) => {
              setValue(e.target.value);
              handleChangeCurrency(e.target.value, convertValue, 1);
            }}
            value={value}
            MenuProps={MenuProps}
          >
            {data.map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <FlipCameraAndroidIcon className="convert-icon" />
        <Box marginTop={2}>
          <TextField
            label="Enter currency"
            onChange={(e) =>
              getConvertValue(e.target.value, value, convertValue)
            }
            value={currencyValue2}
          />
          <Select
            value={convertValue}
            onChange={(e) => {
              setConvertValue(e.target.value);
              handleChangeCurrency(e.target.value, value, 2);
            }}
            MenuProps={MenuProps}
          >
            {data.map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Grid>
    </Box>
  );
};

export default ConvertInputs;
