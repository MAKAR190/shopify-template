interface ShopifyFetchParams {
  query: string;
  variables?: Record<string, any>;
}

interface ShopifyFetchResult {
  status: number;
  body?: any;
  error?: string;
}

export async function shopifyFetch({
  query,
  variables,
}: ShopifyFetchParams): Promise<ShopifyFetchResult> {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN as string;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}