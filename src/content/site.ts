/**
 * All copy, people, dates and photos for the City Boy Movement, Plateau State
 * Chapter website. Components only read from this file.
 *
 * Sources: the chapter's content pack (posts from facebook.com/CityBoyPlateau
 * and facebook.com/oluwadaser, Dec 2025 – Oct 2026) and press coverage.
 * Items marked TODO should be confirmed by the Media & Communications
 * Directorate before launch.
 */

export type Photo = { src: string; width: number; height: number; alt: string };

const p = (src: string, width: number, height: number, alt: string): Photo => ({ src, width, height, alt });

/* ------------------------------------------------------------------ */
/* Chapter identity                                                    */
/* ------------------------------------------------------------------ */

export const chapter = {
  name: "City Boy Movement",
  short: "CBM Plateau",
  chapter: "Plateau State Chapter",
  theme: "Our Plateau. Our Future.",
  motto: "Inform | Engage | Empower",
  tagline: "A people-driven platform elevating youth voice across Plateau State.",
  about:
    "A people driven platform seeking to elevate youth voice, deepen civic engagement and contribute to National progress through collective action.",
  whoWeAre:
    "The City Boy Movement is a national frontline support group backing the second-term bid of President Bola Ahmed Tinubu (APC) in 2027. The Plateau State Chapter organises, mobilises and empowers young people across Plateau State in support of the Renewed Hope Agenda.",
  signupUrl: "https://cbmnigeria.org",
  signupLabel: "cbmnigeria.org",
  supportGroupsUrl: "https://bit.ly/cityboyMovementSupport",
  supportGroupsLabel: "bit.ly/cityboyMovementSupport",
  facebook: "https://www.facebook.com/CityBoyPlateau",
  directorFacebook: "https://www.facebook.com/oluwadaser",
  email: "", // TODO: chapter email
  phone: "", // TODO: chapter phone (confirm before publishing)
  address: "Jos, Plateau State, Nigeria", // TODO: secretariat address
  hashtags: ["#CityBoyMovement", "#CBMPlateau", "#CityBoyPlateau", "#OperationRockSolid", "#OurPlateauOurFuture", "#RenewedHope", "#Tinubu2027"],
};

export const slogans = [
  "Our Plateau. Our Future.",
  "Inform | Engage | Empower",
  "Proudly APC! Proudly City Boy!",
  "Unity Today, Victory Tomorrow",
  "Together, we move forward. Together, we win.",
  "One Movement, One Purpose, One Plateau",
  "City Boys to the world.",
];

export const mission = [
  "The City Boy Movement is more than a political platform; it is a people-driven movement committed to promoting unity, inclusion, enterprise, innovation, and national development. We welcome Nigerians from all backgrounds, professions, faiths, ethnicities, and political persuasions who share a desire to see a stronger, more prosperous nation.",
  "Our mission is to engage citizens constructively, empower communities, support young people, encourage entrepreneurship, and advance the Renewed Hope vision of President Bola Ahmed Tinubu. We believe that progress is achieved not through division, but through collaboration, dialogue, and collective action.",
];

export const pillars: { title: string; text: string }[] = [
  { title: "Inform", text: "Taking the Renewed Hope message — roads, NELFUND student loans, security — to every community in plain language." },
  { title: "Engage", text: "Town halls, campus drives and ward meetings that bring young people into constructive political conversation." },
  { title: "Empower", text: "Discovering young talent, opening doors to opportunity and backing empowerment programmes across the 17 LGAs." },
];

export const stats: { value: string; label: string }[] = [
  { value: "31278+", label: "Registered members (13 Aug 2026)" },
  { value: "17", label: "Local Government Areas" },
  { value: "207", label: "Wards covered" },
  { value: "4989", label: "Polling units" },
];

/* ------------------------------------------------------------------ */
/* Photos                                                              */
/* ------------------------------------------------------------------ */

export const photos = {
  director: p("/images/about/1.jpg", 1429, 2000, "State Director Prince Daser David speaking at a City Boy Movement event"),
  directorCap: p("/images/home/1.jpg", 1280, 854, "Daser David addressing members in a City Boy Movement cap"),
  registration: p("/images/home/2.jpg", 2000, 1336, "Members registering during a City Boy Movement membership drive"),
  regalia: p("/images/about/2.jpg", 2000, 1565, "Presentation of City Boy Movement regalia at Government House, Jos"),
  apcFlyer: p("/images/apc/1.jpg", 1296, 1005, "Flyer for the chapter inauguration and unveiling of Operation Rock Solid, 21 September 2026"),
  apcShirtFront: p("/images/apc/2.jpg", 1500, 2000, "Daser David in a Movement T-shirt"),
  apcShirtBack: p("/images/apc/3.jpg", 1500, 2000, "Back of the Movement T-shirt: Unity Today, Victory Tomorrow"),
  membersGraphic: p("/images/operation/1.jpg", 935, 1080, "31,278 members and counting: 17 LGAs, 207 wards, 4,989 polling units"),
  supportFlyer: p("/images/join/1.jpg", 1836, 2000, "Call for all Tinubu support groups in Plateau State to register with the Movement"),
  car: p("/images/join/2.jpg", 2000, 1500, "Renewed Hope 2027 branded vehicle"),
  swcList: p("/images/leadership/4.jpg", 1381, 2000, "Press release announcing the State Working Committee"),
  kycFlyer: p("/images/leadership/5.jpg", 798, 960, "Know Your CityBoy LGA Coordinator flyer"),
  mediaLogo: p("/brand/cbm-media-plateau.jpg", 1080, 360, "City Boy Media, Plateau State Chapter"),
};

export const chapterPhotos: Photo[] = [
  p("/images/chapter/1.jpg", 2000, 1336, "Members gathered at the Plateau State chapter event"),
  p("/images/chapter/2.jpg", 2000, 1471, "Presentation of City Boy Movement caps"),
  p("/images/chapter/3.jpg", 1600, 2000, "A dignitary signs the register in a City Boy Movement cap"),
  p("/images/chapter/4.jpg", 2000, 1336, "Renewed Hope registration kiosk"),
  p("/images/chapter/5.jpg", 2000, 1336, "Members registering at the chapter event"),
];

