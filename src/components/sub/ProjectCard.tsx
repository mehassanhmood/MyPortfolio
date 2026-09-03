// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiChevronDown } from 'react-icons/fi';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Line, OrbitControls, Text } from '@react-three/drei';

const studyStages = [
  {
    id: 'signals',
    title: '01 · FRED Macro Signals',
    color: '#f0b35b',
    position: [-4.7, 1.35, 0] as [number, number, number],
    detail: 'Growth · inflation · liquidity · risk · labour',
  },
  {
    id: 'retrieval',
    title: '02 · Weaviate RAG',
    color: '#9fe8dc',
    position: [-2.35, -0.95, 0] as [number, number, number],
    detail: 'Research and historical market context',
  },
  {
    id: 'inference',
    title: '03 · Qwen 2.5 / Ollama',
    color: '#9fe8dc',
    position: [0, 1.25, 0] as [number, number, number],
    detail: 'Evidence-grounded macro classification',
  },
  {
    id: 'regimes',
    title: '04 · Macro Regimes',
    color: '#78b7ff',
    position: [2.35, -0.95, 0] as [number, number, number],
    detail: 'Confidence and historical analogues',
  },
  {
    id: 'action',
    title: '05 · Equity Position',
    color: '#f0b35b',
    position: [4.7, 1.35, 0] as [number, number, number],
    detail: 'Persistence logic → strategy mapping',
  },
]

const macroRegimes = ['Goldilocks', 'Overheat', 'Stagflation', 'Disinflation', 'Recovery', 'Slowdown', 'Crisis', 'Reflation']

const QuietRiver = ({ positions }) => (
  <>
    <Line points={positions} color='#164e63' transparent opacity={0.35} lineWidth={14} />
    <Line points={positions} color='#67e8f9' transparent opacity={0.85} lineWidth={2.2} />
    {positions.slice(0, -1).map((position, index) => (
      <FlowPulse key={`${studyStages[index].id}-pulse`} start={position} end={positions[index + 1]} delay={index * 0.18} color={studyStages[index].color} />
    ))}
  </>
)

const FlowPulse = ({ start, end, delay = 0, color = '#67e8f9' }) => {
  const pulse = useRef()
  const progress = useRef(delay)

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * 0.18) % 1
    pulse.current.position.set(
      start[0] + (end[0] - start[0]) * progress.current,
      start[1] + (end[1] - start[1]) * progress.current,
      start[2] + (end[2] - start[2]) * progress.current + 0.35,
    )
  })

  return <mesh ref={pulse}>
    <sphereGeometry args={[0.12, 20, 20]} />
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.6} />
  </mesh>
}

const StudyStage = ({ stage, index, position, onPositionChange }) => {
  const node = useRef()
  const drag = useRef(null)

  useFrame((state) => {
    node.current.position.set(position[0], position[1] + Math.sin(state.clock.elapsedTime * 0.7 + index) * 0.045, position[2])
  })

  useEffect(() => {
    const move = (event) => {
      if (!drag.current) return
      const scale = 0.012
      onPositionChange([
        drag.current.origin[0] + (event.clientX - drag.current.x) * scale,
        drag.current.origin[1] - (event.clientY - drag.current.y) * scale,
        0,
      ])
    }
    const stop = () => { drag.current = null }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', stop)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', stop)
    }
  }, [onPositionChange])

  return (
    <group ref={node} position={position}>
      <Html center position={[0, 0, 0.24]} transform distanceFactor={7} sprite zIndexRange={[20, 0]}>
        <div
          className='w-[190px] cursor-grab rounded-xl border border-cyan-200/30 bg-slate-900/95 px-3 py-3 text-left shadow-[0_10px_30px_rgba(2,6,23,0.45)] backdrop-blur-sm active:cursor-grabbing'
          onPointerDown={(event) => {
            event.stopPropagation()
            drag.current = { x: event.clientX, y: event.clientY, origin: position }
          }}
        >
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full' style={{ backgroundColor: stage.color, boxShadow: `0 0 10px ${stage.color}` }} />
            <div className='font-mono text-[10px] font-semibold uppercase tracking-wide text-slate-100'>{stage.title}</div>
          </div>
          <div className='mt-2 text-[10px] leading-4 text-slate-400'>{stage.detail}</div>
          <div className='mt-2 font-mono text-[8px] uppercase tracking-wider text-slate-500'>Drag node to reposition</div>
        </div>
      </Html>
    </group>
  )
}

