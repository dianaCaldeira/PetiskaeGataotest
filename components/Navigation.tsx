"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Search, Menu, MapPin, Store } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Petiscos', path: '/produtos' },
    { name: 'Para Pet Shops', path: '/parceiros' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-border/50" role="navigation" aria-label="Navegação principal">
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-full">
        Pular para o conteúdo
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Petiska & Gatão - Página inicial">
            <Image
              src="/imagens/logo/Logo verde.png"
              alt="Petiska & Gatão - Alimentação Natural"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Menu Principal - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                aria-current={pathname === item.path ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                  pathname === item.path
                    ? 'text-accent font-semibold'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search e CTAs - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-input rounded-full px-4 py-2 w-64">
              <Search className="h-4 w-4 text-muted-foreground mr-2" aria-hidden="true" />
              <input
                type="text"
                placeholder="Buscar..."
                aria-label="Buscar no site"
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/onde-encontrar">
                <Button variant="outline" size="sm">
                  <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                  Onde Encontrar
                </Button>
              </Link>
              <Link href="/parceiros">
                <Button variant="secondary" size="sm">
                  <Store className="w-4 h-4 mr-1" aria-hidden="true" />
                  Seja Parceiro
                </Button>
              </Link>
            </div>
          </div>

          {/* Hamburger - Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Image
                    src="/imagens/logo/Logo verde.png"
                    alt="Petiska & Gatão"
                    width={120}
                    height={40}
                    className="h-9 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Search */}
              <div className="mt-6 mb-4">
                <div className="flex items-center bg-input rounded-full px-4 py-2">
                  <Search className="h-4 w-4 text-muted-foreground mr-2" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    aria-label="Buscar no site"
                    className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col space-y-1" aria-label="Menu mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === item.path ? 'page' : undefined}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      pathname === item.path
                        ? 'bg-primary/10 text-accent font-semibold'
                        : 'text-foreground/80 hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="mt-6 flex flex-col space-y-3 px-4">
                <Link href="/onde-encontrar" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                    Onde Encontrar
                  </Button>
                </Link>
                <Link href="/parceiros" onClick={() => setMobileOpen(false)}>
                  <Button variant="secondary" className="w-full justify-start">
                    <Store className="w-4 h-4 mr-2" aria-hidden="true" />
                    Seja Parceiro
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
