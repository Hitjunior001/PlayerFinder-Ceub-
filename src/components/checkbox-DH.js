import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const CheckboxLabelsDH = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={disponibilidade_de_horas}
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
      style={{  }}
      renderInput={(params) => (
        <TextField {...params} label="Disponibilidade de Horas" placeholder="Disponibilidade de Horas" />
      )}
    />
  )
};

const disponibilidade_de_horas = [
  { title: '10hrs' },
  { title: '14hrs' },
];