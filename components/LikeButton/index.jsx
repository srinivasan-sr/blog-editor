'use client';
import { useActionState } from "react";
import LikeIcon from "@/components/LikeIcon"
import { togglePostLikeStatus } from "@/lib/actions/updateLikeForPost";
export default function LikeButton({postId, isLiked}){
    const togglePostLikeStatusAction = togglePostLikeStatus.bind(null, postId);
    const [state, formAction, pending] = useActionState(togglePostLikeStatusAction, null);
    let likedValue = isLiked;
    if(pending){
        likedValue = !isLiked;
    }

    return (
         <div>
            <form action={formAction} className={likedValue ? 'liked': ''}>
            <LikeIcon />
            </form>
          </div>
    )
}