export const coordinatorPhotos: Photo[] = [
  p("/images/coordinators/2.jpg", 2000, 1420, "Coordinators and guests at the inauguration in Jos"),
  p("/images/coordinators/1.jpg", 1044, 696, "Daser David celebrates with guests at the coordinators' inauguration"),
  p("/images/coordinators/3.jpg", 2000, 1334, "LGA and ward coordinators seated at the inauguration"),
  p("/images/coordinators/4.jpg", 970, 696, "Cultural performers at the coordinators' inauguration"),
];

export const governorPhotos: Photo[] = [
  p("/images/governor/5.jpg", 2000, 1625, "Daser David presents City Boy Movement regalia to Governor Caleb Mutfwang"),
  p("/images/governor/7.jpg", 2000, 1739, "Governor Mutfwang receives an award of recognition for youth inclusion"),
  p("/images/governor/1.jpg", 2000, 1333, "The Governor addresses the Movement at Government House, Jos"),
  p("/images/governor/13.jpg", 1280, 854, "The Governor and the State Director in conversation"),
  p("/images/governor/6.jpg", 2000, 1448, "The Governor speaks to the Movement's delegation"),
  p("/images/governor/8.jpg", 2000, 1587, "The Governor wearing the City Boy Movement scarf"),
  p("/images/governor/11.jpg", 2000, 1348, "The award of recognition for youth inclusion in Plateau State"),
  p("/images/governor/12.jpg", 2000, 1335, "The Governor greets members of the Movement"),
  p("/images/governor/10.jpg", 1080, 787, "Daser David signs the visitors' register at Government House"),
  p("/images/governor/9.jpg", 1280, 854, "State executives and LGA coordinators at Government House"),
  p("/images/governor/14.jpg", 2000, 1333, "Movement members in the hall at Government House"),
  p("/images/governor/2.jpg", 2000, 1336, "Courtesy visit at Government House, Jos"),
  p("/images/governor/16.jpg", 1280, 854, "Leaders at Government House, Jos"),
  p("/images/governor/3.jpg", 1280, 853, "Handshakes at Government House, Jos"),
  p("/images/governor/15.jpg", 914, 1280, "A leader in a City Boy Movement North Central cap"),
];

export const governorBirthday = p("/images/governor/4.jpg", 942, 1143, "City Boy Movement birthday tribute to Governor Caleb Mutfwang");

export const grassrootsPhotos: Photo[] = [
  p("/images/grassroots/3.jpg", 1280, 960, "Members of the Association of Automobile Engineers, Plateau State, with the Movement"),
  p("/images/grassroots/2.jpg", 1280, 960, "Automobile Engineers' solidarity visit to the Movement"),
  p("/images/grassroots/1.jpg", 1280, 960, "Grassroots engagement in Jos North communities"),
  p("/images/grassroots/4.jpg", 2000, 1500, "Community members at a Movement engagement"),
];

export const leadershipPhotos: Photo[] = [
  p("/images/leadership/3.jpg", 2000, 1429, "State Working Committee strategy meeting"),
  p("/images/leadership/1.jpg", 2000, 1333, "Leaders of the Movement with a membership publication"),
  p("/images/leadership/6.jpg", 2000, 1429, "Members of the State Working Committee in session"),
  p("/images/leadership/2.jpg", 696, 1044, "Cultural performance at a Movement event"),
];

export const nationalPhotos: Photo[] = [
  p("/images/national/3.jpg", 2000, 1506, "Members at the City Boy Movement National Retreat"),
  p("/images/national/1.jpg", 2000, 1428, "A speaker at the National Retreat"),
  p("/images/national/2.jpg", 2000, 1332, "State directors greet national leaders"),
  p("/images/national/4.jpg", 1065, 710, "Empowerment items laid out at a national rally"),
];

export const patronPhotos: Photo[] = [
  p("/images/patrons/2.jpg", 2000, 1332, "A patron is decorated with the Jos North LGA chapter sash"),
  p("/images/patrons/1.jpg", 1280, 854, "Hon. Chief Ephraim Usman Gaar speaks after his investiture as Kanam LGA Patron"),
  p("/images/patrons/4.jpg", 2000, 1332, "Members in City Boy Movement T-shirts at a patron's investiture"),
  p("/images/patrons/3.jpg", 1280, 854, "Guests at a patron's investiture"),
];

export const studentPhotos: Photo[] = [
  p("/images/students/3.jpg", 2000, 1334, "Student Wing members at a campus engagement"),
  p("/images/students/1.jpg", 2000, 1429, "Students take the City Boy pledge"),
  p("/images/students/2.jpg", 2000, 1429, "Campus coordinators at the Movement's office"),
  p("/images/students/4.jpg", 2000, 1333, "Daser David with student leaders"),
  p("/images/students/5.jpg", 2000, 1334, "Students registering on their phones"),
  p("/images/students/6.jpg", 2000, 1334, "A student registers during the campus drive"),
];

export const heroBackgrounds = {
  home: "/images/chapter/1.jpg",
  about: "/images/home/2.jpg",
  apc: "/images/governor/14.jpg",
  national: "/images/national/3.jpg",
  leadership: "/images/leadership/3.jpg",
  patron: "/images/governor/8.jpg",
  operation: "/images/coordinators/3.jpg",
  students: "/images/students/3.jpg",
  grassroots: "/images/grassroots/4.jpg",
  news: "/images/chapter/4.jpg",
  gallery: "/images/national/3.jpg",
  join: "/images/home/2.jpg",
};

/* ------------------------------------------------------------------ */
/* People                                                              */
/* ------------------------------------------------------------------ */

