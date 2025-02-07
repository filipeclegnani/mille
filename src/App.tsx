import React from "react";
import styled from "styled-components";
import corner from "./corner.svg";
import Separator from "./separator";
import VerticalSeparator from "./verticalSeparator";
import Card from "./Card";

const BackgroundWrapper = styled.div`
  margin: 0;
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const MiddleFrameWrapper = styled.div`
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
`;

const HorizontalMiddleFrameWrapper = styled.div`
  height: 100%;
`;

const CornerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: flex-end;
  width: 100%;
`;

const MiddleWrapper = styled.div`
  flex: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const App: React.FC = () => {
  return (
    <>
      <BackgroundWrapper>
        <Frame>
          <CornerWrapper style={{ transform: "rotate(180deg)" }}>
            <img
              src={corner}
              alt="corner"
              style={{ transform: "rotate(90deg)" }}
            />
            <MiddleFrameWrapper>
              <Separator />
            </MiddleFrameWrapper>
            <img src={corner} alt="corner" />
          </CornerWrapper>
          <MiddleWrapper>
            <HorizontalMiddleFrameWrapper
              style={{ transform: "rotate(180deg)" }}
            >
              <VerticalSeparator />
            </HorizontalMiddleFrameWrapper>
            <HorizontalMiddleFrameWrapper>
              <VerticalSeparator />
            </HorizontalMiddleFrameWrapper>
          </MiddleWrapper>
          <CornerWrapper>
            <img
              src={corner}
              alt="corner"
              style={{ transform: "rotate(90deg)" }}
            />
            <MiddleFrameWrapper>
              <Separator />
            </MiddleFrameWrapper>
            <img src={corner} alt="corner" />
          </CornerWrapper>
        </Frame>
      </BackgroundWrapper>
      <Card />
    </>
  );
};

export default App;
