import React from "react";

import { Accordion, AccordionDetails, AccordionSummary, Divider, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const TableOfContents = (props) => {
  const { TableOfContentsList } = props;

  const onTreeClickHandler = (incomingId) => {
    const element = document.getElementById(incomingId);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    element.style.borderLeft = "6px solid rgb(36,180,179)";
    element.style.paddingLeft = "10px";
    element.style.backgroundColor = "rgb(225,255,255)";
    // Target the expanded View
    // const expandedItem = document.querySelector(".Mui-expanded");
    setTimeout(() => {
      element.style.borderLeft = "";
      element.style.paddingLeft = "";
      element.style.backgroundColor = "";
      // expandedItem.classList.remove("Mui-expanded");
    }, 3000);
  };

  return (
    <>
      <Box flexGrow={1} maxWidth={{ xs: "100%", sm: "50%", md: "50%", lg: "50%" }}>
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
              Table Of Contents
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ flexGrow: 1, overflowY: "auto" }}
            >
              {TableOfContentsList &&
                TableOfContentsList.map((singleItemList, index) => {
                  const { id, title, targetElement } = singleItemList;
                  return (
                    <Box key={index}>
                      <TreeItem nodeId={id} label={title} onClick={() => onTreeClickHandler(targetElement)} />
                    </Box>
                  );
                })}
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default TableOfContents;
