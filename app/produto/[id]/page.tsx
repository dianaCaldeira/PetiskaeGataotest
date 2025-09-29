import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { generateStructuredData, structuredDataTemplates } from '@/lib/seo';
import { Heart, Star, Shield, Leaf, Award, ArrowLeft, ShoppingBag, CheckCircle } from 'lucide-react';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

// Generate metadata for dynamic product pages
export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const { id } = params;
  
  // In a real app, you would fetch product data from API
  const productName = "Biscoito Natural para Cães";
  const productDescription = "Um petisco crocante e saboroso para seu cão, feito com ingredientes naturais sem aditivos artificiais.";
  
  return {
    title: `${productName} - Petiscos Naturais | Petiska & Gatão`,
    description: productDescription,
    keywords: [
      'petisco natural cães',
      'biscoito natural cachorro',
      'petisco artesanal brasília',
      'snack natural pets'
    ],
    openGraph: {
      title: `${productName} - Petiska & Gatão`,
      description: productDescription,
      images: [
        {
          url: '/products/product-placeholder.jpg',
          width: 800,
          height: 600,
          alt: productName,
        },
      ],
    },
    other: {
      'product:price:amount': '15.90',
      'product:price:currency': 'BRL',
    },
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  // Mock product data - in real app, this would come from API
  const product = {
    id: parseInt(id) || 1,
    name: "Biscoito Natural para Cães",
    category: "Biscoitos",
    price: "R$ 15,90",
    description: "Um petisco crocante e saboroso para seu cão, feito com ingredientes naturais sem aditivos artificiais. Estes biscoitos são cuidadosamente assados para manter seu sabor e nutrientes.",
    longDescription: "Nossos biscoitos naturais são produzidos artesanalmente em Brasília, seguindo rigorosos padrões de qualidade. Cada lote é cuidadosamente preparado com ingredientes frescos e naturais, sem conservantes artificiais ou corantes. O processo de cocção lenta preserva os nutrientes essenciais e garante a textura crocante que os cães adoram.",
    healthBenefits: [
      "Promove saúde dental através da mastigação",
      "Suporte à digestão com fibras naturais", 
      "Rico em nutrientes essenciais para energia",
      "Fortalece o sistema imunológico",
      "Melhora a qualidade do pelo e pele"
    ],
    nutritionalInfo: [
      { label: "Proteína Bruta", value: "18,0% (mín.)" },
      { label: "Gordura Bruta", value: "8,0% (mín.)" },
      { label: "Fibra Bruta", value: "3,0% (máx.)" },
      { label: "Umidade", value: "10,0% (máx.)" },
      { label: "Cinzas", value: "5,0% (máx.)" }
    ],
    ingredients: "Farinha de frango, farinha de arroz integral, óleo de salmão, batata doce desidratada, cenoura desidratada, espinafre em pó",
    features: ["100% Natural", "Sem conservantes", "Sem corantes artificiais", "Assado artesanalmente", "Aprovado por veterinários"],
    targetPets: ["Cães adultos", "Cães filhotes (acima de 6 meses)", "Todas as raças"],
    weight: "200g",
    shelfLife: "12 meses",
    storage: "Armazenar em local seco e arejado"
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Breadcrumb */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/produtos" className="hover:text-primary">Produtos</Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </div>
          <Link href="/produtos">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left side - Product Image */}
            <div>
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="h-96 bg-gradient-card rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pet-cream/50 to-warm-beige/30"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="text-8xl">🦴</div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {product.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-accent">{product.price}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-muted-foreground ml-2">(4.9)</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Product Details */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Informações do Produto</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Peso:</span>
                      <span className="ml-2 font-medium">{product.weight}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Validade:</span>
                      <span className="ml-2 font-medium">{product.shelfLife}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Indicado para</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.targetPets.map((target, index) => (
                      <Badge key={index} variant="secondary">{target}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link href="/onde-encontrar">
                  <Button variant="hero" size="lg" className="w-full">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Onde Encontrar
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full">
                  <Heart className="w-5 h-5 mr-2" />
                  Adicionar aos Favoritos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2">
              <Card className="shadow-card mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Descrição Detalhada</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">Benefícios para a Saúde</h3>
                  <ul className="space-y-3">
                    {product.healthBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Ingredientes</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.ingredients}
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">
                      💡 Todos os ingredientes são cuidadosamente selecionados e aprovados por veterinários.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="shadow-card mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Informação Nutricional</h3>
                  <div className="space-y-3">
                    {product.nutritionalInfo.map((info, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{info.label}:</span>
                        <span className="font-medium">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Armazenamento</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.storage}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Produto seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">100% natural</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Aprovado por veterinários</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Produtos Relacionados
            </h2>
            <p className="text-xl text-muted-foreground">
              Outros petiscos que seu pet vai adorar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-48 bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">🦴</div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Petisco Natural {item}</h3>
                  <p className="text-muted-foreground mb-4">Delicioso petisco para seu pet</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">R$ 12,90</span>
                    <Link href={`/produto/${item + 1}`}>
                      <Button variant="outline" size="sm">Ver Detalhes</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
