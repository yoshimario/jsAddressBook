  
// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// addressBook.updateContact(1, 0, 0, 555-666-1212)
// addressBook.updateContact(1, Ada, Lovelace, 555-666-1212)
// addressBook.updateCOntact(1, property, info)

AddressBook.prototype.updateContact = function(id, first, last, number) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        if (first != "") {
          this.contacts[i].firstName = first;
        }
        if (last != "") {
          this.contacts[i].lastName = last;
        }
        if (number != "") {
          this.contacts[i].phoneNumber = number;
        }
      }
    }
  }
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}