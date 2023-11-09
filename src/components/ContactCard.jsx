function ContactCard({ contact }) {
  return (
    <div className="contact-container shadow-2xl rounded w-96 flex flex-col flex-wrap shrink-0 items-center m-8 py-6">
      <h2 className="text-2xl font-bold">{contact.name}</h2>
      <img
        className="w-32 mt-4"
        src={`https://robohash.org/${contact.username}.png?set=set4`}
        alt="kitty avatar"
      />
      <dl>
        <dt className="font-bold mt-4">🏯 Company</dt>
        <dd>{contact.company.name}</dd>
        <dt className="font-bold mt-4">💌 Email</dt>
        <dd>
          <a
            href={`mailto:${contact.email}`}
            className="underline text-purple-600 hover:text-purple-800 visited:text-purple-600"
          >
            {contact.email}
          </a>
        </dd>
      </dl>
    </div>
  );
}

export default ContactCard;
