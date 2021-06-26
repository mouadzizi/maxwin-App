import React, { useRef } from 'react'
import { StyleSheet } from 'react-native';
import { Modalize } from "react-native-modalize";
import ImagePicker from '../../../Components/ImagePicker/ImagePicker'


class ImageModal extends React.PureComponent {
    ModalRef = React.createRef();

    openModal = () => {
        if (this.ModalRef.current) {
            this.ModalRef.current.open();
        }

    };
    ItemRender = ({ item }) =>
    (
        <ImagePicker
            uri={item.uri}
            onClick={this.props.onClick}
        />
    )
    footerComponent = ()=><ImagePicker uri={null} onClick={this.props.onClick} />
    render() {
        return (
            <Modalize ref={this.ModalRef}
                snapPoint={400}
                flatListProps={{
                    data: this.props.data,
                    renderItem: this.ItemRender,
                    keyExtractor: item => item.id,
                    showsVerticalScrollIndicator: false,
                    ListFooterComponent:this.footerComponent ,
                    numColumns: 2

                }}
            />

        )
    }

}

export default React.forwardRef((props, ref) => (
    <ImageModal ref={ref} {...props} />
));