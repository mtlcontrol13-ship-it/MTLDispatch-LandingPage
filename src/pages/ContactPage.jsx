import { useState } from "react";
import { ICONS } from "../assets/icons";
import PageHero from "../components/common/PageHero";

const ContactPage = () => {
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
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        highlights={["Reach Us Anytime", "Get in Touch", "We’re Here to Help"]}
      />

      {/* Main Content Card */}
      <section className="pt-2 pb-10 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Column: Contact Info */}
            <div className="bg-slate-50/50 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-slate-900">
                Get in touch
              </h2>
              <p className="mt-4 text-slate-600">
                Have questions about our dispatch software? Our team is here to
                help you streamline your operations.
              </p>

              <div className="mt-8 space-y-6">
                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <ICONS.MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Head Office
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Montreal, Quebec
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <ICONS.Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      support@mtldispatch.com
                      <br />
                      sales@mtldispatch.com
                    </p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <ICONS.Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      +1 (514) 123-4567
                      <br />
                      Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold text-slate-900">
                  Follow our social media
                </h3>
                <div className="mt-4 flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
                    <ICONS.Facebook className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
                    <ICONS.Twitter className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
                    <ICONS.Instagram className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
                    <ICONS.Youtube className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-8 lg:p-12 bg-white">
              <h2 className="text-2xl font-bold text-slate-900">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 outline-none border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Company
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 outline-none border"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 outline-none border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 outline-none border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 outline-none border"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={4}
                    className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm resize-none focus:border-blue-500 focus:ring-blue-500 outline-none border"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-blue-600 py-2 px-8 text-md font-bold text-white transition-colors hover:bg-blue-700 cursor-pointer"
                >
                  <ICONS.Send className="h-4 w-4 mr-2 inline-block" />
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179308.28155646105!2d-73.86826155!3d45.5588621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default ContactPage;
