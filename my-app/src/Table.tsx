import React from 'react';

interface CardProps {
    data: Array<{
        nome: string;
        cidade: string;
        pais: string;
        esporteFavorito: string;
    }>;


}

const CardList: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="card-list">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <h2>{item.nome}</h2>
                    <span>{item.cidade}</span>
                    <span>{item.pais}</span>
                    <span>{item.esporteFavorito}</span>
                </div>
            ))}
        </div>
    );
};

export default CardList;