export const metadata = {
  title: "GlobalScholarHub",
  description: "Find scholarships worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
