import React from 'react';
import Title from '../../Components/Title/Title';
import {Wrapper , ImgWrapper , TextWrapper , ContentWrapper, Field , Ul , Li , Img , P , A} from './AboutStyled';
const About = ()=>(
    <Wrapper>
    <Title text="O mnie"/>
    <ContentWrapper>
        <ImgWrapper><Img src={require('./galuza.jpg')} />
        <P>Michał Gałuza</P>

        <Field>Miejscowość:
           <P>Warszawa</P> 
        </Field>

        <Field>E-mail:
       <P>michal.galuza77@gmail.com</P> 
        </Field>

        <Field>Github: 
        <A  target="_blank" href="https://github.com/michal-galuza">https://github.com/michal-galuza</A> 
        </Field>
        <Field>LinkedIn: 
        <A  target="_blank" href="https://www.linkedin.com/in/michał-gałuza-3a5b0b1b5">https://www.linkedin.com/in/michał-gałuza-3a5b0b1b5</A> 
        </Field>
        </ImgWrapper>
        <TextWrapper>Cześć nazywam się Michał Gałuza.<br/>  Mieszkam w Wraszawie. Komputerami 
            i wszystkim co z nimi związane pasjonuję się od dziecka. Obecnie studiuję informatykę na Uczelni Europejskiej a wcześniej ukończyłem technikum informatyczne
            z kwalifikacją zawodową technik informatyk.Teraz uczę się języka Java aby w pełni móc tworzyć backend.<br/> <br/> 
            Tworzę aplikacje internetowe głównie w React lecz zdarza się też WordPress oraz czysty html css i js. Potrafię też tworzyć proste skrypty backendowe.
            Umiem konfigurować i zarządzać różnymi systemami od Linuxów po Windows Serwery.
            <br/>Oferuję kompleksową obsługę stron od projektu graficznego i napisania po umieszczenie jej  na hostingu i administracji nią 

        </TextWrapper>
        <Ul>
             
             <Li>Tworznie projektów graficznych </Li>
<Li>Tworzenie aplikacji z projektów graficznych</Li>
<Li>Podpinanie google serach console tworzenie google firma etc.</Li>
<Li>Przypisywanie domeny i umieszczanie strony na hostingu </Li>
<Li>Poprawki kodu </Li>
<Li>Administracja istniejącą stroną </Li>
</Ul>          
    </ContentWrapper>

    </Wrapper>
);
export default About;
/* skillsy

 */