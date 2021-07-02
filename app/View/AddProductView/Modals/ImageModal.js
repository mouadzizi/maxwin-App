import React from "react";
import { Modalize } from "react-native-modalize";
import ImagePicker from "../../../Components/ImagePicker/ImagePicker";
import { View } from 'react-native'

class ImageModal extends React.PureComponent {
  ModalRef = React.createRef();

  openModal = () => {
    if (this.ModalRef.current) {
      this.ModalRef.current.open();
    }
  };
  ItemRender = ({ item }) => (
    <ImagePicker uri={item.uri} onClick={this.props.onClick} />
  );
  footerComponent = () => (
    <ImagePicker uri={null} onClick={this.props.onClick} />
  );
  render() {
    return (
      <Modalize
        ref={this.ModalRef}
        modalStyle={{
          alignItems: 'center',
        }}

        snapPoint={500}
        flatListProps={{
          data: this.props.data,
          renderItem: this.ItemRender,
          keyExtractor: (item) => item.id,
          showsVerticalScrollIndicator: false,
          ListFooterComponent: this.footerComponent,
          numColumns: 2,
          style: { flexGrow: 0 }
        }}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ImageModal ref={ref} {...props} />
));
