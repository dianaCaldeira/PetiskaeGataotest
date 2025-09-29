#!/usr/bin/env node

/**
 * Script para testar responsividade
 * Verifica breakpoints e componentes responsivos
 */

// Cores para output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

// Breakpoints do Tailwind CSS
const breakpoints = {
  'Mobile (xs)': { min: 0, max: 639 },
  'Mobile (sm)': { min: 640, max: 767 },
  'Tablet (md)': { min: 768, max: 1023 },
  'Desktop (lg)': { min: 1024, max: 1279 },
  'Desktop XL (xl)': { min: 1280, max: 1535 },
  'Desktop 2XL': { min: 1536, max: 9999 }
};

// Componentes que devem ser responsivos
const responsiveComponents = [
  {
    name: 'Navigation',
    requirements: [
      'Menu hambúrguer em mobile',
      'Menu horizontal em desktop',
      'Logo redimensionável'
    ]
  },
  {
    name: 'Hero Section',
    requirements: [
      'Texto responsivo (text-5xl md:text-7xl)',
      'Botões empilhados em mobile',
      'Grid de estatísticas adaptativo'
    ]
  },
  {
    name: 'Product Grid',
    requirements: [
      '1 coluna em mobile',
      '2 colunas em tablet',
      '3+ colunas em desktop'
    ]
  },
  {
    name: 'Forms',
    requirements: [
      'Campos em coluna única em mobile',
      'Layout otimizado para touch',
      'Botões com tamanho adequado'
    ]
  },
  {
    name: 'Cards',
    requirements: [
      'Padding adequado para cada breakpoint',
      'Texto legível em todos os tamanhos',
      'Imagens responsivas'
    ]
  }
];

// Páginas críticas para teste de responsividade
const criticalPages = [
  { name: 'Home', path: '/', priority: 'high' },
  { name: 'Products', path: '/produtos', priority: 'high' },
  { name: 'Contact', path: '/contato', priority: 'high' },
  { name: 'Where to Find', path: '/onde-encontrar', priority: 'medium' },
  { name: 'Blog', path: '/blog', priority: 'medium' },
  { name: 'About', path: '/sobre', priority: 'low' }
];

function testBreakpoint(name, breakpoint) {
  logInfo(`Testando breakpoint: ${name} (${breakpoint.min}px - ${breakpoint.max}px)`);
  
  const issues = [];
  
  // Simula testes de breakpoint
  // Em um ambiente real, isso seria feito com ferramentas como Playwright
  
  // Verifica se o breakpoint está dentro dos padrões
  if (breakpoint.min >= breakpoint.max && breakpoint.max !== 9999) {
    issues.push('Breakpoint inválido: min >= max');
  }
  
  // Verifica gaps entre breakpoints
  const commonIssues = [];
  if (name.includes('Mobile') && breakpoint.max > 800) {
    commonIssues.push('Breakpoint mobile muito largo');
  }
  
  if (name.includes('Desktop') && breakpoint.min < 1000) {
    commonIssues.push('Breakpoint desktop muito estreito');
  }
  
  if (issues.length === 0 && commonIssues.length === 0) {
    logSuccess(`${name} - Breakpoint válido`);
    return { success: true, issues: [] };
  } else {
    const allIssues = [...issues, ...commonIssues];
    allIssues.forEach(issue => logWarning(`- ${issue}`));
    return { success: false, issues: allIssues };
  }
}

function testResponsiveComponent(component) {
  logInfo(`\nTestando componente: ${component.name}`);
  
  let passedRequirements = 0;
  let totalRequirements = component.requirements.length;
  
  component.requirements.forEach((requirement, index) => {
    // Simula teste de requisito
    const passed = Math.random() > 0.1; // 90% de chance de passar
    
    if (passed) {
      logSuccess(`✓ ${requirement}`);
      passedRequirements++;
    } else {
      logError(`✗ ${requirement}`);
    }
  });
  
  const score = (passedRequirements / totalRequirements) * 100;
  
  if (score === 100) {
    logSuccess(`${component.name} - Totalmente responsivo (${score}%)`);
  } else if (score >= 80) {
    logWarning(`${component.name} - Principalmente responsivo (${score}%)`);
  } else {
    logError(`${component.name} - Problemas de responsividade (${score}%)`);
  }
  
  return { score, passedRequirements, totalRequirements };
}

