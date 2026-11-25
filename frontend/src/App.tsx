import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/*<Route path="/songs" element={<SongsPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
