import type { GridItem } from "../types/grid";

// colSpan = số cột, rowSpan = số hàng
export const gridItems: GridItem[] = [
  // Large cards (2x2)
  { id: "intro", type: "intro", col: 1, row: 1, colSpan: 2, rowSpan: 2, emoji: "👨‍💻", name: "Alex Rivera", title: "Developer & Designer", bio: "Passionate about React, Design, Startups, and Music. Building beautiful experiences.", buttonText: "Toggle Lockdown" },
  
  // Wide cards (2x1)
  { id: "blog", type: "blog", col: 3, row: 1, colSpan: 2, rowSpan: 1, title: "Building Better Products", description: "A deep dive into product thinking and UX design.", date: "Mar 15, 2024" },
  
  // Small cards (1x1)
  { id: "spotify", type: "spotify", col: 3, row: 2, colSpan: 1, rowSpan: 1, status: "Offline. Last played", song: "Midnight City", artist: "M83" },
  { id: "twitter", type: "twitter", col: 4, row: 2, colSpan: 1, rowSpan: 1, link: "https://twitter.com" },
  { id: "map", type: "map", col: 1, row: 3, colSpan: 1, rowSpan: 1, emoji: "📍", location: "San Francisco" },
  { id: "project1", type: "project", col: 2, row: 3, colSpan: 1, rowSpan: 1, emoji: "🎨", name: "Design System", theme: "pink" },
  { id: "project2", type: "project", col: 3, row: 3, colSpan: 1, rowSpan: 1, emoji: "📱", name: "Mobile App", theme: "yellow" },
  { id: "darkmode", type: "darkmode", col: 4, row: 3, colSpan: 1, rowSpan: 1 },
  
  // Tall card (1x2)
  { id: "project3", type: "project", col: 1, row: 4, colSpan: 1, rowSpan: 2, emoji: "🚀", name: "SaaS Platform", theme: "mint" },
  
  // Wide card (2x1)
  { id: "newsletter", type: "newsletter", col: 2, row: 4, colSpan: 2, rowSpan: 1, title: "Stay Updated", placeholder: "your@email.com", buttonText: "Subscribe", subscriberCount: "1,234 subscribers" }
];

export const gridConfig = {
  cols: 4,
  cellSize: 270,
  gap: 18
};

export const siteConfig = {
  logo: "nev",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ]
};
