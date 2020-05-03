import React, { useState, useEffect } from "react"
import { Editor, EditorState, convertFromRaw} from "draft-js"

function ContentViewer(props){
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(props.content)))

    useEffect(()=>{
        setEditorState(EditorState.createWithContent(convertFromRaw(props.content)))
    }, [props.blog_id, props.content])

    const styleMap={
        'HIGHLIGHT': {
            'backgroundColor':'#faed27'
        }
    }

    return(
        <Editor
            customStyleMap={styleMap}
            editorState={editorState}
            readOnly={true}
        />
    )
}

export default ContentViewer