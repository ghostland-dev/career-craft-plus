import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Users } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-feature relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Utilisé par +10,000 professionnels</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Crée un CV qui{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                te ressemble
              </span>{" "}
              et décroche l'entretien
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Plateforme SaaS complète pour créer des CV modernes, portfolios interactifs et bénéficier d'un accompagnement carrière personnalisé avec l'IA et nos experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="gradient" size="xl" className="group">
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Voir les templates
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold">2min</span>
                </div>
                <p className="text-sm text-muted-foreground">Création rapide</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Templates pros</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">Support expert</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full transform scale-75"></div>
            <div className="relative bg-white rounded-2xl shadow-elegant p-2">
              <img 
                src={heroDashboard} 
                alt="CVCraft Dashboard Interface" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};