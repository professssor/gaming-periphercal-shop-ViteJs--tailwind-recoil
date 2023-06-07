import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../State/AuthContext";
import { Toaster } from "react-hot-toast";
const Login = () => {
  const {
    setCredentials,
    email,
    setMail,
    setPassword,
    password,
    isAuth,
    setAuth,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isAuth ? (
        <Box
          sx={{
            overflowY: "hidden",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Toaster position="top-right" />
          <h1 style={{ textAlign: "center" }}>You are logged in</h1>
          {/* this removes the id from the localstorage of token */}
          <Button
            sx={{
              color: "red",
              width: "6rem",
              outline: "solid red 1px",
              alignSelf: "center",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              setAuth(false);
            }}
          >
            Logout
          </Button>
          {/* button to go back to shopping */}
          {/* <Link to="/">
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: "1rem",
                padding: "2rem",
                "&:hover": {
                  background: "none",
                  textDecoration: "underline",
                },
              }}
              type="text"
            >
              continue Shopping
            </Button>
          </Link> */}
        </Box>
      ) : (
        <Box
          sx={{
            height: "100vh",
            padding: "5rem",
            color: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ padding: "2rem" }}>
            Login
          </Typography>
          <TextField
            onChange={(e) => setMail(e.target.value)}
            label="Email"
            type="email"
            value={email}
            sx={{ marginBottom: "10px", width: "20rem" }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type={showPassword ? "text" : "password"}
            sx={{ marginBottom: "20px", width: "20rem" }}
            InputProps={{
              endAdornment: (
                <React.Fragment>
                  {showPassword ? (
                    <VisibilityOff
                      onClick={toggleShowPassword}
                      sx={{ cursor: "pointer" }}
                    />
                  ) : (
                    <Visibility
                      onClick={toggleShowPassword}
                      sx={{ cursor: "pointer" }}
                    />
                  )}
                </React.Fragment>
              ),
            }}
          />
          <Box sx={{ display: "flex" }}>
            <Button
              value="login"
              onClick={(e) => {
                setCredentials(e);
                isAuth && navigate("/");
              }}
              variant="contained"
              sx={{
                marginRight: ".4rem",
                color: "white",
                marginBottom: "10px",
                background: "#df2e38",
                "&:hover": {
                  background: "white",
                  color: "red",
                },
              }}
            >
              Login
            </Button>
            <Button
              value="Test User"
              onClick={(e) => {
                setCredentials(e);
                isAuth && navigate("/");
              }}
              variant="contained"
              sx={{
                marginLeft: ".4rem",
                color: "white",
                marginBottom: "10px",
                background: "#df2e38",
                "&:hover": {
                  background: "white",
                  color: "red",
                },
              }}
            >
              Dummy
            </Button>
          </Box>
          <Link
            component={RouterLink}
            to="/signin"
            sx={{
              color: "red",
              textDecoration: "none",
              fontSize: "1rem",
              padding: "1rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            New to website ? Sign In
          </Link>
        </Box>
      )}
    </>
  );
};

export default Login;
