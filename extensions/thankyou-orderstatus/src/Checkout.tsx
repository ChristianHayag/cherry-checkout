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
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.thank-you.block.render", () => (
  <Extension />
));

function Extension() {
  const { extension } = useApi();

  // Sample product data (replace with dynamic data or API fetch)
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

      <BlockStack
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px", // Adjusts the spacing between the cards
        }}
      >
        {products.map((product, index) => (
          <BlockStack
            key={index}
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              padding: "16px",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <Image source={product.imageUrl} style={{ width: "150px", height: "150px", objectFit: "contain" }} />
            <Text size="medium">{product.title}</Text>
            <Text size="small" appearance="subdued">Starts at {product.price}</Text>
            <Button
              kind="primary"
              appearance="critical"
              accessibilityLabel={`Buy ${product.title}`}
              onPress={() => console.log(`Buying ${product.title}`)}
            >
              Buy Now
            </Button>
          </BlockStack>
        ))}
      </BlockStack>
    </BlockStack>
  );
}
