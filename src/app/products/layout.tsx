import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - IntelliTense',
  description: 'Enterprise solutions for workforce and business management',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 