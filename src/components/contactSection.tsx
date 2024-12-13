"use client";
import React, { useState } from "react";
import { Phone, Mail, Send, User, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl lg:mx-auto mx-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-3 text-primary">
            Contact Naseem Musafah
          </h1>
          <p className="text-xl text-[#797979]">
            Get in Touch for Automotive Service & Support
          </p>
        </div>

        <div className="">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-[4px] border-solid border-secondary">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#797979]">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-[20px] h-[20px] " />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-[#797979]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-[20px] h-[20px] " />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-[#797979]">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-[20px] h-[20px] " />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#797979]">
                  Your Message
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-primary w-[20px] h-[20px] " />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center bg-primary text-white hover:bg-secondary"
              >
                <Send className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
