import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CVCraft
            </div>
            <p className="text-muted-foreground text-sm">
              La plateforme SaaS complète pour créer des CV modernes, 
              portfolios interactifs et booster ta carrière avec l'IA et nos experts.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produit</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Créateur de CV
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                IA Assistant
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Coaching carrière
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Analytics
              </a>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Centre d'aide
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Tutoriels
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                État du service
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Légal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                RGPD
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CVCraft. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-4 md:mt-0">
            Fait avec <Heart className="w-4 h-4 text-red-500 fill-current mx-1" /> en France
          </div>
        </div>
      </div>
    </footer>
  );
};