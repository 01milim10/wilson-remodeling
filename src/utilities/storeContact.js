import { db } from "../utilities/firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function addContact(data) {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const contactId = data.name + "-" + month + "-" + day + "-" + year;
  setDoc(doc(db, "Contacts", contactId), data).then(() => {
    alert("Message has been sent. Our team will reach out to you.");
  });
  return true;
}
