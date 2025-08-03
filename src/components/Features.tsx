import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Bot, 
  Users, 
  BarChart3, 
  FileText, 
  Zap,
  Heart,
  Globe,
  Download
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Éditeur Drag & Drop",
    description: "Créez des CV et portfolios avec notre éditeur intuitif. Templates modernes, personnalisation avancée.",
    highlight: "Design moderne"
  },
  {
    icon: Bot,
    title: "IA Intelligente",
    description: "Suggestions de contenu, adaptation du ton, vérification ATS, recommandations personnalisées.",
    highlight: "Optimisation IA"
  },
  {
    icon: Users,
    title: "Coaching Expert",
    description: "Accès à des coachs carrière, sessions personnalisées, suivi de progression, webinars exclusifs.",
    highlight: "Humain + IA"
  },
  {
    icon: BarChart3,
    title: "Analytics Avancés",
    description: "Suivez vos candidatures, taux de lecture, feedback, statistiques du marché en temps réel.",
    highlight: "Data-driven"
  },
  {
    icon: FileText,
    title: "Multi-formats",
    description: "Exportez en PDF, Word, lien web, intégration LinkedIn, lettres de motivation automatiques.",
    highlight: "Flexibilité"
  },
  {
    icon: Globe,
    title: "Partage & Feedback",
    description: "Liens publics, demande de retours, notations externes, collaboration en équipe.",
    highlight: "Collaboratif"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Tout pour ta carrière,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              en une plateforme
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CVCraft combine création de CV moderne, intelligence artificielle et accompagnement humain 
            pour maximiser tes chances de décrocher le job de tes rêves.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group-hover:border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-feature rounded-3xl p-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary font-semibold">Solution complète</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Prêt à transformer ta carrière ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoins des milliers de professionnels qui ont déjà boosté leur carrière avec CVCraft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Créer mon CV maintenant
            </Button>
            <Button variant="outline" size="lg">
              Découvrir les templates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};