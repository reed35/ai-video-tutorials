import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
  {
    id: "umesh-again-nature-ad",
    title: "AGAIN · 单图自然广告",
    subtitle: "X · @umesh_ai · 约30秒 · 16:9",
    description:
      "单张图片生成 30 秒自然广告：巨树雨雾景观的 15 个镜头，从水滴微距到航拍揭示，最后回归参考构图。成片 16:9 横屏，进入胶片条候选。",
    video: "/tutorials/umesh-again-nature-ad/demo-web.mp4",
    poster: "/tutorials/umesh-again-nature-ad/poster.jpg",
    duration: "30秒",
    shots: 15,
    references: 1,
    model: "图生视频 / 单图 master reference",
    style: "电影级自然广告 · 雨雾氛围",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/umesh_ai/status/2100823564505248175",
    tags: [
      "30秒 · 15 镜头",
      "16:9 横屏 · 进胶片条",
      "1 张 master 参考图",
      "单图生成 · 完整叙事",
      "雨雾自然景观",
    ],
    steps: [
      {
        number: 1,
        title: "读懂单图 master 参考策略",
        description:
          "整片 30 秒从单张巨树雨雾景观图衍生。提示词锁定参考中的树形、地形、光线、雾层与人物方位，所有 15 个镜头在同一场景内连续展开：微距水滴→航拍揭示→地面接近→树干仰望→环绕树根→手触湿皮→冠层雨幕→人物侧影→最终回到参考构图 + 字幕 AGAIN / Come back.。关键是维持树木几何、光线位置与雾层连续性，不跳切到其他地点，不重新设计树的样子。",
      },
      {
        number: 2,
        title: "上传 REF01 作为 master visual reference",
        description:
          "将 REF01.jpg（巨树雨雾景观图）上传作为 master reference。提示词中要求 Preserve reference's enormous solitary tree, trunk branches, emerald meadow, white flowers, water, valley walls, atmospheric depth。必须遵守这张参考的树木比例、分支架构、地形、水面位置与悬崖形态。16:9 横屏 · 24fps · 30s · 打开声音（连续雨声 + 最后一个低沉音符）。",
      },
      {
        number: 3,
        title: "粘贴完整 15-shot 提示词",
        description:
          "保持提示词完整，包括：参考连续性要求（树形、地形、光线）· 人物一致性（锈橙外套、从树前走到树根）· 15 个精确时间戳镜头（00:00–00:02 草尖水滴 → 00:28–00:30 回到参考构图 + 字幕）· 雨雾渐进规律（0–8s 细雨轻雾 → 17.5–23.5s 最密雨幕 → 25.5–30s 渐缓回光）· 声音设计（无旁白，连续雨声 + 滴水 + 呼吸 + 最后低音）· 字幕出现 00:28.2 AGAIN / Come back. 左下安全区，00:29.7 淡出。负面提示：无模型名瞎编/无跳切到其他地点/无重新设计树的外形/无戏剧摆姿/无金色时刻变换/无超自然 HDR 光晕。",
      },
    ],
    references_detail: [
      {
        id: "REF01",
        number: "REF01",
        title: "巨树雨雾景观 master 参考",
        subtitle: "单图衍生全片 · 锁定树形地形光线",
        image: "/tutorials/umesh-again-nature-ad/refs/REF01.jpg",
        prompt:
          "（无单独出图词；此参考图作为 master visual reference 上传，提示词中已要求 Preserve the reference's enormous solitary broad-canopied tree, distinctive trunk and branches, emerald meadow, white flowers, shallow foreground water, steep forest-covered valley walls and immense atmospheric depth. The closing landscape framing matches the reference, with the traveler now beside the tree's roots. Build every angle within this same landscape.）",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:02 草尖水滴：100mm 微距，雨滴挂在草尖上方，背景巨树柔焦，滴落瞬间银光边缘。教练提示：先建立最微小尺度，为后续航拍反差做铺垫。",
      },
      {
        number: 2,
        description:
          "00:02–00:04 水面倒影：50mm 低角度水池，树冠倒影充满水面，水滴落入引发涟漪打碎倒影。教练提示：承接上一镜水滴落下，连续雨声保持。",
      },
      {
        number: 3,
        description:
          "00:04–00:06.5 航拍揭示：24mm 广角高倾斜俯视，薄雾飘开，揭示巨树、湿草地、前景水面与陡峭森林谷壁。教练提示：从微观跳到宏观，声场打开成广阔雨空间，人物几乎看不见。",
      },
      {
        number: 4,
        description:
          "00:06.5–00:08.5 远长焦接近：135mm 跨草地压缩人物、发光树干与后方雾层，人迈一小步左→右靠近树根。教练提示：保持树巨大、人渺小；细雨在暗林前可见。",
      },
      {
        number: 5,
        description:
          "00:08.5–00:10 地面跟踪：24mm 贴草地高度横移跟靴子，雨水花草近前景视差，一只靴子踩草排水。教练提示：匹配行走方向，柔湿脚步声。",
      },
      {
        number: 6,
        description:
          "00:10–00:12 纪念碑般低仰角：21mm 从树根旁，湿树干缓慢仰拍到首个大分叉节点（不尝试根到顶全景）。教练提示：强调树皮肌理、巨大重量与自然不对称，顶部银光叶颤。",
      },
      {
        number: 7,
        description:
          "00:12–00:14 树根浅环绕：35mm 中广角腰高，绕树近侧 10–15° 浅弧，人迈最后一小步停在触手可及距离。教练提示：保持在已建立的动作侧，前景树根与远景峭壁视差；勿绕全圈重新设计树的背侧。",
      },
      {
        number: 8,
        description:
          "00:14–00:16 过肩邀请：50mm 人物身后取肩边缘，湿树干直前方，缓推令树皮更临在，人开始抬手朝它。教练提示：树干外后方柔银雾口透出细雨，保持广阔自然光，非戏剧聚光。",
      },
      {
        number: 9,
        description:
          "00:16–00:17.5 触觉树皮特写：100mm 近焦细节，手指轻触雨湿树皮（承接上一镜抬手），框取手的可信局部（非全掌扑向镜头），细溪流沿皮槽落在指旁。教练提示：缩窄声场到树皮水声、衣料与安静呼吸；解剖自然手指，无紧握。",
      },
      {
        number: 10,
        description:
          "00:17.5–00:20 冠层内仰视：18mm 枝下陡仰望稍外倾，缓微仰显露交错枝与叶层，雨从间隙落下，大滴从叶尖释放。教练提示：冠外更重雨幕对峭壁，庇护感亲密但仍湿；叶轻动，非同步波浪模式。",
      },
      {
        number: 11,
        description:
          "00:20–00:21.5 垂直俯视水坑细节：50mm 正俯同一外露树根旁，人将一只靴子挪几厘米入浅水坑定住姿势（未离开树），倒影树枝碎为柔波。教练提示：真实水深、小位移与底下泥；无大溅水/跺脚/新行走旅程。",
      },
      {
        number: 12,
        description:
          "00:21.5–00:23.5 安静人物侧影：85mm 紧侧影含肩与局部阴影脸，人站树干旁静止，唯缓呼气与轻微肩放松。教练提示：细滴挂发与锈橙衣料，后方雨幕成柔高光；无眼泪/美妆摆拍/夸张表情；让环境而非面部表演承载情感。",
      },
      {
        number: 13,
        description:
          "00:23.5–00:25.5 远侧景观：28mm 超广从草地侧，树、其近侧根与微小人仍地理一致，大致锁定构图。教练提示：一低阵风梳过近湿草，再轻搅外枝；一条雾带穿树干后不遮它；这是一次连贯自然事件，非暴风/气象重置/延时。",
      },
      {
        number: 14,
        description:
          "00:25.5–00:28 广角起落退离：24mm 始已广阔，缓升缓退，显露更多前景水并通过视差分离树与雾峭壁。教练提示：勿从人特写发射到山航拍；人留在树根，几乎在景观中消失。雨开始减弱；漫银光轻强于树冠；引入单个温暖克制乐音。",
      },
      {
        number: 15,
        description:
          "00:28–00:30 参考匹配英雄帧：落定参考景观构图——巨树居中偏右、暗林墙、发光草地与前景水，微小锈橙人现于左侧根旁。教练提示：雾飘冠后，细雨续；树感古老静默压倒。00:28.2 淡入小号常规体白字于清晰左下安全区：AGAIN / Come back.；勿盖人或树；无额外文案或编造标志；00:29.7 淡出，留景观干净到末帧。",
      },
    ],
    constraints:
      "必须单图 master reference（REF01）维持树形、分支架构、地形、水面与悬崖；雨雾光线连续性（0–8s 轻 → 17.5–23.5s 最密 → 25.5–30s 渐缓）；人物一致（锈橙外套从树前走到树根，无跳切他处）；15 个精确时间戳镜头；片尾字 00:28.2–00:29.7 AGAIN / Come back. 左下；无模型名瞎编/无跳地点/无重设计树/无金色时刻变换/无超自然光晕。来源 @umesh_ai · sourceImpressions 26896。",
    video_prompt: {
      title: "AGAIN · 30s · 16:9 · 15 shots",
      subtitle: "图生视频 / 单图 master reference · 电影级自然广告",
      content: `Prompt : Create a 30-second cinematic nature-retreat advertisement titled "AGAIN", using the uploaded image as the master visual reference. Exactly 15 shots, landscape 16:9, 24 fps, photorealistic imagery. The emotional journey: discovery, approach, touch, surrender, longing. Make the viewer feel physically present in cool, rain-soaked air. Nature is the hero; the traveler provides scale. Sell the feeling of being here.

REFERENCE AND CONTINUITY

Preserve the reference's enormous solitary broad-canopied tree, distinctive trunk and branches, emerald meadow, white flowers, shallow foreground water, steep forest-covered valley walls and immense atmospheric depth. The closing landscape framing matches the reference, with the traveler now beside the tree's roots.

Build every angle within this same landscape. Infer unseen surfaces conservatively. Maintain tree proportions, branch architecture, terrain, water placement and cliff formations across all cuts.

Use one adult traveler in the reference's muted rust-orange outer garment, dark trousers and plain dark boots. Keep clothing, proportions and appearance consistent. Mostly show them distant, from behind or in partial silhouette. No posing or theatrical gestures. They begin a few paces from the tree and gradually reach its near-side roots. No teleportation.

LIGHT, WEATHER AND TEXTURE

Cool, diffused storm daylight. A broad cloud opening above the valley's right ridge softly illuminates the tree against darker cliffs. Keep this light geographically consistent across angles. Deep emerald greens, blue-grey distance, charcoal wet bark, silver highlights and one muted rust-orange accent. Gentle contrast, rich shadows, subtle film grain, realistic depth of field. No golden-hour transformation, excessive HDR or supernatural glow.

Rain exists from the first frame. Show occasional soft foreground streaks, fine midground drops revealed by backlight and distant rain dissolving into haze. Water beads on leaves, runs along bark, darkens fabric and creates overlapping puddle ripples. Gravity and wind affect droplets consistently. The canopy interrupts direct rain, but branches still drip heavily. It is shelter, not a magically dry umbrella.

Use layered fog: almost transparent near the camera, thin drifting ribbons behind the tree, denser blue-grey mist concealing distant cliffs. Fog moves slowly through the valley rather than boiling or covering everything evenly. Preserve separation between trunk, canopy and background. The tree remains recognizable.

Weather progression: 0–8 seconds, delicate rain and drifting mist; 8–17.5 seconds, increasingly audible steady rain; 17.5–23.5 seconds, the fullest rain curtain and most enclosing atmosphere; 23.5–25.5 seconds, one gentle wind pulse; 25.5–30 seconds, softer rainfall and a subtle return of silver light. No sudden storm, weather reset or time-lapse.

CAMERA AND EDITING

Use physically plausible camera moves, one action and one movement per shot. Favor patient observation. Start moves already in progress so short shots do not feel hurried. No whip pans, speed ramps, spinning transitions or impossible acceleration. Scale rhythm: intimate detail, immense landscape, human experience, intimate detail, immense landscape.

Follow the exact cut points below. Use clean cuts, not morphs. During the approach, keep the traveler moving left to right toward the trunk. Carry rain and wind continuously across cuts.

15-SHOT TIMELINE

01 | 00:00.0–00:02.0 | EXTREME MACRO, GRASS AT THE WATER'S EDGE

100 mm macro, side-on at grass height, nearly stationary. A clear droplet hangs from the tip of one rain-darkened grass blade above shallow water. The meadow and massive tree are soft, recognizable shapes far behind it. The blade bows slightly; the droplet elongates and releases near the end. Silver light catches its edge without a fake sparkle. Hear one intimate water sound against distant rain.

02 | 00:02.0–00:04.0 | WATERLINE REFLECTION

50 mm, lens just above the same pool, low grazing angle. Begin with the tree's inverted reflection filling the water. The falling drop lands immediately, continuing Shot 01, and concentric ripples gently fracture the reflected canopy. Make a tiny forward drift, keeping the actual tree mostly outside the frame. Fine secondary rain impacts appear naturally. Cut on an expanding ring; do not morph the water into the next image.

03 | 00:04.0–00:06.5 | HIGH OBLIQUE AERIAL REVEAL

24 mm wide, elevated oblique view looking down the valley. A thin veil of mist drifts aside as the camera descends only slightly, revealing the same monumental tree, wet meadow, foreground water and steep forest walls. The person is almost imperceptible near the tree. Maintain natural perspective and the established terrain. The atmosphere opens sonically into a vast, rain-filled space.

04 | 00:06.5–00:08.5 | DISTANT TELEPHOTO APPROACH

135 mm from across the meadow, near human eye level. Compress the traveler, luminous trunk and layered fog behind them. The traveler takes one unhurried step left to right, already close to the near-side roots. Fine rain becomes visible against the dark forest. Nearly locked camera with a subtle push. Keep the tree monumental and the person small; this is not a fashion shot.

05 | 00:08.5–00:10.0 | GROUND-LEVEL TRACKING

24 mm, camera just above the wet grass, moving slowly beside the traveler's lower legs. Rain-laden white flowers and individual blades pass close to the lens with gentle foreground parallax. One boot presses the grass down, displacing a little surface water. The lower trunk stays ahead in the upper frame. Match the previous walking direction and use a soft, wet footstep.

06 | 00:10.0–00:12.0 | MONUMENTAL LOW ANGLE

21 mm from beside the near-side roots. Start on the broad, soaked trunk and slowly tilt upward into its first great branching junction, never attempting a full root-to-sky reveal in two seconds. Emphasize bark texture, immense weight and natural asymmetry. Silver-lit leaves tremble overhead. A few nearer rain streaks cross the lens; no artificial wide-angle stretching.

07 | 00:12.0–00:14.0 | SHALLOW ORBIT AT THE ROOTS

35 mm medium-wide, approximately waist height. Move through a restrained 10–15-degree arc around the near side of the tree, staying on the established side of the action. The traveler takes the last small step and stops within arm's reach of the trunk. Foreground roots shift gently against distant cliffs through parallax. Never perform a full circle or redesign the tree's unseen side.

08 | 00:14.0–00:16.0 | OVER-THE-SHOULDER INVITATION

50 mm from just behind the traveler, framing their shoulder at the edge and the wet trunk directly ahead. A subtle push brings the bark into greater presence. The traveler begins raising one hand toward it. Beyond the trunk, a soft silver opening in the fog reveals fine falling rain. Keep the light broad and natural, not a theatrical spotlight or laser beam.

09 | 00:16.0–00:17.5 | TACTILE BARK CLOSE-UP

100 mm close-focus detail. Continue the same hand movement as fingertips gently meet rain-soaked bark. Frame a small, believable portion of the hand rather than a full palm spread toward camera. A thin rivulet follows a bark groove beside the fingers and falls away. Anatomically natural fingers, subtle skin pressure, no gripping. Narrow the sound perspective to water on bark, fabric and quiet breath.

10 | 00:17.5–00:20.0 | UPWARD VIEW INSIDE THE CANOPY

18 mm, camera beneath the branches looking steeply upward and slightly outward. A slow, minimal tilt reveals the interlocking limbs and leaf layers of the same tree. Rain falls through gaps while larger drops release from leaf tips. Beyond the canopy edge, heavier rain forms a translucent curtain against the cliffs. The shelter feels intimate but remains wet. Leaves move gently, never as synchronized waving patterns.

11 | 00:20.0–00:21.5 | VERTICAL TOP-DOWN PUDDLE DETAIL

50 mm looking straight down beside the same exposed root. The traveler shifts one boot a few centimeters into a shallow puddle, settling their stance without leaving the tree. A reflected branch breaks into soft ripples. Show realistic water depth, a small displacement and mud beneath the surface. No large splash, stomping or new walking journey.

12 | 00:21.5–00:23.5 | QUIET HUMAN PROFILE

85 mm, tight side profile including shoulder and a partially shadowed face. The traveler stands beside the trunk, motionless except for a slow exhale and a slight release of shoulder tension. Tiny drops cling to hair and rust-orange fabric. The rain curtain becomes soft highlights behind them. No tears, beauty posing or exaggerated expression. Let the environment, not facial performance, carry the emotion.

13 | 00:23.5–00:25.5 | DISTANT LATERAL LANDSCAPE

28 mm ultra-wide from the meadow's side, with the tree, its near-side roots and the tiny traveler still geographically consistent. Mostly locked composition. One low gust combs through the nearby wet grass, then lightly stirs the outer branches. A ribbon of fog passes behind the trunk without concealing it. This is one connected natural event, not a violent storm.

14 | 00:25.5–00:28.0 | WIDE CRANE WITHDRAWAL

24 mm, beginning already wide. Rise and retreat slowly, revealing slightly more foreground water and separating the tree from the misty cliffs through parallax. Do not launch from a human close-up into a mountain aerial. The traveler remains at the roots, almost lost in the landscape. Rain starts easing; diffuse silver light gently strengthens across the crown. Introduce a single warm, restrained musical tone.

15 | 00:28.0–00:30.0 | REFERENCE-MATCHED HERO FRAME

Settle into the reference's landscape composition: enormous tree right of center, dark forest walls, luminous meadow and foreground water. The tiny rust-orange traveler now stands by the left-side roots. Fog drifts behind the canopy. Fine rain continues. The tree feels ancient and quietly overwhelming.

At 00:28.2, fade in small, regular-weight off-white typography in a clear lower-left safe area:

AGAIN
Come back.

Never cover the traveler or tree. No additional copy or invented logos. Fade text out by 00:29.7, leaving the landscape clean through the last frame. If accurate lettering is unavailable, leave the area empty for editorial typography.

SOUND AND REPLAY

No voice-over or dialogue. Layer fine rain on grass, brighter rain on leaves overhead, heavy canopy drips, wet footsteps, cloth movement, valley wind and quiet breathing. Keep rain continuous across cuts, adjusting its apparent distance to camera position. No thunder hits, trailer impacts, whooshes or orchestral climax.

Move from microscopic water detail to broad aerial ambience, back to intimate hand contact, then outward into the final landscape. Music stays absent until the last two shots: one low, warm sustained note beneath nature. Let this note disappear into the rainfall before the ending.

Let the final water texture and continuous rain lead back into the opening droplet. Replay feels like entering the same world again through a wide-to-macro cut, not a forced seamless morph. No fade to black, music sting or obvious stop.`,
    },
  },
  {
    id: "abxxai-riviera-fashion-campaign",
    title: "里维埃拉时尚大片 · 1960s",
    subtitle: "X · @abxxai · 约24秒 · 16:9",
    description:
      "24秒 1960s 意大利里维埃拉时尚大片：单人物单场景六镜头直切成片。工作流：人物表锁脸与衣柜 → 开场静帧锁光影 → 场景板锁地点 → Seedance 2.5 六镜分镜生成。墨镜状态按镜次变化，Kodachrome 胶片质感，手持摄影自然晃动。",
    video: "/tutorials/abxxai-riviera-fashion-campaign/demo-web.mp4",
    poster: "/tutorials/abxxai-riviera-fashion-campaign/poster.jpg",
    duration: "约24秒",
    shots: 6,
    references: 3,
    model: "Seedance 2.5",
    style: "1960s 时尚大片 · 胶片质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/abxxai/status/2100600840373535136",
    sourceAuthor: "@abxxai",
    sourcePlatform: "X",
    sourceImpressions: 51058,
    tags: [
      "约24秒 · 六镜头直切",
      "16:9 横屏",
      "Seedance 2.5",
      "1960s Kodachrome 胶片",
      "意大利里维埃拉",
      "时尚大片",
    ],
    steps: [
      {
        number: 1,
        title: "人物表：锁定面部与衣柜",
        description: `使用 GPT Image 2.5 制作人物角色表。上传清晰人脸照片，运行以下提示词生成人物表，锁定面部特征、发型、服装（奶油色红花头巾、猫眼墨镜、奶油色船领上衣、红色七分裤、平底鞋）。

提示词：
Create a photorealistic character reference sheet based on the woman in the image. Preserve her exact facial identity, structure, proportions and features.

Identity & realism:
Preserve her exact face shape, eyes, nose, lips, brows and hairline from the image
Fair-to-tanned skin with visible pores, faint freckles across the nose and cheeks, a natural sheen on the forehead and cheekbones, slight redness, tiny natural imperfections, no over-smoothing
Light brown hair with sun-bleached blonde tones, worn under the headscarf with loose strands escaping at the temples
Real skin, real hair, no stylization, no CGI look, no illustration

Pose & styling:
Relaxed neutral standing pose, arms loose at her sides
Fully dressed at all times: cream and red floral print silk headscarf tied under the chin with a long red tail hanging at the side; tortoiseshell cat-eye sunglasses; a fitted cream boat-neck short-sleeve top; high-waisted red cotton capri trousers; cream leather flat slingback shoes; small gold stud earrings; no other jewelry
Expression calm and neutral, sunglasses ON in the full body panels, sunglasses LOWERED on the nose in the beauty close-up panel

Look (same in every panel):
Warm faded 1960s Kodachrome film photograph, low contrast with lifted blacks, soft halation on highlights, fine film grain, gentle softness at the frame corners

Background: plain warm cream paper backdrop, flat and even, no environment, one soft directional shadow behind her

Layout:
Title at the top: "LENA RIVIERA — WARDROBE SHEET"
Top row, evenly spaced: Full Body Front, Full Body Side, Full Body Back
Bottom row, evenly spaced: Front Face Close-up, Three-Quarter Face Close-up, Left Profile Close-up, Beauty Close-up with sunglasses lowered, Headscarf Detail, Hand and Sleeve Detail

Design details:
Each frame enclosed in thin clean borders of consistent thickness
Above each frame a centered readable serif label naming the view
Labels never overlap the images

Final quality: ultra-detailed real film photography, identical face, hair and outfit in every panel, consistent light and color across all panels, clean symmetrical professional layout, no distortion`,
      },
      {
        number: 2,
        title: "开场帧：锁定光影与构图",
        description: `制作开场静帧作为后续视频生成的主参考。这一步是避免场景漂移的关键。使用 GPT Image 2.5 生成开场帧，锁定人物在场景中的初始姿态、光照方向、胶片质感。

提示词：
Photorealistic 1960s fashion editorial photograph of the woman in the reference image. Preserve her exact face, eyes, nose, lips, brows and hairline. Same wardrobe exactly: cream and red floral silk headscarf tied under the chin with the red tail hanging, tortoiseshell cat-eye sunglasses, fitted cream boat-neck short-sleeve top, high-waisted red capri trousers.

Wide full-body shot from a low three-quarter angle, camera about 4 metres away at waist height. She sits on the door of the pastel mint 1960s open-top convertible, one leg extended, one hand resting on the door, head turned toward the lens, chin slightly down, unsmiling. The low stone wall, the Mediterranean sea, the green headland, terracotta villas and umbrella pines fill the background.

Light: hard late-afternoon sun from camera left, warm and directional, crisp shadow edges on the car body and her legs, natural fill bouncing off the pale road and the mint paint, no artificial fill light.

Skin is never smooth: visible pores, faint freckles, fine peach fuzz on the cheek edge, natural sheen on the forehead and cheekbone, tiny imperfections, individual brow hairs, no retouching, no beauty filter.

Look: warm faded 1960s Kodachrome, slightly overexposed sky, low contrast with lifted blacks, soft halation on highlights, fine film grain, gentle softness at the frame corners, aged print border with edge wear.`,
      },
      {
        number: 3,
        title: "场景板：锁定地点与环境",
        description: `使用 GPT Image 2.5 制作场景板，锁定里维埃拉悬崖公路、薄荷绿敞篷车、石墙、地中海海景、山坡别墅等环境元素。无人物，仅环境。

提示词：
Create a photorealistic environment reference sheet of the location in the image, with no people anywhere in any panel.

Location: a narrow coastal cliff road on the Italian Riviera, a late summer afternoon in 1967. A pastel mint green 1960s open-top convertible parked at the edge, a low weathered stone wall, the glittering Mediterranean below, a green rocky headland, terracotta and ochre villas with a small domed church stacked up the hillside, umbrella pines and cypress trees, small white boats far out on the water.

Lighting lock, identical in every panel: hard late-afternoon sun from the left, warm and directional, crisp shadow edges, a slightly overexposed pale sky, warm bounce light off the pale road surface.

Panels:
Top, full width: Wide Establishing. The road, the parked mint convertible seen in three-quarter, the stone wall, the sea and the villas on the hillside.
Bottom left: The Car. The convertible close, showing the mint paintwork, chrome trim, the round side mirror, the thin black steering wheel, the cream-faced dashboard gauges and the empty cream leather seats.
Bottom right: The Wall and View. The low weathered stone wall in the foreground with the sea, the boats and the headland beyond.

Look, same in every panel: warm faded 1960s Kodachrome film photograph, low contrast with lifted blacks, soft halation on highlights, fine film grain, gentle softness at the frame corners.

Layout: title at the top "RIVIERA CLIFF ROAD — LOCATION PLATE". Each panel in thin clean borders with a centered readable serif label above it. Labels never overlap the images.

Final quality: ultra-detailed real film photography, the same place, same car and same light in every panel, no people, no distortion.`,
      },
      {
        number: 4,
        title: "Seedance 2.5 六镜头成片生成",
        description: `将前三步生成的人物表、开场帧、场景板上传至 Seedance 2.5，粘贴下方完整六镜头提示词。24秒直切六镜头：广角全身 → 低角度英雄镜 → 侧面轮廓 → 手部细节 → 回望走姿 → 美妆特写。墨镜状态按镜次变化（戴上 → 推到头巾 → 手持 → 摘下）。

完整提示词见下方"视频生成提示词"区域。`,
      },
    ],
    references_detail: [
      {
        id: "ref-character-sheet",
        number: "参考图 1",
        title: "人物表：Lena Riviera",
        subtitle: "GPT Image 2.5 · 角色锁定表",
        image: "/tutorials/abxxai-riviera-fashion-campaign/ref-character-sheet.jpg",
        prompt: `Create a photorealistic character reference sheet based on the woman in the image. Preserve her exact facial identity, structure, proportions and features.

Identity & realism:
Preserve her exact face shape, eyes, nose, lips, brows and hairline from the image
Fair-to-tanned skin with visible pores, faint freckles across the nose and cheeks, a natural sheen on the forehead and cheekbones, slight redness, tiny natural imperfections, no over-smoothing
Light brown hair with sun-bleached blonde tones, worn under the headscarf with loose strands escaping at the temples
Real skin, real hair, no stylization, no CGI look, no illustration

Pose & styling:
Relaxed neutral standing pose, arms loose at her sides
Fully dressed at all times: cream and red floral print silk headscarf tied under the chin with a long red tail hanging at the side; tortoiseshell cat-eye sunglasses; a fitted cream boat-neck short-sleeve top; high-waisted red cotton capri trousers; cream leather flat slingback shoes; small gold stud earrings; no other jewelry
Expression calm and neutral, sunglasses ON in the full body panels, sunglasses LOWERED on the nose in the beauty close-up panel

Look (same in every panel):
Warm faded 1960s Kodachrome film photograph, low contrast with lifted blacks, soft halation on highlights, fine film grain, gentle softness at the frame corners

Background: plain warm cream paper backdrop, flat and even, no environment, one soft directional shadow behind her

Layout:
Title at the top: "LENA RIVIERA — WARDROBE SHEET"
Top row, evenly spaced: Full Body Front, Full Body Side, Full Body Back
Bottom row, evenly spaced: Front Face Close-up, Three-Quarter Face Close-up, Left Profile Close-up, Beauty Close-up with sunglasses lowered, Headscarf Detail, Hand and Sleeve Detail

Design details:
Each frame enclosed in thin clean borders of consistent thickness
Above each frame a centered readable serif label naming the view
Labels never overlap the images

Final quality: ultra-detailed real film photography, identical face, hair and outfit in every panel, consistent light and color across all panels, clean symmetrical professional layout, no distortion`,
      },
      {
        id: "ref-start-frame",
        number: "参考图 2",
        title: "开场帧：悬崖边的瞬间",
        subtitle: "GPT Image 2.5 · 光影与构图锁定",
        image: "/tutorials/abxxai-riviera-fashion-campaign/ref-start-frame.jpg",
        prompt: `Photorealistic 1960s fashion editorial photograph of the woman in the reference image. Preserve her exact face, eyes, nose, lips, brows and hairline. Same wardrobe exactly: cream and red floral silk headscarf tied under the chin with the red tail hanging, tortoiseshell cat-eye sunglasses, fitted cream boat-neck short-sleeve top, high-waisted red capri trousers.

Wide full-body shot from a low three-quarter angle, camera about 4 metres away at waist height. She sits on the door of the pastel mint 1960s open-top convertible, one leg extended, one hand resting on the door, head turned toward the lens, chin slightly down, unsmiling. The low stone wall, the Mediterranean sea, the green headland, terracotta villas and umbrella pines fill the background.

Light: hard late-afternoon sun from camera left, warm and directional, crisp shadow edges on the car body and her legs, natural fill bouncing off the pale road and the mint paint, no artificial fill light.

Skin is never smooth: visible pores, faint freckles, fine peach fuzz on the cheek edge, natural sheen on the forehead and cheekbone, tiny imperfections, individual brow hairs, no retouching, no beauty filter.

Look: warm faded 1960s Kodachrome, slightly overexposed sky, low contrast with lifted blacks, soft halation on highlights, fine film grain, gentle softness at the frame corners, aged print border with edge wear.`,
      },
      {
        id: "ref-location-sheet",
        number: "参考图 3",
        title: "场景板：里维埃拉悬崖公路",
        subtitle: "GPT Image 2.5 · 环境锁定表",
        image: "/tutorials/abxxai-riviera-fashion-campaign/ref-location-sheet.jpg",
        prompt: `Create a photorealistic environment reference sheet of the location in the image, with no people anywhere in any panel.

Location: a narrow coastal cliff road on the Italian Riviera, a late summer afternoon in 1967. A pastel mint green 1960s open-top convertible parked at the edge, a low weathered stone wall, the glittering Mediterranean below, a green rocky headland, terracotta and ochre villas with a small domed church stacked up the hillside, umbrella pines and cypress trees, small white boats far out on the water.

Lighting lock, identical in every panel: hard late-afternoon sun from the left, warm and directional, crisp shadow edges, a slightly overexposed pale sky, warm bounce light off the pale road surface.

Panels:
Top, full width: Wide Establishing. The road, the parked mint convertible seen in three-quarter, the stone wall, the sea and the villas on the hillside.
Bottom left: The Car. The convertible close, showing the mint paintwork, chrome trim, the round side mirror, the thin black steering wheel, the cream-faced dashboard gauges and the empty cream leather seats.
Bottom right: The Wall and View. The low weathered stone wall in the foreground with the sea, the boats and the headland beyond.

Look, same in every panel: warm faded 1960s Kodachrome film photograph, low contrast with lifted blacks, soft halation on highlights, fine film grain, gentle softness at the frame corners.

Layout: title at the top "RIVIERA CLIFF ROAD — LOCATION PLATE". Each panel in thin clean borders with a centered readable serif label above it. Labels never overlap the images.

Final quality: ultra-detailed real film photography, the same place, same car and same light in every panel, no people, no distortion.`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description: "镜头 1 (0-4秒) — 广角全身建立镜头：低三分之二角度，距离4米腰部高度。她坐在车门上，手从墨镜移到车身，海风吹动红色围巾尾端。镜头慢推进。",
      },
      {
        number: 2,
        description: "镜头 2 (4-8秒) — 低角度英雄镜头：从地面近处低角度，距离约2米。她站在敞开的驾驶座旁，一手扶门框，重心移向一侧髋部，下巴缓缓抬起望向镜头外的大海。镜头缓慢上升至眼睛高度。",
      },
      {
        number: 3,
        description: "镜头 3 (8-12秒) — 侧面轮廓镜头：眼睛高度侧面轮廓，距离约2米。她站在石墙边望向大海，墨镜推到头巾里，露出双眼。海风吹起围巾尾端和鬓角发丝，她缓缓眨眼一次。镜头几乎静止。",
      },
      {
        number: 4,
        description: "镜头 4 (12-16秒) — 手部细节特写：距离约60厘米。她的手和前臂搭在方向盘上，手指放松，镀铬仪表板和奶油色仪表盘在旁，红色围巾尾端从画面顶部落下，海景在挡风玻璃外模糊。手指轻轻敲击方向盘一次。镜头缓慢沿镀铬装饰滑动。",
      },
      {
        number: 5,
        description: "镜头 5 (16-20秒) — 回望走姿镜头：四分之三后视角，眼睛高度，距离约3米。她沿着悬崖公路背对镜头走向停放的车，围巾和尾端清晰可见，墨镜拿在手中。约18.5秒时她转头越过左肩回望镜头，平静不笑。镜头跟随行走节奏。",
      },
      {
        number: 6,
        description: "镜头 6 (20-24秒) — 美妆特写镜头：头部和肩膀，眼睛高度，距离约80厘米。墨镜重新戴上。她用两指缓慢将墨镜沿鼻梁往下拉，直视镜头，越过墨镜上方看向镜头。一侧颧骨明亮侧光，另一侧柔和阴影。她保持凝视，影片在眼神定格中结束。镜头极慢推进至结束。",
      },
    ],
    constraints:
      "单角色单造型单地点 1960s 时尚大片工作流。人物表、开场帧、场景板需用 GPT Image 2.5 先行制作锁定面部、服装、光影、环境，再统一上传 Seedance 2.5 生成六镜头直切成片。墨镜状态按镜次变化：Shot 1-2 戴上，Shot 3 推到头巾，Shot 4 画面外，Shot 5 手持，Shot 6 戴上后摘下。来源 @abxxai / X / 51058 曝光。",
    video_prompt: {
      title: "Seedance 2.5 六镜头成片提示词",
      subtitle: "完整可复制提示词 · 24秒六镜头直切",
      content: `=== REFERENCE MAP ===
[COVER FRAME] → the reference photograph: the woman in the cream and red floral headscarf and tortoiseshell cat-eye sunglasses, cream boat-neck top and red capri trousers, seated on the door of the pastel mint 1960s convertible, one hand lowering her sunglasses, the low stone wall, the glittering sea, the green headland, terracotta villas and umbrella pines behind. This is the master for her face, her wardrobe, the light and the film look of every shot in the film.
@[lena] → wardrobe sheet. Her face, hair and the full outfit from every angle. Where the sheet and the cover frame differ on her face, the cover frame wins.
@[road] → location plate. The cliff road, the mint convertible, the stone wall, the sea, the hillside villas. Every shot happens inside this one location.

=== FILM FORMAT ===
A 24 second 1960s fashion cover film, 1080p, shot on 35mm. SIX shots, each about 4 seconds, joined by clean straight cuts on the music. This is edited coverage of a single real photo shoot: one model, one look, one location, one afternoon.
One character only. No second person, no crew, no photographer in frame, no camera or equipment visible anywhere.

=== LOOK LOCK, IDENTICAL IN ALL SIX SHOTS ===
Warm faded 1960s Kodachrome, low contrast with lifted blacks, a slightly overexposed pale sky, soft halation on highlights, fine even film grain, gentle softness at the frame corners, subtle gate weave.
Light never changes: hard late-afternoon sun from camera left, warm and directional, crisp shadow edges, warm bounce off the pale road lifting the shadow side of her face. No lamps, no fill cards, no lighting changes, no grade shifts between shots.
SKIN IS THE SUBJECT. In every shot: visible pores, faint freckles across the nose and cheeks, fine peach fuzz along the jaw and cheek edge, natural sheen on the forehead and cheekbones, tiny imperfections, individual lashes and brow hairs, flyaway hairs lit from behind. No smoothing, no beauty filter, no waxy or plastic skin, no retouching.
WARDROBE LOCK, never changes: cream and red floral silk headscarf tied under the chin with the red tail hanging, tortoiseshell cat-eye sunglasses, fitted cream boat-neck top, high-waisted red capri trousers, cream flat slingbacks, small gold studs.
CAMERA FEEL: every shot is handheld by a working stills photographer moving around his subject. Gentle continuous sway, small unhurried corrections, horizon 1 to 3 degrees off. Never jittery, never locked off, never gimbal-smooth. One single slow move per shot with a soft ease in and ease out, nothing more.

=== SHOT 1, 0.0 to 4.0s, WIDE ESTABLISHING ===
Frame 0.0 is [COVER FRAME]. Full body, low three-quarter angle from about 4 metres at waist height. She sits on the car door exactly as in the cover frame, then lowers her hand from the sunglasses to rest on the mint paintwork, settles her shoulders and turns her chin a fraction toward the lens. Sea wind moves the red scarf tail and loose strands at her temple.
CAMERA: slow push in from 4 metres to about 3 metres, easing in and out.

=== SHOT 2, 4.0 to 8.0s, LOW HERO ANGLE ===
CUT. Low angle from near the road surface, about 2 metres away. She is now standing beside the open driver's door, one hand on the top of the door frame, weight settling onto one hip, chin lifting slowly as she looks off past the lens toward the sea. Pale sky and the tops of the umbrella pines fill the upper frame, sun flaring softly off the chrome trim below.
CAMERA: slow rise from low to just under eye level as her chin lifts, the two moves finishing together.

=== SHOT 3, 8.0 to 12.0s, PROFILE IN THE WIND ===
CUT. Clean side profile at eye level, about 2 metres away. She stands at the low stone wall looking out to sea, spine straight, one hand on the wall. Her sunglasses are now pushed up into the scarf above her forehead and her eyes are bare. The wind lifts the scarf tail and the fine hairs at her temple sideways. She blinks once, slowly. The sun rakes across the bridge of her nose, her lashes and the edge of the scarf. The glittering sea and a distant white boat sit soft behind her.
CAMERA: almost still, only the natural handheld sway and a very slight drift closer.

=== SHOT 4, 12.0 to 16.0s, DETAIL, HAND AND CHROME ===
CUT. Tight detail about 60 cm away. She is back at the car, her hand and forearm resting on the thin black steering wheel, fingers relaxed, short natural nails, the chrome dash trim and the round cream-faced gauges beside her hand, the red scarf tail falling through the top of the frame, the sea blurred far beyond the windscreen. Her fingers move once, tapping the wheel lightly. Her face is out of frame or only a soft edge at the top.
CAMERA: slow drift along the chrome from the gauges to her hand, a bright specular streak travelling with it.

=== SHOT 5, 16.0 to 20.0s, WALK AND LOOK BACK ===
CUT. Three-quarter rear at eye level, about 3 metres away. She walks away from the lens along the cliff road toward the parked car, the tied scarf and the red tail reading clearly on her back, her sunglasses now held down at her side in one hand. At about 18.5s she turns her head back over her left shoulder into the lens, calm and unsmiling, and holds it. Her long shadow runs across the pale road, the sea and the villas ahead of her.
CAMERA: slow follow at walking pace, drifting a little closer as she turns.

=== SHOT 6, 20.0 to 24.0s, BEAUTY CLOSE-UP ===
CUT. Head and shoulders at eye level, about 80 cm away, her face filling most of the frame. The sunglasses are back on. She slowly lowers them down the bridge of her nose with two fingertips, exactly the gesture from the cover frame, and looks directly over the top of them into the lens. One clean bright side light across one cheekbone, a soft warm shadow down the other side, a small catch-light in each eye. Every pore, freckle and fine hair readable. She holds it. The final frame is a still hold on her eyes as the film ends.
CAMERA: extremely slow push in through the whole shot, coming to rest at the end.

=== HARD RULES ===
Exactly 24 seconds. Exactly six shots. Straight cuts only, on the beat, at 4.0, 8.0, 12.0, 16.0 and 20.0 seconds.
NO dissolves, fades, wipes, whips, flash frames, speed ramps, slow motion, freeze frames, digital zoom, split screens, filters, light leaks, text, captions, logos or watermarks.
The same woman, the same face and the same outfit in all six shots. No wardrobe change, no hair change, no makeup change.
Her sunglasses state is exactly: on in shot 1 and 2, pushed up into the scarf in shot 3, out of frame in shot 4, in her hand in shot 5, on and then lowered in shot 6. Never any other state.
One move per shot only. The camera never combines a push with a pan or a rise.
The location matches @[road] in every shot. The camera never leaves this cliff road and the car is never moved or driven.
Her poses are natural model poses with a visible beginning, middle and end. She settles into each one at human speed. Nothing snaps, jerks, teleports or holds unnaturally still. She is never frozen and never contorted.
No dialogue. She never speaks and her mouth stays closed and relaxed.
No other people, no crew, no photographer, no reflections of a camera in the chrome, the mirror or her sunglasses.
The light and the grade in the last frame are identical to the first.

=== AUDIO ===
One continuous original instrumental for the whole 24 seconds: a soft, warm 1960s Riviera bossa nova. Nylon string guitar, brushed drums, a light upright bass and a distant vibraphone, unhurried and gentle, no vocals, no lyrics, no drop, no build. It starts at 0.0s and plays evenly to the end.
Underneath it, quiet natural ambience: a light sea breeze, the sea far below, faint cicadas, the scarf fabric moving in the wind. No dialogue, no shutter sounds, no sound effects on any cut, no whooshes.

=== OUTPUT ===
24 seconds, 1080p, six shots, straight cuts, warm faded 1960s Kodachrome fashion film, one locked character, original instrumental score, no dialogue.`,
    },
  },
  {
    id: "shanghai-scallion-pancake",
    title: "老上海葱油饼",
    subtitle: "X · 369Serena · 30秒 · 16:9",
    description:
      "清晨老上海弄堂口的传统葱油饼小铺，展现完整制作过程：揉面、切葱、擀开抹猪油、卷起盘圆、煎制、入炉烘香、掰开展示层层酥脆。日式动漫美食电影风格，节奏明快，细节丰富。作者槽点：忘了放猪油。",
    video: "/tutorials/shanghai-scallion-pancake/demo-web.mp4",
    poster: "/tutorials/shanghai-scallion-pancake/poster.jpg",
    duration: "30秒",
    shots: 10,
    references: 0,
    model: "Seedance 2.5",
    style: "日式动漫美食 · 老上海街边",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/369Serena/status/2100887564274348245",
    sourceAuthor: "@369Serena",
    sourcePlatform: "X",
    tags: [
      "30秒 · 10 制作节拍",
      "无参考图 · 纯文生可跟做",
      "Seedance 2.5",
      "日式动漫美食电影风格",
      "外脆内软层次感",
    ],
    steps: [
      {
        number: 1,
        title: "读懂美食制作节奏",
        description:
          "清晨开场→揉面→切葱→擀开抹油→卷起盘圆→压饼→煎制→翻面→入炉烘香→掰开展示。核心是真实制作物理（面团形变、葱花散落、油光）+ 层次感展示（外脆内软）+ 老上海氛围（石库门、木窗、晨光）。",
      },
      {
        number: 2,
        title: "选择模型与设置",
        description:
          "Seedance 2.5。16:9 · 30s · 打开声音（轻快爵士器乐 + ASMR 烹饪音效：揉面、切葱、擀面、滋啦声、酥壳断裂）。无需参考图。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "保持清晨暖光；面团柔软形变；葱花真实散落；煎制物理（气泡、焦斑）；烘炉暖橙色光；掰开展示层次与热气；负面提示：无文字/无超现实变形/保持视觉一致性。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–2s 清晨弄堂：近景从木窗向内移动，晨光斜照案板，摊主放下醒好的面团。面团轻轻变形，表面光泽。",
      },
      {
        number: 2,
        description:
          "2–4.5s 揉压面团：斜俯拍特写，掌根推压折叠面团，面粉飞扬，留下揉压痕迹。",
      },
      {
        number: 3,
        description:
          "4.5–6.5s 切葱：微距侧拍，刀刃有节奏地切出细小均匀葱花，葱白与翠绿交错，切口湿润。",
      },
      {
        number: 4,
        description:
          "6.5–9s 擀开抹油：擀成薄长面片，用小勺抹开半凝固猪油形成油膜，撒盐和葱花自然散落。",
      },
      {
        number: 5,
        description:
          "9–12s 卷起盘圆：从长边卷成细长面卷，再从一端盘成螺旋形，末端压在底部。葱花包入层层面皮。",
      },
      {
        number: 6,
        description:
          "12–14s 压成圆饼：低角度特写，手掌缓缓压下螺旋面团，形成厚实小圆饼，表面留有盘卷纹理。",
      },
      {
        number: 7,
        description:
          "14–17s 入锅煎制：圆饼放入热油锅，接触瞬间出现气泡，通过时间跳切，饼边染上金黄色。",
      },
      {
        number: 8,
        description:
          "17–19.5s 翻面：低机位微距，铲起翻面，露出金黄焦斑与鼓泡，落回锅中滋啦作响。",
      },
      {
        number: 9,
        description:
          "19.5–22s 入炉烘香：送入小烘炉，暖橙色炉光映亮饼面，时间跳切至表面酥脆、焦斑加深，热气逸出。",
      },
      {
        number: 10,
        description:
          "22–30s 掰开与展示：双手隔牛皮纸掰开，外层酥壳裂开，内部柔软层层面皮与翠绿葱花显现，热气升起。最终两半放在竹盘中，镜头后拉带出弄堂，自行车铃声收尾。",
      },
    ],
    constraints:
      "清晨暖光；真实面团物理；葱花自然散落；煎制气泡与焦斑；烘炉暖光；掰开层次感；保持视觉一致性；来源 369Serena/X；Seedance 2.5。",
    video_prompt: {
      title: "老上海葱油饼 · Shanghai Scallion Pancake · 30s · 16:9",
      subtitle: "Seedance 2.5 · 日式动漫美食电影风格",
      content: `Seedance 2.5 中文提示词｜老上海葱油饼

创作一支 30 秒、节奏明快、具有电影感的日式动漫美食视频，内容是在老上海街边小吃铺制作传统葱油饼，并且完全根据以下文字描述生成。

主角是一张厚实、小巧、圆形的上海葱油饼：
表面金黄，带有深浅自然的焦斑，
外壳酥脆，内部柔软，具有清晰的面皮层次与葱花。
采用先煎后烘的制作过程。
通过自然的时间跳切，表现实际需要更长时间的揉面、煎制与烘烤。

重要要求：
不要展示、重现、描摹、参考或模仿任何分镜图、草图、参考图、画格、标注或源素材。
只生成原创的日系动漫风格动画。
场景、食物、器具与生活细节体现老上海传统小吃铺的氛围。

风格（STYLE）

高质量日本动画电影风格，
具有电影感的清晨暖光，
食物材质超细节表现，
真实的面团形变与烹饪物理效果，
可见的轻微热气与锅边油烟，
浅景深，
微距特写镜头，
顺滑而克制的镜头运动。

场景是一间位于上海老弄堂口的传统葱油饼小铺。
深色木质操作台、旧铁煎锅、嵌在灶台中的小烘炉，
背景隐约可见石库门门框、灰砖墙与木窗。
环境整洁，器具带有长期使用形成的自然痕迹。

晨光从铺面一侧斜照进来，
照亮面粉颗粒、面团上的薄油光和升起的热气。
色彩以暖金色、木褐色、灰砖色与鲜葱绿色为主。
环境作为柔和背景，镜头始终以食物和制作动作作为主体。

只出现同一位摊主的双手与前臂，
穿着素色棉布袖口，不展示人物面部。

整体剪辑快速而富有韵律。
通过动作方向、圆形轮廓、食材质感与相近构图进行自然匹配剪辑（match cuts）。
每个镜头只有一个清晰的主要动作。
关键的擀压、翻面、出炉与掰开动作保持连贯。

时间轴（TIMELINE）

0–2 秒 —— 老弄堂里的清晨
近景镜头从小铺木窗边缓缓向内移动。
清晨阳光斜落在木质案板上。
摊主将一块已经醒好的柔软面团放在案板中央。
面团落下时轻轻变形，表面细腻，带有柔和光泽。
背景中的石库门与灰砖墙保持虚化。

2–4.5 秒 —— 揉压面团
切换至案板上方的斜俯拍特写。
掌根向前推压面团，再将其折回。
面团随着手掌自然伸展、折叠，呈现柔软而有韧性的质感。
案板上的少量面粉被推开，留下清晰的揉压痕迹。

4.5–6.5 秒 —— 切葱
微距侧拍：洗净并沥干的青葱整齐放在案板上。
刀刃有节奏地落下，切出细小均匀的葱花。
葱白与翠绿葱叶交错散开。
切口湿润，新鲜葱段随着刀刃轻轻跳动。
镜头沿刀刃前进的方向短距离跟随。

6.5–9 秒 —— 擀开与抹油
通过手部向前移动的动作匹配，切换到擀面镜头。
一份面剂被擀成较薄的长形面片。
用小勺背将少量半凝固的猪油均匀抹开，
在面片上形成一层薄薄的润泽油膜。
随后撒上少量盐和切好的葱花。
葱花自然散落在面片上，不堆成厚厚一团。

9–12 秒 —— 卷起与盘圆
保持同一个斜俯拍镜头。
双手从面片长边开始，将其卷成细长面卷。
随后把面卷从一端盘成紧凑的螺旋形，
将末端轻轻压在底部。
面团随着手指弯曲，葱花被包入层层面皮之间。
动作清楚、连续，面团不突然改变形状。

12–14 秒 —— 压成圆饼
切换到贴近案板的低角度特写。
手掌缓缓压下螺旋面团，形成厚实的小圆饼。
饼身逐渐展开，边缘自然变圆，
表面仍保留淡淡的盘卷纹理，
局部能看到薄面皮下透出的绿色葱花。

14–17 秒 —— 入锅煎制
利用圆饼的轮廓进行匹配剪辑，切到旧铁煎锅的斜俯拍。
摊主将圆饼平稳放入带有薄层热油的锅中。
接触锅面的瞬间，饼边出现细密气泡。
热油沿圆饼边缘轻轻流动。
通过一次自然的时间跳切，
表现饼边逐渐定型，并染上浅金黄色。

17–19.5 秒 —— 翻面
低机位微距特写。
金属锅铲从饼底完整托起，将葱油饼翻面一次。
翻转时露出已经煎成金黄色的一面，
表面分布着深浅不一的焦斑与细小鼓泡。
圆饼落回锅中，响起清脆的滋啦声。
饼身保持完整，厚度与大小不变。

19.5–22 秒 —— 入炉烘香
侧面近景。
摊主用长柄铲将煎至两面金黄的葱油饼送入小烘炉，
平放在炉内烤架上。
暖橙色炉光映亮饼面。
以时间跳切切至炉口特写：
葱油饼表面变得更干爽酥脆，
边缘的薄面层略微翘起，焦斑颜色加深。
轻微热气从炉口缓缓逸出。

22–24 秒 —— 出炉
镜头跟随长柄铲向外移动。
烘好的葱油饼被轻轻放到木台上的金属沥油网上。
落下时发出轻微而干脆的触碰声。
晨光掠过起伏的饼面，
细致表现酥壳、焦斑与少量露出的葱花。
表面只保留薄薄油光，不滴油。

24–27 秒 —— 掰开特写
极近距离拍摄。
双手隔着一张无文字的牛皮纸，轻轻掰开葱油饼。
外层酥壳先出现裂纹，随后自然断开，
少量金黄色碎屑落在纸上。
内部柔软的面层随动作短暂牵连，再缓缓分开。
断面露出层层面皮与翠绿、深绿交错的熟葱花，
细薄热气从中心升起。
重点表现外脆内软的质感。

27–30 秒 —— 最终展示（Hero Reveal）
两半葱油饼放在铺有无文字牛皮纸的竹编小盘中，
其中一半略微倾斜，清楚展示内部层次。
金黄酥壳、深色焦斑、柔软面层与葱花同时可见。

镜头从断面微距缓慢后拉，
逐渐带出木质窗台和虚化的老上海弄堂。
清晨暖光照亮薄薄升起的热气，
远处隐约传来一声自行车铃。
以温暖、朴素而精致的动漫美食电影感结尾。

音频（AUDIO）

轻快、温暖、带有老上海清晨气息的爵士器乐，
速度为 105–115 BPM，
使用柔和钢琴、拨弦低音提琴与轻巧的刷奏鼓，
加入少量温润的单簧管旋律。
无歌词、无人声旁白。
音乐保持轻盈，不盖过制作声音。

同步加入真实、细腻的 ASMR 烹饪音效：
面团落在案板上的轻响、
掌根揉压面团的声音、
有节奏的切葱声、
擀面杖滚动声、
撒落葱花的细微声响、
圆饼入锅后的滋啦声、
锅铲接触铁锅的声音、
出炉后轻放在金属网上的声音、
牛皮纸轻轻摩擦的声音、
以及掰开酥壳时清晰的碎裂声。

掰开葱油饼时，适当降低背景音乐，
突出外壳断裂的酥脆声音。
结尾用一声远处轻巧的自行车铃自然收尾。

负面约束（NEGATIVE）

不要出现任何：
分镜图、参考图、草图、画格、边框、数字、箭头、标注、
字幕、说明文字、UI、Logo、水印或文字叠加。

不要出现其他菜品。
不要加入鸡蛋、芝士、火腿、辣酱或无关配料。
不要把葱油饼制作成薄脆煎饼、手抓饼、披萨或带大块馅料的馅饼。
不要出现芝士式拉丝、夸张爆汁或不合理的食物膨胀。
不要出现浓烟、火焰包围食物或过量飞溅的热油。
不要出现现代塑料包装、霓虹灯或日式店铺装饰。

避免多余手指、手部穿透食物、厨具变形，
以及面团、葱花或成品突然增多、消失、变换形状。

确保整支视频中的：
同一张葱油饼的大小与厚度、
摊主的双手与衣袖、
厨具、操作台、光线方向与小铺环境
都保持视觉一致性。`,
    },
  },
  {
    id: "anime-katsudon",
    title: "日式猪排饭 Katsudon",
    subtitle: "X · Goodmanprotocol · 30秒 · 16:9",
    description:
      "完整展示日式炸猪排盖饭制作流程：敲打猪肉、裹面包糠、油炸、切片、煨煮洋葱与高汤、滑蛋、盖浇米饭。快节奏动漫美食电影风格，搭配80年代日式城市流行乐器乐与ASMR烹饪音效。",
    video: "/tutorials/anime-katsudon/demo-web.mp4",
    poster: "/tutorials/anime-katsudon/poster.jpg",
    duration: "30秒",
    shots: 11,
    references: 0,
    model: "Seedance 2.5",
    style: "日式动漫美食 · 快节奏",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Goodmanprotocol/status/2098845134326808734",
    sourceAuthor: "@Goodmanprotocol",
    sourcePlatform: "X",
    tags: [
      "30秒 · 11 制作节拍",
      "无参考图 · 纯文生可跟做",
      "Seedance 2.5",
      "日式动漫美食电影风格",
      "80年代城市流行乐",
    ],
    steps: [
      {
        number: 1,
        title: "读懂美食制作节奏",
        description:
          "敲打猪肉→裹粉→炸制→切片→煨煮高汤洋葱→加入炸猪排→淋蛋液→滑蛋凝固→准备米饭→盖浇成品→英雄展示。核心是真实烹饪物理（面糊附着、油泡、蛋液流动）+ 快速剪辑匹配 + 日式厨房氛围。",
      },
      {
        number: 2,
        title: "选择模型与设置",
        description:
          "Seedance 2.5。16:9 · 30s · 打开声音（80年代日式城市流行乐器乐 + ASMR 烹饪音效：敲打、油炸滋啦、刀切、气泡、蛋液倾倒）。无需参考图。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "保持温暖日式厨房光；真实食材纹理；面糊附着物理；油炸气泡细节；蛋液半熟微颤；米饭光泽；负面提示：无文字叠加/无不相关食材/保持一致性。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–2.5s 准备猪肉：特写双手用木槌敲打厚猪里脊，肉逐渐变薄，纤维松弛，均匀撒盐和胡椒。清脆有节奏的敲打声。",
      },
      {
        number: 2,
        description:
          "2.5–5s 裹面包糠：快速匹配剪辑——猪肉按入面粉、浸入打散的蛋液、牢固裹上粗面包糠。真实蛋液滴落与面包糠附着。",
      },
      {
        number: 3,
        description:
          "5–7.5s 油炸：将裹好的猪排放入热油，猛烈气泡包围炸猪排，外壳变成金黄酥脆。温暖电影光与细腻油流动。",
      },
      {
        number: 4,
        description:
          "7.5–9.5s 切片：炸好的猪排放在木板上，锋利的刀切成均匀条状，酥脆外壳自然裂开，露出多汁白色猪肉，轻微蒸汽逸出。",
      },
      {
        number: 5,
        description:
          "9.5–12s 煨煮高汤与洋葱：切薄的洋葱在琥珀色高汤中的浅锅里轻轻煨煮，小气泡升起，洋葱变透明。筷子轻轻拨动。",
      },
      {
        number: 6,
        description:
          "12–14s 加入猪排：用筷子将切好的炸猪排小心放在煨煮的洋葱上，汤汁开始浸入酥脆边缘，蒸汽升起。",
      },
      {
        number: 7,
        description:
          "14–16.5s 淋蛋液：缓慢倾倒打散的金黄蛋液在猪排和洋葱上，蛋液自然流过缝隙，热边缘开始凝固。",
      },
      {
        number: 8,
        description:
          "16.5–19s 滑蛋凝固：特写蛋液在小火上轻轻凝固，边缘变软金黄，中心保持光泽、微流动、微颤。无搅拌。",
      },
      {
        number: 9,
        description:
          "19–21s 准备米饭：白色陶瓷丼碗盛满蒸腾的日本短粒米饭，米饭看起来蓬松且略带光泽。",
      },
      {
        number: 10,
        description:
          "21–24s 盖浇：小心将锅中的蛋液猪排混合物滑入米饭上，蛋液自然落成柔和波浪，高汤轻微浸入米饭。",
      },
      {
        number: 11,
        description:
          "24–30s 英雄展示：完成的猪排饭静置在台面上，光泽蛋液慢慢落在猪排和米饭上，轻轻颤动。慢速电影推进。最终呈现在传统蓝白陶瓷碗中的成品，金色蛋液覆盖酥脆猪排盖在光泽米饭上，顶部新鲜三叶草，蒸汽升起，镜头缓慢环绕碗身，以美丽的动漫美食电影感结尾。",
      },
    ],
    constraints:
      "温暖日式厨房光；真实食材纹理；面糊附着与油炸物理；蛋液半熟微颤；米饭光泽；保持一致性；来源 Goodmanprotocol/X；Seedance 2.5。",
    video_prompt: {
      title: "日式猪排饭 Katsudon · 30s · 16:9",
      subtitle: "Seedance 2.5 · 日式动漫美食电影风格",
      content: `Create a 30-second fast-paced cinematic Japanese anime cooking video showing the preparation of authentic katsudon, entirely from the text description below.

IMPORTANT: Do not display, recreate, trace, reference, or imitate any storyboard, sketch, reference image, panel, annotation, or source material. Generate only original anime-style animation.

STYLE

High-quality Japanese anime film style, cinematic summer lighting, ultra-detailed food textures, realistic cooking physics, visible steam and moisture, shallow depth of field, macro close-ups, smooth camera movement, warm Japanese kitchen atmosphere. Fast rhythmic editing with natural match cuts based on movement, shape, texture, and composition.

TIMELINE

0–2.5s — Prepare Pork
Close-up of hands pounding a thick pork loin with a wooden mallet on a cutting board. The meat gradually flattens and its fibers loosen. Sprinkle salt and pepper evenly. Crisp rhythmic impacts.

2.5–5s — Bread the Pork
Quick match cuts: press the pork into flour, dip into beaten egg, then firmly coat with coarse panko breadcrumbs. Show realistic egg dripping and breadcrumbs adhering to the surface.

5–7.5s — Fry
Lower the breaded pork into hot golden oil. Intense bubbling surrounds the cutlet as the crust turns golden brown and crispy. Warm cinematic lighting and detailed oil movement.

7.5–9.5s — Slice
Place the fried tonkatsu on a wooden board. A sharp knife cuts it into even strips. The crispy crust cracks naturally, revealing juicy white pork with gentle steam escaping.

9.5–12s — Simmer Dashi & Onion
Thinly sliced onions gently simmer in amber dashi inside a shallow pan. Small bubbles rise while the onions become translucent. Chopsticks gently move them through the broth.

12–14s — Add Tonkatsu
Place the sliced tonkatsu carefully over the simmering onions using chopsticks. The broth begins soaking into the crispy edges while steam rises.

14–16.5s — Pour Egg
Slowly pour beaten golden egg over the tonkatsu and onions. The egg spreads naturally through the gaps and begins setting around the hot edges.

16.5–19s — Set the Egg
Close-up of the egg gently coagulating over low heat. Edges become soft and golden while the center remains glossy, slightly runny, and trembling. No stirring.

19–21s — Prepare Rice
A white ceramic donburi bowl receives a generous mound of steaming Japanese short-grain rice. The rice looks fluffy and slightly glossy.

21–24s — Assemble
Carefully slide the egg-and-tonkatsu mixture from the pan onto the rice. The egg settles naturally in a soft wave while dashi lightly absorbs into the rice.

24–26s — Final Close-Up
The finished katsudon rests on the counter. Glossy egg slowly settles over the tonkatsu and rice, gently trembling. Slow cinematic push-in.

26–30s — Hero Reveal
Present the finished katsudon in a traditional blue-and-white ceramic bowl on a wooden surface. Golden egg covers crispy tonkatsu over glossy rice, topped with fresh mitsuba. Steam rises as the camera slowly arcs around the bowl for a beautiful anime-food-film ending.

AUDIO

Bright 1980s-inspired Japanese city-pop instrumental, 110–120 BPM, with subtle koto and light chime percussion. Synchronize realistic ASMR cooking sounds: mallet impacts, knife slicing, frying sizzle, bubbling dashi, chopsticks, egg pouring, steam, and a soft ceramic clink.

End with one delicate wind-chime tone during the final reveal.

NEGATIVE

No storyboard, reference image, sketch, panels, borders, numbers, arrows, annotations, subtitles, captions, UI, logos, or text overlays. No unrelated ingredients or dishes. Katsudon only. Keep the food, hands, utensils, lighting, and environment visually consistent throughout.`,
    },
  },
  {
    id: "husky-kisaragi-precision-brand",
    title: "精密部品品牌片 · 看不见的精度",
    subtitle: "X · @husky__create · 约10秒 · 16:9",
    description:
      "日本精密零部件企业品牌视频：通过女性技术者的日常工作，展现「看不见的精度」——普通人看不到的小部件支撑着社会与产业。工作流程：先用 GPT Image 2.5 生成九宫格分镜，再将分镜作为参考输入 Gemini Omni 1.1 Flash 生成 10 秒成片（含音乐与剪辑）。",
    video: "/tutorials/husky-kisaragi-precision-brand/demo-web.mp4",
    poster: "/tutorials/husky-kisaragi-precision-brand/poster.jpg",
    duration: "约10秒",
    shots: 9,
    references: 1,
    model: "GPT Image 2.5 → Gemini Omni 1.1 Flash",
    style: "企业品牌片 · 实拍质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/husky__create/status/2100519237131395288",
    sourceAuthor: "@husky__create",
    sourcePlatform: "X",
    sourceImpressions: 38860,
    tags: [
      "约10秒 · 企业品牌片",
      "16:9 横屏",
      "GPT Image 2.5 → Gemini Omni 1.1 Flash",
      "九宫格分镜 → 成片",
      "实拍质感 · 制造业",
    ],
    steps: [
      {
        number: 1,
        title: "用 GPT Image 2.5 生成九宫格分镜",
        description:
          "使用下方完整的分镜提示词，让 GPT Image 2.5 生成 3×3 九宫格分镜参考图。九宫格包含从工厂外观、技术者装备、切削加工、测定、设计确认到成品展示的 9 个关键镜头，每个镜头标注编号 01-09。",
      },
      {
        number: 2,
        title: "将九宫格分镜输入 Gemini Omni 1.1 Flash",
        description:
          "将生成的九宫格分镜图作为视觉参考，连同下方成片提示词一起输入 Gemini Omni 1.1 Flash。提示词中明确说明「完成动画では、9コマ画像、枠線、番号、分割状態を一切表示しない」，确保成片为连续流畅的视频而非九宫格显示。",
      },
      {
        number: 3,
        title: "生成含音乐与剪辑的 10 秒成片",
        description:
          "Gemini Omni 1.1 Flash 会根据分镜参考和详细的镜头时间轴（0.0-1.1秒外观、1.1-2.1秒走廊、2.1-3.0秒装备护目镜等），生成包含配乐（钢琴 + 金属打击乐）和旁白的完整 10 秒品牌视频。",
      },
    ],
    references_detail: [
      {
        id: "storyboard-9grid",
        number: "参考",
        title: "九宫格分镜",
        subtitle: "GPT Image 2.5 生成 · 3×3 镜头设计",
        image: "/tutorials/husky-kisaragi-precision-brand/storyboard.jpg",
        prompt:
          "使用 GPT Image 2.5 生成的分镜参考，包含 01-09 九个关键镜头：工厂外观、走廊、装备护目镜、切削加工、测定、设计确认、团队讨论、成品展示、产品特写。每个镜头都标注编号，便于后续成片时按顺序展开。",
      },
    ],
    storyboard: [
      { number: 1, description: "朝の低い日差しを受ける工場外観。主人公が作業バッグを持って入口へ歩いている。" },
      { number: 2, description: "工作機械が整然と並ぶ広い工場通路。主人公が機械を確認しながら中央を歩く。" },
      { number: 3, description: "主人公が透明な保護眼鏡を装着する瞬間の顔と手の接写。" },
      { number: 4, description: "金属部品を切削加工しているマクロショット。回転工具、切削油、金属表面。" },
      { number: 5, description: "白い手袋を着けた手が、完成した小型部品をデジタルマイクロメーターで測定。" },
      { number: 6, description: "主人公が紙の設計図とPC上の3D CADモデルを比較している横顔。" },
      { number: 7, description: "技術者数名が図面と完成部品を囲む俯瞰ショット。" },
      { number: 8, description: "主人公が完成した金属部品を両手で持つポートレート。" },
      { number: 9, description: "完成した精密部品のヒーローショット。「見えない場所に、私たちの精度。」" },
    ],
    constraints:
      "同じ女性技術者（20代後半、低い位置でまとめた黒髪、ネイビー作業着）を全カットで維持；過剰な火花や SF 的な無人工場は避ける；成片では九宫格的な枠線・番号を一切表示しない；来源 @husky__create / X / 38860 曝光。",
    video_prompt: {
      title: "10秒企業ブランドムービー提示詞",
      subtitle: "Gemini Omni 1.1 Flash · 完整可复制提示詞",
      content: `精密部品メーカー「KISARAGI INDUSTRIES」の10秒企業ブランドムービー。小さな部品に宿る加工精度と、それを支える技術者の仕事を、力強く端正な実写映像で描く。

中心となる言葉：
「見えない場所に、私たちの精度。」

参照画像：
添付の9コマボードを、工場、女性技術者、作業着、機械、金属部品、撮影アングルの厳密な参照として使用する。読み順は左上から右、上段から下段。

完成動画では、9コマ画像、枠線、番号、分割状態を一切表示しない。各コマを全画面の独立した映像として再現し、リズミカルなカット編集でつなぐ。

人物の一貫性：
全カットで同じ20代後半の日本人女性技術者。低い位置でまとめた黒髪、ネイビーの作業着、安全靴、白い作業手袋。製造エリアでは透明な保護眼鏡を着用する。顔、身長、髪型、衣装、保護具を変化させない。

ショット構成：
0.0–1.1秒
朝の工場外観。女性技術者が入口へ向かって一定の速度で歩く。低い朝日が建物の金属面を横から照らす。

1.1–2.1秒
整然と並ぶ工作機械の間を女性が歩く。カメラは低い位置から滑らかに後退し、彼女の進行方向を正面から捉える。

2.1–3.0秒
顔と手の接写。女性が保護眼鏡を正しく装着する。眼鏡に工場照明が一瞬反射する。

3.0–4.0秒
金属部品の切削加工。回転する工具へ切削油が流れ、精密な加工面が現れる。過剰な火花は出さない。

4.0–5.0秒
白い手袋を着けた両手で、部品をデジタルマイクロメーターに挟む。測定値が安定し、指が止まる。

5.0–6.0秒
女性が紙の図面からPC上の3Dモデルへ視線を移す。画面と実物部品の形状を一致させる。

6.0–7.0秒
技術者たちが図面を囲む俯瞰カット。主人公が部品の一点を指し、周囲の技術者が確認する。

7.0–8.4秒
主人公が完成部品を両手で持つ。金属面を確認してからカメラ方向へ静かに視線を上げる。笑顔は控えめ。

8.4–10.0秒
黒い台座に置かれた完成部品のヒーローショット。狭い光が加工面を移動し、「見えない場所に、私たちの精度。」「KISARAGI INDUSTRIES」を鮮明に見せる。

映像表現：
日本の製造業による高品質な実写企業CM。スチールシルバー、ネイビー、チャコール、ニュートラルな白。工場照明と窓からの自然光を混ぜ、青すぎない色温度にする。マクロ撮影では切削油、金属表面、測定器、手袋の繊維まで精密に描く。

編集：
機械、工具、技術者の動きを使った短いハードカット。動作方向を揃え、速さではなく精度を感じるテンポにする。分割画面やコラージュは禁止。物体が別の物体へ変化するモーフィングも使用しない。

サウンドデザイン：
低く抑えたピアノ、金属音を加工したパーカッション、短い弦楽器の音によるオリジナル曲。機械の回転音、切削油、測定器が閉じる小さなクリックを音楽のリズムへ自然に重ねる。

ラストに、落ち着きと芯のある成人女性の声。
「見えない場所に、私たちの精度。KISARAGI INDUSTRIES。」

避ける要素：
大量の火花、危険な作業、保護具の欠落、無人のSF工場、ロボット、過度なブルー加工、急激なカメラ回転、人物の変形、機械や測定器の破綻、余分な文字、透かし。

---

【分镜提示詞】（用于 GPT Image 2.5 生成九宫格参考）

精密部品メーカー「KISARAGI INDUSTRIES」の企業ブランドムービー兼採用映像用フォトストーリーボードを作成してください。

【テーマ】
「見えない場所に、私たちの精度。」

普段は目に触れない小さな部品が、社会や産業を支えていることを描く。工場の規模だけではなく、技術者の判断、加工、測定、連携、完成品への誇りを見せる。

【画像仕様】
完成画像は横長16:9。
画面を3列×3行の9コマに均等分割する。
すべてのコマを横長16:9で構成。
細いアイボリーの線で区切る。
各コマ左上に白色の小さな番号「01」〜「09」を表示。
全カットを、実写で撮影された日本企業のブランドCMのように仕上げる。

【メイン人物】
20代後半の日本人女性技術者。
黒髪を低い位置でひとつにまとめている。
誠実で集中力を感じる自然な顔立ち。
ネイビーの作業着、安全靴、白い作業手袋。
製造エリアでは透明な保護眼鏡を正しく装着する。
全カットで同じ人物、顔、体格、作業着を維持する。

【工場】
清潔に整備された日本の精密加工工場。
CNC工作機械、測定室、設計用PC、金属部品、図面、工具。
床の安全ラインや保護具も現実的に描く。
近未来的な無人工場にはしない。

【9コマの演出】

01：
朝の低い日差しを受ける工場外観。
主人公が作業バッグを持って入口へ歩いている。
建物、空、エントランスを端正に配置した企業広告らしい導入。

02：
工作機械が整然と並ぶ広い工場通路。
主人公が機械を確認しながら中央を歩く。
左右対称すぎず、実際に稼働している工場の奥行きを出す。

03：
主人公が透明な保護眼鏡を装着する瞬間の顔と手の接写。
瞳に正確にピントを合わせ、レンズには工場照明を自然に反射させる。

04：
金属部品を切削加工しているマクロショット。
回転工具、切削油、金属表面、細かな削り跡を高精細に描く。
火花ではなく、精密加工らしい冷静な美しさを表現する。

05：
白い手袋を着けた手が、完成した小型部品をデジタルマイクロメーターで測定している。
測定器と部品の接触位置を物理的に正しく描く。

06：
主人公が紙の設計図とPC上の3D CADモデルを比較している横顔。
背景には実際の加工設備が自然にぼけて見える。

07：
技術者数名が図面と完成部品を囲む俯瞰ショット。
主人公が部品の一箇所を指し、他の技術者が真剣に確認している。

08：
主人公が完成した金属部品を両手で持つポートレート。
背景の工作機械は浅い被写界深度でぼかす。
大げさに笑わず、静かな自信と誇りを表情に出す。

09：
チャコールブラックの台座に、完成した精密部品をひとつだけ置いた商品広告カット。
細いリムライトで金属の加工面とエッジを際立たせる。
左側に余白を設け、正確な日本語で「見えない場所に、私たちの精度。」
その下に「KISARAGI INDUSTRIES」。

【撮影・色彩】
高品質な日本の製造業CM。
スチールシルバー、ネイビー、チャコール、白を中心とした色設計。
工場照明と窓からの自然光をバランスよく組み合わせる。
人物には自然な肌の質感を残す。
金属は過度に鏡面化せず、加工痕や重量感を表現する。

【禁止事項】
大量の火花、汚れた危険な工場、誤った保護具、SF的なロボット工場、過剰な青色加工、合成感の強い人物、破綻した測定器、余分なコピー、透かし、指定外のロゴを入れない。`,
    },
  },
  {
    id: "minimax-h3-mv-typography",
    title: "H3 文字包装 MV",
    subtitle: "X · @liandeli2 · 约15秒 · 16:9",
    description:
      "15s K-pop 女团 MV：三人组合在地下音乐杂志风格场景中演绎 dark-pop、cyber-grunge 美学。MiniMax H3 找到了与 Seedance 不同的切入点——主攻包装特效与 AE 合成方向。",
    video: "/tutorials/minimax-h3-mv-typography/demo-web.mp4",
    poster: "/tutorials/minimax-h3-mv-typography/poster.jpg",
    duration: "约15秒",
    shots: 0,
    references: 0,
    model: "MiniMax Hailuo H3 / Design",
    style: "MV 文字包装特效",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/liandeli2/status/2083070647660609837",
    sourceAuthor: "@liandeli2",
    sourcePlatform: "X",
    sourceImpressions: 15802,
    tags: [
      "15秒 · K-pop 女团 MV",
      "16:9 横屏",
      "MiniMax H3 / Design",
      "dark-pop · cyber-grunge",
      "地下杂志美学",
    ],
    steps: [
      {
        number: 1,
        title: "设定三人 K-pop 女团形象",
        description:
          "SOL（黑色长直发、冷静强势）、LUNA（银灰短狼尾、冷感疏离）、CORONA（深红棕长卷发带细辫、叛逆锋利）。每位成员的服装、发型、气质需与角色设定保持一致。",
      },
      {
        number: 2,
        title: "构建地下音乐杂志拍摄场景",
        description:
          "将白色无缝影棚重新处理：过曝白墙、灰黑阴影、复印纸贴片、撕裂纸边、半色调网点、胶带痕迹、扫描错位和局部黑色喷漆纹理。部分镜头背景硬切为纯黑、过曝白或高反差灰。",
      },
      {
        number: 3,
        title: "粘贴完整提示词生成",
        description:
          "使用下方完整 K-pop 女团 MV 提示词。风格定位 dark-pop、cyber-grunge、90年代末至00年代初独立杂志与 zine 拼贴美学。高反差黑白+低饱和暗红银灰点缀。",
      },
    ],
    references_detail: [],
    storyboard: [],
    constraints:
      "三人女团形象与角色设定一致；地下音乐杂志风格而非干净商业棚拍；高反差黑白+低饱和暗红银灰；肤色真实、阴影厚重但保留服装细节；来源 @liandeli2 / X / 15802 曝光。",
    video_prompt: {
      title: "15s K-pop 女团 MV 提示词",
      subtitle: "MiniMax Hailuo H3 / Design · 完整可复制提示词",
      content: `主体：三人 K-pop 女团，人物形象与当前角色设定一致。
SOL：黑色长直发，冷静强势，黑色结构短西装、低腰百褶短裙、黑色长靴。
LUNA：银灰色短狼尾，冷感疏离，银灰短款机能夹克、黑色连体内搭、不对称裙裤、厚底靴。
CORONA：深红棕长卷发，带细辫，叛逆锋利，红黑赛车短夹克、低腰裙裤、绑带长靴。

场景：白色无缝影棚被重新处理成地下音乐杂志拍摄现场。背景不是干净商业棚拍，而是带有过曝白墙、灰黑阴影、复印纸贴片、撕裂纸边、半色调网点、胶带痕迹、扫描错位和局部黑色喷漆纹理。部分镜头中背景瞬间切换为纯黑、过曝白或高反差灰色，只通过硬切完成。

视觉风格：dark-pop、cyber-grunge、rap 音乐视频，写实高时装质感，90年代末至00年代初独立杂志、地下音乐海报、复印纸、胶片扫描与 zine 拼贴美学。高反差黑白与低饱和暗红、银灰点缀。肤色真实，阴影厚重但保留服装细节。`,
    },
  },
  {
    id: "seedance-dance-mocap-migration",
    title: "Seedance 舞蹈动捕迁移",
    subtitle: "X · 369Serena · 约8秒 · 9:16",
    description:
      "竖屏舞蹈动作迁移：灰白深度捕捉→Seedance 人物重建。步骤嵌入抖音原片与灰白捕捉片供参考。无需参考图（需自备人物素材）。两大陷阱：先灰白勿直接迁移；音轨后期另加。",
    video: "/tutorials/seedance-dance-mocap-migration/demo-web.mp4",
    poster: "/tutorials/seedance-dance-mocap-migration/poster.jpg",
    duration: "约8秒",
    shots: 1,
    references: 0,
    model: "Seedance",
    style: "舞蹈动作迁移 · 竖屏",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/369Serena/status/2100805668206731346",
    sourceAuthor: "@369Serena",
    sourcePlatform: "X",
    sourceImpressions: 7679,
    tags: [
      "约8秒 · 舞蹈重建",
      "9:16 竖屏 · 动作迁移",
      "无需参考图（需自备）",
      "灰白深度捕捉流程",
    ],
    steps: [
      {
        number: 1,
        title: "准备抖音原片舞蹈素材",
        description:
          "寻找或自拍清晰舞蹈动作视频。动作要干净完整，画面稳定，人物主体清晰。这是整个流程的动作源。",
        video: "/tutorials/seedance-dance-mocap-migration/douyin-web.mp4",
        poster: "/tutorials/seedance-dance-mocap-migration/douyin-poster.jpg",
        aspectRatio: "9/16",
      },
      {
        number: 2,
        title: "制作灰白深度捕捉片",
        description:
          "将原片转为灰白深度图/姿态捕捉版本（用深度估计或姿态提取工具）。这是关键：必须先做灰白捕捉，不要直接将彩色原片迁移到 Seedance，否则动作会失真。",
        video: "/tutorials/seedance-dance-mocap-migration/gray-web.mp4",
        poster: "/tutorials/seedance-dance-mocap-migration/gray-poster.jpg",
        aspectRatio: "9/16",
      },
      {
        number: 3,
        title: "用 Seedance 重建人物",
        description:
          "在 Seedance 中上传灰白捕捉片与人物参考图（需自备），粘贴完整提示词。陷阱提醒：音轨需后期另加，Seedance 不会自动同步原片音乐；先用灰白捕捉而非彩色原片，动作还原度更高。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "整段舞蹈：从灰白深度捕捉中提取完整动作姿态，结合人物参考图在 Seedance 中重建角色，还原舞蹈动作。陷阱提醒：先灰白深度捕捉，勿直接迁移彩色原片；音轨后期单独添加。",
      },
    ],
    constraints:
      "先灰白深度捕捉勿直接迁移；音轨后期另加（Seedance 不同步原音乐）；需自备人物参考图（无 image_1）；9:16 竖屏；来源 369Serena。",
    video_prompt: {
      title: "Standalone Dance Video · Seedance Character Migration",
      subtitle: "Seedance · 9:16 竖屏 · 灰白深度捕捉流程",
      content: `Standalone_dance_video

参考 image_1 <<<image_1>>> 中的人物身份与外观。

(人物名字) 的脸部请严格参考 image_1 右侧的人像特写区域，保持同一个人物身份和面部特征：约 25 岁的年轻东亚女性，自然柔和的淡妆，脸颊带轻微红润感，嘴唇饱满自然，暖棕色眼睛，深棕色头发，扎成两侧低马尾，并佩戴一个小型紫色发夹。

人物的身材比例、服装和整体造型参考 image_1 左侧正面全身图和中间背面全身图：

穿浅薰衣草紫色拉链防风外套，袖子带白色条纹细节；内搭白色 T 恤；黑色百褶短裙；白色宽松及膝袜；黑色厚底乐福鞋。

(人物名字)最初背着一个黑色托特包，包带上挂有一个小毛球挂件；脖子上佩戴黑色挂绳的 STAFF 工作证。

以 video_1 <<<video_1>>> 作为纯动作参考视频。

(人物名字) 完整复刻 video_1 中的整套舞蹈编排，尽可能高保真地还原所有动作，包括：

完整的全身舞蹈动作、精确的手臂动作、手势、脚步、腿部动作、身体重心变化、舞蹈节奏、动作时机和动作衔接。

动作节奏和时间点严格跟随 video_1，不随意删减、替换、简化或重新设计动作。

整体表演状态保持 video_1 中那种充满活力、自由、洒脱、自信且具有情绪感染力的舞蹈表现。

(人物名字) 的面部表情自然放松，随着舞蹈保持开心、兴奋、充满生命力的状态，表情与身体动作的能量一致，不做夸张或僵硬的表情。

在原舞蹈中"扔工作牌"的那个准确节拍点，(人物名字)同时抓住自己的 STAFF 工作证和黑色托特包，用一个果断、畅快、有释放感的动作，将两样物品同时甩出去。

工作证和托特包必须真实地从人物身上脱离，并一起飞出画面之外。

完成扔出动作后，(人物名字) 不停顿，也不回头捡东西，立刻无缝继续完成 video_1 中剩余的舞蹈动作。

此后 Serena 身上不再出现托特包和工作证，以更加自由、轻盈、放松的状态继续跳舞，并保持完整的舞蹈节奏和高能量表现直到结束。

场景环境、拍摄机位、构图、镜头距离、光线条件以及背景氛围，均参考并匹配 video_1 中已经建立的环境。

镜头始终确保 (人物名字) 的完整身体和关键舞蹈动作清晰可见，尤其需要完整表现手臂、双手、双腿、脚部和脚步动作，避免因为裁切导致舞蹈动作缺失。

以全身舞蹈表演镜头为主，完整呈现整套舞蹈。

保持 (人物名字) 的人物身份、脸部、发型、服装、身体比例在整段视频中稳定一致，不换脸、不换人、不改变服装，不出现额外人物。

除指定的工作证和托特包飞出动作外，不新增、不删除、不凭空生成任何服装、饰品或道具。

无对白。
无音乐。`,
    },
  },
  {
    id: "creative-fan-outfit-swap",
    title: "创意风扇换装",
    subtitle: "X · YangOnchain · 约28秒 · 9:16",
    description:
      "竖屏创意换装片：固定顶视机位拍摄仰躺人物，通过吊扇扇叶遮挡实现 5 次服装更新，配合音乐节拍与展示动作。核心是扇叶擦除规则（前缘旧装/后缘新装）+ 固定物件位置（遥控/手机/包）+ 自然连续姿态。成片 9:16 竖屏，不进胶片条。",
    video: "/tutorials/creative-fan-outfit-swap/demo-web.mp4",
    poster: "/tutorials/creative-fan-outfit-swap/poster.jpg",
    duration: "约28秒",
    shots: 7,
    references: 0,
    model: "未知（推测创意特效模型）",
    style: "创意换装 · 竖屏 · 固定机位",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/YangOnchain/status/2100696904648786291",
    sourceAuthor: "@YangOnchain",
    sourcePlatform: "X",
    sourceImpressions: 1047,
    tags: [
      "约28秒 · 7 分镜",
      "9:16 竖屏 · 不进胶片条",
      "跟做需自备参考图",
      "固定顶视 · 扇叶遮挡换装",
      "音乐节拍对齐",
    ],
    steps: [
      {
        number: 1,
        title: "读懂扇叶换装规则",
        description:
          "固定顶视机位（0–30s 无推拉摇移旋转）+ 仰躺人物 + 吊扇在高处顺时针旋转。核心规则：扇叶前缘尚未到达的区域保持旧装，遮挡后刚露出的区域已经穿上新装。换装完成后全身统一成新装，才开始展示动作。",
      },
      {
        number: 2,
        title: "准备参考图与设置",
        description:
          "跟做需自备：Image1 人物脸部参考 + Image2–7 六套服装参考图。原作者提示词引用 @Image1–@Image7，成片包未附参考图。9:16 竖屏 · 约28s · 打开声音（轻快时尚电子音乐约120BPM + 按键声 + 扇叶掠风声 + 衣料声 + 快门声）。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "保持固定顶视 · 柔和光线；人物深棕长发仰躺、头在上鞋在下、五官发型不变；遥控器和手机从开场就在左右两侧固定位置；扇叶高处顺时针、不穿过人体；每次换装完整露出新造型再表演；负面提示：无白闪/黑场/烟雾/失焦掩饰/不擅自唱歌说话。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s 开场按遥控启动吊扇：多多已穿第二套（@Image2）仰躺，静止扇叶在前景边缘。左手拿遥控器朝上按一下，放回原处。按键\'咔嗒\'后吊扇启动，音乐进入主节奏。教练提示：遥控器和手机从开场就同时存在各自位置。",
      },
      {
        number: 2,
        description:
          "3–7s 第一次扇叶擦除 → 第二套 + 拨颈巾：扇叶扫过，穿搭从 @Image2 更新为 @Image3，身体头发原位不变。叶片退出，第二套完整露出，音乐重拍落下。多多用手指拨正颈巾末端，让它落到肩侧，重新看向镜头微笑。教练提示：扇叶前缘旧装/后缘新装；换装揭示落在音乐重拍。",
      },
      {
        number: 3,
        description:
          "7–11s 第二次擦除 → 第三套 + 点鞋尖：下一次指定扫过揭示 @Image4（短裙、腿套、鞋和包）。多多先保持原姿态，待完整更新，再将一侧膝盖小幅屈起（脚跟仍贴地毯），鞋尖随音乐点两拍，随后放回。教练提示：始终仰躺面向上方，动作舒展俏皮，裙摆自然覆住身体。",
      },
      {
        number: 4,
        description:
          "11–15s 第三次擦除 → 第四套 + 亮豹纹包：第三次扇叶扫过逐步露出 @Image5。多多右手拎住画面左侧豹纹包的带子，抬起少许在身体侧边亮一下（包顺重力下垂不遮脸），头朝包侧轻偏，肩部合拍动一下，再把包落回原位。教练提示：包碰到地毯时发出柔软轻响；之后的包随对应服装替换，旧包不累积。",
      },
      {
        number: 5,
        description:
          "15–20s 第四次擦除 → 第五套 + 理领带装正经：扇叶扫过后完整显示 @Image6。多多两手理顺胸前长领带，随后放下手、收拢双腿，故意一本正经地看顶上镜头，稳住两拍，再忍不住扬起嘴角。教练提示：音乐在理领带时收一下密度，两拍后低音回到主节奏；服装仍清楚可见。",
      },
      {
        number: 6,
        description:
          "20–25s 第五次擦除 → 第六套 + 停扇：最后一次换装，扇叶后缘揭示 @Image7（浅粉包替换原包）。多多抬起左前臂看袖口，右手顺一下针织袖边，放下手，朝镜头点头。左手再取遥控器、按停止键、放回。按键声后吊扇连续减速停在不遮脸的前景边缘。教练提示：减速期间所有经过都保持第六套；不能瞬间消失或跳位置。",
      },
      {
        number: 7,
        description:
          "25–30s 举手机自拍 V 手势收束：多多左手从左胯外侧拿起手机，举到脸上方略偏画面右侧（屏幕朝多多，主镜头看见手机背面但仍能看清脸）。视线转向手机，收一点下巴，右手在脸旁比一个小V，露出调皮的笑。轻按快门，清楚快门声落在收尾重拍。教练提示：最后保留第六套、举手机的多多和完整空间，音乐短促收束；不切自拍照片。",
      },
    ],
    constraints:
      "跟做需自备 Image1 人物脸 + Image2–7 六套服装参考；成片包未附参考图。固定顶视 · 柔和光线；人物五官发型不变；遥控器和手机从开场就在左右固定位置；扇叶高处顺时针、不穿过人体；每次换装完整露出新造型再表演；无白闪/黑场/烟雾/失焦掩饰；9:16 竖屏不进胶片条；来源 YangOnchain。",
    video_prompt: {
      title: "创意风扇换装 · 约28秒 · 9:16",
      subtitle: "未知模型 · 9:16 竖屏 · 需自备 7 张参考图",
      content: `光线保持柔和而方向明确，人物肤色自然，针织、蕾丝、皮革和木纹各自可辨。背景低饱和，服装的色彩和质地突出。人物和衣服始终清晰，仅快速掠过的前景扇叶边缘带少量运动模糊。

【主体定义】
多多是@Image1中的同一位成年女性，深棕长发铺在头肩周围，五官、肤色和发型不随换装改变。多多仰躺，头在画面上方、鞋在下方，身体长度约占画面高度四分之三；背、肩和臀腿贴着地毯，衣料按卧姿形成压褶，不是把站立人物贴在地板上。

摄影机位于吊扇上方，垂直朝地面拍，构图锁定。吊扇远高于多多，在摄影机与多多之间。轴心固定在画面左侧之外，宽木扇叶在近前景沿弧线扫过身体投影；从镜头看始终顺时针旋转，人物不能碰到扇叶。

本片只采用一个幻想规则：在指定的五次扫过中，衣服沿扇叶后缘逐步更新。叶片前缘尚未到达的区域保持旧装，遮挡后刚露出的区域已经穿上新装；扫过完成后，全身和配饰统一成下一套。换装时身体位置接续，展示动作在新造型露出后才开始。其他扇叶经过只是遮挡，不触发额外换装。

屏幕左右固定：画面右侧是多多的左手侧，一只遥控器放在左手旁，一部手机另放在左胯外侧；画面左侧是多多右手侧，包位于右肘至右胯旁。遥控器和手机从开场就同时存在，各自保持原位置。第一套不带包；之后的包随对应服装在遮挡中替换，旧包不累积。

【时间线分镜与声音】
镜头1：0—30秒始终固定顶视，不推拉、不摇移、不旋转、不切景。轻快时尚电子音乐贯穿，约120BPM，弹性低音与清脆拍手构成节奏；无对白、歌唱或旁白。以下声音随对应动作发生。

0—3秒｜开场与启动
首帧多多已经穿@Image2躺好，双腿自然伸展，看向上方镜头。静止扇叶只占前景边缘。多多左手拿起旁边的遥控器，朝上按一下，再放回原处。按键\'咔嗒\'后吊扇启动，音乐进入主节奏，低声运转声随之出现。直接进入动作，不补空镜或走进房间。

3—7秒｜第一次擦除，第二套
一片木扇叶扫过，多多的穿搭从@Image2沿遮挡边缘更新为@Image3；身体、头发和房间原位不变。叶片退出身体区域，第二套完整露出，音乐重拍落下。
多多用手指拨正颈巾末端，让它落到肩侧，重新看向镜头，嘴角带笑；手随后放回身体旁，露出长裤与包。扇叶掠风声短而轻，衣料声不盖过音乐。

7—11秒｜第二次擦除，第三套
下一次指定扫过揭示@Image4。多多先保持原姿态，待短裙、腿套、鞋和包完整更新，再将一侧膝盖小幅屈起，脚跟仍贴地毯，鞋尖随音乐点两拍，随后放回。
多多始终仰躺、面向上方，动作舒展俏皮，裙摆自然覆住身体，不把腿踢向镜头。换装揭示落在音乐重拍，点鞋尖对应两个短打击音。

11—15秒｜第三次擦除，第四套
第三次指定扇叶扫过，逐步露出@Image5。多多右手拎住画面左侧豹纹包的带子，抬起少许，在身体侧边亮一下；包顺重力下垂，不遮脸。
多多头朝包侧轻偏，肩部合拍动一下，再把包落回原位。包碰到地毯时发出柔软轻响，动作收住，准备下一次遮挡。

15—20秒｜第四次擦除，第五套
扇叶扫过后完整显示@Image6。多多两手理顺胸前长领带，随后放下手、收拢双腿，故意一本正经地看顶上镜头，稳住两拍，再忍不住扬起嘴角。
音乐在理领带时收一下密度，两拍后低音回到主节奏。服装仍清楚可见，不插入脸部特写，不让表情取代全身的节拍。

20—25秒｜第五次擦除，第六套与停扇
第五次也是最后一次换装，扇叶后缘揭示@Image7，浅粉包替换原包。多多抬起左前臂看袖口，右手顺一下针织袖边，放下手，朝镜头点头。
多多左手再取原处遥控器、按停止键、放回。按键声后吊扇沿原方向连续减速，运转声逐渐减弱，停在不遮脸和主要服装的前景边缘；不能瞬间消失或跳到另一个位置。减速期间所有经过都保持第六套，音乐不断。

25—30秒｜自拍
多多左手从左胯外侧拿起那部手机，举到脸上方略偏画面右侧，屏幕朝多多，主镜头看见手机背面但仍能看清多多的脸。
多多视线转向手机，收一点下巴，右手在脸旁比一个小V，露出调皮的笑。多多轻按快门，一声清楚的快门声落在收尾重拍。
最后保留第六套、举手机的多多和完整空间，音乐短促收束；不切自拍照片或手机界面。

【统一约束】
只有同一位多多、一副三叶吊扇、一只遥控器、一部手机。衣服严格按@Image2到@Image7顺序变化，共六套、五次换装；最终保持第六套。扇叶遮挡前后四肢、发型与物件位置连续，衣服与包不融成一团。
保持同一顶视机位、地毯、沙发边缘和窗光方向。多多全程仰躺，衣服和配饰服从重力；吊扇始终在高处，不穿过人体，不落到地板。
每次换装必须让新造型完整可见再表演。遮挡只替换服装，不让人物脸、地板或整个画面先灰一下；不使用白闪、黑场、烟雾、粒子、交叉溶解或失焦掩饰变化。
不生成参考图排版、白底、图片编号、文字贴纸、字幕或片尾Logo。没有对白，不擅自唱歌或说话，保留自然呼吸和表情。`,
    },
  },
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
    sourceAuthor: "@HeyRu0by",
    sourcePlatform: "X",
    sourceImpressions: 15419,
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
    sourceAuthor: "@bmx_ai13",
    sourcePlatform: "Evolink",
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
    sourceAuthor: "@azed_ai",
    sourcePlatform: "X",
    sourceImpressions: 17122,
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
    sourceAuthor: "@Shorelyn_",
    sourcePlatform: "X",
    sourceImpressions: 2367,
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
    sourceUrl: "https://x.com/KrevixAi/status/2101361201271677294",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 255,
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
    sourcePlatform: "Pollo",
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
    sourcePlatform: "Pollo",
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
    sourcePlatform: "Pollo",
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
    sourcePlatform: "Pollo",
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
    sourcePlatform: "Pollo",
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
