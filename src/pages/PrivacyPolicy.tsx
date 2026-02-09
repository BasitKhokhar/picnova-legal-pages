import LegalNav from "@/components/LegalNav";
import LegalFooter from "@/components/LegalFooter";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "January 21, 2026";

  const tocItems = [
    { id: "introduction", label: "1. Introduction" },
    { id: "information-collected", label: "2. Information We Collect" },
    { id: "ai-processing", label: "3. AI Image Processing" },
    { id: "data-usage", label: "4. How We Use Your Data" },
    { id: "data-storage", label: "5. Data Storage & Retention" },
    { id: "third-party", label: "6. Third-Party Services" },
    { id: "data-security", label: "7. Data Security" },
    { id: "childrens-privacy", label: "8. Children's Privacy" },
    { id: "user-rights", label: "9. Your Rights & Choices" },
    { id: "international", label: "10. International Data Transfers" },
    { id: "policy-updates", label: "11. Policy Updates" },
    { id: "contact", label: "12. Contact Us" },
  ];

  return (
    <>
      <LegalNav />
      <main className="legal-container">
        <header className="legal-header">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            {/* <Shield className="w-8 h-8 text-primary" /> */}
            <img src="/logoo.png" alt="PicNova Logo" className="w-full h-full object-cover rounded-sm" />
          </div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last Updated: {lastUpdated}</p>
        </header>

        {/* Table of Contents */}
        <nav className="legal-toc">
          <h2 className="legal-toc-title">Table of Contents</h2>
          <ul className="legal-toc-list">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="legal-toc-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Section 1: Introduction */}
        <section id="introduction" className="legal-section">
          <h2 className="legal-section-title">1. Introduction</h2>
          <p className="legal-text">
            Welcome to PicNova ("we," "our," "us," or the "Company"). PicNova is an innovative mobile application that leverages advanced artificial intelligence technology to provide image generation, enhancement, restoration, and creative transformation services. We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <p className="legal-text">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application PicNova, available on the Google Play Store (the "App" or "Service"). Please read this Privacy Policy carefully. By accessing or using PicNova, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>
          <p className="legal-text">
            If you do not agree with the terms of this Privacy Policy, please do not access or use the App. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </p>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Important:</strong> This Privacy Policy applies to all users of PicNova, regardless of location. However, certain provisions may be specifically applicable to users in the European Economic Area (EEA), United Kingdom, California, or other jurisdictions with specific privacy regulations.
            </p>
          </div>
        </section>

        {/* Section 2: Information We Collect */}
        <section id="information-collected" className="legal-section">
          <h2 className="legal-section-title">2. Information We Collect</h2>
          <p className="legal-text">
            We collect information from you in various ways when you use our App. The types of information we may collect include personal data that you voluntarily provide to us, information automatically collected when you use the App, and information obtained from third-party sources.
          </p>

          <h3 className="legal-subsection-title">2.1 Images and Media Content</h3>
          <p className="legal-text">
            When you use PicNova's image generation and enhancement features, we process the images you upload or create within the App. This includes:
          </p>
          <ul className="legal-list">
            <li>Photographs uploaded from your device's camera roll or gallery for enhancement, restoration, or transformation purposes</li>
            <li>Images captured directly through the App's camera integration functionality</li>
            <li>AI-generated images created based on your text prompts and creative inputs</li>
            <li>Modified, enhanced, or transformed versions of original images processed through our AI systems</li>
            <li>Metadata associated with uploaded images, which may include creation date, file size, resolution, and format information</li>
          </ul>

          <h3 className="legal-subsection-title">2.2 Device and Technical Information</h3>
          <p className="legal-text">
            We automatically collect certain technical information when you access and use the App, including:
          </p>
          <ul className="legal-list">
            <li>Device type, model, manufacturer, and operating system version</li>
            <li>Unique device identifiers, including advertising identifiers (such as Google Advertising ID)</li>
            <li>Mobile network information, including carrier name and connection type (WiFi, cellular data)</li>
            <li>App version, installation date, and update history</li>
            <li>Screen resolution, display settings, and device orientation preferences</li>
            <li>Device language and regional settings</li>
            <li>Available storage space and memory allocation relevant to App performance</li>
          </ul>

          <h3 className="legal-subsection-title">2.3 Usage and Analytics Data</h3>
          <p className="legal-text">
            To improve our services and user experience, we collect information about how you interact with PicNova:
          </p>
          <ul className="legal-list">
            <li>Features and functions accessed within the App, including frequency and duration of use</li>
            <li>User preferences, settings, and configuration choices made within the App</li>
            <li>Session duration, time stamps, and patterns of App usage</li>
            <li>Performance metrics, including load times, processing speeds, and error occurrences</li>
            <li>Navigation paths and user interface interactions (screens viewed, buttons tapped, gestures used)</li>
            <li>Search queries and text prompts entered for AI image generation features</li>
            <li>Filter selections, editing tool usage, and creative feature preferences</li>
          </ul>

          <h3 className="legal-subsection-title">2.4 Account Information (Optional)</h3>
          <p className="legal-text">
            If you choose to create an account with PicNova or sign in using third-party authentication services, we may collect:
          </p>
          <ul className="legal-list">
            <li>Email address provided during registration or obtained from linked social accounts</li>
            <li>Username or display name you choose for your PicNova profile</li>
            <li>Profile picture, if you choose to upload one or link from a connected social account</li>
            <li>Authentication tokens and credentials necessary for account security and access management</li>
            <li>Account preferences, saved projects, and user-generated content associated with your account</li>
            <li>Purchase history and subscription status for premium features, if applicable</li>
          </ul>

          <h3 className="legal-subsection-title">2.5 Communications Data</h3>
          <p className="legal-text">
            When you contact us for support or provide feedback, we collect:
          </p>
          <ul className="legal-list">
            <li>Email correspondence and support ticket communications</li>
            <li>Feedback, suggestions, and feature requests you submit</li>
            <li>Bug reports and technical issue descriptions</li>
            <li>Survey responses and user research participation data, if you choose to participate</li>
          </ul>
        </section>

        {/* Section 3: AI Image Processing */}
        <section id="ai-processing" className="legal-section">
          <h2 className="legal-section-title">3. AI Image Processing</h2>
          <p className="legal-text">
            PicNova utilizes state-of-the-art artificial intelligence and machine learning technologies to provide our image generation, enhancement, and transformation services. Understanding how your images are processed is essential to your privacy, and we are committed to complete transparency in this regard.
          </p>

          <h3 className="legal-subsection-title">3.1 How AI Processing Works</h3>
          <p className="legal-text">
            When you use PicNova's AI-powered features, your images and prompts are processed through our secure AI infrastructure:
          </p>
          <ul className="legal-list">
            <li><strong>Image Enhancement:</strong> Our AI analyzes visual elements including color balance, lighting, sharpness, and composition to automatically improve image quality while preserving the original subject matter and artistic intent</li>
            <li><strong>Image Generation:</strong> Text prompts are processed by our natural language understanding models, which interpret your creative vision and generate corresponding visual content using advanced generative AI algorithms</li>
            <li><strong>Image Restoration:</strong> Damaged, low-quality, or aged photographs are analyzed and reconstructed using pattern recognition and image synthesis techniques to restore clarity and detail</li>
            <li><strong>Creative Transformations:</strong> Style transfer, artistic filters, and creative modifications are applied using neural network models trained on diverse artistic and photographic styles</li>
          </ul>

          <h3 className="legal-subsection-title">3.2 Temporary Processing</h3>
          <p className="legal-text">
            Images uploaded for processing are handled with strict privacy protocols:
          </p>
          <ul className="legal-list">
            <li>Images are transmitted using end-to-end encryption protocols to our secure processing servers</li>
            <li>Processing occurs in isolated, temporary computational environments with no persistent storage</li>
            <li>Original uploaded images are automatically deleted from our processing servers within 24 hours of processing completion, unless you explicitly choose to save them to cloud storage</li>
            <li>Processed output images are returned to your device and not retained on our servers beyond the active session</li>
            <li>Text prompts used for image generation are not linked to your personal identity and are automatically purged after processing</li>
          </ul>

          <h3 className="legal-subsection-title">3.3 AI Model Training Disclosure</h3>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Transparency Commitment:</strong> PicNova does NOT use your personal images to train our AI models. Your uploaded photos and generated content remain private and are not incorporated into our machine learning training datasets. Our AI models are trained exclusively on properly licensed, anonymized, and publicly available datasets.
            </p>
          </div>
        </section>

        {/* Section 4: How We Use Your Data */}
        <section id="data-usage" className="legal-section">
          <h2 className="legal-section-title">4. How We Use Your Data</h2>
          <p className="legal-text">
            We use the information we collect for various purposes, all aimed at providing, improving, and personalizing your PicNova experience. Our data usage practices are guided by the principles of data minimization, purpose limitation, and transparency.
          </p>

          <h3 className="legal-subsection-title">4.1 Service Provision and Core Functionality</h3>
          <ul className="legal-list">
            <li>Process your images through our AI enhancement, generation, and transformation features</li>
            <li>Generate AI-created images based on your text prompts and creative directions</li>
            <li>Provide image editing tools, filters, and creative effects</li>
            <li>Enable saving, exporting, and sharing of processed images</li>
            <li>Sync your content across devices if you use account features</li>
            <li>Process transactions and manage subscriptions for premium features</li>
          </ul>

          <h3 className="legal-subsection-title">4.2 Service Improvement and Development</h3>
          <ul className="legal-list">
            <li>Analyze usage patterns to identify popular features and areas for improvement</li>
            <li>Monitor App performance, identify technical issues, and optimize system resources</li>
            <li>Develop new features, tools, and creative capabilities based on user needs</li>
            <li>Conduct internal research and development for enhanced AI capabilities</li>
            <li>Test and validate updates before release to ensure quality and stability</li>
          </ul>

          <h3 className="legal-subsection-title">4.3 Personalization and User Experience</h3>
          <ul className="legal-list">
            <li>Remember your preferences, settings, and customization choices</li>
            <li>Provide personalized recommendations for features, filters, and creative tools</li>
            <li>Optimize the App interface based on your device specifications and usage patterns</li>
            <li>Deliver relevant tips, tutorials, and guidance to help you maximize PicNova's capabilities</li>
          </ul>

          <h3 className="legal-subsection-title">4.4 Communication and Support</h3>
          <ul className="legal-list">
            <li>Respond to your inquiries, support requests, and feedback submissions</li>
            <li>Send important service announcements, security alerts, and policy updates</li>
            <li>Provide technical assistance and troubleshooting guidance</li>
            <li>Send promotional communications (only with your explicit consent, and you may opt out at any time)</li>
          </ul>

          <h3 className="legal-subsection-title">4.5 Legal and Safety Purposes</h3>
          <ul className="legal-list">
            <li>Comply with applicable laws, regulations, and legal processes</li>
            <li>Enforce our Terms of Service and other agreements</li>
            <li>Protect against fraudulent, unauthorized, or illegal activity</li>
            <li>Ensure the safety and security of our users and services</li>
            <li>Respond to lawful requests from public authorities</li>
          </ul>
        </section>

        {/* Section 5: Data Storage & Retention */}
        <section id="data-storage" className="legal-section">
          <h2 className="legal-section-title">5. Data Storage & Retention</h2>
          <p className="legal-text">
            We are committed to retaining your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h3 className="legal-subsection-title">5.1 Image Retention Policies</h3>
          <ul className="legal-list">
            <li><strong>Processing Images:</strong> Images uploaded for AI processing are automatically deleted from our servers within 24 hours of processing completion</li>
            <li><strong>Cloud-Saved Images:</strong> If you choose to save images to our cloud storage feature, they are retained until you delete them or close your account</li>
            <li><strong>Local Storage:</strong> Images saved to your device remain under your control and are not accessible to PicNova</li>
            <li><strong>Cached Data:</strong> Temporary cache data on our servers is automatically purged within 7 days</li>
          </ul>

          <h3 className="legal-subsection-title">5.2 Account Data Retention</h3>
          <ul className="legal-list">
            <li>Active account information is retained for the duration of your account's existence</li>
            <li>Upon account deletion, personal data is removed within 30 days, except where retention is required by law</li>
            <li>Anonymized analytics data may be retained indefinitely for aggregate statistical analysis</li>
            <li>Backup copies are maintained for disaster recovery purposes and are purged within 90 days of primary data deletion</li>
          </ul>

          <h3 className="legal-subsection-title">5.3 Data Deletion Requests</h3>
          <p className="legal-text">
            You may request deletion of your personal data at any time by contacting us at support@picnova.app. We will process your request within 30 days and confirm deletion completion. Certain information may be retained as required by law or for legitimate business purposes (such as fraud prevention).
          </p>
        </section>

        {/* Section 6: Third-Party Services */}
        <section id="third-party" className="legal-section">
          <h2 className="legal-section-title">6. Third-Party Services</h2>
          <p className="legal-text">
            PicNova may utilize third-party services to enhance functionality, provide analytics, and improve user experience. These services operate under their own privacy policies, and we encourage you to review them.
          </p>

          <h3 className="legal-subsection-title">6.1 Analytics and Performance Monitoring</h3>
          <ul className="legal-list">
            <li><strong>Google Analytics for Firebase:</strong> Used to analyze App usage, performance metrics, and user engagement patterns. Data is aggregated and anonymized for statistical analysis</li>
            <li><strong>Crashlytics:</strong> Collects crash reports and diagnostic information to help us identify and fix technical issues quickly</li>
            <li><strong>Performance Monitoring:</strong> Tracks App performance metrics to ensure optimal user experience across different devices and network conditions</li>
          </ul>

          <h3 className="legal-subsection-title">6.2 Cloud Infrastructure</h3>
          <ul className="legal-list">
            <li>We utilize industry-leading cloud service providers with robust security certifications for data storage and processing</li>
            <li>Cloud providers are contractually obligated to maintain strict confidentiality and security standards</li>
            <li>All data transfers to cloud infrastructure are encrypted using TLS 1.3 or higher protocols</li>
          </ul>

          <h3 className="legal-subsection-title">6.3 Payment Processing</h3>
          <p className="legal-text">
            For premium subscriptions and in-app purchases, payments are processed through the Google Play Store billing system. We do not directly collect or store your payment card information. Payment transactions are subject to Google's Privacy Policy and Terms of Service.
          </p>

          <h3 className="legal-subsection-title">6.4 Advertising (If Applicable)</h3>
          <p className="legal-text">
            If PicNova displays advertisements, we may work with advertising partners who collect device identifiers to serve relevant ads. You can opt out of personalized advertising through your device settings or by adjusting your Google Advertising preferences.
          </p>
        </section>

        {/* Section 7: Data Security */}
        <section id="data-security" className="legal-section">
          <h2 className="legal-section-title">7. Data Security</h2>
          <p className="legal-text">
            We implement comprehensive technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="legal-subsection-title">7.1 Technical Security Measures</h3>
          <ul className="legal-list">
            <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.3 protocol. Stored data is encrypted at rest using AES-256 encryption</li>
            <li><strong>Secure Infrastructure:</strong> Our servers are hosted in SOC 2 Type II certified data centers with physical security controls, 24/7 monitoring, and environmental protections</li>
            <li><strong>Access Controls:</strong> Strict access controls ensure that only authorized personnel can access user data, with all access logged and audited</li>
            <li><strong>Regular Security Audits:</strong> We conduct regular security assessments, penetration testing, and vulnerability scanning</li>
            <li><strong>Incident Response:</strong> We maintain comprehensive incident response procedures to quickly address any security events</li>
          </ul>

          <h3 className="legal-subsection-title">7.2 Organizational Security Measures</h3>
          <ul className="legal-list">
            <li>All employees undergo security awareness training and are bound by confidentiality agreements</li>
            <li>Access to personal data is limited to employees who require it to perform their job functions</li>
            <li>We maintain documented security policies and procedures that are regularly reviewed and updated</li>
            <li>Third-party vendors are vetted for security compliance and bound by data protection agreements</li>
          </ul>

          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Security Notice:</strong> While we strive to protect your personal information using industry-standard security practices, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to promptly notifying affected users in the event of any security breach as required by applicable law.
            </p>
          </div>
        </section>

        {/* Section 8: Children's Privacy */}
        <section id="childrens-privacy" className="legal-section">
          <h2 className="legal-section-title">8. Children's Privacy</h2>
          <p className="legal-text">
            Protecting the privacy of children is especially important to us. PicNova is designed for general audiences and is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction).
          </p>

          <h3 className="legal-subsection-title">8.1 COPPA Compliance</h3>
          <p className="legal-text">
            In compliance with the Children's Online Privacy Protection Act (COPPA) and similar international regulations:
          </p>
          <ul className="legal-list">
            <li>We do not knowingly collect personal information from children under 13 years of age</li>
            <li>We do not knowingly allow children under 13 to register for accounts or use features that require personal information</li>
            <li>We do not knowingly use or disclose personal information from children under 13 for behavioral targeting or advertising purposes</li>
          </ul>

          <h3 className="legal-subsection-title">8.2 Parental Rights and Controls</h3>
          <p className="legal-text">
            If you are a parent or guardian and believe that your child under 13 has provided personal information to PicNova, please contact us immediately at support@picnova.app. Upon verification, we will:
          </p>
          <ul className="legal-list">
            <li>Promptly delete any personal information associated with the child's use of our services</li>
            <li>Provide you with details about what information was collected, if any</li>
            <li>Take appropriate measures to prevent future collection of children's information</li>
          </ul>

          <h3 className="legal-subsection-title">8.3 Age Verification</h3>
          <p className="legal-text">
            We may implement age verification mechanisms for certain features. Users who indicate they are under the minimum required age will be prevented from accessing age-restricted features and their information will not be retained.
          </p>
        </section>

        {/* Section 9: Your Rights & Choices */}
        <section id="user-rights" className="legal-section">
          <h2 className="legal-section-title">9. Your Rights & Choices</h2>
          <p className="legal-text">
            Depending on your location and applicable laws, you may have certain rights regarding your personal information. We are committed to honoring these rights and providing you with meaningful control over your data.
          </p>

          <h3 className="legal-subsection-title">9.1 Access and Portability</h3>
          <ul className="legal-list">
            <li><strong>Right to Access:</strong> You may request a copy of the personal information we hold about you</li>
            <li><strong>Right to Portability:</strong> You may request that we provide your data in a structured, commonly used, machine-readable format</li>
            <li>Access requests will be fulfilled within 30 days of verification of your identity</li>
          </ul>

          <h3 className="legal-subsection-title">9.2 Correction and Deletion</h3>
          <ul className="legal-list">
            <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete personal information</li>
            <li><strong>Right to Erasure:</strong> You may request deletion of your personal data, subject to legal retention requirements</li>
            <li>Account deletion can be initiated through the App settings or by contacting support</li>
          </ul>

          <h3 className="legal-subsection-title">9.3 Consent and Objection</h3>
          <ul className="legal-list">
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time</li>
            <li><strong>Right to Object:</strong> You may object to certain processing activities, including direct marketing</li>
            <li><strong>Right to Restrict Processing:</strong> You may request limitation of processing in certain circumstances</li>
          </ul>

          <h3 className="legal-subsection-title">9.4 App-Level Controls</h3>
          <p className="legal-text">
            You can exercise control over your data through the following in-app and device settings:
          </p>
          <ul className="legal-list">
            <li>Manage notification preferences and communication settings within the App</li>
            <li>Control camera and photo library access permissions through your device settings</li>
            <li>Opt out of analytics collection through the App privacy settings</li>
            <li>Manage advertising preferences through your device's ad settings</li>
            <li>Delete locally stored data by clearing App cache or uninstalling the App</li>
          </ul>

          <h3 className="legal-subsection-title">9.5 Exercising Your Rights</h3>
          <p className="legal-text">
            To exercise any of these rights, please contact us at support@picnova.app with your request. We may need to verify your identity before processing your request. We will respond to all legitimate requests within the timeframes required by applicable law (typically within 30 days).
          </p>
        </section>

        {/* Section 10: International Data Transfers */}
        <section id="international" className="legal-section">
          <h2 className="legal-section-title">10. International Data Transfers</h2>
          <p className="legal-text">
            PicNova operates globally, and your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.
          </p>

          <h3 className="legal-subsection-title">10.1 Transfer Safeguards</h3>
          <p className="legal-text">
            When we transfer your personal data internationally, we implement appropriate safeguards to ensure your data remains protected:
          </p>
          <ul className="legal-list">
            <li>Standard Contractual Clauses (SCCs) approved by relevant regulatory authorities</li>
            <li>Transfers to countries recognized as providing adequate levels of data protection</li>
            <li>Binding Corporate Rules for intra-group transfers, where applicable</li>
            <li>Additional technical and organizational measures to protect data in transit and at rest</li>
          </ul>

          <h3 className="legal-subsection-title">10.2 Your Consent</h3>
          <p className="legal-text">
            By using PicNova, you acknowledge and consent to the transfer and processing of your information in countries outside your country of residence. We ensure that any international transfers comply with applicable data protection laws and maintain the same level of protection for your personal information.
          </p>
        </section>

        {/* Section 11: Policy Updates */}
        <section id="policy-updates" className="legal-section">
          <h2 className="legal-section-title">11. Policy Updates</h2>
          <p className="legal-text">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We are committed to keeping you informed about how we protect your information.
          </p>

          <h3 className="legal-subsection-title">11.1 Notification of Changes</h3>
          <ul className="legal-list">
            <li>We will update the "Last Updated" date at the top of this Privacy Policy</li>
            <li>For material changes, we will provide prominent notice through the App (such as a notification or banner)</li>
            <li>We may also notify you via email if you have provided an email address</li>
            <li>Significant changes will be announced at least 30 days before they take effect, where legally required</li>
          </ul>

          <h3 className="legal-subsection-title">11.2 Review Recommendation</h3>
          <p className="legal-text">
            We encourage you to review this Privacy Policy periodically to stay informed about our information practices and the ways you can help protect your privacy. Continued use of PicNova after any changes to this Privacy Policy constitutes your acceptance of such changes.
          </p>
        </section>

        {/* Section 12: Contact Us */}
        <section id="contact" className="legal-section">
          <h2 className="legal-section-title">12. Contact Us</h2>
          <p className="legal-text">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us. We are committed to addressing your inquiries promptly and transparently.
          </p>

          <h3 className="legal-subsection-title">12.1 Contact Information</h3>
          <ul className="legal-list">
            <li><strong>Email:</strong> support@picnova.app</li>
            <li><strong>Subject Line:</strong> Please include "Privacy Inquiry" in the subject line for faster processing</li>
            <li><strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 5 business days</li>
          </ul>

          <h3 className="legal-subsection-title">12.2 Data Protection Officer</h3>
          <p className="legal-text">
            For users in the European Economic Area, you may contact our designated Data Protection Officer at privacy@picnova.app for any questions or concerns related to GDPR compliance and data protection rights.
          </p>

          <h3 className="legal-subsection-title">12.3 Regulatory Complaints</h3>
          <p className="legal-text">
            If you believe we have not adequately addressed your privacy concerns, you have the right to lodge a complaint with your local data protection supervisory authority. We encourage you to contact us first so we can attempt to resolve any issues directly.
          </p>

          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Thank you for trusting PicNova.</strong> We are committed to protecting your privacy and providing you with a secure, enjoyable experience while using our AI-powered image generation and enhancement services.
            </p>
          </div>
        </section>

        <LegalFooter />
      </main>
    </>
  );
};

export default PrivacyPolicy;
