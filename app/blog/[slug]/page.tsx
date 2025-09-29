import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ArrowLeft, Share2, Heart, BookOpen, Calendar, Tag } from 'lucide-react';

interface ArticleDetailProps {
  params: {
    slug: string;
  };
}

// Generate metadata for dynamic blog pages
export async function generateMetadata({ params }: ArticleDetailProps): Promise<Metadata> {
  const { slug } = params;
  
  // In a real app, you would fetch article data from API based on slug
  const articleTitle = "Os Benefícios dos Petiscos Naturais para a Saúde do Seu Pet";
  const articleDescription = "Como donos de pets, todos queremos o melhor para nossos amigos peludos, e isso inclui os petiscos que damos a eles.";
  const category = "Alimentação";
  
  return {
    title: `${articleTitle} | Blog Petiska & Gatão`,
    description: articleDescription,
    keywords: [
      'petiscos naturais pets',
      'alimentação saudável cães gatos',
      'benefícios petiscos naturais',
      'blog pet brasília'
    ],
    authors: [{ name: 'Petiska & Gatão' }],
    category,
    openGraph: {
      title: articleTitle,
      description: articleDescription,
      type: 'article',
      publishedTime: '2024-01-15T00:00:00.000Z',
      authors: ['Petiska & Gatão'],
      section: category,
      tags: ['petiscos naturais', 'saúde pet', 'alimentação'],
      images: [
        {
          url: '/blog/article-placeholder.jpg',
          width: 1200,
          height: 630,
          alt: articleTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: articleTitle,
      description: articleDescription,
    },
  };
}

export default function ArticleDetail({ params }: ArticleDetailProps) {
  const { slug } = params;

  // Mock article data - in real app, this would come from API based on slug
  const article = {
    slug,
    title: "Os Benefícios dos Petiscos Naturais para a Saúde do Seu Pet",
    category: "Alimentação",
    author: "Petiska & Gatão",
    date: "2024-01-15",
    readTime: "8 min",
    excerpt: "Como donos de pets, todos queremos o melhor para nossos amigos peludos, e isso inclui os petiscos que damos a eles.",
    content: [
      {
        type: "paragraph",
        text: "Como donos de pets, todos queremos o melhor para nossos amigos peludos, e isso inclui os petiscos que damos a eles. Petiscos naturais tornaram-se cada vez mais populares, e por boas razões. Eles oferecem uma alternativa mais saudável aos aditivos artificiais e conservantes encontrados em muitos petiscos comerciais para pets."
      },
      {
        type: "heading",
        text: "Nutrição Melhorada"
      },
      {
        type: "paragraph",
        text: "Petiscos naturais são feitos com ingredientes integrais como carne, frutas e vegetais. Esses petiscos são geralmente ricos em nutrientes essenciais, incluindo vitaminas, minerais e antioxidantes, que podem contribuir para o bem-estar geral do seu pet."
      },
      {
        type: "heading",
        text: "Menos Alérgenos e Aditivos"
      },
      {
        type: "paragraph",
        text: "Muitos petiscos convencionais contêm corantes artificiais, aromatizantes e conservantes que podem causar reações alérgicas ou outros problemas de saúde em pets. Petiscos naturais, por outro lado, são livres desses aditivos prejudiciais."
      },
      {
        type: "heading",
        text: "Melhor Digestibilidade"
      },
      {
        type: "paragraph",
        text: "Pets frequentemente acham petiscos naturais mais fáceis de digerir devido à falta de ingredientes artificiais. Ao optar por petiscos naturais, você pode reduzir os problemas digestivos do seu pet."
      },
      {
        type: "heading",
        text: "Considerações Especiais para Brasília"
      },
      {
        type: "paragraph",
        text: "Aqui em Brasília, o clima seco pode afetar a saúde da pele e pelo dos pets. Petiscos naturais ricos em ômega-3 e proteínas de qualidade podem ajudar a manter a pele hidratada e o pelo brilhante, especialmente durante a estação seca."
      },
      {
        type: "heading",
        text: "Como Introduzir Petiscos Naturais"
      },
      {
        type: "paragraph",
        text: "Ao introduzir novos petiscos naturais na dieta do seu pet, faça-o gradualmente. Comece com pequenas quantidades e observe como seu pet reage. Sempre consulte seu veterinário se tiver dúvidas sobre mudanças na dieta."
      },
      {
        type: "heading",
        text: "Onde Encontrar em Brasília"
      },
      {
        type: "paragraph",
        text: "A Petiska & Gatão trabalha com uma rede de pet shops parceiros em toda Brasília e cidades satélites. Nossos petiscos são produzidos localmente com ingredientes selecionados, garantindo frescor e qualidade."
      }
    ],
    tags: ["petiscos naturais", "saúde pet", "alimentação", "brasília", "nutrição"],
    relatedArticles: [
      { title: "Escolhendo a Melhor Ração para Seu Cão", slug: "melhor-racao-cao", category: "Alimentação" },
      { title: "Petiscos Saudáveis para Gatos", slug: "petiscos-saudaveis-gatos", category: "Alimentação" },
      { title: "Como Introduzir Novos Petiscos", slug: "introduzir-novos-petiscos", category: "Comportamento" }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Alimentação':
        return 'bg-accent/10 text-accent';
      case 'Comportamento':
        return 'bg-primary/10 text-primary';
      case 'Saúde':
        return 'bg-leaf-green/20 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Breadcrumb */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-primary">{article.title}</span>
          </div>
          <Link href="/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className={`${getCategoryColor(article.category)} px-4 py-2 mb-6`}>
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Curtir
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {article.content.map((block, index) => {
                  if (block.type === 'heading') {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4 first:mt-0">
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-bold text-primary mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Gostou do Conteúdo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Receba mais dicas e conteúdos exclusivos sobre cuidados com pets 
              diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Assinar Newsletter
              </Button>
              <Link href="/produtos">
                <Button variant="outline" size="lg">
                  Ver Nossos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Artigos Relacionados
            </h2>
            <p className="text-xl text-muted-foreground">
              Continue lendo sobre cuidados com pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {article.relatedArticles.map((relatedArticle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className={`${getCategoryColor(relatedArticle.category)} mb-4`}>
                    {relatedArticle.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Descubra mais sobre este tema importante para a saúde do seu pet.
                  </p>
                  <Link href={`/blog/${relatedArticle.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Ler Artigo
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para o Blog
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
