import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
import { EarlyAccessSignup } from '@/api/entities';
import { trackEvent } from '@/components/lib/analytics';

const roleOptions = ['Nurse', 'Doctor', 'Caseworker', 'EMT', 'Student', 'Other'];

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    full_name: '',
    role: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      trackEvent('form_validation_error');
      return;
    }

    setIsSubmitting(true);
    trackEvent('form_submit_attempt');

    try {
      await EarlyAccessSignup.create(formData);
      
      trackEvent('form_submit_success');
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        full_name: '',
        role: '',
        organization: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      trackEvent('form_submit_error', { error: error.message });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = () => {
    if (isSuccess) {
      setIsSuccess(false);
    }
    onClose();
    trackEvent('modal_close');
  };

  React.useEffect(() => {
    if (isOpen) {
      trackEvent('modal_open');
    }
  }, [isOpen]);

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-[#042136] border-white/20 text-white">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">
              Thanks!
            </h2>
            <p className="text-white/80">
              We will reach out within 2 business days.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-[#042136] border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">Get early access</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="full_name" className="text-white/80">Full name *</Label>
              <Input
                id="full_name"
                type="text"
                value={formData.full_name}
                onChange={(e) => handleInputChange('full_name', e.target.value)}
                className={`bg-[#0F172A] border-white/20 text-white placeholder:text-white/50 ring-offset-[#042136] focus-visible:ring-yellow-400 ${errors.full_name ? 'border-red-500' : ''}`}
                placeholder="Your full name"
              />
              {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-white/80">Role *</Label>
              <Select 
                value={formData.role} 
                onValueChange={(value) => handleInputChange('role', value)}
              >
                <SelectTrigger className={`bg-[#0F172A] border-white/20 text-white data-[placeholder]:text-white/50 ring-offset-[#042136] focus:ring-yellow-400 ${errors.role ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-[#042136] border-white/20 text-white">
                  {roleOptions.map((role) => (
                    <SelectItem key={role} value={role} className="focus:bg-[#0F172A] focus:text-white">{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="text-white/80">Organization *</Label>
            <Input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
              className={`bg-[#0F172A] border-white/20 text-white placeholder:text-white/50 ring-offset-[#042136] focus-visible:ring-yellow-400 ${errors.organization ? 'border-red-500' : ''}`}
              placeholder="Your workplace"
            />
            {errors.organization && <p className="text-red-500 text-sm">{errors.organization}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`bg-[#0F172A] border-white/20 text-white placeholder:text-white/50 ring-offset-[#042136] focus-visible:ring-yellow-400 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white/80">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-[#0F172A] border-white/20 text-white placeholder:text-white/50 ring-offset-[#042136] focus-visible:ring-yellow-400"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white/80">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your needs..."
              className="h-24 bg-[#0F172A] border-white/20 text-white placeholder:text-white/50 ring-offset-[#042136] focus-visible:ring-yellow-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-400 text-[#042136] hover:bg-yellow-500 disabled:bg-yellow-400/50"
            size="large"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get early access'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}