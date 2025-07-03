import styled from "@emotion/styled";
import { Logo } from "../../../assets";
import { Color, Font } from "../../../styles";
import SubmitButton from "../../../components/Common/Button/SubmitButton";
import AuthBackground from "../../../assets/Png/AuthBackground.png";
import Input from "../../../components/Common/Input";
import { useRegisterStore } from "../../../stores/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignUp } from "../../../apis/auth";
import EmailInput from "../../../components/Common/Input/EmailInput"

export const Info = () => {
  const navigate = useNavigate();

  const { mutate: signUp } = useSignUp();

  const { name, email, password, code, setField } = useRegisterStore();
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleChange =
    (key: "name" | "email" | "password" | "code") =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setField(key, e.target.value);
      };

  const isValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.length >= 8 &&
    password === passwordCheck;

  const handleSubmit = () => {
    if (!isValid) return;

    signUp(undefined, {
      onSuccess: () => { navigate("/login") },
      onError: () => console.log("회원가입에 실패했습니다.")
    })
  };

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
          <Input
            label="이름"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={handleChange("name")}
          />
          <EmailInput
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={handleChange("email")}
          />
          <Input
            label="인증번호 전송"
            type="text"
            placeholder="인증번호를 입력해주세요"
            value={code}
            onChange={handleChange("code")}
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handleChange("password")}
          />
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 확인해주세요"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <SubmitButton text="회원가입" disabled={!isValid} onClick={handleSubmit} />
          <Login onClick={() => navigate('/login')}>로그인 하러가기</Login>
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
  width: 100%;
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
