import "./styles/global.css";
import { Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar/Navbar";
import { Home, Features, AudienceSection, SelectWorkoutSection } from "./pages/Home";
import {} from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import LevelSection from "./pages/Level/Level";
import CameraSetupPage from "./pages/Warmup/Warmup";
import GamePage from "./pages/Exercise/Exercise";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   {/* <Dashboard /> */}
    //   <Routes>
    //     {/* <Navbar />
    //     <Home />
    //     <Features />
    //     <AudienceSection />
    //     <SelectWorkoutSection /> */}
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/profile" element={<Dashboard />} />
    //     {/* <Route path="/about" element={<About />} /> */}
    //   </Routes>
    //   {/* <Footer /> */}
    // </>
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Features />
              <AudienceSection />
              <SelectWorkoutSection />
            </>
          }
        />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/level" element={<LevelSection />} />
        <Route path="/warmup" element={<CameraSetupPage />} />
        <Route path="/exercise" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
