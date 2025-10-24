# Travel Agent - Mobile Web App

A beautiful, responsive mobile web application built with HTML, CSS, and JavaScript that displays your AI Travel Assistant.

## 🌟 Features

- **Responsive Design**: Optimized for all mobile devices and screen sizes
- **Progressive Web App (PWA)**: Can be installed on mobile devices like a native app
- **Modern UI**: Clean gradient design with smooth animations
- **Touch-Optimized**: Perfect touch interactions and haptic feedback
- **Offline Support**: Works offline using Service Worker caching
- **Cross-Browser**: Works on all modern mobile browsers (Chrome, Safari, Firefox, Edge)

## 📱 Project Structure

```
Travel Agent/
├── index.html              # Main HTML file
├── styles.css              # Responsive CSS styling
├── app.js                  # JavaScript functionality
├── manifest.json           # PWA manifest
├── service-worker.js       # Offline caching support
├── Assets/
│   └── Agent.PNG          # Travel agent mascot image
└── README.md              # This file
```

## 🚀 How to Run

### Option 1: Local Server (Recommended)
1. Open Terminal/Command Prompt
2. Navigate to the project folder:
   ```bash
   cd "/Users/srinivasa.arava/Desktop/Travel Agent"
   ```
3. Start a local server:
   
   **Using Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (if you have it):**
   ```bash
   npx http-server -p 8000
   ```

4. Open your mobile browser or desktop browser and go to:
   ```
   http://localhost:8000
   ```

### Option 2: Direct File Access
Simply open `index.html` in any web browser (note: some features like Service Worker may not work with file:// protocol)

### Option 3: Mobile Testing
1. Start local server on your computer
2. Find your computer's IP address:
   - Mac: System Preferences → Network
   - Windows: `ipconfig` in Command Prompt
3. On your mobile device (connected to same WiFi), open browser and go to:
   ```
   http://[YOUR_IP_ADDRESS]:8000
   ```
   Example: `http://192.168.1.100:8000`

## 📲 Install as PWA

1. Open the app in Chrome/Safari on your mobile device
2. Tap the browser menu (⋮ or share icon)
3. Select "Add to Home Screen" or "Install App"
4. The app will appear on your home screen like a native app!

## 🎨 Design Features

- **Purple Gradient Background**: Soft, modern gradient matching the agent mascot
- **Floating Animation**: Agent mascot gently floats for a dynamic feel
- **Smooth Transitions**: Professional fade-in animations on load
- **Shadow Effects**: Depth and dimension with tasteful shadows
- **Mobile-First**: Designed specifically for mobile viewing
- **Landscape Support**: Optimized for both portrait and landscape orientations

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Animations, Media Queries)
- Vanilla JavaScript
- PWA APIs (Service Worker, Web App Manifest)

## 📱 Browser Compatibility

- ✅ iOS Safari (iPhone/iPad)
- ✅ Chrome for Android
- ✅ Chrome (Desktop)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet

## 🔮 Future Enhancements

- Navigation to booking pages
- Travel destination search
- AI chat interface
- Integration with travel APIs
- User authentication
- Saved trips and itineraries
- Push notifications for deals

## 📝 Notes

- The app works best when served via HTTP/HTTPS (not file://)
- Service Worker requires HTTPS in production
- For development, localhost works fine
- Images are optimized for web delivery

---

Built with ❤️ using modern web technologies
