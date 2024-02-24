import data from './courses.json'
function getTitle(code) {
  return data.find(code).title
}
function getCourseCodes() {
  return getNodes().map(el => el.textContent.slice(0, 7));
}
function getNodes() {
  return [...document.querySelectorAll("td.fromcourselist table tbody tr td span.course span.number ")].filter(el => el.textContent.length >= 7);
}
function addTitlesToNodes() {
  const nodes = getNodes()
  const codes = getCourseCodes();
  nodes.forEach((el, index) => {
    el.textContent = `${codes[index]} ${getTitle(codes[index])}`
  })
}
addTitlesToNodes()
