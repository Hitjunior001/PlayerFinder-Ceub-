// import React, { useState } from "react";

// export const Busca = () => {
//     const nomes = ['Gustavo', 'gabriel', 'guilherme', 'Galego']
//     const [busca, setBusca] = useState('');
//     const nomesFiltrados = useMemo(() => {
//         const lowerbusca = busca.toLowerCase();
//         return nomes.toLowerCase().filter((nome) => nome.includes(lowerbusca));
//     }, [busca]);
//     return (
//         <div className="busca">
//             <input className="div-search-bar" type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)} />
//             <ul>
//                 {nomesFiltradas.map((nome) => (
//                     <li key={nome}> {nome} </li>
//                 ))}
//             </ul>
//         </div>
//     )
// };

import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const SearchBar = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={busca}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pesquisar" />}
    />
  )
};

const busca = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
];