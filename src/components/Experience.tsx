import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from './utils/motion'

const experience = [
  {
    period: 'Jul 2026 - Present',
    role: 'Founding Data Scientist',
    company: 'Book Depot Inc. · Thorold, Ontario',
    detail: 'Architecting AI and quantitative systems, including Prism DTC, a smart price optimization system using causal inference and demand models.',
    current: true,
  },
  {
    period: 'Sep 2025 - Jul 2026',
    role: 'Data Scientist',
    company: 'Iteration Matrix · Remote',
    detail: 'Built predictive systems, strengthened data pipelines, and analyzed large-scale datasets for supplier mastering, ROI analysis, and audit recovery.',
  },
  {
    period: 'May 2025 - Aug 2025',
    role: 'Data Science Analyst',
    company: 'EQ Bank · Toronto, Ontario',
    detail: 'Built model performance monitoring and a multithreaded Python data quality system profiling over 1TB of SQL Server data. Reduced reporting time by more than 90%.',
  },
  {
    period: 'Sep 2022 - Aug 2024',
    role: 'Instructional Specialist, Data Analytics & FinTech',
    company: 'University of Toronto · Remote',
    detail: 'Mentored engineers and analysts in Python, SQL, machine learning, REST APIs, and financial risk modeling through applied labs and feedback.',
  },
]

const Experience = () => (
  <section id='experience' className='mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12'>
    <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={slideInFromTop}>
      <p className='section-kicker'>Experience / 02</p>
      <h2 className='section-title mt-3 max-w-3xl font-semibold'>From data foundations to intelligent products.</h2>
    </motion.div>

    <div className='mt-12 grid gap-5 lg:grid-cols-[1fr_0.42fr]'>
      <div className='space-y-3'>
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft(index * 0.08)}
            className='grid gap-3 border-t border-[#9fe8dc22] py-5 sm:grid-cols-[145px_1fr]'
          >
            <p className='font-mono text-xs text-[#f0b35b]'>{item.period}</p>
            <div>
              <div className='flex flex-wrap items-center gap-2'>
                <h3 className='text-lg font-semibold text-[#f2f5f4]'>{item.role}</h3>
                {item.current && <span className='rounded-full border border-[#9fe8dc55] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9fe8dc]'>Current</span>}
              </div>
              <p className='mt-1 text-sm text-[#9fe8dc]'>{item.company}</p>
              <p className='mt-3 max-w-2xl text-sm leading-6 text-[#9aaead]'>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <aside className='h-fit border border-[#9fe8dc24] bg-[#102326aa] p-6'>
        <p className='section-kicker'>Education & credentials</p>
        <div className='mt-5 space-y-5 text-sm'>
          <div>
            <h3 className='font-semibold text-[#f2f5f4]'>MSc, Business Analytics & AI</h3>
            <p className='mt-1 text-[#9aaead]'>Ontario Tech University · 2024 - 2025</p>
            <p className='mt-1 font-mono text-xs text-[#f0b35b]'>3.99 / 4.3</p>
          </div>
          <div>
            <h3 className='font-semibold text-[#f2f5f4]'>Applied AI Solutions Development</h3>
            <p className='mt-1 text-[#9aaead]'>George Brown Polytechnic · 2023 - 2024</p>
          </div>
          <div>
            <h3 className='font-semibold text-[#f2f5f4]'>Selected certifications</h3>
            <p className='mt-1 leading-6 text-[#9aaead]'>IBM Data Engineering, Google Advanced Data Analytics, Transformer Models & BERT, and Financial Market Analysis.</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
)

export default Experience
