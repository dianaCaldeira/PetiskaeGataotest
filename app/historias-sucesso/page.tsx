import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PetIllustration from '@/components/PetIllustration';
import { Heart, Star, Quote, Users, TrendingUp, Award, MessageCircle, Camera } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

interface SuccessStory {
  id: number;
  type: 'partner' | 'customer';
  name: string;
  location: string;
  businessName?: string;
  petName?: string;
  story: string;
  results: string[];
  quote: string;
  image?: string;
  timeUsing?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export default function SuccessStories() {
  const successStories: SuccessStory[] = [
    {
      id: 1,
      type: 'partner',
      name: 'Marina Oliveira',
      location: 'Asa Norte, Brasília',
      businessName: 'Pet Palace',
      story: 'Após 3 meses como parceira da Petiska & Gatão, nossa loja teve um crescimento incrível. Os clientes chegam pedindo especificamente pelos petiscos naturais.',
      results: [
        'Aumento de 40% no faturamento',
        '150 novos clientes por mês',
        'Produtos com maior margem',
        'Clientes mais satisfeitos'
      ],
      quote: 'A qualidade do produto é excepcional e nossos clientes adoram!'
    },
    {
      id: 2,
      type: 'customer',
      name: 'Roberto Silva',
      location: 'Águas Claras, Brasília',
      petName: 'Thor',
      story: 'Thor sempre teve problemas de pele e alergias. Desde que começamos com os petiscos naturais da Petiska & Gatão, a diferença é visível.',
      results: [
        'Pelo mais brilhante',
        'Menos coceiras e alergias',
        'Mais energia e disposição',
        'Melhor digestão'
      ],
      quote: 'Thor nunca esteve tão saudável e feliz. Os petiscos naturais fizeram toda a diferença!',
      image: '�',
      timeUsing: '8 meses',
      beforeAfter: {
        before: 'Problemas de pele e alergias',
        after: 'Pelo brilhante e saudável'
      }
    },
    {
      id: 3,
      type: 'partner',
      name: 'Carlos Eduardo',
      location: 'Guará, Brasília',
      businessName: 'Amigos Peludos',
      story: 'A parceria com a Petiska & Gatão não trouxe apenas produtos de qualidade, mas uma estratégia completa de marketing que nos ajudou a crescer.',
      results: [
        'Vendas 60% maiores',
        'Presença digital fortalecida',
        'Materiais de marketing gratuitos',
        'Suporte constante da equipe'
      ],
      quote: 'Uma parceria que realmente funciona! Os petiscos vendem rapidamente e de forma consistente.'
    },
    {
      id: 4,
      type: 'customer',
      name: 'Juliana Costa',
      location: 'Asa Sul, Brasília',
      petName: 'Luna e Mimi',
      story: 'Tenho uma cadela e uma gata, e encontrar petiscos que ambas gostassem era um desafio. Com os produtos da Petiska & Gatão, as duas ficam igualmente felizes.',
      results: [
        'Petiscos para ambos os pets',
        'Ingredientes 100% naturais',
        'Fácil de encontrar em Brasília',
        'Preço justo'
      ],
      quote: 'Luna e Mimi disputam os petiscos! É incrível ver como elas adoram.',
      image: '🐕🐱',
      timeUsing: '6 meses',
      beforeAfter: {
        before: 'Dificuldade em encontrar petiscos para ambos',
        after: 'Ambos adoram e disputam os petiscos'
      }
    },
    {
      id: 5,
      type: 'customer',
      name: 'Ana Costa',
      location: 'Taguatinga, Brasília',
      petName: 'Rex',
      story: 'Rex foi resgatado da rua em estado muito debilitado. Com os cuidados veterinários e os petiscos naturais da Petiska & Gatão, ele se transformou completamente!',
      results: [
        'Ganho de peso saudável',
        'Pelo cresceu lindo',
        'Cheio de energia',
        'Totalmente recuperado'
      ],
      quote: 'Rex é a prova de que amor e alimentação natural fazem milagres!',
      image: '🐕',
      timeUsing: '1 ano',
      beforeAfter: {
        before: 'Desnutrido e sem energia',
        after: 'Peso ideal e cheio de vida'
      }
    },
    {
      id: 6,
      type: 'customer',
      name: 'Maria Silva',
      location: 'Asa Norte, Brasília',
      petName: 'Luna',
      story: 'Luna sempre foi uma cadela muito ativa, mas começou a apresentar problemas digestivos. Depois que mudamos para os petiscos da Petiska & Gatão, ela voltou a ser a mesma de sempre!',
      results: [
        'Digestão saudável',
        'Pelo brilhante',
        'Mais energia',
        'Adora os sabores'
      ],
      quote: 'Luna está radiante e feliz novamente. Recomendo para todos!',
      image: '🐕',
      timeUsing: '5 meses',
      beforeAfter: {
        before: 'Problemas digestivos e pelo opaco',
        after: 'Digestão perfeita e pelo brilhante'
      }
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
      <Breadcrumb items={[{ label: 'Histórias de Sucesso' }]} />
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
              Parceiros e clientes que transformaram seus negócios e a vida de seus pets
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={story.id} className="bg-gradient-card border-0 rounded-3xl shadow-card overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Story Content */}
                  <CardContent className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <Badge className={`${story.type === 'partner' ? 'bg-primary' : 'bg-accent'} text-white mr-4`}>
                        {story.type === 'partner' ? 'Parceiro' : 'Cliente'}
                      </Badge>
                      <div>
                        <h3 className="font-bold text-primary text-lg">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {story.businessName ? `${story.businessName} - ${story.location}` : 
                           story.petName ? `Tutor de ${story.petName} - ${story.location}` : story.location}
                        </p>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-accent mb-4" />
                    <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {story.story}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">
                        {story.type === 'partner' ? 'Resultados Alcançados:' : 'Transformação:'}
                      </h4>
                      {story.type === 'partner' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {story.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <Award className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            {story.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center">
                                <Award className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{result}</span>
                              </div>
                            ))}
                          </div>
                          {story.beforeAfter && (
                            <div className="bg-warm-beige/30 rounded-2xl p-4">
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
                              {story.timeUsing && (
                                <div className="mt-3 text-sm text-muted-foreground">
                                  Usando há: <span className="font-medium">{story.timeUsing}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {story.type === 'partner' && (
                      <Link href="/cadastro-parceiro">
                        <Button variant="default" size="lg">
                          Quero Ser Parceiro Também
                        </Button>
                      </Link>
                    )}

                    {story.type === 'customer' && (
                      <Link href="/onde-encontrar">
                        <Button variant="default" size="lg">
                          Onde Encontrar Estes Petiscos
                        </Button>
                      </Link>
                    )}
                  </CardContent>

                  {/* Visual Side */}
                  <div className={`bg-warm-beige/50 flex items-center justify-center p-8 relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-pet-cream/50 to-warm-beige/30"></div>
                    <div className="relative z-10 text-center">
                      {story.type === 'partner' ? (
                        <div>
                          <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-10 h-10 text-primary" />
                          </div>
                          <PetIllustration type="both" size="lg" className="mt-4" />
                        </div>
                      ) : (
                        <div>
                          {story.image && (
                            <div className="text-6xl mb-4">{story.image}</div>
                          )}
                          <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mt-4">
                            <Heart className="w-8 h-8 text-accent" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
