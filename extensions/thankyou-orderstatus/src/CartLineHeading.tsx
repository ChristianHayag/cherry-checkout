import {
  reactExtension,
  BlockStack,
  Heading,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.thank-you.customer-information.render-after", () => (
  <CartLineHeading />
));

function CartLineHeading() {
  return (
    <BlockStack spacing="loose">
      <Heading level={2} inlineAlignment="center">
        What's Inside my brother?
      </Heading>
    </BlockStack>
  );
}