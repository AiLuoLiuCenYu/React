import React from 'react'
import './listItem.css'

export default class Foort extends React.Component {

  state = {
    comments: [
      // { id: 1, name: 'jack', content: '沙发！！！' },
      // { id: 2, name: 'rose', content: '板凳~' },
      // { id: 3, name: 'tom', content: '楼主好人' }
    ],
    inputvalue: '',
    textareaValue: ''
  }

  async clickFoort() {

    let zz = this.state.inputvalue
    let cc = this.state.textareaValue
    // let zz = document.querySelector('.user').value
    // console.log('点击了',zz,cc);
    if (zz.trim() === '' || cc.trim() === '') return

    let oo = await [...this.state.comments]
    let id = 0
    id++
    let pp = {
      id,
      name: zz,
      content: cc
    }
    oo.push(pp)
    this.setState({
      comments: oo,
      inputvalue: '',
      textareaValue: ''
    })
    console.log(this.state.comments);
  }

  inputv(e) {
    // console.log(e.target.value); 
    this.setState({
      inputvalue: e.target.value
    })
  }
  textv(e) {
    // console.log(e.target.value);
    this.setState({
      textareaValue: e.target.value
    })
  }

  render() {
    return <div className='app'>
      <div>
        <input value={this.state.inputvalue} onChange={this.inputv.bind(this)} className="user" type="text" placeholder="请输入评论人" />
        <br />
        <textarea value={this.state.textareaValue} onChange={this.textv.bind(this)} className="content" id="" cols="30" rows="10"
          placeholder="请输入评论内容" />
        <br />
        <button onClick={this.clickFoort.bind(this)}>发表评论</button>
      </div>

        <div className="no-comment">{this.state.comments.length > 0 ? <ul>
          {
            this.state.comments.map((item, index) => {
              return <li key={index}>{item.name}
                <p>{item.content}</p>
              </li>
            })
          }

        </ul> : '暂无评论，快去评论把'}</div>

    </div>

  }
}