import React from "react";
import { useEffect } from "react";
// import { forwardRef } from "react";

import styles from "./ModalOverlay.module.css";

import { Modal } from "../Modal/modal";

export const ModalOverlay = ({
  // object,
  data,
  modalOppened,
  CurrentModalOverlay,
}) => {
  const [oppened, setOppened] = React.useState(true);
  const newRef = React.createRef();
  // let oppened = false;

  // const componentDidMount =() => {
  // ingredientRef.current = testOutput;
  //   this.openFunc();
  // }

  useEffect(() => {
    // change the localStorage
    openFunc();
  }, [modalOppened]);

  const openFunc = () => {
    // console.log("open");
    // oppened = true;
    setOppened({ oppened: true });
    newRef.current.style.display = "flex";
  };

  const closeFunc = () => {
    // console.log("close");
    // oppened = false;
    setOppened({ oppened: false });
    newRef.current.style.display = "none";
  };

  return (
    <div
      className={oppened ? styles.overlayOppened : styles.overlayClosed}
      ref={newRef}
      onClick={closeFunc}
      id={"modal"}
    >
      <Modal
        data={data}
        closeFunc={closeFunc}
        CurrentModalOverlay={CurrentModalOverlay}
        // onClick={console.log("ModalOverlay data", data)}
      />
    </div>
  );
};

// class ModalOverlay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = props.data;
//     this.ingredientRef = props.ingredientRef;
//     this.newRef = React.createRef();
//     this.oppened = false;
//     this.state = { message: "testing" };
//   }
//   componentDidMount() {
//     this.ingredientRef.current = this.testOutput;
//     this.openFunc();
//   }

//   testOutput = () => {
//     console.log("-=CHECK=-");
//   };

//   openFunc = () => {
//     console.log("open");
//     this.oppened = true;
//     this.newRef.current.style.display = "flex";
//   };

//   closeFunc = () => {
//     console.log("close");
//     this.oppened = false;
//     this.newRef.current.style.display = "none";
//   };

//   render() {
//     return (
//       <div
//         className={this.oppened ? styles.overlayOppened : styles.overlayClosed}
//         ref={this.newRef}
//       >
//         <Modal
//           data={this.data}
//           closeFunc={this.closeFunc}
//           // onClick={console.log("ModalOverlay data", data)}
//         />
//       </div>
//     );
//   }
// }
// export default ModalOverlay;
