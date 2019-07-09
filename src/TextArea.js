import React,{Component} from 'react';



class TextArea extends Component {


    render(){
        return(
            
            <div className="row">
            <div className="input-field col s12">
            <i className="material-icons prefix">mode_edit</i>
              <textarea id={this.props.name} className="materialize-textarea" name={this.props.name} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.body} ></textarea>
              <label htmlFor={this.props.name}>{this.props.title}</label>
            </div>
          </div>
        )
    }
}

export default TextArea;