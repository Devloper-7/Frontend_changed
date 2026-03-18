import BackgroundGradients from "@/components/BackgroundGradients";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import LoginComponent from "@/components/LoginComponent";

const LOGIN_ZIGZAG_COUNT = 2;

export default function LoginPage() {
  return (
    <>
      <main className="px-[20px] md:px-[40px]">
        <ContactHero headline={
          <h1 className="font-lexend font-extralight text-white ">
            Don't have an <span className="font-medium">account yet?</span>
          </h1>
        }
          description="Sign up and access the marketplace for organic waste and by-products."
          showSearch={false} />
        <BackgroundGradients count={LOGIN_ZIGZAG_COUNT} />
        <LoginComponent />
        <Footer showCallToAction={false} />
      </main>
    </>
  );
}
