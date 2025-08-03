import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "/mois",
    description: "Parfait pour commencer",
    features: [
      "2 CV et portfolios",
      "Templates de base",
      "Export PDF avec branding",
      "Support communautaire",
      "Suggestions IA limitées"
    ],
    limitations: [
      "Branding CVCraft visible",
      "Support limité",
      "Pas d'analytics"
    ],
    cta: "Commencer gratuitement",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "19€",
    period: "/mois",
    description: "Pour les professionnels ambitieux",
    features: [
      "CV et portfolios illimités",
      "Tous les templates premium",
      "Export sans branding",
      "IA avancée et optimisation ATS",
      "Analytics détaillés",
      "Support prioritaire",
      "Lettres de motivation IA",
      "Partage et feedback",
      "Stockage cloud 10GB"
    ],
    cta: "Essayer Pro",
    variant: "gradient" as const,
    popular: true
  },
  {
    name: "Expert",
    price: "49€",
    period: "/mois",
    description: "Accompagnement complet carrière",
    features: [
      "Tout du plan Pro",
      "Sessions coaching 1-1 (2h/mois)",
      "Relecture experte de CV",
      "Analyse marché personnalisée",
      "Matching automatique d'offres",
      "Webinars exclusifs",
      "Support dédié 24/7",
      "Stockage cloud illimité",
      "API et intégrations",
      "Tableaux de bord avancés"
    ],
    cta: "Devenir Expert",
    variant: "premium" as const,
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Tarifs
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Des prix qui{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              s'adaptent à tes besoins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Commence gratuitement, évolue à ton rythme. Tous nos plans incluent 
            l'accès à nos templates et fonctionnalités IA de base.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card border rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'border-primary scale-105 lg:scale-110' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary border-0 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Plus populaire
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations && plan.limitations.map((limitation, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-60">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                    </div>
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-feature px-6 py-3 rounded-full mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold">Garantie 30 jours satisfait ou remboursé</span>
          </div>
          <p className="text-muted-foreground">
            Tu peux changer ou annuler ton abonnement à tout moment. 
            <br />
            Pas d'engagement, pas de frais cachés.
          </p>
        </div>
      </div>
    </section>
  );
};