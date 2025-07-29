import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "152dee5d-327b-44e6-88c3-b226ab3a7066"); // Replace with your Web3Forms key
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Your message has been sent!");
        setForm({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setResult(" Something went wrong. Try again.");
      console.error("Error:", error);
    } finally {
      setTimeout(() => setResult(""), 3000); // Clear message after 3 seconds
    }
  };





  return (
    <section className="bg-gray-100 min-h-screen py-0 px-4 md:px-10  " id="contact">
      <h2 className=" text-center uppercase    text-5xl text-gray-900 font-extrabold mb-6">
        Contact Us
      </h2>
<p  className=' text-gray-500 font-bold mb-5  text-sm text-center'>Get in Touch</p>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#0f0f3e] flex items-center gap-2">
            Send us a message <span className=''>📨</span>
          </h3>
          <p className="text-black tracking-widest first-letter:float-left first-letter:mr-1 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest   ">
            Hi, I'm Tejas Deshmukh  a passionate Frontend Web Developer who loves turning ideas into beautiful, responsive, and user-friendly websites.With strong skills in React, Tailwind CSS, and modern UI/UX principles, I help bring digital experiences to life. Whether it's a portfolio, business site, or a custom project  I’m excited to collaborate and build something impactful. <br/>
            <mark className='font-light text-sm'>Let’s connect and build something amazing together...👇</mark>

          </p>

          <div className="space-y-4 font-normal text-black">
            <ContactInfo icon={<Mail className="text-indigo-600" />} text="tejadeshmukh03@gmail.com" />
            <ContactInfo icon={<Phone className="text-indigo-600" />} text="+91 988107346" />
            <ContactInfo icon={<MapPin className="text-indigo-600 mt-1" />} text="Ahmadnagar,Maharastra-414102 India" />
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="   p-6   space-y-6">
          <InputField label="Your name" name="name" value={form.name} onChange={handleChange} required />
          <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
          <InputField label="Your Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <TextAreaField label="Write your messages here" name="message" value={form.message} onChange={handleChange} required />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#212EA0] text-white px-6 py-3 rounded-lg hover:bg-[#000f38] transition flex items-center justify-center gap-2"
          >
            Submit now →
          </button>

          {/* Result Message */}
          {result && (
            <div className="mt-4 text-green-800 py-2 px-4 rounded text-center text-sm">
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }) => (
  <p className="flex items-center gap-3">
    {icon} {text}
  </p>
);

const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-[#000000] mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      required={required}
      className="w-full bg-[#d7d7d7] px-4 py-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none "
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-[#000000]  mb-1">{label}</label>
    <textarea
      name={name}
      rows="5"
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      required={required}
      className="w-full bg-[#d7d7d7] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
    />


   

  </div>
);

export default ContactSection;
