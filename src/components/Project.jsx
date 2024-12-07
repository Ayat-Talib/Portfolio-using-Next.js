// components/Projects.tsx
const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {[
          {
            title: "Gcuh Campus Explorer",
            description: "An innovative platform offering a 360-degree VR tour of the university campus, integrated with a chatbot for real-time assistance.",
            image: "/images/GCUH.jpeg",
            link: "https://gcuh.vercel.app/",
          },
          {
            title: "Next.js Todo List",
            description: "A simple and efficient to-do list application built with Next.js and styled using Tailwind CSS. This project showcases my ability to create a fast, interactive web application with state management.",
            image: "/images/todo_list.jpeg",
            link: "https://todo-list-iota-ebon-41.vercel.app/",
          },
          {
            title: "Marketing Landing Page",
            description: "A visually engaging marketing website designed to effectively communicate a product or service's value proposition. Built with modern web technologies.",
            image: "/images/landing_page.jpeg",
            link: "https://solar-one-nu.vercel.app/",
          },
          {
            title: "Personal Portfolio Website",
            description: "A static portfolio website showcasing my skills, projects, and experience. Built with HTML, CSS, and JavaScript, optimized for performance and responsiveness.",
            image: "/images/project1.jpeg",
            link: "https://marketing-website-swart.vercel.app/",
          },
          {
            title: "Hyderabad Explorer Chatbot",
            description: "An AI-powered chatbot designed to guide users through Hyderabad's landmarks, history, and hidden gems, helping users explore the city effortlessly.",
            image: "/images/chatbot.png",
            link: "https://hyderabad-explorer-chatbot.vercel.app/",
          },
          {
            title: "Animated personal portfolio website",
            description: "Designed and developed my personal portfolio website to showcase my skills, projects, and achievements. Built with WordPress, the site features a responsive design, user-friendly navigation, and dynamic animations. Highlights include advanced functionality such as contact forms, integrated blogs, and SEO optimization to enhance visibility.",
            image: "/images/Portfolio_1.jpeg",
            link: "https://portfolio-using-wordpress.vercel.app/",
          },
        ].map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-full h-64">
              {/* Image as Background with Hover Zoom */}
              <div
                className="w-full h-full absolute top-0 left-0 bg-cover bg-center transition-all duration-300 transform hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-60 transition-all duration-300"></div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-500 text-lg">{project.description}</p>
              <div className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Project →
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
