import { useState } from "react";
import "./app.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import OtpGenerator from "./components/OtpGenerator";
import Hello from "./components/Hello";

const components = [OtpGenerator, Hello];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % components.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + components.length) % components.length
    );
  };

  const CurrentComponent = components[currentIndex];

  return (
    <div className="container">
      <div className="projectPageNumber">
        <h2>
          {currentIndex + 1}/{components.length}
        </h2>
      </div>
      <ArrowCircleLeftOutlinedIcon
        fontSize="large"
        className="navButton left"
        onClick={prevProject}
      />

      <div className="appDiv">
        <CurrentComponent />
      </div>

      <ArrowCircleRightOutlinedIcon
        fontSize="large"
        className="navButton left"
        onClick={nextProject}
      />
    </div>
  );
}
