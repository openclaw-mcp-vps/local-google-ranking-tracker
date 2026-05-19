import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Google Ranking Tracker — Track Rankings by Zip Code",
  description: "Monitor your local business Google rankings across different zip codes. Get ranking reports, trend charts, and scheduled checks for $12/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="36555ef8-7744-4e2c-80cd-43b850b82bb7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
