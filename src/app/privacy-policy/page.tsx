import React from "react";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {

  return (
    <main className="px-[20px] md:px-[60px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            <span className="font-medium">Privacy Policy</span>
          </h1>
        }
        description="Information on how BIOMKET processes and protects personal data."
        showSearch={false}
      />

      <div className="mb-[70px] max-w-[1840px] mx-auto font-outfit">

        <div className="bg-[#F7FAF8] rounded-[20px] border border-[#053F31]/20 p-[30px] font-medium text-[20px] leading-[150%] text-[#000000]">

          <p className="mb-6">Last updated: April 29, 2025</p>

          <p className="mb-4">1. Data Controller Identification</p>
          <p className="mb-6">
            In compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 (GDPR),
            and Spanish Organic Law 3/2018 on Personal Data Protection and Digital Rights,
            CAINMANI RESOURCES S.L., the owner of the BIOMKET platform, informs users about its data protection policy.
          </p>

          <p className="mb-4">2. Purposes Of Data Processing</p>
          <p className="mb-6">
            BIOMKET processes users’ personal data to manage their registration and maintenance on the platform,
            enable secure transactions between parties, facilitate dispute resolution, handle claims,
            issue invoices, process payments through authorized third parties, and perform internal
            analysis to improve services. It may also send commercial communications with user consent
            and comply with legal obligations including anti-money laundering and fraud prevention regulations.
          </p>

          <p className="mb-4">3. Legal Basis For Processing</p>
          <p className="mb-6">
            BIOMKET processes personal data based on various legal grounds depending on the purpose:
            contract execution (when users register or use the platform), explicit consent
            (e.g. for marketing communications), legal obligations (e.g. invoicing or anti-money laundering laws),
            and the company’s legitimate interest in ensuring proper service operation and security.
          </p>

          <p className="mb-4">4. Categories Of Data Processed</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Identification data: name, surname, address, phone, email, ID/passport.</li>
            <li>Financial data: bank account, payment method.</li>
            <li>Commercial data: transaction-related data.</li>
            <li>Technical data: IP, cookies (see Cookie Policy).</li>
            <li>Legal data if acting on behalf of a company.</li>
          </ul>

          <p className="mb-4">5. Data Controller Commitments</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Process data only for the stated purposes.</li>
            <li>Not share data with third parties except when legally required or necessary for service delivery.</li>
            <li>Not subcontract data processing without prior notice, except for authorized providers.</li>
            <li>Ensure data security and confidentiality through technical and organizational measures.</li>
            <li>Maintain activity logs and perform impact assessments if required.</li>
            <li>Report security breaches within legal deadlines (maximum 72 hours).</li>
          </ul>

          <p className="mb-4">6. Recipients And Subprocessors</p>

          <p className="mb-4">We may share data with:</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Public administrations, courts or authorities to meet legal obligations.</li>
            <li>
              Data processors such as:
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Payment service providers</li>
                <li>Transport and logistics companies</li>
                <li>Goods verifiers</li>
                <li>Technology providers (hosting, CRM software, etc.)</li>
              </ul>
            </li>
          </ul>

          <p className="mb-6">
            BIOMKET ensures all processors offer GDPR-compliant guarantees and
            has signed data processing agreements with them in accordance with Article 28 of the GDPR.
          </p>

          <p className="mb-4">7. International Transfers</p>

          <p className="mb-6">
            If any international data transfers occur, BIOMKET will ensure they
            are carried out in accordance with the European Commission’s Standard
            Contractual Clauses or other adequate GDPR-compliant safeguards.
          </p>

          <p className="mb-4">8. Security Measures</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Encryption and pseudonymization of sensitive data.</li>
            <li>Access control and secure authentication.</li>
            <li>Backup and recovery protocols.</li>
            <li>Ongoing monitoring of security incidents.</li>
            <li>Staff training and confidentiality commitments.</li>
          </ul>

          <p className="mb-4">9. Data Retention</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Data will be retained during the contractual relationship and for legally required periods.</li>
            <li>Up to 10 years if required under anti-money laundering laws.</li>
            <li>Afterwards, data will be blocked until legal liability periods expire.</li>
          </ul>

          <p className="mb-4">10. User Rights</p>

          <p className="mb-4">You may exercise the following rights:</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Access your data.</li>
            <li>Request rectification of inaccurate data.</li>
            <li>Request deletion when data is no longer needed.</li>
            <li>Limit processing.</li>
            <li>Object to processing for legitimate reasons.</li>
            <li>Request portability to another controller.</li>
            <li>Withdraw consent at any time.</li>
          </ul>

          <p className="mb-6">
            To exercise your rights, email us at: <strong>legal@biomket.com</strong>.
            You may also file a complaint with the Spanish Data Protection Agency (AEPD).
          </p>

          <p className="mb-4">11. Cookies And Browsing</p>

          <p className="mb-6">
            BIOMKET uses cookies to ensure proper website functionality and for statistical
            and customization purposes based on user consent. For full details please refer
            to our Cookie Policy.
          </p>

          <p className="mb-4">12. Changes To This Policy</p>

          <p>
            BIOMKET reserves the right to modify this Privacy Policy at any time to reflect
            regulatory or functional updates. Any substantial changes will be communicated to
            users through the platform.
          </p>

        </div>
      </div>

      <Footer />
    </main>
  );
}