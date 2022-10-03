import React from 'react';

import '../styles/Banners.css'

const Banners = () => {
    return (
        <div className={'w-[1440px] h-[511px] relative bg-blue-800 flex banners'}>
            <div className={'w-1/2 h-[511px] relative banners__left'}>
                <h2 className={'w-[322px] h-[72px] absolute top-[393px] left-[60px] text-[#F6F6F6]'}>Frozen 2</h2>
                <div className={'w-[317px] h-[473px] absolute left-[361px] top-[19px]'}>
                    <img className={'w-fit h-fit bg-cover'}
                         src={require('../images/Elsa.png')} alt="Elsa"/>
                </div>
            </div>
            <div className={'w-1/2 h-full relative banners__right'}>
                <h2 className={'w-[322px] h-[72px] absolute top-[393px] left-[338px] text-[#F6F6F6]'}>Star Wars</h2>
                <div className={'w-[317px] h-[473px] absolute left-[40px] top-[28px]'}>
                    <img className={'w-fit h-fit bg-cover'}
                         src={require('../images/Rey.png')} alt="Rey"/>
                </div>
            </div>
        </div>
    );
};

export default Banners;