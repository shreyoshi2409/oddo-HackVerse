import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image'],
    [{ 'align': [] }],
    ['clean']
  ],
};

export default function RichTextEditor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={[
        'header', 'bold', 'italic', 'strike', 'list', 'bullet',
        'link', 'image', 'align'
      ]}
      style={{ minHeight: 160 }}
    />
  );
}