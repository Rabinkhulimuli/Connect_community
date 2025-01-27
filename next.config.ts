import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    reactCompiler:true,
    /* ppr:"incremental", */
  },
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"images.pexels.com" ,
      
    },{
      protocol:"https",
      hostname:"www.pexels.com" ,
      
    },
  
  ]
  }
};

export default nextConfig;
