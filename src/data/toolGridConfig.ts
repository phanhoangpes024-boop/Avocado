import type { GridItem } from "../types/grid";

export const toolGridItems: GridItem[] = [
  {
    id: "mock1",
    type: "mock",
    col: 1,
    row: 1,
    colSpan: 1,
    rowSpan: 1,
    title: "Tool 1",
    emoji: "🛠️",
    description: "Công cụ số 1"
  },
  {
    id: "mock2",
    type: "mock",
    col: 2,
    row: 1,
    colSpan: 1,
    rowSpan: 1,
    title: "Tool 2",
    emoji: "⚡",
    description: "Công cụ số 2"
  }
];

export const toolGridConfig = {
  cols: 4,
  cellSize: 270,
  gap: 18
};
