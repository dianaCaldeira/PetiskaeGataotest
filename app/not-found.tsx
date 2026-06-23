"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Heart, MapPin, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="shadow-card">
          <CardContent className="p-8 md:p-16">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                404
              </div>
              <div className="flex items-end justify-center gap-2 mb-6">
                <Image
                  src="/imagens/personagens/GATAO_triste.png"
                  alt="Gatão triste"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
                <Image
                  src="/imagens/personagens/PETISKA_2_triste.png"
                  alt="Petiska triste"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Oops! Página não encontrada
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Parece que você se perdeu! A página que você está procurando não existe 
              ou foi movida para outro lugar. Mas não se preocupe, vamos te ajudar a 
              encontrar o que precisa.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button variant="hero" size="lg">
                  <Home className="w-5 h-5 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Página Anterior
              </Button>
            </div>

            {/* Quick Links */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Páginas Populares
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/produtos">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                    <Heart className="w-6 h-6 text-accent" />
                    <span className="font-semibold">Nossos Produtos</span>
                    <span className="text-xs text-muted-foreground">Petiscos naturais</span>
                  </Button>
                </Link>

                <Link href="/onde-encontrar">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                    <MapPin className="w-6 h-6 text-accent" />
                    <span className="font-semibold">Onde Encontrar</span>
                    <span className="text-xs text-muted-foreground">Pet shops parceiros</span>
                  </Button>
                </Link>

                <Link href="/sobre">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                    <Heart className="w-6 h-6 text-accent" />
                    <span className="font-semibold">Nossa História</span>
                    <span className="text-xs text-muted-foreground">Conheça a empresa</span>
                  </Button>
                </Link>

                <Link href="/contato">
                  <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                    <Phone className="w-6 h-6 text-accent" />
                    <span className="font-semibold">Fale Conosco</span>
                    <span className="text-xs text-muted-foreground">Entre em contato</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-8 p-6 bg-accent/10 rounded-2xl">
              <h3 className="text-lg font-bold text-primary mb-2">
                Precisa de Ajuda?
              </h3>
              <p className="text-muted-foreground mb-4">
                Se você chegou aqui através de um link em nosso site, por favor nos avise 
                para que possamos corrigir o problema.
              </p>
              <Link href="/contato">
                <Button variant="outline" size="sm">
                  Reportar Problema
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
