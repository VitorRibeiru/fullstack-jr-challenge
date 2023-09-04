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
    if (data.length === 0) {
        return null; // Retorna nulo se a lista estiver vazia
    }

    return (


        <div className="table-list">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Favorite Sport</th>
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