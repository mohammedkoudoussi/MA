"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Clock,
  Heart,
  Utensils,
  Truck,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ChefHat,
  Leaf,
  DollarSign,
  Zap,
  Users,
  Shield,
  Eye,
} from "lucide-react"
import Image from "next/image"

export default function TyabSehaWebsite() {
  const menuItems = [
    {
      name: "Pack Énergie+",
      description: "Un repas complet pour étudiants et travailleurs : sandwich au thon, jus frais et snack, prêt à emporter.",
      image: "/thon.jpg?height=200&width=300",
      category: "Formules & Packs",
      nutrition: {
        calories: 540,
        protein: 27.5,
        carbs: 60,
        fat: 18,
        fiber: 7,
      },
      price: "20 MAD",
    },
    {
      name: "Pack Boost",
      description: "Un délicieux plat de pâtes au thon accompagné d’un jus citron rafraîchissant et d’un snack pour une pause complète et gourmande.",
      image: "/patte.jpg?height=200&width=300",
      category: "Formules & Packs",
      nutrition: {
        calories: 797,
        protein: 31,
        carbs: 92,
        fat: 32,
        fiber: 4.3 ,
      },
      price: "23 MAD",
    },
    {
      name: "Pack Sahti",
      description: "Un plat équilibré à base de riz, poulet tendre et légumes sautés, accompagné d’un jus frais citronné et d’un snack pour une pause saine et complète.",
      image: "/riz.jpg?height=200&width=300",
      category: "Formules & Packs",
      nutrition: {
        calories: 665,
        protein: 38.5,
        carbs: 68,
        fat: 23.9,
        fiber: 4.5,
      },
      price: "20 MAD",
    },
    {
      name: "zamita",
      description: "Un mélange ancestral 100 % naturel à base de céréales, légumineuses, graines et épices, riche en énergie, en fibres et en bons nutriments. Idéal pour bien commencer la journée ou recharger les batteries naturellement.",
      image: "/zemita.jpg?height=200&width=300",
      category: "Produits traditionnels",
      nutrition: {
        calories: 2600,
        protein: 50,
        carbs: 220,
        fat: 160 ,
        fiber: 30,
      },
      price: "65 MAD",
    },
    {
      name: "Couscous",
      description: "Un couscous marocain généreux, préparé avec de la semoule fine, des légumes frais de saison et du poulet tendre, mijoté avec des épices traditionnelles pour un goût authentique et réconfortant. (4 personnes)",
      image: "/couscous.jpg?height=200&width=300",
      category: "Plats traditionnels",
      nutrition: {
        calories: 2200 ,
        protein: 140,
        carbs: 240,
        fat: 60,
        fiber: 32,
      },
      price: "90 MAD",
    },
    {
      name: "Pastilla",
      description: "plat traditionnel marocain raffiné, généralement préparé avec une pâte fine appelée warqa, garnie d’un mélange savoureux de poulet , d’amandes, d’épices, et d’un subtil équilibre sucré-salé avec de la cannelle et du sucre glace. (6 personnes)",
      image: "/pastilla.jpg?height=200&width=300",
      category: "Plats traditionnels",
      nutrition: {
        calories: 4200,
        protein:  240,
        carbs: 360,
        fat: 240,
        fiber: 30,
      },
      price: "400 MAD",
    },
  ]

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Faits Maison avec Amour",
      description: "Chaque repas est préparé par des cuisiniers locaux expérimentés utilisant des recettes traditionnelles",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Nutrition Équilibrée",
      description: "Des repas soigneusement élaborés pour allier saveur et apport nutritionnel",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: "Prix Abordable ",
      description: "De la nourriture maison de qualité à des prix adaptés aux votre budgets",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Livraison Rapide",
      description: "Livraison rapide à votre porte, vos repas restent frais et chauds",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Choisissez votre repas",
      description: "Parcourez notre carte de plats marocains sains",
      icon: <Utensils className="h-8 w-8 text-green-600" />,
    },
    {
      step: "2",
      title: "Personnalisez votre commande",
      description: "Adaptez les ingrédients et les portions selon vos préférences",
      icon: <Heart className="h-8 w-8 text-orange-500" />,
    },
    {
      step: "3",
      title: "Confirmez via WhatsApp",
      description: "Envoyez-nous votre commande via WhatsApp pour une communication simple",
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
    },
    {
      step: "4",
      title: "Recevez votre repas",
      description: "Recevez votre repas frais et fait maison à votre porte",
      icon: <Truck className="h-8 w-8 text-orange-500" />,
    },
  ]

