// Voice Changer Guide - external script
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Log to console (proves external script works)
    console.log('✅ Voice Changer Guide loaded (external JS)');

    // Optional: simple share simulation
    const shareLink = document.getElementById('shareSim');
    if (shareLink) {
        shareLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('🔗 Copy this link to share:\nhttps://voice-changer.blog/guide');
        });
    }

    // Add click tracking to download buttons (just for demo)
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Don't prevent default, just log
            console.log('⬇️ Download clicked:', this.href);
        });
    });
});
