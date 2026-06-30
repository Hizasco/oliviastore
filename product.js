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
    description: `Greenature Rebootar FS (Fever Shield) – Natural Herbal. Experience the benefits of nature, it destroys malaria parasites and typhoid fever in 5 days.

 INGREDIENTS
 Zingiber Offcinale
Aloe Barbadensis Miller
Curcuma Longa
Treated water.

 FUNCTIONS
✅ Fight malaria
✅ Diarrhoea solution
✅ Regulate Cholesterol
✅ Reduces body pain
✅ Provides relief for typhoid fever
✅ Antibacterial properties
✅ Relieves cold, cough, catarrh symptoms`,
    shortDesc: 'Greenature Rebootar FS (Fever Shield) – Natural Herbal. Experience the benefits of nature, it destroys malaria parasites and typhoid fever in 5 days.',
  },
  {
    id: 'p2', category: 'green-nature', name: 'Rebootat DD 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatDD-1.jpg', caption: 'It Supports liver, kidney and heart health' },
			{ type: 'image', src: 'media/green-nature-RebootatDD-2.jpg', caption: 'Fights infections and Bacteria (including STDs)' },
      { type: 'image', src: 'media/green-nature-RebootatDD-3.jpg', caption: 'Fights infections and Bacteria (including STDs)' },
      { type: 'image', src: 'media/green-nature-RebootatDD-4.jpg', caption: 'lowers blood sugar level and diabetes' },
    ],
    description: `Rebootar Bitters -
		It Reboots your body systems, Renew body organs and Revitalize dead cells. A potent herbal formula for daily detox and total wellness.

 Ingredients

Citrus Aurantifolia
Medicago Sativa
Arctium Lappa
Citrus Lanatus
Gingko
Orthosiphon.
Bacopa Monnieri
Withania Somnifera
Treated water.

 Functions
 it detoxifies, renews and rejuvenates your body organs and also defends your body from sickness and diseases.
 Benefits
✅ Natural Detoxifier
✅ Boost Immune System
✅ Rich in Antioxidants
✅ Promotes Kidney and Liver Health
✅ Fights; bacteria,fungi,viral , parasite disease & stds
✅ Regulates Cholesterol
✅ Normalizes Blood Pressure
✅ Stabilize Blood Sugar Level
✅ Fights Cancer
✅ Helps with Weight Loss
✅ Aids Digestion
✅ Fights Inflamation
✅ Boost Male and Female Fertility
✅ Arthrites Relief
✅ Helps Cough
✅ Eases Asthma and Allergies
✅ Improves Vision
✅ deals with ulcer
✅ Hepatoprotective
✅ Good for the treatment of Pile
✅ Helps in the treatment of Stroke.
✅ Help in the treatment of Fibroids
✅ Help in Cleaning our system from Toxins-`,
    shortDesc: 'It Reboots your body systems, Renew body organs and Revitalize dead cells. A potent herbal formula for daily detox and total wellness.',
  },
  {
    id: 'p3', category: 'green-nature', name: 'Rebootat CD 750ml',
    price: 25000,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatCD-1.jpg', caption: 'Rebootat CD 750ml – Natural Herbal Wellness Supplement' },
			{ type: 'image', src: 'media/green-nature-RebootatCD-2.jpg', caption: 'Rebootat CD 750ml – Natural Herbal Wellness Supplement' },
      { type: 'image', src: 'media/green-nature-RebootatCD-3.jpg', caption: 'Supports immune function and overall vitality' },
    ],
    description: `💓  REBOOTAR CARDIO — Greenature’s breakthrough formula for Cardiovascular & Blood Health.

 INGREDIENTS
 Justicia Xamea
Salvia Miltiorrhiza
Amomum Testaceum
Treated water.

 FUNCTIONS
It’s not just another supplement…
✅ It fights hypertension & high cholesterol
✅ Revives blood circulation & arteries
✅ Supports the heart, liver, and kidney
✅ It helps to alleviate Migraine symptoms.
✅ Boosts blood cells for anemia & sickle cell warriors

💥 Real results. Real testimonies. Real transformation!`,
    shortDesc: '💓  REBOOTAR CARDIO — Greenature’s breakthrough formula for Cardiovascular & Blood Health.',
  },
  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – product name "aloe vera Soursop" does not match
    // the previous description which was for an Aloe Vera Soap. Please update.
    id: 'p4', category: 'green-nature', name: 'aloe vera Soursop',
    price: 15000,
    media: [
      { type: 'image', src: 'media/green-nature-soursop-1.jpg', caption: 'Soursop Leaf Tea – 20 biodegradable bags' },
    ],
    description: `💚  REBOOTAR ALOE-VERA SOAP — the herbal skincare formula that transforms dull, infected, or damaged skin into a smooth, radiant glow.

 INGREDIENTS
Essential oil
Aloe vera
Shea butter
Collagen
Grape seed oil

 FUNCTIONS
🌿 Packed with antibacterial and rejuvenating herbs, it helps:
✅ Clear acne, eczema & rashes
✅ Fade stretch marks & sunburn
✅ Restore smooth, even-toned skin
✅ Support total skin renewal naturally

🔥 Visible results in days — trusted by wellness leaders across Africa!

💥 Don’t just sell beauty, lead the skin transformation movement with Greenature!
This is your chance to be among the first distributors & partners in the fast-moving herbal skincare line.`,
    shortDesc: '💚  REBOOTAR ALOE-VERA SOAP — the herbal skincare formula that transforms dull, infected, or damaged skin into a smooth, radiant glow..',
  },
  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – previous description contained fabricated/fictional details.
    id: 'p5', category: 'faforlife', name: 'faforlife toothpaste',
    price: 6000,
    media: [
      { type: 'image', src: 'media/faforlife-toothpaste-1.jpg', caption: 'faforlife Toothpaste' },
      { type: 'image', src: 'media/faforlife-toothpaste-2.jpg', caption: 'Fresh breath, healthy gums' },
      { type: 'image', src: 'media/faforlife-toothpaste-3.jpg', caption: 'Natural ingredients, no harsh chemicals' },
    ],
    description: ` FaforLife Herbal Toothpaste – Healthy Teeth, Fresh Breath, Confident Smile

Experience complete oral care with FaforLife Herbal Toothpaste, a premium plant-based toothpaste specially formulated to promote healthier teeth and gums. Made with carefully selected natural ingredients, it helps remove plaque, fight bad breath, and keep your mouth feeling fresh all day.

Its gentle yet effective formula supports daily oral hygiene by helping to reduce cavities, strengthen gums, and maintain naturally whiter teeth without harsh chemicals. Suitable for adults and children, FaforLife Herbal Toothpaste is the perfect choice for anyone seeking a healthier, more natural approach to dental care.

 Key Benefits

 Helps fight bad breath for long-lasting freshness
 Supports healthy gums and strong teeth
 Assists in plaque removal and cavity prevention
 Helps maintain cleaner, brighter-looking teeth
 Gentle on teeth and gums for everyday use
 Made with natural, plant-based ingredients

 How to Use

Brush thoroughly with FaforLife Herbal Toothpaste for at least two minutes, twice daily, or as directed by your dental professional. For best results, use consistently as part of your daily oral care routine.

Why Choose FaforLife Herbal Toothpaste?

A healthy smile starts with proper oral care. FaforLife Herbal Toothpaste combines natural ingredients with effective cleaning power to help you enjoy fresher breath, healthier gums, and cleaner teeth every day. It's the ideal toothpaste for individuals and families who value natural wellness and lasting oral hygiene.
`,
    shortDesc: 'FaforLife Herbal Toothpaste – Healthy Teeth, Fresh Breath, Confident Smile',
  },
	  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – previous description contained fabricated/fictional details.
    id: 'p9', category: 'faforlife', name: 'faforlife stem cell',
    price: 6000,
    media: [
      { type: 'image', src: 'media/faforlife-stemcell-1.jpg', caption: 'faforlife stem cell' },
      { type: 'image', src: 'media/faforlife-stemcell-2.jpg', caption: 'Support your body\'s natural wellness' },
      { type: 'image', src: 'media/faforlife-stemcell-3.jpg', caption: 'Natural ingredients, no harsh chemicals' },
    ],
    description: ` FaforLife Stem Cell Supplement – Support Your Body's Natural Wellness

FaforLife Stem Cell is a premium dietary supplement formulated with a blend of carefully selected natural ingredients designed to support overall health and well-being. It is created to complement a healthy lifestyle by helping the body maintain vitality, energy, and optimal daily function.

With its unique herbal formulation, FaforLife Stem Cell is intended to nourish the body at the cellular level, support the immune system, and promote general wellness. Whether you're looking to maintain your health, stay active, or support your body's natural recovery processes, this supplement is a convenient addition to your daily routine.

 Key Benefits

 Supports overall health and wellness
 Helps maintain a healthy immune system
 Promotes natural energy and vitality
 Supports healthy cellular function
 Formulated with carefully selected natural ingredients
 Suitable for everyday wellness support

 How to Use

Take the recommended serving as indicated on the product label or as advised by your healthcare professional. For best results, use consistently alongside a balanced diet and healthy lifestyle.

 Why Choose FaforLife Stem Cell?

Your body performs millions of cellular processes every day, and proper nutrition plays an important role in supporting those natural functions. FaforLife Stem Cell is designed to complement your daily wellness routine with a thoughtfully crafted herbal formula that helps you feel your best and maintain an active, healthy lifestyle.

Disclaimer: This product is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. Always consult a healthcare professional before use if you are pregnant, nursing, taking medication, or have an existing medical condition.
`,
    shortDesc: 'FaforLife Stem Cell Supplement – Support Your Body\'s Natural Wellness FaforLife Stem Cell is a premium dietary supplement formulated with a blend of ...',
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
    price: 11000,
    media: [
      { type: 'image', src: 'media/muschio-bianco.jpg', caption: 'your future will thank you' },
    ],
    description: `italian muschio bianco bodywash – Experience the power of nature with italian muschio bianco bodywash, a premium bodywash carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural and smooth bathing experience.`,
    shortDesc: 'italian muschio bianco bodywash – Experience the power of nature with italian muschio',
  },
    {
    id: 'p9', category: 'Italian-bodywash', name: 'muschio bianco bodywash ',
    price: 11000,
    media: [
      { type: 'image', src: 'media/muschio-bianco-pink.jpg', caption: 'your future will thank you' },
    ],
    description: `italian muschio bianco bodywash – Experience the power of nature with italian muschio bianco bodywash, a premium bodywash carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural and smooth bathing experience.`,
    shortDesc: 'italian muschio bianco bodywash – Experience the power of nature with italian muschio',
  },
		 {
    id: 'p9', category: 'Italian-bodywash', name: 'muschio bianco bodywash ',
    price: 11000,
    media: [
      { type: 'image', src: 'media/lacklon-bianco.jpg', caption: 'your future will thank you' },
    ],
    description: `italian lacklon bianco bodywash – Experience the power of nature with italian lacklon bianco bodywash, a premium bodywash carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural and smooth bathing experience.`,
    shortDesc: 'italian lacklon bianco bodywash – Experience the power of nature with italian lacklon',
  },
];
