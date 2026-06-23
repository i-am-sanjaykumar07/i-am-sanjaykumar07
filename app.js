// ============================================================================
// GITHUB PORTFOLIO DATA STORES
// ============================================================================

const REPOSITORIES = [
    {
        name: "RainShield",
        description: "A QR-based smart umbrella rental platform combining web technologies with physical IoT device logic. Dynamic React dashboard.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 1,
        forks: 0,
        isFork: false,
        pinned: true,
        updatedAt: "2026-06-20",
        demoUrl: "https://rain-shield.vercel.app"
    },
    {
        name: "DSA-Bootcamp-Java",
        description: "This repository consists of the code samples, assignments, and notes for the Java data structures & algorithms + interview preparation bootcamp.",
        language: "Java",
        languageColor: "#b07219",
        stars: 0,
        forks: 0,
        isFork: true,
        forkSource: "kunal-kushwaha/DSA-Bootcamp-Java",
        pinned: true,
        updatedAt: "2026-05-10"
    },
    {
        name: "FSD_23BIS-1-A-_23BIS70018",
        description: "Full Stack Development university course work, incorporating node services, databases, and dynamic server routing structures.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        forks: 0,
        isFork: false,
        pinned: true,
        updatedAt: "2026-06-05"
    },
    {
        name: "URS",
        description: "Umbrella Rental System Core Backend & Embedded Simulator API. Managed state transactions and IoT device heartbeat logs.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        forks: 0,
        isFork: false,
        pinned: true,
        updatedAt: "2026-04-18"
    },
    {
        name: "ToDo_List",
        description: "Simple high-performance and responsive To-Do List manager utilizing modern browser localStorage APIs.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        forks: 0,
        isFork: false,
        pinned: true,
        updatedAt: "2026-02-12"
    },
    {
        name: "AI_Health_Chatbot",
        description: "An interactive healthcare recommendation engine built using Python, parsing user symptoms to recommend clinics.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 0,
        forks: 0,
        isFork: false,
        pinned: true,
        updatedAt: "2026-03-29"
    },
    {
        name: "placement_preparation",
        description: "Interview preparation codes, database queries, and standard system design templates. Heavy focus on OOP concepts and patterns.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        forks: 0,
        isFork: false,
        pinned: false,
        updatedAt: "2026-06-15"
    },
    {
        name: "neetcode-submissions",
        description: "Neetcode and Leetcode solution submissions for daily tracking. Highly optimized data structures and algorithms in C++.",
        language: "C++",
        languageColor: "#f34b7d",
        stars: 0,
        forks: 0,
        isFork: false,
        pinned: false,
        updatedAt: "2026-06-16"
    }
];

const STARRED_REPOS = [
    {
        owner: "kunal-kushwaha",
        name: "DSA-Bootcamp-Java",
        description: "This repository consists of the code samples, assignments, and notes for the Java data structures & algorithms.",
        language: "Java",
        languageColor: "#b07219",
        stars: 18500
    },
    {
        owner: "owasp",
        name: "OWASP-Top-10",
        description: "Official repository containing the draft content and final releases of the OWASP Top 10 documents.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 4200
    }
];

// ============================================================================
// CALENDAR & CONTRIBUTION DUMMY DATA GENERATOR
// ============================================================================

