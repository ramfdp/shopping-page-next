import fs from "fs";
import path from "path";
import MenuGrid from "@/src/components/MenuGrid";

export const metadata = {
  title: "Menu - Savory & Sweet",
  description: "Explore our delicious menu items.",
};

export default function MenuPage() {
  const menuDirectory = path.join(process.cwd(), "public/menu");
  let menuItems: { name: string; image: string; price: number }[] = [];

  try {
    const files = fs.readdirSync(menuDirectory);
    
    menuItems = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((file) => {
        // Create a readable name from filename (remove extension and replace dashes/underscores)
        const name = file
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ");
        
        // Generate a pseudo-random price based on name string length to be consistent
        const price = 10 + (name.length % 20) + 0.99;

        return {
          name: name,
          image: `/menu/${file}`,
          price: price,
        };
      });
  } catch (error) {
    console.error("Error reading menu directory:", error);
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#86868b] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-gray-200/50">
            Our Selections
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Discover Our Menu.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
             A curated selection of our finest dishes and beverages, prepared with passion and premium ingredients.
          </p>
        </div>

        {menuItems.length === 0 ? (
           <div className="text-center py-20">
             <p className="text-gray-500 text-lg">Menu items currently unavailable.</p>
           </div>
        ) : (
          <MenuGrid items={menuItems} />
        )}
      </div>
    </main>
  );
}