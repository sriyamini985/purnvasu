import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeProject, setActiveProject] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Smooth scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Mouse tracking for cursor effect
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    
    // Show nav on scroll
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hover: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      mixBlendMode: "difference"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const skills = [
    { name: 'ReactJS', level: 90, icon: '⚛️' },
    { name: 'TailwindCSS', level: 85, icon: '🎨' },
    { name: 'AI & ML Engineering', level: 80, icon: '🤖' },
    { name: 'Prompt Engineering', level: 85, icon: '💡' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'SQL', level: 75, icon: '🗄️' },
    { name: 'UI/UX Design', level: 82, icon: '✨' },
    { name: 'Figma & Canva', level: 80, icon: '🎭' },
  ];

  const projects = [
    {
      title: 'MoodFixer Website',
      description: 'A mood-based motivation and fun platform that helps users improve their emotional well-being through personalized content.',
      tech: ['ReactJS', 'TailwindCSS', 'API Integration'],
      image: '/images/project1.jpg',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'SkillVerse Website',
      description: 'A skill-sharing and learning collaboration platform connecting learners and experts for mutual growth.',
      tech: ['ReactJS', 'Node.js', 'MongoDB'],
      image: '/images/project2.jpg',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'AI Resume Builder',
      description: 'An intelligent resume creation tool that uses AI prompts to generate professional, ATS-friendly resumes.',
      tech: ['Python', 'AI/ML', 'NLP'],
      image: '/images/project3.jpg',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Image Classifier',
      description: 'A machine learning project built with Python and TensorFlow for accurate image classification and recognition.',
      tech: ['Python', 'TensorFlow', 'ML'],
      image: '/images/project4.jpg',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Portfolio Website',
      description: 'This modern, animated portfolio showcasing personal journey, skills, and achievements with futuristic design.',
      tech: ['ReactJS', 'TailwindCSS', 'Framer Motion'],
      image: '/images/project5.jpg',
      gradient: 'from-cyan-500 to-blue-500'
    },
  ];

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-navy text-softWhite overflow-x-hidden relative">
      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Floating Navigation */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 bg-slate-900/80 backdrop-blur-xl rounded-full border border-electricBlue/30 shadow-2xl"
          >
            <div className="flex gap-8 items-center">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-poppins font-semibold hover:text-electricBlue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electricBlue via-violetGlow to-electricBlue z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electricBlue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-electricBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-violetGlow rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          style={{ y: y1, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h1 
              className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span className="gradient-text glow inline-block">
                {'Medarametla Sriyamini Reddy'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block hover:scale-125 transition-transform"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative inline-block mb-8"
          >
            <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 typing-text">
              Turning Ideas Into Impact
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-electricBlue to-violetGlow rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-inter text-xl md:text-2xl text-gray-300 mb-12"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Innovator
            </motion.span>
            {' • '}
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            >
              Developer
            </motion.span>
            {' • '}
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
            >
              Leader
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="magnetic-button px-8 py-4 bg-gradient-to-r from-electricBlue to-violetGlow rounded-full font-poppins font-semibold text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violetGlow to-electricBlue"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 border-2 border-electricBlue rounded-full font-poppins font-semibold text-lg backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity }}
        >
          <div className="w-6 h-10 border-2 border-electricBlue rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1.5 h-3 bg-electricBlue rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-navy to-slate-900 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-6xl font-bold text-center mb-16"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariants} 
              className="space-y-6"
            >
              {[
                "I'm a passionate developer and creative thinker who loves blending art and technology. Currently pursuing my B.Tech (3rd Year, 2025) with a stellar CGPA of 9.5, I'm on a mission to create meaningful impact through innovation.",
                "As the Founder & CEO of WE – Work and Earn, a community-based micro-task platform, I'm building solutions that empower people. When I'm not coding, you'll find me reading books, writing in my diary, listening to music, or singing.",
                "I believe creativity is the foundation of innovation, and I'm committed to becoming a successful entrepreneur and independent woman whose journey inspires others to follow their dreams with courage and consistency."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="font-inter text-lg text-gray-300 leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 border border-electricBlue/30 hover:border-electricBlue/60 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-electricBlue/10 to-violetGlow/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <h3 className="font-poppins text-3xl font-bold mb-6 gradient-text">Quick Facts</h3>
                <div className="space-y-6">
                  {[
                    { icon: '🎓', title: 'Education', desc: 'B.Tech 3rd Year • CGPA: 9.5' },
                    { icon: '💼', title: 'Role', desc: 'Promotions Lead at GDG on Campus SVCE' },
                    { icon: '🚀', title: 'Founder & CEO', desc: 'WE – Work and Earn Platform' },
                    { icon: '🎨', title: 'Interests', desc: 'Reading, Writing, Music, Singing' },
                  ].map((fact, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start group/item"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.span 
                        className="text-3xl mr-4"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {fact.icon}
                      </motion.span>
                      <div>
                        <p className="font-semibold text-lg group-hover/item:text-electricBlue transition-colors">{fact.title}</p>
                        <p className="text-gray-400">{fact.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 border border-electricBlue/20 hover:border-electricBlue/60 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-electricBlue/0 via-electricBlue/10 to-electricBlue/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="text-3xl"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="font-poppins font-semibold text-lg">{skill.name}</span>
                    </div>
                    <motion.span 
                      className="text-electricBlue font-bold text-xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full bg-gradient-to-r from-electricBlue via-violetGlow to-cyan-500 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-navy relative">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -15 }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <motion.div
                  className="glass-card rounded-2xl overflow-hidden border border-electricBlue/20 hover:border-electricBlue/60 transition-all duration-500 h-full cursor-pointer"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                    scale: 1.02
                  }}
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <span className="text-6xl">🚀</span>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="font-poppins text-xl font-bold mb-3 gradient-text"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="font-inter text-gray-300 mb-4 leading-relaxed text-sm"
                      initial={{ height: 60 }}
                      animate={{ height: activeProject === index ? 'auto' : 60 }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-electricBlue/20 text-electricBlue rounded-full text-xs font-semibold backdrop-blur-sm border border-electricBlue/30"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.3)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 border-2 border-electricBlue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 0 4px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 bg-navy relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Leadership & <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: '🚀',
                title: 'Founder & CEO',
                company: 'WE – Work and Earn',
                desc: 'Building a revolutionary community-based micro-task platform that empowers individuals to earn while contributing to meaningful projects. Currently in development phase (2025).',
                role: 'Leading product development, team management, and strategic planning.',
                gradient: 'from-electricBlue/10 to-violetGlow/10',
                color: 'electricBlue'
              },
              {
                emoji: '📢',
                title: 'Promotions Lead',
                company: 'GDG on Campus SVCE',
                desc: 'Leading promotional strategies and community engagement initiatives for Google Developer Group on Campus. Organizing tech events, workshops, and fostering developer community growth.',
                role: 'Driving community engagement, event marketing, and brand awareness.',
                gradient: 'from-violetGlow/10 to-electricBlue/10',
                color: 'violetGlow'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`glass-card bg-gradient-to-br ${item.gradient} rounded-3xl p-8 border border-${item.color}/30 hover:border-${item.color}/60 transition-all duration-500 relative overflow-hidden group`}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electricBlue/20 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="font-poppins text-2xl font-bold mb-3 gradient-text">
                  {item.title}
                </h3>
                <h4 className={`font-poppins text-xl font-semibold mb-4 text-${item.color}`}>
                  {item.company}
                </h4>
                <p className="font-inter text-gray-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <p className="font-inter text-sm text-gray-400 italic">
                  {item.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-navy to-slate-900 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Achievements & <span className="gradient-text">Milestones</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: '9.5', label: 'CGPA', desc: 'Academic Excellence', color: 'electricBlue' },
              { value: '5+', label: 'Projects', desc: 'Completed & Deployed', color: 'violetGlow' },
              { value: '2', label: 'Leadership Roles', desc: 'Founder & Promotions Lead', color: 'electricBlue' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`text-center glass-card rounded-3xl p-8 border border-${stat.color}/20 hover:border-${stat.color}/60 transition-all duration-500 relative overflow-hidden group`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-electricBlue/10 to-violetGlow/10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
                <motion.div 
                  className="text-6xl md:text-7xl font-poppins font-bold gradient-text mb-3 relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2 
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="font-poppins text-xl font-semibold mb-2 relative z-10">{stat.label}</p>
                <p className="font-inter text-gray-400 relative z-10">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="glass-card bg-gradient-to-r from-electricBlue/10 to-violetGlow/10 rounded-3xl p-10 border border-electricBlue/30 text-center relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electricBlue/0 via-electricBlue/20 to-electricBlue/0"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <h3 className="font-poppins text-3xl font-bold mb-6 gradient-text relative z-10">My Goal</h3>
            <p className="font-inter text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto relative z-10">
              My dream is to become a successful entrepreneur and independent woman whose journey 
              inspires others to follow their dreams with courage and consistency. I'm committed to 
              creating innovative solutions that make a real difference in people's lives.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-10 border border-electricBlue/20 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-electricBlue/5 to-violetGlow/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <p className="font-inter text-lg text-center text-gray-300 mb-10 relative z-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {[
                { icon: '📧', title: 'Email', value: 'sriyamini659@gmail.com', href: 'mailto:sriyamini659@gmail.com', color: 'electricBlue' },
                { icon: '📞', title: 'Phone', value: '+91 9390705673', href: 'tel:+919390705673', color: 'violetGlow' },
                { icon: '💼', title: 'LinkedIn', value: 'Sriyamini Reddy', href: 'https://www.linkedin.com/in/sriyamini-reddy', color: 'electricBlue' },
                { icon: '💻', title: 'GitHub', value: 'sriyamini985', href: 'https://github.com/sriyamini985', color: 'violetGlow' }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center p-6 bg-${contact.color}/10 rounded-2xl border border-${contact.color}/30 hover:border-${contact.color}/60 transition-all duration-500 group relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.05,
                    x: 10,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-electricBlue/0 via-electricBlue/10 to-electricBlue/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.span 
                    className="text-4xl mr-4 relative z-10"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {contact.icon}
                  </motion.span>
                  <div className="relative z-10">
                    <p className="font-poppins font-semibold text-lg group-hover:text-electricBlue transition-colors">{contact.title}</p>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-navy border-t border-electricBlue/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.p 
            className="font-inter text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Medarametla Sriyamini Reddy. Crafted with passion and creativity.
          </motion.p>
          <motion.p 
            className="font-inter text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Turning Ideas Into Impact • Innovator • Developer • Leader
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;
