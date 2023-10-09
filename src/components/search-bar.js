import React, { useState } from "react";


export const Busca = () => {
    const nomes = ['Gustavo', 'gabriel', 'guilherme', 'Galego']
    const [busca, setBusca] = useState('');
    const nomesFiltrados = useMemo(() => {
        const lowerbusca = busca.toLowerCase();
        return nomes.toLowerCase().filter((nome) => nome.includes(lowerbusca));
    }, [busca]);
    return (
        <div className="busca">
            <input className="div-search-bar" type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)} />
            <ul>
                {nomesFiltradas.map((nome) => (
                    <li key={nome}> {nome} </li>
                ))}
            </ul>
        </div>
    )

};