// I chose to create a switch statement instead of an if/else if because it looks cleaner and easier to read.
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseBadge = "";
switch (license === "MIT") {
  case "MIT":
  licenseBadge = "";
  break;}
switch (license === "APACHE 2.0") {
  case "APACHE 2.0":
  licenseBadge = "";
  break;}
switch (license === "GPL 3.0") {
  case "GPL 3.0":
  licenseBadge = "";
  break;}
switch (license === "BSD 3") {
  case "BSD 3":
  licenseBadge = "";
  break;}
switch (license === "None") {
  case "None":
  licenseBadge = "";
  break;}
return licenseBadge;

}

//  Created another switch statement.
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
switch (license === "MIT") {
  case "MIT":
    licenseLink = "";
  break;}
switch (license === "APACHE 2.0") {
  case "APACHE 2.0":
    licenseLink = "";
  break;}
switch (license === "GPL 3.0") {
  case "GPL 3.0":
    licenseLink = "";
  break;}
switch (license === "BSD 3") {
  case "BSD 3":
    licenseLink = "";
  break;}
switch (license === "None") {
  case "None":
    licenseLink = "";
  break;}
return licenseLink;

}

// Here is another Switch Statement.
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
switch (license === "MIT") {
  case "MIT":
    licenseSection = "";
  break;}
switch (license === "APACHE 2.0") {
  case "APACHE 2.0":
    licenseSection = "";
  break;}
switch (license === "GPL 3.0") {
  case "GPL 3.0":
    licenseSection = "";
  break;}
switch (license === "BSD 3") {
  case "BSD 3":
    licenseSection = "";
  break;}
switch (license === "None") {
  case "None":
    licenseSection = "";
  break;}
return licenseLink;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ${licenseBadge}

  ##Description

  ##Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [How to Contribute](#how to contribute)
  - [Tests](#tests)
  - [Credits](#credits)
  - [License](#license)

  ##Installation


  ##Useage


  ##Features


  ##How to Contribute


  ##Tests


  ##Credits


  ##License

  ${licenseSection}


  ${licenseLink}


`;
}

module.exports = generateMarkdown;
