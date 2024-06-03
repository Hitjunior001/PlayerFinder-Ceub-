import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectEstado = () => {
  
  const [estado, setEstado] = useState("");
  
  const handleChange = (event) => {
    setEstado(event.target.value);
  }; // Select Estado

  return (
    <FormControl sx={{ minWidth: "100%" }}>
        <InputLabel id="label-select-input">Estado *</InputLabel>
        <Select
        required
        labelId="label-select-input"
        value={estado}
        name="estado"
        label="Estado"
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
  );
};

export default SelectEstado;