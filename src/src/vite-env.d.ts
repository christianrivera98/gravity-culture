/// <reference types="vite/client" />

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.webp'

declare module '@/imports/*' {
  const paths: Record<string, string>
  export default paths
}
