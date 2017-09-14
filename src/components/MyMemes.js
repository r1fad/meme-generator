import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyMemes extends Component{
  render(){
    return(
      <div>
        {
          this.props.myMemes.map((meme,index) => {
            return(
              <a download={"my-meme.jpg"}
                 href={meme.data.url}>
              <img
                key={index}
                src={meme.data.url}
                alt="my-meme"
                className="my-meme-img"/></a>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    myMemes: state.myMemes
  }
}

export default connect(mapStateToProps,null)(MyMemes);
