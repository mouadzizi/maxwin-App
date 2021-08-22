import React, { PureComponent } from 'react'
import { Text, View,Dimensions } from 'react-native'
import { Modalize } from "react-native-modalize";
import ButtonFill from "../Button/ButtonFill";
import ButtonOut from "../Button/ButtonOutlined";

const { width } = Dimensions.get("window");

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
    renderContent = () => {
      return (
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: "#333",
              marginBottom: 10,
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            Avez vous un compte ?
          </Text>
          <Text
            style={{
              marginBottom: 2,
              fontSize: 16,
              fontWeight: "600",
              alignSelf: "center",
              textAlign:'center'
            }}
          >
            Pour completer cette action,veuillez nous connecter s'il vous plait
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <ButtonFill
              loading={false}
              style={{ width: width * 0.4 }}
              title="S'identifier"
              onClick={this.props.onClick}
            />
            <ButtonOut
              style={{ width: width * 0.4 }}
              title="Annuler"
              onClick={this.closeModal}
            />
          </View>
        </View>
      );
    };
  
    render() {
      return (
        <Modalize openAnimationConfig={{timing:{},spring:{stiffness:50}}} ref={this.ModalRef} adjustToContentHeight withHandle={false} >
          {this.renderContent()}
        </Modalize>
      );
    }
  }
  
  export default React.forwardRef((props, ref) => (
    <AuthModal ref={ref} {...props} />
  ));
  