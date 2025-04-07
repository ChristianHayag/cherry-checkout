import {
  reactExtension,
  BlockStack,
  Heading,
  View,
  Text,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.thank-you.cart-line-list.render-after", () => (
  <CartLineFooter />
  
));

function CartLineFooter() {
  return (
    <BlockStack spacing="loose">
      <View border="base" cornerRadius="small" padding="base" spacing="tight">
        <Heading level={2}>
          Your order is confirmed
        </Heading>
        <Text>
          You'll get a confirmation email with your order number soon. 
        </Text>
        <Text>
          Rendered from the CartLineFooter block extension.
        </Text>
      </View>
    </BlockStack>
  );
}
