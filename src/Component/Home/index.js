import React from "react";
import RugbySlide from "../Slide/SlideDataRugby";
import BasketballSlide from "../Slide/SlideDataBas";
import { useMediaQuery } from 'react-responsive'
import {
  Container,
  BgGreay,
  BgWhite,
  BgPurple,
  BgBlue,
  ContainerHeader,
  Header,
  Image,
  ContainerImage,
  ContainerBG,
  SeactionHeader,
  ContainerContent,
  Content,
} from "./HomeElement";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1920px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      <Container>
        <ContainerBG>
          <ContainerHeader>
            <Header header>ATHLETS</Header>
          </ContainerHeader>
          <SeactionHeader>
            <ContainerImage> 
              {isDesktopOrLaptop && <Image src="../images/footballerDes.png" />}
              {/* {isBigScreen && <Image src="../images/footballerDes.png" />} */}
              {isTabletOrMobile && <Image src="../images/footballer.png" />} 
            </ContainerImage>
            <ContainerContent>
              <Content>
                <RugbySlide />
              </Content>
            </ContainerContent>
          </SeactionHeader>
          <BgWhite />
          <BgGreay />
          <BgPurple />
        </ContainerBG>
      </Container>

      {/* //PLAYERS */}

      <Container>
        <ContainerBG>
          <ContainerHeader>
            <Header>PLAYERS</Header>
          </ContainerHeader>
          <SeactionHeader bas>
            <ContainerContent>
              <Content>
                <BasketballSlide />
              </Content>
            </ContainerContent>
            <ContainerImage>
              <Image bas src="../images/bas.png" />
            </ContainerImage>
          </SeactionHeader>
          <BgWhite />
          <BgGreay />
          <BgBlue />
        </ContainerBG>
      </Container>
    </>
  );
}

export default Home;
