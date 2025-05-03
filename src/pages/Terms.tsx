import React from 'react';

const Terms = () => (
  <div className="container py-16 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">By joining our waitlist, you agree to the following terms:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>You are providing your information voluntarily to receive updates about our service.</li>
      <li>Joining the waitlist does not guarantee access to the final product or any specific features.</li>
      <li>We may contact you with updates, surveys, or early access opportunities.</li>
      <li>You can request removal from the waitlist at any time by contacting us at <a href="mailto:hello@padeleq.com" className="text-blue-600 underline">hello@padeleq.com</a>.</li>
      <li>We reserve the right to update these terms at any time. Significant changes will be communicated to you via email.</li>
    </ul>
    <p className="mt-8">For any questions, contact us at <a href="mailto:hello@padeleq.com" className="text-blue-600 underline">hello@padeleq.com</a>.</p>
  </div>
);

export default Terms; 