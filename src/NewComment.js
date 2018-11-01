import React from "react";

  class NewComment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          valueForm: ''
      };        
  }
    
  onSubmitHandle(event) {
    event.preventDefault();
    if (this.state.valueForm) {
      this.props.addComment(this.state.valueForm);
      this.setState({ valueForm: '' });  
    }
  }

  onChangeForm(event) {
    const val = event.currentTarget.value; 
    this.setState({ valueForm: val });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandle.bind(this)}>
        <input type="text" value={this.state.valueForm} onChange={this.onChangeForm.bind(this)}/>
        <input type="submit" value="Add comment"/>
      </form>
    );
  }
}

export default NewComment;