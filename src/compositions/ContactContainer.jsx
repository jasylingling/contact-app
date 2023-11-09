import React from 'react';
import ContactCard from '../components/ContactCard';

const APIENDPOINT = 'https://jsonplaceholder.typicode.com/users';

function ContactContainer({ filterString }) {
  const [contacts, setContacts] = React.useState([]);
  const [status, setStatus] = React.useState('');

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name
        .toLowerCase()
        .includes(filterString.toLowerCase()) ||
      contact.company.name
        .toLowerCase()
        .includes(filterString.toLowerCase()) ||
      contact.email.toLowerCase().includes(filterString.toLowerCase())
    );
  });

  React.useEffect(() => {
    async function fetchContacts() {
      setStatus('loading');

      const response = await fetch(APIENDPOINT);
      const data = await response.json();
      setStatus('success');
      setContacts(data);
      console.log(data);
    }

    fetchContacts();
  }, []);

  if (filteredContacts.length > 0) {
    return (
      <main className="flex flex-wrap justify-center my-8">
        {status === 'success' ? (
          filteredContacts.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </main>
    );
  } else {
    return (
      <main>
        <p className=" text-red-500 text-5xl font-bold mt-8">
          No meowsy found 😿
        </p>
      </main>
    );
  }
}

export default ContactContainer;
