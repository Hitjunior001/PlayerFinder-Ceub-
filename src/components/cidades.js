import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Cidades = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={cidades}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: "50%" }}
      renderInput={(params) => (
        <TextField {...params} label="Cidades" placeholder="Cidades" />
      )}
    />
  )
};

const cidades = [
  { title: 'Brasília' },
  { title: 'Goiânia' },
  { title: 'Curitiba' },
  { title: 'Belo Horizante' },
];