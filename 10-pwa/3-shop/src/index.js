import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/css/font.css";
import "./assets/css/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    console.log("onUpdate");

    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });

      waitingServiceWorker.addEventListener("statechange", (event) => {
        console.log(event.target.state);
        if (event.target.state === "activated") {
          let s = document.getElementById("update-service-worker-dialog");
          s.classList.remove("hidden");
          document
            .getElementById("update-service-worker-btn")
            .addEventListener("click", () => {
              window.location.href = "https://localhost:3000";
              window.location.reload();
            });
        }
      });
    }
  },
});
