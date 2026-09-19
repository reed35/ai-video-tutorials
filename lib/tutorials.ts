import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
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
