import dynamic from 'next/dynamic'

export const BlockListWithNoSSR = dynamic(() => import('./origin'), {
  ssr: false,
})
