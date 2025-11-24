import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageHero from "../common/PageHero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        highlights={["Reach Us Anytime", "Get in Touch", "We’re Here to Help"]}
      />
      {/* Contact Cards */}
      <div className="grid  grid-cols-1 md:grid-cols-3 p-5 lg:px-28 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-1">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm mb-1">
                support@mtldispatch.com
              </p>
              <p className="text-slate-600 text-sm">sales@mtldispatch.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-1">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 text-sm mb-1">+1 (514) 123-4567</p>
              <p className="text-slate-500 text-xs">Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 text-sm mb-1">Montreal, Quebec</p>
              <p className="text-slate-600 text-sm">Canada</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Cards & Form Section */}
      <div className="mx-auto max-w-6xl px-6  py-12">
        <div className="grid lg:grid-cols-2  gap-12 items-start">
          {/* Left Side - Form */}
          <div className="order-2 bg-gray-100 py-3 px-4 rounded-lg lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name ..."
                  required
                  className="px-4 py-3 bg-slate-50 border-0 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone ..."
                  className="px-4 py-3 bg-slate-50 border-0 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address ..."
                  required
                  className="px-4 py-3 bg-slate-50 border-0 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject ..."
                  className="px-4 py-3 bg-slate-50 border-0 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message ..."
                rows={8}
                required
                className="w-full px-4 py-3 bg-slate-50 border-0 rounded-lg text-sm placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Cards & Map */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179308.28155646105!2d-73.86826155!3d45.5588621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
