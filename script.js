// Enhance glossary popup behavior
/*document.querySelectorAll('.glossary-term').forEach(term => {
    term.addEventListener('mouseenter', () => {
        const popup = term.querySelector('.glossary-popup');
        popup.style.display = 'block';
    });
    term.addEventListener('mouseleave', () => {
        const popup = term.querySelector('.glossary-popup');
        popup.style.display = 'none';
    });
});

// Add a subtle card click effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
        }, 200);
    });
});

// Smooth scroll for navbar links (optional)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});*/
// Fetch research data from the backend and display it
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/research')
        .then(response => response.json())
        .then(data => {
            const researchSection = document.querySelector('.research-section');
            researchSection.innerHTML = ''; // Clear placeholder content
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'hex-card';
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button onclick="window.location.href='/summary.html?id=${item.id}'">Explore</button>
                `;
                researchSection.appendChild(card);
            });

            // Add click effect to hex cards (excluding button clicks)
            document.querySelectorAll('.hex-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (e.target.tagName !== 'BUTTON') {
                        card.computedStyleMap.transform = 'rotate(5deg) scale(1.05)';
                        setTimeout(() => {
                            card.computedStyleMap.transform = 'rotate(5deg)';
                        }, 200);
                    }
                });
            });
        })
    
        .catch(error => console.error('Error fetching research:', error));
});