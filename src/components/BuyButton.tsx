import React from 'react';
import styled from "styled-components";

const BuyButton = () => {
    const Button = styled.button`
      position: relative;
      width: 300px;
      height: 60px;
      background: #242424;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    `

    const ButtonText = styled.span`
      font-family: TTNormsProBold monospace;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #F6F6F6;
    `

    return (
        <Button>
            <svg className={'absolute left-[20px]'} width="36" height="36" viewBox="0 0 36 36" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.5 10.5H28.185C28.6041 10.5 29.0186 10.5879 29.4017 10.7579C29.7848 10.9279 30.128 11.1763 30.4093 11.487C30.6905 11.7978 30.9035 12.164 31.0345 12.5622C31.1656 12.9603 31.2117 13.3815 31.17 13.7985L30.27 22.7985C30.196 23.5388 29.8495 24.2251 29.2979 24.7243C28.7464 25.2235 28.029 25.5 27.285 25.5H12.96C12.2662 25.5003 11.5938 25.2601 11.0572 24.8203C10.5206 24.3805 10.153 23.7683 10.017 23.088L7.5 10.5Z"
                    stroke="#F6F6F6" strokeWidth="3" strokeLinejoin="round"/>
                <path
                    d="M7.5 10.5L6.285 5.6355C6.20374 5.31113 6.01643 5.02321 5.75281 4.81748C5.48919 4.61175 5.16439 4.50001 4.83 4.5H3"
                    stroke="#F6F6F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 31.5H15" stroke="#F6F6F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 31.5H27" stroke="#F6F6F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <ButtonText>Add to cart</ButtonText>
        </Button>
    );
};

export default BuyButton;