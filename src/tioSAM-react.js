import {inject} from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
let Promise = Promise || require('es6-promise').Promise

function connect (component){
  return inject('actions', 'changes')(component)
}

function renderer(component, element){
  return function(model, state, actions){
    return new Promise(function(resolve, reject){
      ReactDOM.render(
        <Provider changes={changes} actions={actions}>
          {component({model})}
        </Provider>,
        typeof element === 'string' ? document.querySelector(element) : element,
        function(){ resolve() }
      )
    })
  }  
}


export {
  connect,
  renderer
}