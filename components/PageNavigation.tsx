'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface NavigationLink {
  title: string;
  path: string;
  description?: string;
}

interface PageNavigationProps {
  currentPage: string;
  previousPage?: NavigationLink;
  nextPage?: NavigationLink;
  relatedPages?: NavigationLink[];
  showHomeLink?: boolean;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  previousPage,
  nextPage,
  relatedPages = [],
  showHomeLink = true
}) => {
  const router = useRouter();

  return (
    <div className="space-y-8">
      {/* Previous/Next Navigation */}
      {(previousPage || nextPage) && (
        <div className="flex justify-between items-center">
          {previousPage ? (
            <Button
              variant="outline"
              onClick={() => router.push(previousPage.path)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Anterior</div>
                <div className="font-medium">{previousPage.title}</div>
              </div>
            </Button>
          ) : (
            <div></div>
          )}

          {showHomeLink && (
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Início
            </Button>
          )}

          {nextPage ? (
            <Button
              variant="outline"
              onClick={() => router.push(nextPage.path)}
              className="flex items-center gap-2"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Próximo</div>
                <div className="font-medium">{nextPage.title}</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      )}

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6">
          <CardContent className="p-0">
            <h3 className="text-lg font-bold text-primary mb-4">
              Páginas Relacionadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((page, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => router.push(page.path)}
                  className="h-auto p-4 justify-start text-left hover:bg-primary/10"
                >
                  <div>
                    <div className="font-medium text-primary">{page.title}</div>
                    {page.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {page.description}
                      </div>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Breadcrumb-style current page indicator */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-medium text-primary">{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;