// ─────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'p1', category: 'green-nature', name: 'Rebootat FS 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatFS-1.jpg', caption: 'SUPPORTS HEALTHY DIGESTION Helps your body break down food easily' },
      { type: 'image', src: 'media/green-nature-RebootatFS-2.jpg', caption: 'PROMOTES GUT BALANCE Supports natural intestinal balance' },
    ],
    description: `Greenature Rebootar FS (Fever Shield) – Natural Herbal Wellness Supplement. Experience the benefits of nature with Greenature Rebootar FS (Fever Shield), a premium herbal supplement carefully formulated from a blend of natural herbal ingredients. Designed to support overall wellness, this herbal formula is ideal for individuals looking for a natural way to maintain a healthy and active lifestyle.

Made with high-quality herbal ingredients, Greenature Rebootar FS is recognized for its antioxidant-rich formula and is commonly used to support the body's natural immune function, digestive wellness, detoxification process, and overall vitality. It is produced from carefully selected natural herbs under strict quality standards.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🛡️ Supports Immune Health 🍃 Rich in Natural Antioxidants ❤️ Supports Natural Detoxification 🌱 Supports Healthy Digestion ⚡ Helps Maintain Energy and Vitality ✅ Produced Under Quality Standards.

Ingredients: Greenature Rebootar FS contains a carefully selected blend of natural herbal extracts formulated to support general wellness and the body's natural defenses.

Suggested Use: Adults: Take as directed on the product label or as recommended by a qualified healthcare professional.`,
    shortDesc: 'Greenature Rebootar FS (Fever Shield) – Natural Herbal Wellness Supplement. Experience the benefits of nature.',
  },
  {
    id: 'p2', category: 'green-nature', name: 'Rebootat DD 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatDD-1.jpg', caption: 'It Supports liver, kidney and heart health' },
      { type: 'image', src: 'media/green-nature-RebootatDD-2.jpg', caption: 'Fights infections and Bacteria (including STDs)' },
      { type: 'image', src: 'media/green-nature-RebootatDD-3.jpg', caption: 'lowers blood sugar level and diabetes' },
    ],
    description: `Greenature Rebootar DD – Natural Herbal Wellness Supplement. Experience the power of nature with Greenature Rebootar DD, a premium herbal supplement carefully formulated from a blend of natural herbal ingredients. Designed to support overall wellness, this herbal formula is ideal for individuals seeking a natural addition to their healthy lifestyle.

Made with high-quality herbal ingredients, Greenature Rebootar DD is recognized for its antioxidant-rich formula and is commonly used to support the body's natural detoxification process, digestive wellness, immune function, and overall vitality. Produced from carefully selected natural herbs under strict quality standards, Rebootar DD is formulated to help maintain everyday wellness and healthy body function.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🍃 Supports Natural Detoxification 🛡️ Supports Immune Health ❤️ Supports Liver and Kidney Wellness 🌱 Supports Healthy Digestion ⚡ Helps Maintain Energy and Vitality ✅ Produced Under Quality Standards.

Ingredients: Greenature Rebootar DD contains a carefully selected blend of natural herbal extracts formulated to support the body's natural cleansing process, digestive health, and overall wellness.

Suggested Use: Adults: Take as directed on the product label or as recommended by a qualified healthcare professional.`,
    shortDesc: 'It Reboots your body systems, Renew body organs and Revitalize dead cells. A potent herbal formula for daily detox and total wellness.',
  },
  {
    id: 'p3', category: 'green-nature', name: 'Rebootat CD 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatCD-1.jpg', caption: 'Rebootat CD 750ml – Natural Herbal Wellness Supplement' },
      { type: 'image', src: 'media/green-nature-RebootatCD-2.jpg', caption: 'Supports immune function and overall vitality' },
    ],
    description: `Greenature Rebootar CD – Natural Herbal Wellness Supplement. Experience the benefits of nature with Greenature Rebootar CD, a premium herbal supplement carefully formulated from a blend of natural herbal ingredients. Designed to support overall wellness, this herbal formula is ideal for individuals seeking a natural way to maintain a healthy and active lifestyle.

Made with high-quality herbal ingredients, Greenature Rebootar CD is recognized for its antioxidant-rich formula and is commonly used to support the body's natural immune function, digestive wellness, and overall vitality. Produced from carefully selected natural herbs under strict quality standards, Rebootar CD is formulated to complement a balanced diet and healthy lifestyle.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🛡️ Supports Immune Health ❤️ Rich in Natural Antioxidants 🌱 Supports Healthy Digestion ⚡ Helps Maintain Energy and Vitality 🍃 Supports Overall Body Wellness ✅ Produced Under Quality Standards.

Ingredients: Greenature Rebootar CD contains a carefully selected blend of natural herbal extracts formulated to support immune health, digestive wellness, antioxidant protection, and overall body vitality.

Suggested Use: Adults: Take as directed on the product label or as recommended by a qualified healthcare professional.`,
    shortDesc: 'Greenature Rebootar CD – Natural Herbal Wellness Supplement. Experience the benefits of nature with Greenature Rebootar CD.',
  },
  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – product name "aloe vera Soursop" does not match
    // the previous description which was for an Aloe Vera Soap. Please update.
    id: 'p4', category: 'green-nature', name: 'aloe vera Soursop',
    price: 15000,
    media: [
      { type: 'image', src: 'media/green-nature-soursop-1.jpg', caption: 'Soursop Leaf Tea – 20 biodegradable bags' },
    ],
    description: `Greenature Aloe Vera Soap – Natural Herbal Skincare Soap. Experience the refreshing care of nature with Greenature Aloe Vera Soap, a premium herbal soap enriched with the nourishing properties of Aloe Vera. Carefully formulated to gently cleanse, moisturize, and refresh the skin, this soap is suitable for daily use and all skin types.

Made with high-quality natural ingredients, Greenature Aloe Vera Soap is known for its soothing and hydrating properties. It helps remove dirt, excess oil, and impurities while leaving the skin feeling soft, smooth, and revitalized. Its gentle formula supports healthy-looking skin and promotes a fresh, clean feeling after every wash.

Key Features: 🌿 Enriched with Natural Aloe Vera 💧 Helps Moisturize and Hydrate the Skin 🧼 Gently Cleanses Without Over-Drying ✨ Leaves Skin Soft and Smooth 🌱 Suitable for Daily Use 🌸 Refreshes and Revitalizes the Skin ✅ Suitable for All Skin Types.

Ingredients: Greenature Aloe Vera Soap contains Aloe Vera extract, moisturizing agents, natural plant-based ingredients, cleansing agents, and carefully selected skin-conditioning ingredients.

Suggested Use: Wet the skin with water, lather the soap thoroughly, gently massage onto the face or body, then rinse with clean water. Suitable for everyday use.
`,
    shortDesc: 'Greenature Aloe Vera Soap – Natural Herbal Skincare Soap. Experience the refreshing care of nature with Greenature Aloe Vera Soap.',
  },
  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – previous description contained fabricated/fictional details.
    id: 'p5', category: 'jigsimur', name: 'jigsimur Skin Glow Drops',
    price: 6000, bulkPrice: 5200, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/jigsimur-1.jpg', caption: 'jigsimur Skin Glow Drops – 30ml concentrate' },
      { type: 'image', src: 'media/jigsimur-2.jpg', caption: 'Apply 3 drops to face morning & evening' },
      { type: 'image', src: 'media/jigsimur-3.jpg', caption: 'Contains rosehip, jojoba and sea buckthorn' },
    ],
    description: `Jigsimur Herbal Drink – Natural Herbal Wellness Supplement. Discover the natural goodness of Jigsimur Herbal Drink, a premium herbal supplement carefully formulated from a blend of traditional herbs and natural plant extracts. Designed to support overall wellness, this herbal drink is ideal for individuals seeking a natural addition to a healthy lifestyle.

Made with high-quality herbal ingredients, Jigsimur Herbal Drink is widely recognized for its refreshing herbal formula and is commonly used to support healthy digestion, natural detoxification, immune function, and overall body vitality. Its carefully selected herbal blend helps promote everyday wellness while complementing a balanced diet and active lifestyle.

Key Features: 🌿 Premium Herbal Formula 💪 Supports General Wellness 🍃 Supports Natural Detoxification 🛡️ Supports Immune Health ❤️ Promotes Healthy Digestion 🌱 Rich in Natural Plant Extracts ⚡ Helps Maintain Energy and Vitality ✅ Suitable for Daily Wellness Support.

Ingredients: Jigsimur Herbal Drink contains a proprietary blend of natural herbs and plant extracts, including carefully selected traditional herbal ingredients known for supporting digestive health, antioxidant protection, and overall wellness.

Suggested Use: Adults: Take the recommended amount as indicated on the product label or as advised by a qualified healthcare professional. Shake well before use.
`,
    shortDesc: 'igsimur Herbal Drink – Natural Herbal Wellness Supplement..',
  },
  {
    id: 'p6', category: 'jinja', name: 'jinja herbal extract 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,  // ✅ FIXED: bulk was ₦27,000 (higher than single price!)
    media: [
      { type: 'image', src: 'media/jinja-picture-1.jpg', caption: 'your future will thank you' },
      { type: 'image', src: 'media/jinja-picture-2.jpg', caption: '100% safe, effective and no side effects' },
      { type: 'image', src: 'media/jinja-picture-3.jpg', caption: 'Clinically tested and approved' },
    ],
    description: `Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract, a premium herbal supplement carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural addition to their healthy lifestyle.

Made with high-quality herbal ingredients, Jinja Herbal Extract is widely recognized for its antioxidant-rich formula and is commonly used to support the body's natural detoxification process, immune function, digestive wellness, and general vitality. It is produced from 100% natural herbs and is NAFDAC registered.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🛡️ Rich in Natural Antioxidants 🍃 Supports Natural Detoxification ❤️ Supports Liver and Kidney Wellness 🌱 Helps Maintain a Healthy Lifestyle ✅ NAFDAC Registered.

Ingredients: Jinja Herbal Extract contains a blend of traditional African herbs, including Carpolobia alba, Cnestis ferruginea, Heliotropium indicum, and other carefully selected herbal extracts.

Suggested Use: Adults: Take 20–30 ml, three times daily, or as directed by a qualified healthcare professional.`,
    shortDesc: 'Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract.',
  },
  {
    id: 'p7', category: 'jinja', name: 'jinja herbal extract 450ml',
    price: 7000, bulkPrice: 6500, bulkQty: 2,  // ✅ FIXED: bulk was ₦13,000 (higher than single price!)
    media: [
      { type: 'image', src: 'media/jinja-picture-1.jpg', caption: 'your future will thank you' },
      { type: 'image', src: 'media/jinja-picture-2.jpg', caption: '100% safe, effective and no side effects' },
      { type: 'image', src: 'media/jinja-small-picture-3.jpg', caption: 'Clinically tested and approved' },
    ],
    description: `Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract, a premium herbal supplement carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural addition to their healthy lifestyle.

Made with high-quality herbal ingredients, Jinja Herbal Extract is widely recognized for its antioxidant-rich formula and is commonly used to support the body's natural detoxification process, immune function, digestive wellness, and general vitality. It is produced from 100% natural herbs and is NAFDAC registered.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🛡️ Rich in Natural Antioxidants 🍃 Supports Natural Detoxification ❤️ Supports Liver and Kidney Wellness 🌱 Helps Maintain a Healthy Lifestyle ✅ NAFDAC Registered.

Ingredients: Jinja Herbal Extract contains a blend of traditional African herbs, including Carpolobia alba, Cnestis ferruginea, Heliotropium indicum, and other carefully selected herbal extracts.

Suggested Use: Adults: Take 20–30 ml, three times daily, or as directed by a qualified healthcare professional.`,
    shortDesc: 'Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract.',
  },
	 {
    id: 'p8', category: 'Italian-bodywash', name: 'muschio bianco bodywash ',
    price: 7000,
    media: [
      { type: 'image', src: 'media/muschio-bianco.jpg', caption: 'your future will thank you' },
    ],
    description: `italian muschio bianco bodywash – Experience the power of nature with italian muschio bianco bodywash, a premium bodywash carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural and smooth bathing experience.`,
    shortDesc: 'italian muschio bianco bodywash – Experience the power of nature with italian muschio',
  },
    {
    id: 'p9', category: 'Italian-bodywash', name: 'muschio bianco bodywash ',
    price: 7000,
    media: [
      { type: 'image', src: 'media/muschio-bianco-pink.jpg', caption: 'your future will thank you' },
    ],
    description: `italian muschio bianco bodywash – Experience the power of nature with italian muschio bianco bodywash, a premium bodywash carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural and smooth bathing experience.`,
    shortDesc: 'italian muschio bianco bodywash – Experience the power of nature with italian muschio',
  },
		 {
    id: 'p9', category: 'Italian-bodywash', name: 'muschio bianco bodywash ',
    price: 7000,
    media: [
      { type: 'image', src: 'media/lacklon-bianco.jpg', caption: 'your future will thank you' },
    ],
    description: `italian lacklon bianco bodywash – Experience the power of nature with italian lacklon bianco bodywash, a premium bodywash carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural and smooth bathing experience.`,
    shortDesc: 'italian lacklon bianco bodywash – Experience the power of nature with italian lacklon',
  },
];