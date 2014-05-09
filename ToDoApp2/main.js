//destination += value
//var filling = "Andrew";
//'<p>' + filling + '</p>'
"use strict";
var toDoCounter = 0;

var todoListArray = [];

//var todoListArray_lastEntry = 0;

var elementDoSomething = function () {
    "use strict";
    //toDoCounter = 0;
    var inputValue = document.getElementById("todoInput");
   
    todoListArray.push(inputValue.value);// puts the document.getElementById value into the array.

    var todoListArray_lastEntry = todoListArray[todoListArray.length - 1];

    var outputOrderedList = document.getElementById("todoUnorderedList"); //declare variable to place items 

    document.getElementById("todoUnorderedList").innerHTML = " ";
    for (var i = 0; i < todoListArray.length; i = i + 1) {
        toDoCounter = i;
       
        //takes the HTML and text out of the ordered list with the id - outputOrderedList
        outputOrderedList.innerHTML = outputOrderedList.innerHTML +
            '<li id="hideItem' + toDoCounter + '"><span id="item' + toDoCounter + '" onclick="strikeOutListItem(\'item' + toDoCounter + '\');">' + todoListArray[i] + toDoCounter + '</span>' +
    '<span id="item' + toDoCounter + '" onclick="hideListItem(\'hideItem' + toDoCounter + '\');">    ---Click to Delete--- </span></li>';
    }

    //alert(todoListArray
    
    inputValue.value = " "  //clears the text information from the inputValue
};


var strikeOutListItem = function (listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
};

var hideListItem = function (hideItemId) {
    "use strict";
    document.getElementById(hideItemId).setAttribute("class", "hideItem");
};


//var strikeOutListItem = function (listItemId) {
//    "use strict";
//    document.getElementById(listItemId).setAttribute("class", "strikethrough");
//};

//var hideListItem = function (hideItemId) {
//    "use strict";
//    document.getElementById(hideItemId).setAttribute("class", "hideItem");
//};


