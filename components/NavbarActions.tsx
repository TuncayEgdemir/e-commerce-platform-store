"use client"
import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import { useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);


    if(!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={()=>router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag size={20} color="white" />
            <span className="text-white font-medium text-sm ml-2">
                {cart.items.length}
            </span>
      </Button>
    </div>
  )
}

export default NavbarActions