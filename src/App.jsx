import { useEffect, useState } from "react";
import "./App.css";
import FlipClockCountDown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBG from "./assets/video.mp4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [targetTime] = useState(
    parseInt(localStorage.getItem("targetTime")) ||
      new Date().getTime() + 24 * 3600 * 1000
  );

  useEffect(() => {
    // Save the target time to local storage
    localStorage.setItem("targetTime", targetTime.toString());
  }, [targetTime]);

  const notify = () => {
    toast.success("You will be notified !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <section className="page">
      {/* Overlay */}
      <div className="overlay"> </div>
      {/* Video */}
      <video src={VideoBG} autoPlay loop muted></video>
      {/* Content */}
      <div className="page_content">
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and We'll let you know once the site goes live.
        </h3>
        {/* Clock */}
        <FlipClockCountDown
          to={targetTime}
          className="flip-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="btn" onClick={notify}>
          Notify Me
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </section>
  );
}

export default App;
