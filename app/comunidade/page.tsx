import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  Star, 
  Camera, 
  Award,
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';

export default function Community() {
  const communityStats = [
    {
      icon: Users,
      number: "5.000+",
      label: "Tutores Ativos",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Heart,
      number: "15.000+",
      label: "Pets Felizes",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: MessageCircle,
      number: "500+",
      label: "Histórias Compartilhadas",
      color: "bg-warm-beige/30 text-primary"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Avaliação Média",
      color: "bg-leaf-green/20 text-primary"
    }
  ];

  const communityFeatures = [
    {
      icon: Camera,
      title: "Compartilhe Fotos",
      description: "Mostre seu pet aproveitando nossos petiscos e inspire outros tutores",
      action: "Enviar Foto"
    },
    {
      icon: MessageCircle,
      title: "Conte sua História",
      description: "Compartilhe como nossos produtos fizeram a diferença na vida do seu pet",
      action: "Compartilhar"
    },
    {
      icon: Award,
      title: "Ganhe Recompensas",
      description: "Participe de sorteios e promoções exclusivas para nossa comunidade",
      action: "Participar"
    },
    {
      icon: Users,
      title: "Conecte-se",
      description: "Converse com outros tutores e troque experiências sobre cuidados com pets",
      action: "Conectar"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      petName: "Luna",
      petType: "Golden Retriever",
      text: "A Luna adora os petiscos da Petiska & Gatão! Desde que começamos a dar, ela fica muito mais animada e seu pelo está brilhando.",
      rating: 5,
      image: "🐕"
    },
    {
      name: "João Santos",
      petName: "Mimi",
      petType: "Gato Persa",
      text: "Minha gata Mimi é muito exigente, mas os petiscos naturais conquistaram ela completamente. Recomendo para todos!",
      rating: 5,
      image: "🐱"
    },
    {
      name: "Ana Costa",
      petName: "Rex",
      petType: "Vira-lata",
      text: "O Rex tinha problemas digestivos, mas desde que mudamos para os petiscos naturais, ele está muito melhor. Gratidão!",
      rating: 5,
      image: "🐕"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Comunidade Petiska & Gatão
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Uma <span className="text-accent">Comunidade</span><br />
              de Amor pelos <span className="text-accent">Pets</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Faça parte da nossa família! Compartilhe momentos especiais, troque experiências 
              e conecte-se com outros tutores apaixonados por pets em Brasília.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Como Participar da Nossa Comunidade
            </h2>
            <p className="text-xl text-muted-foreground">
              Várias formas de se conectar e compartilhar amor pelos pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <Button variant="outline" size="sm">
                      {feature.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Histórias da Nossa Comunidade
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o que nossos tutores estão falando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Tutor(a) de {testimonial.petName} ({testimonial.petType})
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Share2 className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Acompanhe nosso dia a dia, veja fotos dos pets da comunidade e 
              fique por dentro de todas as novidades da Petiska & Gatão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="outline" size="lg">
                📱 Instagram
              </Button>
              <Button variant="outline" size="lg">
                📘 Facebook
              </Button>
              <Button variant="outline" size="lg">
                💬 WhatsApp
              </Button>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Use nossa hashtag oficial
              </h3>
              <div className="text-2xl font-bold text-accent mb-2">
                #PetiskaGatao
              </div>
              <p className="text-muted-foreground">
                Marque suas fotos para aparecer em nosso feed!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events and News */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Eventos e Novidades
            </h2>
            <p className="text-xl text-muted-foreground">
              Fique por dentro do que está acontecendo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Próximos Eventos</h3>
                    <p className="text-sm text-muted-foreground">Encontros da comunidade</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Participe dos nossos encontros mensais no Parque da Cidade. 
                  Uma oportunidade para conhecer outros tutores e seus pets!
                </p>
                <Button variant="outline" size="sm">
                  Ver Agenda
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Novidades</h3>
                    <p className="text-sm text-muted-foreground">Últimas atualizações</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Novos sabores chegando! Em breve teremos petiscos de salmão 
                  e batata doce. Cadastre-se para ser avisado primeiro.
                </p>
                <Button variant="outline" size="sm">
                  Quero Saber Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Faça Parte da Nossa Família
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se a milhares de tutores que já fazem parte da comunidade 
              Petiska & Gatão. Compartilhe, aprenda e celebre o amor pelos pets!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button variant="hero" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Entrar na Comunidade
                </Button>
              </Link>
              <Link href="/produtos">
                <Button variant="outline" size="lg">
                  Conhecer Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
