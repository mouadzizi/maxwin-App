import React, { PureComponent } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import ButtonFill from "../../../Components/Button/ButtonFill";

const { width } = Dimensions.get("window");
class ConfirmationModal extends PureComponent {
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
          Supprimer!
        </Text>
        <Text
          style={{
            marginBottom: 2,
            fontSize: 16,
            fontWeight: "600",
            alignSelf: "center",
          }}
        >
          Êtes-vous sûr de supprimer ce produit?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <ButtonFill
            loading={this.props.loading}
            style={{ width: width * 0.4, backgroundColor: "red" }}
            title="Supprimer"
            onClick={this.props.onClick}
          />
          <ButtonFill
            loading={false}
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
      <Modalize openAnimationConfig={{timing:{},spring:{stiffness:25}}} ref={this.ModalRef} snapPoint={350} adjustToContentHeight>
        {this.renderContent()}
      </Modalize>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ConfirmationModal ref={ref} {...props} />
));
