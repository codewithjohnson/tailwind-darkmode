import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
      <p className="mb-4 text-lg text-center">
        We would love to hear from you! If you have any questions, feedback, or
        inquiries, please feel free to reach out to us using the contact
        information below or by filling out the form. We will get back to you as
        soon as possible.
      </p>
      <div className="max-w-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
