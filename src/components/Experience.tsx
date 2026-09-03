import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from './utils/motion'

const experience = [
  {
    period: 'Jul 2026 - Present',
    role: 'Founding Data Scientist',
    company: 'Book Depot Inc. · Thorold, Ontario',
    detail: 'Developed a dynamic pricing engine across 60K+ SKUs using Causal DML, price elasticity, sales velocity, seasonality, and inventory signals. Built behavior clustering, inventory pacing, and demand forecasting models, while delivering 15x faster ML processing through parallelized computation.',
    current: true,
  },
  {
    period: 'Sep 2025 - Jul 2026',
    role: 'Data Scientist',
    company: 'Iteration Matrix · Remote',
    detail: 'Architected production ML systems for Supplier Mastering, ROI attribution, and audit recovery. Reduced reporting errors from 25% to under 5% and owned MLOps across CI/CD, containerized deployments, retraining, drift detection, and monitoring.',
  },
  {
    period: 'May 2025 - Aug 2025',
    role: 'Data Science Analyst',
    company: 'EQ Bank · Toronto, Ontario',
    detail: 'Built automated ETL pipelines and real-time Power BI dashboards for model performance, reducing manual reporting by 90%. Engineered a multithreaded Polars data quality system to profile and validate over 1TB of mission-critical SQL Server data.',
  },
  {
    period: 'Sep 2022 - Aug 2024',
    role: 'Instructional Specialist, Data Analytics & FinTech',
    company: 'University of Toronto · Remote',
    detail: 'Mentored 50+ students in data analytics, machine learning, and time series analysis. Developed Python, SQL, and TensorFlow learning materials and simplified complex AI, blockchain, and risk modeling concepts.',
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
            <h3 className='font-semibold text-[#f2f5f4]'>Master&apos;s, Business Analytics & AI</h3>
            <p className='mt-1 text-[#9aaead]'>University of Ontario Institute of Technology · 2025</p>
            <p className='mt-1 font-mono text-xs text-[#f0b35b]'>3.99 / 4.3</p>
          </div>
          <div>
            <h3 className='font-semibold text-[#f2f5f4]'>A.I. Solutions Development</h3>
            <p className='mt-1 text-[#9aaead]'>George Brown College · 2024</p>
          </div>
          <div>
            <h3 className='font-semibold text-[#f2f5f4]'>Additional education</h3>
            <p className='mt-1 leading-6 text-[#9aaead]'>University of Toronto Financial Technology certificate · 2022. Bachelor&apos;s in Health Sciences, University of Health Sciences, Pakistan · 2015.</p>
          </div>
          <div>
            <h3 className='font-semibold text-[#f2f5f4]'>Credentials & recognition</h3>
            <p className='mt-1 leading-6 text-[#9aaead]'>IBM Data Engineering, IBM Full Stack Software Developer, Microsoft Azure Data Scientist Associate, EDHEC Investment Management with Python and ML. Dean&apos;s Honor List, George Brown College.</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
)

export default Experience
