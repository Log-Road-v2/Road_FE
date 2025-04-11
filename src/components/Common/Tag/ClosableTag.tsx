import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";
import { X } from "../../../assets/X"

interface PropsType {
  text?: string
  onClose?: () => void
}

const ClosableTag = ({ text, onClose }: PropsType) => {
  return (
    <Container>
      <InnerText>{text}</InnerText>
      <X size={16} color={Color.blue500} onClick={onClose} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 8px 24px;
  border: 1px solid ${Color.blue300};
  border-radius: 20px;
`

const InnerText = styled.span`
  color: ${Color.blue500};
  ${Font.semi12}
`

export default ClosableTag
