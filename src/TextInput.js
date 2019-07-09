import React,{Component} from 'react';



class TextInput extends Component {


    render(){
        return(
            
            <div className="row">
            <div className="input-field col s12">
              <input id={this.props.name} type={this.props.type} name={this.props.name} value={this.props.value}  onChange={this.props.onChange} />
              <label htmlFor={this.props.name}>{this.props.title}</label>
            </div>
            </div>
        )
    }
}

export default TextInput;