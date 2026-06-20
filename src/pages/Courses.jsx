import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const courses = [
  {
    grade: 'VI - VIII',
    title: 'Foundation Program',
    icon: '📚',
    color: '#4361ee',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
    highlights: ['Concept building', 'Activity-based learning', 'Communication skills', 'Regular assessments'],
    desc: 'Strong foundation for middle school students with focus on conceptual clarity and academic confidence.',
  },
  {
    grade: 'IX - X',
    title: 'Board Exam Excellence',
    icon: '🎯',
    color: '#f4c430',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
    highlights: ['Board exam preparation', 'Previous year papers', 'Mock tests', 'Personal mentoring'],
    desc: 'Comprehensive preparation for SSC/CBSE board exams with focused coaching and exam strategies.',
  },
  {
    grade: 'IIT JEE',
    title: 'IIT JEE Foundation',
    icon: '🚀',
    color: '#ff6b6b',
    subjects: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Problem Solving'],
    highlights: ['Early foundation', 'JEE pattern problems', 'Logical thinking', 'Competitive mindset'],
    desc: 'Early preparation program for students targeting IIT JEE — building the right foundation from the start.',
  },
  {
    grade: 'NEET / EAMCET',
    title: 'Medical & Engineering Entrance',
    icon: '🏥',
    color: '#00d2a0',
    subjects: ['Biology', 'Physics', 'Chemistry', 'Mathematics'],
    highlights: ['Entrance exam pattern', 'Topic-wise practice', 'Full length mocks', 'Doubt clearing sessions'],
    desc: 'Specialized coaching for NEET and EAMCET aspirants with focused practice and expert guidance.',
  },
]

const specialPrograms = [
  { icon: '💻', title: 'Digital Classes', desc: 'Modern digital teaching tools for better visualization and understanding of complex concepts.' },
  { icon: '✍️', title: 'Cursive Writing & Language', desc: 'Dedicated sessions for improving handwriting, language skills, and communication.' },
  { icon: '🧩', title: 'Activity Based Learning', desc: 'Hands-on activities and experiments that make learning fun and memorable.' },
  { icon: '💬', title: 'Communication Skills', desc: 'Building confident communicators alongside academic excellence.' },
]

export default function Courses() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'radial-gradient(ellipse at 70% 30%, rgba(67,97,238,0.12) 0%, transparent 60%), var(--navy)' }}>
        <div className="container">
          <span className="section-label">📚 Our Programs</span>
          <h1 className="section-title" style={{ maxWidth: '650px' }}>
            Courses Designed for<br /><span className="gradient-text">Every Ambition</span>
          </h1>
          <p className="section-sub">
            From foundation building to competitive exam prep — we cover every stage of a student's academic journey.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {courses.map((course, i) => (
              <div key={i} className="glass" style={{
                padding: '36px', transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = course.color + '44' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: course.color }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ fontSize: '40px' }}>{course.icon}</span>
                  <span style={{
                    background: course.color + '22', border: `1px solid ${course.color}44`,
                    color: course.color, padding: '4px 14px', borderRadius: '20px',
                    fontSize: '13px', fontWeight: 700,
                  }}>{course.grade}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', marginBottom: '12px' }}>{course.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>{course.desc}</p>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--gray)', marginBottom: '10px', textTransform: 'uppercase' }}>Subjects</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {course.subjects.map(s => (
                      <span key={s} style={{
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                        padding: '4px 12px', borderRadius: '20px', fontSize: '12px', color: 'var(--gray-light)',
                      }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--gray)', marginBottom: '10px', textTransform: 'uppercase' }}>Highlights</div>
                  {course.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: course.color, flexShrink: 0 }} />
                      <span style={{ color: 'var(--gray)', fontSize: '14px' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <span className="section-label">✨ Special Programs</span>
            <h2 className="section-title">Beyond Academics</h2>
            <p className="section-sub">We go beyond textbooks to build well-rounded, confident students.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {specialPrograms.map((p, i) => (
              <div key={i} className="glass" style={{ padding: '32px', textAlign: 'center', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(67,97,238,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <div style={{ fontSize: '44px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '10px', fontSize: '18px' }}>{p.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <span className="section-label">🕒 Schedule</span>
            <h2 className="section-title">Class <span className="gold-text">Timings</span></h2>
          </div>
          <div className="glass" style={{ overflow: 'hidden', maxWidth: '700px' }}>
            <div style={{ background: 'var(--blue)', padding: '20px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              {['Program', 'Days', 'Time'].map(h => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</span>
              ))}
            </div>
            {[
              ['Foundation (VI-VIII)', 'Mon - Sat', '3:30 PM - 5:30 PM'],
              ['Board Prep (IX-X)', 'Mon - Sat', '5:30 PM - 7:30 PM'],
              ['IIT JEE Foundation', 'Mon - Sat', '6:00 PM - 8:00 PM'],
              ['NEET / EAMCET', 'Mon - Sun', 'Flexible Batches'],
              ['Special Programs', 'Weekends', '9:00 AM - 12:00 PM'],
            ].map((row, i) => (
              <div key={i} style={{
                padding: '18px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              }}>
                {row.map((cell, j) => (
                  <span key={j} style={{ color: j === 0 ? 'white' : 'var(--gray)', fontSize: '14px', fontWeight: j === 0 ? 500 : 400 }}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--gray)', fontSize: '14px', marginTop: '16px' }}>* Timings subject to change. Contact us for latest schedule.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--blue) 0%, #2d4fd6 100%)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}>
            Find the Right Course for You
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '36px', fontSize: '17px' }}>
            Call us to discuss which program suits your goals!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-gold">Enroll Now <ArrowRight size={18} /></Link>
            <a href="tel:+919876543210" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>📞 9876543210</a>
          </div>
        </div>
      </section>
    </main>
  )
}
