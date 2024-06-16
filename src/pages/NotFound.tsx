import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const NotFound: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Sorry. This page is not found</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
