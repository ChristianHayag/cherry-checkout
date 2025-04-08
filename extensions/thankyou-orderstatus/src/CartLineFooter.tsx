import { reactExtension, BlockStack, Text, Heading, View } from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.thank-you.block.render", () => (
  <BlockStack spacing="loose">
    <CartLineFooter />
  </BlockStack>
));

function CartLineFooter() {
  return (
    <BlockStack spacing="loose">
      <View border="base" cornerRadius="small" padding="base" spacing="tight">
        <Heading level={2}>Your order is confirmed</Heading>
        <Text>You'll get a confirmation email with your order number soon.</Text>
      </View>
    </BlockStack>
  );
}