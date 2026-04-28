'use client';

import React from 'react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // connect this to your API route / server action later
    const formData = new FormData(e.currentTarget);

    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      store: formData.get('store'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    });
  };

  return (
    <form
      className="mt-8 rounded-3xl border border-[#FFC4C4] bg-[#FCF5EE] p-8 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-[#850E35]"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-[#850E35]"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
          />
        </div>

        <div>
          <label
            htmlFor="store"
            className="mb-2 block text-sm font-semibold text-[#850E35]"
          >
            Shopify store URL
          </label>
          <input
            id="store"
            name="store"
            type="text"
            placeholder="your-store.myshopify.com"
            className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
          />
        </div>

        <div>
          <label
            htmlFor="topic"
            className="mb-2 block text-sm font-semibold text-[#850E35]"
          >
            Topic
          </label>
          <select
            id="topic"
            name="topic"
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
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-[#850E35]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us what you need."
          className="w-full rounded-xl border border-[#FFC4C4] bg-white px-4 py-3 outline-none transition focus:border-[#850E35]"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          Wire this form to your backend before treating it as a live contact
          channel.
        </p>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-[#850E35] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Send message
        </button>
      </div>
    </form>
  );
}