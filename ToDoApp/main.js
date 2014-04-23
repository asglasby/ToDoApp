"use strict"

var submitButton = function () {
    "use strict"
    var listItem = document.createElement("li");  //the html <tag> that will be added where the item will be added
    listItem.innerHTML = document.getElementById("todoInput").value;  // where the value will be pulled from

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    listItem.appendChild(checkBox);

    var list = document.getElementById("todoUnorderedList"); // id of my ol
    list.appendChild(listItem);
};

//var todoInput = document.getElementById("todoInput");
//todoInput.focus();

var todoListItem = document.getElementById("buttonAdd");
buttonAdd.onclick = submitButton;


"use strict";
var toDoCounter = 0;

var elementDoSomething = function () {
    "use strict";
    toDoCounter = toDoCounter + 1;
    var inputValue = document.getElementById("todoInput");
    var outputOrderedList = document.getElementById("todoUnorderedList");

    outputOrderedList.innerHTML = outputOrderedList.innerHTML +
        '<li id="item' + toDoCounter + '" onclick="strikeOutListItem(\'item' + toDoCounter + '\');">' + inputValue.value + '</li>';
};

var strikeOutListItem = function (listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
};



//document.getElementById("todoInput").value;
//document.getElementById("todoUnorderedList").innerHTML;

//destination += value  - allows adding on instead of replacing.

//var filling = "Andrew";

//'<p>' + filling + '</p>' - adding tags to strings - the browser will interpret the <li> tags

// strikethrough text



//var listInput = document.getElementById("todoInput").value;
//var listItemToAdd = listInput.innerHTML;
//var ol = document.getElementById("todoUnorderedList").innerHTML;
//var li = document.createElement("li");
//li.appendChild(document.createTextNode("listInput"));
//ol.appendChild(li);
// a smarter way to learn JS - 48, 49, 55, 64, 65

//string concatenation will give you the flexibility to add code and tags to html via javascript


//var elementDoSomething = function() {
//    "use strict";
//    toDoCounter = toDoCounter + 1;
//    var inputValue = document
//document.getElementByID.innterHTML += "<i>" +<li id="item' + toDoCounter +'" > '<h1>'+ document.getElementById("todoInput").value + '</li>';
//var toDoCounter = 0;



//outputOrderedList.innerHTML = outputOrderedList.innerHTML + 
//    '<li id ="item' + todoCounter + ' " onclick="strikeOutListItem(\'item ' + toDoCounter +
//    '\');">' + inputValue.value + '</li>'



//var strikeOutListItem = function (listItemID) {
//    "use strict";
//    document.getElementById(listItemId).setAttribute("class", "strikethrough")

//};

//innerHTML is a property