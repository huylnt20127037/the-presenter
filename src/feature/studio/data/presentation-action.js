class PresentationAction {
     id
     sidebarAction
     description
     content

     constructor(obj) {
          Object.assign(this, obj)
     }
}

export default PresentationAction