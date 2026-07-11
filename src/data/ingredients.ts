import type { IngredientInfo, ShoppingCategory } from "./types";

type Opts = {
  aliases?: string[];
  perishable?: boolean;
  staple?: boolean;
  supermarket?: boolean;
};

/** Category defaults keep the dictionary honest and compact. */
const CATEGORY_DEFAULTS: Record<ShoppingCategory, { perishable: boolean }> = {
  sayuran_bumbu_segar: { perishable: true },
  protein: { perishable: true },
  bumbu_dapur: { perishable: false },
  sembako: { perishable: false },
  lainnya: { perishable: false }
};

function d(
  name: string,
  shoppingCategory: ShoppingCategory,
  opts: Opts = {}
): IngredientInfo {
  return {
    name,
    aliases: opts.aliases ?? [],
    shoppingCategory,
    perishable: opts.perishable ?? CATEGORY_DEFAULTS[shoppingCategory].perishable,
    staple: opts.staple ?? false,
    availability: opts.supermarket ? "supermarket" : "pasar"
  };
}

export const INGREDIENTS: IngredientInfo[] = [
  // ── Sayuran & bumbu segar ─────────────────────────────────────────────
  d("bayam", "sayuran_bumbu_segar", { aliases: ["bayem"] }),
  d("kangkung", "sayuran_bumbu_segar"),
  d("buncis", "sayuran_bumbu_segar"),
  d("labu siam", "sayuran_bumbu_segar", { aliases: ["jipang", "manisa"] }),
  d("tauge", "sayuran_bumbu_segar", { aliases: ["toge", "kecambah"] }),
  d("wortel", "sayuran_bumbu_segar"),
  d("kentang", "sayuran_bumbu_segar", { perishable: false }),
  d("kol", "sayuran_bumbu_segar", { aliases: ["kubis"] }),
  d("sawi hijau", "sayuran_bumbu_segar", { aliases: ["caisim"] }),
  d("sawi putih", "sayuran_bumbu_segar"),
  d("pakcoy", "sayuran_bumbu_segar", { aliases: ["bok choy", "pokcoy"] }),
  d("brokoli", "sayuran_bumbu_segar"),
  d("kembang kol", "sayuran_bumbu_segar", { aliases: ["bunga kol"] }),
  d("terong", "sayuran_bumbu_segar", { aliases: ["terung"] }),
  d("timun", "sayuran_bumbu_segar", { aliases: ["mentimun", "ketimun"] }),
  d("jagung manis", "sayuran_bumbu_segar", { aliases: ["jagung"] }),
  d("jagung muda", "sayuran_bumbu_segar", { aliases: ["putren", "baby corn"] }),
  d("kacang panjang", "sayuran_bumbu_segar"),
  d("daun singkong", "sayuran_bumbu_segar"),
  d("daun pepaya", "sayuran_bumbu_segar"),
  d("daun melinjo", "sayuran_bumbu_segar", { aliases: ["daun so"] }),
  d("melinjo", "sayuran_bumbu_segar"),
  d("nangka muda", "sayuran_bumbu_segar", { aliases: ["gori", "tewel"] }),
  d("rebung", "sayuran_bumbu_segar"),
  d("oyong", "sayuran_bumbu_segar", { aliases: ["gambas"] }),
  d("pare", "sayuran_bumbu_segar", { aliases: ["paria"] }),
  d("selada", "sayuran_bumbu_segar"),
  d("tomat", "sayuran_bumbu_segar"),
  d("tomat hijau", "sayuran_bumbu_segar"),
  d("labu kuning", "sayuran_bumbu_segar", { aliases: ["waluh"] }),
  d("kacang merah segar", "sayuran_bumbu_segar", { aliases: ["kacang jogo"] }),
  d("kluwih", "sayuran_bumbu_segar"),
  d("genjer", "sayuran_bumbu_segar"),
  d("daun kelor", "sayuran_bumbu_segar"),
  d("kenikir", "sayuran_bumbu_segar"),
  d("pepaya muda", "sayuran_bumbu_segar"),
  d("jantung pisang", "sayuran_bumbu_segar"),
  d("petai", "sayuran_bumbu_segar", { aliases: ["pete"] }),
  d("lobak", "sayuran_bumbu_segar", { aliases: ["lobak putih"] }),
  d("jamur tiram", "sayuran_bumbu_segar", { aliases: ["jamur"] }),
  d("jamur kancing", "sayuran_bumbu_segar", { supermarket: true, aliases: ["champignon"] }),
  d("jamur kuping", "sayuran_bumbu_segar", { perishable: false, aliases: ["kuping"] }),
  d("bunga sedap malam", "sayuran_bumbu_segar", { perishable: false, aliases: ["sedap malam"] }),
  d("jengkol", "sayuran_bumbu_segar"),
  d("cabe merah", "sayuran_bumbu_segar", {
    aliases: ["cabai merah", "cabe merah besar", "lombok merah"]
  }),
  d("cabe rawit", "sayuran_bumbu_segar", { aliases: ["cabai rawit", "rawit"] }),
  d("cabe hijau", "sayuran_bumbu_segar", {
    aliases: ["cabai hijau", "cabe hijau besar", "lombok ijo"]
  }),
  d("cabe keriting", "sayuran_bumbu_segar", { aliases: ["cabai keriting"] }),
  d("paprika", "sayuran_bumbu_segar", { supermarket: true }),
  d("bawang merah", "sayuran_bumbu_segar", { perishable: false, aliases: ["brambang"] }),
  d("bawang putih", "sayuran_bumbu_segar", { perishable: false }),
  d("bawang bombay", "sayuran_bumbu_segar", { perishable: false, aliases: ["bombay"] }),
  d("daun bawang", "sayuran_bumbu_segar", { aliases: ["bawang daun", "loncang"] }),
  d("seledri", "sayuran_bumbu_segar", { aliases: ["daun sop", "daun seledri"] }),
  d("daun kucai", "sayuran_bumbu_segar", { aliases: ["kucai"] }),
  d("jahe", "sayuran_bumbu_segar", { perishable: false }),
  d("kunyit", "sayuran_bumbu_segar", { perishable: false, aliases: ["kunir"] }),
  d("lengkuas", "sayuran_bumbu_segar", { perishable: false, aliases: ["laos"] }),
  d("kencur", "sayuran_bumbu_segar", { perishable: false }),
  d("temu kunci", "sayuran_bumbu_segar", { perishable: false }),
  d("serai", "sayuran_bumbu_segar", { aliases: ["sereh"] }),
  d("daun salam", "sayuran_bumbu_segar", { perishable: false, aliases: ["salam"] }),
  d("daun jeruk", "sayuran_bumbu_segar", { perishable: false, aliases: ["daun jeruk purut"] }),
  d("daun kunyit", "sayuran_bumbu_segar"),
  d("daun pandan", "sayuran_bumbu_segar", { aliases: ["pandan"] }),
  d("kemangi", "sayuran_bumbu_segar", { aliases: ["daun kemangi"] }),
  d("belimbing wuluh", "sayuran_bumbu_segar", { aliases: ["belimbing sayur"] }),
  d("jeruk nipis", "sayuran_bumbu_segar", { perishable: false }),
  d("jeruk limau", "sayuran_bumbu_segar", { perishable: false, aliases: ["limau"] }),
  d("kelapa parut", "sayuran_bumbu_segar", { aliases: ["kelapa"] }),
  d("daun pisang", "sayuran_bumbu_segar", { staple: true }),
  d("kelapa muda", "sayuran_bumbu_segar", { aliases: ["degan"] }),
  d("nanas", "sayuran_bumbu_segar", { aliases: ["nenas"] }),

  // ── Protein ───────────────────────────────────────────────────────────
  d("ayam", "protein", { aliases: ["ayam potong", "daging ayam"] }),
  d("dada ayam", "protein", { aliases: ["ayam fillet", "fillet ayam"] }),
  d("paha ayam", "protein"),
  d("ayam kampung", "protein"),
  d("sayap ayam", "protein"),
  d("hati ampela", "protein", { aliases: ["ati ampela", "hati ayam"] }),
  d("telur ayam", "protein", { perishable: false, aliases: ["telur", "telor"] }),
  d("telur puyuh", "protein", { perishable: false }),
  d("telur asin", "protein", { perishable: false }),
  d("ikan kembung", "protein", { aliases: ["kembung"] }),
  d("ikan tongkol", "protein", { aliases: ["tongkol"] }),
  d("ikan tuna", "protein"),
  d("ikan nila", "protein", { aliases: ["nila"] }),
  d("ikan mujair", "protein", { aliases: ["mujair", "mujaer"] }),
  d("ikan lele", "protein", { aliases: ["lele"] }),
  d("ikan mas", "protein"),
  d("ikan gurame", "protein", { aliases: ["gurame", "gurami"] }),
  d("ikan patin", "protein", { aliases: ["patin"] }),
  d("ikan bandeng", "protein", { aliases: ["bandeng"] }),
  d("ikan bawal", "protein", { aliases: ["bawal"] }),
  d("ikan tenggiri", "protein", { aliases: ["tenggiri"] }),
  d("ikan kakap", "protein", { aliases: ["kakap"] }),
  d("ikan teri", "protein", { perishable: false, aliases: ["teri", "teri medan"] }),
  d("ikan asin", "protein", {
    perishable: false,
    aliases: ["ikan asin peda", "peda", "jambal roti"]
  }),
  d("ikan pindang", "protein", { aliases: ["pindang tongkol", "pindang"] }),
  d("cumi", "protein", { aliases: ["cumi-cumi", "sotong"] }),
  d("udang", "protein", { aliases: ["udang kupas"] }),
  d("kerang", "protein", { aliases: ["kerang hijau", "kerang dara"] }),
  d("daging sapi", "protein", { aliases: ["sapi"] }),
  d("daging giling", "protein", { aliases: ["daging sapi giling", "daging cincang"] }),
  d("tetelan sapi", "protein", { aliases: ["tetelan"] }),
  d("iga sapi", "protein", { aliases: ["iga"] }),
  d("bakso sapi", "protein", { aliases: ["bakso", "baso"] }),
  d("tempe", "protein", { aliases: ["tempe kedelai"] }),
  d("tahu", "protein", { aliases: ["tahu putih"] }),
  d("tahu kuning", "protein", { aliases: ["tahu takwa"] }),
  d("tahu kulit", "protein", { aliases: ["tahu pong"] }),
  d("oncom", "protein"),
  d("sosis", "protein", { supermarket: true, aliases: ["sosis sapi", "sosis ayam"] }),
  d("kornet", "protein", { supermarket: true, perishable: false, aliases: ["kornet sapi"] }),
  d("crab stick", "protein", { supermarket: true, aliases: ["crabstick"] }),
  d("tuna kaleng", "protein", { supermarket: true, perishable: false, aliases: ["tuna kalengan"] }),

  // ── Bumbu dapur ───────────────────────────────────────────────────────
  d("garam", "bumbu_dapur", { staple: true }),
  d("gula pasir", "bumbu_dapur", { staple: true, aliases: ["gula"] }),
  d("gula merah", "bumbu_dapur", { aliases: ["gula jawa", "gula aren"] }),
  d("merica", "bumbu_dapur", { staple: true, aliases: ["lada", "merica bubuk", "lada bubuk"] }),
  d("ketumbar", "bumbu_dapur", { aliases: ["ketumbar bubuk"] }),
  d("jinten", "bumbu_dapur", { aliases: ["jintan"] }),
  d("pala", "bumbu_dapur", { aliases: ["biji pala", "pala bubuk"] }),
  d("kayu manis", "bumbu_dapur"),
  d("cengkeh", "bumbu_dapur"),
  d("kapulaga", "bumbu_dapur"),
  d("bunga lawang", "bumbu_dapur", { aliases: ["pekak"] }),
  d("kemiri", "bumbu_dapur"),
  d("kluwek", "bumbu_dapur", { aliases: ["keluak", "kluwak"] }),
  d("asam jawa", "bumbu_dapur", { aliases: ["asem", "asam"] }),
  d("asam kandis", "bumbu_dapur"),
  d("terasi", "bumbu_dapur", { aliases: ["trasi", "belacan"] }),
  d("ebi", "bumbu_dapur", { aliases: ["udang kering"] }),
  d("kecap manis", "bumbu_dapur", { staple: true, aliases: ["kecap"] }),
  d("kecap asin", "bumbu_dapur"),
  d("kecap ikan", "bumbu_dapur", { supermarket: true }),
  d("saus tiram", "bumbu_dapur", { supermarket: true }),
  d("saus tomat", "bumbu_dapur", { aliases: ["saos tomat"] }),
  d("saus sambal", "bumbu_dapur", { aliases: ["saos sambal", "sambal botol"] }),
  d("cuka", "bumbu_dapur", { aliases: ["cuka makan"] }),
  d("minyak goreng", "bumbu_dapur", { staple: true, aliases: ["minyak"] }),
  d("minyak wijen", "bumbu_dapur", { supermarket: true }),
  d("margarin", "bumbu_dapur", { aliases: ["margarine"] }),
  d("mentega", "bumbu_dapur", { supermarket: true, aliases: ["butter"] }),
  d("kaldu bubuk", "bumbu_dapur", {
    staple: true,
    aliases: ["penyedap", "kaldu ayam bubuk", "royco", "masako"]
  }),
  d("tauco", "bumbu_dapur"),
  d("petis udang", "bumbu_dapur", { aliases: ["petis"] }),
  d("kencur bubuk", "bumbu_dapur"),
  d("oregano kering", "bumbu_dapur", { supermarket: true, aliases: ["oregano"] }),
  d("keju parut", "bumbu_dapur", {
    supermarket: true,
    perishable: true,
    aliases: ["keju", "keju cheddar"]
  }),
  d("santan instan", "bumbu_dapur", { aliases: ["santan kemasan", "kara"] }),
  d("kacang tanah", "bumbu_dapur", { aliases: ["kacang goreng"] }),
  d("kacang kedelai", "bumbu_dapur", { aliases: ["kedelai"] }),
  d("kacang hijau", "bumbu_dapur"),
  d("kacang merah", "bumbu_dapur", { aliases: ["kacang merah kering"] }),
  d("wijen", "bumbu_dapur", { aliases: ["biji wijen"] }),
  d("bawang goreng", "bumbu_dapur", { aliases: ["bawang merah goreng"] }),

  // ── Sembako ───────────────────────────────────────────────────────────
  d("beras", "sembako", { staple: true, aliases: ["nasi"] }),
  d("beras ketan", "sembako", { aliases: ["ketan"] }),
  d("tepung terigu", "sembako", { aliases: ["terigu"] }),
  d("tepung beras", "sembako"),
  d("tepung maizena", "sembako", { aliases: ["maizena", "tepung jagung"] }),
  d("tepung tapioka", "sembako", { aliases: ["tapioka", "tepung kanji", "aci"] }),
  d("tepung bumbu", "sembako", { aliases: ["tepung bumbu serbaguna"] }),
  d("tepung roti", "sembako", { supermarket: true, aliases: ["tepung panir", "panko"] }),
  d("mie telur", "sembako", { aliases: ["mie kering", "mi telur"] }),
  d("mie basah", "sembako", { perishable: true, aliases: ["mi basah", "mie kuning"] }),
  d("bihun", "sembako", { aliases: ["bihun jagung", "mihun"] }),
  d("kwetiau", "sembako", { perishable: true, aliases: ["kwetiaw", "kuetiau"] }),
  d("soun", "sembako", { aliases: ["sohun"] }),
  d("spaghetti", "sembako", { supermarket: true, aliases: ["pasta spaghetti"] }),
  d("makaroni", "sembako", { supermarket: true, aliases: ["macaroni", "pasta makaroni"] }),
  d("fusilli", "sembako", { supermarket: true, aliases: ["pasta fusilli"] }),
  d("roti tawar", "sembako", { supermarket: true, perishable: true }),
  d("susu cair", "sembako", { supermarket: true, perishable: true, aliases: ["susu uht"] }),
  d("susu kental manis", "sembako", { aliases: ["skm", "kental manis"] }),
  d("lontong", "sembako", { perishable: true, aliases: ["ketupat"] }),
  d("kulit pangsit", "sembako", { perishable: true }),
  d("kulit lumpia", "sembako", { perishable: true }),
  d("santan kelapa", "sembako", {
    perishable: true,
    aliases: ["santan", "santan segar", "santan peras"]
  }),

  // ── Lainnya ───────────────────────────────────────────────────────────
  d("kerupuk", "lainnya", { aliases: ["krupuk", "kerupuk udang", "kerupuk putih"] }),
  d("emping", "lainnya", { aliases: ["emping melinjo"] }),
  d("rempeyek", "lainnya", { aliases: ["peyek"] }),
  d("abon sapi", "lainnya", { aliases: ["abon"] }),
  d("serundeng", "lainnya"),
  d("acar timun", "lainnya", { perishable: true, aliases: ["acar"] })
];

/** Lowercased lookup covering canonical names AND aliases. */
const byName = new Map<string, IngredientInfo>();
for (const info of INGREDIENTS) {
  byName.set(info.name.toLowerCase(), info);
  for (const alias of info.aliases) byName.set(alias.toLowerCase(), info);
}

export function lookupIngredient(nameOrAlias: string): IngredientInfo | undefined {
  return byName.get(nameOrAlias.trim().toLowerCase());
}

/** Resolve any spelling/alias to the canonical dictionary name. */
export function canonicalIngredientName(nameOrAlias: string): string | undefined {
  return lookupIngredient(nameOrAlias)?.name;
}

/** Autocomplete: prefix matches first, then substring matches, canonical names only. */
export function searchIngredients(query: string, limit = 8): IngredientInfo[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const starts: IngredientInfo[] = [];
  const contains: IngredientInfo[] = [];
  for (const info of INGREDIENTS) {
    const names = [info.name, ...info.aliases].map((n) => n.toLowerCase());
    if (names.some((n) => n.startsWith(q))) starts.push(info);
    else if (names.some((n) => n.includes(q))) contains.push(info);
  }
  return [...starts, ...contains].slice(0, limit);
}
