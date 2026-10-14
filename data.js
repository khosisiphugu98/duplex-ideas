// Content for the walkthrough: one entry per stop on the tour.
// cam.pos / cam.look are in metres on the floor-plan grid (x → east, z → south, y up; the loft
// and roof terrace are at y = 2.8). Every cam.pos is a walkable spot — the tour walks you there.
// "fit" = measured clearances in the 3D model (sizes re-measured from the floor plan, ±15 cm; the loft
// and its roof re-measured from the 360° photos on 2026-10-13).
// Stops that only exist in some plans (see `plans` at the bottom). Same format as `stops`.
const LOFT_PHOTOS = ["photos/video-loft.jpg", "listing/13442259.jpg"];
const ALT = {
  loftSuite: {
    id: "loft", name: "Loft suite (your bedroom)", area: "3.7 × 4.2 m inside · ceiling 2.5 m rising to 3.85 m · faces the north window across the void", level: 1,
    photos: LOFT_PHOTOS,
    gem: "You sleep under the rafters with nothing between you and the north window across the void. The roof is yours in this plan, so nobody walks through, and there's no curtain.",
    ideas: [
      "<b>A queen bed centred under the veld window</b>, head against the gable wall, facing north across the void to the window over the lounge. A low 90 cm headboard stays under the 95 cm sill.",
      "<b>Take out the U-desk</b> (just oak tops on brackets, so no builder needed). Your 3-screen desk lives downstairs, so work stays off the bedroom floor.",
      "<b>A 1.5 m wardrobe on the west wall</b>: 50 cm deep and 2 m tall, which clears the rafters at the eave.",
      "<b>Bedside tables, swing-arm wall lights, a big berber rug</b>, and a blackout roller on the veld window behind you. The north window stays bare for the night sky.",
      "<b>Warm LED strips under the stair treads</b> for night trips to the bathroom downstairs.",
      "<b>Heat:</b> it's right under the roof. Keep the ceiling fan and think about a split aircon.",
    ],
    fit: ["Stair side of the bed: about 1 m", "Wardrobe side: about 66 cm (doors open fully)", "Foot of the bed to the railing: about 2.1 m", "Bed to the north window: about 8 m across the void"],
    cam: { pos: [6.55, 4.4, 8.55], look: [4.5, 3.3, 10.3] },
  },
  moonView: {
    id: "loft-view", name: "Loft suite: the view from bed", area: "north window over the lounge · about 1.75 m wide, its top sloping with the roof", level: 1,
    photos: ["listing/13442258.jpg", "photos/video-loft.jpg"],
    gem: "This is the view you'd fall asleep to: across the void, through the window over the lounge, out to the night sky. It faces north, the side of the sky the moon crosses.",
    ideas: [
      "<b>To be realistic about the moon:</b> from the pillow, the window is about 8 m away, so it frames a small slice of sky: about 12° wide, from about 2° above the horizon up to 6–10° (its top slopes up with the roof, so the east end is taller). You'll see the moon in it when it's low (rising, setting, or on its low nights). When it's high, you get the moonlight rather than the moon.",
      "<b>Want the moon overhead too?</b> Add a roof window in the slope above the bed (about 78 × 98 cm, with a blackout blind). That's a roof change, so it needs body-corporate approval and a roofer.",
      "<b>Keep the lounge dark at night:</b> its lights shine straight up into the loft. Put the lamps on smart plugs and switch them off from bed.",
      "<b>Leave the window bare.</b> It's high above the lounge, so nobody can see in.",
    ],
    fit: ["Window: about 1.75 m wide, 1 m above the loft floor; its top slopes from about 1.55 m (west) to 2.2 m (east)", "Sky from the pillow: about 12° wide, up to about 10° above the horizon (neighbouring roofs may hide the lowest part)"],
    cam: { pos: [6.45, 4.4, 9.7], look: [5.05, 4.75, 2.0] },
  },
  study: {
    id: "bed1", name: "Study (was the main bedroom)", area: "2.9 × 4.1 m in front of the cupboards · pool-garden view", level: 0,
    photos: ["photos/video-bedroom-pool-view.jpg", "listing/13442265.jpg"],
    gem: "Your workspace gets a door that closes for calls and the pool garden beside you. A sleeper couch means you still have three places to sleep.",
    ideas: [
      "<b>A 2 × 0.8 m desk on the east wall with three 27\" screens on a triple monitor arm.</b> The window is beside you, not behind the screens, so there's no glare. The 80 cm depth keeps the screens a comfortable 70–80 cm from your eyes.",
      "<b>Spend on the chair.</b> It's the piece you'll use 8 hours a day.",
      "<b>A 1.8 m sleeper couch on the clay wall</b> that opens to a double for overflow guests, with a floating shelf above and a floor lamp for reading.",
      "<b>A linen roller blind</b> instead of curtains, so it clears the desk. Pull it halfway down on bright afternoons.",
      "<b>The built-in cupboards</b> take overflow from the loft wardrobe, plus files and tech.",
    ],
    fit: ["Desk: 2.0 × 0.8 m; the screens span about 1.7 m", "Behind the chair to the couch: about 50 cm", "Couch to the cupboard doors: about 64 cm (doors open fully)"],
    cam: { pos: [1.5, 1.6, 3.85], look: [2.6, 1.05, 0.9] },
  },
  officeDressing: {
    id: "bed1", name: "Office + dressing room (was the main bedroom)", area: "2.9 × 4.1 m in front of the cupboards · pool-garden view", level: 0,
    photos: ["photos/video-bedroom-pool-view.jpg", "listing/13442265.jpg"],
    gem: "You sleep upstairs, so the old main bedroom becomes your workday room and your wardrobe. It has three screens, a door that closes, the built-ins for clothes, and a reading chair by the pool-view window.",
    ideas: [
      "<b>The same 2 × 0.8 m desk and triple screen arm</b> as the study, on the east wall with the window beside you.",
      "<b>The built-in cupboards are your wardrobe</b>, so the loft stays calm and clutter-free. Add a full-length mirror on the clay wall and a bench to sit on.",
      "<b>A mid-century lounge chair by the window</b> with an arc floor lamp over it, for reading breaks with the pool view.",
      "<b>A linen roller blind</b>, so it clears the desk.",
    ],
    fit: ["Desk: 2.0 × 0.8 m, with the window to your left", "Behind the chair to the bench: about 1 m", "Cupboard doors open fully"],
    cam: { pos: [1.5, 1.6, 3.85], look: [2.2, 1.0, 0.5] },
  },
  officeGuest: {
    id: "bed2", name: "Office (was the guest room)", area: "2.9 × 3.4 m · veld view · door closes for calls", level: 0,
    photos: ["listing/13442263.jpg", "listing/13442264.jpg"],
    gem: "A proper home office with a door. Guests sleep on the lounge bed in the loft now, so this room can be set up for work full-time.",
    ideas: [
      "<b>A 1.8 × 0.8 m desk on the sage wall with three 27\" screens on a triple arm.</b> The veld window is to your left, so there's no glare.",
      "<b>Floor-to-ceiling bookshelves behind you</b> (1.6 m × 32 cm), clear of the door. They also make a good backdrop for video calls.",
      "<b>The built-in cupboards</b> become the tech cupboard: printer, cables and files.",
      "<b>A linen roller blind</b> and a big plant in the corner.",
    ],
    fit: ["Desk to the cupboard doors: about 64 cm (doors open fully)", "Behind the chair to the bookshelves: about 1.1 m", "The door swings clear of the shelves"],
    cam: { pos: [2.3, 1.6, 8.5], look: [0.5, 1.05, 9.9] },
  },
  dining: {
    id: "lounge", name: "Dining room (double-height)", area: "2.8 m wide · ceiling 5.3 m rising to 6.7 m", level: 0,
    photos: ["listing/13442271.jpg", "listing/13442267.jpg"],
    gem: "With the couch and TV moved up to the loft, the double-height room becomes a dining room: dinner under a ceiling more than 5 m up, between the kitchen and the balcony.",
    ideas: [
      "<b>A 1.8 m table that seats six:</b> three on a cushioned bench along the west wall and three chairs on the stair side. With the bench, nobody pulls out against the wall, and no chair at the far end, because that's the way through to the bedrooms.",
      "<b>A big rattan pendant hung low</b>, about 1 m above the table, so the tall room still feels intimate at night.",
      "<b>A sideboard under the stair</b> where the TV would have gone, for crockery and drinks, with a lamp on top.",
      "<b>Keep the reading chair and floor lamp by the slider</b>, and the art above the bench.",
    ],
    fit: ["Behind the stair-side chairs: about 1 m (the walkway along the stair stays)", "Between the table end and the bar stools: about 85 cm, the way to the bedrooms", "Table: 1.8 × 0.85 m · seats 6", "Pendant: about 1 m above the table"],
    cam: { pos: [5.7, 1.65, 2.4], look: [4.3, 0.85, 5.6] },
  },
  stairDining: {
    id: "stair", name: "The staircase (sideboard wall)", area: "about 3.8 m long · rises from beside the slider", level: 0,
    photos: ["photos/video-stair.jpg", "listing/13442270.jpg"],
    gem: "The low cabinet stays under the stair, and a 1.4 m sideboard takes the TV's spot. It's a serving surface right beside the table.",
    ideas: [
      "<b>Under the stair, from low to high:</b> the 46 cm oak cabinet, then a 74 cm-high sideboard, then the tall plant.",
      "<b>A lamp at the sideboard's tall end</b>, where there's the most headroom.",
      "<b>Later, oak tread caps</b> over the chequer plate, as in Plan A.",
    ],
    fit: ["Sideboard: 1.4 × 0.44 m, 74 cm high", "Clearance under the stair at its low end: about 35 cm"],
    cam: { pos: [4.3, 1.55, 5.65], look: [6.6, 1.0, 4.3] },
  },
  loftDen: {
    id: "loft", name: "Loft living room (the den)", area: "3.7 × 4.2 m inside · your one couch and one TV", level: 1,
    photos: LOFT_PHOTOS,
    gem: "The den becomes the only living room in the flat, which fixes both problems: one couch and one TV, and the walk to the roof is just people passing through the lounge. The lounge bed is also the guest bed.",
    ideas: [
      "<b>The lounge bed is your one couch:</b> a queen mattress on a low oak platform with big cushions against the wall. Guests sleep here, so the guest room can be your office.",
      "<b>The one TV (65\")</b> on an oak-slat wall opposite, about 3 m from the cushions. The slats also soften the echo of the high ceiling.",
      "<b>A bar cabinet under the window</b> with a bar fridge inside and the record player on top.",
      "<b>Deep olive behind the lounge bed</b>, warm wall lights, and the terrace door right there for drinks outside.",
      "<b>Downstairs gets a dining room</b> instead (see the lounge stop), and the guest room becomes your office.",
    ],
    fit: ["Route from the stair to the terrace door: about 2.1 m wide, clear", "Lounge bed to coffee table: about 43 cm", "Coffee table to console: about 46 cm, to the bar: about 52 cm", "Cushions to the TV: about 3 m"],
    cam: { pos: [5.0, 4.4, 7.35], look: [5.1, 3.3, 10.4] },
  },
  skyNet: {
    id: "loft-net", name: "Sky net over the lounge", area: "about 2.7 × 4.15 m · at loft-floor level", level: 1,
    photos: ["listing/13442271.jpg", "photos/video-loft.jpg"],
    gem: "The boldest idea here: a walk-on loft net over the double-height lounge. Lie on it and the north window is right in front of you. It's the best moon-watching spot in the flat, and it's see-through, so light still reaches the lounge.",
    ideas: [
      "<b>A double-layer loft net</b> (the kind rated for people, not decoration) on a steel frame bolted to the walls at loft-floor level. You step onto it through a gate in the railing.",
      "<b>It needs an engineer.</b> The frame and anchors hold people over a 2.8 m drop, so a structural engineer must sign off the fixings, and a specialist installer fits it.",
      "<b>The lounge pendant goes</b>, because the net is where it hung. Light the lounge with lamps and an uplight instead.",
      "<b>Floor cushions and a throw</b> on the net turn it into a stargazing deck.",
      "<b>Not for you?</b> It's the easiest part of this plan to drop. Everything else works without it.",
    ],
    fit: ["Net: about 2.7 × 4.15 m", "Lounge headroom under it: 2.8 m", "Lying on it, the north window is 0–2 m in front of you"],
    cam: { pos: [4.6, 4.4, 6.9], look: [4.7, 3.6, 2.0] },
  },
  privateCovered: {
    id: "terrace", name: "Roof terrace: daybed under the cover", area: "covered middle · about 2.9 × 4.6 m", level: 1,
    photos: ["photos/video-terrace.jpg", "listing/13442256.jpg"],
    gem: "If the roof is only yours, it stops being a party deck and becomes an outdoor room off your bedroom: somewhere to read, nap, and sleep out on hot nights.",
    ideas: [
      "<b>An outdoor daybed (1.4 × 2.0 m)</b> against the parapet under the pergola, with quick-dry cushions. It's a sleep-out on hot summer nights.",
      "<b>Keep the pergola from Plan A.</b> The rain cover is what makes the daybed usable all year (body-corporate approval needed).",
      "<b>A side table</b>, and a lavender trough along the wall by your door.",
      "<b>Optional:</b> outdoor curtains clipped to the pergola for shade or privacy from the neighbours.",
    ],
    fit: ["Walkway beside the daybed: about 1.5 m (1.05 m at the side table)", "Loft door landing kept clear: 90 cm × 1.6 m"],
    cam: { pos: [2.55, 4.45, 7.7], look: [0.6, 3.3, 3.8] },
  },
  cinema: {
    id: "terrace", name: "Roof terrace: daybed cinema", area: "covered middle · about 2.9 × 4.6 m", level: 1,
    photos: ["photos/video-terrace.jpg", "listing/13442256.jpg"],
    gem: "The private daybed, plus a roll-down outdoor screen on the loft's outside wall. Movies under the pergola, and it still works as a sleep-out.",
    ideas: [
      "<b>A 1.5 m roll-down outdoor screen</b> (about 70\") on the loft wall, facing the daybed. It fits between the pergola post and the downpipe, and rolls up into a slim box when you're not using it.",
      "<b>A compact projector</b> on the side table and a weatherproof speaker. Everything comes inside afterwards. You'll need an outdoor plug point (an electrician job).",
      "<b>The daybed (1.4 × 2.0 m)</b> against the parapet, with quick-dry cushions. The pergola keeps the dew and drizzle off.",
      "<b>Movies start after sunset:</b> projectors only really work in the dark.",
    ],
    fit: ["Your eyes to the screen: about 2.3 m", "Screen: about 1.5 × 0.85 m (70\")", "Walkway beside the daybed: about 1.5 m"],
    cam: { pos: [1.5, 4.45, 7.9], look: [1.9, 3.4, 3.6] },
  },
  privateGarden: {
    id: "braaiup", name: "Roof terrace: garden end", area: "veld end · about 2.9 × 2.2 m", level: 1,
    photos: ["listing/13442256.jpg"],
    gem: "The veld end becomes a small garden: something to grow, and a seat to watch the sunset from.",
    ideas: [
      "<b>Two raised planters (1.2 m × 55 cm, 70 cm high)</b> for herbs and vegetables, along the end wall, so there's no bending. Self-watering ones are lighter and easier.",
      "<b>A hanging egg chair on its own stand</b>, so nothing is fixed to the building.",
      "<b>An outdoor rug</b> for stretching or yoga, and the spekboom from Plan A.",
      "<b>Hot tub? Only after an engineer says yes.</b> A three-seater full of water and people is about 360 kg per m², close to the roughly 400 kg/m² a balcony is typically designed for. It needs a structural engineer and the body corporate first.",
    ],
    fit: ["Path between the spekboom and the egg chair: about 1.1 m", "Egg chair stand: about 1 m across"],
    cam: { pos: [2.4, 4.45, 7.85], look: [1.2, 3.35, 10.7] },
  },
  privateSun: {
    id: "garden", name: "Roof terrace: sun deck", area: "pool-garden end · about 2.9 × 3.6 m", level: 1,
    photos: ["photos/video-terrace.jpg"],
    gem: "Two sun loungers at the pool end. It's the sunniest, most private spot in the unit, and it's all yours.",
    ideas: [
      "<b>Two teak sun loungers (65 × 195 cm)</b> with quick-dry cushions and a small side table. The feet stop short of the deck box, so its lid still opens.",
      "<b>A cantilever parasol</b> on a weighted base (no fixings) for the middle of the day.",
      "<b>The olive tree and deck box stay</b> from Plan A.",
      "<b>Dream add-on: an outdoor shower</b> against the parapet. It needs a plumber and body-corporate approval, so price it before you fall in love with it.",
    ],
    fit: ["Walkway beside the loungers: about 1.15 m (75 cm at the side table)", "Loungers to the deck box: about 18 cm (the lid lifts clear)"],
    cam: { pos: [2.5, 4.45, 4.4], look: [0.8, 3.3, 0.6] },
  },
  balconyBraai: {
    id: "braai", name: "Balcony (braai kept)", area: "3.9 × 1.9 m · built-in braai · over the pool garden", level: 0,
    photos: ["photos/video-balcony.jpg", "listing/13442273.jpg"],
    gem: "With the roof private, entertaining comes downstairs to the lounge and this balcony. So the built-in braai stays a braai, and there's no kettle braai to buy.",
    ideas: [
      "<b>Bring the built-in braai back to life:</b> clean it, fit a new grid, keep wood in the store underneath, and hang the tongs on a rail on the side wall.",
      "<b>The downside:</b> smoke can drift into the lounge through the slider, which is why Plan A moved braaiing to the roof. Close the slider while the fire's going.",
      "<b>The ledge and stools stay:</b> people stand with a drink and the pool view while you braai.",
      "<b>The drying rack, olive tree and string lights</b> stay as in Plan A.",
    ],
    fit: ["The slider's opening half: about 80 cm, kept clear", "Nearest stool to the braai's side wall: about 60 cm"],
    cam: { pos: [4.55, 1.6, 1.65], look: [6.3, 1.0, 0.2] },
  },
  balconyPizza: {
    id: "braai", name: "Balcony: pizza bar + living wall", area: "3.9 × 1.9 m · over the pool garden", level: 0,
    photos: ["photos/video-balcony.jpg", "listing/13442273.jpg"],
    gem: "The old braai counter gets a second life: a gas pizza oven on a hardwood top. Pizza in 90 seconds, with no smoke and no wood. Above the olive, the tall party wall becomes a living wall.",
    ideas: [
      "<b>A gas pizza oven</b> on a hardwood top over the old fire bed, with the gas bottle hidden in the old wood store underneath. Check the body-corporate rules on gas on balconies.",
      "<b>A living wall</b> of herbs and trailing plants up the tall wall: three planter rows, with drip irrigation on a timer.",
      "<b>The ledge and two stools</b> along the pool-side wall stay, as the pizza bar.",
      "<b>The drying rack, olive tree and string lights</b> stay from Plan A.",
    ],
    fit: ["Hardwood top: about 70 × 65 cm, which fits a 12\" oven", "The slider's opening half: about 80 cm, kept clear", "Living wall: about 1.2 × 1.0 m, from 1.65 m up"],
    cam: { pos: [4.55, 1.6, 1.65], look: [6.4, 1.4, 0.6] },
  },
  entryStudio: {
    id: "entry", name: "Front door & hall", area: "hall about 1.3 m wide · the first view", level: 0,
    photos: ["photos/video-front-door.jpg", "listing/13442270.jpg"],
    gem: "This is the first impression: open the door and you look down the room at a 5 m oak-slat wall glowing above a long desk, with the stair floating on the right and the balcony light at the end. It reads as a studio, not an office.",
    ideas: [
      "<b>What makes it look good from the door:</b> one long oak desk instead of several small ones, screens on arms (no stands or cables showing), closed storage under the stair, and the slat wall lit from below at night.",
      "<b>The 'after work' switch:</b> put the desk light, screens and bias lights on one smart plug. One tap at 6 pm turns the study off and the uplights on, so guests walk into a lit wall, not a workstation.",
      "<b>The slim shoe cabinet, mirror and hooks</b> stay on the hall wall, as in Plan A.",
    ],
    fit: ["Hall walkway past the shoe cabinet: about 1.1 m", "Front door opens fully"],
    cam: { pos: [6.25, 1.6, 8.35], look: [4.6, 1.5, 3.2] },
  },
  studyLounge: {
    id: "lounge", name: "Studio lounge (the study)", area: "2.8 m wide · double-height · two stations, four screens + a laptop", level: 0,
    photos: ["listing/13442271.jpg", "listing/13442267.jpg"],
    gem: "The couch and TV are up in the loft den, so the most impressive room in the flat becomes your study: a desk wall under a 5 m oak-slat wall, with the stair floating opposite and a café table by the slider.",
    ideas: [
      "<b>A 2.35 m oak double desk on the west wall</b> with waterfall ends: two stations side by side. Yours has three 27\" screens on a triple arm. The second has a 27\" screen on its own arm, a laptop and a mic arm, for a partner, a second machine, calls or games.",
      "<b>A 5 m oak-slat wall on dark felt behind it</b>, lit from below. It's the wow when you walk in, and it soaks up the echo of the double-height room so calls sound better.",
      "<b>A café table for two by the slider</b> (70 cm round, under a black dome pendant), plus the two stools at the breakfast bar, so four can eat downstairs. Dinner parties go up to the roof's covered table.",
      "<b>A 1.8 m linear light</b> hung over the desk from the high ceiling, and bias lighting behind the screens (easier on the eyes at night).",
      "<b>Under the stair:</b> the low cabinet and a closed credenza for the printer and files, so the room stays tidy for the first impression.",
      "<b>The walkways stay clear:</b> 1.3 m from the hall, past the desks, to the slider, and about 75 cm between the second chair and the bar stools on the way to the bedrooms.",
    ],
    fit: ["Desk: 2.35 × 0.78 m, two stations", "Behind the desk chairs to the stair: about 1.3 m", "Second chair to the bar stools: about 75 cm (the way to the bedrooms)", "Café table: just off the end of the desk, with its chairs east and west", "The slider's opening half: clear"],
    cam: { pos: [5.7, 1.65, 2.4], look: [3.9, 1.0, 5.2] },
  },
  studyDesk: {
    id: "lounge-desk", name: "Studio lounge: the desk wall", area: "two stations · triple 27\" + a 27\" with a laptop", level: 0,
    photos: ["listing/13442271.jpg"],
    gem: "Up close: your three screens, the second station, the shelf of books and plants above, and the slats rising 5 m into the rafters.",
    ideas: [
      "<b>Station 1 (yours):</b> three 27\" screens on a clamp-on triple arm, 70–80 cm from your eyes. The window light comes from the side, so there's no glare.",
      "<b>Station 2:</b> a 27\" screen on its own arm next to a laptop, plus a mic arm. It works as a second seat when someone works with you, as a call station, or as a gaming setup after hours.",
      "<b>Cables:</b> a steel tray under the desk and one floor box to the wall socket. Nothing hangs down, which matters in a room you see from the door.",
      "<b>A good chair at each station</b>, on a low-pile rug the castors can roll on.",
      "<b>For calls:</b> the felt-backed slats and the rug take the edge off the echo. A headset still helps, since it's an open room.",
    ],
    fit: ["Your station: about 1.7 m of desk; the second: about 0.65 m", "Screens: top at about 1.2 m, under the 1.85 m shelf", "Chairs: about 50 cm apart"],
    cam: { pos: [5.45, 1.6, 4.5], look: [3.3, 1.15, 4.45] },
  },
  stairStudio: {
    id: "stair", name: "The staircase (storage wall)", area: "about 3.8 m long · rises from beside the slider", level: 0,
    photos: ["photos/video-stair.jpg", "listing/13442270.jpg"],
    gem: "Under the stair is where the study hides its clutter: the low cabinet, then a closed credenza for the printer, paper and files, then the tall plant.",
    ideas: [
      "<b>From low to high:</b> the 46 cm oak cabinet, a 1.2 m dark credenza (70 cm high) with the printer inside or on top, then the tall plant.",
      "<b>Keep it all closed and dark-fronted</b> so it disappears under the floating stair.",
      "<b>Later, oak tread caps</b> over the chequer plate, as in Plan A.",
    ],
    fit: ["Credenza: 120 × 44 cm, 70 cm high; at least 1.2 m of headroom above it"],
    cam: { pos: [4.3, 1.55, 5.65], look: [6.6, 1.0, 4.6] },
  },
  loftDenStudio: {
    id: "loft", name: "Loft den (the living room)", area: "3.7 × 4.2 m inside · your one couch and one TV", level: 1,
    photos: LOFT_PHOTOS,
    gem: "As in Plan C, the loft is the living room: the lounge bed, the 65\" TV on the oak-slat wall, and the bar, right by the terrace door. Work stays downstairs, so coming up here at night feels like leaving the office.",
    ideas: [
      "<b>The lounge bed is your one couch:</b> a queen mattress on a low oak platform with big cushions. It's also a spare bed when two sets of guests come at once.",
      "<b>The one TV (65\")</b> on the oak-slat wall opposite, about 3 m from the cushions.",
      "<b>A bar cabinet under the window</b> with a bar fridge inside and the record player on top.",
      "<b>Deep olive behind the lounge bed</b>, warm wall lights, and the terrace door right there for drinks outside.",
      "<b>Guests get the second bedroom back:</b> the study is downstairs now, so it's a real guest room again.",
    ],
    fit: ["Route from the stair to the terrace door: about 2.1 m wide, clear", "Lounge bed to coffee table: about 43 cm", "Cushions to the TV: about 3 m"],
    cam: { pos: [5.0, 4.4, 7.35], look: [5.1, 3.3, 10.4] },
  },
  loftLiving: {
    id: "loft", name: "Loft lounge (the living room)", area: "3.7 × 4.2 m inside · ceiling 2.5 m rising to 3.85 m · one couch, one TV", level: 1,
    photos: LOFT_PHOTOS,
    gem: "Re-measured, the loft is deeper than we first drew it, and its east wall is about 3.85 m tall, not 2.3 m. So the living room gets what the old shape couldn't hold: a corner sofa with a chaise, a 75\" TV set into a library that runs up to the rafters, a bar, and two chairs for watching the moon over the void.",
    ideas: [
      "<b>One corner sofa, still the only couch in the flat:</b> three seats along the terrace wall and a chaise along the veld window, pointing at the TV. The chaise is where you lie down for a film.",
      "<b>A library wall on the tall east wall:</b> oak shelves 2.7 m wide and 3.55 m high (38 cm deep) on a dark back panel, with closed cupboards along the bottom. It uses the height the old drawing didn't have, and the books soak up the echo of the high ceiling.",
      "<b>The one TV (75\")</b> sits in the library's middle bay at seated eye height, about 3.2 m from your eyes on the sofa. That's the right distance for a 75\".",
      "<b>A bar bay by the stair:</b> a bar fridge behind a glass door in the bottom cupboard, and bottles and glasses on the two shelves above. Guests heading up to the roof pick up a drink on the way past.",
      "<b>A hook-on library ladder</b> on a steel rail at 3.1 m reaches the top shelves and parks at the south end. The library is tall, so fix it to the party wall with proper anchors.",
      "<b>Two moon chairs at the railing</b>, facing the north window across the void (see the next stop).",
      "<b>The route to the roof stays open:</b> 90 cm from the stair, past the chairs and the sofa arm, to the terrace door. The stair landing stays clear too.",
    ],
    fit: ["Corner sofa: 2.05 m along the west wall, chaise to 2.1 m along the south wall, 95 cm deep", "Coffee table to the seats: 45 cm; to the library: about 1.4 m", "Your eyes to the TV: about 3.2 m (75\")", "Route from the stair to the terrace door: 90 cm at its narrowest", "Stair landing kept clear: about 0.95 × 1.45 m", "The listing's 17 m² is measured to the wall centres (3.9 × 4.3 m); the usable floor is about 15.5 m²"],
    cam: { pos: [3.75, 4.4, 7.85], look: [6.4, 3.9, 9.6] },
    drawing: "renders/cmp/plan-f-loft.png",
  },
  moonSeats: {
    id: "loft-view", name: "Loft lounge: the moon chairs", area: "north window over the lounge · about 5 m from the chairs", level: 1,
    photos: ["listing/13442258.jpg", "photos/video-loft.jpg"],
    gem: "You love seeing the moon through the north window. These two chairs sit at the railing and face it, at about 5 m instead of the 8 m from the bed in Plans B and D, so the window fills far more of your view. It's the best seat in the flat at night.",
    ideas: [
      "<b>Two low lounge chairs</b> (about 75 cm square) at the railing, turned a little towards each other, with a small drum table between your knees for a drink.",
      "<b>Darken the void:</b> the lounge below is your studio now, so the one-tap 'after work' scene turns its lights off and the window stands out against the dark.",
      "<b>What you'll see:</b> the window fills about 20° of your view, from eye level up to about 12° above it at its tall east end. You'll catch the moon when it's low in the northern sky. When it's high, you get the moonlight rather than the moon.",
      "<b>Leave the window bare.</b> It's high above the lounge, so nobody can see in.",
    ],
    fit: ["Knee room to the railing: about 45 cm", "Chairs to the window: about 5 m (the bed in B and D is about 8 m away)", "Route behind the chairs: 90 cm"],
    cam: { pos: [5.0, 4.4, 8.3], look: [4.95, 3.05, 2.0] },
  },
  loftStream: {
    id: "loft", name: "Loft: desk with the couch behind it", area: "3.7 × 4.2 m inside · L-desk in the window corner · L-couch on the west wall · door to your private roof", level: 1,
    photos: ["photos/video-loft.jpg", "listing/13442259.jpg"],
    gem: "The U-desk goes (it's freestanding), so the loft opens up. A dark L-shaped corner desk fills the corner by the window, its long side on the east wall where Plan A's workstation was, and an L-couch on the west wall faces your screens, like a streamer's room. Friends can hang out while you work or game, and on camera the couch is your backdrop.",
    ideas: [
      "<b>Take out the U-desk.</b> It isn't built in, and it took three walls, so the couch had to squeeze inside it.",
      "<b>A dark L-shaped corner desk in the window corner</b> (wenge finish, curved inner edge), like the one you found. The long side runs along the east wall with your three 27\" screens; the short side, with its panel pedestal, runs along the window wall on your right. The window is beside you, not behind the screens, so no glare.",
      "<b>A drawer unit on your left</b> (45 cm wide, three drawers, flush with the desk top) carries the long side on towards the stair, so the desk runs 2.5 m along the east wall.",
      "<b>An L-couch against the west wall, facing your screens:</b> two seats and an open chaise along the veld window. Your chair is about 1.2 m from it, so there's open floor between you instead of a squeeze.",
      "<b>On your webcam, the couch is the background</b>, like the streamer's room: a deep brown couch, clay and oat cushions, two wall lights and the shelves above it.",
      "<b>The U-desk's wall shelves stay:</b> books above the desk, a trailing plant above the couch. A big plant fills the corner past the end of the desk.",
      "<b>The band between the stair, the railing and the terrace door stays clear</b>, as in Plan A.",
      "<b>A mini fridge against the window wall</b>, between the chaise and the desk (about 48 cm wide, 85 cm tall, just under the sill). Drinks within reach of the couch and your chair.",
      "<b>The terrace door leads to your private roof</b> (from Plan B): sun deck, a covered dining table and garden.",
      "<b>The second couch, and no TV.</b> The lounge keeps the one TV and its sofa. This is a hang-out couch for your desk, not a second living room.",
    ],
    fit: ["L-desk: 2.05 m along the east wall plus the 45 cm drawer unit (2.5 m in all), 1.2 m along the window wall; 75 cm high", "Chaise to the desk's short side: about 75 cm, with the mini fridge in it (about 14 cm spare each side)", "L-couch: 2.25 m along the west wall, chaise to 1.75 m deep, 90 cm deep", "Your chair to the couch: about 1.2 m of open floor", "Drawer unit to the stair landing: about 30 cm (it stops where Plan A's desk did)", "Route from the stair to the terrace door: about 1.75 m (unchanged from Plan A)"],
    cam: { pos: [5.2, 4.4, 7.0], look: [5.3, 3.4, 9.6] },
    drawing: "renders/cmp/plan-h-webcam.png", drawingCap: "From your webcam, like the streamer's shot",
  },
  loftCam: {
    id: "loft-cam", name: "Loft: the webcam's view", area: "from your screens, looking back at the couch", level: 1,
    photos: ["photos/video-loft.jpg", "listing/13442259.jpg"],
    gem: "This is what your camera sees from the top of the middle screen: you at the desk, and the L-couch behind you on the west wall, with the shelves, the wall lights and the veld window around it.",
    ideas: [
      "<b>Light your face, not the couch:</b> a small key light beside the screens, and the couch lamp on low behind you, so you stand out from the background.",
      "<b>Keep the couch tidy on camera:</b> two cushions and one throw are enough. The deck box on the roof can hold spares.",
    ],
    cam: { pos: [6.55, 4.22, 9.2], look: [3.9, 3.4, 9.3] },
  },
  privateDining: {
    id: "terrace", name: "Roof terrace: your table under the cover", area: "covered middle · about 2.9 × 4.6 m", level: 1,
    photos: ["photos/video-terrace.jpg", "listing/13442256.jpg"],
    gem: "The roof is only yours, as in Plan B, but the covered middle gets a dining table instead of the daybed, so you have somewhere to eat: lunch away from the desk, dinner outside, and room for friends when they come up from the couch.",
    ideas: [
      "<b>A bench along the wall, a 1.6 m teak table and three chairs</b> (Plan A's set) under the pergola. It seats 5–6, and the bench means nobody has to pull out against the parapet.",
      "<b>Keep the pergola from Plan A.</b> The rain cover means you can eat up here all year (body-corporate approval needed).",
      "<b>LED strips under the roof</b> for dinner after dark, and a lavender trough along the wall by your door.",
      "<b>The rest of the roof stays as in Plan B:</b> two sun loungers at the pool end and the garden at the veld end.",
    ],
    fit: ["Walkway behind the chairs: 95 cm", "Loft door landing kept clear: 90 cm × 1.6 m", "Covered area: about 2.9 × 4.6 m"],
    cam: { pos: [2.55, 4.45, 7.7], look: [0.6, 3.3, 3.8] },
  },
  guestSuite: {
    id: "bed1", name: "Guest suite (the old main bedroom)", area: "2.9 × 4.1 m in front of the cupboards · pool-garden view", level: 0,
    photos: ["photos/video-bedroom-pool-view.jpg", "listing/13442265.jpg"],
    gem: "With you sleeping upstairs, guests get the best room downstairs: the queen bed, the built-in cupboards and the pool-garden view, next to the bathroom.",
    ideas: [
      "<b>Everything from Plan A's main bedroom:</b> a queen bed, two bedside tables with wall lights, the clay headboard wall and linen curtains.",
      "<b>Next to the bathroom</b>, so guests never need to go upstairs.",
      "<b>Keep one cupboard for guests</b> and use the rest for out-of-season clothes.",
    ],
    fit: ["Window side of the bed: 62 cm", "Foot of the bed to the wall: 90 cm"],
    cam: { pos: [1.5, 1.55, 3.7], look: [1.0, 0.85, 0.3] },
  },
};

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

  // the problems the plans solve, and which plans use which answer
  problems: [
    { q: "The roof can only be reached through the loft", a: "So if the loft is your bedroom, the roof has to be private (B, D). Otherwise guests walk past your bed. If the loft is an office or a den (A, C), the roof can be the party deck." },
    { q: "A real workspace for three screens", a: "The loft's U-desk (A, G), a study with a door in the old main bedroom (B, D), an office in the second bedroom (C), or a two-station desk wall in the lounge (E, F)." },
    { q: "One couch, one TV", a: "In the lounge (A, B, D), or up in the loft, with the lounge as a dining room (C) or a studio office (E, F)." },
    { q: "Where do guests sleep?", a: "A real guest room (A, B, D), or the den's lounge bed (C)." },
    { q: "Seeing the moon from bed", a: "The window over the lounge is about 1.75 m wide, its top sloping up to the east. From the loft bed you catch the moon when it's low (B, D). The moon chairs at the railing are about 5 m from it (F), and the sky net puts you right at the window (D; needs an engineer to sign off the fixings)." },
    { q: "Want a bit of one plan and a bit of another?", a: "Use ✦ Mix your own: pick each area's version from A–G, and it checks the combination against these rules for you." },
  ],

  notes: [
    "<b>Every plan has a real workspace</b> for at least three 27\" screens: a desk at least 1.8 m wide and 72–80 cm deep, on a triple monitor arm, and at right angles to a window so there's no glare.",
    "Room sizes come from the listing floor plan (checked against its scale bar) and your video, so they're accurate to about ±15 cm. Measure before you buy anything big.",
    "<b>The loft was re-measured</b> from the 360° photos: it's about 3.7 × 4.2 m inside (the railing is 20 cm further north than first drawn), and the roof is a single slope, 2.5 m high at the terrace wall and about 3.85 m at the east wall. It isn't a centred gable. Worth a tape measure on your next visit.",
    "Comfort rules used throughout: main walkways at least 90 cm, other walkways at least 70 cm, at least 60 cm beside beds and in front of cupboards, 40–45 cm between a sofa and its table, and at least 75 cm behind dining chairs.",
    "Sectional title: the terrace roof (pergola), anything fixed to exterior walls, and using a braai on the terrace all need body-corporate approval. Ask before you buy.",
    "Fridge check: measure from the floor to the underside of the geyser box, and the recess width and depth. Height is what decides whether a normal fridge fits.",
    "Switch to <b>As it is</b> to see the unit today (empty, with the lilac passage, teal wall, carpets and white kitchen), then switch back to compare.",
  ],

  // 360° photos from the listing tour, matched to the 3D model: where each was taken (x, height above
  // its floor, z), which floor, and its heading offset in degrees. "Compare with today" stands you on
  // that spot and shows the photo with exactly the same view as the 3D.
  panos: {
    // near: in "With ideas", anything closer than this (m) is hidden — the photos were taken from
    // the middle of each room, which is often where a bed, sofa or table now goes
    lounge: { src: "photos/360/360-lounge.jpg", pos: [4.48, 1.39, 4.0], yaw: 174.4, near: 0.8 },
    kitchen: { src: "photos/360/360-kitchen.jpg", pos: [4.15, 1.39, 9.11], yaw: 178.6, near: 0.3 },
    passage: { src: "photos/360/360-passage.jpg", pos: [2.6, 1.45, 6.08], yaw: 90.0, near: 0.15 },
    bathroom: { src: "photos/360/360-bathroom.jpg", pos: [1.05, 1.45, 6.25], yaw: 104.9, near: 0.15 },
    "main-bedroom": { src: "photos/360/360-main-bedroom.jpg", pos: [1.52, 1.45, 2.17], yaw: 261.6, near: 0.9 },
    "second-bedroom": { src: "photos/360/360-second-bedroom.jpg", pos: [1.45, 1.39, 9.52], yaw: 97.0, near: 0.9 },
    loft: { src: "photos/360/360-loft.jpg", pos: [5.15, 1.39, 8.7], yaw: 180.0, level: 1, near: 0.8 },
    "roof-terrace": { src: "photos/360/360-roof-terrace.jpg", pos: [1.64, 1.54, 6.07], yaw: 0.0, level: 1, near: 0.6 },
  },
  // which way to face when comparing each stop (a point to look at, in plan metres; y is absolute)
  cmpLook: {
    entry: [6.4, 1.3, 8.6], lounge: [5.0, 1.4, 2.0], stair: [6.7, 1.1, 4.7], braai: [5.6, 1.1, 0.5], kitchen: [5.6, 1.05, 9.45],
    passage: [2.6, 1.2, 4.85], bath: [0.15, 1.1, 6.0], bed1: [1.0, 0.95, 0.3], bed2: [1.0, 0.9, 10.8],
    "lounge-desk": [3.3, 1.15, 4.45], loft: [6.6, 3.55, 10.3], "loft-view": [5.05, 4.3, 2.0], "loft-net": [4.6, 3.0, 4.0],
    terrace: [0.9, 3.4, 4.4], braaiup: [1.2, 3.6, 10.6], garden: [1.2, 3.4, 0.5],
  },
  // which 360° photo each tour stop compares against (the hall and balcony are seen from the lounge)
  panoFor: {
    entry: "lounge", lounge: "lounge", stair: "lounge", braai: "lounge", kitchen: "kitchen", passage: "passage", bath: "bathroom",
    bed1: "main-bedroom", bed2: "second-bedroom", "lounge-desk": "lounge", loft: "loft", "loft-view": "loft", "loft-net": "loft",
    terrace: "roof-terrace", braaiup: "roof-terrace", garden: "roof-terrace",
  },

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
      id: "stair", name: "The staircase (TV wall)", area: "about 3.8 m long · rises from beside the slider", level: 0,
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
      id: "loft", name: "Loft", area: "3.7 × 4.2 m inside · built-in U-desk · door to the terrace", level: 1,
      photos: ["photos/video-loft.jpg", "listing/13442259.jpg"],
      gem: "The built-in U-desk takes three walls, which makes this a real office for two, with a door straight out to the terrace.",
      ideas: [
        "<b>Your main workstation on the east run:</b> a deeper 72 cm oak top laid over it, with three 27\" screens on a triple monitor arm. The window is to your side, so no glare. <b>A second seat on the west run</b> for a visitor or a laptop day.",
        "<b>Keep the band between the stair, the railing and the terrace door clear.</b> It's the route to the terrace and to the braai.",
        "<b>Swap the aluminium venetian for a linen roller blind</b>, and put plants and books on the existing shelves.",
        "When you have extra guests, the clear floor (about 2.7 × 1.8 m inside the U) fits an inflatable mattress.",
      ],
      fit: ["Route from the stair to the terrace door: about 1.75 m (the deeper desk top stays clear of it)", "Main desk: 1.9 × 0.72 m; the screens span about 1.7 m", "Inside the U-desk: about 2.7 × 1.85 m"],
      cam: { pos: [4.4, 4.4, 7.2], look: [6.6, 3.7, 9.3] },
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
  // Whole-home plans to flip between. `rooms` picks a version of each room that differs between
  // plans (the 3D pieces live in src/furnish.js → variant("room:option")); `replace` swaps tour
  // stops by id; `labels` renames dollhouse labels; `work` says where the 3-screen workspace is.
  // To save a new idea, add a plan here. Ground rules from you: always a workspace for 3+ screens,
  // only one couch and one TV, no curtain dividers.
  plans: [
    {
      id: "a", letter: "A", name: "Loft office", tag: "What we built first",
      rooms: { loft: "office", bedA: "bedroom", bedB: "guest", lounge: "tv", void: "pendant", terrace: "social", balcony: "counter", bar: "stools", plant: "stair", kit: "std", reading: "corner", art: "west" },
      work: "In the loft: three screens on a deeper east run of the U-desk, with the window to your side. A second desk on the west run.",
      pitch: "You sleep downstairs and work in the loft. The roof is the party deck, with covered dining and the braai.",
      pros: ["Two real bedrooms, next to the bathroom", "The loft's built-in U-desk gets used, so a 3-screen office costs little", "The roof works for guests and keeps braai smoke out of the lounge"],
      cons: ["The biggest room in the unit is an office you only use in the daytime", "Guests walk through your workspace to reach the roof"],
    },
    {
      id: "d", letter: "B", name: "Private rooftop", tag: "Sleep under the rafters, roof all yours",
      rooms: { loft: "suite", bedA: "study", bedB: "guest", lounge: "tv", void: "pendant", terrace: "private", balcony: "braai", bar: "stools", plant: "stair", kit: "std", reading: "corner", art: "west" },
      replace: { loft: [ALT.loftSuite, ALT.moonView], bed1: ALT.study, braai: ALT.balconyBraai, terrace: ALT.privateCovered, braaiup: ALT.privateGarden, garden: ALT.privateSun },
      labels: { loft: "Loft suite", bedA: "Study", tLounge: "Sun deck", tMid: "Daybed", tEnd: "Garden", balcony: "Balcony braai" },
      work: "A study downstairs (the old main bedroom): a 2 m desk with three screens, a door that closes, and the window to your side.",
      pitch: "You sleep in the loft facing the north window (no curtain), and the roof is yours: sun deck, daybed and garden. You work in a study downstairs, and entertaining moves to the lounge and the balcony braai.",
      pros: ["A true private suite: your bedroom with its own roof terrace", "Nobody walks through your bedroom, ever", "Work and sleep are on different floors, so the workday really ends", "The balcony braai you already have gets used"],
      cons: ["Entertaining shrinks to the lounge and the 3.9 × 1.9 m balcony", "Braai smoke is closer to the lounge", "The bathroom is a floor down, and it's hotter under the roof", "Guests lose the best space in the unit"],
    },
    {
      id: "c", letter: "C", name: "Living upstairs", tag: "The den, with one couch and one TV",
      rooms: { loft: "den", bedA: "bedroom", bedB: "office", lounge: "dining", terrace: "social", balcony: "counter", bar: "stools", plant: "stair", kit: "std", reading: "corner", art: "west" },
      replace: { lounge: ALT.dining, stair: ALT.stairDining, loft: ALT.loftDen, bed2: ALT.officeGuest },
      labels: { loft: "Living room", lounge: "Dining room", bedB: "Office" },
      work: "An office in the old guest room: a 1.8 m desk with three screens and a door that closes. Guests sleep on the loft's lounge bed.",
      pitch: "The den idea, fixed. The loft becomes your only living room (one couch, one TV), right by the roof terrace. Downstairs, the double-height room becomes a dining room and the guest room becomes your office.",
      pros: ["One couch and one TV, and the roof party starts from the lounge", "A real office with a door, plus a dining table for six", "You still sleep downstairs, next to the bathroom"],
      cons: ["The TV is a floor away from the kitchen, so snacks mean stairs", "Overnight guests sleep in the living room", "Gives up Plan A's TV-under-the-stair idea"],
    },
    {
      id: "e", letter: "D", name: "Sky loft", tag: "My pick, if it were up to me",
      rooms: { loft: "suite", void: "net", bedA: "office", bedB: "guest", lounge: "tv", terrace: "private", cinema: "screen", balcony: "pizza", bar: "stools", plant: "stair", kit: "std", reading: "corner", art: "west" },
      replace: { loft: [ALT.loftSuite, ALT.moonView, ALT.skyNet], bed1: ALT.officeDressing, terrace: ALT.cinema, braaiup: ALT.privateGarden, garden: ALT.privateSun, braai: ALT.balconyPizza },
      labels: { loft: "Loft suite", void: "Sky net", bedA: "Office + dressing", tLounge: "Sun deck", tMid: "Cinema", tEnd: "Garden", balcony: "Pizza balcony" },
      work: "An office and dressing room downstairs (the old main bedroom): a 2 m desk with three screens and a door that closes. The built-ins become your wardrobe.",
      pitch: "If it were up to me: you sleep under the rafters facing the north window, with a walk-on sky net over the lounge for moon-watching. The private roof gets an outdoor cinema, the old main bedroom becomes your office and dressing room, and the balcony becomes a pizza bar.",
      pros: ["Built around what you love: the loft look and the night sky", "Every space does one thing really well, with no doubling up", "The guest room stays a proper guest room"],
      cons: ["The sky net is the biggest spend and needs an engineer (it's easy to drop)", "Outdoor plug points needed on the roof (an electrician job)", "Entertaining is downstairs only, as in Plan B"],
    },
    {
      id: "f", letter: "E", name: "Studio lounge", tag: "Plan C, with the lounge as your study",
      rooms: { loft: "den", lounge: "study", bedA: "bedroom", bedB: "guest", terrace: "social", balcony: "counter", bar: "stools", plant: "stair", kit: "std" },
      replace: { entry: ALT.entryStudio, lounge: [ALT.studyLounge, ALT.studyDesk], stair: ALT.stairStudio, loft: ALT.loftDenStudio },
      labels: { loft: "Den (living room)", lounge: "Studio (study)" },
      work: "In the lounge: a 2.35 m double desk on the west wall. Your station has three 27\" screens; the second has a 27\" and a laptop. A 5 m oak-slat wall rises behind it.",
      pitch: "Plan C's den upstairs, with the double-height lounge as a studio office: a long oak desk with two stations (four screens and a laptop) under a 5 m lit slat wall, a café table for two by the slider, and closed storage under the stair. With the study out of the bedrooms, the second bedroom is a real guest room again.",
      pros: ["The most impressive office possible here: double height, a 5 m slat wall, two stations, four screens and a laptop", "Two real bedrooms (C needed the guest room as an office)", "The den upstairs keeps the one couch and TV away from work", "Still somewhere to eat: a café table for two plus the breakfast bar, and the roof for dinner parties"],
      cons: ["No door: calls happen in an open room (the felt slats and rug help; use a headset)", "Your desk is the first thing guests see, so it has to stay tidy (closed storage and a one-tap 'after work' scene help)", "The TV is a floor away from the kitchen", "No big dining table downstairs"],
    },
    {
      id: "g", letter: "F", name: "Big loft lounge", tag: "Plan E, with the loft re-measured and re-planned",
      rooms: { loft: "living", lounge: "study", bedA: "bedroom", bedB: "guest", terrace: "social", balcony: "counter", bar: "stools", plant: "stair", kit: "std" },
      replace: { entry: ALT.entryStudio, lounge: [ALT.studyLounge, ALT.studyDesk], stair: ALT.stairStudio, loft: [ALT.loftLiving, ALT.moonSeats] },
      labels: { loft: "Loft lounge", lounge: "Studio (study)" },
      work: "In the lounge, as in Plan E: a 2.35 m double desk on the west wall. Your station has three 27\" screens; the second has a 27\" and a laptop. An oak-slat wall rises more than 5 m behind it.",
      pitch: "Plan E downstairs (the studio office in the double-height lounge, and two real bedrooms), with the loft redone at its real size. It's about 3.7 × 4.2 m inside, and the ceiling rises to about 3.85 m on the east wall, so it now holds a corner sofa with a chaise, a 75\" TV in a library that runs up to the rafters, a bar bay, and two moon chairs at the railing facing the north window.",
      pros: ["The loft finally uses its height: a 3.55 m library on the tall east wall", "A proper living room: one corner sofa seats four, plus a chaise for films", "The moon chairs are the closest view of the north window in any plan", "Plan E's strengths stay: the studio office downstairs and two real bedrooms"],
      cons: ["The library and ladder must be anchored to the party wall, and 3.55 m of shelves takes a lot of books to fill", "As in Plan E: calls happen in an open room downstairs, and the TV is a floor away from the kitchen", "The route to the roof is 90 cm between the chairs and the sofa: comfortable, but not generous", "No big dining table downstairs (dinner parties go up to the roof)"],
    },
    {
      id: "h", letter: "G", name: "Streamer loft", tag: "A streamer's loft, with Plan B's private roof",
      rooms: { loft: "stream", bedA: "bedroom", bedB: "guest", lounge: "tv", void: "pendant", terrace: "privateDine", balcony: "braai", bar: "stools", plant: "stair", kit: "std", reading: "corner", art: "west" },
      replace: {
        loft: [ALT.loftStream, ALT.loftCam], braai: ALT.balconyBraai, braaiup: ALT.privateGarden, garden: ALT.privateSun,
        terrace: ALT.privateDining,
      },
      labels: { loft: "Desk + couch", tLounge: "Sun deck", tMid: "Dining", tEnd: "Garden", balcony: "Balcony braai" },
      work: "In the loft, where Plan A's station was: a dark L-shaped corner desk with three screens, its long side on the east wall and its short side along the window wall, plus a drawer unit on your left. An L-couch behind you faces the screens.",
      pitch: "Plan A's bedrooms and lounge, a loft set up like a streamer's room, and Plan B's private roof. The U-desk goes; a dark L-shaped corner desk sits in the corner by the window, and an L-couch on the west wall faces your screens, so friends can hang out while you work or game. The roof is yours: sun deck, a covered dining table and garden. The braai moves to the balcony.",
      pros: ["Two real bedrooms downstairs, next to the bathroom, and the TV lounge as in Plan A", "Without the U-desk the loft feels open: real floor between the desk and the couch", "The loft opens onto your own roof: sun deck, a covered table to eat at, and a garden", "A ready-made webcam backdrop, and the balcony braai you already have gets used"],
      cons: ["A second couch in the flat (no second TV, so the lounge is still the only living room)", "Only one desk seat (Plan A had a second one on the west run)", "The braai is down on the balcony, a floor below the roof table (and its smoke is closer to the lounge)", "Hard to focus with people on the couch behind you; it suits evenings and weekends"],
    },
  ],
};

