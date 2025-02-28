# AI SaaS Agents Showcase Website Testing Plan

## Overview
This document outlines the testing plan for the AI SaaS Agents Showcase website. The website consists of multiple pages that showcase AI agents, their use cases, pricing, and company information.

## Pages to Test

### 1. Home Page (`/`)
- Verify that the hero section loads correctly
- Check that the features section displays properly
- Ensure the featured agents section shows the agents
- Verify that the testimonials section displays correctly
- Check that the CTA (Call to Action) section works

### 2. Agents Page (`/agents`)
- Verify that all agents are displayed in the grid
- Check that the category filters are visible (though static for now)
- Ensure each agent card shows the correct information (name, description, image)
- Verify that the "Learn More" buttons link to the correct pages

### 3. Use Cases Page (`/use-cases`)
- Verify that all use cases are displayed in the grid
- Check that the industry filters are visible (though static for now)
- Ensure each use case shows the correct information (title, description, industry, results)
- Verify that the "Read Full Case Study" buttons link to the correct pages

### 4. Pricing Page (`/pricing`)
- Verify that all pricing tiers are displayed correctly
- Check that each tier shows the correct information (name, price, features)
- Ensure the CTA buttons work correctly
- Verify that the FAQ section is displayed

### 5. About Page (`/about`)
- Verify that the mission section displays correctly
- Check that the company story section is visible
- Ensure the values section displays all company values
- Verify that the team section shows all team members
- Check that the "Join Our Team" CTA works

### 6. Contact Page (`/contact`)
- Verify that the contact information is displayed correctly
- Check that the contact form has all required fields
- Ensure the form validation works (though static for now)
- Verify that the submit button is visible

### 7. FAQ Page (`/faq`)
- Verify that all FAQs are displayed correctly
- Check that each FAQ shows the question and answer
- Ensure the "Contact Support" and "Request a Demo" buttons work

### 8. Blog Page (`/blog`)
- Verify that the featured article is displayed correctly
- Check that all blog posts are shown in the grid
- Ensure each post shows the correct information (title, excerpt, author, date)
- Verify that the category filters are visible (though static for now)
- Check that the newsletter signup form is displayed

### 9. Demo Request Page (`/demo`)
- Verify that the "What to Expect" section is displayed correctly
- Check that the demo request form has all required fields
- Ensure the form validation works (though static for now)
- Verify that the submit button is visible

### 10. Signup Page (`/signup`)
- Verify that the social signup options are displayed
- Check that the signup form has all required fields
- Ensure the form validation works (though static for now)
- Verify that the "Sign in" link works

### 11. Login Page (`/login`)
- Verify that the social login options are displayed
- Check that the login form has all required fields
- Ensure the form validation works (though static for now)
- Verify that the "Forgot password?" and "Sign up" links work

### 12. Forgot Password Page (`/forgot-password`)
- Verify that the form is displayed correctly
- Check that the email field is present
- Ensure the form validation works (though static for now)
- Verify that the "Back to login" link works

## Cross-Page Testing

### Navigation
- Verify that the header navigation works on all pages
- Check that the mobile menu opens and closes correctly
- Ensure that the footer links work on all pages

### Responsive Design
- Test all pages on desktop, tablet, and mobile viewports
- Verify that the layout adjusts appropriately for each screen size
- Check that text and images are readable on all devices

### Accessibility
- Verify that all pages have proper heading structure
- Check that all images have alt text
- Ensure that forms are properly labeled
- Test keyboard navigation throughout the site

### Dark Mode
- Verify that dark mode styling works correctly on all pages
- Check the contrast of text and UI elements in dark mode
- Ensure that all components adapt properly to dark mode

## Testing Process
1. Start with the home page and navigate through each page in order
2. For each page, verify the specific items listed above
3. Test cross-page functionality after individual page testing
4. Document any issues found during testing
5. Retest after fixes are implemented

## Notes
- This is a static showcase website, so form submissions will not be processed
- Some links may not have actual destinations yet (e.g., blog post detail pages)
- The website should be tested in multiple browsers (Chrome, Firefox, Safari) 