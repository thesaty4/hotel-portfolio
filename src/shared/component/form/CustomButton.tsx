import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
interface ButtonProps {
  props?: SxProps;
  label: String;
}
const CustomButton: React.FC<ButtonProps> = ({ props, label }) => {
  return (
    <>
      <Button type="submit" fullWidth variant="contained" sx={props}>
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
