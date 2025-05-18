//step 1 create footer
const theFooter = document.createElement("footer");
theFooter.className = "footer";
theFooter.setAttribute("id", "myFooter");
document.body.appendChild(theFooter);
//console.log(theFooter);

//insert copyright
const today = new Date();
const thisYear = today.getFullYear();
//console.log(thisYear);
const newFooter = document.querySelector("footer");
//console.log(newFooter);
const copyright = document.createElement("p");
const copyrightText = " Jessica Miranda-Xometl " + thisYear;
copyright.innerHTML = copyrightText;
//console.log(copyright);

//append
newFooter.appendChild(copyright);
//console.log(newFooter);

//create skills list
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "Salesforce",
  "CTD Intro to Programming",
];

//find skills
const skillsSelection = document.querySelector("#skills");
//console.log(skillsSelection);

const skillsList = skillsSelection.getElementsByTagName("ul")[0];
//console.log(skillsList);

for (let i = 0; i < skills.length; i++) {
  var skill = document.createElement("li");
  skill.innerText = skills[i];
  console.log(skill);
  skillsList.appendChild(skill);
  console.log(skillsList);
}
