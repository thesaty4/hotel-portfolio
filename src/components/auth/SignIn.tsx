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
import useLogin from "../../custom-hooks/useLogin";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const { info, saveLogin } = useLogin();

  React.useEffect(() => {
    if (loading && isFormValid()) {
      const auth = new Auth();
      auth
        .login(loginInfo)
        .then((res) => {
          saveLogin(res);
          console.log(info);
          debugger;
          setLoading(false);
        })
        .catch((error) => {
          showSnackbar(error.toString(), "error");
          setLoading(false);
        });
    }
  }, [loading]);

  const isFormValid = () => {
    const isValid = Object.values(loginInfo).every((item) => item.length >= 1);
    if (!isValid) {
      showSnackbar("Please fix invalid fields !", "error");
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
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              aria-required
              value={loginInfo.email}
              onChange={(event) =>
                setLoginInfo({ ...loginInfo, email: event.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={loginInfo.password}
              onChange={(event) =>
                setLoginInfo({ ...loginInfo, password: event.target.value })
              }
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={() => setLoading(true)}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to={"/sign-up"}>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
