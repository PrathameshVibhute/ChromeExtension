// Adding Chrome is remaining


var ulElement = document.getElementsByClassName('ChromeExtension_SavedData');
var inputElement = document.getElementsByClassName('ChromeExtension_InputField');
var saveList = [];
var saveBtn = document.getElementsByClassName("ChromeExtension_SaveBtn");
var deleteBtn = document.getElementsByClassName("ChromeExtension_DeleteBtn");

var stringList = ""


// Save Text on button clicked
function saveText() {

    if(inputElement[0].value !== "") {
        saveList.push(inputElement[0].value);
        stringList = JSON.stringify(saveList);
        localStorage.setItem('savedData',stringList);
        inputElement[0].value = "";
        displayList()
    }
}

// List to display list 
function displayList() {
    var data = "";
    var parseArray = JSON.parse(localStorage.getItem('savedData'));
    
    if(parseArray !== null) {
        for(var i = 0; i < parseArray.length; i++) {
        
            data += `
                        <li class= "ChromeExtension_List ">
                            <a clclass="ChromeExtension_Link" href= "${parseArray[i]}" target="_blank">
                                 ${parseArray[i]}
                            </a>
                        </li>
                    `
        } 

        // Adding Html to UL
        ulElement[0].innerHTML = data;
    } else {
        ulElement[0].innerHTML = "";
    }
}

function clearStorage() {

    localStorage.clear();
    displayList();
}


// Call to each events
deleteBtn[0].addEventListener("click", clearStorage);
saveBtn[0].addEventListener("click", saveText);
displayList();