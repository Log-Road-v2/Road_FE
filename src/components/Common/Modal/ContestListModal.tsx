import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

export const ContestListModal = () => {
  const Contest = [
    { title: "asdfg" },
    { title: "ewrt" },
    { title: "gff" },
    { title: "sdfg" },
    { title: "juthg" },
    { title: "vgtr" },
    { title: "uh" },
    { title: "xcvbgf" },
    { title: "hjvbnkmjjvhbknl" },
  ];
  return (
    <Container>
      {Contest.map((element) => (
        <ContestWrapper key={element.title}>
          <Title>{element.title}</Title>
        </ContestWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 294px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: ${Color.gray100};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(179, 180, 184, 0.2);
`;

const ContestWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Title = styled.p`
  ${Font.medium14}
  color: ${Color.gray500};
`;