const testimonials = [
  {
    name: "Amal laachir.",
    message: "Les plats sont délicieux et livrés à temps, je recommande vivement !",
  },
  {
    name: "Hassan laaroussi.",
    message: "Service impeccable, et la qualité des repas est au top.",
  },
  {
    name: "Sarah koudoussi.",
    message: "TyabSeha m’a fait redécouvrir la cuisine marocaine authentique.",
  },
];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">TyabSeha</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Accueil
              </a>
              <a href="#menu" className="text-gray-700 hover:text-green-600 transition-colors">
                Menu
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                À Propos
              </a>
              <a href="#join" className="text-gray-700 hover:text-green-600 transition-colors">
                Rejoindre
              </a>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
                onClick={() => window.open("https://wa.link/kc9awo ", "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Commander Maintenant
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Héro */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/food.jpg?height=800&width=1200')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Le goût de la tradition,
            <br />
            <span className="text-orange-400">l’équilibre d’aujourd’hui</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Repas marocains faits maison, sains et livrés frais à votre porte
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open("https://wa.link/kc9awo ", "_blank")}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Commander Maintenant
          </Button>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">À Propos de TyabSeha</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                TyabSeha est une initiative marocaine qui allie tradition culinaire et modernité pour rendre l’alimentation saine accessible, pratique et abordable.
Notre mission est de proposer des repas marocains faits maison, équilibrés et préparés avec soin par des cuisinières locales.

🌿 Nous croyons que manger sainement ne doit pas être un luxe. C’est pourquoi nous collaborons avec des cuisinières passionnées, valorisons des recettes authentiques et offrons une expérience simple via commande WhatsApp et livraison rapide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Menu */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Menu</h2>
            <p className="text-lg text-gray-600">Découvrez notre sélection de plats marocains sains et traditionnels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl"
              >
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">{item.category}</Badge>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {/* Informations Nutritionnelles */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Leaf className="h-4 w-4 mr-1 text-green-600" />
                      Valeurs nutritionnelles 
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Calories :</span>
                        <span className="font-medium text-orange-600">{item.nutrition.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Protéines :</span>
                        <span className="font-medium text-green-600">{item.nutrition.protein}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Glucides :</span>
                        <span className="font-medium">{item.nutrition.carbs}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lipides :</span>
                        <span className="font-medium">{item.nutrition.fat}g</span>
                      </div>
                      <div className="flex justify-between col-span-2">
                        <span className="text-gray-600">Fibres :</span>
                        <span className="font-medium text-green-600">{item.nutrition.fiber}g</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                    onClick={() =>
                      window.open(`https://wa.me/212609067313?text=Je veux commander : ${item.name}`, "_blank")
                    }
                  >
                     Commander
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* Témoignages clients */}
     <section className="py-20 bg-orange-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">Ils nous font confiance</h2>
    <div className="space-y-12">
      {testimonials.map((testi, i) => (
        <blockquote key={i} className="bg-gray-50 p-8 rounded-lg shadow-md">
          <p className="text-lg italic text-gray-700">“{testi.message}”</p>
          <footer className="mt-4 text-sm font-semibold text-gray-900">— {testi.name}</footer>
        </blockquote>
      ))}
    </div>
  </div>
</section>



      {/* Comment ça marche */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comment Ça Marche</h2>
            <p className="text-lg text-gray-600">Des étapes simples pour recevoir votre repas sain</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.icon}
                </div>
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir TyabSeha */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi Choisir TyabSeha ?</h2>
            <p className="text-lg text-gray-600"> </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl"
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carte Interactive 
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Réseau à Casablanca</h2>
            <p className="text-lg text-gray-600">Découvrez où nos cuisiniers talentueux sont situés</p>
          </div>
          <Card className="h-96 bg-gray-100 rounded-2xl shadow-lg">
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carte Interactive Bientôt Disponible</h3>
                <p className="text-gray-600">
                  Nous travaillons sur une carte interactive pour vous montrer exactement où nos cuisiniers sont situés à Casablanca
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>*/}

      {/* Rejoindre le réseau */}
      <section id="join" className="py-20 bg-gradient-to-r from-green-500 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Rejoignez Notre Réseau de Cuisiniers</h2>
          <p className="text-xl text-green-100 mb-8">
            Partagez vos compétences culinaires et gagnez un revenu en cuisinant des plats marocains traditionnels. Nous fournissons une formation hygiène et vous offrons une visibilité sur notre plateforme.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-green-100">Rejoignez notre communauté</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-green-100">Formation hygiène fournie</p>
            </div>
            <div className="text-center">
              <Eye className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-green-100">Obtenez visibilité et clients</p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open(" https://wa.me/212609067313?text=Je veux rejoindre le réseau en tant que cuisinier", "_blank")}
          >
            <ChefHat className="h-5 w-5 mr-2" />
            Rejoindre Notre Réseau
          </Button>
        </div>
      </section>

      {/* Section Instagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Suivez-nous sur Instagram</h2>
            <p className="text-lg text-gray-600">Découvrez nos derniers plats et nos clients heureux</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
              <Card
                
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0 h-full">
                  <Image
                    src={`/IMG_1.JPG?height=300&width=200`}
                    alt={`Publication Instagram `}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover hover:scale-120 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card
                
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0 h-full">
                  <Image
                    src={`/IMG_2.PNG?height=300&width=200`}
                    alt={`Publication Instagram `}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover hover:scale-120 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card
                
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0 h-full">
                  <Image
                    src={`/IMG_3.JPG?height=300&width=200`}
                    alt={`Publication Instagram `}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover hover:scale-120 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
               <Card
                
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0 h-full">
                  <Image
                    src={`/jri.jpg?height=300&width=200`}
                    alt={`Publication Instagram `}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover hover:scale-120 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-6"
              onClick={() => window.open(" https://instagram.com/tyabseha_ ", "_blank")}
            >
              <Instagram className="h-4 w-4 mr-2" />
              Suivre @tyabseha_
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">TyabSeha</span>
              </div>
              <p className="text-gray-400 mb-6">
                Apportant des repas marocains sains et faits maison jusqu’à votre porte. Préparés avec amour par des cuisiniers locaux, livrés frais quotidiennement.
              </p>
              <div className="flex space-x-4">
                
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-gray-400 hover:text-white transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-gray-400 hover:text-white transition-colors">
                    Rejoindre en tant que cuisinier
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Coordonnées</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">+212 6 090 673 13</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">Commandes via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">Casablanca, Mohammédia, Tanger, Maroc</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 TyabSeha. Tous droits réservés. Fait avec ❤️ au Maroc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}