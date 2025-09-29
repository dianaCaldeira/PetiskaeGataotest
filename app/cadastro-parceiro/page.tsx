'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Store,
  MapPin, 
  Phone, 
  Mail, 
  User, 
  FileText,
  CheckCircle,
  AlertCircle,
  Send,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';

interface PartnerFormData {
  petshopName: string;
  ownerName: string;
  email: string;
  phone: string;
  cnpj: string;
  address: string;
  neighborhood: string;
  city: string;
  monthlyCustomers: string;
  experience: string;
  expectations: string;
  acceptTerms: boolean;
}

export default function PartnerRegistration() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PartnerFormData>({
    petshopName: '',
    ownerName: '',
    email: '',
    phone: '',
    cnpj: '',
    address: '',
    neighborhood: '',
    city: 'Brasília',
    monthlyCustomers: '',
    experience: '',
    expectations: '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof PartnerFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof PartnerFormData, string>> = {};
    
    if (!formData.petshopName.trim()) newErrors.petshopName = 'Nome do pet shop é obrigatório';
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Nome do proprietário é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.cnpj.trim()) newErrors.cnpj = 'CNPJ é obrigatório';
    if (!formData.address.trim()) newErrors.address = 'Endereço é obrigatório';
    if (!formData.neighborhood.trim()) newErrors.neighborhood = 'Bairro é obrigatório';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Você deve aceitar os termos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `🏪 *NOVO CADASTRO DE PARCEIRO*

*DADOS DO PET SHOP:*
• Nome: ${formData.petshopName}
• Proprietário: ${formData.ownerName}
• E-mail: ${formData.email}
• Telefone: ${formData.phone}
• CNPJ: ${formData.cnpj}

*LOCALIZAÇÃO:*
• Endereço: ${formData.address}
• Bairro: ${formData.neighborhood}
• Cidade: ${formData.city}

*INFORMAÇÕES COMERCIAIS:*
• Clientes/mês: ${formData.monthlyCustomers || 'Não informado'}
• Experiência: ${formData.experience || 'Não informado'}
• Expectativas: ${formData.expectations || 'Não informado'}

*Enviado através do site da Petiska & Gatão* 🐱`;

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/5561999999999?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Cadastro enviado com sucesso!",
        description: "Você será redirecionado para o WhatsApp. Nossa equipe entrará em contato em breve.",
      });

      // Reset form
      setFormData({
        petshopName: '',
        ownerName: '',
        email: '',
        phone: '',
        cnpj: '',
        address: '',
        neighborhood: '',
        city: 'Brasília',
        monthlyCustomers: '',
        experience: '',
        expectations: '',
        acceptTerms: false
      });

    } catch (error) {
      toast({
        title: "Erro ao enviar cadastro",
        description: "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Margem Atrativa",
      description: "35-45% de margem nos produtos"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "2-5 dias úteis em todo o DF"
    },
    {
      icon: Award,
      title: "Suporte Completo",
      description: "Material promocional e treinamento"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground px-6 py-2 mb-6 text-lg">
              Cadastro de Parceiro
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Cadastre seu <span className="text-accent">Pet Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato para 
              apresentar as condições comerciais e iniciar nossa parceria.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Formulário de Cadastro
                </h2>
                <p className="text-muted-foreground">
                  Todas as informações são confidenciais e serão usadas apenas para análise da parceria.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados do Pet Shop */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    Dados do Pet Shop
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome do Pet Shop *
                      </label>
                      <Input
                        type="text"
                        value={formData.petshopName}
                        onChange={(e) => handleInputChange('petshopName', e.target.value)}
                        placeholder="Ex: Pet Shop Asa Norte"
                        className={errors.petshopName ? 'border-destructive' : ''}
                      />
                      {errors.petshopName && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.petshopName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        CNPJ *
                      </label>
                      <Input
                        type="text"
                        value={formData.cnpj}
                        onChange={(e) => handleInputChange('cnpj', e.target.value)}
                        placeholder="00.000.000/0001-00"
                        className={errors.cnpj ? 'border-destructive' : ''}
                      />
                      {errors.cnpj && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.cnpj}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dados do Proprietário */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Dados do Proprietário
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        placeholder="Seu nome completo"
                        className={errors.ownerName ? 'border-destructive' : ''}
                      />
                      {errors.ownerName && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.ownerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(61) 99999-9999"
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
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
                  </div>
                </div>

                {/* Localização */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localização
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Endereço Completo *
                      </label>
                      <Input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Rua, número, complemento"
                        className={errors.address ? 'border-destructive' : ''}
                      />
                      {errors.address && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Bairro *
                      </label>
                      <Input
                        type="text"
                        value={formData.neighborhood}
                        onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                        placeholder="Ex: Asa Norte"
                        className={errors.neighborhood ? 'border-destructive' : ''}
                      />
                      {errors.neighborhood && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.neighborhood}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cidade
                      </label>
                      <Input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Brasília"
                      />
                    </div>
                  </div>
                </div>

                {/* Informações Comerciais */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Informações Comerciais
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Número aproximado de clientes por mês
                      </label>
                      <Input
                        type="number"
                        value={formData.monthlyCustomers}
                        onChange={(e) => handleInputChange('monthlyCustomers', e.target.value)}
                        placeholder="Ex: 200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Experiência com petiscos naturais
                      </label>
                      <Textarea
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder="Conte-nos sobre sua experiência vendendo petiscos naturais..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Expectativas com a parceria
                      </label>
                      <Textarea
                        value={formData.expectations}
                        onChange={(e) => handleInputChange('expectations', e.target.value)}
                        placeholder="O que espera da parceria com a Petiska & Gatão?"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange('acceptTerms', !!checked)}
                  />
                  <div className="text-sm">
                    <label htmlFor="terms" className="text-foreground cursor-pointer">
                      Aceito os{' '}
                      <Link href="/termos" className="text-primary hover:underline">
                        termos e condições
                      </Link>{' '}
                      e autorizo o uso dos meus dados para análise da parceria. *
                    </label>
                    {errors.acceptTerms && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.acceptTerms}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Cadastro
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Próximos Passos
            </h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary">Análise do Cadastro</h4>
                  <p className="text-muted-foreground">Nossa equipe analisará suas informações em até 24 horas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary">Contato Comercial</h4>
                  <p className="text-muted-foreground">Entraremos em contato para apresentar condições e tabela de preços.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary">Início da Parceria</h4>
                  <p className="text-muted-foreground">Após aprovação, você receberá seu primeiro pedido e material de apoio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
