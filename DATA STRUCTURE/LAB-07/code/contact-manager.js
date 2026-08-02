// LAB-08 STARTER CODE: Contact Manager
// Week 2 - Thursday: Data Structures Application

/*
 * YOUR TASK:
 * Build a CLI Contact Manager application
 * 
 * REQUIREMENTS:
 * 1. Add new contacts (name, email, phone)
 * 2. View all contacts
 * 3. Search contacts by name
 * 4. Update existing contacts
 * 5. Delete contacts
 * 
 * BONUS:
 * - Save to JSON file
 * - Load from JSON file
 * - Validate email format
 * - Prevent duplicate emails
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Global data
let contacts = [];
let nextId = 1;

/**
 * Display main menu
 */
function showMenu() {
  console.log("\n=== CONTACT MANAGER ===");
  console.log("1. Add Contact");
  console.log("2. View All Contacts");
  console.log("3. Search by Name");
  console.log("4. Update Contact");
  console.log("5. Delete Contact");
  console.log("6. Exit");
  
  readline.question("\nChoose option (1-6): ", handleMenuChoice);
}

/**
 * Handle menu choice
 */
function handleMenuChoice(choice) {
  switch(choice) {
    case '1':
      addContact();
      break;
    case '2':
      viewContacts();
      break;
    case '3':
      searchContacts();
      break;
    case '4':
      updateContact();
      break;
    case '5':
      deleteContact();
      break;
    case '6':
      console.log("Goodbye!");
      readline.close();
      break;
    default:
      console.log("Invalid choice!");
      showMenu();
  }
}

/**
 * Add a new contact
 * TODO: Implement this function
 */
function addContact(name, email, phone) {
  // Get name, email, phone from user
  readline.question("Enter name: ", (name) => {
    readline.question("Enter email: ", (email) => {
      readline.question("Enter phone: ", (phone) => {
        // Create contact object with id
        const contact = { id: nextId++, name, email, phone };
        // Add to contacts array
        contacts.push(contact);
        console.log("Contact added!");
        showMenu();
      });
    });
  });
}

/**
 * View all contacts
 * TODO: Implement this function
 */
function viewContacts() {
  // Check if contacts array is empty
  if (contacts.length === 0) {
    console.log("No contacts to display.");
  } else {
    console.log("\n=== ALL CONTACTS ===");
    contacts.forEach(contact => {
      console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
    });
  }
  showMenu();
}

/**
 * Search contacts by name
 * TODO: Implement this function
 */
function searchContacts() {
  // Get search query from user
  readline.question("Enter name to search: ", (query) => {
    // Filter contacts (case-insensitive)
    const results = contacts.filter(contact => 
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    // Display results
    if (results.length === 0) {
      console.log("No contacts found.");
    } else {
      console.log("\n=== SEARCH RESULTS ===");
      results.forEach(contact => {
        console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
      });
    }
    showMenu();
  });
}

/**
 * Update a contact
 * TODO: Implement this function
 */
function updateContact() {
  // Get contact ID
  readline.question("Enter contact ID to update: ", (id) => {
    // Find contact
    const contactIndex = contacts.findIndex(contact => contact.id === parseInt(id));
    if (contactIndex === -1) {
      console.log("Contact not found.");
      showMenu();
      return;
    }
    // Get new values
    readline.question("Enter new name (or press Enter to keep current): ", (name) => {
      readline.question("Enter new email (or press Enter to keep current): ", (email) => {
        readline.question("Enter new phone (or press Enter to keep current): ", (phone) => {
          // Update contact
          if (name) contacts[contactIndex].name = name;
          if (email) contacts[contactIndex].email = email;
          if (phone) contacts[contactIndex].phone = phone;
          console.log("Contact updated!");
          showMenu();
        });
      });
    });
  });
}

/**
 * Delete a contact
 * TODO: Implement this function
 */
function deleteContact() {
  // Get contact ID
  readline.question("Enter contact ID to delete: ", (id) => {
    // Find and remove contact
    const contactIndex = contacts.findIndex(contact => contact.id === parseInt(id));
    if (contactIndex === -1) {
      console.log("Contact not found.");
    } else {
      contacts.splice(contactIndex, 1);
      console.log("Contact deleted!");
    }
    showMenu();
  });
}

// Start the app
showMenu();
