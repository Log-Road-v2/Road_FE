import { ReactNode } from "react"
import { Screen, Structure, Bookmark } from "../../assets"
import { Color, Font } from "../../styles"

export interface TapDataType {
  id: number;
  name: string;
  icon: ReactNode;
  count: number;
}

export const StudentTabData: TapDataType[] = [
  {
    id: 1,
    name: "나의 프로젝트",
    icon: <Screen size={20} color={Color.white} />,
    count: 0
  },
  {
    id: 2,
    name: "제출한 프로젝트",
    icon: <Structure size={20} color={Color.white} />,
    count: 0
  },
  {
    id: 3,
    name: "북마크",
    icon: <Bookmark size={20} color={Color.white} />,
    count: 0
  }
]

export const TeacherTabData: TapDataType[] = [
  {
    id: 1,
    name: "북마크",
    icon: <Bookmark size={20} color={Color.white} />,
    count: 0
  }
]