import React,{useEffect} from 'react'
import loadjs from 'loadjs';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Test = () => {


  return (
  <CKEditor
    editor={ ClassicEditor }
    onReady={ editor => {
        // You can store the "editor" and use when it is needed.
        console.log( 'Editor is ready to use!', editor );
    } }
    onChange={ ( event, editor ) => {
        const data = editor.getData();
        console.log( { event, editor, data } );
    } }
/>

  )
}

export default Test