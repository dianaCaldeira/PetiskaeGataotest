import { useForm as useReactHookForm, UseFormProps, FieldValues, Path } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { 
  contactSchema, 
  partnerSchema, 
  leadMagnetSchema, 
  newsletterSchema, 
  partnerLoginSchema, 
  searchSchema 
} from '@/lib/validations';

/**
 * Enhanced useForm hook with Zod validation and toast integration
 */
export function useForm<T extends FieldValues>(
  schema: z.ZodSchema<T>,
  options?: Omit<UseFormProps<T>, 'resolver'>
) {
  const { toast } = useToast();
  
  const form = useReactHookForm<T>({
    mode: 'onChange',
    ...options,
  });

  // Helper to show validation errors as toast
  const showValidationErrors = () => {
    const errors = form.formState.errors;
    const firstError = Object.values(errors)[0];
    
    if (firstError?.message) {
      toast({
        title: "Erro de validação",
        description: firstError.message as string,
        variant: "destructive",
      });
    }
  };

  // Enhanced submit handler with error handling
  const handleSubmit = (
    onValid: (data: T) => void | Promise<void>,
    onInvalid?: () => void
  ) => {
    return form.handleSubmit(
      async (data) => {
        try {
          await onValid(data);
        } catch (error) {
          toast({
            title: "Erro ao enviar formulário",
            description: error instanceof Error ? error.message : "Erro desconhecido",
            variant: "destructive",
          });
        }
      },
      () => {
        showValidationErrors();
        onInvalid?.();
      }
    );
  };

  // Helper to set field error
  const setFieldError = (field: Path<T>, message: string) => {
    form.setError(field, { message });
  };

  // Helper to clear all errors
  const clearErrors = () => {
    form.clearErrors();
  };

  // Helper to reset form with success message
  const resetWithSuccess = (message: string) => {
    form.reset();
    toast({
      title: "Sucesso!",
      description: message,
    });
  };

  return {
    ...form,
    handleSubmit,
    setFieldError,
    clearErrors,
    resetWithSuccess,
    showValidationErrors,
  };
}

/**
 * Hook for contact form
 */
export function useContactForm() {
  return useForm(contactSchema, {
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });
}

/**
 * Hook for partner registration form
 */
export function usePartnerForm() {
  return useForm(partnerSchema, {
    defaultValues: {
      businessName: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      neighborhood: '',
      businessType: '',
      experience: '',
      averageMonthlyPurchase: '',
      targetMarket: [],
      hasPhysicalStore: false,
      acceptsTerms: false,
    },
  });
}

/**
 * Hook for lead magnet form
 */
export function useLeadMagnetForm() {
  return useForm(leadMagnetSchema, {
    defaultValues: {
      name: '',
      email: '',
      petName: '',
      petType: '',
      acceptsMarketing: false,
    },
  });
}

/**
 * Hook for newsletter form
 */
export function useNewsletterForm() {
  return useForm(newsletterSchema, {
    defaultValues: {
      email: '',
    },
  });
}

/**
 * Hook for partner login form
 */
export function usePartnerLoginForm() {
  return useForm(partnerLoginSchema, {
    defaultValues: {
      email: '',
      password: '',
    },
  });
}

/**
 * Hook for search form
 */
export function useSearchForm() {
  return useForm(searchSchema, {
    defaultValues: {
      query: '',
      category: '',
    },
  });
}
