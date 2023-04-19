import { Routes, Route } from "react-router-dom";

import Main from "./main";
import Profile from "./profile";
import Commits from "./commits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:login" element={<Profile/>}/>
      <Route path="/:login/:name" element={<Commits/>}/>
    </Routes>
  );
}

export default App;