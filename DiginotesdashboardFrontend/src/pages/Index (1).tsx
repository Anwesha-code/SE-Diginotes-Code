import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { StickyNote, Sparkles, Shield, Users, Zap, FolderSync } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-note-yellow/10 via-background to-note-purple/10">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-xl">
            <StickyNote className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DigiNotes
          </span>
        </div>
        <Button onClick={() => navigate("/auth")} size="lg" className="font-medium">
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Digital Sticky Notes Workspace</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Organize Your Ideas
            <br />
            <span className="bg-gradient-to-r from-secondary via-accent to-info bg-clip-text text-transparent">
              Beautifully
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Create, customize, and collaborate on sticky notes that persist across your workspace. 
            Your thoughts, perfectly organized.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={() => navigate("/auth")} size="lg" className="text-lg h-14 px-8 font-semibold">
              Get Started
            </Button>
            <Button onClick={() => navigate("/dashboard")} variant="outline" size="lg" className="text-lg h-14 px-8">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
            <p className="text-muted-foreground">
              Change colors, fonts, sizes, and opacity. Add images and diagrams to your notes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-info" />
            </div>
            <h3 className="text-xl font-bold mb-2">Always Persistent</h3>
            <p className="text-muted-foreground">
              Your notes stay exactly where you put them, even after closing tabs or restarting.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
              <FolderSync className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Organization</h3>
            <p className="text-muted-foreground">
              Group notes into folders, pin important ones, and mark favorites for quick access.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
            <p className="text-muted-foreground">
              Share folders with team members. Control who can view or edit your notes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Email-based accounts with 2FA. Your data is encrypted and protected.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-note-orange/30 flex items-center justify-center mb-4">
              <StickyNote className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Overlay Mode</h3>
            <p className="text-muted-foreground">
              Pin notes to always stay visible on your screen, across all tabs and windows.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">Anwesha Singh</h3>
              <p className="text-muted-foreground">Student at Manipal University Jaipur</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">Jiya Tejwani</h3>
              <p className="text-muted-foreground">Student at Manipal University Jaipur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 DigiNotes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
