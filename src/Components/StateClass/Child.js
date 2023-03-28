import React, { Component } from 'react'

export class Child extends Component {
  constructor(stat){
    super(stat);
     
    let ret=this.stat.dat
    this.state={ret}
    this.bumb=this.state.ret
  }
  render() {
   let bumb=this.state.ret

    return (
      <div>{bumb.map((value,index)=>{
        return <div key={index}>
        <h2>{value.name}</h2>
        <h3>{value.price}</h3>
        <h4>{value.isPurchased}</h4>
        </div>
      })}
      </div>
    )
  }
}

export default Child


