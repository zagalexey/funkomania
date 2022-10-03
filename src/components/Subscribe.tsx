import React from 'react';
import styled from "styled-components";

import {Text, Title} from "../styles/styledComponents";

// interface SubscribeProps {
//     bg: string
// }

const Wrapper = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  color: white;

  :focus {
    outline: none;
  }
`

const Button = styled.input<{ background: string }>`
  height: 65px;
  width: 195px;
  background-image: url(${props => props.background});
  background-size: 195px 65px;
  background-repeat: no-repeat;
  cursor: pointer;
`

const Subscribe = () => {

    const bg = require('../images/subscribe/BG.png')
    const buttons: string[] = [
        require('../images/subscribe/GooglePlay.png'),
        require('../images/subscribe/AppStore.png')
    ]

    return (
        <Wrapper background={bg} className={'relative w-[1440px] h-[562px] flex flex-col pl-[60px]'}>
            <section className={'w-[700px] h-[144px] mt-[100px]'}>
                <Title>Subscribe to our exclusive newsletter</Title>
            </section>
            <section className={'w-[500px] h-[68px] mt-[30px]'}>
                <Text>So you'll stay on top of the news from the world of Funkos!</Text>
            </section>
            <div className={'flex items-center rounded-[25px] w-[500px] bg-transparent border-2 mt-[30px]'}>
                <svg className={'mx-4'} width="28" height="20" viewBox="0 0 28 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H26C26.5304 20 27.0391 19.7893 27.4142 19.4142C27.7893 19.0391 28 18.5304 28 18V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0V0ZM23.8 2L14 8.78L4.2 2H23.8ZM2 18V2.91L13.43 10.82C13.5974 10.9361 13.7963 10.9984 14 10.9984C14.2037 10.9984 14.4026 10.9361 14.57 10.82L26 2.91V18H2Z"
                        fill="#F6F6F6"/>
                </svg>
                <Input placeholder={'E-mail'} type={"email"}/>
            </div>
            <div className={'flex gap-[15px] mt-[40px]'}>
                {buttons.map(item => (
                    <Button type={"button"} background={item}/>
                ))}
            </div>
            <img src={require('../images/subscribe/LeftImg.png')} alt="Funko"
                 className={'absolute left-[850px] top-[80px] z-0 h-[256px] w-[186px]'}/>
            <img src={require('../images/subscribe/CenterImg.png')} alt="Funko"
                 className={'absolute left-[972px] top-[53px] z-10 h-[375px] w-[265px]'}/>
            <img src={require('../images/subscribe/RightImg.png')} alt="Funko"
                 className={'absolute left-[1190px] top-[80px] z-0 h-[256px] w-[186px]'}/>
        </Wrapper>
    );
};

export default Subscribe;