import React from "react";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export default function LegalNoticePage() {
  return (
    <main className="px-[20px] md:px-[40px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            <span className="font-medium">Legal Notice</span>
          </h1>
        }
        description="Information in accordance with applicable law regarding the operator of this website."
        showSearch={false}
      />

      <div className="mb-[70px] sm:mb-[130px] max-w-[1840px] mx-auto font-outfit">
        <div className="bg-[#F7FAF8] rounded-[20px] border border-[#053F31]/20 p-[30px] text-[20px] leading-[150%] text-[#000000]">

          {/* 1 */}
          <p className="font-semibold mb-3 text-[#2A4F45]">
            1. Website Owner:
          </p>

          <p className="mb-6">
            CAINMANI RESOURCES S.L. (hereinafter, "BIOMKET"), with registered
            address at Calle San Telmo, 67, 28016, Madrid, Madrid and tax ID
            B72990377.
          </p>

          {/* 2 */}
          <p className="font-semibold mb-3 text-[#2A4F45]">
            2. Purpose of the Website:
          </p>

          <p className="mb-6">
            BIOMKET has developed an online intermediary platform, available at
            www.biomket.com (hereinafter, "the Portal"), aimed at facilitating
            the connection between generators, managers, and buyers of organic
            waste. BIOMKET acts solely as an intermediary and does not at any
            time acquire ownership of the waste or materials offered on the
            platform. Use of the Portal is subject to these General Conditions,
            which govern all services and content offered by BIOMKET to
            registered users (hereinafter, "Users").
          </p>

          {/* 3 */}
          <p className="font-semibold mb-3 text-[#2A4F45]">
            3. Terms of Use:
          </p>

          <p className="mb-6">
            By accessing and using the Portal, the User fully and unreservedly
            accepts these General Conditions and agrees to use the Portal, its
            services, and the information contained therein diligently and
            under their sole responsibility. BIOMKET reserves the right to
            modify these Conditions at any time, and it is the User's
            responsibility to review them periodically before each use.
          </p>

          {/* 4 */}
          <p className="font-semibold mb-3 text-[#2A4F45]">
            4. Personal Data Protection:
          </p>

          <p className="mb-4">
            In accordance with Regulation (EU) 2016/679 of the European
            Parliament (GDPR) and other applicable data protection regulations,
            BIOMKET informs Users that the personal data collected will be
            included in a file owned by the company for the purpose of properly
            managing the commercial relationship, and subject to prior express
            consent, for sending information about news, products, and services
            from BIOMKET. Users may exercise their rights of access,
            rectification, erasure, restriction, objection, and data
            portability at any time by writing to CAINMANI RESOURCES S.L., Calle
            San Telmo, 67, 28016, Madrid, Madrid or by sending an email to
            legal@biomket.com.
          </p>

          <p className="mb-4">
            Additionally, in compliance with the Law on Information Society
            Services and Electronic Commerce (Law 34/2002 of July 11), the
            ownership of the domain www.biomket.com is disclosed as follows:
          </p>

          <p className="mb-6">
            <strong>Domain Owner:</strong>
            <br />
            CAINMANI RESOURCES S.L.
            <br />
            Tax ID: B72990377
            <br />
            Address: CALLE SAN TELMO, 67, 28016, MADRID, MADRID
            <br />
            Email: legal@biomket.com
          </p>

          {/* 5 */}
          <p className="font-semibold mb-3 text-[#2A4F45]">
            5. Intellectual and Industrial Property
          </p>

          <p className="mb-6">
            All content on the website www.biomket.com, including but not
            limited to texts, images, graphic designs, source code, logos,
            trademarks, trade names, databases, and software, is owned by
            CAINMANI RESOURCES S.L. or used under license or express
            authorization from the legitimate owners, and is protected by
            national and international intellectual and industrial property
            laws. Access to the Portal does not grant users any ownership
            rights over its content. The reproduction, distribution, public
            communication, transformation, or any other form of exploitation of
            the contents of this website without the express written
            authorization of CAINMANI RESOURCES S.L. or the corresponding
            rights holders is strictly prohibited. Unauthorized use of the
            contents and any harm caused to intellectual or industrial property
            rights may lead to appropriate legal actions.
          </p>

          {/* 6 */}
          <p className="font-semibold mb-3 text-[#2A4F45]">
            6. Applicable Law and Jurisdiction
          </p>

          <p>
            This Legal Notice shall be governed by and interpreted in
            accordance with Spanish law. Any disputes that may arise from
            access to or use of the website shall be submitted to the Courts
            and Tribunals of the city of Madrid, unless consumer protection
            regulations establish a different mandatory jurisdiction.
          </p>

        </div>
      </div>

      <Footer />
    </main>
  );
}