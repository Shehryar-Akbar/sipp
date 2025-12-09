import { generateMetadata } from "../seo/seo";
import { seoConfig } from "../seo/seoConfig";

export const metadata = generateMetadata(seoConfig.privacy)

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg! sm:text-xl! leading-none! text-gray-700 mb-2">
          Strength Innovation Printing Press
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Effective Date: December 4, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            Welcome to Strength Innovation Printing Press ("SIPP," "we," "us,"
            or "our"). We are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website (www.SIPP.af), use our
            services, or interact with us.
          </p>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            By using our services or providing us with your information, you
            agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Information We Collect
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            We may collect the following types of information:
          </p>

          <div className="mb-6">
            <h3 className="text-lg! sm:text-xl! font-semibold text-gray-900 mb-3">
              2.1 Personal Information
            </h3>
            <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4">
              <li>
                <span className="font-medium">Contact Details:</span> Name,
                email address, phone number, postal address
              </li>
              <li>
                <span className="font-medium">Business Information:</span>{" "}
                Company name, job title, business address
              </li>
              <li>
                <span className="font-medium">Order Details:</span> Printing
                specifications, quantities, delivery preferences
              </li>
              <li>
                <span className="font-medium">Payment Information:</span>{" "}
                Billing address and payment method details (processed securely
                through third-party payment processors)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg! sm:text-xl! font-semibold text-gray-900 mb-3">
              2.2 Technical Information
            </h3>
            <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4">
              <li>
                <span className="font-medium">Website Usage Data:</span> IP
                address, browser type, device information, pages visited, time
                spent on pages
              </li>
              <li>
                <span className="font-medium">
                  Cookies and Tracking Technologies:
                </span>{" "}
                We may use cookies to enhance your experience on our website
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg! sm:text-xl! font-semibold text-gray-900 mb-3">
              2.3 Communications
            </h3>
            <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4">
              <li>
                Email correspondence, phone conversations, and other
                communications with our team
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4">
            <li>
              <span className="font-medium">Service Delivery:</span> Processing
              and fulfilling your printing orders
            </li>
            <li>
              <span className="font-medium">Communication:</span> Responding to
              inquiries, providing customer support, and sending order updates
            </li>
            <li>
              <span className="font-medium">Business Operations:</span> Managing
              accounts, processing payments, and maintaining records
            </li>
            <li>
              <span className="font-medium">Website Improvement:</span>{" "}
              Analyzing website usage to enhance user experience
            </li>
            <li>
              <span className="font-medium">Marketing:</span> Sending
              promotional materials about our services (with your consent where
              required)
            </li>
            <li>
              <span className="font-medium">Legal Compliance:</span> Meeting
              legal and regulatory obligations
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Information Sharing and Disclosure
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            We do not sell, rent, or trade your personal information. We may
            share your information in the following circumstances:
          </p>

          <div className="mb-6">
            <h3 className="text-lg! sm:text-xl! font-semibold text-gray-900 mb-3">
              4.1 Service Providers
            </h3>
            <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-3">
              We may share information with trusted third-party vendors who
              assist us with:
            </p>
            <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4">
              <li>Payment processing</li>
              <li>Delivery and logistics</li>
              <li>Website hosting and maintenance</li>
              <li>Marketing and analytics</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg! sm:text-xl! font-semibold text-gray-900 mb-3">
              4.2 Legal Requirements
            </h3>
            <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
              We may disclose information when required by law, court order, or
              government request, or to protect our rights, property, or safety.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg! sm:text-xl! font-semibold text-gray-900 mb-3">
              4.3 Business Transfers
            </h3>
            <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred to the acquiring entity.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Data Security
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction. These measures include:
          </p>
          <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4 mb-4">
            <li>Secure storage of physical and digital records</li>
            <li>
              Access controls limiting information access to authorized
              personnel only
            </li>
            <li>Regular security assessments and updates</li>
            <li>Secure communication channels for sensitive information</li>
          </ul>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            However, no method of transmission over the internet or electronic
            storage is 100% secure. While we strive to protect your information,
            we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Data Retention
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required by law. Order records and
            business communications are typically retained for accounting and
            legal compliance purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Your Rights
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="space-y-2 text-lg! sm:text-xl! text-gray-700 ml-4 mb-4">
            <li>
              <span className="font-medium">Access:</span> Request copies of
              your personal information
            </li>
            <li>
              <span className="font-medium">Correction:</span> Request
              correction of inaccurate or incomplete information
            </li>
            <li>
              <span className="font-medium">Deletion:</span> Request deletion of
              your information (subject to legal retention requirements)
            </li>
            <li>
              <span className="font-medium">Objection:</span> Object to certain
              processing of your information
            </li>
            <li>
              <span className="font-medium">Withdrawal of Consent:</span>{" "}
              Withdraw consent for marketing communications at any time
            </li>
          </ul>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            To exercise these rights, please contact us using the information
            provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Cookies and Tracking Technologies
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            Our website may use cookies and similar technologies to improve
            functionality and analyze usage. You can control cookie settings
            through your browser preferences. Disabling cookies may affect
            website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Third-Party Links
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to review their privacy policies before providing any
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Children's Privacy
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. If we
            become aware that we have collected information from a child, we
            will take steps to delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. International Data Transfers
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            Your information is primarily processed and stored in Afghanistan.
            If information is transferred internationally, we will ensure
            appropriate safeguards are in place to protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Changes to This Privacy Policy
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. The updated policy
            will be posted on our website with a revised effective date. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            13. Contact Us
          </h2>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none! mb-4">
            If you have questions, concerns, or requests regarding this Privacy
            Policy or your personal information, please contact us:
          </p>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-lg! sm:text-xl! text-gray-700">
            <p className="font-semibold mb-2">
              Strength Innovation Printing Press
            </p>
            <p className="mb-1">
              <span className="font-medium">Address:</span> SIPP, Shakardara
              District, Near Sufyan Bridge, Kabul, Afghanistan
            </p>
            <p className="mb-1">
              <span className="font-medium">Phone:</span> +93 70 214 63 10
            </p>
            <p className="mb-1">
              <span className="font-medium">Email:</span> write@sipp.af
            </p>
            <p>
              <span className="font-medium">Website:</span> www.SIPP.af
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600 mb-2">
            Last Updated: December 4, 2025
          </p>
          <p className="text-lg! sm:text-xl! text-gray-700 leading-none!">
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
