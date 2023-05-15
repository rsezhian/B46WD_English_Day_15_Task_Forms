var myContainer = document.createElement("div");
myContainer.classList.add("container", "bg-secondary", "text-white", "p-4");
let myFormHead = document.createElement("div");
myFormHead.classList.add("h2");
myFormHead.style.textAlign = "center";

myFormHead.innerHTML = "HTML Form";
let myFormBody = document.createElement("form");
myFormBody.classList.add("p-5");
myFormBody.setAttribute("action", "form");
// myFormBody.setAttribute("onsubmit", "event.preventDefault();onFormSubmit()");
var myFirstName = createFormElement("First Name:", "text", "firstname");
var myLastName = createFormElement("Last Name:", "text", "lastname");
var myAddress = createFormElement("Address:", "text", "address");
var myPinCode = createFormElement("PinCode:", "text", "pincode");
var myGender = createFormRadioGender();
var myFavFood = createFormFavFood();
var myStateSelect = createFormStateSelect();
var myCountrySelect = createFormCountrySelect();
var myFormsubmit = createFormSubmitButton();

// Table Setup
var myupdateTableDiv = document.createElement("div");
myupdateTableDiv.classList.add("row", "bg-white");
let myupdateMainTable = document.createElement("table");
myupdateMainTable.classList.add("table", "mt-5");
let myupdateTableTHead = document.createElement("thead");
let myupdateTableTBody = document.createElement("tbody");
let myupdateTableTRow = document.createElement("tr");
let myupdateTableTRTHead1 = document.createElement("th");
myupdateTableTRTHead1.innerHTML = "First Name";
let myupdateTableTRTHead2 = document.createElement("th");
myupdateTableTRTHead2.innerHTML = "Last Name";
let myupdateTableTRTHead3 = document.createElement("th");
myupdateTableTRTHead3.innerHTML = "Address";
let myupdateTableTRTHead4 = document.createElement("th");
myupdateTableTRTHead4.innerHTML = "PinCode";
let myupdateTableTRTHead5 = document.createElement("th");
myupdateTableTRTHead5.innerHTML = "Gender";
let myupdateTableTRTHead6 = document.createElement("th");
myupdateTableTRTHead6.innerHTML = "Favourite Food";
let myupdateTableTRTHead7 = document.createElement("th");
myupdateTableTRTHead7.innerHTML = "State";
let myupdateTableTRTHead8 = document.createElement("th");
myupdateTableTRTHead8.innerHTML = "Country";
//
//
//
// function createFormElement
function createFormElement(labelvalue, typevalue, idvalue) {
  var myFormGrp = document.createElement("div");
  myFormGrp.classList.add("form-group", "row");
  var myFormLabel = document.createElement("label");
  myFormLabel.classList.add("label", "col-4", "col-form-label");
  myFormLabel.innerHTML = labelvalue;
  var myFormInput = document.createElement("input");
  myFormInput.setAttribute("type", typevalue);
  myFormInput.id = idvalue;
  myFormInput.placeholder = labelvalue;
  myFormInput.classList.add("form-control", "col-6");
  myFormInput.required = true;
  myFormGrp.append(myFormLabel, myFormInput);
  return myFormGrp;
}

//Function createForm Radio Gender
function createFormRadioGender() {
  var myFieldSet = document.createElement("fieldset");
  myFieldSet.classList.add("form-group");
  var myFieldDiv1 = document.createElement("div");
  myFieldDiv1.classList.add("row");
  var myFieldLegend = document.createElement("legend");
  myFieldLegend.classList.add("col-form-label", "col-4");
  myFieldLegend.innerHTML = "Gender:";
  var myFieldDiv2 = document.createElement("div");
  myFieldDiv2.classList.add("col-6", "pl-1");
  var myFieldDiv3 = document.createElement("div");
  myFieldDiv3.classList.add("form-check");
  var myGenderMale = document.createElement("label");
  myGenderMale.setAttribute("for", "Male");
  myGenderMale.classList.add("form-check-label");
  myGenderMale.innerHTML = "Male";
  var myRadioButton01 = document.createElement("input");
  myRadioButton01.setAttribute("type", "radio");
  myRadioButton01.classList.add("form-check-input");
  myRadioButton01.checked = true;
  myRadioButton01.id = "Male";
  myRadioButton01.value = "Male";
  myRadioButton01.name = "gender";

  var myFieldDiv4 = document.createElement("div");
  myFieldDiv4.classList.add("form-check");
  var myGenderFemale = document.createElement("label");
  myGenderFemale.setAttribute("for", "Female");
  myGenderFemale.innerHTML = "Female";
  var myRadioButton02 = document.createElement("input");
  myRadioButton02.setAttribute("type", "radio");
  myRadioButton02.classList.add("form-check-input");
  myRadioButton02.id = "Female";
  myRadioButton02.value = "Female";
  myRadioButton02.name = "gender";

  myFieldSet.append(myFieldDiv1);
  myFieldDiv1.append(myFieldLegend, myFieldDiv2);
  myFieldDiv2.append(myFieldDiv3, myFieldDiv4);
  myFieldDiv3.append(myRadioButton01, myGenderMale);
  myFieldDiv4.append(myRadioButton02, myGenderFemale);
  return myFieldSet;
}

