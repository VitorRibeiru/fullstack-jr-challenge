import React from 'react';

interface TableProps {
    data: Array<{
        nome: string;
        cidade: string;
        pais: string;
        esporteFavorito: string;
    }>;
}

const TableList: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="table-list">
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>País</th>
                    <th>Esporte Favorito</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nome}</td>
                        <td>{item.cidade}</td>
                        <td>{item.pais}</td>
                        <td>{item.esporteFavorito}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableList;