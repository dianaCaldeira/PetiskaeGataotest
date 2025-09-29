import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Users, Award, TrendingUp } from 'lucide-react';

interface ContentSection {
  title: string;
  content: string;
  highlight?: boolean;
  bullets?: string[];
}

interface RichContentProps {
  sections: ContentSection[];
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  className?: string;
}

const RichContent: React.FC<RichContentProps> = ({
  sections,
  title,
  subtitle,
  showStats = false,
  className = ""
}) => {
  const stats = [
    { icon: Users, label: "Clientes Satisfeitos", value: "5.000+" },
    { icon: Award, label: "Parceiros", value: "50+" },
    { icon: Star, label: "Avaliação Média", value: "4.9/5" },
    { icon: TrendingUp, label: "Crescimento Mensal", value: "25%" }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Stats Section */}
      {showStats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-0 rounded-3xl shadow-card p-6 text-center">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Content Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <Card 
            key={index} 
            className={`border-0 rounded-3xl shadow-card p-8 ${
              section.highlight 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-gradient-card'
            }`}
          >
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-2 rounded-full flex-shrink-0 ${
                  section.highlight 
                    ? 'bg-primary-foreground/20' 
                    : 'bg-accent/20'
                }`}>
                  <ChevronRight className={`w-5 h-5 ${
                    section.highlight ? 'text-primary-foreground' : 'text-accent'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    section.highlight ? 'text-primary-foreground' : 'text-primary'
                  }`}>
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className={`prose max-w-none ${
                section.highlight 
                  ? 'text-primary-foreground/90' 
                  : 'text-muted-foreground'
              }`}>
                <p className="text-lg leading-relaxed mb-6">
                  {section.content}
                </p>

                {/* Bullets */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          section.highlight ? 'bg-primary-foreground/60' : 'bg-accent'
                        }`}></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RichContent;