// Plan D's lounge is Plan A's without the pendant (the sky net spans the double-height space instead)
{
  const H = window.HOUSE, lounge = H.stops.find((s) => s.id === "lounge");
  H.plans.find((p) => p.id === "e").replace.lounge = { ...lounge, ideas: lounge.ideas.map((t) => t.replace(", and a rattan pendant in the double-height space.", ". The pendant goes: the sky net spans the double-height space above.")) };
}

// ---------------------------------------------------------------- mix your own
// Pick each area's version from plans A–G. The lounge follows the loft (one couch and one TV in the
// whole flat: if the TV is upstairs, in the den or the big loft lounge, the lounge can't have one too), and checks() tests the combination against the house rules: a 3-screen workspace, a bed
// for you, somewhere for guests, and nobody walking through your bedroom to reach the roof.
{
  const H = window.HOUSE, plan = (id) => H.plans.find((p) => p.id === id);
  H.mixSlots = [
    // [value, short label, which plans it comes from, longer description (tooltip)]
    { key: "loft", label: "Loft", opts: [["office", "Office", "A", "Three screens on the freestanding U-desk, plus a second seat"], ["stream", "Streamer", "G", "A dark L-desk in the window corner, an L-couch facing your screens, a mini fridge (the TV stays in the lounge)"], ["suite", "Bedroom", "B, D", "You sleep under the rafters, facing the north window"], ["den", "Den + TV", "C, E", "The one couch and TV move up here: a lounge bed and a 65\" TV (downstairs becomes a dining room or a study)"], ["living", "Big lounge", "F", "The one couch and TV move up here: a corner sofa, a 75\" TV in a library wall, moon chairs at the railing (downstairs becomes a dining room or a study)"]] },
    { key: "bedA", label: "Main bed­room", opts: [["bedroom", "Bedroom", "A, C", "A queen bed by the pool-view window"], ["study", "Study", "B", "Three-screen desk with a door, plus a sleeper couch"], ["office", "Office", "D", "Three-screen desk, plus your clothes in the built-ins"]] },
    { key: "bedB", label: "2nd bed­room", opts: [["guest", "Guest room", "A, B, D", "A double bed for guests"], ["office", "Office", "C", "Three-screen desk with a door"]] },
    { key: "void", label: "Over the lounge", opts: [["pendant", "Pendant", "A, B", "A big rattan pendant in the double height"], ["net", "Sky net", "D", "A walk-on net for lying under the window (engineer sign-off)"]] },
    { key: "roof", label: "Roof", opts: [["social", "Party deck", "A, C", "Covered dining, the braai and a lounge for guests"], ["private", "Private", "B", "Sun deck, daybed and garden, just for you"], ["cinema", "+ Cinema", "D", "Private, with a roll-down screen facing the daybed"], ["dine", "+ Table", "G", "Private, with a covered dining table instead of the daybed"]] },
    { key: "balcony", label: "Balcony", opts: [["counter", "Counter", "A, C", "The braai becomes a coffee counter"], ["braai", "Braai", "B", "The built-in braai is used as a braai"], ["pizza", "Pizza bar", "D", "Gas pizza oven and a living wall"]] },
  ];
  // the lounge depends on the loft (one couch + TV): it's the TV lounge, unless the loft has them
  const tvUp = (loft) => loft === "den" || loft === "living";
  H.mixSlots.splice(1, 0, { key: "lounge", label: "Lounge", opts: [["tv", "Couch + TV", "A, B, D, G", "The sofa and the TV under the stair"], ["dining", "Dining", "C", "A dining table for six (needs the TV upstairs: den or big lounge)"], ["study", "Study", "E, F", "A two-station desk wall under a 5 m slat wall (needs the TV upstairs: den or big lounge)"]] });
  H.mixAllowed = (k, v, c) => (k === "lounge" ? (tvUp(c.loft) ? v !== "tv" : v === "tv") : k === "void" && v === "net" ? !tvUp(c.loft) : true);
  H.mixNormalize = (c) => { const n = { ...c }; if (!tvUp(n.loft)) n.lounge = "tv"; else if (n.lounge === "tv") n.lounge = "dining"; if (tvUp(n.loft)) n.void = "pendant"; return n; };
  // each plan as a mix, so you can start from one
  H.mixFromPlan = { a: "office-bedroom-guest-pendant-social-counter-tv", d: "suite-study-guest-pendant-private-braai-tv", c: "den-bedroom-office-pendant-social-counter-dining", e: "suite-office-guest-net-cinema-pizza-tv", f: "den-bedroom-guest-pendant-social-counter-study", g: "living-bedroom-guest-pendant-social-counter-study", h: "stream-bedroom-guest-pendant-dine-braai-tv" };
  H.mixPresets = [
    { name: "D without the sky net", c: { loft: "suite", bedA: "office", bedB: "guest", void: "pendant", roof: "cinema", balcony: "pizza" } },
    { name: "B with the pizza balcony", c: { loft: "suite", bedA: "study", bedB: "guest", void: "pendant", roof: "private", balcony: "pizza" } },
    { name: "A with a private roof", c: { loft: "office", bedA: "bedroom", bedB: "guest", void: "pendant", roof: "cinema", balcony: "braai" } },
    { name: "G with the party deck", c: { loft: "stream", bedA: "bedroom", bedB: "guest", void: "pendant", roof: "social", balcony: "counter" } },
  ];
  const DEFAULT = { loft: "office", bedA: "bedroom", bedB: "guest", void: "pendant", roof: "social", balcony: "counter", lounge: "tv" };
  // links and saved mixes store the choices in this order (lounge last, so older links still work)
  const KEYS = ["loft", "bedA", "bedB", "void", "roof", "balcony", "lounge"], slot = (k) => H.mixSlots.find((s) => s.key === k);
  const enc = (c) => KEYS.map((k) => c[k]).join("-");
  const dec = (t) => { const v = (t || "").split("-"), c = { ...DEFAULT }; KEYS.forEach((k, i) => { if (slot(k).opts.some((o) => o[0] === v[i])) c[k] = v[i]; }); return H.mixNormalize(c); };
  H.mixEncode = enc; H.mixDecode = dec;
  let saved = new URLSearchParams(location.search).get("mix");
  try { saved = saved || localStorage.getItem("mix"); } catch {}
  H.mixChoice = dec(saved);

  // neutral copies of a few cards whose text was written for one particular plan
  const denMix = { ...ALT.loftDen, gem: "The loft becomes the flat's living room: the one couch (a lounge bed you can sleep on) and the one TV, right by the terrace door. Guests heading for the roof are just passing through the lounge.", ideas: ALT.loftDen.ideas.slice(0, 4).concat("<b>Downstairs, the double-height room becomes a dining room</b> (see the lounge stop), so there's still only one couch and one TV.") };
  const officeGuestMix = { ...ALT.officeGuest, gem: "A proper home office with a door: three screens, the veld window to your side, and shelves behind you for calls.", ideas: ALT.officeGuest.ideas.filter((t) => !/lounge bed/.test(t)) };
  const streamMix = { ...ALT.loftStream, area: ALT.loftStream.area.replace("door to your private roof", "door to the terrace"), ideas: ALT.loftStream.ideas.filter((t) => !/private roof/.test(t)) };
  const officeDressingMix = { ...ALT.officeDressing, gem: "The old main bedroom becomes your workday room: three screens, a door that closes, the built-ins for clothes, and a reading chair by the pool-view window." };

  // each check: [good | warn | bad, text, fix (choices to apply) or null, fix label]
  H.mixChecks = (c) => {
    const out = [], good = (t) => out.push(["good", t]), warn = (t, f, l) => out.push(["warn", t, f, l]), bad = (t, f, l) => out.push(["bad", t, f, l]);
    // workspace
    const work = [];
    if (c.loft === "office") work.push("the loft's U-desk");
    if (c.loft === "stream") work.push("the loft's L-desk (the couch behind you)");
    if (c.bedA === "study") work.push("the study (the old main bedroom)");
    if (c.bedA === "office") work.push("the office (the old main bedroom)");
    if (c.bedB === "office") work.push("the office (the second bedroom)");
    if (tvUp(c.loft) && c.lounge === "study") work.push("the studio lounge (two stations)");
    if (work.length) good(`3-screen workspace: ${work.join(" and ")}`);
    else bad("No 3-screen workspace.", c.loft === "suite" ? { bedA: "study" } : { loft: "office" }, c.loft === "suite" ? "Make the main bedroom a study" : "Make the loft an office");
    // your bed
    let you = null;
    if (c.loft === "suite") { you = "loft"; good("You sleep in the loft, facing the north window"); }
    else if (c.bedA === "bedroom") { you = "bedA"; good("You sleep in the main bedroom, next to the bathroom"); }
    else if (c.bedB === "guest") { you = "bedB"; warn("You'd be sleeping in the small guest room.", { bedA: "bedroom" }, "Make the main bedroom your bedroom"); }
    else if (c.loft === "den") { you = "den"; warn("You'd be sleeping on the den's lounge bed.", { bedA: "bedroom" }, "Make the main bedroom your bedroom"); }
    else bad("There's nowhere for you to sleep.", { bedA: "bedroom" }, "Make the main bedroom your bedroom");
    // guests
    const rooms = [], couches = [];
    if (c.bedB === "guest" && you !== "bedB") rooms.push("the guest room");
    if (c.bedA === "bedroom" && you !== "bedA") rooms.push("the main bedroom");
    if (c.bedA === "study") couches.push("the study's sleeper couch");
    if (c.loft === "den" && you !== "den") couches.push("the den's lounge bed");
    if (rooms.length) good(`Guests sleep in ${rooms.join(" or ")}`);
    else if (couches.length) warn(`Guests sleep on ${couches.join(" or ")}, not in a room of their own.`, c.bedB === "office" && work.length > 1 ? { bedB: "guest" } : null, "Make the second bedroom a guest room");
    else bad("There's nowhere for guests to sleep.", { bedB: "guest" }, "Make the second bedroom a guest room");
    // one TV
    if (tvUp(c.loft)) good(`One couch and one TV, in the loft ${c.loft === "den" ? "den" : "lounge"}. The lounge becomes ${c.lounge === "study" ? "your study" : "a dining room"}`);
    else if (c.loft === "stream") warn("A second couch: the L-couch behind your desk. There's no second TV, so the lounge is still the only living room.", { loft: "office" }, "Make the loft a plain office");
    else good("One couch and one TV, in the lounge");
    if (tvUp(c.loft) && c.lounge === "study" && c.roof !== "social" && c.roof !== "dine") warn("No dinner table for guests: the lounge is a study and the roof is private (just the café table and the bar).", { roof: "dine" }, "Put a table on the private roof");
    // the roof route
    if (c.loft === "suite" && c.roof === "social") bad("Guests would walk past your bed to reach the roof (the curtain problem).", { roof: "private" }, "Make the roof private");
    else if (c.loft === "suite") good("Nobody walks through your bedroom: the roof is just yours");
    else if (c.roof === "social") good("Guests reach the roof through the loft, which isn't a bedroom");
    // braai
    const braais = (c.roof === "social" ? 1 : 0) + (c.balcony === "braai" ? 1 : 0);
    if (!braais) warn("No braai anywhere: the roof's private and the built-in braai isn't used.", { balcony: "braai" }, "Use the balcony braai");
    if (braais === 2) warn("Two braais (the roof's kettle braai and the balcony's). You only need one.", { balcony: "counter" }, "Make the balcony a counter");
    if (c.void === "net" && !tvUp(c.loft)) warn("The sky net needs an engineer to sign off the wall fixings first.", { void: "pendant" }, "Swap it for the pendant");
    return out;
  };
  // which plan's pre-rendered picture shows this stop the way the mix has it (used by the gallery)
  H.mixImagePlan = (stopId, c) => {
    const up = tvUp(c.loft), net = c.void === "net" && !up;
    const by = {
      loft: { den: "c", living: "g", stream: "h", office: "a" }[c.loft] || (net ? "e" : "d"), "loft-view": c.loft === "living" ? "g" : net ? "e" : "d", "loft-net": "e",
      lounge: up ? (c.lounge === "study" ? "f" : "c") : net ? "e" : "a", "lounge-desk": "f", stair: up ? (c.lounge === "study" ? "f" : "c") : "a", entry: up ? (c.lounge === "study" ? "f" : "c") : "a", kitchen: "a", bath: "a",
      bed1: { bedroom: "a", study: "d", office: "e" }[c.bedA], bed2: c.bedB === "office" ? "c" : "a",
      terrace: { social: "a", private: "d", cinema: "e", dine: "h" }[c.roof], braaiup: c.roof === "social" ? "a" : "d", garden: c.roof === "social" ? "a" : "d",
      braai: { counter: "a", braai: "d", pizza: "e" }[c.balcony],
    };
    return by[stopId] || "a";
  };

  H.buildMix = (c) => {
    const den = tvUp(c.loft), suite = c.loft === "suite", net = c.void === "net" && !den; // den: the TV is upstairs (den or big lounge)
    const study = den && c.lounge === "study";
    const rooms = { loft: c.loft, bedA: c.bedA, bedB: c.bedB, lounge: den ? (study ? "study" : "dining") : "tv", terrace: { social: "social", dine: "privateDine" }[c.roof] || "private", balcony: c.balcony, bar: "stools", plant: "stair", kit: "std" };
    if (!study) Object.assign(rooms, { reading: "corner", art: "west" });
    if (!den) rooms.void = net ? "net" : "pendant";
    if (c.roof === "cinema") rooms.cinema = "screen";
    const loftStop = H.stops.find((s) => s.id === "loft"), r = {}, L = {};
    const loft = suite ? [ALT.loftSuite, ALT.moonView] : c.loft === "living" ? [ALT.loftLiving, ALT.moonSeats] : c.loft === "stream" ? [streamMix, ALT.loftCam] : den ? [study ? { ...ALT.loftDenStudio, ideas: ALT.loftDenStudio.ideas.slice(0, 4) } : denMix] : [];
    if (net) loft.push(ALT.skyNet);
    if (loft.length) r.loft = c.loft === "office" ? [loftStop, ...loft] : loft;
    if (den && !study) { r.lounge = ALT.dining; r.stair = ALT.stairDining; L.loft = "Living room"; L.lounge = "Dining room"; }
    if (study) { r.entry = ALT.entryStudio; r.lounge = [ALT.studyLounge, ALT.studyDesk]; r.stair = ALT.stairStudio; L.loft = "Den (living room)"; L.lounge = "Studio (study)"; }
    if (net) { r.lounge = plan("e").replace.lounge; L.void = "Sky net"; }
    if (suite) L.loft = "Loft suite";
    if (c.loft === "living") L.loft = "Loft lounge";
    if (c.loft === "stream") L.loft = "Desk + couch";
    if (c.bedA === "study") { r.bed1 = ALT.study; L.bedA = "Study"; }
    if (c.bedA === "office") { r.bed1 = officeDressingMix; L.bedA = "Office + dressing"; }
    if (c.bedA === "bedroom" && suite) { r.bed1 = ALT.guestSuite; L.bedA = "Guest suite"; }
    if (c.bedB === "office") { r.bed2 = officeGuestMix; L.bedB = "Office"; }
    if (c.roof !== "social") { r.terrace = { cinema: ALT.cinema, dine: ALT.privateDining }[c.roof] || ALT.privateCovered; r.braaiup = ALT.privateGarden; r.garden = ALT.privateSun; Object.assign(L, { tLounge: "Sun deck", tMid: { cinema: "Cinema", dine: "Dining" }[c.roof] || "Daybed", tEnd: "Garden" }); }
    if (c.balcony === "braai") { r.braai = ALT.balconyBraai; L.balcony = "Balcony braai"; }
    if (c.balcony === "pizza") { r.braai = ALT.balconyPizza; L.balcony = "Pizza balcony"; }
    const checks = H.mixChecks(c);
    const PH = { lounge: { tv: "the couch and TV", dining: "a dining room", study: "your studio office" }, loft: { office: "an office", stream: "a streamer's room (your desk with the couch behind it)", suite: "your bedroom", den: "the den, with the couch and TV", living: "the big loft lounge, with the couch and TV" }, bedA: { bedroom: "a bedroom", study: "a study", office: "an office + dressing room" },
      bedB: { guest: "a guest room", office: "an office" }, roof: { social: "the party deck", private: "your private retreat", cinema: "your private retreat with a cinema screen", dine: "your private retreat with a dining table" }, balcony: { counter: "a coffee counter", braai: "the braai", pizza: "a pizza bar" } };
    const name = (k) => PH[k][c[k]];
    return {
      id: "mix", letter: "✦", name: "Mix your own", tag: "Pieces from A–G", mix: true, choice: c, checks,
      same: Object.entries(H.mixFromPlan).find(([, m]) => m === enc(c))?.[0],
      rooms, replace: r, labels: L,
      work: checks.find((x) => /^3-screen/.test(x[1]))?.[1].replace(/^3-screen workspace: /, "") || "None yet: see the checks below",
      pitch: `The loft is ${name("loft")}${den ? `, the lounge ${name("lounge")}` : ""}, the main bedroom ${name("bedA")} and the second bedroom ${name("bedB")}. The roof is ${name("roof")}, and the balcony has ${name("balcony")}${net ? ". The sky net spans the lounge" : ""}.`,
      pros: checks.filter((x) => x[0] === "good").map((x) => x[1]), cons: checks.filter((x) => x[0] !== "good").map((x) => x[1]),
    };
  };
}
