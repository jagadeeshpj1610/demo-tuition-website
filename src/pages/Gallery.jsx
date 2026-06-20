export default function Gallery() {
  const placeholders = [
    { emoji: '🏫', label: 'Our Classroom' },
    { emoji: '👨‍🏫', label: 'Hari Sir Teaching' },
    { emoji: '👨‍🎓', label: 'Students Learning' },
    { emoji: '🏆', label: 'Achievement Awards' },
    { emoji: '📚', label: 'Study Sessions' },
    { emoji: '🎉', label: 'Celebration Events' },
    { emoji: '💻', label: 'Digital Classes' },
    { emoji: '✍️', label: 'Writing Sessions' },
    { emoji: '🔬', label: 'Science Activities' },
    { emoji: '🧮', label: 'Math Classes' },
    { emoji: '🎯', label: 'Mock Tests' },
    { emoji: '🌟', label: 'Top Performers' },
  ]

  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div className="container">
          <span className="section-label">📸 Our Gallery</span>
          <h1 className="section-title">Life at<br /><span className="gradient-text">Jagadeesh Classes</span></h1>
          <p className="section-sub">A glimpse into our vibrant learning environment and student achievements.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {placeholders.map((item, i) => (
              <div key={i} className="glass" style={{
                aspectRatio: '4/3', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
                background: `rgba(${[67, 97, 238, 244, 196, 48, 100, 200, 150][i % 9]}, ${[97, 238, 67, 196, 48, 244, 200, 150, 100][i % 9]}, ${[238, 67, 97, 48, 244, 196, 150, 100, 200][i % 9]}, 0.06)`,
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.borderColor = 'rgba(67,97,238,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ fontSize: '52px', marginBottom: '12px' }}>{item.emoji}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px' }}>{item.label}</div>
                <div style={{
                  position: 'absolute', bottom: '12px', right: '12px',
                  background: 'rgba(244,196,48,0.15)', border: '1px solid rgba(244,196,48,0.2)',
                  color: 'var(--gold)', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
                }}>Photos Coming Soon</div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="glass" style={{
            marginTop: '48px', padding: '36px', textAlign: 'center',
            background: 'rgba(67,97,238,0.06)', borderColor: 'rgba(67,97,238,0.2)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', marginBottom: '12px' }}>
              Gallery Coming Soon!
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              We are updating our gallery with photos of classrooms, events, and achievements. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
