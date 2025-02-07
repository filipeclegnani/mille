import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 21px;
`;

const Line = styled.div`
  position: absolute;
  height: 5px;
  background-color: white;
`;

const Line1 = styled(Line)`
  width: 100%;
`;

const Line2 = styled(Line)`
  top: 18px;
  width: calc(100% - 100px);
  left: 50px;
`;

export default function Separator(...props: any) {
  return (
    <Wrapper {...props}>
      <Line1 />
      <Line2 />
    </Wrapper>
  );
}
