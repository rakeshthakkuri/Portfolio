import { motion } from 'framer-motion';
import { currentProjects } from '../../data/placeholderData';

export default function CurrentProjects() {
  return (
    <section id="current-projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] font-normal mb-2">
                Active Builds
              </p>
              <h2 className="text-3xl md:text-4xl font-normal">Currently Working Projects</h2>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-2xl">
              These are the initiatives I’m actively shipping right now—high-touch collaborations that
              blend LLM research, production engineering, and product thinking.
            </p>
          </div>

          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-[var(--color-border)] pb-8 mb-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-normal rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                        {project.status}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">{project.timeline}</span>
                    </div>
                    <h3 className="text-2xl font-normal mb-2">{project.title}</h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-[var(--color-text-muted)]">
                      Focus Areas
                    </h4>
                    <ul className="space-y-2">
                      {project.focusAreas.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-[var(--color-text-muted)]">
                          <span className="text-[var(--color-text)] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-[var(--color-text-muted)]">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

