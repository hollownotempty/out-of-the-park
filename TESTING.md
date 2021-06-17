# Testing

To test the site, a sequence of steps were followed across various browsers and devices. The steps were as follow: 

 - Validate HTML and CSS using their respective validators.
 - All pages were checked to make sure that layout matched the [wireframes](wireframes/ootp_wireframes.pdf). 
 - All text was read through to be certain it was easy to read, understand and has no spelling or grammar errors.
 - Make sure that all images load in within a reasonable amount of time. 
 - Make sure correct page name is displayed in the tab.
 - The game was played through on all devices, making sure that correct answers and wrongs answers were scored accordingly.
 - The game was played multiple times over the course of a few hours to determine that under no circumstance would someone get the same question twice in one game. 

# User Stories 

The following are the steps I took to make sure the user stories listed in the [README.md](README.md/#UX) were fulfilled in the site:

*Numbers align with their respective User Story*

1. Pressing start on the home page starts a ten question quiz on baseball.
2. Four buttons appear underneath the question with possible answers.
3. The javascript file has 30 questions that randomize with every attempt at the quiz.
4. The quiz page simply contains the question and answer cards, without any other busy parts to the page.
5. After ten questions the users final score appears on the screen.

# Bugs

1. On mobile devices the answer buttons were displaying without a background colour.

![button_bug](assets/images/screenshots/buttons_no_background.png)

This was solved easily by declaring a background color in the css for the button. 

2. Again on mobile devices, the footer was clipping upwards into the game 

![footer_bug](assets/images/screenshots/footer_bug.png)

This was solved by removing the ```position: absolute;``` from the footer and giving the main game container ```height: calc(100vh - 200px)``` to subtract the height of the header and footer, pushing the footer to the bottom. 

# Browsers

- Chrome
- Firefox
- Brave
- Safari
- Opera

# Devices

- ACER Computer monitor
- iPhone 11
- Macbook Pro 2018
- iPad 2
- iPad Mini