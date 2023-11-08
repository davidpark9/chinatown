// step 1 Import the D3 module from a CDN
import * as d3 from 'https://unpkg.com/d3?module'


const data = [
  {"date": "2020-03-01", "transportMode": "Bus", "count": 10000},
  {"date": "2020-03-01", "transportMode": "Subway", "count": 50000},
  {"date": "2020-03-01", "transportMode": "Taxi", "count": 20000},
  {"date": "2021-03-01", "transportMode": "Bus", "count": 5000},
  {"date": "2021-03-01", "transportMode": "Subway", "count": 25000},
  {"date": "2021-03-01", "transportMode": "Taxi", "count": 10000}
]


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

// set the ranges
const x = d3
  .scaleBand()
  .range([0, width])
  .padding(0.1);
const y = d3.scaleLinear().range([height, 0]);


// Scale the range of the data in the domains
x.domain(
  data.map((d) => d.transportMode)
);

y.domain([
  1000,
  d3.max(data, function(d) {
    return d.count;
  })
]);

// append the rectangles for the bar chart
svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function(d) {
    return x(d.transportMode);
  })
  .attr("width", x.bandwidth())
  .attr("y", function(d) {
    return y(d.count);
  })
 .attr("height", function(d) {
  return height - y(d.count);
})
.style('fill', 'yellow') 
.style('fill-opacity', 0.5); 



// add the x Axis
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// add the y Axis
svg.append("g").call(d3.axisLeft(y));
