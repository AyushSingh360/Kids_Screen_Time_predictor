// Theme Management System
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        
        // Add smooth transition for theme change
        document.body.style.transition = 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        
        // Add ripple effect to toggle button
        this.createRippleEffect();
    }

    createRippleEffect() {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: var(--accent-primary);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.themeToggle.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    bindEvents() {
        this.themeToggle.addEventListener('click', () => this.toggle());
    }
}

// Floating Particles System
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particlesContainer');
        this.particles = [];
        this.maxParticles = 25;
        this.init();
    }

    init() {
        this.createParticles();
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            setTimeout(() => {
                this.createParticle();
            }, i * 1500);
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const startX = Math.random() * window.innerWidth;
        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 8;
        const animationType = Math.floor(Math.random() * 5) + 1;
        
        particle.style.cssText = `
            left: ${startX}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        // Add random animation type class for variety
        if (animationType === 1) particle.style.animationName = 'floatUp';
        else if (animationType === 2) particle.style.animationName = 'floatDiagonal';
        else if (animationType === 3) particle.style.animationName = 'floatZigzag';
        else if (animationType === 4) particle.style.animationName = 'floatSlow';
        else particle.style.animationName = 'floatPulse';
        
        this.container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
            this.createParticle();
        }, (duration + delay) * 1000);
    }
}

// Toast Notification System
class ToastManager {
    constructor() {
        this.container = document.getElementById('toastContainer');
        this.toasts = [];
    }

    show(message, type = 'info', duration = 5000) {
        const toast = this.createToast(message, type);
        this.container.appendChild(toast);
        
        // Trigger show animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            this.remove(toast);
        }, duration);
        
        return toast;
    }

    createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = this.getIcon(type);
        
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
        `;
        
        return toast;
    }

    getIcon(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        };
        return icons[type] || icons.info;
    }

    remove(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 400);
    }
}

