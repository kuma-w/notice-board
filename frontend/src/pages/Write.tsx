import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PostEditor from "../components/PostEditor";
import { API_DETAIL } from "../constants";
import Header from "../layout/Header";
import { Post } from "../types";

const Write = () => {
  const [post, setPost] = useState<Post>();

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const idx = params.get("idx");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_DETAIL(idx));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPost(result);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", my: "10rem" }}>
        <PostEditor post={post} />
      </Box>
    </>
  );
};

export default Write;