const RegimeHalo = () => {
  const halo = useRef()

  useFrame((_, delta) => {
    halo.current.rotation.z += delta * 0.05
  })

  return (
    <group ref={halo} position={[2.35, -2.55, -0.1]}>
      {macroRegimes.map((regime, index) => {
        const angle = (index / macroRegimes.length) * Math.PI * 2
        const x = Math.cos(angle) * 1.9
        const y = Math.sin(angle) * 0.58
        return (
          <group key={regime} position={[x, y, 0]}>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color='#38bdf8' emissive='#38bdf8' emissiveIntensity={0.45} />
            </mesh>
            <Html center position={[0, 0.28, 0.12]} transform distanceFactor={8} sprite zIndexRange={[15, 0]}>
              <div className='pointer-events-none whitespace-nowrap rounded-full border border-sky-300/25 bg-slate-950/90 px-2 py-1 font-mono text-[9px] text-sky-100 shadow-lg'>
                {regime}
              </div>
            </Html>
          </group>
        )
      })}
      <mesh>
        <torusGeometry args={[1.9, 0.012, 8, 90]} />
        <meshBasicMaterial color='#38bdf8' transparent opacity={0.25} />
      </mesh>
      <Text position={[0, 0, 0.14]} fontSize={0.13} color='#e0f2fe' anchorX='center' anchorY='middle' outlineWidth={0.01} outlineColor='#0f172a'>
        eight macro regimes
      </Text>
    </group>
  )
}

const ArchitectureScene = () => {
  const [positions, setPositions] = useState(() => studyStages.map((stage) => stage.position))

  return <>
    <color attach='background' args={['#0f172a']} />
    <ambientLight intensity={1.45} />
    <pointLight position={[0, 3, 5]} intensity={18} color='#67e8f9' />
    <pointLight position={[4, -3, 4]} intensity={8} color='#38bdf8' />

    <QuietRiver positions={positions} />
    {studyStages.map((stage, index) => <StudyStage key={stage.id} stage={stage} index={index} position={positions[index]} onPositionChange={(nextPosition) => setPositions((current) => current.map((currentPosition, currentIndex) => currentIndex === index ? nextPosition : currentPosition))} />)}
    <Line points={[positions[3], [positions[3][0], positions[3][1] - 1.15, 0]]} color='#38bdf8' transparent opacity={0.35} lineWidth={2} />
    <RegimeHalo />

    <Text position={[0, 2.7, 0]} fontSize={0.15} color='#e2e8f0' anchorX='center' anchorY='middle' outlineWidth={0.012} outlineColor='#0f172a'>
      Five macro signals → retrieved evidence → structured regime → equity positioning
    </Text>
    <OrbitControls enablePan={false} minDistance={7} maxDistance={12} />
  </>
}

const ArchitecturalDemo = ({ onClose }) => (
  <div className='fixed inset-0 z-[100] flex items-center justify-center bg-[#020617dd] p-4 backdrop-blur-md' role='dialog' aria-modal='true' aria-labelledby='architecture-demo-title'>
    <div className='relative flex h-[min(760px,92vh)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-sky-400/25 bg-[#0f172a] shadow-2xl lg:flex-row'>
      <div className='pointer-events-none absolute left-5 top-5 z-10 max-w-[calc(100%-4rem)] rounded-xl border border-cyan-300/20 bg-[#0f172acc] p-4 backdrop-blur-sm lg:max-w-[48%]'>
        <p className='font-mono text-xs uppercase tracking-[0.16em] text-cyan-300'>System architecture</p>
        <h2 id='architecture-demo-title' className='mt-2 text-xl font-semibold text-slate-50'>Macro-driven equity positioning</h2>
        <p className='mt-1 text-xs text-slate-400'>An annotated view of the RAG and macro-regime pipeline</p>
      </div>
      <button type='button' onClick={onClose} aria-label='Close architectural demo' className='absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-900/80 text-xl text-slate-100 hover:border-cyan-300'>×</button>
      <div className='relative min-h-[360px] flex-1 lg:min-h-0'>
        <Canvas camera={{ position: [0, 0, 8], fov: 42 }}>
          <ArchitectureScene />
        </Canvas>
        <div className='absolute bottom-4 left-4 rounded-lg border border-cyan-300/20 bg-slate-950/80 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-slate-400'>
          Live flow · orbit to inspect
        </div>
      </div>
    </div>
  </div>
)

