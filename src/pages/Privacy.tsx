import React from 'react';

const Privacy = () => (
  <div className="container py-16 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">We value your privacy. This policy explains how we collect, use, and protect your information when you join our waitlist.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">What We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Your name and email address (when you join the waitlist)</li>
      <li>Your feedback and responses to our questions</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To notify you about our launch and updates</li>
      <li>To understand what features and pricing are most valuable to you</li>
      <li>To improve our service based on your feedback</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Protect Your Data</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>We do not sell or share your information with third parties</li>
      <li>Your data is stored securely and only accessible to our team</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
    <p>If you have any questions about your privacy, please contact us at <a href="mailto:hello@padeleq.com" className="text-blue-600 underline">hello@padeleq.com</a>.</p>
  </div>
);

export default Privacy; 