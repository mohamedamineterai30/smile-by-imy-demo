// Cliente : Smile by Imy (@smilebyimy). Source : profil Instagram public, 12 nov 2026.
// Machi dentiste : technicienne en hygiène bucco-dentaire, blanchiment, bijoux dentaires, formations.
// "A CONFIRMER" = ma3louma ma l9inahach f profil, lazem tji men 3andha.
globalThis.CLINIC = {
  demo: true,
  accessKey: "sbi-41aeacb7",
  style: "cristal",
  lang: "fr",
  name: "Smile by Imy",
  short: "💎",
  specialty: { fr: "Blanchiment & bijoux dentaires", ar: "تبييض ومجوهرات الأسنان" },
  city: { fr: "Birkhadem, Alger", ar: "بئر خادم، الجزائر" },
  tagline: { fr: "Un sourire qui brille, sans douleur.", ar: "ابتسامة تلمع، بدون ألم." },
  intro: {
    fr: "Blanchiment dentaire bio, bijoux dentaires et formations avec Imy. Choisissez votre séance et votre heure, tout est confirmé par WhatsApp.",
    ar: "تبييض أسنان طبيعي، مجوهرات الأسنان ودورات تكوينية مع إيمي. اختاري حصتك وساعتك، والتأكيد عبر واتساب.",
  },
  // Fikra khassa : 3 choix kbar, kima les 3 activités ta3ha
  needs: [
    { label: { fr: "Je veux des dents plus blanches", ar: "أريد أسنانا أكثر بياضا" }, service: "blanchiment" },
    { label: { fr: "Je veux un bijou dentaire", ar: "أريد جوهرة للأسنان" }, service: "bijou" },
    { label: { fr: "Je veux me former", ar: "أريد التكوين" }, service: "formation" },
  ],
  // Klam mokhtalef 3la cabinet dentaire
  text: {
    fr: { navSoins: "Prestations", navCabinet: "Imy", soinsTitle: "Les prestations", s1: "Choisissez la prestation", e_service: "Choisissez une prestation.", fine: "Réservation gratuite. Paiement sur place." },
    ar: { navSoins: "الخدمات", navCabinet: "إيمي", soinsTitle: "الخدمات", s1: "اختاري الخدمة", e_service: "اختاري خدمة.", fine: "الحجز مجاني. الدفع في عين المكان." },
  },
  doctor: {
    name: "Imy",
    title: { fr: "Technicienne en hygiène bucco-dentaire · bijoux dentaires", ar: "تقنية في صحة الفم والأسنان · مجوهرات الأسنان" },
    bio: {
      fr: "Imy pratique le blanchiment dentaire bio, sans douleur (PAP+), pose des bijoux dentaires et forme d'autres praticiennes. Elle reçoit en français, en arabe et en espagnol, et partage ses résultats avec plus de 41 000 abonnés.",
      ar: "إيمي تمارس تبييض الأسنان الطبيعي بدون ألم (+PAP)، تركّب مجوهرات الأسنان وتكوّن ممارسات أخريات. تستقبل بالفرنسية، العربية والإسبانية، وتشارك نتائجها مع أكثر من 41 ألف متابع.",
    },
    photo: "", // A AJOUTER : sa photo, avec son accord
  },
  phone: "0559223257",
  whatsapp: "213559223257", // A CONFIRMER : même numéro sur WhatsApp ?
  instagram: "smilebyimy",
  address: { fr: "Birkhadem, Alger (adresse exacte à confirmer)", ar: "بئر خادم، الجزائر (العنوان الدقيق للتأكيد)" },
  mapsUrl: "", // A CONFIRMER
  theme: { primary: "#16a9c2", dark: "#0b2a33", accent: "#bff3fb" },

  // A CONFIRMER : horaires réels (3andha highlight "Horaires"). 0 = dimanche ... 6 = samedi.
  hours: {
    0: [["10:00", "13:00"], ["14:00", "18:00"]],
    1: [["10:00", "13:00"], ["14:00", "18:00"]],
    2: [["10:00", "13:00"], ["14:00", "18:00"]],
    3: [["10:00", "13:00"], ["14:00", "18:00"]],
    4: [["10:00", "13:00"], ["14:00", "18:00"]],
    5: [],
    6: [["10:00", "14:00"]],
  },
  slotMinutes: 60, // séance = sa3a
  daysAhead: 21,

  services: [
    { id: "blanchiment", name: { fr: "Blanchiment dentaire bio", ar: "تبييض الأسنان الطبيعي" }, desc: { fr: "Sans douleur, formule PAP+. Environ une heure.", ar: "بدون ألم، تركيبة +PAP. حوالي ساعة." } },
    { id: "bijou", name: { fr: "Bijou dentaire", ar: "جوهرة الأسنان" }, desc: { fr: "Un strass posé sur la dent, sans l'abîmer.", ar: "حجر لامع على السن، بدون إتلافه." } },
    { id: "formation", name: { fr: "Formation", ar: "تكوين" }, desc: { fr: "Apprendre le blanchiment et la pose de bijoux.", ar: "تعلّم التبييض وتركيب المجوهرات." } },
  ],

  points: [
    { fr: "Réservation en 30 secondes", ar: "حجز في 30 ثانية" },
    { fr: "Consignes envoyées avant la séance", ar: "التعليمات تُرسل قبل الحصة" },
    { fr: "Français · العربية · Español", ar: "Français · العربية · Español" },
  ],
  proof: [
    { n: "41 k", l: { fr: "abonnés sur Instagram", ar: "متابع على إنستغرام" } },
    { n: "1 700+", l: { fr: "publications", ar: "منشور" } },
  ],
  // Les highlights ta3ha : "Lire avant venir", "Après blanchiment". L-contenu l-7a9i9i yji men 3andha.
  method: {
    title: { fr: "Comment ça se passe", ar: "كيف تتم الحصة" },
    quote: {
      fr: "Vous réservez ici, Imy vous envoie quoi lire avant de venir, et quoi faire après pour garder le résultat.",
      ar: "تحجزين هنا، إيمي ترسل لك ما يجب قراءته قبل المجيء، وما يجب فعله بعدها للحفاظ على النتيجة.",
    },
    steps: [
      { t: { fr: "Avant de venir", ar: "قبل المجيء" }, d: { fr: "Les consignes d'Imy, à lire avant la séance.", ar: "تعليمات إيمي، للقراءة قبل الحصة." } },
      { t: { fr: "La séance", ar: "الحصة" }, d: { fr: "Blanchiment ou bijou, sans douleur.", ar: "تبييض أو جوهرة، بدون ألم." } },
      { t: { fr: "Après", ar: "بعد الحصة" }, d: { fr: "Les bons gestes pour que ça dure.", ar: "العادات الصحيحة ليدوم التأثير." } },
    ],
  },
  gallery: [], // A AJOUTER : ses avant/après et témoignages, avec son accord
  faq: [
    {
      q: { fr: "Est-ce que ça fait mal ?", ar: "هل يؤلم؟" },
      a: { fr: "Imy travaille avec une méthode qu'elle présente comme sans douleur (PAP+).", ar: "إيمي تعمل بطريقة تقدمها على أنها بدون ألم (+PAP)." },
    },
    {
      q: { fr: "Faut-il payer pour réserver ?", ar: "هل يجب الدفع للحجز؟" },
      a: { fr: "Non. La réservation est gratuite, le paiement se fait sur place.", ar: "لا. الحجز مجاني، والدفع في عين المكان." },
    },
    {
      q: { fr: "Comment annuler ou changer l'heure ?", ar: "كيف ألغي أو أغيّر الموعد؟" },
      a: { fr: "Écrivez sur WhatsApp le plus tôt possible, pour libérer la place.", ar: "راسلينا على واتساب في أقرب وقت، لتحرير المكان." },
    },
  ],
};
