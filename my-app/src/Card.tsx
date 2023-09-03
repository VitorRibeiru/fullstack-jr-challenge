import React from 'react';

interface CardProps {
    data: Array<{
        column1: string;
        column2: string;
        column3: string;
        column4: string;
    }>;


}

const CardList: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="card-list">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <h3 className="name"> {item.column1} </h3>
                    <span className="city"> City: {item.column2} </span>
                    <span className="country"> Country: {item.column3} </span>
                    <span className="sport"> Favorite Sport: {item.column4} </span>
                </div>
            ))}
        </div>
    );
};

export default CardList;