import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const {id} = useParams()
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setCoins(data)})
    }, [id])
    return (
        <>
            {
                loading ? <Spinner></Spinner> : <div className='mx-auto max-w-7xl pt-20 md:px-2 px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div>
                    <h3 className='text-3xl'>General Info:</h3>
                    <hr/>
                    <h1>Coin Name: {coins.name}</h1>
                    <h1>Market Cap Rank: {coins.market_cap_rank}</h1>
                    <h1>Country Origin: {coins.country_origin ? coins.country_origin : 'Not Available'}</h1>
                    <div className='mt-4'>
                    <h3 className='text-3xl'>Scores:</h3>
                    <hr/>
                    <h1>Coin Name: {coins.community_score}</h1>
                    <h1>Market Cap Rank: {coins.developer_score}</h1>
                    <h1>Country Origin: {coins.country_origin ? coins.country_origin : 'Not Available'}</h1>
                </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={coins.image?.large} alt=""/>
                </div>
            </div>
        </div>
            }
        </>
    );
};

export default CoinDetails;