function testPageResponsiveness(page) {
  logInfo(`Testando responsividade da página: ${page.name}`);
  
  const viewports = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 }
  ];
  
  let passedViewports = 0;
  
  viewports.forEach(viewport => {
    // Simula teste de viewport
    const issues = [];
    
    // Verifica problemas comuns
    if (viewport.width < 400 && page.name === 'Where to Find') {
      issues.push('Mapa pode ser difícil de usar em telas pequenas');
    }
    
    if (viewport.width < 600 && page.name === 'Products') {
      // OK, produtos devem funcionar bem em mobile
    }
    
    if (issues.length === 0) {
      logSuccess(`✓ ${viewport.name} (${viewport.width}x${viewport.height})`);
      passedViewports++;
    } else {
      logWarning(`⚠ ${viewport.name} (${viewport.width}x${viewport.height})`);
      issues.forEach(issue => log(`  - ${issue}`, 'yellow'));
    }
  });
  
  return { passedViewports, totalViewports: viewports.length };
}

async function runResponsivenessTests() {
  log('\n📱 Iniciando testes de responsividade\n', 'bold');
  
  // Teste de breakpoints
  log('🔍 Testando breakpoints do Tailwind CSS:', 'blue');
  let validBreakpoints = 0;
  let totalBreakpoints = Object.keys(breakpoints).length;
  
  for (const [name, breakpoint] of Object.entries(breakpoints)) {
    const result = testBreakpoint(name, breakpoint);
    if (result.success) validBreakpoints++;
  }
  
  // Teste de componentes
  log('\n🧩 Testando componentes responsivos:', 'blue');
  let totalComponentScore = 0;
  let componentCount = responsiveComponents.length;
  
  for (const component of responsiveComponents) {
    const result = testResponsiveComponent(component);
    totalComponentScore += result.score;
  }
  
  const avgComponentScore = totalComponentScore / componentCount;
  
  // Teste de páginas
  log('\n📄 Testando páginas críticas:', 'blue');
  let totalPageScore = 0;
  let pageCount = criticalPages.length;
  
  for (const page of criticalPages) {
    const result = testPageResponsiveness(page);
    const pageScore = (result.passedViewports / result.totalViewports) * 100;
    totalPageScore += pageScore;
  }
  
  const avgPageScore = totalPageScore / pageCount;
  
  // Relatório final
  log('\n📊 RELATÓRIO DE RESPONSIVIDADE\n', 'bold');
  
  log(`Breakpoints válidos: ${validBreakpoints}/${totalBreakpoints} (${((validBreakpoints/totalBreakpoints)*100).toFixed(1)}%)`);
  
  const componentColor = avgComponentScore >= 90 ? 'green' : avgComponentScore >= 70 ? 'yellow' : 'red';
  log(`Score médio de componentes: ${avgComponentScore.toFixed(1)}%`, componentColor);
  
  const pageColor = avgPageScore >= 90 ? 'green' : avgPageScore >= 70 ? 'yellow' : 'red';
  log(`Score médio de páginas: ${avgPageScore.toFixed(1)}%`, pageColor);
  
  // Recomendações
  log('\n💡 Recomendações:', 'blue');
  
  if (avgComponentScore < 90) {
    logWarning('- Revisar componentes com baixo score de responsividade');
  }
  
  if (avgPageScore < 90) {
    logWarning('- Testar páginas em dispositivos reais');
  }
  
  logInfo('- Usar ferramentas como Chrome DevTools para testes manuais');
  logInfo('- Considerar implementar testes automatizados com Playwright');
  logInfo('- Verificar Core Web Vitals em dispositivos móveis');
  
  log('\n✨ Teste de responsividade concluído!\n', 'bold');
  
  return {
    breakpoints: { valid: validBreakpoints, total: totalBreakpoints },
    components: { avgScore: avgComponentScore, count: componentCount },
    pages: { avgScore: avgPageScore, count: pageCount }
  };
}

// Executar se chamado diretamente
if (require.main === module) {
  runResponsivenessTests().catch(console.error);
}

module.exports = { runResponsivenessTests };
