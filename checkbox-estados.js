import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const CheckboxLabelsEstados = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={estados}
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
        <TextField {...params} label="Estados" placeholder="Estados" />
      )}
    />
  )
};

const estados = [
  { title: 'AC' },
  { title: 'AL' },
  { title: 'AP' },
  { title: 'BA' },
  { title: 'CE' },
  { title: 'DF' },
  { title: 'ES' },
  { title: 'GO' },
  { title: 'MA' },
  { title: 'MT' },
  { title: 'MS' },
  { title: 'MG' },
  { title: 'PA' },
  { title: 'PB' },
  { title: 'PR' },
  { title: 'PE' },
  { title: 'PI' },
  { title: 'RJ' },
  { title: 'RN' },
  { title: 'RO' },
  { title: 'RR' },
  { title: 'SC' },
  { title: 'SE' },
  { title: 'SP' },
];