export const director = {
  name: "Prince Daser David",
  title: "Plateau State Director",
  roles: ["President/CEO, Digital Bridge Institute", "Former DG, Plateau State ICT Development Agency", "Founder, nHub Nigeria"],
  bio: [
    "Prince Daser David leads the City Boy Movement in Plateau State. A technologist and public servant, he is President/CEO of the Digital Bridge Institute, former pioneer Director General of the Plateau State ICT Development Agency and founder of nHub Nigeria, Northern Nigeria’s first innovation hub.",
    "Under his direction the chapter has built a statewide structure across all 17 LGAs, 207 wards and 4,989 polling units, grown past 31,000 members and unveiled Operation Rock Solid — its data-driven plan to mobilise one million votes for President Bola Ahmed Tinubu in 2027.",
  ],
  quote:
    "Your appointment is not a title; it is a responsibility. You are the face of this movement in your communities. Mobilize with wisdom, promote peace, and educate your people on the Renewed Hope agenda.",
  photo: photos.director,
  website: "", // TODO: link to the Daser David website once live
};

export type Member = { name: string; role: string };

/** State Working Committee, announced 26 February 2026. */
export const stateWorkingCommittee: Member[] = [
  { name: "Hon. Peter Zaki", role: "State Coordinator" },
  { name: "Mr. Pancin Jatau", role: "State Secretary" },
  { name: "Dr. Moven Rosemary", role: "Assistant Secretary" },
  { name: "Comrade Nanzing Nanla", role: "State Student Coordinator" },
  { name: "Promise Yatu", role: "State Contact & Mobilization Coordinator" },
  { name: "Mr. Azi Itse Zico", role: "State Organizing Secretary" },
  { name: "Hon. Gali Tagwaye", role: "State Welfare & Logistics Officer" },
  { name: "Barr. Samuel Dido", role: "State Legal Adviser" },
  { name: "Hon. Austine Nwachukwu", role: "State Publicity Secretary" },
  { name: "Mr. Kichime Denkang", role: "State Finance Director" },
  { name: "Mr. Golepji David Wambutda", role: "State Communication and Media Director" },
  { name: "Ms. Nankwat Tongtok", role: "State Treasurer" },
  { name: "Mr. Echelon Samuel", role: "State Non-Indigenes Coordinator" },
  { name: "Mr. Segun Oluwatuyi Emmanuel", role: "Assistant Non-Indigenes Coordinator" },
  { name: "Moses Musa Breh", role: "State Disability Coordinator" },
];
// Note: the Assistant State Student Coordinator appointment was withdrawn on
// 24 Aug 2026 pending due process, so that office is not listed.

export const directorates: { name: string; head: string; text: string }[] = [
  { name: "Media, Communications & Public Affairs", head: "Golepji Wambutda", text: "Press releases, City Boy Media and the chapter’s public voice." },
  { name: "Student Affairs", head: "Comrade Nanzing Nanla", text: "Campus coordinators across tertiary institutions in Plateau State." },
  { name: "Gender & Inclusion (Student Directorate)", head: "Ms. Chloe Selzing", text: "Making sure young women and every group have a seat at the table." },
  { name: "ICT / Data Office & ICT Marshals", head: "", text: "Digital membership registration and the data behind Operation Rock Solid." },
];

export const lgas: { name: string; coordinator: string }[] = [
  "Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North",
  "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase",
].map((name) => ({ name, coordinator: "" })); // TODO: add each coordinator from the 31 July 2026 "Know your LGA Coordinator" cards

export const lgaCoordinatorsPost =
  "https://www.facebook.com/dasersoft/posts/pfbid0Gin6MfSD816gLTUuaFaAQXQFBroekKioPAJcCCHPbUFM3x8iajZPS9QbLZmXYwthl";

/* ------------------------------------------------------------------ */
/* Patron                                                              */
/* ------------------------------------------------------------------ */

export const patron = {
  name: "H.E. Barr. Caleb Manasseh Mutfwang",
  title: "Executive Governor of Plateau State",
  role: "Patron and Chief Adviser, City Boy Movement, Plateau State Chapter",
  bio: [
    "Barr. Caleb Manasseh Mutfwang is the Executive Governor of Plateau State. He was sworn in on 29 May 2023, and his deputy is Her Excellency Ngo Josephine Piyo.",
    "He was born on 12 March 1965 and went to school in Mangu LGA and at Boys Secondary School, Gindiri. He studied law at the University of Jos and was called to the Nigerian Bar in 1989. He was Chairman of Mangu Local Government Area before he became Governor.",
  ],
  facts: [
    { label: "Sworn in", value: "29 May 2023" },
    { label: "Deputy", value: "H.E. Ngo Josephine Piyo" },
    { label: "Born", value: "12 March 1965" },
    { label: "Education", value: "Law, University of Jos; called to the Bar 1989" },
    { label: "Previously", value: "Chairman, Mangu LGA" },
    { label: "Joined APC", value: "2 January 2026" },
  ],
  joining: {
    text: "On 2 January 2026, Governor Mutfwang left the PDP and joined the All Progressives Congress at an event in Jos. APC State Chairman Hon. Rufus Bature received him into the party. He said the decision came after “prayers, wide consultations, and careful consideration of the best interests of Plateau State,” and declared that “Plateau State will stand firmly with President Bola Ahmed Tinubu.”",
    quote: "We have come to add value, not subtract; to build, not divide.",
  },
  timeline: [
    {
      date: "20 January 2026",
      title: "Courtesy visit to Government House",
      text: "Less than three weeks after he joined the APC, State Director Daser David led the Movement’s state executives and LGA Coordinators on a courtesy visit to him at the New Government House, Little Rayfield, Jos. His Deputy and members of the State Executive Council were there. He was dressed in City Boy Movement attire, given an award of recognition for youth inclusion in Plateau State, and pledged his support to the Movement.",
    },
    {
      date: "12 March 2026",
      title: "Birthday tribute",
      text: "The Movement celebrated his birthday, calling him “a remarkable leader” and “a powerful symbol of mentorship and encouragement to young people.”",
    },
    {
      date: "21 September 2026",
      title: "Formally accepts the role of Patron",
      text: "On chapter inauguration day, he received the national and zonal leadership of the Movement, alongside APC National Chairman Prof. Nentawe Yilwatda, and formally accepted the role of Patron of the Plateau State City Boy Movement.",
    },
  ],
  quotes: [
    { text: "Plateau is rising, and history will remember your service.", by: "The Movement’s birthday tribute, 12 March 2026" },
    {
      text: "We deeply appreciate His Excellency, Governor Caleb Mutfwang, for the warm reception and for accepting the responsibility of serving as Patron.",
      by: "Daser David, State Director",
    },
  ],
};

