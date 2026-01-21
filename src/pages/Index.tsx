import { Link } from "react-router-dom";
import { Sparkles, Shield, ScrollText, Info, ExternalLink } from "lucide-react";

const Index = () => {
  const pages = [
    {
      title: "Privacy Policy",
      description: "Learn how PicNova collects, uses, and protects your personal information and images.",
      icon: Shield,
      path: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      description: "Understand the terms governing your use of PicNova's AI-powered image services.",
      icon: ScrollText,
      path: "/terms-and-conditions",
    },
    {
      title: "About App",
      description: "Discover PicNova's features, mission, and commitment to responsible AI innovation.",
      icon: Info,
      path: "/about-app",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
              <img src="/logoo.png" alt="PicNova Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PicNova</h1>
              <p className="text-sm text-muted-foreground">Legal & Information Center</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Legal Documents & App Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access PicNova's privacy policy, terms of service, and learn more about our AI-powered image generation and enhancement application.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <page.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {page.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {page.description}
              </p>
              <div className="flex items-center text-sm font-medium text-primary">
                Read More
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-2xl bg-accent/50 border border-border p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            About These Pages
          </h3>
          <p className="text-muted-foreground mb-4">
            These documents are provided to comply with Google Play Developer Program Policies and to ensure transparency with our users. PicNova is committed to protecting your privacy, operating ethically, and providing clear information about our services.
          </p>
          <p className="text-sm text-muted-foreground">
            For questions or concerns about these policies, contact us at{" "}
            <a href="mailto:support@picnova.app" className="text-primary hover:underline">
              support@picnova.app
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">PicNova</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PicNova • CoderzPark • Basit Khokhar
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
