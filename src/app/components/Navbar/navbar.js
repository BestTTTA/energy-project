"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { useNavbar } from "./useNavbar";
import Link from "next/link";
import Dialogshow from "../../Login/dialog";

export default function MenuAppBar() {
  const { auth, handleMenu } = useNavbar();

  return (
    <Box sx={{width:'100%' }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#212121", display: "flex" }}
      >
        <Toolbar>
          <Link href="/Home">
            <Image
              src="/logo.svg"
              alt=""
              height={50}
              width={50}
              className="mx-4"
            />
          </Link>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
            <ul style={{ listStyle: "none", display: "flex", padding: 0 }}>
              <li>
                <a href="/Home" className="text-white hover:text-blue-500 focus:text-blue-500 underline underline-offset-4">EN</a>
              </li>
              <li
                style={{
                  margin: "0 10px",
                  borderLeft: "1px solid white",
                  padding: "0 10px",
                }}
              >
                <a href="/Home" className="text-white  hover:text-blue-500 focus:text-blue-500 underline underline-offset-4">TH</a>
              </li>
            </ul>
          </Box>

          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            Thetigerteamacademy
          </Typography> */}
          {auth && (
            <div>
              {/* <AccountCircle /> */}
              <Dialogshow />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
