// alert('warning!');

(function() { //first line of javascript file
'use strict'; //second line of javascript file

    // console.log('title.length', title.length);
    // console.log('howManyBeans', howManyBeans);
    var timerId = 0;
    var startTime;
    var startButton = document.getElementById('start-button');
    var hours = document.querySelector('.hours');
    var minutes = document.querySelector('.minutes');
    var seconds = document.querySelector('.seconds');
    // console.log(hours, minutes, seconds);

    // var startButton = document.querySelector('.start'); /*query selector finds element and you use same identification as css and html. can also do .elapsed-time .minutes. Will just return one elmement.

    // IMPORTANT! Need to use querySelectorAll to get all of the HTML elements with those selectors.

    function toggleButton() {
      var currentText = startButton.textContent;
      if(currentText === 'Start'){
        startButton.textContent = 'Stop'; //.textContent gets and changes the text from an HTML element
        startButton.style.backgroundColor = 'red'; //.style pulls the CSS of an HTML element. You can specify the property after (like .backgroundColor -- use camelCase)

      } else {
        startButton.textContent = 'Start';
        startButton.style.backgroundColor = 'green';
      }
    }

    function millisecondsToInterval(elapsedMs) {
      var msLeft = elapsedMs;

      var msInHour = 60000 * 60;
      var msInMinute = 60000;
      var msInSecond = 1000;

      var hourCount = Math.floor(msLeft / msInHour);
      msLeft = msLeft % msInHour;  // hours left

      var minuteCount = Math.floor(msLeft / msInMinute);
      msLeft = msLeft % msInMinute; //minutes left

      var secondCount = Math.floor(msLeft / msInSecond); // msLeft not needed because seconds are the lowest common denominator?

      return [hourCount, minuteCount, secondCount];
    }

    function zeroPad(interval) {
      var paddedHours = ("0" + interval[0]).slice(-2); //Slicing 'slices' (in this case) going back 2 spots and returning only the sliced piece.
      var paddedMinutes = ("0" + interval[1]).slice(-2);
      var paddedSeconds = ("0" + interval[2]).slice(-2);

      return [paddedHours, paddedMinutes, paddedSeconds];
    }

    function printTimeToScreen(interval) {
      var formattedInterval = zeroPad(interval);
      hours.textContent = formattedInterval[0];
      minutes.textContent = formattedInterval[1];
      seconds.textContent = formattedInterval[2];

    }

    function logElapsedTime() {
      var currentTime = new Date();
      var elapsedTime = currentTime - startTime;
      var elapsed = millisecondsToInterval(elapsedTime);

      printTimeToScreen(elapsed); // prints hours, minutes and seconds elapsed
    }

    function handleStartClick () {
      console.log('You clicked the button');
      startTime = new Date(); //Date is a built in function we can call. We know we need to add "new" as a keyword in front because Date starts with a capital 'D'. You always need to add "new" in front of the function with a capital letter.
      console.log(startTime);
      toggleButton();


      timerId = window.setInterval(logElapsedTime, 1000); //window is the overall browser. //The setInterval(function(), interval) method calls a function or evaluates an expression at specified intervals (in milliseconds).
      //Why does storing this function in a variable call it?
    }
    // doThisWhenClicked(); //the functon is called when the line of cod is rendered.

    startButton.addEventListener('click', handleStartClick); /*the function is called when the button is clicked. It is the event handler*/
    //The addEventListener() method attaches an event handler to the specified element.



}()); //last line of javascript file




/*To run through the stopwatch:
User clicks the startButton.
1. handleStartClick():
a. console logs the action
b. the startTime is grabbed with the new Date(); function\\
c. startTime is console logged.
d. toggleButton() runs.
3. window.setInterval() runs ?

2. toggleButton():
a. Grabs the text from the button with .textContent on the HTML id
b. Changes the text to 'Stop' if it reads 'Start', or 'Stop' if it doesn't with .textContent
c. Changes the color to red if it reads 'Start' or green if it doesn't with style.backgroundColor

3. setInterval():
a. setInterval(function(), interval) method calls a function or evaluates an expression at specified intervals. In this case, logElapsedTime in milliseconds is called.

4. logElapsedTime():
a. grabs the current time with new Date ()
b. sets the elapsed time to the currentTime - startTime.
c. Stores the elapsed time in elapsed = millisecondsToInterval()
d. Runs the function printTimeToScreen(elapsed);
^ here we have the time we need, but it's not in the format we want.

5.  millisecondsToInterval():
a. Sets hour minute and second variables by multiplying milliseconds to be in factors of hours, minutes and seconds.
b. Sets hour, minute and second counts by dividing the msLeft by hour, minute and second variables.
c. Returns those counts - as hours, minutes, and seconds left (why 'left'?)

6. printTimeToScreen():
a. Sets a formattedInterval by running the zeroPad function.
b. Changes the text with .textContent in the variables hours, minutes and seconds to be the formattedInterval
c. Those variables are set to be classes in HTML - so the hours minutes and seconds are in their own div.
d. We know which formattedInterval goes with which class by using the index [0], [1], [2] to specify.
^ here we're just taking those milliseconds and changing them to a readable format (hours, mins and seconds).

7. zeroPad()
a. Adds zeroes to time to give a nice readable format.
b. Adds a zero to each interval[0] [1] [2]
c. Slices that interval to return only the last two numbers(text?) from the interval. (.slice(-2))
d. returns those slices as 'paddedHours, paddedMinutes, paddedSeconds'
e. Numbers after 09 don't appear as 010 because you're only returning the last two numbers.
To end the stopwatch */

// ^ It resets on click but does not stop. To end the stopwatch.


// Audrey's notes
//functions explained with color mixing machines

// function colorMixer(color1, color2, color3) {
//   console.log('color1', color1);
//   console.log('color2', color2);
//   console.log('color3', color3);
//
//
//   var mixedColor = '#' + color1 + color2 + color3;
//   return mixedColor;
// }
//
// var myNewColor = colorMixer('bb', 'dd', 'cc');
// console.log(myNewColor);
