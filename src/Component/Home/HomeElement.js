import styled from "styled-components";
import breakpoints from "../../config";

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  @media ${breakpoints.device.mobile} {
    flex-direction: column;
    /* height: 100vh; */
  }
`;
export const ContanerPlayer = styled.div`
  width: 100%;
  z-index: 9;
  display: flex;
  flex-direction: row;
  /* height: 100vh; */
  @media ${breakpoints.device.mobile} {
    flex-direction: column;
  }
`;

export const ContainerBG = styled.div`
  width: 100%;
  /* height: 60vh; */
  background-color: #f5f4f9;
`;
export const SeactionHeader = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  @media ${breakpoints.device.mobile} {
    flex-direction: ${(props) => (props.bas ? "column-reverse" : "column")};
    width: 100%;
  }
`;
export const ContainerImage = styled.div`
  width: 50%;
  z-index: 9;
  @media ${breakpoints.device.mobile} {
    width: 100%;
    justify-content: center;
    display: flex;
  }
`;

export const ContainerContent = styled.div`
  width: 50%;
  z-index: 9;
  /* height: 60vh; */
  @media ${breakpoints.device.mobile} {
    width: 100%;
    height: 0;
  }
`;
export const Content = styled.div`
  color: #000;
  padding-left: 3vw;
  @media ${breakpoints.device.mobile} {
    padding-left: 0;
  }
`;

export const BgGreay = styled.div`
  background-color: #f5f4f9;
  width: 100%;
  height: 25vh;
  position: relative;

  @media ${breakpoints.device.mobile} {
    /* background-color: #ffffff; */
  }
`;
export const BgWhite = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 20vh;
  @media ${breakpoints.device.mobile}{
    height: 38vh;
  }
  /* position: relative; */
  @media ${breakpoints.device.mobile} {
    /* display: none; */
  }
`;
export const BgPurple = styled.div`
  background-color: #5e3db3;
  position: relative;
  width: 100%;
  height: 25vh;
  @media ${breakpoints.device.mobile} {
    display: none;
  }
`;
export const BgBlue = styled.div`
  background-color: #090c35;
  position: relative;
  width: 100%;
  height: 22vh;
  @media ${breakpoints.device.mobile} {
    display: none;
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  /* height: 30vw; */

  @media ${breakpoints.device.mobile} {
  }
`;
export const Header = styled.div`
font-size: 5.6rem;
  color: #e7e7e7;
  margin-left: ${(props) => (props.header ? "calc(100% - 47vw)" : "3vw")};
  padding-top: ${(props) => (props.header ? "0px" : "3vw")};

 @media ${breakpoints.device.ipad} {
    font-size: 10vw; 
  }

  @media ${breakpoints.device.mobile} {
    justify-content: center;
    display: flex;
    margin-left: unset;
    justify-content: left;
    padding: 9px;
  }
`;
export const HeaderPlayer = styled.div`
  font-size: 4rem;
  color: #e7e7e7;
  margin-top: 12vw;

  @media ${breakpoints.device.mobile} {
    justify-content: center;
    display: flex;
    margin-left: unset;
    /* margin-top: 90vw; */
  }
`;

export const ContainerSlide = styled.div`
  z-index: 99;
  @media ${breakpoints.device.mobile} {
  }
`;

export const Image = styled.img`
 
  width: ${(props) => (props.bas ? "43vw" : "29vw")};
margin-top:${(props) => (props.bas ? "-5vw" : "-3vw")};
 
  @media ${breakpoints.device.ipad} {
    position: absolute;
    margin-top:${(props) => (props.bas ? "-10vw" : "-10vw")};
    width: ${(props) => (props.bas ? "80vw" : "64vw")}; 
    margin-left: ${(props) => (props.bas ? "-4vw" : "-26vw")};
  }
 
  
  @media ${breakpoints.device.mobile} {
    /* width: 90vw; */
    width: ${(props) => (props.bas ? "90vw" : "70vw")}; 
    margin-left: 0; 
    margin-top:  ${(props) => (props.bas ? "20vh" : "8vh")}; ;
    position: relative;
  }
`;
export const Slide = styled.div`
  @media ${breakpoints.device.mobile} {
  }
`;
