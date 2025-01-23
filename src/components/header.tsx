import Link from 'next/link'
import Ticker from "./ticker"

export default function Header() {
  return (
    <div className="bg-[#c1f3ed] rounded-[20px] w-[470px] h-[93px] mx-auto overflow-hidden font-['General_Sans',sans-serif]">
      <div className="h-[50px] px-12 pt-4 pb-[32px]">
        <nav className="flex justify-between w-full">
          <Link href="/" className="text-[#2d2d2d] text-base hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="/careers" className="text-[#2d2d2d] text-base opacity-50 hover:opacity-80 transition-opacity">
            Careers
          </Link>
          <Link href="/patients" className="text-[#2d2d2d] text-base opacity-50 hover:opacity-80 transition-opacity">
            Patients
          </Link>
        </nav>
      </div>
      <div className="h-[1px] bg-[#B1CED1] opacity-60"></div>
      <div className="h-[42px] relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-[#c1f3ed] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#c1f3ed] to-transparent z-10"></div>
        <Ticker text="We are hiring. Join our team at the forefront of brain innovation" />
      </div>
    </div>
  )
}
