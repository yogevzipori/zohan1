import Image from "next/image"

const navigation = [
  { name: 'Home', href: '/' },

  // { name: 'Recommendations', href: '/purr-and-mutt' },
  // { name: 'Blog', href: '/feed-my-dog' },
  { name: 'About', href: '/about' },
]

export default function Mainnavi() {
  return (
    <div className="bg-white">
    <header className="bg-bbu mt-3 mb-1 ml-2 mr-2 rounded-lg">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-bba  lg:border-none ">
            {/* <a href="/">
              <Image
               src= {HarleyLogo}
               alt="Logo"
               width={155}
              height={100}
                />
            </a> */}
          {/* <div className="flex items-center">
            <a href="/">
              <Image
               src= {PetLifeLogos}
               alt="PetLife101 Logo"
               width={220}
              height={100}
                />
            </a> */}
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-bw hover:text-zinc-300">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10  space-x-4">
          
          </div>
   
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-bw hover:text-zinc-300">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
    </div>
  )
}
