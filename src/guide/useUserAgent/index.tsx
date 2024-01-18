import { useUserAgent } from "@hooks";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(54, 54, 54, 1);
`;

const UserAgentBox = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 12px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
`;

const UserAgentInfo = styled.span`
  font-size: 13px;
  line-height: 13px;
  color: rgba(54, 54, 54, 1);
`;

const UserAgentResult = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;

export const GuideUseUserAgent = () => {
  const [browser] = useUserAgent();

  return (
    <Container>
      <UserAgentBox>
        <UserAgentInfo>현재 접속 중인 브라우저</UserAgentInfo>
        <UserAgentResult>{browser}</UserAgentResult>
      </UserAgentBox>
    </Container>
  );
};
