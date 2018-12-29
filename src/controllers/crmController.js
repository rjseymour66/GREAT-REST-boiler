import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if(err) {
      res.send(err);
    } else {
      res.json(contact)
    }
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if(err) {
      res.send(err)
    } else {
      res.json(contact);
    }
  });
};

export const getContactWithId = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  });
};

export const updateContact = (req, res) => {
  const id = { _id: req.params.contactId}
  const updatedInfo = req.body
  Contact.findOneAndUpdate(id, updatedInfo, { new: true }, (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  });
};

export const deleteContact = (req, res) => {
  const id = { _id: req.params.contactId}
  Contact.remove(id, (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.send({ message: `Contact was successfully deleted.`})
    }
  });
};

// PUT controller WITHOUT variables
// export const updateContact = (req, res) => {
//   Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.json(contact)
//     }
//   });
// };