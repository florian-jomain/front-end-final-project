import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

const JSXContent = () => (
  <Tippy content={<span>Tooltip</span>}>
    <button>My button</button>
  </Tippy>
)

export default Tippy
