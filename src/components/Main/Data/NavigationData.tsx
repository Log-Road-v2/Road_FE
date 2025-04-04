import { FolderIcon, TrophyIcon, LaptopIcon, Archive, Vote, Trophy, File, Images } from "../../../assets"
import { ShortcutDataType, NavigationListDataType, SlideImageDataType } from "./interface";

const ShortcutData: ShortcutDataType[] = [
  {
    id: 1,
    title: "DSM의 다양한 프로젝트 보러가기",
    description: "아카이브에 다양한 프로젝트를 모으고 있어요\nDSM 학생들의 다양한 프로젝트를 보고 싶다면 더보기 버튼을 눌러주세요",
    href: "",
    icon: <FolderIcon size={32} />,
    positionX: 15,
    positionY: 0
  },
  {
    id: 2,
    title: "최신 랭킹 보러가기",
    description: "최근 열린 대회의 랭킹들을 보고 싶다면 더보기를 클릭해주세요\n과연 어떤 프로젝트들이 시상했을까요?",
    href: "",
    icon: <TrophyIcon size={32} />,
    positionX: 35,
    positionY: 17
  },
  {
    id: 3,
    title: "프로젝트 업로드 하러가기",
    description: "지금 프로젝트를 업로드해보세요\n다른 사람들과 공유하고 자신의 프로젝트를 저장해보세요",
    href: "",
    icon: <LaptopIcon size={32} />,
    positionX: 55,
    positionY: 7
  }
];

const NavigationListData: NavigationListDataType[] = [
  {
    id: "Archive",
    title: "아카이브",
    icon: <Archive />
  },
  {
    id: "Vote",
    title: "투표",
    icon: <Vote />
  },
  {
    id: "Rank",
    title: "수상작",
    icon: <Trophy />
  },
  {
    id: "Write",
    title: "글 작성",
    icon: <File />
  },
]

const SlideImageData: SlideImageDataType[] = [
  {
    image: Images.MainImage1,
    title: "DSM 프로젝트 통합 플랫폼\n모든 프로젝트를 한 눈에 확인하자",
    subTitle: "다양한 프로젝트를 하나로 모으고 통합해보자"
  },
  {
    image: Images.MainImage2,
    title: "DSM 투표 플랫폼\n원하는 프로젝트에 지금 바로 투표하자",
    subTitle: "원하는 프로젝트에 쉽게 투표해보자"
  },
  {
    image: Images.MainImage3,
    title: "편리하게 저장할 수 있는 공간\nROAD에 프로젝트를 업로드하자",
    subTitle: "나의 프로젝트를 편리하게 저장해보자"
  },
]

export { ShortcutData, NavigationListData, SlideImageData };
