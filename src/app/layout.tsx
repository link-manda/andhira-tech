import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "PT Andhira Teknologi Nusantara",
  description:
    "Integrating Technology, Empowering Future - System development, SaaS solutions, IT infrastructure, and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${manrope.variable} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Andhira Teknologi Nusantara",
              url: "https://andhira.co.id",
              logo: "https://andhira.co.id/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-811-2345-678",
                contactType: "customer service",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
