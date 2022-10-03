import React from 'react';

const Brands = () => {
    const brands: string[] = [
        require('../images/DisneyLogo.png'),
        require('../images/HarryPotterLogo.png'),
        require('../images/MarvelLogo.png'),
        require('../images/StarWarsLogo.png'),
        require('../images/DCLogo.png'),
    ]


    return (
        <div className={'w-[1440px] h-[200px] bg-[#131313] flex items-center justify-center gap-[60px]'}>
            {brands.map(item => (
                <img className={'h-[96px]'} src={item} alt="BrandLogo"/>
            ))}
        </div>
    );
};


export default Brands;