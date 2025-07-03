import { useState } from "react"
import * as S from "./style"
import Information from "./Information";
import Details from "./Details"
import Preview from "./Preview";
import WriteImage from "../../assets"
import SubmitButton from "../../components/Common/Button/SubmitButton";
import { useWriteStore } from "../../stores/useWriteStore";
import { createProject, saveProjectDraft } from "../../apis/project";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate()
  const writeTab = ["기본정보", "설명", "미리보기"];
  const [activeTab, setActiveTab] = useState(writeTab[0]);

  const { info, reset } = useWriteStore();
  const { contestId, authorCategory, projectName, startDate, endDate } = info

  const createMutation = createProject();
  const saveDraftMutation = saveProjectDraft();

  const renderContent = () => {
    switch (activeTab) {
      case "기본정보":
        return <Information />;
      case "설명":
        return <Details />;
      case "미리보기":
        return <Preview />;
      default:
        return <Information />;
    }
  };

  const isUploadDisabled = !contestId || !projectName || !authorCategory || !startDate || !endDate

  const handleSaveDraft = () => {
    saveDraftMutation.mutate(info, {
      onSuccess: () => {
        navigate('/main');
        reset();
      }
    })
  }

  const handleUpload = () => {
    createMutation.mutate(info, {
      onSuccess: () => {
        navigate('/main');
        reset();
      }
    });
  };

  return (
    <S.Container>
      <S.ImageWrapper src={WriteImage} />

      <S.TabWrapper>
        {writeTab.map((name) => (
          <S.Tab
            key={name}
            onClick={() => setActiveTab(name)}
            isSelect={activeTab === name ? true : false}
          >
            {name}
          </S.Tab>
        ))}
      </S.TabWrapper>

      <S.InfoWrapper>
        <S.Title>프로젝트 설명을 입력해주세요.</S.Title>
        <S.DescriptionWrapper>
          <S.Description>프로젝트 설명을 작성한 후 업로드하면 담당 선생님이 내용을 검토합니다.</S.Description>
          <S.Description>승인될 시 프로젝트가 정식으로 등록되며 다른 사용자도 확인할 수 있습니다. 내용이 부족하거나 수정이 필요한 경우 프로젝트가 반려됩니다.</S.Description>
        </S.DescriptionWrapper>
      </S.InfoWrapper>

      <S.ContentWrapper>{renderContent()}</S.ContentWrapper>

      <S.ButtonWrapper>
        <S.SaveDraftButton onClick={handleSaveDraft}>임시저장</S.SaveDraftButton>
        <SubmitButton
          text="업로드"
          width="172px"
          disabled={isUploadDisabled}
          onClick={handleUpload}
        />
      </S.ButtonWrapper>

    </S.Container>
  )
}

export default Write