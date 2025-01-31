import "./App.css";
import Header from "./components/header";
import AppRoutes from "./AppRoutes";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Stack mt={8} padding={2}>
        <AppRoutes />
      </Stack>
    </>
  );
}

export default App;
