import LegalNav from "@/components/LegalNav";
import LegalFooter from "@/components/LegalFooter";
import { ScrollText } from "lucide-react";

const TermsAndConditions = () => {
  const lastUpdated = "January 21, 2026";

  const tocItems = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "description", label: "2. Description of Services" },
    { id: "ai-content", label: "3. AI-Generated Content" },
    { id: "user-responsibilities", label: "4. User Responsibilities" },
    { id: "image-rights", label: "5. Image Ownership & Rights" },
    { id: "prohibited-use", label: "6. Prohibited Uses" },
    { id: "intellectual-property", label: "7. Intellectual Property" },
    { id: "premium-services", label: "8. Premium Services & Subscriptions" },
    { id: "service-availability", label: "9. Service Availability" },
    { id: "disclaimers", label: "10. Disclaimers" },
    { id: "limitation-liability", label: "11. Limitation of Liability" },
    { id: "indemnification", label: "12. Indemnification" },
    { id: "termination", label: "13. Termination" },
    { id: "governing-law", label: "14. Governing Law" },
    { id: "dispute-resolution", label: "15. Dispute Resolution" },
    { id: "modifications", label: "16. Modifications to Terms" },
    { id: "contact", label: "17. Contact Information" },
  ];

  return (
    <>
      <LegalNav />
      <main className="legal-container">
        <header className="legal-header">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <ScrollText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="legal-subtitle">Last Updated: {lastUpdated}</p>
        </header>

        {/* Table of Contents */}
        <nav className="legal-toc">
          <h2 className="legal-toc-title">Table of Contents</h2>
          <ul className="legal-toc-list grid grid-cols-1 sm:grid-cols-2 gap-1">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="legal-toc-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Section 1: Acceptance of Terms */}
        <section id="acceptance" className="legal-section">
          <h2 className="legal-section-title">1. Acceptance of Terms</h2>
          <p className="legal-text">
            Welcome to PicNova. These Terms and Conditions ("Terms," "Terms of Service," or "Agreement") constitute a legally binding agreement between you ("User," "you," or "your") and PicNova ("Company," "we," "us," or "our") governing your access to and use of the PicNova mobile application (the "App" or "Service"), available on the Google Play Store.
          </p>
          <p className="legal-text">
            By downloading, installing, accessing, or using PicNova, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not agree to all the terms and conditions of this Agreement, you must not access or use the App.
          </p>

          <h3 className="legal-subsection-title">1.1 Eligibility</h3>
          <p className="legal-text">
            To use PicNova, you must:
          </p>
          <ul className="legal-list">
            <li>Be at least 13 years of age, or the minimum age required in your jurisdiction to consent to use digital services</li>
            <li>If you are under the age of majority in your jurisdiction, you must have parental or guardian consent to use the App</li>
            <li>Have the legal capacity to enter into a binding agreement</li>
            <li>Not be barred from receiving services under applicable laws</li>
            <li>Comply with all applicable local, national, and international laws and regulations</li>
          </ul>

          <h3 className="legal-subsection-title">1.2 Account Registration</h3>
          <p className="legal-text">
            While certain features of PicNova can be accessed without registration, some functionality may require you to create an account. When registering, you agree to:
          </p>
          <ul className="legal-list">
            <li>Provide accurate, current, and complete information during the registration process</li>
            <li>Maintain and promptly update your account information to keep it accurate, current, and complete</li>
            <li>Maintain the security and confidentiality of your login credentials</li>
            <li>Accept responsibility for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account or any other security breach</li>
          </ul>
        </section>

        {/* Section 2: Description of Services */}
        <section id="description" className="legal-section">
          <h2 className="legal-section-title">2. Description of Services</h2>
          <p className="legal-text">
            PicNova is an advanced mobile application that leverages artificial intelligence technology to provide comprehensive image generation, enhancement, restoration, and creative transformation services. Our platform empowers users to create stunning visual content through cutting-edge AI capabilities.
          </p>

          <h3 className="legal-subsection-title">2.1 Core Features</h3>
          <ul className="legal-list">
            <li><strong>AI Image Generation:</strong> Create original images from text descriptions using advanced generative AI models. Transform your ideas into visual reality with detailed text-to-image capabilities</li>
            <li><strong>Image Enhancement:</strong> Automatically improve image quality through AI-powered adjustments to color, contrast, sharpness, lighting, and overall visual appeal</li>
            <li><strong>Image Restoration:</strong> Repair and restore damaged, old, or low-quality photographs using advanced AI reconstruction algorithms</li>
            <li><strong>Creative Transformations:</strong> Apply artistic styles, filters, and creative effects to your images using neural network-based style transfer technology</li>
            <li><strong>Background Removal & Replacement:</strong> Intelligently detect and remove image backgrounds, with options to replace them with alternative backgrounds or transparent layers</li>
            <li><strong>Object Removal:</strong> Seamlessly remove unwanted elements from photos while preserving natural-looking results</li>
          </ul>

          <h3 className="legal-subsection-title">2.2 Service Modifications</h3>
          <p className="legal-text">
            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, including the availability of any feature, database, or content. We may also impose limits on certain features or restrict your access to parts or all of the Service without notice or liability.
          </p>
        </section>

        {/* Section 3: AI-Generated Content */}
        <section id="ai-content" className="legal-section">
          <h2 className="legal-section-title">3. AI-Generated Content Disclaimer</h2>
          <p className="legal-text">
            PicNova utilizes sophisticated artificial intelligence and machine learning technologies to generate and process images. It is important that you understand the nature and limitations of AI-generated content.
          </p>

          <h3 className="legal-subsection-title">3.1 Nature of AI Output</h3>
          <ul className="legal-list">
            <li>AI-generated images are created algorithmically based on patterns learned from training data and may not always produce expected or desired results</li>
            <li>Generated content may occasionally contain unexpected elements, artifacts, or imperfections inherent to current AI technology</li>
            <li>The AI may interpret text prompts differently than intended, resulting in variations from your creative vision</li>
            <li>Results may vary between sessions, and identical prompts may not produce identical outputs due to the probabilistic nature of AI models</li>
          </ul>

          <h3 className="legal-subsection-title">3.2 No Guarantees</h3>
          <p className="legal-text">
            We do not guarantee that AI-generated content will:
          </p>
          <ul className="legal-list">
            <li>Meet your specific expectations or requirements</li>
            <li>Be free from errors, distortions, or unintended elements</li>
            <li>Be suitable for any particular purpose or use case</li>
            <li>Not inadvertently resemble existing copyrighted works, trademarks, or real individuals</li>
          </ul>

          <h3 className="legal-subsection-title">3.3 User Review Responsibility</h3>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Important:</strong> You are solely responsible for reviewing all AI-generated content before use. You must ensure that any generated images comply with applicable laws, do not infringe on third-party rights, and are appropriate for your intended purpose. PicNova is not responsible for how you use AI-generated content.
            </p>
          </div>
        </section>

        {/* Section 4: User Responsibilities */}
        <section id="user-responsibilities" className="legal-section">
          <h2 className="legal-section-title">4. User Responsibilities</h2>
          <p className="legal-text">
            As a user of PicNova, you accept certain responsibilities and agree to use the Service in accordance with these Terms, applicable laws, and common standards of decency and respect.
          </p>

          <h3 className="legal-subsection-title">4.1 Lawful Use</h3>
          <p className="legal-text">
            You agree to use PicNova only for lawful purposes and in compliance with all applicable local, state, national, and international laws, rules, and regulations. You are responsible for ensuring that your use of the Service does not violate any laws applicable to you.
          </p>

          <h3 className="legal-subsection-title">4.2 Content You Provide</h3>
          <p className="legal-text">
            When uploading images or providing content to PicNova, you represent and warrant that:
          </p>
          <ul className="legal-list">
            <li>You own or have obtained all necessary rights, licenses, and permissions to use and authorize us to process the content</li>
            <li>The content does not infringe, misappropriate, or violate any third party's intellectual property, privacy, or other rights</li>
            <li>The content complies with all applicable laws and these Terms</li>
            <li>You have obtained proper consent from any individuals depicted in photographs you upload</li>
          </ul>

          <h3 className="legal-subsection-title">4.3 Accuracy of Information</h3>
          <p className="legal-text">
            You agree to provide accurate, truthful, and complete information when using PicNova, including any information provided during account registration, support requests, or other interactions with our Service.
          </p>

          <h3 className="legal-subsection-title">4.4 Security Obligations</h3>
          <ul className="legal-list">
            <li>Keep your account credentials confidential and secure</li>
            <li>Not share your account access with unauthorized third parties</li>
            <li>Immediately notify us of any suspected unauthorized access to your account</li>
            <li>Take reasonable precautions to protect your device and data when using the App</li>
          </ul>
        </section>

        {/* Section 5: Image Ownership & Rights */}
        <section id="image-rights" className="legal-section">
          <h2 className="legal-section-title">5. Image Ownership & Usage Rights</h2>
          <p className="legal-text">
            Understanding ownership and usage rights for images processed through PicNova is essential. This section clarifies the rights associated with different types of content.
          </p>

          <h3 className="legal-subsection-title">5.1 Your Original Images</h3>
          <p className="legal-text">
            For images you upload to PicNova:
          </p>
          <ul className="legal-list">
            <li>You retain all ownership rights to your original photographs and images</li>
            <li>By uploading images, you grant PicNova a limited, non-exclusive license to process, modify, and enhance your images solely for the purpose of providing our services</li>
            <li>This license terminates upon deletion of your content or account closure</li>
            <li>We do not claim ownership of your uploaded content</li>
          </ul>

          <h3 className="legal-subsection-title">5.2 AI-Generated Images</h3>
          <p className="legal-text">
            For images created using PicNova's AI generation features:
          </p>
          <ul className="legal-list">
            <li>You are granted a broad, non-exclusive license to use, modify, reproduce, and distribute AI-generated images for personal and commercial purposes, subject to these Terms</li>
            <li>You may use AI-generated images for personal projects, social media, creative works, and commercial applications</li>
            <li>PicNova does not claim exclusive ownership of AI-generated outputs created at your direction</li>
            <li>However, other users may generate similar or identical images using similar prompts, and we cannot guarantee uniqueness</li>
          </ul>

          <h3 className="legal-subsection-title">5.3 Enhanced and Modified Images</h3>
          <ul className="legal-list">
            <li>Enhanced versions of your original images remain your property</li>
            <li>You retain rights to any modifications or enhancements made to your uploaded content</li>
            <li>PicNova's processing does not transfer any ownership rights to us</li>
          </ul>

          <h3 className="legal-subsection-title">5.4 Third-Party Rights</h3>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Caution:</strong> You are solely responsible for ensuring that your use of AI-generated content does not infringe on any third-party intellectual property rights, including copyrights, trademarks, or rights of publicity. AI-generated images may inadvertently resemble protected content, and you assume all risk associated with such use.
            </p>
          </div>
        </section>

        {/* Section 6: Prohibited Uses */}
        <section id="prohibited-use" className="legal-section">
          <h2 className="legal-section-title">6. Prohibited Uses</h2>
          <p className="legal-text">
            You agree not to use PicNova for any unlawful, harmful, or inappropriate purposes. The following activities are strictly prohibited and may result in immediate termination of your access to the Service.
          </p>

          <h3 className="legal-subsection-title">6.1 Illegal Content and Activities</h3>
          <ul className="legal-list">
            <li>Creating, uploading, or distributing content that depicts child sexual abuse material (CSAM) or the exploitation of minors in any form</li>
            <li>Generating content that promotes terrorism, violence, or illegal activities</li>
            <li>Creating fraudulent documents, fake identification, or content intended for identity theft or fraud</li>
            <li>Generating content that violates intellectual property rights, including counterfeiting or creating unauthorized reproductions of protected works</li>
            <li>Any activity that violates local, state, national, or international laws or regulations</li>
          </ul>

          <h3 className="legal-subsection-title">6.2 Harmful and Offensive Content</h3>
          <ul className="legal-list">
            <li>Generating non-consensual intimate imagery or deepfakes of real individuals</li>
            <li>Creating content that harasses, bullies, defames, or threatens any person or group</li>
            <li>Producing hate speech or content that promotes discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics</li>
            <li>Generating graphic violence, gore, or content designed to shock or disturb</li>
            <li>Creating content that spreads misinformation or disinformation intended to deceive</li>
          </ul>

          <h3 className="legal-subsection-title">6.3 Service Abuse</h3>
          <ul className="legal-list">
            <li>Attempting to bypass, circumvent, or disable any security features or access controls</li>
            <li>Using automated systems, bots, or scripts to access the Service in an unauthorized manner</li>
            <li>Interfering with or disrupting the integrity or performance of the Service or its underlying infrastructure</li>
            <li>Reverse engineering, decompiling, or attempting to extract source code from the App</li>
            <li>Reselling, redistributing, or sublicensing access to PicNova without authorization</li>
            <li>Exploiting bugs, glitches, or vulnerabilities for personal advantage or to harm others</li>
          </ul>

          <h3 className="legal-subsection-title">6.4 Impersonation and Deception</h3>
          <ul className="legal-list">
            <li>Impersonating any person or entity, or falsely claiming affiliation with any person or entity</li>
            <li>Creating fake personas or profiles using AI-generated imagery to deceive others</li>
            <li>Using the Service to create content that misrepresents its AI-generated nature when such disclosure is required or expected</li>
          </ul>
        </section>

        {/* Section 7: Intellectual Property */}
        <section id="intellectual-property" className="legal-section">
          <h2 className="legal-section-title">7. Intellectual Property</h2>
          <p className="legal-text">
            PicNova and its entire contents, features, and functionality are owned by PicNova, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h3 className="legal-subsection-title">7.1 Our Intellectual Property</h3>
          <p className="legal-text">
            The following elements are proprietary to PicNova and protected by applicable intellectual property laws:
          </p>
          <ul className="legal-list">
            <li>The PicNova name, logo, and all related branding elements</li>
            <li>The App's user interface design, graphics, and visual elements</li>
            <li>Our proprietary AI models, algorithms, and technology</li>
            <li>All software code, architecture, and technical documentation</li>
            <li>Marketing materials, website content, and promotional content</li>
            <li>All improvements, modifications, and derivative works of the above</li>
          </ul>

          <h3 className="legal-subsection-title">7.2 Limited License Grant</h3>
          <p className="legal-text">
            Subject to your compliance with these Terms, PicNova grants you a limited, non-exclusive, non-transferable, revocable license to:
          </p>
          <ul className="legal-list">
            <li>Download and install the App on your personal device</li>
            <li>Access and use the App for personal and permitted commercial purposes</li>
            <li>Use AI-generated images as described in Section 5</li>
          </ul>
          <p className="legal-text">
            This license does not include the right to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Service, except as expressly permitted in these Terms.
          </p>

          <h3 className="legal-subsection-title">7.3 Trademark Notice</h3>
          <p className="legal-text">
            PicNova™ and the PicNova logo are trademarks of PicNova. You may not use these marks without our prior written permission. All other trademarks, product names, and logos appearing in the App are the property of their respective owners.
          </p>
        </section>

        {/* Section 8: Premium Services & Subscriptions */}
        <section id="premium-services" className="legal-section">
          <h2 className="legal-section-title">8. Premium Services & Subscriptions</h2>
          <p className="legal-text">
            PicNova may offer premium features, subscriptions, or in-app purchases that provide enhanced functionality beyond the free version of the App. This section governs your use of such premium services.
          </p>

          <h3 className="legal-subsection-title">8.1 Subscription Terms</h3>
          <ul className="legal-list">
            <li>Premium subscriptions are billed on a recurring basis (monthly or annually, as selected) through the Google Play Store</li>
            <li>Subscription prices are displayed in the App and may vary by region and currency</li>
            <li>All prices are inclusive of applicable taxes unless otherwise stated</li>
            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period</li>
          </ul>

          <h3 className="legal-subsection-title">8.2 Billing and Payment</h3>
          <ul className="legal-list">
            <li>Payment is processed through the Google Play Store billing system</li>
            <li>Your Google Play account will be charged upon confirmation of purchase</li>
            <li>You authorize PicNova to charge your designated payment method for all fees incurred</li>
            <li>You are responsible for keeping your payment information current and accurate</li>
          </ul>

          <h3 className="legal-subsection-title">8.3 Cancellation and Refunds</h3>
          <ul className="legal-list">
            <li>You may cancel your subscription at any time through your Google Play account settings</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>No refunds or credits will be provided for partial subscription periods</li>
            <li>Refund requests are subject to Google Play's refund policies and procedures</li>
          </ul>

          <h3 className="legal-subsection-title">8.4 Price Changes</h3>
          <p className="legal-text">
            We reserve the right to modify subscription prices at any time. Price changes will be communicated in advance and will take effect at the start of the next billing cycle following notice. Continued use of premium services after a price change constitutes acceptance of the new pricing.
          </p>
        </section>

        {/* Section 9: Service Availability */}
        <section id="service-availability" className="legal-section">
          <h2 className="legal-section-title">9. Service Availability & Limitations</h2>
          <p className="legal-text">
            While we strive to provide reliable and uninterrupted access to PicNova, we cannot guarantee that the Service will always be available or function without interruption.
          </p>

          <h3 className="legal-subsection-title">9.1 Availability</h3>
          <ul className="legal-list">
            <li>The Service is provided on an "as available" basis</li>
            <li>We do not warrant that the Service will be uninterrupted, timely, secure, or error-free</li>
            <li>We may temporarily suspend access for maintenance, updates, or other operational reasons</li>
            <li>Service availability may be affected by factors beyond our control, including network issues, device compatibility, and third-party service dependencies</li>
          </ul>

          <h3 className="legal-subsection-title">9.2 Usage Limits</h3>
          <p className="legal-text">
            We may impose limits on certain features or functionality, including:
          </p>
          <ul className="legal-list">
            <li>Daily or monthly processing quotas for AI image generation and enhancement</li>
            <li>File size or resolution limits for uploaded images</li>
            <li>Rate limits to prevent abuse and ensure fair access for all users</li>
            <li>Storage limits for cloud-saved content</li>
          </ul>

          <h3 className="legal-subsection-title">9.3 System Requirements</h3>
          <p className="legal-text">
            PicNova requires certain hardware and software capabilities. You are responsible for ensuring your device meets minimum requirements for optimal performance. We are not responsible for functionality issues arising from incompatible devices or operating system versions.
          </p>
        </section>

        {/* Section 10: Disclaimers */}
        <section id="disclaimers" className="legal-section">
          <h2 className="legal-section-title">10. Disclaimers</h2>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>PLEASE READ THIS SECTION CAREFULLY AS IT LIMITS OUR LIABILITY TO YOU.</strong>
            </p>
          </div>
          <p className="legal-text">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
          </p>
          <ul className="legal-list">
            <li>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE</li>
            <li>WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT</li>
            <li>WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
            <li>WE DO NOT WARRANT THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY CONTENT OR INFORMATION PROVIDED THROUGH THE SERVICE</li>
            <li>WE DO NOT WARRANT THAT DEFECTS WILL BE CORRECTED OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</li>
          </ul>
          <p className="legal-text">
            ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR LOSS OF DATA RESULTING THEREFROM.
          </p>
        </section>

        {/* Section 11: Limitation of Liability */}
        <section id="limitation-liability" className="legal-section">
          <h2 className="legal-section-title">11. Limitation of Liability</h2>
          <p className="legal-text">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
          </p>
          <ul className="legal-list">
            <li>PICNOVA, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES</li>
            <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100 USD)</li>
            <li>THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES</li>
          </ul>
          <p className="legal-text">
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you. In such cases, our liability will be limited to the maximum extent permitted by applicable law.
          </p>
        </section>

        {/* Section 12: Indemnification */}
        <section id="indemnification" className="legal-section">
          <h2 className="legal-section-title">12. Indemnification</h2>
          <p className="legal-text">
            You agree to indemnify, defend, and hold harmless PicNova and its officers, directors, employees, agents, licensors, suppliers, and any third-party information providers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from:
          </p>
          <ul className="legal-list">
            <li>Your violation of these Terms</li>
            <li>Your use or misuse of the Service</li>
            <li>Any content you upload, create, or distribute through the Service</li>
            <li>Your violation of any rights of another person or entity</li>
            <li>Your violation of any applicable laws, rules, or regulations</li>
            <li>Any third-party claims arising from your use of AI-generated content</li>
          </ul>
          <p className="legal-text">
            We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you agree to cooperate with our defense of such claims.
          </p>
        </section>

        {/* Section 13: Termination */}
        <section id="termination" className="legal-section">
          <h2 className="legal-section-title">13. Termination</h2>
          <h3 className="legal-subsection-title">13.1 Termination by You</h3>
          <p className="legal-text">
            You may terminate your use of PicNova at any time by:
          </p>
          <ul className="legal-list">
            <li>Deleting the App from your device</li>
            <li>Deleting your account through the App settings (if applicable)</li>
            <li>Canceling any active subscriptions through the Google Play Store</li>
          </ul>

          <h3 className="legal-subsection-title">13.2 Termination by Us</h3>
          <p className="legal-text">
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to:
          </p>
          <ul className="legal-list">
            <li>Breach or violation of these Terms</li>
            <li>Engaging in prohibited activities as outlined in Section 6</li>
            <li>Fraudulent or illegal activity</li>
            <li>Non-payment of fees for premium services</li>
            <li>At our sole discretion for any reason</li>
          </ul>

          <h3 className="legal-subsection-title">13.3 Effects of Termination</h3>
          <p className="legal-text">
            Upon termination:
          </p>
          <ul className="legal-list">
            <li>Your right to use the Service will immediately cease</li>
            <li>Any licenses granted to you will be revoked</li>
            <li>You must delete all copies of the App from your devices</li>
            <li>We may delete your account data, saved content, and associated information</li>
            <li>Provisions that by their nature should survive termination will remain in effect</li>
          </ul>
        </section>

        {/* Section 14: Governing Law */}
        <section id="governing-law" className="legal-section">
          <h2 className="legal-section-title">14. Governing Law</h2>
          <p className="legal-text">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PicNova is established, without regard to its conflict of law provisions. Your use of the Service may also be subject to other local, state, national, or international laws.
          </p>
          <p className="legal-text">
            You agree that any legal action or proceeding relating to these Terms or your use of the Service shall be instituted exclusively in the courts of our jurisdiction, and you consent to the personal jurisdiction of such courts. You waive any objection to venue in such courts and agree not to plead that such courts are an inconvenient forum.
          </p>
        </section>

        {/* Section 15: Dispute Resolution */}
        <section id="dispute-resolution" className="legal-section">
          <h2 className="legal-section-title">15. Dispute Resolution</h2>
          <h3 className="legal-subsection-title">15.1 Informal Resolution</h3>
          <p className="legal-text">
            Before filing any formal legal action, you agree to first attempt to resolve any dispute, claim, or controversy arising out of or relating to these Terms by contacting us at support@picnova.app. We will attempt to resolve the dispute informally within 60 days.
          </p>

          <h3 className="legal-subsection-title">15.2 Binding Arbitration</h3>
          <p className="legal-text">
            If informal resolution is unsuccessful, any remaining dispute shall be resolved through binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify. The arbitration shall be conducted in accordance with applicable arbitration rules and procedures.
          </p>

          <h3 className="legal-subsection-title">15.3 Class Action Waiver</h3>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Important:</strong> YOU AND PICNOVA AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Unless both parties agree otherwise, no arbitrator or judge may consolidate more than one person's claims or otherwise preside over any form of representative or class proceeding.
            </p>
          </div>
        </section>

        {/* Section 16: Modifications to Terms */}
        <section id="modifications" className="legal-section">
          <h2 className="legal-section-title">16. Modifications to Terms</h2>
          <p className="legal-text">
            We reserve the right to modify, amend, or update these Terms at any time in our sole discretion. When we make changes:
          </p>
          <ul className="legal-list">
            <li>We will update the "Last Updated" date at the top of these Terms</li>
            <li>For material changes, we will provide notice through the App, email (if available), or other appropriate means</li>
            <li>Material changes will take effect no earlier than 30 days after notice, unless required by law</li>
            <li>Non-material changes take effect immediately upon posting</li>
            <li>Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms</li>
          </ul>
          <p className="legal-text">
            If you do not agree to any changes, you must stop using the Service and, if applicable, cancel your subscription.
          </p>
        </section>

        {/* Section 17: Contact Information */}
        <section id="contact" className="legal-section">
          <h2 className="legal-section-title">17. Contact Information</h2>
          <p className="legal-text">
            If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us:
          </p>
          <ul className="legal-list">
            <li><strong>Email:</strong> support@picnova.app</li>
            <li><strong>Subject Line:</strong> Please include "Terms Inquiry" for faster routing</li>
            <li><strong>Response Time:</strong> We aim to respond within 5 business days</li>
          </ul>
          <p className="legal-text">
            For legal notices and formal correspondence, please send written notice to the email address above with "Legal Notice" in the subject line.
          </p>

          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Thank you for reading our Terms and Conditions.</strong> By using PicNova, you acknowledge that you have read, understood, and agree to be bound by these Terms. We appreciate your trust and are committed to providing you with an exceptional AI-powered image creation experience.
            </p>
          </div>
        </section>

        <LegalFooter />
      </main>
    </>
  );
};

export default TermsAndConditions;
