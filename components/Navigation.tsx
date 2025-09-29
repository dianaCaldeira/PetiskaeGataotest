"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Petiscos', path: '/produtos' },
    { name: 'Para Pet Shops', path: '/parceiros' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg">
              Petiska & Gatão
            </div>
          </Link>

          {/* Menu Principal */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.path
                    ? 'text-accent font-semibold'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search e CTAs */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-input rounded-full px-4 py-2 w-64">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/onde-encontrar">
                <Button variant="outline" size="sm">
                  Onde Encontrar
                </Button>
              </Link>
              <Link href="/parceiros">
                <Button variant="secondary" size="sm">
                  Seja Parceiro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;