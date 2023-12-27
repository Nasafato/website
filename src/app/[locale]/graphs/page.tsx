"use client";
import { useEffect } from "react";
import JXG from "jsxgraph";

export default function GraphPage() {
  useEffect(() => {
    const board = JXG.JSXGraph.initBoard("jxgbox", {
      boundingbox: [-1, 2, 7, -1],
      axis: true,
      defaultAxes: {
        x: {
          name: "T",
          withLabel: true,
          ticks: { visible: true, minTicksDistance: 1, minorTicks: 0 },
          label: {
            position: "rt",
            offset: [-10, -10],
          },
        },
        y: {
          withLabel: true,
          ticks: {
            visible: true,
            minorTicks: 0,
            minTicksDistance: 1,
            insertTicks: false,
          },
          name: "v(t)",
          label: {
            position: "rt",
            offset: [-20, -15],
          },
        },
      },
    });

    const p1 = board.create("point", [0, 0], { fixed: true, name: "" });
    const p2 = board.create("point", [1, 1], { fixed: true, name: "" });
    const p2_2 = board.create("point", [1, 0], { fixed: true, name: "" });
    const p3 = board.create("point", [5, 1], { fixed: true, name: "" });
    const p3_2 = board.create("point", [5, 0], { fixed: true, name: "" });
    board.create("segment", [p2, p2_2], {
      dash: 1,
      strokeWidth: 2,
      strokeColor: "black",
    });

    board.create("segment", [p3, p3_2], {
      dash: 1,
      strokeWidth: 2,
      strokeColor: "black",
    });

    const p4 = board.create("point", [6, 0], { fixed: true, name: "" });

    // Trapezoid
    const poly = board.create("polygon", [p1, p2, p3, p4]);

    // Labels
    const h1 = board.create("text", [1.1, 0.5, "aT"], {
      anchorX: "left",
      anchorY: "middle",
    });
    const h2 = board.create("text", [4.9, 0.5, "aT"], {
      anchorX: "right",
      anchorY: "middle",
    });

    const t3 = board.create("text", [3, 1, "4T"], {
      anchorX: "middle",
      anchorY: "bottom",
    });
  }, []);

  return (
    <div>
      <div id="jxgbox" className="max-w-[400px] max-h-[300px]"></div>
    </div>
  );
}
