export const API_BOARD = "http://localhost:4000/board";

export const API_DETAIL = (param: string | null) =>
  `http://localhost:4000/board/write/${param}`;
