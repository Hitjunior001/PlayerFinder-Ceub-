import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabelsPais() {
  const [pais, setPais] = React.useState("");

  const handleChange = (event) => {
    setPais(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: "100%" }}>
        <InputLabel id="label-select-input">País *</InputLabel>
        <Select
          required
          labelId="label-select-input"
          id="demo-simple-select-helper"
          value={pais}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value={10}> Brasil </MenuItem>
          <MenuItem value={20}> Estados Unidos </MenuItem>
          <MenuItem value={30}> México </MenuItem>
          <MenuItem value={40}> Espanha </MenuItem>
          <MenuItem value={40}> França </MenuItem>
          <MenuItem value={50}> China </MenuItem>
          {/* <MenuItem value={60}> DF </MenuItem> 
          <MenuItem value={70}> ES </MenuItem> 
          <MenuItem value={80}> GO </MenuItem> 
          <MenuItem value={90}> MA </MenuItem> 
          <MenuItem value={100}> MT </MenuItem> 
          <MenuItem value={110}> MS </MenuItem> 
          <MenuItem value={120}> MG </MenuItem> 
          <MenuItem value={130}> PA </MenuItem> 
          <MenuItem value={140}> PB </MenuItem> 
          <MenuItem value={150}> PR </MenuItem> 
          <MenuItem value={160}> PE </MenuItem> 
          <MenuItem value={170}> PI </MenuItem> 
          <MenuItem value={180}> RJ </MenuItem> 
          <MenuItem value={190}> RN </MenuItem> 
          <MenuItem value={200}> RS </MenuItem> 
          <MenuItem value={210}> RO </MenuItem> 
          <MenuItem value={230}> RR </MenuItem> 
          <MenuItem value={240}> SC </MenuItem> 
          <MenuItem value={250}> SP </MenuItem> 
          <MenuItem value={260}> SE </MenuItem> 
          <MenuItem value={270}> TO </MenuItem>  */}
        </Select>
      </FormControl>
    </div>
  );
}
