// import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { User } from "../User/User.ts";

interface LeaderPlayerProp {
  user: User;
  rank: number;
}

const LeaderPlayer = ({ user, rank }: LeaderPlayerProp) => {
  return (
    <ListItem sx={{ border: "1px solid red", padding: "10px 10px" }}>
      <ListItemAvatar>
        <Avatar>
          <h3>{rank}</h3>
          {/*<ImageIcon />*/}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary="Jan 9, 2014" />
    </ListItem>
  );
};

export default LeaderPlayer;
