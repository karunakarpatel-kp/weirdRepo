import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HeadingSix from "@Components/Elements/Headings/HeadingSix";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { setOpenModal } from "store/utilitySlice";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { Close, CloseOutlined } from "@mui/icons-material";
import Image from "next/image";
import downlaodIMG from "@Public/download.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 1,
  minHeight: "300px",
  maxHeight: "85%",
  overflowY: "scroll",
};

const ModalContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const openModalStatus = useSelector((state: RootState) => state.utilitySlice.openModal);
  const getVideoURL = useSelector((state: RootState) => state.utilitySlice.videoURL);
  const [showMessage, setShowMessage] = React.useState<boolean>(false);

  const handleClose = () => {
    dispatch(setOpenModal(false));
  };

  const onCloseBtnClickHandler = () => {
    dispatch(setOpenModal(false));
  };

  const onDownloadClickHandler = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    if (openModalStatus) {
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  }, [openModalStatus]);

  return (
    <Modal
      open={openModalStatus}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

      // hideBackdrop
      // sx={{ width: 600 }}
    >
      <Box sx={style} width={{ xs: 380, sm: 350, md: 650, lg: 650 }}>
        <Button
          variant="contained"
          sx={{ position: "absolute", right: 10 }}
          onClick={onCloseBtnClickHandler}
          endIcon={<CloseOutlined />}
        >
          Close
        </Button>
        <HeadingSix title="Download the video " />
        <Box sx={{ textAlign: "center" }}>
          {/* Mobile Devices */}
          <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
            <iframe src={getVideoURL} width={350} height={250} allowFullScreen title="VideoURL" />
          </Box>

          {/* Desktop Devices */}
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            <iframe src={getVideoURL} width={600} height={300} allowFullScreen title="VideoURL" />
          </Box>

          {!showMessage && (
            <Button
              variant="contained"
              onClick={onDownloadClickHandler}
              sx={{ mt: 2, mb: 2, width: "70%" }}
              disableElevation
            >
              Download Video
            </Button>
          )}
        </Box>

        {showMessage && (
          <>
            <Alert severity="info">
              <AlertTitle>Click to start downloading</AlertTitle>
              Click on <strong>more icon</strong> in the iframe video and you can start downloading the full video.
              Please check the below image for reference.
            </Alert>
            <Box sx={{ textAlign: "center", margin: "auto" }}>
              <Image src={downlaodIMG} width={300} height={200} alt="download-image" />
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
