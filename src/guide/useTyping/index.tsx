import useTyping from "@/hooks/use-typing";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  background-color: black;
`;

const TypingText = styled.span`
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: white;
`;

export const GuideUseTyping = () => {
  const [original] = useTyping({
    text: "(Original) Typing Custom Hook",
    delay: 200,
  });

  const [reverse] = useTyping({
    text: "(Reverse) Typing Custom Hook",
    delay: 200,
    reverse: true,
  });

  return (
    <Container>
      <TypingText ref={original} />
      <TypingText ref={reverse} />
    </Container>
  );
};
