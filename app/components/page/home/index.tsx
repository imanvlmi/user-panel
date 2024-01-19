import { Button, Card, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ConnectionForm from "../../connection-form";
import ConnectionCard from "../../connection-card";
import ConnectionDelete from "../../connection-delete";
import AddIcon from "@mui/icons-material/Add";
import useGetUser from "@/hooks/query/user/use-get-user";

const HomePage = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const [deleteConnectionModal, setDeleteConnectionModal] =
    useState<boolean>(false);

  // user Api Call
  const { data: responseData, refetch } = useGetUser();

  return (
    <Card
      variant="outlined"
      className="border-none w-full min-h-[400px] rounded-2xl bg-[#212B35] p-4"
    >
      <div className="">
        <Typography className="text-gray-500">مسیرهای ارتباطی</Typography>
      </div>
      <Button
        color="primary"
        variant="text"
        startIcon={<AddIcon className="rtl:ml-3 ltr:mr-2" />}
        onClick={() => setExpand(true)}
        disabled={expand}
      >
        افزودن مسیر ارتباطی
      </Button>
      <ConnectionForm
        expandStatus={expand}
        setExpand={setExpand}
        className={"mb-4"}
      />
      <ConnectionCard handleDeleteModal={setDeleteConnectionModal} />
      <Modal
        open={deleteConnectionModal}
        onClose={() => setDeleteConnectionModal(false)}
      >
        <React.Fragment>
          <ConnectionDelete handleDeleteModal={setDeleteConnectionModal} />
        </React.Fragment>
      </Modal>
    </Card>
  );
};

export default HomePage;
