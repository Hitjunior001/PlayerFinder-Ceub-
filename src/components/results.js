import React from "react";
import { Container, List, ListItem, Avatar, Typography } from "@mui/material";

export const ResultList = () => {
  const profiles = [
    {
      name: "John Doe",
      avatar: "https://avatars.githubusercontent.com/u/123456789?v=4",
      email: "johndoe@example.com",
      location: "São Paulo, Brasil",
    },
    {
      name: "Jane Doe",
      avatar: "https://avatars.githubusercontent.com/u/987654321?v=4",
      email: "janedoe@example.com",
      location: "Rio de Janeiro, Brasil",
    },
  ];

  return (
    <div className="results-container">
      <Container>
        <h2 style={{marginBottom:"3vh", marginTop:"0vh", borderBottom:"1px solid #9E9E9E"}}>Resultados</h2>
        <List>
          {profiles.map((profile) => (
            <ListItem key={profile.name}>
              <Avatar src={profile.avatar}/>
              <Typography>{profile.name}</Typography>
              <Typography>{profile.email}</Typography>
              <Typography>{profile.location}</Typography>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};