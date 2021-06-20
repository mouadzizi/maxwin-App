import React, { useRef } from 'react'
import { StyleSheet} from 'react-native';
import { Modalize } from "react-native-modalize";
import ImagePicker from '../../../Components/ImagePicker/ImagePicker'


export default class ImageModal extends React.Component {
    ModalRef = React.createRef();

    openModal = () => {
        if (this.ModalRef.current) {
            this.ModalRef.current.open();
          }
        
    };
 ItemRender = ({ item }) => {
        return (
            <ImagePicker
                uri={item.uri}
                onClick={this.props.onClick}
            />
        )
    }
        render(){
            return (
                <Modalize ref={this.ModalRef}
                    flatListProps={{
                        data: this.props.data,
                        renderItem: this.ItemRender,
                        keyExtractor: item => item.id,
                        showsVerticalScrollIndicator: false,
                        ListFooterComponent: <ImagePicker uri={null} onClick={this.props.onClick} />,
                        numColumns: 2
        
                    }} />
            )
        }

}

const styles = StyleSheet.create({})