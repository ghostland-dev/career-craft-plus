import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CVCraft
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Connexion
          </Button>
          <Button variant="gradient" size="sm">
            Essai gratuit
          </Button>
        </div>
      </div>
    </header>
  );
};