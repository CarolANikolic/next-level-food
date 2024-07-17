import MainHeader from "@/components/header/main-header";
import "./globals.css"

export const metadata = {
  description: "Next level food application for food lovers",
  keywords: "food, community, great food, next level food",
  viewport: "width=device-width, initial-scale=1.0",
  title: "Next Level Food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
