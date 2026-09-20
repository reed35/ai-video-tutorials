import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
  {
    id: "fridge-freshness-perfected",
    title: "冰箱广告：新鲜尽在掌握",
    subtitle: "X · HeyRu0by · 10秒 · 9:16",
    description:
      "竖屏家电广告：参考图锁定冰箱造型，揭示→开门冷雾→食材宏观→冷气环流→关门英雄镜头。成片 9:16 竖屏，不进胶片条，只出现在列表与详情。",
    video: "/tutorials/fridge-freshness-perfected/demo-web.mp4",
    poster: "/tutorials/fridge-freshness-perfected/poster.jpg",
    duration: "10秒",
    shots: 5,
    references: 1,
    model: "推测家电广告模型",
    style: "奢华产品广告 · 竖屏",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/HeyRu0by/status/2101186330025922663",
    tags: [
      "10秒 · 5 节拍",
      "9:16 竖屏 · 不进胶片条",
      "1 张产品参考图",
      "奢华家电广告风格",
    ],
    steps: [
      {
        number: 1,
        title: "读懂产品广告节奏",
        description:
          "揭示（暗转亮推镜）→开门冷雾（慢镜雾气）→新鲜宏观（食材凝露）→冷气环流（可视化气流）→英雄收束（缓推高光）。核心是产品外形一致性（exact from REF01）+ 克制真实冷雾（勿粒子爆炸）+ 无人手。",
      },
      {
        number: 2,
        title: "准备参考图与设置",
        description:
          "上传 REF01 产品参考图锁定冰箱造型（形状、门把、颜色、标志、控制面板）。9:16 竖屏 · 10s · 打开声音（奢华环境音）。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "保持 exact refrigerator design from reference；反光高级；雾气克制；食材细节真实；可带文案 FRESHNESS. PERFECTED.；负面提示：无人手/无产品变形/无重复冰箱/无卡通感。",
      },
    ],
    references_detail: [
      {
        id: "REF01",
        number: "REF01",
        title: "冰箱产品参考",
        subtitle: "锁定造型 · 提示词要求 Exact design",
        image: "/tutorials/fridge-freshness-perfected/refs/REF01.jpg",
        prompt: "（无单独出图词；此参考图仅用于锁定产品造型，提示词中已要求 Use the exact refrigerator design from the uploaded reference image）",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:02 产品揭示：奢华厨房中冰箱由暗转亮，推镜贴近。教练提示：先锁产品外形一致；反光要高级。",
      },
      {
        number: 2,
        description:
          "00:02–00:04 开门冷雾：双门慢镜打开，冷雾涌出。教练提示：雾气克制真实，别粒子爆炸。",
      },
      {
        number: 3,
        description:
          "00:04–00:06 新鲜宏观：果蔬乳品饮料宏观，凝露与冷雾。教练提示：食欲细节；产品比例不变形。",
      },
      {
        number: 4,
        description:
          "00:06–00:08 冷气环流：冷气在食材间均匀流动的可视化。教练提示：用细微气流粒子，勿喧宾夺主。",
      },
      {
        number: 5,
        description:
          "00:08–00:10 英雄收束：门缓缓关合，缓推英雄镜头与高光。教练提示：可带文案 FRESHNESS. PERFECTED.；无人手。",
      },
    ],
    constraints:
      "exact fridge from REF01（形状/门把/颜色/标志一致）；克制真实冷雾（勿粒子爆炸）；无人手/无产品变形/无重复冰箱；9:16 竖屏不进胶片条；来源 HeyRu0by。",
    video_prompt: {
      title: "Fridge Commercial · FRESHNESS. PERFECTED. · 10s · 9:16",
      subtitle: "推测家电广告模型 · 9:16 竖屏 · 产品参考图",
      content: `Create a premium 10-second vertical 9:16 refrigerator commercial, photorealistic 8K, ultra-realistic product cinematography, luxury home-appliance advertising style. Use the exact refrigerator design from the uploaded reference image. Preserve the exact shape, proportions, doors, handles, color, finish, logo, control panel, and all visible details. No redesign, no extra logos, no distorted text, no duplicate refrigerator.

CONCEPT: REVEAL → OPEN → COLD AIR → FRESH FOOD → HERO

01 | 0–2s — PRODUCT REVEAL
A sleek modern refrigerator stands in a luxurious contemporary kitchen. Dramatic dark-to-bright lighting slowly reveals the refrigerator, with elegant reflections across its premium surface. Camera makes a smooth cinematic push-in toward the product.

02 | 2–4s — DOOR OPEN
The refrigerator doors open smoothly in slow motion. A soft burst of cool mist escapes from inside, creating a fresh and refreshing visual effect. Camera moves closer toward the interior.

03 | 4–6s — FRESHNESS MACRO
Extreme macro shots of perfectly chilled fresh fruits, vegetables, milk bottles, and beverages arranged beautifully inside. Subtle cold mist, crisp textures, realistic condensation, bright premium lighting.

04 | 6–8s — COOLING POWER
Visualize powerful cold air circulating evenly throughout the refrigerator. Subtle flowing air particles move around the food while everything remains perfectly fresh and chilled. Smooth cinematic camera movement.

05 | 8–10s — HERO SHOT
Doors gently close. The refrigerator becomes the complete hero in the center of the luxury kitchen. Camera performs a slow elegant push-in while premium highlights glide across the surface.

ON-SCREEN TEXT:
"FRESHNESS. PERFECTED."

FINAL FRAME:
Clean premium refrigerator hero shot, centered composition, elegant lighting, subtle reflections, luxury commercial finish.

STYLE: Photorealistic, ultra-detailed, cinematic lighting, realistic materials, premium appliance commercial, smooth camera motion, shallow depth of field, high-speed macro details, natural reflections, 8K quality, polished luxury advertising aesthetic.

NEGATIVE PROMPT:
No people, no hands, no warped refrigerator, no changing product design, no extra doors, no duplicate appliance, no floating objects, no distorted food, no fake branding, no misspelled text, no watermark, no cartoon look, no CGI-looking plastic, no flickering, no unstable geometry.`,
    },
  },
  {
    id: "chiropractic-clinic-social",
    title: "整脊诊所社媒短片",
    subtitle: "Evolink · bmx_ai13 · 约30秒 · 16:9",
    description:
      "明亮现代整脊诊所中的30秒写实观察式社媒片：环境建立→检查→颈部释放→腰部调整→胸椎按压→牵引峰值→起身见效。用稳定镜头语言、真实接触物理与自然微表情串成连续体验，无广告包装。",
    video: "/tutorials/chiropractic-clinic-social/demo-web.mp4",
    poster: "/tutorials/chiropractic-clinic-social/poster.jpg",
    duration: "约30秒",
    shots: 7,
    references: 0,
    model: "Seedance 2.5（推测）",
    style: "写实观察式 · 诊所社媒",
    aspectRatio: "16/9",
    sourceUrl: "https://evolink.ai/seedance-2-5-prompts",
    tags: [
      "约30秒 · 7 治疗节拍",
      "无参考图 · 纯文生可跟做",
      "Seedance 2.5（推测）",
      "写实接触物理 · 自然微表情",
    ],
    steps: [
      {
        number: 1,
        title: "读懂诊所社媒片节奏",
        description:
          "环境建立（4s）→检查期待（4s）→三段治疗（颈/腰/胸+牵引，18s）→起身见效（4s）。核心是写实观察式（非广告包装）+ 真实接触物理（桌垫压缩、衣褶、手压）+ 克制自然微表情（无夸张）。",
      },
      {
        number: 2,
        title: "选择模型与设置",
        description:
          "推测 Seedance 2.5 或类似写实模型。16:9 · 30s · 打开声音（现场环境底噪、呼吸、衣料、桌面、调整声 + 低音量钢琴/低音/打击乐）。无需参考图。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "保持暖色自然光 + 柔和顶灯；真实皮肤、布料褶皱、桌垫压缩；稳定面孔与自然微表情；每4–5秒换景别或治疗阶段；释放点轻微手持反应；负面提示：无文字/logo/水印/超现实动作。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–4s 建立空间：广角，手持缓慢推进，炭灰衫治疗师带白衫客户走向治疗台，远处工作人员轻微活动。教练提示：先建立明亮现代诊所氛围；推进稳定不过快。",
      },
      {
        number: 2,
        description:
          "4–8s 检查与期待：中景坐姿，浅景深、轻微漂移，治疗师从后方检查肩线与颈部转动，保持克制眼神交流。教练提示：安静期待，无夸张表演；自然呼吸、衣料声。",
      },
      {
        number: 3,
        description:
          "8–12s 颈部释放：侧面近景，头部安全摆位完成克制释放；客户短暂反应后微笑，镜头只做细小真实手持反馈。教练提示：动作克制且解剖学正确；呼吸与释放声不过分夸张。",
      },
      {
        number: 4,
        description:
          "12–17s 腰部调整：侧面中广景，客户侧卧，治疗师支撑肩与骨盆，停顿后完成紧凑腰部调整；强调重量转移、桌垫压缩、衣褶与手压。教练提示：物理接触要可信；短暂惊笑真实。",
      },
      {
        number: 5,
        description:
          "17–22s 胸椎按压：较低机位中近景/动作特写，客户俯卧，治疗师触诊上背、叠手完成受控胸椎压缩，从手部拉焦到放松表情。教练提示：拉焦柔和；桌面与衣料细节清晰。",
      },
      {
        number: 6,
        description:
          "22–26s 牵引峰值：头侧/头端视角，客户仰卧，黑色牵引带置于枕骨下，缓慢建立张力后短促牵引；客户睁大眼、发笑并短暂遮脸。教练提示：张力建立要慢且安全；反应真实不过度。",
      },
      {
        number: 7,
        description:
          "26–30s 结果与收束：中景到慢慢拉远，客户坐起，转肩转颈变得轻松；治疗师站旁，两人真诚共享微笑，拉远露出明亮诊所。教练提示：收束平静、满足、非促销式；温暖钢琴微升干净收束。",
      },
    ],
    constraints:
      "暖色自然光+柔和顶灯；真实皮肤、布料褶皱、桌垫压缩与手部接触；稳定面孔和自然微表情；无文字/logo/水印/超现实动作；来源 Evolink/bmx_ai13/Seedance 2.5。",
    video_prompt: {
      title: "Chiropractic Clinic Social Video · ~30s · 7 Beats",
      subtitle: "Seedance 2.5（推测）· 16:9 · 写实观察式",
      content: `Create a 30 second 16:9 cinematic social video set inside a modern chiropractic and mobility clinic during late morning. The room has pale warm walls, clean wood flooring, black padded treatment tables, gray visitor chairs, a few green plants, subtle wall art, and tall windows overlooking leafy trees. Use natural daylight mixed with soft ceiling light, realistic skin texture, true fabric behavior, accurate anatomy, physically believable contact, consistent faces, and natural micro expressions. No text, no logos, no watermarks, no surreal motion.

From 0 to 4 seconds, open on a wide establishing shot with a slow handheld push through the clinic. A calm male practitioner in a charcoal shirt guides an adult male client in a white shirt toward a treatment table. Other staff move softly in the distant background. The mood feels professional, relaxed, and observational.

From 4 to 8 seconds, cut to a medium seated shot. The client sits centered while the practitioner stands behind him, gently checking shoulder level and neck rotation. Use small natural camera drift, shallow depth of field, window light on one side of the face, and realistic eye contact. Show quiet anticipation without exaggerated acting.

From 8 to 12 seconds, move into a close side angle as the practitioner carefully positions the head for a controlled neck release. Keep the motion restrained and anatomically correct. Capture a quick release, a subtle facial reaction, a sharp breath, and an immediate smile. Let the camera react with a tiny authentic handheld movement rather than a dramatic shake.

From 12 to 17 seconds, cut to a medium wide side view of the client lying on his side on the table. The practitioner braces the shoulder and pelvis, pauses, then performs one compact lumbar adjustment. Show realistic weight transfer, table cushion compression, shirt folds, breathing, hand pressure, and a brief surprised laugh from the client.

From 17 to 22 seconds, cut to the client lying face down. The practitioner palpates the upper back, stacks both hands, and applies one controlled thoracic compression. Use a slightly lower camera angle, soft reflections on the table, gentle background activity, and a brief focus pull from the hands to the client's relieved expression.

From 22 to 26 seconds, transition to a head of table view. The client lies on his back while the practitioner places a black traction strap beneath the base of the skull. Build tension slowly and safely, then deliver one short controlled pull. The client reacts with wide eyes, then laughs and covers his face for a moment.

From 26 to 30 seconds, finish with the client sitting upright, rolling his shoulders and turning his neck comfortably while the practitioner stands beside him. End on an honest shared smile and a slow pullback that reveals the bright clinic. Keep the final moment calm and satisfying, not promotional.

Audio should feel captured on location with soft room ambience, distant clinic movement, clothing rustle, table creaks, natural breathing, quiet conversation without clearly audible words, and crisp but not exaggerated adjustment sounds. Add a low volume modern instrumental track with warm piano, soft bass, light percussion, and a gentle rise at each release, ending on a clean resolved note.`,
    },
  },
  {
    id: "steppe-warrior-queen",
    title: "草原女王：骑射破阵",
    subtitle: "X · azed_ai · 约30秒 · 16:9",
    description:
      "暮色大草原上，游牧女王策马观察敌军冲锋，驰射破阵、帕提亚回马射、诱敌入伏、近战突围，最后站上山脊收束战场。强调真实骑术与箭矢消耗连续性，无超能力。",
    video: "/tutorials/steppe-warrior-queen/demo-web-v2.mp4",
    poster: "/tutorials/steppe-warrior-queen/poster-v2.jpg",
    duration: "约30秒",
    shots: 7,
    references: 0,
    model: "Luma AI（推测）",
    style: "史诗骑战 · 暮光草原",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/azed_ai/status/2101309410434044158",
    tags: [
      "约30秒 · 7 节拍战斗弧",
      "无参考图 · 纯文生可跟做",
      "真实骑术 · 帕提亚回马射",
      "箭矢连续性 · 战场地理可读",
    ],
    steps: [
      {
        number: 1,
        title: "读懂战斗弧线",
        description:
          "观察→驰射→回马射→诱敌伏击→换刀近战→被围突围→反攻收束。核心是真实骑术（腿夹鞍、缰绳控制）+ 箭矢消耗连续性（射出即减少）+ 地理可读（弧线诱敌、两侧伏击）。",
      },
      {
        number: 2,
        title: "选择模型与设置",
        description:
          "推测 Luma AI 或类似高动态模型。16:9 · ~30s · 打开声音（战马嘶鸣、弓弦、箭破空、盔甲碰撞、战场环境）。无需参考图。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "保持战场地理连续；同一脸/辫/甲/栗毛马；箭从箭袋拿出即减少；尘土与疲劳累积；慢镜只开场与满弦瞬间；暴力克制可读不过度血腥；负面提示：无瞬移/无限箭/重复骑手/漂浮武器。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:04 女王驰骋观察：慢镜侧跟栗毛战马踏过黄草与烟尘，旋向面部，敌军骑阵冲来，她抽第一支黑羽箭。教练提示：先立身份与战场地理；慢镜只开场，攻击后立刻回正常速度。",
      },
      {
        number: 2,
        description:
          "00:04–00:08 第一波驰射：贴身控马拉弓连射，过肩/侧跟/蹄边低机位切换，斜穿敌阵而非正面硬撞。教练提示：骑射要贴马背节奏；斜穿是战术，不是乱冲。",
      },
      {
        number: 3,
        description:
          "00:08–00:12 帕提亚回马射：擦过敌阵后上身回扭转弓满弦一瞬慢镜，再回实时，箭穿尘后继续抽箭。教练提示：回马射是记忆点——腿夹鞍平衡，满弦一瞬即可。",
      },
      {
        number: 4,
        description:
          "00:12–00:16 诱敌与伏击：高机位显示弧线骑行诱开敌军，己方骑兵从烟尘两侧杀出；她折回战场穿行。教练提示：地理要可读——弧线=诱敌，两侧=伏击。",
      },
      {
        number: 5,
        description:
          "00:16–00:20 破线近战：箭将尽，收弓抽弯刀冲过燃烧辎重与破碎盾墙。教练提示：箭矢消耗要连续；换武器有因果。",
      },
      {
        number: 6,
        description:
          "00:20–00:24 被围突围：多名敌骑合围，急转扬尘，挡刀侧身，借马势挤出缝隙。教练提示：突围靠马势与缝隙，不靠瞬移。",
      },
      {
        number: 7,
        description:
          "00:24–00:30 反攻与收束：末箭、己方骑兵涌过山脊、尘墙；尘散后她停在山脊俯瞰，旗帜升起，切黑。教练提示：收束用疲惫但坚定的表情+战场地理，勿狂欢结尾。",
      },
    ],
    constraints:
      "真实骑术（缰绳控制、腿夹鞍平衡、马势突围）；箭矢消耗连续性（射出即减少，不无限）；战场地理可读（弧线诱敌、两侧伏击清晰）；暴力克制不过血；来源 azed_ai/Luma AI。",
    video_prompt: {
      title: "Steppe Warrior Queen · Mounted Archery Battle · ~30s · 7 Beats",
      subtitle: "推测 Luma AI · 16:9 · 真实骑术 + 箭矢连续性",
      content: `Create a brutal, photorealistic historical-fantasy cavalry battle centered on a fierce nomadic warrior queen leading a mounted counterattack across an enormous steppe battlefield at dusk. The sequence must tell one continuous combat story, beginning with the queen observing an enemy cavalry charge, accelerating into mounted archery, breaking through the enemy formation, becoming surrounded, fighting her way free, and finally emerging from the dust after turning the battle.

Warrior Queen: A fierce nomadic warrior queen with a lean athletic body, powerful rider's build, sun-browned skin, sharp fox-like eyes, high cheekbones, and long dark hair braided with beads and bone ornaments. She wears layered leather and lamellar armor trimmed with dark fur, weathered riding boots, reinforced bracers, and a horned helmet pushed back from her face. She carries a recurved bow, a quiver filled with black-feathered arrows, and a short curved blade.

Horse: A swift muscular chestnut warhorse with dark mane, leather tack, practical saddle equipment, sweat-darkened coat, and realistic battlefield movement. Maintain the same horse throughout.

Environment: An enormous windswept steppe battlefield at dusk, with tall yellow grass flattened beneath thousands of hooves, cavalry formations disappearing into dust, scattered infantry, flaming supply carts, broken spears, abandoned shields, torn tents, fallen banners, and red standards violently thrashing beneath a smoky orange sky.

Visual Style: Photorealistic historical-fantasy warfare, grounded practical armor, realistic horse anatomy and riding mechanics, dusty golden-orange atmosphere, strong sunset backlighting, detailed fabric physics, realistic weapon handling, restrained battle injuries, sparks, smoke, flying dirt, atmospheric depth, enormous battlefield scale, and a mythic presence surrounding the queen without giving her supernatural powers.

Camera Language: Begin with controlled cinematic observation before rapidly increasing camera energy once the queen attacks. Use circular tracking, extreme facial close-ups, side-mounted cavalry tracking, over-the-shoulder archery shots, arrow-following perspectives, low cameras beside galloping hooves, wide battlefield reveals, aggressive lateral tracking through formations, brief handheld ground-level perspectives, and controlled slow motion only for important combat beats.

Audio: Thunderous galloping, horse breathing, leather saddle movement, armor rattling, bowstrings snapping, arrows cutting through air, distant battle cries, clashing steel, burning wood, wind, cavalry horns, soldiers shouting, horse vocalizations, and the queen's breathing. Use deep restrained war percussion beneath the battle without overwhelming physical sound.

[00:00-00:04] THE QUEEN RIDES

Begin with an elegant slow-motion side-tracking shot circling the queen as her chestnut horse gallops through drifting battlefield smoke, its hooves tearing through yellow grass while her braids, fur trim, quiver, and red cloth details violently whip behind her. The camera gradually rotates toward her face as she looks across the battlefield and sees an enemy cavalry formation charging toward her scattered soldiers, then perform a sudden crash push toward her narrowed eyes as she calmly reaches over her shoulder and draws the first black-feathered arrow.

[00:04-00:08] FIRST VOLLEY

Return immediately to full speed as she lowers herself against the horse's movement, draws the recurved bow while galloping, and releases the first arrow toward an approaching enemy rider before instantly drawing another. Cut between a tight over-the-shoulder view aligned with her bow, a sweeping side-tracking shot matching the horse's speed, and a low angle beside the pounding hooves as she fires several carefully timed shots while weaving diagonally across the approaching cavalry rather than charging directly into them.

[00:08-00:12] THE PARTHIAN SHOT

The queen suddenly guides her horse past the enemy formation and twists her entire upper body backward in the saddle while maintaining full forward momentum, using her thighs and riding technique to remain balanced as she draws another arrow behind herself. Hold one brief controlled slow-motion beat as the bow reaches full tension, then return violently to real speed when she releases, following the arrow briefly through swirling dust before cutting back to the queen already drawing another arrow as pursuing riders close behind her.

[00:12-00:16] THE TRAP

Pull upward into a wide moving composition revealing that her curved riding path has deliberately drawn part of the enemy cavalry away from their infantry formation, allowing her own riders to suddenly emerge through the dust from both sides and strike the exposed formation. The queen immediately turns her chestnut horse back toward the battlefield, races between colliding cavalry lines, ducks beneath a passing spear, fires at close range toward another mounted opponent, then narrowly passes between two horses as the camera whips around to remain beside her.

[00:16-00:20] THROUGH THE BROKEN LINE

Her quiver is nearly empty as she reaches a collapsing infantry formation near several burning carts, so she returns the bow across her body, draws the short curved blade, and drives her horse through a narrow opening between broken shields. Use fast alternating cuts between a frontal tracking shot retreating before the charging horse, a low side angle showing hooves exploding through dirt, and a tight shoulder-level composition as she deflects an incoming weapon and strikes past opponents while continuously moving rather than stopping for individual duels.

[00:20-00:24] SURROUNDED

The queen emerges beyond the infantry only to discover several enemy riders converging around her through the smoke, forcing her to pull hard on the reins and turn the horse sharply as dirt erupts beneath its hooves. One rider approaches from her left while another closes from behind, so she blocks the first attack with her curved blade, leans almost completely sideways from the saddle to avoid the second, then uses the horse's momentum to break through the narrow opening between them before they can completely surround her.

[00:24-00:27] STRIKE AGAIN

She races toward a low ridge while three riders pursue her, then suddenly turns the horse across their path and draws the final arrow from her quiver. The camera moves directly beside her as she releases while galloping, then swings behind her shoulder to reveal her own cavalry pouring across the ridge in the background. She raises her curved blade overhead, and dozens of riders thunder past her toward the remaining enemy formation as the battlefield disappears beneath an enormous wall of dust.

[00:27-00:30] QUEEN OF THE STEPPE

The dust gradually clears as the queen rides alone into the foreground and pulls her chestnut horse to a controlled stop on the ridge overlooking the battlefield, both breathing heavily after the charge. She lowers the bow beside her thigh while firelight from burning carts flickers across her scratched armor and wind moves her long braids across her face. Behind her, surviving enemy forces retreat into the distance while her red standards rise through the smoke. Slowly push toward her exhausted but unwavering expression as she looks across the battlefield beneath the dying orange sun, then cut to black.

The queen must feel exceptionally skilled because of lifelong horsemanship, tactical awareness, timing, balance, and archery experience rather than supernatural abilities. Keep her physically connected to the saddle and horse throughout every maneuver, with realistic rein control, leg positioning, body rotation, bow tension, weapon weight, momentum, and recovery.

Every cut must preserve clear battlefield geography and the same continuous attack. Her initial curved riding path intentionally draws enemy cavalry away from their formation, her allies exploit the opening, she turns back through the disrupted battlefield, switches weapons after exhausting most of her arrows, escapes an attempted encirclement, and finally signals the decisive cavalry counterattack.

Maintain exact continuity for the queen's face, braids, ornaments, helmet, armor, cloak, weapons, remaining arrows, accumulated dirt, and chestnut horse. Arrows removed from the quiver must remain gone, damage and dirt acquired during battle must persist, and the horse must gradually show believable exertion through breathing, sweat, and movement.

Keep violence fierce but readable rather than gore-focused. Prioritize cavalry speed, arrow impacts, weapon clashes, riders falling away from the queen's path, dust, sparks, torn banners, collapsing formations, and the terrifying physical scale of mounted warfare. No duplicated riders, floating weapons, impossible horse movement, teleportation, changing armor, endless arrows, exaggerated blood spray, modern objects, firearms, subtitles, or comedic behavior.`,
    },
  },
  {
    id: "late-night-ramen",
    title: "深夜泡面：耳机里的小确幸",
    subtitle: "X · Shorelyn_ · Seedance 2.5 · 约29秒 · 16:9",
    description:
      "暖光深夜生活片：短发女生戴耳机煮泡面，从撕料包、冲水、打蛋到盖盖焖面、揭盖夹面大口吃。宏观食物特写与碗内视角穿插，Lo-Fi 与 ASMR 食材声叠在一起。无独立参考图，纯提示词可跟做。",
    video: "/tutorials/late-night-ramen/demo-web.mp4",
    poster: "/tutorials/late-night-ramen/poster.jpg",
    duration: "约29秒",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "暖光深夜 · Lo-Fi + ASMR",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Shorelyn_/status/2099013056013672761",
    tags: [
      "约29秒 · 7 节拍",
      "无参考图 · 纯文生视频可跟做",
      "Seedance 2.5",
      "Lo-Fi R&B + ASMR 食材声",
    ],
    steps: [
      {
        number: 1,
        title: "读懂暖光深夜泡面节奏",
        description:
          "撕包→冲水→打蛋→盖盖→揭盖夹面。暖光房间+耳机角色；宏观食物特写与碗内视角穿插；蒸汽物理连续；碗内熄灯转场巧思。",
      },
      {
        number: 2,
        title: "Seedance 2.5 · 16:9 · ~30s · 打开声音",
        description:
          "无需参考图。Lo-Fi R&B 音乐 + ASMR 食材 foley（撕包、倒水、打蛋、吸面）叠在一起。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "可改人物/面味做成自己的。保持暖光 vs 夜窗外；宏观食物+碗内视角；Lo-Fi+ASMR foley；蒸汽真实。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:02 摇摆开场：中景：女生随音乐轻晃，桌上水壶、鸡蛋、碗，拿起红色调料包。教练提示：先立住暖光房间与耳机角色；桌面道具一次摆齐。",
      },
      {
        number: 2,
        description:
          "00:03–00:06 撕包撒粉：手撕红包→调料粉落在干面饼的宏观。教练提示：食物宏观要浅景深；粉尘下落是记忆点。",
      },
      {
        number: 3,
        description:
          "00:07–00:09 热水冲面：热水浇面与粉，汤色形成，蒸汽升腾。教练提示：蒸汽物理要连续，避免瞬变。",
      },
      {
        number: 4,
        description:
          "00:10–00:12 打蛋入汤：持蛋中景切慢镜：生蛋落入汤心。教练提示：慢镜只给打蛋瞬间，别拖长。",
      },
      {
        number: 5,
        description:
          "00:13–00:17 盖盖焖等：盖盖→碗内视角变黑；再切回闭眼微笑敲桌等待。教练提示：碗内熄灯是转场巧思；等待段落保持节奏敲击。",
      },
      {
        number: 6,
        description:
          "00:18–00:22 揭盖夹面：碗沿低机位揭盖见溏心蛋；筷子夹起大束热面。教练提示：揭盖低机位制造食欲；面条拉丝要清晰。",
      },
      {
        number: 7,
        description:
          "00:23–00:28 大口满足：特写大口吸面闭眼享受，中文优雅字幕淡入。教练提示：收尾情绪落在满足；字幕可按需删改。",
      },
    ],
    constraints:
      "暖光 vs 夜窗外；宏观食物+碗内视角；Lo-Fi+ASMR foley；蒸汽真实；来源 Shorelyn_/Seedance 2.5。",
    video_prompt: {
      title: "Late Night Ramen · Headphones · ~29s · 7 Beats",
      subtitle: "Seedance 2.5 · 16:9 · Lo-Fi R&B + ASMR foley",
      content: `Subject
A young East Asian woman with short dark hair, wearing a loose cream-colored sweater and large beige over-ear headphones, preparing and eating a cozy late-night bowl of instant ramen.

Style
Cinematic late-night slice-of-life aesthetic. Warm, intimate, and comforting atmosphere with soft indoor lamp lighting contrasting with the dark nighttime window in the background.

Camera & Framing
Soft ambient indoor lighting with warm color grading. Framing features medium portrait shots of the woman, extreme macro close-ups of food preparation, and dynamic internal bowl perspectives with shallow depth of field.

Audio
Chill Lo-Fi R&B pop soundtrack with soft English vocals, layered with crisp ASMR food foley including tearing packets, pouring boiling water, cracking an egg, and noodle slurping.

Realism
Photorealistic 8K rendering with highly detailed food textures, realistic steam physics, natural skin tones, and authentic ambient lighting.

Detailed Scene Breakdown
00:00 - 00:02
Visual: Medium shot of the woman swaying gently to the music in her headphones, sitting at a wooden table with an electric kettle, two eggs, and a bowl. She smiles and picks up a red seasoning packet.
00:03 - 00:06
Visual: Extreme close-up of her hands tearing open the red seasoning packet, followed by a macro shot of brown seasoning powder cascading onto the dry, wavy ramen noodle block.
00:07 - 00:09
Visual: Macro close-up of steaming hot water being poured directly over the noodles and seasoning powder, mixing into a rich broth with thick steam rising.
00:10 - 00:12
Visual: Medium shot of her holding an egg, cutting to a slow-motion macro close-up of a cracked raw egg dropping perfectly into the center of the hot broth and noodles.
00:13 - 00:15
Visual: Medium shot of her placing a lid over the steaming bowl, smoothly transitioning into a dark, cinematic perspective from inside the bowl as the lid closes and shuts out the light.
00:16 - 00:17
Visual: Medium shot of the woman sitting patiently, smiling with her eyes closed and tapping her fingers on the table to the beat of her music while the noodles cook.
00:18 - 00:19
Visual: Cinematic low-angle shot from the rim of the bowl as the lid is lifted, revealing a perfectly soft-cooked egg resting on top of the steaming hot ramen.
00:20 - 00:22
Visual: Extreme close-up of wooden chopsticks lifting a massive, mouth-watering bundle of steaming hot, curly noodles from the bowl.
00:23 - 00:28
Visual: Close-up of the woman taking a big bite, slurping the noodles happily, and closing her eyes in pure comfort as elegant Chinese text fades onto the screen.`,
    },
  },
  {
    id: "invisible-fitting-room",
    title: "隐形试衣间:假人四套造型",
    subtitle: "X · KrevixAi · 10秒 · 16:9",
    description:
      "固定机位黑棚里,哑光白无脸男模被黑手套「遥控」换装四套造型,最后牵手走向镜头挡黑。成片强调真实布料物理、无魔法光效。提示词原文写 9:16,但公开成片为 16:9,跟做时以成片画幅为准或按渠道改写。",
    video: "/tutorials/invisible-fitting-room/demo-web.mp4",
    poster: "/tutorials/invisible-fitting-room/poster.jpg",
    duration: "10 秒",
    shots: 5,
    references: 1,
    model: "Gemini Omni · Seedance 2.0",
    style: "时装展示 · 黑棚遥控",
    aspectRatio: "16/9",
    tags: [
      "10 秒 · 5 节拍 · 固定机位",
      "1 张分镜静帧",
      "Gemini Omni · Seedance 2.0",
      "时装展示 · 黑棚遥控",
    ],
    steps: [
      {
        number: 1,
        title: "读懂四套换装+卸堆+牵手挡镜",
        description:
          "四套咖啡色系时装依次飞入装配→pose→卸下堆地;终套奢华分层后,假人牵女手走向机位用外套挡镜切黑。核心是固定黑棚+无脸假人+黑手套遥控+禁魔法粒子。",
      },
      {
        number: 2,
        title: "打开 Seedance/Gemini",
        description:
          "设置:10 秒 · 16:9(原文写 9:16 可按竖屏渠道改)。不需要独立出图词,storyboard 仅配图参考。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "锁定机位黑棚;无脸假人连续;黑手套遥控不接触;禁魔法粒子/变形;真实布料物理重力惯性;四套咖啡色板;终套分层修型;外套挡镜切黑。",
      },
    ],
    references_detail: [
      {
        id: "storyboard",
        number: "分镜静帧",
        title: "15格分镜参考",
        subtitle: "分镜静帧(帖内配图,无单独出图词) · 视觉参考",
        image: "/tutorials/invisible-fitting-room/refs/storyboard.jpg",
        prompt: "",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:02 第一套上身再卸下:espresso 衬衫 + caramel 阔裤 + loafers 飞入穿上,pose 后一挥卸落地板。教练提示:锁定黑棚正面机位与无脸假人;服装用物理飞入而非溶解。",
      },
      {
        number: 2,
        description:
          "00:02–00:04 第二套:皮夹克造型:cognac 皮夹克 + cream 针织 + 深巧克力裤靴;双手抽离堆到第一套旁。教练提示:保持假人身份连续;每套卸下后衣服堆积要可读。",
      },
      {
        number: 3,
        description:
          "00:04–00:06 第三套:风衣旋转:cream 高领 + coffee 裤 + mocha 长外套绕身装配后宽幅卸下。教练提示:外套绕身是记忆点:用惯性旋转而不是瞬移。",
      },
      {
        number: 4,
        description:
          "00:06–00:08.5 终套分层奢华:象牙丝绸衬衫、espresso 西裤、burnt-orange 马甲、深巧克力外套等逐层装配并遥控修型。教练提示:分层装配 + 手套微调腰肩驳头;咖啡色板 + burnt-orange 点缀。",
      },
      {
        number: 5,
        description:
          "00:08.5–00:10 终姿牵手挡镜:终姿后女手伸出,假人牵手走向固定机位,外套盖住镜头切黑。教练提示:用身体遮镜收束,比硬切更高级;全程禁魔法粒子。",
      },
    ],
    constraints:
      "固定正面机位黑棚;无脸假人连续;黑手套遥控不接触;禁魔法粒子/变形;四套咖啡色板;外套挡镜切黑;提示词原文写 9:16,成片为 16:9,跟做以成片画幅为准或按渠道改写;来源:KrevixAi/Gemini Omni·Seedance 2.0。",
    video_prompt: {
      title: "INVISIBLE FITTING ROOM · 10s · 16:9 · 4 Looks",
      subtitle:
        "Gemini Omni · Seedance 2.0 · Prompt says 9:16 but video is 16:9",
      content: `Create a 10-second ultra-photorealistic premium fashion video "INVISIBLE FITTING ROOM", 9:16. One locked frontal camera, black seamless studio. Same tall muscular matte-white faceless male mannequin centered full-body, initially wearing only fitted black shorts. Female hands in long matte-black gloves remotely dress him without touching. No magic, glow, portals, particles or morphing; realistic cloth physics, gravity and inertia. 0–2s: espresso oversized shirt + caramel wide trousers + brown loafers fly in and physically dress him; mannequin strikes an editorial pose, then one sharp hand swipe pulls the outfit off and it falls to the floor. 2–4s: cognac leather jacket + cream knit + dark-chocolate trousers + boots fly in; mannequin takes a strong pose, then both hands pull the outfit away and garments fall beside the first look. 4–6s: cream turtleneck + coffee trousers + long mocha coat assemble onto him; coat rotates naturally around his body, he poses, then a wide swipe removes everything onto the growing clothing pile. 6–8.5s: final luxury outfit assembles layer by layer: ivory silk shirt, espresso tailored trousers, burnt-orange waistcoat, long dark-chocolate jacket, cognac shoes, tie and gold brooch. Precise hand gestures remotely tailor waist, shoulders, lapels and cuffs with realistic fabric tension. 8.5–9.2s: mannequin holds a powerful final fashion pose surrounded by discarded clothes. 9.2–10s: female hand reaches forward; mannequin physically takes her hand and walks confidently toward the fixed camera until his jacket naturally covers the lens → black. Premium coffee palette, burnt-orange accent, cinematic rim lighting, realistic silk, leather, cashmere and wool, seamless continuity.`,
    },
  },
  {
    id: "watch-her-reset-73",
    title: "两次失误后的复位",
    subtitle: "Pollo · Seedance 2.5 · 30秒",
    description:
      "黄金时段麦田里,女性射手连续两次失误后通过闭眼、呼吸和静止重新集中,第三发击碎瓶子,再以克制的满足感收尾。把挫败、呼吸、静止和命中剪成清晰情绪弧。",
    video: "/tutorials/watch-her-reset-73/demo-web.mp4",
    poster: "/tutorials/watch-her-reset-73/poster.jpg",
    duration: "30 秒",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "电影感 · 黄金时段",
    aspectRatio: "16/9",
    tags: [
      "30 秒 · 7 节拍 · 情绪弧",
      "无参考图",
      "Seedance 2.5",
      "电影感 · 黄金时段",
    ],
    steps: [
      {
        number: 1,
        title: "读懂情绪弧",
        description:
          "两次失误→复位呼吸→重新锁定→最终命中→余韵。核心是把挫败、静止和满足通过克制表演和镜头语言剪成清晰弧线。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:16:9 · 30 秒 · 打开声音(只保留环境声、枪声和玻璃碎裂,不加背景音乐)。无需参考图。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "保持黄金时段暖光、麦田、风吹贯穿所有镜头;慢动作只给最后一发;克制表演不夸张;负面提示避免字幕/BGM/血腥/跳切。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:03 建立场景:广角展示黄金时段的开阔麦田、风中的麦穗、远处木栅栏上的五个空玻璃瓶;女性举枪瞄准。教练提示:暖色始终统一,先用空间关系交代射手和目标。",
      },
      {
        number: 2,
        description:
          "00:03–00:06 第一次失误:肩后中景开枪,第一瓶保持完整,瓶后扬起尘土;她短促呼气并微调站姿。教练提示:反应克制,用下颌收紧和呼气表达挫败。",
      },
      {
        number: 3,
        description:
          "00:06–00:09 第二次失误:快速切段呈现第二发再次落空;握枪更紧、轻微摇头,但不破坏姿势。教练提示:保持连续的风、麦田与发丝运动,情绪只小幅上升。",
      },
      {
        number: 4,
        description:
          "00:09–00:11 复位呼吸:她略微放低步枪,闭眼一拍,缓慢而有意识地呼吸;风变明显,姿态完全静止。教练提示:把停顿留足,复位是全片情绪转折。",
      },
      {
        number: 5,
        description:
          "00:11–00:13 重新锁定:眼睛睁开,锐利而专注;切到手指落在扳机上的近景,呼吸变慢且均匀。教练提示:宽景到眼睛、再到扳机,收窄信息范围。",
      },
      {
        number: 6,
        description:
          "00:13–00:16 最终命中:慢动作开最后一枪,短暂跟踪弹道后切到瓶子在金色光线中碎裂。教练提示:慢动作只给最后一发,玻璃碎片要抓住逆光。",
      },
      {
        number: 7,
        description:
          "00:16–00:19 余韵:广角中她放下步枪,轻轻呼气,镜头慢慢拉远;她独自站在夕阳麦田中。教练提示:不要庆祝式夸张表演,以安静满足结束。",
      },
    ],
    constraints:
      "黄金时段暖光贯穿;慢动作只给最后一发;克制表演不夸张;只保留环境声/枪声/玻璃碎裂,不加字幕或BGM;来源:Pollo/azed_ai。",
    video_prompt: {
      title: "Watch Her Reset · Golden Hour Wheat Field · 30s · 7 Beats",
      subtitle: "Seedance 2.5 · 16:9 · Emotional arc · No BGM",
      content: `Environment: Late afternoon, golden hour, in a vast open wheat field. Tall golden wheat stalks sway gently in the wind. Five empty glass bottles are lined up on a weathered wooden fence post about 15 meters away. Dust and loose wheat husks drift through the air, backlit by the low sun

Visual style: Cinematic, realistic, warm golden-hour color grade, shallow depth of field, natural film grain, lens flare when facing the sun

Camera language: Mix of wide establishing shots and tight handheld close-ups. Slow, deliberate camera movement no fast whip pans. Slow motion only on the final shot.

Subject styling: 24-year-old woman, athletic build, tan skin with visible sun-warmed texture, hair pulled back in a low ponytail with loose strands blowing in the wind, wearing a fitted olive-green tank top and dark tactical pants, ear protection around her neck, calm but focused expression, holding a rifle in a proper shooting stance.

Core performance: The emotional arc mounting frustration after each miss, then a visible reset into total stillness and focus, then quiet relief/satisfaction after the hit. Nothing exaggerated; restrained, natural reactions.

Negative prompts: No subtitles, no background music, no on-screen text, no gore or blood, no exaggerated muzzle flash, no extra fingers, no face distortion, no jump cuts.

[00-03] Wide shot: the woman stands in the wheat field, rifle raised, aiming down the sight at the bottles on the fence in the distance. Wind moves the wheat around her. She's steady, breathing controlled.

[03-06] Medium shot from behind her shoulder: she fires  first bottle stays intact, a puff of dirt kicks up behind it. She exhales sharply, jaw tightens slightly, but resets her stance.

[06-09] Quick cut sequence: second shot, one more miss. Her frustration builds subtly a tighter grip on the rifle, a small shake of the head  but she doesn't break form.

[09-11] She lowers the rifle slightly, closes her eyes for a beat, takes one slow, deliberate breath. The wind picks up around her, wheat swaying. Complete stillness in her posture.

[11-13] Close-up on her eyes opening  sharp, determined, completely focused. Cut to a close-up of her finger settling on the trigger, breathing now slow and even.

[13-16] Slow motion: she fires the final shot. Track the shot's path briefly, then cut to the bottle shattering into glass fragments catching the golden light.

[16-19] Wide shot: she lowers the rifle, a small, quiet exhale of relief not a big celebration, just calm satisfaction. Camera slowly pulls back, she stands alone in the glowing wheat field as the sun continues to set.

Reinforce throughout: golden-hour warm lighting never shifts to cool tones, wheat field environment stays consistent in all shots, wind-blown wheat and hair motion present in every frame, no subtitles or BGM at any point only natural ambient

sound: wind through wheat, distant birds, the rifle shot itself, and glass shattering
on the final hit.`,
    },
  },
  {
    id: "pov-stadium-rap-137",
    title: "体育场说唱 POV",
    subtitle: "Pollo · Seedance 2.5 · 30秒 · 3:4",
    description:
      "观众区 iPhone 以单一连续镜头记录体育场说唱:先用数字变焦锁定表演者,再按歌词和鼓点推进动作,四名舞者在第三段加入。提示词引用 @Image1 但页面无参考图可下;原文在 bro 处截断,不补写。",
    video: "/tutorials/pov-stadium-rap-137/demo-web.mp4",
    poster: "/tutorials/pov-stadium-rap-137/poster.jpg",
    duration: "30 秒",
    shots: 5,
    references: 0,
    model: "Seedance 2.5",
    style: "iPhone POV · 现场感",
    aspectRatio: "3/4",
    tags: [
      "30 秒 · 3:4 竖屏 · 5 节拍",
      "提示词含 @Image1 · 页面无参考图",
      "Seedance 2.5",
      "iPhone POV · 现场感",
    ],
    steps: [
      {
        number: 1,
        title: "读懂现场感构成",
        description:
          "锁定→动作→舞者加入→停拍蓄力→最终重击。核心是用手持抖动、呼吸、不完美重构图和压缩音质模拟观众区 iPhone POV。提示词引用 @Image1,但页面无参考图可下。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:3:4 竖屏 · 30 秒 · 打开声音。有表演者参考图可自备挂 @Image1;无参考图也可直接生成。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "保持手持抖动、呼吸和不完美对焦;动作落点对齐 kick/snare;歌词只用源站四行;注意:原提示词在 bro 处截断(作者原文),不补全。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:05 锁定表演者:首帧即见说唱者站在舞台跑道末端右侧,四名舞者在后方;iPhone 从 1× 快速捏到摇晃的 5× 数字变焦并锁定全身。教练提示:保留脚部和完整动作范围;手持抖动、呼吸感、自动对焦和不完美重构图共同制造观众区现场感。",
      },
      {
        number: 2,
        description:
          "00:05–00:12 第一、二句动作:第一句对应双肩撞击、胸部弹动和前臂锁定;第二句进入 heel-toe 脚步、交叉和侧滑,摄影机向下修正以抓全运动鞋。教练提示:动作要跟 kick/snare 对齐,镜头追人但不要剪切。",
      },
      {
        number: 3,
        description:
          "00:12–00:20 舞者加入:第三句四名舞者同步加入;说唱者带领跺步、肘击、躯干后弹和双手上举。教练提示:保持舞台地面连续、人物比例稳定,动作落点清楚。",
      },
      {
        number: 4,
        description:
          "00:20–00:23 停拍蓄力:伴奏停一拍,说唱者保持深宽站姿,望向上层看台,胸口完成一次可见呼吸。教练提示:让停顿成为节奏转折,避免夸张表情。",
      },
      {
        number: 5,
        description:
          "00:23–00:30 最终重击(源文截断):最后一句进入快速三步、受控 180° 转身和向下大幅挥臂;「GROUND」处跺脚,低音重回,源站文本至「the LED floor sends a bro」截断。教练提示:只执行源站可见的动作信息,不为截断部分补写内容。",
      },
    ],
    constraints:
      "3:4 竖屏;单一连续镜头不剪切;手持抖动和呼吸感;动作对齐节拍;歌词只用源站四行;提示词原文在 bro 处截断(作者原文,不补写);来源:Pollo/EHuanglu。提示词含 @Image1,但页面无参考图可下 · 不编造。",
    video_prompt: {
      title: "POV Stadium Rap · 30s · 3:4 Vertical · 5 Beats",
      subtitle:
        "Seedance 2.5 · iPhone handheld POV · @Image1 mentioned but no ref available",
      content: `@Image1 is the absolute reference for THE RAPPER and completely replaces every previous performer reference. Preserve his exact identity: middle-aged man with a high receding hairline, short salt-and-pepper hair, thick dark eyebrows, dark eyes and a full beard with strongly defined white-gray sections. Preserve his stocky build, black-white-dark-green horizontally striped T-shirt with black chest pocket, sand-colored knee-length chino shorts and chunky off-white sneakers. No changes to his face, body, hair, beard, clothes or proportions.

A 30-second single continuous live stadium rap performance captured horizontally on an iPhone from the front audience section. Authentic handheld fan footage: physical hand tremor, operator breathing, imperfect reframing, rolling shutter, digital-zoom softness, momentary autofocus hunting and compressed phone-microphone sound. No cuts.

The first frame already shows THE RAPPER full-body on the right third at the end of a stage runway. A huge sold-out stadium surrounds him. Exactly four adult backup dancers wait several meters behind him. Emerald, white and black LED graphics echo the stripes of his shirt. The stage floor remains solid, flat and continuous.

A heavy original grime beat begins: deep sub-bass, dry kick, snapping snare and minimal low synth. The iPhone rapidly pinches from 1× to a shaky 5× digital zoom, briefly overshoots, then locks onto THE RAPPER in a full-body composition. Focus stays wide enough to preserve his feet and choreography.

He begins rapping with a low-mid, forceful cadence and exact lip synchronization:

THE RAPPER:
"Walk in steady, put the weight on the beat,
Every bar lands, every move stays clean.
Hands up high when the bass comes down,
I don't chase the wave—I shake the whole ground!"

Only these words are spoken. Each line is delivered in one controlled breath.

On the first bar he performs two violent shoulder hits, a chest pop and a sharp forearm lock. His shirt and beard react naturally to momentum.

On the second bar he executes fast heel-toe pivots, crosses one foot behind the other and glides sideways while keeping his heavy body convincingly grounded. The camera operator struggles to keep his sneakers in frame, corrects downward and catches the complete footwork.

On the third bar the four dancers join in perfect synchronization. THE RAPPER leads a hard sequence: right stomp, left stomp, elbows strike outward, torso snaps backward, hands shoot overhead. Every movement lands precisely on a kick or snare.

The instrumental cuts for one beat. He holds a deep wide stance, eyes fixed on the upper tiers. His chest rises with one visible breath.

He shouts the final line while performing a rapid three-step, a controlled 180° pivot and one enormous downward arm strike. On "GROUND," he stomps once. The bass returns with a massive impact; the LED floor sends a bro`,
    },
  },
  {
    id: "seedance-six-rooms-89",
    title: "一镜到底穿越六个房间",
    subtitle: "Pollo · Seedance 2.5 · 30秒",
    description:
      "跟随一个穿黑色大衣的人从左向右穿过六个相连房间。画面强调一镜到底、平稳跟随和不同色调氛围。提示词引用「图像1」但页面无参考图可下;原文在「参考」处截断,不补写。",
    video: "/tutorials/seedance-six-rooms-89/demo-web.mp4",
    poster: "/tutorials/seedance-six-rooms-89/poster.jpg",
    duration: "30 秒",
    shots: 1,
    references: 0,
    model: "Seedance 2.5",
    style: "一镜到底 · 空间变换",
    aspectRatio: "16/9",
    tags: [
      "30 秒 · 一镜到底 · 6 房间",
      "提示词含图像1 · 页面无参考图",
      "Seedance 2.5",
      "一镜到底 · 空间变换",
    ],
    steps: [
      {
        number: 1,
        title: "读懂空间连续性",
        description:
          "一镜到底横向跟拍穿过六个房间。每个房间保持白墙、人字拼浅色木地板、法式双开落地窗、白纱帘的共同结构,同时切换色调和氛围。提示词引用「图像1」,但页面无参考图可下。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:16:9 · 30 秒。有人物参考图可自备挂图像1;无参考图也可直接生成。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "保持一镜到底和稳定跟拍;锁定人物横向运动,用门框和房间连接完成空间过渡;六个房间的共同结构要连续可辨。注意:原提示词在「参考」处截断(作者原文),不补全。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:30 连续横向跟拍:黑色大衣人物从左向右穿过六个相连房间;每个房间保持白墙、人字拼浅色木地板、法式双开落地窗、白纱帘的共同结构,同时切换色调和氛围。教练提示:不要切镜;先锁定人物横向运动,再用门框和房间连接关系完成空间过渡。",
      },
    ],
    constraints:
      "一镜到底不切镜;平稳跟拍;六个房间共同结构连续可辨;变化集中在色调与氛围;提示词原文在「参考」处截断(作者原文,不补写);来源:Pollo/johnAGI168。提示词含图像1,但页面无参考图可下 · 不编造。",
    video_prompt: {
      title: "Six Rooms One Take · 30s · Continuous Follow",
      subtitle:
        "Seedance 2.5 · 16:9 · 图像1 mentioned but no ref available",
      content: `一镜到底,镜头平稳跟随一个穿黑色大衣的人(参考 图像1)从左向右穿过六个相连的不同色调、不同氛围的房间。每个房间结构相同:白墙、人字拼浅色木地板、法式双开落地 窗、白纱帘,参考`,
    },
  },
  {
    id: "burger-monster-battle-185",
    title: "麦当劳员工对战汉堡怪兽",
    subtitle: "Pollo · Seedance 2.5 · 30秒 · 1:1",
    description:
      "用「日常纪录片质感 + 荒诞超能力反转」做出 30 秒方形短片。先用疲惫员工在停车场吃快餐建立真实感,再用地裂、巨型汉堡怪兽和魔法薯条推到荒诞高潮,最后用孩子捡薯条收束。提示词含 Image1,但页面无参考图可下 · 不编造。",
    video: "/tutorials/burger-monster-battle-185/demo-web.mp4",
    poster: "/tutorials/burger-monster-battle-185/poster.jpg",
    duration: "30 秒",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "iPhone 纪录片 · 荒诞魔幻",
    aspectRatio: "1/1",
    tags: [
      "30 秒 · 1:1 方形 · 7 节拍",
      "提示词含 Image1 · 页面无参考图",
      "Seedance 2.5",
      "iPhone 纪录片 · 荒诞魔幻",
    ],
    steps: [
      {
        number: 1,
        title: "读懂五段式结构",
        description:
          "日常→地裂→怪兽→冷静反转→安静收尾。核心是用写实手持摄影、群体恐慌和主角的冷静反差形成记忆点。提示词提到 Image1 作为角色参考,但页面无参考图可下载。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:1:1 方形 · 30 秒 · 打开声音。有角色参考图可自备挂 Image1;无参考图也可直接生成。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "保持 iPhone 纪录片手持质感;practical VFX 不要太完美;主角极静 vs 群众恐慌的反差是核心。注意:原提示词在 The employee 处截断(作者原文),不补全。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:05 建立日常与真实感:麦当劳员工端着 Big Mac 和薯条走进午餐时段的停车场;车辆、顾客、员工和远处店内声音构成忙碌背景。教练提示:先把镜头当成路人手机:单次手持、轻微呼吸和自动对焦漂移,不要一上来就拍得像广告;用平静动作给后面的灾难留反差。",
      },
      {
        number: 2,
        description:
          "00:05–00:10 异常预兆到地裂:地面开始震动,汽车警报响起,人群停步;沥青突然裂开。教练提示:把声音和群众反应当作升级刻度,先让观众听见/看见不安,再展示裂缝;镜头保持不完美的重新取景。",
      },
      {
        number: 3,
        description:
          "00:10–00:15 怪兽登场与失控:巨型油腻汉堡怪兽从地下升起,奶酪拉丝;人群奔逃、车辆倒车相撞,怪兽击毁 SUV 并拔起路灯。教练提示:用前景碎片、摇晃和飞散垃圾做尺度参照;破坏要连续但克制,保持 practical VFX 的纪录片可信度。",
      },
      {
        number: 4,
        description:
          "00:15–00:19 反差主角回看镜头:镜头从混乱回到员工;所有人都在跑,员工几乎不动,先看怪兽,再看薯条。教练提示:这是整片的记忆点:让环境极吵、主角极静;用一个停顿和眼神把叙事重心从怪兽切回人物。",
      },
      {
        number: 5,
        description:
          "00:19–00:24 微小物件变成超能力:员工拿起一根薯条,薯条发出金色光;数百到数千根发光薯条在身边同步旋转,风吹动衣服、垃圾和餐巾。教练提示:先拍单根薯条的近距离魔法信号,再扩展到环绕群体;让金色反光落到汽车上,给 VFX 一个真实的光照依据。",
      },
      {
        number: 6,
        description:
          "00:24–00:28 一拍手完成反转:员工挑眉、打响指;薯条像制导导弹般射出,天空充满金色轨迹,汉堡怪兽被从各方向击中并解体成食物爆炸。教练提示:动作链要清楚:挑眉→响指→齐射→撞击→解体;用连续反应而非随机闪烁,确保观众读得懂因果。",
      },
      {
        number: 7,
        description:
          "00:28–00:30 安静的喜剧收尾:现场归于寂静,顾客小心出来;孩子捡起落下的薯条,员工淡定收尾。教练提示:高潮后必须留白;把音量和运动一起降下来,用一个小孩捡薯条的生活化动作把荒诞重新落回日常。",
      },
    ],
    constraints:
      "iPhone 纪录片手持;practical VFX 不完美;主角极静 vs 群众恐慌;提示词原文在 The employee 处截断(作者原文,不补写);来源:Pollo/egeberkina。提示词含 Image1,但页面无参考图可下 · 不编造。",
    video_prompt: {
      title: "Burger Monster Battle · 30s · 1:1 Square · 7 Beats",
      subtitle:
        "Seedance 2.5 · iPhone doc handheld · Image1 mentioned but no ref available",
      content: `100% real-life filmed texture, iPhone documentary look, handheld single take, natural lighting, subtle breathing camera movement, random autofocus hunting, slight rolling shutter, realistic motion blur, lens dirt on edges, grounded physics, practical VFX only, authentic crowd reactions.

Environment

A busy McDonald's parking lot during lunch hour. Cars constantly pulling in. Families walking out carrying trays. Employees moving between parked cars. The sound of traffic, birds, distant conversations and fryers from inside. Everything feels like a real viral phone video.

Main Character

Use Image1 as the exact character reference.

A tired McDonald's employee steps outside for a short break holding a tray with a Big Mac and fries. They look exhausted after a long shift.

30-Second Continuous Sequence

The employee slowly walks through the parking lot looking for somewhere to sit. They sigh, adjusting their hat while balancing the tray. Customers pass by without noticing them.

Suddenly the entire ground begins vibrating. Car alarms start going off. People stop walking. A deep rumbling grows louder beneath the asphalt.

The pavement violently cracks apart.

A gigantic greasy burger monster erupts from underground, built from enormous beef patties, dripping cheese, lettuce, onions and sesame buns. Melted cheese stretches everywhere as it rises several stories high.

The parking lot instantly erupts into panic. Cars reverse into each other. People drop their food and sprint away. Shopping bags fly through the air.

The burger monster roars and crushes a parked SUV with one massive bun-covered fist before ripping a light pole from the ground.

The handheld camera desperately follows the destruction, shaking as debris lands nearby.

The camera finally lands back on the employee.

Everyone else is running.

The employee barely reacts.

They calmly look at the monster...

...then at the fries.

With complete confidence, they pick up a single french fry.

The fry begins emitting a faint golden glow.

The glow intensifies.

Hundreds... then thousands... of glowing fries materialize around the employee, orbiting like a perfectly synchronized swarm, spinning faster and faster while casting warm reflections across nearby cars.

Wind generated by the spinning fries blows clothing, trash and napkins across the parking lot.

The employee slowly raises one eyebrow...

...and snaps their fingers.

Every fry instantly launches forward like precision-guided missiles.

The sky fills with streaks of golden fries.

They slam into the burger monster from every direction in a spectacular chain reaction.

Explosions of sesame seeds, lettuce, pickles, onions and cheese erupt into the air.

The monster completely disintegrates into a massive food explosion raining harmless ingredients across the parking lot.

Silence.

Customers cautiously emerge from hiding.

One child quietly picks up a falling fry.

The employee`,
    },
  },
  {
    id: "epic-desert-scene-38",
    title: "史诗沙漠风暴:装甲车逃亡",
    subtitle: "Pollo · Seedance 2.5 · 15秒",
    description:
      "用超大尺度沙尘暴建立压迫感,再切入驾驶舱手持视角制造临场恐慌,最后以装甲车飞跃沙丘、闪电与尘暴剪出高潮并切黑。无参考图 · 纯文生视频可跟做。",
    video: "/tutorials/epic-desert-scene-38/demo-web.mp4",
    poster: "/tutorials/epic-desert-scene-38/poster.jpg",
    duration: "15 秒",
    shots: 3,
    references: 0,
    model: "Seedance 2.5",
    style: "IMAX 史诗 · 灾难动作",
    aspectRatio: "16/9",
    tags: [
      "15 秒 · 3 段式 · 切黑收尾",
      "无参考图 · 纯文生视频",
      "Seedance 2.5",
      "IMAX 史诗 · 灾难动作",
    ],
    steps: [
      {
        number: 1,
        title: "读懂三段式结构",
        description:
          "00-05s 极端远景建立尺度;05-10s 切入驾驶舱恐慌视角;10-15s 跃起高潮慢动作+切黑。无参考图,纯文生视频。",
      },
      {
        number: 2,
        title: "打开 Seedance 2.5",
        description:
          "设置:16:9 · 15 秒 · 打开声音。不需要挂参考图。",
      },
      {
        number: 3,
        title: "粘贴完整视频提示词",
        description:
          "保持远景→车内→跃起的视角切换;IMAX 70mm 低饱和风格;三段时间码必须对齐;切黑收尾。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:05 尺度建立:超广角沙漠全景;数英里高的沙尘暴吞没地平线,微小装甲车队向前逃离。教练提示:先用极端远景做大小对比:人和车越小,灾难越不可控;低饱和、厚重云墙和持续紧张配乐锁定基调。",
      },
      {
        number: 2,
        description:
          "00:05–00:10 驾驶舱恐慌:切进头车驾驶舱,驾驶员喊「GO! GO!」并出现「MAX POWER!」字幕;车窗被沙尘冲刷,镜头剧烈抖动。教练提示:通过视角切换把宏观灾难变成身体体验;保留挡风玻璃遮挡、曝光波动和手持抖动,动作与声音同步。",
      },
      {
        number: 3,
        description:
          "00:10–00:15 跃起高潮:装甲车冲上巨型沙丘慢动作腾空,黑色风暴为剪影背景,尘云内闪电、碎片掠过镜头,落地冲击时切黑。教练提示:把动作顶点放在最后五秒;用逆光剪影和闪电做轮廓分离,冲击点切黑收尾,避免解释性镜头拖慢节奏。",
      },
    ],
    constraints:
      "IMAX 70mm 低饱和;三段时间码(00-05s/05-10s/10-15s);切黑收尾;来源:Pollo/Seedance 2.5/johnAGI168。无参考图 · 纯文生视频可跟做。",
    video_prompt: {
      title: "Epic Desert Scene · ~15s · 3 Beats",
      subtitle: "Seedance 2.5 · IMAX 70mm · Villeneuve Style · No References",
      content: `Style: IMAX 70mm Film, Denis Villeneuve Style, Gritty Realism, Epic Scale, Desaturated.Duration: 15s.[00-05s] Extreme Wide Shot (The Scale). A colossal sandstorm, miles high, swallows a vast desert landscape. A tiny convoy of armored military vehicles races away from it. The scale of nature vs man is terrifying. Hans Zimmer style tension.[05-10s] Cockpit Cam (The Panic). Inside the lead rover. The pilot screams "GO! GO!" (Subtitle: MAX POWER!). Camera shakes violently. Sand blasts the windshield. The sun is blocked out by the approaching wall of dust.[10-15s] The Jump (The Climax). The rover hits a massive dune and launches into the air (Slow Motion). Silhouette against the dark storm. Lightning strikes within the dust cloud. Debris flies past the lens. Cut to black on impact.`,
    },
  },
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
    aspectRatio: "16/9",
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
    aspectRatio: "16/9",
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
    aspectRatio: "16/9",
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
    aspectRatio: "16/9",
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
