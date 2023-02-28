/**
   https://www.react-graph-gallery.com/scatter-plot

   Progress by adding info to the tooltip, and groups
   **/

import * as d3 from "d3";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottom";
import { useState } from "react";
import { Tooltip } from "./Tooltip";

import styles from "./scatterplot.module.css";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type DataPoint = {
  x: number;
  y: number;
  size?: number;
  group?: string;
  subGroup?: string;
};

type ScatterplotProps = {
  width: number;
  height: number;
  data: DataPoint[];
};

const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const [hovered, setHovered] = useState<any>(null);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  // Scales: transform a dimension of the data into a pixel position
  // Domain: data extent
  // Range: axis space
  const yScale = d3.scaleLinear().domain([-1, 1]).range([boundsHeight, 1]);
  const xScale = d3.scaleLinear().domain([-1, 1]).range([-1, boundsWidth]);

  const allGroups = data.map((d) => String(d.group));
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  const allShapes = data.map((d, i) => {
    const className = // class if the circle depends on the hover state
      hoveredGroup && d.group !== hoveredGroup
        ? styles.scatterplotCircle + " " + styles.dimmed
        : styles.scatterplotCircle;

    const color = colorScale(d.group as string);

    return (
      <circle
        key={i}
        r={8}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        className={className}
        stroke={color}
        fill={color}
        fillOpacity={0.7}
        onMouseOver={() => {
          setHovered({
            xPos: xScale(d.x),
            yPos: yScale(d.y),
            name: d.subGroup,
            size: d.size,
            color,
            x: d.x,
            y: d.y,
          });
          setHoveredGroup(d.group as string);
        }}
        onMouseLeave={() => {
          setHovered(null);
          setHoveredGroup(null);
        }}
      />
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={40}
              height={boundsHeight}
            />
          </g>

          {/* Circles */}
          {allShapes}
        </g>
      </svg>

      {/* Tooltip */}
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft: MARGIN.left,
          marginTop: MARGIN.top,
        }}
      >
        <Tooltip interactionData={hovered} />
      </div>
    </div>
  );
};

export default Scatterplot;
