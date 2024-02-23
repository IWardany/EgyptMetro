import {
  line1,
  line2,
  line3,
  line1Set,
  line2Set,
  line3Set,
  line1Transitions,
  line2Transitions,
  line3Transitions,
} from "./lines";

let lineArrays = [line1, line2, line3];
let lineSets = [line1Set, line2Set, line3Set];
let transitions = [line1Transitions, line2Transitions, line3Transitions];
function onSameLine(start, end, line) {
  let startIndex = line.indexOf(start);
  let endIndex = line.indexOf(end);
  if (startIndex <= endIndex) {
    return line.slice(startIndex, endIndex + 1);
  } else {
    return line.slice(endIndex, startIndex + 1).reverse();
  }
}

async function getBestRoute(start, end, people) {
  let startLine = -2;
  let endLine = -1;
  for (let i = 0; i < lineSets.length; i++) {
    if (lineSets[i].has(start)) {
      startLine = i + 1;
    }
    if (lineSets[i].has(end)) {
      endLine = i + 1;
    }
    if (startLine === endLine) break;
  }

  let res = [];
  if (startLine === endLine) {
    res = onSameLine(start, end, lineArrays[startLine - 1]);
  } else {
    let paths = [];
    for (let transition of transitions[startLine - 1]) {
      if (transition[1] === endLine) {
        let path = [];
        path.push(onSameLine(start, transition[0], lineArrays[startLine - 1]));
        path.push("تحويل الخط في هذه المحطة");
        path.push(onSameLine(transition[0], end, lineArrays[endLine - 1]));
        paths.push(path);
      }
    }
    paths.sort((a, b) => {
      let aLength = 0;
      let bLength = 0;
      for (let arr of a) {
        aLength += arr.length;
      }
      for (let arr of b) {
        bLength += arr.length;
      }
      return aLength - bLength;
    });
    res = paths[0];
  }
  return res;
}

export default getBestRoute;
