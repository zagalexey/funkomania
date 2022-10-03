import React from 'react';

import '../styles/Header.css'

const Header = () => {
    return (
        <div className={'relative w-[1440px] h-[600px] bg-black header'}>
            <div className={'w-full h-full header__background flex'}>
                <h1 className={'w-[665px] h-[218px] flex items-center absolute top-[86px] left-[60px]'}>Bring your
                    favorite sorcerers home</h1>
                <p className={'w-[578px] h-[75px] flex items-center absolute top-[316px] left-[60px]'}>At FunkoMania you
                    have fun and start your amazing
                    collection of Funkos!</p>
                <button
                    className={'w-[322px] h-[50px] rounded-[40px] bg-[#131313] text-[#F6F6F6] absolute top-[422px] left-[60px]'}>Shop
                    now
                </button>
                <img src={require('../images/HeaderFunko.png')} alt="Funko"
                     className={'w-[350px] h-[500px] absolute top-[74px] left-[938px]'}/>
            </div>
        </div>
    );
};

export default Header;