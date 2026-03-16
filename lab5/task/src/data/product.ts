import { Product, Category } from "../app/models/model";

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const products: Product[] = [
  // Smartphones (categoryId: 1)
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra 12/256GB Titanium Black",
    description: "Флагманский смартфон Samsung с динамическим AMOLED 2X дисплеем 6.8\" и мощным процессором Snapdragon 8 Gen 3 для мобильных устройств. Оснащён четырёхкамерной системой с 200 МП основным сенсором, 10x оптическим зумом и встроенным стилусом S Pen для точного управления.",
    price: 549000,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h30/he4/84963583590430.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/",
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: "Apple iPhone 16 128GB Black",
    description: "iPhone 16 на чипе A18 Bionic — первый iPhone, созданный для Apple Intelligence. Камерная кнопка даёт мгновенный доступ к функциям камеры, а система 48 МП + 12 МП обеспечивает профессиональное качество фото и видео 4K/60fps.",
    price: 489000,
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/",
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: "Apple iPhone 14 Pro 256GB NanoSIM+eSIM",
    description: "Работой iPhone 14 Pro руководит бионический чип А16. Он состоит из шестиядерного процессора и пятиядерного графического ускорителя. Чип способен выполнять до 17 триллионов операций за одну секунду — справится с самыми сложными задачами.",
    price: 469000,
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0f/hfd/64403477659678.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h48/hf2/64403480936478.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h9c/h54/64403483525150.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h5d/h32/64403486212126.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-nanosim-esim-chernyi-106363265/",
    likes: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 13 Pro 8/256GB Black",
    description: "Смартфон Xiaomi Redmi Note 13 Pro с AMOLED дисплеем 6.67\" 120Hz и тройной камерой 200MP. Snapdragon 7s Gen 2 обеспечивает плавную работу, а аккумулятор 5100 mAh с зарядкой 67W позволяет забыть о розетке.",
    price: 159000,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/84917646688286.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/84917646688286.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p37/p63/64520551.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p8c/p63/64520554.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-8-gb-256-gb-chernyi-115911365/?c=750000000",
    likes: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: "Google Pixel 8 Pro 128GB Obsidian",
    description: "Google Pixel 8 Pro с чипом Tensor G3 и AI-функциями нового поколения. 6.7\" LTPO OLED дисплей 120Hz, тройная камера 50MP с улучшенным ночным режимом и Magic Eraser для редактирования фото.",
    price: 429000,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h3b/h3f/82629916762142.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h3b/h3f/82629916762142.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h10/hae/82629916794910.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/he5/h1d/82629916827678.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/google-pixel-8-pro-128-gb-chernyi-114201876/",
    likes: 0,
    categoryId: 1
  },

  // Laptops (categoryId: 2)
  {
    id: 6,
    name: "Apple MacBook Air 13 M2 8GB/256GB Space Gray",
    description: "MacBook Air с чипом M2 — тончайший MacBook, который Apple когда-либо выпускала: толщина всего 11.3 мм и вес 1.24 кг. Дисплей Liquid Retina 13.6\" с яркостью 500 нит и поддержкой 1 млрд цветов.",
    price: 589000,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/",
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: "ASUS ROG Strix G16 i7-13650HX/RTX 4060/16GB/512GB",
    description: "Игровой ноутбук ASUS ROG Strix G16 с процессором Intel Core i7-13650HX (14 ядер) и видеокартой NVIDIA GeForce RTX 4060 8GB. Дисплей 16\" FHD с частотой 165 Гц создаёт плавную картинку без смазывания.",
    price: 549000,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h09/h88/70303438012446.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hfc/hac/70303439585310.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/",
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: "Lenovo IdeaPad Gaming 3 Ryzen 5 5600H/RTX 3050/16GB",
    description: "Игровой ноутбук Lenovo с процессором AMD Ryzen 5 5600H и видеокартой NVIDIA GeForce RTX 3050. 15.6\" FHD дисплей 120Hz обеспечивает плавный геймплей, а система охлаждения поддерживает стабильную работу.",
    price: 319000,
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h8a/h0c/64201966772254.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h8a/h0c/64201966772254.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h7b/64201966805022.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hb4/hea/64201966837790.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/lenovo-ideapad-gaming-3-15-6-16-gb-ssd-512-gb-dos-82k20176ru-101049326/",
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: "HP Pavilion 15 i5-1235U/8GB/512GB SSD Silver",
    description: "Универсальный ноутбук HP Pavilion 15 с процессором Intel Core i5-1235U для повседневных задач. 15.6\" FHD IPS дисплей, SSD 512GB для быстрой работы и компактный дизайн в металлическом корпусе.",
    price: 279000,
    rating: 4.4,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h3c/h0d/69685152522270.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h3c/h0d/69685152522270.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h51/h7c/69685152555038.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h66/heb/69685152587806.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ur-15-6-8-gb-ssd-512-gb-dos-serebristyi-109088768/",
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: "Dell Inspiron 15 3520 i3-1115G4/8GB/256GB SSD",
    description: "Надёжный ноутбук Dell Inspiron 15 для учёбы и работы. Процессор Intel Core i3-1115G4, 8GB RAM и SSD 256GB обеспечивают быструю работу офисных приложений и веб-сёрфинга.",
    price: 219000,
    rating: 4.3,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0e/h3c/69659088863262.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h0e/h3c/69659088863262.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h23/hab/69659088896030.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h38/h1a/69659088928798.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/dell-inspiron-15-3520-15-6-8-gb-ssd-256-gb-linux-chernyi-108994031/",
    likes: 0,
    categoryId: 2
  },

  // Headphones (categoryId: 3)
  {
    id: 11,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Black",
    description: "Наушники Sony WH-1000XM5 с лучшим в индустрии шумоподавлением на базе двух процессоров и восьми микрофонов. До 30 часов автономной работы, быстрая зарядка 3 минуты = 3 часа прослушивания.",
    price: 189000,
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/",
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: "Apple AirPods Pro 2nd Gen USB-C White",
    description: "AirPods Pro второго поколения с активным шумоподавлением до 2 раз лучше предшественника. Персонализированный пространственный звук с динамическим отслеживанием головы создаёт эффект присутствия.",
    price: 149000,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9f/h65/85037723164702.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h65/85037723164702.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h74/hd4/85037723197470.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h49/h43/85037723230238.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/apple-airpods-pro-2-belyi-117599059/",
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: "JBL Tune 770NC Wireless Over-Ear Blue",
    description: "Беспроводные наушники JBL Tune 770NC с активным шумоподавлением и фирменным JBL звуком. До 70 часов работы без ANC и 44 часа с ANC, быстрая зарядка 5 минут = 3 часа прослушивания.",
    price: 39000,
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/h0b/84634825621534.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h9d/h0b/84634825621534.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h72/h7a/84634825654302.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h47/he9/84634825687070.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-sinii-115954372/",
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: "Samsung Galaxy Buds2 Pro Graphite",
    description: "Премиальные TWS наушники Samsung Galaxy Buds2 Pro с интеллектуальным ANC и Hi-Fi звуком 24bit. IPX7 защита от воды, до 8 часов работы с ANC и бесшовная интеграция с Galaxy устройствами.",
    price: 69000,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0e/h05/64432814325790.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h0e/h05/64432814325790.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h23/h74/64432814358558.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h38/he3/64432814391326.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-chernyi-101574997/",
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: "Xiaomi Redmi Buds 4 Pro Black",
    description: "Наушники Xiaomi Redmi Buds 4 Pro с двойным активным шумоподавлением до 43dB. Dual-драйвер конструкция для детального звука, беспроводная зарядка Qi и до 9 часов работы на одном заряде.",
    price: 29000,
    rating: 4.4,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h6e/h8c/70024733982750.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h6e/h8c/70024733982750.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h43/hfb/70024734015518.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h18/h6a/70024734048286.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-pro-chernyi-109342598/",
    likes: 0,
    categoryId: 3
  },

  // Tablets (categoryId: 4)
  {
    id: 16,
    name: "Apple iPad Pro 12.9\" M2 128GB Wi-Fi Space Gray",
    description: "iPad Pro 12.9\" с чипом M2 и Liquid Retina XDR дисплеем — профессиональный инструмент для творчества. Поддержка Apple Pencil 2 и Magic Keyboard превращают iPad в полноценную мобильную рабочую станцию.",
    price: 729000,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0b/h6e/70150825484318.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h0b/h6e/70150825484318.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h20/hdd/70150825517086.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hf5/h4c/70150825549854.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-109548088/",
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: "Apple iPad Air 5 10.9\" M1 64GB Wi-Fi Space Gray",
    description: "iPad Air на чипе M1 — мощный инструмент для творчества с дисплеем Liquid Retina 10.9\" и поддержкой Apple Pencil 2-го поколения. Производительность уровня ноутбука в компактном корпусе.",
    price: 319000,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h59/hb3/86369746649118.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hf8/h34/86369746714654.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/",
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: "Samsung Galaxy Tab S9 11\" 8GB/128GB Gray",
    description: "Премиальный планшет Samsung Galaxy Tab S9 с Dynamic AMOLED 2X дисплеем 11\" 120Hz. Snapdragon 8 Gen 2 обеспечивает флагманскую производительность, а S Pen в комплекте для творчества и заметок.",
    price: 389000,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h16/h5b/82549644877854.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h16/h5b/82549644877854.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/heb/hca/82549644910622.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hc0/h39/82549644943390.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-wi-fi-11-8-gb-128-gb-seryi-113990867/",
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: "Xiaomi Pad 6 11\" 8GB/256GB Gray",
    description: "Xiaomi Pad 6 с 11\" 2.8K дисплеем 144Hz и Snapdragon 870. Четыре динамика Dolby Atmos для качественного звука, аккумулятор 8840 mAh с зарядкой 33W и поддержка стилуса.",
    price: 189000,
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h4f/hae/80725421154334.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h4f/hae/80725421154334.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h24/h1d/80725421187102.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hf9/h8c/80725421219870.png?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/xiaomi-pad-6-wi-fi-11-8-gb-256-gb-seryi-112852076/",
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: "Lenovo Tab P11 Plus 11\" 4GB/128GB Gray",
    description: "Универсальный планшет Lenovo Tab P11 Plus с 11\" 2K дисплеем и четырьмя динамиками JBL. MediaTek Helio G90T для повседневных задач, аккумулятор 7700 mAh и металлический корпус премиум-класса.",
    price: 129000,
    rating: 4.3,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h91/h52/64273664352286.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h91/h52/64273664352286.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/ha6/hc1/64273664385054.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hbb/h30/64273664417822.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/lenovo-tab-p11-plus-11-4-gb-128-gb-seryi-101163055/",
    likes: 0,
    categoryId: 4
  }
];
