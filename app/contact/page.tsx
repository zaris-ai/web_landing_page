'use client';

import React, { useState } from 'react';

const CONTACT_WEBHOOK_URL =
  'https://zarisdevelopers.app.n8n.cloud/webhook/contact-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      storeUrl: formData.get('storeUrl'),
      topic: formData.get('topic'),
      message: formData.get('message'),
      source: 'Arka Contact Page',
    };

    try {
      setIsSubmitting(true);
      setStatus('idle');

      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="mt-8 rounded-3xl border border-[#FFC4C4] bg-[#FCF5EE] p-8 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#850E35]">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#850E35]">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
          />
        </div>

        <div>
          <label htmlFor="storeUrl" className="mb-2 block text-sm font-semibold text-[#850E35]">
            Shopify store URL
          </label>
          <input
            id="storeUrl"
            name="storeUrl"
            type="text"
            placeholder="your-store.myshopify.com"
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
          />
        </div>

        <div>
          <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-[#850E35]">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            required
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
            defaultValue=""
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="support">Support</option>
            <option value="sales">Sales inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="feedback">Product feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#850E35]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us what you need."
          className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-6">
          {status === 'success' && (
            <p className="font-medium text-green-700">
              Message sent successfully.
            </p>
          )}

          {status === 'error' && (
            <p className="font-medium text-red-700">
              Message failed. Please try again.
            </p>
          )}

          {status === 'idle' && (
            <p className="text-slate-600">
              Your message will be sent directly to Smart Store Analyzer.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-[#850E35] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  );
}