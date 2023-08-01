import React, { useState } from "react";
import List from "@mui/material/List";
import LeaderPlayer from "./LeaderPlayer.tsx";
import { User } from "../User/User.ts";
import Box from "@mui/material/Box";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface LeaderListProps {
  users: User[];
}

const LeaderList = ({ users }: LeaderListProps) => {
  const items: any = users.map((user, index: number) => {
    return <LeaderPlayer user={user} rank={index + 1} key={user.id} />;
  });
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minWidth: "70vw" }}
    >
      <h1 style={{ paddingTop: "50px" }}>
        LeaderBoard <EmojiEventsIcon />
      </h1>
      <List
        sx={{
          width: "100%",
          maxWidth: "50vw",
          bgcolor: "background.paper",
          overflow: "auto",
          margin: "auto auto",
          maxHeight: "50vh",
        }}
      >
        {items}
      </List>
    </Box>
  );
};

export default LeaderList;
