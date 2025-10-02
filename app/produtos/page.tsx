"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PetIllustration from '@/components/PetIllustration';
import { Heart, Star, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  petType: 'dog' | 'cat' | 'both';
  benefits: string[];
  image?: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Biscoito Natural para Cães",
    description: "Um petisco crocante e saboroso para seu cão, feito com ingredientes naturais sem aditivos artificiais.",
    category: "Biscoitos",
    petType: "dog",
    benefits: ["Promove saúde dental", "Suporte à digestão", "Rico em nutrientes essenciais"]
  },
  {
    id: 2,
    name: "Frango Desidratado",
    description: "Feito apenas com peito de frango selecionado, sem conservantes, sem sal e sem temperos artificiais.",
    category: "Carnes",
    petType: "both",
    benefits: ["100% natural", "Alto em proteínas", "Livre de conservantes"]
  },
  {
    id: 3,
    name: "Tempero Mágico de Ração",
    description: "Nosso produto inovador que torna qualquer ração mais saborosa e atrativa para os pets.",
    category: "Temperos",
    petType: "both",
    benefits: ["Aumenta palatabilidade", "Estimula apetite", "100% natural"]
  },
  {
    id: 4,
    name: "Petiscos de Batata Doce",
    description: "Fatias desidratadas de batata doce, ricas em fibras e vitaminas.",
    category: "Vegetais",
    petType: "both",
    benefits: ["Rico em fibras", "Fonte de vitaminas", "Baixo em gordura"]
  },
  {
    id: 5,
    name: "Mix de Frutas Desidratadas",
    description: "Combinação especial de frutas desidratadas seguras para pets.",
    category: "Frutas",
    petType: "both",
    benefits: ["Antioxidantes naturais", "Vitaminas", "Sabor adocicado natural"]
  },
  {
    id: 6,
    name: "Coração de Boi Desidratado",
    description: "Petisco rico em proteínas e taurina, especialmente benéfico para gatos.",
    category: "Carnes",
    petType: "both",
    benefits: ["Alto em taurina", "Fortalece músculos", "Saúde cardíaca"]
  }
];

const categories = ["Todos", "Biscoitos", "Carnes", "Temperos", "Vegetais", "Frutas"];
const petTypes = ["Todos", "Cães", "Gatos", "Ambos"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedPetType, setSelectedPetType] = useState("Todos");

  const filteredProducts = mockProducts.filter(product => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory;
    const petTypeMatch = selectedPetType === "Todos" || 
                        (selectedPetType === "Cães" && (product.petType === "dog" || product.petType === "both")) ||
                        (selectedPetType === "Gatos" && (product.petType === "cat" || product.petType === "both")) ||
                        (selectedPetType === "Ambos" && product.petType === "both");
    
    return categoryMatch && petTypeMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-primary py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-4">
            Petiska & Gatão
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Petiscos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Petiscos 100% naturais feitos com amor para cães e gatos
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold text-primary">Filtros</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Filtro por Categoria */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Categoria
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="rounded-full"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Filtro por Tipo de Pet */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Para qual pet?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {petTypes.map((petType) => (
                      <Button
                        key={petType}
                        variant={selectedPetType === petType ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPetType(petType)}
                        className="rounded-full"
                      >
                        {petType}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-gradient-card border-0 rounded-3xl shadow-card overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Imagem do Produto */}
              <div className="h-48 bg-warm-beige/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pet-cream/50 to-warm-beige/30"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <PetIllustration 
                    type={product.petType === 'both' ? 'both' : product.petType} 
                    size="md" 
                  />
                  <div className="ml-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Benefícios */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Benefícios:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-3 h-3 text-accent mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/produto/${product.id}`}>
                  <Button variant="secondary" className="w-full group-hover:scale-105 transition-transform">
                    Onde Encontrar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground border-0 rounded-3xl shadow-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                Não encontrou o que procurava?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato conosco! Estamos sempre desenvolvendo novos petiscos naturais.
              </p>
              <Link href="/contato">
                <Button variant="secondary" size="lg">
                  Falar Conosco
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
