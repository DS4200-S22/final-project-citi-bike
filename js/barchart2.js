
// Set dimensions and margins for plots 
const width2 = 1500; 
const height2 = 850; 
const margin2 = {left:50, right:50, bottom:150, top:50}; 
const yTooltipOffset2 = 15; 

const color2 = d3.scaleOrdinal()
                .domain(["Grand Plaza & Central Park S", "34 Ave & 38 St", "1 Ave & E 18 St", "Clinton St & Joralemon St", "MacDougal St & Prince St"])
                .range(["#e98491"]);

// Adds an svg to hard-coded-bar div  
const svg4 = d3
  .select("#hard-coded-bar2")
  .append("svg")
  .attr("width", width2-margin2.left-margin2.right)
  .attr("height", height2 - margin2.top - margin2.bottom)
  .attr("viewBox", [0, 0, width2, height2]);

// Hardcoded barchart data
const data2 = [
  {station_name:'Grand Plaza & Central Park S', count:105},
  {station_name:'34 Ave & 38 St', count:50},
  {station_name:'1 Ave & E 18 St', count:49},
  {station_name:'Clinton St & Joralemon St', count:47},
  {station_name:'MacDougal St & Prince St', count:43},
  {station_name:'W 16 St & The High Line', count:38},
  {station_name:'W 47 St & 6 Ave ', count:36},
  {station_name:'E 11 St & Avenue B', count:34},
  {station_name:'Baltic St & 5 Ave', count:24},
  {station_name:'Prospect Pl & 6 Ave', count:19},
  {station_name:'5 Ave & W 126 St ', count:15},
  {station_name:'Nassau Ave & Russell St ', count:12},
  {station_name:'Pioneer St & Van Brunt St', count:9},
  {station_name:'Courtlandt Ave & E 149 St', count:9},
  {station_name:'George St & Wilson Ave', count:7},
  {station_name:'Monroe St & Tompkins Ave', count:1},
  {station_name:'Decatur Ave & Oliver Pl', count:1}
];

/*

  Axes

*/ 

// Find max y value to plot  
let maxY = d3.max(data2, function(d) { return d.count; });

// Create y scale   
let yScale = d3.scaleLinear()
            .domain([0,maxY])
            .range([height2-margin2.bottom,margin2.top]); 

// Create x scale
let xScale = d3.scaleBand()
            .domain(d3.range(data2.length))
            .range([margin2.left, width2 - margin2.right])
            .padding(0.1); 

// Add y axis to webpage 
svg4.append("g")
   .attr("transform", `translate(${margin2.left}, 0)`) 
   .call(d3.axisLeft(yScale))
   .attr("font-size", '20px'); 

   svg4.append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", 0 - margin.left)
   .attr("x",0 - (height / 2))
   .attr("dy", "1em")
   .style("text-anchor", "middle")
   .text("Count"); 

// Add x axis to webpage  
svg4.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height2 - margin2.bottom})`) 
    .call(d3.axisBottom(xScale)
            .tickFormat(i => data2[i].station_name)) 
    .selectAll("text")  
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)")
      .attr("font-size", '12px');

 svg4.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 60) + ")")
      .style("text-anchor", "middle")
      .text("Station");
/* 

*/

// Add div for tooltip to webpage
const tooltip4 = d3.select("#hard-coded-bar2") 
                .append("div") 
                .attr('id', "tooltip2") 
                .style("opacity", 0) 
                .attr("class", "tooltip"); 

// Add values to tooltip on mouseover, make tooltip div opaque  
const mouseover5 = function(event, d) {
  tooltip4.html("Station Name: " + d.station_name + "<br> Total Rides Ended Here: " + d.count + "<br>") 
          .style("opacity", 1);  
}

// Position tooltip to follow mouse 
const mousemove5 = function(event, d) {
  tooltip4.style("left", (event.pageX)+"px") 
          .style("top", (event.pageY + yTooltipOffset2)+"px"); 
}

// Return tooltip to transparant when mouse leaves
const mouseleave5 = function(event, d) { 
  tooltip4.style("opacity", 0); 
}


// Add bars to the webpage, bind events needed for tooltips 

svg4.selectAll(".bar") 
   .data(data2) 
   .enter()  
   .append("rect") 
     .attr("class", "bar") 
     .attr("x", (d,i) => xScale(i)) 
     .attr("y", (d) => yScale(d.count)) 
     .attr("height", (d) => (height2 - margin2.bottom) - yScale(d.count)) 
     .attr("width", xScale.bandwidth())
     .style("fill", (d) => color2(d.name))
     .on("mouseover", mouseover5) 
     .on("mousemove", mousemove5)
     .on("mouseleave", mouseleave5);