// Function createFormFavFood
function createFormFavFood() {
  let myFormFavFoodDiv = document.createElement("div");
  myFormFavFoodDiv.classList.add("form-group", "row");
  let myFormFavFoodLabel = document.createElement("label");
  myFormFavFoodLabel.classList.add("col-form-label", "col-4");
  myFormFavFoodLabel.innerHTML = "Favourite Food:";

  let myFormFavFoodSelect = document.createElement("select");
  myFormFavFoodSelect.multiple = true;
  myFormFavFoodSelect.id = "food";
  myFormFavFoodSelect.classList.add("form-control", "col-6");
  let myFormFavFoodOption1 = new Option("Biryani", "Biryani");
  let myFormFavFoodOption2 = new Option("Noodles", "Noodles");
  let myFormFavFoodOption3 = new Option("Fried Rice", "Fried Rice");
  let myFormFavFoodOption4 = new Option("Dosa", "Dosa");
  let myFormFavFoodOption5 = new Option("Idly", "Idly");
  myFormFavFoodOption1.selected = true;
  myFormFavFoodSelect.add(myFormFavFoodOption1);
  myFormFavFoodSelect.add(myFormFavFoodOption2);
  myFormFavFoodSelect.add(myFormFavFoodOption3);
  myFormFavFoodSelect.add(myFormFavFoodOption4);
  myFormFavFoodSelect.add(myFormFavFoodOption5);
  myFormFavFoodDiv.append(myFormFavFoodLabel, myFormFavFoodSelect);
  return myFormFavFoodDiv;
}

// Function FormStateSelect
function createFormStateSelect() {
  let myFormStateSelectDiv = document.createElement("div");
  myFormStateSelectDiv.classList.add("form-group", "row");
  let myFormStateSelectLabel = document.createElement("label");
  myFormStateSelectLabel.classList.add("col-form-label", "col-4");
  myFormStateSelectLabel.innerHTML = "State:";
  let myFormStateRangeSelect = document.createElement("select");
  myFormStateRangeSelect.id = "state";
  myFormStateRangeSelect.classList.add("form-control", "col-6");
  let myFormStateSelectOption1 = new Option("TamilNadu", "TamilNadu");
  myFormStateSelectOption1.selected = true;
  let myFormStateSelectOption2 = new Option("Puducherry", "Puducherry");
  let myFormStateSelectOption3 = new Option("Kerala", "Kerala");
  let myFormStateSelectOption4 = new Option("Telangana", "Telangana");
  let myFormStateSelectOption5 = new Option("Madhya Pradesh", "Madhya Pradesh");
  myFormStateRangeSelect.add(myFormStateSelectOption1);
  myFormStateRangeSelect.add(myFormStateSelectOption2);
  myFormStateRangeSelect.add(myFormStateSelectOption3);
  myFormStateRangeSelect.add(myFormStateSelectOption4);
  myFormStateRangeSelect.add(myFormStateSelectOption5);
  myFormStateSelectDiv.append(myFormStateSelectLabel, myFormStateRangeSelect);
  return myFormStateSelectDiv;
}

