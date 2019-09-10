const scroller = scrollama();

let currTrigger = -1;

const protest0a = { _id: "0a", cy: "150", cx: "135", r: "3.5", fill: "#F6CA16", opacity: "0" };
const protest1a = { _id: "1a", cy: "120", cx: "75", r: "3.5", fill: "#F6CB37", opacity: "0" };
const protest1b = { _id: "1b", cy: "160", cx: "50", r: "3.5", fill: "#F6CB37", opacity: "0" };

const protestGroup0 = [protest0a];
const protestGroup1 = [protest1a, protest1b];

const protestTimeline = [protestGroup0, protestGroup1];

let activeProtestIds = [];


const removeAllProtests = () => {
  // d3.selectAll("circle")
  //   .transition()
  //   .attr("opacity", "0");
  if (activeProtestIds.length > 0) {
    console.log("in remove active protest")
    activeProtestIds.forEach((item) => {
      console.log(item)
      d3.select("protest-" + item._id)
      .transition()
      .remove();
      activeProtestIds.shift();
    })
  }
  // d3.selectAll("circle")
  //   .transition()
  //   .remove();
}

const appendProtest = (hkMap, index) => {
  let currGroup = protestTimeline[index];
  currGroup.forEach((item) => {
    hkMap.append("circle")
      .attr("id", "protest-" + item._id)
      .attr("fill", item.fill)
      .attr("cx", item.cx)
      .attr("cy", item.cy)
      .attr("r", item.r)
      .attr("opacity", "0")

    activeProtestIds.push("protest-" + item._id);
    // console.log(activeProtestIds)
  });
  // Elements must be in DOM before transition can be applied
  d3.selectAll("circle")
    .transition()
    .attr("opacity", "1")
    .transition()
    .attr("r", "6")
    .transition()
    .style("fill", "#fc8403");
}

scroller.setup({
  step: '.hkpVis-trigger',
  debug: true
})
  .onStepEnter(response => {
    if (response.direction === 'down') {
      currTrigger++;
    }
    appendProtest(d3.select("#hkpVis-map"), currTrigger);
    console.log(currTrigger)
  })
  .onStepExit(response => {
    if (response.direction === 'up') {
      currTrigger--;
    }
    removeAllProtests();
    console.log(currTrigger);
  });

window.addEventListener('resize', scroller.resize);