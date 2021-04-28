import React from 'react';


const GameCard = ({data}) => (
    <div className='game-wrapper'>
        {data && data.map(value => (<div className="game-container">
            <div className='game-image'>
                <img src={value.GameImage} alt={value.GameTitle} />
            </div>
            <div className='game-detail'>
                <h3>{value.GameTitle}</h3>
                <p>{value.GameDescription}</p>
            </div>
        </div>))}
    </div>
)

export default GameCard