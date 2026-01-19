import type { GridItem } from "../types/grid";

export const toolGridItems: GridItem[] = [
  {
    id: "qr-generator",
    type: "minitool",
    col: 1,
    row: 1,
    colSpan: 1,
    rowSpan: 1,
    name: "Tạo QR",
    lottieFile: "/qr.lottie"
  },
  {
    id: "image-editor",
    type: "minitool",
    col: 2,
    row: 1,
    colSpan: 1,
    rowSpan: 1,
    name: "Chỉnh ảnh",
    lottieFile: "/img.lottie"
  }
];

export const toolGridConfig = {
  cols: 4,
  cellSize: 270,
  gap: 18
};
