import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { useEffect } from 'react';

export default function editor() {

    const [description, setDescription] = useState({
      description: "",
    });
    useEffect(() => {
        console.log(description);
    }, [description]);

    const DATA_NOW = {
      description: description
    }

    return (
      <div className='App'>
        <CKEditor
          editor={ ClassicEditor }
          data=""
          onReady={ ( editor ) => {
            // console.log( "CKEditor5 React Component is ready to use!", editor );
          } }
          onChange={ ( event, editor ) => {
            setDescription(editor.getData())
            // console.log( { event, editor, data } );
          } }
        />
          <button onClick={()=> console.log(DATA_NOW)}>log</button>
      </div>
    );
  }