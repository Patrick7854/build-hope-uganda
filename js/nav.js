/* ═══════════════════════════════════════
   BUILD HOPE UGANDA — nav.js  (shared across all pages)
   ═══════════════════════════════════════ */

// ── TOPBAR HTML ──
const TOPBAR_HTML = `
<div class="topbar">
  <span>📍 Kyangwali Refugee Settlement, Kikuube District, Uganda</span>
  <div class="topbar-right">
    <a href="mailto:buildhope.org@gmail.com">✉ buildhope.org@gmail.com</a>
    <a href="tel:+256772950051">📞 +256 772 950 051</a>
  </div>
</div>`;

// ── NAVBAR HTML ──
const NAV_HTML = `
<nav id="nav">
  <div class="nav-wrap">
    <a href="index.html" class="nav-brand">
      <img class="nav-logo" src="asset/build-hope-uganda-logo-transparent.png" alt="BUILD HOPE UGANDA logo" />
      <div>
        <span class="nav-name">BUILD HOPE UGANDA <small>Kyangwali Refugee Settlement</small></span>
      </div>
    </a>
    <ul class="nav-menu">
      <li><a href="index.html" data-page="home">Home</a></li>
      <li class="has-drop">
        <a href="about.html" data-page="about">About ▾</a>
        <div class="dropdown">
          <a href="about.html">Who We Are</a>
          <a href="about.html#credibility">Credibility</a>
          <a href="about.html#vision">Vision &amp; Mission</a>
          <a href="about.html#team">Our Team</a>
          <a href="about.html#founders">Our Approach</a>
        </div>
      </li>
      <li class="has-drop">
        <a href="programs.html" data-page="programs">Programs ▾</a>
        <div class="dropdown">
          <a href="programs.html#livelihoods">Livelihoods</a>
          <a href="programs.html#energy">Energy &amp; Environment</a>
          <a href="programs.html#wash">WASH</a>
          <a href="programs.html#education">Education</a>
          <a href="programs.html#gbv">GBV &amp; Social Change</a>
        </div>
      </li>
      <li><a href="news.html" data-page="news">News &amp; Stories</a></li>
      <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
      <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Get Involved</a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mob-nav" id="mobNav">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="programs.html">Programs</a></li>
      <li><a href="news.html">News &amp; Stories</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>
</nav>`;

// ── FOOTER HTML ──
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="nav-brand">
        <img class="nav-logo footer-logo" src="asset/build-hope-uganda-logo-transparent.png" alt="BUILD HOPE UGANDA logo" />
        <div>
          <span class="nav-name">BUILD HOPE UGANDA <small>CBO · Uganda</small></span>
        </div>
      </div>
      <p>A refugee-led humanitarian and development organization supporting vulnerable refugees and host communities in Kyangwali to attain self-reliance and resilience.</p>
    </div>
    <div class="footer-col">
      <h5>Quick Links</h5>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="programs.html">Our Programs</a>
      <a href="news.html">News &amp; Stories</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.html">Contact Us</a>
    </div>
    <div class="footer-col">
      <h5>Programs</h5>
      <a href="programs.html#livelihoods">Livelihoods</a>
      <a href="programs.html#energy">Energy &amp; Environment</a>
      <a href="programs.html#wash">WASH</a>
      <a href="programs.html#education">Education</a>
      <a href="programs.html#gbv">GBV &amp; Social Change</a>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <a href="mailto:buildhope.org@gmail.com" title="Email buildhope.org@gmail.com">Email BUILD HOPE UGANDA</a>
      <a href="tel:+256772950051">Call Executive Director</a>
      <a href="mailto:simonocana.buildhope@gmail.com" title="Email simonocana.buildhope@gmail.com">Email Grants Manager</a>
      <a href="https://wa.me/256786818248" target="_blank" rel="noopener">Program Coordinator</a>
      <a href="contact.html">Full Contact Details</a>
      <a href="contact.html" style="color:var(--gold);margin-top:.4rem">Get Involved →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 BUILD HOPE UGANDA / BHU · Kyangwali Refugee Settlement, Kikuube District, Uganda</span>
    <span>Transforming communities to self-reliance and resilience</span>
  </div>
