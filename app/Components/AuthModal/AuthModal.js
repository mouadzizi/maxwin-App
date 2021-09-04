import React, { PureComponent } from 'react'
import { Modalize } from "react-native-modalize";
class AuthModal extends PureComponent {
    ModalRef = React.createRef();

    openModal = () => {
      if (this.ModalRef.current) {
        this.ModalRef.current.open();
      }
    };
    closeModal = () => {
      if (this.ModalRef.current) {
        this.ModalRef.current.close();
      }
    };

    render() {
      return (
        <Modalize onClose={this.props.onClose} openAnimationConfig={{timing:{},spring:{stiffness:50}}} ref={this.ModalRef} adjustToContentHeight withHandle={false} >
          {this.props.children}
        </Modalize>
      );
    }
  }
  
  export default React.forwardRef((props, ref) => (
    <AuthModal ref={ref} {...props} />
  ));
  