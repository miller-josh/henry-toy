import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Tooltip,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import Logo from "../components/Logo";
import { login } from "../shared/authUtils";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const result = await login(userId);
    if (result) {
      navigate("/app");
    } else {
      setError("Invalid User ID. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Logo size="hero" />
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="User ID"
          name="userId"
          autoComplete="userId"
          autoFocus
          disabled={loading}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          error={!!error}
          helperText={error}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip
                  enterTouchDelay={0}
                  leaveTouchDelay={3000}
                  title={
                    <React.Fragment>
                      <Typography color="inherit">Sample Logins</Typography>
                      <li>
                        Client ID: <u>100101</u>
                      </li>
                      <li>
                        Provider ID: <u>200101</u>
                      </li>
                    </React.Fragment>
                  }
                >
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading || !userId}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