export const otherPatrons: { name: string; role: string; text: string }[] = [
  {
    name: "Barr. Seyi Tinubu",
    role: "National Patron, City Boy Movement",
    text: "State directors, including Plateau’s, paid a courtesy visit to the National Patron with the National Secretariat in February 2026.",
  },
  {
    name: "Hon. Chief Ephraim Usman Gaar",
    role: "Patron, Kanam LGA Chapter",
    text: "Commissioner for Chieftaincy & Local Government Affairs. Conferred Patron in April 2026 and donated a vehicle to the Kanam LGA chapter in June 2026.",
  },
  {
    name: "Jos North LGA Chairman",
    role: "Patron, Jos North LGA",
    text: "Decorated as Patron of the Movement in Jos North on 10 March 2026, pledging full support for youth engagement and community development.",
  },
];

/* ------------------------------------------------------------------ */
/* APC                                                                 */
/* ------------------------------------------------------------------ */

export const apc = {
  heading: "Our relationship with the APC",
  text: "The City Boy Movement is a support group, not a political party. It is one of the frontline groups working for President Bola Ahmed Tinubu’s re-election in 2027 on the platform of the All Progressives Congress (APC). In Plateau State, we work closely with the APC leadership to take the Renewed Hope message to every ward and polling unit.",
  quote:
    "We remain fully aligned with the vision of the APC in Plateau State. We are not competing with the party; we are partners in progress, committed to strengthening our structures across all wards and polling units.",
  appeal:
    "This is the time for unity, partnership, and collective action. The City Boy Movement is your platform. Let us work together to secure a stronger Plateau and a stronger APC.",
  leaders: [
    {
      name: "Prof. Nentawe Yilwatda",
      role: "APC National Chairman (from Plateau)",
      text: "Supported the December 2025 coordinators’ inauguration, and was with the Governor when the Governor received the Movement’s leaders on inauguration day, 21 September 2026.",
    },
    {
      name: "Hon. Rufus Bature",
      role: "APC Plateau State Chairman",
      text: "Chaired the inauguration of the LGA and Ward Coordinators in December 2025.",
    },
    {
      name: "H.E. Caleb Mutfwang",
      role: "Governor of Plateau State · Patron of the Movement",
      text: "Joined the APC from the PDP in January 2026 and pledged his support for President Tinubu’s re-election.",
    },
  ],
  votes:
    "The APC National Chairman has said the party’s target is over one million votes for President Tinubu in Plateau in 2027. Our Operation Rock Solid framework has the same goal: to mobilise one million votes through a data-driven structure across all 17 LGAs.",
  renewedHope: [
    { title: "Roads", text: "Flag-off of the Akwanga–Jos–Gombe Road, the Babban Lamba–Sharam Road and the Mararaba Jama’a–Pankshin–Langtang–Mikang–Taraba Road." },
    { title: "Students", text: "NELFUND student loans: UniJos students have received their school fees and upkeep payments." },
    { title: "Security", text: "Expansion of the Nigerian Army with new divisions to improve security coverage." },
  ],
};

/* ------------------------------------------------------------------ */
/* National movement                                                   */
/* ------------------------------------------------------------------ */

export const nationalMovement = {
  intro:
    "The Plateau State Chapter is part of the national City Boy Movement — a frontline support group for President Bola Ahmed Tinubu’s re-election in 2027, with state chapters, zonal coordinators and a diaspora directorate.",
  leaders: [
    { name: "Barr. Seyi Tinubu", role: "National Patron" },
    { name: "Hon. Francis Oluwatosin (Tosin) Shoga", role: "Director General" },
    { name: "Dr. Emana Ambrose-Amawhe", role: "National Chief Press Secretary / Official Spokesperson" },
    { name: "Ambassador Abdul Fatai Gambari", role: "North Central Coordinator" },
    { name: "Mubarak Lawal", role: "Director of Support Groups" },
  ],
  structure: [
    { level: "National", text: "Director General and National Secretariat set direction, run national campaigns and oversee every chapter." },
    { level: "Zonal", text: "Zonal coordinators — Plateau sits in the North Central zone." },
    { level: "State", text: "State Directors lead state chapters and their working committees." },
    { level: "LGA & Ward", text: "Coordinators take the work to every community and polling unit." },
  ],
  events: [
    { date: "13–16 July 2026", title: "National Retreat", text: "Three days of engagement, learning and fellowship. “Together, we move forward. Together, we win.”" },
    { date: "14–15 March 2026", title: "Renewed Hope South East Youth Tour, Owerri", text: "A Policy Summit and an Empowerment Rally drawing thousands of young Nigerians." },
    { date: "30 March 2026", title: "Standing with Plateau in grief and in hope", text: "The National Secretariat’s statement after tragic attacks in Plateau State, signed by DG Francis Tosin Shoga." },
    { date: "10–11 February 2026", title: "Visit to the National Patron", text: "State Directors joined the National Secretariat on a courtesy visit to Barr. Seyi Tinubu, then a North Central condolence visit to Kwara State." },
  ],
};

/* ------------------------------------------------------------------ */
/* Operation Rock Solid                                                */
/* ------------------------------------------------------------------ */

export const operation = {
  heading: "Operation Rock Solid",
  summary:
    "A structured, data-driven grassroots mobilisation framework designed to strengthen our organisation, deepen engagement across the 17 Local Government Areas, Wards and Polling Units, and build a coordinated structure capable of reaching people at the grassroots.",
  target: "1,000,000",
  targetLabel: "votes for President Bola Ahmed Tinubu from Plateau in 2027",
  lines: ["Operation Rock Solid is about structure.", "It is about organisation.", "It is about coordination.", "It is about taking mobilisation to every level of the grassroots."],
  levels: [
    { value: "1", label: "State Working Committee" },
    { value: "17", label: "LGA coordinators" },
    { value: "207", label: "Ward structures" },
    { value: "4989", label: "Polling units" },
  ],
  howItWorks: [
    { title: "Know your structure", text: "Every member belongs to a polling unit, a ward and an LGA, each with a coordinator." },
    { title: "Reach your circle", text: "Each member mobilises at least 32 people through family, community, faith and social networks." },
    { title: "Register and verify", text: "New members sign up online through the ICT/Data Office; Headquarters verifies the register." },
    { title: "Inform and turn out", text: "Coordinators share the Renewed Hope record and get supporters to the polls in 2027." },
  ],
  milestones: [
    { date: "23 July 2026", text: "17 LGA Coordinators and the State Working Committee align with Operation Rock Solid." },
    { date: "19 August 2026", text: "Statewide structure submitted to National Headquarters." },
    { date: "16 September 2026", text: "“The date is set. The structure is ready. Operation Rock Solid is here.”" },
    { date: "21 September 2026", text: "Framework unveiled at Gowon Hall, Crispan Hotel, Rayfield Road, Jos." },
  ],
};

