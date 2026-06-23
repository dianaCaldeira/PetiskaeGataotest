import { z } from 'zod';

// Contact form validation
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Telefone deve ter menos de 20 caracteres" })
    .optional(),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Assunto é obrigatório" })
    .max(200, { message: "Assunto deve ter menos de 200 caracteres" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" })
});

// Partner registration validation
export const partnerSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(1, { message: "Nome da empresa é obrigatório" })
    .max(200, { message: "Nome da empresa deve ter menos de 200 caracteres" }),
  ownerName: z
    .string()
    .trim()
    .min(1, { message: "Nome do responsável é obrigatório" })
    .max(100, { message: "Nome do responsável deve ter menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Telefone é obrigatório" })
    .max(20, { message: "Telefone deve ter menos de 20 caracteres" }),
  address: z
    .string()
    .trim()
    .min(1, { message: "Endereço é obrigatório" })
    .max(300, { message: "Endereço deve ter menos de 300 caracteres" }),
  neighborhood: z
    .string()
    .trim()
    .min(1, { message: "Bairro é obrigatório" })
    .max(100, { message: "Bairro deve ter menos de 100 caracteres" }),
  businessType: z
    .string()
    .min(1, { message: "Tipo de estabelecimento é obrigatório" }),
  experience: z
    .string()
    .min(1, { message: "Tempo de experiência é obrigatório" }),
  averageMonthlyPurchase: z
    .string()
    .min(1, { message: "Volume de compra é obrigatório" }),
  targetMarket: z
    .array(z.string())
    .min(1, { message: "Selecione pelo menos um tipo de cliente" }),
  hasPhysicalStore: z
    .boolean(),
  acceptsTerms: z
    .boolean()
    .refine(value => value === true, { message: "Você deve aceitar os termos" })
});

// Lead magnet form validation
export const leadMagnetSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  petName: z
    .string()
    .trim()
    .max(50, { message: "Nome do pet deve ter menos de 50 caracteres" })
    .optional(),
  petType: z
    .string()
    .optional(),
  acceptsMarketing: z
    .boolean()
});

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" })
});

// Blog comment validation
export const commentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  comment: z
    .string()
    .trim()
    .min(5, { message: "Comentário deve ter pelo menos 5 caracteres" })
    .max(500, { message: "Comentário deve ter menos de 500 caracteres" })
});

// Partner portal login validation
export const partnerLoginSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
    .max(100, { message: "Senha deve ter menos de 100 caracteres" })
});

// Search form validation
export const searchSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, { message: "Digite algo para buscar" })
    .max(100, { message: "Busca deve ter menos de 100 caracteres" }),
  category: z
    .string()
    .optional()
});

// File upload validation
export const fileSchema = z.object({
  file: z
    .instanceof(File)
    .refine(file => file.size <= 5 * 1024 * 1024, { message: "Arquivo deve ter menos de 5MB" })
    .refine(file => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type), {
      message: "Apenas imagens JPG, PNG ou WebP são permitidas"
    })
});

// Helper function to safely encode URL parameters
export const safeEncodeURIComponent = (str: string): string => {
  try {
    return encodeURIComponent(str.trim().substring(0, 1000)); // Limit length for URLs
  } catch (error) {
    console.error('Error encoding URI component:', error);
    return '';
  }
};

// Helper function to format WhatsApp URL safely
export const formatWhatsAppUrl = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  const safeMessage = safeEncodeURIComponent(message);
  return `https://wa.me/55${cleanPhone}?text=${safeMessage}`;
};

// Helper function to format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    // Format: (XX) XXXXX-XXXX
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 10) {
    // Format: (XX) XXXX-XXXX
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone; // Return original if doesn't match expected patterns
};

// Helper function to validate Brazilian phone number
export const validateBrazilianPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
};

// Helper function to validate CNPJ (Brazilian business ID)
export const validateCNPJ = (cnpj: string): boolean => {
  const cleaned = cnpj.replace(/\D/g, '');
  
  if (cleaned.length !== 14) return false;
  
  // Check for invalid patterns
  if (/^(\d)\1+$/.test(cleaned)) return false;
  
  // Validate check digits
  let sum = 0;
  let weight = 2;
  
  for (let i = 11; i >= 0; i--) {
    sum += parseInt(cleaned[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  
  const firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (parseInt(cleaned[12]) !== firstDigit) return false;
  
  sum = 0;
  weight = 2;
  
  for (let i = 12; i >= 0; i--) {
    sum += parseInt(cleaned[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  
  const secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return parseInt(cleaned[13]) === secondDigit;
};

// Helper function to format CNPJ
export const formatCNPJ = (cnpj: string): string => {
  const cleaned = cnpj.replace(/\D/g, '');
  
  if (cleaned.length === 14) {
    return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12)}`;
  }
  
  return cnpj;
};

// Type exports
export type ContactFormData = z.infer<typeof contactSchema>;
export type PartnerFormData = z.infer<typeof partnerSchema>;
export type LeadMagnetFormData = z.infer<typeof leadMagnetSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type CommentFormData = z.infer<typeof commentSchema>;
export type PartnerLoginFormData = z.infer<typeof partnerLoginSchema>;
export type SearchFormData = z.infer<typeof searchSchema>;
export type FileFormData = z.infer<typeof fileSchema>;
