import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useSnackbar from "../../custom-hooks/Snackbar";
import Auth from "./services/Auth";
import { UserType } from "./types/users.type";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [signUpData, setSingUp] = React.useState<UserType | null>();
  const [loading, setLoading] = React.useState(false);

  /**Api Calling */
  const auth = new Auth();
  const signUpUser = () => {
    signUpData &&
      auth
        .signUp(signUpData)
        .then((res) => {
          showSnackbar("User Created Successfully", "success");
          setSingUp(null);
          setLoading(false);
        })
        .catch((error) => {
          showSnackbar(error.toString(), "error");
          setSingUp(null);
          setLoading(false);
        });
  };

  /**Form Handling */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get("firstName")?.toString().trim(),
      secondName: data.get("lastName")?.toString().trim(),
      email: data.get("email")?.toString().trim(),
      password: data.get("password")?.toString().trim(),
    };
    if (
      formData.firstName?.length &&
      formData.email?.length &&
      formData.password?.length
    ) {
      setLoading(true);
      setSingUp(formData as UserType);
    } else {
      showSnackbar("Invalid form, Please Fix it", "warning");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarComponent />
      <Container
        component="main"
        maxWidth="xs"
        sx={{ transform: "translate(0,14%)", height: "100vh" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#d0a772;" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={signUpData?.firstName}
                  id="firstName"
                  label="First Name"
                  onChange={(e) =>
                    setSingUp({
                      ...signUpData,
                      firstName: e.target.value,
                    } as UserType)
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={signUpData?.secondName}
                  name="lastName"
                  onChange={(e) =>
                    setSingUp({
                      ...signUpData,
                      secondName: e.target.value,
                    } as UserType)
                  }
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  value={signUpData?.email}
                  label="Email Address"
                  name="email"
                  onChange={(e) =>
                    setSingUp({
                      ...signUpData,
                      email: e.target.value,
                    } as UserType)
                  }
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={signUpData?.password}
                  onChange={(e) =>
                    setSingUp({
                      ...signUpData,
                      password: e.target.value,
                    } as UserType)
                  }
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
