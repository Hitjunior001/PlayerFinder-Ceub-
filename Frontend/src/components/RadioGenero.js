import React, { useState } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const RadioGenero = () => {

  const [genero, setGenero] = useState("");

  return (
    <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
        Gênero
        </FormLabel>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="genero"
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
            label="Outro"
        />
        </RadioGroup>
    </FormControl>
  );
};

export default RadioGenero;