/* ------------------------------------------------------------------ */
/* News                                                                */
/* ------------------------------------------------------------------ */

export type NewsItem = {
  slug: string;
  date: string;
  dateTime: string;
  category: "Chapter" | "Grassroots" | "Students" | "Patrons" | "National" | "Press release" | "Notice";
  title: string;
  summary: string;
  body: string[];
  photos: Photo[];
  source?: string;
};

export const news: NewsItem[] = [
  {
    slug: "jos-north-grassroots-engagement",
    date: "19 October 2026",
    dateTime: "2026-10-19",
    category: "Grassroots",
    title: "Grassroots engagement in action: the Movement extends its reach across Jos North",
    summary: "Engr. Segun Emmanuel takes the membership drive to Naraguta A, Naraguta B and Jos Jarawa.",
    body: [
      "As the CityBoy Movement Plateau State Chapter sustains its membership drive via the ICT/data office and the ICT Marshals team, the Assistant Coordinator, Non-Indigenes, Engr. Segun Emmanuel, continues to engage communities across Naraguta A, Naraguta B and Jos Jarawa in Jos North Local Government Area.",
      "A committed grassroots mobiliser, Engr. Segun Emmanuel is taking the message of the CityBoy Movement directly to the people, fostering community engagement, expanding awareness, and encouraging citizens to participate in the Movement’s activities.",
      "His continued outreach reflects the importance of grassroots mobilisation, inclusive participation, and sustained engagement in building a movement that connects with communities across Plateau State. From community to community, the engagement continues!",
    ],
    photos: [grassrootsPhotos[2], grassrootsPhotos[3]],
  },
  {
    slug: "automobile-engineers-partnership",
    date: "19 October 2026",
    dateTime: "2026-10-19",
    category: "Grassroots",
    title: "Automobile Engineers partner with CityBoy Movement Plateau",
    summary: "The Association of Automobile Engineers, Plateau State, pledges to mobilise across all 17 LGAs.",
    body: [
      "The Association of Automobile Engineers, Plateau State, has expressed its readiness to partner with the CityBoy Movement, Plateau State Chapter, towards mobilising support for President Bola Ahmed Tinubu’s re-election in 2027.",
      "During a solidarity visit, the Association highlighted its extensive membership across all 17 Local Government Areas of Plateau State and across Nigeria, pledging to collaborate with the Movement in advancing national progress and prosperity.",
      "The visit reinforces the CityBoy Movement’s commitment to engaging, informing and empowering citizens to make informed decisions while building strategic partnerships that strengthen grassroots mobilisation and democratic participation.",
    ],
    photos: [grassrootsPhotos[0], grassrootsPhotos[1]],
    source: "Media and Communications Directorate",
  },
  {
    slug: "chapter-inauguration-operation-rock-solid",
    date: "21 September 2026",
    dateTime: "2026-09-21",
    category: "Chapter",
    title: "Chapter inaugurated as Operation Rock Solid is unveiled",
    summary: "The Governor accepts the role of Patron, and a new wave of registration begins.",
    body: [
      "Ahead of the inauguration of the City Boy Movement, Plateau State Chapter, State Director Daser David led the national and zonal leadership of the Movement on a courtesy visit to the Executive Governor of Plateau State and Patron of the Movement, His Excellency, Barr. Caleb Manasseh Mutfwang. They were warmly received by the Governor, alongside the National Chairman of the APC, Professor Nentawe Yilwatda.",
      "It was an opportunity to formally present the leadership of the City Boy Movement to the Governor and to reaffirm the Movement’s commitment to building a strong, organised and purposeful youth movement in Plateau State.",
      "The inauguration that followed, at Gowon Hall, Crispan Hotel, Rayfield Road, Jos, unveiled Operation Rock Solid and launched a new wave of membership registration. “The City Boy Movement is an enabler of young people,” the State Director said.",
    ],
    photos: [chapterPhotos[0], chapterPhotos[4], chapterPhotos[1]],
  },
  {
    slug: "plateau-get-ready",
    date: "16 September 2026",
    dateTime: "2026-09-16",
    category: "Chapter",
    title: "Plateau, get ready! The date is set for Operation Rock Solid",
    summary: "Formal inauguration and unveiling of the framework on Monday, 21 September 2026.",
    body: [
      "The City Boy Movement, Plateau State Chapter is set to make a significant statement as we gather for the formal inauguration of the Plateau State Chapter and the unveiling of the Operation Rock Solid Framework.",
      "This is more than an inauguration. It is the unveiling of a structured, data-driven grassroots mobilisation framework designed to strengthen our organisation, deepen engagement across the 17 Local Government Areas, Wards and Polling Units, and build a coordinated structure capable of reaching people at the grassroots.",
      "THE DATE IS SET. THE STRUCTURE IS READY. OPERATION ROCK SOLID IS HERE. Date: Monday, 21 September 2026. Venue: Gowon Hall, Crispan Hotel, Rayfield Road, Jos. Time: 10:00am.",
    ],
    photos: [photos.apcFlyer],
  },
  {
    slug: "member-verification-notice",
    date: "5 September 2026",
    dateTime: "2026-09-05",
    category: "Notice",
    title: "General notice to all members: Headquarters verification calls",
    summary: "If Headquarters calls you, you will not be asked to provide anything.",
    body: [
      "If you are contacted by the City Boy Headquarters, please do not panic. The Headquarters is currently carrying out a verification exercise to confirm our members and ensure that our membership register is accurate and up to date.",
      "You will not be asked to provide anything. The purpose of the call is simply to confirm that you are a member of the City Boy Movement.",
      "We kindly encourage all members who are contacted to cooperate with the verification team. Thank you for your cooperation.",
    ],
    photos: [],
  },
  {
    slug: "former-special-assistants-join",
    date: "30 August 2026",
    dateTime: "2026-08-30",
    category: "Chapter",
    title: "Former Special Assistants to ex-Governor Lalong reunite and join the Movement",
    summary: "A renewed political family adopted into the City Boy Movement.",
    body: [
      "State Director Daser David brought together the former Special Assistants to the former Governor of Plateau State, Senator Simon Bako Lalong, for a reunion that marked their first gathering as a political family since 2022.",
      "After honest and extensive conversations about the political atmosphere in Plateau State and Nigeria, they agreed to work together as one entity and mobilise their collective experience, networks and goodwill in support of the re-election of President Bola Ahmed Tinubu in 2027.",
      "The hallmark of the meeting was the collective decision to officially adopt the political family into the City Boy Movement — “the beginning of a renewed political family, united in purpose, guided by a defined framework, and committed to working together for a stronger Plateau State and a better Nigeria.”",
    ],
    photos: [],
  },
  {
    slug: "emir-of-kanam-visit",
    date: "29 August 2026",
    dateTime: "2026-08-29",
    category: "Grassroots",
    title: "Courtesy visit to the Emir of Kanam after KADA Day 2026",
    summary: "Members visit HRH Alhaji Mu’azu Muhammad II in Dengi.",
    body: [
      "After serving as Chairman of the Occasion at the Kanam Development Association (KADA) Day 2026 in Dengi, State Director Daser David led members of the City Boy Movement, Plateau State, on a courtesy visit to the Palace of the Emir of Kanam, His Royal Highness Alhaji Mu’azu Muhammad II.",
      "“When a community invests in knowledge and institutions, it invests in generations yet unborn.”",
    ],
    photos: [],
  },
  {
    slug: "press-release-due-process",
    date: "24 August 2026",
    dateTime: "2026-08-24",
    category: "Press release",
    title: "CBM Plateau rejects allegations of shielding suspect, calls for due process",
    summary: "The Movement withdraws an appointment to let due process take its course.",
    body: [
      "The attention of the City Boy Movement Plateau State Chapter has been drawn to social media posts seeking to associate it with the unfortunate incident leading to the death of one Ibee, after a person alleged on social media to have been involved was seen in photos at the inauguration of the Movement’s Campus Coordinators.",
      "The City Boy Movement does not have any intention nor wield any such powers to stall or obstruct police investigation of any citizen, let alone aid and abet the commission of crime. Allegations of crime should be left to the appropriate law-enforcement agencies to investigate in accordance with the law, and any determination of criminal responsibility remains a matter for the competent authorities and ultimately the courts.",
      "For added measure, the Movement withdrew the appointment of the person concerned as Deputy Student Coordinator to allow transparency to take centre stage. Let due process take its course and justice be served fairly.",
    ],
    photos: [],
    source: "Golepji Wambutda, Director Media, Communications and Public Affairs Directorate",
  },
  {
    slug: "campus-coordinators-inaugurated",
    date: "21 August 2026",
    dateTime: "2026-08-21",
    category: "Students",
    title: "Students ready to mobilise: Campus Coordinators inaugurated",
    summary: "The Student Directorate inaugurates coordinators across tertiary institutions.",
    body: [
      "The Student Directorate of the City Boy Movement, Plateau State Chapter, successfully inaugurated Campus Coordinators across tertiary institutions in the state.",
      "The inauguration was followed by an engaging discussion on the efforts of President Bola Ahmed Tinubu’s administration to support Nigerian students, particularly through NELFUND and its intervention in reducing financial barriers that contribute to student dropouts. Student leaders across the institutions expressed their readiness to mobilise students in support of the Movement.",
      "The students are organised. The students are engaged. The students are ready.",
    ],
    photos: [studentPhotos[1], studentPhotos[2]],
  },
  {
    slug: "structure-submitted",
    date: "19 August 2026",
    dateTime: "2026-08-19",
    category: "Chapter",
    title: "Statewide structure submitted to National Headquarters",
    summary: "A key step ahead of the unveiling of Operation Rock Solid.",
    body: [
      "The Plateau State Chapter of the City Boy Movement submitted its statewide structure to the National Headquarters ahead of the September unveiling of Operation Rock Solid, our data-driven blueprint for grassroots mobilisation towards delivering one million votes for President Bola Ahmed Tinubu in the 2027 Presidential Election.",
      "We remain committed to building a coordinated, disciplined and effective grassroots movement across Plateau State.",
    ],
    photos: [],
  },
  {
    slug: "31278-members",
    date: "13 August 2026",
    dateTime: "2026-08-13",
    category: "Chapter",
    title: "31,278 members and counting!",
    summary: "Our grassroots structure now spans all 17 LGAs, wards and polling units.",
    body: [
      "The City Boy Movement, Plateau State Chapter, continues to grow, with our grassroots structure now spanning all 17 LGAs, wards and polling units.",
      "This is a testament to the growing strength of our community and the commitment of our members. We keep building. We keep growing.",
    ],
    photos: [photos.membersGraphic],
  },
  {
    slug: "unijos-students-week",
    date: "27 July 2026",
    dateTime: "2026-07-27",
    category: "Students",
    title: "Student Wing engages UniJos Students’ Week",
    summary: "Students share NELFUND experiences and register as new members.",
    body: [
      "The CityBoy Movement Plateau State Student Wing had a productive engagement with students during the University of Jos Students’ Week, sharing the Renewed Hope Agenda of President Bola Ahmed Tinubu.",
      "The response was overwhelmingly positive, with many students expressing appreciation for government interventions, particularly the Nigerian Education Loan Fund (NELFUND), having recently received their school fees and upkeep stipends.",
      "The engagement also witnessed the registration of new members as we continue to inform, engage, and empower young Nigerians.",
    ],
    photos: [studentPhotos[4], studentPhotos[5]],
  },
  {
    slug: "strategy-meetings",
    date: "23 July 2026",
    dateTime: "2026-07-23",
    category: "Chapter",
    title: "Strategy meetings with the 17 LGA Coordinators and State Working Committee",
    summary: "Aligning with Operation Rock Solid after the National Retreat.",
    body: [
      "The State Director presided over two strategic meetings: the first with Coordinators from the 17 Local Government Areas, followed by a meeting with the State Working Committee. Both were strategy engagements focused on strengthening the structure and preparing for the task ahead.",
      "He shared key takeaways from the National Retreat, and the meetings aligned with the Operation Rock Solid initiative, a statewide commitment to mobilise one million votes for the re-election of President Bola Ahmed Tinubu in 2027.",
      "They also reflected on infrastructure in Plateau — the flag-off of the Akwanga–Jos–Gombe Road, the Babban Lamba–Sharam Road and the Mararaba Jama’a–Pankshin–Langtang–Mikang–Taraba Road — and the expansion of the Nigerian Army through additional divisions.",
    ],
    photos: [leadershipPhotos[0], leadershipPhotos[2]],
  },
  {
    slug: "kanam-vehicle-donation",
    date: "4 June 2026",
    dateTime: "2026-06-04",
    category: "Patrons",
    title: "Vehicle donated to the Kanam LGA chapter",
    summary: "Hon. Ephraim Usman’s gift ahead of the Movement’s empowerment programme.",
    body: [
      "Special appreciation to Hon. Ephraim Usman for his generous donation of a vehicle to the Kanam Local Government Chapter of the City Boy Movement Plateau State. This gesture comes at a crucial time as we intensify preparations for our upcoming empowerment programme and continue expanding our reach across communities.",
    ],
    photos: [],
  },
  {
    slug: "kanam-patron-ephraim-usman-gaar",
    date: "21 April 2026",
    dateTime: "2026-04-21",
    category: "Patrons",
    title: "Hon. Chief Ephraim Usman Gaar conferred Patron of the Kanam LGA chapter",
    summary: "“A true builder of people and communities.”",
    body: [
      "The City Boy Movement, Plateau State Chapter, conferred the title of Patron on Hon. Chief Ephraim Usman Gaar, the Honourable Commissioner for Chieftaincy and Local Government Affairs, Plateau State.",
      "The Plateau State Coordinator, Hon. Peter Zaki, said: “This honour is not merely ceremonial, it is a heartfelt recognition of a leader whose tenure in office has been defined by vision, commitment, and tangible development.”",
      "Responding after the investiture, Hon. Gaar said he was honoured, emphasised the need to support the Movement to mobilise the grassroots, and promised to encourage and support the City Boy Movement to achieve greatness in Plateau State and beyond.",
    ],
    photos: [patronPhotos[1], patronPhotos[2]],
    source: "Publicity Secretary, City Boy Movement, Plateau State Chapter",
  },
  {
    slug: "jos-north-patron",
    date: "10 March 2026",
    dateTime: "2026-03-10",
    category: "Patrons",
    title: "Jos North Council Chairman decorated as LGA Patron",
    summary: "Led by State Coordinator Hon. Peter Zaki at the LGA Secretariat.",
    body: [
      "The City Boy Movement Plateau State team, led by Hon. Peter Zaki, officially decorated the Jos North Local Government Chairman as the Patron of the Movement in Jos North at the Local Government Secretariat.",
      "The chairman pledged his full support to President Bola Ahmed Tinubu and the City Boy Movement, committing to advance youth engagement and community development in Jos North. The appointment strengthens grassroots leadership and civic participation.",
    ],
    photos: [patronPhotos[0], patronPhotos[3]],
  },
  {
    slug: "state-working-committee",
    date: "26 February 2026",
    dateTime: "2026-02-26",
    category: "Chapter",
    title: "New State Working Committee announced",
    summary: "Plus a call for all Tinubu support groups in Plateau to sign up with the Movement.",
    body: [
      "Congratulations to the new State Working Committee of the City Boy Movement, Plateau State.",
      "The chapter also called on all Tinubu support groups in Plateau State to complete their registration with the Movement — an exercise to ensure proper documentation and to position Plateau State groups to fully benefit from forthcoming palliatives and empowerment initiatives.",
    ],
    photos: [photos.swcList, photos.supportFlyer],
  },
  {
    slug: "governor-courtesy-visit",
    date: "20 January 2026",
    dateTime: "2026-01-20",
    category: "Patrons",
    title: "Courtesy visit to Governor Mutfwang at New Government House",
    summary: "The Governor is decorated in Movement attire and honoured for youth inclusion.",
    body: [
      "State Director Daser David led the City Boy Movement, Plateau State Chapter on a courtesy and familiarity visit to the Executive Governor of Plateau State at the New Government House, Little Rayfield, Jos, joined by members of the State Executive Council and Local Government Coordinators.",
      "They were warmly received by the Governor alongside his Deputy, Her Excellency Ngo Josephine Piyo, members of the State Executive Council, and other political stakeholders. The Governor expressed confidence in the ongoing reforms and pledged his support to the City Boy Movement.",
      "The State Director decorated His Excellency with the City Boy Movement attire and presented him with an award of recognition for youth inclusion in Plateau State. Together, we move forward. City Boys to the world.",
    ],
    photos: [governorPhotos[0], governorPhotos[1], governorPhotos[2]],
  },
  {
    slug: "lga-ward-coordinators-inaugurated",
    date: "4 December 2025",
    dateTime: "2025-12-04",
    category: "Chapter",
    title: "LGA and Ward Coordinators inaugurated at Crest Hotel, Jos",
    summary: "Chaired by Plateau APC Chairman Hon. Rufus Bature.",
    body: [
      "The Plateau State Chapter of the City Boy Movement inaugurated its Local Government and Ward Coordinators at a well-attended ceremony at Crest Hotel, Jos. The event attracted the Speaker of the Plateau State House of Assembly, Rt. Hon. Daniel Naanlong, former Speaker Rt. Hon. Yakubu Sanda, and Hon. Suleiman Kwande, and was chaired by the Plateau State APC Chairman, Hon. Rufus Bature. Elder Nanle Gujor delivered a lecture on “Politics without Bitterness”.",
      "The State Director described the inauguration as “an important milestone in strengthening the Renewed Hope vision of President Bola Ahmed Tinubu across Plateau State,” and charged the coordinators: “Your appointment is not a title; it is a responsibility. You are the face of this movement in your communities.”",
      "“We remain fully aligned with the vision of the APC in Plateau State. We are not competing with the party; we are partners in progress, committed to strengthening our structures across all wards and polling units.”",
    ],
    photos: [coordinatorPhotos[0], coordinatorPhotos[2], coordinatorPhotos[1]],
  },
];