</footer>`;

// ── INJECT ──
document.addEventListener('DOMContentLoaded', () => {
  // Topbar
  const tbSlot = document.getElementById('topbar');
  if (tbSlot) tbSlot.innerHTML = TOPBAR_HTML;

  // Navbar
  const navSlot = document.getElementById('navbar');
  if (navSlot) navSlot.innerHTML = NAV_HTML;

  // Footer
  const ftSlot = document.getElementById('footer');
  if (ftSlot) ftSlot.innerHTML = FOOTER_HTML;

  // Active link
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav-menu a[data-page]').forEach(a => {
    if (a.getAttribute('data-page') === page) a.classList.add('active');
  });

  // Scroll shadow
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('shadow', window.scrollY > 40);
    });
  }

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobNav');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      const open = mob.classList.toggle('show');
      ham.classList.toggle('open', open);
    });
  }

  // Reveal on scroll
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); }
    }, { threshold: 0.12 }).observe(el);
  });

  // Profile document reader
  const profileModal = document.getElementById('profileModal');
  const profileReader = document.getElementById('profileReader');
  const profilePages = document.getElementById('profilePages');
  const profilePageStatus = document.getElementById('profilePageStatus');
  const profileZoomIn = document.getElementById('profileZoomIn');
  const profileZoomOut = document.getElementById('profileZoomOut');
  const profileOpeners = document.querySelectorAll('.profile-open');
  const profileClosers = document.querySelectorAll('[data-profile-close]');
  let profilePdf = null;
  let profileRendering = false;
  let profileRendered = false;
  let profileZoom = 1;

  const setProfileStatus = message => {
    if (profilePageStatus) profilePageStatus.textContent = message;
  };

  const renderProfileDocument = async () => {
    if (!profileReader || !profilePages || profileRendering) return;

    profileRendering = true;
    profilePages.innerHTML = '';
    setProfileStatus('Loading document...');

    try {
      const profilePdfLib = window.pdfjsLib;
      if (!profilePdfLib) {
        throw new Error('Document reader library was not loaded.');
      }
      profilePdfLib.GlobalWorkerOptions.workerSrc = 'js/pdfjs/pdf.worker.min.js';

      if (!profilePdf) {
        profilePdf = await profilePdfLib.getDocument({
          url: profileReader.dataset.pdfSrc,
          disableRange: true,
          disableStream: true,
        }).promise;
      }

      const pageWidth = Math.max(260, profilePages.clientWidth - 28);
      const outputScale = Math.min(window.devicePixelRatio || 1, 2);

      for (let pageNumber = 1; pageNumber <= profilePdf.numPages; pageNumber += 1) {
        setProfileStatus(`Rendering page ${pageNumber} of ${profilePdf.numPages}`);

        const page = await profilePdf.getPage(pageNumber);
        const baseViewport = page.getViewport({ scale: 1 });
        const displayScale = Math.min(pageWidth / baseViewport.width, 1.35) * profileZoom;
        const renderViewport = page.getViewport({ scale: displayScale * outputScale });
        const displayViewport = page.getViewport({ scale: displayScale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d', { alpha: false });
        const pageWrap = document.createElement('div');

        canvas.width = Math.floor(renderViewport.width);
        canvas.height = Math.floor(renderViewport.height);
        canvas.style.width = `${Math.floor(displayViewport.width)}px`;
        canvas.style.height = `${Math.floor(displayViewport.height)}px`;
        pageWrap.className = 'profile-page';
        pageWrap.setAttribute('aria-label', `Profile document page ${pageNumber}`);
        pageWrap.appendChild(canvas);
        profilePages.appendChild(pageWrap);

        await page.render({ canvasContext: context, viewport: renderViewport }).promise;
      }

      profileRendered = true;
      setProfileStatus(`${profilePdf.numPages} pages ready`);
    } catch (error) {
      setProfileStatus('The profile document could not be loaded.');
      profilePages.innerHTML = `<p class="profile-reader-error">Please refresh the page and try again.<small>${error.message || 'Document renderer error'}</small></p>`;
    } finally {
      profileRendering = false;
    }
  };

  const openProfile = () => {
    if (!profileModal) return;
    profileModal.classList.add('open');
    profileModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('profile-lock');
    renderProfileDocument();
  };

  const closeProfile = () => {
    if (!profileModal) return;
    profileModal.classList.remove('open');
    profileModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('profile-lock');
  };

  profileOpeners.forEach(button => button.addEventListener('click', openProfile));
  profileClosers.forEach(button => button.addEventListener('click', closeProfile));
  profileZoomIn?.addEventListener('click', () => {
    profileZoom = Math.min(profileZoom + 0.15, 1.6);
    if (profileModal?.classList.contains('open')) renderProfileDocument();
  });
  profileZoomOut?.addEventListener('click', () => {
    profileZoom = Math.max(profileZoom - 0.15, 0.7);
    if (profileModal?.classList.contains('open')) renderProfileDocument();
  });

  if (profileReader) {
    ['contextmenu', 'copy', 'cut', 'dragstart'].forEach(eventName => {
      profileReader.addEventListener(eventName, event => event.preventDefault());
    });
  }

  let profileResizeTimer;
  window.addEventListener('resize', () => {
    if (!profileRendered || !profileModal?.classList.contains('open')) return;
    clearTimeout(profileResizeTimer);
    profileResizeTimer = setTimeout(renderProfileDocument, 250);
  });

  document.addEventListener('keydown', event => {
    const modalOpen = profileModal && profileModal.classList.contains('open');
    if (!modalOpen) return;

    const key = event.key.toLowerCase();
    const blockedShortcut = (event.ctrlKey || event.metaKey) && ['c', 'p', 's'].includes(key);

    if (key === 'escape') closeProfile();
    if (blockedShortcut) event.preventDefault();
  });
});