const ProjectCard = ({ src, title, description, source_code, deployed_app, isArchitecturalDemo = false, onArchitecturalDemoOpen, onArchitecturalDemoClose }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);


  const MAX_LENGTH = 145;
  const shouldTruncate = description.length > MAX_LENGTH;

const containerVariants = {
  initial: {opacity: 0 },
  animate: {opacity:1,
    transition: {duration:0.6}
  },
}


  return (
    <>
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit={"initial"}
      className='group relative m-2 flex h-full w-full max-w-[360px] flex-col overflow-hidden rounded-xl border border-[#9fe8dc24] bg-[#0c1c20cc] text-wrap shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9fe8dc66] hover:shadow-[0_24px_60px_rgba(0,0,0,0.32)]'
      >
      <a href={deployed_app} target='_blank' rel='noopener noreferrer' aria-label={`Open ${title} project`} className='relative block aspect-[16/10] overflow-hidden bg-[#071113]'>
        <motion.img 
        whileHover={{scale:1.04}}
        transition={{duration: 0.45, ease: 'easeOut'}}
        src={src} alt={title}
        width={400}
        height={400}
        className='h-full w-full object-cover opacity-85 transition duration-300 group-hover:opacity-100' 
        />
        <span className='absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#071113aa] text-white backdrop-blur-sm'>
          <FiArrowUpRight aria-hidden='true' />
        </span>
      </a>

      <div className='flex flex-1 flex-col p-5'>
          <p className='font-mono text-[10px] uppercase tracking-[0.16em] text-[#f0b35b]'>Featured build</p>
          <h2 className='mt-2 text-xl font-semibold leading-tight text-[#f2f5f4]'>{title}</h2>
          <p className='mt-3 text-sm leading-6 text-[#aabbb8]'>
            {shouldTruncate && !isExpanded
            ? `${description.slice(0, MAX_LENGTH).trim()}...`
            : description}
          </p>

          {/* Show the "Read More" button only if truncation is needed */}
          {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='mt-2 inline-flex items-center gap-1 self-start text-sm font-semibold text-[#9fe8dc] hover:text-[#c2fff4]'
            >
            {isExpanded ? 'Read less' : 'Read more'}
            <FiChevronDown className={isExpanded ? 'rotate-180' : ''} aria-hidden='true' />
          </button>
          )}
          <div className='mt-auto flex gap-4 border-t border-[#9fe8dc1f] pt-4'>
            {!isArchitecturalDemo && (
              <a href={source_code} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-sm font-semibold text-[#d6e5e3] transition-colors hover:text-[#9fe8dc]'>
                <FiGithub aria-hidden='true' /> Source
              </a>
            )}
            {isArchitecturalDemo ? (
              <button type='button' onClick={() => { onArchitecturalDemoOpen?.(); setIsDemoOpen(true) }} className='inline-flex items-center gap-2 text-sm font-semibold text-[#d6e5e3] transition-colors hover:text-[#9fe8dc]'>
                <FiArrowUpRight aria-hidden='true' /> Architectural demo
              </button>
            ) : (
              <a href={deployed_app} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-sm font-semibold text-[#d6e5e3] transition-colors hover:text-[#9fe8dc]'>
                <FiArrowUpRight aria-hidden='true' /> Live demo
              </a>
            )}
          </div>
        </div>
    </motion.div>
    {isDemoOpen && <ArchitecturalDemo onClose={() => { setIsDemoOpen(false); onArchitecturalDemoClose?.() }} />}
    </>
    
  )
}

export default ProjectCard
