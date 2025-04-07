import {
  reactExtension,
  BlockStack,
  Text,
  Button,
  Heading,
  Image,
  useApi,
  View,
  Grid,
  GridItem,
  InlineStack,
  // Block, (removed as it is not exported)
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.thank-you.block.render", () => (
  <BlockStack spacing="loose">
    <Extension />
    <CartConfirmationMessage />
  </BlockStack>
));

function Extension() {
  const { extension } = useApi();

  const products = [
    {
      title: "Product 1",
      imageUrl: "https://cdn.shopify.com/s/files/1/0567/3805/4228/products/wax-special.png?v=1704735709",
      price: 19.99,
    },
    {
      title: "Product 2",
      imageUrl: "https://cdn.shopify.com/s/files/1/0567/3805/4228/products/wax-special.png?v=1704735709",
      price: 29.99,
    },
    {
      title: "Product 3",
      imageUrl: "https://cdn.shopify.com/s/files/1/0567/3805/4228/products/wax-special.png?v=1704735709",
      price: 39.99,
    },
  ];

  return (
    <BlockStack spacing="loose">
      <Heading level={2}>You might also like these</Heading>

      <InlineStack spacing="loose">
        {products.map((product, index) => (
          <BlockStack key={index} border="base" cornerRadius="base">
            <View maxInlineSize={175}>
              <Image source={product.imageUrl} />
            </View>
            <BlockStack padding="base">
              <Text>{product.title}</Text>
              <Text appearance="subdued">Starts at {product.price}</Text>
              <Button
                kind="primary"
                accessibilityLabel={`Buy ${product.title}`}
                onPress={() => console.log(`Buying ${product.title}`)}
              >
                Buy Now
              </Button>
            </BlockStack>
          </BlockStack>
        ))}
      </InlineStack>
    </BlockStack>
  );
}

function CartConfirmationMessage() {
  return (
    <BlockStack spacing="loose">
      <View border="base" cornerRadius="small" padding="base" spacing="tight">
        <Heading level={2}>Your order is confirmed</Heading>
        <Text>
          You'll get a confirmation email with your order number soon.
        </Text>
        <Text>
          Rendered from the "Checkout.tsx" block extension.
        </Text>
      </View>
    </BlockStack>
  );
}
