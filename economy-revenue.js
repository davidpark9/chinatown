import * as d3 from "https://unpkg.com/d3?module";

const data = [
  { date: "2020", transportMode: "Restaurants", count: 40000 },
  { date: "2020", transportMode: "Retail", count: 35000 },
  { date: "2020", transportMode: "Services", count: 25000 },
  { date: "2021", transportMode: "Restaurants", count: 55000 },
  { date: "2021", transportMode: "Retail", count: 30000 },
  { date: "2021", transportMode: "Services", count: 15000 },
];

var margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = 700 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

const svg = d3
  .select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const x = d3.scaleBand().range([0, width]).padding(0.1);
const y = d3.scaleLinear().range([height, 0]);

x.domain(data.map((d) => d.transportMode));
y.domain([0, d3.max(data, (d) => d.count)]);

const gradient = svg
  .append("defs")
  .append("linearGradient")
  .attr("id", "gradient")
  .attr("x1", "0%")
  .attr("y1", "100%")
  .attr("x2", "0%")
  .attr("y2", "0%");

gradient
  .append("stop")
  .attr("offset", "0%")
  .style("stop-color", "rgba(0, 0, 255, 0.7)");

gradient
  .append("stop")
  .attr("offset", "100%")
  .style("stop-color", "rgba(255, 0, 0, 0.7)");

svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.transportMode))
  .attr("width", x.bandwidth())
  .attr("y", height)
  .attr("height", 0)
  .style("fill", "none")
  .style("stroke", (d) => `url(#gradient)`)
  .style("stroke-dasharray", "9,9")
  .transition()
  .duration(2000)
  .attr("y", (d) => y(d.count))
  .attr("height", (d) => height - y(d.count));

// Add the x Axis
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add the y Axis
svg.append("g").call(d3.axisLeft(y));

// Add text for 2020
svg
  .selectAll(".text-2020") // Update the class name to distinguish from 2021 text
  .data(data.filter((d) => d.date === "2020"))
  .enter()
  .append("text")
  .attr("class", "text-2020") // Set a different class name for 2020 text
  .attr("x", (d) => x(d.transportMode) + x.bandwidth() / 2)
  .attr("y", (d) => y(d.count) - 10) // Adjust the vertical position of the text
  .attr("text-anchor", "middle")
  .attr("fill", "#fff") // Set the text color to white
  .text("2020");

// Add text for 2021
svg
  .selectAll(".text-2021") // Set a different class name for 2021 text
  .data(data.filter((d) => d.date === "2021"))
  .enter()
  .append("text")
  .attr("class", "text-2021") // Set a different class name for 2021 text
  .attr("x", (d) => x(d.transportMode) + x.bandwidth() / 2)
  .attr("y", (d) => y(d.count) - 10) // Adjust the vertical position of the text
  .attr("text-anchor", "middle")
  .attr("fill", "#fff") // Set the text color to white
  .text("2021");