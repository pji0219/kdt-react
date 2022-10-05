import { Component } from 'react';

class MainHeader extends Component {
  render() {
    const { name, text, href } = this.props;

    return (
      <div>
        <h1>이름: {name}님 반갑습니다!</h1>
        <a href={href} alt='네이버로 이동'>
          {text}
        </a>
      </div>
    );
  }
}

export default MainHeader;
