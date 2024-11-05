/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporte le site en statique
  basePath: '/Portfolio_norea_danielkebir', // Remplacez par le nom de votre dépôt GitHub
  assetPrefix: '/Portfolio_norea_danielkebir/', // Précise le chemin pour les assets
  images: {
    unoptimized: true, // Nécessaire pour l'exportation statique si vous utilisez le composant Image de Next.js
  },
};

export default nextConfig;
