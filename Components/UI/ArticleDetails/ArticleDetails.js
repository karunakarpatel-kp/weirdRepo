import React from "react";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subtitle from "../../Elements/Subtitle/Subtitle";

const ArticleDetails = (props) => {
  const { ArticleDetailsList } = props;
  return (
    <>
      <Box flexGrow={1} sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block" } }}>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: "#ececec",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
            float: "left",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="body2" p={0} sx={{ margin: "auto", fontSize: "medium", lineHeight: "1rem" }}>
              Article Details
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box border={0} pl={2}>
              {ArticleDetailsList.map((singleItemList, index) => {
                const { id, title } = singleItemList;
                return (
                  <span key={index}>
                    <Subtitle text={title} />
                    <Divider />
                  </span>
                );
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default ArticleDetails;
