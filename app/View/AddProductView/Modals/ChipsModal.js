import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Modalize } from 'react-native-modalize';
import { chipsData } from '../../../API/Data';
import Chip from '../../../Components/Chip/Chip'

 class ChipsModal extends Component {
    modal = React.createRef();
    get data() {
        return chipsData;
    }
    renderItem = ({ item }) => (<Chip title={item.title} iconName={item.iconName} onClick={this.props.onClick} />)
    keyExtractor = (item, index) => `${index}`

    openModal = () => {
        if (this.modal) {
            this.modal.current.open()
        }
    }

    render() {
        return (
            <Modalize
            ref={this.modal}
            snapPoint={300}
            flatListProps={{
                data:this.data,
                keyExtractor:this.keyExtractor.bind(this),
                renderItem:this.renderItem.bind(this),
                numColumns:3,
                style:{flex:1,padding:10}

            }}
            />
        )
    }
}

export default React.forwardRef((props,ref)=> (<ChipsModal ref={ref} {...props} />))