function newItem() {
  let li = $("<li></li>");
  //create varible li for new element li
  let inputValue = $("#input").val();
  //created varibale inputValue which is equal to the id input and gets the value
  li.append(inputValue);
  //we append the inputValue to li so that we can start a list
}
