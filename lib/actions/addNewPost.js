'use server';

import { storePost } from "@/lib/database/posts";
import { redirect } from "next/navigation";
import { uploadImage } from "../cloudinary";
import { revalidatePath } from "next/cache";

export async function createPost(_, formData) {
    let imageUrl = '';
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let errors = {};
    // validate the received form data for errors
    if (!title || title.trim().length === 0) {
        errors["title"] = "Title is required";
    }

    if (!content || content.trim().length === 0) {
        errors["content"] = "Content is required";
    }
    if (!image || image.size === 0) {
        errors["image"] = "Image is required";
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    //upload image
    try {
        imageUrl = await uploadImage(image);
    } catch (error) {
        console.error(error);
        throw new Error('Image upload failed, post not created. Try again later.');
    }
        await storePost({
            imageUrl: imageUrl,
            title,
            content,
            userId: 1
        });
        revalidatePath('/', 'layout');
        redirect('/feed');
}