
/**
 * @typedef {{
    SUBJECT: string;
    CATALOGNBR: string;
    COURSETITLELONG: string;
    COMPONENTPRIMARY: string;
    ALLOWMULTENROLL: string;
    CRSEREPEATABLE: string;
    GRADINGBASIS: string;
    ACADORG: string;
    COLLEGEMAP: [[Object]];
    DESCRLONG: string;
    COMPONENTDESCR: string;
    GRADINGBASISDESCR: string;
    DESCR4: string;
    CRSEID: string;
    HOURS: string;
    UNITSMAXIMUM: string;
    UNITSMINIMUM: string;
    SUBJECTDESCR: string;
    TOPICSLIST: [];
    GSGOLD: string;
    GSMAROON: string;
}} data
 */

/**
 * @param {string} subject 
 * @param {number} number 
 * @returns {Promise<data>} json
 */
async function getData(subject, number) {
  const res = await fetch(`https://eadvs-cscc-catalog-api.apps.asu.edu/catalog-microservices/api/v1/search/courses?refine=Y&campusOrOnlineSelection=A&catalogNbr=${number}&subject=${subject}&term=2244`, {
    "credentials": "include",
    "headers": {
      "authorization": "Bearer null",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site"
    },
    "referrer": "https://catalog.apps.asu.edu/",
    "method": "GET",
    "mode": "cors"
  });
  const data = await res.json();
  return data[0];
}

/**
 * @param {string} subject 
 * @param {number} number 
 * @returns {Promise<string>} subjectTitle
 */
async function getSubjectTitle(subject, number) {
  const data = await getData(subject, number)
  return data?.COURSETITLELONG || "";
}



const courses = require('./courseCodes.json');
; (async function() {
  for (const item of courses) {
    const [subject, number] = item.course.split(" ");
    const title = await getSubjectTitle(subject, parseInt(number));
    console.log({ course: item.course, title })
  }
})()
