import { motion } from 'framer-motion';
import { skills } from '../../data/placeholderData';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] font-normal mb-2">
                Stack & Strengths
              </p>
              <h2 className="text-3xl md:text-4xl font-normal">Skills & tooling I ship with</h2>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-2xl">
              Everything listed here has been used in real projects, not tutorials. Some tools are
              core daily drivers, others are supporting utilities I bring in as needed.
            </p>
          </div>

          <div className="space-y-1">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="flex items-center justify-between py-3 border-b border-[var(--color-border)]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[var(--color-text)] font-normal">{skill.name}</span>
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">{skill.category}</span>
                </div>
                {skill.level && (
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {skill.level}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

