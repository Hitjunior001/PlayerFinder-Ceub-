import React, { useState } from 'react';
import { Box, Drawer, Button, List, ListItem, ListItemText, Divider, Typography, TextField,
  FormControl, FormControlLabel, InputLabel, Select, MenuItem, RadioGroup, Radio } from '@mui/material';

export default function FilterDrawer() {
  const [open, setOpen] = React.useState(false);

  const [usuario_tag, setUsuario_tag] = useState("");
  const [funcao, setFuncao] = useState("");
  const [campeao, setCampeao] = useState("");
  const [rank, setRank] = useState("");
  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChangeFuncao = (event) => {
    setFuncao(event.target.value);
  };
  const handleChangeCampeao = (event) => {
    setCampeao(event.target.value);
  };
  const handleChangeRank = (event) => {
    setRank(event.target.value);
  };
  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  const DrawerList = (
    <Box sx={{ width: '30vw' }} role="presentation">
      <List sx={{paddingTop: '3vh'}}>
        <ListItemText sx={{textAlign: 'center', marginBottom: '3vh'}}>
           <Typography sx={{fontSize: '30px'}}>
              Filtros
            </Typography>
            <Divider sx={{ marginLeft: '4.5vw', marginRight: '4.5vw', bgcolor: '#16C83D'}}/>
        </ListItemText>

        <ListItem sx={{ marginBottom: '3vh'}}>
          <ListItemText sx={{ textAlign: 'start', marginLeft: '1vw' }} primary={"Username: "} />
          <TextField autoFocus fullWidth label="Username & Tag" value={usuario_tag} onChange={(e) => [setUsuario_tag(e.target.value)]} sx={{ marginLeft: '1vw' , marginRight: '2vw', maxWidth: '70%'}} />
        </ListItem>

        <ListItem sx={{ marginBottom: '3vh'}}>
          <ListItemText sx={{ textAlign: 'start', marginLeft: '1vw' }} primary={"Função: "} />
          <FormControl fullWidth sx={{ marginLeft: '1vw' , marginRight: '2vw', maxWidth: '70%'}}>
              <InputLabel id="label-select-input">Função *</InputLabel>
              <Select
                required
                labelId="label-select-input"
                label="Função"
                value={funcao}
                onChange={handleChangeFuncao}
              >
                <MenuItem value={"duelista"}> Duelista </MenuItem>
                <MenuItem value={"smoke"}> Smoke </MenuItem>
                <MenuItem value={"controlador"}> Controlador </MenuItem>
                <MenuItem value={"sentinela"}> Sentinela </MenuItem>
                <MenuItem value={"iniciador"}> Iniciador </MenuItem>
              </Select>
            </FormControl>
        </ListItem>
        
        <ListItem sx={{ marginBottom: '3vh'}}>
          <ListItemText sx={{ textAlign: 'start', marginLeft: '1vw' }} primary={"Rank: "} />
          <FormControl fullWidth sx={{ marginLeft: '1vw' , marginRight: '2vw', maxWidth: '70%'}}>
            <InputLabel id="label-select-input">Rank *</InputLabel>
            <Select
              required
              labelId="label-select-input"
              label="Rank"
              value={rank}
              onChange={handleChangeRank}
            >
              <MenuItem value={"ferro 1"}>Ferro 1</MenuItem>
              <MenuItem value={"ferro 2"}>Ferro 2</MenuItem>
              <MenuItem value={"ferro 3"}>Ferro 3</MenuItem>
              <MenuItem value={"ferro 4"}>Ferro 4</MenuItem>
              <Divider />
              <MenuItem value={"bronze 1"}>Bronze 1</MenuItem>
              <MenuItem value={"bronze 2"}>Bronze 2</MenuItem>
              <MenuItem value={"bronze 3"}>Bronze 3</MenuItem>
              <MenuItem value={"bronze 4"}>Bronze 4</MenuItem>
              <Divider />
              <MenuItem value={"prata 1"}>Prata 1</MenuItem>
              <MenuItem value={"prata 2"}>Prata 2</MenuItem>
              <MenuItem value={"prata 3"}>Prata 3</MenuItem>
              <MenuItem value={"prata 4"}>Prata 4</MenuItem>
              <Divider />
              <MenuItem value={"ouro 1"}>Ouro 1</MenuItem>
              <MenuItem value={"ouro 2"}>Ouro 2</MenuItem>
              <MenuItem value={"ouro 3"}>Ouro 3</MenuItem>
              <MenuItem value={"ouro 4"}>Ouro 4</MenuItem>
              <Divider />
              <MenuItem value={"platina 1"}>Platina 1</MenuItem>
              <MenuItem value={"platina 2"}>Platina 2</MenuItem>
              <MenuItem value={"platina 3"}>Platina 3</MenuItem>
              <MenuItem value={"platina 4"}>Platina 4</MenuItem>
              <Divider />
              <MenuItem value={"diamante 1"}>Diamante 1</MenuItem>
              <MenuItem value={"diamante 2"}>Diamante 2</MenuItem>
              <MenuItem value={"diamante 3"}>Diamante 3</MenuItem>
              <MenuItem value={"diamante 4"}>Diamante 4</MenuItem>
              <Divider />
              <MenuItem value={"imortal 1"}>Imortal 1</MenuItem>
              <MenuItem value={"imortal 2"}>Imortal 2</MenuItem>
              <MenuItem value={"imortal 3"}>Imortal 3</MenuItem>
              <Divider />
              <MenuItem value={"radiante"}>Radiante</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        
        <ListItem sx={{ marginBottom: '1vh'}}>
          <ListItemText sx={{ textAlign: 'start', marginLeft: '1vw' }} primary={"Campeão: "} />
          <FormControl fullWidth sx={{ marginLeft: '1vw' , marginRight: '2vw', maxWidth: '70%'}}>
            <InputLabel id="label-select-input">Campeão *</InputLabel>
            <Select
              required
              labelId="label-select-input"
              label="Campeão"
              value={campeao}
              onChange={handleChangeCampeao}
            >
              <MenuItem value={"jett"}>Jett</MenuItem>
              <MenuItem value={"phoenix"}>Phoenix</MenuItem>
              <MenuItem value={"raze"}>Raze</MenuItem>
              <MenuItem value={"reyna"}>Reyna</MenuItem>
              <MenuItem value={"yoru"}>Yoru</MenuItem>
              <MenuItem value={"killjoy"}>Killjoy</MenuItem>
              <MenuItem value={"cypher"}>Cypher</MenuItem>
              <MenuItem value={"sage"}>Sage</MenuItem>
              <MenuItem value={"brimstone"}>Brimstone</MenuItem>
              <MenuItem value={"omen"}>Omen</MenuItem>
              <MenuItem value={"viper"}>Viper</MenuItem>
              <MenuItem value={"astra"}>Astra</MenuItem>
              <MenuItem value={"breach"}>Breach</MenuItem>
              <MenuItem value={"skye"}>Skye</MenuItem>
              <MenuItem value={"sova"}>Sova</MenuItem>
              <MenuItem value={"kayo"}>KAY/O</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItemText sx={{textAlign: 'center', marginBottom: '3vh'}}>
           <Typography sx={{fontSize: '24px'}}>
              Mais filtros
            </Typography>
            <Divider sx={{ marginLeft: '4.5vw', marginRight: '4.5vw', bgcolor: '#16C83D'}}/>
        </ListItemText>

        <ListItem sx={{ marginBottom: '1.5vh'}}>
          <ListItemText sx={{ textAlign: 'start', marginLeft: '1vw' }} primary={"Estado: "} />
          <FormControl fullWidth sx={{ marginLeft: '1vw' , marginRight: '2vw', maxWidth: '70%'}}>
            <InputLabel id="label-select-input">Estado *</InputLabel>
            <Select
              labelId="label-select-input"
              value={estado}
              label="Estado *"
              onChange={handleChange}
            >
              <MenuItem value={"AC - Acre"}> AC - Acre</MenuItem>
              <MenuItem value={"AL - Alagoas"}> AL - Alagoas</MenuItem>
              <MenuItem value={"AP - Amapá"}> AP - Amapá</MenuItem>
              <MenuItem value={"AM - Amazonas"}> AM - Amazonas</MenuItem>
              <MenuItem value={"BA - Bahia"}> BA - Bahia</MenuItem>
              <MenuItem value={"CE - Ceará"}> CE - Ceará</MenuItem>
              <MenuItem value={"DF - Distrito Federal"}> DF - Distrito Federal</MenuItem>
              <MenuItem value={"ES - Espírito Santo"}> ES - Espírito Santo</MenuItem>
              <MenuItem value={"GO - Goiás"}> GO - Goiás</MenuItem>
              <MenuItem value={"MA - Maranhão"}> MA - Maranhão</MenuItem>
              <MenuItem value={"MT - Mato Grosso"}> MT - Mato Grosso</MenuItem>
              <MenuItem value={"MS - Mato Grosso do Sul"}> MS - Mato Grosso do Sul</MenuItem>
              <MenuItem value={"MG - Minas Geráis"}> MG - Minas Geráis</MenuItem>
              <MenuItem value={"PA - Pará"}> PA - Pará</MenuItem>
              <MenuItem value={"PB - Paraíba"}> PB - Paraíba</MenuItem>
              <MenuItem value={"PR - Paraná"}> PR - Paraná</MenuItem>
              <MenuItem value={"PE - Pernambuco"}> PE - Pernambuco</MenuItem>
              <MenuItem value={"PI - Piauí"}> PI - Piauí</MenuItem>
              <MenuItem value={"RJ - Rio de Janeiro"}> RJ - Rio de Janeiro</MenuItem>
              <MenuItem value={"RN - Rio Grande do Norte"}> RN - Rio Grande do Norte</MenuItem>
              <MenuItem value={"RS - Rio Grande do Sul"}> RS - Rio Grande do Sul</MenuItem>
              <MenuItem value={"RO - Rondônia"}> RO - Rondônia</MenuItem>
              <MenuItem value={"RR - Roraima"}> RR - Roraima</MenuItem>
              <MenuItem value={"SC - Santa Catarina"}> SC - Santa Catarina</MenuItem>
              <MenuItem value={"SP - São Paulo"}> SP - São Paulo</MenuItem>
              <MenuItem value={"SE - Sergipe"}> SE - Sergipe</MenuItem>
              <MenuItem value={"TO - Tocantins"}> TO - Tocantins</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        
        <ListItem sx={{ marginBottom: '1.5vh'}}>
          <ListItemText sx={{ textAlign: 'start', marginLeft: '1vw' }} primary={"Gênero: "} />
          <FormControl fullWidth sx={{ marginLeft: '1vw' , marginRight: '2vw', maxWidth: '70%'}}>
            <RadioGroup
              row
              value={genero}
              onChange={(e) => [setGenero(e.target.value)]}
            >
              <FormControlLabel
                required
                value="masculino"
                name="genero"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                required
                value="feminino"
                name="genero"
                control={<Radio />}
                label="Feminino"
              />
              <FormControlLabel
                required
                value="outro"
                name="genero"
                control={<Radio />}
                label="Outros"
              />
            </RadioGroup>
          </FormControl>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem sx={{justifyContent: 'center' }}>
            <Button onClick={toggleDrawer(false)} style={{ color: 'white', backgroundColor: '#16C83D' }}>Aplicar filtros</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{ color: 'white', backgroundColor: '#16C83D' }}>Filtros</Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}