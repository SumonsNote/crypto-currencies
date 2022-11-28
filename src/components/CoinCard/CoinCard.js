import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {
    return (
        <div className='w-[250px] p-3 bg-white rounded-lg shadow-md'>
            <Link to={`/coin-details/${coin.id}`}>
                <div className='flex gap-4 justify-between items-center'>
                <div className=''>
                    <img className='mx-auto object-cover h-16 w-16' src={coin.image} alt=""/>
                </div>
                <div>
                    <span>{coin.name}</span>
                    <br/>
                    <span>{coin.symbol}</span>
                </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;