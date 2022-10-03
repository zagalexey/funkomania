import React from 'react';
import {Product} from "../Interfaces";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import Tag from "./Tag";

const ProductCard = ({name, category, price, image, background}: Product) => {

    const NameTitle = styled.p`
      font-family: TTNormsProBold monospace;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: #F6F6F6;
    `

    const Price = styled.p`
      font-family: TTNormsProBold monospace;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-top: 15px;
      margin-bottom: 20px;
      color: #F6F6F6;
    `

    const Wrapper = styled.div`
      width: 324px;
      height: 656px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      //align-items: center;
      background: linear-gradient(180deg, rgba(47, 47, 47, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%);
      border-radius: 20px;
      border: 1px solid grey;
    `

    return (
        <div className={'flex flex-col'}>
            <Wrapper>
                <div className={'bg flex justify-center items-center w-full h-[335px]'}
                     style={{backgroundImage: `url(${background})`, borderRadius: '40px'}}>
                    <img className={'w-[200px] h-[294px]'} src={image} alt={name}/>
                </div>
                <div className={'flex items-center rounded-[30px] gap-[20px] mt-[20px]'}>
                    {category.map(item =>
                        <Tag className={'px-6 py-1 rounded-3xl'} color={item.color}>{item.name}</Tag>

                    )}
                </div>
                <section className={'flex flex-col justify-center w-[300px] h-[100px] mt-[20px]'}>
                    <NameTitle>{name}</NameTitle>
                </section>
                <Price>$ {price}</Price>
                <BuyButton />
            </Wrapper>
        </div>
    );
};

export default ProductCard;