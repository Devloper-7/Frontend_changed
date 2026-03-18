import Footer from "@/components/Footer";
import ResetPasswordPage from "@/components/ResetPasswordPage";

export function generateStaticParams() {
  return [{ token: "default" }];
}

export default function ResetPassword() {
  return (
    <>
    <ResetPasswordPage />
    <Footer />
    </>
);
}
