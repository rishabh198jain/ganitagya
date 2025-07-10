// Legal Documents Content
export const PRIVACY_POLICY = `
PRIVACY POLICY

Last Updated: ${new Date().toLocaleDateString()}

1. INTRODUCTION

Welcome to Ganitagya ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our mathematics education platform.

2. INFORMATION WE COLLECT

2.1 Personal Information
- Name and contact information (email address, phone number)
- Account credentials (username, password)
- Profile information (educational background, preferences)
- Payment information (processed securely through third-party providers)

2.2 Usage Information
- Learning progress and performance data
- Course completion statistics
- Time spent on platform
- Device and browser information
- IP address and location data

2.3 Cookies and Tracking Technologies
We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.

3. HOW WE USE YOUR INFORMATION

3.1 To Provide Services
- Create and manage your account
- Deliver educational content and courses
- Track learning progress
- Process payments and subscriptions

3.2 To Improve Our Platform
- Analyze usage patterns
- Develop new features
- Enhance user experience
- Conduct research and analytics

3.3 To Communicate
- Send course updates and notifications
- Provide customer support
- Share educational resources
- Send marketing communications (with consent)

4. INFORMATION SHARING

We do not sell, trade, or rent your personal information. We may share information in these circumstances:

4.1 Service Providers
- Payment processors
- Cloud hosting services
- Analytics providers
- Customer support tools

4.2 Legal Requirements
- Comply with legal obligations
- Protect our rights and property
- Ensure user safety
- Respond to legal requests

5. DATA SECURITY

We implement appropriate security measures to protect your information:
- Encryption of sensitive data
- Secure server infrastructure
- Regular security audits
- Access controls and authentication

6. YOUR RIGHTS

You have the right to:
- Access your personal information
- Correct inaccurate data
- Delete your account and data
- Opt-out of marketing communications
- Data portability

7. CHILDREN'S PRIVACY

Our platform is designed for users 13 years and older. We do not knowingly collect information from children under 13.

8. INTERNATIONAL TRANSFERS

Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.

9. CHANGES TO THIS POLICY

We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notification.

10. CONTACT US

For questions about this Privacy Policy, contact us at:
Email: privacy@ganitagya.com
Address: Mathematics Institute, New Delhi, India 110001

This Privacy Policy is effective as of the date listed above and governs your use of the Ganitagya platform.
`;

export const TERMS_CONDITIONS = `
TERMS AND CONDITIONS

Last Updated: ${new Date().toLocaleDateString()}

1. ACCEPTANCE OF TERMS

By accessing and using the Ganitagya platform ("Service"), you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.

2. DESCRIPTION OF SERVICE

Ganitagya is an online mathematics education platform that provides:
- Interactive mathematics courses
- Educational resources and materials
- Progress tracking and analytics
- Community features for learners

3. USER ACCOUNTS

3.1 Account Creation
- You must provide accurate and complete information
- You are responsible for maintaining account security
- You must be at least 13 years old to create an account
- One person may not maintain multiple accounts

3.2 Account Responsibilities
- Keep your login credentials secure
- Notify us immediately of unauthorized access
- You are responsible for all activities under your account
- Do not share your account with others

4. ACCEPTABLE USE

4.1 Permitted Uses
- Access educational content for personal learning
- Participate in community discussions respectfully
- Use platform features as intended
- Provide feedback and suggestions

4.2 Prohibited Activities
- Violate any applicable laws or regulations
- Infringe on intellectual property rights
- Share inappropriate or offensive content
- Attempt to hack or disrupt the platform
- Use the service for commercial purposes without permission
- Create fake accounts or impersonate others

5. INTELLECTUAL PROPERTY

5.1 Our Content
- All course materials, videos, and resources are our property
- You may not reproduce, distribute, or modify our content
- Limited license granted for personal educational use only

5.2 User Content
- You retain ownership of content you create
- You grant us license to use your content on the platform
- You represent that your content does not infringe on others' rights

6. PAYMENT AND SUBSCRIPTIONS

6.1 Subscription Plans
- Various subscription tiers available
- Prices subject to change with notice
- Automatic renewal unless cancelled

6.2 Payment Terms
- Payment due in advance
- Refunds subject to our refund policy
- Failure to pay may result in service suspension

6.3 Cancellation
- You may cancel your subscription at any time
- Cancellation takes effect at the end of current billing period
- No refunds for partial periods

7. PRIVACY

Your privacy is important to us. Please review our Privacy Policy, which governs the collection and use of your information.

8. DISCLAIMERS

8.1 Service Availability
- Service provided "as is" without warranties
- We do not guarantee uninterrupted access
- Content may contain errors or inaccuracies

8.2 Educational Outcomes
- We do not guarantee specific learning outcomes
- Success depends on individual effort and circumstances
- Our content supplements but does not replace formal education

9. LIMITATION OF LIABILITY

To the maximum extent permitted by law:
- We are not liable for indirect or consequential damages
- Our total liability is limited to the amount you paid for the service
- We are not responsible for third-party content or services

10. INDEMNIFICATION

You agree to indemnify and hold us harmless from claims arising from:
- Your use of the service
- Your violation of these Terms
- Your infringement of others' rights

11. TERMINATION

11.1 By You
- You may terminate your account at any time
- Termination does not relieve payment obligations

11.2 By Us
- We may terminate accounts for Terms violations
- We may suspend service for maintenance or legal reasons
- We will provide notice when reasonably possible

12. CHANGES TO TERMS

We may modify these Terms at any time. Continued use of the service constitutes acceptance of modified Terms.

13. GOVERNING LAW

These Terms are governed by the laws of India. Disputes will be resolved in the courts of New Delhi, India.

14. CONTACT INFORMATION

For questions about these Terms, contact us at:
Email: legal@ganitagya.com
Address: Mathematics Institute, New Delhi, India 110001

By using Ganitagya, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
`;

export const DOCUMENT_TYPES = {
  PRIVACY_POLICY: 'privacy_policy',
  TERMS_CONDITIONS: 'terms_conditions'
};

export const getDocumentContent = (type) => {
  switch (type) {
    case DOCUMENT_TYPES.PRIVACY_POLICY:
      return {
        title: 'Privacy Policy',
        content: PRIVACY_POLICY
      };
    case DOCUMENT_TYPES.TERMS_CONDITIONS:
      return {
        title: 'Terms and Conditions',
        content: TERMS_CONDITIONS
      };
    default:
      return {
        title: 'Document',
        content: 'Document not found.'
      };
  }
};
