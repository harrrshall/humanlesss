'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, businessName }),
            });

            const result = await response.json();

            if (!response.ok) {
                // Throwing an actual Error object is good practice
                throw new Error(result.message || 'Something went wrong');
            }

            toast.success('Message sent successfully!');
            setName('');
            setEmail('');
            setBusinessName('');
        } catch (error: unknown) { // *** FIXED HERE *** Changed any to unknown
            console.error('Form submission error:', error);
            let errorMessage = 'An unknown error occurred'; // Default/fallback message
            if (error instanceof Error) {
                // Safely access message if it's an Error object
                errorMessage = error.message;
            } else if (typeof error === 'string') {
                 // Handle case where a string might have been thrown
                 errorMessage = error;
            }
            // Add more specific error handling checks if necessary

            toast.error(`Failed to send message: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                    id="businessName"
                    placeholder="Your Company, Inc."
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
}