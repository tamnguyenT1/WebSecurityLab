import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import BypassFrontLabs from "./features/BypassFrontend/labs/Labs.tsx";
import BypassFrontLab01 from "./features/BypassFrontend/labs/lab01/Lab01.tsx";
import BypassFrontLab02 from "./features/BypassFrontend/labs/lab02/Lab02.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/bypass-frontend/labs" element={<BypassFrontLabs />} />
            <Route
              path="/bypass-frontend/labs/lab01"
              element={<BypassFrontLab01 />}
            />
            <Route
              path="/bypass-frontend/labs/lab02"
              element={<BypassFrontLab02 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
