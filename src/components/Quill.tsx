"use client"

import React, { useEffect, useRef } from 'react';
import Quill from 'quill';

const QuillEditor = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      new Quill(quillRef.current);
    }
  }, []);

  return <div className="border border-black" ref={quillRef} />;
};

export default QuillEditor;
