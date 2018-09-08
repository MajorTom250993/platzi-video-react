import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {

  // ES7 y Manejo de Estado
  state = {
    author: 'Yonatan Rojas',
  }

  // ES6 y Manejo de Estado
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author,
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // ES7 Manejo de estado
  handleClick = (event) => {
    this.setState({
      author: 'Tu mamá en tanga ;)'
    })
  }

  render() {

    return(
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={this.props.cover} alt="" width="{240}" height="160"/>
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    );

  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;