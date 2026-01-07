// ===== GRID ITEM TYPES =====

export type ItemSize = "large" | "wide" | "small" | "tall";

export type CardType = 
  | "intro" 
  | "blog" 
  | "spotify" 
  | "twitter" 
  | "map" 
  | "project" 
  | "darkmode" 
  | "newsletter";

export type ProjectTheme = "pink" | "yellow" | "mint";

// Base interface
export interface BaseGridItem {
  id: string;
  size: ItemSize;
  type: CardType;
}

// Intro Card
export interface IntroCardData extends BaseGridItem {
  type: "intro";
  emoji: string;
  name: string;
  title: string;
  bio: string;
  buttonText: string;
}

// Blog Card
export interface BlogCardData extends BaseGridItem {
  type: "blog";
  title: string;
  description: string;
  date: string;
  link?: string;
}

// Spotify Card
export interface SpotifyCardData extends BaseGridItem {
  type: "spotify";
  status: string;
  song: string;
  artist: string;
}

// Twitter Card
export interface TwitterCardData extends BaseGridItem {
  type: "twitter";
  link?: string;
}

// Map Card
export interface MapCardData extends BaseGridItem {
  type: "map";
  emoji: string;
  location?: string;
}

// Project Card
export interface ProjectCardData extends BaseGridItem {
  type: "project";
  emoji: string;
  name: string;
  theme: ProjectTheme;
  link?: string;
}

// Dark Mode Card
export interface DarkModeCardData extends BaseGridItem {
  type: "darkmode";
}

// Newsletter Card
export interface NewsletterCardData extends BaseGridItem {
  type: "newsletter";
  title: string;
  placeholder: string;
  buttonText: string;
  subscriberCount: string;
}

// Union type for all cards
export type GridItem =
  | IntroCardData
  | BlogCardData
  | SpotifyCardData
  | TwitterCardData
  | MapCardData
  | ProjectCardData
  | DarkModeCardData
  | NewsletterCardData;
