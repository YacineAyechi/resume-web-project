const Contact = () => {
  return (
    <div
      id="contact"
      className="text-white  flex flex-col items-center justify-center p-20"
    >
      <h2 className="text-3xl font-bold mb-2 relative">Contact</h2>
      <div className="w-28 h-1 bg-[#E04300] mb-10 rounded-full"></div>

      <form className="">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="px-3 py-2 rounded-md w-96 focus:outline-none border-2 bg-transparent border-[#E04300]"
            placeholder="Email"
            required
          />
        </div>

        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="px-3 py-2 rounded-md w-96 focus:outline-none border-2 bg-transparent border-[#E04300]"
            placeholder="Subject"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="px-3 py-2 rounded-md w-96 focus:outline-none border-2 bg-transparent border-[#E04300] resize-none h-32"
            placeholder="Message"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-3 py-2 rounded-md w-96 focus:outline-none border-2 bg-transparent border-[#E04300] hover:bg-[#E04300] hover:text-white transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
