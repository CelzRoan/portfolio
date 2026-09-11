/**
 * ==========================================================================
 * ALIF NOORACHMAD MUTTAQIN — MAIN APPLICATION JAVASCRIPT
 * ==========================================================================
 * Clean application logic and interactive behaviors.
 * Project content is loaded from `projects-data.js`.
 */

// ==========================================================================
// 1. DATA LOOKUP DICTIONARY
// ==========================================================================
const caseStudiesData = {};
if (typeof projectsData !== 'undefined' && Array.isArray(projectsData)) {
  projectsData.forEach(project => {
    if (project.caseStudy) {
      caseStudiesData[project.id] = project.caseStudy;
    }
  });
}

// ==========================================================================
// 2. DYNAMIC PROJECT CARD RENDERING
// ==========================================================================
function renderProjectCards(activeFilter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container || typeof projectsData === 'undefined') return;

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  container.innerHTML = filtered.map(project => {
    const metaTagsHtml = (project.metaTags || [])
      .map(tag => `<span class="meta-tag">${tag}</span>`)
      .join('<span class="meta-dot">·</span>');

    return `
      <article class="project-card" data-category="${project.category}" id="project-${project.id}">
        <div class="project-media">
          <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
          <div class="media-overlay">
            <span class="badge-tag">${project.badgeTag}</span>
            <span class="badge-metric">${project.badgeMetric}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-meta">
            ${metaTagsHtml}
            <span class="meta-dot">·</span>
            <span class="meta-year">${project.year}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-excerpt">${project.excerpt}</p>
          <div class="project-footer">
            <button class="btn btn-sm btn-outline open-case-study" data-project="${project.id}">
              Project Overview
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
            <span class="project-duration">${project.duration}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 3. LIVE CLOCK TICKER (Neozen Signature)
// ==========================================================================
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    };
    clockEl.textContent = now.toLocaleString('en-US', options);
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// ==========================================================================
// 4. THEME TOGGLE (Light / Dark Mode)
// ==========================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('nz-theme') || 'light';
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeButtonText(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.body.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('nz-theme', newTheme);
    updateThemeButtonText(newTheme);
  });

  function updateThemeButtonText(theme) {
    const textEl = toggleBtn.querySelector('.theme-text');
    if (textEl) {
      textEl.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
  }
}

// ==========================================================================
// 5. PROJECT CATEGORY FILTER
// ==========================================================================
function initProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');

  // Dynamically update counter for "All Projects"
  if (typeof projectsData !== 'undefined') {
    const allTab = document.querySelector('.filter-tab[data-filter="all"]');
    if (allTab) {
      allTab.textContent = `All Projects (${projectsData.length})`;
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';
      renderProjectCards(filter);
    });
  });
}

// ==========================================================================
// 6. CASE STUDY MODAL / DRAWER SYSTEM
// ==========================================================================
let currentActiveProjectKey = null;
let currentActiveTab = 'overview';

function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-project-title');
  const modalTag = document.getElementById('modal-project-tag');
  const modalBody = document.getElementById('modal-body-content');
  const modalTabs = document.querySelectorAll('.modal-tab');

  if (!modal) return;

  function renderModalContent(projectKey, tabKey) {
    const project = caseStudiesData[projectKey];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalTag.textContent = project.tag;

    let metaHtml = '';
    if (tabKey === 'overview' && project.meta) {
      metaHtml = `
        <div class="cs-meta-grid">
          <div class="cs-meta-item">
            <strong>Client / Context</strong>
            <span>${project.meta.client}</span>
          </div>
          <div class="cs-meta-item">
            <strong>Timeline</strong>
            <span>${project.meta.timeline}</span>
          </div>
          <div class="cs-meta-item">
            <strong>Role</strong>
            <span>${project.meta.role}</span>
          </div>
          <div class="cs-meta-item">
            <strong>Key Tools</strong>
            <span>${project.meta.tools}</span>
          </div>
        </div>
      `;
    }

    const tabHtml = project.tabs[tabKey] || '<p>No content available.</p>';
    modalBody.innerHTML = metaHtml + tabHtml;
    modalBody.scrollTop = 0;
  }

  function openModal(projectKey) {
    currentActiveProjectKey = projectKey;
    currentActiveTab = 'overview';

    modalTabs.forEach(t => t.classList.remove('active'));
    const firstTab = document.querySelector('.modal-tab[data-tab="overview"]');
    if (firstTab) firstTab.classList.add('active');

    renderModalContent(projectKey, 'overview');

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event delegation so dynamically created cards always open the modal
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-case-study');
    if (btn) {
      e.preventDefault();
      const projectKey = btn.getAttribute('data-project');
      if (projectKey) {
        openModal(projectKey);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const selectedTab = tab.getAttribute('data-tab');
      currentActiveTab = selectedTab;
      renderModalContent(currentActiveProjectKey, selectedTab);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Enable Desktop Mouse Drag-to-Scroll on Modal Content
  let isDown = false;
  let startY = 0;
  let initialScrollTop = 0;
  let hasDragged = false;

  modalBody.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDown = true;
    hasDragged = false;
    startY = e.pageY - modalBody.offsetTop;
    initialScrollTop = modalBody.scrollTop;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const currentY = e.pageY - modalBody.offsetTop;
    const walkY = currentY - startY;
    if (Math.abs(walkY) > 4) {
      hasDragged = true;
      modalBody.classList.add('is-dragging');
    }
    modalBody.scrollTop = initialScrollTop - walkY;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      modalBody.classList.remove('is-dragging');
    }
  });

  // Prevent accidental link/button clicks if dragging occurred
  modalBody.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);

  // Enable Horizontal Drag on Nav Tabs
  const navTabsContainer = document.querySelector('.modal-nav-tabs');
  if (navTabsContainer) {
    let isNavDown = false;
    let startNavX = 0;
    let initialNavScrollLeft = 0;
    let hasNavDragged = false;

    navTabsContainer.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      isNavDown = true;
      hasNavDragged = false;
      startNavX = e.pageX - navTabsContainer.offsetLeft;
      initialNavScrollLeft = navTabsContainer.scrollLeft;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isNavDown) return;
      const currentX = e.pageX - navTabsContainer.offsetLeft;
      const walkX = currentX - startNavX;
      if (Math.abs(walkX) > 4) {
        hasNavDragged = true;
      }
      navTabsContainer.scrollLeft = initialNavScrollLeft - walkX;
    });

    window.addEventListener('mouseup', () => {
      isNavDown = false;
    });

    navTabsContainer.addEventListener('click', (e) => {
      if (hasNavDragged) {
        e.preventDefault();
        e.stopPropagation();
        hasNavDragged = false;
      }
    }, true);
  }
}

// ==========================================================================
// 7. CLIPBOARD COPY EMAIL & TOAST NOTIFICATION
// ==========================================================================
function initClipboard() {
  const copyBtnHero = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyText(email) {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
    }).catch(() => {
      showToast("Email: " + email);
    });
  }

  if (copyBtnHero) {
    copyBtnHero.addEventListener('click', () => {
      const email = copyBtnHero.getAttribute('data-email') || 'alifnm.ixa@gmail.com';
      copyText(email);
    });
  }
}

// ==========================================================================
// 8. FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================================================
// 9. MOBILE MENU TOGGLE
// ==========================================================================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });

  const links = nav.querySelectorAll('.nav-link');
  links.forEach(l => {
    l.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
    });
  });
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards('all');
  initLiveClock();
  initThemeToggle();
  initProjectFilters();
  initCaseStudyModal();
  initClipboard();
  initFaqAccordion();
  initMobileMenu();
});
