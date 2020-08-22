import React from 'react';
import Title from '../../Components/Title/Title';
import {Wrapper , ImgWrapper , TextWrapper , ContentWrapper , Ul , Li} from './AboutStyled';
const About = ()=>(
    <Wrapper>
    <Title text="O mnie"/>
    <ContentWrapper>
        <ImgWrapper>DUPSKOOOO</ImgWrapper>
        <TextWrapper>Cześć nazywam się Michał Gałuza.<br/>  Mieszkam w Wraszawie. Komputerami 
            i wszystkim co z nimi związane pasjonuję się od dziecka. Obecnie studiuję informatykę na Uczelni Europejskiej a wcześniej ukończyłem technikum informatyczne
            z kwalifikacją zawodową technik informatyk.Teraz uczę się języka Java aby w pełni móc tworzyć backend.<br/> 
            Tworzę aplikacje internetowe głównie w React lecz zdarza się też WordPress oraz czysty html css i js. Potrafię też tworzyć proste skrypty backendowe.
            Umiem konfigurować i zarządzać różnymi systemami od Linuxów po Windows Serwery.
<Ul>
             <br/>Oferuję kompleksową obsługę stron od projektu graficznego po umieszneie na hostingu i administracji nią :
             <Li>Tworznie projektów graficznych </Li>
<Li>Tworzenie aplikacji z projektów graficznych</Li>
<Li>Podpinanie google serach console tworzenie google firma etc.</Li>
<Li>Przypisywanie domeny i wrzucianie strony na hosting </Li>
<Li>Poprawki kodu </Li>
<Li>Administracja istniejącą stroną </Li>
</Ul>           
        </TextWrapper>
    </ContentWrapper>

    </Wrapper>
);
export default About;
/* skillsy

 */