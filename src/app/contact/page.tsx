'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formState.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formState.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formState.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formState.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-[var(--color-background-alt)] to-[var(--color-background)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-lg text-[var(--color-foreground-muted)]">
                            Have a project in mind or just want to say hello? I&apos;d love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section pt-8">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Contact Cards */}
                            <div className="card">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Email</h3>
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Phone</h3>
                                        <a
                                            href={`tel:${personalInfo.phone}`}
                                            className="text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                                        >
                                            {personalInfo.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Location</h3>
                                        <p className="text-[var(--color-foreground-muted)]">
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="card">
                                <h3 className="font-semibold text-[var(--color-foreground)] mb-4">Connect with me</h3>
                                <div className="flex gap-3">
                                    <a
                                        href={personalInfo.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)] transition-all"
                                        aria-label="GitHub"
                                    >
                                        <Github size={22} />
                                    </a>
                                    <a
                                        href={personalInfo.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={22} />
                                    </a>
                                    <a
                                        href={personalInfo.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                                        aria-label="Twitter"
                                    >
                                        <Twitter size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card">
                                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                                {isSubmitted && (
                                    <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <p className="text-green-500 font-medium">
                                            Thank you! Your message has been sent successfully.
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg bg-[var(--color-background-alt)] border ${errors.name ? 'border-red-500' : 'border-[var(--color-border)]'
                                                    } text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg bg-[var(--color-background-alt)] border ${errors.email ? 'border-red-500' : 'border-[var(--color-border)]'
                                                    } text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-[var(--color-background-alt)] border ${errors.subject ? 'border-red-500' : 'border-[var(--color-border)]'
                                                } text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                                            placeholder="Project Inquiry"
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className={`w-full px-4 py-3 rounded-lg bg-[var(--color-background-alt)] border ${errors.message ? 'border-red-500' : 'border-[var(--color-border)]'
                                                } text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none`}
                                            placeholder="Tell me about your project..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin">⏳</span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
