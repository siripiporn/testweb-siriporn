import styled from "styled-components";
import breakpoints from "../../config";

export const IndicatorWrapper = styled.div`
  @media ${breakpoints.device.mobile} {
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    bottom: 1rem;
    left: 41vw;
    width: 100%;
  }
`;

export const Dot = styled.div`
  @media ${breakpoints.device.mobile} {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${(props) => (props.isActive ? "#5C3CAF" : "#D8D8D8")};
    margin: 5px;
    transition: 750ms all ease-in-out;
  }
`;

export const Wrapper = styled.div`
  @media ${breakpoints.device.mobile} {
    /* margin-top: 6vw; */
    height: 15rem;
    background-color: #f5f4f9;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
  }
`;

export const Slide = styled.div`
  display: none;

  @media ${breakpoints.device.mobile} {
    display: unset;
    width: 100%;
    flex-shrink: 0;
    transition: 750ms all ease-in-out;
  }
`;

export const ChildrenWrapper = styled.div`
  @media ${breakpoints.device.mobile} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ContentHeader = styled.div`
  color: #c2c2c2;
  font-size: 2em;
  justify-content: start;
  display: flex;
  
  @media ${breakpoints.device.ipad} {
    font-size: 4vw;
  }
  @media ${breakpoints.device.mobile} {
    font-size: 7vw;
  }
`;
export const ContainerContent = styled.div`
  width: 90%;
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 1vh; */

  @media ${breakpoints.device.mobile} {
    width: 90%;
    margin: 0 auto;
    height: unset;
    margin-top: unset;
  }
`;
export const ContentBody = styled.div`
  color: ${(props) => (props.checkText ? "#ffffff" : "#000000")};
  padding-top: 1em;
  font-size: 1;
  display: flex;
  @media ${breakpoints.device.ipad} {
    
    font-size: 2vw;
   
  }
  @media ${breakpoints.device.mobile} {
    color: #000000;
    font-size: 1em;
    display: flex;
    margin: 0 auto;
    margin-top: 5vw;
  }
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakpoints.device.mobile} {
    display: flex;
    margin-top: 9vw;
  }
`;
export const SectionNo = styled.div`
  font-size: 1.6rem;
  color: ${(props) => (props.section ? "#ffffff" : "#000000")};

  @media ${breakpoints.device.mobile} {
  }
`;

export const Container = styled.div`
  display: column;
  margin: 0px 4% 0px 0px;
  justify-content: center;
  @media ${breakpoints.device.mobile} {
  }
`;
export const Icon = styled.div`
  width: 1.8rem;
  height: 0.7vh;

  background-color: ${(props) => (props.checkIcon ? "#ffffff" : "#603EBE")};
  border-radius: 4vw;
  @media ${breakpoints.device.mobile} {
  }
`;

export const ContainerRugby = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoints.device.mobile} {
    display: none;
  }
`;
