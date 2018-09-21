import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import StaggeredList from './staggeredList'

import './transition.css'

const Transition = ({ children, location }) => (
  <div className='sliding-parent'>
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={{ enter: 350, exit: 350 }} // also set timeout in sliding.css
        classNames='sliding'
      >
        <div
          className='sliding-container'
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: '20px',
            }}
          >
            <StaggeredList>
              {children}
            </StaggeredList>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default Transition