import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import filemakerIcon from '../content/FileMaker_icon_1200.png';

const TechCarousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  const technologies = [
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Spring', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Filemaker', icon: filemakerIcon},
  ];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technologies</h2>
        
        <div className="relative overflow-hidden">
          <motion.div 
            ref={carousel}
            className="flex cursor-grab active:cursor-grabbing"
            initial={{ x: 0 }}
            animate={{ 
              x: [-width, 0],
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={`first-${tech.name}-${index}`}
                className="flex flex-col items-center mx-6 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-16 h-16"
                  />
                </div>
                <span className="mt-3 text-gray-800 font-medium">{tech.name}</span>
              </motion.div>
            ))}
            
            {technologies.map((tech, index) => (
              <motion.div
                key={`second-${tech.name}-${index}`}
                className="flex flex-col items-center mx-6 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-16 h-16"
                  />
                </div>
                <span className="mt-3 text-gray-800 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;