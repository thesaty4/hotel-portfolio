import React from "react";
import useSnackbar from "../custom-hooks/Snackbar";

type WrappedComponentType = React.ComponentType<any>;

const withSnackbar = (WrappedComponent: WrappedComponentType) => {
  return (props: Record<string, any>) => {
    const { SnackbarComponent } = useSnackbar();
    return (
      <>
        <WrappedComponent {...props} />
        <SnackbarComponent />
      </>
    );
  };
};

export default withSnackbar;
