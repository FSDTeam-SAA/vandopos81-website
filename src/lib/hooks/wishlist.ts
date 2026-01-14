'use client'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WishlistResponse } from "../types/wishlist";
import { addedWishlist, removeFromWishlist, wishlist } from "../api/wishlist";
import { toast } from "sonner";


export function useWishlistData(page: number = 1){
    return useQuery<WishlistResponse, Error>({
        queryKey:['wishlist', page],
        queryFn:()=>wishlist(page)
    })
}

export function useRemoveFromWishlist() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => removeFromWishlist(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            toast.success("Item removed from wishlist");
        },
        onError: (error) => {
            toast.error(error.message || "Failed to remove item");
        }
    });
}

export function useAddedWishlist() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => addedWishlist(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            toast.success("Item Added from wishlist");
        },
        onError: (error) => {
            toast.error(error.message || "Failed to remove item");
        }
    });
}
