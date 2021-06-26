import React, { Component } from "react";
import { Modalize } from "react-native-modalize";
import { categoryData } from "../../../API/Data";
import SectionHeader from "../../../Components/CategorySections/CategorySectionHeader";
import SectionItem from "../../../Components/CategorySections/CategoryItem";

class CategoryModal extends Component {
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

  render() {
    return (
      <Modalize
        ref={this.ModalRef}
        snapPoint={400}
        sectionListProps={{
          keyExtractor: (item, index) => `${item.title}-${index}`,
          sections: this.sections,
          renderItem: ({ item }) => (
            <SectionItem item={item} onClick={() => this.props.onClick(item)} />
          ),
          renderSectionHeader: ({ section }) => (
            <SectionHeader section={section} />
          ),
          showsVerticalScrollIndicator: false,
        }}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <CategoryModal ref={ref} {...props} />
));
