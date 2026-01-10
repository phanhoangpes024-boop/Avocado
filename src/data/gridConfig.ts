import type { GridItem } from "../types/grid";

// colSpan = số cột, rowSpan = số hàng
export const gridItems: GridItem[] = [
  // Wide card (2x1) - Intro
  { 
    id: "intro", 
    type: "intro", 
    col: 1, 
    row: 1, 
    colSpan: 2, 
    rowSpan: 1, 
    emoji: "👨‍💻", 
    name: "Hector Phan", 
    title: "Developer", 
    bio: "Hello, tôi là Hector ! Tôi là một Developer đến tư Sài Gòn. Tôi có thể", 
    buttonText: "" 
  },
  
  // Small cards (1x1) - Hàng 1
  { 
  id: "spotify", 
  type: "spotify", 
  col: 3, 
  row: 1, 
  colSpan: 1, 
  rowSpan: 1, 
  discordId: "1459064196032495628"
},
  { 
  id: "twitter", 
  type: "twitter", 
  col: 4, 
  row: 1, 
  colSpan: 1, 
  rowSpan: 1, 
  link: "https://www.facebook.com/hector162000/"  // ← Đổi link ở đây
},
  
  // Wide card (2x1) - Hàng 2
  { 
    id: "blog", 
    type: "blog", 
    col: 1, 
    row: 2, 
    colSpan: 2, 
    rowSpan: 1, 
    title: "Building Better Products", 
    description: "A deep dive into product thinking and UX design.", 
    date: "Mar 15, 2024" 
  },
  
  // Small cards (1x1) - Hàng 2
  { 
    id: "map", 
    type: "map", 
    col: 3, 
    row: 2, 
    colSpan: 1, 
    rowSpan: 1, 
    emoji: "📍", 
    location: "Gò Vấp, TP.HCM",
    lat: 10.8317885,      // Vĩ độ (latitude)
    lng: 106.6425604,     // Kinh độ (longitude)
    zoom: 15              // Mức zoom (10-20, càng lớn càng gần)
  },
  { 
    id: "darkmode", 
    type: "darkmode", 
    col: 4, 
    row: 2, 
    colSpan: 1, 
    rowSpan: 1 
  },
  {
    id: "partners",
    type: "partners",
    col: 1,
    row: 5,
    colSpan: 3,
    rowSpan: 1,
    title: "Trusted By",
    footer: "And 20+ more partners"
  },
  
  // Project cards - Hàng 3
  { 
    id: "project1", 
    type: "project", 
    col: 1, 
    row: 3, 
    colSpan: 1, 
    rowSpan: 1, 
    emoji: "🎨", 
    name: "Design System", 
    theme: "pink" 
  },
  { 
    id: "project2", 
    type: "project", 
    col: 2, 
    row: 3, 
    colSpan: 1, 
    rowSpan: 1, 
    emoji: "📱", 
    name: "Mobile App", 
    theme: "yellow" 
  },
  
  // Wide card (2x1) - Hàng 3
  { 
    id: "newsletter", 
    type: "newsletter", 
    col: 3, 
    row: 3, 
    colSpan: 2, 
    rowSpan: 1, 
    title: "Stay Updated", 
    placeholder: "your@email.com", 
    buttonText: "Subscribe", 
    subscriberCount: "1,234 subscribers" 
  },
  
  // Tall card (1x2) - Hàng 4
  { 
    id: "project3", 
    type: "project", 
    col: 1, 
    row: 4, 
    colSpan: 1, 
    rowSpan: 2, 
    emoji: "🚀", 
    name: "SaaS Platform", 
    theme: "mint" 
  }
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