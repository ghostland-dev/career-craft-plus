import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, Download, Sparkles } from "lucide-react";
import cvTemplates from "@/assets/cv-templates.jpg";

const templateCategories = [
  { name: "Créatif", count: 15, popular: true },
  { name: "Classique", count: 12, popular: false },
  { name: "Moderne", count: 18, popular: true },
  { name: "Tech", count: 10, popular: false },
  { name: "Marketing", count: 8, popular: false },
  { name: "Étudiant", count: 6, popular: true }
];

export const Templates = () => {
  return (
    <section id="templates" className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Templates
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Des designs qui{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              marquent l'esprit
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 50 templates professionnels créés par des designers experts. 
            Chaque template est optimisé pour les ATS et adapté aux tendances actuelles.
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {templateCategories.map((category, index) => (
            <Badge 
              key={index} 
              variant={category.popular ? "default" : "outline"}
              className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform"
            >
              {category.name} ({category.count})
              {category.popular && <Star className="w-3 h-3 ml-1 fill-current" />}
            </Badge>
          ))}
        </div>
        
        {/* Templates Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Templates Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-elegant p-6">
              <img 
                src={cvTemplates} 
                alt="Collection de templates CV modernes" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                50+ Templates
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Templates conçus pour convertir
              </h3>
              <p className="text-muted-foreground text-lg">
                Nos templates sont développés en collaboration avec des recruteurs 
                et optimisés pour maximiser tes chances d'obtenir un entretien.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Optimisé ATS</h4>
                  <p className="text-sm text-muted-foreground">
                    Tous nos templates passent les filtres automatiques des entreprises
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personnalisation totale</h4>
                  <p className="text-sm text-muted-foreground">
                    Couleurs, polices, sections - adapte chaque détail à ton style
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Multi-formats</h4>
                  <p className="text-sm text-muted-foreground">
                    PDF, Word, lien web - exporte dans le format de ton choix
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                <Sparkles className="w-5 h-5 mr-2" />
                Parcourir tous les templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};