import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import DashboardLayout from './components/DashboardLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <DashboardLayout>{children}</DashboardLayout>
          
        </ChakraProvider>
      </body>
    </html>
  );
}