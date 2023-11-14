import React from "react";
import { Container, List, ListItem, Avatar, Typography, Button, Stack } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const profiles = [
  {
    avatar: "https://avatars.githubusercontent.com/u/987654321?v=4",
    name: "Gustavo Erhardt dos Santos Passos",
    age: 20,
    email: "gustavoespassos@gmail.com",
    location: "Brasília, DF",
    joinDate: "25/09/2023",
    active: true,
    experience: "Júnior",
    workMode: "Remoto",
    primarySkill: "Java",
    secondarySkills: ["React", "Python"],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/123456789?v=4",
    name: "Reginaldo de Oliveira Júnior",
    age: 21,
    email: "juninhorf08@sempreceub.com",
    location: "Brasília, DF",
    joinDate: "24/08/2023",
    active: false,
    experience: "Pleno",
    workMode: "Presencial",
    primarySkill: "Java",
    secondarySkills: ["React", "C#"],
  },
];

const TechStyle = ({ tech }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      maxHeight: "1.5vh",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      background: "#c4c4c4",
      marginRight: "0.5vw",
    }}>
      <Typography variant="subtitle1" style={{ color: "#696969" }}>
        {tech}
      </Typography>
    </div>
  );
};

export const ResultList = () => {
  return (
    <div className="results-container">
      <Container style={{ maxWidth: "75vw" }}>
        <h2 style={{ marginBottom: "1vh", marginTop: "0vh" }}>Candidatos Filtrados</h2>

        <List style={{ display: "flex", flexDirection: "column", alignItems: "center", maxHeight: "75vh", overflowY: "scroll", borderTop: "1px solid #9E9E9E", borderBottom: "1px solid #9E9E9E" }}>
          {profiles.map((profile) => (

            <ListItem key={profile.name} style={{ marginBottom: "1vh", marginTop: "1vh", width: "98%", height: "15vh", display: "flex", flexDirection: "row" }}>
              <Avatar src={profile.avatar} style={{ height: "75%", width: "auto", marginLeft: "1%", marginRight: "2%" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="h6" style={{ marginRight: " 0.5vw" }}>
                    {profile.name},
                  </Typography>
                  <Typography variant="h6">
                    {profile.age}
                  </Typography>

                  <a href="Curriculo.pdf" download>
                    <Stack direction="row" spacing={2} style={{ position:"absolute", right:"1vw", top:"2vh" }} >
                      <Button variant="outlined" endIcon={<SimCardDownloadIcon />}>
                        Baixar currículo
                      </Button>
                    </Stack>
                  </a>
                
                </div>

                <div style={{ display: "flex", flexDirection: "row", color: "#9E9E9E", marginBottom: "1vh" }}>
                  <Typography variant="subtitle1" style={{ marginRight: "1.5vw" }}>
                    {profile.email}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginRight: "1.5vw" }}>
                    {profile.location}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginRight: "1.5vw" }}>
                    {profile.joinDate}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginRight: "1.5vw" }}>
                    {profile.active ? "Ativo" : "Inativo"}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginRight: "1.5vw" }}>
                    {profile.experience}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginRight: "1.5vw" }}>
                    {profile.workMode}
                  </Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subtitle1" style={{ marginRight: "0.5vw", textDecoration: "underline", color: "#696969" }}>Principal: </Typography>
                  <TechStyle tech={profile.primarySkill} />
                  <Typography variant="subtitle1" style={{ marginLeft: "2vw", marginRight: "0.5vw", textDecoration: "underline", color: "#696969" }}>Secundárias: </Typography>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {profile.secondarySkills.map((skill) => (
                      <TechStyle tech={skill} key={skill} />
                    ))}
                  </div>
                </div>

              </div>
            </ListItem>

          ))}
        </List>
      </Container>
    </div>
  );
};