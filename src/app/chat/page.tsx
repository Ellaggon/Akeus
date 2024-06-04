import Chat from "app/components/chat/Chat";
import { getProducts } from "app/services/shopify/products";
import createAgent from "app/utils/openai/createAgent";

export default async function ChatPage() {

  const products = await getProducts()
  const productTitles = products.map((el) => el.title)
  const flatProductTitle = productTitles.join("\n")
  const agent = createAgent(flatProductTitle)

  return (
    <>
    <h1>Chatbot</h1>
    <Chat agent={agent} />
    </>
  )
}