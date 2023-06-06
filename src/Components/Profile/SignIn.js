import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../State/AuthContext";
import Login from "./Login";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, email, password, setMail, setPassword } = useAuth();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
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
      <Toaster />
      <Typography variant="h5" sx={{ padding: "2rem" }}>
        Sign In
      </Typography>
      <TextField
        onChange={(e) => setMail(e.target.value)}
        label="Email"
        type="email"
        sx={{ marginBottom: "10px", width: "20rem" }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        type={showPassword ? "password" : "text"}
        sx={{ marginBottom: "20px", width: "20rem" }}
        InputProps={{
          endAdornment: showPassword ? (
            <VisibilityOff
              onClick={toggleShowPassword}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <Visibility
              onClick={toggleShowPassword}
              sx={{ cursor: "pointer" }}
            />
          ),
        }}
      />
      <Button
        onClick={(e) => registerUser(e)}
        variant="contained"
        sx={{
          color: "white",
          marginBottom: "10px",
          background: "#df2e38",
          "&:hover": {
            background: "white",
            color: "red",
          },
        }}
      >
        Sign In
      </Button>
      <Link
        component={RouterLink}
        to="/login"
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
        Already have an account? Login
      </Link>
    </Box>
  );
};

export default Signin;
