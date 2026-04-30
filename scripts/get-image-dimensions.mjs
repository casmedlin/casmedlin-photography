import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function getImageDimensions() {
  const categories = ['landscapes', 'wildlife', 'portraits', 'events', 'pets', 'astrophotography', 'architecture'];
  const result = {};
  
  for (const category of categories) {
    const dir = path.join(publicDir, category);
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
    result[category] = {};
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        const metadata = await sharp(filePath).metadata();
        result[category][file] = {
          width: metadata.width,
          height: metadata.height
        };
      } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
      }
    }
  }
  
  // Also process root images
  const rootFiles = fs.readdirSync(publicDir).filter(f => f.endsWith('.webp'));
  result['root'] = {};
  for (const file of rootFiles) {
    const filePath = path.join(publicDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      result['root'][file] = {
        width: metadata.width,
        height: metadata.height
      };
    } catch (err) {
      console.error(`Error processing ${filePath}:`, err.message);
    }
  }
  
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', 'image-dimensions.json'),
    JSON.stringify(result, null, 2)
  );
  
  console.log('Image dimensions saved to src/data/image-dimensions.json');
}

getImageDimensions().catch(console.error);
