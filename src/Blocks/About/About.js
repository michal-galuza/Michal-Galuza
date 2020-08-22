import React from 'react';
import Title from '../../Components/Title/Title';
import {Wrapper , ImgWrapper , TextWrapper , ContentWrapper} from './AboutStyled';
const About = ()=>(
    <Wrapper>
    <Title text="O mnie"/>
    <ContentWrapper>
        <ImgWrapper>DUPSKOOOO</ImgWrapper>
        <TextWrapper>Cześć nazywam się Michał Gałuza. Jestem z Warszawy. Komputerami 
            i wszystkim co z nimi związane pasjonuję się od 15 roku życia.
            
        </TextWrapper>
    </ContentWrapper>

    </Wrapper>
);
export default About;