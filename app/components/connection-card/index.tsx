import { Button, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConnectionForm from "../connection-form";
import { IConnectionCardProps } from "./types";

const ConnectionCard = ({ handleDeleteModal }: IConnectionCardProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <Card className="border-none rounded-2xl bg-[#343D48] px-4 py-4">
        <Grid container>
          <Grid item xs={8}>
            <div className="flex justify-start gap-2 mt-2">
              <Typography>فیسبوک</Typography>
              <Typography className="text-sm">لینک : </Typography>
              <Link
                className="text-[#FF9E3E]"
                href={"https://google.com"}
                target="_blank"
              >
                https://google.com
              </Link>
            </div>
          </Grid>
          <Grid item xs={4} className="flex justify-end gap-2">
            <Button
              color="primary"
              variant="text"
              startIcon={<EditIcon className="rtl:ml-3 ltr:mr-2" />}
              onClick={() => setExpand(true)}
              disabled={expand}
            >
              ویرایش
            </Button>
            <Button
              color="error"
              variant="text"
              startIcon={<DeleteIcon className="rtl:ml-3 ltr:mr-2" />}
              onClick={() => handleDeleteModal(true)}
            >
              حذف
            </Button>
          </Grid>
        </Grid>
        <ConnectionForm
          expandStatus={expand}
          setExpand={setExpand}
          className="mt-4"
        />
      </Card>
    </div>
  );
};

export default ConnectionCard;