function generateContributionCalendar() {
    const calendarGrid = document.getElementById("calendar-grid-cells");
    if (!calendarGrid) return;
    
    // Clear existing cells
    calendarGrid.innerHTML = "";
    
    // We want to generate 53 columns of 7 days (371 days) ending on today (2026-06-23)
    const endDate = new Date(2026, 5, 23); // June 23, 2026
    const daysToShow = 371;
    
    // Calculate start date
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - daysToShow + 1);
    
    // Align start date to Sunday
    const startOffset = startDate.getDay();
    startDate.setDate(startDate.getDate() - startOffset);
    
    // Let's create an array of days to populate
    const daysArray = [];
    const totalDays = 371; // 53 weeks * 7 days
    
    let currentDate = new Date(startDate);
    
    for (let i = 0; i < totalDays; i++) {
        const dateStr = currentDate.toISOString().split('T')[0];
        
        // Generate contribution level based on date to mimic real active periods
        let level = 0;
        let count = 0;
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const dayOfMonth = currentDate.getDate();
        
        // Match specific dates user has active
        if (year === 2026 && month === 5) { // June 2026 (Active)
            if (dayOfMonth === 15) { // 19 commits placement_prep
                level = 4;
                count = 19;
            } else if (dayOfMonth === 16) { // 2 commits neetcode
                level = 1;
                count = 2;
            } else if (dayOfMonth >= 10 && dayOfMonth <= 20) {
                level = Math.floor(Math.random() * 3) + 1; // 1 to 3
                count = level * 2 - 1;
            } else if (Math.random() > 0.5) {
                level = Math.floor(Math.random() * 2) + 1; // 1 to 2
                count = level;
            }
        } else if (year === 2026 && month === 4) { // May 2026
            if (Math.random() > 0.6) {
                level = Math.floor(Math.random() * 3);
                count = level * 2;
            }
        } else if (year === 2025 && month >= 9) { // Late 2025 (Moderate activity)
            if (Math.random() > 0.7) {
                level = Math.floor(Math.random() * 3);
                count = level * 2;
            }
        } else {
            // General background activity to make up ~204 contributions
            const rand = Math.random();
            if (rand > 0.85) {
                level = Math.floor(Math.random() * 2) + 1;
                count = level;
            }
        }
        
        daysArray.push({
            date: dateStr,
            level: level,
            count: count
        });
        
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Add month labels
    const monthsLabels = document.getElementById("calendar-months-labels");
    if (monthsLabels) {
        monthsLabels.innerHTML = "";
        const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
        months.forEach(m => {
            const span = document.createElement("span");
            span.textContent = m;
            monthsLabels.appendChild(span);
        });
    }
    
    // Create elements in column-first order (weeks)
    // The calendar grid has grid-auto-flow: column
    daysArray.forEach(day => {
        const cell = document.createElement("div");
        cell.className = `cal-cell level-${day.level}`;
        
        let tooltipText = "";
        if (day.count === 0) {
            tooltipText = `No contributions on ${formatDate(day.date)}`;
        } else {
            tooltipText = `${day.count} contribution${day.count > 1 ? 's' : ''} on ${formatDate(day.date)}`;
        }
        cell.setAttribute("title", tooltipText);
        
        // Add interactive effect
        cell.addEventListener("click", () => {
            showCellDetail(day);
        });
        
        calendarGrid.appendChild(cell);
    });
}

function formatDate(dateString) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function showCellDetail(day) {
    const titleEl = document.getElementById("contributions-title");
    if (!titleEl) return;
    
    if (day.count === 0) {
        titleEl.textContent = `No contributions on ${formatDate(day.date)}`;
    } else {
        titleEl.textContent = `${day.count} contribution${day.count > 1 ? 's' : ''} on ${formatDate(day.date)}`;
    }
    
    // Revert back to total count after 3 seconds
    setTimeout(() => {
        titleEl.textContent = "204 contributions in the last year";
    }, 4000);
}

// ============================================================================
// DYNAMIC DOM RENDERING & INJECTION
// ============================================================================

