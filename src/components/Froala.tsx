"use client"

import React from "react";
import FroalaEditor from "react-froala-wysiwyg"
// Froala Styles
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const Froala = () => {
    return (
        <div id="editor">
            <FroalaEditor />
        </div>
    );
};

export default Froala;
