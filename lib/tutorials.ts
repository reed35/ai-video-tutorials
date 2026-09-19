import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
  {
    id: "seoul-aurora-mango-billboard",
    title: "首尔黄金时刻广告牌递瓶",
    subtitle: "Seoul golden hour · Seedance 2.5",
    description:
      "本案例拆解一条10秒的成片:先用人物/产品参考图统一造型,再用首尔街头黄金时刻建立真实空间;通过轻微手持、慢推镜头和广告牌景深,让模特从平面广告里递出同款芒果汁,最后用真实前景手完成屏幕内外的匹配交接。",
    video: "/tutorials/seoul-aurora-mango-billboard/demo-web.mp4",
    poster: "/tutorials/seoul-aurora-mango-billboard/poster.jpg",
    duration: "10 秒",
    shots: 5,
    references: 1,
    model: "Seedance 2.5",
    style: "真人摄影 · 街头广告",
    tags: [
      "10 秒 · 5 节拍 · 连贯",
      "1 张参考图",
      "Seedance 2.5",
      "真人摄影 · 街头广告",
    ],
    steps: [
      {
        number: 1,
        title: "看懂参考图锁定人物与瓶",
        description:
          "参考图统一造型:金发模特的发型、服装、体态,以及 AURORA MANGO 芒果汁瓶的外观和标签。无单独出图词。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:16:9 · 10 秒 · 打开声音。挂上参考图(人物与产品)。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "注意跨屏递瓶动作和最后3秒前景真手交接;保持标签朝向镜头;声音自然城市氛围。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "REF 01",
        title: "人物与产品 · 参考图",
        subtitle: "参考图(无单独出图词) · @Image1 · 视觉参考",
        image: "/tutorials/seoul-aurora-mango-billboard/refs/REF01.jpg",
        prompt: "",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:02 建立场景:首尔傍晚街头,行人和黄橙色出租车穿过前景,巨幅广告牌占据画面。教练提示:先把城市真实感立住:黄金时刻、轻微手持、广告牌和前景交通形成明显层次。",
      },
      {
        number: 2,
        description:
          "00:02–00:04 广告人物起身:广告牌中的金发模特从侧躺姿势流畅坐起,面向镜头微笑。教练提示:动作保持简单连贯,让参考图中的发型、服装和体态在运动中持续一致。",
      },
      {
        number: 3,
        description:
          "00:04–00:06 拿起产品:模特向下伸手,拿起琥珀色 AURORA MANGO 芒果汁瓶。教练提示:把产品作为动作锚点;让瓶身、标签和手部关系清楚,避免产品形变。",
      },
      {
        number: 4,
        description:
          "00:06–00:07 跨屏递出:模特将瓶子朝观众方向抛/递出,镜头继续缓慢推进。教练提示:用前后景尺度变化制造「瓶子穿出广告牌」的错觉,保持标签朝向镜头。",
      },
      {
        number: 5,
        description:
          "00:07–00:10 真实手完成交接:最后三秒,真实前景手拿着同一瓶子进入画面;广告牌退到略微失焦的背景。教练提示:匹配瓶子位置、角度和标签方向,完成屏幕内外的视觉接力;声音保持自然城市氛围。",
      },
    ],
    constraints:
      "10秒连贯;轻微手持慢推;瓶标签朝向镜头;最后3秒真手前景交接;AURORA MANGO 虚构品牌。来源:Picsart 公开分享/Seedance 2.5。",
    video_prompt: {
      title: "Seoul Aurora Mango Billboard · ~10s · 1 Shot / 5 Beats",
      subtitle: "Seedance 2.5 · 16:9 · handheld push · diegetic sound",
      content: `Photorealistic street video, Seoul, South Korea, late afternoon golden hour. Busy urban sidewalk in front of a tall modern building with a massive photorealistic billboard. Yellow and orange taxis and pedestrians pass in the foreground. Camera is slightly handheld, slow push-in. On the giant billboard: a glamorous woman <image1> with long wavy blonde hair, tanned skin, wearing a cream sleeveless top with denim collar and gold buttons, short denim mini skirt, and black strappy sandals. She sits on a clean white platform against a soft cloudy sky. She starts reclining on her side, then fluidly sits up, smiles at camera, reaches down, picks up a stylish amber glass bottle of mango juice, and throws amber glass bottle of mango juice toward the viewer as if handing the bottle off the billboard. In the last 3 seconds a real hand enters the foreground holding the exact same physical bottle (label facing camera), perfectly matching the billboard pose. Billboard remains visible and slightly out of focus in the background. Natural city sound, cinematic color grade, high detail, 4K, 10 seconds. Fictional brand on bottle and billboard: AURORA MANGO Tagline style: "Cold-Pressed No.5" Key notes on label: Ripe Alphonso Mango · Passionfruit · Vanilla`,
    },
  },
  {
    id: "hr-replasty-anamorphic-billboard",
    title: "变形广告牌递霜",
    subtitle: "HR Replasty · Anamorphic Billboard",
    description:
      "先看上面这段成品:时代广场拐角巨型 LED 变形屏上,红发模特 Elena 从屏内探出身,把黑金面霜递到镜头前路人手上。下面按「先出参考图 → 再喂给视频模型」的顺序,把每一步提示词都摊开。不会剪辑也能照着做——整段约 30 秒、一镜到底、只有环境声。",
    video: "/tutorials/hr-replasty-anamorphic-billboard/demo-web.mp4",
    poster: "/tutorials/hr-replasty-anamorphic-billboard/poster.jpg",
    duration: "30 秒",
    shots: 6,
    references: 3,
    model: "Seedance 2.5 · 连续一镜",
    style: "真人摄影 · 户外变形广告",
    tags: [
      "30 秒 · 6 节拍 · 一镜到底",
      "3 张参考图",
      "Seedance 2.5",
      "真人摄影 · 户外变形广告",
    ],
    steps: [
      {
        number: 1,
        title: "生成 3 张参考图",
        description:
          "Elena 角色设定板、夜景空广告牌街景板、黑金面霜产品图。顺序固定,后面当 @Image1–3。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:1080p · 约 30 秒 · 打开声音。把 3 张图按顺序挂上(Elena → 夜景广告牌 → 面霜罐)。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "一次生成整段「变形屏递瓶」。必须一镜到底、广角手持抖动、不要推近;屏内人物始终小于屏幕。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "REF 01",
        title: "Elena · 角色与状态板",
        subtitle: "角色设定板 · @Image1 · GPT Image · 4:3",
        image: "/tutorials/hr-replasty-anamorphic-billboard/refs/REF01_ELENA.jpg",
        prompt: `Character-design reference sheet layout on a clean light cream background, neatly organized like an official character model sheet, all views showing the SAME woman, fully consistent. Layout: top-left a title block reading "ELENA" with a short info list (NAME: Elena / AGE: late 20s / ROLE: fashion model / PERSONALITY: playful, witty, big expressive face); below it a COLOR PALETTE section with labeled swatch rows for HAIR, EYES, SKIN, OUTFIT; center: a large FRONT VIEW bust portrait mid-laugh with a wide open-mouthed smile and crinkled eyes, and beside it a SECOND bust portrait with one eyebrow high and lips pursed to one side, both labeled; right: a full-body "START STATE" panel — she sits on a bare pale floor wearing ONLY a white cropped sleeveless tank top and plain white briefs, BAREFOOT, bare legs, with a pair of dark blue denim jeans lying crumpled on the floor beside her, labeled; below it a full-body "DRESSED" panel standing in the same tank top with the dark blue jeans pulled on, still barefoot, labeled; bottom: a DETAILS strip of four captioned close-up panels (voluminous wavy auburn-red hair, one eye caught mid-wink with deep eye-corner creases, bare feet, the crumpled dark blue jeans as a separate prop). The character: a late-20s Caucasian woman — voluminous wavy auburn-red hair, slate-blue eyes, fair natural skin, a big mobile expressive face. Every panel is a REAL candid photograph of the same woman — soft natural daylight, unedited raw photo look, gentle contrast, natural skin, no retouching. Clean minimal English labels only.`,
      },
      {
        id: "ref2",
        number: "REF 02",
        title: "夜景广告牌空镜",
        subtitle: "场景空镜板 · @Image2 · GPT Image · 4:3",
        image: "/tutorials/hr-replasty-anamorphic-billboard/refs/REF02_NIGHT_BILLBOARD.jpg",
        prompt: `Empty scene plate, no featured character: a low-angle view from a crowded street-level crosswalk looking up at a massive curved corner 3D LED billboard on a modern skyscraper at a Times Square style intersection at night. IMPORTANT SCALE: the billboard is enormous — roughly ten storeys tall — and the pedestrians and yellow taxis at the bottom of frame are tiny by comparison; the building's corner edges, neighbouring glowing ad screens and scaffolding are all visible around the billboard, and the crowded crosswalk with taxis fills the lower third of the frame. The 3D LED stage area is EMPTY. Vibrant neon night lighting, wet asphalt reflections, soft haze. Photoreal broadcast camera look, flat realistic contrast, raw unedited footage look, no text anywhere on the screens, no logos.`,
      },
      {
        id: "ref3",
        number: "REF 03",
        title: "黑金面霜 · 产品图",
        subtitle: "产品静物板 · @Image3 · GPT Image · 4:3",
        image: "/tutorials/hr-replasty-anamorphic-billboard/refs/REF03_SKINCARE_JAR.jpg",
        prompt: `Product photograph of a high-end luxury skincare cream jar: a glossy jet-black rounded bulbous jar with a matching black domed lid, turned about 30 degrees away from camera so the front label area catches a soft highlight and is only partly legible; slim gold metallic lettering runs across the front. Sitting on a clean dark neutral surface, soft studio reflections, crisp macro focus on the jar's curved edge and lid. Photorealistic, luxury cosmetics product photography.`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "苏醒 · ~5s:Elena 蜷在暗色 LED 舞台上,穿白背心与内裤、赤脚;身旁扔着深蓝牛仔裤。撑起身,整颗头猛地转向街面,双手「whoa」举到脸侧",
      },
      {
        number: 2,
        description:
          "穿裤 · ~5s:坐起拖过牛仔裤套上、扭胯踮脚扣好;双臂大张、抬下巴、侧胯「ta-da」定格——头仍只到屏幕中部,上方留白",
      },
      {
        number: 3,
        description:
          "转身 · ~5s:背对街道、双手撑地、塌腰扭胯两下,红发甩过肩;猛回头看人群,一掌拍上自己胯侧;下方手机齐刷刷举起",
      },
      {
        number: 4,
        description:
          "递瓶 · ~5s:从屏底捞起黑金面霜举过头顶,再探出下沿做透视;对镜头口型同步喊出:「The harder you go on me... the softer I get.」",
      },
      {
        number: 5,
        description:
          "交接 · ~5s:前景真人手伸入画面接过罐子;屏上 Elena 空手一合、双臂上举佯怒、赤脚跺地,再捂嘴前俯大笑",
      },
      {
        number: 6,
        description:
          "定格 · ~5s:前景手略放低罐子、金字反光;屏上 Elena 站直、双手大吹吻,笑声里出租车与人群继续流动。定格,结束",
      },
    ],
    constraints:
      "一镜到底广角手持不推近;屏内人物始终小于屏幕;不要加 BGM(仅环境声);尺度锁定;开场仅穿背心内裤赤脚、牛仔裤在地上。",
    video_prompt: {
      title: "HR Replasty · Anamorphic Billboard · ~30s · 1 Shot / 6 Beats",
      subtitle: "Seedance 2.5 · continuous wide handheld · diegetic sound only",
      content: `[GEN 1 — ANAMORPHIC BILLBOARD HANDOFF]
[GLOBAL] NO background music — diegetic sound only. ONE continuous 16-second WIDE shot from one street-level position. NO cuts in the camera shot or billboard content; both keep the same framing. Raw unedited broadcast footage, natural night contrast, vibrant neon glow, wet asphalt reflections, soft haze.

CAMERA (critical): VERY SHAKY HANDHELD — organic jitter, drift, breathing sway and imperfect corrections from a person in the crowd. Keep WIDE throughout: NO push-in, NO zoom, NO re-centring, and the camera does NOT follow Elena or reframe when she stands. Keep the billboard the same size throughout. The building's corner edge, the neighbouring ad screens and the crowded crosswalk with yellow taxis remain visible in frame the whole time.

SCALE LOCK (critical): the billboard is enormous — about ten storeys tall — and the pedestrians and taxis in the lower third of frame are tiny by comparison and stay in frame as the size reference. The LED stage inside the billboard is about THREE TIMES Elena's standing height: when she stands up fully she occupies only the middle third of the screen's height, with a large area of empty LED stage above her head and open space on both sides. She must never fill or overflow the screen area, and never appear larger than the screen that contains her.

CHARACTERS & ENVIRONMENT: ELENA (match @Image1 exactly) — voluminous wavy auburn-red hair, slate-blue eyes. TSX-style night intersection (match @Image2 exactly) with a dense pedestrian crowd and continuous taxi traffic. The skincare jar (match @Image3 exactly).

START STATE (critical): at the very first frame Elena is lying curled on the dark LED stage floor wearing ONLY a white cropped sleeveless tank top and plain white briefs — BARE LEGS, BARE FEET, NO jeans, NO shoes, NO socks. A pair of dark blue denim jeans lies crumpled on the stage floor beside her, clearly visible as a separate object before she touches it. She stays barefoot for the entire film — she never puts on shoes.

ACTING — PROJECT WITH THE BODY (critical): Elena is small inside a giant screen. Project each emotion through a LARGE, silhouette-readable action: whole-head snaps and tilts, shoulders thrown up or shaking, arms flung wide, a hand slapped over the mouth, a hip cocked, a bare foot stamped, a blown kiss. Give ONE clear big action per beat and let it hold — never several small ones at once. Grins, brow lifts and a wink accompany the readable body actions. Accurate lip-sync on the spoken line.

CROWD: people on the crosswalk stop walking, tip their heads back, raise phones, point up and react audibly as the 3D illusion works.

No on-screen text, no burn-in subtitles, no captions, no logos anywhere except the jar's own lettering. NO background music — diegetic sound only: heavy traffic rumble, taxi horns, dense crowd chatter, gasps and cheers from the onlookers, her voice carrying down over the street, night city hum.

Shot 1: ONE continuous wide shot from a low-angle street-level position at the crosswalk, the giant curved billboard above and the crowd and yellow taxis in the lower third, very shaky handheld, no cuts. Elena performs six consecutive beats in this uninterrupted frame:
(1) WAKE: on the empty dark LED stage Elena lies curled on her side in just the white tank top and briefs, bare feet tucked up, the crumpled dark blue jeans on the floor beside her. She pushes up onto one elbow — then her WHOLE HEAD snaps toward the street below and her upper body recoils back an inch, both hands flying up beside her face in a big open-palmed "whoa"; she holds that shape a beat while the crowd noise swells.

(2) DRESSING: she sits up, drags the crumpled jeans across the stage floor toward her, and works them up her bare legs — a full hip shimmy, a hop up onto her toes, both hands hauling the waistband and buttoning it. Then she throws both arms straight out wide, chin up and one hip cocked, holding a big "ta-da" silhouette for a beat. The camera keeps drifting and shaking but does not push in; her head has risen only to the middle of the screen, with empty LED stage still above her.

(3) THE TURN: she pivots her back to the street, plants both hands on the stage floor, arches her back and rocks her hips twice, her long auburn hair swinging heavily forward over one shoulder. She whips her head around to look back over her shoulder at the crowd — the head turn itself is the beat — and smacks one hand down on her own hip. Below, phones go up along the crosswalk.

(4) THE OFFER: she straightens, reaches down out of the bottom of the screen and comes back up holding the glossy black skincare jar — she raises it OVER HER HEAD in both hands like a trophy, a big unmistakable silhouette, then lowers it and leans far out over the screen's lower edge, one arm extended in forced perspective so the jar appears to break out of the billboard. Head tilting on the first word and a shrug rolling through both shoulders on the last, she calls down at the lens, lips in accurate sync: "The harder you go on me... the softer I get."

(5) THE HANDOFF: a real human hand rises into the bottom foreground of the camera frame, reaches up toward the billboard and TAKES the jar — the physical jar now solid in the foreground hand, while up on the screen Elena's hand closes on nothing. She snaps her empty fingers shut, throws both arms up in mock outrage and stamps one bare foot on the stage — then claps a hand over her mouth and doubles forward, shoulders shaking with laughter.

(6) HOLD: still the same wide handheld frame — the foreground hand lowers the jar a little, its gold lettering catching a highlight, and up on the enormous billboard Elena straightens, blows a big two-handed kiss down at the street, and stands there laughing as taxis and the crowd keep moving below. Hold. End.

REPEAT: NO background music at any point — diegetic sound only. Camera and billboard stay wide and uncut.`,
    },
  },
  {
    id: "ride-or-paws",
    title: "金门大桥摩托猫",
    subtitle: "Ride or paws",
    description:
      "先看上面这段成品:一只面无表情的姜色小猫坐在摩托尾座上,在金门大桥上一路扫射追兵。下面按「先出参考图 → 再喂给视频模型」的顺序,把每一步提示词都摊开。不会剪辑也能照着做——整段约 28 秒、一镜到底。",
    video: "/tutorials/ride-or-paws/demo-web.mp4",
    poster: "/tutorials/ride-or-paws/poster.jpg",
    duration: "28 秒",
    shots: 7,
    references: 3,
    model: "Seedance 2.5 · 连续一镜",
    style: "真人摄影 · 动作追逐",
    tags: [
      "28 秒 · 7 节拍 · 一镜到底",
      "3 张参考图",
      "Seedance 2.5",
      "真人摄影 · 动作追逐",
    ],
    steps: [
      {
        number: 1,
        title: "生成 3 张参考图",
        description:
          "哑光黑运动摩托、姜色小猫 Tango(Baby Ginger)、金门大桥空镜。顺序固定,后面当 @Image1–3。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:480p 或更高 · 约 28 秒 · 打开声音。把 3 张图按顺序挂上(摩托 → 猫 → 金门大桥)。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "一次生成整段追逐。必须一镜到底、无剪辑;猫始终面无、坐在尾座面向镜头。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "REF 01",
        title: "Sport Bike · 哑光黑运动摩托",
        subtitle: "载具设定板 · @Image1 · GPT Image · 3:2",
        image: "/tutorials/ride-or-paws/refs/REF01_SPORT_BIKE.jpg",
        prompt: `Create a clean, professional **vehicle character reference / turnaround sheet** for a modern high-performance **matte-black sport motorcycle**, presented like an industrial design bible, automotive concept sheet, and premium product photography board.

**Vehicle:** aggressive modern middleweight supersport motorcycle with sleek aerodynamic full fairings, sharply sculpted front nose, narrow LED headlights, tinted smoked windscreen, angular mirrors, muscular fuel tank, stepped black sport seat, exposed aluminum rearsets, compact upswept tail section, single side exhaust, chain drive, black alloy wheels, large ventilated disc brakes, inverted front forks, wide performance tires and realistic mechanical components.

Primary finish is **deep matte black**, with subtle gunmetal mechanical parts and brushed-metal accents. No logos or branding.

Maintain **exactly the same motorcycle design, geometry, body panels, wheel design, headlights, exhaust placement, engine, frame, mirrors, windscreen and proportions in every view.**

### OVERALL LAYOUT

Wide horizontal **3:2 vehicle reference sheet**, warm ivory / off-white seamless background, minimal editorial layout, thin light-gray dividing lines, clean technical typography in dark charcoal, generous negative space.

The design should feel like a professional **automotive concept-development sheet / production design reference board / VFX continuity sheet**.

Top-left title:

**SPORT BIKE**

Below:

**CHARACTER REFERENCE SHEET**

### MAIN TURNAROUND VIEWS

Present five large photorealistic views of the **exact same motorcycle**.

**LEFT SIDE VIEW**  
Large exact 90-degree left profile. Entire motorcycle visible from front tire to rear tire. Wheels perfectly parallel to camera. Show aerodynamic fairing, fuel tank, engine casing, swingarm, chain system, foot controls and tail section. Motorcycle standing naturally upright with no rider.

**FRONT VIEW**  
Perfectly centered straight-on view. Front tire aligned vertically with the center axis. Aggressive narrow dual LED headlights, smoked windscreen, symmetrical mirrors, front forks, brake hardware and sculpted front fairing clearly visible.

**RIGHT SIDE VIEW**  
Exact 90-degree opposite profile facing right. Show the same motorcycle with identical body proportions. Single exhaust is clearly visible on this side, along with rear brake, engine components, rearset and fairing structure.

**3/4 REAR VIEW**  
Three-quarter rear-left perspective from slightly above wheel height. Show rear tire width, chain and sprocket, tail bodywork, rear LED light, seat, license-plate bracket, mirrors and tank silhouette.

**REAR VIEW**  
Perfectly centered direct rear view. Wide rear tire centered in frame, symmetrical mirrors, narrow tail section, glowing red rear LED light, exhaust visible on the right side, chain hardware and compact plate mount.

All turnaround images should use **identical scale relationships, focal length, studio lighting, proportions and surface materials**.

### SPECIFICATIONS PANEL

Create a clean technical information panel titled:

**SPECIFICATIONS**

Use a simple two-column table:

**TYPE:** Sport Bike  
**ENGINE:** 4-Stroke, Inline 4  
**DISPLACEMENT:** 600 cc  
**POWER:** ~115 HP  
**DRIVE:** Chain  
**WEIGHT:** ~190 kg  
**FUEL CAPACITY:** 17 L  
**SEAT HEIGHT:** 830 mm

Typography should be small, clean, technical and highly legible.

### COLOR PALETTE

Adjacent panel titled:

**COLOR PALETTE**

Display three large rectangular material swatches vertically:

**MATTE BLACK**  
#1A1A1A

**GUNMETAL**  
#4D4D4D

**BRUSHED METAL**  
#B3B3B3

Show subtle differences in material finish rather than flat color alone: matte body paint, dark metallic mechanical finish, and lightly reflective brushed aluminum.

### LOWER DETAILS SECTION

Bottom section titled:

**DETAILS**

Display six equally sized rectangular close-up panels showing the same motorcycle.

**FRONT FAIRING & HEADLIGHTS**  
Three-quarter close-up of the front nose, narrow LED headlights, tinted windscreen, mirrors, handlebars and angular matte-black fairings.

**FUEL TANK & SEAT**  
Close-up of the muscular sculpted matte-black fuel tank transitioning into the black rider seat and raised passenger seat.

**ENGINE & FRAME**  
Detailed close-up of the black inline-four engine casing, frame structure, bolts, footpeg, rearset, exhaust headers and surrounding mechanical components.

**REAR SWINGARM & CHAIN**  
Close-up of rear wheel assembly, chain, rear sprocket, swingarm, axle hardware and tire texture.

**EXHAUST & TAIL LIGHT**  
Close-up from the rear quarter showing the cylindrical black-and-metal exhaust outlet, compact tail section, glowing red LED tail light and license-plate bracket.

**FRONT BRAKE & WHEEL**  
Detailed close-up of the black alloy front wheel, sport tire, large drilled brake rotors, brake caliper, axle and inverted fork.

### VISUAL STYLE

Ultra-photorealistic **high-end motorcycle product photography**, realistic industrial design presentation, physically accurate materials and engineering.

Matte-black painted fairings with soft controlled reflections, realistic black plastic, powder-coated metal, brushed aluminum hardware, rubber tires, steel brake discs, chain grease, bolts, cables and mechanical detail.

Soft diffused studio illumination from large overhead softboxes, subtle contact shadows beneath tires, no harsh highlights, no dramatic rim lighting, no cinematic color grading.

Neutral warm-white seamless background.

Camera should use a **long product-photography focal length with minimal perspective distortion**, allowing the side and front orthographic-like reference views to remain accurate.

Extremely sharp bodywork and mechanical detail, realistic tire tread, brake perforations, chain links, engine components, fasteners and surface transitions.

### CRITICAL CONSISTENCY

Every image must show the **exact same individual motorcycle**.

Keep identical:
- front fairing geometry
- headlight shape
- tinted windscreen
- mirror design
- fuel tank shape
- fairing vents
- engine configuration
- frame
- wheel spoke pattern
- brake discs
- fork design
- swingarm
- chain and sprocket
- exhaust shape and location
- seat
- rear light
- plate holder
- tire size
- proportions
- matte-black finish

**Avoid:** different motorcycle models between views, changing exhaust location, inconsistent wheel designs, duplicated brake discs, warped wheels, incorrect mechanical geometry, floating parts, bent forks, missing chain, asymmetric headlights, inaccurate reflections, glossy black body paint, racing decals, logos, manufacturer branding, rider, helmet, kickstand dominating the composition, outdoor environments, dramatic shadows, motion blur, extreme perspective, fisheye distortion, cartoon rendering, concept-sketch appearance, cluttered layout or illegible text.`,
      },
      {
        id: "ref2",
        number: "REF 02",
        title: "Baby Ginger · 姜色小猫 Tango",
        subtitle: "角色设定板 · @Image2 · GPT Image · 3:2",
        image: "/tutorials/ride-or-paws/refs/REF02_BABY_GINGER.jpg",
        prompt: `Create a clean professional **character reference / turnaround sheet** for an adorable baby orange tabby kitten named **"BABY GINGER"**, presented like a premium animation character design board.

**Character:** extremely cute British Shorthair kitten, red/orange tabby coat, very round chubby body, short legs, tiny paws, fluffy dense realistic fur, oversized round head, small triangular ears, subtle darker orange forehead stripes, cream-colored muzzle/chest/belly, huge glossy blue-gray eyes, tiny pink nose. The kitten is standing upright on its hind legs with its front paws held softly in front of its chest. It wears a **baby-blue pacifier** with a translucent silicone ring and a tiny beige paw-print illustration in the center. Sweet, innocent, playful baby expression.

**Overall layout:** large horizontal **3:2 character reference sheet**, warm ivory/off-white background, subtle beige border, sophisticated editorial layout, clean spacing, rounded rectangular information panels, thin light-tan outlines, dark warm-brown typography. High-end animation studio / character bible aesthetic.

Top left:
large bold hand-drawn rounded title **"BABY GINGER"** with a small paw-print icon beside it. Underneath, smaller text: **"CHARACTER REFERENCE SHEET"** with thin decorative horizontal lines.

Left information panel:
- **NAME:** Baby Ginger
- **SPECIES:** Cat
- **BREED:** British Shorthair (Red Tabby)
- **GENDER:** Unknown
- **AGE:** Kitten
- **PERSONALITY:** Curious, Sweet, Playful
- **ACCESSORY:** Blue Pacifier

Across the upper center and right, show **four full-body turnaround views of exactly the same kitten**, perfectly consistent character design and proportions:
1. **FRONT VIEW** — looking directly toward camera, standing upright, paws together, blue pacifier visible.
2. **SIDE VIEW** — exact 90-degree profile facing left, upright pose, tail visible behind.
3. **BACK VIEW** — exact rear view showing fluffy orange fur, striped back and tail.
4. **3/4 VIEW** — three-quarter frontal angle, cute symmetrical pose, pacifier visible.

Lower-left panel titled **"DETAILS"**, containing four close-up reference images arranged in a 2×2 grid:
- close-up frontal face with blue pacifier
- close-up of front paws/chest fur
- side-profile head showing ear, eye, whiskers and pacifier
- close-up rear body/tail and tabby fur pattern

Lower-middle panel titled **"COLOR PALETTE"**, showing six clean circular swatches:
deep burnt orange, warm golden tan, pale cream, dusty peach pink, dark charcoal gray, soft baby blue.

Below it, separate panel titled **"ACCESSORY"**, displaying a large isolated product-style view of the **baby-blue pacifier**, centered on white, translucent ring, pale center button with a small paw-print symbol.

Lower-right wide panel titled **"EXPRESSIONS"**, showing three consistent head-and-shoulders portraits of Baby Ginger:
- **CURIOUS:** wide attentive eyes
- **HAPPY:** eyes gently closed, visibly cheerful expression
- **SURPRISED:** very wide round eyes

Maintain **perfect identity consistency** across every image: identical face, eye color, fur markings, body proportions, ears, paws, pacifier shape and blue color.

Visual style: **photorealistic but irresistibly cute**, premium commercial pet photography blended with polished 3D character-reference presentation, highly detailed individual fur strands, soft fluffy texture, realistic whiskers, subtle subsurface softness in ears and nose, gentle studio lighting, soft natural shadows beneath feet, warm neutral tones, extremely clean background, centered compositions, sharp subject details, no dramatic lighting, no cinematic environment.

Typography and graphic design should feel professionally art-directed, minimal, charming and readable, with strong visual hierarchy and lots of negative space.

**Avoid:** inconsistent kitten designs, different fur patterns between views, distorted paws, extra limbs, duplicated tails, mismatched pacifiers, overly cartoonish anatomy, cluttered background, harsh shadows, saturated colors, dramatic perspective, random props, malformed text, cropped bodies.`,
      },
      {
        id: "ref3",
        number: "REF 03",
        title: "金门大桥空镜",
        subtitle: "场景空镜板 · @Image3 · 设定匹配",
        image: "/tutorials/ride-or-paws/refs/REF03_GOLDEN_GATE.jpg",
        prompt: `Empty scene plate, no people, no vehicles: a wide low chase-camera view down the roadway deck of a very large red-orange steel suspension bridge matching the real famous San Francisco Golden Gate Bridge — the tall red towers and sweeping main cables overhead, thin vertical suspender ropes, painted lane lines rushing along the asphalt, brown-green headland hills and blue bay beyond, bright sunny sky. Warm cinematic daylight, realistic colours, mild motion blur on the road, photoreal, no text.`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "接近 · ~3s:摩托冲过桥面,风吹平猫毛;黑衣追兵从右后追上并排挤靠",
      },
      {
        number: 2,
        description:
          "第一枪 · ~3s:Tango 冷静举步枪瞄准追兵开火,枪口火光,表情始终面无",
      },
      {
        number: 3,
        description:
          "炸飞 · ~3s:追兵摩托爆炸翻滚坠下;Tango 收枪扫视,又有追兵逼近",
      },
      {
        number: 4,
        description:
          "机枪扫射 · ~5s:拽起重机枪、弹链晃动,对整队追兵持续扫射,弹壳飞溅",
      },
      {
        number: 5,
        description:
          "混战 · ~5s:追兵接连起火、侧滑翻车,烟雾碎片淹没身后路面;猫冷静甩枪追踪",
      },
      {
        number: 6,
        description:
          "胜利巡航 · ~4s:身后清空冒烟,驶向桥远端红塔与褐色山岬;收枪坐起,喘息一拍",
      },
      {
        number: 7,
        description:
          "冲出火球 · ~5s:身后巨爆吞没画面,英雄摩托破烟冲出;Tango 面无表情回看镜头。定格一拍,结束",
      },
    ],
    constraints:
      "一镜到底连续追逐;猫坐尾座始终面向镜头;猫表情始终面无(deadpan);不要平滑稳定器;真实物理重量感。",
    video_prompt: {
      title: "Ride or paws · Golden Gate · ~28s · 1 Shot / 7 Beats",
      subtitle: "Seedance 2.5 · continuous POV · sound on",
      content: `[GLOBAL] A continuous action-movie chase in ONE generation, about 28 seconds, ONE unbroken POV shot with no cuts. Photoreal, warm cinematic daylight, realistic colours, high energy — a shaky CHASE/TAIL CAMERA locked just behind a speeding motorcycle, framing the cat perched on the bike's tail, heavy motion blur and speed, the frame rocking and juddering with the ride, never smooth-stabilized. SETTING: racing across the roadway deck of the real famous San Francisco Golden Gate Bridge (match @Image3 ) — red towers and cables overhead, lane lines ripping past, blue bay and brown hills beyond, bright sun. THE HERO BIKE (match @Image1 : a matte-black sports motorcycle driven by an anonymous rider in full black leathers and a black full-face helmet; TANGO the ginger cat (match @Image2 ) sits on the flat tail seat FACING BACKWARD toward the camera and toward the pursuers, calm and deadpan the entire time. THE PURSUERS: anonymous riders in black leathers and black helmets on black sportbikes, chasing from behind. TANGO'S LIFE: never still — fur streaming in the wind, ears flicking, head turning to track threats, tail lashing, blinking; his face stays flatly serious no matter the chaos (that deadpan IS the comedy — never cartoonish, never mugging). PHYSICS: real weight to the bikes, real recoil, real fire and debris. Diegetic sound + score: an epic driving action score under the whole thing, roaring engines, wind, gunfire, metal impacts and explosions; no dialogue. No on-screen text. No cuts.

Shot 1: ONE continuous POV shot, about 28 seconds, chase camera just behind the black hero bike — Tango the ginger cat perched on the tail seat facing back at us, the black rider ahead of him, the red bridge and road tearing past. (1) THE APPROACH, ~3s: the bike rockets across the bridge; wind flattening Tango's fur; a black-clad pursuer on a black sportbike surges up from the right rear and pulls alongside, leaning in aggressively. (2) FIRST KILL, ~3s: Tango calmly raises a rifle to his shoulder, sights down it at the pursuer, and FIRES — a hard muzzle flash — the deadpan face never changing. (3) BLOWN AWAY, ~3s: the pursuer's bike ERUPTS in a ball of fire and tumbles end over end off the road behind; Tango lowers the rifle, sits back, tail flicking, head turning to scan — and another pursuer is already closing in. (4) THE MACHINE GUN, ~5s: Tango hauls up a heavy belt-fed machine gun, a brass ammo belt swinging, braces it against his little body and UNLOADS on a whole pack of pursuing bikers — sustained muzzle flashes strobing, spent casings flying, the deadpan face lit by the flashes. (5) MAYHEM, ~5s: pursuing bikes are hit one after another — bursting into flame, high-siding, cartwheeling, smoke and debris flooding the road behind; Tango swings the barrel to track them, relentless and calm. (6) VICTORY CRUISE, ~4s: the road behind falls empty and smoking as the bike reaches the far end of the bridge (the far red tower and brown headlands ahead); Tango lowers the weapon, sits up on the tail, fur ruffling, tail swaying, scanning the clear road — a beat of calm. (7) OUT OF THE FIREBALL, ~5s: behind them a HUGE fireball erupts across the bridge, flame and smoke swallowing the frame — the hero bike punches straight out through the fire and smoke, embers streaking past, wreckage burning on the bridge behind; Tango turns his head and looks flatly back into the lens as they ride away. Hold one beat. End.`,
    },
  },
  {
    id: "painted-tunnel",
    title: "猫鼠画隧道",
    subtitle: "Tom and Jerry Live Action · Painted Tunnel",
    description:
      "先看上面这段成品。下面按「先出参考图 → 再喂给视频模型」的顺序,把每一步提示词都摊开。不会剪辑也能照着做。",
    video: "/demo-web.mp4",
    poster: "/GEN_preview.jpg",
    duration: "30 秒",
    shots: 13,
    references: 5,
    model: "Seedance 2.5 · 16:9",
    style: "真人摄影质感",
    tags: ["30 秒 · 13 镜头", "5 张参考图", "Seedance 2.5 · 16:9", "真人摄影质感"],
    steps: [
      {
        number: 1,
        title: "生成 5 张参考图",
        description:
          "猫 Milo、老鼠 Finn、画隧道、碎石路、画笔道具。顺序固定,后面当 @Image 1–5。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:480p 或更高 · 16:9 · 30 秒 · 打开声音。把 5 张图按顺序挂上。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "一次生成 13 镜。注意 Shot 8 必须一镜到底,老鼠冲进「画」里的隧道。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "REF 01",
        title: "Milo · 猫",
        subtitle: "角色设定板 · GPT Image · 4:3 · 2K",
        image: "/REF01_MILO.jpg",
        prompt: `Character-design reference sheet layout on a clean light cream background, neatly organized like an official character model sheet, all views showing the SAME animal, fully consistent. Layout: top-left a title block reading "MILO" with a short info list (NAME: Milo / AGE: adult / ROLE: the schemer / PERSONALITY: sly, obsessive, never gives up); below it a COLOR PALETTE section with labeled swatch rows for FUR, EYES, NOSE, PAWS; center: a large FRONT VIEW head portrait and a SIDE VIEW head portrait, labeled; right: a full-body SIDE VIEW standing on all fours, and a full-body FRONT VIEW standing upright on its hind legs with its forepaws hanging loose, labeled; add a BACK VIEW on all fours and two ACTION poses: upright gripping a brush with both forepaws; low running crouch. Add a small PROP panel with his red-handled brush. Add an EXPRESSION strip of six captioned face close-ups: "eyes narrowed, ears pricked forward" / "head tilted, whiskers forward" / "eyes round, mouth open" / "eyes narrowed, jaw set" / "ears flat, mouth open mid-sprint" / "ears drooping, eyes unfocused"; bottom: a DETAILS strip of four captioned close-up panels (the green eyes, the pink nose and white whiskers, a forepaw gripping a brush handle like a hand, the long tabby tail). The animal: a real adult domestic cat — a lean brown mackerel tabby with dark stripes, a white chin and chest, green eyes, a pink nose, long white whiskers, a long striped tail; a real animal, not a cartoon. Every panel is a REAL candid photograph of the same animal — soft flat natural daylight, slightly low contrast and low saturation, gentle even light with no hard shadows, natural fur, background = a real scene from the story (the gravel road and granite cliff), unedited photos straight off the camera, no color grading, no retouching. Clean minimal English labels only.`,
      },
      {
        id: "ref2",
        number: "REF 02",
        title: "Finn · 老鼠",
        subtitle: "角色设定板 · GPT Image · 4:3 · 2K",
        image: "/REF02_FINN.jpg",
        prompt: `Character-design reference sheet layout on a clean light cream background, neatly organized like an official character model sheet, all views showing the SAME animal, fully consistent. Layout: top-left a title block reading "FINN" with a short info list (NAME: Finn / AGE: adult / ROLE: the one that gets away / PERSONALITY: fast, unbothered, bold); below it a COLOR PALETTE section with labeled swatch rows for FUR, EARS, EYES, TAIL; center: a large FRONT VIEW head portrait and a SIDE VIEW head portrait, labeled; right: a full-body SIDE VIEW standing, and a full-body SIDE VIEW mid-sprint with the body stretched flat and the tail streaming behind, labeled; add full-body FRONT and BACK standing views and an ACTION rear-view running pose. Add an EXPRESSION strip of four captioned close-ups: "ears upright, whiskers forward" / "ears swept back, eyes fixed ahead" / "mouth open in a tiny squeak" / "nose forward, eyes steady, mouth closed"; bottom: a DETAILS strip of four captioned close-up panels (the round pink-lined ears, the black bead eyes and whiskers, a tiny pink forepaw, the long bare tail). The animal: a real small brown house mouse — soft brown-grey fur, a pale belly, round ears, black eyes, a pointed pink nose, a long thin bare tail; a real animal, not a cartoon. Every panel is a REAL candid photograph of the same animal — soft flat natural daylight, slightly low contrast and low saturation, gentle even light with no hard shadows, natural fur, background = a real scene from the story (the gravel road and granite cliff), unedited photos straight off the camera, no color grading, no retouching. Clean minimal English labels only.`,
      },
      {
        id: "ref3",
        number: "REF 03",
        title: "画隧道场景",
        subtitle: "空镜场景板 · GPT Image · 4:3 · 2K",
        image: "/REF03_Painted_Tunnel.jpg",
        prompt: `Empty scene plate, no animals, no people: a flat vertical weathered grey-brown granite cliff face filling the frame from edge to edge, cracked, water-stained, patched with pale lichen, seen straight on from ground level; painted directly onto the rock in matte exterior house paint is a trompe-l'oeil tunnel about half a metre tall, cat-height — a concrete-grey arched portal frame, inside it a near-black tunnel interior, a dark asphalt road painted in perspective with a faded yellow centre line narrowing to a tiny warm-white patch of light at the vanishing point; visible brush texture, a few drips, the paint slightly patchy over the rough rock; the yellow centre line continues out of the painting onto the real packed pale-brown dirt as a freshly painted yellow stripe; scattered broken rock at the base of the cliff. Real photograph, late-afternoon sun low and warm from the left, long shadows, fine dust in the air, clean and sharp, no text, no logos. 4:3 reference framing; preserve the composition for the film's 16:9 framing.`,
      },
      {
        id: "ref4",
        number: "REF 04",
        title: "碎石路与巨石",
        subtitle: "空镜场景板 · GPT Image · 4:3 · 2K",
        image: "/REF04_Road_Boulder.jpg",
        prompt: `Empty scene plate, no animals, no people: a packed pale-brown gravel road with tyre ruts running from the lower left of the frame away toward a line of grey-brown rocky ridges on the horizon, dry scrub and tufts of grass on both sides, a rounded weathered grey granite boulder standing in the right foreground beside the road, about knee-high to a man — big enough to hide a cat, late-afternoon sun low and warm, long shadows, fine dust in the air, a pale sky with thin high cloud. Real photograph, clean and sharp, no text, no logos. 4:3 reference framing; preserve the composition for the film's 16:9 framing.`,
      },
      {
        id: "ref5",
        number: "REF 05",
        title: "画笔与油漆",
        subtitle: "道具参考板 · GPT Image · 4:3 · 2K",
        image: "/REF05_Brushes_Paint.jpg",
        prompt: `Product-style reference sheet of three objects on a clean light cream background, labeled, no brand names: a wide flat paintbrush about fifteen centimetres across with a glossy red handle and thick cream-white bristles, shown from the front, from three-quarters, and in a close-up of the bristles loaded with yellow road paint; a long-handled paintbrush with a plain wooden pole about a metre long, a red ferrule and a wide flat brush head, shown full length and in a close-up of the head loaded with near-black paint; an open metal can of near-black paint and a smaller can of concrete-grey paint, drips down their sides. Real photographs, bright even daylight, clean and sharp, no text except the labels, no logos.`,
      },
    ],
    storyboard: [
      { number: 1, description: "低机位后撤:Milo 直立推红柄刷,朝镜头刷黄线" },
      { number: 2, description: "广角侧面:Milo 用长杆刷在崖壁道路上扫笔" },
      { number: 3, description: "特写:灰漆勾出拱门轮廓" },
      { number: 4, description: "中景:填黑隧道内部,欣赏成品" },
      { number: 5, description: "广角:从巨石后探头看路" },
      { number: 6, description: "低机位快退:Finn 冲向镜头" },
      { number: 7, description: "侧跟:Finn 左→右全速跑" },
      { number: 8, description: "一镜到底:Finn 冲进画中隧道(不切!)" },
      { number: 9, description: "特写:Milo 反应→眼神变狠→冲出" },
      { number: 10, description: "广角:Milo 热身,蹲伏准备" },
      { number: 11, description: "侧跟:Milo 全速奔跑" },
      { number: 12, description: "广角:扑向隧道,脸撞墙贴扁" },
      { number: 13, description: "同构图:滑下瘫倒,晕眩结束" },
    ],
    constraints:
      "画的隧道始终在画面右侧;角色始终从左向右冲;不要加 BGM;Shot 8 禁止中途切镜。",
    video_prompt: {
      title: "Painted Tunnel · 30s · 13 Shots",
      subtitle: "Seedance 2.5 · 16:9 · sound on",
      content: `[GEN 1 — THE PAINTED TUNNEL · CAT & MOUSE · 13 SHOTS]
[GLOBAL] One 30-second film of 13 distinct shots, 12 hard cuts between shots; Shot 8 is uninterrupted, horizontal 16:9. Photoreal, live-action look — late-afternoon sun low and warm, long shadows, fine dust hanging in the air, a pale sky with thin high cloud, weathered grey-brown granite, clean sharp cinematic camera, smooth tracking moves; the impossible things happen in a completely real world, played dead straight. CHARACTERS: MILO (match @Image 1 exactly) — a real lean brown tabby cat, dark stripes, white chin and chest, green eyes, long striped tail; it moves like a real cat, except that whenever it paints it stands and walks UPRIGHT on its hind legs and grips the brush handle with BOTH forepaws like human hands, toes wrapped around the handle. FINN (match @Image 2 exactly) — a real small brown house mouse, round ears, black bead eyes, long bare tail; it only runs, very fast, close to the ground. SCALE: everything is built to Milo's size — the painted tunnel is about half a metre tall, the boulder is knee-high to a man, the brushes are cat-sized. THE PAINTED TUNNEL (match @Image 3 exactly): a flat weathered grey-brown granite cliff face, cracked, water-stained and patched with lichen, with a cat-height trompe-l'oeil tunnel painted on it in matte exterior house paint — a concrete-grey arched portal frame, inside it a near-black tunnel interior, a dark asphalt road in perspective with a faded yellow centre line narrowing to a tiny warm-white patch of light at the vanishing point, brush texture and drips visible, the paint slightly patchy on the rough rock; the yellow line continues out of the painting as a fresh yellow stripe on the real packed dirt; the painting is flat paint on solid rock and looks identical in every shot it appears in. THE ROAD (match @Image 4 exactly): a packed pale-brown gravel road with tyre ruts, dry scrub and tufts of grass, grey-brown ridges on the horizon, a knee-high grey granite boulder beside the road. PROPS (match @Image 5): a wide red-handled paintbrush with cream bristles, and a long-handled brush on a plain wooden pole, both cat-sized; no brand names anywhere. SCREEN DIRECTION: the painted wall is always on the RIGHT side of the frame; Finn and Milo always run from LEFT to RIGHT toward it; the boulder Milo hides behind stands in the right foreground beside the road. No on-screen text, no logos, no signage. NO background music — natural sound only, cued on the action: brush bristles dragging on dirt and rock, Milo's breathing, dry wind, the tiny fast patter of mouse feet and a high squeak, a whoosh as it enters the painting, Milo's fast breathing and paws hammering dirt, one hard flat thud of a body hitting rock, the slow scrape of fur sliding down stone, a soft thump on the dirt, then wind. REPEAT: no music.

Shot 1 — Low angle from ground level, camera in front of Milo slowly retreating: a wide red-handled paintbrush fills the lower half of the frame, pushed straight toward the lens, laying a fresh wet yellow stripe on the packed dirt; behind it Milo walks upright on its hind legs like a person, leaning forward, both forepaws wrapped around the handle like two hands, pushing the brush ahead of it toward the camera, the grey granite cliff behind him.

Shot 2 — Wide side view, static: the cliff on the right already has the dark asphalt road painted on it in perspective with the yellow centre stripe up the middle and a tiny warm-white dot at the top, the rock around the road still bare grey-brown granite; Milo stands upright on its hind legs at frame left like a person, both forepaws gripping the long wooden pole like hands, and sweeps the brush head over the painted road surface in long strokes.

Shot 3 — Close-up on the wall: the brush head, loaded with concrete-grey paint, drags a single thick grey line up the bare granite from the bottom left, starting the outline of an arched portal frame, the red pole crossing the frame with Milo's two forepaws gripping it like hands at the left edge.

Shot 4 — Medium static, framed square on the wall: the long brush finishes the arch outline in one sweep over the top and down the other side, then fills the inside of the arch with big fast near-black strokes until the tunnel mouth is solid dark around the asphalt road and the tiny warm-white dot; Milo steps into the frame from the left standing on his hind legs, the pole in his forepaws, adds the last strokes, plants the pole and steps back, tilting his head to admire the finished tunnel.

Shot 5 — Wide, static: the knee-high grey granite boulder in the right foreground, the gravel road on the left running away to the ridges; Milo's head slides out from behind the left edge of the boulder, ears up, a sly narrow-eyed look down the road, then whips back out of sight.

Shot 6 — Low angle, ground level, camera retreating fast: Finn sprinting straight toward the lens down the dirt road, legs a blur, tail streaming, a tiny dust trail behind it, its long shadow racing on the ground, the ridges behind.

Shot 7 — Low side tracking, moving with it: Finn in full profile at top speed running left to right, body stretched flat, ears back, tail straight out behind, grit flying.

Shot 8 — ONE continuous low tracking shot from directly behind Finn, camera positioned above the ground following at its speed, no cut: Finn sprints along the yellow stripe toward the wall, the painted portal ahead growing larger; it crosses the line where the paint begins without slowing or changing stride, the portal frame passes on both sides of the camera like the edges of a real opening, the daylight drops away and the camera is inside a real tunnel with Finn still running ahead of it — black rock walls, a dark asphalt road with a faded yellow line, and a small warm arch of daylight far ahead that Finn runs toward.

Shot 9 — Close-up, static: Milo's face peeking out from behind the left edge of the boulder, eyes wide and round, mouth open, ears straight up; he blinks twice, looks at the road, looks at the painting, and slowly his eyes narrow to a hard determined squint; then he bolts out of the frame to the right as a blur.

Shot 10 — Wide, static, eye level: the gravel road crossing the frame, dry scrub, grey-brown ridges beyond; Milo strides onto the road standing upright on his hind legs, shakes out both forepaws, bounces on his toes, rolls his neck, two quick warm-up hops, then drops onto all fours facing right and crouches low, muscles bunched.

Shot 11 — Side tracking at his speed: Milo in full sprint from left to right, ears flat, mouth open, the background a streak, the grey boulder blurring past behind him.

Shot 12 — Wide side view, static, the painted wall filling the right of the frame: Milo launches himself at the painted tunnel mouth and slams face-first into it with one hard flat thud, his whole body flattened against the dark paint, forelegs spread wide, hind legs splayed, tail sticking out — held there for a beat.

Shot 13 — Same framing: he peels off the rock and slides slowly down the painting, fur dragging on stone, and drops in a heap on his side on the packed dirt at the foot of the tunnel, ears flopped, eyes crossed, a few tiny faint yellow stars drifting in a slow circle above his head. End.`,
    },
  },
];

export function getTutorialById(id: string): Tutorial | undefined {
  return tutorials.find((t) => t.id === id);
}
