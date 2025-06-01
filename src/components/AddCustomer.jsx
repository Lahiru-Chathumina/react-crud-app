import { Label, TextInput, Button, Card } from 'flowbite-react';
import { useState } from 'react';

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });

      const data = await res.json();

      alert(data.message || 'Customer added!');
      setCustomer({ name: '', email: '', phone: '' });

   
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name" value="Customer Name" />
            <TextInput
              id="name"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              name="email"
              type="email"
              value={customer.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Add Customer</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddCustomer;
