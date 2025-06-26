import React, { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../constants';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    if (FORMSPREE_ENDPOINT === "YOUR_FORMSPREE_ENDPOINT_HERE") {
        setStatus("Erreur: L'endpoint Formspree n'est pas configuré.");
        alert("Le formulaire de contact n'est pas encore configuré. Veuillez contacter l'administrateur du site.");
        return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setStatus('Une erreur s\'est produite lors de l\'envoi du message.');
        }
      }
    } catch (error) {
      setStatus('Une erreur s\'est produite lors de l\'envoi du message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Nom complet
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Adresse e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Sujet
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-colors"
        >
          Envoyer le message
        </button>
      </div>
      {status && <p className={`mt-2 text-sm ${status.includes('Erreur') || status.includes('Une erreur') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{status}</p>}
       {FORMSPREE_ENDPOINT === "YOUR_FORMSPREE_ENDPOINT_HERE" && (
        <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
          Note: Le formulaire de contact n'est pas actif. L'administrateur doit configurer l'endpoint Formspree.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
