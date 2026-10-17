const focusAreas = [
  { number: '01', title: 'Designing for real life', text: 'Technology that feels intuitive, useful, and deeply connected to the communities it serves.' },
  { number: '02', title: 'Growing local talent', text: 'Creating pathways for young Ugandans to build, lead, and shape the next digital era.' },
  { number: '03', title: 'Imagining what is next', text: 'A platform for bold ideas where culture, creativity, and code meet possibility.' },
]

const programme = [
  { time: '09:00', title: 'Arrival & Open Studio', text: 'Meet the people rethinking how technology can feel.' },
  { time: '11:30', title: 'The Human Interface', text: 'A conversation on design, access, and the systems around us.' },
  { time: '14:00', title: 'Build the Unbuilt', text: 'Live demos from Uganda’s next generation of makers.' },
  { time: '17:30', title: 'Future / Forward', text: 'An evening of stories, music, and shared imagination.' },
]

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="AERION Foundation home"><span>A</span>ERION<span className="dot">.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#why">Why Aerion</a>
          <a href="#programme">Programme</a>
          <a href="#about">About us</a>
        </nav>
        <a className="header-cta" href="#connect">Connect <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="live-word" aria-label="AERION">
            {'AERION'.split('').map((letter, index) => <span key={`${letter}-${index}`} style={{ '--letter-index': index } as React.CSSProperties}>{letter}</span>)}
          </div>
          <p className="eyebrow">AERION FOUNDATION / UGANDA</p>
          <h1>Technology,<br /><em>reimagined.</em></h1>
          <p className="hero-intro">We are building a future where digital experiences are more human, more inclusive, and made for the world we actually live in.</p>
          <a className="primary-cta" href="#why">Explore the vision <Arrow /></a>
        </div>
        <div className="hero-art" aria-label="Abstract illustration representing connected ideas" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="sun" aria-hidden="true" />
          <span className="star star-one">✦</span><span className="star star-two">✳</span><span className="star star-three">+</span>
          <p className="art-label">THE FUTURE<br />IS A SHARED<br /><b>PROJECT</b></p>
        </div>
        <div className="scroll-note"><span>↓</span> Scroll to explore</div>
      </section>

      <section className="statement" id="why">
        <p className="eyebrow">01 / THE AERION POINT OF VIEW</p>
        <div className="statement-grid"><h2>The future is not a destination. It&apos;s something <em>we design.</em></h2><p>Across Uganda and beyond, technology is changing how we learn, work, connect, and dream. Aerion exists to make sure that change is shaped by the people it is meant to serve.</p></div>
      </section>

      <section className="focus-section">
        <div className="section-heading"><p className="eyebrow">02 / WHAT WE&apos;RE EXPLORING</p><h2>Big questions.<br /><em>Practical optimism.</em></h2></div>
        <div className="focus-list">{focusAreas.map((area) => <article className="focus-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><a href="#connect" aria-label={`Learn more about ${area.title}`}><Arrow /></a></article>)}</div>
      </section>

      <section className="programme" id="programme">
        <div className="programme-head"><div><p className="eyebrow">03 / A DAY OF POSSIBILITY</p><h2>Come curious.<br /><em>Leave changed.</em></h2></div><p className="programme-note">AERION / 2026<br />KAMPALA, UGANDA</p></div>
        <div className="programme-list">{programme.map((item) => <div className="programme-row" key={item.time}><span className="time">{item.time}</span><h3>{item.title}</h3><p>{item.text}</p><Arrow /></div>)}</div>
      </section>

      <section className="connect" id="connect"><p className="eyebrow">04 / JOIN THE MOVEMENT</p><h2>There&apos;s room<br />for your <em>idea.</em></h2><a className="primary-cta light" href="mailto:hello@aerion.ug">Start a conversation <Arrow /></a><div className="connect-meta"><span>Kampala / Uganda</span><span>hello@aerion.ug</span><span>© 2026 AERION FOUNDATION</span></div></section>

      <footer><a className="wordmark" href="#top"><span>A</span>ERION<span className="dot">.</span></a><p>Designed for a more human future.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
