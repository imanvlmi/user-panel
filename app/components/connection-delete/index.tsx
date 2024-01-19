import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { IConnectionDeleteProps } from "./types";

const ConnectionDelete = ({ handleDeleteModal }: IConnectionDeleteProps) => {
  return (
    <div className="p-12 rounded-xl bg-[#212B35] w-[500px] h-[300px] mr-auto ml-auto mt-[100px]">
      <Typography className="">آیا از تصمیم خود مطمئن هستید؟</Typography>
      <Typography className="mt-6">
        برای حذف مسیر ارتباطی facebook لطفا تایید را وارد نمایید.
      </Typography>
      <TextField
        id="outlined-basic"
        label="تایید"
        variant="outlined"
        fullWidth
        className="mt-6"
      />
      <div className="flex justify-end gap-2 mt-5">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleDeleteModal(false)}
          size="small"
        >
          انصراف
        </Button>
        <Button color="primary" variant="outlined" size="small">
          حذف
        </Button>
      </div>
    </div>
  );
};

export default ConnectionDelete;
