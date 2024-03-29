import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

// import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (
    event
    ) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    var mail = new FormData(document.getElementById("email"));
    var pass = new FormData(document.getElementById("password"));
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    // Axios.get("http://localhost:3001/login").then((res) => {
    //   console.log("data --> " + res.data[0]);
    // });
      console.log(" --> "+event.currentTarget)
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // var email = data.get("email");
      // console.log("email --> "+email+"\n");
      for (let i = 0; i < response.data.length; i++) {
<<<<<<< HEAD
        if (response.data[i].email === mail) {
          console.log("data email --> "+response.data[i].email+"\n");
=======
        if (response.data[i].email === email) {
>>>>>>> 16ca9c2ef7ed94cb7f1df791a9a0b6862843bcbd
          navigate("/");
          break;
        } else {
          alert("account doesnt exists with this mail");
        }
      }
    });

    // navigate("/home");
  };
  // const navigate = useNavigate();
  // const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={
                  // () => {
                  //   var flag = true;
                  //   if (flag) navigate("/home");
                  //   else {
                  //     console.error("Incorrect details");
                  //   }
                  // }
                  // login

                  (
                    event
                    ) => {
                    event.preventDefault();
                    //console.log(event.currentTarget)
                    //const data = new FormData(event.currentTarget);
                    var mail = document.getElementById("email").value;
                    var pass = document.getElementById("password").value;
                    // console.log({
                    //   email: data.get("email"),
                    //   password: data.get("password"),
                    // });
                    // Axios.get("http://localhost:3001/login").then((res) => {
                    //   console.log("data --> " + res.data[0]);
                    // });
                     // console.log("data -->  "+data)
                    Axios.post("http://localhost:3001/login", {
                      email: email,
                      password: password,
                    }).then((response) => {
                      // var email = data.get("email");
                      // console.log("email --> "+email+"\n");
                      for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].email === mail) {
                          console.log("data email --> "+response.data[i].email+"\n");
                          navigate("/");
                          break;
                        } else {
                          alert("account doesnt exists with this mail");
                        }
                      }
                    });
                  }
                }
                // onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={
                  () => {
                    var flag = true;
                    if (flag) navigate("/adminhome");
                    else {
                      console.error("Incorrect details");
                    }
                  }
                  // login
                
              }
              >
                Sign In As ADMIN
              </Button>
              {/* <Link to="/home">Sign In</Link> */}
              <Grid container>
                <Grid item xs>
                  <Link href="/forget" variant="body2">
                    Forgot password?
                  </Link>
                  {/* <Link to="/forget">Forgot password?</Link> */}
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  {/* <Link to="/signup">{"Don't have an account? Sign Up"}</Link> */}
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
