import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default async function sendCustomEmail(email, subject, body) {
  const collectionRef = collection(db, "mail");
  const emailContent = {
    to: "clubvegge@gmail.com",
    message: {
      subject: subject,
      text: body.replace(/<[^>]+>/g, ""),
      html: `<p>${body}</p>`,
    },
  };
  return await addDoc(collectionRef, emailContent);
}