/* ------------------------------------------------------------------ */
/* Student wing                                                        */
/* ------------------------------------------------------------------ */

export const students = {
  intro:
    "The Student Directorate organises campus coordinators across tertiary institutions in Plateau State to promote civic participation, leadership and constructive conversations among students.",
  lines: ["The students are organised.", "The students are engaged.", "The students are ready."],
  quote: "The future belongs to the youth, and the time to prepare them for leadership is now.",
  focus: [
    { title: "Campus coordinators", text: "Inaugurated across tertiary institutions on 21 August 2026." },
    { title: "NELFUND", text: "Explaining the student loan scheme that has paid UniJos students’ fees and upkeep." },
    { title: "Gender & inclusion", text: "A dedicated coordinator making sure every student voice is heard." },
    { title: "Stable universities", text: "Appealing for continued engagement with ASUU towards a stable, well-funded system." },
  ],
};

/* ------------------------------------------------------------------ */
/* Join                                                                */
/* ------------------------------------------------------------------ */

export const joinSteps = [
  { title: "Sign up online", text: "Register for free at cbmnigeria.org — the Movement’s national sign-up." },
  { title: "Find your structure", text: "Connect with your LGA and ward coordinator in Plateau State." },
  { title: "Take part", text: "Join town halls, campus drives, empowerment programmes and community outreach." },
  { title: "Grow with us", text: "Mobilise your circle under Operation Rock Solid and grow into leadership." },
];

