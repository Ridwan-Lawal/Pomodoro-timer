import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Settings from "./components/settings/Settings";
import { useTimer } from "./contexts/TimerContext";

function App() {
  const { font, isSettingsApplied, currentFont } = useTimer();

  return (
    <div
      className={`${
        isSettingsApplied ? font : currentFont
      } bg-darkestblue min-h-screen overflow-auto    `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
