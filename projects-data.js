/**
 * ==========================================================================
 * ALIF NOORACHMAD MUTTAQIN — UX PROJECTS DATA REPOSITORY
 * ==========================================================================
 * Centralized data source for portfolio projects & case studies.
 * To add a new project, simply add a new object to the `projectsData` array.
 */

const projectsData = [
  // --------------------------------------------------------------------------
  // 1. DUITKU — PERSONAL FINANCE & CASHFLOW MANAGEMENT
  // --------------------------------------------------------------------------
  {
    id: "duitku",
    category: "concept",
    title: "DuitKu — Personal Finance & Cashflow Management Web Application",
    excerpt: "Modern web-based personal finance tracker built with Claymorphism & Neo-brutalism aesthetics, custom HTML5 Canvas charting, multi-criteria budgeting, and 100% offline local privacy—developed with AI-assisted full-stack engineering.",
    year: "2026",
    badgeTag: "Fintech / Web",
    badgeMetric: "100% Offline App",
    metaTags: ["AI-Assisted Dev", "Neo-Brutalism", "HTML5 Canvas"],
    image: "assets/images/duitku/duitku_cover.png",
    duration: "⏱ Sep 2026",
    caseStudy: {
      tag: "Personal Finance & AI-Assisted Engineering · 2026",
      title: "DuitKu — Personal Finance & Cashflow Management Web Application",
      image: "assets/images/duitku/duitku_cover.png",
      meta: {
        client: "Independent Full-Stack Project",
        timeline: "September 2026",
        role: "UI/UX Designer & Full-Stack Developer (AI-Assisted)",
        tools: "Google Antigravity (AI Coding), HTML5 Canvas, Vanilla CSS, Node.js, SQLite"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              <strong>DuitKu</strong> is a high-performance web-based personal finance tracker and cashflow management platform engineered to deliver effortless transaction logging, multi-category budget guardrails, and real-time financial health diagnostics through interactive data visualizations.
            </p>
            <div class="cs-highlight-box">
              <p><strong>Design Philosophy &amp; AI-Assisted Engineering:</strong> Built on a distinctive <strong>Claymorphism &amp; Neo-brutalism</strong> design language featuring bold 3px solid borders (<code>#1A1A2E</code>), crisp 4px unblurred physical drop shadows, and vibrant pastel accents. The project was executed utilizing an <strong>AI-assisted full-stack development workflow</strong> (leveraging Google Antigravity &amp; AI agentic pair programming) to rapidly scaffold modular REST architecture, implement pure canvas math algorithms, and craft responsive tactile UI components without third-party frameworks. The application runs <strong>100% offline</strong> with zero CDN dependencies and native SQLite storage (<code>node:sqlite</code>) for absolute user privacy.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/duitku/01_dashboard.png" alt="DuitKu Neo-Brutalist Financial Dashboard Overview">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">Core Functional Pillars</h4>
            <p>
              Designed for daily personal utility without the complexity and telemetry of traditional cloud fintech apps:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Instant Financial Dashboard:</strong> Live tracking of current net balance, monthly income, total expenses, dynamic cashflow surplus/deficit status, a smooth 7-day bezier expense trend, and quick budget indicators.</li>
              <li><strong>High-Velocity Transaction Management:</strong> Full CRUD operations with intuitive modal forms, multi-criteria filtering (month, type, category), and bulk selection with floating action bar for instant batch deletion.</li>
              <li><strong>Proactive Category Budgeting:</strong> Dedicated spending limits per category with automatic consumption tracking and real-time visual warnings (Green &lt; 75%, Amber &ge; 75%, Red &ge; 100%).</li>
              <li><strong>Interactive Canvas Analytics:</strong> Year-round monthly income vs. expense comparison bars, custom 1:1 donut chart with hover slice pop-out and dynamic center readout, top 5 expense rankings, and one-click spreadsheet-ready CSV export.</li>
            </ul>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>The Problem &amp; Market Frustrations</h3>
            <p>
              Personal financial management is essential for financial wellness, yet users continually struggle with the trade-offs present in modern financial tools:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Cloud Lock-In &amp; Privacy Telemetry:</strong> Mainstream fintech apps mandate cloud accounts, third-party bank linking, and invasive analytics, exposing personal net worth and spending habits to remote servers.</li>
              <li><strong>Framework Bloat &amp; Sluggish Performance:</strong> Modern web apps often require megabytes of JavaScript frameworks and CDN assets, resulting in slow load times and complete failure when working in offline or unstable network environments.</li>
              <li><strong>Spreadsheet Friction vs. Rigid Mobile UIs:</strong> Spreadsheets provide data sovereignty but suffer from cumbersome manual data entry on mobile, while native mobile apps lock data behind proprietary paywalls without easy export options.</li>
            </ul>
            <div class="cs-highlight-box">
              <p><strong>The Core Design Challenge:</strong> Create an expressive, tactile web application combining the joyful aesthetic of Neo-brutalism with the raw execution speed of vanilla web standards—functioning seamlessly without internet connectivity while maintaining bank-grade local data privacy.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/duitku/06_modal_tambah_transaksi.png" alt="DuitKu Neo-Brutalist Transaction Creation Modal">
            </div>
            <div class="cs-image-box">
              <img src="assets/images/duitku/05_popup_month_picker.png" alt="Instant Month and Year Picker Calendar Popup Navigation">
            </div>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Architecture &amp; UX Solutions</h3>
            <p>
              DuitKu addresses these challenges by merging an intentional design system with a zero-dependency, local-first technical stack:
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">1. Neo-Brutalism &amp; Claymorphism Design System</h4>
            <p>
              Constructed using pure CSS custom properties with high-contrast tactile elements: 3px solid ink borders (<code>#1A1A2E</code>), 4px unblurred hard drop shadows, and active button press feedback (<code>translate(2px, 2px)</code>). Paired with soft pastel accents (Yellow <code>#FFE66D</code>, Mint <code>#A8E6CF</code>, Coral <code>#FF8B94</code>, Ice Blue <code>#A8D8EA</code>, Lilac <code>#DED2F9</code>) and locally embedded <em>Space Grotesk</em> and <em>DM Sans</em> typography.
            </p>
            <div class="cs-image-box">
              <img src="assets/images/duitku/02_transactions.png" alt="DuitKu Transaction Table with Select All and Multi-Criteria Filtering">
            </div>

            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">2. Robust Transaction Table &amp; Bulk Operations</h4>
            <p>
              The transaction table features responsive page sizing (10, 20, 50, 100, All), individual and header-level <em>Select All</em> checkboxes, and a floating bulk action bar that enables safe batch deletion of multiple records with instant feedback.
            </p>
            <div class="cs-image-box">
              <img src="assets/images/duitku/03_budget.png" alt="DuitKu Category Budget Tracker with Real-Time Percentage Warnings">
            </div>

            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">3. Proactive Budget Thresholds &amp; Guardrails</h4>
            <p>
              Budgets are monitored dynamically against real-time expense calculations. The UI automatically renders dynamic progress bars that shift from calming mint green to cautionary amber at 75% utilization, and urgent coral red when an expense cap is breached.
            </p>
            <div class="cs-image-box">
              <img src="assets/images/duitku/04_reports.png" alt="DuitKu Custom HTML5 Canvas 2D Financial Analytics and Donut Chart">
            </div>

            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">4. Pure HTML5 Canvas 2D Charting Engine</h4>
            <p>
              Rather than importing bloated charting libraries, DuitKu features a bespoke canvas engine (<code>charts.js</code>) supporting smooth bezier spline curves for 7-day spending, comparative annual double-bar charts, and a pixel-perfect 1:1 donut chart with slice hover pop-out animations and dynamic center text.
            </p>

            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">5. AI-Assisted Architecture &amp; Rapid Development</h4>
            <p>
              Leveraged advanced AI agentic workflows (Google Antigravity) to synthesize clean modular vanilla ES6 architecture, implement trigonometric canvas collision math, and establish robust RESTful API endpoints with native Node.js SQLite integration in record time while adhering strictly to high-contrast neo-brutalist design guidelines.
            </p>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Technical Delivery &amp; System Metrics</h3>
            <p>
              DuitKu demonstrates that modern web applications can achieve exceptional aesthetic depth, fluid interactivity, and rich analytical capability without sacrificing performance, privacy, or offline reliability:
            </p>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">0 CDN</span>
                <span class="desc">100% Self-Contained Offline Operation</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">0 Frameworks</span>
                <span class="desc">Pure Vanilla HTML5, CSS3 &amp; ES6 JS</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">14 Endpoints</span>
                <span class="desc">Modular Lightweight REST API Architecture</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">Native SQLite</span>
                <span class="desc">Zero C++ Compile Overhead (node:sqlite)</span>
              </div>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">Key Project Deliverables</h4>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Zero-Dependency Performance:</strong> Sub-50ms initial render latency with zero network calls, zero tracking scripts, and instant cold-start responsiveness.</li>
              <li><strong>Custom HTML5 Canvas 2D Engine:</strong> Saved 200KB+ in bundle size by eliminating external charting libraries while maintaining vector-crisp rendering and custom mouse hover collision detection.</li>
              <li><strong>Absolute Data Sovereignty:</strong> All records persist exclusively in a portable, user-owned local SQLite database file, granting users full control over their financial records.</li>
              <li><strong>AI-Accelerated Engineering Workflow:</strong> Rapidly architected, prototyped, and deployed a complete full-stack web application with zero external framework dependencies by orchestrating AI pair programming across frontend design tokens, canvas graphics, and backend REST layers.</li>
              <li><strong>Complete End-to-End Production Package:</strong> Modular Node.js REST backend, comprehensive API documentation, and reproducible local startup scripts.</li>
            </ul>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 2. JAKAL (DUAL-DIRECTION CONCEPT)
  // --------------------------------------------------------------------------
  {
    id: "jakal",
    category: "concept",
    title: "JaKal — Dual-Direction Local Food & Coffee Discovery",
    excerpt: "Local food & coffee discovery app concept in Indonesia, exploring two contrasting design directions: Minimal Utility vs. Warm Storytelling, utilizing AI-assisted design-to-prototype workflows.",
    year: "2026",
    badgeTag: "Dual-Direction Concept",
    badgeMetric: "2 Live Prototypes",
    metaTags: ["Concept Exploration", "Google Stitch & Antigravity"],
    image: "assets/images/jakal/jakal_clean.png",
    duration: "⏱ Jan – Feb 2026",
    caseStudy: {
      tag: "Concept Study · Dual-Direction · 2026",
      title: "JaKal — Dual-Direction Local Food & Coffee Discovery",
      image: "assets/images/jakal/jakal_clean.png",
      meta: {
        client: "Personal Concept Exploration (Indonesia)",
        timeline: "Concept Study & Rapid Prototyping",
        role: "Solo UI/UX Design & Prototyping",
        tools: "Google Stitch, Antigravity, Figma"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              <strong>JaKal (Jajanan Lokal)</strong> is a UI/UX concept for a local culinary and coffee discovery platform in Indonesia. Rather than committing to a single visual style, the project was framed around a deliberate experiment: <em>building two contrasting design directions for the exact same underlying information architecture</em>.
            </p>
            <div class="cs-highlight-box">
              <p><strong>Core Hypothesis:</strong> Compare whether a <strong>Minimal Utilitarian</strong> interface (speed, clean cards, immediate filter) or a <strong>Warm Storytelling</strong> editorial layout (warm tones, rich photography, cultural context) delivers a more compelling discovery experience for Indonesian users.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/jakal/jakal_clean.png" alt="JaKal Option A: Minimal & Clean">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Problem Context &amp; User Need</h3>
            <p>
              Existing food discovery apps in Indonesia treat local food and coffee shops generically. Major map apps feel data-heavy, while food delivery apps prioritize discounts rather than the physical ambiance of a spot.
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Buried Contextual Cues:</strong> Essential attributes like fast Wi-Fi, quiet work ambiance, outdoor seating, and realistic price tiers are often hidden under reviews.</li>
              <li><strong>Discovery vs. Delivery Mismatch:</strong> Users searching for an authentic warung for lunch or a café to work remotely don't want coupon popups.</li>
            </ul>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Two Distinct Design Directions</h3>
            <p>
              Both versions share 100% identical data models and taxonomies (Place Type: Coffee Shop, Warung, Restaurant), but branch into two distinct experiential paradigms:
            </p>
            <div class="pillars-grid" style="margin: 20px 0;">
              <div class="pillar-card">
                <span class="pillar-num">Direction A</span>
                <h4>Minimal &amp; Clean</h4>
                <p>Card-based, crisp green palette, high whitespace, fast utility for quick scanning.</p>
              </div>
              <div class="pillar-card">
                <span class="pillar-num">Direction B</span>
                <h4>Warm Storytelling</h4>
                <p>Terracotta &amp; cream palette, magazine-style editorial layout celebrating culinary heritage.</p>
              </div>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/jakal/jakal_story.png" alt="JaKal Option B: Warm Storytelling">
            </div>
            <div class="prototype-embed-box">
              <div class="embed-badge">⚡ AI-Assisted Live Prototypes</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Both directions were generated using AI-assisted prototyping tools (Google Stitch &amp; Antigravity) to test real-world interaction, layout responsiveness, and tactile usability without writing manual code.
              </p>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="https://celzroan.github.io/jakal-clean/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  JaKal Clean — Local Food Discovery ↗
                </a>
                <a href="https://celzroan.github.io/jakal-story/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  JaKal Story — Temukan Rasa Lokal ↗
                </a>
              </div>
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Reflection &amp; Design Takeaways</h3>
            <p>
              This dual-direction project highlighted how visual hierarchy and tonal styling drastically alter the perceived brand persona of a product without altering database fields.
            </p>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">2</span>
                <span class="desc">AI-Assisted Interactive Prototypes</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">100%</span>
                <span class="desc">Shared Information Architecture</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">0-to-1</span>
                <span class="desc">AI-Assisted Design-to-Code Workflow</span>
              </div>
            </div>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 3. SINAU KODE KODING
  // --------------------------------------------------------------------------
  {
    id: "sinau",
    category: "concept",
    title: "Sinau Kode Koding — Multi-Role E-Learning & Webinar Marketplace",
    excerpt: "End-to-end UX wireframing architecture for an integrated course and live webinar marketplace, structuring discovery, multi-channel checkout, active learning assessments, and partner backoffice workflows.",
    year: "2022",
    badgeTag: "EdTech / Web",
    badgeMetric: "70+ UX Wireframes",
    metaTags: ["Kode Koding", "UX Wireframing", "Multi-Role LMS"],
    image: "assets/images/sinau/sinau_cover.png",
    duration: "⏱ May – Sep 2022",
    caseStudy: {
      tag: "EdTech & Webinar Marketplace · 2022",
      title: "Sinau Kode Koding — Multi-Role E-Learning & Webinar Marketplace",
      image: "assets/images/sinau/sinau_cover.png",
      meta: {
        client: "Kode Koding Studio / Agency",
        timeline: "May – Sep 2022",
        role: "UX Designer (Wireframe Specialist)",
        tools: "Figma, Balsamiq, Information Architecture"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              <strong>Sinau Kode Koding</strong> (<em>{s:nau} by Kode Koding</em>) is an integrated e-learning and live webinar marketplace platform designed to bridge technical learning, practical skill acquisition, and institutional training across Indonesia. The platform connects learners, independent instructors, and educational institutional partners into a unified digital ecosystem.
            </p>
            <div class="cs-highlight-box">
              <p><strong>My Role &amp; Core UX Scope:</strong> Serving as the <strong>UX Designer (Wireframe Specialist)</strong>, my primary responsibility was architecting the end-to-end information architecture and delivering a comprehensive wireframe blueprint consisting of <strong>70+ detailed screens</strong>. I structured multi-role user journeys across 4 distinct stakeholders—<strong>Pelajar</strong> (Learner), <strong>Pengajar</strong> (Instructor), <strong>Mitra</strong> (Institutional Partner), and <strong>Superadmin</strong> (Backoffice)—transforming complex multi-sided marketplace logic into intuitive, standardized wireframe layouts.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_cover.png" alt="Sinau Kode Koding Multi-Role E-Learning Platform UX Overview">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">A Unified Multi-Sided Ecosystem</h4>
            <p>
              Unlike conventional learning management systems limited to passive recorded videos, the platform wireframes were engineered around live cohort learning, verified assessments, and partner co-branding:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Public Discovery &amp; Exploration:</strong> Interactive landing portal, category taxonomy (Design, JavaScript, HTML, Database), advanced faceted filtering, and instructor portfolios.</li>
              <li><strong>Live Webinar Lifecycle:</strong> Course detail blueprint detailing curriculum breakdowns, 20+ modular learning files, direct Zoom session integrations, and schedule timelines.</li>
              <li><strong>Institutional Partner Network:</strong> Dedicated partner portals empowering institutions and agencies (*Mitra*) to create custom webinar cohorts, invite members, and monitor student engagement.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_home.png" alt="Sinau Kode Koding Public Portal &amp; Course Discovery Wireframe">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Operational Friction &amp; Fragmented Webinar Journeys</h3>
            <p>
              Prior to designing Sinau Kode Koding, online webinars and tech training across local agencies faced severe operational fragmentation, resulting in high cognitive overload and learner drop-offs:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Fragmented Tooling Chaos:</strong> Organizers relied on disparate third-party tools—Google Forms for registration, manual WhatsApp bank transfer receipts, email blasts for Zoom links, and Google Drive for slides—creating high administrative overhead and lost student access.</li>
              <li><strong>Payment Friction &amp; Abandoned Checkouts:</strong> Without an integrated, multi-method payment checkout, learners were deterred by manual transfer verifications and the absence of preferred digital wallets (GoPay, QRIS, ShopeePay) or convenience store cash points.</li>
              <li><strong>Absence of Structured Learning Validation:</strong> Most commercial webinars ended with passive attendance without any objective evaluation, quizzes, or structured homework submissions.</li>
              <li><strong>Institutional Partner Isolation:</strong> Corporate and educational partners (*Mitra*) had no unified dashboard to manage their student cohorts, coordinate with guest lecturers, or inspect attendance.</li>
            </ul>
            <div class="cs-highlight-box">
              <p><strong>UX Challenge:</strong> How might we design an integrated wireframe ecosystem that unifies course discovery, instant multi-channel payment, active learning validation (quizzes and submissions), and institutional cohort management into a cohesive, friction-free journey?</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_checkout.png" alt="Sinau Multi-Channel Payment Checkout Wireframe — Instant Payment Gateway Mapping">
            </div>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Comprehensive Wireframing Across 4 Ecosystem Pillars</h3>
            <p>
              Through systematic wireframing, I formulated clear structural blueprints that guided engineering and visual design, organized across four functional pillars:
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 24px 0 12px; color: var(--text-primary);">1. Course Detail &amp; Live Webinar Registration UX</h4>
            <p>
              Engineered high-converting class overview wireframes highlighting essential decision-making criteria—exact schedule dates, 19:00–21:00 WIB timelines, Zoom meeting channels, syllabus breakdowns, instructor credentials, and bundled learning assets (Certificates, Submissions, Materials, Quizzes):
            </p>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_detail.png" alt="Sinau Course &amp; Live Webinar Registration Interface Wireframe">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">2. Friction-Free Multi-Channel Payment Gateway Flow</h4>
            <p>
              Mapped an e-commerce standard checkout flow providing 8+ automated payment channels (Credit/Debit Card, GoPay, QRIS, ShopeePay, Bank Virtual Accounts, Alfamart, Indomaret, and PayLater options via Kredivo/Akulaku), complete with dynamic coupon logic and institutional partner discounts.
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">3. Active Learning &amp; Assessment Engine (Quizzes &amp; Submissions)</h4>
            <p>
              Designed student learning environments emphasizing active skill verification rather than passive video consumption:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Interactive Timed Quiz Engine:</strong> Live countdown timer display, 20-question navigation grid with answer status states, and multiple-choice interaction models.</li>
              <li><strong>Structured Project Submission Portal:</strong> Project brief repository with explicit submission deadlines, PDF document uploaders, and external portfolio URL inputs.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_kuis.png" alt="Interactive Timed Quiz Engine with Question Grid Wireframe">
            </div>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_submission.png" alt="Project &amp; Practical Assignment Submission Wireframe">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">4. Institutional Partner &amp; Backoffice Administration</h4>
            <p>
              Formulated dedicated administrative layouts empowering institutional training partners (*Mitra*) to monitor cohort rosters, invite members, and manage multi-instructor schedules, accompanied by a comprehensive Livewire backoffice for system-wide Role-Based Access Control (RBAC).
            </p>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_mitra_dashboard.png" alt="Mitra Institutional Partner Dashboard &amp; Class Portfolio Wireframe">
            </div>
            <div class="cs-image-box">
              <img src="assets/images/sinau/sinau_admin_webinar.png" alt="Livewire Administrative Backoffice &amp; Webinar Setup Wireframe">
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Design System Delivery &amp; Architectural Impact</h3>
            <p>
              The comprehensive wireframe system delivered a crystal-clear, developer-ready blueprint that eradicated scope ambiguity and harmonized business requirements across all 4 platform stakeholders:
            </p>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">70+ Screens</span>
                <span class="desc">Comprehensive Wireframe Blueprints</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">4 Roles</span>
                <span class="desc">Pelajar, Pengajar, Mitra &amp; Admin</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">8+ Methods</span>
                <span class="desc">Seamless Multi-Channel Checkout UX</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">Full Cycle</span>
                <span class="desc">Discovery, Payment, Quizzes &amp; Backoffice</span>
              </div>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">Key Project Deliverables</h4>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>End-to-End Wireframe Repository:</strong> Delivered 70+ organized screen wireframes mapping every critical user state, validation edge-case, and responsive breakpoint.</li>
              <li><strong>Standardized Information Architecture:</strong> Eliminated disjointed third-party tools by centralizing webinar scheduling, Zoom connectivity, learning materials, and certificate issuance into a single coherent portal.</li>
              <li><strong>E-Commerce Standard Payment Flow:</strong> Detailed checkout blueprints supporting modern Indonesian digital payment gateways and retail payment points.</li>
              <li><strong>Assessment &amp; Administration Blueprints:</strong> Scalable UI frameworks for timed quizzes, project submissions, partner management, and backoffice permissions.</li>
            </ul>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 4. STIE MANDALA JEMBER HRIS & PAYROLL
  // --------------------------------------------------------------------------
  {
    id: "mandala",
    category: "enterprise",
    title: "HRIS & Payroll Management System — STIE Mandala",
    excerpt: "In-house enterprise system development digitizing employee and faculty records and monthly payroll workflows, eliminating external synchronization delays.",
    year: "2022",
    badgeTag: "Enterprise HRIS",
    badgeMetric: "Real-Time Sync",
    metaTags: ["STIE Mandala Jember", "Role-Based Access & BPMN"],
    image: "assets/images/mandala/F1.png",
    duration: "⏱ Feb – Sep 2022",
    caseStudy: {
      tag: "Real Client · Enterprise Web · 2022",
      title: "HRIS & Payroll Management System — STIE Mandala Jember",
      image: "assets/images/mandala/F1.png",
      meta: {
        client: "Sekolah Tinggi Ilmu Ekonomi Mandala Jember",
        timeline: "Feb – Sep 2022",
        role: "UI/UX Designer & Workflow Modeler",
        tools: "Figma, BPMN, Role-Based Access Control"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Project Background</h3>
            <p>
              Sekolah Tinggi Ilmu Ekonomi Mandala (now ITS Mandala) is a prominent higher-education institution in East Java. Prior to this project, personnel and payroll records relied on external third-party infrastructure requiring periodic batch synchronizations, causing data latency and errors.
            </p>
            <div class="cs-highlight-box">
              <p><strong>The Core Objective:</strong> Design an in-house Human Resource Information System (HRIS) and Payroll platform that digitizes employee records in real time and streamlines monthly payroll calculations.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/mandala/F1.png" alt="STIE Mandala HRIS System Overview">
            </div>
            <div class="prototype-embed-box">
              <div class="embed-badge">📖 Notion UX Case Studies</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
                Explore in-depth UX research and design documentation for Personnel and Payroll modules on Notion:
              </p>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="https://alifnm.notion.site/Studi-Kasus-UX-Pengembangan-Sistem-Data-Kepegawaian-5307763447b941ab82bbab2b88c7945e" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  UX Case Study: Personnel Data System ↗
                </a>
                <a href="https://alifnm.notion.site/Studi-Kasus-UX-Sistem-Penggajian-c5a4c2ccc67841f3a699a60ceaf3bd7d" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  UX Case Study: Payroll Management System ↗
                </a>
              </div>
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Operational Bottlenecks</h3>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Manual Synchronization Delays:</strong> Staff profile updates, promotions, and academic credentials suffered multi-day delays between local spreadsheets and external servers.</li>
              <li><strong>Complex Role Permissions:</strong> Need for strict role segregation between regular lecturers/staff (viewing personal payroll slips) and HRD administrators (managing salary formulas, deductions, and tax withholdings).</li>
            </ul>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Design Strategy &amp; Role-Based Workflows</h3>
            <p>
              Serving as UI/UX Designer in a team of 3 designers and 1 development team, I mapped end-to-end BPMN workflows and built high-fidelity wireframes in Figma:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Unified Navigation Architecture:</strong> Dedicated views for Faculty Records, Leave Requests, Attendance Logs, and Monthly Payroll.</li>
              <li><strong>Automated Slip Generator:</strong> 1-click printable salary slip format compliant with institutional reporting formats.</li>
              <li><strong>Audit Logs &amp; Error Prevention:</strong> Confirmation dialogs and audit trails for high-risk payroll disbursement operations.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/mandala/list_gaji_bulanan.png" alt="STIE Mandala HRIS List Gaji Bulanan Interface">
            </div>
            <div class="prototype-embed-box">
              <div class="embed-badge">📖 Notion UX Case Studies</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
                Complete end-to-end workflow documentation, wireframes, and UX rationale on Notion:
              </p>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="https://alifnm.notion.site/Studi-Kasus-UX-Pengembangan-Sistem-Data-Kepegawaian-5307763447b941ab82bbab2b88c7945e" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  UX Case Study: Personnel Data System ↗
                </a>
                <a href="https://alifnm.notion.site/Studi-Kasus-UX-Sistem-Penggajian-c5a4c2ccc67841f3a699a60ceaf3bd7d" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  UX Case Study: Payroll Management System ↗
                </a>
              </div>
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Institutional Impact</h3>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">100%</span>
                <span class="desc">In-House Real-Time Data Sovereignty</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">2-Role</span>
                <span class="desc">Segregation (Employee vs. HRD Admin)</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">0 Delay</span>
                <span class="desc">Elimination of Third-Party Batch Syncing</span>
              </div>
            </div>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 5. ANIWATCH
  // --------------------------------------------------------------------------
  {
    id: "aniwatch",
    category: "concept",
    title: "AniWatch — Mobile Anime Streaming Concept",
    excerpt: "Mobile anime streaming concept exploring streamlined content discovery, ergonomic one-handed thumb navigation, and a focused dark aesthetic.",
    year: "2022",
    badgeTag: "Mobile App / Concept",
    badgeMetric: "One-Handed Ergonomics",
    metaTags: ["Concept Study", "Dark Mode & IA"],
    image: "assets/images/aniwatch/aniwatch.png",
    duration: "⏱ May 2022",
    caseStudy: {
      tag: "Concept Exploration · Mobile UI · May 2022",
      title: "AniWatch — Mobile Anime Streaming Concept",
      image: "assets/images/aniwatch/aniwatch.png",
      meta: {
        client: "Personal UI Practice",
        timeline: "May 2022",
        role: "UI/UX Designer",
        tools: "Figma, Interactive Prototyping"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Overview</h3>
            <p>
              AniWatch is a mobile streaming concept focused on ergonomic one-handed thumb navigation, clean dark UI, and intuitive episode binge-watching transitions.
            </p>
            <div class="cs-image-box">
              <img src="assets/images/aniwatch/aniwatch.png" alt="Aniwatch Concept Screens">
            </div>
            <div class="prototype-embed-box">
              <div class="embed-badge">⚡ Interactive Figma Prototype</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Experience the interactive AniWatch mobile streaming prototype directly in Figma:
              </p>
              <a href="https://www.figma.com/proto/DdCaHKNZ3N24004SshT1X2/Aniwatch-Andro?page-id=0%3A1&node-id=2-2&viewport=241%2C48%2C0.36&scaling=scale-down&starting-point-node-id=49%3A112" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open Figma Prototype — AniWatch ↗
              </a>
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Usability Focus</h3>
            <p>
              Most video streaming apps place filter and episode controls at the top of the display, leading to uncomfortable grip adjustments on tall mobile devices.
            </p>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Thumb-Zone Centric Navigation</h3>
            <p>
              Shifted key playback controls, seasonal filters, and watchlist toggles into the lower 40% of the screen with smooth spring animations.
            </p>
            <div class="prototype-embed-box">
              <div class="embed-badge">⚡ Interactive Figma Prototype</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Explore thumb-zone navigation flows and ergonomic interaction models on Figma:
              </p>
              <a href="https://www.figma.com/proto/DdCaHKNZ3N24004SshT1X2/Aniwatch-Andro?page-id=0%3A1&node-id=2-2&viewport=241%2C48%2C0.36&scaling=scale-down&starting-point-node-id=49%3A112" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open Figma Prototype — AniWatch ↗
              </a>
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Outcome</h3>
            <p>
              Demonstrated mastery in Figma components, micro-interactions, and component-level mobile design tokens.
            </p>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 6. PEGADAIAN SYARIAH DIGITAL
  // --------------------------------------------------------------------------
  {
    id: "pegadaian",
    category: "concept",
    title: "Pegadaian Syariah Digital — Sharia Pawn & Gold Savings",
    excerpt: "Mobile UX redesign modernizing sharia micro-financing and gold investment journeys for younger demographics with interactive collateral valuation tools.",
    year: "2022",
    badgeTag: "Mobile App / Fintech",
    badgeMetric: "1-Tap Gold Portfolio",
    metaTags: ["UX Redesign Exploration", "Islamic Micro-Fintech"],
    image: "assets/images/pegadaian/pegadaian.png",
    duration: "⏱ Mar – Apr 2022",
    caseStudy: {
      tag: "Fintech & Mobile App Redesign · 2022",
      title: "Pegadaian Syariah Digital — Sharia Pawn & Investment App Redesign",
      image: "assets/images/pegadaian/pegadaian.png",
      meta: {
        client: "Independent UX Redesign Study",
        timeline: "Mobile UX Exploration",
        role: "Solo UI/UX Designer",
        tools: "Figma, Mobile Design System, Prototyping"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Project Summary</h3>
            <p>
              <strong>Pegadaian Syariah Digital</strong> is a comprehensive mobile app redesign exploration aimed at modernizing sharia-compliant micro-financing, gold savings (*Tabungan Emas*), and pawning estimation services for younger demographics in Indonesia.
            </p>
            <div class="cs-highlight-box">
              <p><strong>Design Challenge:</strong> Traditional pawn services are often perceived as intimidating and bureaucratic. The goal was to transform complex Islamic financing terms (Rahn, Amanah, Mulia) into intuitive, transparent digital transactions.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/pegadaian/pegadaian.png" alt="Pegadaian Syariah Digital Showcase">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Cognitive Friction &amp; Usability Hurdles</h3>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Heavy Cognitive Load:</strong> Jargon-dense menus and cluttered dashboards overwhelmed first-time users looking to open gold savings accounts.</li>
              <li><strong>Obscure Value Estimation:</strong> Estimating the loan value of collateral required tedious manual input without clear real-time fee breakdowns.</li>
            </ul>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Simplified Financial Journey</h3>
            <p>
              Re-architected the mobile interface with a modern card-based hierarchy and interactive gold calculators:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Instant Collateral Estimator:</strong> Designed a visual slider-based collateral valuation tool providing upfront tariff clarity before initiating loan requests.</li>
              <li><strong>Clean Gold Portfolio Card:</strong> Prominent dashboard card highlighting live gold buy/sell market prices with 1-tap top-up actions.</li>
            </ul>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Anticipated Impact</h3>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">Low Friction</span>
                <span class="desc">Simplified Sharia Micro-Financing Terms</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">1-Tap</span>
                <span class="desc">Gold Price Tracking &amp; Investment Top-Up</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">Fintech UX</span>
                <span class="desc">Modern Aesthetic for Next-Gen Users</span>
              </div>
            </div>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 7. KPRI UNEJ
  // --------------------------------------------------------------------------
  {
    id: "kpri",
    category: "ecommerce",
    title: "KPRI UNEJ — E-Commerce & Savings/Loan Cooperative",
    excerpt: "B2C e-commerce and savings & loan cooperative system platform for KPRI UNEJ, designed to streamline member purchasing and cooperative financial management.",
    year: "2021 – 2022",
    badgeTag: "B2C & Cooperative",
    badgeMetric: "Simpan Pinjam & Shop",
    metaTags: ["KPRI UNEJ", "UI/UX & Prototyping"],
    image: "assets/images/kpri/kpri.png",
    duration: "⏱ Jul 2021 – Jan 2022",
    caseStudy: {
      tag: "Client · E-Commerce & Finance · 2021 – 2022",
      title: "KPRI UNEJ — E-Commerce & Savings/Loan Cooperative",
      image: "assets/images/kpri/kpri.png",
      meta: {
        client: "Koperasi Pegawai Republik Indonesia (KPRI) UNEJ",
        timeline: "Jul 2021 – Jan 2022",
        role: "Project Manager & UI/UX Designer",
        tools: "Figma, Prototyping, User Research, Miro"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              KPRI Universitas Jember is an established civil servant cooperative serving thousands of university employees. This project focused on building an integrated digital platform combining retail grocery e-commerce with member savings &amp; loan (*Simpan Pinjam*) services.
            </p>
            <div class="cs-image-box">
              <img src="assets/images/kpri/kpri.png" alt="KPRI UNEJ Case Study Showcase">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>User Needs &amp; Challenges</h3>
            <p>
              Cooperative members previously had to visit the physical cooperative office to check account balances, submit loan requests, and buy wholesale household goods.
            </p>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Dual-Faceted System Design</h3>
            <p>
              Designed a streamlined B2C mobile-first storefront for daily goods and grocery orders with cooperative payroll-deduction payment methods, alongside an interactive loan eligibility calculator.
            </p>
            <div class="prototype-embed-box">
              <a href="https://alifnm.notion.site/Studi-Kasus-UX-Ecommerce-KPRI-UNEJ-0440ae62949f4872beb1c20f852860a4" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Read Complete Notion Case Study ↗
              </a>
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Outcome</h3>
            <p>
              Eliminated manual paper queue times for loan submissions and simplified routine commodity transactions for university employees.
            </p>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 8. SIMLITABMAS RESTITUSI (DRPM)
  // --------------------------------------------------------------------------
  {
    id: "simlitabmas",
    category: "enterprise",
    title: "Simlitabmas — National Research Audit & Grant Restitution System",
    excerpt: "Rapid UX wireframing sprint defining the audit compliance and grant restitution portal for Ditjen Diktiristek, delivering Balsamiq structural blueprints handed off to the UI design team.",
    year: "2021",
    badgeTag: "GovTech / Web",
    badgeMetric: "Rapid Wireframing",
    metaTags: ["Rapid UX Sprint", "Balsamiq Wireframing", "UI Team Handoff"],
    image: "assets/images/simlitabmas/simlitabmas.png",
    duration: "⏱ Sep 2021",
    caseStudy: {
      tag: "Rapid UX Wireframing Sprint · 2021",
      title: "Simlitabmas — National Higher Education Research Audit & Grant Restitution System",
      image: "assets/images/simlitabmas/simlitabmas.png",
      meta: {
        client: "Kemendikbud-Ristek / Ditjen Diktiristek (DRPM)",
        timeline: "Sep 2021 (Rapid Sprint)",
        role: "UX Wireframing Specialist · Rapid Sprint (Handoff to UI Design Team)",
        tools: "Balsamiq Mockups, Rapid Wireframing, Information Architecture, Workflow Mapping"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              <strong>Simlitabmas</strong> (Sistem Informasi Manajemen Penelitian dan Pengabdian kepada Masyarakat) is the flagship national governance portal operated by the Directorate General of Higher Education, Research, and Technology (Ditjen Diktiristek, Kemendikbud-Ristek) managing competitive research grants across Indonesian universities.
            </p>
            <p>
              This project was conducted as a <strong>high-velocity, rapid UX sprint</strong> specifically focused on the <strong>Audit Follow-Up &amp; Grant Restitution Subsystem</strong> (<em>Modul Tindak Lanjut Temuan Pemeriksaan BPK, Evaluasi Inspektorat Jenderal, dan Pengembalian Dana Penelitian</em>). The platform digitizes the resolution of formal audit citations from the Supreme Audit Agency (BPK) and Inspectorate General (Irjen), governing compliance, financial restitution, and Non-Tax State Revenue (PNBP) e-billing.
            </p>
            <div class="cs-highlight-box">
              <p><strong>My Role &amp; Project Scope:</strong> In this rapid sprint, my core responsibility was rapid UX wireframing and information architecture using Balsamiq Mockups. I translated complex bureaucratic audit regulations into intuitive low-fidelity screen layouts, user flows, and interaction models, which were subsequently handed off to a secondary UI design team for high-fidelity visual design and component styling.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/simlitabmas/simlitabmas.png" alt="Central Research Grant Restitution &amp; Audit Finding Registry — Simlitabmas DRPM Admin View">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">The Multi-Stakeholder Governance Ecosystem</h4>
            <p>
              The wireframing sprint mapped and structured journeys across four vital actors in the audit resolution lifecycle:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>DRPM Central Operators (Kemendikbud-Ristek):</strong> Ingest official Audit Inspection Reports (LHP BPK &amp; Evaluasi Irjen), link findings to specific grant contracts, issue SIMPONI payment billing codes, and verify state deposit receipts (BPN).</li>
              <li><strong>University LPPM Administrators:</strong> Oversee institutional audit notices across campus faculty, monitor restitution deadlines, and coordinate institutional compliance with national auditors.</li>
              <li><strong>Principal Investigators (Faculty Lecturers / Peneliti):</strong> Access authenticated self-service dashboards to inspect specific audit notes, calculate repayment obligations, request billing codes, and submit verified proof of treasury restitution.</li>
              <li><strong>Ministry of Finance (Kemenkeu SIMPONI):</strong> Facilitates direct non-tax state revenue collection through standardized 16-digit e-billing codes and automated settlement confirmation.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/simlitabmas/simlitabmas_lph_bpk.png" alt="Official Audit Finding Decree Matrix (LPH BPK &amp; Evaluasi Inspektorat Jenderal)">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Sprint Challenge &amp; Operational Bottlenecks</h3>
            <p>
              With urgent institutional audit compliance deadlines, DRPM needed a rapid translation of dense regulatory requirements into clear digital screen structures without getting slowed down by premature visual styling:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Translating Complex Audit Decrees Rapidly:</strong> Official audit reports from BPK and Irjen contained dense legal classifications (expenditure exceeding output budget standards / SBK, unsubmitted deliverables, and cancelled projects) that needed immediate structuring into actionable database form schemas.</li>
              <li><strong>Addressing Opaque Faculty Communication:</strong> University researchers previously had no direct digital channel to review audit citations, resulting in overdue restitution and automated disqualification from subsequent grant funding cycles.</li>
              <li><strong>Designing Complex Treasury Restitution Flows:</strong> Returning grant funds into the state treasury required generating individual Non-Tax State Revenue (PNBP) billing codes via Kemenkeu's SIMPONI system. The flow required clear visual distinction between billing issuance, payment grace periods, and final settlement.</li>
              <li><strong>Tight Sprint Turnaround:</strong> The UX team had a narrow window to research edge cases, define information architecture, and deliver complete wireframe blueprints so the downstream UI design and engineering teams could meet tight delivery deadlines.</li>
            </ul>
            <div class="cs-highlight-box">
              <p><strong>Primary Sprint Goal:</strong> Rapidly conceptualize and validate comprehensive low-fidelity wireframes that eliminate ambiguity for both stakeholders and the incoming UI design team.</p>
            </div>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Rapid Wireframing &amp; UI Team Handoff</h3>
            <p>
              Focusing strictly on information architecture, interaction flow, and data hierarchy, I utilized Balsamiq Mockups to rapidly produce 11 low-fidelity wireframes that clearly defined layouts, form fields, and modal behaviors:
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 24px 0 12px; color: var(--text-primary);">1. Central Audit Ingestion &amp; Contract Linkage Registry</h4>
            <p>
              Wireframed the central administrative interface allowing DRPM operators to log official Audit Inspection Letters (Surat LHP BPK &amp; Hasil Evaluasi Irjen), assign finding categories, and link findings directly to research contract years and Principal Investigator NIDNs:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/simlitabmas/simlitabmas.png" alt="Central Research Grant Restitution &amp; Audit Finding Registry — DRPM Admin View">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">2. Faculty Researcher Self-Service Finding Inspection</h4>
            <p>
              Designed a clear, distraction-free researcher portal layout (<em>Daftar Temuan Pelaksanaan Kegiatan</em>). Faculty members can review exact audit findings, budget allocations, mandatory restitution amounts, and remaining balance at a glance, with a prominent "Pengembalian Dana" action trigger:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/simlitabmas/simlitabmas_dosen_portal.png" alt="Faculty Researcher Portal: Audit Finding Inspection &amp; Restitution Trigger">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">3. Interactive Grant Restitution Submission Flow</h4>
            <p>
              Created an intuitive modal submission flow enabling researchers to declare repayment amounts, input official reference correspondence, and trigger automated e-billing code generation without cumbersome administrative overhead:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/simlitabmas/simlitabmas_pengembalian_modal.png" alt="Interactive Grant Restitution Submission &amp; Nominal Repayment Modal">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">4. SIMPONI PNBP E-Billing Code Tracking &amp; Settlement</h4>
            <p>
              Structured a standardized e-billing tracking matrix (<em>Daftar Nomor Billing Pembayaran</em>) monitoring 16-digit state revenue billing numbers, issue dates, total repayment values, and real-time settlement status until liabilities reach Rp 0:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/simlitabmas/simlitabmas_billing_pnbp.png" alt="SIMPONI PNBP E-Billing Code Tracking &amp; Payment Settlement Pipeline">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">5. Design Handoff to UI Team</h4>
            <p>
              Upon completing and reviewing the low-fidelity blueprints with stakeholders, all Balsamiq wireframes, data annotations, and component interaction states were packaged and handed off to the secondary UI design team. This enabled them to seamlessly apply the design system, color palettes, and high-fidelity typography without questioning functional requirements or layout logic.
            </p>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Sprint Outcomes &amp; Team Collaboration</h3>
            <p>
              The rapid wireframing engagement delivered clear, validated blueprints on an aggressive timeline, serving as the essential foundation for subsequent UI creation and frontend development:
            </p>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">Rapid</span>
                <span class="desc">High-Velocity Wireframing Turnaround</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">11 Screens</span>
                <span class="desc">Complete Low-Fi Layouts &amp; Form Flows</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">100%</span>
                <span class="desc">Seamless Handoff to UI Design Team</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">4-Role</span>
                <span class="desc">Clear Interaction Models for All Stakeholders</span>
              </div>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">Key Sprint Deliverables</h4>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>11 Balsamiq Mockup Specifications:</strong> End-to-end responsive desktop wireframes covering DRPM admin monitoring, audit letter registries, researcher self-service dashboards, and billing verification.</li>
              <li><strong>Interaction &amp; State Blueprints:</strong> Clear annotations of button states, modal behaviors, input validation rules, and table filters.</li>
              <li><strong>Frictionless UI Team Handoff:</strong> Well-documented architectural layouts that empowered the UI design team to immediately proceed with high-fidelity visual styling and component design.</li>
              <li><strong>Standardized Audit Data Structures:</strong> Structured schemas categorizing BPK/Irjen audit citations into actionable remediation pathways.</li>
            </ul>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 9. RSRD KORLANTAS POLRI
  // --------------------------------------------------------------------------
  {
    id: "rsrd",
    category: "govtech",
    title: "RSRD Korlantas Polri — Traffic Safety Research & Governance Portal",
    excerpt: "National traffic safety research portal, regional partnership action (RSPA), and public service evaluation (KUP3) for Korlantas Polri, designed through UX wireframing, comprehensive BRD, operational manuals, and hands-on user training.",
    year: "2021",
    badgeTag: "GovTech & UX",
    badgeMetric: "UX, BRD & Training",
    metaTags: ["Korlantas Polri", "UX & Wireframing", "User Training"],
    image: "assets/images/rsrd/rsrd_korlantas.png",
    duration: "⏱ Apr – Aug 2021",
    caseStudy: {
      tag: "GovTech & Traffic Safety · Korlantas Polri · 2021",
      title: "RSRD Korlantas Polri — Traffic Safety Research & Governance Portal",
      image: "assets/images/rsrd/rsrd_korlantas.png",
      meta: {
        client: "Korlantas Polri & Universitas Jember (TARC Initiative)",
        timeline: "Apr – Aug 2021",
        role: "UX Designer & Technical Writer",
        tools: "Balsamiq, Figma, User Manuals"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              <strong>RSRD (Road Safety Research and Development)</strong> is a national-scale traffic safety governance platform developed under the <strong>Traffic Accident Research Center (TARC)</strong> framework by Korlantas Polri in collaboration with Universitas Jember. The platform connects law enforcement officers, academic researchers, and regional police commands across Indonesia.
            </p>
            <div class="cs-highlight-box">
              <p><strong>The Core UX, Documentation &amp; Training Scope:</strong> Structuring three disparate traffic safety platforms—<strong>RSRD</strong> (research repository), <strong>RSPA</strong> (stakeholder partnership action), and <strong>KUP3</strong> (public service appraisal)—into an intuitive multi-portal journey with unified login navigation, detailed Business Requirements (BRD), step-by-step user operational manuals, and conducting hands-on user training to onboard regional personnel.</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/rsrd/rsrd_sso_portal.png" alt="TARC Unified Login Gateway &amp; Multi-Portal Navigation UX">
            </div>
            <div class="prototype-embed-box">
              <div class="embed-badge">⚡ Interactive Figma Prototype</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Explore the interactive prototype developed for the Korlantas Polri TARC &amp; RSRD portal:
              </p>
              <a href="https://www.figma.com/proto/7wzgLgEov9fUXq9ZWANNr2/tarc?node-id=3-2&p=f&t=qr3PR451pQgINKFn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open Figma Prototype — Korlantas TARC ↗
              </a>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">The Triad System Ecosystem</h4>
            <p>
              The project interconnected three vital operational systems of Korlantas Polri under a unified user experience:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>RSRD (Road Safety Research &amp; Development):</strong> Scientific knowledge hub featuring research journals, webinars, workshops, video archives, and inter-personnel academic discussion forums.</li>
              <li><strong>RSPA (Road Safety Partnership Action):</strong> Inter-agency collaboration framework monitoring the 5 strategic pillars of the National General Plan for Road Safety (RUNK), conducting evaluations across 34 Polda and hundreds of Polres units.</li>
              <li><strong>KUP3 (Kinerja Unit Penyelenggara Pelayanan Publik):</strong> Public service performance evaluation system for traffic compliance zones (Kawasan Tertib Lalu Lintas) and public service licensing centers (SIM, STNK, BPKB).</li>
              <li><strong>TARC Unified Login Gateway:</strong> Streamlined authentication entry point harmonizing credentials across all modules, paired with executive dashboards synthesizing nationwide safety indices.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/rsrd/rsrd_rspa_portal.png" alt="Road Safety Partnership Action (RSPA) Public Portal &amp; Strategic Initiative">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>Operational Bottlenecks &amp; System Silos</h3>
            <p>
              Prior to this research and modernization initiative, Korlantas Polri faced severe workflow friction managing traffic safety research and regional compliance programs across Indonesia:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Fragmented Identity &amp; Login Confusion:</strong> Officers and assessors were forced to navigate separate websites, credentials, and access levels for RSRD, KUP3, and RSPA, causing frequent login failures and duplicated user records.</li>
              <li><strong>Multi-Tier Approval Friction:</strong> Regional evaluations required strict hierarchical governance (Polres submits &rarr; Polda validates &rarr; Content Admin reviews &rarr; Central Korlantas approves), which suffered from manual tracking bottlenecks and unstandardized submission formats.</li>
              <li><strong>Desktop-Only Inaccessibility in the Field:</strong> Assessors conducting on-site inspections at service centers or traffic compliance zones could not effectively access desktop-only portal layouts on mobile browsers.</li>
              <li><strong>Lack of Formal BRD &amp; Structured Training:</strong> Assessors across 34 provincial Polda units and hundreds of Polres lacked standardized user guides (*Buku Panduan*) and direct training sessions, leading to operational friction and inconsistent evaluation entries.</li>
            </ul>
            <div class="cs-highlight-box">
              <p><strong>Primary Problem Statement:</strong> How might we design an intuitive, unified navigation experience across national traffic safety platforms, backed by a comprehensive BRD, step-by-step user manuals, and hands-on training for police personnel nationwide?</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/rsrd/rsrd_approval_flow.png" alt="Multi-Tier Content &amp; Evaluation Approval Workflow: Polres to Polda to Central Korlantas">
            </div>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>UX Wireframing, BRD Specification &amp; User Training</h3>
            <p>
              Working within the collaborative TARC research team alongside academic researchers from Universitas Jember and Korlantas Polri Ditkamsel officers, I led the user experience design, wireframing, requirement documentation, and hands-on system instruction:
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 24px 0 12px; color: var(--text-primary);">1. Unified Login Journey &amp; Navigation UX</h4>
            <p>
              Designed an intuitive, modal-based login interface. Officers authenticate once and navigate seamlessly between RSRD, KUP3, and RSPA based on their authorized role permissions, eliminating login confusion and redundant account switching:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/rsrd/rsrd_sso_wireframe.jpg" alt="TARC Unified Login Gateway Modal Flow &amp; System Interconnection Wireframe">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">2. Knowledge &amp; Research Portal Wireframing (Balsamiq)</h4>
            <p>
              Drafted comprehensive Balsamiq wireframes for the TARC knowledge platform, structuring academic publication repositories, workshop schedules, video archives, and notification streams with badge counters:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/rsrd/tarc_portal_wireframe.jpg" alt="TARC Traffic Accident Research Center Web Portal Layout Wireframe">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">3. Nationwide Regional Evaluation Matrix (RSPA &amp; KUP3)</h4>
            <p>
              Formulated clean, standardized assessment tables and rubric scoring views covering 34 provincial Polda commands. Administrators can assign certified assessors, review submitted evidence, and inspect Polres performance ratings with clear status indicators:
            </p>
            <div class="cs-image-box">
              <img src="assets/images/rsrd/rsrd_rspa_assessment.png" alt="RSPA Nationwide Regional Evaluation Grid across 34 Polda">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">4. Authoring the Business Requirements Document (BRD)</h4>
            <p>
              Authored the complete, detailed Business Requirements Document (BRD) governing RSRD, RSPA, and KUP3. The BRD codified user personas, functional requirement matrices, role-based access rules (Polres, Polda, Korlantas, Researcher), data dictionary, and system validation rules, establishing a single source of truth for the software development team.
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">5. Comprehensive User Manuals &amp; Hands-On System Training</h4>
            <p>
              Authored end-to-end operational user manual guides (*Buku Panduan Penggunaan Sistem*) complete with illustrated step-by-step walkthroughs, role-specific checklists, and troubleshooting procedures. In addition, I actively conducted hands-on training sessions to teach police personnel and regional evaluators how to navigate the portal, manage evaluations, and operate the system confidently.
            </p>
            <div class="prototype-embed-box" style="margin-top: 24px;">
              <div class="embed-badge">⚡ Interactive Figma Prototype</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Experience the interactive TARC &amp; RSRD portal workflows directly in Figma:
              </p>
              <a href="https://www.figma.com/proto/7wzgLgEov9fUXq9ZWANNr2/tarc?node-id=3-2&p=f&t=qr3PR451pQgINKFn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open Figma Prototype — Korlantas TARC ↗
              </a>
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Institutional Modernization &amp; Impact</h3>
            <p>
              The project was successfully delivered as formal research findings, wireframes, technical requirement specifications (BRD), and official training manuals to Korps Lalu Lintas Kepolisian Negara Republik Indonesia (Korlantas Polri):
            </p>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <span class="num">3 Portals</span>
                <span class="desc">Unified UX for RSRD, KUP3 &amp; RSPA</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">34 Polda</span>
                <span class="desc">Standardized Evaluation Pipeline Nationwide</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">Complete BRD</span>
                <span class="desc">Full Functional Requirements &amp; Data Logic</span>
              </div>
              <div class="cs-metric-card">
                <span class="num">Hands-On</span>
                <span class="desc">Direct User Training &amp; Operational Guides</span>
              </div>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">Key Project Deliverables</h4>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Comprehensive Balsamiq Wireframe Systems:</strong> Complete desktop and mobile-responsive wireframe layouts for research repositories, partnership action plans, and public service evaluation rubrics.</li>
              <li><strong>Official Business Requirements Document (BRD):</strong> Comprehensive functional specifications, permission matrices, validation rules, and acceptance criteria.</li>
              <li><strong>Operational User Manuals &amp; User Training:</strong> Illustrated step-by-step training manuals and direct instruction sessions, successfully instructing and onboarding police personnel and regional evaluators.</li>
              <li><strong>Interactive Figma Prototype:</strong> Validated high-fidelity interactive flow demonstrating the unified TARC and RSRD portal experience.</li>
            </ul>
          </div>
        `
      }
    }
  },

  // --------------------------------------------------------------------------
  // 10. COVIDCARE UNEJ
  // --------------------------------------------------------------------------
  {
    id: "covidcare",
    category: "govtech",
    title: "Covidcare UNEJ — Campus Covid-19 Monitoring Platform",
    excerpt: "Participatory design website for monitoring the spread of Covid-19 and distributing health information to the Universitas Jember academic community.",
    year: "2021",
    badgeTag: "Participatory Design",
    badgeMetric: "Campus Monitoring",
    metaTags: ["Universitas Jember", "Healthcare & Public Data"],
    image: "assets/images/covidcare/covidcare.png",
    duration: "⏱ Feb – Jul 2021",
    caseStudy: {
      tag: "GovTech & Public Health · 2021",
      title: "Covidcare UNEJ — Campus Covid-19 Monitoring Platform",
      image: "assets/images/covidcare/covidcare.png",
      meta: {
        client: "Universitas Jember (UNEJ)",
        timeline: "Feb – Jul 2021",
        role: "UX Designer & Technical Writer",
        tools: "Balsamiq, Figma, Wireframing"
      },
      tabs: {
        overview: `
          <div class="cs-section">
            <h3>Executive Summary</h3>
            <p>
              <strong>Covidcare UNEJ</strong> is an integrated campus-wide pandemic response and health monitoring platform developed for the Universitas Jember academic community. The platform unites a public self-service health portal for students and faculty with a centralized surveillance and triage command hub for the Campus COVID-19 Taskforce &amp; Health Promotion Team (Promkes).
            </p>
            <div class="cs-highlight-box">
              <p><strong>Core UX &amp; Architecture Focus:</strong> Balancing fast, friction-free public health access (self-screening, offline activity permits, emergency contacts) with clinical-grade surveillance workflows (contact tracing triage, quarantine monitoring, and vaccination data exports).</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/covidcare/covidcare.png" alt="Covidcare UNEJ Public Portal &amp; Information Center">
            </div>
            <div class="prototype-embed-box">
              <div class="embed-badge">⚡ Interactive Figma Prototype</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Explore the interactive Covidcare UNEJ web prototype directly in Figma:
              </p>
              <a href="https://www.figma.com/proto/GkGO65age1mIOuct5k4gz5/covidcareunej?node-id=1002-588&p=f&viewport=871%2C827%2C0.04&t=TOEopKBFicdTWm4O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1002%3A588&page-id=0%3A1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open Figma Prototype — Covidcare UNEJ ↗
              </a>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">Two Distinct Functional Pillars</h4>
            <p>
              The system architecture separates civilian self-reporting from administrative triage to safeguard medical confidentiality and prevent cognitive overload:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Civitas Academic Portal:</strong> Self-screening wizard (Deteksi Dini), offline campus activity permit requests (for individuals &amp; student organizations), vaccination status lookups, real-time bed capacity at referral hospitals (RSUD dr. Soebandi &amp; RS Bina Sehat), emergency hotlines, and convalescent plasma donor registration.</li>
              <li><strong>Taskforce Command Center:</strong> Daily epidemiological curve charts per faculty, contact tracing classification engine (Close Contact, Casual Contact, Confirmed Case), multi-tier offline event approvals, and public health content CMS.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/covidcare/admin_dashboard.png" alt="Covidcare UNEJ Command Center &amp; Surveillance Dashboard">
            </div>
          </div>
        `,
        problem: `
          <div class="cs-section">
            <h3>The Urgency: Coordinating Campus Health Amid Chaos</h3>
            <p>
              In early 2021, Universitas Jember faced immense operational strain monitoring the health and mobility of over 30,000 students and staff across 15 faculties during rapidly shifting quarantine mandates. Critical pain points included:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Fragmented Channels &amp; Delayed Tracing:</strong> Infection reports were scattered across informal WhatsApp groups and disjointed spreadsheets, resulting in severe tracing latency for close contacts.</li>
              <li><strong>Paper-Based Offline Event Approvals:</strong> Essential laboratory sessions and student activities relied on physical paper forms, creating physical bottleneck queues and infection risks.</li>
              <li><strong>Medical Staff Cognitive Overload:</strong> Campus physicians and Promkes staff lacked a structured intake mechanism to differentiate between asymptomatic/mild cases needing home isolation and severe cases requiring urgent hospital admission.</li>
              <li><strong>Information Asymmetry &amp; Public Anxiety:</strong> Rumors and unverified updates generated campus panic regarding vaccine availability, swab testing schedules, and quarantine protocols.</li>
            </ul>
            <div class="cs-highlight-box">
              <p><strong>Primary Problem Statement:</strong> How might we design an empathetic, rapid self-reporting portal for campus members while equipping the medical taskforce with actionable, real-time epidemiological triage data?</p>
            </div>
            <div class="cs-image-box">
              <img src="assets/images/covidcare/deteksi_dini.png" alt="Student Self-Screening &amp; Early Detection Flow">
            </div>
          </div>
        `,
        solution: `
          <div class="cs-section">
            <h3>Participatory UX &amp; Systematic Triage</h3>
            <p>
              The solution was crafted through a <em>participatory design methodology</em>, partnering closely with UNEJ medical doctors, campus health promoters (Promkes), student affairs officers, and student representatives to co-design transparent, safe workflows.
            </p>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 24px 0 12px; color: var(--text-primary);">1. Automated Self-Screening &amp; Clinical Status Matrix</h4>
            <p>
              Implemented an adaptive symptom screening wizard that automatically triages users into 6 explicit, color-coded health status tiers:
            </p>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Normal / Negative:</strong> Preventive guidelines (5M protocols) and vaccination schedules.</li>
              <li><strong>Positive (Mild / Asymptomatic):</strong> Guided self-isolation protocol and automated isolation certificate generator.</li>
              <li><strong>Positive (Moderate / Severe):</strong> Instant one-tap dispatch to campus ambulance and emergency hospital referrals.</li>
              <li><strong>Close Contact &amp; Case Contact:</strong> Automated 14-day exposure logging with antigen/PCR testing instructions.</li>
            </ul>
            <div class="cs-image-box">
              <img src="assets/images/covidcare/status_matrix.png" alt="6-Tier Clinical Status Matrix &amp; Contact Tracing Wireframe">
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 28px 0 12px; color: var(--text-primary);">2. Digitized Offline Activity Permitting</h4>
            <p>
              Replaced physical bureaucratic paperwork with a transparent digital permit system. Event organizers (individuals, lab supervisors, or student organizations) submit digital session details, participant rosters, spatial room layout diagrams, and venue capacity limits for swift verification by Promkes prior to automated clearance generation.
            </p>
            <div class="cs-image-box">
              <img src="assets/images/covidcare/event_luring.png" alt="Offline Campus Activity Permitting Module">
            </div>
            <div class="prototype-embed-box" style="margin-top: 24px;">
              <div class="embed-badge">⚡ Interactive Figma Prototype</div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                Experience the end-to-end self-screening and offline permitting workflows in Figma:
              </p>
              <a href="https://www.figma.com/proto/GkGO65age1mIOuct5k4gz5/covidcareunej?node-id=1002-588&p=f&viewport=871%2C827%2C0.04&t=TOEopKBFicdTWm4O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1002%3A588&page-id=0%3A1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open Figma Prototype — Covidcare UNEJ ↗
              </a>
            </div>
          </div>
        `,
        impact: `
          <div class="cs-section">
            <h3>Public Health Outcomes &amp; System Impact</h3>
            <p>
              Covidcare UNEJ evolved from a static content repository into a mission-critical operational nerve center, actively mitigating viral outbreaks across the Universitas Jember academic community.
            </p>
            <div class="cs-metrics-grid">
              <div class="cs-metric-card">
                <div class="cs-metric-val">15</div>
                <div class="cs-metric-lbl">Faculties Unified Under 1 Command Hub</div>
              </div>
              <div class="cs-metric-card">
                <div class="cs-metric-val">100%</div>
                <div class="cs-metric-lbl">Paperless Activity Clearance &amp; Verification</div>
              </div>
              <div class="cs-metric-card">
                <div class="cs-metric-val">&lt; 24h</div>
                <div class="cs-metric-lbl">Close Contact Tracing Response Window</div>
              </div>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 24px 0 12px; color: var(--text-primary);">Design &amp; Organizational Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8; color: var(--text-secondary);">
              <li><strong>Alleviating Civic Anxiety:</strong> Transparent color-coded triage and self-care steps provided students with actionable certainty, drastically reducing emergency room crowding.</li>
              <li><strong>Measurable Protocol Compliance:</strong> Empowered university leadership to enforce strict physical room limits and reject events exceeding health quotas.</li>
              <li><strong>Standardized Epidemiological Data:</strong> Seamless data exports facilitated daily coordination with the Jember Regional Health Department and National COVID-19 Taskforce.</li>
            </ul>
          </div>
        `
      }
    }
  }
];

// Browser & Node module export compatibility
if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
