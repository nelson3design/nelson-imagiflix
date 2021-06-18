import React from 'react';

import './Score.css';


const Score = ({ value=5}) => {


    const getBorderColor = () => {
        if (value >= 7) { return 'border-green-400' }

        else if (value > 4 && value < 7) { return 'border-yellow-400' }

        else { return 'border-red-400' };
    }
    return(
        <span className={` score  bg-black border-4  rounded-full ${getBorderColor()}`}>{value}</span>
);
};

export default Score;