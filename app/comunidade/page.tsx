'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PetIllustration from '@/components/PetIllustration';
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
  MapPin,
  Play,
  Quote
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Community() {
  const [photoForm, setPhotoForm] = useState({
    name: '',
    petName: '',
    story: ''
  });

  interface Event {
    date: string;
    title: string;
    type: 'event' | 'meetup' | 'training';
  }

  const mockEvents: Event[] = [
    { date: '6', title: 'Encontro Canino no Parque', type: 'meetup' },
    { date: '14', title: 'Feira de Adoção', type: 'event' },
    { date: '21', title: 'Sessão de Treinamento ao Ar Livre', type: 'training' },
  ];

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
      <Breadcrumb items={[{ label: 'Comunidade' }]} />
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

      {/* Photo Gallery & Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Photo Gallery */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-primary mb-6">Galeria de Fotos</h2>
                  
                  {/* Photo Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[1, 2, 3, 4].map((photo) => (
                      <div key={photo} className="aspect-square bg-warm-beige/50 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-pet-cream/50 to-warm-beige/30"></div>
                        <div className="relative z-10">
                          <PetIllustration 
                            type={photo % 2 === 0 ? 'cat' : 'dog'} 
                            size="md" 
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="default" className="w-full">
                    <Camera className="w-5 h-5 mr-2" />
                    Enviar Sua Foto
                  </Button>
                </CardContent>
              </Card>

              {/* Submit Photo Form */}
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8 mt-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary mb-6">Enviar Sua Foto</h3>
                  
                  <div className="space-y-4">
                    <Input
                      placeholder="Nome"
                      value={photoForm.name}
                      onChange={(e) => setPhotoForm({...photoForm, name: e.target.value})}
                      className="rounded-full"
                    />
                    
                    <Input
                      placeholder="Nome do Pet"
                      value={photoForm.petName}
                      onChange={(e) => setPhotoForm({...photoForm, petName: e.target.value})}
                      className="rounded-full"
                    />
                    
                    <Textarea
                      placeholder="Conte a história do seu pet..."
                      value={photoForm.story}
                      onChange={(e) => setPhotoForm({...photoForm, story: e.target.value})}
                      className="rounded-3xl min-h-[100px]"
                    />
                    
                    <div className="border-2 border-dashed border-border rounded-3xl p-8 text-center">
                      <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Clique para adicionar a foto</p>
                      <p className="text-sm text-muted-foreground">PNG, JPG até 5MB</p>
                    </div>
                    
                    <Button variant="default" className="w-full">
                      Enviar Foto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Testimonials & Events */}
            <div className="space-y-8">
              {/* Testimonials */}
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary mb-6">Depoimentos</h3>
                  
                  <div className="space-y-6">
                    {/* Video Testimonial */}
                    <div className="relative">
                      <div className="aspect-video bg-warm-beige/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-pet-cream/50 to-warm-beige/30"></div>
                        <div className="relative z-10 flex items-center justify-center">
                          <PetIllustration type="both" size="md" className="mr-4" />
                          <div className="bg-accent/90 w-12 h-12 rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Testimonial */}
                    <div className="bg-warm-beige/30 rounded-2xl p-4">
                      <Quote className="w-6 h-6 text-accent mb-2" />
                      <p className="text-muted-foreground mb-3 italic">
                        Meus cães adoram esses petiscos! Eles são saudáveis e naturais.
                      </p>
                      <p className="text-sm font-semibold text-primary">— Ana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Events Calendar */}
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary mb-6">Eventos em Brasília</h3>
                  
                  {/* Mini Calendar */}
                  <div className="bg-warm-beige/30 rounded-2xl p-4 mb-6">
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-2">
                      <div>D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {Array.from({length: 35}, (_, i) => {
                        const day = i - 3; // Start from day 1
                        const isCurrentMonth = day > 0 && day <= 30;
                        const hasEvent = [6, 14, 21].includes(day);
                        
                        return (
                          <div key={i} className={`h-8 flex items-center justify-center rounded ${
                            isCurrentMonth 
                              ? hasEvent 
                                ? 'bg-accent text-accent-foreground font-semibold' 
                                : 'text-foreground hover:bg-accent/20' 
                              : 'text-muted-foreground/40'
                          }`}>
                            {isCurrentMonth ? day : ''}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Events List */}
                  <div className="space-y-3">
                    {mockEvents.map((event, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {event.date}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-primary text-sm">{event.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>Brasília</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Month Navigation */}
                  <div className="mt-6 pt-4 border-t border-border/20">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-primary">Setembro</span>
                      <div className="flex space-x-4">
                        <button className="text-muted-foreground hover:text-primary">
                          Setembro
                        </button>
                        <button className="text-accent font-semibold">
                          Outubro
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                    &ldquo;{testimonial.text}&rdquo;
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
