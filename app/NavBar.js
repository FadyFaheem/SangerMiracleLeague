import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "./NavBar.module.css";
import Image from "next/image";
import miracleLeagueLogo from "../public/Banner.png";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={styles.box1}>
        <Image
          className={styles.logo}
          src={miracleLeagueLogo}
          alt=""
          height={260}
        />
      </div>
      <div className={styles.box2}>
        <Image
          className={styles.logo2}
          src={miracleLeagueLogo}
          alt=""
          height={260}
        />
        <div className={styles.buttonDiv}>
          <Button variant="secondary">Home</Button>
          <Button variant="secondary">About</Button>
          <Button variant="secondary">News</Button>
          <Button variant="secondary">Schedule</Button>
          <Button variant="secondary">Registeration</Button>
          <Button variant="secondary">Media</Button>
          <Button variant="secondary">Gallery</Button>
          <Button variant="secondary">Contact</Button>
        </div>
      </div>
    </Box>
  );
}
