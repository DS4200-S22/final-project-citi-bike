

// Set dimensions and margins for plots 
const width = 900; 
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 

const color = d3.scaleOrdinal()
                .domain(["Members", "Casual"])
                .range(["#FF7F50", "#21908dff"]);

// Adds an svg to hard-coded-bar div  
const svg = d3
  .select("#vis-container")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// Hardcoded barchart data
const data1 = [
  {name: 'Members', count: 291},
  {name: 'Casual', count: 208},
];

/*

  Axes

*/ 

// Find max y value to plot  
let maxY1 = d3.max(data1, function(d) { return d.count; });

// Create y scale   
let yScale1 = d3.scaleLinear()
            .domain([0,maxY1])
            .range([height-margin.bottom,margin.top]); 

// Create x scale
let xScale1 = d3.scaleBand()
            .domain(d3.range(data1.length))
            .range([margin.left, width - margin.right])
            .padding(0.1); 

// Add y axis to webpage 
svg.append("g")
   .attr("transform", `translate(${margin.left}, 0)`) 
   .call(d3.axisLeft(yScale1)) 
   .attr("font-size", '20px'); 

// Add x axis to webpage  
svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`) 
    .call(d3.axisBottom(xScale1) 
            .tickFormat(i => data1[i].name))  
    .attr("font-size", '20px'); 

/* 

  Tooltip Set-up  

*/

// Add div for tooltip to webpage
const tooltip1 = d3.select("body") 
                .append("div") 
                .attr('id', "tooltip1") 
                .style("opacity", 0) 
                .attr("class", "tooltip"); 

// Add values to tooltip on mouseover, make tooltip div opaque  
const mouseover1 = function(event, d) {
  tooltip1.html("Name: " + d.name + "<br> Count: " + d.count + "<br>") 
          .style("opacity", 1);  
}

// Position tooltip to follow mouse 
const mousemove1 = function(event, d) {
  tooltip1.style("left", (event.pageX)+"px") 
          .style("top", (event.pageY + yTooltipOffset)+"px"); 
}

// Return tooltip to transparant when mouse leaves
const mouseleave1 = function(event, d) { 
  tooltip1.style("opacity", 0); 
}

/* 

  Bars 

*/

// Add bars to the webpage, bind events needed for tooltips 
svg.selectAll(".bar") 
   .data(data1) 
   .enter()  
   .append("rect") 
     .attr("class", "bar") 
     .attr("x", (d,i) => xScale1(i)) 
     .attr("y", (d) => yScale1(d.count)) 
     .attr("height", (d) => (height - margin.bottom) - yScale1(d.count)) 
     .attr("width", xScale1.bandwidth()) 
     .style("fill", (d) => color(d.name))
     .on("mouseover", mouseover1) 
     .on("mousemove", mousemove1)
     .on("mouseleave", mouseleave1);

/*******************
 
  Bar chart 2
 
 *******************/ 

 // Add div for tooltip to webpage
const tooltip2 = d3.select("body") 
                .append("div") 
                .attr('id', "tooltip2") 
                .style("opacity", 0) 
                .attr("class", "tooltip"); 

// Add values to tooltip on mouseover, make tooltip div opaque  
const mouseover2 = function(event, d) {
  tooltip2.html("Name: " + d.name + "<br> Score: " + d.count + "<br>") 
          .style("opacity", 1);  
}

// Position tooltip to follow mouse 
const mousemove2 = function(event, d) {
  tooltip2.style("left", (event.pageX)+"px") 
          .style("top", (event.pageY + yTooltipOffset)+"px"); 
}

// Return tooltip to transparant when mouse leaves
const mouseleave2 = function(event, d) { 
  tooltip2.style("opacity", 0); 
}
d3.csv("data/citibike-data.csv").then(function(data) {
  console.log(data);
  
  // Add an svg to csv-bar div  
  let svg2 = d3
    .select("#vis-container")
    .append("svg")
    .attr("width", width-margin.left-margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);

  //Axes 

  // Find max y value to plot  
  let maxY2 = d3.max(data, function(d) { return d.score; });

  // Create y scale   
  let yScale2 = d3.scaleLinear()
              .domain([0,maxY2])
              .range([height-margin.bottom,margin.top]); 

  // Create x scale
  let xScale2 = d3.scaleBand()
              .domain(d3.range(data.length))
              .range([margin.left, width - margin.right])
              .padding(0.1); 

  // Add y axis to webpage 
  svg2.append("g")
     .attr("transform", `translate(${margin.left}, 0)`) 
     .call(d3.axisLeft(yScale2)) 
     .attr("font-size", '20px'); 

  // Add x axis to webpage  
  svg2.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`) 
      .call(d3.axisBottom(xScale2) 
              .tickFormat(i => data[i].name))  
      .attr("font-size", '20px'); 

  //Bars

  // Add bars to the webpage, bind events needed for tooltips 
  svg2.selectAll(".bar") 
     .data(data) 
     .enter()  
     .append("rect") 
       .attr("class", "bar") 
       .attr("x", (d,i) => xScale2(i)) 
       .attr("y", (d) => yScale2(d.score)) 
       .attr("height", (d) => (height - margin.bottom) - yScale2(d.score)) 
       .attr("width", xScale2.bandwidth()) 
       .on("mouseover", mouseover2) 
       .on("mousemove", mousemove2)
       .on("mouseleave", mouseleave2);
}); 








