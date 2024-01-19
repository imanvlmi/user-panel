import { Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container className="mb-10">
      <Grid item xs={8}>
        <Typography variant="h1" className="text-base">
          تنظیمات کاربری
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <div></div>
      </Grid>
    </Grid>
  );
};

export default Header;
