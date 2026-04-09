// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== FORMULAIRE DEVIS =====
const devisForm = document.getElementById('devisForm');
const formMessage = document.getElementById('formMessage');

devisForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(this);
    const data = {
        nom: formData.get('nom'),
        email: formData.get('email'),
        telephone: formData.get('telephone'),
        categorie: formData.get('categorie'),
        description: formData.get('description'),
        budget: formData.get('budget'),
        date: new Date().toLocaleDateString('fr-FR')
    };

    // Créer le contenu de l'email
    const emailContent = `
DEMANDE DE DEVIS - Concept Métal Varois
========================================

DONNÉES CLIENT:
- Nom: ${data.nom}
- Email: ${data.email}
- Téléphone: ${data.telephone || 'Non renseigné'}

PROJET:
- Catégorie: ${data.categorie}
- Description: ${data.description}
- Budget estimé: ${data.budget || 'Non renseigné'}

Date de la demande: ${data.date}

========================================
À votre réponse, le client doit recevoir une confirmation à: ${data.email}
    `;

    // Envoyer l'email via mailto
    const mailtoLink = `mailto:conceptmetalvarois@gmail.com?subject=Demande de Devis - ${encodeURIComponent(data.nom)}&body=${encodeURIComponent(emailContent)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;

    // Afficher un message de confirmation
    formMessage.textContent = 'Votre demande de devis a été envoyée ! Vérifiez votre client email.';
    formMessage.classList.add('success');
    formMessage.classList.remove('error');

    // Réinitialiser le formulaire
    devisForm.reset();

    // Masquer le message après 5 secondes
    setTimeout(() => {
        formMessage.classList.remove('success');
    }, 5000);
});

// ===== VALIDATION DU FORMULAIRE EN TEMPS RÉEL =====
const inputs = devisForm.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });
});

function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
        field.style.borderColor = '#dc3545';
    } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        field.style.borderColor = '#dc3545';
    } else {
        field.style.borderColor = '#ddd';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== SMOOTH SCROLL POUR LES ANCRES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMATION À L'ARRIVÉE (LAZY LOADING) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes de catégories et services
document.querySelectorAll('.category-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== AFFICHAGE DES IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier que les images se chargent correctement
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Image non trouvée:', this.src);
            this.style.display = 'none';
        });
    });
});

// ===== ANALYTICS - Google Analytics / Matomo (à configurer) =====
// À ajouter après configuration de Google Analytics ou Matomo

// ===== GESTION DU FOCUS POUR L'ACCESSIBILITÉ =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
    }
});
