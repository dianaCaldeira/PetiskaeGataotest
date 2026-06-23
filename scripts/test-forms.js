#!/usr/bin/env node

/**
 * Script para testar validações de formulários
 * Verifica se todas as validações Zod estão funcionando
 */

const { 
  contactSchema, 
  partnerSchema, 
  leadMagnetSchema, 
  newsletterSchema,
  partnerLoginSchema 
} = require('../lib/validations');

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

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

// Dados de teste válidos
const validTestData = {
  contact: {
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '(61) 99999-9999',
    subject: 'Dúvida sobre produtos',
    message: 'Gostaria de saber mais sobre os petiscos para cães.'
  },
  
  partner: {
    businessName: 'Pet Shop Central',
    ownerName: 'Maria Santos',
    email: 'maria@petshop.com',
    phone: '(61) 3333-4444',
    address: 'SQN 404, Bloco A, Loja 15',
    neighborhood: 'Asa Norte',
    businessType: 'pet_shop',
    experience: '5_anos',
    averageMonthlyPurchase: '1000_3000',
    targetMarket: ['tutores_casuais', 'criadores'],
    hasPhysicalStore: true,
    acceptsTerms: true
  },
  
  leadMagnet: {
    name: 'Ana Costa',
    email: 'ana@example.com',
    petName: 'Rex',
    petType: 'cao',
    acceptsMarketing: true
  },
  
  newsletter: {
    email: 'newsletter@example.com'
  },
  
  partnerLogin: {
    email: 'parceiro@example.com',
    password: '123456'
  }
};

// Dados de teste inválidos
const invalidTestData = {
  contact: [
    { name: '', email: 'joao@example.com', subject: 'Test', message: 'Test message' }, // Nome vazio
    { name: 'João', email: 'email-inválido', subject: 'Test', message: 'Test message' }, // Email inválido
    { name: 'João', email: 'joao@example.com', subject: '', message: 'Test message' }, // Assunto vazio
    { name: 'João', email: 'joao@example.com', subject: 'Test', message: 'Curto' }, // Mensagem muito curta
  ],
  
  partner: [
    { ...validTestData.partner, businessName: '' }, // Nome da empresa vazio
    { ...validTestData.partner, email: 'email-inválido' }, // Email inválido
    { ...validTestData.partner, targetMarket: [] }, // Array vazio
    { ...validTestData.partner, acceptsTerms: false }, // Termos não aceitos
  ],
  
  leadMagnet: [
    { ...validTestData.leadMagnet, name: '' }, // Nome vazio
    { ...validTestData.leadMagnet, email: 'email-inválido' }, // Email inválido
  ],
  
  newsletter: [
    { email: '' }, // Email vazio
    { email: 'email-inválido' }, // Email inválido
  ],
  
  partnerLogin: [
    { ...validTestData.partnerLogin, email: 'email-inválido' }, // Email inválido
    { ...validTestData.partnerLogin, password: '123' }, // Senha muito curta
  ]
};

function testSchema(schemaName, schema, validData, invalidDataArray) {
  logInfo(`\nTestando schema: ${schemaName}`);
  
  let passed = 0;
  let failed = 0;
  
  // Teste com dados válidos
  try {
    schema.parse(validData);
    logSuccess(`✓ Dados válidos aceitos`);
    passed++;
  } catch (error) {
    logError(`✗ Dados válidos rejeitados: ${error.errors?.[0]?.message || error.message}`);
    failed++;
  }
  
  // Testes com dados inválidos
  invalidDataArray.forEach((invalidData, index) => {
    try {
      schema.parse(invalidData);
      logError(`✗ Dados inválidos aceitos (teste ${index + 1})`);
      failed++;
    } catch (error) {
      logSuccess(`✓ Dados inválidos rejeitados corretamente (teste ${index + 1}): ${error.errors?.[0]?.message || error.message}`);
      passed++;
    }
  });
  
  return { passed, failed };
}

async function runFormValidationTests() {
  log('\n🧪 Iniciando testes de validação de formulários\n', 'bold');
  
  const schemas = [
    { name: 'Contact Form', schema: contactSchema, valid: validTestData.contact, invalid: invalidTestData.contact },
    { name: 'Partner Registration', schema: partnerSchema, valid: validTestData.partner, invalid: invalidTestData.partner },
    { name: 'Lead Magnet', schema: leadMagnetSchema, valid: validTestData.leadMagnet, invalid: invalidTestData.leadMagnet },
    { name: 'Newsletter', schema: newsletterSchema, valid: validTestData.newsletter, invalid: invalidTestData.newsletter },
    { name: 'Partner Login', schema: partnerLoginSchema, valid: validTestData.partnerLogin, invalid: invalidTestData.partnerLogin },
  ];
  
  let totalPassed = 0;
  let totalFailed = 0;
  
  for (const { name, schema, valid, invalid } of schemas) {
    const result = testSchema(name, schema, valid, invalid);
    totalPassed += result.passed;
    totalFailed += result.failed;
  }
  
  // Relatório final
  log('\n📊 RELATÓRIO DE TESTES DE VALIDAÇÃO\n', 'bold');
  log(`Total de testes: ${totalPassed + totalFailed}`);
  logSuccess(`Testes aprovados: ${totalPassed}`);
  
  if (totalFailed > 0) {
    logError(`Testes falharam: ${totalFailed}`);
  } else {
    logSuccess('🎉 Todos os testes de validação passaram!');
  }
  
  // Teste de performance das validações
  log('\n⚡ Teste de performance das validações:', 'blue');
  
  const performanceTests = schemas.map(({ name, schema, valid }) => {
    const startTime = process.hrtime.bigint();
    
    for (let i = 0; i < 1000; i++) {
      try {
        schema.parse(valid);
      } catch (error) {
        // Ignorar erros no teste de performance
      }
    }
    
    const endTime = process.hrtime.bigint();
    const duration = Number(endTime - startTime) / 1000000; // Converter para ms
    
    return { name, duration: duration / 1000 }; // Média por validação
  });
  
  performanceTests.forEach(({ name, duration }) => {
    const color = duration < 0.1 ? 'green' : duration < 0.5 ? 'yellow' : 'red';
    log(`${name}: ${duration.toFixed(3)}ms por validação`, color);
  });
  
  log('\n✨ Teste de validações concluído!\n', 'bold');
  
  return {
    total: totalPassed + totalFailed,
    passed: totalPassed,
    failed: totalFailed,
    schemas: schemas.length
  };
}

// Executar se chamado diretamente
if (require.main === module) {
  runFormValidationTests().catch(console.error);
}

module.exports = { runFormValidationTests };
