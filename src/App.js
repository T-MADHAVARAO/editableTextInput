import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isEdit: true, content: ''}

  updateContent = event => {
    this.setState({content: event.target.value})
  }

  changeMode = () => {
    this.setState(prv => ({isEdit: !prv.isEdit}))
  }

  render() {
    const {isEdit, content} = this.state
    const btnVal = isEdit ? 'Save' : 'Edit'
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          {isEdit ? (
            <input
              type="text"
              placeholder="Type here"
              value={content}
              onChange={this.updateContent}
            />
          ) : (
            <p className="para">{content}</p>
          )}
          <button onClick={this.changeMode} type="button" className="btn">
            {btnVal}
          </button>
        </div>
      </div>
    )
  }
}
export default App
