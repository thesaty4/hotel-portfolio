import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function ContactUS() {
  const useForm = {
    name: "",
    email: "",
    message: "",
  };
  const [contactUsForm, setContact] = useState(useForm);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //
    console.log(contactUsForm);
    debugger;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={contactUsForm.name}
            onChange={(e) =>
              setContact({ ...contactUsForm, name: e.target.value })
            }
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={contactUsForm.email}
            onChange={(e) =>
              setContact({ ...contactUsForm, email: e.target.value })
            }
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={contactUsForm.message}
            onChange={(e) =>
              setContact({ ...contactUsForm, message: e.target.value })
            }
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
