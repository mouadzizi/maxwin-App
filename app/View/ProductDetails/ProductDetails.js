import React, { useEffect } from "react";
import { ScrollView, View} from "react-native";
import ImageSwiper from "./ImageSwiper";
import ProductInformation from "./ProductInformation";
import ButtonFill from "../../Components/Button/ButtonFill";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import SellerInformations from './SellerInformations'
import styles from './ProductDetails.style'
export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  return (
    <ScrollView>
      <ImageSwiper
      post={product}
        images={product.images}
        onClick={() =>
          navigation.navigate("ImagePreview", {
            images: product.images,
          })
        }
      />
      <ProductInformation product={product} />
      <SellerInformations />

      <View
      style={styles.container}>
      <ButtonFill title="Apple vendeur " loading={false} style={{marginVertical : 10}} onClick={()=> alert('appel')}/>
      <ButtonOutlined title="Messagerie" style={{marginVertical : 10}} onClick={()=> alert('Messages')}/>
      </View>
    </ScrollView>
  );
}
