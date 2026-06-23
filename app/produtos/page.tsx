"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumb from '@/components/Breadcrumb';
import { Star, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  petType: 'dog' | 'cat' | 'both';
  benefits: string[];
  image: string;
  weight: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Mix de Frutas Desidratadas",
    description: "Combinação especial de frutas desidratadas 100% naturais, sem conservantes ou corantes.",
    category: "Frutas",
    petType: "both",
    benefits: ["Antioxidantes naturais", "Rico em vitaminas", "Sabor adocicado natural"],
    image: "/imagens/produtos/IMG-20250620-WA0139.jpg",
    weight: "50g"
  },
  {
    id: 2,
    name: "Mix de Legumes Desidratados",
    description: "Legumes desidratados artesanalmente, perfeitos como complemento alimentar natural para pets.",
    category: "Legumes",
    petType: "both",
    benefits: ["Rico em fibras", "Fonte de vitaminas", "Sem conservantes"],
    image: "/imagens/produtos/IMG-20250620-WA0140.jpg",
    weight: "50g"
  },
  {
    id: 3,
    name: "Alimentação Natural de Coração de Boi e Legumes",
    description: "Refeição natural com coração de boi e legumes desidratados. Rico em taurina e proteínas.",
    category: "Refeições",
    petType: "both",
    benefits: ["Alto em taurina", "Fortalece músculos", "Saúde cardíaca"],
    image: "/imagens/produtos/IMG-20250620-WA0141.jpg",
    weight: "90g"
  },
  {
    id: 4,
    name: "Temperos Naturais para Ração",
    description: "Nosso tempero mágico em 3 sabores: Filé Suíno, Frango e Coração de Boi. Torna qualquer ração irresistível.",
    category: "Temperos",
    petType: "both",
    benefits: ["Aumenta palatabilidade", "Estimula apetite", "100% natural"],
    image: "/imagens/produtos/IMG-20250620-WA0142.jpg",
    weight: "50g"
  },
  {
    id: 5,
    name: "Alimentação Natural de Filé Suíno e Legumes",
    description: "Filé suíno com legumes desidratados artesanalmente. Proteína de alta qualidade para seu pet.",
    category: "Refeições",
    petType: "both",
    benefits: ["Alto em proteínas", "Sem conservantes", "Ingredientes selecionados"],
    image: "/imagens/produtos/IMG-20250620-WA0143.jpg",
    weight: "50g"
  },
  {
    id: 6,
    name: "Alimentação Natural de Frango e Legumes",
    description: "Frango com legumes desidratados, uma opção leve e nutritiva para cães e gatos.",
    category: "Refeições",
    petType: "both",
    benefits: ["Leve e nutritivo", "Fácil digestão", "100% natural"],
    image: "/imagens/produtos/IMG-20250620-WA0144.jpg",
    weight: "50g"
  }
];

const categories = ["Todos", "Refeições", "Temperos", "Frutas", "Legumes"];
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
      <Breadcrumb items={[{ label: 'Produtos' }]} />
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
              <div className="h-56 bg-warm-beige/30 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">
                  {product.category}
                </Badge>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">
                  {product.weight}
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
