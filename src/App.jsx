import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/posts/:id" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App
