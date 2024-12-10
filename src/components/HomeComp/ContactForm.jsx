import React from "react";
import backgroundImage from "../../assets/contact.png"

const ContactForm = () => {
  return (
    <div
      className="flex justify-center items-center bg-background bg-center bg-cover bg-red-600 p-4 md:p-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div>
            <p className=" font-bold text-[56px]  text-white hidden md:block">Send us a <br /> message</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto">
          <h1 className="text-[32px] font-semibold text-center mb-6">
            Contact Us
          </h1>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-normal text-light">
                Name
              </label>
              <input
                type="text"
                placeholder="Please enter your full name"
                className="mt-1 w-full py-2 border-b border-gray-300 rounded-lg placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#13A871] focus:px-2"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-normal text-light">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="mt-1 w-full py-2 border-b border-gray-300 rounded-lg placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#13A871] focus:px-2"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-normal text-light">
                Email
              </label>
              <input
                type="text"
                placeholder="Please provide a valid email address"
                className="mt-1 w-full py-2 border-b border-gray-300 rounded-lg placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#13A871] focus:px-2"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-normal text-light">
                Subject
              </label>
              <input
                type="text"
                placeholder="What would you like to talk about?"
                className="mt-1 w-full py-2 border-b border-gray-300 rounded-lg placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#13A871] focus:px-2"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-normal text-light">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="field mess h-[200px] md:h-[100px] mt-1 w-full py-2 border-b border-gray-300 rounded-lg placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-green-500 focus:px-2"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#13A871] text-white font-normal py-2 rounded-lg hover:bg-white hover:text-[#13A871] hover:border-2 border-[#13A871] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
