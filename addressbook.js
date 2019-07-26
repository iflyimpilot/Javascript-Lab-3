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

const addressBook = new AddressBook();
addressBook.print();
addressBook.add("Louie", "1234567", "@yahoo.com", "self");
addressBook.add("Chris", "4567890", "@gmail.com", "friend");
addressBook.print();
addressBook.delete("Louie");
addressBook.print();
