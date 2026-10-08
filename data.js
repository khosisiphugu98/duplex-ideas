// Content for the walkthrough: one entry per stop on the tour.
// cam.pos / cam.look are in metres on the floor-plan grid (x → east, z → south, y up; the loft
// and roof terrace are at y = 2.8). Every cam.pos is a walkable spot — the tour walks you there.
// "fit" = measured clearances in the 3D model (sizes re-measured from the floor plan, ±15 cm).
window.HOUSE = {
  title: "Your duplex",
  subtitle: "Ideas for your duplex",
  intro:
    "The unit is long and narrow: a 2.8 m-wide lounge with a breakfast bar, two 2.9 m-wide bedrooms and a roof terrace about 2.9 m wide. So the plan favours fewer, better-placed pieces, things that fold or do two jobs, and walkways you never have to squeeze through. Downstairs is for everyday living and sleeping, with a real guest room. The balcony's built-in braai is retired into a counter, and the balcony becomes a coffee-and-utility spot. Braaiing moves up to the terrace, which gets a covered middle so it still works when it rains.",

  palette: [
    { name: "Warm white", hex: "#F3EDE3", note: "walls (replaces the lilac passage, greys and teal)" },
    { name: "Oak", hex: "#C49A6C", note: "your existing laminate, the desk tops and the stair" },
    { name: "Black steel", hex: "#22201E", note: "picks up the staircase, railing and outdoor frames" },
    { name: "Clay", hex: "#B8694A", note: "picks up the balcony and terrace tiles" },
    { name: "Olive & sage", hex: "#8B9171", note: "plants, textiles and the kitchen base units" },
  ],

  firstFive: [
    "Paint the inside warm white, including the lilac passage, the grey bedroom and the teal wall. It changes the whole feel for very little money.",
    "Put a proper double bed in the guest room. With 60–70 cm on each side, it fits without blocking the cupboards.",
    "Make the terrace usable in all weather: outdoor-rated furniture, a deck box for cushions, and a covered dining area.",
    "Add lamps. Today there are only ceiling lights, and warm lamps at eye level make a place feel lived in.",
    "Buy to these sizes: a sofa about 1.9 m long and no deeper than 90 cm, a 50–55\" TV on a low stand no taller than about 40 cm (it goes under the stair), and a guest double bed of 1.37 m.",
  ],

  notes: [
    "Room sizes come from the listing floor plan (checked against its scale bar) and your video, so they're accurate to about ±15 cm. Measure before you buy anything big.",
    "Comfort rules used throughout: main walkways at least 90 cm, other walkways at least 70 cm, at least 60 cm beside beds and in front of cupboards, 40–45 cm between a sofa and its table, and at least 75 cm behind dining chairs.",
    "Sectional title: the terrace roof (pergola), anything fixed to exterior walls, and using a braai on the terrace all need body-corporate approval. Ask before you buy.",
    "Fridge check: measure from the floor to the underside of the geyser box, and the recess width and depth. Height is what decides whether a normal fridge fits.",
    "Switch to <b>As it is</b> to see the unit today (empty, with the lilac passage, teal wall, carpets and white kitchen), then switch back to compare.",
  ],

  stops: [
    {
      id: "entry", name: "Front door & hall", area: "hall about 1.3 m wide", level: 0,
      photos: ["photos/video-front-door.jpg", "listing/13442270.jpg"],
      gem: "When you open the door, you look straight down the unit to the balcony slider, with the staircase on your right and the kitchen on your left.",
      ideas: [
        "<b>A slim shoe cabinet, just 25 cm deep,</b> on the east wall, with a round mirror above and three hooks. It stops short of the door so the door can still open fully against that wall.",
        "<b>Backup fridge spot:</b> if the fridge doesn't fit under the geyser box, a full-height one can stand against the wall beside the kitchen, facing the hall. The hall stays more than 1.2 m wide (see the kitchen card).",
      ],
      fit: ["Hall walkway past the shoe cabinet: about 1.1 m", "Front door opens fully (it swings towards the east wall)"],
      cam: { pos: [6.25, 1.6, 8.35], look: [4.8, 1.2, 2.6] },
    },
    {
      id: "lounge", name: "Lounge", area: "2.8 m wide (wall to stair) · double-height", level: 0,
      photos: ["listing/13442271.jpg", "listing/13442267.jpg"],
      gem: "Your idea works: put the TV under the high end of the stair and the sofa against the opposite wall. It frees the whole west wall for the sofa and gives about 2.9 m from sofa to screen.",
      ideas: [
        "<b>A 1.9 m sofa (no deeper than 90 cm) against the west wall</b>, stopping just short of the opening to the bedroom passage, so that opening stays completely clear.",
        "<b>A 50\" TV on a low stand under the stair</b> (1.2 m wide, 44 cm deep, about 38 cm high). The stair is more than 1.3 m high above it, and the TV top (about 1.07 m) stays below the stair's side beam from where you sit. Go no bigger than 55\", and no taller.",
        "<b>A low cabinet under the lower part of the stair</b> (from 62 cm of headroom), a coffee table about 50 × 100 cm, and a jute rug.",
        "<b>A reading chair and floor lamp in the corner by the slider</b>, and a rattan pendant in the double-height space.",
        "<b>Why this beats TV-on-the-wall:</b> with the sofa backing onto the stair, the TV ends up only 1.1–1.5 m away and there's no room for a coffee table. This way you get both, and a bigger screen.",
      ],
      fit: ["Sofa to coffee table: 44 cm", "Walkway along the stair: 98 cm (84 cm past the bar stools)", "Sofa to TV: about 2.9 m (ideal for 50–55\")", "Headroom over the TV stand: 1.3 m or more", "Passage opening to the bedrooms: fully clear"],
      cam: { pos: [5.7, 1.65, 2.4], look: [4.3, 0.85, 5.6] },
    },
    {
      id: "stair", name: "The staircase (TV wall)", area: "about 4 m long · rises from beside the slider", level: 0,
      photos: ["photos/video-stair.jpg", "listing/13442270.jpg"],
      gem: "The bottom step is right beside the balcony slider, and the stair rises along the east wall to the loft over the kitchen. The space under its upper half is where the TV goes.",
      ideas: [
        "<b>Under the stair, from low to high:</b> a 46 cm-high oak cabinet (games, cables), then the TV stand, then a tall plant where there's about 2.4 m of headroom.",
        "<b>Keep it all low and dark-backed</b> so the stair still reads as a floating sculpture.",
        "<b>Later, if you want, replace the chequer plate with oak tread caps.</b> It's the single biggest upgrade from industrial to warm.",
      ],
      fit: ["Low cabinet: 80 × 44 cm, 46 cm high (headroom 62 cm or more)", "TV stand: 120 × 44 cm (headroom 1.3 m or more)", "TV top from the sofa: below the stair's side beam"],
      cam: { pos: [4.3, 1.55, 5.65], look: [6.6, 1.0, 4.3] },
    },
    {
      id: "kitchen", name: "Kitchen", area: "L-shaped run + breakfast bar · 1.2 m aisle", level: 0,
      photos: ["listing/13442268.jpg", "listing/13442269.jpg"],
      gem: "A proper working kitchen: gas stove, granite tops, and a breakfast bar facing the lounge. The geyser is boxed in up near the ceiling over the recess beside the sink, and the floor under it is the obvious fridge spot.",
      ideas: [
        "<b>Fridge under the geyser box, if it's low enough.</b> The recess is about 1.0 m wide and 60 cm deep. Height is the limit: from the photos, the underside of the box looks to be about 1.7–1.8 m up. A fridge needs about 5 cm of air above it, so look for a <b>slim fridge-freezer 1.55–1.65 m tall, 55–60 cm wide</b>. That leaves a 30–40 cm gap beside it for a broom or pull-out pantry cupboard.",
        "<b>If the box is lower than about 1.6 m,</b> use an under-counter fridge (about 85 cm tall) with a freezer drawer or microwave shelf above it. Or put a full-height fridge against the outside of the recess wall, facing the hall (the entrance stays 87 cm wide).",
        "<b>Keep the geyser reachable:</b> don't block the box's access panel with shelving. Plumbers need to get in.",
        "<b>Eat at the bar every day:</b> two stools on the lounge side.",
        "<b>Refresh the white base units:</b> sage paint over a melamine primer, or vinyl wrap, plus matte black handles. The granite stays.",
      ],
      fit: ["Recess: about 1.0 m wide × 60 cm deep (estimated from the plan)", "Under the geyser box: about 1.75 m (estimated from the photos). <b>Please measure this one</b>", "Slim fridge shown: 60 × 60 × 160 cm, with a 30 cm cupboard beside it"],
      cam: { pos: [4.0, 1.6, 8.35], look: [5.6, 1.05, 9.45] },
    },
    {
      id: "braai", name: "Balcony", area: "3.9 × 1.9 m · built-in braai in the corner · over the pool garden", level: 0,
      photos: ["photos/video-balcony.jpg", "listing/13442273.jpg"],
      gem: "There's a built-in braai in the corner: a fire bed at counter height, a low black back, and a tall chimney with a spinning cap. Since you'll braai on the roof (better for smoke), this becomes your coffee and utility balcony.",
      ideas: [
        "<b>Retire the braai and turn it into a counter.</b> Put a hardwood top over the fire bed (about 70 × 65 cm, a spot for coffee, drinks or plants), re-plaster and paint the sooty back, and fit timber doors on the wood store so it becomes outdoor storage. Cap the chimney.",
        "<b>Or remove it completely</b> (body-corporate approval plus a builder) to gain about 1.4 × 0.7 m of floor.",
        "<b>A timber ledge on the low wall plus two bar stools.</b> Seated in a chair, the 1.1 m wall hides the pool garden. On a stool at the ledge you see it all.",
        "<b>A fold-flat drying rack on the bedroom wall</b>, 10 cm deep closed, and one big potted olive in the corner by the chimney.",
      ],
      fit: ["The slider's opening half: about 80 cm wide, kept clear all the way to the counter", "Ledge: 2.4 m long × 34 cm deep, at the top of the wall (1.05 m)", "Converted counter: about 70 × 65 cm, at 95 cm high"],
      cam: { pos: [4.55, 1.6, 1.65], look: [6.3, 1.0, 0.2] },
    },
    {
      id: "bath", name: "Bathroom", area: "2.0 × 2.5 m · bath + curved corner shower", level: 0,
      photos: ["photos/video-bathroom.jpg", "listing/13442261.jpg"],
      gem: "It's compact but complete: a bath across the end, a vessel basin under the window, and a curved corner shower by the door.",
      ideas: [
        "<b>A round mirror on a swing arm beside the window.</b> The window sits where a mirror would normally go.",
        "<b>A towel rail at the end of the bath</b> instead of a towel ladder, which there's no floor for.",
        "<b>A trailing pothos on the existing black shelf</b>, a bath caddy, and clay-coloured towels and mat.",
      ],
      fit: ["Floor between the bath and the toilet/shower: about 85 cm", "No freestanding furniture: everything is wall-mounted"],
      cam: { pos: [1.5, 1.6, 6.05], look: [0.15, 1.1, 6.0] },
    },
    {
      id: "bed1", name: "Main bedroom", area: "2.9 × 4.1 m in front of the cupboards · pool-garden view", level: 0,
      photos: ["photos/video-bedroom-pool-view.jpg", "listing/13442265.jpg"],
      gem: "The bigger bedroom, looking down onto the pool garden. Its length is the asset: a queen bed fits with space all round.",
      ideas: [
        "<b>A queen bed (1.52 × 1.88 m) with its head on the west wall</b>, which you paint clay. The window is to your side.",
        "<b>Two bedside tables and wall-mounted reading lights</b>, so the tables stay clear.",
        "<b>No armchair here.</b> I tested one, and it blocked either the door or the side of the bed. Do your reading in the lounge or the loft.",
        "<b>Linen curtains plus sheers</b>, and oak flooring (or a large wool rug) instead of the charcoal carpet.",
      ],
      fit: ["Window side of the bed: 62 cm", "Foot of the bed to the wall: 90 cm", "Clear floor in front of the cupboards: about 1.8 m"],
      cam: { pos: [1.5, 1.55, 3.7], look: [1.0, 0.85, 0.3] },
    },
    {
      id: "bed2", name: "Guest bedroom", area: "2.9 × 3.4 m · veld view · teal wall today", level: 0,
      photos: ["listing/13442263.jpg", "listing/13442264.jpg"],
      gem: "A real guest room: a proper bed, the built-in cupboards for their things, and a fold-down desk so it isn't wasted between visits.",
      ideas: [
        "<b>A double bed (1.37 × 1.88 m), head on the west wall.</b> A queen would leave only 50 cm on the window side, so a double is the better fit.",
        "<b>A fold-down wall desk on the east wall</b>, 12 cm deep closed and 45 cm open. Laptop work or a dressing table when guests stay.",
        "<b>Change the teal to soft sage</b>, add a full-length mirror fixed flat to the wall, and use one bedside table on the window side (the other side is the cupboard doors).",
        "If you'd rather keep the floor free day to day: a <b>daybed with a pop-up trundle</b> sleeps two singles or one king-size, but it's less comfortable than a real bed.",
      ],
      fit: ["Cupboard side of the bed: about 63 cm (cupboard doors open fully)", "Window side: about 60 cm", "Foot of the bed to the wall: 97 cm (85 cm with the desk closed)"],
      cam: { pos: [2.5, 1.55, 8.55], look: [0.4, 0.8, 10.4] },
    },
    {
      id: "loft", name: "Loft", area: "3.9 × 4.15 m · built-in U-desk · door to the terrace", level: 1,
      photos: ["photos/video-loft.jpg", "listing/13442259.jpg"],
      gem: "The built-in U-desk takes three walls, which makes this a real office for two, with a door straight out to the terrace.",
      ideas: [
        "<b>Two workstations:</b> one at the window facing the veld, and one on the west run.",
        "<b>Keep the band between the stair, the railing and the terrace door clear.</b> It's the route to the terrace and to the braai.",
        "<b>Swap the aluminium venetian for a linen roller blind</b>, and put plants and books on the existing shelves.",
        "When you have extra guests, the clear floor (about 2.7 × 1.8 m inside the U) fits an inflatable mattress.",
      ],
      fit: ["Route from the stair to the terrace door: 1.5 m or more", "Inside the U-desk: about 2.7 × 1.85 m"],
      cam: { pos: [6.45, 4.4, 7.05], look: [3.4, 3.4, 9.6] },
    },
    {
      id: "terrace", name: "Roof terrace: covered dining", area: "about 2.9 × 10.7 m overall · covered middle 2.9 × 4.6 m", level: 1,
      photos: ["photos/video-terrace.jpg", "listing/13442256.jpg"],
      gem: "Your biggest space, and it's outside, so it has to handle sun, wind and summer thunderstorms. The middle third gets a roof.",
      ideas: [
        "<b>A freestanding aluminium pergola with an opal polycarbonate roof</b> over the middle, beside the loft door. It's rain-proof and lets light through, and you can step out dry. Body-corporate approval needed.",
        "<b>A bench along the wall, a 1.6 m table and three chairs</b> seats 5–6. The bench means nobody has to pull out against the parapet.",
        "<b>Everything outdoor-rated:</b> powder-coated aluminium or steel, teak or composite, quick-dry foam and outdoor fabric.",
        "<b>LED light strips under the roof</b> for evenings, and a rosemary trough along the wall by the door.",
      ],
      fit: ["Walkway behind the chairs: 95 cm", "Loft door landing kept clear: 90 cm × 1.6 m", "Covered area: about 2.9 × 4.6 m"],
      cam: { pos: [2.55, 4.45, 7.7], look: [0.6, 3.3, 3.8] },
    },
    {
      id: "braaiup", name: "Roof terrace: braai end", area: "veld end · about 2.9 × 2.2 m", level: 1,
      photos: ["listing/13442256.jpg"],
      gem: "The braai moves up here: open sky for the smoke, the veld view, and the covered table a few steps away.",
      ideas: [
        "<b>A kettle braai (about 57 cm)</b> on a 90 cm square of pavers to protect the tiles, in the corner farthest from the door.",
        "<b>A lockable outdoor prep cabinet</b> (about 1.4 m × 52 cm, 90 cm high) with a teak top. Charcoal, tongs and covers live inside, and the top is your prep counter.",
        "<b>When it rains,</b> braai under the open sky with the kettle lid on and carry food a few steps to the covered table. The braai's waterproof cover stays in the cabinet.",
        "A potted spekboom by the pergola: it's tough and handles full sun.",
      ],
      fit: ["Braai to the edge of the covered area: about 1.5 m (to the table: about 4 m)", "Braai to the loft door: about 3 m", "Gap between the braai and the cabinet: about 55 cm (it's the braai station, not a route)"],
      cam: { pos: [2.4, 4.45, 7.85], look: [1.2, 3.35, 10.7] },
    },
    {
      id: "garden", name: "Roof terrace: lounge end", area: "pool-garden end · about 2.9 × 3.6 m", level: 1,
      photos: ["photos/video-terrace.jpg"],
      gem: "The quiet end, looking down into the pool garden. It's in the open, so everything here has to shrug off rain.",
      ideas: [
        "<b>A 1.9 m outdoor sofa, a low table and one armchair</b> with quick-dry cushions, all on an outdoor rug.",
        "<b>A deck box (1.2 m) against the end wall:</b> cushions go in when it rains, and it doubles as extra seating.",
        "<b>An olive tree in the corner</b> and string lights overhead. I dropped the fire bowl, because it didn't fit with 40 cm clearances.",
      ],
      fit: ["Sofa to table: about 40 cm", "Table to armchair: about 40 cm", "Width of this end: 2.9 m (that's why there's no fire bowl)"],
      cam: { pos: [2.5, 4.45, 4.4], look: [0.8, 3.3, 0.6] },
    },
  ],
};
