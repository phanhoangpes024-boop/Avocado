export type CardType = "intro" | "blog" | "spotify" | "twitter" | "map" | "project" | "darkmode" | "newsletter";
export type ProjectTheme = "pink" | "yellow" | "mint";

export interface BaseGridItem {
  id: string;
  type: CardType;
  col: number;       // Cột bắt đầu (1-4)
  row: number;       // Hàng bắt đầu
  colSpan: number;   // Số cột chiếm (1, 2, 3...)
  rowSpan: number;   // Số hàng chiếm (1, 2, 3...)
}

export interface IntroCardData extends BaseGridItem {
  type: "intro";
  emoji: string;
  name: string;
  title: string;
  bio: string;
  buttonText: string;
}

export interface BlogCardData extends BaseGridItem {
  type: "blog";
  title: string;
  description: string;
  date: string;
  link?: string;
}

export interface SpotifyCardData extends BaseGridItem {
  type: "spotify";
  status: string;
  song: string;
  artist: string;
}

export interface TwitterCardData extends BaseGridItem {
  type: "twitter";
  link?: string;
}

export interface MapCardData extends BaseGridItem {
  type: "map";
  emoji: string;
  location?: string;
}

export interface ProjectCardData extends BaseGridItem {
  type: "project";
  emoji: string;
  name: string;
  theme: ProjectTheme;
  link?: string;
}

export interface DarkModeCardData extends BaseGridItem {
  type: "darkmode";
}

export interface NewsletterCardData extends BaseGridItem {
  type: "newsletter";
  title: string;
  placeholder: string;
  buttonText: string;
  subscriberCount: string;
}

export type GridItem =
  | IntroCardData
  | BlogCardData
  | SpotifyCardData
  | TwitterCardData
  | MapCardData
  | ProjectCardData
  | DarkModeCardData
  | NewsletterCardData;
