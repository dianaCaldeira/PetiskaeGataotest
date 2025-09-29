'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatWhatsAppUrl = (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Basic validation
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      
      if (!formData.name?.trim()) {
        newErrors.name = 'Nome é obrigatório';
      }
      if (!formData.email?.trim()) {
        newErrors.email = 'E-mail é obrigatório';
      }
      if (!formData.subject?.trim()) {
        newErrors.subject = 'Assunto é obrigatório';
      }
      if (!formData.message?.trim()) {
        newErrors.message = 'Mensagem é obrigatória';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }
      
      // Create WhatsApp message
      const message = `🐕 *Contato - Petiska & Gatão*
      
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone || 'Não informado'}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}

Enviado através do site da Petiska & Gatão 🐱`;

      // Open WhatsApp with the message
      const whatsappUrl = formatWhatsAppUrl('5561999999999', message);
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionado para o WhatsApp para finalizar o envio.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Fale Conosco
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Entre em <span className="text-accent">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tem dúvidas sobre nossos petiscos? Quer se tornar um parceiro? 
              Estamos aqui para ajudar! Entre em contato conosco.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Envie sua Mensagem
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input
                        type="text"
                        value={formData.name || ''}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone (opcional)
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone || ''}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(61) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input
                        type="text"
                        value={formData.subject || ''}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Sobre o que você gostaria de falar?"
                        className={errors.subject ? 'border-destructive' : ''}
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        value={formData.message || ''}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Conte-nos mais detalhes sobre sua solicitação..."
                        rows={5}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar via WhatsApp
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Outras Formas de Contato
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Escolha a forma mais conveniente para você entrar em contato conosco.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">WhatsApp</h3>
                        <p className="text-muted-foreground">(61) 99999-9999</p>
                        <p className="text-sm text-muted-foreground">Resposta rápida garantida!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">E-mail</h3>
                        <p className="text-muted-foreground">contato@petiskagatao.com.br</p>
                        <p className="text-sm text-muted-foreground">Respondemos em até 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-warm-beige/30 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">Localização</h3>
                        <p className="text-muted-foreground">Brasília - DF</p>
                        <p className="text-sm text-muted-foreground">Produção 100% local</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-leaf-green/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-sm text-muted-foreground">Sábados: 8h às 12h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold text-primary">Garantia de Resposta</h3>
                </div>
                <p className="text-muted-foreground">
                  Comprometemo-nos a responder todas as mensagens em até 24 horas. 
                  Para urgências, use nosso WhatsApp para resposta imediata!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
