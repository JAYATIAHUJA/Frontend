/* Retro Background */
.retro-bg {
    background-color: #000;
    background-image: 
        linear-gradient(45deg, #000 25%, transparent 25%),
        linear-gradient(-45deg, #000 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #000 75%),
        linear-gradient(-45deg, transparent 75%, #000 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    background-color: #1a1a1a;
    color: #fff;
    font-family: 'Press Start 2P', cursive;
    padding-top: 76px;
}

/* Pixel Border */
.pixel-border {
    border: 4px solid #ff00de;
    padding: 20px;
    position: relative;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 20px #ff00de;
}

.pixel-border::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, #ff00de, #00ff00);
    z-index: -1;
    animation: borderGlow 3s linear infinite;
}

/* Neon Text Effect */
.neon-text {
    color: #fff;
    text-shadow: 0 0 5px #fff,
                 0 0 10px #fff,
                 0 0 20px #ff00de,
                 0 0 30px #ff00de,
                 0 0 40px #ff00de;
    animation: neon 1.5s ease-in-out infinite alternate;
}

/* Retro Text */
.retro-text {
    color: #00ff00;
    font-family: 'VT323', monospace;
    text-shadow: 2px 2px 0 #000;
    font-size: 1.2rem;
}

/* Navbar Styling */
.neon-nav {
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom: 2px solid #ff00de;
    box-shadow: 0 0 10px #ff00de;
    backdrop-filter: blur(10px);
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
}

/* Hero Section */
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.retro-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(#ff00de 1px, transparent 1px),
        linear-gradient(90deg, #ff00de 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
    pointer-events: none;
}

/* Deal Cards */
.deal-card {
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid #ff00de;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 15px #ff00de;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
}

.deal-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 0, 222, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
}

.deal-card:hover::before {
    transform: translateX(100%);
}

.deal-card:hover {
    transform: translateY(-10px);
}

.card-content {
    text-align: center;
}

.pixel-frame {
    position: relative;
    padding: 10px;
    background: #000;
    border: 4px solid #00ff00;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 20px;
}

.pixel-frame::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, #00ff00, #ff00de);
    border-radius: 10px;
    z-index: -1;
    animation: borderGlow 3s linear infinite;
}

/* Electric Section */
.electric-section {
    padding: 80px 0;
}

.electric-image {
    position: relative;
    padding: 20px;
}

.electric-image img {
    border: 4px solid #00ff00;
    border-radius: 10px;
    box-shadow: 0 0 20px #00ff00;
}

/* Contact Section */
.contact-section {
    padding: 80px 0;
}

.contact-info {
    text-align: left;
}

.retro-form .form-control {
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid #ff00de;
    color: #fff;
    font-family: 'VT323', monospace;
    font-size: 1.2rem;
}

.retro-form .form-control:focus {
    background: rgba(0, 0, 0, 0.9);
    border-color: #00ff00;
    box-shadow: 0 0 10px #00ff00;
    color: #fff;
}

/* Footer */
.footer-section {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 40px 0;
    border-top: 2px solid #ff00de;
    box-shadow: 0 0 10px #ff00de;
}

.social-links a {
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 10px 20px;
    border: 2px solid #ff00de;
    margin: 0 10px;
    display: inline-block;
}

.social-links a:hover {
    color: #00ff00 !important;
    text-shadow: 0 0 10px #00ff00;
    background: rgba(255, 0, 222, 0.1);
}

/* Retro Buttons */
.retro-btn {
    background: #000;
    border: 2px solid #ff00de;
    color: #fff;
    padding: 10px 20px;
    margin: 0 5px;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
}

.retro-btn:hover {
    background: #ff00de;
    color: #000;
    box-shadow: 0 0 20px #ff00de;
}

/* Animations */
@keyframes neon {
    from {
        text-shadow: 0 0 5px #fff,
                     0 0 10px #fff,
                     0 0 20px #ff00de,
                     0 0 30px #ff00de,
                     0 0 40px #ff00de;
    }
    to {
        text-shadow: 0 0 2.5px #fff,
                     0 0 5px #fff,
                     0 0 10px #ff00de,
                     0 0 15px #ff00de,
                     0 0 20px #ff00de;
    }
}

@keyframes borderGlow {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-section {
        height: auto;
        padding: 100px 0;
    }
    
    .deal-card {
        margin: 10px 0;
    }

    .retro-btn {
        margin: 5px;
        font-size: 0.6rem;
    }

    .contact-info {
        text-align: center;
        margin-bottom: 30px;
    }
}

/* Chatbot Styles */
.chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.chatbot-icon {
    width: 60px;
    height: 60px;
    background: #000;
    border: 2px solid #ff00de;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px #ff00de;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.chatbot-icon:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px #ff00de;
}

.chatbot-icon-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #ff00de, #00ff00);
    border-radius: 50%;
    animation: borderGlow 3s linear infinite;
}

