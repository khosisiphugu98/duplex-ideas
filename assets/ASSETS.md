# House_design — real-world asset pack

All assets are **CC0** (Poly Haven, ambientCG): free for any use, no attribution required. Machine-readable details (every map path, tile sizes, dimensions, triangle counts, node names) are in `assets/manifest.json`. Total size is about 166 MB. Textures are 1k JPG, except the oak floor and terracotta tiles, which are 2k. Models use 1k textures. HDRIs are 2k.

## Conventions
- Normal maps are **OpenGL** (`nor_gl` / `NormalGL`), so three.js uses them as-is.
- `tileSizeM` is how many real-world metres one 0..1 UV repeat covers. Set `texture.repeat = surfaceMetres / tileSizeM`. Values marked *est.* are estimates (the source doesn't publish a size).
- `arm` is packed AO (R), roughness (G) and metalness (B), so one texture can drive `aoMap`, `roughnessMap` and `metalnessMap`. In three.js r151+, `aoMap` reads UV channel `texture.channel` (default 0), so no `uv2` is needed.
- Colour maps go in `SRGBColorSpace`. Normal, roughness, AO and ARM maps stay linear.

## HDRIs (`assets/hdri/`)
| id | use | notes |
|---|---|---|
| `sky_day` | sky_day | Day mode: clear-to-partly-cloudy midday sky. Sun 48° elevation, cumulus. Pure-sky variant (no ground) so your own terrain shows below horizon. |
| `sky_evening` | sky_evening | Evening mode: golden-hour, clear sky with sun 1° above horizon. Pure-sky variant. |

## Textures (`assets/textures/<name>/`)
| folder | role | source | tileSizeM | maps |
|---|---|---|---|---|
| `carpet_charcoal` | charcoal low-pile carpet (bedrooms) | ambientCG `Carpet012` | 1.0 *est.* | ao, color, normal, roughness |
| `ceiling_white_boards` | white tongue-and-groove board ceiling (bedrooms/kitchen) | Poly Haven `white_planks_clean` | 1.8 | ao, arm, color, normal, roughness |
| `fabric_boucle` | boucle / wool-like nubbly fabric (accent chair, cushions) | Poly Haven `curly_teddy_natural` | 0.336 | ao, arm, color, metalness, normal, roughness |
| `fabric_linen` | cream linen / woven upholstery (sofa, cushions, curtains) | ambientCG `Fabric062` | 0.4 | ao, color, normal, roughness |
| `fabric_rust_wool` | clay/rust wool accent fabric (cushions, throws) | Poly Haven `caban` | 0.274 | ao, arm, color, metalness, normal, roughness |
| `floor_oak_laminate` | light oak laminate floor (downstairs + loft) | ambientCG `WoodFloor039` | 1.9 | ao, color, normal, roughness |
| `granite_speckled_brown` | dark speckled granite kitchen counter (alt, brown/gold) | ambientCG `Granite007A` | 0.8 *est.* | color, normal, roughness |
| `granite_speckled_grey` | dark speckled granite kitchen counter (primary, darken) | ambientCG `Granite005A` | 0.8 *est.* | color, normal, roughness |
| `grass_dry_veld` | dry winter grass / veld ground | Poly Haven `withered_grass` | 2.0 | ao, arm, color, normal, roughness |
| `grass_lawn` | lawn grass (garden, pool lawn) | ambientCG `Grass004` | 1.4 | ao, color, normal, roughness |
| `metal_chequer_plate` | aluminium chequer/diamond plate (stair tread caps) | ambientCG `DiamondPlate001` | 0.3 *est.* | color, metalness, normal, roughness |
| `paving_brick` | clay brick paving (driveway, pool surround) | Poly Haven `red_brick_pavers` | 1.8 | ao, arm, color, normal, roughness |
| `plaster_exterior_cream` | cream/beige rough exterior plaster (facade) | Poly Haven `beige_wall_002` | 3.0 | ao, arm, color, normal, roughness |
| `plaster_interior_white` | white painted interior wall plaster (subtle) | ambientCG `Plaster001` | 2.0 *est.* | color, normal, roughness |
| `roof_corrugated_metal` | corrugated metal roof sheeting (tint green) | ambientCG `CorrugatedSteel005` | 0.9 *est.* | ao, color, metalness, normal, roughness |
| `rug_berber` | berber / wool rug (cream, nubbly) | ambientCG `Carpet016` | 1.7 | ao, color, normal, roughness |
| `rug_jute` | jute / woven rug (tint tan) | ambientCG `Carpet014` | 0.5 *est.* | color, normal, roughness |
| `tile_bathroom_beige` | large-format beige/cream ceramic wall tile (bathroom) | ambientCG `Tiles139` | 2.0 | color, normal, roughness |
| `tile_kitchen_white_square` | small white square ceramic wall tiles (kitchen splashback) | ambientCG `Tiles133A` | 1.5 *est.* | ao, color, normal, roughness |
| `tile_terracotta` | terracotta-red square exterior floor tiles (balconies, roof terrace) | Poly Haven `terracotta_floor_tiles` | 2.08 | ao, arm, color, normal, roughness |
| `wood_dark_stained` | dark-stained timber (stair treads, exposed round rafters) | ambientCG `Wood051` | 0.8 | color, normal, roughness |
| `wood_oak_furniture` | oak (furniture tops, shelves, dining table re-skin) | Poly Haven `oak_veneer_01` | 1.83 | ao, arm, color, normal, roughness |

## Models (`assets/models/<id>/<id>_1k.gltf`)
Dimensions are W × H × D in metres, as loaded.

| id | role | dims (m) | tris | key notes |
|---|---|---|---|---|
| `sofa_02` | lounge sofa (2–3 seater) | 1.81 × 0.71 × 0.82 | 2,728 | Black tufted leather + wood |
| `mid_century_lounge_chair` | lounge chair / reading chair | 1.01 × 1.17 × 1.19 | 6,148 | Eames-style swivel lounge chair, tan leather + walnut shell |
| `modern_arm_chair_01` | armchair (oak frame) | 0.82 × 1.02 × 0.99 | 8,916 | Light wood frame with black leather cushions; swap cushion material to fabric_boucle/fabric_linen for warm-minimal. |
| `coffee_table_round_01` | round coffee table | 1.30 × 0.49 × 1.30 | 4,044 | White marble top on chrome curved legs |
| `side_table_01` | side table / nightstand | 0.55 × 0.55 × 0.45 | 2,756 | Minimal oak two-tier side table; also use as bedside table (no modern nightstand on Poly Haven). |
| `modern_wooden_cabinet` | low sideboard / TV console | 2.44 × 0.68 × 0.52 | 24,976 | 2.44 m walnut-tone media console; doors are separate nodes (door_l/door_r). |
| `drawer_cabinet` | chest of drawers / tall storage | 1.14 × 1.88 × 0.49 | 26,406 | Wood + metal modern drawer unit; drawers are separate nodes. |
| `painted_wooden_table` | 6-seat dining table (terrace or indoor) | 2.41 × 0.96 × 1.14 | 600 | Blue-painted farmhouse trestle table 2.41 x 1.14 m, only 600 tris |
| `wooden_table_02` | desk / small dining table | 1.13 × 0.80 × 0.71 | 196 | Simple solid-timber table 1.13 x 0.71 m, 196 tris — study desk or 4-seat table. |
| `dining_chair_02` | dining chair | 0.43 × 0.97 × 0.58 | 22,013 | Modern upholstered dining chair (dark leather) — re-tint to tan/linen if desired |
| `metal_stool_01` | bar / counter stool | 0.35 × 0.88 × 0.35 | 8,334 | Black steel frame, tan leather round seat; 0.88 m = bar height |
| `outdoor_table_chair_set_01` | bistro set (braai balcony) | 0.78 × 0.86 × 1.83 | 9,828 | Folding café table + 2 folding chairs (timber slats, black steel) |
| `modern_ceiling_lamp_01` | pendant light (living/dining) | 0.43 × 0.95 × 0.43 | 5,602 | Opal glass globe pendant on cord |
| `hanging_industrial_lamp` | pendant light (kitchen / island) | 0.55 × 1.35 × 0.55 | 9,530 | Enamel industrial pendant; origin at ceiling (hangs to -1.34 m) |
| `industrial_pipe_lamp` | table lamp | 0.18 × 0.36 × 0.26 | 8,626 | Black pipe lamp with Edison bulb (emissive) |
| `desk_lamp_arm_01` | desk lamp (study) | 0.20 × 0.89 × 0.61 | 24,102 | Anglepoise-type arm lamp, orange enamel — retint black for the brief. |
| `steel_frame_shelves_01` | bookshelf / open shelving | 10.97 × 21.41 × 5.02 | 4,348 | Black steel frame + timber shelves |
| `wooden_display_shelves_01` | cube shelving / storage | 0.37 × 1.56 × 1.08 | 3,174 | Pine 3x3 cube shelf with drawers |
| `potted_plant_01` | medium-tall potted plant (1.35 m) | 0.59 × 1.35 × 0.63 | 176,226 | Leafy plant in terracotta pot |
| `potted_plant_02` | potted elephant-ear / alocasia (0.84 m) | 0.70 × 0.84 × 0.66 | 69,806 | Big-leaf plant in terracotta pot |
| `potted_plant_04` | small tabletop succulent (aloe in white pot) | 0.17 × 0.27 × 0.18 | 8,929 | Stand-in for spekboom/succulent pots on shelves and tables. |
| `pachira_aquatica_01` | tall indoor plant (money tree) — 4 variants | 6.87 × 1.90 × 1.00 | 76,914 | 4 variants side by side in one file (x = -2, 0, 2, 4) |
| `calathea_orbifolia_01` | small leafy plants (5 variants) | 2.49 × 0.42 × 1.19 | 16,688 | Calathea clumps 0.13–0.42 m tall (variants a–e laid out on X/Z) |
| `planter_pot_clay` | terracotta plant pot | 0.27 × 0.22 × 0.26 | 3,080 | 0.27 x 0.22 m clay pot (slightly weathered) |
| `ceramic_vase_01` | decor vase (tall bottle, white) | 0.20 × 0.40 × 0.20 | 10,296 | Modern white ceramic. |
| `ceramic_vase_02` | decor vase (wide jar, cream) | 0.22 × 0.31 × 0.22 | 11,128 | Modern ceramic jar. |
| `ceramic_vase_03` | decor vase (slim tall, white) | 0.11 × 0.41 × 0.11 | 11,136 | Modern ceramic. |
| `ceramic_vase_04` | decor vase (jug, white) | 0.18 × 0.34 × 0.18 | 9,000 | Modern ceramic jug. |
| `book_encyclopedia_set_01` | books (shelf row) | 0.55 × 0.24 × 0.16 | 67,306 | Row of hardback books 0.55 m long; 20 separate book nodes, 67k tris — merge or use sparingly (instancing recommended). |
| `hanging_picture_frame_01` | wall art frame (modern minimal) | 0.59 × 0.84 × 0.02 | 2,586 | Thin black frame, 0.59 x 0.84 m; origin centred |
| `standing_picture_frame_01` | small standing photo frame | 0.10 × 0.25 × 0.20 | 1,634 | Shelf/desk decor. |
| `throw_pillows_01` | scatter cushions (rust/orange) | 1.02 × 0.45 × 0.63 | 6,362 | Two cushions with an orange/red chevron print — clay/rust accent |
| `wicker_basket_02` | rattan lidded basket | 0.38 × 0.22 × 0.27 | 17,850 | Natural woven basket (lid separate node) — floor/shelf decor. |
| `wooden_bowl_01` | carved wooden bowl | 0.31 × 0.09 × 0.31 | 14,122 | Coffee table / counter decor. |
| `quiver_tree_02` | garden feature tree (SA quiver tree / kokerboom) | 0.87 × 1.47 × 0.88 | 82,074 | South African Aloidendron, 1.47 m |

### Model gotchas
- **steel_frame_shelves_01**: the source glTF is 10× too big. Set `scale = 0.1`.
- **wooden_display_shelves_01** faces ±X. **outdoor_table_chair_set_01** is laid out along Z. Rotate both to suit.
- **pachira_aquatica_01** packs 4 plant variants side by side at x = -2, 0, 2, 4. Use `*_bark_d` + `*_leaves_d` for the 1.9 m tall corner plant, and subtract its x offset. It has no pot.
- **calathea_orbifolia_01** packs 5 small variants. It has no pot.
- **potted_plant_01** is 176k tris. Hide `potted_plant_01_pebbles` to save 57k. **potted_plant_02**: hide `potted_plant_02_dirt` to save 54k. Replace both with a flat soil disc.
- **modern_ceiling_lamp_01** sits 0.22–1.17 m above its origin. **hanging_industrial_lamp** hangs below its origin (origin at the ceiling).
- Re-skin to fit the warm-minimal brief: `sofa_02` (black tufted leather) gets `fabric_linen`. `modern_arm_chair_01` cushions get `fabric_boucle`. `painted_wooden_table` (blue paint) gets `wood_oak_furniture`. `desk_lamp_arm_01` (orange) gets a black tint.

## Not found as CC0 (build procedurally, or source elsewhere)
- **Floor lamp**: none on Poly Haven.
- **Bed / bedding / headboard**: only gothic, antique iron or day-bed models exist, so none were taken. Build a box bed with `fabric_linen` duvet and pillows.
- **Modern flat-screen TV**: only CRT/vintage TVs exist. Use a thin black box with an emissive or glossy screen.
- **Office/desk chair**: only a school chair or barber chair exist. `mid_century_lounge_chair` (swivel) can stand in for a study.
- **Mirror**: only an ornate gilt mirror exists. Use a thin frame plus a reflective plane or `MeshPhysicalMaterial` (metalness 1, roughness 0).
- **Outdoor lounge sofa and armchairs, 6-seat outdoor chairs**: none. Only urban street seating exists. Use `dining_chair_02` / `outdoor_table_chair_set_01` chairs or build from `wood_oak_furniture` + `fabric_linen`.
- **Fire bowl**: none (only a stone fire-pit ring). Use a lathe geometry with black/rust metal plus emissive embers.
- **Plants**: no strelitzia (wild banana), olive tree, lavender, rosemary, spekboom, trailing pothos or acacia (thorn tree). Stand-ins: pachira for tall foliage, potted_plant_02 for big-leaf, potted_plant_04 for succulents, calathea for small leafy. Acacia and olive need procedural trees or billboard cards.
- **Bathroom mosaic border strip**: not sourced. Make it a procedural band, or tint ambientCG `Tiles019`.
- **Curtains / blinds, kitchen appliances (modern), bathroom fittings, pool water**: none suitable. Build procedurally. Use three.js `Water` for the pool.
- **Dark speckled granite**: no truly dark speckled countertop granite exists as CC0. Use `granite_speckled_grey` with its colour multiplied ~0.4, or the darker brown `granite_speckled_brown`.

## Credits (courtesy — CC0)
- **Poly Haven** (polyhaven.com): HDRIs by Greg Zaal (and Jarod Guest for the pure-sky edits). Textures and models by James Ray Cock, Rico Cilliers, Rob Tuytel, Kuutti Siitonen, Ulan Cabanilla, Dimitrios Savva, Amal Kumar, Kirill Sannikov, Serhii Khromov, colormass, Charlotte Baglioni, Jenelle van Heerden, Vibrant Nordic, Patrik Pangerl, Mateusz Sadek, Yann Kervran, John Malcolm, Oliver Harries and Dario Barresi. Per-asset authors are in `manifest.json`.
- **ambientCG** (ambientcg.com) by Lennart Demes: WoodFloor039, Carpet012, Carpet014, Carpet016, Plaster001, Tiles133A, Tiles139, Granite005A, Granite007A, CorrugatedSteel005, DiamondPlate001, Wood051, Fabric062, Grass004.
- `carpet_charcoal/Carpet012_1K-JPG_Color_desat.jpg` is a greyscale derivative of ambientCG Carpet012, made locally.
