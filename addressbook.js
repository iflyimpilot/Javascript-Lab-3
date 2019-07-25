class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }

    for (const contact of this.contacts) {
      console.log();
    }
  }
}

//Contact class
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const AddressBook = new AddressBook();
AddressBook.print();
AddressBook.add("Name1", "123", "@yahoo.com", "self");
AddressBook.add("joe", "456", "@gmail.com", "friend");
AddressBook.print();
AddressBook.delete("Louie");
AddressBook.print();

// //Methods
//     // addName()
//     // addEmail()
//     // addPhone()
//     // addRelation()
//     // deleteName

// }
