import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, count: 100 };
  }

  toggleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      count: prevState.liked ? prevState.count - 1 : prevState.count + 1
    }));
  }

  render() {
    const { liked, count } = this.state;
    return (
      <button className={liked ? 'button liked' : 'button'} onClick={this.toggleLike}>
        {liked ? 'Unlike | ' : 'Like | '} {count}
      </button>
    );
  }
}

export default Button;