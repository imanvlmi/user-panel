import {
  Button,
  Card,
  Collapse,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useState } from "react";
import { IConnectionFormProps } from "./types";

const ConnectionForm = ({
  expandStatus,
  setExpand,
  className,
}: IConnectionFormProps) => {
  const [age, setAge] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // rtl function
  const rtlCache = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  // ltr function
  const ltrCache = createCache({
    key: "mui",
  });

  return (
    <Collapse in={expandStatus}>
      <Card className={`border-none rounded-lg bg-[#3E4751] p-4 ${className}`}>
        <Typography className="mb-7">ویرایش مسیر ارتباطی</Typography>
        <CacheProvider value={rtlCache}>
          <FormControl fullWidth>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <InputLabel id="connection-type">نوع</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="connection-type"
                  label="Age"
                  name="type"
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value={"twitter"}>توئیتر</MenuItem>
                  <MenuItem value={"instagram"}>اینستاگرام</MenuItem>
                  <MenuItem value={"facebook"}>فیسبوک</MenuItem>
                  <MenuItem value={"telegram"}>تلگرام</MenuItem>
                  <MenuItem value={"linkedin"}>لینکدین</MenuItem>
                  <MenuItem value={"site"}>وب‌سایت</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="لینک"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className="flex justify-end gap-2 mt-5">
              <Button
                color="primary"
                variant="outlined"
                onClick={() => setExpand(false)}
              >
                انصراف
              </Button>
              <Button color="primary" variant="outlined">
                ثبت مسیر سفارش
              </Button>
            </div>
          </FormControl>
        </CacheProvider>
      </Card>
    </Collapse>
  );
};

export default ConnectionForm;
