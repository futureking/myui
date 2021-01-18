import React, { createElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './assets/index.scss';

const Button  = ({
  type,
  size,
  rect,
  disable,
  onClick,
  tagName,
  icon,
  style,
  children,
  prefix,
  ...other
}) => {
  //按钮的classname列表
  const computedClassList = [];
  //button子节点
  const componentChildren = [];
  //定义class
  let computedClassName = 'eui-button',
      computedTextClassName = 'eui-button_text',
      iconClassName = 'eui-button_icon';
  
  if(type !== 'default') {
    computedClassList.push(type);
  }


  // createElement用法：
  // 第一个参数是必填，传入的是似HTML标签名称，eg: ul, li
  // 第二个参数是选填，表示的是属性，eg: className
  // 第三个参数是选填, 子节点，eg: 要显示的文本内容
  return createElement(
    tagName,
    {
      ...other,
      disabled,
      className: classnames(computedClassName, className)
    },
    componentChildren
  )
};

Button.defaultProps = {
  type: 'default',
  size: 'default',
  rect: false,
  disable: false,
  tagName: 'button',
  onClick: () => {}
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  rect: PropTypes.bool,
  disable: PropTypes.bool,
  tagName: PropTypes.oneOf(['button', 'a'])
}
export default Button;

