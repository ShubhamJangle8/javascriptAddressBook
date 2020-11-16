console.log("Welcome to Address Book Javascript")
class Contact{
  constructor(firstName, lastName, address, city, state, zip, phone, email){
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
    this.city = city
    this.state = state
    this.zip = zip
    this.phone = phone
    this.email = email
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
let contact1;
let contact2;
try{  
  contact1 = new Contact("Shubham","Jangale","Jail Road","Nasik","Maharashtra","422101","9987646236","S0@gmail.com")
  contact2 = new Contact("Shubha","Jangale","Jail Road","Nasik","Maharashtra","22101","9987646236","S0@gmail.com")
  console.log("Contact Details are : " + contact1)
  console.log("Contact Details are : " + contact2)
}
catch(error){
  console.error(error)
}
let addressBookArray = new Array()
addressBookArray.push(contact1)
addressBookArray.push(contact2)
console.log("Contacts in address book are : " + addressBookArray)