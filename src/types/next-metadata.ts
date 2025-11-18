// Ambient module declaration to satisfy Next.js generated types during build.
// This addresses missing type declarations for internal Next metadata interfaces.
// Note: Using `any` here avoids coupling to unstable internal paths.
declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

// Ambient declaration for NextConfig type to satisfy next.config.ts typing.
declare module 'next' {
  export type NextConfig = any;
  export type Metadata = any;
  export type Viewport = any;
}

// Ambient declarations for commonly used Next.js navigation hooks.
declare module 'next/navigation' {
  export const useRouter: any;
  export const usePathname: any;
  export const useSearchParams: any;
}

// Ambient declarations for Next.js font loader.
declare module 'next/font/google' {
  export function Geist(options?: any): any;
  export function Geist_Mono(options?: any): any;
}