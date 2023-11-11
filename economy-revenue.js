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
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const x = d3.scaleBand().range([0, width]).padding(0.1);
const y = d3.scaleLinear().range([height, 0]);

x.domain(data.map((d) => d.transportMode));

y.domain([
  1000,
  d3.max(data, function (d) {
    return d.count;
  }),
]);

svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function (d) {
    return x(d.transportMode);
  })
  .attr("width", x.bandwidth())
  .attr("y", height)
  .attr("height", 0)
  .style("fill", function (d) {
    if (d.date === "2021") {
      return "red";
    } else if (d.date === "2020") {
      return "green";
    } else {
      return "gray";
    }
  })
  .style("fill-opacity", 1)
  .transition()
  .duration(1000)
  .attr("y", function (d) {
    return y(d.count);
  })
  .attr("height", function (d) {
    return height - y(d.count);
  });

// add the x Axis
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// add the y Axis
svg.append("g").call(d3.axisLeft(y));
