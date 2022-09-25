// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import { Typography } from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
   return (
      <header>
         <Typography variant="h4" gutterBottom>
            Call a Friend
         </Typography>
         <Typography variant="h5" gutterBottom>
            Your friendly contact app
         </Typography>
      </header>
   );
};

export default Header;
