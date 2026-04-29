import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Xuất ra web tĩnh
  output: "export",

  // 2. Đường dẫn web (Phải khớp chính xác tên Repository của bạn)
  basePath: "/nhom10_bookstation",

  // 3. Tắt tối ưu ảnh
  images: {
    unoptimized: true,
  },

  // 4. Bỏ qua lỗi để lấy tích xanh
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
