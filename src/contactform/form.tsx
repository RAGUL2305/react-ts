import React, { ChangeEvent, useState } from "react";

interface Form {
  name: string;
  email: string;
  phone: string;
}

const initialData: Form = {
  name: "",
  email: "",
  phone: "",
}

function ContactForm() {
  const [formData, setFormData] = useState<Form>(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your Phone number"
          maxLength={10}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
