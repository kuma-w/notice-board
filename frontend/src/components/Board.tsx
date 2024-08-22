import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Post } from "../types";

interface Iprops {
  posts: Post[];
}

const Board = ({ posts }: Iprops) => {
  const navigate = useNavigate();
  const handleWriteBtnClick = () => {
    navigate("/board/write");
  };
  return (
    <>
      <Box
        sx={{
          width: "90%",
          maxWidth: "65rem",
          minWidth: "40rem",
          height: "50rem",
        }}
      >
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width={5}>No.</TableCell>
                  <TableCell width={30}>제목</TableCell>
                  <TableCell width={10}>작성자</TableCell>
                  <TableCell width={10}>작성일</TableCell>
                  <TableCell width={10}>조회수</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => {
                  const isoDateString = post.insert_time;
                  let dateOnly;
                  if (isoDateString) {
                    const date = new Date(isoDateString);
                    dateOnly = date.toISOString().split("T")[0];
                  } else {
                    dateOnly = "";
                  }

                  return (
                    <TableRow key={post.idx}>
                      <TableCell>{post.idx}</TableCell>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.writer}</TableCell>
                      <TableCell>{dateOnly}</TableCell>
                      <TableCell>{post.view_cnt}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Button onClick={handleWriteBtnClick}>글쓰기</Button>
        </Box>
      </Box>
    </>
  );
};

export default Board;
