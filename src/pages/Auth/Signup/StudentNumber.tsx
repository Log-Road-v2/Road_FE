import styled from "@emotion/styled";
import { Logo } from "../../../assets";
import { Color, Font } from "../../../styles";
import SubmitButton from "../../../components/Common/Button/SubmitButton";
import AuthBackground from "../../assets/Png/AuthBackground.png";
import DropDown from "../../../components/Common/DropDown";
import { useState } from "react";

export const Studentnumber = () => {
  const [grade, setGrade] = useState<number | undefined>();
  const [classNum, setClassNum] = useState<number | undefined>();
  const [studentNum, setStudentNum] = useState<number | undefined>();
  return (
    <Container>
      <Wrapper>
        <Top>
          <div>
            <Logo />
            <Content>기록을 남기는 로드</Content>
          </div>
          <ProgressBackground>
            <ProgressBar></ProgressBar>
          </ProgressBackground>
        </Top>
        <InputWrapper>
          <DropDown
            val={grade}
            setVal={setGrade}
            describe="학년을 선택해주세요"
            items={[1, 2, 3]}
            label="학년"
          />
          <DropDown
            val={classNum}
            setVal={setClassNum}
            describe="반을 선택해주세요"
            items={[1, 2, 3, 4]}
            label="반"
          />
          <DropDown
            val={studentNum}
            setVal={setStudentNum}
            describe="번호을 선택해주세요"
            items={Array.from({ length: 16 }, (_, i) => i + 1)}
            label="번호"
          />
        </InputWrapper>
        <InputWrapper>
          <SubmitButton text="다음" disabled />
          <Login>로그인 하러가기</Login>
        </InputWrapper>
      </Wrapper>
      <Image src={AuthBackground} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 63px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Content = styled.p`
  color: ${Color.gray300};
  ${Font.medium16};
`;

const ProgressBackground = styled.div`
  width: 360px;
  height: 7px;
  background-color: ${Color.gray100};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 66%;
  background-color: ${Color.blue800};
  border-radius: 15px 0 0 15px;
  position: absolute;
  top: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Login = styled.p`
  color: ${Color.gray300};
  ${Font.regular14};
  display: flex;
  align-self: center;
`;

const Image = styled.img`
  width: 60%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;
