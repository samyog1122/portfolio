import { useMemo, useState, useEffect } from 'react';

const artistName = 'Samyog';
const contactEmail = 'samyog9991@gmail.com';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Workshops', id: 'workshops' },
  { label: 'About', id: 'about' },
];

const specialties = [
  {
    icon: '🎨',
    title: 'Mural Art',
    description: 'Bold wall murals for cafés, studios and public spaces with a strong visual story.',
  },
  {
    icon: '🖼️',
    title: 'Portraits',
    description: 'Expressive portraits that capture personality, mood and gesture.',
  },
  {
    icon: '✍️',
    title: 'Illustration',
    description: 'Colorful mixed-media work that blends symbols, music and local culture.',
  },
  {
    icon: '🧘',
    title: 'Spiritual Themes',
    description: 'Contemporary spiritual paintings with vibrant iconography and atmosphere.',
  },
];

const portfolioItems = [
  {
    title: 'Give Me A Coke',
    tag: 'Wall Mural',
    year: '2022',
    medium: 'Acrylic wall mural',
    description: 'A bright café mural combining portrait, typography and playful color.',
    image: '/images/IMG_1159.jpg',
  },
  {
    title: 'T-Rex in Motion',
    tag: 'Wall Mural',
    year: '2022',
    medium: 'Outdoor mural',
    description: 'A dramatic dinosaur mural using strong contrast and geometric forms.',
    image: '/images/IMG_20220218_121515.jpg',
  },
  {
    title: 'Music Collage',
    tag: 'Wall Mural',
    year: '2022',
    medium: 'Mixed-media mural',
    description: 'A layered mural celebrating music culture with vibrant iconography.',
    image: '/images/IMG_20220219_120553.jpg',
  },
  {
    title: 'Shiva & Ganesh',
    tag: 'Spiritual',
    year: '2023',
    medium: 'Spiritual mural',
    description: 'A spiritual mural blending traditional symbols with a modern palette.',
    image: '/images/20210811_140635451.jpg',
  },
  {
    title: 'Sunset Window',
    tag: 'Acrylic',
    year: '2021',
    medium: 'Acrylic study',
    description: 'A moody painting of light, reflection and a quiet city sunset.',
    image: '/images/20210316_140503259.jpg',
  },
  {
    title: 'Portrait Series',
    tag: 'Portrait',
    year: '2019',
    medium: 'Portrait study',
    description: 'A detailed portrait piece with expressive color and mixed-media line work.',
    image: '/images/IMG_20190409_124822.jpg',
  },
  {
    title: 'Fire Trumpet',
    tag: 'Acrylic',
    year: '2019',
    medium: 'Acrylic painting',
    description: 'A dramatic figure painting with rich contrast and glowing highlights.',
    image: '/images/IMG_20190409_125150.jpg',
  },
  {
    title: 'Joker Reflection',
    tag: 'Illustration',
    year: '2019',
    medium: 'Concept illustration',
    description: 'A conceptual split-face painting with strong emotional contrast.',
    image: '/images/IMG_20190409_124736.jpg',
  },
  {
    title: 'Buddha Mural',
    tag: 'Spiritual',
    year: '2021',
    medium: 'Meditative mural',
    description: 'A vibrant street mural focused on calm, meditation and bright color.',
    image: '/images/20210224_173854_06213.jpg',
  },
  {
    title: 'Contemporary City',
    tag: 'Illustration',
    year: '2020',
    medium: 'Cityscape study',
    description: 'A surreal cityscape study with smoke, architecture and emotional lighting.',
    image: '/images/IMG_20190409_124440.jpg',
  },
];

const portfolioFilters = ['All', 'Wall Mural', 'Acrylic', 'Portrait', 'Spiritual', 'Illustration'];

const stats = [
  { value: '800+', label: 'Artworks completed' },
  { value: '90+', label: 'Murals installed' },
  { value: '200+', label: 'Workshop students' },
];

const workshops = [
  {
    title: 'Beginner Acrylic Workshop',
    subtitle: '2-hour guided session',
    description: 'Build confidence with brushwork, layering, and expressive composition.',
    details: ['Small groups', 'Materials included', 'Finished artwork to take home'],
    ctaLabel: 'Book Beginner Workshop',
  },
  {
    title: 'Mural Planning Session',
    subtitle: 'Design your next wall project',
    description: 'Plan a concept, choose a palette, and learn how to scale art for a wall.',
    details: ['Site or studio review', 'Client-ready concept', 'Color and scale guidance'],
    ctaLabel: 'Book Mural Session',
  },
  {
    title: 'Portrait & Mood Practice',
    subtitle: 'Personalized coaching',
    description: 'Develop portraits with emotion, light, and color harmony techniques.',
    details: ['One-on-one guidance', 'Reference work', 'Mixed-media approach'],
    ctaLabel: 'Book Portrait Coaching',
  },
];

