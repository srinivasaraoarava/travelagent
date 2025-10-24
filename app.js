// Travel Agent Mobile Web App

// Handle Get Started Button Click
function handleGetStarted() {
    console.log('Get Started button clicked!');
    
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // You can add navigation or additional functionality here
    // For now, we'll show a simple alert
    showNotification('Welcome to Travel Agent! 🌍✈️');
}

// Handle Login Button Click
function handleLogin() {
    console.log('Login button clicked!');
    
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // You can add login functionality here
    // For now, we'll show a notification
    showNotification('Login feature coming soon! 🔐');
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(90deg, #00BCD4 0%, #00ACC1 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0, 188, 212, 0.4);
        font-size: 16px;
        font-weight: 600;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Fade out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Service Worker Registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    // Adjust layout if needed
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Add install prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('App can be installed');
});

// Log when app is loaded
console.log('Travel Agent app loaded successfully!');

