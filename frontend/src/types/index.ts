export interface Post {
  idx: number;
  title: string;
  content: string;
  writer: string;
  insert_time?: string;
  update_time?: string;
  delete_time?: string;
  view_cnt: number;
}
