console.log("Welcome to Address Book Javascript")
var prompt = require('prompt-sync')();
class Contact{
  constructor(...params){
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phone = params[6];
    this.email = params[7];
}
  get firstName(){
    return this._firstName
  }
  set firstName(firstName){
    let fNameRegex = RegExp('^[A-Z][a-z]{2,}')
    if(fNameRegex.test(firstName))
      this._firstName = firstName
    else
      throw "Invalid First Name"
  }
  get lastName(){
    return this._lastName
  }
  set lastName(lastName){
    let lNameRegex = RegExp('^[A-Z][a-z]{2,}')
    if(lNameRegex.test(lastName))
      this._lastName = lastName
    else
      throw "Invalid Last Name"
  }
  get address(){
    return this._address
  }
  set address(address){
    let addRegex = RegExp('^[A-Za-z]{4,}')
    if(addRegex.test(address))
      this._address = address
    else
      throw "Invalid Address"
  }
  get city(){
    return this._city
  }
  set city(city){
    let cityRegex = RegExp('^[A-Za-z]{4,}')
    if(cityRegex.test(city))
      this._city = city
    else
      throw "Invalid City Name"
  }
  get state(){
    return this._state
  }
  set state(state){
    let stateregex = RegExp('^[A-Za-z]{4,}')
    if(stateregex.test(state))
      this._state = state
    else
      throw "Invalid State Name"
  }
  get zip(){
    return this._zip
  }
  set zip(zip){
    let zipRegex = RegExp('^[0-9]{6}$')
    if(zipRegex.test(zip))
      this._zip = zip
    else
      throw "Invalid zip"
  }
  get phone(){
    return this._phone
  }
  set phone(phone){
    let phoneRegex = RegExp('^[1-9]{1}[0-9]{9}$');
    if (phoneRegex.test(phone)) {
      this._phone = phone;
    }
    else 
      throw 'Invalid Phone Number';
  }
  get email(){
    return this._email
  }
  set email(email){
    let emailRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@!%_&])[A-Za-z0-9$#.@!%_&]{8,}$');
    if (emailRegex.test(email)) {
      this._email = email;
    }
    else 
      throw 'Invalid Email';
  }
  toString() {
    return "\nFirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address 
                          + ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone = " 
                          + this.phone + ", Email = " + this.email
  }
}
function createContact(){
  let contact
  let fName = prompt("Enter first name: ");
  let lName = prompt("Enter last name: ");
  let address = prompt("Enter the address: ");
  let city = prompt("Enter the city: ");
  let state = prompt("Enter the state: ");
  let zip = prompt("Enter the zip: ");
  let phone = prompt("Enter the phone: ");
  let email = prompt("Enter the email: ");
  try{
    contact = new Contact(fName,lName,address,city,state,zip,phone,email); 
  }
  catch(error){
    console.error(error)
  }
  return contact;
}

let addressBookArray = new Array();
//UC3
function addContact(){ 
  let contact;
  contact = createContact();
  if (contact == undefined){
    console.log("Add contact with proper inputs")
  }
  else{
    addressBookArray.push(contact);
  }
}
//UC4
function editContact(personName){
  addressBookArray.forEach(
    contact => {
      if(contact._firstName + " " + contact._lastName == (personName)){
        let choice = prompt("1. Edit address 2. Edit City 3. Edit State 4. Edit Phone 5. Exit : ");
        switch(parseInt(choice)){
          case 1:
            let address = prompt("Enter new Address : ");
            contact.address = address;
            break;
          case 2:
            let newCity = prompt("Enter new city : ");
            contact._city = newCity;
            break;
          case 3:
            let state = prompt("Enter new State : ");
            contact.state = state;
            break;
          case 4:
            let phone = prompt("Enter new Phone number : ");
            contact.phone = phone;
            break;
          case 5:
            console.log("Nothing to change, EXIT...");
            break;
        }
      }
    })
}
//UC5 
function deleteContact(deleteName){
  let i = 0;
  addressBookArray.forEach(contact => {
      if ((contact.firstName + " " + contact.lastName) == (deleteName)) {
          addressBookArray.splice(i, 1);
          addressBookArray.indexOf()
      }
      i++;
  });
}
//UC6
function countContacts(length){
  length++
  return length
}
{
  let again;
  do{
    let choice = prompt("Enter the choice you want to do : 1. Add Contact 2. Edit Contact 3. Delete Contact 4. Show Contacts 5. Count Contacts : ")
    switch(parseInt(choice)){
      case 1:
        console.log("Add Contact Details...")
        addContact()
        break;
      case 2:
        console.log("Edit Contact...")
        let editName = prompt("Enter the person name : ");
        editContact(editName);
        break;
      case 3:
        console.log("Delete Contact...")
        let deleteName = prompt("Enter the person name : ");
        deleteContact(deleteName);
        break;
      case 4:
        console.log("Contacts in address book are : " + addressBookArray);
        break;
      case 5:
        console.log("Number of contacts in address book are " + addressBookArray.reduce(countContacts, 0))
        break
      default:
        console.log("Enter valid choice...")
    }
    again = prompt("Want to perform more ? ")
  }while(again == "Yes")
}
