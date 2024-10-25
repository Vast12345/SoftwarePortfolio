import { motion } from 'framer-motion';
import filemakerIcon from '../content/FileMaker_icon_1200.png';

const TechCarousel = () => {
  const technologies = [
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Spring', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Filemaker', icon: filemakerIcon },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary-900 mb-12 text-center">Technologies</h2>
        <div className="relative">
          <motion.div 
            className="flex space-x-12"
            animate={{ 
              x: [0, -50 * technologies.length], 
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <span className="mt-2 text-primary-900 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;