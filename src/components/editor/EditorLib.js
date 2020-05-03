import React, { useState, useEffect } from "react"
import { EditorState, Editor, getDefaultKeyBinding, 
        KeyBindingUtil, RichUtils, convertToRaw, 
        CompositeDecorator, convertFromRaw } from "draft-js"

import { makeStyles } from "@material-ui/core/styles"
import ToolBar from "./ToolBar"

import 'draft-js/dist/Draft.css'

const useStyles = makeStyles(() => ({
    editorWrapper:{
        borderStyle: 'solid',
        borderWidth: '2px',
    },
    toolbar:{
        borderBottom: '2px',
        borderBottomStyle: 'solid',
        padding:'5px',
    },
    editor:{
        padding: '10px',
    }
}))

function EditorLib(props){
    const linkDecorator = new CompositeDecorator([
        {
            strategy: findLinkEntities,
            component:  Link,
        }
    ])

    const [editorState, setEditorState] = useState(EditorState.createEmpty(linkDecorator))
    useEffect(()=>{
        if(props.work==='edit'){
            let contentState=convertFromRaw(props.content)
            setEditorState(EditorState.createWithContent(contentState))
        }
    },[])

    const classes = useStyles()
    
    let domEditor
    function setDomEditorRef(ref){
        // console.log(ref)
        domEditor=ref
    }

    function focus(){
        domEditor.focus()
    }

    function keyBindingFunction(event){
        if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key==='x'){
            return 'strikethrough'
        }
        if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key==='h'){
            return 'highlight'
        }
        return getDefaultKeyBinding(event)
    }

    function handleKeyCommand(command, editorState){
        let newState = RichUtils.handleKeyCommand(editorState, command)
        if (!newState && command==='strikethrough'){
            newState=RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH')
        }
        if (!newState && command==='highlight'){
            newState=RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT')
        }
        if (newState){
            setEditorState(newState)
            return 'handled'
        }
        else {
            return 'not-handled'
        }
    }

    function handleTab(event){
        event.preventDefault()
        let newState = RichUtils.onTab(event, editorState, 4)
        if (newState){
            setEditorState(newState)
            return 'handled'
        }
        else {
            return 'not-handled'
        }
    }

    function setExternalContentState(event){
        let content = editorState.getCurrentContent()
        let rawContent = convertToRaw(content)
        props.setContent(rawContent)
    }

    const styleMap={
        'HIGHLIGHT': {
            'backgroundColor':'#faed27'
        }
    }
    return (
        <div className={classes.editorWrapper}>
            <div className={classes.toolbar}>
                <ToolBar
                    editorState={editorState}
                    setEditorState={setEditorState}
                />
            </div>
            <div className={classes.editor} onBlur={setExternalContentState}>
                <Editor
                    customStyleMap={styleMap}
                    editorState={editorState}
                    onChange={setEditorState}
                    keyBindingFn={keyBindingFunction}
                    handleKeyCommand={handleKeyCommand}
                    ref={setDomEditorRef}
                    onTab={handleTab}
                />
                {/* <input type="button" onClick={handleSubmit} value="Save"/> */}
            </div>
        </div>
    )
}

function findLinkEntities(contentBlock, callback, contentState){
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity()
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'LINK'
            )
        },
        callback
    )
}

//Link component to display Link in Editor
function Link(props){
    const {url} = props.contentState.getEntity(props.entityKey).getData()
    return (
        <a href={url}>
            {props.children}
        </a>
    )
}

export default EditorLib