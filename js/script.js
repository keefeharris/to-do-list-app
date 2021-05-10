function newItem() {
  let li = $("<li></li>");
  //create varible li for new element li
  let inputValue = $("#input").val();
  //created varibale inputValue which is equal to the id input and gets the value
  li.append(inputValue);
  //we append the inputValue to li so that we can start a list

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = $("#list");
    list.append(li);
  }
  /*
    if inputValue has no entry then the window will use that alert
    otherwise the id list is selected from the dom and the li with the valueInput is added to the list
  */

  function crossOut() {
    li.toggleClass(strike);
  }
  //function crossOut is created to crossout any list item added to the list
}
