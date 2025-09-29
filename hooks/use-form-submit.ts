import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { formatWhatsAppUrl } from '@/lib/validations';
import type { 
  ContactFormData, 
  PartnerFormData, 
  LeadMagnetFormData, 
  NewsletterFormData 
} from '@/lib/validations';

/**
 * Hook for handling form submissions with different actions
 */
export function useFormSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Contact form submission
  const submitContactForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message
      const message = `
*Nova mensagem do site Petiska & Gatão*

*Nome:* ${data.name}
*E-mail:* ${data.email}
*Telefone:* ${data.phone || 'Não informado'}
*Assunto:* ${data.subject}

*Mensagem:*
${data.message}
      `.trim();

      const whatsappUrl = formatWhatsAppUrl('61999999999', message);
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionado para o WhatsApp para finalizar o envio.",
      });

      return true;
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Partner registration submission
  const submitPartnerForm = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message for partner registration
      const message = `
*Nova solicitação de parceria - Petiska & Gatão*

*Dados da Empresa:*
• Nome: ${data.businessName}
• Responsável: ${data.ownerName}
• E-mail: ${data.email}
• Telefone: ${data.phone}
• Endereço: ${data.address}, ${data.neighborhood}

*Informações Comerciais:*
• Tipo: ${data.businessType}
• Experiência: ${data.experience}
• Volume mensal: ${data.averageMonthlyPurchase}
• Público-alvo: ${data.targetMarket.join(', ')}
• Loja física: ${data.hasPhysicalStore ? 'Sim' : 'Não'}

*Termos aceitos:* ${data.acceptsTerms ? 'Sim' : 'Não'}
      `.trim();

      const whatsappUrl = formatWhatsAppUrl('61999999999', message);
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em até 24 horas para finalizar sua parceria.",
      });

      return true;
    } catch (error) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lead magnet submission
  const submitLeadMagnetForm = async (data: LeadMagnetFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to save lead and send guide
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would:
      // 1. Save lead to database
      // 2. Send email with PDF guide
      // 3. Add to marketing automation
      
      toast({
        title: "Guia enviado com sucesso!",
        description: "Verifique sua caixa de entrada e spam. O guia chegará em alguns minutos.",
      });

      return true;
    } catch (error) {
      toast({
        title: "Erro ao enviar guia",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Newsletter subscription
  const submitNewsletterForm = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to subscribe to newsletter
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades e dicas sobre pets.",
      });

      return true;
    } catch (error) {
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generic form submission with custom success message
  const submitGenericForm = async (
    submitFn: () => Promise<void>,
    successMessage: string = "Formulário enviado com sucesso!"
  ) => {
    setIsSubmitting(true);
    
    try {
      await submitFn();
      
      toast({
        title: "Sucesso!",
        description: successMessage,
      });

      return true;
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitContactForm,
    submitPartnerForm,
    submitLeadMagnetForm,
    submitNewsletterForm,
    submitGenericForm,
  };
}

/**
 * Hook for form validation helpers
 */
export function useFormValidation() {
  const { toast } = useToast();

  // Validate required fields
  const validateRequired = (value: string | undefined, fieldName: string) => {
    if (!value || value.trim().length === 0) {
      toast({
        title: "Campo obrigatório",
        description: `${fieldName} é obrigatório.`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  // Validate phone number
  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um telefone válido.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  // Validate minimum length
  const validateMinLength = (value: string, minLength: number, fieldName: string) => {
    if (value.length < minLength) {
      toast({
        title: "Texto muito curto",
        description: `${fieldName} deve ter pelo menos ${minLength} caracteres.`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  // Validate maximum length
  const validateMaxLength = (value: string, maxLength: number, fieldName: string) => {
    if (value.length > maxLength) {
      toast({
        title: "Texto muito longo",
        description: `${fieldName} deve ter no máximo ${maxLength} caracteres.`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return {
    validateRequired,
    validateEmail,
    validatePhone,
    validateMinLength,
    validateMaxLength,
  };
}
