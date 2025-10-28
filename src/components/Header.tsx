import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-secondary/10 backdrop-blur-sm absolute top-0 left-0 right-0 z-50 font-mona font-normal text-secondary border-b border-secondary">
      <div className='flex justify-between px-8'>

        <div className='flex divide-x divide-secondary '>
        {/* Hamburger Menu */}
        <div className='flex items-center gap-4 pr-7 py-3'>
          {/* Hamburger Menu Line */}
          <div className='flex flex-col items-end gap-2'>
            <span className='w-6 h-0.5 bg-secondary block rounded-full'></span>
            <span className='w-4 h-0.5 bg-secondary block rounded-full'></span>
          </div>
          {/* End of Hamburger Menu Line */}

          {/* Menu text */}
          <div>
            Menu
          </div>
          {/* End of Menu text */}
        </div>
        {/* End of Hamburger Menu */}

        {/* Logo */}
        <div className='pl-7 py-3 '>
          <img src="/images/logo.png" alt="logo" className='w-auto' />
        </div>
        {/* End of Logo */}
        </div>


        <nav className='flex items-center gap-16 py-3 uppercase'>
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/rooms" className="hover:text-accent transition-colors">Rooms</Link>
            <Link href="/Restaurants" className="hover:text-accent transition-colors">Restaurants</Link>
            <Link href="/Events" className="hover:text-accent transition-colors">Events</Link>
            <button className='bg-secondary/30 text-secondary px-6 py-3 rounded-full uppercase'>Contact Us</button>
        </nav>
      </div>
    </header>
  );
}
