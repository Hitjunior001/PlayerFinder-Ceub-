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
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Estados" placeholder="Estados"/>
      )}
    />
  )
};

const estados = [
  { title: 'AC' }, // Acre
  { title: 'AL' }, // Alagoas
  { title: 'AP' }, // Amapá
  { title: 'AM' }, // Amazonas
  { title: 'BA' }, // Bahia
  { title: 'CE' }, // Ceará
  { title: 'DF' }, // Distrito Federal
  { title: 'ES' }, // Espírito Santo
  { title: 'GO' }, // Goiás
  { title: 'MA' }, // Maranhão
  { title: 'MT' }, // Mato Grosso
  { title: 'MS' }, // Mato Grosso do Sul
  { title: 'MG' }, // Minas Gerais
  { title: 'PA' }, // Pará
  { title: 'PB' }, // Paraíba
  { title: 'PR' }, // Paraná
  { title: 'PE' }, // Pernambuco
  { title: 'PI' }, // Piauí
  { title: 'RJ' }, // Rio de Janeiro
  { title: 'RN' }, // Rio Grande do Norte
  { title: 'RS' }, // Rio Grande do Sul
  { title: 'RO' }, // Rondônia
  { title: 'RR' }, // Roraima
  { title: 'SC' }, // Santa Catarina
  { title: 'SP' }, // São Paulo
  { title: 'SE' }, // Sergipe
  { title: 'TO' }, // Tocantins
];