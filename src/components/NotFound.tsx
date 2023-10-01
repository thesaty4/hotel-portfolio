import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "40px",
          fontWeight: 900,
          textShadow: "0px 1px 1px black",
        }}
      >
        <span>404 Page Not Found</span>
      </Box>
    </>
  );
};

export default NotFound;
