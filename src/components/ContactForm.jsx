
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
// import { sendContactEmail } from '@/api/functions'; // This import is no longer needed after switching to fetch

const professionOptions = [
  'Doctors',
  'Nurses',
  'Dentists',
  'Med Students',
  'EMT/Paramedics',
  'Chiropractic/PT',
  'Caseworkers',
  'Farmers Market Vendors'
];

const contactMethods = ['Email', 'Text', 'Call'];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    best_contact_method: '',
    company: '',
    profession: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.best_contact_method) newErrors.best_contact_method = 'Please select a contact method';
    if (!formData.company.trim()) newErrors.company = 'Company/Organization is required';
    if (!formData.profession) newErrors.profession = 'Please select your profession';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/functions/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          best_contact_method: '',
          company: '',
          profession: ''
        });
      } else {
        // Handle server-side errors if any, e.g., display a generic error message
        console.error('Server responded with an error:', result.message || 'Unknown error');
        // Optionally set a general error state to display to the user
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle network or other unexpected errors
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-shiftsync">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-shiftsync-light rounded-3xl shadow-2xl p-12 border-t-4 border-yellow-400">
              <CheckCircle className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Thanks! 
              </h2>
              <p className="text-xl text-white/90">
                Our team will contact you soon with your access code.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-shiftsync">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-yellow-400">Reclaim Your Day?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Fill out the form and we'll send you a survey code tailored to your profession.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Form */}
            <motion.div
              className="bg-shiftsync-light rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-yellow-400"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/90 font-medium">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`bg-shiftsync-dark border-shiftsync focus:border-yellow-400 text-white placeholder-white/50 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/90 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`bg-shiftsync-dark border-shiftsync focus:border-yellow-400 text-white placeholder-white/50 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-shiftsync-dark border-shiftsync focus:border-yellow-400 text-white placeholder-white/50 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90 font-medium">Best Time/Way to Contact *</Label>
                  <Select 
                    value={formData.best_contact_method} 
                    onValueChange={(value) => handleInputChange('best_contact_method', value)}
                  >
                    <SelectTrigger className={`bg-shiftsync-dark border-shiftsync focus:border-yellow-400 text-white ${errors.best_contact_method ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent className="bg-shiftsync-dark border-shiftsync">
                      {contactMethods.map((method) => (
                        <SelectItem key={method} value={method} className="text-white hover:bg-shiftsync">{method}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.best_contact_method && <p className="text-red-400 text-sm">{errors.best_contact_method}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/90 font-medium">Company / Organization *</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`bg-shiftsync-dark border-shiftsync focus:border-yellow-400 text-white placeholder-white/50 ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Your workplace"
                  />
                  {errors.company && <p className="text-red-400 text-sm">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-white/90 font-medium">Profession *</Label>
                  <Select 
                    value={formData.profession} 
                    onValueChange={(value) => handleInputChange('profession', value)}
                  >
                    <SelectTrigger className={`bg-shiftsync-dark border-shiftsync focus:border-yellow-400 text-white ${errors.profession ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select your profession" />
                    </SelectTrigger>
                    <SelectContent className="bg-shiftsync-dark border-shiftsync">
                      {professionOptions.map((profession) => (
                        <SelectItem key={profession} value={profession} className="text-white hover:bg-shiftsync">{profession}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.profession && <p className="text-red-400 text-sm">{errors.profession}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request My Survey Code'
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative flex justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f569b2b0b_shift-switchjpg.png" 
                  alt="Two healthcare staff members smiling while wearing ShiftSync™ pins"
                  className="relative rounded-3xl shadow-2xl w-3/4"
                />
              </div>
              <p className="text-center text-white/90 mt-6 italic text-lg">
                ShiftSync™ is built with frontline professionals, for frontline professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