function renderPinnedRepositories() {
    const container = document.getElementById("pinned-repos-container");
    if (!container) return;
    
    container.innerHTML = "";
    const pinned = REPOSITORIES.filter(r => r.pinned);
    
    pinned.forEach(repo => {
        const card = document.createElement("div");
        card.className = "pinned-card";
        
        const demoLinkHtml = repo.demoUrl 
            ? `<a href="${repo.demoUrl}" target="_blank" class="pinned-link" title="Live Demo"><i data-lucide="external-link"></i></a>`
            : '';
            
        card.innerHTML = `
            <div>
                <div class="pinned-card-header">
                    <div class="pinned-repo-title">
                        <i data-lucide="${repo.isFork ? 'git-fork' : 'folder'}" class="pinned-repo-icon"></i>
                        <a href="#repositories" data-tab-target="repositories" data-filter="${repo.name}">${repo.name}</a>
                        <span class="pinned-repo-badge">Public</span>
                    </div>
                </div>
                <p class="pinned-repo-desc">${repo.description}</p>
            </div>
            <div class="pinned-repo-footer">
                <div class="pinned-footer-left">
                    <span class="repo-lang">
                        <span class="lang-color" style="background-color: ${repo.languageColor};"></span>
                        <span>${repo.language}</span>
                    </span>
                    ${repo.stars > 0 ? `<span><i data-lucide="star" style="width: 12px; height: 12px; display: inline; vertical-align: middle; margin-right: 2px;"></i>${repo.stars}</span>` : ''}
                </div>
                <div class="pinned-footer-right">
                    ${demoLinkHtml}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    if (window.lucide) lucide.createIcons();
}

function renderRepositories(filterText = "", filterLanguage = "all", filterType = "all", sortVal = "updated") {
    const container = document.getElementById("repos-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    let filtered = REPOSITORIES.filter(repo => {
        const matchesSearch = repo.name.toLowerCase().includes(filterText.toLowerCase()) || 
                              repo.description.toLowerCase().includes(filterText.toLowerCase());
        
        const matchesLanguage = filterLanguage === "all" || 
                                repo.language.toLowerCase() === filterLanguage.toLowerCase();
                                
        const matchesType = filterType === "all" || 
                            (filterType === "public" && !repo.isFork) || 
                            (filterType === "fork" && repo.isFork);
                            
        return matchesSearch && matchesLanguage && matchesType;
    });
    
    // Sort
    filtered.sort((a, b) => {
        if (sortVal === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortVal === "stars") {
            return b.stars - a.stars;
        } else {
            // Default: updated
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        }
    });

    document.getElementById("repo-count-badge").textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--fg-muted);">
                <i data-lucide="search" style="width: 48px; height: 48px; margin-bottom: 12px;"></i>
                <p>No repositories match your search filters.</p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }
    
    filtered.forEach(repo => {
        const row = document.createElement("div");
        row.className = "repo-row";
        
        const forkInfo = repo.isFork 
            ? `<span style="font-size: 11px; color: var(--fg-muted); display: block; margin-top: -4px;">Forked from <a href="https://github.com/${repo.forkSource}" target="_blank">${repo.forkSource}</a></span>`
            : '';
            
        const demoLinkBtn = repo.demoUrl
            ? `<a href="${repo.demoUrl}" target="_blank" class="btn btn-sm"><i data-lucide="external-link"></i> Demo</a>`
            : '';
            
        row.innerHTML = `
            <div class="repo-row-left">
                <div class="repo-title-wrapper">
                    <a href="#" class="repo-name">${repo.name}</a>
                    <span class="repo-badge">Public</span>
                </div>
                ${forkInfo}
                <p class="repo-desc">${repo.description}</p>
                <div class="repo-meta">
                    <span class="repo-lang">
                        <span class="lang-color" style="background-color: ${repo.languageColor};"></span>
                        <span>${repo.language}</span>
                    </span>
                    ${repo.stars > 0 ? `<span><i data-lucide="star" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i> ${repo.stars}</span>` : ''}
                    <span>Updated ${timeAgo(repo.updatedAt)}</span>
                </div>
            </div>
            <div class="repo-row-right">
                <button class="btn btn-sm btn-star" data-repo="${repo.name}">
                    <i data-lucide="star"></i> Star
                </button>
                ${demoLinkBtn}
            </div>
        `;
        
        container.appendChild(row);
    });
    
    if (window.lucide) lucide.createIcons();
}

function renderStars() {
    const container = document.getElementById("stars-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    STARRED_REPOS.forEach(repo => {
        const row = document.createElement("div");
        row.className = "repo-row";
        
        row.innerHTML = `
            <div class="repo-row-left">
                <div class="repo-title-wrapper">
                    <a href="https://github.com/${repo.owner}/${repo.name}" target="_blank" class="repo-name">${repo.owner} / ${repo.name}</a>
                    <span class="repo-badge">Public</span>
                </div>
                <p class="repo-desc">${repo.description}</p>
                <div class="repo-meta">
                    <span class="repo-lang">
                        <span class="lang-color" style="background-color: ${repo.languageColor};"></span>
                        <span>${repo.language}</span>
                    </span>
                    <span><i data-lucide="star" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i> ${repo.stars.toLocaleString()}</span>
                </div>
            </div>
            <div class="repo-row-right">
                <button class="btn btn-sm active" style="color: var(--warning-fg); border-color: var(--accent-border);">
                    <i data-lucide="star" style="fill: var(--warning-fg);"></i> Starred
                </button>
            </div>
        `;
        
        container.appendChild(row);
    });
    
    if (window.lucide) lucide.createIcons();
}

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date("2026-06-23"); // Reference current system date
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return interval + " year" + (interval > 1 ? "s" : "") + " ago";
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + " month" + (interval > 1 ? "s" : "") + " ago";
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " day" + (interval > 1 ? "s" : "") + " ago";
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + " hour" + (interval > 1 ? "s" : "") + " ago";
    
    return "just now";
}

// ============================================================================
// NAVIGATION & CLIENT-SIDE ROUTING
// ============================================================================

function setupTabs() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");
    
    // Switch tabs on click
    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.getAttribute("data-tab");
            switchTab(tabId);
            
            // Update URL hash
            window.location.hash = tabId;
        });
    });
    
    // Handle triggers inside the page targeting a tab
    document.querySelectorAll("[data-tab-target]").forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            const targetTab = trigger.getAttribute("data-tab-target");
            switchTab(targetTab);
            window.location.hash = targetTab;
            
            // Optional filters
            const filterName = trigger.getAttribute("data-filter");
            if (filterName && targetTab === "repositories") {
                const searchInput = document.getElementById("repo-search");
                if (searchInput) {
                    searchInput.value = filterName;
                    renderRepositories(filterName);
                }
            }
        });
    });
}

function switchTab(tabId) {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");
    
    // Deactivate all
    tabLinks.forEach(l => {
        l.classList.remove("active");
        l.setAttribute("aria-selected", "false");
    });
    tabPanes.forEach(p => p.classList.remove("active"));
    
    // Activate targeted
    const activeLink = document.querySelector(`.tab-link[data-tab="${tabId}"]`);
    const activePane = document.getElementById(`${tabId}-pane`);
    
    if (activeLink && activePane) {
        activeLink.classList.add("active");
        activeLink.setAttribute("aria-selected", "true");
        activePane.classList.add("active");
    }
    
    // Scroll window back to top of main content
    if (window.innerWidth < 768) {
        document.querySelector(".main-layout").scrollIntoView();
    }
}

function checkUrlHash() {
    const hash = window.location.hash.replace("#", "");
    const validTabs = ["overview", "repositories", "projects", "stars", "resume"];
    if (validTabs.includes(hash)) {
        switchTab(hash);
    } else {
        switchTab("overview");
    }
}

// ============================================================================
// DRAG & DROP DRAGGING FUNCTIONALITY (Kanban Board)
// ============================================================================

function setupKanbanDragAndDrop() {
    const cards = document.querySelectorAll(".kanban-card");
    const containers = document.querySelectorAll(".kanban-cards-container");
    
    cards.forEach(card => {
        card.addEventListener("dragstart", () => {
            card.classList.add("dragging");
        });
        
        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
            updateKanbanCounters();
        });
    });
    
    containers.forEach(container => {
        container.addEventListener("dragover", (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggingCard = document.querySelector(".dragging");
            if (draggingCard) {
                if (afterElement == null) {
                    container.appendChild(draggingCard);
                } else {
                    container.insertBefore(draggingCard, afterElement);
                }
            }
        });
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".kanban-card:not(.dragging)")];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateKanbanCounters() {
    const todoCount = document.querySelectorAll('#col-todo .kanban-card').length;
    const progressCount = document.querySelectorAll('#col-inprogress .kanban-card').length;
    const doneCount = document.querySelectorAll('#col-done .kanban-card').length;
    
    document.getElementById("todo-count").textContent = todoCount;
    document.getElementById("progress-count").textContent = progressCount;
    document.getElementById("done-count").textContent = doneCount;
}

// ============================================================================
// THEME SWITCHER CONTROLS & STATE
// ============================================================================

function setupThemeCustomizer() {
    const toggle = document.getElementById("themeCustomizerToggle");
    const overlay = document.getElementById("themeDrawerOverlay");
    const drawer = document.getElementById("themeDrawer");
    const closeBtn = document.getElementById("themeDrawerClose");
    
    // Open drawer
    const openDrawer = () => {
        drawer.classList.add("active");
        overlay.classList.add("active");
    };
    
    // Close drawer
    const closeDrawer = () => {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    };
    
    toggle.addEventListener("click", openDrawer);
    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
    
    // Avatar menu trigger
    const avatarBtn = document.getElementById("avatarMenuBtn");
    if (avatarBtn) {
        avatarBtn.addEventListener("click", openDrawer);
    }
    
    // Theme options selection
    const options = document.querySelectorAll(".theme-option");
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            const targetTheme = opt.getAttribute("data-theme");
            
            // Remove previous active state
            options.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            
            // Set body class
            setTheme(targetTheme);
        });
    });
    
    // Load default or saved theme
    const savedTheme = localStorage.getItem("github-portfolio-theme") || "dark";
    setTheme(savedTheme);
    
    // Mark the correct option as active
    const savedOption = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
    if (savedOption) {
        options.forEach(o => o.classList.remove("active"));
        savedOption.classList.add("active");
    }
}

function setTheme(themeName) {
    // Remove all theme classes from body
    document.body.className = "";
    document.body.classList.add(`theme-${themeName}`);
    
    // Save to local storage
    localStorage.setItem("github-portfolio-theme", themeName);
}

// ============================================================================
// CLOCK & SEARCH UTILS
// ============================================================================

function setupClock() {
    const timeEl = document.getElementById("local-time");
    if (!timeEl) return;
    
    const updateClock = () => {
        // Calculate UTC+05:30 time (Piduguralla, India)
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const indiaTime = new Date(utc + (3600000 * 5.5));
        
        let hours = indiaTime.getHours();
        let minutes = indiaTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        
        const strTime = hours + ':' + minutes + ' ' + ampm;
        timeEl.textContent = `${strTime} (UTC +05:30)`;
    };
    
    updateClock();
    setInterval(updateClock, 30000); // Update every 30 seconds
}

function setupSearch() {
    // Global Search focus trigger '/'
    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
            const globSearch = document.getElementById("global-search");
            if (globSearch) globSearch.focus();
        }
    });

    const globalSearch = document.getElementById("global-search");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query === "") return;
            
            // Auto switch to repo tab if searching and filter
            switchTab("repositories");
            const repoSearch = document.getElementById("repo-search");
            if (repoSearch) {
                repoSearch.value = query;
                renderRepositories(query);
            }
        });
    }

    // Repository search input filters list
    const repoSearch = document.getElementById("repo-search");
    if (repoSearch) {
        repoSearch.addEventListener("input", filterAndRenderRepos);
    }
    
    const filterType = document.getElementById("filter-type");
    if (filterType) {
        filterType.addEventListener("change", filterAndRenderRepos);
    }
    
    const filterLang = document.getElementById("filter-language");
    if (filterLang) {
        filterLang.addEventListener("change", filterAndRenderRepos);
    }
    
    const sortOrder = document.getElementById("sort-order");
    if (sortOrder) {
        sortOrder.addEventListener("change", filterAndRenderRepos);
    }
}

function filterAndRenderRepos() {
    const text = document.getElementById("repo-search").value;
    const type = document.getElementById("filter-type").value;
    const lang = document.getElementById("filter-language").value;
    const sort = document.getElementById("sort-order").value;
    
    renderRepositories(text, lang, type, sort);
}

// Custom mock action for following
function setupFollowButton() {
    const followBtn = document.getElementById("btn-follow");
    if (!followBtn) return;
    
    let isFollowing = false;
    followBtn.addEventListener("click", () => {
        isFollowing = !isFollowing;
        if (isFollowing) {
            followBtn.textContent = "Unfollow";
            followBtn.classList.add("active");
            // Increment followers count
            document.querySelector(".stats-count").textContent = "2";
        } else {
            followBtn.textContent = "Follow";
            followBtn.classList.remove("active");
            document.querySelector(".stats-count").textContent = "1";
        }
    });
}

// Custom mock new repo insertion
function setupNewRepoButton() {
    const btn = document.getElementById("btn-new-repo");
    if (!btn) return;
    
    btn.addEventListener("click", () => {
        const repoName = prompt("Enter new repository name:", "security-scanner-proto");
        if (!repoName) return;
        
        const description = prompt("Enter repository description:", "A mock proof-of-concept vulnerability scanner using python and web sockets.");
        const language = prompt("Enter repository language (JavaScript, Python, C++, Java):", "Python");
        
        let languageColor = "#3572A5";
        if (language.toLowerCase() === "javascript") languageColor = "#f1e05a";
        else if (language.toLowerCase() === "c++") languageColor = "#f34b7d";
        else if (language.toLowerCase() === "java") languageColor = "#b07219";
        
        const newRepo = {
            name: repoName,
            description: description || "No description provided.",
            language: language || "Python",
            languageColor: languageColor,
            stars: 0,
            forks: 0,
            isFork: false,
            pinned: false,
            updatedAt: new Date().toISOString().split('T')[0]
        };
        
        REPOSITORIES.unshift(newRepo);
        renderRepositories();
        alert(`Successfully initialized blank repository: ${repoName}`);
    });
}

// Star repo interaction
function setupStarHandlers() {
    document.addEventListener("click", (e) => {
        const starBtn = e.target.closest(".btn-star");
        if (!starBtn) return;
        
        const repoName = starBtn.getAttribute("data-repo");
        const repo = REPOSITORIES.find(r => r.name === repoName);
        if (!repo) return;
        
        const isStarred = starBtn.classList.contains("active");
        if (isStarred) {
            starBtn.classList.remove("active");
            starBtn.innerHTML = '<i data-lucide="star"></i> Star';
            repo.stars = Math.max(0, repo.stars - 1);
        } else {
            starBtn.classList.add("active");
            starBtn.innerHTML = '<i data-lucide="star" style="fill: var(--warning-fg);"></i> Starred';
            repo.stars += 1;
        }
        
        // Re-render pins & repos
        renderPinnedRepositories();
        filterAndRenderRepos();
        if (window.lucide) lucide.createIcons();
    });
}

// ============================================================================
// APP ENTRY POINT INITIALIZER
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Theme Manager (Load saved theme first to prevent flash)
    setupThemeCustomizer();
    
    // 2. Render content layers
    renderPinnedRepositories();
    renderRepositories();
    renderStars();
    generateContributionCalendar();
    
    // 3. Setup core interface bindings
    setupTabs();
    setupClock();
    setupSearch();
    setupFollowButton();
    setupNewRepoButton();
    setupStarHandlers();
    setupKanbanDragAndDrop();
    
    // 4. Initial URL Hash Check
    checkUrlHash();
    
    // 5. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
