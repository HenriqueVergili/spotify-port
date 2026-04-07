function scrollToSection(id) {
    const el = document.getElementById(id);
    const container = document.getElementById('main-scroll');
    if (el && container) {
        // Evaluate dynamic offset to avoid clipping underneath sticky header
        let offset = el.offsetTop;
        if(id !== 'home-section'){
             offset -= 70; // Header height
        }
        container.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

function toggleSidebar(view) {
    const aboutEl = document.getElementById('sidebar-about');
    const songsEl = document.getElementById('sidebar-songs');
    
    // Reset active states
    const toggles = document.querySelectorAll('.top-bar-right .icon-toggle');
    if (toggles.length >= 2) {
        toggles[0].classList.remove('active');
        toggles[1].classList.remove('active');
    }
    
    if (view === 'about') {
        aboutEl.style.display = 'block';
        songsEl.style.display = 'none';
        if (toggles.length >= 2) toggles[0].classList.add('active');
    } else {
        aboutEl.style.display = 'none';
        songsEl.style.display = 'block';
        if (toggles.length >= 2) toggles[1].classList.add('active');
    }
}

// Initializing state
window.onload = function() {
    toggleSidebar('about');
}

// Modal functions
function openProjectModal(title, description, imgSrc) {
    const overlay = document.getElementById('modal-overlay');
    const dynamicContent = document.getElementById('modal-dynamic-content');
    
    dynamicContent.innerHTML = `
        <img src="${imgSrc}" style="max-height: 300px; object-fit: cover; width: 100%;">
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    
    overlay.classList.add('active');
}

function openCertificateModal(title, pdfUrl) {
    const overlay = document.getElementById('modal-overlay');
    const dynamicContent = document.getElementById('modal-dynamic-content');
    
    if (pdfUrl) {
        dynamicContent.innerHTML = `
            <h2>${title}</h2>
            <iframe src="${pdfUrl}" class="modal-pdf"></iframe>
        `;
    } else {
        dynamicContent.innerHTML = `
            <h2>${title}</h2>
            <p>Certificate will be added soon.</p>
        `;
    }
    
    overlay.classList.add('active');
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeSkillsModal();
    }
});

function openAllSkillsModal() {
    const overlay = document.getElementById('skills-overlay');
    if(overlay) overlay.classList.add('active');
}

function closeSkillsModal() {
    const overlay = document.getElementById('skills-overlay');
    if(overlay) overlay.classList.remove('active');
}
