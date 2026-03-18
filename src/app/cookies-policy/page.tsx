import React from "react";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export default function CookiesPolicyPage() {

  return (
    <main className="px-[20px] md:px-[60px]">
      <ContactHero
        headline={
          <h1 className="font-extralight text-white font-lexend leading-tight">
            <span className="font-medium">Cookies Policy</span>
          </h1>
        }
        description="How we use cookies and similar technologies on our website."
        showSearch={false}
      />

      <div className="mb-[70px] max-w-[1840px] mx-auto font-outfit">

        <div className="bg-[#F7FAF8] rounded-[20px] border border-[#053F31]/20 p-[30px] font-medium text-[20px] leading-[150%] text-[#000000]">

          <p className="mb-6">Last updated: April 29, 2025</p>

          <p className="mb-6">
            In compliance with Article 22.2 of Law 34/2002 of July 11, on Information
            Society Services and Electronic Commerce (LSSI), and Regulation (EU)
            2016/679 (GDPR), we inform you that the website www.biomket.com
            (hereinafter, the “Portal”) uses its own and third-party cookies to
            enhance your user experience, analyze browsing traffic, and
            personalize displayed content.
          </p>

          <p className="mb-3">1. What Are Cookies?</p>

          <p className="mb-6">
            A cookie is a small file that is downloaded to your computer,
            smartphone, or tablet when you access certain websites. Cookies
            allow a website to store and retrieve information about a user’s
            device or browsing habits.
          </p>

          <p className="mb-4">
            2. Types of Cookies Used on Biomket
          </p>

          <p className="mb-4">We use the following types of cookies on our site:</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              Technical or necessary cookies:<br />
              Allow users to browse the Portal and use its various features
              such as controlling traffic, accessing restricted areas, making
              purchases, or filling out forms.
            </li>

            <li>
              Personalization cookies:<br />
              Allow the service to remember preferences such as language,
              browser type, or regional settings.
            </li>

            <li>
              Analytics cookies (Google Analytics or others):<br />
              Allow us to quantify the number of users and perform statistical
              measurement on how users interact with our services.
            </li>

            <li>
              Behavioral advertising cookies:<br />
              Collect information about browsing habits to show personalized
              ads managed by third parties (e.g., Google Ads or Meta Pixel).
            </li>
          </ul>

          <p className="mb-4">
            3. Third-Party Cookies
          </p>

          <p className="mb-3">
            Some cookies may be set by third-party services external to BIOMKET,
            such as:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Google Analytics (web traffic measurement)</li>
            <li>Facebook / Meta Pixel (advertising segmentation)</li>
            <li>Lemonway or payment platforms</li>
            <li>Social media plugins (LinkedIn, Twitter, Instagram)</li>
          </ul>

          <p className="mb-4">
            4. Cookie Management
          </p>

          <p className="mb-4">
            Upon your first visit to the Portal, a cookie configuration banner
            will be displayed where you can:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Accept all cookies</li>
            <li>Reject all except essential ones</li>
            <li>Configure preferences by category</li>
          </ul>

          <p className="mb-4">
            You can also change your settings anytime from the footer (“Cookie
            Settings”) or from your browser:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Chrome</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
          </ul>

          <p className="mb-6">
            Please note that blocking certain cookies may affect the proper
            functioning of the website.
          </p>

          <p className="mb-4">
            5. Data Retention
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Session cookies: deleted when the browser is closed.</li>
            <li>
              Persistent cookies: stored for a defined period ranging from a few
              minutes to several months.
            </li>
          </ul>

          <p className="mb-4">
            6. Changes to the Cookie Policy
          </p>

          <p className="mb-6">
            BIOMKET reserves the right to modify this Cookie Policy to adapt it
            to future legal or technical changes. We recommend reviewing it
            periodically.
          </p>

          <p className="mb-4">
            Below is a list of cookies currently used on www.biomket.com:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#CFCFCF] text-[16px]">
              <thead className="bg-[#E8E8E8]">
                <tr>
                  <th className="border px-3 py-2 text-left">Cookie Name</th>
                  <th className="border px-3 py-2 text-left">Duration</th>
                  <th className="border px-3 py-2 text-left">Purpose</th>
                  <th className="border px-3 py-2 text-left">Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">_ga</td>
                  <td className="border px-3 py-2">2 years</td>
                  <td className="border px-3 py-2">
                    Analytics: Distinguish users to collect site visit information
                  </td>
                  <td className="border px-3 py-2">Google Analytics</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">_gid</td>
                  <td className="border px-3 py-2">24 hours</td>
                  <td className="border px-3 py-2">
                    Analytics: Distinguish users to collect site visit information
                  </td>
                  <td className="border px-3 py-2">Google Analytics</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">_gat</td>
                  <td className="border px-3 py-2">1 minute</td>
                  <td className="border px-3 py-2">
                    Analytics: Limit request rate
                  </td>
                  <td className="border px-3 py-2">Google Analytics</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">PHPSESSID</td>
                  <td className="border px-3 py-2">Session</td>
                  <td className="border px-3 py-2">
                    Technical: Maintain user session during navigation
                  </td>
                  <td className="border px-3 py-2">Own</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}