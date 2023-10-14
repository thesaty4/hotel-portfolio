import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useSnackbar from "../../custom-hooks/Snackbar";
import Auth from "./services/Auth";
import { UserType } from "./types/users.type";

const defaultForm = {
  firstName: "",
  secondName: "",
  email: "",
  password: "",
};
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [signUpForm, setSignUpForm] = React.useState<UserType>(defaultForm);
  const [loading, setLoading] = React.useState(false);

  /**Api Calling */
  React.useEffect(() => {
    if (loading && isFormValid()) {
      const auth = new Auth();
      auth
        .signUp(signUpForm)
        .then((res) => {
          showSnackbar("User Created Successfully", "success");
          setSignUpForm(defaultForm);
          setLoading(false);
        })
        .catch((error) => {
          showSnackbar(error.toString(), "error");
          setLoading(false);
        });
    }
  }, [loading]);

  const isFormValid = () => {
    const isValid = Object.values(signUpForm)?.every(
      (item) => item.length >= 1
    );
    if (!isValid) {
      showSnackbar("All field required, please fix the form !", "error");
      setLoading(false);
    }
    return isValid;
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
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={signUpForm?.firstName}
                  id="firstName"
                  label="First Name"
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
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
                  value={signUpForm?.secondName}
                  name="lastName"
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
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
                  value={signUpForm?.email}
                  label="Email Address"
                  name="email"
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
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
                  value={signUpForm?.password}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
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
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setLoading(true)}
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
