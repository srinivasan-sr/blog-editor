'use server';

import { revalidatePath } from "next/cache";
import { updatePostLikeStatus } from "../database/posts";

const USER_ID = 2;
export async function togglePostLikeStatus(postId){
    await updatePostLikeStatus(postId, USER_ID);
    revalidatePath('/feed')
}