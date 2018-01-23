import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import './../styles/main.scss';
import './../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';

export default class viro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }


    render() {
        return (
            <div className="viro-main-container">
                <AppBar className="viro-header"
                    title={<span className="viro-header-title">VIRO</span>}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                        iconElementRight={<FlatButton label="Save" />}
                />
                <Drawer open={true} className="viro-drawer">
                    <div className="viro-drawer-title"></div>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemTitle>
                               <p className="viro-list-item">Shapes</p>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>
                                    Body content
                                </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <p className="viro-list-item">Text</p>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>
                                    Body content
                                </p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                </Drawer>
                <div className="viro-content">

                </div>
            </div>
        );
    }
}