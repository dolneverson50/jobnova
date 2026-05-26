import "./globals.css";

export const metadata = {
  title: "JobNova",
  description: "Booking platform",
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