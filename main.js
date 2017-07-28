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

    // var startButton = document.querySelector('.start'); /*query selector finds element and you use same identification as css and html. can also do .elapsed-time .minutes. Will just return one elmement. Need to use querySeelctorAll to get all of the HTML elements with those selectors. */

    function toggleButton() {
      var currentText = startButton.textContent;
      if(currentText === 'Start'){
        startButton.textContent = 'Stop';
        startButton.style.backgroundColor = 'red';

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
      msLeft = msLeft % msInHour;

      var minuteCount = Math.floor(msLeft / msInMinute);
      msLeft = msLeft % msInMinute;

      var secondCount = Math.floor(msLeft / msInSecond);

      return [hourCount, minuteCount, secondCount];
    }

    function zeroPad(interval) {
      var paddedHours = ("0" + interval[0]).slice(-2);
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

      printTimeToScreen(elapsed);
    }

    function handleStartClick () {
      console.log('You clicked the button');
      startTime = new Date(); //Date is a built in function we can call. We know we need to add "new" as a keyword in front because Date starts with a capital 'D'. You always need to add "new" in front of the function with a capital letter.
      console.log(startTime);
      toggleButton();


      timerId = window.setInterval(logElapsedTime, 1000); //window is the overall browser.
    }
    // doThisWhenClicked(); //the functon is called when the line of cod is rendered.

    startButton.addEventListener('click', handleStartClick); /*the function is called when the button is clicked. It is the event handler*/



}()); //last line of javascript file




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
