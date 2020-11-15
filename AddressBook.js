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
  toString() {
    return "\nFirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address 
                          + ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone = " 
                          + this.phone + ", Email = " + this.email
  }
}
let contact = new Contact("Shubham","Jangale","Jail Road","Nasik","Maharashtra","422101","9987646236","shu@gmail.com")
console.log("Contact Details are : " + contact)