# Kids Screen Time Predictor 📱⏰

A modern, responsive web application that uses machine learning principles to predict children's daily screen time based on various behavioral and environmental factors.

![Kids Screen Time Predictor](https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

- **🎯 Smart Predictions**: AI-powered screen time predictions based on multiple factors
- **🌙 Dark/Light Mode**: Beautiful theme switching with smooth animations
- **📱 Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- **✨ Rich Animations**: Smooth transitions, loading states, and micro-interactions
- **🔒 Input Validation**: Real-time form validation with helpful error messages
- **📊 Confidence Scoring**: Displays prediction confidence with visual indicators
- **🎨 Modern UI**: Clean, professional design with gradient effects
- **♿ Accessible**: Built with accessibility best practices and keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kids-screen-time-predictor.git
cd kids-screen-time-predictor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 Usage

1. **Enter Child Information**: Fill in the form with relevant details about the child
   - Age (3-18 years)
   - Day type (weekday, weekend, holiday)
   - Primary activity
   - Previous day's screen time
   - Parental control level
   - Device access level

2. **Get Prediction**: Click the "Predict Screen Time" button to generate a prediction

3. **View Results**: The app will display:
   - Predicted screen time in hours and minutes
   - Confidence percentage with visual indicator
   - Personalized insights based on the input data

## 🏗️ Project Structure

```
kids-screen-time-predictor/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet with theme support
├── script.js               # JavaScript application logic
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── COMMUNITY.md            # Community guidelines
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # Project license
└── CHANGELOG.md            # Version history
```

## 🧠 How It Works

The predictor uses a sophisticated algorithm that considers multiple factors:

- **Age-based baseline**: Different age groups have different screen time patterns
- **Day type modifiers**: Weekends and holidays typically see increased usage
- **Activity influence**: Different activities correlate with varying screen time
- **Parental controls**: Strict controls significantly reduce screen time
- **Device access**: Limited access naturally constrains usage
- **Historical patterns**: Previous day's usage influences current predictions

## 🎨 Customization

### Themes
The app supports both light and dark themes. Users can toggle between themes using the button in the header, and their preference is automatically saved.

### Styling
Modify `styles.css` to customize:
- Color schemes (CSS custom properties)
- Animations and transitions
- Layout and spacing
- Typography

### Prediction Logic
Update the prediction algorithm in `script.js`:
- Modify factor weights in the calculation methods
- Add new input parameters
- Integrate with external ML APIs
- Customize confidence scoring

## 🔧 Configuration

### Environment Variables
Currently, the app runs entirely in the browser with no backend dependencies. For production deployment with analytics or external APIs, you may want to add:

```javascript
// Example configuration
const CONFIG = {
  API_ENDPOINT: 'https://your-ml-api.com/predict',
  ANALYTICS_ID: 'your-analytics-id',
  DEBUG_MODE: false
};
```

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern web applications
- Icons from Heroicons and custom SVG designs
- Fonts from Google Fonts (Inter)
- Stock photos from Pexels

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/kids-screen-time-predictor/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🗺️ Roadmap

- [ ] Integration with real ML models
- [ ] User accounts and data persistence
- [ ] Historical tracking and analytics
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced reporting features

---

Made with ❤️ for helping families manage screen time responsibly.