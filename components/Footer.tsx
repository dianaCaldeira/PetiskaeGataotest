"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-lg inline-block mb-4">
              Petiska & Gatão
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Petiscos 100% naturais feitos com amor em Brasília. Nutrição de verdade 
              para cães e gatos, sem conservantes artificiais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/20 p-2 rounded-full hover:bg-accent/30 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/20 p-2 rounded-full hover:bg-accent/30 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nossos Petiscos
                </Link>
              </li>
              <li>
                <Link href="/onde-encontrar" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Onde Encontrar
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Seja Parceiro
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/comunidade" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-primary-foreground/80">contato@petiskaegatao.com.br</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-primary-foreground/80">(61) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-primary-foreground/80">Brasília, DF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Petiska & Gatão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;