// Function CountrySelect
function createFormCountrySelect() {
  let myFormCountrySelectDiv = document.createElement("div");
  myFormCountrySelectDiv.classList.add("form-group", "row");
  let myFormCountrySelectLabel = document.createElement("label");
  myFormCountrySelectLabel.classList.add("col-form-label", "col-4");
  myFormCountrySelectLabel.innerHTML = "Country:";
  let myFormCountryRangeSelect = document.createElement("select");
  myFormCountryRangeSelect.classList.add("form-control", "col-6");
  myFormCountryRangeSelect.id = "country";
  let myFormCountrySelectOption1 = new Option("India", "India");
  myFormCountrySelectOption1.selected = true;
  let myFormCountrySelectOption2 = new Option("Australia", "Australia");
  let myFormCountrySelectOption3 = new Option("Switzerland", "Switzerland");
  let myFormCountrySelectOption4 = new Option("Canada", "Canada");
  let myFormCountrySelectOption5 = new Option("England", "England");
  myFormCountryRangeSelect.add(myFormCountrySelectOption1);
  myFormCountryRangeSelect.add(myFormCountrySelectOption2);
  myFormCountryRangeSelect.add(myFormCountrySelectOption3);
  myFormCountryRangeSelect.add(myFormCountrySelectOption4);
  myFormCountryRangeSelect.add(myFormCountrySelectOption5);
  myFormCountrySelectDiv.append(
    myFormCountrySelectLabel,
    myFormCountryRangeSelect
  );
  return myFormCountrySelectDiv;
}

// Function Form Submit button
function createFormSubmitButton() {
  var myFormSubmitDiv = document.createElement("div");
  myFormSubmitDiv.classList.add("row", "offset-6");
  let myFormSubmitButton = document.createElement("button");
  myFormSubmitButton.innerHTML = "Submit";
  myFormSubmitButton.type = "button";
  myFormSubmitButton.classList.add("btn", "btn-info", "text-center", "mt-5");
  myFormSubmitButton.onclick = onFormSubmit;
  myFormSubmitDiv.append(myFormSubmitButton);
  return myFormSubmitDiv;
}
//
//
//
document.body.appendChild(myContainer);
myContainer.append(myFormHead, myFormBody, myupdateTableDiv);
myupdateTableDiv.append(myupdateMainTable);
myupdateMainTable.append(myupdateTableTHead, myupdateTableTBody);
myupdateTableTHead.append(myupdateTableTRow);
myupdateTableTRow.append(
  myupdateTableTRTHead1,
  myupdateTableTRTHead2,
  myupdateTableTRTHead3,
  myupdateTableTRTHead4,
  myupdateTableTRTHead5,
  myupdateTableTRTHead6,
  myupdateTableTRTHead7,
  myupdateTableTRTHead8
);
myFormBody.append(
  myFirstName,
  myLastName,
  myAddress,
  myPinCode,
  myGender,
  myFavFood,
  myStateSelect,
  myCountrySelect,
  myFormsubmit
);

// Code Here
//
let mySelectRow = 0;

function onFormSubmit() {
  var fn = document.getElementById("firstname").value;
  var ln = document.getElementById("lastname").value;
  var addr = document.getElementById("address").value;
  var pcode = document.getElementById("pincode").value;

  if (!fn) {
    alert("Please Enter First Name");
  } else if (!ln) {
    alert("Please Enter Last Name");
  } else if (!addr) {
    alert("Please Enter Address");
  } else if (!pcode) {
    alert("Please Enter pin code");
  } else {
    let tablebody = document.querySelector("tbody");
    var trow2 = tablebody.insertRow(tablebody.length);
    var cell1 = trow2.insertCell(0);
    cell1.innerHTML = fn;
    var cell2 = trow2.insertCell(1);
    cell2.innerHTML = ln;
    var cell3 = trow2.insertCell(2);
    cell3.innerHTML = addr;
    var cell4 = trow2.insertCell(3);
    cell4.innerHTML = pcode;
    var cell5 = trow2.insertCell(4);
    var data = document.getElementsByName("gender");
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked === true) {
        cell5.innerHTML = data[i].value;
      }
    }
    var cell6 = trow2.insertCell(5);
    var foodvalues = document.getElementById("food");
    cell6.innerHTML = [...foodvalues.options]
      .filter((val) => val.selected)
      .map((opt) => opt.value);
    var cell7 = trow2.insertCell(6);
    cell7.innerHTML = document.getElementById("state").value;
    var cell8 = trow2.insertCell(7);
    cell8.innerHTML = document.getElementById("country").value;

    resetForm();
  }
}

function resetForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  mySelectRow = 0;
}

//
//
//
//
//
//   var formData = readFormData();
//   if (mySelectRow == 0) {
//     insertNewRecord(formData);
//     resetForm(formData);
//   }
