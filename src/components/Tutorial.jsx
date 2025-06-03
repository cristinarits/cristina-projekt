import React from 'react';
import ArrowKeys from './ui/arrowkeys.png';

export default function Tutorial() {
    return(
        <div className="flex flex-col space-y-2 text-lg chewy-regular text-rose-400">
            <p>press "P" to pause / unpause</p>
            <p>press arrow keys to move</p>
            <img src={ArrowKeys} alt="arrow keys" className="w-55"/>
        </div>
    );
};