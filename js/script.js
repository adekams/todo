
/*create an x*/
function times() {
    var span = document.createElement('SPAN');
    var remove_list = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(remove_list);
    list[i].appendChild(span);
}

/*for each li item..*/
var list = document.getElementsByTagName("li");
for (i = 0; i<list.length; i++){
    times()
}

/*close or remove item when X is clicked  */
function close(){
    var close = document.getElementsByClassName('close');
    for (i= 0; i<close.length; i++){
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}


/*add new item to the list when + is clicked */
function addNew(){
    var li = document.createElement('li');
    var listInput = document.querySelector("#input").value;
    if (listInput.length > 28){
        alert("Max input character allowed is 28. You currently have " + listInput.length + " characters")
        return false
    }
    else{
        
        var text = document.createTextNode(listInput);
        li.appendChild(text);
    }
    

    /*if input is empty or not when + is clicked */
    if (listInput === ''){
        alert("You cannot add an empty item to list!");
    }else{
        document.getElementById("todo").appendChild(li);
    }

    /*set the input value to empty when not in use */
    document.querySelector('#input').value ="";
    times()

    /*remove the new list on clicking x */
    close()
}