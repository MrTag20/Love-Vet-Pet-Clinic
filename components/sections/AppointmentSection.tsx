'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Stethoscope,
  Smile,
} from 'lucide-react';
import { NeuInput } from '@/components/ui/NeuInput';
import { NeuSelect } from '@/components/ui/NeuSelect';
import { NeuTextarea } from '@/components/ui/NeuTextarea';
import { NeuButton } from '@/components/ui/NeuButton';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';
import { NeuBadge } from '@/components/ui/NeuBadge';

const formSchema = z.object({
  ownerName: z.string().min(2, 'Pet owner name is required (at least 2 characters)'),
  phone: z.string().min(7, 'Please provide a valid contact number'),
  email: z.string().email('Please provide a valid email address'),
  petName: z.string().min(1, 'Pet name is required'),
  petType: z.enum(['Dog', 'Cat', 'Bird', 'Other'], {
    message: 'Please select a pet type',
  }),
  serviceType: z.enum(
    ['Grooming', 'Vaccination', 'Consultation', 'Surgery', 'Certification', 'Other'],
    {
      message: 'Please select a service',
    }
  ),
  preferredDate: z.string().min(1, 'Please select your preferred date'),
  preferredTime: z.string().min(1, 'Please select a time slot'),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const AppointmentSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; pet: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      petType: 'Dog',
      serviceType: 'Consultation',
      preferredDate: todayStr,
      preferredTime: '10:00 AM - 11:00 AM',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessData({
          id: result.appointmentId || 'LV-849201',
          pet: values.petName,
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2B4A34', '#D4A017', '#F0D98C', '#F3EEE1'],
        });

        reset();
      } else {
        setServerError(result.message || 'Something went wrong. Please check fields.');
      }
    } catch {
      setServerError('Network error. Please try again or call our hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EEE1] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.3),-3px_-3px_8px_rgba(255,255,255,0.9)] border border-white/50 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2B4A34]">
              SCHEDULE A VISIT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B4A34] tracking-tight mb-4"
          >
            Book an Appointment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B6357]"
          >
            Book your companion’s checkup, surgery consultation, or grooming session online.
            We confirm instantly with zero wait time.
          </motion.p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Reassurance, What to Expect, Clinic Hours & Emergency Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-[#F3EEE1] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_20px_rgba(163,148,116,0.32),-8px_-8px_20px_rgba(255,255,255,0.9)] border border-white/60">
              <h3 className="font-serif text-2xl font-bold text-[#2B4A34] mb-3">
                Compassionate & Fear-Free Visits
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6357] leading-relaxed mb-6">
                Our clinic utilizes gentle feline & canine handling, calming pheromones, and
                sound-isolated recovery suites so your pet feels secure and loved from arrival
                to departure.
              </p>

              {/* What to Expect Bullets */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B4A34] mb-4">
                What To Expect:
              </h4>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <NeuIconDisc size="sm" variant="raised">
                    <Stethoscope className="w-4 h-4 text-[#2B4A34]" />
                  </NeuIconDisc>
                  <div>
                    <p className="text-xs font-bold text-[#2B4A34]">
                      Comprehensive Biometric Triage
                    </p>
                    <p className="text-xs text-[#6B6357]">
                      Thorough check of heart, lungs, ears, coat, weight & vitals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <NeuIconDisc size="sm" variant="raised">
                    <Smile className="w-4 h-4 text-[#2B4A34]" />
                  </NeuIconDisc>
                  <div>
                    <p className="text-xs font-bold text-[#2B4A34]">
                      Zero Waiting Room Stress
                    </p>
                    <p className="text-xs text-[#6B6357]">
                      Direct entry into sanitized examination suites.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <NeuIconDisc size="sm" variant="raised">
                    <FileCheck className="w-4 h-4 text-[#2B4A34]" />
                  </NeuIconDisc>
                  <div>
                    <p className="text-xs font-bold text-[#2B4A34]">
                      Digital Health Summary
                    </p>
                    <p className="text-xs text-[#6B6357]">
                      Instant SMS / email prescription and diet roadmap.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="p-4 rounded-2xl bg-[#EBE4D5] shadow-[inset_3px_3px_6px_rgba(163,148,116,0.25),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border border-[#DFD5C2]/40 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#D4A017]" />
                  <span className="text-xs font-bold text-[#2B4A34] uppercase tracking-wider">
                    Clinic Operating Hours
                  </span>
                </div>
                <div className="text-xs text-[#1E2A22] space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday – Friday:</span>
                    <span className="font-bold">8:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday & Sunday:</span>
                    <span className="font-bold">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#D4A017]">
                    <span className="font-bold">Trauma & Surgery ICU:</span>
                    <span className="font-extrabold">24×7 Active</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact Pill */}
              <div className="p-4 rounded-2xl bg-[#2B4A34] text-[#F3EEE1] shadow-[6px_6px_14px_rgba(15,27,19,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1D3424] flex items-center justify-center text-[#F0D98C] shadow-inner">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#F0D98C] uppercase">
                      Direct Emergency Line
                    </p>
                    <p className="font-mono text-sm font-bold">+1 (800) 568-3838</p>
                  </div>
                </div>

                <a
                  href="tel:+18005683838"
                  className="px-3 py-1.5 rounded-full bg-[#D4A017] text-[#1E2A22] text-xs font-bold shadow-sm hover:bg-[#E5B228] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Large Neumorphic Inset Tray Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Soft pressed tray container */}
            <div className="bg-[#EBE4D5] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-[inset_8px_8px_18px_rgba(163,148,116,0.35),inset_-8px_-8px_18px_rgba(255,255,255,0.9)] border border-[#DFD5C2]/60 relative">
              <AnimatePresence mode="wait">
                {successData ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    {/* Animated Neumorphic Checkmark Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#2B4A34] text-[#F0D98C] shadow-[6px_6px_16px_rgba(163,148,116,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#F0D98C]" />
                    </div>

                    <NeuBadge variant="gold" size="md" className="mb-2">
                      Booking Confirmed
                    </NeuBadge>

                    <h3 className="font-serif text-3xl font-bold text-[#2B4A34] mb-2">
                      See you soon, {successData.pet}!
                    </h3>

                    <p className="text-sm text-[#6B6357] max-w-md mb-6">
                      We’ve reserved your veterinary slot and sent a confirmation SMS & email.
                      Reference ID:{' '}
                      <span className="font-mono font-bold text-[#2B4A34]">
                        {successData.id}
                      </span>
                    </p>

                    <NeuButton
                      variant="primary"
                      onClick={() => setSuccessData(null)}
                    >
                      Book Another Appointment
                    </NeuButton>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 sm:space-y-5"
                  >
                    {serverError && (
                      <div className="p-3.5 rounded-xl bg-red-100/90 text-red-800 text-xs font-semibold flex items-center gap-2 border border-red-300">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Row 1: Owner Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <NeuInput
                        label="Pet Owner Name"
                        placeholder="e.g. Eleanor Vance"
                        required
                        error={errors.ownerName?.message}
                        {...register('ownerName')}
                      />

                      <NeuInput
                        label="Phone Number"
                        type="tel"
                        placeholder="e.g. (555) 234-5678"
                        required
                        error={errors.phone?.message}
                        {...register('phone')}
                      />
                    </div>

                    {/* Row 2: Email & Pet Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <NeuInput
                        label="Email Address"
                        type="email"
                        placeholder="e.g. eleanor@example.com"
                        required
                        error={errors.email?.message}
                        {...register('email')}
                      />

                      <NeuInput
                        label="Pet's Name"
                        placeholder="e.g. Barnaby"
                        required
                        error={errors.petName?.message}
                        {...register('petName')}
                      />
                    </div>

                    {/* Row 3: Pet Type & Service Needed */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <NeuSelect
                        label="Pet Type"
                        required
                        options={[
                          { value: 'Dog', label: 'Dog (Canine)' },
                          { value: 'Cat', label: 'Cat (Feline)' },
                          { value: 'Bird', label: 'Bird (Avian)' },
                          { value: 'Other', label: 'Other Exotic' },
                        ]}
                        error={errors.petType?.message}
                        {...register('petType')}
                      />

                      <NeuSelect
                        label="Service Needed"
                        required
                        options={[
                          { value: 'Consultation', label: 'Clinical Consultation' },
                          { value: 'Vaccination', label: 'Vaccination & Immunisation' },
                          { value: 'Grooming', label: 'Pet Grooming & Spa' },
                          { value: 'Surgery', label: 'Surgical Consultation' },
                          { value: 'Certification', label: 'Health / Travel Certificate' },
                          { value: 'Other', label: 'Other Special Care' },
                        ]}
                        error={errors.serviceType?.message}
                        {...register('serviceType')}
                      />
                    </div>

                    {/* Row 4: Preferred Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <NeuInput
                        label="Preferred Date"
                        type="date"
                        min={todayStr}
                        required
                        error={errors.preferredDate?.message}
                        {...register('preferredDate')}
                      />

                      <NeuSelect
                        label="Preferred Time Slot"
                        required
                        options={[
                          { value: '09:00 AM - 10:00 AM', label: '09:00 AM - 10:00 AM (Morning)' },
                          { value: '10:00 AM - 11:00 AM', label: '10:00 AM - 11:00 AM (Morning)' },
                          { value: '11:00 AM - 12:00 PM', label: '11:00 AM - 12:00 PM (Noon)' },
                          { value: '02:00 PM - 03:00 PM', label: '02:00 PM - 03:00 PM (Afternoon)' },
                          { value: '04:00 PM - 05:00 PM', label: '04:00 PM - 05:00 PM (Evening)' },
                          { value: '06:00 PM - 07:00 PM', label: '06:00 PM - 07:00 PM (Late Evening)' },
                        ]}
                        error={errors.preferredTime?.message}
                        {...register('preferredTime')}
                      />
                    </div>

                    {/* Row 5: Additional Notes */}
                    <NeuTextarea
                      label="Additional Notes / Symptoms"
                      placeholder="Mention any symptoms, special behavioral notes, or previous medical history..."
                      rows={3}
                      error={errors.notes?.message}
                      {...register('notes')}
                    />

                    {/* Submit Button */}
                    <div className="pt-2">
                      <NeuButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        leftIcon={
                          isSubmitting ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <Sparkles className="w-5 h-5 text-[#F0D98C]" />
                          )
                        }
                      >
                        {isSubmitting ? 'Confirming with Clinic...' : 'Confirm Appointment'}
                      </NeuButton>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
