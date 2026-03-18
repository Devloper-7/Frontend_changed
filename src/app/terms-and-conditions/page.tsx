import React from "react";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <main className="px-[20px] md:px-[40px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            <span className="font-medium">Terms and Conditions</span>
          </h1>
        }
        description="Terms of use for the Biomket platform and services."
        showSearch={false}
      />

      {/* Content */}
      <div className="mb-[70px] sm:mb-[130px] max-w-[1840px] mx-auto font-outfit">

        <div className="bg-[#F7FAF8] rounded-[20px] border border-[#053F31]/20 p-[30px] font-medium text-[20px] leading-[150%] text-[#000000]">

          <p className="mb-6">Last updated: June 24, 2025</p>

          <p className="mb-4">
            1. General Information<br />
            BIOMKET is a platform operated by CAINMANI RESOURCES S.L., CIF
            B72990377, with registered office at Calle San Telmo, 67, 28016,
            Madrid, registered in the corresponding Mercantile Registry. These
            Terms and Conditions govern the use of the website
            www.biomket.com (the “Platform”) and the contractual relationship
            between BIOMKET and registered users (hereinafter, “Users”)
            involved in transactions for the purchase of non-hazardous organic
            waste.
          </p>

          <p className="mb-4">
            2. Nature of the Service<br />
            BIOMKET acts as a digital intermediary and temporary custodian of
            funds. The purchase contract is entered into directly between the
            buyer and the seller. BIOMKET does not acquire, store, transport,
            or take ownership of the waste listed on the Platform.
          </p>

          <p className="mb-4">
            3. User Registration<br />
            Full access to services requires prior registration. Users must
            provide truthful and up-to-date information. They may register as
            individuals or legal entities and are responsible for the use and
            custody of their credentials.
          </p>

          <p className="mb-4">
            4. Permitted Use and Content Publication<br />
            Users agree to use the Platform in accordance with applicable
            regulations. It is prohibited to publish false information, illegal
            products, or to contact other users outside the Platform to avoid
            commissions. BIOMKET may suspend accounts or remove content in the
            event of non-compliance.
          </p>

          <p className="mb-4">
            5. Transaction Process and Fund Custody<br />
            BIOMKET implements a temporary fund custody system to protect both
            parties in the transaction. The process is structured as follows:
          </p>

          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>The buyer makes payment through the Platform.</li>
            <li>BIOMKET retains the amount without taking ownership of the funds.</li>
            <li>The buyer has 48 hours after delivery to confirm compliance.</li>
            <li>After that period without claims, payment is released to the seller.</li>
            <li>In case of a claim, the mechanism in clause 6 is activated.</li>
          </ul>

          <p className="mb-4">
            BIOMKET does not guarantee the quality of the waste or the
            fulfilment of the contract between the parties.
          </p>

          <p className="mb-4">
            6. Claims Management and Incident Resolution<br />
            Incidents will be resolved based on a technical,
            non-interpretative protocol.
          </p>

          <p className="mb-2">
            Notification: The buyer must report
            non-compliance within 48 hours after delivery.
          </p>

          <p className="mb-2">
            Evidence: Visual proof, delivery notes,
            and supporting documentation may be required.
          </p>

          <p className="mb-2">
            Dialogue phase: BIOMKET will enable a private
            channel for 72 hours.
          </p>

          <p className="mb-2">Automatic result:</p>

          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>If the seller does not respond: BIOMKET may cancel the payment.</li>
            <li>If the buyer fails to provide evidence: the payment will be released to the seller.</li>
            <li>If there is evidence and no resolution, BIOMKET will refund the buyer.</li>
          </ul>

          <p className="mb-4">
            BIOMKET does not act as a judge, arbitrator, or party. Its role is
            limited to executing objective steps.
          </p>

          <p className="mb-4">
            7. Third-Party Managed Logistics<br />
            BIOMKET may connect users with logistics providers. It does not
            intervene in or guarantee transportation. Any relationship is
            established between the User and the operator, including costs,
            insurance, and legal compliance. BIOMKET is not responsible for
            losses, damages, or failures by the carrier.
          </p>

          <p className="mb-4">
            8. Fees and Commissions<br />
            BIOMKET will apply a commission on each successfully completed
            transaction. Fees will be communicated in advance. Continued use
            implies acceptance.
          </p>

          <p className="mb-4">
            9. Invoicing<br />
            The seller is responsible for invoicing the waste. BIOMKET will
            issue an invoice only for its services as a digital intermediary.
          </p>

          <p className="mb-4">
            10. Intellectual Property Rights<br />
            All content on the Platform, including software, logos, texts, and
            design, is the property of BIOMKET or its licensors. Unauthorized
            use is prohibited.
          </p>

          <p className="mb-4">
            11. Suspension and Account Termination<br />
            BIOMKET may suspend or cancel access for fraud, commission evasion,
            legal violations, or misuse. The User may request deactivation at
            any time.
          </p>

          <p className="mb-4">
            12. Limitation of Liability<br />
            BIOMKET will not be liable for:
          </p>

          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>The quality, legality, or compliance of the waste.</li>
            <li>Failures in payment or contract execution between Users.</li>
            <li>Economic losses or business interruptions.</li>
            <li>Technical failures, cyberattacks, or third-party errors.</li>
          </ul>

          <p className="mb-4">
            BIOMKET’s maximum liability, for any cause, is limited to the
            amount of its commission on the affected transaction.
          </p>

          <p className="mb-4">
            13. Legal Compliance on Waste Management<br />
            Users agree to comply with Law 7/2022 and Royal Decree 553/2020.
            This includes LER coding, transfer documentation (Contract, Prior
            Notification, and Identification Document), and NIMA licenses.
            BIOMKET does not verify this information or assume responsibility
            for its validity.
          </p>

          <p className="mb-4">
            14. Modifications<br />
            BIOMKET may update these Terms. Changes will be communicated
            through the Platform and will be deemed accepted with continued
            use.
          </p>

          <p>
            15. Governing Law and Jurisdiction<br />
            These Terms are governed by Spanish law. Any dispute will be
            submitted to the Courts of Madrid, unless the parties agree to
            institutional arbitration.
          </p>

        </div>
      </div>

      <Footer />
    </main>
  );
}