import { useEffect } from "react";
import { useIdle } from "@/hooks";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240, 1);

  &.idle {
    background-color: rgba(20, 20, 20, 1);
  }

  transition: background-color 1s ease;
`;

const IdleStatusBox = styled.div`
  width: 400px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
`;

const IdleStatsDescription = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: rgba(54, 54, 54, 0.8);
`;

const IdleStatusText = styled.span`
  font-size: 15px;
  line-height: 15px;
  color: rgba(0, 0, 0, 1);
`;

const INIT_TIME = 1;

export const GuideUseIdle = () => {
  const [isIdle, activeIdle] = useIdle({
    limit: INIT_TIME,
    event: () => {},
  });

  useEffect(() => {
    document.addEventListener("click", activeIdle);
    return () => document.removeEventListener("click", activeIdle);
  }, []);

  return (
    <Container className={`${isIdle ? "idle" : ""}`}>
      <IdleStatusBox>
        <IdleStatusText>
          {isIdle
            ? "사용자가 유휴 상태입니다."
            : "사용자가 사용 중인 상태입니다."}
        </IdleStatusText>
        <IdleStatsDescription>
          {isIdle
            ? "사용자가 장시간 사용하지 않아 비활성화 되었습니다."
            : `${INIT_TIME}분 이상 활동하지 않을 경우, 비활성화 됩니다.`}
        </IdleStatsDescription>
      </IdleStatusBox>
    </Container>
  );
};
