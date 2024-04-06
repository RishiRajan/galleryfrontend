import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const SpiderWarningDialog = ({ open, onClose }) => {
  const backdropStyle = {
    zIndex: 1500, // Ensure it's higher than the dialog
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(20, 20, 20, 0.699)", // Semi-transparent black color
    backdropFilter: "blur(5px)", // Adjust blur strength as needed
    display: open ? "block" : "none",
  };
  const buttonStyle = {
    color: "#416D19",
  };
  const handleClose = () => {
    onClose(false); // User declines warning
  };

  const handleAcknowledge = () => {
    onClose(true); // User acknowledges warning
  };

  return (
    <>
      <div style={backdropStyle}></div>
      <Dialog open={open} onClose={handleClose} style={{ zIndex: 1600 }}>
        <DialogTitle>Warning: </DialogTitle>
        <DialogContent>
          <DialogContentText>
            There are close-up shots of insects on this page that may distress
            some people.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Take me back
          </Button>
          <Button onClick={handleAcknowledge} style={buttonStyle}>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SpiderWarningDialog;
