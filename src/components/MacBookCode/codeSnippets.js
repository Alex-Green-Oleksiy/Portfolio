import { PROJECT_LINKS, PROJECT_PREVIEWS } from '@/config/projects'

const LGRAND_PREVIEW = {
  previewUrl: PROJECT_LINKS.shop,
  previewImage: PROJECT_PREVIEWS.shop,
  previewTitle: 'L-Grand Shop',
}

export const CODE_SNIPPETS = [
  {
    file: 'ProductPage.jsx',
    ...LGRAND_PREVIEW,
    code: `const ProductPage = () => {
  const { product } = useProduct(id)
  const cart = useCartStore()

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Gallery3D model={product.model} />
      <AddToCart onSubmit={cart.add} />
    </motion.main>
  )
}`,
  },
]
