/**
 * Blog articles — full published content.
 *
 * Editorial policy, consistent with content/subsidy.ts: explain how schemes and
 * hardware actually work, but do NOT state rupee subsidy amounts or slab caps as
 * fact. Those are set by MNRE and change; every article that touches them carries
 * a callout pointing readers at pmsuryaghar.gov.in. Once GS Solar confirms the
 * current figures, they can be dropped into the marked places.
 *
 * Technical rules of thumb used here (Chennai / Tamil Nadu insolation):
 *   ~80–100 sq ft shadow-free roof per kW · ~4–4.5 units per kW per day average.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  date: string; // ISO
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "solar-subsidy-guide",
    title: "A Simple Guide to Solar Subsidy in India",
    excerpt: "How PM Surya Ghar works and how to claim it — explained step by step.",
    category: "Guides",
    readingMinutes: 7,
    date: "2026-07-28",
    body: [
      {
        type: "p",
        text: "Most people who ask us about subsidy have already heard three different numbers from three different installers. That confusion is understandable, because the scheme has a structure rather than a single figure — what you receive depends on the size of the system you install, and the amount is set by the central government, not by your installer.",
      },
      {
        type: "p",
        text: "Here is the whole thing, in plain terms.",
      },
      { type: "h2", text: "What the scheme actually is" },
      {
        type: "p",
        text: "PM Surya Ghar: Muft Bijli Yojana is a national scheme run by the Ministry of New & Renewable Energy. It gives residential electricity consumers Central Financial Assistance — a direct subsidy — towards installing rooftop solar. The money is not a discount your installer applies at the till. It is credited to your own bank account after your system is commissioned and verified.",
      },
      {
        type: "p",
        text: "That last detail matters more than people expect. You pay the full system cost up front, and the subsidy arrives afterwards. Any vendor who tells you they will \"adjust the subsidy in the invoice\" is describing something the scheme does not do.",
      },
      { type: "h2", text: "How the amount is decided" },
      {
        type: "p",
        text: "The assistance is slab-based. A fixed amount is paid per kilowatt for the first few kilowatts of capacity, a lower amount for the next slab, and the total is capped — so a very large residential system does not receive proportionally more. Group housing societies and residential welfare associations have a separate rate for common-area capacity.",
      },
      {
        type: "p",
        text: "Because the slabs and the cap are revised from time to time, we deliberately do not print rupee figures on this page. We will tell you the exact current amount for your proposed system size during your site survey, and you can verify it yourself on the national portal in about a minute.",
      },
      {
        type: "callout",
        text: "Check today's slab amounts and the current cap at pmsuryaghar.gov.in before you sign anything. If a quoted subsidy figure does not match the portal, ask why.",
      },
      { type: "h2", text: "Who is eligible" },
      {
        type: "ul",
        items: [
          "You are a residential electricity consumer with a valid, live connection.",
          "You own the roof — or have documented permission to install on it.",
          "You have enough shadow-free roof area for the capacity you want, roughly 80–100 sq ft per kW.",
          "Your sanctioned load and your DISCOM's conditions permit the system size.",
        ],
      },
      {
        type: "p",
        text: "Commercial and industrial consumers are not covered by this particular scheme. That does not mean solar is a worse deal for them — commercial tariffs are higher, so the economics often work out faster without any subsidy at all. Accelerated depreciation is usually the relevant benefit there; ask your chartered accountant.",
      },
      { type: "h2", text: "The application, start to finish" },
      {
        type: "ul",
        items: [
          "Register on the national portal with your state and DISCOM. In Chennai that is TANGEDCO / TNPDCL.",
          "Submit the application with your consumer number and the capacity you want.",
          "Wait for technical feasibility approval from the DISCOM.",
          "Install through a registered vendor — the subsidy is only released for systems installed by one.",
          "Apply for the bi-directional net meter.",
          "DISCOM inspection, then commissioning; a commissioning certificate is generated.",
          "Submit your bank details on the portal. The subsidy is credited directly.",
        ],
      },
      {
        type: "p",
        text: "Keep these ready before you start: a recent electricity bill showing your consumer number, identity and address proof, proof of roof or property ownership, bank account details, and a passport-size photograph.",
      },
      { type: "h2", text: "Where applications actually get stuck" },
      {
        type: "p",
        text: "In our experience it is rarely the subsidy itself that delays a project. It is the feasibility approval and the net meter — two DISCOM steps with their own queues and their own paperwork. Applications also stall when the name on the electricity connection does not match the name on the property documents, which is common in inherited or recently purchased homes. Sorting that out before you apply saves weeks.",
      },
      {
        type: "p",
        text: "GS Solar handles the portal registration, the DISCOM coordination, the net-meter application and the commissioning follow-up as part of the job. You should not have to learn a government portal to buy electricity from your own roof.",
      },
    ],
  },

  {
    slug: "how-solar-works",
    title: "How Solar Energy Actually Works",
    excerpt: "From sunlight to the socket — the journey of a solar electron, minus the jargon.",
    category: "Basics",
    readingMinutes: 6,
    date: "2026-07-14",
    body: [
      {
        type: "p",
        text: "A rooftop solar system has fewer moving parts than a ceiling fan. Understanding it takes about five minutes, and it is worth the five minutes — because almost every bad solar purchase comes from not understanding one of the four steps below.",
      },
      { type: "h2", text: "1. The panel turns light into DC electricity" },
      {
        type: "p",
        text: "A solar panel is a sheet of silicon cells under glass. When sunlight hits a cell, photons knock electrons loose, and the cell's construction pushes those electrons in one direction. That directional flow is direct current — DC. There is no combustion, no spinning, nothing to wear out. This is why panels carry twenty-five-year performance warranties and why they need so little maintenance.",
      },
      {
        type: "p",
        text: "What matters practically: panels produce in proportion to the light landing on them. Not heat — light. A bright, cool day outperforms a hazy, hot one. And shade is disproportionately damaging, because cells are wired in series; one shaded cell can throttle a whole string, the way one kinked section restricts a whole hose.",
      },
      { type: "h2", text: "2. The inverter turns DC into usable AC" },
      {
        type: "p",
        text: "Your home runs on alternating current at 230 volts. The inverter converts the panels' DC into grid-quality AC and feeds it into your distribution board. It is the brain of the system: it constantly hunts for the voltage that extracts maximum power from the array, it monitors grid conditions, and it logs your generation.",
      },
      {
        type: "p",
        text: "The inverter is also the component most likely to need replacing during the system's life. Panels routinely outlive their inverter. Budget for one inverter replacement across twenty-five years and you will not be caught out.",
      },
      { type: "h2", text: "3. Your home uses what it needs, right then" },
      {
        type: "p",
        text: "Generated power goes to whatever is switched on at that moment — the fridge, the AC, the pump. This is self-consumption, and it is the most valuable use of a solar unit, because every unit you self-consume is a unit you do not buy at your retail tariff.",
      },
      {
        type: "p",
        text: "This is also why load pattern matters as much as roof size. A household that runs heavy loads during the day extracts far more value from the same array than one that is empty until 8pm.",
      },
      { type: "h2", text: "4. The surplus goes to the grid, and is credited back" },
      {
        type: "p",
        text: "Generate more than you are using and the excess flows out to the grid through a bi-directional net meter, which counts import and export separately. Under net metering, exported units are credited against imported ones and you settle the difference. The grid effectively acts as a battery you do not have to buy, maintain or replace.",
      },
      {
        type: "callout",
        text: "Metering arrangements — net metering, net billing or net feed-in — are set by your state regulator and vary by consumer category. Confirm which one applies to you before sizing a system around exports.",
      },
      { type: "h2", text: "The part that surprises people" },
      {
        type: "p",
        text: "A standard on-grid system shuts down during a power cut, even in bright sunshine. This is deliberate and mandatory. If the grid is down, linemen may be working on it, and a rooftop system back-feeding a supposedly dead line would be lethal. Inverters detect the outage and disconnect within milliseconds — anti-islanding protection.",
      },
      {
        type: "p",
        text: "If you need power through outages, you need a hybrid system with a battery. That costs more and is the right answer for some homes and the wrong answer for others. It depends entirely on how often and how long your supply actually fails — which is a question worth answering with your own experience rather than a salesperson's.",
      },
      { type: "h2", text: "What to expect in Tamil Nadu" },
      {
        type: "p",
        text: "As a planning figure, one kilowatt of well-oriented, unshaded rooftop capacity generates roughly four to four and a half units a day averaged across the year here, and needs about eighty to a hundred square feet. Output is strongest February through May and dips through the north-east monsoon. Any honest proposal sizes against your annual consumption, not a single month's bill.",
      },
    ],
  },

  {
    slug: "residential-vs-commercial",
    title: "Residential vs Commercial Solar",
    excerpt: "How sizing, tariffs and payback differ between homes and businesses.",
    category: "Basics",
    readingMinutes: 6,
    date: "2026-06-30",
    body: [
      {
        type: "p",
        text: "The panels are the same. Almost nothing else is. The difference between a good home system and a good commercial system comes down to three things: what you pay per unit, when you use power, and which incentives you can access.",
      },
      { type: "h2", text: "Tariff is the whole story" },
      {
        type: "p",
        text: "A solar unit is worth exactly what you would otherwise have paid for that unit. Domestic tariffs are slab-based and subsidised at the lower slabs, so the first few hundred units a household consumes are cheap — and displacing them with solar saves correspondingly little. Commercial and industrial tariffs are substantially higher and typically flat, and they often carry demand charges on top.",
      },
      {
        type: "p",
        text: "This produces a result that surprises people: a business with no subsidy at all frequently sees faster payback than a home that receives one. The higher the tariff you are displacing, the harder every panel works.",
      },
      { type: "h2", text: "Load shape decides how much you keep" },
      {
        type: "p",
        text: "Solar generates during the working day. A factory, an office, a school or a cold store consumes most heavily during exactly those hours, so nearly everything generated is self-consumed at full retail value. A typical home is at its emptiest between 10am and 5pm, and exports a large share of its generation.",
      },
      {
        type: "p",
        text: "Exported units are credited, but the value of that credit depends on your state's metering arrangement and is not always one-for-one. So the same array on a warehouse and on a house can return meaningfully different amounts, even at the same tariff.",
      },
      { type: "h2", text: "Incentives point in opposite directions" },
      {
        type: "ul",
        items: [
          "Homes: eligible for Central Financial Assistance under PM Surya Ghar, credited to your bank account after commissioning.",
          "Businesses: not eligible for that scheme, but able to claim accelerated depreciation on the asset, and to treat the system as a capital investment with a documented return. Confirm the current rate with your chartered accountant.",
          "Both: net-metering credits for exported units, subject to your state's regulations.",
        ],
      },
      { type: "h2", text: "The engineering diverges too" },
      {
        type: "p",
        text: "A 3–5 kW home system uses a single string inverter and a straightforward mounting structure on a slab or pitched roof. A 100 kW-plus commercial plant involves structural load assessment of the roof, multiple string inverters or a central inverter, integration with LT or HT distribution, lightning and surge protection sized for the site, and often a walkway design so the array can be cleaned safely.",
      },
      {
        type: "p",
        text: "Approvals scale too. Larger systems interact with sanctioned demand and contract demand, which can require a load-enhancement application before feasibility is granted. This is routine, but it is a step, and it has a timeline.",
      },
      { type: "h2", text: "Choosing a size" },
      {
        type: "p",
        text: "For a home, we size against annual consumption and the roof's shadow-free area, aiming to offset as much as the roof honestly allows. For a business, we size against the daytime load profile first — because a system that generates far more than the site consumes during working hours is exporting at a discount instead of saving at full price.",
      },
      {
        type: "callout",
        text: "Bring twelve months of bills, not one. Seasonal swing is large in Tamil Nadu, and a system sized off a single peak-summer bill will be too big for the rest of the year.",
      },
    ],
  },

  {
    slug: "maintenance-tips",
    title: "5 Maintenance Tips to Keep Solar Performing",
    excerpt: "Small habits that protect your generation for decades.",
    category: "Tips",
    readingMinutes: 5,
    date: "2026-06-16",
    body: [
      {
        type: "p",
        text: "Solar is genuinely low-maintenance. It is not no-maintenance. The difference between a system that holds its output and one that quietly loses a fifth of it comes down to a handful of habits, none of which take much time.",
      },
      { type: "h2", text: "1. Keep the glass clean" },
      {
        type: "p",
        text: "Dust is the single largest recoverable loss in Indian conditions. A visibly dusty array can lose anywhere from a few percent to well over twenty, depending on how close you are to a road, a construction site or an industrial area. Bird droppings are worse than dust because they block a cell completely rather than dimming it.",
      },
      {
        type: "p",
        text: "Clean early morning or evening — never midday. Cold water on hot glass risks thermal shock, and hot panels are unpleasant to work near. Plain water and a soft brush are correct; detergents leave a film that attracts more dust, and abrasives scratch the anti-reflective coating permanently.",
      },
      { type: "h2", text: "2. Watch the shade move through the year" },
      {
        type: "p",
        text: "Your installer surveyed shading on one day. The sun's path shifts across the seasons, and things grow. A tree that cleared the array in March may clip it in December. New construction next door can appear over a weekend.",
      },
      {
        type: "p",
        text: "Because cells are series-wired, partial shade costs far more output than its size suggests. Trimming one branch is often the cheapest generation upgrade available to you.",
      },
      { type: "h2", text: "3. Read your generation data, not just your bill" },
      {
        type: "p",
        text: "Every modern inverter logs daily output. Look at it once a week for a month and you will learn what a normal clear day looks like for your system. After that, a fault announces itself — a sudden step down in daily output, or one string reporting materially less than its twin.",
      },
      {
        type: "p",
        text: "Waiting for your electricity bill to reveal a problem means finding out up to two months late. That is two months of generation you do not get back.",
      },
      { type: "h2", text: "4. Inspect the unglamorous parts before the monsoon" },
      {
        type: "ul",
        items: [
          "Mounting structure: check for rust at welds and that all fasteners are still tight. Wind loading works fixings loose over the years.",
          "Cable runs: no conduit sagging, chafing on a roof edge, or drooping where rodents can reach.",
          "Junction boxes and the inverter enclosure: sealed, dry, no insect nests, vents unobstructed.",
          "Earthing and lightning protection: intact and connected.",
          "Roof waterproofing around every mounting penetration.",
        ],
      },
      {
        type: "p",
        text: "The north-east monsoon is the annual stress test in Chennai. Everything on that list is cheaper to fix in September than in November.",
      },
      { type: "h2", text: "5. Do not open the DC side yourself" },
      {
        type: "p",
        text: "Panels generate whenever there is light. There is no off switch on the array, and DC arcs do not self-extinguish the way AC does. Cleaning and visual inspection are homeowner tasks. Anything involving connectors, the DC isolator, the inverter's interior or the distribution board is qualified-technician work.",
      },
      {
        type: "callout",
        text: "An AMC bundles the cleaning schedule, the pre-monsoon inspection and generation monitoring into one arrangement — including for systems we did not install, after a safety assessment.",
      },
      { type: "h2", text: "What normal ageing looks like" },
      {
        type: "p",
        text: "Panels lose roughly half a percent of output per year by design, which is why warranties promise a percentage of original output at year twenty-five rather than all of it. A gradual, gentle decline is the system working as intended. A sudden drop is not ageing — it is a fault, and it is worth chasing the same week.",
      },
    ],
  },

  {
    slug: "government-schemes",
    title: "Government Solar Schemes You Should Know",
    excerpt: "Beyond PM Surya Ghar — the incentives worth understanding.",
    category: "Guides",
    readingMinutes: 6,
    date: "2026-05-28",
    body: [
      {
        type: "p",
        text: "PM Surya Ghar gets the attention, and for households it is the one that matters. But it is not the only support available, and if you are a business, a farmer or a housing society, it is probably not the relevant one at all. Here is the wider landscape.",
      },
      { type: "h2", text: "PM Surya Ghar: Muft Bijli Yojana" },
      {
        type: "p",
        text: "The national residential rooftop scheme. Central Financial Assistance on a slab basis, credited directly to the consumer's bank account after commissioning. Applications go through pmsuryaghar.gov.in and require DISCOM feasibility approval and installation by a registered vendor. Covered in detail in our dedicated subsidy guide.",
      },
      { type: "h2", text: "Group housing and welfare associations" },
      {
        type: "p",
        text: "Apartment complexes and residential welfare associations can access assistance for common-area capacity — lifts, pumps, corridor and compound lighting, which together often form a substantial and very predictable daytime load. The rate for common-area capacity differs from the individual residential rate, and there is a cap.",
      },
      {
        type: "p",
        text: "The practical hurdle here is rarely technical. It is getting an association resolution passed and deciding how generation and credits are apportioned between common services and individual flats. Settle that before the application, not after.",
      },
      { type: "h2", text: "PM-KUSUM, for agriculture" },
      {
        type: "p",
        text: "A separate scheme aimed at farmers, covering standalone solar pumps, the solarisation of existing grid-connected pumps, and small decentralised plants on barren or fallow land. Administered through state nodal agencies, with the state and centre both contributing and the farmer paying a share.",
      },
      {
        type: "p",
        text: "If you irrigate with a diesel pump, this is usually a far larger saving than anything a rooftop scheme offers, because you are displacing fuel rather than subsidised units.",
      },
      { type: "h2", text: "Accelerated depreciation, for businesses" },
      {
        type: "p",
        text: "Commercial and industrial buyers cannot claim residential subsidy, but they can depreciate the asset at an accelerated rate, front-loading the tax benefit into the early years. For a profitable business this can be worth more than a residential subsidy would have been. The applicable rate and conditions change with the Finance Act — confirm with your chartered accountant before building it into a payback calculation.",
      },
      { type: "h2", text: "Net metering, and why it is not a subsidy" },
      {
        type: "p",
        text: "Net metering is a regulatory arrangement, not a grant: it decides what happens to units you export. Your state electricity regulatory commission sets the rules, including which consumer categories get net metering, which get net billing or net feed-in, and what capacity limits apply relative to sanctioned load.",
      },
      {
        type: "p",
        text: "It deserves attention because it can change the economics of a system as much as a subsidy does — particularly for homes, which export a large share of what they generate.",
      },
      { type: "h2", text: "Financing" },
      {
        type: "p",
        text: "Rooftop solar for homes is a recognised lending category, and public sector banks offer loans against it under priority-sector norms, sometimes with a simplified process for smaller systems. Terms vary by bank and by applicant, so treat any single quoted rate as indicative.",
      },
      {
        type: "callout",
        text: "Every figure in this landscape — slab rates, caps, depreciation percentages, metering rules — is set by government and revised periodically. Verify current details on pmsuryaghar.gov.in, with your state nodal agency, and with your DISCOM before committing.",
      },
      {
        type: "p",
        text: "We handle the applications for the schemes our customers qualify for, and we will tell you plainly when a scheme you have read about does not apply to your situation.",
      },
    ],
  },

  {
    slug: "solar-myths",
    title: "Solar Myths, Busted",
    excerpt: "\"It doesn't work in monsoon\" and other things people get wrong.",
    category: "Basics",
    readingMinutes: 6,
    date: "2026-05-12",
    body: [
      {
        type: "p",
        text: "Some of these we hear weekly. A few contain a grain of truth that has been stretched out of shape, and one of them is genuinely true — so it is worth going through them honestly rather than dismissing the lot.",
      },
      { type: "h2", text: "\"Solar doesn't work in the monsoon\"" },
      {
        type: "p",
        text: "It works, at reduced output. Panels respond to light, and an overcast sky still delivers a meaningful fraction of clear-sky irradiance — diffuse light is still light. Expect a real dip through the north-east monsoon, not a shutdown.",
      },
      {
        type: "p",
        text: "This is precisely why systems are sized against annual consumption. A well-sized system banks surplus credits through the bright months and draws them down through the wet ones. Judging solar by its worst fortnight is like judging a car by its performance in traffic.",
      },
      { type: "h2", text: "\"Hotter weather means more solar\"" },
      {
        type: "p",
        text: "The opposite, in fact. Panels are rated at 25°C and lose efficiency as cell temperature climbs — a hot April rooftop can run well above ambient. Peak output arrives on bright, clear, relatively cool days. Longer daylight in summer more than compensates, but heat itself is a loss, not a gain.",
      },
      { type: "h2", text: "\"You need a battery\"" },
      {
        type: "p",
        text: "Most homes do not. Under net metering the grid performs the storage function for free: you export surplus, you import when you need it, and you settle the difference. Batteries are for outage resilience, not for economics — added to a grid-tied system purely to save money, they generally lengthen payback rather than shorten it.",
      },
      {
        type: "p",
        text: "Add storage if your supply genuinely fails often enough to matter to you. That is a real reason. \"To be independent of the grid\" is usually an expensive way to buy a feeling.",
      },
      { type: "h2", text: "\"Panels need constant maintenance\"" },
      {
        type: "p",
        text: "There are no moving parts. Realistic upkeep is periodic cleaning, an annual look at the structure and cabling, and glancing at your generation data now and then. What people mistake for high maintenance is usually one neglected system that lost output to dust and shading over several years.",
      },
      { type: "h2", text: "\"My roof is too small\"" },
      {
        type: "p",
        text: "Often untrue, and worth measuring rather than assuming. At roughly eighty to a hundred square feet per kilowatt, a modest terrace supports a system that covers a substantial share of a typical household's consumption. Partial offset is still worthwhile — there is no threshold below which solar stops making sense.",
      },
      { type: "h2", text: "\"It'll stop working after a few years\"" },
      {
        type: "p",
        text: "Panels degrade by roughly half a percent a year, which is why performance warranties run to twenty-five years. The inverter is the shorter-lived component and should be expected to need replacement once over the system's life. Plan for that and there is no unpleasant surprise.",
      },
      { type: "h2", text: "\"It'll keep the lights on during a power cut\"" },
      {
        type: "p",
        text: "This one is a myth in the other direction — people assume it is true, and it is not. A standard on-grid system shuts down the moment the grid fails, by design and by regulation, so that it cannot energise a line someone may be working on. Sunshine makes no difference.",
      },
      {
        type: "callout",
        text: "If backup during outages is what you actually want, you need a hybrid inverter and a battery. Any installer who lets you assume otherwise has not done their job.",
      },
      { type: "h2", text: "\"All quotes are basically the same\"" },
      {
        type: "p",
        text: "Two quotes for the same capacity can differ in panel technology and warranty terms, inverter brand and rating, the gauge of the mounting structure and its wind rating, cable sizing, surge and lightning protection, earthing, and whether approvals and net metering are included or billed later.",
      },
      {
        type: "p",
        text: "Ask for an itemised breakdown. A vendor who will not give you one is telling you something useful about the quote.",
      },
    ],
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
