# Chris Osborne's Profile but in React

## Description
    
This is a profile page using react to showcase Chris Osborne's projects
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
    
Please run 'npm install' to install the packages

Please run 'npm start' to start the application
    
## Usage
    
This is a single page React website which has 4 sections: About Me, Portfolio, Contact, and Resume

[Live Link](https://chrisosbii.github.io/20OjoaF3CzzA-React_Profile/)

![About Page]()

![Portfolio Page]()

![Contact Page]()

![Resume Page]()
    
## Credits
    

    
## License
    
[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)
    
## Tests
    

    
## Questions

On signing up for Netlify my account got flagged and banned as soon as I created it. 

In light of this I am trying to deploy a vite page to git pages
Steps to deploy to github pages that I found worked for me:
1. Build the vite application: "npm run build"
2. Test that the page loads as expected in the /rp/ endpoint: "npm run preview"
3. Push the dist folder to a github branch: "git subtree push --prefix dist origin gh-pages"
4. Make sure you select the branch "gh-pages" for deployment to github pages