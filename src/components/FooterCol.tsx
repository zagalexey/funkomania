import React from 'react';
import styled from "styled-components";

interface FooterColProps {
    title: string
    links: string[]
}

const LinkTitle = styled.h3`
  font-family: TTNormsProBold monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  font-variant: small-caps;
  color: #F6F6F6;
`

const Link = styled.a`
  font-family: TTNormsProBold monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 200%;
  color: #F6F6F6;
`


const FooterCol = ({title, links}: FooterColProps) => {
    return (
        <div className={'flex flex-col justify-start'}>
            <LinkTitle className={'text-white mb-[15px]'}>{title}</LinkTitle>
            {links.map(item => <Link className={'text-white'} href={'#'}>{item}</Link>)}
        </div>
    );
};

export default FooterCol;