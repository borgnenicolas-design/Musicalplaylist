import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import "./App.css";
import SongsPage from "./Pages/SongsPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import "./reset.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route path="/songs" element={<SongsPage />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
