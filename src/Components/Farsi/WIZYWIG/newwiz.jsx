import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function MyEditor({ handleChange, ...props }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("image", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch('https://api.vip4care.ir/admin/upload', {
              method: "post",
              body: body,
              headers: {
                "Dev": "vip4c@reDevelop3r",
                // "Content-Type": "multipart/form-data",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            },
              // mode: "no-cors"
            })
              .then((res) => res.json())
              .catch(error => console.log(error))
          });
        });
      }
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="App">
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin]
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          console.log(editor.getData())
          // handleChange(editor.getData());
        }}
        {...props}
      />
    </div>
  )
      }