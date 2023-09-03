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
                    <h3 className="name"> {item.nome} </h3>
                    <span className="city"> City: {item.cidade} </span>
                    <span className="country"> Country: {item.pais} </span>
                    <span className="sport"> Favorite Sport: {item.esporteFavorito} </span>
                </div>
            ))}
        </div>
    );
};

export default CardList;