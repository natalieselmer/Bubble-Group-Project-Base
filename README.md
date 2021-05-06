# Basketball Statistics and the NBA Bubble
## Description 
---
Since COVID-19 has hit, the sports industry has changed drastically. Many basketball fans weren't able to keep up with the basketball stats that they normally due because of the pandemic. To address this issue and give basketball fans a place to have all of this information already in one place, and have it be customizable, we have developed a web application that provides all relevant information from the Bubble as well as the ability to customize this space with other teams, players, and statistics.

## Link to Website
---
https://intense-bastion-27734.herokuapp.com/

## Target Browsers
- Macbook Pro 13/15
- iPhone 6/7/8 Plus
---
## Links 
User Manual
Developer Manual

---

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type npm install into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run npm start. There should be no errors.
3. In a web browser, go to url: http://localhost:3000/.


## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.

1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run npm start.
3. In the second terminal run npm test.

--

## Server application APIs
example below COREY
/ - API route that brings user to web application home page; can choose between players and teams

/player
  - GET: returns the players from the database
  - POST: allows user to input a player entry if not already in the table
  - PUT: allows user to update any player attribute
  - DELETE: user can click "DELETE" button to delete player attributes

/player/:player_id
  - GET: returns the player that the user searches for
  - DELETE: user can click "DELETE" button to delete a player entry

/teams
  - GET: returns all the playoff teams
  - PUT: allows user to update a playoff team
  - POST: allows user to input a playoff team entry if not already in the table

/sponsors
  - GET: returns all sponsors entries

/endorsements
  - GET: returns all endorsements entries

/teamname
  - GET: returns all team entries
  - PUT: allows user to update a team
  - POST: allows user to input a team entry if not already in the table

/awards
  - GET: returns all awards entries


## Known Bugs and Future Development
- Having issues with connecting the forms to the api's


## Future Development:
- Implement "favorites" feature
- Add multiple seasons of data to allow for further analysis
- Incorporate and display team statistics in addition to players

