'use client';

import {useFormStatus} from 'react-dom';

export default function FormSubmit(){
    const status = useFormStatus();
    const pending = status.pending;
   
    return (
        <>
             <button type="reset" disabled={pending}>Reset</button>
          <button disabled={pending}>Create Post</button>
        </>
    )

}