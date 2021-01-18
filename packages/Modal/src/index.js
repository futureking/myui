import React from 'react';
import PropTypes from 'prop-types';

const Modal  = () => {

  return (
    <div>
      弹窗
    </div>
  )
};

Modal.defaultProps = {
  data: []
};

Modal.propTypes = {
  data: PropTypes.array
}
export default Modal;
