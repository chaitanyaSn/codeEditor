import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
  const editorRef = useRef(null);
  const textAreaRef = useRef(null); // Ref for the textarea

  useEffect(() => {
    const editor = Codemirror.fromTextArea(textAreaRef.current, {
      mode: { name: 'javascript', json: true },
      theme: 'dracula',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });

    editor.setSize(null, '100%');

    // Cleanup function to destroy the editor
    return () => {
      editor.toTextArea();
    };
  }, []);

  return (
    <div className='flex-1 bg-gray-700 m-1 rounded-md' style={{ height: '680px' }}>
      <textarea ref={textAreaRef}></textarea> {/* Use ref here */}
    </div>
  );
};

export default Editor;
