# Milestone project 2
# Tanya Allen
## The Veg Heads! match game

The Veg Heads! Match game is a JavaScript based match 2 game aimed at young children. The aim of the game is to match the vegetable characters to their names. The purpose of the game is to get children to learn about vegetables and healthy food choices through a fun game. It is based on the fictional cartoon group called The Veg Heads! 

![sitemockup](../docs/imgs/mockup.jpg)

You can view the live site [here](https://tanyaelizabeth13.github.io/Milestoneproject2/)

### Table of content:
1. [User experience](#1-ux)
* User stories
* Site structure
2. [Design](#2-design)
* Wireframes
* Colours
* Typography
* Imagery
* Design differences
3. [Site limitations](#3-site-limitations)
4. [Features](#4-features)
* Existing
* Future
5. [Technologies used](#5-technologies-used)
6. [Testing](#6-testing)
7. [Deployment](#7-deploymemt)
8. [Credits](#8-credits)

---
### 1 UX
---
#### User Stories

**First time users:**

As a first time user of the game, I want to be able to put my name into the game as the player.

As a first time user of the game, I want to be able to start the game easily.

As a first time user of the game, I want to easily understand the rules and aims of the game. 

As a first time user of the game, I want to be able to play the game bug free. 

As a first time user of the game, I want to be able to play the game on whatever screen size I may be on. 


**Returning users:**

As a returning user of the game, I want to be able to start the game again.

As a returning user of the game, I want the matches to reshuffle so I am not playing the same cards again.

As a returning user of the game, I want my lives to reset when I replay the game. 

**Site owners:**

As an owner of the game site, I want to promote healthy eating for children

As an owner of the game site, I want to teach children about vegetables with simple facts.

#### Site structure

The site will have a very simple and easy to navigate structure as it is aimed at children.

The header of the page will contain the heading and subheading.

Then there will be a section containing an image of the game mascot and some text with him introducing the user to the concept of the game. 

The game area itself will have a colourful background and the 12 game cards set out over 3 columns and 4 rows. 

On smaller screens, under the game section, will be a text area containing randomly generated facts about fruit, veg, and nutrition. These will be on the right of the game on larger screens.  

The footer of the page will just contain the copyright information. 

---
### 2 Design
---

#### Wireframes

![wireframephone](../docs/imgs/phone.png)

![wireframepad](../docs/imgs/pad.png)

![wireframedesktop](../docs/imgs/desktop.png)

#### Colours

![colourscheme](../docs/imgs/colours.jpg)

41AC3C (Green pantone) is used for the backs of the cards in the game section. It is also used for the button text both on the custom 404 page. 

055C00 (Lincoln green) is used for the main header of the page. 

296415(Dark green) is used for the subheading. 

465438 (Rifle green) is used to contrast the brighter greens. It is used for text throughout the project. 

Black is used to make certain point on the page stand out, the 'lives left' text and 'click me' button are important information that users need to see clearly. 

White space is used on the page to give a clean look to the game and make sure the rest of the colour scheme looks more vibrant. 

#### Typography

All fonts used are imported and sourced from Google fonts. 

**Gluten**

![glutenfont](../docs/imgs/glutenfont.jpg)

Gluten is used for the main heading of the page to create a memorable logo for The Veg Heads! brand. It is also used for the character name cards within the game.

**Hachi Maru Pop**

![hachifont](../docs/imgs/hachifont.jpg)

Hachi Maru Pop is used for the subheading and the ‘lives left’ text. It is a fun font that gives the page a bit of whimsy. 

**Poppins**

![poppinsfont](../docs/imgs/poppinsfont.jpg)

Poppins is used for paragraph text throughout the site. It is an easy-to-read font but still ties in with the aesthetic of the game. 

#### Imagery 

**Character - The Veg Heads!**

![mascotveg](../docs/imgs/veg.jpg)

The Veg Heads! are fictional character based on this free image found on freepik. The image was separated into the individual characters for use in the match game.

**Mascot - Tommy Tomato**

![mainmascot](../assets/images/tommy-tomato.jpg)

The main mascot is the tomato character, he was chosen as the main one to stand out against the green tones across the page.

**Non character cards**

![cardfronts](../docs/imgs/cardfronts.jpg)

The matches for the character cards are their names, these where made in gitpod and screen grabbed. 

**Game background**

![vegbackground](../assets/images/veg-background.jpg)

The game board background is a hand drawn vegetable free background from vecteezy. It is muted enough on colour as to not make the game area hard to see. 

**Favicon**

![favicon](../docs/imgs/favicon.jpg)

The site icon is a small tomato sourced from Icons8. 

#### Design differences

Originally the plan was to move the ‘did you know?’ and ‘lives left’ section to the right of the game board on larger screens. After trying this out the idea was dropped as it made the site look messy and asymmetrical, which didn’t go with the minimalistic style of the site. Instead the layout is kept the same as on smaller screens. 

The ‘did you know?’ section was originally intended to generate a random fact every time the game was restarted. The idea was replaced with a ‘click me’ button that generates the facts instead, this increases the interactivity of the site and encourages the users learning. 

---
### 3 Site limitations
---

---
### 4 Features
---

#### Current

Username alert

![usernamealert](../docs/imgs/onloadalert.jpg)

On the site loading up the user is greeted with an alert in which they can enter their name for use in the site. This is the first part of getting the user engaged with the site. 

Header

![header](../docs/imgs/header.jpg)

The header contains both the Veg Heads! logo and the name of the game. It also introduces the game mascot and what the purpose of the game is. Within this introduction is the users name that is generated in the greeting via .innerHTML. If the user does not want to put in a name it is left blank button the intro continues to makes sense. 

Game

![gameboard](../docs/imgs/gameboard.jpg)

The game feature itself has 12 match cards, 6 picture and 6 text. The card backs are brightly coloured, and the card faces are minimalistic, so they stand out against the background. When a card is turned it is toggled with the class ‘selected’, when two selected cards have matching names they remain turned upright, if the two selected cards do not have matching name attributes then they flip back over to be clicked again later. All cards flip with a fun animation. 
The background image on the game board is simple as to not defer from the game cards, but still colourful enough to have the game board feel like the main point of the page. 


Lives left counter

![livescounter](../docs/imgs/livescounter.jpg)

The lives left counter starts at 8 and goes down to zero with each incorrect move using a decrement--. The background of the text area is white to make is more visible against the background image. If the player loses the game the lives counter is refreshed back up to 8 when the game restarts. 

Win alert

![winalert](../docs/imgs/winalert.jpg)

If the user wins the game, they are congratulated by an alert that thanks them for helping. On the user pressing ok the newGame variable starts the game again.

Lose alert 

![losealert](../docs/imgs/losealert.jpg)

If the use losses the game, an alert pops up to tell them to try again. Again, on the user pressing the ok button the alert closes and the newGame variable starts the game again. 

Trivia area

![triviaarea](../docs/imgs/triviasection.jpg)

Under the game board there is a trivia area that shows a random fact about vegetables, fruit, or nutrition with the heading ‘Did you know?’. These facts are generated when the user clicks the button below it. 

Click me button 

![clickme](../docs/imgs/clickmebutton.jpg)

When the user clicks the ‘Click me!’ button a random fact from the ‘facts’ array is revealed. This button is another level of interactivity to get the user to engage with the site and encourage learning. 

Footer

![footer](../docs/imgs/footer.jpg)

The footer contains the fictional copyright of the Veg Heads! to as there would be on a real-world site.

Custom 404 page 

![404page](../docs/imgs/404page.jpg)

The 404 page is very simple and contains the mascot prompting the user to return to the index.html page via a return home button.

#### Future

Some possible future features for this project include:

- Tie ins with other Veg Head! branded content for example video content, competitions, and other games based around the same group.

- Links to Veg Heads! social media and shopping sites. 

- Adding extra levels that get incrementally more difficult as they go on. 

- A saved high score section so users can compare their memory skills with others.

- A timer could be added for an extra challenge. 

- A feedback button could be added that takes users to a form to send their thoughts about the site or the game itself. 

- The alerts can be changed to modals, I chose to keep them as alerts as I did not want to use bootstrap for this project as I used it heavily in my MP1. 


---
### 5 Technologies used
---

HTML 5 – The coding language used to structure the site and its content.

CSS 3 – The coding language used to style the site.

JavaScript(ES6) - The coding language used to add interactivity.

Balsamiq – The software used to create wireframes during the design process.

Google Fonts – Open-source font service used to import all custom fonts on the site.

Gitpod – The IDE used to write code and commit to Git.

Git – The software used to manage version control and push to Github.

Github – The repository site used to store the project pushed from Gitpod, also used to deploy the site via Github Pages.

TinyJPG – The website used to compress image sizes to reduce storage used, creating faster loading speeds.

Chrome DevTools – The built-in developer tools used throughout development to check responsivity on all screen sizes.

WAVE – The accessibility evaluation tool used throughout to check all site aspects are fully accessible to users with disabilities.

Lighthouse – The developer tool use to test site performance.

W3 Validator – The validator used to check all pages for syntax errors.

Jigsaw validator – The validator used to check all pages for CSS syntax errors.

JSLint - The analysis tool used to check JS for errors. 

Technsini – The mockup generator site used to create mockup images in README.md.

Microsoft Word - The software used to write README.md, mainly used for spell check purposes.

Microsoft Excel - The software used to make the testing spreadsheet.

---
### 6 Testing
---

Testing completed for this project covers the areas of: responsivity, features, accessibility, performance, and validator testing. Tests where completed regularly at every stage of development and then at the final stage before submitting. 

<details>
<summary>Full testing spreadsheet</summary>

![responsivitytesting](../docs/imgs/responsivitytest.jpg)

![featurestesting]()

![accessibilitytesting](../docs/imgs/accessabilitytest.jpg)

![performancetesting](../docs/imgs/performancetest.jpg)

![validatortesting](../docs/imgs/validatortest.jpg)

</details>

<details>
<summary>Download test results</summary>

[xlsx file]()

</details>

**Key results:**

Test A2 is showing some alerts in wave. This is just a suggestion by wave to make some text a header even though it is paragraph text. This alert does not show if the ‘click me’ button is pressed before running the page through wave. 

Performance testing (P1) comes back as 93 in lighthouse but may be higher or lower on other machines depending on internet speeds.
 
The validator test V4 is showing several warnings when the code is ran through JSLint. These have been left in as they are required for the game to run as it does, fixing some of these errors will make the game less accessible or make the code unnecessarily longer.


---
### 7 Deploymemt
---

This project was initially created in Github using the Code Institute’s full template

Version control was accomplished through the use of Github by pushing to the repository using the following:

- Git add was used to stage files before committing.  
- Git commit -m was used to add commit messages.  
- Git push was used to push code to the repo.  

The project was then deployed using Github Pages by doing the following steps:

- Open repository  
- Click Settings  
- Click Pages on the left-hand side  
- In Source select deploy from branch  
- Select correct branch and root  
- Click save  
- Once generated click the link to the live site  

---
### 8 Credits
---

