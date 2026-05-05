import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onboard — Employee Onboarding, Reimagined",
  description:
    "Get new hires up and running in minutes, not weeks. Onboard automates access, tasks, and integrations so your team can focus on what matters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
