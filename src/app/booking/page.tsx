'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  { num: '01', title: 'Submit Your Request', desc: 'Fill in the form with your idea, placement, size, and any reference images you have in mind.' },
  { num: '02', title: 'Consultation Call', desc: 'Petzko will reach out to discuss your concept and ensure it\'s the right fit for your vision.' },
  { num: '03', title: 'Custom Design', desc: 'A bespoke design is created exclusively for you — shared before the session for your approval.' },
  { num: '04', title: 'The Session', desc: 'Experience the transformation in a calm, sterile, and focused studio environment.' },
  { num: '05', title: 'Aftercare', desc: 'Detailed aftercare guidance ensures your tattoo heals beautifully and lasts a lifetime.' },
];

const tips = [
  { title: 'Eat beforehand', desc: 'Have a solid meal 2-3 hours before your session to keep blood sugar stable.' },
  { title: 'Stay hydrated', desc: 'Well-hydrated skin accepts ink more evenly. Drink plenty of water in the days before.' },
  { title: 'Avoid alcohol', desc: 'No alcohol 24 hours prior — it thins blood and affects healing.' },
  { title: 'Dress smart', desc: 'Wear or bring clothing that allows easy access to the tattoo area.' },
  { title: 'Moisturize', desc: 'Apply unscented moisturizer to the area for several days before your appointment.' },
  { title: 'Rest well', desc: 'A good night\'s sleep before your session helps your body and mind stay calm.' },
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: '',
    placement: '',
    size: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: 'transparent',
    border: '1px solid rgba(200,169,106,0.2)',
    borderRadius: 0,
    color: '#f2f2f2',
    fontFamily: 'var(--font-inter)',
    fontWeight: 300,
    fontSize: '0.85rem',
    padding: '14px 16px',
    width: '100%',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.6rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    color: '#8a8270',
    fontFamily: 'var(--font-inter)',
    marginBottom: '8px',
  };

  return (
    <>
      {/* ─── HEADER ───────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20" style={{ background: '#060606' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              <span className="gold-line" />
              Appointments
            </p>
            <h1
              className="font-light leading-none mb-6"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
            >
              <span className="block text-7xl md:text-9xl">Booking</span>
            </h1>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
            >
              Your tattoo journey begins here. All appointments begin with a consultation to ensure we bring your vision to life with precision and care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        <ScrollReveal>
          <p
            className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
            style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
          >
            <span className="gold-line" />
            How It Works
          </p>
          <h2
            className="text-4xl md:text-6xl font-light mb-16 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
          >
            The <em style={{ color: '#c8a96a' }}>Process</em>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 60}>
              <div
                className="grid grid-cols-[auto,1fr] gap-8 py-8 group"
                style={{ borderBottom: '1px solid rgba(200,169,106,0.08)' }}
              >
                <div className="flex items-start pt-0.5">
                  <span
                    className="text-5xl font-light"
                    style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.25)', lineHeight: 1 }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                  <h3
                    className="text-2xl font-light md:min-w-[220px]"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.01em' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── FORM ────────────────────────────────────────────────── */}
      <section style={{ background: '#060606' }} className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left info */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p
                  className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
                  style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                >
                  <span className="gold-line" />
                  Get in Touch
                </p>
                <h2
                  className="text-4xl font-light mb-8 leading-tight"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
                >
                  Book Your<br />
                  <em style={{ color: '#c8a96a' }}>Appointment</em>
                </h2>
                <p
                  className="text-sm leading-relaxed mb-10"
                  style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                >
                  Fill in the form and Petzko will get back to you within 48 hours to discuss your idea and set up a consultation.
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Email</p>
                    <a href="mailto:info@fearless-tattoo.at" className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      info@fearless-tattoo.at
                    </a>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Instagram</p>
                    <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      @fearless.tattoo
                    </a>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Location</p>
                    <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Vienna, Austria</p>
                  </div>
                </div>

                {/* Preview image */}
                <div className="img-overlay hidden lg:block">
                  <Image
                    src="https://picsum.photos/seed/booking-img/500/600"
                    alt="Studio atmosphere"
                    width={500}
                    height={600}
                    className="w-full object-cover"
                    style={{ filter: 'grayscale(0.3) brightness(0.7)' }}
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <ScrollReveal delay={150}>
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center text-center py-24 px-8"
                    style={{ border: '1px solid rgba(200,169,106,0.15)', background: '#111111' }}
                  >
                    <span
                      className="text-7xl font-light mb-4"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#c8a96a', lineHeight: 1 }}
                    >
                      ✓
                    </span>
                    <h3
                      className="text-3xl font-light mb-4"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}
                    >
                      Request Received
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '340px' }}
                    >
                      Thank you for reaching out. Petzko will review your request and get back to you within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          style={{ ...inputStyle, color: '#f2f2f2' }}
                          className="placeholder:text-[#4a4540]"
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          style={inputStyle}
                          className="placeholder:text-[#4a4540]"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Phone / Instagram</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number or @instagram"
                        style={inputStyle}
                        className="placeholder:text-[#4a4540]"
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Tattoo Idea *</label>
                      <textarea
                        name="idea"
                        required
                        value={formData.idea}
                        onChange={handleChange}
                        placeholder="Describe your tattoo idea in detail — imagery, symbolism, style preferences..."
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical' as const, lineHeight: '1.7' }}
                        className="placeholder:text-[#4a4540]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label style={labelStyle}>Body Placement *</label>
                        <input
                          type="text"
                          name="placement"
                          required
                          value={formData.placement}
                          onChange={handleChange}
                          placeholder="e.g. forearm, ribcage"
                          style={inputStyle}
                          className="placeholder:text-[#4a4540]"
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Approximate Size</label>
                        <select
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          style={{ ...inputStyle, appearance: 'none' as const }}
                        >
                          <option value="" style={{ background: '#111111' }}>Select size</option>
                          <option value="small" style={{ background: '#111111' }}>Small (under 5cm)</option>
                          <option value="medium" style={{ background: '#111111' }}>Medium (5–15cm)</option>
                          <option value="large" style={{ background: '#111111' }}>Large (15–30cm)</option>
                          <option value="xlarge" style={{ background: '#111111' }}>X-Large (30cm+)</option>
                          <option value="sleeve" style={{ background: '#111111' }}>Full Sleeve / Bodywork</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          style={{ ...inputStyle, appearance: 'none' as const }}
                        >
                          <option value="" style={{ background: '#111111' }}>Select range</option>
                          <option value="under300" style={{ background: '#111111' }}>Under €300</option>
                          <option value="300-600" style={{ background: '#111111' }}>€300 – €600</option>
                          <option value="600-1200" style={{ background: '#111111' }}>€600 – €1200</option>
                          <option value="over1200" style={{ background: '#111111' }}>€1200+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Additional Notes</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Reference images, inspiration, cover-up requirements, or anything else..."
                        rows={3}
                        style={{ ...inputStyle, resize: 'vertical' as const, lineHeight: '1.7' }}
                        className="placeholder:text-[#4a4540]"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-6 pt-2">
                      <p
                        className="text-[10px] leading-relaxed"
                        style={{ color: '#4a4540', fontFamily: 'var(--font-inter)', maxWidth: '300px' }}
                      >
                        By submitting, you agree to be contacted by Fearless Inc regarding your request.
                      </p>
                      <button
                        type="submit"
                        data-hover
                        className="shrink-0 inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
                        style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREP TIPS ───────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        <ScrollReveal>
          <p
            className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
            style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
          >
            <span className="gold-line" />
            Preparation
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-16 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
          >
            How to <em style={{ color: '#c8a96a' }}>Prepare</em>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <ScrollReveal key={tip.title} delay={i * 60}>
              <div
                className="p-8 group hover:border-[rgba(200,169,106,0.3)] transition-all duration-500"
                style={{ border: '1px solid rgba(200,169,106,0.1)', background: '#111111' }}
              >
                <span
                  className="text-4xl font-light block mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.3)', lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-lg font-light mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}
                >
                  {tip.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                >
                  {tip.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
