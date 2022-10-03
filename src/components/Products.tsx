import React from 'react';

import '../styles/Products.css'
import styled from "styled-components";
import {Product} from "../Interfaces";
import ProductCard from "./ProductCard";

interface ProductsProps {
    products: Product[]
}

const Products = ({ products }:ProductsProps) => {
    const Title = styled.h2`
      font-family: TTNormsProExtraBold monospace;
      font-weight: 900;
      font-size: 60px;
      text-transform: uppercase;
      color: #F6F6F6;
      margin-top: 55px;
    `

    const Paragraph = styled.p`
      font-family: TTNormsPro monospace;
      font-weight: 700;
      font-size: 36px;
      color: #F6F6F6;
      margin-top: 5px;
    `

    const Button = styled.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 106px;
      width: 390px;
      height: 49px;
      background: #242424;
      box-shadow: 6px 6px 50px rgba(76, 76, 76, 0.25);
      border-radius: 40px;
      color: #F6F6F6;
      margin-top: 68px;
    `

    return (
        <div className={'w-[1440px] h-[1750px] products'}>
            <div className={'w-full h-full products__bg flex flex-col items-center'}>
                <div className={'flex flex-col justify-center items-center mb-[47px]'}>
                    <Title>More than a collectible</Title>
                    <Paragraph>Have all the characters</Paragraph>
                </div>
                <div className={'grid gap-x-[16px] gap-y-[26px] grid-cols-4 grid-rows-2'}>
                    {products.map(item => (
                        <ProductCard name={item.name} category={item.category} price={item.price} image={item.image} background={item.background}/>
                    ))}
                </div>
                <Button>See all products</Button>
            </div>
        </div>
    );
};

export default Products;