import React from 'react';
import Objeto from './Objeto.js';
import Draggable from 'react-draggable';
import Pubsub from 'pubsub-js';

import ConectorImage from '../images/conector.png';

export default class ConectorEditor extends Objeto {
  constructor(props){
    super(props);
    this.state = {
      conector: this.props.objeto,
      position: {}
    }

    this._handleDoubleClickOpen = this._handleDoubleClickOpen.bind(this);
  }

  _handleDoubleClickOpen(event): void {
    Pubsub.publish('double-click', {
      tipoObjeto: 'CONECTOR',
      objeto: this.state.conector
    });
  }

  connection(){
    this.settings.onDrag = this.props.onControlledDrag;
    if (this.props.controlledPositions) {
      this.props.controlledPositions.filter(position => {
        if (position.target && position.target.id === this.state.conector.id) {
            this.settings.position = {x: position.x, y: position.y};
        }
      });
    }
  }

  render(){
    this.connection();

    return (
      <Draggable {...this.settings} >
        <img id={this.state.conector.id} src={ConectorImage} alt="Conector" {...this.dadosDoObjeto} onDoubleClick={this._handleDoubleClickOpen}/>
      </Draggable>
    );
  }
}
