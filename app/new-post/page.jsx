'use client';

import FormSubmit from "@/components/FormSubmit";
import { createPost } from "@/lib/actions/addNewPost";
import { useActionState } from "react";

export default function NewPostPage() {
  const [state, formAction] = useActionState(createPost, {});
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          <div className="error">{state?.title ? state.title : ''}</div>
        </div>
        <div className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            
          />
          <div className="error">{state?.image ? state.image : ''}</div>
        </div>
        <div className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          <div className="error">{state?.content ? state.content : ''}</div>
        </div>
        <div className="form-actions">
          <FormSubmit />
        </div>
      </form>
    </>
  );
}
