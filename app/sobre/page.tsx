import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Leaf, Award, Users, CheckCircle, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Nossa História
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Conheça a <span className="text-accent">Petiska & Gatão</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Uma jornada de amor pelos pets que começou em Brasília e conquistou o coração 
              de milhares de tutores no Distrito Federal.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Como Tudo Começou
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Em 2023, <strong>Ana Silva</strong> e <strong>Pedro Santos</strong>, dois empreendedores 
                apaixonados por pets, se uniram com um objetivo comum: criar os melhores petiscos 
                naturais de Brasília.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Como tutores dedicados, eles enfrentavam a mesma dificuldade de muitos outros: 
                encontrar petiscos que fossem ao mesmo tempo <strong>saborosos, saudáveis e 
                verdadeiramente naturais</strong> para seus próprios pets.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Assim nasceu a Petiska & Gatão: uma empresa 100% brasiliense dedicada à produção 
                artesanal de petiscos premium para cães e gatos.
              </p>

              <div className="flex gap-4">
                <Link href="/produtos">
                  <Button variant="hero" size="lg">
                    Conheça Nossos Produtos
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Feito com Amor
                    </h3>
                    <p className="text-muted-foreground">
                      Cada petisco é produzido artesanalmente com ingredientes 
                      cuidadosamente selecionados e muito carinho.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Nossos Valores */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e cada petisco que produzimos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Qualidade</h3>
                <p className="text-muted-foreground">
                  Ingredientes premium e processos rigorosos de controle de qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Natural</h3>
                <p className="text-muted-foreground">
                  100% natural, sem conservantes artificiais ou aditivos químicos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-warm-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Amor</h3>
                <p className="text-muted-foreground">
                  Cada petisco é feito com carinho e dedicação pelos pets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-leaf-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Excelência</h3>
                <p className="text-muted-foreground">
                  Compromisso com a excelência em cada etapa da produção.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Números que Impressionam */}
          <div className="bg-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Números que Falam por Si
              </h2>
              <p className="text-xl text-muted-foreground">
                O crescimento da Petiska & Gatão em números
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">5.000+</div>
                <h3 className="text-xl font-bold text-primary mb-2">Pets Felizes</h3>
                <p className="text-muted-foreground">
                  Cães e gatos que já provaram nossos petiscos em Brasília
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">50+</div>
                <h3 className="text-xl font-bold text-primary mb-2">Pet Shops Parceiros</h3>
                <p className="text-muted-foreground">
                  Lojas especializadas que confiam na nossa qualidade
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">100%</div>
                <h3 className="text-xl font-bold text-primary mb-2">Natural & Artesanal</h3>
                <p className="text-muted-foreground">
                  Compromisso com ingredientes naturais e produção artesanal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
