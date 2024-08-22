import { Box } from "@mui/material";
import PostEditor from "../components/PostEditor";
import Header from "../layout/Header";

const Write = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", my: "10rem" }}>
        <PostEditor />
      </Box>
    </>
  );
};

export default Write;
