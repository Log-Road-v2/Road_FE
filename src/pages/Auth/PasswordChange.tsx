import styled from "@emotion/styled";
import { Logo } from "../../assets";
import { Color, Font } from "../../styles";
import SubmitButton from "../../components/Common/Button/SubmitButton";
import AuthBackground from "../../assets/Png/AuthBackground.png";
import EmailInput from "../../components/Common/Input/emailInput";
import { useState } from "react";
import Input from "../../components/Common/Input";

export const PasswordChange = () => {
  const [form, setForm] = useState({
    email: "",
    code: "",
    newPassword: "",
  });

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  return (
    <Container>
      <Wrapper>
        <Top>
          <Logo />
          <Content>기록을 남기는 로드</Content>
        </Top>
        <InputWrapper>
          <EmailInput
            label="이메일"
            placeholder="이메일을 입력해주세요"
            value={form.email}
            onChange={handleChange("email")}
          />
          <Input
            label="인증번호"
            type="text"
            placeholder="인증번호를 입력해주세요"
            value={form.code}
            onChange={handleChange("code")}
          />
          <Input
            label="새 비밀번호"
            type="password"
            placeholder="새로운 비밀번호를 입력해주세요"
            value={form.newPassword}
            onChange={handleChange("newPassword")}
          />
        </InputWrapper>
        <InputWrapper>
          <SubmitButton text="비밀번호 찾기" disabled />
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
  width: 360px;
`;

const Content = styled.p`
  color: ${Color.gray300};
  ${Font.medium16};
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
