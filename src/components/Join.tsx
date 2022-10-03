import React from 'react';
import styled from "styled-components";
import '../styles/Collector.css'
import {Text, Title} from "../styles/styledComponents";

interface JoinProps {
    images: string[]
}

const Join = ({images}: JoinProps) => {
    const Wrapper = styled.div`
      width: 1440px;
      height: 864px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    `

    const Button = styled.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 106px;
      width: 364px;
      height: 49px;
      background: #242424;
      box-shadow: 6px 6px 50px rgba(76, 76, 76, 0.25);
      border-radius: 40px;
      color: #F6F6F6;
      margin-top: 68px;
    `

    return (
        <Wrapper>
            {images.map(item => (
                <img width={288} height={288} className={'collector'} src={item} alt="Collector"/>
            ))}
            <div className={'bg-[#3644F8] join'}>
                <section className={'w-[727px] h-[216px] mt-[91px] ml-[38px]'}>
                    <Title>Join collectors around the world and live with Funkos</Title>
                </section>
                <section className={'mt-[30px] ml-[38px]'}>
                    <Text>No matter your age or tastes, at FunkoMania we have the best collectibles just the way you
                        like
                        it!</Text>
                </section>
                <Button className={'ml-[38px]'}>Be a collector</Button>
            </div>
        </Wrapper>
    );
};

export default Join;