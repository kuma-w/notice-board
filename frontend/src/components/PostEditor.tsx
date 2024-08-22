import { Box, Paper, TextField, Typography } from "@mui/material";

const PostEditor = () => {
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
        <Paper>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4">제목</Typography>
            <TextField />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4">작성자</Typography>
            <Typography variant="h5">작성자</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default PostEditor;
