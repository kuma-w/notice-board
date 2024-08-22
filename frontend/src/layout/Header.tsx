import { Box, Button, Divider } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button sx={{ mx: 2, my: 1 }}>Login</Button>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default Header;
