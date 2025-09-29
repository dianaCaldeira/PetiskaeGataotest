# 🐾 Petiska & Gatão - Next.js Website

Website oficial da **Petiska & Gatão**, empresa brasiliense especializada em petiscos naturais artesanais para cães e gatos.

## 🚀 Tecnologias

- **Next.js 15.5.4** com App Router
- **React 19.1.0** + TypeScript 5
- **Tailwind CSS 4** para estilização
- **Zustand** para gerenciamento de estado
- **React Hook Form + Zod** para formulários
- **Shadcn/ui** + Radix UI para componentes
- **Lucide React** para ícones

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── (pages)/           # Páginas principais
│   ├── produto/[id]/      # Páginas dinâmicas de produtos
│   ├── blog/[slug]/       # Páginas dinâmicas do blog
│   └── layout.tsx         # Layout raiz
├── components/            # Componentes reutilizáveis
│   └── ui/               # Componentes UI (shadcn/ui)
├── hooks/                # Hooks customizados
├── lib/                  # Utilitários e configurações
├── public/               # Assets estáticos
├── scripts/              # Scripts de teste e validação
└── doc/                  # Documentação
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm/yarn/pnpm

### Instalação

```bash
# Clonar o repositório
git clone [repository-url]
cd my-project

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento (Turbopack)
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linting com ESLint

# Testes
npm run test:routes      # Testar todas as rotas
npm run test:forms       # Validar formulários
npm run test:responsive  # Verificar responsividade
npm run test:all         # Suite completa de testes

# Validação e Deploy
npm run validate     # Lint + Testes completos
npm run pre-deploy   # Validação + Build
```

## 🧪 Testes

O projeto inclui uma suite completa de testes:

### Executar Todos os Testes
```bash
npm run test:all
```

### Testes Individuais
```bash
# Testar rotas
npm run test:routes

# Validar formulários
npm run test:forms  

# Verificar responsividade
npm run test:responsive
```

## 📱 Funcionalidades

### Páginas Implementadas
- ✅ **Home** - Página inicial com hero e apresentação
- ✅ **Produtos** - Catálogo de petiscos naturais
- ✅ **Blog** - Artigos sobre pets e alimentação
- ✅ **Sobre** - História da empresa
- ✅ **Contato** - Formulário de contato
- ✅ **Onde Encontrar** - Mapa de parceiros
- ✅ **Parceiros** - Programa de parcerias
- ✅ **Portal do Parceiro** - Área restrita
- ✅ **FAQ** - Perguntas frequentes
- ✅ **Comunidade** - Rede social de tutores
- ✅ **Páginas Legais** - Privacidade e Termos

### Rotas Dinâmicas
- `/produto/[id]` - Detalhes do produto
- `/blog/[slug]` - Artigo individual
- `/blog/categoria/[category]` - Artigos por categoria

### Funcionalidades Especiais
- 🎨 **Design System** completo com cores da marca
- 📱 **PWA Ready** - Installável como app
- 🔍 **SEO Otimizado** - Meta tags e structured data
- 📊 **Analytics** - Google Tag Manager integrado
- 🖼️ **Imagens Otimizadas** - Next.js Image com WebP/AVIF
- 📝 **Formulários Validados** - Zod + React Hook Form
- 🌐 **Responsivo** - Mobile-first design
- ⚡ **Performance** - Core Web Vitals otimizados

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://petiskaegatao.com.br
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
GOOGLE_SITE_VERIFICATION=your-verification-code
```

### Configurações Importantes

- **next.config.ts** - Configuração do Next.js
- **tailwind.config.ts** - Configuração do Tailwind
- **lib/seo.ts** - Configuração de SEO
- **lib/image-config.ts** - Otimização de imagens

## 🚀 Deploy

### Pré-Deploy
```bash
npm run pre-deploy
```

### Vercel (Recomendado)
1. Conecte o repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Provedores
O projeto é compatível com:
- Netlify
- AWS Amplify  
- Railway
- Render

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ em todas as métricas
- 🖼️ **Imagens**: WebP/AVIF automático
- 📦 **Bundle Size**: Otimizado com tree-shaking
- 🚀 **Loading**: Lazy loading e code splitting
- 💾 **Cache**: Headers otimizados para assets

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da **Petiska & Gatão**. Todos os direitos reservados.

## 📞 Contato

- **Website**: [petiskaegatao.com.br](https://petiskaegatao.com.br)
- **Email**: contato@petiskaegatao.com.br
- **WhatsApp**: (61) 99999-9999
- **Instagram**: [@petiskagatao](https://instagram.com/petiskagatao)

---

Feito com ❤️ para os pets de Brasília 🐕🐱