export const faqs = [
  { q: "Is the City Boy Movement a political party?", a: "No. It is a support group working for President Bola Ahmed Tinubu’s re-election in 2027 on the platform of the APC. We partner with the party; we do not compete with it." },
  { q: "Does membership cost anything?", a: "No. Membership is free. Never pay anyone to join, and only register through the official link, cbmnigeria.org." },
  { q: "Headquarters called me. Is it genuine?", a: "Headquarters carries out verification calls to keep the register accurate. You will not be asked to provide anything — the call only confirms that you are a member." },
  { q: "I lead a Tinubu support group in Plateau. How do we register?", a: "Register your group with the Movement at bit.ly/cityboyMovementSupport so it is properly documented." },
  { q: "Who is my LGA coordinator?", a: "Every one of the 17 LGAs has a coordinator. See the Leadership page, or the chapter’s Facebook page, City Boy Movement Plateau State." },
];

/* ------------------------------------------------------------------ */
/* Navigation & footer                                                 */
/* ------------------------------------------------------------------ */

export type NavLink = { href: string; label: string; description?: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const nav: NavItem[] = [
  {
    label: "About",
    children: [
      { href: "/about", label: "About the Chapter", description: "Who we are, our mission and structure" },
      { href: "/apc", label: "City Boy Movement & the APC", description: "Partners in progress" },
      { href: "/national", label: "The National Movement", description: "Where Plateau fits in" },
    ],
  },
  {
    label: "Leadership",
    children: [
      { href: "/leadership", label: "State Leadership", description: "Director, Working Committee, LGA coordinators" },
      { href: "/patron", label: "Our Patron", description: "H.E. Barr. Caleb Manasseh Mutfwang" },
    ],
  },
  {
    label: "Programmes",
    children: [
      { href: "/operation-rock-solid", label: "Operation Rock Solid", description: "One million votes from Plateau" },
      { href: "/grassroots", label: "Grassroots", description: "Communities, partners and LGA chapters" },
      { href: "/students", label: "Student Wing", description: "Campus coordinators across Plateau" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  { heading: "Movement", links: [{ href: "/about", label: "About the Chapter" }, { href: "/apc", label: "CBM & the APC" }, { href: "/national", label: "National Movement" }] },
  { heading: "Leadership", links: [{ href: "/leadership", label: "State Leadership" }, { href: "/patron", label: "Our Patron" }] },
  { heading: "Programmes", links: [{ href: "/operation-rock-solid", label: "Operation Rock Solid" }, { href: "/grassroots", label: "Grassroots" }, { href: "/students", label: "Student Wing" }] },
  { heading: "Updates", links: [{ href: "/news", label: "News & Press" }, { href: "/gallery", label: "Gallery" }, { href: "/join", label: "Join the Movement" }] },
];

export const socials: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://www.facebook.com/CityBoyPlateau" },
  { label: "X", href: "" }, // TODO
  { label: "Instagram", href: "" }, // TODO
  { label: "TikTok", href: "" }, // TODO
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export type GalleryGroup = { id: string; label: string; photos: Photo[] };

export const galleryGroups: GalleryGroup[] = [
  { id: "governor", label: "Government House", photos: governorPhotos },
  { id: "chapter", label: "Inauguration & drives", photos: [...chapterPhotos, photos.registration, photos.regalia] },
  { id: "coordinators", label: "Coordinators", photos: coordinatorPhotos },
  { id: "leadership", label: "Leadership", photos: [photos.director, photos.directorCap, ...leadershipPhotos] },
  { id: "students", label: "Student Wing", photos: studentPhotos },
  { id: "grassroots", label: "Grassroots", photos: grassrootsPhotos },
  { id: "patrons", label: "Patrons", photos: patronPhotos },
  { id: "national", label: "National", photos: nationalPhotos },
  { id: "flyers", label: "Flyers", photos: [photos.apcFlyer, photos.membersGraphic, photos.supportFlyer, photos.kycFlyer, photos.swcList, governorBirthday, photos.apcShirtFront, photos.apcShirtBack, photos.car] },
];
