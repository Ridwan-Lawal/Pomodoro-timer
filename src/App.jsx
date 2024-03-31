import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Settings from "./components/settings/Settings";
import { useTimer } from "./contexts/TimerContext";

/*

- i have created the counter for the pomdoro
===== todo
- create the counter for the short break and long break
- Use conditionals and state to handle them,
- add the total number of seconds for each counter in
  in the counter progress bar
- handle the settings



*/

function App() {
  const { font } = useTimer();

  return (
    <div
      className={`${font} bg-darkestblue min-h-screen overflow-auto  py-16  `}
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
