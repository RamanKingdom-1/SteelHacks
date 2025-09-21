import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";

export default function MenuAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#CB997E" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{
              flexGrow: 1,

              fontWeight: 700,
            }}
          >
            TimeToTalent
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/res"
              sx={{
                fontSize: "1rem",
                minWidth: "auto",
              }}
            >
              <strong>Resume Builder</strong>
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/com"
              sx={{
                fontSize: isMobile ? "0.8rem" : "1rem",
                minWidth: "auto",
              }}
            >
              <strong>Community Events</strong>
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/job"
              sx={{
                fontSize: "1rem",
                minWidth: "auto",
              }}
            >
              <strong>Job Opportunities</strong>
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                fontSize: "1rem",
                minWidth: "auto",
              }}
            >
              <strong>About</strong>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}
