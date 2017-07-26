// alert('warning!');

(function() { //first line of javascript file
'use strict'; //second line of javascript file


    var coffeeMug = 'mmmm, coffee'; //strings

    var title = 'Time to wake up ' + coffeeMug;



    var howManyBeans = 7; // integar

    /*
    Mutli linke comment here
    */

    var cupsOfCoffeePossible = 500 / 64; //divide
    var cupsOfCoffeePossible = 500 / howManyBeans;
    var sums = 12 + 25;
    var multiply = 10 * 10;
    //
    // console.log('title.length', title.length);
    // console.log('howManyBeans', howManyBeans);

    var startButton = document.getElementById('start-button');
    console.log(startButton);

    // var startButton = document.querySelector('.start'); /*query selector finds element and you use same identification as css and html. can also do .elapsed-time .minutes. Will just return one elmement. Need to use querySeelctorAll to get all of the HTML elements with those selectors. */

    function doThisWhenClicked () {
      alert('button was clicked');
    }
    startButton.addEventListener('click', doThisWhenClicked);

}()); //last line of javascript file
