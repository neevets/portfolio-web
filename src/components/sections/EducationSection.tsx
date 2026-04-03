import { memo } from 'react';
import { coursesData } from '@/data/education';
import { Course } from '@/types/portfolio';
import { motion } from 'framer-motion';

const CourseCard = memo<{ course: Course; index: number }>(({ course, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative bg-card/80 backdrop-blur-sm border border-border/60 rounded-xl p-6 hover:shadow-lg hover:border-border transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">{course.institution}</span>
            <span>•</span>
            <span>{course.date}</span>
          </div>
        </div>
        <a href={course.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/8 text-foreground border border-border hover:bg-foreground/15 transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>View Certificate</span>
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {course.skills.map((skill) => (
          <span key={skill} className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary/60 text-secondary-foreground border border-border/30">{skill}</span>
        ))}
      </div>
    </div>
  </motion.div>
));

CourseCard.displayName = 'CourseCard';

const EducationSection = memo(() => (
  <section id="courses" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden" style={{ scrollMarginTop: '5rem' }}>
    <div className="max-w-7xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-6 text-foreground leading-tight">Certificates</h2>
        <p className="text-muted-foreground font-dev text-base sm:text-lg max-w-2xl mx-auto">Continuous evolution through structured learning and hands-on experience</p>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {coursesData.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
));

EducationSection.displayName = 'EducationSection';

export default EducationSection;
