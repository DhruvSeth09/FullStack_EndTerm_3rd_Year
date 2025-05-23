// src/Components/Auth/Signup.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "./../../APIs/User";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    try{
      let result = await signUp({email, password });
      localStorage.setItem('token',result.data.token);
      localStorage.setItem('email',email);
      navigate("/");
    }
    catch(error){
      console.log('login failed',error);
      alert("SignUp Failed");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url('../bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          padding: 3,
          borderRadius: "12px",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Create an Account
          </Typography>
          <form>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignup}
              sx={{
                mt: 2,
                backgroundColor: "#2196f3",
              }}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Login
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Signup;
