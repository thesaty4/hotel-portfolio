import { Alert, Box, Snackbar } from "@mui/material";
import { AlertType } from "../../types/common.type";
import React, { useEffect, useState } from "react";
import MuiAlert from "@mui/material/Alert";

interface AlertMsgType {
  errorType: AlertType;
  message: String;
  style?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
  };
}
const AlertMessage: React.FC<AlertMsgType> = ({
  errorType,
  message,
  style,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 4000); // Hide after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: style?.vertical ?? "top",
          horizontal: style?.horizontal ?? "right",
        }}
      >
        <MuiAlert onClose={() => setOpen(false)} severity={errorType}>
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
