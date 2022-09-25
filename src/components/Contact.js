// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
   ListItem,
   Divider,
   ListItemAvatar,
   ListItemText,
   Avatar,
   Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
   // Contact berisi foto, nama, telepon, dan email
   return (
      <>
         <ListItem alignItems="center">
            <ListItemAvatar>
               <Avatar alt={data.name} src={data.photo} />
            </ListItemAvatar>
            <ListItemText
               primary={data.name}
               secondary={
                  <>
                     <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        gutterBottom
                     >
                        {data.phone}
                     </Typography>
                     <br />
                     {data.email}
                  </>
               }
            />
         </ListItem>
         <Divider variant="inset" component="li" />
      </>
   );
};

export default Contact;
