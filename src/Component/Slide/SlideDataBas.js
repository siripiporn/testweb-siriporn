import React from "react";
import Slider from "./SliderBas";
import {
  ContainerRugby,
  ContentHeader,
  ContainerContent,
  ContentBody,
  HeaderSection,
  SectionNo,
  Container,
  Icon,
} from "./SlideElement";

const dataBas = [
  {
    id: "01",
    title: "COLLABORATION",
    description:
      "Connect with coaches directly, you can ping coaches to view profile.",
  },
  {
    id: "02",
    title: "COLLABORATION",
    description:
      "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
  },
  {
    id: "03",
    title: "GROWTH",
    description:
      "Resources and tools for you to get better as a student Athelte.Access to training classes, tutor sessions, etc",
  },
];

const SlideData = () => {
  return (
    <>
      <div>
        <Slider dataBas={dataBas}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          ></div>
        </Slider>
      </div>
      <ContainerRugby>
        {dataBas.map((item, i) => {
          return (
            <ContainerContent key={i}>
              <HeaderSection>
                <Container>
                  {item.id === "03" ? (
                    <SectionNo section>{item.id}</SectionNo>
                  ) : (
                    <SectionNo>{item.id}</SectionNo>
                  )}

                  {item.id === "03" ? <Icon checkIcon /> : <Icon />}
                </Container>
                <ContentHeader>{item.title}</ContentHeader>
              </HeaderSection>

              {item.id === "03" ? (
                <ContentBody checkText>{item.description}</ContentBody>
              ) : (
                <ContentBody>{item.description}</ContentBody>
              )}
            </ContainerContent>
          );
        })}
      </ContainerRugby>
    </>
  );
};

export default SlideData;
