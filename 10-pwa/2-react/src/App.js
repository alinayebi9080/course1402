import React from "react";
import UpdateDialog from "./UpdateDialog";

function App() {
  return (
    <div className="App">
      <button
        id="install_button"
        hidden
        className=" w-full text-white bg-red-500 p-2"
      >
        نصب PWA
      </button>
      <UpdateDialog />
      <p>Ali</p>
    </div>
  );
}

export default App;
