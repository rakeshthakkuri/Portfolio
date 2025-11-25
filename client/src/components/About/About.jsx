import { motion } from 'framer-motion';
import { personalInfo, education, aboutHighlights } from '../../data/placeholderData';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-normal">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-[var(--color-text-muted)] mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div>
                <h3 className="text-xl font-normal mb-4">What I'm focused on</h3>
                <ul className="space-y-3">
                  {aboutHighlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[var(--color-text-muted)] leading-relaxed"
                    >
                      <span className="text-[var(--color-text)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">Location</h3>
                <p className="text-[var(--color-text)]">{personalInfo.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">Email</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[var(--color-text)] hover:opacity-70 underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">Phone</h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-[var(--color-text)] hover:opacity-70 underline"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">Available For</h3>
                <p className="text-[var(--color-text)]">Full-time opportunities, Internships, Freelance projects</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">Coding Problems Solved</h3>
                <p className="text-[var(--color-text)]">~1000 problems across LeetCode, GeeksforGeeks, and competitive programming platforms</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-normal mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="card"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-normal mb-1">{edu.institution}</h4>
                      <p className="text-[var(--color-text-muted)] mb-1">{edu.degree}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">{edu.details}</p>
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

