# Contributing to Kids Screen Time Predictor 🚀

Thank you for your interest in contributing to the Kids Screen Time Predictor! This guide will help you get started with contributing to the project.

## 🎯 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from `main`
4. **Make your changes** following our guidelines
5. **Test your changes** thoroughly
6. **Submit a pull request** with a clear description

## 📋 Development Setup

### Prerequisites
- Node.js 14+ and npm
- Git
- A modern web browser
- Code editor (VS Code recommended)

### Local Development
```bash
# Clone your fork
git clone https://github.com/yourusername/kids-screen-time-predictor.git
cd kids-screen-time-predictor

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🏗️ Project Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Styling and themes
├── script.js           # Application logic
├── package.json        # Dependencies and scripts
├── docs/              # Documentation files
└── tests/             # Test files (future)
```

## 🎨 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA attributes for accessibility
- Maintain consistent indentation (2 spaces)
- Use descriptive class names and IDs

```html
<!-- Good -->
<section class="prediction-form" role="main">
  <label for="childAge" class="form-label">
    Child's Age
  </label>
  <input 
    type="number" 
    id="childAge" 
    class="form-input"
    aria-describedby="age-help"
    min="3" 
    max="18"
  >
</section>
```

### CSS
- Use CSS custom properties for theming
- Follow BEM naming convention where applicable
- Group related properties together
- Include comments for complex styles

```css
/* Good */
.prediction-form {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  /* Appearance */
  background: var(--bg-card);
  border-radius: 1rem;
  padding: 2rem;
  
  /* Animation */
  transition: transform 0.3s ease;
}
```

### JavaScript
- Use modern ES6+ features
- Follow consistent naming conventions
- Include JSDoc comments for functions
- Handle errors gracefully

```javascript
/**
 * Calculates screen time prediction based on input factors
 * @param {Object} data - Input data from the form
 * @param {number} data.childAge - Age of the child (3-18)
 * @param {string} data.dayType - Type of day (weekday/weekend/holiday)
 * @returns {Promise<Object>} Prediction result with hours, minutes, confidence
 */
async function calculatePrediction(data) {
  try {
    // Implementation here
    return { hours: 2, minutes: 30, confidence: 85 };
  } catch (error) {
    console.error('Prediction failed:', error);
    throw new Error('Unable to generate prediction');
  }
}
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
Before submitting a PR, please test:

- [ ] Form validation works correctly
- [ ] Prediction generates reasonable results
- [ ] Dark/light mode toggle functions properly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility features work (keyboard navigation, screen readers)
- [ ] Error handling displays appropriate messages
- [ ] Animations are smooth and not jarring

### Browser Testing
Test your changes in:
- Chrome (latest)
- Firefox (latest)
- Safari (if on macOS)
- Edge (latest)

### Accessibility Testing
- Use keyboard-only navigation
- Test with screen reader (NVDA, JAWS, or VoiceOver)
- Verify color contrast ratios
- Check focus indicators are visible

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages following this format:

```
type(scope): brief description

Longer description if needed, explaining what and why.

Fixes #123
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(prediction): add confidence scoring algorithm

Implement confidence calculation based on input data consistency
and historical accuracy patterns.

Fixes #45

fix(ui): resolve dark mode toggle animation glitch

The theme toggle animation was stuttering on slower devices.
Optimized CSS transitions for better performance.

Fixes #67
```

## 🔄 Pull Request Process

### Before Submitting
1. **Update documentation** if you've changed functionality
2. **Test thoroughly** across different browsers and devices
3. **Check accessibility** compliance
4. **Verify responsive design** works properly
5. **Run any existing tests** (when available)

### PR Description Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on mobile devices
- [ ] Accessibility tested
- [ ] Manual testing completed

## Screenshots
Include screenshots for UI changes.

## Related Issues
Fixes #(issue number)
```

### Review Process
1. **Automated checks** will run (when set up)
2. **Maintainer review** for code quality and functionality
3. **Community feedback** may be requested for significant changes
4. **Approval and merge** once all requirements are met

## 🐛 Bug Reports

### Before Reporting
- Search existing issues to avoid duplicates
- Try to reproduce the bug consistently
- Test in multiple browsers if possible

### Bug Report Template
```markdown
**Bug Description**
Clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- Browser: [e.g., Chrome 91]
- OS: [e.g., Windows 10]
- Device: [e.g., Desktop, iPhone 12]

**Screenshots**
Add screenshots if applicable.

**Additional Context**
Any other context about the problem.
```

## ✨ Feature Requests

### Before Requesting
- Check if the feature already exists
- Search existing feature requests
- Consider if it aligns with project goals

### Feature Request Template
```markdown
**Feature Description**
Clear description of the proposed feature.

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Use Cases**
Specific scenarios where this would be helpful.

**Additional Context**
Mockups, examples, or related features.
```

## 🎓 Learning Resources

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [CSS-Tricks](https://css-tricks.com/)

### Accessibility
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Machine Learning (for algorithm improvements)
- [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)
- [Scikit-learn Documentation](https://scikit-learn.org/)

## 🏆 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Community highlights
- Annual contributor appreciation

## 📞 Getting Help

- **GitHub Discussions**: For general questions and ideas
- **Issues**: For bug reports and feature requests
- **Email**: maintainers@example.com for direct contact

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to Kids Screen Time Predictor! Your efforts help families make better decisions about technology use. 🙏