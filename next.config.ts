import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"]
};

const configWithMdx = createMDX({
  extension: /\.(md|mdx)$/,
})

export default configWithMdx(nextConfig);