// Screen Time Predictor Application
class ScreenTimePredictorApp {
    constructor() {
        this.form = document.getElementById('predictionForm');
        this.predictButton = document.getElementById('predictButton');
        this.resultContainer = document.getElementById('resultContainer');
        this.resultTime = document.getElementById('resultTime');
        this.confidenceFill = document.getElementById('confidenceFill');
        this.confidenceText = document.getElementById('confidenceText');
        this.resultInsights = document.getElementById('resultInsights');
        
        this.toastManager = new ToastManager();
        this.isLoading = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.addFormAnimations();
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add input validation feedback
        const inputs = this.form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateInput(input));
            input.addEventListener('focus', () => this.clearInputError(input));
        });
    }

    addFormAnimations() {
        // Add stagger animation to form groups
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.style.animationDelay = `${index * 0.1}s`;
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (this.isLoading) return;

        const formData = this.collectFormData();
        
        if (!this.validateForm(formData)) {
            return;
        }

        await this.performPrediction(formData);
    }

    collectFormData() {
        return {
            childAge: parseInt(document.getElementById('childAge').value),
            dayType: document.getElementById('dayType').value,
            primaryActivity: document.getElementById('primaryActivity').value,
            previousScreenTime: parseFloat(document.getElementById('previousScreenTime').value),
            parentalControl: document.getElementById('parentalControl').value,
            deviceAccess: document.getElementById('deviceAccess').value
        };
    }

    validateForm(data) {
        const errors = [];

        if (data.childAge < 3 || data.childAge > 18) {
            errors.push('Child\'s age must be between 3 and 18 years');
        }

        if (data.previousScreenTime < 0 || data.previousScreenTime > 24) {
            errors.push('Previous screen time must be between 0 and 24 hours');
        }

        if (errors.length > 0) {
            errors.forEach(error => {
                this.toastManager.show(error, 'error');
            });
            return false;
        }

        return true;
    }

    validateInput(input) {
        const value = input.value;
        let isValid = true;
        let message = '';

        if (input.type === 'number') {
            const min = parseFloat(input.min);
            const max = parseFloat(input.max);
            const val = parseFloat(value);

            if (val < min || val > max) {
                isValid = false;
                message = `Value must be between ${min} and ${max}`;
            }
        }

        if (!isValid) {
            this.showInputError(input, message);
        } else {
            this.clearInputError(input);
        }

        return isValid;
    }

    showInputError(input, message) {
        input.style.borderColor = 'var(--error-color)';
        input.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            color: var(--error-color);
            font-size: 0.875rem;
            margin-top: 0.5rem;
            animation: fadeInUp 0.3s ease;
        `;
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    clearInputError(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    async performPrediction(data) {
        this.setLoadingState(true);
        this.hideResult();

        try {
            const prediction = await this.simulatePrediction(data);
            await this.displayResult(prediction);
            this.toastManager.show('Prediction completed successfully!', 'success');
        } catch (error) {
            console.error('Prediction error:', error);
            this.toastManager.show('Failed to generate prediction. Please try again.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(loading) {
        this.isLoading = loading;
        this.predictButton.disabled = loading;
        
        if (loading) {
            this.predictButton.classList.add('loading');
        } else {
            this.predictButton.classList.remove('loading');
            // Show success state briefly
            this.predictButton.classList.add('success');
            setTimeout(() => {
                this.predictButton.classList.remove('success');
            }, 1000);
        }
    }

    async displayResult(prediction) {
        const { hours, minutes, confidence, insights } = prediction;
        
        // Update time display with animation
        this.animateTimeDisplay(hours, minutes);
        
        // Update confidence bar
        this.animateConfidenceBar(confidence);
        
        // Update insights
        this.resultInsights.querySelector('p').textContent = insights;
        
        // Show result container
        this.resultContainer.classList.add('show');
        
        // Scroll to result
        setTimeout(() => {
            this.resultContainer.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 300);
    }

    animateTimeDisplay(targetHours, targetMinutes) {
        const hoursElement = this.resultTime.querySelector('.hours');
        const minutesElement = this.resultTime.querySelector('.minutes');
        
        // Animate hours
        this.animateNumber(hoursElement, 0, targetHours, 1000);
        
        // Animate minutes
        this.animateNumber(minutesElement, 0, targetMinutes, 1000);
    }

    animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOutCubic);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    animateConfidenceBar(confidence) {
        setTimeout(() => {
            this.confidenceFill.style.width = `${confidence}%`;
            this.confidenceText.textContent = `Confidence: ${confidence}%`;
        }, 500);
    }

    hideResult() {
        this.resultContainer.classList.remove('show');
    }

    // Enhanced ML Simulation with more realistic factors
    async simulatePrediction(data) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1500));
        
        let predictedHours = this.calculateBasePrediction(data);
        
        // Apply various factors
        predictedHours = this.applyDayTypeModifier(predictedHours, data.dayType);
        predictedHours = this.applyActivityModifier(predictedHours, data.primaryActivity);
        predictedHours = this.applyParentalControlModifier(predictedHours, data.parentalControl);
        predictedHours = this.applyDeviceAccessModifier(predictedHours, data.deviceAccess);
        predictedHours = this.applyPreviousTimeInfluence(predictedHours, data.previousScreenTime);
        
        // Ensure reasonable bounds
        predictedHours = Math.max(0.5, Math.min(predictedHours, 12));
        
        const hours = Math.floor(predictedHours);
        const minutes = Math.round((predictedHours - hours) * 60);
        const confidence = this.calculateConfidence(data);
        const insights = this.generateInsights(data, predictedHours);
        
        return { hours, minutes, confidence, insights };
    }

    calculateBasePrediction(data) {
        // Age-based baseline
        if (data.childAge <= 5) return 1.5;
        if (data.childAge <= 8) return 2.5;
        if (data.childAge <= 12) return 3.5;
        if (data.childAge <= 15) return 4.5;
        return 5.0;
    }

    applyDayTypeModifier(hours, dayType) {
        const modifiers = {
            weekday: 0.8,
            weekend: 1.4,
            holiday: 1.6
        };
        return hours * (modifiers[dayType] || 1);
    }

    applyActivityModifier(hours, activity) {
        const modifiers = {
            school: 0.7,
            gaming: 1.3,
            creative: 0.9,
            reading: 0.6,
            social: 1.1,
            outdoor: 0.5,
            sports: 0.4
        };
        return hours * (modifiers[activity] || 1);
    }

    applyParentalControlModifier(hours, control) {
        const modifiers = {
            strict: 0.6,
            moderate: 0.8,
            relaxed: 1.1,
            none: 1.3
        };
        return hours * (modifiers[control] || 1);
    }

    applyDeviceAccessModifier(hours, access) {
        const modifiers = {
            limited: 0.7,
            supervised: 0.9,
            unrestricted: 1.2
        };
        return hours * (modifiers[access] || 1);
    }

    applyPreviousTimeInfluence(hours, previousTime) {
        // Previous day's screen time has 30% influence on prediction
        return hours * 0.7 + previousTime * 0.3;
    }

    calculateConfidence(data) {
        let confidence = 85;
        
        // Adjust confidence based on data consistency
        if (data.childAge < 5 && data.deviceAccess === 'unrestricted') confidence -= 10;
        if (data.parentalControl === 'strict' && data.previousScreenTime > 6) confidence -= 15;
        if (data.dayType === 'weekend' && data.primaryActivity === 'school') confidence -= 20;
        
        return Math.max(60, Math.min(confidence, 95));
    }

    generateInsights(data, predictedHours) {
        const insights = [];
        
        if (data.parentalControl === 'strict') {
            insights.push('Strict parental controls significantly reduce screen time.');
        }
        
        if (data.dayType === 'weekend') {
            insights.push('Weekend usage typically increases by 40-60%.');
        }
        
        if (data.primaryActivity === 'outdoor') {
            insights.push('Outdoor activities are associated with lower screen time.');
        }
        
        if (predictedHours > 6) {
            insights.push('Consider implementing screen time breaks for healthier usage.');
        }
        
        return insights.length > 0 
            ? insights.join(' ') 
            : 'This prediction is based on age, activity patterns, and parental involvement factors.';
    }
}

// Application Initialization
class App {
    constructor() {
        this.themeManager = null;
        this.particleSystem = null;
        this.predictorApp = null;
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // Initialize all components
        this.themeManager = new ThemeManager();
        this.particleSystem = new ParticleSystem();
        this.predictorApp = new ScreenTimePredictorApp();
        
        // Add loading animation
        this.addLoadingAnimation();
        
        // Add keyboard shortcuts
        this.addKeyboardShortcuts();
        
        console.log('🚀 Kids Screen Time Predictor initialized successfully');
        
        // Expose for debugging (remove in production)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.app = this;
        }
    }

    addLoadingAnimation() {
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        }, 100);
    }

    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + D to toggle theme
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.themeManager.toggle();
            }
            
            // Enter to submit form when focused on form elements
            if (e.key === 'Enter' && !e.shiftKey) {
                const activeElement = document.activeElement;
                if (activeElement && activeElement.form === this.predictorApp.form) {
                    e.preventDefault();
                    this.predictorApp.form.dispatchEvent(new Event('submit'));
                }
            }
        });
    }
}

// Initialize the application
new App();

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator && 'production' === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('🌐 Connection restored');
});

window.addEventListener('offline', () => {
    console.log('📴 Connection lost');
});