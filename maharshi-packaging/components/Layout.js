import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 glass flex items-center justify-between px-8 py-4 shadow-glass backdrop-blur-md">
        <div className="text-2xl font-bold text-royal">Maharshi Packaging</div>
        <div className="flex gap-6 items-center">
          <Link href="/"><span className="hover:text-green transition-colors">Home</span></Link>
          <Link href="/about"><span className="hover:text-green transition-colors">About</span></Link>
          <Link href="/products"><span className="hover:text-green transition-colors">Products</span></Link>
          <Link href="/industries"><span className="hover:text-green transition-colors">Industries</span></Link>
          <Link href="/sustainability"><span className="hover:text-green transition-colors">Sustainability</span></Link>
          <Link href="/get-a-quote"><span className="hover:text-green transition-colors">Get a Quote</span></Link>
          <Link href="/contact"><span className="hover:text-green transition-colors">Contact</span></Link>
        </div>
        {/* Dark Mode Toggle Placeholder */}
        <div className="ml-6 cursor-pointer w-10 h-10 flex items-center justify-center bg-glass glass rounded-full">
          <span className="text-xl text-royal">🌓</span>
        </div>
      </nav>
      <main className="pt-24">{children}</main>
    </div>
  );
} 