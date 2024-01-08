import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import {
  AddLink,
  Backspace,
  Clear,
  ClearAllOutlined,
  ClearOutlined,
  CloudUpload,
  Delete,
  UploadFile,
} from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Input, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { sendDataFromYT, sendInputURL, sendLoadingStatus, sendServiceError } from "store/utilitySlice";
import { AppDispatch, RootState } from "store/centralStore";
import { callYTAPIService } from "store/YTAPISlice";
import { resetImgReducerSlice, sendUserUploadedFile } from "store/imgReducerSlice";

const UploadImg = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputFileRef = useRef<any>();
  const getCentralFile = useSelector((state: RootState) => state.imgReducerSlice.file);

  const handleFileUpload = () => {
    const userUploadedFile = inputFileRef.current.files[0];

    const fileUploadObj = {
      inputFileUploaded: inputFileRef.current.files[0],
      fileURL: URL.createObjectURL(userUploadedFile),
      fileName: userUploadedFile.name,
      fileSize: userUploadedFile.size,
      fileType: userUploadedFile.type,
    };
    dispatch(sendUserUploadedFile(fileUploadObj));
  };

  const onClearBtnClickHandler = () => {
    const fileUploadObj = {
      fileURL: null,
      fileName: null,
      fileSize: null,
      fileType: null,
    };
    dispatch(sendUserUploadedFile(fileUploadObj));
    dispatch(resetImgReducerSlice(null));
  };

  return (
    <>
      <Box mt={8} mb={1} border={0} borderColor="white">
        <FormControl fullWidth sx={{ m: 1, color: "white" }}>
          <Stack direction={{ xs: "column", sm: "column", md: "row", lg: "row" }} spacing={2} width="100%">
            {getCentralFile.fileName !== null ? (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  component="label"
                  disableRipple
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    p: 1,
                    fontSize: "large",
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                >
                  {getCentralFile.fileName}
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    p: 1,
                    fontSize: "large",
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                  onClick={onClearBtnClickHandler}
                >
                  <IconButton>
                    <Clear />
                  </IconButton>
                </Button>
              </>
            ) : (
              <Button
                fullWidth
                variant="contained"
                component="label"
                startIcon={<UploadFile />}
                sx={{
                  bgcolor: "white",
                  color: "black",
                  p: 1,
                  fontSize: "large",
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                Upload Image
                <input type="file" accept="image" hidden ref={inputFileRef} onChange={handleFileUpload} />
              </Button>
            )}
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default UploadImg;
