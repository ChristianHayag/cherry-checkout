import { reactExtension, BlockStack, Heading, Button, View, Text } from "@shopify/ui-extensions-react/checkout";

// Define the main extension
export default reactExtension("purchase.thank-you.block.render", () => (
  <BlockStack spacing="loose">
    <ThankYouBlock />
  </BlockStack>
));

// Block 1: Thank You Message
function ThankYouBlock() {
  return (
    <BlockStack>
      <Heading level={2}>Thank you for your purchase!</Heading>
      <Button kind="primary" onPress={() => window.location.href = "/shop"}>Continue Shopping</Button>
    </BlockStack>
  );
}

