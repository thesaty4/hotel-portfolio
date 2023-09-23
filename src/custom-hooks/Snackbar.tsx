import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type AlertSeverity = "error" | "warning" | "info" | "success";

interface SnackbarProps {
  open?: boolean;
  message?: string;
  errorType?: AlertSeverity;
  style?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
  };
  onClose?: () => void;
}

const useSnackbar = (): {
  showSnackbar: (message: string, type?: AlertSeverity) => void;
  SnackbarComponent: React.FC<SnackbarProps>;
} => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [errorType, setErrorType] = useState<AlertSeverity>("success"); // Default to 'info'

  const showSnackbar = (msg: string, type: AlertSeverity = "success"): void => {
    setMessage(msg);
    setErrorType(type);
    setOpen(true);
  };

  const hideSnackbar = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 4000); // Hide after 4 seconds
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [open]);

  const SnackbarComponent: React.FC<SnackbarProps> = ({ style }) => (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={hideSnackbar}
      anchorOrigin={{
        vertical: style?.vertical ?? "top",
        horizontal: style?.horizontal ?? "right",
      }}
    >
      <MuiAlert onClose={hideSnackbar} severity={errorType}>
        {message}
      </MuiAlert>
    </Snackbar>
  );

  return {
    showSnackbar,
    SnackbarComponent,
  };
};

export default useSnackbar;
