import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Leaf, Shield, Heart, Clock, Award, CheckCircle, Factory, Users, Truck } from 'lucide-react';

export default function Process() {
  const processSteps = [
    {
      id: 1,
      icon: Leaf,
      title: "Seleção de Ingredientes",
      description: "Ingredientes frescos e naturais, selecionados diariamente de fornecedores locais de Brasília",
      details: "Sem conservantes artificiais, corantes ou aromatizantes",
      time: "Diário"
    },
    {
      id: 2,
      icon: ChefHat,
      title: "Preparo Artesanal",
      description: "Cada lote é preparado à mão com muito carinho e atenção aos detalhes",
      details: "Processo lento de desidratação que preserva os nutrientes",
      time: "6-8 horas"
    },
    {
      id: 3,
      icon: Shield,
      title: "Controle de Qualidade",
      description: "Testes rigorosos em cada etapa para garantir a segurança e qualidade",
      details: "Análises microbiológicas e nutricionais completas",
      time: "24 horas"
    },
    {
      id: 4,
      icon: Heart,
      title: "Embalagem com Amor",
      description: "Cada produto é embalado individualmente para manter o frescor",
      details: "Embalagens recicláveis e sustentáveis",
      time: "Manual"
    }
  ];

  const certifications = [
    { name: "100% Natural", icon: Leaf, color: "bg-leaf-green/20 text-primary" },
    { name: "Sem Conservantes", icon: Shield, color: "bg-primary/10 text-primary" },
    { name: "Feito em Brasília", icon: Award, color: "bg-accent/10 text-accent" },
    { name: "Aprovado por Veterinários", icon: Heart, color: "bg-warm-beige/30 text-primary" }
  ];

  const facilities = [
    {
      icon: Factory,
      title: "Instalações Modernas",
      description: "Cozinha industrial equipada com tecnologia de ponta para produção artesanal"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais treinados em segurança alimentar e nutrição animal"
    },
    {
      icon: Truck,
      title: "Logística Eficiente",
      description: "Distribuição rápida e segura para todos os parceiros em Brasília"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Nosso Processo
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Da <span className="text-accent">Seleção</span> à<br />
              <span className="text-accent">Mesa</span> do seu Pet
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Conheça cada etapa do nosso processo artesanal de produção. 
              Transparência total desde a seleção dos ingredientes até a entrega 
              dos petiscos mais saudáveis de Brasília.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.id} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                    {/* Content Card */}
                    <div className="flex-1 max-w-md">
                      <Card className="shadow-card hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                              <Icon className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Etapa {step.id}</div>
                              <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          
                          <div className="bg-accent/5 rounded-lg p-4 mb-4">
                            <p className="text-sm text-primary font-medium">{step.details}</p>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>Tempo: {step.time}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10 hidden lg:block">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 max-w-md hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Nossos Compromissos
            </h2>
            <p className="text-xl text-muted-foreground">
              Certificações e garantias que fazem a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-primary">{cert.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Nossa Estrutura
            </h2>
            <p className="text-xl text-muted-foreground">
              Investimento em qualidade e tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{facility.title}</h3>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8 md:p-16">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Padrões de Qualidade
                </h2>
                <p className="text-lg text-muted-foreground">
                  Seguimos os mais rigorosos padrões da indústria alimentícia
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Controles Internos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Análise de cada lote produzido</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Controle de temperatura e umidade</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Rastreabilidade completa dos ingredientes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Higienização rigorosa dos equipamentos</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Certificações</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Alvará sanitário atualizado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Registro no MAPA em processo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Aprovação veterinária</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Análises laboratoriais periódicas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Compromisso com a Sustentabilidade
            </h2>
            <p className="text-xl text-muted-foreground">
              Cuidando do planeta para as próximas gerações de pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-leaf-green/20 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Ingredientes Locais</h3>
                <p className="text-muted-foreground">
                  Priorizamos fornecedores locais de Brasília, reduzindo a pegada de carbono 
                  e apoiando a economia regional.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Embalagens Eco-friendly</h3>
                <p className="text-muted-foreground">
                  Utilizamos embalagens recicláveis e biodegradáveis, minimizando 
                  o impacto ambiental dos nossos produtos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Qualidade que Você Pode Confiar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada petisco da Petiska & Gatão passa por esse processo rigoroso 
              para garantir que seu pet receba apenas o melhor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produtos">
                <Button variant="hero" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Conhecer Produtos
                </Button>
              </Link>
              <Link href="/onde-encontrar">
                <Button variant="outline" size="lg">
                  Onde Encontrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
