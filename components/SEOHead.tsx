import React from 'react';

/**
 * @deprecated Este componente não é mais necessário no Next.js 15
 * Use a Metadata API do Next.js em vez disso:
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 * 
 * Exemplo:
 * export const metadata: Metadata = {
 *   title: 'Seu Título',
 *   description: 'Sua Descrição',
 * }
 */
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOProps> = () => {
  // Componente vazio - use Next.js Metadata API
  return null;
};

export default SEOHead;
