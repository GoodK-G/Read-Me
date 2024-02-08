// I chose to create a switch statement instead of an if/else if because it looks cleaner and easier to read.
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
// let licenseBadge = "";
// switch (license === "MIT") {
//   case "MIT":
//   licenseBadge = "";
//   break;}
// switch (license === "APACHE 2.0") {
//   case "APACHE 2.0":
//   licenseBadge = "";
//   break;}
// switch (license === "GPL 3.0") {
//   case "GPL 3.0":
//   licenseBadge = "";
//   break;}
// switch (license === "BSD 3") {
//   case "BSD 3":
//   licenseBadge = "";
//   break;}
// switch (license === "None") {
//   case "None":
//   licenseBadge = "";
//   break;}
// return licenseBadge;

// }

// //  Created another switch statement.
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseLink = "";
// switch (license === "MIT") {
//   case "MIT":
//     licenseLink = "";
//   break;}
// switch (license === "APACHE 2.0") {
//   case "APACHE 2.0":
//     licenseLink = "";
//   break;}
// switch (license === "GPL 3.0") {
//   case "GPL 3.0":
//     licenseLink = "";
//   break;}
// switch (license === "BSD 3") {
//   case "BSD 3":
//     licenseLink = "";
//   break;}
// switch (license === "None") {
//   case "None":
//     licenseLink = "";
//   break;}
// return licenseLink;

// }

// // Here is another Switch Statement.
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let licenseSection = "";
// switch (license === "MIT") {
//   case "MIT":
//     licenseSection = "";
//   break;}
// switch (license === "APACHE 2.0") {
//   case "APACHE 2.0":
//     licenseSection = "";
//   break;}
// switch (license === "GPL 3.0") {
//   case "GPL 3.0":
//     licenseSection = "";
//   break;}
// switch (license === "BSD 3") {
//   case "BSD 3":
//     licenseSection = "";
//   break;}
// switch (license === "None") {
//   case "None":
//     licenseSection = "";
//   break;}
// return licenseSection;

// }
// I decided to consoldate all of the different switch functions into one.
function renderLicense(license) {
  let licenseBadge = "";
  let licenseLink = "";
  let licenseSection = "";

  switch (license) {
      case "MIT":
          licenseBadge = "[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
          licenseLink = "[MIT License](https://opensource.org/licenses/MIT)";
          licenseSection = "[MIT License](https://opensource.org/licenses/MIT)";
          break;
      case "APACHE 2.0":
          licenseBadge = "[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          licenseLink = "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
          licenseSection = "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
          break;
      case "GPL 3.0":
          licenseBadge = "[![GPL 3.0 License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
          licenseLink = "[GPL 3.0 License](https://opensource.org/licenses/GPL-3.0)";
          licenseSection = "[GPL 3.0 License](https://opensource.org/licenses/GPL-3.0)";
          break;
      case "BSD 3":
          licenseBadge = "[![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          licenseLink = "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
          licenseSection = "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
          break;
      case "None":
          licenseBadge = "";
          licenseLink = "";
          licenseSection = "";
          break;
      default:
          break;
  }

  return {
      badge: licenseBadge,
      link: licenseLink,
      section: licenseSection
  };
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
