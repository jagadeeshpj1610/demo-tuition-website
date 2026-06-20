const results = [
  { name: "Ravi Kumar", achievement: "AIR 234", exam: "Navodaya Entrance", year: "2024" },
  { name: "Priya Reddy", achievement: "98.6%", exam: "SSC Board Exams", year: "2024" },
  { name: "Arjun Rao", achievement: "Selected", exam: "Sainik School", year: "2024" },
  { name: "Divya Sri", achievement: "AIR 189", exam: "Navodaya Entrance", year: "2023" },
  { name: "Kiran Babu", achievement: "99.2%", exam: "SSC Board Exams", year: "2023" },
  { name: "Sneha Patel", achievement: "Selected", exam: "Sainik School", year: "2023" },
  { name: "Rohit Varma", achievement: "AIR 312", exam: "Navodaya Entrance", year: "2024" },
  { name: "Lakshmi Devi", achievement: "97.8%", exam: "SSC Board Exams", year: "2024" },
  { name: "Suresh Nair", achievement: "Selected", exam: "Sainik School", year: "2023" },
  { name: "Anjali Krishna", achievement: "AIR 156", exam: "Navodaya Entrance", year: "2024" },
]

export default function Results() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0a1628 0%, #0d1b2a 100%)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', padding: '0 24px' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)',
          color: '#93c5fd', padding: '6px 16px', borderRadius: '50px',
          fontSize: '13px', fontWeight: 600, letterSpacing: '1px',
          textTransform: 'uppercase', marginBottom: '16px',
        }}>🏆 Our Results</span>

        <h2 style={{
          fontFamily: 'serif', fontWeight: 800,
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'white', marginBottom: '12px',
        }}>
          Our Students'{' '}
          <span style={{
            background: 'linear-gradient(135deg, #2563eb, #60a5fa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Achievements</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '17px' }}>
          Proud of every student who made it to the top 🎉
        </p>
      </div>

      {/* Scrolling Track */}
      <div style={{ position: 'relative' }}>
        {/* Fade left */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to right, #0a1628, transparent)',
          zIndex: 2,
        }} />
        {/* Fade right */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to left, #0a1628, transparent)',
          zIndex: 2,
        }} />

        {/* Scrolling row */}
        <div style={{
          display: 'flex', gap: '20px',
          animation: 'scroll 25s linear infinite',
          width: 'max-content',
        }}>
          {/* Duplicate for seamless loop */}
          {[...results, ...results].map((r, i) => (
            <div key={i} style={{
              minWidth: '240px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(37,99,235,0.25)',
              borderRadius: '16px',
              padding: '24px 20px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
              onMouseEnter={e => e.currentTarget.parentElement.style.animationPlayState = 'paused'}
              onMouseLeave={e => e.currentTarget.parentElement.style.animationPlayState = 'running'}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                width: '100px', height: '100px',
                background: 'radial-gradient(circle, rgba(37,99,235,0.3), transparent)',
                borderRadius: '50%',
              }} />

              <div style={{ fontSize: '36px', marginBottom: '10px' }}>🏅</div>

              <div style={{
                fontFamily: 'serif', fontWeight: 800, fontSize: '22px',
                background: 'linear-gradient(135deg, #f4c430, #ff9f43)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '4px',
              }}>{r.achievement}</div>

              <div style={{ fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '6px' }}>
                {r.name}
              </div>

              <div style={{
                background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)',
                color: '#93c5fd', padding: '3px 12px', borderRadius: '20px',
                fontSize: '12px', fontWeight: 600, display: 'inline-block', marginBottom: '6px',
              }}>{r.exam}</div>

              <div style={{ color: '#64748b', fontSize: '12px' }}>Batch {r.year}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}