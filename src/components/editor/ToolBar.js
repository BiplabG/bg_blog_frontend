import React, {useState} from "react"
import { RichUtils, EditorState } from "draft-js"

import IconButton from "@material-ui/core/IconButton"
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone'
import FormatUnderlinedTwoToneIcon from '@material-ui/icons/FormatUnderlinedTwoTone'
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone'
import StrikethroughSTwoToneIcon from '@material-ui/icons/StrikethroughSTwoTone'
import HighlightTwoToneIcon from '@material-ui/icons/HighlightTwoTone';
import FormatQuoteTwoToneIcon from '@material-ui/icons/FormatQuoteTwoTone';
import SettingsEthernetTwoToneIcon from '@material-ui/icons/SettingsEthernetTwoTone';
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone';
import FormatListNumberedTwoToneIcon from '@material-ui/icons/FormatListNumberedTwoTone';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';
import LinkOffTwoToneIcon from '@material-ui/icons/LinkOffTwoTone';
import { makeStyles } from '@material-ui/styles'

import LinkPrompt from "./LinkPrompt"

const useStyles = makeStyles(() => ({
    'toolBar':{
        display:'flex',
        justifyContent:'space-around',
        padding: '5px',
        fontFamily:'Courier'
    },
    'inlineToolBar':{

    },
    'blockToolBar':{

    },
    'iconButton':{
        margin:'2px',
    },
    'active':{
        color:'black',
        borderStyle:'solid',
        borderWidth:'2px',
    }
}))

const inlineStyles=[
    {inlineStyle:'BOLD', component:<FormatBoldIcon/>}, 
    {inlineStyle:'ITALIC', component:<FormatItalicTwoToneIcon/>},
    {inlineStyle:'CODE', component:<CodeTwoToneIcon/>}, 
    {inlineStyle:'STRIKETHROUGH', component:<StrikethroughSTwoToneIcon/>},
    {inlineStyle:'UNDERLINE', component:<FormatUnderlinedTwoToneIcon/>},
    {inlineStyle:'HIGHLIGHT', component:<HighlightTwoToneIcon/>}
]

const blockStyles=[
    {blockStyle:'header-one', component:'h1'}, 
    {blockStyle:'header-two', component:'h2'}, 
    {blockStyle:'header-three', component:'h3'}, 
    {blockStyle:'header-four', component:'h4'}, 
    {blockStyle:'header-five', component:'h5'}, 
    {blockStyle:'code-block', component:<SettingsEthernetTwoToneIcon/>},
    {blockStyle:'blockquote', component:<FormatQuoteTwoToneIcon/>},
    {blockStyle:'unordered-list-item', component:<FormatListBulletedTwoToneIcon/>},
    {blockStyle:'ordered-list-item', component:<FormatListNumberedTwoToneIcon/>},
]

function ToolBar(props) {
    const classes = useStyles()
    function _onInlineClick(event){
        event.preventDefault()
        props.setEditorState(RichUtils.toggleInlineStyle(props.editorState, event.currentTarget.getAttribute('inlinestyle')))
    }

    function _onBlockClick(event){
        event.preventDefault()
        props.setEditorState(RichUtils.toggleBlockType(props.editorState, event.currentTarget.getAttribute('blockstyle')))
    }

    function renderInlineStyles(){
        const currentInlineStyle = props.editorState.getCurrentInlineStyle()
        return inlineStyles.map((style)=>{
            let activeClassName=''
            if (currentInlineStyle.has(style.inlineStyle)){
                activeClassName=classes.active
            }
            return <IconButton 
                    key={style.inlineStyle} 
                    size="small" 
                    className={`${activeClassName} ${classes.iconButton}`}
                    onMouseDown={_onInlineClick} 
                    inlinestyle={style.inlineStyle}
                    >
                        {style.component}
                    </IconButton>
        })
    }

    function renderBlockStyles(){
        const currentBlockStyle = RichUtils.getCurrentBlockType(props.editorState)
        return blockStyles.map((style)=>{
            let activeClassName=''
            if (currentBlockStyle === style.blockStyle){
                activeClassName=classes.active
            }
            return <IconButton
                        key={style.blockStyle}
                        size="small"
                        className={`${activeClassName} ${classes.iconButton}`}
                        onMouseDown={_onBlockClick}
                        blockstyle={style.blockStyle}
                        >
                            {style.component}
                        </IconButton>
        })
    }

    const [showURLInput, setShowURLInput] = useState(false)
    const [urlValue, setUrlValue] = useState('')
    function promptForLink(event){
        event.preventDefault()
        const selection = props.editorState.getSelection()
        if (!selection.isCollapsed()){
            const contentState = props.editorState.getCurrentContent()
            const startKey = selection.getStartKey()
            const startOffset = selection.getStartOffset()
            const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
            const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)
            let url=''
            if(linkKey){
                const linkInstance = contentState.getEntity(linkKey)
                url = linkInstance.getData().url
            }
            setShowURLInput(true)
            setUrlValue(url)
        }
    }

    function confirmLink(event){
        event.preventDefault()
        if (urlValue){
            const contentState = props.editorState.getCurrentContent()
            const contentStateWithEntity = contentState.createEntity(
                'LINK', 'MUTABLE', {'url':urlValue}
            )
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
            const newEditorState = EditorState.set(props.editorState, {currentContent: contentStateWithEntity})
            props.setEditorState(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey))
        }
        setShowURLInput(false)
        setUrlValue('')
    }

    function removeLink(event){
        event.preventDefault()
        const selection = props.editorState.getSelection()
        if (!selection.isCollapsed()){
            props.setEditorState(RichUtils.toggleLink(props.editorState, selection, null))
        }
    }

    // const urlInput= <div>
    //                     <input
    //                         onChange={(event) => setUrlValue(event.target.value)}
    //                         // ref="url"
    //                         type="text"
    //                         value={urlValue}
    //                         // onKeyDown={onLinkInputKeyDown}
    //                         />
    //                     <button onMouseDown={confirmLink}>
    //                         Confirm
    //                     </button>
    //                 </div>

    return (
        <div className={classes.toolBar}>
            <div className={classes.inlineToolBar}>
                {renderInlineStyles()}
            </div>
            <div>
                <IconButton size="small" onMouseDown={promptForLink}><LinkTwoToneIcon/></IconButton>
                <IconButton size="small" onMouseDown={removeLink}><LinkOffTwoToneIcon/></IconButton>
            </div>
            <div className={classes.blockToolBar}>
                {renderBlockStyles()}
            </div>
            {showURLInput ? 
                <LinkPrompt 
                    urlValue={urlValue} 
                    setUrlValue={setUrlValue} 
                    confirmLink={confirmLink}
                    setShowURLInput={setShowURLInput}
                /> 
                : null}
        </div>
    )
}

export default ToolBar