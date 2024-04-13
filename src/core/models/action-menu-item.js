class ActionMenuItem {
     icon
     text
     onClick

     constructor(icon, text, onClick) {
          Object.assign(this, {icon, text, onClick})
     }
}

export default ActionMenuItem