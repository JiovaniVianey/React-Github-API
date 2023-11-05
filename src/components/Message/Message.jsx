import PropTypes from 'prop-types';
import React from 'react';
import './Message.scss';

function Message({ message }) {
  return <div className="ui message">{message}</div>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
