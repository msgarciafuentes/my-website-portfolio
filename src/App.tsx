import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { capabilityLines, journey, personal, snapshots, type JourneyItem } from './data/portfolio'

const sections = ['home', 'about', 'journey', 'contact'] as const

function Navigation() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-40% 0px -50%' })
    sections.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Marvin Fuentes, back to top"><span>MF</span><span className="brand-name">MARVIN<br/>FUENTES</span></a>
    <nav aria-label="Primary navigation">
      {sections.slice(1).map((id) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}><span>0{sections.indexOf(id)}</span>{id}</a>)}
    </nav>
  </header>
}

function PortraitPlaceholder() {
  return <div className="portrait" role="img" aria-label="Replaceable portrait placeholder for Marvin Serge Fuentes">
    <div className="portrait-grid" />
    <div className="portrait-monogram">M<span>F</span></div>
    <div className="portrait-label"><span>PORTRAIT</span><span>DROP IMAGE HERE</span></div>
  </div>
}

function Home() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-kicker"><span className="status-dot" /> Available in Budapest, Hungary <span>·</span> 2026</div>
    <h1 id="hero-title"><span>MARVIN</span><span className="outline">SERGE</span><span>FUENTES</span></h1>
    <PortraitPlaceholder />
    <div className="role-stamp"><span>SOFTWARE</span><span>ENGINEER</span></div>
    <p className="hero-statement">{personal.statement}</p>
    <div className="hero-meta"><span>5+ YEARS / PRODUCTION SYSTEMS</span><span>PYTHON / DATA / BACKEND / CLOUD</span><span>FACTSET → STRAIVE</span></div>
    <a className="scroll-cue" href="#about"><ArrowDown size={18}/><span>Scroll to trace the system</span></a>
  </section>
}

function About() {
  return <section id="about" className="about" aria-labelledby="about-title">
    <div className="section-marker"><span>01</span><span>ABOUT / THE ENGINEER</span></div>
    <div className="about-intro">
      <h2 id="about-title">SOFTWARE<br/>IS THE <em>CENTER.</em></h2>
      <p>Software engineer with 5+ years of experience building production systems and data workflows across finance, healthcare, and regulated data environments.</p>
    </div>
    <div className="snapshot-grid">{snapshots.map((item) => <div className="snapshot" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    <div className="about-story">
      <p>From large-scale financial data systems at <strong>FactSet</strong> to automation, validation, and regulated data delivery at <strong>Straive</strong>, the through-line is practical engineering: systems that have to work, stay reliable, and evolve.</p>
      <p>Graduate study in Info-Bionics Engineering adds depth in advanced computational and intelligent systems—alongside, not instead of, professional engineering.</p>
    </div>
    <div className="capability-board" aria-label="Engineering capabilities">{capabilityLines.map(([verb, skills]) => <div key={verb}><strong>{verb}</strong><span>{skills}</span><ArrowUpRight aria-hidden="true"/></div>)}</div>
  </section>
}

function TimelineCard({ item, index }: { item: JourneyItem; index: number }) {
  return <article className={`timeline-card ${item.kind} ${item.emphasis ? 'featured' : ''}`}>
    <div className="timeline-node"><span>{index + 1}</span></div>
    <div className="card-top"><span>{item.kind}</span><span>{item.dates}</span></div>
    <div className="year-range"><b>{item.year}</b><i>→</i><b>{item.endYear}</b></div>
    <h3>{item.role}</h3><h4>{item.place}</h4><p>{item.summary}</p>
    <details><summary>Open chapter <span>+</span></summary><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></details>
    {item.tools && <div className="tool-line">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>}
  </article>
}

function Journey() {
  return <section id="journey" className="journey" aria-labelledby="journey-title">
    <div className="section-marker"><span>02</span><span>JOURNEY / TWO TRACKS, ONE SYSTEM</span></div>
    <div className="journey-heading"><h2 id="journey-title">WORK<br/><span>×</span> LEARNING</h2><p>The tracks overlap by design. Professional engineering stays central while teaching and advanced education widen the lens.</p></div>
    <div className="legend"><span><i className="work-key"/>WORK — PRIMARY TRACK</span><span><i className="education-key"/>EDUCATION — PARALLEL TRACK</span></div>
    <div className="timeline">{journey.map((item, index) => <TimelineCard key={`${item.year}-${item.role}`} item={item} index={index}/>)}</div>
  </section>
}

function Contact() {
  return <section id="contact" className="contact" aria-labelledby="contact-title">
    <div className="section-marker"><span>03</span><span>CONTACT / OPEN CHANNEL</span></div>
    <h2 id="contact-title">LET’S BUILD<br/><span>SOMETHING.</span></h2>
    <p>Have an interesting problem, product, or engineering challenge?</p>
    <a className="email-link" href={`mailto:${personal.email}`}><Mail aria-hidden="true"/><span>{personal.email}</span><ArrowUpRight aria-hidden="true"/></a>
    <div className="contact-bottom"><div><MapPin aria-hidden="true"/><span>{personal.location}</span></div><a href={personal.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true"/></a></div>
    <footer><span>MARVIN SERGE FUENTES © 2026</span><a href="#home">BACK TO SIGNAL ↑</a></footer>
  </section>
}

export default function App() { return <><a className="skip-link" href="#about">Skip to content</a><Navigation/><main><Home/><About/><Journey/><Contact/></main></> }
