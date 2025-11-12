import React from 'react';
import { motion, useScroll } from 'framer-motion';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    { name: 'ReactJS', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'AI & ML Engineering', level: 80 },
    { name: 'Prompt Engineering', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'SQL', level: 75 },
    { name: 'UI/UX Design', level: 82 },
    { name: 'Figma & Canva', level: 80 },
  ];

  const projects = [
    {
      title: 'MoodFixer Website',
      description: 'A mood-based motivation and fun platform that helps users improve their emotional well-being through personalized content.',
      tech: ['ReactJS', 'TailwindCSS', 'API Integration'],
    },
    {
      title: 'SkillVerse Website',
      description: 'A skill-sharing and learning collaboration platform connecting learners and experts for mutual growth.',
      tech: ['ReactJS', 'Node.js', 'MongoDB'],
    },
    {
      title: 'AI Resume Builder',
      description: 'An intelligent resume creation tool that uses AI prompts to generate professional, ATS-friendly resumes.',
      tech: ['Python', 'AI/ML', 'NLP'],
    },
    {
      title: 'Image Classifier',
      description: 'A machine learning project built with Python and TensorFlow for accurate image classification and recognition.',
      tech: ['Python', 'TensorFlow', 'ML'],
    },
    {
      title: 'Portfolio Website',
      description: 'This modern, animated portfolio showcasing personal journey, skills, and achievements with futuristic design.',
      tech: ['ReactJS', 'TailwindCSS', 'Framer Motion'],
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-softWhite overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electricBlue to-violetGlow z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-electricBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
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
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text glow">Medarametla Sriyamini Reddy</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-semibold mb-8">
              Turning Ideas Into Impact
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-electricBlue to-violetGlow rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-inter text-xl md:text-2xl text-gray-300 mb-12"
          >
            Innovator • Developer • Leader
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-electricBlue to-violetGlow rounded-full font-poppins font-semibold text-lg hover:shadow-2xl hover:shadow-electricBlue/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-electricBlue rounded-full font-poppins font-semibold text-lg hover:bg-electricBlue/10 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-electricBlue rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-electricBlue rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-navy to-slate-900">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                I'm a passionate developer and creative thinker who loves blending art and technology. 
                Currently pursuing my B.Tech (3rd Year, 2025) with a stellar CGPA of 9.5, I'm on a mission 
                to create meaningful impact through innovation.
              </p>
              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                As the Founder & CEO of <span className="text-electricBlue font-semibold">WE – Work and Earn</span>, 
                a community-based micro-task platform, I'm building solutions that empower people. When I'm not 
                coding, you'll find me reading books, writing in my diary, listening to music, or singing.
              </p>
              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                I believe creativity is the foundation of innovation, and I'm committed to becoming a successful 
                entrepreneur and independent woman whose journey inspires others to follow their dreams with 
                courage and consistency.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300"
            >
              <h3 className="font-poppins text-2xl font-bold mb-6 gradient-text">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-electricBlue mr-3 text-xl">🎓</span>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-gray-400">B.Tech 3rd Year • CGPA: 9.5</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-violetGlow mr-3 text-xl">💼</span>
                  <div>
                    <p className="font-semibold">Role</p>
                    <p className="text-gray-400">Promotions Lead at GDG on Campus SVCE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-electricBlue mr-3 text-xl">🚀</span>
                  <div>
                    <p className="font-semibold">Founder & CEO</p>
                    <p className="text-gray-400">WE – Work and Earn Platform</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-violetGlow mr-3 text-xl">🎨</span>
                  <div>
                    <p className="font-semibold">Interests</p>
                    <p className="text-gray-400">Reading, Writing, Music, Singing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300"
              >
                <div className="flex justify-between mb-3">
                  <span className="font-poppins font-semibold text-lg">{skill.name}</span>
                  <span className="text-electricBlue font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electricBlue to-violetGlow rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-navy">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300 hover:shadow-xl hover:shadow-electricBlue/20"
              >
                <h3 className="font-poppins text-xl font-bold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-electricBlue/20 text-electricBlue rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 bg-navy">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Leadership & <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-electricBlue/10 to-violetGlow/10 backdrop-blur-sm rounded-2xl p-8 border border-electricBlue/30 hover:border-electricBlue/60 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-poppins text-2xl font-bold mb-3 gradient-text">
                Founder & CEO
              </h3>
              <h4 className="font-poppins text-xl font-semibold mb-3 text-electricBlue">
                WE – Work and Earn
              </h4>
              <p className="font-inter text-gray-300 leading-relaxed mb-3">
                Building a revolutionary community-based micro-task platform that empowers individuals 
                to earn while contributing to meaningful projects. Currently in development phase (2025).
              </p>
              <p className="font-inter text-sm text-gray-400 italic">
                Leading product development, team management, and strategic planning.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-violetGlow/10 to-electricBlue/10 backdrop-blur-sm rounded-2xl p-8 border border-violetGlow/30 hover:border-violetGlow/60 transition-all duration-300"
            >
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-poppins text-2xl font-bold mb-3 gradient-text">
                Promotions Lead
              </h3>
              <h4 className="font-poppins text-xl font-semibold mb-3 text-violetGlow">
                GDG on Campus SVCE
              </h4>
              <p className="font-inter text-gray-300 leading-relaxed mb-3">
                Leading promotional strategies and community engagement initiatives for Google Developer 
                Group on Campus. Organizing tech events, workshops, and fostering developer community growth.
              </p>
              <p className="font-inter text-sm text-gray-400 italic">
                Driving community engagement, event marketing, and brand awareness.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-navy to-slate-900">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Achievements & <span className="gradient-text">Milestones</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300"
            >
              <div className="text-5xl font-poppins font-bold gradient-text mb-3">9.5</div>
              <p className="font-poppins text-xl font-semibold mb-2">CGPA</p>
              <p className="font-inter text-gray-400">Academic Excellence</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-violetGlow/20 hover:border-violetGlow/50 transition-all duration-300"
            >
              <div className="text-5xl font-poppins font-bold gradient-text mb-3">5+</div>
              <p className="font-poppins text-xl font-semibold mb-2">Projects</p>
              <p className="font-inter text-gray-400">Completed & Deployed</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300"
            >
              <div className="text-5xl font-poppins font-bold gradient-text mb-3">2</div>
              <p className="font-poppins text-xl font-semibold mb-2">Leadership Roles</p>
              <p className="font-inter text-gray-400">Founder & Promotions Lead</p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-electricBlue/10 to-violetGlow/10 backdrop-blur-sm rounded-2xl p-8 border border-electricBlue/30 text-center"
          >
            <h3 className="font-poppins text-2xl font-bold mb-4 gradient-text">My Goal</h3>
            <p className="font-inter text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My dream is to become a successful entrepreneur and independent woman whose journey 
              inspires others to follow their dreams with courage and consistency. I'm committed to 
              creating innovative solutions that make a real difference in people's lives.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-electricBlue/20"
          >
            <p className="font-inter text-lg text-center text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:sriyamini659@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-electricBlue/10 rounded-xl border border-electricBlue/30 hover:border-electricBlue/60 transition-all duration-300"
              >
                <span className="text-3xl mr-4">📧</span>
                <div>
                  <p className="font-poppins font-semibold">Email</p>
                  <p className="text-gray-400 text-sm">sriyamini659@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919390705673"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-violetGlow/10 rounded-xl border border-violetGlow/30 hover:border-violetGlow/60 transition-all duration-300"
              >
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <p className="font-poppins font-semibold">Phone</p>
                  <p className="text-gray-400 text-sm">+91 9390705673</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sriyamini-reddy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-electricBlue/10 rounded-xl border border-electricBlue/30 hover:border-electricBlue/60 transition-all duration-300"
              >
                <span className="text-3xl mr-4">💼</span>
                <div>
                  <p className="font-poppins font-semibold">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Sriyamini Reddy</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/sriyamini985"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-violetGlow/10 rounded-xl border border-violetGlow/30 hover:border-violetGlow/60 transition-all duration-300"
              >
                <span className="text-3xl mr-4">💻</span>
                <div>
                  <p className="font-poppins font-semibold">GitHub</p>
                  <p className="text-gray-400 text-sm">sriyamini985</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-navy border-t border-electricBlue/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-inter text-gray-400">
            © 2025 Medarametla Sriyamini Reddy. Crafted with passion and creativity.
          </p>
          <p className="font-inter text-sm text-gray-500 mt-2">
            Turning Ideas Into Impact • Innovator • Developer • Leader
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
