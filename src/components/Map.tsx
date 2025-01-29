import { useEffect, useRef } from "react";
import * as d3 from "d3";
import sriLankaDistricts from "@/data/sri-lanka-districts.json";

interface MapProps {
  data: any;
}

const Map = ({ data }: MapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 800;

    // Clear existing content
    svg.selectAll("*").remove();

    // Set up projection
    const projection = d3.geoMercator()
      .center([81, 7.5])
      .scale(5000)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw districts
    svg.selectAll("path")
      .data(sriLankaDistricts.features)
      .join("path")
      .attr("d", path)
      .attr("fill", "#e2e8f0")
      .attr("stroke", "#cbd5e1")
      .attr("class", "district")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .attr("fill", "#bfdbfe");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .attr("fill", "#e2e8f0");
      });
  }, [data]);

  return (
    <div className="relative w-full h-[600px]">
      <svg
        ref={svgRef}
        viewBox="0 0 600 800"
        className="w-full h-full"
      />
    </div>
  );
};

export default Map;