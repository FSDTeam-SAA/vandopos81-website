import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

const OrderTrackAndInvoice = () => {
  return (
    <section className="">
      <div className=" container mx-auto my-8 shadow-2xl ">
        <div
          className="flex flex-col items-center text-center gap-3 p-6 rounded-t-xl
  bg-[linear-gradient(90deg,#00C950_0%,#00A63E_100%)] text-white"
        >
          <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            <Check className="text-green-600 w-5 h-5" />
          </div>

          <h5 className="text-lg text-white font-semibold">Order Placed Successfully!</h5>

          <h5 className="text-sm text-white opacity-90">
            Thank you for your purchase. Your order has been confirmed.
          </h5>
        </div>
        <div className="rounded-b-xl p-8">
            <div className="grid grid-cols-2 gap-10 mx-auto my-5">
          <div  className="bg-[#F9FAFB] py-3 px-5">
            <p>Order Number</p>
            <p>ORD-2024-41235</p>
          </div>
          <div className="bg-[#F9FAFB] py-3 px-5">
            <p>Order Date</p>
            <p>Thursday, December 25, 2025</p>
          </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                <Button>
                    Track Order
                </Button>
                <Button className="bg-white text-secondary-foreground border-2 hover:bg-white/80">
                    Download Invoice
                </Button>
                <Button  className="bg-white text-secondary-foreground border-2 hover:bg-white/80">
                    Email Receipt
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTrackAndInvoice;
