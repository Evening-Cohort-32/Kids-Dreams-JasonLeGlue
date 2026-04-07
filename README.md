# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When a child is clicked, the Kids.js module contains the code that will execute on the click event. I initialize childName and childWish as the values for data attributes 'name' and 'wish' found in the list items. After, there is a conditional that checks if the value of the data attribute 'type' of the item clicked is "child". If it is, a window alert pops up saying the child's name and their wish.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The kids objects contain "celebrityId" that points to the celebrity each child meets for their wish. There is no such value in the celebrity array. It makes for a simpler algorithm because each kids only meets one celebrity for their wish, while each celebrity could be matched with multiple kids for multiple wishes.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > When you're clicking the name of a celebrity to activate the window alert text, you are clicking on a list item. That list item has a data attribute titled 'sport' whose value is the sport that celebrity plays.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Main imports the functions Pairings, Celebrities, and Kids from their respective modules. The variable mainContainer is then assigned to the main element with the id "container" in the HTML. The variable applicationHTML is assigned the value of a formatted string written in HTML, with a heading and two articles. Inside the first article is two sections, each with a heading and the return value of a function. The first section calls the Kids() function which creates an ordered list and populates it by iterating through the database.children array. The second section calls the Celebrities() function which creates another ordered list and populates it by iterating through the database.celebrities array. Finally there is an article where Pairings() is called. Pairings() has an html variable that starts with an unordered list, and populates each list item by iterating through the database.children array, then for each child object iterating through the database.celebrities array to see which celebrity has an id matching the "celebrityId" assigned to the child object. The final line of main.js changes the mainContainer's HTML into the value of applicationHTML.
