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
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                Stack & Strengths
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">Skills & tooling I ship with</h2>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-2xl">
              Everything listed here has been used in real projects, not tutorials. Some tools are
              core daily drivers, others are supporting utilities I bring in as needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="border border-[var(--color-border)] rounded-2xl p-5 bg-[var(--color-surface)]/70 backdrop-blur-sm hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary/80">{skill.category}</span>
                  {skill.level && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                      {skill.level}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{skill.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Hands-on experience applying this within shipped products.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

