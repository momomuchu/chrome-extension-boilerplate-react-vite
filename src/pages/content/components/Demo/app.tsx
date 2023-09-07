import { useEffect } from "react";
import "./app.css";
export default function App() {
  useEffect(() => {
    console.log("content view loaded");
    console.log("content view loaded");
    console.log("content view loaded");
  }, []);

  return <div className="extension-popup">content view</div>;
}
