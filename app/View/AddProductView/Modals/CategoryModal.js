import React, { Component } from "react";
import { Modalize } from "react-native-modalize";
import { categoryData } from "../../../API/Data";
import SectionHeader from "../../../Components/CategorySections/CategorySectionHeader";
import SectionItem from "../../../Components/CategorySections/CategoryItem";

class CategoryModal extends React.PureComponent {
  ModalRef = React.createRef();

  get sections() {
    return categoryData;
  }
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
  renderItem = ({item,section})=> (
    <SectionItem item={item} onClick={()=>this.props.onClick(item,section)} />
  )

  renderSectionheader = ({section})=>(
    <SectionHeader section={section} />
  )
  keyExtractor = (item, index) => `${item.title}-${index}`

  render() {
    return (
      <Modalize
      modalStyle={{
        padding:10
      }}
        ref={this.ModalRef}
        snapPoint={350}
        sectionListProps={{
          maxToRenderPerBatch:2,
          initialNumToRender:1,
          keyExtractor: this.keyExtractor.bind(this),
          sections: this.sections,
          renderItem: this.renderItem.bind(this),
          renderSectionHeader: this.renderSectionheader.bind(this),
          showsVerticalScrollIndicator: false,
        }}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <CategoryModal ref={ref} {...props} />
));
