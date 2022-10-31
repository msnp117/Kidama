import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";

import './canvas.css'

export default function Canvas() {
  const canvas = useRef(null);

  const clear = () => {
    canvas.current.clear();
  };

  const undo = () => {
    canvas.current.undo();
  };

  return (
    <div className="container ">
      <h1>Canvas</h1>
      <div className="p-3">
        <CanvasDraw className="m-auto" canvasWidth={300} ref={canvas} />

        <div className="buttons d-flex m-auto mt-4 justify-content-between">
          <div>
            <button className="btn btn-secondary" onClick={clear}>
              Clear
            </button>
            <button className="btn btn-secondary" onClick={undo}>
              Undo
            </button>
          </div>
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
}
