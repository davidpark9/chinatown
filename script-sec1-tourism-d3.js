var svgWidth = 700, svgHeight = 500;
var margin = { top: 20, right: 20, bottom: 70, left: 60 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// 创建SVG容器
var svg = d3.select('#chart').append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 数据数组
var dataset = [25.6, 12.8, 12.7, 21.76, 23.04]; // 确保数据和年份对应
var years = ["2019", "2020", "2021", "2022", "2023"];

// 设置比例尺
var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1)
    .domain(years.map(function(d) { return d; }));

var yScale = d3.scaleLinear()
    .rangeRound([height, 0])
    .domain([0, d3.max(dataset)]);

// 定义颜色
var colors = ["#B77965", "#CC9475", "#CAA170", "#DCB983", "#D6BD9F"];

// 绘制X轴
var xAxis = svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

// 绘制Y轴
var yAxis = svg.append("g")
    .call(d3.axisLeft(yScale).tickFormat(function(d){
        return d;
    }).ticks(10));

// 在创建完轴之后设置轴颜色
svg.selectAll('.axis path')
    .style('stroke', '#5BB2A7');
svg.selectAll('.axis line')
    .style('stroke', '#5BB2A7');
svg.selectAll('.axis text')
    .style('fill', '#5BB2A7');

// 修改轴线的颜色和粗细
svg.selectAll('.domain')
    .style('stroke', '#5BB2A7')
    .style('stroke-width', '5px'); // 设置轴线粗细

// 修改刻度线的颜色和粗细
svg.selectAll('.tick line')
    .style('stroke', '#5BB2A7')
    .style('stroke-width', '3px'); // 设置刻度线粗细

// 修改刻度文本的颜色和字体粗细
svg.selectAll('.tick text')
    .style('fill', '#5BB2A7')
    .style('font-weight', 'bolder'); // 设置文本为粗体

// 绘制条形图并添加动画
svg.selectAll(".bar")
    .data(dataset)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return xScale(years[i]); })
    .attr("y", height) // 初始位置为X轴上方
    .attr("height", 0) // 初始高度为0
    .attr("width", xScale.bandwidth())
    .attr("fill", function(d, i) { return colors[i]; })
    .transition() // 开始过渡
    .delay(function(d, i) { return i * 100; }) // 为每个条形/标签添加100毫秒的延迟
    .duration(1000) // 过渡持续时间（毫秒）
    .attr("y", function(d) { return yScale(d); }) // 最终的Y位置
    .attr("height", function(d) { return height - yScale(d); }); // 最终的高度


// 添加坐标轴单位
svg.append("text")
    .attr("transform", "translate(" + (width / 1.05) + " ," + (height + margin.bottom - 30) + ")")
    .style("text-anchor", "right")
    .text("Year")
    .attr("fill", "#5BB2A7");

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 10)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "right")
    .text("Visitation (In Million)")
    .attr("fill", "#5BB2A7");

// 添加数据标签并添加动画
svg.selectAll(".label")
    .data(dataset)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", function(d, i) { return xScale(years[i]) + xScale.bandwidth() / 2; })
    .attr("y", height) // 初始位置为X轴上方
    .attr("dy", ".75em")
    .attr("text-anchor", "middle")
    .attr("fill", "#5BB2A7")
    .text(function(d) { return d; })
    .transition() // 开始过渡
    .delay(function(d, i) { return i * 100; }) // 为每个条形/标签添加100毫秒的延迟
    .duration(1000) // 过渡持续时间（毫秒）
    .attr("y", function(d) { return yScale(d) - 15; }); // 最终的Y位置
    