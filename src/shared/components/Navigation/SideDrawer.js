import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
    const content = (
        <CSSTransition
        in={props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
        > 
        {/* When props.show is true animation is visible. And timeout of animation is 200ms.
        classNames is a special prop except that by CSSTransition component. And this should be slide-in-left
        which in the end is a CSS animation defined in index.css, you can see it there. It is a couple of CSS
        classes with -enter, -interactive and so on at the end these are special class names which this third-party
        library knows how to use and which it applies in sequence when it animates the element in or animates 
        it out. Now last but least, I'lladd mountOnEnter and unmountOnExit to tell that component and the third-party
        library that the aside component which is inside of the CSSTransition component should really be added 
        to the DOM or be removed from the DOM when it should become visible or invisible, otherwise it is just
        animated out or in and not really removed. Here I want to have it removed or added dependind on its state*/}
            <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;