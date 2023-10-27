import React, { useState, useEffect } from "react";
import { IndicatorWrapper, Dot, Wrapper, Slide, ChildrenWrapper, ContentHeader, ContainerContent, ContentBody, HeaderSection, SectionNo, Container, Icon } from './SlideElement'

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const SliderBas = ({
  dataBas = [],
  autoPlay = true,
  autoPlayTime = 3000,
  children,
  ...props
}) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlideRugby(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= dataBas.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlideRugby();
    }, [autoPlayTime]);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>

      {dataBas.map((item, index) => (
        <Slide
          key={index}
          style={{
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : 0,
          }}
        >
          <ContainerContent>
            <HeaderSection>
              <Container>
                <SectionNo>{item.id}</SectionNo>
                <Icon />
              </Container>
              <ContentHeader>{item.title}</ContentHeader>
            </HeaderSection>
            <ContentBody>{item.description}</ContentBody>
          </ContainerContent>
        </Slide>

      ))}

      <Indicator
        currentSlide={currentSlide}
        amountSlides={dataBas.length}
        nextSlide={nextSlideRugby}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default SliderBas;
