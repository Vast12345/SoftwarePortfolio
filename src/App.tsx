import React from 'react';
import emailjs from '@emailjs/browser';
import vetImage from './content/Screenshot 2024-10-24 081412.png';
import motorellaImage from './content/Screenshot 2024-10-24 081801.png';
import tiendaImage from './content/Screenshot 2024-10-24 083354.png';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import TechCarousel from './compontents/TechCarousel';

function WaveTransition({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full ${flip ? 'transform rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
        />
      </svg>
    </div>
  );
}

function Project({ title, description, image, link }: { title: string; description: string; image: string; link: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-700 hover:text-primary-500"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ueb30h7',
        'template_ph2dl1k',
        e.currentTarget,
        '9cZniboFOubF3Miv8'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred, please try again.");
        }
      );

    e.currentTarget.reset();
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white min-h-screen flex items-center relative">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Lorenzo Lopez
            </h1>
            <p className="text-xl md:text-2xl text-primary-300 mb-8">
              Passionate towards achieving my dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="border border-primary-500 text-primary-300 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg transition-colors">
                View Projects
              </a>
              <a href="Lorenzo_Lopez_Mendez.pdf" download="Lorenzo_Lopez_CV.pdf" className="border border-primary-500 text-primary-300 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg transition-colors">
                CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary-900 mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p className="mb-6">
              I'm a junior programmer based in the United States, actively seeking new opportunities to grow and contribute to innovative projects. With a strong foundation in back-end technologies, I'm passionate about creating efficient, user-friendly solutions that help us move forward towards a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-primary-900 text-white relative">
        <WaveTransition flip />
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary-700/30 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-primary-300">
              I will use my skills and experience to establish my own company, creating a sustainable business that allows me to live a life of comfort, while enjoying the things I am most passionate about.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary-700/30 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-primary-300">
                To build comprehensive experience through challenging projects, establish meaningful connections in the tech community, and continuously expand my skill set while delivering value to clients and employers.
              </p>
            </motion.div>
          </div>
        </div>
        <WaveTransition />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary-900 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Project
              title="Vet Store"
              description="A full-stack Vet Shop which utlizes Javascript, Bulma CSS, and Firebase."
              image={vetImage}
              link="https://vast12345.github.io/Veteninario/"
            />
            <Project
              title="Mock Motorella Website"
              description="Creating my own mock Motorella webpage as a tribute using Javascript."
              image={motorellaImage}
              link="https://vast12345.github.io/Motorella/"
            />
            <Project
              title="Product Store"
              description="Small project which utilizses React, MySQL, and Springboot to create a small store."
              image={tiendaImage}
              link="https://vast12345.github.io/react-tienda/"
            />
          </div>
        </div>
      </section>
      {/* Technology Carousel */}
      <TechCarousel />
      {/* Contact Section */}
      <section id="contact" className="bg-primary-900 text-white relative">
        <WaveTransition flip />
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name='user_name'
                  className="w-full px-4 py-3 rounded-lg bg-primary-700/30 border border-primary-500 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name='user_email'
                  className="w-full px-4 py-3 rounded-lg bg-primary-700/30 border border-primary-500 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-primary-700/30 border border-primary-500 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"

              >
                Send Message
              </button>
            </form>
            <div className="flex justify-center space-x-6 mt-12">
              <a href="https://github.com/Vast12345" target='_blank' className="text-primary-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/lorenzo-lopez-764b2a2a0/" target='_blank' className="text-primary-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:vastprogramming@email.com" className="text-primary-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;