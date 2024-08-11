import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "js-tech1",
  description:
    "We craft innovative, reliable digital solutions for your business at js-tech1",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="We’re here to assist you with any inquiries or support you need. Contact us to discuss how js-tech1 can help elevate your digital presence and drive your business forward."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
