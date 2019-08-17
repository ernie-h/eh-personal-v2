const scroller = scrollama();

// Section waypoints
// scroller
//   .setup({
//     step: '.hkpVis-section',
//     debug: true,
//     offset: 0.47
//   })
//   .onStepEnter(response => {
//     if (response.direction === 'down')
//       response.element.style.opacity = 1;
//   })
//   .onStepExit(response => {
//     if (response.direction === 'up')
//       response.element.style.opacity = 0;
//   });

// Map elements
// TODO: Figure out workaround to single scroller initialization
scroller.setup({
  step: '.hkpVis-mapCircle',
  debug: true
})
  .onStepEnter(response => {
    if (response.direction === 'down') {
      console.log("enter")
      // response.element.style.opacity = 1;
      d3.select(".mapCircle")
      .transition()
      .duration(8000)
      .attr("cx", 200);
    }
  })
  .onStepExit(response => {
    if (response.direction === 'up') {
      console.log("exit")
      // response.element.style.opacity = 0;
    }
  });

// var svg = d3.select("#hk-map")
// // Create a scale: transform value in pixel
// var x = d3.scaleLinear()
//     .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
//     .range([0, 400]);       // This is the corresponding value I want in Pixel
// // Try console.log( x(25) ) to see what this x function does.
// // Add 3 dots for 0, 50 and 100%
// svg.append("circle")
//   .attr("cx", x(10)).attr("cy", 160).attr("r", 5).style("fill", "blue");
// svg.append("circle")
//   .attr("cx", x(20)).attr("cy", 100).attr("r", 10).style("fill", "red");
// svg.append("circle")
//   .attr("cx", x(30)).attr("cy", 130).attr("r", 10).style("fill", "green");

// setup resize event
window.addEventListener('resize', scroller.resize);