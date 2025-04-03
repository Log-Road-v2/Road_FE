import { NavigationListDataType, SiteInfoType } from "./interface"

const NavigationListData: NavigationListDataType[] = [
  {
    id: 1,
    name: "아카이브",
    href: "",
    login: true
  },
  {
    id: 2,
    name: "투표",
    href: "",
    login: true
  },
  {
    id: 3,
    name: "수상작",
    href: "",
    login: true
  },
  {
    id: 4,
    name: "글작성",
    href: "",
    login: true
  },
  {
    id: 5,
    name: "마이페이지",
    href: "",
    login: true
  },
]

const SiteInfo: SiteInfoType[] = [
  {
    id: 1,
    content: "DSM 프로젝트 통합 플랫폼",
  },
  {
    id: 2,
    content: "대전광역시 유성구 가정북로 76 (장동) 대덕소프트웨어마이스터고등학교",
  },
  {
    id: 3,
    content: "dsm.log@dsm.hs.kr ",
  },
]

export { NavigationListData, SiteInfo }