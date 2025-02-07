import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 21px;
  height: 100%;
`;

const Line = styled.div`
  position: absolute;
  width: 5px;
  background-color: white;
`;

const Line1 = styled(Line)`
  height: 100%;
`;

const Line2 = styled(Line)`
  left: 18px;
  height: calc(100% - 100px);
  top: 50px;
`;

export default function VerticalSeparator(...props: any) {
  return (
    <Wrapper {...props}>
      <Line1 />
      <Line2 />
    </Wrapper>
  );
}
