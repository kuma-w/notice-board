import {
  Box,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { Post } from "../types";

interface Iprops {
  post?: Post;
}

const PostEditor = ({ post }: Iprops) => {
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
          <Box sx={{ display: "flex", alignItems: "center", m: 2 }}>
            <Grid container direction="column">
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="body1">제목</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth id="vehicle" type="text" size="small" />
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="body1">작성자</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1">{post?.writer}</Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="body1">등록일시</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1">
                    {moment(post?.insert_time).format("YYYY-MM-DD HH:mm:ss")}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="body1">내용</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="vehicle"
                    type="text"
                    size="small"
                    multiline
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* <Divider /> */}
        </Paper>
      </Box>
    </>
  );
};

export default PostEditor;
