import React from 'react';

interface TableProps {
    data: Array<{
        column1: string;
        column2: string;
        column3: string;
        column4: string;
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
                        <td>{item.column1}</td>
                        <td>{item.column2}</td>
                        <td>{item.column3}</td>
                        <td>{item.column4}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableList;