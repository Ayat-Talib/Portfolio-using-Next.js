// components/Contact.tsx
const Contact = () => (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center animate-zoom-in">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-800 focus:ring focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800 focus:ring focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded bg-gray-800 focus:ring focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  