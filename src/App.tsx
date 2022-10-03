import React, {useState} from 'react';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Brands from "./components/Brands";
import Banners from "./components/Banners";
import Products from "./components/Products";
import {Product} from "./Interfaces";
import Join from "./components/Join";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
    const [modal, setModal] = useState(false)

    const onCartHandler = (): void => {
        setModal(prevState => !prevState)
    }

    const products: Product[] = [
        {
            name: 'Harry Potter',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'HP',
                    color: '#9E5600'
                }
            ],
            price: 149.99,
            image: require('../src/images/products/HarryPotter.png'),
            background: require('../src/images/products/HarryPotterBackground.png')
        },
        {
            name: 'Frozen 2 - Elsa',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'DISNEY',
                    color: '#3644F8'
                }
            ],
            price: 220.99,
            image: require('../src/images/products/Elsa.png'),
            background: require('../src/images/products/ElsaBackground.png')
        },
        {
            name: 'Frozen 2 - Kristoff',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'DISNEY',
                    color: '#3644F8'
                }
            ],
            price: 125.99,
            image: require('../src/images/products/Kristoff.png'),
            background: require('../src/images/products/KristoffBackground.png')
        },
        {
            name: 'Queen - Freddie Mercury Radio Gaga',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'ROCKS',
                    color: '#CB000C'
                }
            ],
            price: 159.99,
            image: require('../src/images/products/Freddie.png'),
            background: require('../src/images/products/FreddieBackground.png')
        },
        {
            name: 'Big Bang Theory -  Sheldon Cooper',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'TELEVISION',
                    color: '#7200CB'
                }
            ],
            price: 189.99,
            image: require('../src/images/products/Sheldon.png'),
            background: require('../src/images/products/SheldonBackground.png')
        },
        {
            name: 'Frozen 2 - Elsa Young',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'DISNEY',
                    color: '#3644F8'
                }
            ],
            price: 149.99,
            image: require('../src/images/products/ElsaY.png'),
            background: require('../src/images/products/ElsaYBackground.png')
        },
        {
            name: 'Stranger Things - Eleven With Eggos',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'TELEVISION',
                    color: '#7200CB'
                }
            ],
            price: 139.99,
            image: require('../src/images/products/Eleven.png'),
            background: require('../src/images/products/ElevenBackground.png')
        },
        {
            name: 'Frozen 2 - Anna',
            category: [
                {
                    name: 'POP',
                    color: '#007762'
                },
                {
                    name: 'DISNEY',
                    color: '#3644F8'
                }
            ],
            price: 159.99,
            image: require('../src/images/products/Anna.png'),
            background: require('../src/images/products/AnnaBackground.png')
        }
    ]

    const collectorImgs: string[] = [
        require('../src/images/collectors/1.png'),
        require('../src/images/collectors/2.png'),
        require('../src/images/collectors/3.png'),
        require('../src/images/collectors/4.png'),
        require('../src/images/collectors/5.png'),
        require('../src/images/collectors/6.png'),
        require('../src/images/collectors/7.png'),
        require('../src/images/collectors/8.png'),
        require('../src/images/collectors/9.png')
    ]
    
    return (
        <div className="relative flex flex-col items-center bg-black App">
            {modal && (
                <div className={'absolute top-0 left-50% w-[500px], h-[800px] z-20 bg-blue'}>

                </div>
            )}
            <Navbar onCartClick={onCartHandler}/>
            <Header/>
            <Brands/>
            <Banners/>
            <Products products={products}/>
            <Join images={collectorImgs}/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
