"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Button } from "@mui/material";
import { useRouter } from "next-nprogress-bar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F0F5FF",
  "&:hover": {
    backgroundColor: "#F0F5FF",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  flexGrow: 1, // Let the search bar grow to fill available space
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#BABEC5",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  color: "#727579",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: "100%", // Ensure the input takes up the full width of the Search component
}));

export default function TopBar() {
  const router = useRouter();

  const handleLoginButton = () => {
    router.push("/login");
  };

  return (
    <Box sx={{overflowX: "hidden" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ color: "black" }}>
            LOGO
          </Typography>
          <div className="w-3/5 flex justify-center">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div className="flex justify-center items-center">
            <Button
              className="text-xs md:text-sm text-black hover:bg-[#07467E] hover:decoration-0 hover:text-white px-4 py-2 rounded-2xl"
              onClick={handleLoginButton}
            >
              <AccountCircleIcon className="mr-1" />
              Log In
            </Button>
            <Button
              className="text-xs h-10 border-t-4 border-t-[#23E5DB] ml-2 border-s-4 border-s-[#FFCE32] border-e-4 border-e-[#3A77FF] shadow-xl border-solid md:text-sm text-black bg-white px-4 py-2 rounded-2xl"
            >
              <StorefrontIcon className="mr-1" />
              Sell
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
