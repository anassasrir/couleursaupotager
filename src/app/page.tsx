import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Leaf, BookOpen, StickyNote, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-green-100 text-green-700 rounded-full mb-6">
          <Leaf className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Bienvenue sur <span className="text-green-600">Couleurs au potager</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Un espace dédié au jardinage, à la prise de notes et à la planification de vos cultures.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" className="px-8 py-3 text-lg">
            Lire le Blog
          </Button>
          <Button variant="secondary" className="px-8 py-3 text-lg">
            Voir mon calendrier
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold">Blog</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              Découvrez mes derniers articles sur le potager, mes astuces et mes retours d&apos;expérience.
            </p>
            <Link href="/blog" className="text-green-600 font-medium hover:underline">
              Explorer les articles →
            </Link>
          </CardBody>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-3">
            <StickyNote className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold">Notes</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              Prenez des notes sur vos plantations, vos observations et vos idées pour les prochaines saisons.
            </p>
            <Link href="/notes" className="text-green-600 font-medium hover:underline">
              Mes notes personnelles →
            </Link>
          </CardBody>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-3">
            <CalendarIcon className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold">Calendrier</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              Planifiez vos semis, vos récoltes et ne manquez aucune étape clé de votre jardin.
            </p>
            <Link href="/calendar" className="text-green-600 font-medium hover:underline">
              Gérer le calendrier →
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
