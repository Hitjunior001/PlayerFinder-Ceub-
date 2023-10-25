import React from "react";
import { Container, List, ListItem, Avatar, Typography } from "@mui/material";

// Extract profile information from the image
const profiles = [
    {
      name: "Gustavo Erhardt dos Santos Passos",
      avatar: "https://avatars.githubusercontent.com/u/123456789?v=4",
      email: "gustavo.passos@example.com",
      location: "Brasília, DF",
      joinDate: "2023-09-25",
      age: 20,
      active: true,
      experience: "Júnior",
      workMode: "Remoto",
      primarySkill: "Java",
      secondarySkills: ["React"],
    },
  ];

export const ResultList = () => {
  return (
    <div className="results-container">
      <Container style={{maxWidth:"75vw"}}>
        <h2 style={{ marginBottom:"1vh", marginTop:"0vh" }}>Candidatos Filtrados</h2>

        <List style={{display:"flex", flexDirection:"column", alignItems:"center", maxHeight:"75vh", overflowY:"scroll", borderTop:"1px solid #9E9E9E", borderBottom:"1px solid #9E9E9E"}}>
          {profiles.map((profile) => (
            
            <ListItem key={profile.name} style={{ marginBottom:"1vh", marginTop:"1vh", width:"98%", height:"15vh", display:"flex", flexDirection:"row"}}>
            <Avatar src={profile.avatar} style={{ height:"75%", width:"auto", marginLeft:"1%", marginRight:"2%" }} />
            <div style={{ display:"flex", flexDirection:"column" }}>
              
              <div>  
                <Typography variant="h6">
                  {profile.name}
                </Typography>
              </div>
              
              <div style={{display:"flex", flexDirection:"row"}}>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.email}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.location}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.joinDate}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.age}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.active ? "Ativo" : "Inativo"}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.experience}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.workMode}
                </Typography>
              </div>

              <div style={{display:"flex", flexDirection:"row"}}>  
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.primarySkill}
                </Typography>
                <Typography variant="subtitle1" style={{ color:"#9E9E9E" }}>
                  {profile.secondarySkills.join(", ")}
                </Typography>
              </div>

            </div>
          </ListItem>
          
          ))}
        </List>
      </Container>
    </div>
  );
};