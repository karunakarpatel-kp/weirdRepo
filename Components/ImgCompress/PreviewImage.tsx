import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import { Alert, AlertTitle, Box, Button, Grid, Slider, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { blobToURL, fromBlob } from "image-resize-compress";
import { sendReducedFile, sendSliderValue } from "store/imgReducerSlice";

function formatBytes(bytes: any) {
  var marker = 1024; // Change to 1000 if required
  var decimal = 3; // Change as required
  var kiloBytes = marker; // One Kilobyte is 1024 bytes
  var megaBytes = marker * marker; // One MB is 1024 KB
  var gigaBytes = marker * marker * marker; // One GB is 1024 MB

  // return bytes if less than a KB
  if (bytes < kiloBytes) return bytes + " Bytes";
  // return KB if less than a MB
  else if (bytes < megaBytes) return (bytes / kiloBytes).toFixed(decimal) + " KB";
  // return MB if less than a GB
  else if (bytes < gigaBytes) return (bytes / megaBytes).toFixed(decimal) + " MB";
  // return GB if less than a TB
  else return (bytes / gigaBytes).toFixed(decimal) + " GB";
}

function addSuffixToFileName(fileName: any, suffix: string) {
  // Split the file name and extension
  const parts = fileName.split(".");
  // Insert the suffix before the file extension
  const modifiedFileName = `${parts[0]}_${suffix}.${parts[1]}`;

  return modifiedFileName;
}

async function downloadImage(afterBlobURL: any, fileName: string) {
  try {
    // Fetch the Blob data using the Blob URL
    const response = await fetch(afterBlobURL);
    const blob = await response.blob();

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute with the Blob URL
    link.href = url;

    // Set the download attribute with the desired file name
    link.download = fileName;

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);

    // Revoke the Blob URL to free up resources
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading Blob:", error);
  }
}

