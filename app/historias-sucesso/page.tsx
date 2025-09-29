import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Quote, Users, TrendingUp, Award, MessageCircle, Camera } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      petName: "Luna",
      petType: "Golden Retriever",
      ownerName: "Maria Silva",
      location: "Asa Norte, Brasília",
      story: "Luna sempre foi uma cadela muito ativa, mas começou a apresentar problemas digestivos. Depois que mudamos para os petiscos da Petiska & Gatão, ela voltou a ser a mesma de sempre! Seu pelo está mais brilhante e ela adora os sabores naturais.",
      beforeAfter: {
        before: "Problemas digestivos e pelo opaco",
        after: "Digestão saudável e pelo brilhante"
      },
      rating: 5,
      image: "🐕",
      timeUsing: "8 meses"
    },
    {
      id: 2,
      petName: "Mimi",
      petType: "Gato Persa",
      ownerName: "João Santos",
      location: "Taguatinga, Brasília",
      story: "Mimi sempre foi muito exigente com comida. Tentamos várias marcas, mas ela rejeitava tudo. Os petiscos da Petiska & Gatão foram amor à primeira mordida! Agora ela até pede por mais e está muito mais sociável.",
      beforeAfter: {
        before: "Recusava a maioria dos petiscos",
        after: "Adora os petiscos e pede mais"
      },
      rating: 5,
      image: "🐱",
      timeUsing: "6 meses"
    },
    {
      id: 3,
      petName: "Rex",
      petType: "Vira-lata (Resgatado)",
      ownerName: "Ana Costa",
      location: "Águas Claras, Brasília",
      story: "Rex foi resgatado da rua em estado muito debilitado. Com os cuidados veterinários e os petiscos naturais da Petiska & Gatão, ele se transformou completamente! Ganhou peso saudável, seu pelo cresceu lindo e ele está cheio de energia.",
      beforeAfter: {
        before: "Desnutrido e sem energia",
        after: "Peso ideal e cheio de vida"
      },
      rating: 5,
      image: "🐕",
      timeUsing: "1 ano"
    },
    {
      id: 4,
      petName: "Bella",
      petType: "Shih Tzu",
      ownerName: "Carlos Oliveira",
      location: "Asa Sul, Brasília",
      story: "Bella tinha alergia alimentar e coceira constante. Depois de muitas tentativas, encontramos os petiscos naturais da Petiska & Gatão. Em poucas semanas, a coceira diminuiu drasticamente e ela está muito mais feliz!",
      beforeAfter: {
        before: "Alergia alimentar e coceira",
        after: "Pele saudável e sem coceira"
      },
      rating: 5,
      image: "🐕",
      timeUsing: "4 meses"
    },
    {
      id: 5,
      petName: "Simba",
      petType: "Gato SRD",
      ownerName: "Fernanda Lima",
      location: "Ceilândia, Brasília",
      story: "Simba estava acima do peso e o veterinário recomendou petiscos mais saudáveis. Com os produtos da Petiska & Gatão e exercícios, ele perdeu peso de forma saudável e está mais ativo que nunca!",
      beforeAfter: {
        before: "Sobrepeso e sedentário",
        after: "Peso ideal e muito ativo"
      },
      rating: 5,
      image: "🐱",
      timeUsing: "10 meses"
    },
    {
      id: 6,
      petName: "Thor",
      petType: "Pastor Alemão",
      ownerName: "Roberto Mendes",
      location: "Sobradinho, Brasília",
      story: "Thor é um cão de trabalho e precisa de muita energia. Os petiscos da Petiska & Gatão se tornaram sua recompensa favorita durante os treinos. Ele melhorou o foco e a disposição para as atividades!",
      beforeAfter: {
        before: "Baixo interesse nos treinos",
        after: "Motivado e focado nos exercícios"
      },
      rating: 5,
      image: "🐕",
      timeUsing: "1 ano e 2 meses"
    }
  ];

  const stats = [
    {
      number: "5.000+",
      label: "Pets Transformados",
      icon: Heart
    },
    {
      number: "98%",
      label: "Satisfação dos Tutores",
      icon: Star
    },
    {
      number: "50+",
      label: "Pet Shops Parceiros",
      icon: Award
    },
    {
      number: "2 anos",
      label: "Transformando Vidas",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Histórias de Sucesso
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Vidas <span className="text-accent">Transformadas</span><br />
              com <span className="text-accent">Amor</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Conheça as histórias reais de pets que tiveram suas vidas transformadas 
              com nossos petiscos naturais. Cada história é uma prova do nosso compromisso 
              com a saúde e felicidade dos nossos amigos de quatro patas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Histórias que Inspiram
            </h2>
            <p className="text-xl text-muted-foreground">
              Cada pet tem uma história única de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{story.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">{story.petName}</h3>
                        <p className="text-muted-foreground">{story.petType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <div className="mb-6">
                    <Quote className="w-6 h-6 text-accent mb-3" />
                    <p className="text-muted-foreground italic leading-relaxed mb-4">
                      "{story.story}"
                    </p>
                  </div>

                  {/* Before/After */}
                  <div className="bg-gradient-card rounded-2xl p-4 mb-6">
                    <h4 className="font-bold text-primary mb-3">Transformação:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground font-medium mb-1">Antes:</div>
                        <div className="text-destructive">{story.beforeAfter.before}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground font-medium mb-1">Depois:</div>
                        <div className="text-accent font-medium">{story.beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div>
                      <div className="font-medium text-primary">{story.ownerName}</div>
                      <div>{story.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">Usando há:</div>
                      <div>{story.timeUsing}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Compartilhe a História do Seu Pet
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Seu pet também tem uma história especial? Compartilhe conosco como nossos 
              petiscos fizeram a diferença na vida dele. Sua história pode inspirar outros tutores!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button variant="hero" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contar Minha História
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Camera className="w-5 h-5 mr-2" />
                Enviar Foto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Faça Parte da Nossa Comunidade
            </h2>
            <p className="text-xl text-muted-foreground">
              Conecte-se com outros tutores e compartilhe experiências
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Comunidade</h3>
                <p className="text-muted-foreground mb-6">
                  Junte-se a milhares de tutores que compartilham dicas e experiências.
                </p>
                <Link href="/comunidade">
                  <Button variant="outline">
                    Participar
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Suporte</h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe está sempre pronta para ajudar você e seu pet.
                </p>
                <Link href="/contato">
                  <Button variant="outline">
                    Falar Conosco
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-warm-beige/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Produtos</h3>
                <p className="text-muted-foreground mb-6">
                  Conheça nossa linha completa de petiscos naturais e saudáveis.
                </p>
                <Link href="/produtos">
                  <Button variant="outline">
                    Ver Produtos
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
