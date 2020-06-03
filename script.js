/*Add x to each list item */
var list = document.getElementsByTagName("li");
for (i = 0; i<list.length; i++){
    var span = document.createElement('SPAN');
    var remove_list = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(remove_list);
    list[i].appendChild(span);
}

/*close or remove item when X is clicked  */
var close = document.getElementsByClassName('close');
for (i= 0; i<close.length; i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

/*add new item to the list when + is clicked */
function addNew(){
    var li = document.createElement('li');
    var listInput = document.querySelector("#input").value;
    var text = document.createTextNode(listInput);
    li.appendChild(text);

    /*if input is empty or not when + is clicked */
    if (listInput === ''){
        alert("You cannot add an empty item to list!");
    }else{
        document.getElementById("todo").appendChild(li);
    }

    document.querySelector('#input').value ="";

    var span = document.createElement('SPAN');
    var remove_list = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(remove_list);
    list[i].appendChild(span);

    for (i= 0; i<close.length; i++){
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}