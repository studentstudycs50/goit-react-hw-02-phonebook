import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";


const ContactList = ({ contacts, filter, deleteContactById }) => {
  return (
    <>
      <ul>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              deleteContactById={deleteContactById}
            />
          ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContactById: PropTypes.func,
};



// import React from "react";
// import PropTypes from "prop-types";

// function ContactList({ contacts, deleteContact }) {
//   return (
//     <>
//       {contacts.map(({ id, name, number }) => (
//         <li  key={id}>
//           <p>
//             {name}: {number}
//           </p>
//           <button
            
//             type="button"
//             onClick={() => deleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;