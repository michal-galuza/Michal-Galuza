import React from 'react';
import Title from '../../Components/Title/Title';
import {Wrapper , ImgWrapper , TextWrapper , ContentWrapper, Field, Legend , Ul , Li , Img , P , A,} from './AboutStyled';
import BgText from '../../Components/BgText/BgText';
const About = ()=>(
    <Wrapper>

    <Title text="O mnie"/>
    <BgText text="O mnie"/>
    <ContentWrapper>
        <ImgWrapper><Img src={require('./galuza.jpg')} />
        <P>Michał Gałuza</P>

        <Field><Legend>Miejscowość:</Legend> 
           <P>Warszawa</P> 
        </Field>

        <Field><Legend>E-mail:</Legend> 
       <P>michal.galuza77@gmail.com</P> 
        </Field>

        <Field><Legend>Github:</Legend> 
        <A  target="_blank" href="https://github.com/michal-galuza">Mój Github</A> 
        </Field>

        <Field><Legend>LinkedIn:</Legend> 
        <A  target="_blank" href="https://www.linkedin.com/in/michał-gałuza-3a5b0b1b5">Mój LinkedIn</A> 
        </Field>
        <Field><Legend>Telefon:</Legend> 
        <A  href="tel:+48797893423">+48 797 893 423</A> 
        </Field>

        </ImgWrapper>
        <TextWrapper>Cześć nazywam się Michał Gałuza.<br/>  Mieszkam w Warszawie. Komputerami 
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