const PreviewImage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getCentralFile = useSelector((state: RootState) => state.imgReducerSlice.file);
  const getCompressedFile = useSelector((state: RootState) => state.imgReducerSlice.compressedFile);
  const getCentralSliderValue = useSelector((state: RootState) => state.imgReducerSlice.sliderValue);
  const getCentralFileName = useSelector((state: RootState) => state.imgReducerSlice.file.fileName);

  useEffect(() => {
    console.log("REGENERATED");
    if (getCentralFile.fileURL !== null) {
      const response = fromBlob(
        getCentralFile.inputFileUploaded!,
        getCentralSliderValue,
        0,
        0,
        getCentralFile.fileType!
      )
        .then((data) => {
          const blobURL = URL.createObjectURL(data);
          const imageSize = data.size;
          const compressedOBJ = {
            fileSize: imageSize,
            fileURL: blobURL,
            fileType: data.type,
          };
          dispatch(sendReducedFile(compressedOBJ));
        })
        .catch((error) => console.log(error, "Error"));
    }
  }, [getCentralFile, dispatch, getCentralSliderValue]);

  const onSliderChangeHandler = (val: any) => {
    const getValue = val.target.value;
    dispatch(sendSliderValue(getValue));
  };

  const onAfterBtnClickHandler = async (afterBlobURL: any) => {
    downloadImage(afterBlobURL, addSuffixToFileName(getCentralFileName, "karunakarpatel.com"));
  };

  const onBeforeBtnClickHandler = async (beforeBlobURL: any) => {
    downloadImage(beforeBlobURL, addSuffixToFileName(getCentralFileName, "karunakarpatel.com"));
  };

  return (
    <>
      <Box p={{ xs: 1, sm: 1, md: 3, lg: 3 }}>
        <Alert severity="info" sx={{ mt: 3, width: { xs: 5 / 5, sm: 5 / 5, md: 3 / 5, lg: 3 / 5 }, margin: "auto" }}>
          <AlertTitle>Note</AlertTitle>
          Change the slider to get your desired compression
        </Alert>

        <Grid container border={0} mt={2}>
          <Grid item border={1} xs={12} sm={12} md={6} lg={6} borderColor="lightgrey">
            <Box textAlign="center" mt={1}>
              <HeadingThree id="three" title="Before" />
            </Box>
            <Box textAlign="center" display={{ xs: "none", sm: "none", md: "none", lg: "block" }}>
              {getCentralFile?.fileURL !== null && (
                <Image src={getCentralFile.fileURL!} width={500} height={330} alt="Before-reduced-image" />
              )}
            </Box>

            <Box textAlign="center" display={{ xs: "block", sm: "block", md: "block", lg: "none" }}>
              {getCentralFile?.fileURL !== null && (
                <Image src={getCentralFile.fileURL!} width={360} height={230} alt="Before-reduced-image" />
              )}
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
              border={0}
              display="flex"
              mt={2}
              p={1}
              spacing={2}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Alert severity={"success"}>
                  <AlertTitle>Size</AlertTitle>
                  {formatBytes(getCentralFile.fileSize)}
                </Alert>
                {/* <Paragraph>Has Video: {hasVideo ? "True" : "False"}</Paragraph> */}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Alert severity={"info"}>
                  <AlertTitle>Type</AlertTitle>
                  {getCentralFile.fileType}
                </Alert>
                {/* <Paragraph>Has Video: {hasVideo ? "True" : "False"}</Paragraph> */}
              </Box>
            </Stack>
            <Box textAlign="center">
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, mb: 2, width: 4 / 5 }}
                disableElevation
                onClick={() => onBeforeBtnClickHandler(getCentralFile.fileURL)}
              >
                Download Previous Image
              </Button>
            </Box>
          </Grid>
          {/* After */}
          <Grid item border={1} xs={12} sm={12} md={6} lg={6} borderColor="lightgrey">
            <Box textAlign="center" mt={1}>
              <HeadingThree id="three" title="After" />
            </Box>
            <Box textAlign="center" display={{ xs: "none", sm: "none", md: "none", lg: "block" }}>
              {getCompressedFile?.fileURL !== null && (
                <Image src={getCompressedFile.fileURL!} width={500} height={330} alt="Before-reduced-image" />
              )}
            </Box>

            <Box textAlign="center" display={{ xs: "block", sm: "block", md: "block", lg: "none" }}>
              {getCompressedFile?.fileURL !== null && (
                <Image src={getCompressedFile.fileURL!} width={360} height={230} alt="Before-reduced-image" />
              )}
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
              border={0}
              display="flex"
              mt={2}
              p={1}
              spacing={2}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Alert severity={"success"}>
                  <AlertTitle>Size</AlertTitle>
                  {formatBytes(getCompressedFile.fileSize)}
                </Alert>
                {/* <Paragraph>Has Video: {hasVideo ? "True" : "False"}</Paragraph> */}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Alert severity={"info"}>
                  <AlertTitle>Type</AlertTitle>
                  {getCompressedFile.fileType}
                </Alert>
                {/* <Paragraph>Has Video: {hasVideo ? "True" : "False"}</Paragraph> */}
              </Box>
            </Stack>
            <Box textAlign="center">
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, mb: 2, width: 4 / 5 }}
                disableElevation
                onClick={() => onAfterBtnClickHandler(getCompressedFile.fileURL)}
              >
                Download Compressed Image
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box p={3} sx={{ width: { xs: 5 / 5, sm: 5 / 5, md: 4.5 / 5, lg: 4.5 / 5 }, border: 0, margin: "auto" }}>
        <Stack direction="column">
          <Slider
            size="medium"
            aria-label="Small"
            valueLabelDisplay="on"
            min={1}
            value={getCentralSliderValue}
            onChange={(e) => onSliderChangeHandler(e)}
          />
        </Stack>

        <Stack direction="row" display="flex" flexWrap="wrap" spacing={2} mt={2}>
          <Box flexGrow={1}>
            <Alert severity="info">
              <AlertTitle>Original Size </AlertTitle>
              {formatBytes(getCentralFile.fileSize)}
            </Alert>
          </Box>
          <Box flexGrow={1}>
            <Alert>
              <AlertTitle>Reduced Size By</AlertTitle>
              {formatBytes(getCentralFile.fileSize - getCompressedFile.fileSize)}
            </Alert>
          </Box>
          <Box flexGrow={1}>
            <Alert severity="warning">
              <AlertTitle>Compressed Size</AlertTitle>
              {formatBytes(getCompressedFile.fileSize)}
            </Alert>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PreviewImage;
