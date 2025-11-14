import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header Section */}
      <div className="border-b border-slate-200 bg-white">
        <div className="px-6 py-8 lg:px-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-1" style={{ backgroundColor: "#D43E51" }} />
            <h1 className="text-4xl font-bold" style={{ color: "#07315D" }}>
              MTLDispatch
            </h1>
          </div>
          <p className="text-sm text-slate-500 ml-11">
            Professional Dispatch Management System
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#07315D" }}
            >
              Get in Touch
            </h2>
            <p className="text-slate-700 mb-12 leading-relaxed">
              Ready to streamline your chauffeur business operations? Contact
              our team to learn how MTLDispatch can transform your booking
              management, driver coordination, and customer service.
            </p>

            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212,62,81,0.1)" }}
                >
                  <Mail className="h-5 w-5" style={{ color: "#D43E51" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-slate-600">support@mtldispatch.com</p>
                  <p className="text-slate-600">sales@mtldispatch.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212,62,81,0.1)" }}
                >
                  <Phone className="h-5 w-5" style={{ color: "#D43E51" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600">+1 (514) 123-4567</p>
                  <p className="text-sm text-slate-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212,62,81,0.1)" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#D43E51" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-slate-600">Montreal, Quebec</p>
                  <p className="text-slate-600">Canada</p>
                </div>
              </div>
            </div>

            {/* Features Highlight */}
            <div className="mt-12 p-6 border border-slate-200 rounded-lg bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">
                Why MTLDispatch?
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#D43E51" }}
                  />
                  Widget integration for seamless bookings
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#D43E51" }}
                  />
                  Real-time driver and zone management
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#D43E51" }}
                  />
                  Comprehensive customer tracking
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#D43E51" }}
                  />
                  Advanced analytics and reporting
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D43E51]/70 focus:border-[#D43E51]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D43E51]/70 focus:border-[#D43E51]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D43E51]/70 focus:border-[#D43E51]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D43E51]/70 focus:border-[#D43E51]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D43E51]/70 focus:border-[#D43E51]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dispatch management needs..."
                  rows={6}
                  required
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#D43E51]/70 focus:border-[#D43E51]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors"
                style={{ backgroundColor: "#D43E51" }}
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                We typically respond within 24 hours during business days
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
