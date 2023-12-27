"use client";

import {  ShoppingCart } from "lucide-react";
import { Sheet,SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { Separator } from "./separator";
import { formatPrice } from "@/lib/utils";

const itemCount = 1;



const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        ></ShoppingCart>
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">

        <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>
           {itemCount> 0 ? (
            <>
            <div className="flex w-full flex-col pr-6">
              {/* {TODO: cart logic} */}
              Cart Items
            </div>
            <div className="space-y-4 pr-6">
              <Separator/>
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(1)}</span>
                </div>
              </div>
            </div>
            </>
           ):(<></>)}
            </SheetTitle>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  );
};

export default Cart;
