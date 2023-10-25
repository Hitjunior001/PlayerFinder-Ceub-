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
      <Container style={{maxWidth:"75vw"}}>
        <h2 style={{ marginBottom:"1vh", marginTop:"0vh" }}>Resultados</h2>
        <List style={{display:"flex", flexDirection:"column", alignItems:"center", height:"75vh", overflowY:"scroll", borderTop:"1px solid #9E9E9E", borderBottom:"1px solid #9E9E9E"}}>
          {profiles.map((profile) => (
            <ListItem key={profile.name} style={{ marginBottom:"1vh", marginTop:"1vh", width:"98%", height:"15vh", display:"flex", flexDirection:"row"}}>
              <Avatar src={profile.avatar} style={{ height:"75%", width:"auto", marginLeft:"1%", marginRight:"2%" }} />
              <div style={{ display:"flex", flexDirection:"column" }}>
                <Typography variant="h6">{profile.name}</Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.email}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.location}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};