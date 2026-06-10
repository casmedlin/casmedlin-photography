import type { APIRoute } from 'astro';

const site = 'https://casmedlin.com';

const urlEncode = (str: string) =>
  encodeURI(str).replace(/\(/g, '%28').replace(/\)/g, '%29');

const pages: Array<{ url: string; images: { src: string; alt: string }[] }> = [
  {
    url: '/',
    images: [
      { src: 'portraits/DSC086282.webp', alt: 'A Graduation Picture of a young man leaning against a brick wall, Shot in Blowing Rock, NC by Cas Medlin' },
      { src: 'CAS_0418.webp', alt: 'Barred owl perched on branch at golden hour in Irdell County, North Carolina, by Cas Medlin' },
      { src: 'events/DSC01007(1) 2.webp', alt: 'Joe Smallbone (point up to heaven) of For King and Country performing on stage, by Cas Medlin' },
      { src: '2025-07-23_21-02-21_091.webp', alt: 'Lupine flowers on rolling hills with snow-covered peaks in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: '294518D8-40EC-4C93-B49D-5A4BF14A0BD5DSC00146b.webp', alt: 'Northern Lights (aurora borealis), taken in Iredell County, NC by Cas Medlin' },
      { src: 'portraits/DSC084535.webp', alt: 'A young man seated leaning against a rock wall next to a gate through which flowers are seen, captured in Blowing Rock, NC by Cas Medlin' },
      { src: 'DSC04992.webp', alt: 'A young man seated leaning against a rock wall next to a gate through which flowers are seen, captured in Blowing Rock, NC by Cas Medlin' },
      { src: 'portraits/2026-04-25_15-38-25_536.webp', alt: 'Prom Picture of a young lady in Pink dress holding a bouquet on a bridge, by Cas Medlin' },
      { src: 'events/DSC01765.webp', alt: 'Worship at a Christian Concert, by Cas Medlin' },
      { src: 'DSC03417.webp', alt: 'Moose in a field of Fireweed, taken in Denali State Park Alaska by Cas Medlin' },
      { src: 'portraits/DSC08371.webp', alt: 'A Graduation Picture of a young man shot against a wall of flowers, Shot in Blowing Rock, NC, by Cas Medlin' },
      { src: '2025-09-11_19-48-13_491.webp', alt: 'Young Cow coming toward me with a mother cow behind it with Blue ridge behind it, photographed in Grayson Highlands State Park by Cas Medlin' },
      { src: '2025-05-22_03-30-35_454.webp', alt: 'Milky way with the Cape Lookout lighthouse below it, taken on Cape Lookout Island, NC by Cas Medlin' },
      { src: 'DSC01277.webp', alt: 'Eastern coyote in green foliage in Great Smoky Mountains National Park, Tennessee, by Cas Medlin' },
      { src: 'hCydvjybRh-HUghO949Ufw.webp', alt: 'Interior of restaurant with diamond-patterned windows, by Cas Medlin' },
      { src: 'portraits/DSC086614.webp', alt: 'A young man on a rock overlook a mountain, Shot in Blowing Rock, NC by Cas Medlin' },
    ],
  },
  {
    url: '/portraits',
    images: [
      { src: 'portraits/DSC086282.webp', alt: 'A Graduation Picture of a young man leaning against a brick wall, Shot in Blowing Rock, NC by Cas Medlin' },
      { src: 'portraits/DSC06596.webp', alt: 'A young man in a green shirt against fall leaves, Shot in Iredell County, NC by Cas Medlin' },
      { src: 'portraits/DSC08371.webp', alt: 'A Graduation Picture of a young man shot against a wall of flowers, Shot in Blowing Rock, NC, by Cas Medlin' },
      { src: 'portraits/DSC05371 2.webp', alt: 'A young man hiking resting on a rock overlook a mountain, Shot in Alaska by Cas Medlin' },
      { src: 'portraits/2025-07-23_21-25-17_620.webp', alt: 'A group of three hikers with the Kenai Glacier and Harding Icefield in the background, Shot in Alaska by Cas Medlin' },
      { src: 'portraits/DSC084452.webp', alt: 'A young man seated leaning against a rock wall next to a gate through which flowers are seen, captured in Blowing Rock, NC by Cas Medlin' },
      { src: 'portraits/2025-07-23_22-20-00_081.webp', alt: 'A young man with the Kenai Glacier and Harding Icefield in the background, Shot in Alaska by Cas Medlin' },
      { src: 'portraits/DSC01354b.webp', alt: 'A young man seated on a rock, Shot in Providence Canyon State Park, Georgia by Cas Medlin' },
      { src: 'portraits/DSC086614.webp', alt: 'A young man on a rock overlook a mountain, Shot in Blowing Rock, NC by Cas Medlin' },
      { src: 'portraits/DSC07582.webp', alt: 'Prom Picture of a young lady in Pink dress leaning aganst a tree, by Cas Medlin' },
      { src: 'portraits/DSC081532.webp', alt: 'A young man seated on a bench on a walking bridge pondering life, Shot in Hickory, NC by Cas Medlin' },
      { src: 'portraits/DSC04666.webp', alt: 'A young man hiking in the mountains with a full pack, by Cas Medlin' },
      { src: 'portraits/2026-04-25_15-38-23_300.webp', alt: 'Prom Picture of a young lady in Pink dress holding a bouquet on a bridge, by Cas Medlin' },
      { src: 'portraits/DSC07624.webp', alt: 'Prom Picture of a young lady in Pink dress holding a bouquet backdropped by a rock wall, by Cas Medlin' },
      { src: 'portraits/DSC081563.webp', alt: 'A young man leaning on a walking bridge, Shot in Hickory, NC by Cas Medlin' },
      { src: 'portraits/2025-07-20_13-51-57_305 (2025-12-13T09_10_51.635).webp', alt: 'A young man standing on a walking bridge, Shot in Alaska by Cas Medlin' },
      { src: 'portraits/2025-07-21_00-41-47_938 (2025-12-13T09_07_35.015).webp', alt: 'A young man standing in the Road in Denali National Park, Shot in Alaska by Cas Medlin' },
    ],
  },
  {
    url: '/events',
    images: [
      { src: 'events/DSC00970.webp', alt: 'For King and Country concert event, by Cas Medlin' },
      { src: 'events/DSC00394.webp', alt: 'Smallbone brothers performaning as for King and Country, by Cas Medlin' },
      { src: 'events/DSC01007(1) 2.webp', alt: 'Joe Smallbone (point up to heaven) of For King and Country performing on stage, by Cas Medlin' },
      { src: 'events/DSC01001(1).webp', alt: 'Joe Smallbone of For King and Country performing on stage, by Cas Medlin' },
      { src: 'events/DSC00944.webp', alt: 'For King and Country concert event, by Cas Medlin' },
      { src: 'events/DSC00882.webp', alt: 'Joe Smallbone of For King and Country performing on stage, by Cas Medlin' },
      { src: 'events/DSC00416.webp', alt: 'Smallbone brothers performaning as for King and Country, by Cas Medlin' },
      { src: 'events/DSC01765.webp', alt: 'Worship at a Christian Concert, by Cas Medlin' },
    ],
  },
  {
    url: '/pets',
    images: [
      { src: 'pets/2023-12-04_17-13-23_621.webp', alt: 'Sissy the Dog standing with the sunset in background by Cas Medlin' },
      { src: 'pets/2023-12-04_16-52-14_336 (2023-12-17T13_14_31.240).webp', alt: 'Bubby the Dog standing with the sunset in background by Cas Medlin' },
      { src: 'pets/DSC01004.webp', alt: 'Teddy the Dog sitting for portrait session with the sunset in background by Cas Medlin' },
      { src: 'pets/DSC02058.webp', alt: 'Lily walking towards the camera as a little puppy by Cas Medlin' },
      { src: 'pets/DSC02123.webp', alt: 'Little puppy playing with a ball by Cas Medlin' },
      { src: 'pets/DSC04153.webp', alt: 'Bubby inside looking out the window, by Cas Medlin' },
      { src: 'pets/DSC09913.webp', alt: 'Bubby the Cocker Spaniel Chihuahua mix portrait' },
      { src: 'pets/DSC03490.webp', alt: 'Lacy running through a yard by Cas Medlin' },
      { src: 'pets/DSC09920.webp', alt: 'Little puppy sitting under a chair playing with a stick by Cas Medlin' },
      { src: 'pets/DSC04995.webp', alt: 'Bubby the dog seated in the wood after a walk, by Cas Medlin' },
      { src: 'pets/CAS_0015.webp', alt: 'Missy the dog laying in the sun, Pet portrait capturing personality, by Cas Medlin' },
      { src: 'pets/DSC04992.webp', alt: 'Bubby standing on a tree in the woods, by Cas Medlin' },
      { src: 'pets/DSC02122 2.webp', alt: 'Bubby the Dog standing in the snow by Cas Medlin' },
    ],
  },
  {
    url: '/wildlife',
    images: [
      { src: 'wildlife/0F02335F-2265-4BEA-B388-0D6291B8E02E2025-07-24_15-20-27_118.webp', alt: 'Three Steller sea lions sunning on a cliff side in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2023-08-09_19-21-47_497.webp', alt: 'A fawn peaking his head out of the forest on a trail in Shenandoah National Park, Virginia, by Cas Medlin' },
      { src: 'wildlife/2023-08-15_15-18-38_847.webp', alt: 'Beaty White Blue whale diving in Acadia National Park, Maine, by Cas Medlin' },
      { src: 'wildlife/2025-07-20_22-21-42_808.webp', alt: 'Caribou in a field in Denali National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2025-07-21_00-41-13_804.webp', alt: 'Porcupine in a field with Denali National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2025-07-21_20-22-05_838.webp', alt: 'Willow Ptarmigan shot in a field deep with Denali National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2025-07-21_21-35-31_496.webp', alt: 'Grizzly bear in the wilderness of Denali National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2025-07-21_21-49-26_961.webp', alt: 'Dall sheep on the edge of a mountainin Denali National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2025-07-22_00-13-32_078.webp', alt: 'Three Moose two of them being calfs in a field in Denali State Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/2025-09-11_19-48-13_491.webp', alt: 'Young cow with mother cow in Grayson Highlands State Park, Virginia, by Cas Medlin' },
      { src: 'wildlife/2025-09-12_10-19-42_002.webp', alt: 'Wild ponies in Grayson Highlands State Park, Virginia, by Cas Medlin' },
      { src: 'wildlife/23-08-11 17-31-06 8906.webp', alt: 'Grey Seal in Cape Cod National Seashore, Massachusetts, by Cas Medlin' },
      { src: 'wildlife/23-08-11 17-32-56 8960.webp', alt: 'Grey Seal looking at the camerain Cape Cod National Seashore, Massachusetts, by Cas Medlin' },
      { src: 'wildlife/45CEEFEA-5CE0-4B80-9E8E-E6671D36AA8C.webp', alt: 'Wild horse of Shackleford Banks overlooked by the Cape Lookout Seashore with flowers in the foreground, North Carolina, by Cas Medlin' },
      { src: 'wildlife/51674A29-BD44-4231-82FB-833176A5B5322025-07-24_16-52-11_680 (2025-12-07T10_05_36.324).webp', alt: 'Pod of Blue whale feeding together in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/5A0ADCC3-EC67-4C3E-9B9A-84DBA06D5FA32025-07-21_21-26-02_636 (2025-12-13T09_02_49.793).webp', alt: 'Caribou in a field in Denali National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/712A0C40-E9CF-4784-9CEC-250893B8516EDSC08955.webp', alt: 'Blue whales dving in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/73065081-51C6-40CA-8551-8445DE16A06DDSC08912.webp', alt: 'Blue whales dving in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/7AEA06A4-31D9-4EF7-9250-BC90DA14FB50DSC07175.webp', alt: 'Killer whale in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/CAS_0418.webp', alt: 'Barred owl perched on branch at golden hour in Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/CAS_0448.webp', alt: 'Barred owl perched on branch with headed turned backward, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/CAS_0495.webp', alt: 'Close up of barred owl looking towards the sky, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/CAS_0507.webp', alt: 'Barred owl perched among branches looking down towards the camera, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/D78A08A4-6AA7-467D-9777-DA8CC5BF12BFDSC06664.webp', alt: 'Bald eagle in flight, Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/DSC01170(1).webp', alt: 'Blue Whale spouting water, Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/DSC01224.webp', alt: 'Blue whale diving in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/DSC01229.webp', alt: 'Blue whale diving in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/DSC01435.webp', alt: 'Two puffins Flying over the ocean with fish in beak, Acadia National Park, Maine, by Cas Medlin' },
      { src: 'wildlife/DSC01440.webp', alt: 'Two puffins Flying over the ocean with fish in beak, Acadia National Park, Maine, by Cas Medlin' },
      { src: 'wildlife/DSC01964.webp', alt: 'Two puffins on a rocky mossy shore one older one younger in Acadia National Park, Maine, by Cas Medlin' },
      { src: 'wildlife/DSC02139.webp', alt: 'Elk in a forest in Great Smoky Mountains National Park, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC02320.webp', alt: 'Baby birds hatching from eggs in nest, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC02427.webp', alt: 'Young birds screaming to be fed in a nest, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC02328.webp', alt: 'Seagull on Myrtle Beach at sunset, South Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC02509.webp', alt: 'Turtle Doves resting on a branch, South Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC02824.webp', alt: 'Hermit Thrush in a holly bush at golden hour in Congaree National Park, South Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC03101.webp', alt: 'White-breasted Nuthatch in a pine tree, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC03417.webp', alt: 'Older female moose in a field surrounded by fireweed, Denali State Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/DSC04431.webp', alt: 'Buck in Grayson Highlands State Park, Virginia, by Cas Medlin' },
      { src: 'wildlife/DSC04803.webp', alt: 'Stunk in a field, Blue Ridge Parkway, Virginia, by Cas Medlin' },
      { src: 'wildlife/DSC05011.webp', alt: 'Two Moose in a field a mother and calf, in Denali State Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/DSC05427.webp', alt: 'Barred owl perched on branch, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC05434.webp', alt: 'Barred owl perched on branch looking at a bird out of frame, Irdell County, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC05897.webp', alt: 'Black wild horse on the Northern Beaches of Corolla, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC06062.webp', alt: 'Wild Ponies in a field with Mountain in the background, Grayson Highlands State Park, Virginia, by Cas Medlin' },
      { src: 'wildlife/DSC07517.webp', alt: 'A fawn peaking his head out of the forest on a trail in Shenandoah National Park, Virginia, by Cas Medlin' },
      { src: 'wildlife/DSC08172.webp', alt: 'Tricolored Heron on a a inland water way, Cape Lookout, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC08201.webp', alt: 'Wild Horses in a field, Cape Lookout, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC08319.webp', alt: 'Wild horse grazing with Cape Lookout lighthouse in background, Cape Lookout, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC08388.webp', alt: 'Two wild horses with Cape Lookout lighthouse in background, Cape Lookout, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC08629.webp', alt: 'Sandpiper walking on beach with waves in Cape lookout, North Carolina, by Cas Medlin' },
      { src: 'wildlife/DSC08636.webp', alt: 'Three harbor seals swimming in water Cape Cod, Massachusetts, by Cas Medlin' },
      { src: 'wildlife/DSC08682.webp', alt: 'Two harbor seals swimming in water Cape Cod, Massachusetts, by Cas Medlin' },
      { src: 'wildlife/DSC0E2177.webp', alt: 'Buck Elk in a field, Great Smoky Mountains National Park, Tennessee, by Cas Medlin' },
      { src: 'wildlife/E42053A0-FAE0-4E0A-9DF3-0484CD9340AC.webp', alt: 'Wild horse grazing with flowers in the foreground, Cape Lookout, North Carolina, by Cas Medlin' },
      { src: 'wildlife/F193C2C9-02D6-45D8-ACB8-600F5EED75CF2025-07-24_12-38-13_132.webp', alt: ' Dalls porpoise in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'wildlife/IMG_0316.webp', alt: 'Fawn in a forest in Lake Norman State Park, North Carolina, by Cas Medlin' },
      { src: 'wildlife/owl.webp', alt: 'Barred owl perched on branch surrounded by green leaves including in the foreground, Irdell County, North Carolina, by Cas Medlin' },
    ],
  },
  {
    url: '/landscapes',
    images: [
      { src: 'landscapes/2023-08-12_17-10-21_419.webp', alt: 'A river flowing into the Atlantic Ocean with trees along the banks in Acadia National Park, Maine, by Cas Medlin' },
      { src: 'landscapes/2023-08-12_17-21-57_418.webp', alt: 'A barn in the edge on a forest on the outskirts of Acadia National Park, Maine, by Cas Medlin' },
      { src: 'landscapes/2023-08-12_18-18-25_343.webp', alt: 'Bass Harbor Head Lighthouse at sunset overlooking the Atlantic Ocean along the cliffside in Acadia National Park, Maine, by Cas Medlin' },
      { src: 'landscapes/2025-07-22_10-18-30_806.webp', alt: 'Mountains with snow-capped peaks right below where denali would be if it were visible in Denali State Park, Alaska, by Cas Medlin' },
      { src: '2025-07-23_21-02-21_091.webp', alt: 'Lupine flowers on rolling hills with snow-covered peaks in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'landscapes/2025-09-11_19-39-21_733.webp', alt: 'Overlooking a cliff with a Misty mountain range at dusk, by Cas Medlin' },
      { src: 'landscapes/C0A118B3-8543-455A-8688-D4D056F13704DSC07868.webp', alt: 'Cape Lookout lighthouse shot from an adjacent island across the water, by Cas Medlin' },
      { src: 'landscapes/D5D8D35C-E227-46DA-9653-16C6219CCA3FDSC01500b Large.webp', alt: 'Upward view through a crack in Providence Canyon State Park, Georgia, by Cas Medlin' },
      { src: 'landscapes/DSC00278.webp', alt: 'Looking over the edge of a cliff with the sea, rocks, and trees below with flowers along the cliffside in Acadia National Park, Maine, by Cas Medlin' },
      { src: 'landscapes/DSC00653.webp', alt: 'Great view of Katahdin with forest and fields in front of the mountain in Mount Katahdin National Monument, Maine, by Cas Medlin' },
      { src: 'landscapes/DSC06626.webp', alt: 'Exit Glacier as see from the lower part of the Harding Icefield Trial in Kenai Fjords National Park, Alaska, by Cas Medlin' },
      { src: 'landscapes/DSC03284.webp', alt: 'Camera pointed straight up at the sky with pine trees in the foreground and the sky in the background, by Cas Medlin' },
      { src: 'landscapes/DSC03490.webp', alt: 'Mountains of Alaska with a river flowing benath them with fireweed along the banks, by Cas Medlin' },
      { src: 'landscapes/DSC04976.webp', alt: 'A mayapple flower in bloom in the forest of Iredell County, NC, by Cas Medlin' },
      { src: 'landscapes/DSC05807 2.webp', alt: 'A house in the Independence Gold Mine at Hatcher Pass surrounded by mountains, Alaska, by Cas Medlin' },
      { src: 'landscapes/DSC05995.webp', alt: 'The Alaskan Railroad in Seward alaska with snow cap peaks in the background., by Cas Medlin' },
      { src: 'landscapes/DSC06507.webp', alt: 'Lupines flowers in bloom light by the sun from the side with hill in the background in ALaska, Cas Medlin' },
      { src: 'landscapes/DSC08025.webp', alt: 'Cape Lookout lighthouse at sunset with the light illuminated, by Cas Medlin' },
      { src: 'landscapes/DSC08176.webp', alt: 'Cape Lookout lighthouse seen through pine trees, by Cas Medlin' },
      { src: 'landscapes/DSC09558.webp', alt: 'A cliff view with tree on top and the ocean below shot in Acadia National Park, Maine, by Cas Medlin' },
    ],
  },
  {
    url: '/architecture',
    images: [
      { src: 'Architecture/23-08-13 10-50-37 0722.webp', alt: 'Interior of restaurant dining room with wooden chairs and tables, shot in Maine, by Cas Medlin' },
      { src: 'Architecture/DSC00323.webp', alt: 'Blue coastal house with garden and chimney, by Cas Medlin' },
      { src: 'Architecture/DSC03332.webp', alt: 'Charlotte skyline on hazy day shot on Rocky face mountain, by Cas Medlin' },
      { src: 'Architecture/DSC04725 Large.webp', alt: 'Brick tunnel with arched ceiling (Blue Ridge parkway tunnel, VA), by Cas Medlin' },
      { src: 'hCydvjybRh-HUghO949Ufw.webp', alt: 'Interior of restaurant with diamond-patterned windows, by Cas Medlin' },
      { src: 'Architecture/DSC02456.webp', alt: 'Modern building exterior with vertical windows and rooftop garden, by Cas Medlin' },
      { src: 'Architecture/DSC08754 3.webp', alt: 'Circular skylight with red and white curved walls, by Cas Medlin' },
      { src: 'Architecture/July 22 CAS_0984(1).webp', alt: 'Industrial ceiling with white steel trusses and glass skylights, by Cas Medlin' },
    ],
  },
  {
    url: '/astrophotography',
    images: [
      { src: 'astrophotography/2025-05-22_03-30-35_454.webp', alt: 'Milky Way over Cape Lookout, North Carolina by Cas Medlin' },
      { src: 'astrophotography/23-08-14 23-09-40 0690.webp', alt: 'Star over Yurt in Maine by Cas Medlin' },
      { src: 'astrophotography/294518D8-40EC-4C93-B49D-5A4BF14A0BD5DSC00146b.webp', alt: 'Red and Green Aurora borealis over Iredell County, NC by Cas Medlin' },
      { src: 'astrophotography/2A5F4959-4464-4343-B76B-69D393E8F9D12024-08-10_21-26-04_924.webp', alt: 'Milky Way over Shenandoah National Park by Cas Medlin' },
      { src: 'astrophotography/DSC03667.webp', alt: 'Pink Aurora borealis over Iredell County, NC by Cas Medlin' },
      { src: 'astrophotography/02D171D5-53B9-4A93-933B-8C2A38049169.webp', alt: 'Star trails over the Blue Ridge Mountains by Cas Medlin' },
      { src: 'astrophotography/StarStaX_DSC03647b-DSC03706_lighten.webp', alt: 'Star trails Pink Aurora borealis over Iredell County, NC by Cas Medlin' },
      { src: 'astrophotography/2024-08-31_21-26-16_900.webp', alt: 'Milky Way over OBX, NC by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design',
    images: [
      { src: 'graphic-design/capture-map-brochure/brochure1.webp', alt: 'Capture Map brochure design by Cas Medlin' },
      { src: 'graphic-design/art-crawl/preview.webp', alt: 'Maine Art Crawl poster wall mockup by Cas Medlin' },
      { src: 'graphic-design/can-label/can.webp', alt: 'Fire roasted corn can label design by Cas Medlin' },
      { src: 'graphic-design/summer-maine/hero.webp', alt: 'Summer in Maine booklet mockup display by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/hero.webp', alt: 'Yeti Dispatch magazine hero image by Cas Medlin' },
      { src: 'graphic-design/menu/mockup.webp', alt: 'Fusion Bowl menu mockup display by Cas Medlin' },
      { src: 'graphic-design/phil-robertson/ipad-mockup.webp', alt: 'Phil Robertson magazine spread mockup on iPad by Cas Medlin' },
      { src: 'graphic-design/for-king-country/vinyl.webp', alt: 'For King and Country vinyl packaging by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/preview.webp', alt: 'How-to guide brochure cover by Cas Medlin' },
      { src: 'graphic-design/flyer/flyer.webp', alt: 'Daylight Donuts app flyer design by Cas Medlin' },
      { src: 'graphic-design/book-cover/preview.webp', alt: 'Book cover design for Rest & War by Ben Stuart by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/capture-map-brochure',
    images: [
      { src: 'graphic-design/capture-map-brochure/brochure1.webp', alt: 'Capture Map brochure front side by Cas Medlin' },
      { src: 'graphic-design/capture-map-brochure/brochure2.webp', alt: 'Capture Map brochure back side by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/art-crawl-poster',
    images: [
      { src: 'graphic-design/art-crawl/preview.webp', alt: 'Maine Art Crawl poster wall mockup by Cas Medlin' },
      { src: 'graphic-design/art-crawl/poster.webp', alt: 'Maine Art Crawl poster design by Cas Medlin' },
      { src: 'graphic-design/art-crawl/alt.webp', alt: 'Alt Maine Art Crawl poster by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/can-label',
    images: [
      { src: 'graphic-design/can-label/can.webp', alt: 'Fire roasted corn can label design by Cas Medlin' },
      { src: 'graphic-design/can-label/label.webp', alt: 'Fire roasted corn label pattern by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/summer-maine',
    images: [
      { src: 'graphic-design/summer-maine/hero.webp', alt: 'Summer in Maine booklet mockup by Cas Medlin' },
      { src: 'graphic-design/summer-maine/GRD155midtermCMedlin2nd.webp', alt: 'Summer in Maine cover by Cas Medlin' },
      { src: 'graphic-design/summer-maine/GRD155midtermCMedlin2nd2.webp', alt: 'Great drives in Maine by Cas Medlin' },
      { src: 'graphic-design/summer-maine/GRD155midtermCMedlin2nd3.webp', alt: 'Trails spread by Cas Medlin' },
      { src: 'graphic-design/summer-maine/GRD155midtermCMedlin2nd4.webp', alt: 'Wildlife spread by Cas Medlin' },
      { src: 'graphic-design/summer-maine/GRD155midtermCMedlin2nd5.webp', alt: 'Lodging spread by Cas Medlin' },
      { src: 'graphic-design/summer-maine/GRD155midtermCMedlin2nd6.webp', alt: 'Back cover by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/yeti-mag',
    images: [
      { src: 'graphic-design/yeti-mag/hero.webp', alt: 'Yeti Dispatch magazine mockup by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/yeti1.webp', alt: 'Yeti Dispatch magazine cover by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/2.webp', alt: 'Table of contents by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/3.webp', alt: 'Hero page by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/4.webp', alt: 'Packing list by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/5.webp', alt: 'Advertised bottles by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/6.webp', alt: 'Leo Houlding story by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/7.webp', alt: 'Leo Houlding continued by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/8.webp', alt: 'Climbing gear by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/9.webp', alt: 'Family hiking by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/10.webp', alt: 'Mountain pictures by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/11.webp', alt: 'Family hikes by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/12.webp', alt: 'Stackable collection by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/13.webp', alt: 'Camping on public land by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/14.webp', alt: 'Northern Rockies camping by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/15.webp', alt: 'Beach camping by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/16.webp', alt: 'Texas river by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/17.webp', alt: 'Island camping by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/18.webp', alt: 'Stargazing by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/19.webp', alt: 'Surfing by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/20.webp', alt: 'Surfing improvement by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/21.webp', alt: 'Shareable collection by Cas Medlin' },
      { src: 'graphic-design/yeti-mag/page_42.webp', alt: 'Back cover by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/fusion-bowl-menu',
    images: [
      { src: 'graphic-design/menu/mockup.webp', alt: 'Fusion Bowl menu mockup by Cas Medlin' },
      { src: 'graphic-design/menu/Menu.webp', alt: 'Fusion Bowl menu by Cas Medlin' },
      { src: 'graphic-design/menu/Menu2.webp', alt: 'Fusion Bowl menu page 2 by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/phil-robertson',
    images: [
      { src: 'graphic-design/phil-robertson/ipad-mockup.webp', alt: 'Phil Robertson spread on iPad by Cas Medlin' },
      { src: 'graphic-design/phil-robertson/spread.webp', alt: 'Phil Robertson magazine spread by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/for-king-country',
    images: [
      { src: 'graphic-design/for-king-country/vinyl.webp', alt: 'For King and Country vinyl by Cas Medlin' },
      { src: 'graphic-design/for-king-country/album-cover.webp', alt: 'Album cover by Cas Medlin' },
      { src: 'graphic-design/for-king-country/cover2.webp', alt: 'Interior cover by Cas Medlin' },
      { src: 'graphic-design/for-king-country/cover3.webp', alt: 'Back cover by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet1.webp', alt: 'Lyric booklet by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet2.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet3.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet4.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet5.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet6.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet7.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet8.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet9.webp', alt: 'Lyric booklet page by Cas Medlin' },
      { src: 'graphic-design/for-king-country/booklet10.webp', alt: 'Lyric booklet page by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/how-to-guide',
    images: [
      { src: 'graphic-design/how-to-guide/preview.webp', alt: 'How-to guide cover by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide1.webp', alt: 'Beginners page by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide2.webp', alt: 'Gear section by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide3.webp', alt: 'Backpack checklist by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide4.webp', alt: 'Testing section by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide5.webp', alt: 'Trail photos by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide6.webp', alt: 'Camping info by Cas Medlin' },
      { src: 'graphic-design/how-to-guide/guide7.webp', alt: 'Additional content by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/flyer-design',
    images: [
      { src: 'graphic-design/flyer/flyer.webp', alt: 'Daylight Donuts flyer design by Cas Medlin' },
      { src: 'graphic-design/flyer/inclass15.webp', alt: 'Daylight Donuts flyer variation by Cas Medlin' },
    ],
  },
  {
    url: '/graphic-design/book-cover',
    images: [
      { src: 'graphic-design/book-cover/preview.webp', alt: 'Rest & War book cover by Cas Medlin' },
      { src: 'graphic-design/book-cover/cover1.webp', alt: 'Book front design by Cas Medlin' },
      { src: 'graphic-design/book-cover/cover2.webp', alt: 'Book back design by Cas Medlin' },
    ],
  },
  {
    url: '/about',
    images: [

    ],
  },
  {
    url: '/privacy-policy',
    images: [

    ],
  },
  {
    url: '/sitemap',
    images: [

    ],
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `
  <url>
    <loc>${site}${page.url}</loc>
    ${page.images.map(img => `
    <image:image>
      <image:loc>${site}${urlEncode(img.src.startsWith('/') ? img.src : '/' + img.src)}</image:loc>
      <image:title>${img.alt}</image:title>
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};