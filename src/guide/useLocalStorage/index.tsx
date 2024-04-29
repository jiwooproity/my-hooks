import { ChangeEvent, useState } from "react";
import { useLocalStorage } from "@hooks";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const TokenInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

const TokenInput = styled.input`
  padding: 5px;
  font-size: 15px;
  line-height: 15px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const TokenValueText = styled.span`
  font-size: 15px;
  line-height: 15px;
  color: white;
`;

const ControlUIWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const TokenControlBtn = styled.button`
  height: 27px;
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: white;
  color: black;

  &:hover {
    background-color: #ff2727;
    color: white;
  }

  transition: background-color 0.2s ease, color 0.2s ease;
`;

export const GuideUseLocalStorage = () => {
  const [key, token, setToken, removeToken] = useLocalStorage({
    key: "user-id",
    value: "",
  });

  const [insert, setInsert] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInsert(value);
  };

  const saveToken = () => {
    setToken(insert);
  };

  return (
    <Container>
      <TokenInfoBox>
        <TokenValueText>
          {token ? `Key: ${key} / Token: ${token}` : "토큰을 설정해주세요."}
        </TokenValueText>
        <ControlUIWrapper>
          <TokenInput name="token-value" value={insert} onChange={onChange} />
          <TokenControlBtn onClick={saveToken}>Set Token</TokenControlBtn>
          <TokenControlBtn onClick={removeToken}>Reset Token</TokenControlBtn>
        </ControlUIWrapper>
      </TokenInfoBox>
    </Container>
  );
};