const callouts = [
  {
    tag: 'Custom Artwork',
    title: 'Commission a Piece',
    description:
      'Have a vision for a mural, portrait or illustration? I work closely with clients from concept to completion.',
    action: 'Email Samyog',
    id: 'contact',
  },
  {
    tag: 'Learn to Paint',
    title: 'Join an Art Workshop',
    description:
      'I offer guided sessions for beginners and advanced painters who want to deepen their technique.',
    action: 'Book a Workshop',
    id: 'workshops',
  },
];

const socials = ['Instagram', 'Facebook', 'Email', 'WhatsApp'];

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [filter, setFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => filter === 'All' || item.tag === filter),
    [filter]
  );

  const scrollTo = (id, label) => {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 80; // Approximate navbar height in pixels
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setActiveSection(label);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <nav className="navbar">
        <span className="logo">
          Samyog <span className="accent">Art</span>
        </span>
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={link.label === activeSection ? 'nav-link active' : 'nav-link'}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id, link.label);
                setIsMenuOpen(false); // Close menu on link click
              }}
              aria-current={link.label === activeSection ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-action" href={`mailto:${contactEmail}`}>
          Contact Samyog
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Kathmandu, Nepal · Acrylic · Mural · Portrait</span>
            <h1>
              Samyog<br />Paints Stories<br />in Colour
            </h1>
            <p className="hero-text">
              Real murals and paintings with bold composition, local energy and handcrafted detail.
            </p>
            <p className="hero-tags">Mural · Portrait · Spiritual · Music · Illustration</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('portfolio', 'Portfolio')}>
                View Works
              </button>
              <a className="secondary-btn" href={`mailto:${contactEmail}`}>
                Book a Commission
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/IMG_20220219_120553.jpg" alt="Colourful music mural by Samyog" />
            <div className="hero-label">Colourful wall mural · 2022</div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-header">What I Create</div>
          <div className="grid cards-grid">
            {specialties.map((item) => (
              <article key={item.title} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="section-header">Selected Works</div>
          <div className="filter-row">
            {portfolioFilters.map((option) => (
              <button
                key={option}
                className={option === filter ? 'filter-chip active' : 'filter-chip'}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <article key={item.title} className="portfolio-card" onClick={() => openModal(item)}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <span className="portfolio-badge">{item.tag}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <div className="portfolio-meta">
                    <span>{item.year}</span>
                    <span>{item.medium}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button className="link-button" onClick={() => scrollTo('about', 'About')}>
            See more details
          </button>
        </section>

        <section className="testimonial">
          <span className="quote">"</span>
          <div>
            <p>
              The mural completely transformed our café. Guests come in and immediately stop to look — it's become part of the identity of the space.
            </p>
            <p className="author">— Priya Tamang, Café Owner, Thamel</p>
          </div>
        </section>

        <section className="section workshops-section" id="workshops">
          <div className="section-header">Workshops & Coaching</div>
          <p className="section-intro">
            Book a structured painting session, mural planning workshop, or expressive portrait class designed for artists at every level.
          </p>
          <div className="grid cards-grid">
            {workshops.map((item) => (
              <article key={item.title} className="card workshop-card">
                <div>
                  <span className="workshop-subtitle">{item.subtitle}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="workshop-details">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="primary-btn"
                  href={`mailto:${contactEmail}?subject=Workshop%20Booking%20–%20${encodeURIComponent(item.title)}`}
                >
                  {item.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-photo">
            <img src="/images/20210316_140503259.jpg" alt="Samyog art study" />
          </div>
          <div>
            <div className="section-label">About Me</div>
            <h2>Samyog paints with bold colour and local stories.</h2>
            <p>
              Based in Kathmandu, I create murals and paintings that mix traditional themes with modern energy. My work includes commissioned murals, portraits, music-inspired art and spiritual studies.
            </p>
            <p>
              I also run workshops for beginners and experienced artists who want to explore acrylic techniques and expressive composition.
            </p>
            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-grid" id="contact">
          {callouts.map((item) => (
            <article key={item.title} className="cta-card">
              <span className="cta-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.id === 'contact' ? (
                <a className="primary-btn" href={`mailto:${contactEmail}`}>
                  {item.action}
                </a>
              ) : (
                <button className="primary-btn" onClick={() => scrollTo(item.id, 'Workshops')}>
                  {item.action}
                </button>
              )}
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div>{artistName} · Artist, Kathmandu, Nepal</div>
        <div className="footer-links">
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo('portfolio', 'Portfolio'); }}>Portfolio</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services', 'Services'); }}>Services</a>
          <a href="#workshops" onClick={(e) => { e.preventDefault(); scrollTo('workshops', 'Workshops'); }}>Workshops</a>
          <a href={`mailto:${contactEmail}`}>Contact</a>
        </div>
        <div className="footer-socials">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </footer>

      {isModalOpen && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
            <div className="modal-details">
              <h2>{selectedItem.title}</h2>
              <p className="modal-description">{selectedItem.description}</p>
              <div className="modal-meta">
                <span className="modal-badge">{selectedItem.tag}</span>
                <span>{selectedItem.year}</span>
                <span>{selectedItem.medium}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
