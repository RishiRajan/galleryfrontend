import React, { useState } from "react";
import { Button } from "@mui/material";

import MainPage from "./Pages/MainPage";
import SpiderWarningDialog from "./Components/Warning/WarningDialog";

function App() {
  const [openWarning, setOpenWarning] = useState(true); // Initially open warning dialog

  const handleWarningClose = (acknowledged) => {
    if (acknowledged) {
      setOpenWarning(false); // If user acknowledges, close warning dialog
    } else {
      // Handle the case where the user declines the warning (you may want to redirect or take other action)
      console.log("User declined warning.");
    }
  };

  return (
    <div className="App">
      <SpiderWarningDialog open={openWarning} onClose={handleWarningClose} />
      <MainPage />
    </div>
  );
}

export default App;
