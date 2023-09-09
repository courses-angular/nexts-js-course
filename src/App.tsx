import React from "react";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import { Route, Routes } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
