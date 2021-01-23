class ExperienceEntry {
  constructor(imagePath,jobTitle,dates,bullets) {
    this.imagePath = imagePath;  
    this.jobTitle = jobTitle;
    this.dates = dates;
    this.bullets = bullets;
  }

  getJobTitle(){
    return this.jobTitle;
  }

  getDates(){
    return this.dates;
  }

  getBullets(){
    return this.bullets;
  }

}

var experienceEntries = [];

var imageOne = "/images/kc.jpg";
var titleOne = "Software Engineer @ K&C";
var datesOne = "January 2020 to January 2021";
var bulletsOne =   [
  "Increased user productivity by 200%, improved meshing success rate from 50% to 99%, and helped transition application to the beta release by writing Ruby code to integrate a new meshing library with the application.",
  "Achieved over 90% user adoption rate by proactively presenting new features that I added as well as best practices for the Ruby application to internal teams and users located in the USA and Australia.",
  "Lead and reported to my firm’s CEO on the research and benchmarking process to identify the new meshing library.",
  "Constructed graphics pipeline for an OpenGL and C application so that the application could dynamically generate various hexahedral structures.",
  "Completed beta release of a C++ and Qt application that plots curves for observed material response data and expected material response data by debugging, creating unit tests, refactoring code, and enhancing the GUI.",
  "Implemented and designed multithreaded architecture to run calculations in the background and to stop GUI freezes."
];

var entryOne = new ExperienceEntry(imageOne, titleOne, datesOne, bulletsOne);
experienceEntries.push(entryOne);

var imageTwo = "/images/botw.jpg";
var titleTwo = "Software Engineer and Data Science Intern @ Bank of the West";
var datesTwo = "June 2019 to August 2019";
var bulletsTwo =   [
  "Built the backend with Python and Flask of an app that allows the user to enter data and then receive a prediction with 90% confidence for how many years someone will work at a company.",
  "Collaborated with designers for rapid iteration of UIs and created UIs with JavaScript, React, CSS, and Bootstrap.",
  "Developed, trained, and tested scalable Python machine learning (ML) models that predict KPIs for business users.",
  "Wrote reliable, testable, and maintainable code for ML models that will be used by 400+ developers.",
  "Created a REST API with Flask and Python (NumPy, SciPy, Pandas, and scikit-learn) for a data science microservice"
];

var entryTwo = new ExperienceEntry(imageTwo, titleTwo, datesTwo, bulletsTwo);
experienceEntries.push(entryTwo);

var imageThree = "/images/oracle.jpg"
var titleThree = "Account Manager @ Oracle";
var datesThree = "December 2017 to June 2019";
var bulletsThree =   [
  "Generated $250,000 in revenue by coordinating engineering and sales resources to develop a cloud solution for a Fortune 500 customer that streamlined B2B integration between enterprise software applications and microservices."
];

var entryThree = new ExperienceEntry(imageThree, titleThree, datesThree, bulletsThree);
experienceEntries.push(entryThree);

var imageFour = "/images/oracle.jpg"
var titleFour = "Sales Development Representative @ Oracle (promoted after 1.5 years to Account Manager)";
var datesFour = "June 2016 to December 2017";
var bulletsFour =   [
  "Generated over $170,000 in revenue by analyzing internal data with Excel, building Excel pivot tables to identify companies most likely to buy Oracle software, and discussing business needs with companies’ senior management."
];

var entryFour = new ExperienceEntry(imageFour, titleFour, datesFour, bulletsFour);
experienceEntries.push(entryFour);

export { experienceEntries };