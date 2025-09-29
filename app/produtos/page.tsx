"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Award, ShoppingBag, CheckCircle } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      description: "Deliciosos petiscos naturais especialmente desenvolvidos para cães",
      features: ["100% Natural", "Rico em Proteínas", "Sem Conservantes"],
      price: "A partir de R$ 15,00",
      image: "/products/dog-treats.jpg"
    },
    {
      id: 2,
      name: "Petiscos para Gatos",
      description: "Irresistíveis petiscos naturais que os gatos adoram",
      features: ["100% Natural", "Alto Valor Nutricional", "Sabor Irresistível"],
      price: "A partir de R$ 18,00",
      image: "/products/cat-treats.jpg"
    },
    {
      id: 3,
      name: "Mix Especial",
      description: "Combinação perfeita para casas com cães e gatos",
      features: ["Para Cães e Gatos", "Variedade de Sabores", "Embalagem Econômica"],
      price: "A partir de R$ 25,00",
      image: "/products/mix-treats.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Nossos Produtos
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Petiscos <span className="text-accent">Artesanais</span><br />
              Para Seu <span className="text-accent">Pet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Descubra nossa linha completa de petiscos 100% naturais, desenvolvidos 
              especialmente para proporcionar alegria e saúde aos seus companheiros.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Diferenciais */}
          <div className="bg-card rounded-3xl p-8 md:p-16 shadow-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Por Que Escolher Nossos Petiscos?
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça os diferenciais que fazem nossos produtos únicos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">100% Natural</h3>
                <p className="text-muted-foreground">
                  Sem conservantes artificiais, corantes ou aditivos químicos. 
                  Apenas ingredientes naturais selecionados.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Feito com Amor</h3>
                <p className="text-muted-foreground">
                  Cada petisco é produzido artesanalmente com muito carinho 
                  e dedicação pelos nossos pets.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-warm-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Qualidade Premium</h3>
                <p className="text-muted-foreground">
                  Ingredientes de primeira qualidade e processos rigorosos 
                  de controle de qualidade.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Onde Encontrar Nossos Produtos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossos petiscos estão disponíveis em mais de 50 pet shops parceiros 
              espalhados por todo o Distrito Federal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/onde-encontrar">
                <Button variant="hero" size="lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Encontrar Pet Shops
                </Button>
              </Link>
              <Link href="/cadastro-parceiro">
                <Button variant="outline" size="lg">
                  Quero Revender
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
