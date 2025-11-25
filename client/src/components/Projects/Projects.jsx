import { motion } from 'framer-motion';
import { projects } from '../../data/placeholderData';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[var(--color-surface)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                Shipped Work
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">Case Studies & Launches</h2>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-2xl">
              Production projects that are already live and battle-tested.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

