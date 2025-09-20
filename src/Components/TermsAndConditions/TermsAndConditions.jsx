// components/TermsAndConditions.jsx
import React from 'react'

const TermsAndConditions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Please read these Terms and Conditions carefully before using our services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using the services provided by TechNova Solutions ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                TechNova Solutions provides IT consulting, software development, cloud services, cybersecurity solutions, and other technology-related services. All services are subject to these Terms and any additional agreements we may establish for specific services.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li className="mb-2">Provide accurate and complete information when registering for our services</li>
                <li className="mb-2">Maintain the confidentiality of your account credentials</li>
                <li className="mb-2">Notify us immediately of any unauthorized use of your account</li>
                <li className="mb-2">Use our services in compliance with all applicable laws and regulations</li>
                <li>Not engage in any activity that disrupts or interferes with our services</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality available through our services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of TechNova Solutions or our licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                For services that require payment, you agree to pay all applicable fees as described in the specific service agreement. Payments are due as specified in the invoice. Late payments may be subject to interest charges of 1.5% per month or the maximum allowed by law.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain the confidentiality of any proprietary information received from the other party during the term of these Terms and for a period of three years after termination. This obligation does not apply to information that was known prior to disclosure, becomes publicly available through no fault of the receiving party, or is rightfully obtained from a third party.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, TechNova Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li className="mb-2">Your access to or use of or inability to access or use the services</li>
                <li className="mb-2">Any conduct or content of any third party on the services</li>
                <li className="mb-2">Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the services will immediately cease.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in San Francisco County, California.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700">
                TechNova Solutions<br />
                123 Tech Street<br />
                San Francisco, CA 94103<br />
                Email: legal@technova.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsAndConditions