
// code resource: https://d3-graph-gallery.com/graph/histogram_binSize.html

// set the dimensions and margins of the graph
const margin_hist = {top: 50, right: 50, bottom: 50, left: 50},
    width_hist = 550,
    height_hist = 570;

// append the svg object to the body of the page
const svg_hist = d3.select("#csv-histogram")
  .append("svg")
    .attr("width", width_hist + margin_hist.left + margin_hist.right)
    .attr("height", height_hist + margin_hist.top + margin_hist.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin_hist.left},${margin_hist.top})`);

// get the data
d3.csv("data/ride_time.csv").then( function(data_hist) {

  // X axis: scale and draw:
  const x_hist = d3.scaleLinear()
       .domain([0, 253])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })  
      .range([0, width_hist]);
  svg_hist.append("g")
      .attr("transform", `translate(0,${height_hist})`)
      .call(d3.axisBottom(x_hist));
  
  svg_hist.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", 400)
    .attr("y", height_hist + 50)
    .text("Number of Minutes Taken Per Ride");

  // Y axis: initialization
  const y_hist = d3.scaleLinear()
      .range([height_hist, 0]);
  const yAxis_hist = svg_hist.append("g");

  svg_hist.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -40)
    .attr("x", 0 - (height_hist / 2))
    .attr("dy", "0.75em")
    .attr("transform", "rotate(-90)")
    .text("Count");

  // A function that builds the graph for a specific value of bin
  function update(nBin) {

    // set the parameters for the histogram
    const histogram = d3.histogram()
        .value(function(d) { return d.minutes; })   // I need to give the vector of value
        .domain(x_hist.domain())  // then the domain of the graphic
        .thresholds(x_hist.ticks(nBin)); // then the numbers of bins

    // And apply this function to data to get the bins
    const bins = histogram(data_hist);

    // Y axis: update now that we know the domain
    y_hist.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
    yAxis_hist
        .transition()
        .duration(1000)
        .call(d3.axisLeft(y_hist));

    // Join the rect with the bins data
    const u = svg_hist.selectAll("rect")
        .data(bins);

    // Manage the existing bars and eventually the new ones:
    u
        .join("rect") // Add a new rect for each new elements
        .transition() // and apply changes to all of them
        .duration(1000)
          .attr("x", 1)
          .attr("transform", function(d) { return `translate(${x_hist(d.x0)}, ${y_hist(d.length)})`})
          .attr("width", function(d) { return x_hist(d.x1) - x_hist(d.x0) -1 ; })
          .attr("height", function(d) { return height_hist - y_hist(d.length); })
          .style("fill", "#69b3a2");

    }

  // Initialize with 15 bins
  update(15);

  // Listen to the button -> update if user change it
  d3.select("#nBin").on("input", function() {
    update(+this.value);
  });

});
 


