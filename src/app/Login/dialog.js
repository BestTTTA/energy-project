"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useDialog from "./useDialog";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Login from "../Login/login";
import signOut from "../auth/services/signOut";
export default function MaxWidthDialog() {
  const { open, handleClickOpen, handleClose } = useDialog();
  const { login } = Login();
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const signOutuser = () => {
    signOut();
    setUserEmail("");
    setUserImage("");
    setUserName("");
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("userImage");
    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");
    if (savedImage && savedName) {
      setUserImage(savedImage ?? "");
      setUserName(savedName ?? "");
      setUserEmail(savedEmail ?? "");
    }
  }, []);

  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClickOpen}
        color="inherit"
      >
        {userImage ? (
          <img
            src={userImage}
            alt=""
            height={30}
            width={30}
            className="rounded-full"
          />
        ) : (
          <img
            src="/png/user.png"
            alt=""
            height={30}
            width={30}
            className="rounded-full"
          />
        )}
      </IconButton>
      <Dialog
        sx={{ width: "100%" }}
        maxWidth="sm"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {userImage ? (
              <img
                src={userImage}
                alt=""
                height={100}
                width={100}
                className="rounded-full"
              />
            ) : (
              <img
                src="/png/user.png"
                alt=""
                height={100}
                width={100}
                className="rounded-full"
              />
            )}
            <Box className="flex flex-col items-start justify-start">
              <DialogContentText>Username: {userName}</DialogContentText>
              <DialogContentText>Gmail: {userEmail}</DialogContentText>
            </Box>
            <Box display="flex" flexDirection="row" gap="10px">
              <Image src="/png/google.png" alt="" height={10} width={25} />
              {userImage ? (
                <Link className="cursor-pointer" onClick={signOutuser}>Logout google</Link>
              ) : (
                <Link className="cursor-pointer" onClick={login}>Login with Google</Link>
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
