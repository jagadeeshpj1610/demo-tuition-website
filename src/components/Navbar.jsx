import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/courses', label: 'Courses' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        padding: scrolled ? '14px 0' : '22px 0',
        background: scrolled ? 'rgba(6,9,26,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          {/* <Link to="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px',
              background: 'linear-gradient(135deg, #ffffff, var(--blue-light))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Jagadeesh</span>
            <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--gold)', fontWeight: 600 }}>CLASSES</span>
          </Link> */}
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--blue), var(--gold))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'white',
            }}>H</div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'white',
                letterSpacing: '0.5px',
              }}>Jagadeesh</span>
              <span style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', fontWeight: 500 }}>CLASSES</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} style={{
                padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500,
                color: location.pathname === link.path ? 'var(--gold)' : 'var(--gray)',
                background: location.pathname === link.path ? 'rgba(244,196,48,0.1)' : 'transparent',
                border: location.pathname === link.path ? '1px solid rgba(244,196,48,0.2)' : '1px solid transparent',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => { if (location.pathname !== link.path) e.target.style.color = 'white' }}
                onMouseLeave={e => { if (location.pathname !== link.path) e.target.style.color = 'var(--gray)' }}
              >{link.label}</Link>
            ))}
            <a href="tel:+919876543210" className="btn-primary" style={{ padding: '10px 22px', fontSize: '13px', marginLeft: '8px' }}>
              📞 Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: 'white', cursor: 'pointer',
            display: 'none',
          }} className="hamburger">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998,
          background: 'rgba(6,9,26,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '8px',
        }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px',
              color: location.pathname === link.path ? 'var(--gold)' : 'white',
              padding: '12px 32px', transition: 'color 0.2s',
            }}>{link.label}</Link>
          ))}
          <a href="tel:+918143300100" className="btn-gold" style={{ marginTop: '24px' }}>
            📞 Call Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
