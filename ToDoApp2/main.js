//destination += value
//var filling = "Andrew";
//'<p>' + filling + '</p>'
"use strict";
var toDoCounter = 0;

var todoListArray = [];


var elementDoSomething = function () {
    "use strict";
    toDoCounter = toDoCounter + 1;
    var inputValue = document.getElementById("todoInput");
   
    todoListArray.push(inputValue.value);
    alert(todoListArray);

    var outputOrderedList = document.getElementById("todoUnorderedList");
    
        
    outputOrderedList.innerHTML = outputOrderedList.innerHTML +
        '<li id="hideItem' + toDoCounter + '"><span id="item' + toDoCounter + '" onclick="strikeOutListItem(\'item' + toDoCounter + '\');">' + inputValue.value + '</span>' +
    '<span id="item' + toDoCounter + '" onclick="hideListItem(\'hideItem' + toDoCounter + '\');">    ---Click to Delete--- </span></li>';

   
    inputValue.value = " "
};



var strikeOutListItem = function (listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
};

var hideListItem = function (hideItemId) {
    "use strict";
    document.getElementById(hideItemId).setAttribute("class", "hideItem");
};

//for (var i = 0; i < todoListArray.length; i = i + 1) {
//    outputOrderedList
//}