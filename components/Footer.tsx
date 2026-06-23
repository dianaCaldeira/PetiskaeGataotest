"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/imagens/logo/Logo verde.png"
                alt="Petiska & Gatão - Alimentação Natural"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Petiscos 100% naturais feitos com amor em Brasília. Nutrição de verdade
              para cães e gatos, sem conservantes artificiais.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/petiskaegatao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Petiska & Gatão"
                className="bg-accent/20 p-2.5 rounded-full hover:bg-accent/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/petiskaegatao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Petiska & Gatão"
                className="bg-accent/20 p-2.5 rounded-full hover:bg-accent/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5561999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Petiska & Gatão"
                className="bg-accent/20 p-2.5 rounded-full hover:bg-accent/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  Nossos Petiscos
                </Link>
              </li>
              <li>
                <Link href="/onde-encontrar" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  Onde Encontrar
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  Seja Parceiro
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@petiskaegatao.com.br" className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
                  contato@petiskaegatao.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5561999999999" className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:underline">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
                  (61) 99999-9999
                </a>
              </li>
              <li className="flex items-center text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
                Brasília, DF
              </li>
            </ul>

            {/* Links legais */}
            <div className="mt-6 flex flex-col space-y-1">
              <Link href="/privacidade" className="text-primary-foreground/60 text-sm hover:text-primary-foreground/80 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-primary-foreground/60 text-sm hover:text-primary-foreground/80 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Petiska &amp; Gatão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
