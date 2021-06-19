
# Out Of The Park

Out Of The Park can be viewed [here](https://hollownotempty.github.io/out-of-the-park/index.html) at the deployed link. 

# Table Of Contents

- [Overview](#overview)
- [UX](#ux)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Resources](#resources)
- [Testing](#testing)
- [Code Validation](#code-validation)
- [Deployment](#deployment)
- [Credits](#credits)

# Overview

   Out Of The Park is a simple, fun and informative quiz game all about the world of baseball. An avid fan of baseball can test their skills
   of baseball trivia with multiple choice style questions spanning the entire history of the [MLB](https://en.wikipedia.org/wiki/Major_League_Baseball). 


# UX

- 'Out Of The Park' was completed as the second milestone project of the Code Institute Fullstack Development Course. This project utilises all the knowledge I have of HTML, CSS and Javascript to create an interactive web experience.

- Quizzes are a fun and engaging way to test someones knowledge on a topic or trivia. I designed the experience of this site to be undistracting and fun challenge for fans to test their knowledge. 

## User Goals

Users are looking to:
- Take part in a fun game/quiz.
- Learn about baseball while completing the quiz.
- Be able to retake the quiz with different questions.


## User Stories

1. As a user i want to to test my knowledge of baseball trivia, for fun and entertainment.
2. As a user i want a multiple choice question style quiz, to assist my completion of the quiz.
3. As a user i want lots of choices of questions, to interest me in returning to complete the quiz again.
4. As a user i want a simple layout, to not be distracted while focusing on the quiz.
5. As a user i want a results screen which recounts how I did during the quiz.

## Site owner goals

1. Teach about baseball through the questions.
2. Be able to update questions easily through the code.
3. Add additional types of questions easily. 
4. 

## Design

- Colour Scheme
   - The main colours were chosen from the Major League Baseball logo, the colours being an American flag blue and red. 

- Typography
   - The fonts for this project are Poppins and Libre Franklin, with sans-serif as the fallback for both. 

The wireframes for Out Of The Park can be viewed [here](assets/images/wireframes/ootp_wireframes.pdf).

# Features

## Header
 - The Out Of The Park logo returns the user to the home menu.

## Footer
 - Contains social media links.

## Game
 - Questions appear in readable text.
 - Four clickable buttons with answers contained in them.
 - Questions flash red or green depending on whether they are correct or not. 
 - Questions move along automatically after the user selects their answer.
 - Image based questions display images automatically. 


## Future Features:
 - More styles of questions (eg. audio based, more or less than four options).
 - Additional questions.
 - Online leaderboard tallying correct answers/how long it took to complete.
 - Difficulty settings at the start of the quiz.

# Technologies Used

1. Languages 
   - HTML5 - the current standard.
   - CSS - the current standard.
   - Javascript - the current standard.

2. Integrations
   - Font Awesome - Icons used for social media links in the footer.
   - Google Fonts - used to import the typography used to create the text.

4. Workspace, Version Control and Repository
   - GitPod - IDE used to create the project.
   - Git - Version control tool used to track versions/changes. 
   - GitHub - Hosting service used to manage the git repositories. 

# Resources

 - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1316s)
 - Code Institute Course - Knowledge of HTML and CSS learned from here
 - Slack Community - Assistance 
 - Balsamiq - Used to create wireframes
 - [Am I Responsive](http://ami.responsivedesign.is/#) - Used to see how the site would look on different devices
 - Google Chrome Developer Tools - Used to debug the CSS and try out other stylings on the fly
 - [Unsplash](https://unsplash.com/) - Stock image site
 - [W3Schools](https://w3schools.com) - General knowledge
 - [Colours Cafe Instagram Account](https://www.instagram.com/colours.cafe/) - Inspiration for color scheme
 - [TinyPNG](https://tinypng.com/) - Used to compress images for the site

# Testing

The same testing process was done across various browsers and devices, for the full testing process click [here](TESTING.md).

# Code Validation 

- HTML - [W3C HTML Validator](https://validator.w3.org/)
- CSS - [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)

# Deployment

This project was deployed to the internet using the built in Pages feature on GitHub using the following steps: 

   - Code was written in GitPod.
   - Code pushed to GitHub [repository](https://github.com/hollownotempty/out-of-the-park) using git.
   - From the repository page I clicked on the 'Settings' menu.
   - Navigated to the 'Pages' tab.
   - Opened the menu underneath 'Source' and select 'Master'.
   - This published the site on GitHub pages and shows the link to access it.

# Credits 

## Code Snippets

- [Techie Delight](https://www.techiedelight.com/reload-page-with-javascript/) for 
```
   document.getElementById("reload").onclick = function() {
        location.reload(true);
    }
```
- [Andrew.Wolphoe](https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript) for

```
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
```

## Media 

- Unsplash for stock images
- Google images for vector baseball bats and question images
- MLB.com for MLB logo 

## Acknowledgements 


