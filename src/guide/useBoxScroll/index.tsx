import useBoxScroll from "@/hooks/use-box-scroll";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
`;

const BOX_STYLES = [
  "rgba(255, 0, 0, 1)",
  "rgba(255, 50, 0, 1)",
  "rgba(255, 100, 0, 1)",
  "rgba(255, 150, 0, 1)",
  "rgba(255, 200, 0, 1)",
  "rgba(255, 250, 0, 1)",
];

export const GuideUseBoxScroll = () => {
  const [ref] = useBoxScroll();

  return (
    <Container ref={ref}>
      {BOX_STYLES.map((color, index) => (
        <Box key={index} style={{ backgroundColor: color }} />
      ))}
    </Container>
  );
};
