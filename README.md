# It's Quiz Time!
On the website presented, you can play a short Quiz against the clock and reach the top of the leaderboard! You get asked 10 questions in a maximum of 100 seconds. The more you answer correctly in as little time as possible, the higher your score!

## User Story
### First Time Visitor
- As a new visitor to the page, I directly want to understand the structure
- I want to be able to start a game quickly and easily
- I want to learn something new and test my knowledge
- I want to have fun from the first minute on!

### Regular Visitor
- I want to top the high score
- I want to send in questions of my own
- I want to have different questions than the last time

## Features
The website will feature an easy-to-understand quiz which you can start to play directly! Interesting questions on many different topics get asked randomly and a score for each round gets calculated.

### Technology used
- For the general structure of the page, [HTML](https://www.w3schools.com/html/) was used
- For styling purposes, [CSS](https://www.w3schools.com/html/html_css.asp) was used
    - [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) was used to make elements responsive
    - [Media queries](https://www.w3schools.com/css/css3_mediaqueries.asp) were used to change the dynamic of the content for smaller screens
    - [Grid](https://www.w3schools.com/css/css_grid.asp) was used to create the answer section of the game
- To add interactivity and dynamic behavior [Javascript](https://www.w3schools.com/js/) was used
- For the creation of the wireframes and the workflow, [Balsamiq](https://balsamiq.com/) was used
- For writing and editing the code [Gitpod](https://www.gitpod.io/) was used
- To host the code and the website [Github](https://github.com/) was used
- For the version control of the website [Git](https://git-scm.com/) was used

## Design
### Wireframes
The following wireframes were drawn for the project:
- Wireframe for [index.html](documentation/index.webp)
- Wireframe for [game.html](documentation/game.webp)

### Font
The font used throughout the website is "Noto Serif", which is implemented through Google Fonts.  
Since it is important for the quiz that all questions and answers can be read and understood quickly, the clean and readable design of "Noto Serif" is a great advantage. Through the balanced proportions and consistent spacing, everything looks visually very pleasing.

![Image of the font in regular](documentation/font-regular.webp)
![Image of the font in bold](documentation/font-bold.webp)
![Image of the font in italic](documentation/font-italic.webp)

### Colors
For the coloring of the website, a mixture of blue and light cyan colors was used. Through the harmonious and subtle feeling they create, a peaceful atmosphere to concentrate in is created. At the same time, the colors deliver a certain contrast without being overpowering.

![Image of the color palette used](documentation/colors.webp)

## Bugs
### Unsolved Bugs
No unsolved Bugs are left.

### Solved Bugs
While developing the game, the following bugs were found and corrected:
- When questions or answers got too big, they spilled out of their containers and made it impossible to read them.  
To solve the problem, the containers holding them became flexible properties by changing height to min-height. This resolved the issue since the container can always get longer, even on smaller devices with a fixed max-width.

## Credits
### Tools
The following tools and websites were used in the creation of this website:
- [Google Fonts](https://fonts.google.com/) to find and implement the font
- [Balsamiq](https://balsamiq.com/) for creation of the Wireframes
- [freeconvert.com](https://www.freeconvert.com/de/webp-converter) to convert images to webp-format