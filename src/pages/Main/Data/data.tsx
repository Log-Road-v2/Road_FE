import {
  FolderIcon,
  TrophyIcon,
  LaptopIcon,
  Archive,
  Vote,
  Trophy,
  File,
  Images
} from "../../../assets"
import { ShortcutDataType, NavigationListDataType, SlideImageDataType } from "./interface";

const ShortcutData: ShortcutDataType[] = [
  {
    id: 1,
    title: "DSM의 다양한 프로젝트 보러가기",
    description: "DSM 학생들의 다양한 프로젝트를 한눈에 보고 싶다면\n더보기를 눌러보세요!",
    href: "",
    icon: <FolderIcon size={32} />,
    positionX: 8,
    positionY: 0
  },
  {
    id: 2,
    title: "최신 랭킹 보러가기",
    description: "최근 대회 랭킹을 확인하려면 더보기를 클릭하세요!",
    href: "",
    icon: <TrophyIcon size={32} />,
    positionX: 32,
    positionY: 28
  },
  {
    id: 3,
    title: "프로젝트 업로드 하러가기",
    description: "지금 프로젝트를 업로드하여 다른 사람들과 공유하고,\n내 프로젝트를 저장해보세요!",
    href: "",
    icon: <LaptopIcon size={32} />,
    positionX: 55,
    positionY: 6
  }
];

const NavigationListData: NavigationListDataType[] = [
  {
    id: "Archive",
    title: "아카이브",
    icon: <Archive />,
    href: "/archive"
  },
  {
    id: "Vote",
    title: "투표",
    icon: <Vote />,
    href: "/vote"
  },
  {
    id: "Rank",
    title: "수상작",
    icon: <Trophy />,
    href: "/ranking"
  },
  {
    id: "Write",
    title: "글 작성",
    icon: <File />,
    href: "/write"
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
