import Link from "next/link"

const Navbar = () => {
  return (

    <div className="flex justify-between items-center py-4 px-8 border-b border-orange-500">
        <div className="font-bold text-2xl  ">Cevora.</div>
        <div className="flex gap-7 ">
            <Link href="" className="hover:text-orange-500 transition-all">Home</Link>
            <Link href="" className="hover:text-orange-500 transition-all">About Us</Link>
            <Link href="" className="hover:text-orange-500 transition-all">Our Team</Link>
            <Link href="" className="hover:text-orange-500 transition-all">What We Offer</Link>
        </div>
        <div className="flex gap-5">
            <button className="hover:text-orange-500 transition-all font-semibold">Log In</button>
            <button className="px-6 py-2 bg-orange-500 rounded-2xl font-semibold">Sign Up</button>
        </div>
    </div>
  
  )
}

export default Navbar