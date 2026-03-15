'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              Get in Touch
            </p>
            <h1
              className="font-light leading-none mb-6"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
            >
              <span className="block text-7xl md:text-9xl">Contact</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT GRID ────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="flex flex-col gap-12">
                {/* Instagram */}
                <div>
                  <p
                    className="text-[9px] tracking-[0.35em] uppercase mb-4"
                    style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                  >
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/fearless.tattoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    className="group flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#c8a96a]"
                      style={{ border: '1px solid rgba(200,169,106,0.2)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                        @fearless.tattoo
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>
                        Follow for daily work
                      </p>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p
                    className="text-[9px] tracking-[0.35em] uppercase mb-4"
                    style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@fearless-tattoo.at"
                    data-hover
                    className="group flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#c8a96a]"
                      style={{ border: '1px solid rgba(200,169,106,0.2)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m2 7 10 7 10-7"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                        info@fearless-tattoo.at
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>
                        Reply within 48 hours
                      </p>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p
                    className="text-[9px] tracking-[0.35em] uppercase mb-4"
                    style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                  >
                    Location
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ border: '1px solid rgba(200,169,106,0.2)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                        Vienna, Austria
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>

                {/* Booking link */}
                <div
                  className="p-6"
                  style={{ border: '1px solid rgba(200,169,106,0.12)', background: '#111111' }}
                >
                  <p
                    className="text-sm font-light mb-2"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', fontSize: '1.1rem' }}
                  >
                    Ready to book?
                  </p>
                  <p
                    className="text-xs leading-relaxed mb-5"
                    style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                  >
                    Use the booking form to request an appointment and start your tattoo journey.
                  </p>
                  <Link
                    href="/booking"
                    data-hover
                    className="inline-flex text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80 px-6 py-3"
                    style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={150}>
              <p
                className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                <span className="gold-line" />
                Send a Message
              </p>
              <h2
                className="text-4xl font-light mb-10 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
              >
                Have a Question?<br />
                <em style={{ color: '#c8a96a' }}>Let&apos;s Talk.</em>
              </h2>

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
                    Message Sent
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '320px' }}
                  >
                    Thank you for reaching out. We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        style={inputStyle}
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
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      style={inputStyle}
                      className="placeholder:text-[#4a4540]"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      rows={8}
                      style={{ ...inputStyle, resize: 'vertical' as const, lineHeight: '1.8' }}
                      className="placeholder:text-[#4a4540]"
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      data-hover
                      className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
                      style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── MAP / LOCATION VISUAL ───────────────────────────────── */}
      <section style={{ background: '#060606', borderTop: '1px solid rgba(200,169,106,0.06)' }} className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div
            className="relative w-full flex items-center justify-center"
            style={{ height: '300px', border: '1px solid rgba(200,169,106,0.08)' }}
          >
            <div className="text-center">
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-3"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                Fearless Inc
              </p>
              <p
                className="text-3xl font-light"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}
              >
                Vienna, Austria
              </p>
              <p
                className="text-xs mt-3"
                style={{ color: '#4a4540', fontFamily: 'var(--font-inter)' }}
              >
                Exact address provided upon booking confirmation
              </p>
            </div>
            {/* Decorative lines */}
            <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(200,169,106,0.04)' }} />
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(200,169,106,0.04)' }} />
              {/* Center dot */}
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '8px', height: '8px', background: '#c8a96a', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '24px', height: '24px', border: '1px solid rgba(200,169,106,0.4)', borderRadius: '50%' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
