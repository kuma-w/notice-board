import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Board from "../components/Board";
import { API_BOARD } from "../constants";
import Header from "../layout/Header";
import { Post } from "../types";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BOARD);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPosts(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", my: "10rem" }}>
        <Board posts={posts} />
      </Box>
    </>
  );
};

export default Home;
