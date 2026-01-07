import type { GridItem } from "../types/grid";

// ===== GRID CONFIGURATION =====
// Thêm/xóa/sửa card chỉ cần chỉnh ở đây!

export const gridItems: GridItem[] = [
  // Row 1
  {
    id: "intro",
    size: "large",
    type: "intro",
    emoji: "👨‍💻",
    name: "Alex Rivera",
    title: "Developer & Designer",
    bio: "Passionate about React, Design, Startups, and Music. Building beautiful experiences that make a difference.",
    buttonText: "Toggle Lockdown"
  },
  {
    id: "blog",
    size: "wide",
    type: "blog",
    title: "Building Better Products",
    description: "A deep dive into product thinking and user experience design principles that matter.",
    date: "Mar 15, 2024",
    link: "#"
  },

  // Row 2
  {
    id: "spotify",
    size: "small",
    type: "spotify",
    status: "Offline. Last played",
    song: "Midnight City",
    artist: "M83"
  },
  {
    id: "twitter",
    size: "small",
    type: "twitter",
    link: "https://twitter.com"
  },
  {
    id: "map",
    size: "small",
    type: "map",
    emoji: "📍",
    location: "San Francisco"
  },
  {
    id: "project1",
    size: "small",
    type: "project",
    emoji: "🎨",
    name: "Design System",
    theme: "pink",
    link: "#"
  },

  // Row 3
  {
    id: "project2",
    size: "small",
    type: "project",
    emoji: "📱",
    name: "Mobile App",
    theme: "yellow",
    link: "#"
  },
  {
    id: "darkmode",
    size: "small",
    type: "darkmode"
  },
  {
    id: "project3",
    size: "small",
    type: "project",
    emoji: "🚀",
    name: "SaaS Platform",
    theme: "mint",
    link: "#"
  },
  {
    id: "newsletter",
    size: "wide",
    type: "newsletter",
    title: "Stay Updated",
    placeholder: "your@email.com",
    buttonText: "Subscribe",
    subscriberCount: "1,234 subscribers"
  }
];

// ===== SITE CONFIG =====
export const siteConfig = {
  logo: "nev",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ]
};