.chatbot-icon-text {
    font-size: 24px;
    color: #fff;
    text-shadow: 0 0 10px #fff;
}

.chatbot-box {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 300px;
    height: 400px;
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #ff00de;
    border-radius: 10px;
    box-shadow: 0 0 20px #ff00de;
    display: none;
    flex-direction: column;
    overflow: hidden;
}

.chatbot-box.active {
    display: flex;
}

.chatbot-header {
    padding: 15px;
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 2px solid #ff00de;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    background: none;
    border: none;
    color: #ff00de;
    font-size: 24px;
    cursor: pointer;
    padding: 0 10px;
}

.chatbot-messages {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.message {
    max-width: 80%;
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0;
}

.bot-message {
    align-self: flex-start;
    background: rgba(255, 0, 222, 0.1);
    border: 1px solid #ff00de;
}

.user-message {
    align-self: flex-end;
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #00ff00;
}

.message-content {
    padding: 5px;
}

.chatbot-input {
    padding: 15px;
    background: rgba(0, 0, 0, 0.8);
    border-top: 2px solid #ff00de;
    display: flex;
    gap: 10px;
}

.chatbot-input input {
    flex: 1;
    margin: 0;
}

.chatbot-input button {
    padding: 5px 15px;
    margin: 0;
}

/* Scrollbar Styling */
.chatbot-messages::-webkit-scrollbar {
    width: 5px;
}

.chatbot-messages::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
}

.chatbot-messages::-webkit-scrollbar-thumb {
    background: #ff00de;
    border-radius: 5px;
}

.chatbot-messages::-webkit-scrollbar-thumb:hover {
    background: #00ff00;
}

/* Responsive Design for Chatbot */
@media (max-width: 768px) {
    .chatbot-box {
        width: 280px;
        height: 350px;
    }
    
    .chatbot-icon {
        width: 50px;
        height: 50px;
    }
    
    .chatbot-icon-text {
        font-size: 20px;
    }
}

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }, 1000);
});

// Basic Chatbot
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const chatIcon = document.querySelector('.chatbot-icon');
    const chatBox = document.querySelector('.chatbot-box');
    const closeBtn = document.querySelector('.close-btn');
    const messageInput = document.querySelector('.chatbot-input input');
    const sendButton = document.querySelector('.chatbot-input .retro-btn');
    const messagesContainer = document.querySelector('.chatbot-messages');

    // Toggle chat box
    chatIcon.addEventListener('click', () => {
        chatBox.classList.add('active');
        messageInput.focus();
    });

    closeBtn.addEventListener('click', () => {
        chatBox.classList.remove('active');
    });

    // Send message function
    function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user-message');
        messageInput.value = '';

        // Add bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot-message');
        }, 500);
    }

    // Add message to chat
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Get bot response based on keywords
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Basic responses
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! How can I help you today? 😊";
        }
        if (lowerMessage.includes('help')) {
            return "I can help you with:\n• Car prices\n• Test drives\n• Electric cars\n• Contact info\nWhat would you like to know? 🚗";
        }
        if (lowerMessage.includes('thank')) {
            return "You're welcome! Let me know if you need anything else! 😊";
        }
        if (lowerMessage.includes('bye')) {
            return "Goodbye! Hope to see you at Ling's Cars soon! 👋";
        }

        // Car-related responses
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Our cars start from £199 per month. We have:\n• BYD Seal (£45,695)\n• MG4 EV (£26,995)\n• VW T-Roc (£27,810)";
        }
        if (lowerMessage.includes('electric') || lowerMessage.includes('ev')) {
            return "We have great electric vehicles! Popular models include:\n• BYD Seal - 354 miles range\n• MG4 EV - 323 miles range\nWould you like to know more? ⚡";
        }
        if (lowerMessage.includes('test drive')) {
            return "Sure! You can book a test drive by:\n• Calling us: 0191 460 9444\n• Visiting our showroom\nWhich car would you like to try? 🚗";
        }
        if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) {
            return "📞 Call us: 0191 460 9444\n✉️ Email: sales@lingscars.com\n⏰ Hours: Mon-Fri 9am-5:30pm";
        }

        // Default response
        return "I'm here to help! You can ask me about:\n• Car prices\n• Test drives\n• Electric cars\n• Contact info\nWhat would you like to know? 🚗";
    }

    // Event listeners for sending messages
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}); 