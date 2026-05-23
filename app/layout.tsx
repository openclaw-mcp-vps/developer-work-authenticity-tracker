import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevTruth — Anonymous Developer Productivity Tracker",
  description: "Anonymously log actual vs reported work hours. See honest industry benchmarks. Stop pretending."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a100300a-c971-432e-b307-cd0084992528"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
