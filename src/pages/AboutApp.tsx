import LegalNav from "@/components/LegalNav";
import LegalFooter from "@/components/LegalFooter";
import { Sparkles, Wand2, Image, RotateCcw, Palette, Shield, Users, Rocket } from "lucide-react";

const AboutApp = () => {
  const tocItems = [
    { id: "introduction", label: "1. Introduction to PicNova" },
    { id: "mission", label: "2. Our Mission & Vision" },
    { id: "ai-features", label: "3. AI-Powered Features" },
    { id: "how-it-works", label: "4. How PicNova Works" },
    { id: "responsible-ai", label: "5. Responsible AI Usage" },
    { id: "target-users", label: "6. Who PicNova is For" },
    { id: "privacy-commitment", label: "7. Privacy & Security Commitment" },
    { id: "future-roadmap", label: "8. Future Roadmap" },
    { id: "contact", label: "9. Get in Touch" },
  ];

  return (
    <>
      <LegalNav />
      <main className="legal-container">
        <header className="legal-header">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            {/* <Sparkles className="w-8 h-8 text-primary" /> */}
            <img src="/logoo.png" alt="PicNova Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="legal-title">About PicNova</h1>
          <p className="legal-subtitle">AI-Powered Image Generation & Enhancement</p>
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
          <h2 className="legal-section-title">1. Introduction to PicNova</h2>
          <p className="legal-text">
            Welcome to PicNova, a cutting-edge mobile application that harnesses the transformative power of artificial intelligence to revolutionize how you create, enhance, and interact with images. In an era where visual content drives communication, storytelling, and creative expression, PicNova emerges as your intelligent creative companion, making professional-quality image creation accessible to everyone.
          </p>
          <p className="legal-text">
            PicNova represents the convergence of advanced machine learning technology, intuitive design, and a deep understanding of creative needs. Whether you're a professional photographer seeking to streamline your workflow, a content creator looking for fresh visual assets, a business owner needing marketing imagery, or simply someone who loves exploring creative possibilities, PicNova provides the tools to bring your visual ideas to life.
          </p>
          <p className="legal-text">
            Our application goes beyond simple filters and basic edits. We've integrated state-of-the-art AI models capable of understanding natural language prompts, analyzing complex image compositions, and generating or modifying visuals with remarkable precision and artistic sensitivity. The result is an app that feels less like a tool and more like a collaborative creative partner.
          </p>
          <p className="legal-text">
            Available on the Google Play Store, PicNova has been designed from the ground up for the mobile experience. We understand that inspiration strikes anywhere—on the go, in meetings, during travel, or in the quiet moments of daily life. That's why we've optimized PicNova to deliver powerful AI capabilities in a fast, responsive, and user-friendly mobile interface that doesn't compromise on quality or functionality.
          </p>
        </section>

        {/* Section 2: Mission & Vision */}
        <section id="mission" className="legal-section">
          <h2 className="legal-section-title">2. Our Mission & Vision</h2>

          <h3 className="legal-subsection-title">Our Mission</h3>
          <p className="legal-text">
            PicNova's mission is to democratize creative image generation and enhancement by making advanced AI technology accessible, intuitive, and affordable for everyone. We believe that creative expression should not be limited by technical skill, expensive software, or access to professional resources. Through continuous innovation and user-centered design, we strive to empower individuals and businesses worldwide to communicate visually with confidence and impact.
          </p>

          <h3 className="legal-subsection-title">Our Vision</h3>
          <p className="legal-text">
            We envision a world where the barrier between imagination and visual reality is eliminated. Where anyone with an idea can instantly translate their mental vision into compelling imagery. Where creative professionals can multiply their productivity without sacrificing quality. Where small businesses can compete visually with larger competitors. And where the joy of creating beautiful images is a universal experience, not a specialized skill.
          </p>

          <h3 className="legal-subsection-title">Core Values</h3>
          <ul className="legal-list">
            <li><strong>Innovation:</strong> We continuously push the boundaries of what's possible with AI image technology, staying at the forefront of research and development to bring you the latest capabilities</li>
            <li><strong>Accessibility:</strong> We design our features to be usable by everyone, regardless of technical background or artistic training. Powerful doesn't have to mean complicated</li>
            <li><strong>Quality:</strong> We never compromise on output quality. Every feature we release meets rigorous standards for visual fidelity, reliability, and user satisfaction</li>
            <li><strong>Privacy:</strong> We treat your images and data with the utmost respect. Your creative work belongs to you, and we maintain strict privacy protections</li>
            <li><strong>Responsibility:</strong> We develop and deploy AI technology ethically, with safeguards against misuse and a commitment to positive societal impact</li>
            <li><strong>Community:</strong> We listen to our users, value their feedback, and build features that address real needs and desires expressed by our community</li>
          </ul>
        </section>

        {/* Section 3: AI Features */}
        <section id="ai-features" className="legal-section">
          <h2 className="legal-section-title">3. AI-Powered Features</h2>
          <p className="legal-text">
            PicNova offers a comprehensive suite of AI-powered features designed to address every aspect of image creation and enhancement. Each feature leverages sophisticated machine learning models trained on diverse, high-quality datasets to deliver professional-grade results.
          </p>

          <div className="grid gap-6 my-6">
            <div className="flex gap-4 p-4 rounded-lg bg-accent/50">
              <div className="flex-shrink-0">
                <Wand2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">AI Image Generation</h4>
                <p className="text-muted-foreground">
                  Transform your words into stunning visuals with our advanced text-to-image generation system. Simply describe what you want to create using natural language, and PicNova's AI will generate unique, high-quality images matching your description. From photorealistic scenes to artistic illustrations, abstract compositions to product visualizations, the possibilities are limited only by your imagination. Our generation models understand complex prompts, artistic styles, color preferences, composition guidelines, and contextual nuances.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-accent/50">
              <div className="flex-shrink-0">
                <Image className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Intelligent Enhancement</h4>
                <p className="text-muted-foreground">
                  Elevate your photographs with AI-powered enhancement that goes far beyond basic adjustments. Our enhancement algorithms analyze each image holistically, understanding its content, lighting conditions, color balance, and overall composition. The AI then applies intelligent corrections that respect the original intent while dramatically improving quality. This includes automatic noise reduction, sharpness optimization, dynamic range expansion, color harmony adjustments, and subtle detail recovery that brings out the best in every shot.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-accent/50">
              <div className="flex-shrink-0">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Photo Restoration</h4>
                <p className="text-muted-foreground">
                  Breathe new life into old, damaged, or degraded photographs with our powerful AI restoration capabilities. Whether you're working with faded family photos, scratched prints, low-resolution scans, or images suffering from years of deterioration, PicNova's restoration tools can repair damage, enhance clarity, reconstruct missing details, and even colorize black-and-white images. Our AI has been trained to understand the patterns and structures of photographs, allowing it to intelligently fill in gaps and recover information that seemed lost forever.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-accent/50">
              <div className="flex-shrink-0">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Creative Transformations</h4>
                <p className="text-muted-foreground">
                  Reimagine your images through the lens of different artistic styles and creative treatments. Our style transfer technology can transform photos into artwork that emulates famous painters, applies contemporary design aesthetics, or achieves entirely unique visual effects. From impressionist brushstrokes to comic book illustrations, from vintage film looks to futuristic digital art, creative transformations open up endless possibilities for artistic expression and visual storytelling.
                </p>
              </div>
            </div>
          </div>

          <h3 className="legal-subsection-title">Additional Features</h3>
          <ul className="legal-list">
            <li><strong>Background Removal & Replacement:</strong> Precisely extract subjects from their backgrounds using AI edge detection. Replace backgrounds with solid colors, custom images, or AI-generated scenes for product photography, portraits, or creative compositions</li>
            <li><strong>Object Removal:</strong> Seamlessly erase unwanted objects, people, or elements from your photos. The AI intelligently reconstructs the underlying scene, producing natural-looking results without visible artifacts</li>
            <li><strong>Face Enhancement:</strong> Improve portrait photography with AI tools that enhance facial features while maintaining natural appearance. Includes skin smoothing, blemish removal, and subtle improvements to lighting and color</li>
            <li><strong>Resolution Upscaling:</strong> Increase image resolution without losing quality. Our super-resolution AI adds genuine detail and sharpness, making low-resolution images suitable for printing or high-DPI displays</li>
            <li><strong>Batch Processing:</strong> Apply enhancements and transformations to multiple images simultaneously, saving time when working with large collections</li>
            <li><strong>Smart Filters:</strong> AI-curated filter collections that adapt to image content, applying effects intelligently based on what's in the photo</li>
          </ul>
        </section>

        {/* Section 4: How It Works */}
        <section id="how-it-works" className="legal-section">
          <h2 className="legal-section-title">4. How PicNova Works</h2>
          <p className="legal-text">
            Understanding how PicNova operates helps you appreciate the technology behind the magic while providing confidence in how your images are handled. Here's a comprehensive look at the process from input to output.
          </p>

          <h3 className="legal-subsection-title">The Processing Pipeline</h3>
          <p className="legal-text">
            When you use PicNova, your images and prompts go through a carefully designed pipeline that balances speed, quality, and privacy:
          </p>
          <ul className="legal-list">
            <li><strong>Input Analysis:</strong> The AI first analyzes your input—whether that's an uploaded image, a text prompt, or a combination of both. For images, this involves understanding content, composition, quality characteristics, and potential issues. For text prompts, natural language processing extracts key concepts, style directions, and desired attributes</li>
            <li><strong>Intelligent Processing:</strong> Based on the analysis, the appropriate AI models are engaged. For image generation, latent diffusion models create new visuals from your descriptions. For enhancement, specialized neural networks apply targeted improvements. For transformations, style transfer algorithms reinterpret your images</li>
            <li><strong>Quality Optimization:</strong> Before results are returned, they pass through quality assurance layers that check for artifacts, ensure consistency with your inputs, and apply final refinements for optimal output</li>
            <li><strong>Secure Delivery:</strong> Completed images are securely transmitted back to your device, where they're ready for use, further editing, saving, or sharing</li>
          </ul>

          <h3 className="legal-subsection-title">On-Device vs. Cloud Processing</h3>
          <p className="legal-text">
            PicNova uses a hybrid processing approach optimized for each feature:
          </p>
          <ul className="legal-list">
            <li><strong>Cloud Processing:</strong> Complex operations like AI image generation and advanced enhancements utilize our cloud infrastructure, where powerful GPU clusters can perform computations that would be impossible on mobile devices alone. This ensures fast processing times and high-quality results regardless of your device's specifications</li>
            <li><strong>On-Device Processing:</strong> Simpler operations, previews, and certain optimized features may run directly on your device for instant feedback and offline capability. We continuously optimize our models for mobile efficiency</li>
            <li><strong>Smart Orchestration:</strong> The app intelligently determines the best processing location based on the task, your connection quality, and device capabilities, ensuring the optimal balance of speed and quality</li>
          </ul>

          <h3 className="legal-subsection-title">User Experience Design</h3>
          <p className="legal-text">
            We've designed PicNova's interface to make advanced AI accessible without requiring technical knowledge:
          </p>
          <ul className="legal-list">
            <li>Intuitive navigation with clearly organized features and logical workflow progression</li>
            <li>Real-time previews where possible, so you can see changes before committing</li>
            <li>Smart suggestions and auto-adjustments that help beginners achieve great results</li>
            <li>Advanced controls available for users who want fine-grained customization</li>
            <li>History and undo functionality to experiment without fear of losing your work</li>
            <li>Seamless integration with your device's photo library for easy import and export</li>
          </ul>
        </section>

        {/* Section 5: Responsible AI */}
        <section id="responsible-ai" className="legal-section">
          <h2 className="legal-section-title">5. Responsible AI Usage</h2>
          <p className="legal-text">
            At PicNova, we recognize that AI image generation technology carries significant responsibilities. We are committed to developing and deploying our technology in ways that benefit society while minimizing potential harms. This commitment shapes every aspect of how we build and operate our service.
          </p>

          <h3 className="legal-subsection-title">Ethical Development Principles</h3>
          <ul className="legal-list">
            <li><strong>Bias Awareness and Mitigation:</strong> We actively work to identify and reduce biases in our AI models. This includes diverse training data, regular auditing of outputs, and ongoing refinement to ensure fair and inclusive representation across different demographics, cultures, and contexts</li>
            <li><strong>Transparency:</strong> We are open about our AI's capabilities and limitations. We don't overstate what our technology can do, and we clearly communicate when content is AI-generated. This helps users make informed decisions about how to use and represent AI-created content</li>
            <li><strong>Human Oversight:</strong> While our AI operates autonomously in processing tasks, we maintain human oversight over model development, policy decisions, and ethical considerations. AI enhances human capability rather than replacing human judgment</li>
            <li><strong>Continuous Improvement:</strong> We actively monitor our systems for unintended behaviors or outputs, and we maintain rapid response capabilities to address any issues that arise. User feedback is invaluable in this process</li>
          </ul>

          <h3 className="legal-subsection-title">Content Safety Measures</h3>
          <p className="legal-text">
            We implement robust safeguards to prevent misuse of our technology:
          </p>
          <ul className="legal-list">
            <li><strong>Content Filters:</strong> Multiple layers of content filtering prevent generation of harmful, illegal, or unethical imagery. These filters operate on both inputs (prompts) and outputs (generated images)</li>
            <li><strong>Prohibited Content Prevention:</strong> Our systems are designed to refuse requests for content involving minors in inappropriate contexts, non-consensual imagery, hate symbols, and other harmful material</li>
            <li><strong>Authenticity Indicators:</strong> We support transparency about AI-generated content and encourage users to appropriately disclose when sharing AI-created images in contexts where authenticity matters</li>
            <li><strong>Abuse Detection:</strong> We monitor for patterns of misuse and take action against accounts that repeatedly attempt to circumvent our safety measures or use PicNova for harmful purposes</li>
          </ul>

          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Our Commitment:</strong> We believe that AI image technology should empower creativity while respecting human dignity, legal boundaries, and social responsibility. We continuously evolve our policies and safeguards as technology and societal understanding develop.
            </p>
          </div>
        </section>

        {/* Section 6: Target Users */}
        <section id="target-users" className="legal-section">
          <h2 className="legal-section-title">6. Who PicNova is For</h2>
          <p className="legal-text">
            PicNova is designed to serve a diverse community of users with varying needs, skill levels, and creative objectives. Our features cater to both professionals and casual users, ensuring that everyone can find value in what we offer.
          </p>

          <div className="grid gap-6 my-6">
            <div className="flex gap-4 p-4 rounded-lg border border-border">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Content Creators & Influencers</h4>
                <p className="text-muted-foreground">
                  Social media managers, bloggers, YouTubers, and influencers use PicNova to generate eye-catching visuals, enhance their photography, create consistent aesthetic themes, and produce engaging content quickly. The AI enables faster content production without sacrificing quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border">
              <div className="flex-shrink-0">
                <Image className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Photographers & Visual Artists</h4>
                <p className="text-muted-foreground">
                  Professional and amateur photographers leverage PicNova's enhancement and restoration capabilities to improve their work. Artists explore new creative directions through style transfer and AI-assisted generation. The tools complement traditional skills with AI-powered efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border">
              <div className="flex-shrink-0">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Small Business Owners</h4>
                <p className="text-muted-foreground">
                  Entrepreneurs and small business owners use PicNova for marketing materials, product imagery, social media content, and brand visuals. AI-powered tools level the playing field, allowing small operations to produce professional-quality visuals without large design budgets.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border">
              <div className="flex-shrink-0">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Design Professionals</h4>
                <p className="text-muted-foreground">
                  Graphic designers, UI/UX designers, and creative directors use PicNova for rapid prototyping, concept visualization, and asset creation. AI generation accelerates the ideation phase while enhancement tools polish final deliverables.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border border-border">
              <div className="flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Casual Users & Hobbyists</h4>
                <p className="text-muted-foreground">
                  Anyone who enjoys photography, digital art, or creative exploration benefits from PicNova. Enhance family photos, create personalized artwork, restore old memories, or simply have fun experimenting with AI-powered creativity. No expertise required.
                </p>
              </div>
            </div>
          </div>

          <h3 className="legal-subsection-title">Accessibility Commitment</h3>
          <p className="legal-text">
            We strive to make PicNova accessible to users of all abilities. This includes attention to color contrast, text sizing, interface navigation, and compatibility with accessibility features built into Android devices. We welcome feedback on how we can improve accessibility.
          </p>
        </section>

        {/* Section 7: Privacy & Security */}
        <section id="privacy-commitment" className="legal-section">
          <h2 className="legal-section-title">7. Privacy & Security Commitment</h2>
          <p className="legal-text">
            Your trust is fundamental to our relationship with you. PicNova is built on a foundation of privacy-first principles and robust security practices. We understand that the images you create and share are personal, and we treat them with the respect they deserve.
          </p>

          <h3 className="legal-subsection-title">Privacy Principles</h3>
          <ul className="legal-list">
            <li><strong>Data Minimization:</strong> We collect only the information necessary to provide and improve our services. We don't accumulate data beyond what's needed for your requested operations</li>
            <li><strong>Transparency:</strong> Our Privacy Policy clearly explains what data we collect, how we use it, and your rights regarding your information. No hidden practices or surprising disclosures</li>
            <li><strong>User Control:</strong> You maintain control over your content and data. You can delete your images, manage your account, and exercise your privacy rights at any time</li>
            <li><strong>No Training on Personal Images:</strong> We do not use your personal uploaded images to train our AI models. Your photos remain your private property</li>
          </ul>

          <h3 className="legal-subsection-title">Security Measures</h3>
          <ul className="legal-list">
            <li><strong>Encryption:</strong> All data transmission between your device and our servers uses TLS encryption. Stored data is encrypted at rest using industry-standard algorithms</li>
            <li><strong>Secure Infrastructure:</strong> Our cloud infrastructure is hosted with leading providers who maintain rigorous security certifications and physical protections</li>
            <li><strong>Access Controls:</strong> Strict internal policies limit who can access systems containing user data, with all access logged and monitored</li>
            <li><strong>Regular Audits:</strong> We conduct regular security assessments, penetration testing, and code reviews to identify and address potential vulnerabilities</li>
            <li><strong>Automatic Deletion:</strong> Processed images are automatically deleted from our servers after a short retention period, minimizing exposure</li>
          </ul>

          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Learn More:</strong> For complete details on our data practices, please review our comprehensive <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </section>

        {/* Section 8: Future Roadmap */}
        <section id="future-roadmap" className="legal-section">
          <h2 className="legal-section-title">8. Future Roadmap</h2>
          <p className="legal-text">
            PicNova is continuously evolving. Our development team works tirelessly to improve existing features, introduce new capabilities, and ensure that PicNova remains at the forefront of AI-powered image technology. While specific timelines may vary, here's a glimpse of our vision for the future:
          </p>

          <h3 className="legal-subsection-title">Upcoming Enhancements</h3>
          <ul className="legal-list">
            <li><strong>Advanced Generation Models:</strong> Integration of next-generation AI models for even higher quality, more coherent, and more controllable image generation</li>
            <li><strong>Video Capabilities:</strong> Expanding beyond static images to include AI-powered video enhancement and generation features</li>
            <li><strong>Collaboration Features:</strong> Tools for teams to work together on creative projects, share assets, and maintain brand consistency</li>
            <li><strong>Expanded Style Library:</strong> A growing collection of artistic styles, templates, and presets curated by artists and our AI team</li>
            <li><strong>Improved Localization:</strong> Better support for multiple languages and regional preferences to serve our global user base</li>
          </ul>

          <h3 className="legal-subsection-title">Long-Term Vision</h3>
          <ul className="legal-list">
            <li>Integration with other creative tools and platforms for seamless workflow</li>
            <li>Expanded on-device AI capabilities for faster processing and offline use</li>
            <li>Advanced personalization that learns your creative preferences over time</li>
            <li>New modalities including 3D content and augmented reality features</li>
            <li>Community features for sharing, collaboration, and inspiration</li>
          </ul>

          <h3 className="legal-subsection-title">User-Driven Development</h3>
          <p className="legal-text">
            Our roadmap is significantly influenced by user feedback. We actively listen to feature requests, analyze usage patterns, and engage with our community to understand what matters most. If you have ideas for how PicNova could better serve your needs, we want to hear from you.
          </p>
        </section>

        {/* Section 9: Contact */}
        <section id="contact" className="legal-section">
          <h2 className="legal-section-title">9. Get in Touch</h2>
          <p className="legal-text">
            We value our relationship with every PicNova user and welcome your feedback, questions, and ideas. There are several ways to connect with us:
          </p>

          <h3 className="legal-subsection-title">Support & Inquiries</h3>
          <ul className="legal-list">
            <li><strong>General Support:</strong> support@picnova.app</li>
            <li><strong>Bug Reports:</strong> Please include detailed steps to reproduce any issues, along with your device model and app version</li>
            <li><strong>Feature Requests:</strong> We read every suggestion and prioritize based on community interest and alignment with our vision</li>
            <li><strong>Response Time:</strong> We strive to respond to all inquiries within 2-3 business days</li>
          </ul>

          <h3 className="legal-subsection-title">Stay Connected</h3>
          <p className="legal-text">
            Follow our updates, tips, and community showcases through our official channels. We regularly share tutorials, highlight exceptional user creations, and announce new features and improvements.
          </p>

          <h3 className="legal-subsection-title">Feedback Matters</h3>
          <p className="legal-text">
            Your experience with PicNova directly shapes our development priorities. Whether it's a small usability improvement or a major feature idea, we want to know what would make PicNova more valuable to you. Don't hesitate to reach out—every message is read and appreciated.
          </p>

          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Thank you for choosing PicNova.</strong> We're honored to be part of your creative journey and committed to continuously improving your experience. Together, we're redefining what's possible with AI-powered image creation.
            </p>
          </div>
        </section>

        <LegalFooter />
      </main>
    </>
  );
};

export default AboutApp;
