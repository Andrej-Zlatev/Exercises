import { useState } from "react";
import Contact from "../Contact/Contact";

export interface contactData {
  id: number;
  name: string;
  email: string;
  phone: number;
}

const ContactList = () => {
  const [data, setData] = useState<contactData[]>([
    {
      id: 1,
      name: "blagica",
      email: "blagica@brainster.co",
      phone: 5641231234,
    },
    {
      id: 2,
      name: "kristijan",
      email: "kristijan@brainster.co",
      phone: 5654744,
    },
    { id: 3, name: "ognen", email: "ognen@brainster.co", phone: 123456789 },
  ]);

  return (
    <div>
      {data.map((contact) => {
        return <Contact key={contact.id} {...contact} />;
      })}
    </div>
  );
};

export default ContactList;
