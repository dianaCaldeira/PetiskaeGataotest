"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Award, Leaf, ShoppingBag, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-16 shadow-card">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-leaf-green/20 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-pet-orange/20 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10 text-center">
              <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
                Petiska & Gatão - Desde 2023
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                Petiscos <span className="text-accent">Naturais</span><br />
                Feitos com <span className="text-accent">Amor</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Bem-vindo ao universo dos <strong>melhores petiscos artesanais de Brasília</strong>. 
                Somos Ana Silva e Pedro Santos, uma empresa brasiliense dedicada exclusivamente à produção de petiscos 
                <strong> 100% naturais</strong> para cães e gatos, criados com ingredientes 
                cuidadosamente selecionados e muito amor por nossos amigos de quatro patas.
              </p>
              
              {/* Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Natural & Artesanal</div>
                </div>
                <div className="bg-accent/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Pet Shops Parceiros</div>
                </div>
                <div className="bg-warm-beige/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
                  <div className="text-sm text-muted-foreground font-medium">Pets Felizes em Brasília</div>
                </div>
              </div>
              
              {/* Pets Illustration */}
              <div className="flex justify-center items-center my-12">
                <div className="relative">
                  <div className="w-32 h-32 bg-leaf-green/30 rounded-full flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/onde-encontrar">
                  <Button variant="hero" size="xl" className="text-lg px-8 py-6">
                    <MapPin className="w-6 h-6 mr-3" />
                    Onde Encontrar em Brasília
                  </Button>
                </Link>
                <Link href="/cadastro-parceiro">
                  <Button variant="outline" size="xl" className="text-lg px-8 py-6">
                    <ShoppingBag className="w-6 h-6 mr-3" />
                    Quero Revender
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Aprovado por Veterinários</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Sem Conservantes Artificiais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Produzido no Coração de Brasília</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Por Que a Petiska & Gatão é Especial?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça nossa jornada e o que nos torna únicos no mercado de petiscos naturais de Brasília
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                A Paixão que Move Nossa Empresa
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada em 2023 pelos empreendedores <strong>Ana Silva</strong> e <strong>Pedro Santos</strong>, 
                a Petiska & Gatão nasceu de uma necessidade real: encontrar petiscos verdadeiramente saudáveis 
                e naturais para nossos próprios pets aqui em Brasília.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hoje, nossa produção 100% artesanal já conquistou mais de 50 pet shops parceiros e 
                proporcionou alegria para milhares de cães e gatos em todo o Distrito Federal.
              </p>

              <div className="bg-warm-beige/30 rounded-3xl p-6">
                <h4 className="text-xl font-bold text-primary mb-4">Nossos Pilares Fundamentais</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Transparência Total:</strong> Você pode acompanhar cada etapa do nosso processo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Ingredientes Premium:</strong> Selecionamos apenas o melhor para seu pet</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Produção Artesanal:</strong> Cada petisco é feito com cuidado individual</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">Feito com Amor em Brasília</h4>
                  <p className="text-muted-foreground">
                    Cada petisco é uma demonstração do nosso amor pelos pets e pela nossa cidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
