// @ts-ignore
import React, { useState } from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LeaderList from "./LeaderList.tsx";
import { User } from "../User/User.ts";
import { MockUsers } from "../MockData/MockUsers.ts";

const LeaderboardPage = () => {
  const [users, setUsers] = useState<User[]>(MockUsers);
  return (
    <Container maxWidth={false} disableGutters style={{ height: "100vh" }}>
      <LeaderList users={users} />
    </Container>
  );
};

export default LeaderboardPage;
