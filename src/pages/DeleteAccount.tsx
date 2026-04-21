import LegalNav from "@/components/LegalNav";
import LegalFooter from "@/components/LegalFooter";

const DeleteAccount = () => {
  return (
    <>
      <LegalNav />
      <main className="legal-container">
        <header className="legal-header">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <img src="/logoo.png" alt="PicNova Logo" className="w-full h-full object-cover rounded-sm" />
          </div>
          <h1 className="legal-title">Delete Account</h1>
        </header>

        {/* Section 1: Introduction */}
        <section className="legal-section">
          <h2 className="legal-section-title">1. Introduction</h2>
          <p className="legal-text">
            At PicNova, we respect your privacy and give you full control over your data. You can request to delete your account and all associated personal data at any time.
          </p>
          <div className="legal-highlight-box">
            <p className="legal-text mb-0">
              <strong>Warning:</strong> Account deletion is permanent and cannot be undone. Once processed, you will lose access to all your generated images, history, and account information.
            </p>
          </div>
        </section>

        {/* Section 2: How to Delete Account (Steps) */}
        <section className="legal-section">
          <h2 className="legal-section-title">2. How to Delete Your Account</h2>
          <p className="legal-text">
            There are two ways to request the deletion of your PicNova account and associated data:
          </p>

          <h3 className="legal-subsection-title">Option A: In-App Deletion (Recommended)</h3>
          <ul className="legal-list">
            <li>Open the <strong>PicNova app</strong> on your mobile device.</li>
            <li>Navigate to the <strong>Settings</strong> or <strong>Profile</strong> section.</li>
            <li>Tap on the <strong>"Delete Account"</strong> option.</li>
            <li>Follow the on-screen prompts to confirm your deletion request.</li>
          </ul>

          <h3 className="legal-subsection-title">Option B: Email Request</h3>
          <ul className="legal-list">
            <li>Send an email to our support team at <strong>basit@coderzpark.com</strong> from the email address associated with your PicNova account.</li>
            <li>Use the subject line: <strong>"Account Deletion Request"</strong>.</li>
            <li>Include the following message: <em>"Please delete my PicNova account and all associated data."</em></li>
          </ul>
        </section>

        {/* Section 3: Data That Will Be Deleted */}
        <section className="legal-section">
          <h2 className="legal-section-title">3. Data That Will Be Deleted</h2>
          <p className="legal-text">
            Upon processing your account deletion request, the following information will be permanently removed from our systems:
          </p>
          <ul className="legal-list">
            <li><strong>User Account Details:</strong> Name, email address, and phone number.</li>
            <li><strong>Login Credentials:</strong> Authentication tokens and associated social login links.</li>
            <li><strong>Media Content:</strong> All AI-generated images, enhanced photos, and processing history.</li>
            <li><strong>App Data:</strong> Stored prompts, project drafts, and user preferences.</li>
          </ul>
        </section>

        {/* Section 4: Data Retention Policy */}
        <section className="legal-section">
          <h2 className="legal-section-title">4. Data Retention Policy</h2>
          <p className="legal-text">
            After initiating an account deletion request:
          </p>
          <ul className="legal-list">
            <li>Your data may be retained in securely encrypted backups for up to <strong>30 days</strong> to comply with our security protocols, legal obligations, and fraud prevention measures.</li>
            <li>During this 30-day period, your account will be inactive and inaccessible.</li>
            <li>Following this period, all your data will be permanently and irreversibly deleted from our active databases and backup systems.</li>
          </ul>
        </section>

        {/* Section 5: Optional Data Control */}
        <section className="legal-section">
          <h2 className="legal-section-title">5. Manage Data Without Deleting Your Account</h2>
          <p className="legal-text">
            If you wish to retain your account but want to remove specific pieces of information, you have the option to:
          </p>
          <ul className="legal-list">
            <li>Manually delete individual generated images or processing history directly within the app.</li>
            <li>Request the deletion of specific data sets (e.g., just your generation history) by contacting our support team, without needing to delete your entire account.</li>
          </ul>
        </section>

        {/* Section 6: Contact Support */}
        <section className="legal-section">
          <h2 className="legal-section-title">6. Contact Support</h2>
          <p className="legal-text">
            If you need assistance with the account deletion process or have any questions about how your data is handled, please reach out to us:
          </p>
          <ul className="legal-list">
            <li><strong>Support Email:</strong> <a href="mailto:basit@coderzpark.com" className="text-primary hover:underline font-medium">basit@coderzpark.com</a></li>
          </ul>
          <p className="legal-text mt-4">
            We aim to process all data deletion requests promptly and transparently in accordance with our Privacy Policy.
          </p>
        </section>

        <LegalFooter />
      </main>
    </>
  );
};

export default DeleteAccount;
