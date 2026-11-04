// ======================================================
// هاد الملف الوحيد اللي بتعدليه لكل كافيه جديد
// الصور بـ public/images
// ======================================================

export const cafe = {
  name: "ع الطريق",
  nameEn: "Coffee House",
  tagline: "معك بكل طريق",
  intro: "قهوتك ومشروبك المفضل جاهزين وانت ماشي، عشان ما يوقف يومك.",
  heroImage: "/images/mascot.png",
  storyImage: "/images/on-the-road.jpg",

  // عبّيهم بالمعلومات الحقيقية. إذا فاضيين ما بيظهروا
  address: "",
  hours: [],

  whatsapp: "",
  instagram: "https://www.instagram.com/3a_taree2/",
  currency: "₪",
};

// كلمات الشريط المتحرك
export const marquee = ["آيس لاتيه", "كراميل", "إسبريسو", "آيس تي خوخ", "باشن فروت", "سبانش لاتيه", "معك بكل طريق"];

// icon: cup | pastry | cake | leaf
// image (اختياري) لكل صنف
// الأسعار والأصناف تقريبية للعرض، بدلوها بالمنيو الحقيقي
export const categories = [
  {
    id: "cold",
    title: "مشروبات باردة",
    icon: "leaf",
    items: [
      { name: "آيس كراميل", nameEn: "Iced Caramel", image: "/images/caramel.jpg", description: "إسبريسو وحليب مع صوص الكراميل وكريمة", price: 16, tag: "الأكثر طلباً" },
      { name: "آيس لاتيه", nameEn: "Iced Latte", image: "/images/iced-latte.jpg", description: "دبل شوت إسبريسو مع حليب بارد على ثلج", price: 14 },
      { name: "آيس تي خوخ", nameEn: "Peach Iced Tea", image: "/images/peach-tea.jpg", description: "شاي مثلج بالخوخ وقطع فواكه", price: 12 },
      { name: "باشن فروت", nameEn: "Passion Fruit", image: "/images/passion-fruit.jpg", description: "مشروب منعش بفاكهة الباشن والمانجا", price: 14, tag: "جديد" },
    ],
  },
  {
    id: "hot",
    title: "مشروبات ساخنة",
    icon: "cup",
    items: [
      { name: "إسبريسو", nameEn: "Espresso", description: "شوت مركّز من بن مختص", price: 8 },
      { name: "سبانش لاتيه", nameEn: "Spanish Latte", description: "إسبريسو مع حليب مكثف محلّى", price: 15 },
      { name: "كابتشينو", nameEn: "Cappuccino", description: "إسبريسو وحليب ورغوة كثيفة", price: 13 },
      { name: "قهوة عربية", nameEn: "Arabic Coffee", description: "بالهيل، طازة على الطريق", price: 10 },
    ],
  },
  {
    id: "bakery",
    title: "سناك",
    icon: "pastry",
    items: [
      { name: "كرواسون", nameEn: "Croissant", description: "زبدة أو زعتر", price: 9 },
      { name: "كوكيز", nameEn: "Cookie", description: "شوكولاتة داكنة", price: 7 },
      { name: "كيك", nameEn: "Cake Slice", description: "قطعة كيك يومية", price: 12 },
    ],
  },
];
