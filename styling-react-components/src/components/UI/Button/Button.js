import React from "react";

// import styled from "styled-components";

import styles from "./Button.module.css";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

//button 은 styled Object의 method 이고, 새로운 컴포넌트를 return 함 (다른 html tag 모두 가능)
//`` 에 button style을 명시하면 해당 button에 스타일이 적용됨
//& == .button(자기 자신을 가리키는 selector)

//button에 styled components 패키지에 의해 생성된 unique 클래스 네임이 설정됨

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

//styles class 내에는 모든 css style들이 멤버로 포함되어 있음

export default Button;
