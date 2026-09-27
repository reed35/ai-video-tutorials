import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
  // 查重别名(提示词自回复帖): https://x.com/GeekCatX/status/2104124888508473568
  {
    id: "geekcatx-cyclist-kicks-truck-pov",
    title: "骑车一脚踹飞重卡 · 第一视角反物理",
    subtitle: "X · @GeekCatX · 模型未标注 · 6秒 · 16:9",
    description:
      "第一视角骑行，迎面驶来的红色重卡被一脚踹得横滑冲进路边；6 秒单镜，提示词按秒写死接近、踢中、侧滑、扬尘。",
    video: "/tutorials/geekcatx-cyclist-kicks-truck-pov/demo-web.mp4",
    poster: "/tutorials/geekcatx-cyclist-kicks-truck-pov/poster.jpg",
    duration: "6秒",
    durationSec: 6,
    styleLabel: "第一视角整活",
    shots: 1,
    references: 0,
    model: "未标注（作者未公开）",
    style: "运动相机第一视角 · 写实日光 · 反物理一脚",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/GeekCatX/status/2104124729716342944",
    sourceAuthor: "@GeekCatX",
    sourcePlatform: "X",
    sourceImpressions: 5694,
    sourceStats: { asOf: "2026-09-27", likes: 18, reposts: 0, bookmarks: 9 },
    formats: ["手机POV·Vlog"],
    hook: {
      structure: "骑行接近 → 抬腿一踹 → 重卡横滑 → 扬尘远去",
      opening: "第 0 秒就是车把和骑手影子压在路面上，远处一辆红色重卡迎面开来，1 秒内越来越近。",
      openingAt: 0,
      beats: [
        { title: "冲突怎么起", text: "约 1s 一条穿白袜白鞋的腿从右下角抬起；约 1.5s 卡车冲到眼前，鞋底蹬在车头右前角。", at: 1 },
        { title: "反转", text: "约 2–3s 整辆卡车斜着滑向右侧，压上路肩冲进草地，路边树枝被带倒一地。", at: 2 },
        { title: "结尾怎么收", text: "约 4–6s 骑手照常往前骑，卡车在右前方扬尘滑远，只剩空路和一地枝叶。", at: 4 },
      ],
      copyThis: "镜头全程是普通骑行第一视角，只让「一脚」这件事反物理；提示词写清接近、接触、横移、收腿四拍的先后。",
      approx: true,
    },
    tags: [
      "6秒 · 第一视角",
      "16:9 横屏",
      "单镜一镜到底",
      "反物理整活",
      "纯文生视频",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：先把「普通骑行」写实",
        description:
          "提示词先交代场景和机位：向右缓弯的沥青路、白色车道线、水泥路肩、田野、行道树、电线杆，强日光把骑手影子投在前方路面；画面底部一直露出黑色弯把，运动相机广角、带轻微骑行抖动。",
      },
      {
        number: 2,
        title: "第二步：按秒写死一脚的动作链",
        description:
          "0–1.1s 红色重卡由远到近逼到眼前；约 1.1s 白袜白鞋的小腿从右下角伸出，踢中车头一侧；接触后整车斜向右侧弹开；1.5–3s 卡车在路面擦出黑色胎痕、压过路肩冲进草地、扬起土黄色尘土，路边树枝被带倒。",
      },
      {
        number: 3,
        title: "第三步：加禁止项，一次生成 6 秒",
        description:
          "结尾要求卡车整体不散架、保持正常速度、第一视角不切镜，不要慢动作、字幕和额外的撞车结局。作者没说用的哪个模型，也没有参考图，整段提示词直接文生视频。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "0–1s 第一视角骑行，车把和影子在画面下方，红色重卡从远处迎面驶来。" },
      { number: 2, description: "约 1–1.6s 白袜白鞋的腿从右下角抬起，卡车逼到眼前，鞋底蹬在车头右前角后收回。" },
      { number: 3, description: "约 2–3s 卡车斜向右侧滑出，压上路肩冲进草地，树枝被带倒、尘土扬起。" },
      { number: 4, description: "约 3–6s 骑手继续往前骑，卡车在右前方草地里扬尘滑远，路边一地枝叶。" },
    ],
    constraints:
      "一镜到底第一视角、正常速度、卡车整体不散架；不要切镜、慢动作、字幕或额外的撞车结局。与成片不符：提示词写踢在「观众视角左侧」车灯旁，成片里鞋底蹬的是车头右前角；腿在约 1s 就已抬起，比卡车到眼前早约半秒。缺口：作者没有说明用的是哪个模型（评论区有人问，作者未回复），也没有参考图。",
    video_prompt: {
      title: "Cyclist Kicks a Cargo Truck · First-Person · 6s",
      subtitle: "模型未标注 · 16:9 · 英文完整提示词（作者自回复长帖）",
      content: `Create an approximately 6-second, 16:9 photorealistic video in one continuous first-person cycling shot. The camera moves forward along a smooth asphalt road curving gently to the right, with white lane markings, a raised concrete curb, green fields, roadside trees, utility poles and overhead wires beneath a bright blue sky. Strong sunlight casts the cyclist’s elongated shadow onto the road ahead. The black ends of drop handlebars remain visible at the bottom of the frame, with slight natural cycling vibration and a wide-angle action-camera perspective. During the first 1.1 seconds, a large red cargo truck approaches rapidly from ahead, growing from a distant vehicle into a looming close-up. It has a tall red cab, black grille, yellow license plate, large dark tires and a long red cargo bed with raised side panels. At approximately 1.1 seconds, the rider raises a bare lower leg from the lower-right corner, wearing a white ankle sock and a white lace-up sneaker. Extend the leg forward and deliver one firm kick against the truck’s front corner beside the headlight on the viewer’s left. Clearly show the shoe making brief contact with the red bodywork, followed by the leg withdrawing. The contact immediately produces an absurdly powerful reaction: the entire heavy truck jolts diagonally away toward screen right, its cab tilting as the cargo bed swings behind it. Preserve a clear sequence of approach, foot contact, sideways displacement and foot retraction. From roughly 1.5 to 3 seconds, the truck skids across the asphalt, leaving dark curved tire marks, bounces over the right-hand curb and slides into the grassy roadside, throwing up tan dust. Its cab remains partly facing the rider as it moves away. Roadside trees shake, leafy branches bend and fall along the curb, and loose leaves scatter near the road edge. Throughout the incident, the cyclist keeps moving forward along the bend with only a small camera wobble. During the final seconds, the truck becomes increasingly obscured by dust and foliage on the right while fallen branches fill the roadside foreground. End with the bicycle still moving and the clear road continuing ahead. Combine ordinary, convincing daytime cycling footage with the impossible strength of a single kick. Keep the truck intact through the sideways skid, retain normal-speed motion, and preserve the uninterrupted first-person viewpoint without cuts, slow motion, added captions or an invented final crash.`,
    },
  },
  // 查重别名(提示词自回复帖，含第三方站点推广链接，未收录链接): https://x.com/GeekCatX/status/2104204992760680878
  // 查重别名(提示词所在根帖，引用成片帖): https://x.com/GeekCatX/status/2104204249811026201
  // 查重别名(同一成片，作者回复 @bigjusir 时重发): https://x.com/GeekCatX/status/2104148928656789511
  // 查重别名(输入白模视频原帖 @bigjusir): https://x.com/bigjusir/status/2104013401475436713
  {
    id: "geekcatx-tickle-heels-whitemodel-seedance-2-5",
    title: "挠痒高跟鞋 · 白模视频驱动试穿 · Seedance 2.5",
    subtitle: "X · @GeekCatX · Seedance 2.5 · 15秒 · 3:4",
    description:
      "用 @bigjusir 的挠痒高跟鞋白模视频驱动，配角色卡，Seedance 2.5 出 15 秒试穿忍笑产品喜剧。",
    video: "/tutorials/geekcatx-tickle-heels-whitemodel-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/geekcatx-tickle-heels-whitemodel-seedance-2-5/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "白模转写实",
    shots: 4,
    references: 0,
    model: "Seedance 2.5",
    style: "灰模产品视频 → 写实试穿 · 明亮试穿间 · 产品喜剧",
    aspectRatio: "3/4",
    sourceUrl: "https://x.com/GeekCatX/status/2104148788873154686",
    sourceAuthor: "@GeekCatX",
    sourcePlatform: "X",
    sourceImpressions: 70700,
    sourceStats: { asOf: "2026-09-27", likes: 300, reposts: 11, bookmarks: 183 },
    formats: ["产品广告", "角色表演"],
    hook: {
      structure: "穿好起身 → 鞋弓特写 → 忍笑推脸 → 坐下脱鞋挠脚",
      opening: "第 0 秒她已经穿着灰色尖刺高跟鞋坐在长凳上，低头看鞋，约 2s 扶凳站起。",
      openingAt: 0,
      beats: [
        { title: "产品怎么露", text: "约 2.8s 切鞋子侧面低机位特写：鞋弓下是镂空，里面的弧形活动件来回拨动脚底。", at: 2.8 },
        { title: "反应怎么推", text: "约 5.8s 切中景，镜头推到脸：她先憋笑，再笑到眯眼。", at: 5.8 },
        { title: "结尾怎么收", text: "约 8.9s 切全景，她笑着弯腰、坐回长凳，脱下一只鞋放在旁边，捧着脚笑到结束。", at: 8.9 },
      ],
      copyThis: "产品动作全交给白模视频（Video1），提示词只管人物反应和镜头顺序，并反复强调镂空不能被填实。",
      approx: true,
    },
    tags: [
      "15秒 · 产品喜剧",
      "3:4 竖屏",
      "Seedance 2.5",
      "白模视频 + 角色卡",
      "参考白模原音轨",
    ],
    steps: [
      {
        number: 1,
        title: "输入素材：@bigjusir 的挠痒高跟鞋白模视频",
        description:
          "Video1 用的是 @bigjusir 发的灰模动画（7 秒、3:4、带原音轨；他自称是大四建模作品）：一双带尖刺和齿状鞋底的镂空绑带高跟鞋，鞋弓里的弧形活动件来回拨动脚底。GeekCatX 引用了这条帖子来做成片。原帖：https://x.com/bigjusir/status/2104013401475436713 。白模的建模方法和出图提示词作者都没公开。",
        video: "/tutorials/geekcatx-tickle-heels-whitemodel-seedance-2-5/input-whitemodel.mp4",
        poster: "/tutorials/geekcatx-tickle-heels-whitemodel-seedance-2-5/input-whitemodel-poster.jpg",
        aspectRatio: "3/4",
      },
      {
        number: 2,
        title: "第二步：准备角色卡（image1）",
        description:
          "提示词里的 <Subject 2> 是 image1 角色卡上的成年女性：棕色低发髻、脸侧碎发、白色长袖裹身短上衣、浅灰米色运动内搭、灰色高腰短裤。作者没有公开这张角色卡，需要自己先做一张。",
      },
      {
        number: 3,
        title: "第三步：写主体定义和强制结构约束",
        description:
          "subject_definitions 把 Video1 定成鞋子、image1 定成人物、Audio1 定成白模原音轨；再用【强制结构约束】写死：足弓下方必须左右贯通、能看到背景，不能被鞋底或鞋面填实，活动件的轨迹、幅度、速度都照参考视频。",
      },
      {
        number: 4,
        title: "第四步：按时间码写 5 个镜头，一次生成 15 秒",
        description:
          "Shot 1 全身起身 → 00:02.5 鞋子侧面低机位特写 → 00:05.5 中景推脸忍笑 → 00:08.5 迈步怕痒、坐回长凳 → 00:10.5 脱右鞋挠脚底。声音只参考 Audio1 原有的层，加轻笑和吸气，不加台词。作者在评论区回复用的是 Seedance 2.5。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "0–2.8s 全身：她穿着灰色尖刺高跟鞋坐在长凳上，低头看鞋后扶凳站起。" },
      { number: 2, description: "2.8–5.75s 鞋子侧面低机位特写：镂空鞋弓里的弧形活动件来回拨动脚底。" },
      { number: 3, description: "5.75–8.9s 中景坐姿，镜头推到脸部特写：憋笑、闭眼、再笑开。" },
      { number: 4, description: "8.9–15s 全景：站着笑到弯腰，坐回长凳，脱下一只鞋放在旁边，捧着脚笑。" },
    ],
    constraints:
      "鞋子外形、镂空结构和活动件运动全照 Video1，镂空不能被鞋底或鞋面填满；人物照 image1 角色卡，全片同一人同一双鞋；声音只参考 Audio1 原有的层，不加台词和配乐。与成片不符：提示词写 9:16，成片是 834×1112（3:4）；提示词分 5 个镜头，成片 8.9s 后是一个连续全景，没有单独切「脱鞋挠脚」镜头，也看不清手指挠的是不是足弓；白模里的活动件更宽、像舌头，成片里是细一些的弧形钩。缺口：作者没有公开 image1 角色卡；提示词是成片发出约 3 小时 44 分后才补在另一条帖子下面的，作者没有明说这就是这条成片用的那版；白模的制作方法没有公开。",
    video_prompt: {
      title: "挠痒高跟鞋试穿 · 白模视频 + 角色卡 · 15s",
      subtitle: "Seedance 2.5 · 中文完整提示词（作者自回复长帖；开头的站点推广链接未收录）",
      content: `subject_definitions:  
<Subject 1> 是Video1中的同一双开放式绑带高跟鞋，保留鞋带、前掌承托部分、高跟、尖刺、齿状边缘和内部弧形活动件的原有形状与比例。  
【强制结构约束】 足弓下方必须是左右贯通、能够透视背景的真实镂空空间。前掌承托部分与后跟之间，不能被连续鞋底、实心楔形块、鞋面、皮革、薄膜或新增支撑板填满。 脚底足弓属于人物身体，使用真实肤色；灰模中的脚背与脚部不能被误识别为封闭鞋面。 镂空内部只保留参考视频原有的结构和活动件。活动件运动时，周围仍然存在清楚可见的空隙。 鞋子的整体灰色外观、鞋跟高度、开口轮廓、尖刺与齿状细节，以及活动件的轴线、轨迹、幅度和速度，全部以参考视频为准。  
<Subject 2> 是image1
角色卡中的同一位成年女性。固定她的面容、棕色低发髻、脸侧碎发、自然肤色、白色长袖裹身短上衣、浅灰米色运动内搭、灰色高腰短裤及身体比例。双腿和双脚保持真实皮肤质感。

Audio1
是白模视频的原始音轨。仅参考其中实际存在的环境声、产品动作声和配乐层；人物声音采用自然的忍笑、短促吸气和笑后的呼吸。
  summary:  [reference generation + audio reference] 生成一支15.00秒、9:16竖屏的写实产品喜剧演示。
<Subject 2> 穿着 <Subject 1>，鞋内活动件按照参考视频的原有方式运动。画面先明确展示贯通的镂空结构，再表现人物从突然感到痒、努力忍笑，到坐下脱鞋、短暂挠脚底的连续反应。人物脸颊随着笑意逐渐泛红。   retention_analysis:  <Subject 1>（出现在全部镜头）： fully_preserved — 完整保留参考鞋子的开放式结构、贯通镂空、外观比例、绑带位置和内部活动件运动。人物动作不能导致镂空闭合、鞋底增厚或结构变形。  <Subject 2>（出现在全部镜头）： fully_preserved — 保留角色卡中的人物身份、服装和身体比例；表情与脸颊泛红是本次演示新增的自然状态变化。  <Audio 1>： reference — 参考原轨实际存在的环境、动作和配乐层，保持其声音特征，自然衔接至15秒；人物发声采用非性化的自然笑声与呼吸。   detailed_description:  15.00秒，9:16竖屏，写实风格。场景为简洁明亮的试穿展示间，浅灰墙面、平整地面和稳固长凳。侧面柔光清楚照亮人物面部、脚部以及鞋弓镂空的内外边缘。全片始终是同一位人物和同一双鞋。  [Shot 1] 三分之四角度的全身画面。<Subject 2> 坐在长凳上，双脚已经穿好 <Subject 1>。她低头查看鞋子，带着好奇的浅笑，随后扶着长凳缓缓站起。面容、发型和服装与角色卡一致。两只鞋完整入镜，脚背与足部是人物的真实皮肤，绑带贴合在皮肤表面。鞋弓下方保持开放，能够看见后方地面。  [Shot 2] At 00:02.500, 切到鞋子的侧面近景，采用能够清楚看穿镂空区域的低机位。足弓下方是贯通空腔，镜头可以从开口看见另一侧背景，前掌承托部分与后跟之间没有填充物。  弧形活动件按

Video1

的原有轨迹往复运动，呈现其对脚底足弓的挠痒作用。只有参考中的活动件按照原有方式运动，外围鞋跟、尖刺、齿状边缘和承托结构保持稳定。她的脚趾轻轻收紧，脚踝随痒感短暂缩动。即使脚部移动，镂空仍然清楚可辨。  [Shot 3] At 00:05.500, 切至人物中景。她眉毛突然抬起，眼睛睁大，嘴角随即不由自主地上扬。她抿住嘴想忍笑，鼻尖轻轻皱起，肩膀缩了一下，一只手抓住长凳边缘稳住身体。  镜头小幅推近她的脸：眼角逐渐弯起，笑意越来越难以掩饰，双颊出现自然的淡粉色。她低头看鞋，又抬眼露出惊讶而觉得好笑的表情。声音是短促吸气和没有完全憋住的轻笑。  [Shot 4] At 00:08.500, 切回包含面部与双腿的中全景。她试着迈出一小步，随后因为怕痒停住，轻弯膝盖，左右脚短暂交换重心。鞋内活动件继续按参考视频的规律运动。  她忍不住笑出声，眼睛眯起，上身稍微前倾，一只手扶住长凳。脸颊比上一镜略红，保留自然肤色和皮肤细节。她转身坐回长凳，动作连贯、平衡稳定。  [Shot 5] At 00:10.500, 三分之四角度的中全景同时保留人物面部、双手和鞋子。她坐稳后解开右脚鞋带，将右脚抽出，随后用手指在刚受到刺激的脚底足弓处短促挠两三下。手指接触的是脚底足弓，不是脚背、脚踝或小腿。  她边笑边缓一口气，紧绷的眉间逐渐放松，泛红的脸颊和自然笑容保持连贯。右鞋完整地放在旁边，侧面朝向镜头，贯通镂空依旧能看见背景；左脚仍穿着另一只鞋。最后她看向鞋内的活动件，露出无奈又好笑的神情，画面保持到00:15.000。   
overall_soundscape:  环境与产品动作声音参考

Audio1

实际包含的声音层。人物声音为自然的轻笑、忍笑时的短促吸气、笑出声以及笑后的正常呼吸，随表情和身体动作同步变化。没有新增台词。 

 non_diegetic_music:  仅参考

Audio1

实际存在的配乐层，保持其原有风格和音量关系。原轨没有配乐时，目标视频不额外添加。`,
    },
  },
  // 查重别名(提示词自回复帖): https://x.com/ZephyraLeigh/status/2103849350736842794
  // 查重别名(引用帖：同作者 Switch 2 开箱，未附提示词): https://x.com/ZephyraLeigh/status/2102033368544329958
  {
    id: "zephyra-tiny-gimbal-camera-unbox",
    title: "口袋云台相机开箱 · 创作者向评测",
    subtitle: "X · @ZephyraLeigh · Seedance 2.5 · 30秒 · 16:9",
    description:
      "Seedance 2.5 口袋云台相机开箱：女博主 Zephyra 拆箱、比大小、讲三轴防抖，30 秒一段生成带口播。",
    video: "/tutorials/zephyra-tiny-gimbal-camera-unbox/demo-web.mp4",
    poster: "/tutorials/zephyra-tiny-gimbal-camera-unbox/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "科技开箱",
    shots: 6,
    references: 0,
    model: "Seedance 2.5",
    style: "YouTube 科技评测 · 创作者工作室 · 口播 + 产品微距",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2103849346198655342",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 943,
    sourceStats: { asOf: "2026-09-27", likes: 22, reposts: 3, bookmarks: 6 },
    formats: ["产品广告"],
    hook: {
      structure: "口播开场 → 俯拍开箱 → 比大小 → 云台演示 → POV 试拍 → 第一印象",
      opening: "第 0 秒是双手按着桌上还没拆的相机包装盒，约 2s 切到 Zephyra 拿着盒子对镜头开口。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 5s 俯拍掀开盒盖，从盒里取出相机；约 8s 回到桌前中景摆放配件；约 11s 把相机举在手机旁边比大小。", at: 5 },
        { title: "功能演示", text: "约 13–16s 手部近景转动相机、露出云台和屏幕；约 17s 她站起来拿着相机走几步。", at: 13 },
        { title: "结尾怎么收", text: "约 21–23s 切成相机视角在工作室里移动的试拍画面；约 24s 回到她把相机举近镜头，说出第一印象结束。", at: 21 },
      ],
      copyThis: "提示词按秒写死 6 段（钩子、开箱、盒内物品、功能、实测、第一印象），每段一个机位加一句台词，口播和产品镜头交替切。",
      approx: true,
    },
    tags: [
      "30秒 · 科技开箱",
      "16:9 横屏",
      "Seedance 2.5",
      "口播 + 产品微距",
      "同一虚拟博主系列",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：锁定博主形象和工作室",
        description:
          "提示词开头要求保留 Zephyra Leigh 的脸、发型、身材、声音和人设，并给她换一身固定服装：米色针织上衣、深棕色高腰裤、金色手表、小耳饰和细手链；场景是摆着摄像机、麦克风、笔记本和柔光灯的创作者工作室。作者没有公开人物参考图。",
      },
      {
        number: 2,
        title: "第二步：按秒写 6 段口播和机位",
        description:
          "0–4s 钩子（相机从盒中取出、凑近镜头、自我介绍）→ 4–9s 俯拍开箱 → 9–14s 摆出盒内物品并和手机比大小 → 14–21s 云台微距和触屏演示 → 21–26s POV 式试拍 → 26–30s 第一印象。每段都写好了英文台词。",
      },
      {
        number: 3,
        title: "第三步：整段贴进 Seedance 2.5",
        description:
          "把下方完整提示词贴进 Seedance 2.5，一次生成 30 秒带口播的视频。结尾写了镜头、声音、表演、画质要求和禁止项：全名只在开场说一次，服装保持一致，不要科幻元素、夸张反应、畸形手指和假的产品互动。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "0–5s 双手按着未拆的相机包装盒；切到 Zephyra 拿着盒子对镜头自我介绍。" },
      { number: 2, description: "5–8s 俯拍掀开盒盖，取出相机，盒里有相机、保护套、配件。" },
      { number: 3, description: "8–12s 回到桌前中景摆放配件，把相机举在手机旁边比大小。" },
      { number: 4, description: "13–19s 手部近景转动相机、露出云台和屏幕；她站起来拿着相机走几步。" },
      { number: 5, description: "20–23s 相机装在杆上，切成相机视角在工作室里移动的试拍画面。" },
      { number: 6, description: "24–30s 回到她把相机举近镜头，说出第一印象，自然微笑。" },
    ],
    constraints:
      "保留同一位博主的脸、发型、身材、声音和人设；服装全程一致；全名只在开场说一次；真实的手部、手指和产品互动，不要科幻、全息、卡通、夸张反应和画面故障。与成片不符：开场不是提示词写的「从盒中取出相机的微距」，而是先拍未拆的包装盒；包装盒上的品牌字是乱码（类似「NUCEPOVIG」）；21–26s 的 POV 试拍拍的是空工作室，没有像提示词写的那样跟拍她的脸。缺口：作者没有公开人物参考图；口播音频没有转录核对。",
    video_prompt: {
      title: "Tiny Gimbal Camera Unboxing · Creator Review · 30s",
      subtitle: "Seedance 2.5 · 16:9 · 英文完整提示词（作者自回复长帖）",
      content: `Create an ultra-realistic professional YouTube Shorts camera unboxing featuring Zephyra Leigh, the same female technology creator. Preserve her exact face, hairstyle, body proportions, voice, personality, and recognizable creator identity.

OUTFIT: Give Zephyra a fresh premium creator outfit: fitted beige knit top, high-waisted dark-brown trousers, elegant gold-tone watch, small minimalist earrings, and a delicate bracelet. Natural polished hairstyle and subtle professional makeup. Keep this outfit completely consistent throughout the video.

She is filming in a premium creator studio with a clean desk, professional camera, microphone, laptop, soft studio lighting, and tasteful filmmaking equipment in the background.

0–4s — STRONG VISUAL HOOK

Start with an extreme macro shot of the tiny camera being lifted from its sealed box.

Zephyra brings the camera directly toward the lens, showing how incredibly small it is.

She looks at the camera and says:

“Hey everyone, I’m Zephyra Leigh — and this tiny camera could completely change the way you vlog. Let's unbox it.”

She immediately opens the package.

4–9s — UNBOXING

Overhead shot.

She opens the box and reveals the compact gimbal camera, protective cover, battery/accessories, charging cable, and documentation.

She picks up the camera and rotates it toward the lens.

“Look at how small this thing is.”

She unfolds the camera and turns on its display.

9–14s — WHAT'S IN THE BOX

She neatly arranges the contents on the desk.

“Inside, you've got the camera, protective accessories, charging cable, and everything you need to start shooting.”

She holds the camera beside a smartphone for a quick size comparison.

14–21s — FEATURES & BENEFITS

Macro close-up of the camera's moving gimbal.

She rotates the camera and demonstrates the touchscreen.

She says:

“The cool part is the built-in three-axis gimbal. It physically stabilizes the camera while you move, so your walking shots can look much smoother.”

She walks a few steps while holding the camera, demonstrating stabilized footage.

21–26s — CREATOR TEST

Show a quick realistic POV-style sample of Zephyra walking through the studio while the camera smoothly tracks her face.

She says:

“And because it's so small, you can literally carry it anywhere — perfect for travel, daily vlogs, and quick creator shots.”

26–30s — FIRST IMPRESSION

Zephyra holds the camera close to the lens.

“First impression? Tiny, stabilized, and seriously creator-friendly. Now let's test the video quality.”

Natural confident smile.

CAMERA: professional YouTube creator cinematography, extreme macro product shots, overhead unboxing angle, medium talking-head framing, smooth camera movement, realistic autofocus, natural focus breathing, authentic creator B-roll.

AUDIO: crystal-clear professional female creator voice, realistic packaging sounds, protective case clicks, camera startup sound, gimbal motor movement, subtle studio ambience.

PERFORMANCE: Zephyra behaves like an experienced camera and creator-tech reviewer — confident, conversational, knowledgeable, and genuinely curious. She explains what each feature is, how it works, and the practical benefit for creators.

VISUAL QUALITY: ultra-photorealistic, premium YouTube production, realistic skin texture, accurate hands and fingers, physically accurate camera and accessories, realistic reflections, natural facial expressions, believable product handling.

IMPORTANT: Say “Zephyra Leigh” only during the opening introduction. After that, use only “Zephyra” if referring to her. Keep the outfit consistent. No sci-fi elements, no holograms, no exaggerated reactions, no cartoon, no anime, no distorted hands, no extra fingers, no glitches, no fake-looking product interaction.`,
    },
  },
  // 查重别名(用户提交的提示词回复帖): https://x.com/EEJ_OOXO/status/2103905936998068258
  // 查重别名(作者补充：提示词需让 GPT 按自己角色改写): https://x.com/EEJ_OOXO/status/2103989667939172631
  // 查重别名(作者补充：动作参考视频): https://x.com/EEJ_OOXO/status/2103997179581059422
  // 查重别名(引用帖：动作梗原视频，真人): https://x.com/LioraSolveil/status/2103872764868542495
  {
    id: "eej-ooxo-selfie-hand-sweep-face-switch",
    title: "手一扫就变脸 · 双人自拍整活",
    subtitle: "X · @EEJ_OOXO · 3 张参考图 + 动作参考视频 · 10秒 · 1:1",
    description:
      "动作参考视频驱动的双人自拍整活：闺蜜手一挡一扫，前面的她在咧嘴笑和面无表情间来回切换，最后两人笑崩。",
    video: "/tutorials/eej-ooxo-selfie-hand-sweep-face-switch/demo-web.mp4",
    poster: "/tutorials/eej-ooxo-selfie-hand-sweep-face-switch/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "自拍整活",
    shots: 1,
    references: 0,
    model: "未注明（参考图 + 动作参考视频驱动）",
    style: "手机前置自拍 · 粉色阁楼卧室 · 一镜到底",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/EEJ_OOXO/status/2103905933999091826",
    sourceAuthor: "@EEJ_OOXO",
    sourcePlatform: "X",
    sourceImpressions: 35597,
    sourceStats: { asOf: "2026-09-27", likes: 280, reposts: 34, bookmarks: 277 },
    formats: ["角色表演", "手机POV·Vlog"],
    hook: {
      structure: "两人板着脸 → 手扫过就变脸，反复切换 → 一起笑崩",
      opening: "第 0 秒是手机前置自拍：戴橙色星星帽、扎双麻花辫的女孩在前，黑长发穿灰西装的闺蜜贴在她右后方，两人都面无表情看镜头。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 0.5s 起，后面的闺蜜两只手一上一下交替从前面女孩脸上扫过；每扫一下，前面的她就在咧嘴大笑和闭嘴面无表情之间切换一次，闺蜜全程板着脸，一直持续到约 8.5s。", at: 0.5 },
        { title: "结尾怎么收", text: "约 9s 闺蜜放下手，两人同时笑崩，张大嘴、眯眼、肩膀抖动，笑着结束。", at: 9 },
      ],
      copyThis: "动作和表情节奏全部交给一段真人动作参考视频，提示词只负责换人、换场景和补最后 1 秒的笑场。",
      approx: true,
    },
    tags: [
      "10秒 · 自拍整活",
      "1:1 方屏",
      "3 张参考图 + 动作参考视频",
      "一镜到底 · 手机前置视角",
      "变脸梗 · 双人",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备 3 张参考图（image_1–3）",
        description:
          "image_1、image_2 是两个角色的设定图，每张都要有一张大尺寸脸部特写，全身图上的灰色圆圈是遮挡标记、不能出现在成片里；image_3 是房间图，决定卧室的结构、陈设、配色和光线。作者没有公开这 3 张图，也没有给出图提示词，需要自己准备。",
      },
      {
        number: 2,
        title: "第二步：准备动作参考视频（video_1）",
        description:
          "前 9 秒的手部动作、表情切换时机、点头和两人站位，全部照搬 video_1。作者在回复里放出了他用的动作视频（一段两人自拍变脸的真人梗视频，16:9 带黑边），提示词里要求成片铺满画面、不要保留参考视频的黑边，也不要继承参考视频里人物的长相和衣服。",
      },
      {
        number: 3,
        title: "第三步：先让 GPT 按你的角色改写，再贴进视频模型",
        description:
          "作者特别提醒：这段提示词是按他自己的角色和房间写的，不能直接照搬，要先丢给 GPT，让它按你的角色和场景改写。改好后连同 3 张图和动作视频一起交给视频模型。作者没有说明用的是哪个视频模型。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "0–0.7s 前置自拍，两人面无表情看镜头；后面的闺蜜一只手举到帽子上方，另一只手放在前面女孩脸下方。" },
      { number: 2, description: "0.7–9s 闺蜜两只手上下交替扫过前面女孩的脸，前面的她在咧嘴大笑和闭嘴面无表情之间来回切换，闺蜜始终板着脸。" },
      { number: 3, description: "9–10s 闺蜜放下手，两人同时大笑，肩膀抖动，画面轻微晃动，笑着结束。" },
    ],
    constraints:
      "只能有两个人；前面的女孩全程拿着手机，手和手机都不能入镜；一镜到底，不剪辑、不变焦、不绕拍；手扫过时人物的脸、发型、衣服和配饰不能变，帽子不能掉，外套保持露肩；保持参考动作的方向，不要左右镜像；不要镜子画面、多余的手、字幕和换装；最后 1 秒两人的笑声和表情同步。与成片不符：后面闺蜜的手腕上戴着一块表，提示词里没写，像是从动作参考视频带过来的。缺口：作者没公开 image_1–3 这 3 张参考图，也没给出图提示词；成片右上角有一个像素风「G」字水印，看不出是哪个平台；动作参考视频是真人素材，只留在本地，没有放进教程；音频没有核对。",
    video_prompt: {
      title: "双人自拍变脸 · 视频提示词",
      subtitle: "10s · 1:1 · image_1–3 + video_1 · 英文完整提示词（作者回复长帖）",
      content: `SCENE CONTEXT
A playful selfie video of two friends inside the colorful attic bedroom in <<<image_3>>>. Recreate the hand-sweep and expression-switching gag from <<<video_1>>> for the first nine seconds. During the final second, both break into spontaneous, wide-mouthed laughter.

ACTIVE REFERENCES / REFERENCE USAGE
<<<image_1>>> defines the foreground character’s identity, hair, body proportions, and complete outfit: orange star cap, twin braids, white keyhole crop top, cream jacket worn off the shoulders, and matching accessories.
<<<image_2>>> defines the rear character’s identity, hair, body proportions, and complete outfit: long black hair with bangs, gray suit, white blouse, and black choker with an orange bead.
Use the large facial portrait on each sheet for facial identity. The gray circles on the full-body views are reference masks and must not appear.
<<<image_3>>> defines the room’s architecture, furnishings, colors, and lighting. Adapt its viewing angle to the selfie camera.
<<<video_1>>> controls the first nine seconds of hand choreography, facial-expression timing, head movements, and relative character placement. Its performers’ appearances and clothing do not transfer.

FIRST FRAME
The video begins directly through the phone’s front-facing camera. <<<image_1>>> holds the phone at arm’s length, approximately at eye level, with her holding hand and phone outside the frame. Her face and upper chest fill the foreground. <<<image_2>>> is close behind her, slightly offset toward screen-right, with her face clearly visible beside <<<image_1>>>’s head. Both initially look into the lens with straight faces.

WORLD AND SPATIAL BLOCKING
They are positioned on the pink rug near the foot of the bed, with the blue photo-covered wall behind them. Portions of the pastel sloped ceiling and warm string lights remain visible above their heads; the bed and bright curtained window appear toward screen-right.
Keep the room consistent with <<<image_3>>>, allowing the tight selfie framing to crop most furniture.
<<<image_1>>> holds the phone throughout. <<<image_2>>> has both hands free to perform the gesture around <<<image_1>>>’s face. Maintain their front-to-back arrangement.

SHOT FORMAT
One continuous 10-second selfie take. The selfie image fills the output frame without the reference video’s black side padding. No cuts or external views of them filming.

OPTICS AND CAMERA
Natural front-camera perspective at arm’s length, with both faces readable and enough space above <<<image_1>>>’s cap for the hand movements.
Keep the camera almost stationary during the gag, matching the reference’s stable composition with only slight natural hand drift. During the final laughter, allow a small, believable wobble from <<<image_1>>>’s shaking shoulders while keeping both faces in frame. No zoom, orbit, or dramatic reframing.

ACTION / PERFORMANCE TIMING
0.0–0.7s:
Match the reference’s brief neutral opening and hand preparation. <<<image_1>>> keeps a straight face. <<<image_2>>> raises one open hand above the cap and positions the other below <<<image_1>>>’s face.

0.7–9.0s:
<<<image_2>>> reproduces the reference’s rapid alternating hand sweeps, exchanging the upper and lower hand positions and briefly obscuring <<<image_1>>>’s face as they pass.
<<<image_1>>> switches between a broad toothy grin and a closed-mouth neutral expression at the corresponding moments in <<<video_1>>>. Preserve the original sweep directions, pace, short expression holds, blinks, and small head dips. <<<image_2>>> remains deliberately deadpan.
Use the reference’s precise motion timing rather than inventing additional gestures.

9.0–10.0s:
The gag breaks. <<<image_2>>> stops sweeping and lowers her hands clear of both faces. Both simultaneously burst into broad, open-mouthed laughter: cheeks lift, eyes crinkle, and shoulders bounce naturally. <<<image_2>>> leans slightly closer beside <<<image_1>>> so both laughing faces remain visible. <<<image_1>>> keeps holding the phone. End while both are still laughing, without a freeze or posed finish.

PHYSICS AND CONTINUITY
Maintain each character’s face, hairstyle, clothing, and accessories through all hand occlusions. Expressions change naturally without identity morphing. <<<image_2>>>’s hands remain anatomically connected to her arms.
<<<image_1>>>’s orange cap stays securely on, her braids remain intact, and her cream jacket stays off her shoulders. Keep the hand choreography clear of the cap brim. Preserve natural hair and fabric movement.

LIGHTING
Use the bedroom’s soft window daylight from screen-right, balanced with the warm glow of the string lights. Keep both faces properly exposed and the pastel room recognizable. Lighting and exposure remain stable.

AUDIO
No added dialogue or narration. During the final second, both characters’ natural laughter begins in sync with their visible expressions, over quiet room ambience.

LOCAL CONSTRAINTS
Exactly two characters. Preserve the reference choreography’s screen direction without reversing it. Keep the phone outside its own camera view. No mirror shot, extra hands, face masks, captions, wardrobe changes, or unrelated action.`,
    },
  },
  // 查重别名(同帖 Seedance 2.0 对比版，未收录): https://x.com/nastassiavideo/status/2100837082243407929/video/2
  {
    id: "nastassiavideo-burger-seedance-2-5",
    title: "暗调汉堡广告 · 14 镜头快切",
    subtitle: "X · @nastassiavideo · Seedance 2.5 · 15秒 · 16:9",
    description:
      "Seedance 2.5 双层芝士汉堡广告：压肉饼、抛饼、切番茄、淋芝士、一刀插穿，14 个镜头硬切 15 秒。",
    video: "/tutorials/nastassiavideo-burger-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-burger-seedance-2-5/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "美食广告",
    shots: 14,
    references: 1,
    model: "Seedance 2.5",
    style: "暗调美食广告 · 微距 + 急推急刹 · 硬切蒙太奇",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2100837082243407929",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 1240,
    sourceStats: { asOf: "2026-09-27", likes: 31, reposts: 1, bookmarks: 4 },
    formats: ["产品广告"],
    hook: {
      structure: "压肉饼微距 → 人物亮相 → 食材快切 → 组装 → 推板 → 一刀插穿定格",
      opening: "第 0 秒直接是铁板上铲子把牛肉球压扁的低角度微距，约 2s 切到穿 NastassiaVideo 围裙的她抬眼看镜头。",
      openingAt: 0,
      beats: [
        { title: "食材快切", text: "约 3–4s 铲起肉饼、手腕一抖把肉饼抛起；约 5s 刀切番茄；约 6s 生菜叶逆光；约 7s 芝士淌过肉饼边缘。", at: 3 },
        { title: "组装成型", text: "约 8s 双层芝士汉堡成品；约 9s 手指把芝麻顶盖按上；约 10–11s 她把木板推向镜头，镜头后退露出人。", at: 8 },
        { title: "结尾怎么收", text: "约 12s 她拿起主厨刀；约 13–14s 刀从顶盖正中插穿整个汉堡；约 15s 刀立在汉堡上，她站在后面看镜头定格。", at: 12 },
      ],
      copyThis: "开头三段先写人物、产品、场景三张参考的文字说明，再逐镜头写「镜头焦段 + 动作 + 镜头怎么加速/刹车 + <音效>」，最后用一段总运镜规则统一节奏。",
      approx: true,
    },
    tags: [
      "15秒 · 美食广告",
      "16:9 横屏",
      "Seedance 2.5",
      "14 镜头逐条写",
      "音效写在尖括号里",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：先用文字写清三张参考",
        description:
          "提示词开头三段分别描述人物 Nastassia（灰蓝眼睛、浅棕层次中长发、黑 T 恤、印白字 NastassiaVideo 的黑围裙）、双层芝士汉堡（芝麻布里欧修面包、两块压扁牛肉饼、切达芝士、生菜、番茄、紫洋葱、酸黄瓜、酱，层序固定）和暗调专业厨房，每段末尾挂一个参考图占位符。作者在主帖贴出了人物 Nastassia 的设定图（正脸、侧脸、背面发型、围裙正背面全身），对应第一段的人物参考占位符；汉堡和厨房两张参考图作者没有公开。",
      },
      {
        number: 2,
        title: "第二步：定整体影调，再逐镜头写 14 条",
        description:
          "总述写 ARRI Alexa 35 质感、24fps、胶片颗粒、90% 画面是深青灰阴影、只留一处琥珀色火光。随后 Shot 1–14 每条都写焦段（24/35/50/85/100mm）、动作、镜头怎么急推急刹，以及尖括号里的音效，比如 <heavy dull thud, aggressive sizzle>。",
      },
      {
        number: 3,
        title: "第三步：用总运镜规则收尾，贴进 Seedance 2.5",
        description:
          "最后一段总规则：冲向动作、在质感上刹车、放进下一刀；广角和微距交替；只在压肉、抛饼最高点和最后一刀用变速；不要环绕、数码变焦、漂浮食材、台词、字幕和片尾字。整段贴进 Seedance 2.5 一次生成。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-burger-nastassia-sheet",
        number: "1",
        title: "人物 Nastassia · 设定图",
        subtitle: "对应提示词第一段人物参考 <<<ff948aa7…>>>；主帖第二张图原件（1600px 压缩）",
        image: "/tutorials/nastassiavideo-burger-seedance-2-5/refs/nastassia-character-sheet.jpg",
        prompt: "作者未公开这张设定图的出图提示词。",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2s 铁板上铲子压扁牛肉球、铲起煎好的肉饼。" },
      { number: 2, description: "2–3s 她站在灶火前抬眼看镜头，微笑。" },
      { number: 3, description: "3–5s 铲子铲肉饼、手腕一抖把肉饼抛到空中。" },
      { number: 4, description: "5–7s 刀切番茄、逆光生菜叶、芝士从肉饼边缘淌下。" },
      { number: 5, description: "8–9s 双层芝士汉堡成品，手指按上芝麻顶盖。" },
      { number: 6, description: "10–12s 她把木板推向镜头，拿起主厨刀。" },
      { number: 7, description: "13–15s 刀从顶盖插穿汉堡，刀立在汉堡上，她在后面看镜头定格。" },
    ],
    constraints:
      "人物脸和围裙字样、汉堡层序与比例都要和参考一致；变速只用在压肉、抛饼最高点和最后一刀；不要环绕、数码变焦、漂浮食材、镜头穿过实物、台词、人声、字幕、片尾字。与成片不符：提示词写 18 秒、24fps，成片约 15.5 秒、30fps；Shot 6 切紫洋葱在成片里没有出现；Shot 9 两块肉饼落到底座的过程被跳过，约 8s 直接是组装好的汉堡；Shot 2 人物亮相排在第 2 秒，前面只有压肉一镜。缺口：提示词里的汉堡和厨房两张参考图作者没有公开；背景音乐和音效没有逐条核对。",
    video_prompt: {
      title: "Burger Battle · Dark Food Commercial · 14 Shots",
      subtitle: "Seedance 2.5 · 16:9 · 英文完整提示词（作者贴出的提示词截图，逐字转录）",
      content: `Nastassia — grey-blue eyes, layered light-brown medium-length hair, natural skin texture, body proportions, black T-shirt, black apron with exact white lettering "NastassiaVideo", black trousers, bare hands, no jewelry — facial identity and wardrobe reference <<<ff948aa795194c81bcf50e89bee4d1b3>>>.

Signature premium burger — sesame brioche bun, two smash beef patties, melted cheddar, lettuce, tomato, purple onion, pickles, sauce, strict layer order preserved — product reference <<<Element_Бургер_На_Доске_key_img>>>.

Dark professional cooking stage — charcoal-metal counter, cast-iron griddle screen-left, dark walnut board centre, skillet on rear gas burner with open flame, near-black background, neutral soft side key light, warm amber firelight rim, deep negative fill — scene reference <<<Element_Кухонная_Сцена_Гриль_key_img>>>.

Single continuous 18-second cinematic food commercial. ARRI Alexa 35 look, 24fps, fine film grain, controlled highlight roll-off, deep teal-charcoal shadow tones dominating 90% of frame, single warm amber practical flame accent. Hard editorial montage across 14 distinct phases with fast camera accelerations, braking textures, motivated scale changes, and short speed ramps.

Shot 1 — SMASH:
Extreme low griddle-level macro (85mm). Spatula drives beef ball hard onto hot steel mid-action; fast camera push with recoil on impact. Brief slow-motion shows meat spreading laterally, fat droplets scattering, steam rising. Return to real speed as spatula lifts. <heavy dull thud, aggressive sizzle>.

Shot 2 — FACE REVEAL:
Low medium shot (35mm). Camera rises fast from her hand and "NastassiaVideo" apron lettering up to her face and brakes. She raises her eyes directly into lens with a controlled, confident half-smile. Warm burner flare rims her shoulder and hair. <guitar riff enters>.

Shot 3 — CRUST SCRAPE:
Extreme macro (100mm). Spatula blade races laterally under browned patty, camera tracks alongside then brakes as crust peels from hot steel. Fat bubbles visible at patty edge. Blade rises and partially occludes lens as cut approaches. <metal scrape, sizzle>.

Shot 4 — TOSS AND CATCH:
Low close shot (50mm). Wrist flick launches patty above skillet; camera arcs upward briefly. Brief slow-motion at apex — patty suspended, juice droplets frozen. Snap to real speed, camera dips and brakes on sizzling pan landing. One intact patty settled in skillet. <sizzle burst on landing>.

Shot 5 — TOMATO CHOP:
Board-level macro, tight on the tomato and knife blade. Knife descends fast and strikes the tomato with full physical force — blade makes hard, clear contact with the walnut board in a single decisive downward chop; camera fires a rapid short push-in toward the blade at the instant of contact then immediately snaps into a sharp pull-back, creating a percussive whip recoil; tomato half falls forward toward lens. <sharp hard chop impact, blade-on-board crack>.

Shot 6 — ONION SNAP:
Tight overhead on purple onion ring at board surface. Knife comes down fast and clean — blade hits board with crisp audible contact, onion ring separates and drops flat; camera fires a short aggressive diagonal whip-slide right on the beat of impact then brakes hard; knife exits frame right with momentum. <dry sharp crack, blade-on-board snap>.

Shot 7 — LETTUCE:
Close macro. Rinsed lettuce leaf snapped once, releasing water droplets outward. Camera tracks right alongside ruffled edge. Backlit veins and droplets catch warm rim light. Quick rightward whip into next cut. <wet snap, droplets>.

Shot 8 — CHEDDAR EDGE:
Camera enters moving right, brakes into extreme macro. Melted cheddar folds over hot patty edge, glossy against dark seared crust. One fat bead travels slowly down the cheese face. Camera holds readable pause on texture.

Shot 9 — DOUBLE DROP:
Low close-up on dressed bottom bun — sauce pooled, lettuce layered, tomato placed. Two cheddar-covered patties arrive on spatula from above; camera surges toward them as she slides the stack onto the bun. Camera brakes on landing; cheese folds outward. Exactly two patties, stacked. <bass accent, heavy settle>.

Shot 10 — CAP IT:
Tight three-quarter overhead. Fingers lower sesame top bun onto onion, pickles, and sauce layer. Camera descends fast with bun. Soft bounce settle as bun seats; fingertips withdraw from frame. Finished burger matches reference proportions exactly. <soft compression>.

Shot 11 — MACRO RUSH:
Extreme side macro (100mm). Fast lateral pass across seared crust surface. Camera brakes at hanging cheddar edge and sauce bead. Foreground lettuce ruffles across lower frame revealing stack depth. Sharp texture held.

Shot 12 — BOARD CHARGE:
Low wide (24mm) aligned with walnut board. She drives the board forward, burger rushes toward lens as camera retires matching movement then travels slightly farther back, revealing her face and apron behind the burger. Board stops with wooden knock, camera brakes with natural inertia settle. Her hand releases the board edge. <wooden knock>.

Shot 13 — THE WINDUP:
Medium close three-quarter (50mm). Her right hand lifts chef's knife from beside the board. Camera pushes and tilts upward tracking blade steel — reflection travels along flat of knife. Knife point rotates downward above burger crown. Her left hand rests clear beside her body. She locks focused gaze toward lens. Brief musical dropout. Cut begins as downward stroke initiates. <silence before impact>.

Shot 14 — KNIFE / IMPACT / REVEAL (one continuous final shot, 35mm):
Rapid downward tracking whip-tilt follows hand and blade — knife penetrates centre of sesame bun crown and drives through all burger layers, tip lodging in walnut board; camera brakes hard at burger height on contact. Brief impact slow-motion: bun compresses around blade, sesame seeds scatter, cheddar shifts slightly, one tight camera recoil. <heavy wooden THUNK, final guitar hit>. Resume real speed — she releases handle and withdraws hand; camera accelerates backward and upward in a short 20-degree side arc, strong foreground parallax keeping knife handle dominant and clear of her face. Camera decelerates into stable hero composition: burger with embedded vertical knife dominating foreground, Nastassia behind with visible "NastassiaVideo" apron lettering, small satisfied smile, direct gaze into lens. Hold final image with subtle handheld breathing. (Heavy modern instrumental rock — tightly muted guitar, punchy bass, dry drums — guitar chord fades over faint grill sizzle).

Overall camera choreography:
accelerate toward action, brake on texture, release into next cut; alternate 24–35mm tracking wide shots with 85–100mm macro close-ups; wide lenses stay away from her face; vary movement direction with matching whip transition axes; speed ramps only on meat compression, patty apex, and final knife contact; strong foreground parallax throughout; controlled handheld inertia; short recoil on major impacts only. No continuous orbit. No digital zoom. No floating ingredients. No camera crossing solid objects. No prolonged slow motion beyond designated ramps. No speech. No vocals. No subtitles. No end title. No BAKU branding. No music added by model.`,
    },
  },
  // 查重别名(同帖 9:16 竖屏版，未收录): https://x.com/nastassiavideo/status/2099350859490492465/video/2
  // 查重别名(引用帖：同作者首次施工测试，9:16，另一条视频): https://x.com/nastassiavideo/status/2098705897195295194
  {
    id: "nastassiavideo-burj-khalifa-gravity-build-16x9",
    title: "哈利法塔重力切换建造 · FPV 一镜到底",
    subtitle: "X · @nastassiavideo · 模型未标注 · 15秒 · 16:9",
    description:
      "一镜到底 FPV：哈利法塔从工地地面开始，重力来回切换把钢梁、楼板、玻璃吸上去，15 秒盖完。",
    video: "/tutorials/nastassiavideo-burj-khalifa-gravity-build-16x9/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-burj-khalifa-gravity-build-16x9/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "建造过程",
    shots: 1,
    references: 1,
    model: "未标注（作者未公开）",
    style: "照片级建筑施工特效 · FPV 第一人称飞行 · 一镜到底",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2099350859490492465",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 14092,
    sourceStats: { asOf: "2026-09-27", likes: 99, reposts: 10, bookmarks: 72 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "贴地冲刺 → 碎屑上飞 → 钢构猛升 → 立面合拢 → 塔冠失重 → 高空全景",
      opening: "第 0 秒镜头贴着工地沙地朝远处的楼群冲，约 1s 地面扬起一片粉尘和碎屑。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2–4s 钢梁和碎片往天上飞，镜头跟着钢构往上爬；约 5s 穿过一层还没装立面的混凝土楼板。", at: 2 },
        { title: "立面合拢", text: "约 6–8s 银色立面一圈圈包上塔身，周围全是飞着的板材；约 9–10s 塔冠附近的环形构件在空中漂着一层层落下。", at: 6 },
        { title: "结尾怎么收", text: "约 11–12s 塔尖装好；约 13–15s 镜头拉到高空，整座哈利法塔和青绿色湖水完整入镜。", at: 11 },
      ],
      copyThis: "先写一条「重力方向顺序」（向上 → 向左 → 朝向建筑 → 向上 → 失重 → 向下），再按 0.1 秒精度的时间轴把每次切换对应一段施工阶段，参考图只管最终落成的样子。",
      approx: true,
    },
    tags: [
      "15秒 · 建造过程",
      "16:9 横屏",
      "FPV 一镜到底",
      "中文提示词",
      "1 张建筑参考图",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备一张落成后的建筑参考图",
        description:
          "作者贴出的参考图是一张竖版高空俯拍的哈利法塔落成图，带迪拜喷泉湖和周边楼群。提示词里用 @image1 引用它，只控制建筑身份和最终完成状态，不限制开场构图。作者在引用帖的回复里说，做法是先用 GPT 2.5 做出完整建筑，再拆成各施工阶段；这张图的出图提示词没有公开。",
      },
      {
        number: 2,
        title: "第二步：写规则，再写 0.1 秒精度的时间轴",
        description:
          "提示词先规定整体视觉、看不见的 FPV 摄影机、重力切换顺序和「接近 → 旋转 → 对齐 → 接触 → 锁定」的构件规则，然后把 15 秒切成 9 段：贴地突进、猛烈向上、切换向左、朝向建筑、高速装配、再次向上、环绕立面、失重、向下锁定，最后留 2.5 秒完整揭示。",
      },
      {
        number: 3,
        title: "第三步：比例选 16:9 生成",
        description:
          "提示词原文写的是「竖屏9:16」，作者说同一段提示词出了两版，这版 16:9 是忘了改画幅设置才出来的，她自己更喜欢这版（更有电影感）。跟做时整段照贴，把生成比例设成 16:9 即可。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-burj-image1",
        number: "1",
        title: "哈利法塔落成参考图（@image1）",
        subtitle: "主帖第 2 张图 · 941×1672 竖版高空俯拍",
        image: "/tutorials/nastassiavideo-burj-khalifa-gravity-build-16x9/refs/image1-burj-khalifa.jpg",
        prompt: "作者未公开这张参考图的出图提示词（作者在引用帖回复里提到用 GPT 2.5 先做完整建筑）。视频提示词中的用法：@image1 定义最终建筑及其环境的准确外观；参考图控制建筑身份和最终完成状态，不限制开场构图或飞行角度。",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2s 镜头贴着工地沙地冲向楼群，地面扬起粉尘碎屑。" },
      { number: 2, description: "2–4s 钢梁和碎片向上飞，镜头跟着钢构往上爬，下方露出城市和湖。" },
      { number: 3, description: "5s 穿过一层没有立面的混凝土楼板。" },
      { number: 4, description: "6–8s 银色立面包上塔身，空中飞满板材。" },
      { number: 5, description: "9–12s 塔冠附近的环形构件在空中漂浮、落位，塔尖装好。" },
      { number: 6, description: "13–15s 高空斜侧全景，整座哈利法塔和青绿色湖水完整入镜。" },
    ],
    constraints:
      "全程一镜到底，无剪切、无瞬移；画面里不能出现无人机、螺旋桨、摄影机或其影子；镜头只穿过真实的开放缝隙，不穿透实体；重力只作用于松散施工材料，已装结构、城市和湖泊固定；构件不融化、不复制、不凭空生长；无重力波、发光能量、力场图形；只要音效，无对白、音乐、字幕。与成片不符：提示词写「竖屏9:16」，这版成片是 16:9（作者说忘了改画幅）；约 4s 镜头就已经在高空俯看湖面，提示词里这时应该还在工地低处朝向建筑；「切换向左」「失重」这几次重力换向在画面里不容易分辨；成片约 15.1 秒、30fps。缺口：作者没有标注用的视频模型；参考图的出图提示词没公开；提示词截图里有两处字形模糊（「结构跨间」「连续建造进度」），按上下文校读；音频没有核对。",
    video_prompt: {
      title: "哈利法塔——重力切换建造",
      subtitle: "模型未标注 · 16:9 成片（提示词原文写 9:16）· 中文完整提示词（作者贴出的提示词截图，逐字转录）",
      content: `哈利法塔——重力切换建造

时长严格为15秒。竖屏9:16。
全程为一个连续、不可能的FPV第一人称飞行长镜头，一镜到底。
无剪切、无蒙太奇、无瞬移、无机位重置。

参考图：
@image1 定义最终建筑及其环境的准确外观：完整的哈利法塔建筑结构、比例、高度、楼层数量、逐级退台、向上收窄的轮廓、塔尖、银灰色立面、窗格排列、入口和裙楼。保留参考图中湖泊、道路、景观绿化及周围建筑的位置关系，不得凭空增加其他建筑。

参考图控制建筑身份和最终完成状态，不限制开场构图或飞行角度。镜头从尚未完工的工地地面开始。最终画面必须呈现100%建造完成、与@image1一致的建筑。

整体视觉：
照片级真实的建筑施工视觉特效。混凝土、钢材、钢筋和反射玻璃具有真实、可触知的材质细节。
匹配参考图中的定向阳光、偏冷的空气透视、青绿色湖水及银色立面高光。
太阳方向始终一致，不使用过度偏黄的调色。

摄影机：
完全不可见的第一人称飞行视点，使用直线投影广角镜头。
画面中绝不能出现无人机、螺旋桨、摄影机机身、支架、操作人员、摄影机阴影或反射。
采用贴地加速、猛烈爬升、倾斜转弯、环绕上升以及紧贴材料的掠飞。
镜头沿连续空间路径穿过真实的开放缝隙，绝不穿透实体表面。
高速加速时具有强烈视差和方向性运动模糊。
关键接触前短暂减速0.2秒，接触瞬间立即恢复高速。
摄影机始终保持运动。

建造与重力规则：
向上 → 向左 → 朝向建筑 → 向上 → 失重 → 向下。
每次重力切换时，所有松散施工物件、空中粉尘和第一人称视点同时作出反应。
重型构件沿急剧弯折的轨迹改变方向，同时保持清晰可读的惯性。
重力变化仅作用于该工地的松散施工材料；已安装结构、周围城市和湖泊始终固定。

每个构件必须遵循：
接近 → 旋转 → 对齐 → 接触 → 锁定。
构件接近连接位置时，沿精确引导路径就位。
建造从基础开始，依次推进至核心筒、楼层、退台、立面和塔尖。
已安装部分始终保持安装状态。
不融化、不变形融合、不复制、不凭空生长材料。
不出现可见重力波、发光能量或力场图形。

连续动作时间轴：
00:00–00:01.3 — 向上／贴地突进
镜头从粗糙平整地面上方20厘米处开始，快速冲向基础和裸露的下部核心筒。
一颗石头向上升起，碎石、螺栓和粉尘立即跟随。
镜头直接冲入向上流动的碎屑，侧身绕过一块混凝土碎片，同时保持向前速度。
00:01.3–00:02.6 — 猛烈向上
钢梁、钢筋笼、混凝土构件和管道向天空喷射。
第一人称视点被同时拉入猛烈的垂直爬升。
一根沉重钢梁从镜头旁几厘米处掠过，垂直粉尘尾迹突出加速度。
始终让未完成的塔楼位于前方，作为空间定位参照。
00:02.6–00:03.8 — 切换向左
重力骤然转向工地左侧。
所有空中材料同时急转向左，原本垂直的粉尘尾迹弯折至侧面。
视点倾斜并被甩向左侧，与材料一同移动，惊险避开一根旋转钢梁。
下方基础始终固定不动。
00:03.8–00:05.0 — 朝向建筑
重力重新指向裸露的建筑结构。
材料从相对的两侧向内汇聚，对准各自的连接位置。
镜头跟随一块混凝土楼板构件，猛烈加速冲向塔楼。
核心筒通过连续构件装配逐段升高。
00:05.0–00:06.5 — 高速装配突袭
立柱竖直就位，横梁锁定在支撑之间，楼板构件依次落入各层位置。
镜头穿行于裸露钢筋笼之间，并穿过一个开放的结构跨间。
一块巨大楼板迎面冲来；镜头立即向侧下方俯冲，穿过相邻的开放洞口。
楼板对齐时短暂进入仍在运动的慢动作，随后恢复全速接触——砰！
楼板紧贴视点后方重重就位，连接处爆出局部碎屑和粉尘。
在立面封闭前，镜头倾斜转弯，飞至建筑外侧。
00:06.5–00:07.5 — 再次切换向上
松散材料和粉尘突然沿弧线转向上方。
视点被重新拉入沿建筑外侧的垂直爬升。
尚未安装的钢梁高速掠过，立面模块沿塔楼向上升起。
下方已经完成的楼层保持刚性固定，建造前沿继续向上推进。
00:07.5–00:09.5 — 环绕立面风暴
镜头沿塔楼逐渐收窄的退台轮廓，快速螺旋上升。
通过连续向外和向内飞行，在紧贴立面的掠飞与较宽的环绕弧线之间变化。
银色玻璃模块从下方追上并超过视点，旋转朝向对应框架，在正确楼层锁定。
清晰呈现下方已经完成、上方仍为裸露结构的连续建造进度。
贴近一个玻璃面板连接点：短暂减速，锁扣清脆扣合，立即再次向上加速。
这一段结束时，镜头位于尚未完成的最上部退台旁。
00:09.5–00:10.5 — 失重
向上的加速度同时消失。
松散的顶部立面模块、金属构件、螺栓和粉尘依靠剩余惯性漂移，缓慢旋转。
视点在它们之间滑行，沿塔冠周围继续走一条平缓弧线。
一段旋转金属构件贴近镜头掠过，接缝和表面纹理清晰可见。
形成一个短暂、清晰的失重喘息节拍，但画面绝不冻结。
00:10.5–00:12.5 — 向下／最终锁定
重力骤然转向下方。
视点与下落构件一起向下沉降，同时始终保持在塔楼外侧。
已经预先对齐的顶部模块快速、有序地向下落入各自支撑位置。
剩余塔冠面板就位；最后一段塔尖垂直下降，插入对应连接座。
在最后的接近过程中短暂减速，始终保持运动。
12.2秒时立即恢复全速：塔尖以一次干脆、沉重的金属撞击完成锁定。
连接处短暂震动，并释放少量局部粉尘，随后稳定。
到12.5秒，整座塔楼和裙楼永久完成建造，空中不再漂浮任何结构构件。
00:12.5–00:15.0 — 完整建筑揭示
将向下运动衔接为向外的大幅倾斜弧线，随后在开阔空域中加速向后远离塔楼。
镜头始终朝向建筑，随着距离拉开，逐步揭示从裙楼到塔尖的完整高度。
青绿色湖泊、道路和保持原样的周围城市在下方展开。
平稳减速，进入高空斜侧四分之三视角的全景构图。
最后0.8秒保持轻微后退漂移，整座完工塔楼清晰可读、完整入镜、不被裁切。
此后不再发生施工或建筑形态变化。

声音：
仅使用音效：高速气流、具有方向感的碎屑掠过声、钢材受力声、混凝土撞击声及玻璃框架锁扣声。
每次撞击声必须与真实接触瞬间严格同步。
失重阶段将气流声降低为轻微、悬浮般的静谧声场。
重力向下切换时出现低沉气流冲击，随后是塔尖最终锁定的沉重撞击声。
最终揭示阶段收束为高空风声。
无对白、无音乐、无字幕、无屏幕重力箭头。`,
    },
  },
  {
    id: "nastassiavideo-grumpy-monster-pumpkin-pie",
    title: "暴躁怪兽做南瓜派 · 万圣节美食 vlog",
    subtitle: "X · @nastassiavideo · 模型未标注 · 14秒 · 9:16",
    description:
      "毛绒绿怪兽一脸嫌弃地做南瓜派：打蛋、搅拌、压派皮、倒馅、进烤箱，手写字幕美食 vlog，8 镜 15 秒。",
    video: "/tutorials/nastassiavideo-grumpy-monster-pumpkin-pie/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-grumpy-monster-pumpkin-pie/poster.jpg",
    duration: "14秒",
    durationSec: 14,
    styleLabel: "美食 vlog",
    shots: 8,
    references: 4,
    model: "未标注（作者未公开）",
    style: "照片级美食博主风 · 万圣节暖调厨房 · 手写动画字幕",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/nastassiavideo/status/2099036524226511264",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 1688,
    sourceStats: { asOf: "2026-09-27", likes: 41, reposts: 4, bookmarks: 20 },
    formats: ["拆装·制作过程", "角色表演"],
    hook: {
      structure: "怪兽冷脸开场 → 俯拍备料 → 搅拌 → 压派皮 → 倒馅 → 烤箱 → 试吃",
      opening: "第 0 秒是绿色毛绒怪兽系着南瓜围裙站在空玻璃碗后面，面无表情看镜头，左上角手写「Pumpkin Pie Today!」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3s 俯拍毛手往碗里打蛋；约 4s 加糖和南瓜；约 5s 搅拌特写配「mix mix mix」；约 6–7s 双手压派皮，配「perfect crust」。", at: 3 },
        { title: "倒馅和烘烤", text: "约 8–9s 玻璃碗把南瓜馅倒进派盘，配「smooth pour」「almost ready」；约 10s 烤箱里的派，配「bake magic」。", at: 8 },
        { title: "结尾怎么收", text: "约 11s 切好的一块派加奶油；约 12–13s 怪兽叉一口尝，脸还是臭着。", at: 11 },
      ],
      copyThis: "用一张四宫格把开场、备料、搅拌、倒馅四个关键画面先做成参考图，再在提示词里逐张写清用途，并锁死同一个碗、同一个派盘。",
      approx: true,
    },
    tags: [
      "14秒 · 美食 vlog",
      "9:16 竖屏",
      "手写动画字幕",
      "4 张参考图",
      "8 镜头按秒分",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：做 4 张关键画面参考图",
        description:
          "作者贴出的是一张四宫格：左上怪兽在厨房开场、右上俯拍备料、右下搅拌、左下倒馅，四张都已带手写字幕样式。提示词里分别用 @Image1–@Image4 引用。出图提示词没有公开。",
      },
      {
        number: 2,
        title: "第二步：写角色、道具、环境锁定",
        description:
          "CHARACTER LOCK 锁怪兽的绿色、稀疏乱毛、耷拉眼、触角和冷脸；PROP LOCK 锁同一个透明玻璃碗和同一个奶油色陶瓷派盘；ENVIRONMENT 锁明亮的万圣节厨房。再规定字幕只能出现在顶部或上侧，用白色手写字加橙色小涂鸦。",
      },
      {
        number: 3,
        title: "第三步：按秒写 8 个镜头",
        description:
          "0–2s 开场 → 2–3.4s 备料 POV → 3.4–5s 加料 → 5–6.9s 搅拌 → 6.9–8.2s 压派皮 → 8.2–10.2s 低角度倒馅（慢动作只给 0.3–0.4 秒）→ 10.2–11.9s 烤箱 → 11.9–15s 试吃反应，每个镜头写好要出现的字幕。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-pie-image1",
        number: "1",
        title: "@Image1 · 怪兽 + 厨房开场",
        subtitle: "主帖第 2 张四宫格左上 · 已从拼图裁出",
        image: "/tutorials/nastassiavideo-grumpy-monster-pumpkin-pie/refs/image1-monster-kitchen.jpg",
        prompt: "作者未公开这张图的出图提示词。视频提示词中的用法：@Image1 = exact monster identity, exact kitchen, exact color palette, exact lighting, exact opening composition.",
      },
      {
        id: "nastassiavideo-pie-image2",
        number: "2",
        title: "@Image2 · 俯拍备料 POV",
        subtitle: "主帖第 2 张四宫格右上 · 已从拼图裁出",
        image: "/tutorials/nastassiavideo-grumpy-monster-pumpkin-pie/refs/image2-pov-prep.jpg",
        prompt: "作者未公开这张图的出图提示词。视频提示词中的用法：@Image2 = POV ingredient-prep reference, same glass bowl, same cream ceramic pie dish, same handwritten doodle style.",
      },
      {
        id: "nastassiavideo-pie-image3",
        number: "3",
        title: "@Image3 · 搅拌",
        subtitle: "主帖第 2 张四宫格右下 · 已从拼图裁出",
        image: "/tutorials/nastassiavideo-grumpy-monster-pumpkin-pie/refs/image3-mixing.jpg",
        prompt: "作者未公开这张图的出图提示词。视频提示词中的用法：@Image3 = mixing reference, same bowl, same kitchen, same batter texture, same doodle style.",
      },
      {
        id: "nastassiavideo-pie-image4",
        number: "4",
        title: "@Image4 · 倒馅",
        subtitle: "主帖第 2 张四宫格左下 · 已从拼图裁出",
        image: "/tutorials/nastassiavideo-grumpy-monster-pumpkin-pie/refs/image4-pouring.jpg",
        prompt: "作者未公开这张图的出图提示词。视频提示词中的用法：@Image4 = pouring reference, same bowl, same cream ceramic pie dish, same kitchen continuity, same doodle style.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2s 怪兽站在空玻璃碗后面冷脸看镜头，左上角「Pumpkin Pie Today!」。" },
      { number: 2, description: "3–4s 俯拍毛手往碗里打蛋、加糖和南瓜块。" },
      { number: 3, description: "5s 搅拌特写，字幕「mix mix mix」。" },
      { number: 4, description: "6–7s 双手压派皮，字幕「perfect crust」。" },
      { number: 5, description: "8–9s 玻璃碗把南瓜馅倒进派盘，字幕「smooth pour」「almost ready」。" },
      { number: 6, description: "10s 烤箱里的南瓜派，字幕「bake magic」。" },
      { number: 7, description: "11–14s 一块派加奶油，怪兽叉一口尝，仍然臭脸。" },
    ],
    constraints:
      "怪兽造型不许改；全程同一个玻璃碗、同一个派盘、同一个厨房；字幕不放底部、不挡食物；不要拼贴、分镜格、多余的碗、暗黑恐怖调、过重橙色、畸形手、漂浮食材、随机文字、卡通感。与成片不符：成片约 14.5 秒，提示词写 15 秒；「prep time」「spice it up」「soft & silky」字幕在成片里看不到；结尾没有「spooky good」字幕；试吃时眼神软化不明显。缺口：作者没有标注用的视频模型；4 张参考图的出图提示词没公开；提示词截图里字幕清单有几处字形错乱（如 soft & silky、almost ready、bake magic），按各镜头里的同名字幕校读；音频没有核对。原片 60fps，网页版转成 30fps。",
    video_prompt: {
      title: "Grumpy Monster Makes Pumpkin Pie",
      subtitle: "模型未标注 · 9:16 · 英文完整提示词（作者贴出的提示词截图，逐字转录）",
      content: `GRUMPY MONSTER MAKES PUMPKIN PIE

Exactly 15 seconds, vertical 9:16.
Photorealistic cinematic Halloween food reel.
Premium food-blog / food-commercial style.
Strictly realistic live-action look.
No cartoon rendering.
No subtitles.
No storyboard layout.
No yellow/orange overgrading.
Natural soft daylight with warm candle accents.
Cute deadpan comedy tone.

REFERENCES:
@Image1 = exact monster identity, exact kitchen, exact color palette, exact lighting, exact opening composition.
@Image2 = POV ingredient-prep reference, same glass bowl, same cream ceramic pie dish, same handwritten doodle style.
@Image3 = mixing reference, same bowl, same kitchen, same batter texture, same doodle style.
@Image4 = pouring reference, same bowl, same cream ceramic pie dish, same kitchen continuity, same doodle style.

CHARACTER LOCK:
Preserve the exact monster from @Image1:
same green color, same skin texture, same messy sparse fur, same droopy eyes, same antennae, same facial proportions, same teeth, same deadpan grumpy expression.
Do not redesign, beautify, stylize or recolor him.

PROP LOCK:
Use the exact same large transparent glass mixing bowl throughout the whole preparation.
Use the exact same cream-colored ceramic pie dish throughout crust, pouring, baking and final presentation.
Do not change bowl size, material, color or shape.
Do not change pie dish size, material, color or shape.

ENVIRONMENT:
Use the exact same bright cozy Halloween kitchen throughout.
Wood countertop, pumpkins, candles, autumn leaves, window daylight, ghost decor in background.
Natural realistic shadows.
Balanced neutral-warm color palette.
No dark moody grading.

CAMERA STYLE:
Shot 1 = medium opening shot with the monster.
After that, switch into authentic food-blog coverage:
top-down POV,
over-bowl POV,
macro close-ups,
low-angle pouring shot,
oven-level shot,
hero dessert close-up.
Use dynamic editorial pacing, snap cuts, one or two whip-like transitions, gentle push-ins, slight handheld micro-sway.
Make the reel feel energetic and premium.

ANIMATED HANDWRITTEN TEXT:
Use playful handwritten white captions with small orange accents and doodles.
Text should animate in like hand-drawn writing.
Add small arrows, hearts, spark lines, pumpkin doodles and a tiny ghost doodle.
Do not place text at the bottom.
Keep text only at top or upper side areas.
Never cover the main food action.
Use captions:
"Pumpkin Pie Today!"
"prep time"
"spice it up"
"mix mix mix"
"soft & silky"
"perfect crust"
"smooth pour"
"almost ready"
"bake magic"

AUDIO:
No dialogue.
Use food ASMR and kitchen SFX:
light spoon tap,
ingredient movement,
pumpkin mash,
egg crack,
cream pour,
whisking,
dough press,
thick batter pour,
oven door close,
fork into pie.
Optional subtle playful Halloween music underneath.

SHOT STRUCTURE:
8 shots, exactly 15 seconds total.
No extra shots.

SHOT 1 — 0.0–2.0s — OPENING
Medium cinematic shot.
The monster stands behind the wooden counter in the bright cozy Halloween kitchen.
In front of him: the same empty transparent glass bowl, spoon inside, eggs, sugar, flour, butter, milk, cinnamon, nutmeg, and the same cream ceramic pie dish.
He looks straight at camera with total deadpan boredom.
Camera makes a slight push-in.
Animated upper-left text writes on:
"Pumpkin Pie Today!"
with orange doodles and a small pumpkin.
HARD CUT.

SHOT 2 — 2.0–3.4s — PREP POV
Top-down POV from the monster's point of view.
Only his furry hands are visible.
The same bowl sits centered on the table, surrounded by pumpkin puree, eggs, milk, sugar, flour and spices.
Hands quickly pull ingredients closer to the bowl in a neat food-blog rhythm.
Animated upper-side captions:
"prep time"
"spice it up"
SNAP CUT.

SHOT 3 — 3.4–5.0s — ADDING INGREDIENTS
Overhead / over-bowl POV.
He cracks eggs into the bowl and adds pumpkin puree, sugar and spices.
Use a fast but readable editorial pace.
Keep the same bowl and same bright natural lighting.
CUT.

SHOT 4 — 5.0–6.9s — WHISKING
Close over-bowl POV.
He whisks the mixture quickly.
Camera pushes slightly closer and gives a tiny dynamic orbit feel around the bowl.
The filling becomes rich, glossy and smooth.
Animated upper-left / upper-right text:
"mix mix mix"
"soft & silky"
CUT.

SHOT 5 — 6.9–8.2s — CRUST
Top-down close POV.
His hands press dough neatly into the same cream ceramic pie dish.
Short punch-in on the fingers shaping the crust edge.
Animated upper-side text:
"perfect crust"
CUT.

SHOT 6 — 8.2–10.2s — POUR
Dynamic low-angle macro food-commercial shot.
He lifts the same glass bowl and pours the thick pumpkin filling into the same pie dish.
The stream falls beautifully into the crust.
Use a slight slow-motion emphasis only for the most satisfying part of the pour, about 0.3–0.4 seconds.
Animated upper-side text:
"smooth pour"
"almost ready"
CUT.

SHOT 7 — 10.2–11.9s — OVEN
Oven-level shot.
He slides the filled pie into the oven.
Camera almost travels inward with the pie, then the door closes.
Quick believable baking transition through the oven window:
the filling sets and becomes a finished baked pumpkin pie.
Animated upper-side text:
"bake magic"
CUT.

SHOT 8 — 11.9–15.0s — FINAL REACTION
Start with a beautiful hero close-up of the finished pumpkin pie and one plated slice with whipped cream.
Then the monster takes a forkful and tastes it.
Hold a small comedy beat.
His face stays grumpy, but his eyes soften very slightly with the tiniest satisfied reaction.
No smile.
Animated upper-side final text:
"spooky good"
with a tiny ghost doodle and small heart.

NEGATIVE:
No collage. No storyboard grid. No extra bowls. No changing props.
No changing kitchen. No dark horror look. No heavy orange tint.
No malformed hands. No extra fingers. No floating ingredients.
No random text. No subtitles. No cartoon look. No monster redesign.`,
    },
  },
  // 查重别名(引用帖：同作者 RED 角色跑酷 4 个版本，另一部片): https://x.com/nastassiavideo/status/2097311777012805924
  {
    id: "nastassiavideo-wrong-prince-kart-race",
    title: "认错王子 · 卡丁车抢人反转",
    subtitle: "X · @nastassiavideo · 模型未标注 · 15秒 · 16:9",
    description:
      "两个女孩开卡丁车抢王子，冲线后却一起扑向旁边的乌龟怪兽，王子躺地撒泼大哭，15 秒一镜到底。",
    video: "/tutorials/nastassiavideo-wrong-prince-kart-race/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-wrong-prince-kart-race/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "喜剧反转",
    shots: 1,
    references: 5,
    model: "未标注（作者未公开）",
    style: "真人奇幻喜剧 · 卡丁车赛道 · 一镜到底跟拍",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2097940769629782288",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 2520,
    sourceStats: { asOf: "2026-09-27", likes: 52, reposts: 5, bookmarks: 22 },
    formats: ["电影叙事", "角色表演"],
    hook: {
      structure: "赛车抢人 → 飞跃冲线 → 走向王子 → 反转抱怪兽 → 王子撒泼",
      opening: "第 0 秒是两个女孩开卡丁车的并排脸部特写，戴绿帽和红帽，边开边喊。",
      openingAt: 0,
      beats: [
        { title: "赛道追逐", text: "约 3–4s 镜头拉远到浮空赛道和金币；约 5s 两辆卡丁车一起飞过断口；约 6–7s 落到城堡前的格子地面刹停。", at: 3 },
        { title: "反转", text: "约 8–11s 王子和乌龟怪兽 Bront 站在前面，两人下车站到他们身边；约 12–13s 两人绕过王子，一左一右抱住 Bront。", at: 8 },
        { title: "结尾怎么收", text: "约 14–15s 王子仰面倒在地上蹬腿撒泼，Bront 搂着两个女孩。", at: 14 },
      ],
      copyThis: "前 8 秒只写赛车、后 7 秒只写喜剧，按 1.5–2.5 秒一段把表情和动作写死（皱鼻子、抿嘴、眼神移到怪兽），反转靠「王子张开双臂、女孩从他身边绕过去」这一个动作完成。",
      approx: true,
    },
    tags: [
      "15秒 · 喜剧反转",
      "16:9 横屏",
      "一镜到底",
      "5 张参考图",
      "马里奥赛车风",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备 5 张参考图",
        description:
          "作者在帖里放了一段参考图拼图视频：@Image1 浮空赛道世界、@Image2 绿帽女孩 GREEN、@Image3 红帽女孩 RED、@Image4 金色卷发王子、@Image5 乌龟怪兽 Bront。五张都已收录（从拼图视频截帧裁出，约 530px）。出图提示词都没有公开。",
      },
      {
        number: 2,
        title: "第二步：写 REFS / GLOBAL / CAMERA",
        description:
          "REFS 给每张图写权重（世界 90%，角色 100%）和要保留的特征；GLOBAL 写赛道路线（直道、S 弯、小跳台、断口、下坡、最后一弯、格子线、城堡前广场）和王子与 Bront 等候的位置；CAMERA 规定 84° 广角、一个连续稳定的跟拍运动，从正面脸部特写拉远再侧向弧线移动。",
      },
      {
        number: 3,
        title: "第三步：按 6 段时间写动作，贴进生成",
        description:
          "0–1.5s 喊「My prince!」「No! MY prince!」→ 1.5–3.5s 超车 → 3.5–5s 飞跃 → 5–8s 漂移冲线刹停 → 8–10s 下车、看到王子皱鼻子、眼神移到 Bront → 10–12.5s 绕开王子亲 Bront → 12.5–15s 王子倒地撒泼大哭。最后写明不要剪切、慢动作、字幕和多余台词。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-prince-image1-world",
        number: "1",
        title: "@Image1 · 浮空赛道世界",
        subtitle: "主帖参考图拼图视频左下格 · 截帧裁出（约 530px）",
        image: "/tutorials/nastassiavideo-wrong-prince-kart-race/refs/image1-world.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image1 = world, 90%. Floating roads, mushrooms, pipes, coins, waterfalls, castle.",
      },
      {
        id: "nastassiavideo-prince-image2-green",
        number: "2",
        title: "@Image2 · 绿帽女孩 GREEN",
        subtitle: "主帖参考图拼图视频截帧裁出（约 530px）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-wrong-prince-kart-race/refs/image2-green.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image2 = GREEN, 100%. Exact face, dark bob, green cap.",
      },
      {
        id: "nastassiavideo-prince-image3-red",
        number: "3",
        title: "@Image3 · 红帽女孩 RED",
        subtitle: "主帖参考图拼图视频截帧裁出（约 530px）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-wrong-prince-kart-race/refs/image3-red.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image3 = RED, 100%. Exact face, light brown hair, red cap.",
      },
      {
        id: "nastassiavideo-prince-image4-prince",
        number: "4",
        title: "@Image4 · 金色卷发王子",
        subtitle: "主帖参考图拼图视频截帧裁出（约 530px）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-wrong-prince-kart-race/refs/image4-prince.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image4 = adult prince, 100%. Exact face, blond curls, crown, pink costume.",
      },
      {
        id: "nastassiavideo-prince-image5-bront",
        number: "5",
        title: "@Image5 · 乌龟怪兽 Bront",
        subtitle: "主帖参考图拼图视频左上格 · 截帧裁出（约 530px）",
        image: "/tutorials/nastassiavideo-wrong-prince-kart-race/refs/image5-bront.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image5 = Bront, 100%. Exact teal scales, copper shell, horns, white crest, brown eyes.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2s 两个女孩开卡丁车的并排脸部特写，边开边喊。" },
      { number: 2, description: "3–4s 镜头拉远，浮空赛道、金币和城堡。" },
      { number: 3, description: "5s 两辆卡丁车一起飞过断口。" },
      { number: 4, description: "6–7s 落到城堡前的格子地面，并排刹停。" },
      { number: 5, description: "8–11s 王子和 Bront 站在前面，两个女孩下车站到旁边。" },
      { number: 6, description: "12–13s 两人一左一右抱住 Bront。" },
      { number: 7, description: "14–15s 王子仰面倒地蹬腿撒泼。" },
    ],
    constraints:
      "角色长相和服装全程一致；参考图的面板排版不能出现在画面里；一镜到底，不要剪切、隐藏剪切、转场、跳时、慢动作和镜头瞬移；不要字幕和提示词以外的台词。与成片不符：约 8s 两人还坐在卡丁车里，王子和 Bront 已在画面中，下车过程不明显；提示词写 GREEN 超车领先，截帧里看不出明确的超车；约 9–11s 两人站在王子和 Bront 两侧，而不是提示词写的面对他们走过来；王子撒泼的蹬腿、捶地只在最后约 1 秒出现；成片约 15.4 秒。缺口：作者没有标注用的视频模型；5 张参考图的出图提示词没公开；参考图只有拼图视频里的低清截帧；台词和音频没有核对。",
    video_prompt: {
      title: "The Wrong Prince",
      subtitle: "模型未标注 · 16:9 · 英文完整提示词（作者贴出的提示词截图，逐字转录）",
      content: `THE WRONG PRINCE

Exactly 15 seconds, 16:9. ONE CONTINUOUS UNBROKEN TAKE.

Racing: first 8 seconds. Comedy ending: final 7 seconds.

REFS:
@Image1 = world, 90%. Floating roads, mushrooms, pipes, coins, waterfalls, castle.
@Image2 = GREEN, 100%. Exact face, dark bob, green cap.
@Image3 = RED, 100%. Exact face, light brown hair, red cap.
Both retain reference overalls, cream tops, gloves and boots.
@Image4 = adult prince, 100%. Exact face, blond curls, crown, pink costume.
@Image5 = Bront, 100%. Exact teal scales, copper shell, horns, white crest, brown eyes.
Keep identities and clothing identical throughout.
Fresh framing; reference panels excluded.

GLOBAL:
Live action fantasy comedy, 35mm grain, neutral daylight, real skin and fabric.
GREEN drives a green kart; RED drives a red kart. Low open sides.
Connected route: straight, S bends, low ramp, short gap, downhill landing, final bend, checkered stripe, castle forecourt.
Prince and Bront wait clear of the lane, near the stopping spaces, facing arriving drivers. Prince stands slightly ahead of Bront.
Gaze stays engaged, natural blinks.

CAMERA:
One stabilized tracking move, fixed 84° wide lens.
Start close ahead at face height, frontal 0°, both faces readable.
Physically pull backward and rise slightly to reveal both complete karts and the road. Then match their speed, keeping both visible at different depths during overtaking.
Maintain distance through jump and landing. At finish, decelerate and arc sideways to show women facing prince and Bront. Follow their approach laterally. Strong road parallax, readable faces. All reframing follows continuous travel through clear space.

ACTION:
0.0 to 1.5s:
Already racing. Close faces and steering wheels. RED shouts "My prince!" GREEN replies louder, "No! MY prince!" Distinct breathless voices, precise lip sync. RED accelerates ahead. Engines soften beneath speech.
1.5 to 3.5s:
Camera smoothly pulls back. RED opens a two kart length lead. GREEN chases through the first bend, closes the gap and overtakes inside. Side bumpers briefly knock while level. GREEN clears RED and leads. Engines climb, barriers rush past.
3.5 to 5.0s:
RED follows close, swings outside the next bend and draws level at the ramp. Both launch across the short gap. Camera rises with them, preserving faces and landing road. Short ballistic arcs, visible tire contact, two suspension thumps.
5.0 to 8.0s:
Both accelerate downhill and drift through the final bend, rear tires sliding outward. Thin smoke trails behind. They straighten, cross the checkered stripe and brake completely in adjacent spaces. Camera decelerates and arcs sideways, revealing the waiting pair ahead.
8.0 to 10.0s:
Women step over the low kart sides onto the pavement. Prince opens his arms. Looking directly at him, RED wrinkles her nose; GREEN purses her lips a beat later. Their eyes shift to Bront beside him. Both break into wide smiles.
10.0 to 12.5s:
They hurry toward the pair. Prince beams and leans forward for a hug. Women pass around his empty arms and converge on Bront. He crouches. Each hugs one side and kisses his corresponding cheek. Two kisses, delighted giggles. Prince turns toward them.
12.5 to 15.0s:
Prince's smile collapses. He drops to his knees, flops sideways and rolls onto his back. He kicks his heels and pounds the pavement with gloved fists, loudly sobbing in an exaggerated adult tantrum. Crown stays crooked on his head. He remains the same adult man. Bront embraces both women and grins. Camera eases backward and tilts down to include prince's entire body and the trio. End with prince still kicking and sobbing.

TECHNICAL:
One uninterrupted shot. No cuts, hidden cuts, transitions, time jumps, slow motion or camera teleportation.
No subtitles, captions or any additional spoken lines.`,
    },
  },
  // 查重别名(同帖其它版本，未收录)：https://x.com/nastassiavideo/status/2097311777012805924 第 3 段 3840x2160（真人实拍风，另一版提示词 A）、第 4 段 1280x720（同提示词 A）
  // 查重别名(同作者引用此帖的另一部片，已做本地包 nastassiavideo-wrong-prince-kart-race)：https://x.com/nastassiavideo/status/2097940769629782288
  {
    id: "nastassiavideo-pipe-girl-floating-kingdom-parkour",
    title: "管道女孩 · 浮空王国跑酷",
    subtitle: "X · @nastassiavideo · Seedance 2.5 · 15秒 · 16:9",
    description:
      "红帽背带裤女孩从绿管冲出，踩管子、弹蘑菇、蹬砖墙一路收金币，15 秒一镜到底跑酷。",
    video: "/tutorials/nastassiavideo-pipe-girl-floating-kingdom-parkour/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-pipe-girl-floating-kingdom-parkour/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "游戏CG风",
    shots: 1,
    references: 2,
    model: "Seedance 2.5（作者回复标注；同条还写了 Gpt 2、Astra）",
    style: "游戏过场 CG 风 · 浮空岛跑酷 · 超广角一镜到底后退跟拍",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2097311777012805924",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 14351,
    sourceStats: { asOf: "2026-09-27", likes: 148, reposts: 5, bookmarks: 68 },
    formats: ["角色表演", "电影叙事"],
    hook: {
      structure: "冲出管道 → 管子/蘑菇/砖墙连跳 → 空中收金币 → 翻滚落地 → 胜利姿势",
      opening: "第 0 秒她从躺倒的绿色大管口里冲出来，身后一圈蓝色闪光，镜头贴着草地往后退。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 单手撑竖管翻越；约 3s 跑过横躺的长管；约 4–5s 跳到红蘑菇上方；约 8–10s 在两堵砖墙间蹬墙跑。", at: 2 },
        { title: "空中收金币", text: "约 11–12s 她在空中伸手扫过一串金币，背景是草地浮岛和远处城堡。", at: 11 },
        { title: "结尾怎么收", text: "约 12.3s 落地前滚翻，约 13s 滑铲扬起尘土，约 14–15s 在城堡前举拳定格。", at: 12 },
      ],
      copyThis: "每个动作段都配一句 SFX（金币一声 chime、蘑菇一声闷响），并写一条 coin_rule：碰到的金币当场变成金色火花消失，没碰到的留在空中。",
      approx: true,
    },
    tags: [
      "15秒 · 跑酷",
      "16:9 横屏（另有 9:16 竖版）",
      "一镜到底",
      "Seedance 2.5",
      "马里奥风浮空岛",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备两张参考图",
        description:
          "@Image1 世界参考（浮空岛、绿管、红蘑菇、砖块、金币、城堡），@Image2 女主角三视图（红帽、奶白背心、牛仔背带裤、白手套、棕靴）。作者回复里写的工具是 Seedance 2.5、Gpt 2、Astra，没说具体哪一步用哪个；出图提示词没公开。两张图都已收录（原图 1672x941，压到 1600px）。",
      },
      {
        number: 2,
        title: "第二步：写 REFS / GLOBAL STYLE NOTES / SHOT",
        description:
          "REFS 写清每张图只管什么、权重多少（人物 100%、世界和画风 90%），参考图本身不能进画面；GLOBAL 用 medium_lock 锁定「游戏 CG 画风 + 脸接近照片质感」，再写光线、配色比例、场景、角色服装、金币规则、物理和配乐；SHOT 规定 114° 超广角、贴地低机位、全程后退跟拍、第一帧就是满速。",
      },
      {
        number: 3,
        title: "第三步：按 12 段写动作和音效",
        description:
          "0–1.8s 冲出管道 → 撑竖管翻越 → 跑横管 → 弹第一个蘑菇 → 弹第二个蘑菇 → 最高点收金币 → 蹬砖墙 → 对面砖墙再蹬一次 → 空中收三枚金币 → 翻滚落地 → 滑到平台边 → 13.5–15s 胜利姿势。每段写 dynamic_framing、visual_action、SFX 三行。",
      },
      {
        number: 4,
        title: "竖版 9:16（同一条提示词，作者发的第 1 段）",
        description:
          "作者同帖还发了一个 720x1280 竖版，用的是同一条游戏 CG 风提示词。竖版原片就没有声音，不是文件坏了。",
        video: "/tutorials/nastassiavideo-pipe-girl-floating-kingdom-parkour/demo-vertical-9x16.mp4",
        poster: "/tutorials/nastassiavideo-pipe-girl-floating-kingdom-parkour/poster-vertical-9x16.jpg",
        aspectRatio: "9/16",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-pipe-girl-image1-world",
        number: "1",
        title: "@Image1 · 浮空岛世界主视觉",
        subtitle: "作者回复区图片原件 HRtzI--WcAArnjm（1600px 压缩）· 画面里女主从绿管口飞出",
        image: "/tutorials/nastassiavideo-pipe-girl-floating-kingdom-parkour/refs/image1-world-keyvisual.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image1 = world reference. Controls the floating-island geography, green pipes, red mushroom caps, brick blocks, coin trails, waterfalls, castle; render style 90%.",
      },
      {
        id: "nastassiavideo-pipe-girl-image2-woman",
        number: "2",
        title: "@Image2 · 女主三视图",
        subtitle: "作者回复区图片原件 HRtzI-6XYAAHlom（1600px 压缩）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-pipe-girl-floating-kingdom-parkour/refs/image2-woman-charsheet.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image2 = the Woman. Controls face, body proportions and wardrobe only (identity 100%).",
      },
    ],
    storyboard: [
      { number: 1, description: "0–1s 从绿管口冲出，拖着蓝色闪光冲向镜头。" },
      { number: 2, description: "2s 单手撑竖管翻越。" },
      { number: 3, description: "3s 在横躺的长绿管上奔跑。" },
      { number: 4, description: "4–5s 腾空，跳向红蘑菇。" },
      { number: 5, description: "5.5–7.5s 从闪光管口前飞过，两侧是红蘑菇，远处城堡。" },
      { number: 6, description: "8–10s 在两堵砖墙之间蹬墙跑，砖屑飞溅。" },
      { number: 7, description: "11–12s 空中伸手收一串金币。" },
      { number: 8, description: "12.3–13s 前滚翻落地，滑铲扬尘。" },
      { number: 9, description: "14–15s 城堡前举拳定格。" },
    ],
    constraints:
      "人物长相、发色、服装全程一致；参考图的姿势和三视图面板不能进画面；一镜到底，镜头始终在她前方后退。碰到的金币必须消失，没碰到的留在空中。与成片不符：约 5.5–7.5s 她几乎定格在「从闪光管口飞出、两侧红蘑菇」的同一个姿势，和作者贴出的第一张横版图构图几乎一样，提示词写的第二次弹蘑菇、蘑菇压扁回弹看不清；两次蹬墙之间的过渡不明显；成片约 15.1 秒。缺口：作者没说 Seedance 2.5、Gpt 2、Astra 各用在哪一步；参考图出图提示词没公开；音频只量了音量，没有逐段核对音效。",
    video_prompt: {
      title: "Floating Kingdom Pipe Run（游戏 CG 风版）",
      subtitle: "Seedance 2.5 · 16:9 主成片 + 9:16 竖版共用 · 英文完整提示词（作者回复里的提示词截图，逐字转录）",
      content: `REFS:
@Image1 = world reference. Controls the floating-island geography, green pipes, red mushroom caps with cream spots, brick island undersides and brick blocks, suspended coin trails, waterfalls, pastel capsule hills, white castle with red turrets, cloud sea and sky only.
@Image2 = the Woman. Controls face, body proportions and wardrobe only.
Both references stay out of the composition: fresh framing built from scratch, reference poses and character-sheet panels excluded.
ACTIVE REFERENCES: @Image2 (identity) 100%; @Image1 (world and render style) 90%

GLOBAL STYLE NOTES:
- medium_lock: stylised game-cinematic render matching @Image1 exactly — painterly surfaces, high saturation, soft airbrushed gradients, glossy specular highlights on pipes and mushroom caps, clean bright air with no haze. Her face alone carries near-photographic fidelity against the painted world: real skin texture, individual eyelashes, fine flyaway hairs. Denim reads as painted fabric with hand-drawn seam lines.
- lighting_philosophy: high open daylight as the single source; the blue sky bounces cool fill into her shadow side, white cloud tops kick soft light up under her jaw
- color_grade: ~50% sky blue and cloud white (air, background) + ~30% denim indigo and grass green (her overalls, island tops) + ~20% saturated red and gold (cap, mushroom caps, coins). Highlights stay clean and unclipped.
- setting: a kingdom of floating islands over a cloud sea — grass-topped chunks with brick and dirt undersides, thick green pipes standing and lying between them, giant red mushroom caps with cream spots, suspended brick blocks, waterfalls pouring off the island edges into open air, pastel capsule hills behind, a white castle with red conical turrets far on the horizon
- atmosphere: fine sparkle motes drift near the pipe mouths and hang in the still air; steady wind runs against her direction of travel and drags her hair and overall straps backward. Every footfall kicks a burst of grass blades, brick dust or grit that arcs out and falls away between the islands
- characters: <Woman> corresponds to @Image2 — soft red cabbie cap pulled low, long wavy honey-blonde hair loose beneath it, cream ribbed sleeveless top with bare shoulders and bare arms, blue denim overalls with gold buckle clasps and cuffed hems, white gloves on both hands, scuffed brown lace-up boots, a small red pendant at her throat, a gold bracelet on her RIGHT wrist, gold hoop earrings. Keep identical throughout.
- coin_rule: palm-sized gold coins hang rotating in vertical and arcing trails along her reachable path. Each pickup reads as approach, visible glove contact, then the coin disappears instantly into a short gold spark with one crisp chime. Touched coins vanish, untouched coins stay suspended, her gloves stay empty afterwards, the spark lights the glove for one frame and her face stays readable
- camera_character: one continuous backward tracking move ahead of her from first frame to last; fine high-frequency vibration from the rig's own speed, never an operator's hand tremor
- physics: real ground contact, momentum conservation, authentic weight and balance. Mushroom caps compress under her weight and rebound at takeoff; brick holds firm under her wall-run steps; airborne travel follows clean ballistic arcs; her anatomy stays coherent and her joints stay in human range while perspective does the stretching
- ambience: thunderous orchestral score with accelerating percussion under constant rushing wind, chimes sitting above the score

SHOT:
- first_frame: full body, Woman x 30%–70%, y 10%–95%; cloud layer x 0%–100%, y 55%–100%
- camera_angle: low, inches above the grass, rising continuously across the take and never jumping
- azimuth: frontal 0°, her face held near frame centre in every phase
- lens: 114° rectilinear ultra-wide. Whatever comes nearest the lens enlarges hard — reaching gloves and driving boots read stretched and enormous while her face keeps natural proportions and straight verticals hold; deep separation between islands; no focal drift mid-shot
- camera_motion: continuous backward track, always ahead of her, clearing every solid obstacle through open air with a metre of margin
- speed_timing: 100% real time from first frame to last, already at maximum speed on frame one. Short shutter keeps her face and torso crisp; only the limbs crossing the near lens smear into directional blur

ACTIONS:
- action_sequence:
1. beat (0.0-1.8s):
- dynamic_framing: wide, camera inches above the grass, frontal 0°, violent ground parallax
- visual_action: she bursts out of the mouth of a huge green pipe already at full speed, trailing a spiral of blue sparkle, then sprints at the retreating camera along a narrow grass-topped island path and sweeps her right glove through two coins at chest height. Her lead glove and driving boots swing through the near lens and enlarge enormously, then snap back to normal as they pass.
- SFX: rising sparkle shimmer, wind past the lens, hard boot strikes, two chimes close together
2. beat (1.8-2.9s):
- dynamic_framing: camera dips beneath her, tightening to medium, azimuth swinging to three-quarter 45° with the physical move and easing back to frontal
- visual_action: without slowing she plants her LEFT glove on the rim of a standing green pipe and vaults; her free RIGHT glove clips a coin above the rim; both legs sweep past the lens and fill the near frame.
- SFX: glove slap on hard glossy plastic, hollow pipe clang, one chime
3. beat (2.9-4.2s):
- dynamic_framing: low medium, camera rising
- visual_action: she lands onto a long horizontal green pipe and runs its full length, bare arms out for balance, boots rolling across the curved surface, taking two coins spaced along the pipe line.
- SFX: steps ringing hollow through the pipe, two separate chimes
4. beat (4.2-5.2s):
- dynamic_framing: framing loosens as the camera keeps rising, islands rushing past on both sides
- visual_action: she drops off the pipe end onto a giant red mushroom cap; the cap sinks deep under her and its cream spots stretch with the deformation, then it throws her back up.
- SFX: a deep springy thump with a short tail, percussion stepping up a level
5. beat (5.2-6.5s):
- dynamic_framing: camera climbs with her
- visual_action: she bounds to a second mushroom, taking one coin on the rising arc, and its recoil launches her far higher than the first.
- SFX: second thump pitched lower, one chime, brass swelling
6. beat (6.5-7.6s):
- dynamic_framing: camera holds distance for the first time and drifts slightly above her, waterfalls and pastel capsule hills opening far below
- visual_action: at the top of the arc her body extends, hair and overall straps dragged backward, and she takes a single coin at full stretch.
- SFX: percussion thins to sustained brass, wind takes the foreground, one chime alone in the air
7. beat (7.6-8.9s):
- dynamic_framing: camera presses back in to eye level, the brick underside of a floating island filling frame-right
- visual_action: she lands into three fast wall-run steps along the brick, taking a coin at head height on the second step, boots biting the brick and throwing dust.
- SFX: full percussion back in, three hard scuffs, one chime
8. beat (8.9-10.1s):
- dynamic_framing: camera widens as the gap between two island walls opens up
- visual_action: she kicks off the brick, crosses to the opposite brick wall, takes two more steps along it and kicks away hard across the huge open gap; brick dust bursts off both walls behind her.
- SFX: the heaviest impact of the take on the second kick-off, dust and loose brick falling away
9. beat (10.1-11.5s):
- dynamic_framing: camera retreats faster and tilts up, she passes above it
- visual_action: her outstretched right glove sweeps three spaced coins along the flight path.
- SFX: percussion ducks out, three ascending chimes cut through the wind, then ambience drops to near-silence for one beat
10. beat (11.5-12.6s):
- dynamic_framing: camera settles back to eye level, framing her whole body
- visual_action: she hits the final grass platform in a fast shoulder roll.
- SFX: the landing lands into the silence, one heavy flat impact, wind and score returning underneath
11. beat (12.6-13.5s):
- dynamic_framing: medium, frontal 0°
- visual_action: she springs upright out of the roll and slides the last metre toward the platform edge, boots dragging grass and grit ahead of her.
- SFX: leather scraping earth
12. beat (13.5-15.0s):
- dynamic_framing: camera pulls back fast and cranes upward into a wide, revealing the castle and the whole floating kingdom behind her
- visual_action: she snaps into a victory pose, one boot planted forward, one fist raised, grinning into the lens, chest heaving, and holds it. Sunlight breaks through the clouds behind her as a single soft bloom.
- SFX: one final orchestral hit, then wind alone

TECHNICAL:
- continuous_shot: one continuous shot, single take, camera operates without interruption from 0.0s to 15.0s
- the same woman is in frame from first frame to last, her face, hair colour, proportions and wardrobe identical at 0s, at 8s and at 15s, clean frame`,
    },
  },
  // 查重别名(同作者引用本帖的另一部片，酒馆问厕所，已排队做本地包)：https://x.com/nastassiavideo/status/2096952053687808223
  {
    id: "nastassiavideo-medianoche-saloon-escape",
    title: "蒙面女侠 · 酒馆打斗跳马追马",
    subtitle: "X · @nastassiavideo · Seedance 2.5 · 32秒 · 16:9",
    description:
      "蒙面女侠在酒馆轻松打趴三个劫匪，撞窗逃出跳上黑马，却被树枝扫落，只能追着马跑。",
    video: "/tutorials/nastassiavideo-medianoche-saloon-escape/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-medianoche-saloon-escape/poster.jpg",
    duration: "32秒",
    durationSec: 32,
    styleLabel: "复古喜剧",
    shots: 11,
    references: 1,
    model: "Seedance 2.5（作者帖文：Seedance 2.5、GPT-2、Claude）",
    style: "1930–40 年代特艺色冒险片 · 西部酒馆 · 肢体喜剧",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2095368017739653337",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 4162,
    sourceStats: { asOf: "2026-09-27", likes: 33, reposts: 3, bookmarks: 9 },
    formats: ["电影叙事", "角色表演"],
    hook: {
      structure: "酒馆打斗 → 撞见追兵 → 撞窗逃跑 → 吹哨跳马 → 被树枝扫落追马",
      opening: "第 0 秒劫匪的剑从画面左侧刺过来，蒙面女侠在昏暗的酒馆里单手格挡。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2.5–4s 撑桌翻越，劫匪扑空滑过桌面；约 4–6.5s 一脚把第三个劫匪踢进木桶堆；约 9–11.5s 她的脸部近景，身后门口进来一群持枪的人。", at: 2.5 },
        { title: "逃跑上马", text: "约 14.5s 肩膀撞碎百叶窗冲到街上；约 16s 两指放进嘴里吹口哨；约 17–19.5s 黑马跑来刹停，她跳上马背。", at: 14.5 },
        { title: "结尾怎么收", text: "约 23–25.5s 迎面的树枝把她从马上扫下来；约 26–29s 她爬起来追马；约 30–32s 远景圆形遮罩收成黑场。", at: 23 },
      ],
      copyThis: "每个镜头都写到 0.1 秒的时间码，并在动作之后塞一个短表情反应（挑眉歪嘴、瞪眼咽口水、咬紧牙），再用 HARD CUT / WHIP PAN / SMASH CUT 连起来，喜剧节奏靠这些反应停顿。",
      approx: true,
    },
    tags: [
      "32秒 · 西部喜剧",
      "16:9 横屏",
      "11 个镜头",
      "Seedance 2.5",
      "复古胶片圆形遮罩",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备角色设定图",
        description:
          "作者在回复里贴了角色 Medianoche 的设定图（正脸、侧脸、背面、全身正背面，外加身高 158cm、声音、性格说明），就是提示词里的 @Image1。帖文写的工具是 Seedance 2.5、GPT-2、Claude，没说各用在哪一步。设定图已收录（原图 1672x941，压到 1600px）。",
      },
      {
        number: 2,
        title: "第二步：先写各种「锁」",
        description:
          "REFS 锁脸和服装；FORMAT 定死 11 个镜头、30 秒；再写 GENRE AND COMEDY、PACING LOCK（每个镜头 0.2 秒内开始动作、打斗像 18fps 拍 24fps 放）、MIMICRY LOCK（挑眉、歪嘴笑、瞪眼等 8 种微表情）、VISUAL STYLE、场景 / 道具 / 马的连贯性。",
      },
      {
        number: 3,
        title: "第三步：11 个镜头逐个写时间码和转场",
        description:
          "每个镜头写景别、机位、精确到 0.1 秒的动作、SFX，以及 HARD CUT / WHIP PAN / AUDIO BRIDGE / SMASH CUT 等转场词。跳马那一镜作者单独写了方向锁（要求面朝马尾反坐）；结尾写明 29.5 秒开始圆形遮罩、30.0 秒刚好黑场。最后用 FINAL CONSTRAINTS 把所有要求再列一遍。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-medianoche-escape-image1",
        number: "1",
        title: "@Image1 · Medianoche 角色设定图",
        subtitle: "作者回复区图片原件 HRQ-HUvXsAM3f4O（1600px 压缩）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-medianoche-saloon-escape/refs/image1-medianoche-charsheet.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image1 is the only character reference for Medianoche — same face, facial geometry, body proportions, hat, mask and cape in every shot.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2.5s 酒馆里单手格挡劫匪的剑，收剑挑眉。" },
      { number: 2, description: "2.5–4s 撑桌翻越，劫匪扑空滑过桌面。" },
      { number: 3, description: "4–7s 踢飞第三个劫匪撞进木桶堆。" },
      { number: 4, description: "7.5–9s 酒馆中景，她站在桌边。" },
      { number: 5, description: "9–11.5s 脸部近景，身后门口涌进一群人。" },
      { number: 6, description: "12–14s 在桌椅间躲开追兵往窗口跑。" },
      { number: 7, description: "14.5–15.5s 撞碎百叶窗冲到街上。" },
      { number: 8, description: "16–16.5s 街上近景，两指放进嘴里吹口哨。" },
      { number: 9, description: "17–19.5s 黑马跑来刹停，她跳上马背。" },
      { number: 10, description: "20–22.5s 从马后方拍她骑马跑远；23s 转为侧面跟拍。" },
      { number: 11, description: "23–26s 迎面的树枝把她扫落，摔在土路上。" },
      { number: 12, description: "26.5–29s 背影追马。" },
      { number: 13, description: "29.5–32s 高角度远景，圆形遮罩收成黑场。" },
    ],
    constraints:
      "Medianoche 的脸、面具、帽子、披风全程不变；披风不能掉，第一镜后剑一直插在右腰剑鞘里；马跑来时背上没人，完全停下后她才跳上去；她必须面朝马尾，树枝打在后背和肩膀；不要字幕、Logo 和提示词以外的台词；喊「Wait! Wait for me!」时不要背景音乐。与成片不符：提示词最核心的笑点「面朝马尾反坐」在成片里没有做出来，约 23–24.5s 的侧面镜头里她面朝马头方向坐着，树枝是从正面扫到她身上，不是打在后背；提示词写的踩到木板滑一跤看不清；成片约 32 秒，比提示词写的 30 秒长，各镜头整体后移约 1.5–2 秒；圆形遮罩约 30–32 秒才收完。缺口：作者没说 Seedance 2.5、GPT-2、Claude 各用在哪一步；角色设定图的出图提示词没公开；提示词原图只有 339×2048，破折号、引号的具体字形看不清。",
    video_prompt: {
      title: "Medianoche · Playful Fight to Backward Mount",
      subtitle: "Seedance 2.5 · 16:9 · 英文完整提示词（作者回复里的提示词长图，逐字转录）",
      content: `REFS: @Image1 is the only character reference for Medianoche. Keep Medianoche identical to @Image1 in every shot. Preserve exactly the same face, facial geometry, eyes, nose, lips, body proportions, hairstyle, hair length, hat, mask, corset, cape, gloves, trousers, boots, belt, rapier, scabbard and accessories. Never redesign, beautify, age, de-age or reinterpret her.

SCENE (0:00–0:30) — PLAYFUL FIGHT → COMEDIC SLIP → REAL THREAT → ESCAPE → BACKWARD MOUNT → FALL → CHASE

FORMAT: exactly 11 shots and exactly 30.0 seconds. Preserve the source/reference aspect ratio.

GENRE AND COMEDY:
A fast, playful 1930s–1940s Technicolor swashbuckling comedy in the spirit of an old theatrical adventure film. The humor is physical, elegant and deadpan: Medianoche always tries to remain dignified while increasingly ridiculous accidents happen around her.

The comedy must never become cartoon animation. Human bodies retain realistic weight, balance and momentum. Expressions are clearly readable but remain natural.

PACING LOCK:
• no empty pauses or static posing
• every shot begins a new action within its first 0.2 seconds
• no expression is held longer than 0.5 seconds unless explicitly described as a reaction beat
• fight movement is brisk and slightly undercranked, resembling action photographed at 18fps and projected at 24fps
• horse movement, window impact and fall use realistic speed and weight
• use quick whip-pans, snap reframes and short reaction holds to create vintage comic timing

MIMICRY LOCK:
Medianoche communicates through precise micro-expressions:
• one raised eyebrow
• restrained crooked smirk
• quick amused glance
• brief genuine nose-laugh
• sudden wide-eyed alarm
• tight jaw when embarrassed
• stunned dignity after falling
• breathless frustration during the chase

Her facial identity must not change while her expression changes.

VISUAL STYLE:
• photographed like an aged early-Technicolor adventure film
• warm cantina oil lamps, deep shadows and bright window light
• exterior lit by low late-afternoon sun with long shadows and hard rim light
• faded warm highlights, deep black costume, dusty golden atmosphere
• natural skin tones with no muddy yellow filter and no sepia
• visible fine 35mm grain, subtle gate weave, soft halation, occasional light scratches and gentle film flicker
• authentic vintage optical circular iris ending

LOCATION CONTINUITY:
The cantina stands at the edge of a frontier town. Its dusty main street continues directly into a tree-lined dirt road. The cantina exterior, hitching post and several distant frontier buildings remain visible during the exterior sequence. All exterior shots take place on this same continuous road.

OBJECT CONTINUITY:
• Medianoche's cape remains attached to her shoulders throughout and is never removed
• her rapier is returned to its scabbard in Shot 1 and remains securely sheathed at her right hip afterward
• her hat and mask remain fixed during the vault, kick, window crash, horse ride, fall and chase
• no duplicated cape, weapon or accessory
• no disappearing or changing costume elements

HORSE CONTINUITY:
One realistic riderless black horse with a brown leather saddle. Heavy grounded quadruped with correct four-leg anatomy, natural gallop cycles, hard hoof contact, realistic braking, dust displacement and authentic momentum. No merged legs, extra limbs, sliding hooves or changing saddle.

SHOT 1 (0:00–0:02.5) — ECU TO MS — PLAYFUL PARRY

Camera: eye-level frontal axis with a rapid vintage dolly pullback.

0:00–0:00.35: a bandit's blade suddenly rushes toward the lens from screen-left.

0:00.35–0:00.60: Medianoche parries it with one tiny, effortless wrist movement. Steel makes clearly visible contact with steel.

0:00.60–0:01.40: camera rapidly pulls backward into a medium two-shot. The bandit strains against his sword while Medianoche barely moves.

0:01.40–0:01.90: she flicks his blade aside and smoothly returns her rapier to its scabbard.

0:01.90–0:02.50: without looking at the bandit, she raises one eyebrow and forms a small crooked smirk. Hold the expression for one short vintage-comedy reaction beat.

SFX: sharp steel ring, leather movement, quick cloth shift.

Diegetic saloon piano and fiddle begin a brisk playful rhythm.

HARD CUT TO:

SHOT 2 (0:02.5–0:04.5) — MWS — TABLE VAULT

Camera: energetic handheld tracking lead moving backward and slightly left.

A second bandit lunges from Medianoche's right. She sidesteps at the final possible moment, plants one gloved hand firmly on a round table and performs one clean one-handed vault.

Her palm compresses against the tabletop and the table tilts slightly under her weight. Both boots land solidly on the floor beyond him.

The bandit misses her and slides chest-first across the tabletop, knocking over two empty cups.

Medianoche gives him one quick amused glance over her shoulder and releases a short genuine laugh through her nose without stopping.

Her cape remains attached and streams behind her.

SFX: table creak, boots landing, cups clattering, body hitting wood.

MOTION MATCH CUT TO:

SHOT 3 (0:04.5–0:07.0) — MS — KICK AND BARRELS

Camera: low profile handheld at 90°, opening slightly toward frontal as the kick lands.

A third bandit charges clearly from screen-left. Medianoche pivots on one planted boot and drives her other boot into his midsection. Show clear boot-to-body contact.

He folds from the impact and flies backward into stacked barrels. Two barrels break apart and one intact barrel rolls toward Medianoche.

Without looking down, she calmly lifts one boot and allows the rolling barrel to pass beneath it. She places the boot back on the floor, raises her chin and gives the fallen bandit a tiny satisfied smirk.

SFX: dull body impact, cracking wood, rolling barrel.

The saloon piano briefly accents the barrel impact, then continues.

HARD CUT TO:

SHOT 4 (0:07.0–0:10.0) — MCU — COMEDIC SLIP TO REAL THREAT

Camera: frontal handheld medium close-up with focus locked on Medianoche's face.

0:07.0–0:07.7: a loose barrel stave rolls under her heel. She unexpectedly slips one short step. Her arms make one quick undignified balancing movement.

0:07.7–0:08.1: she instantly regains perfect posture, straightens her hat and cape and looks forward with a deadpan expression as if nobody saw anything.

0:08.1: the far cantina door violently bangs open.

Four armed men enter behind her as blurred silhouettes. The piano and fiddle stop abruptly on the door impact.

Her deadpan confidence disappears. Her eyes widen, brows tighten, lips part slightly and one visible swallow moves through her throat.

She looks toward the armed men, then snaps her gaze toward the shuttered side window and turns hard.

No dialogue and no speech-like lip movement.

SFX: tiny boot skid, door impact, sudden musical stop, incoming boots and shouts.

WHIP PAN TO:

SHOT 5 (0:10.0–0:12.0) — MWS — FAST ESCAPE

Camera: handheld tracking lead matching her running pace and moving backward through the tables.

Medianoche accelerates into a hard run. She curves around one table, narrowly avoids a chair and ducks beneath the arm of an incoming bandit without slowing.

The bandit's hand misses her hat by only a few centimetres. Her eyes flick upward toward the hand, followed by one irritated side-glance while she continues running.

The shuttered window remains visible directly ahead. At the end of the shot, she lowers her shoulder and raises her left forearm across her face.

SFX: fast boots, chair scrape, cloth snap, pursuing shouts.

HARD CUT TO:

SHOT 6 (0:12.0–0:14.5) — PROFILE WS — WINDOW CRASH

Camera: profile 90° wide shot showing the cantina interior, the window and the street outside.

Medianoche reaches the wooden shutters at full running speed and hits them shoulder-first. Her shoulder makes visible physical contact before the wood breaks.

The shutters burst outward into several readable wooden pieces and small splinters. Her body slows slightly from the resistance before continuing through under its original momentum.

She lands outside with one boot followed by the other, takes two unsteady recovery steps and regains her balance.

One loose shutter panel lands behind her with a delayed wooden clatter. She flinches for a fraction of a second, then immediately restores her dignified posture.

Lighting shifts naturally from warm lamplight to bright late-afternoon sun.

SFX: heavy shutter crack, wood fragments, boots striking dirt, delayed wooden clatter, wind rush.

HARD CUT TO:

SHOT 7 (0:14.5–0:16.5) — CU — WHISTLE

Camera: static three-quarter 45° close-up with subtle vintage operator breathing.

Using only one hand, Medianoche places exactly two gloved fingers between her lips and produces one sharp whistle.

Her other hand remains lowered near the sheathed rapier. Her eyes scan left, then right in two quick precise movements.

For one brief beat she wears a confident "problem solved" expression. Approaching hoofbeats immediately wipe away the smirk. She turns sharply toward the sound.

SFX: one clear whistle, wind, rapidly approaching horse.

AUDIO BRIDGE TO:

SHOT 8 (0:16.5–0:20.5) — PROFILE WS — BACKWARD MOUNT PUNCHLINE

Camera: one unbroken eye-level profile wide shot. Keep Medianoche and the entire horse visible from hooves to hat. Do not cut away or hide the mount with dust, cape or camera movement.

0:16.5–0:16.8: Medianoche stands visibly alone on the ground at screen-right. The horse is not yet beside her.

0:16.8–0:17.7: the riderless black horse gallops into frame from screen-left.

0:17.7–0:18.1: the horse performs a heavy grounded skid and comes to a complete stop directly in front of her. Dust moves forward from the braking hooves. Medianoche remains visibly separate from the horse.

0:18.1–0:18.8: only after the horse has fully stopped, she jumps from the ground and lands with full body weight in the saddle.

CRITICAL COMEDY AND ORIENTATION LOCK:
She lands facing the horse's tail. Her face, chest and knees point toward the tail. The horse's head is behind her back. She must not face the horse's head.

0:18.8–0:19.7: hold the wide view to prove the backward orientation. The saddle compresses beneath her weight.

Medianoche looks down and discovers the horse's tail directly in front of her. Her eyes widen. She slowly turns only her head over one shoulder, sees the horse's head behind her and blinks once with stunned embarrassment. Her body remains facing the tail.

She tightens her jaw and grabs the rear cantle instead of the reins, trying to pretend the mistake was intentional.

0:19.7–0:20.5: the horse suddenly launches forward while she is still seated backward. Her torso jerks realistically from the acceleration.

SFX: hoof skid, dirt spray, saddle thud, leather creak, sudden gallop.

HARD CUT TO:

SHOT 9 (0:20.5–0:24.5) — LATERAL MWS — BRANCH FALL

Camera: lateral profile tracking matching the horse. Keep the full horse and Medianoche's backward orientation readable.

The horse gallops along the same road. Medianoche remains facing the tail, holding the cantle and bouncing awkwardly while trying to maintain a dignified expression.

Because she is facing backward, she cannot see the low branch approaching from behind her back.

At 0:21.3 the thick branch strikes across her upper back and shoulders — never across her chest.

Only the 0.5 seconds immediately surrounding branch contact play at 40% speed. During this brief slow-motion beat, her confident expression transforms into wide-eyed realization.

Return immediately to normal speed.

The branch lifts her cleanly from the saddle while the horse continues beneath her. Authentic momentum carries her through one airborne rotation.

She hits the dirt with her shoulder and side, rolls once and stops in a small dust cloud.

She lies still for half a beat, then slowly pushes onto one elbow. Her hair is dusty, but her hat and mask remain attached. She exhales through her nose and looks after the horse with stunned, wounded dignity.

SFX: wooden impact, short grunt, heavy dirt impact, cloth rolling, receding hoofbeats.

SMASH CUT TO:

SHOT 10 (0:24.5–0:28.5) — REAR MS — BREATHLESS CHASE

Camera: rear handheld tracking follow with natural vertical bounce from each footfall.

0:24.5–0:25.2: Medianoche scrambles upright without teleporting. She briefly wobbles, catches her balance and immediately runs.

0:25.2–0:25.8: she accelerates after the horse. Her boots strike packed dirt, small dust clouds appear at every step and her cape snaps behind her.

At 0:25.8 she throws one arm toward the retreating horse and shouts in American English, in a low chest-resonant alto becoming breathless and ragged:

"Wait! Wait for me!"

Immediately after the final word she pushes into one last desperate burst of speed.

Her hat tilts slightly from the running. Without slowing, she slaps it straight with one hand and continues chasing the horse.

The camera gradually allows Medianoche to become smaller in frame as the horse increases the distance.

No other spoken words. No music underneath the dialogue.

CUT TO:

SHOT 11 (0:28.5–0:30.0) — HIGH-ANGLE EWS — VINTAGE IRIS

Camera: high-angle rear static extreme wide shot of the same dusty road. Frontier buildings remain visible near the cantina, with trees farther down the road.

Medianoche continues running after the black horse. Both figures steadily shrink into the distance.

A faint playful saloon-piano motif returns only after her dialogue has finished.

The full rectangular image remains visible from 0:28.5 until exactly 0:29.5.

At exactly 0:29.5 a vintage circular iris begins closing around Medianoche and the horse.

The iris closes smoothly for exactly 0.5 seconds and reaches complete black only on the final frame at exactly 0:30.0. No black hold after the iris closes.

SFX: hoofbeats, running footsteps and wind gradually recede.

FINAL CONSTRAINTS:
• exactly 30.0 seconds
• exactly 11 separately timed shots
• fast comic rhythm with no dead time
• dynamic but readable fight choreography
• expressive natural facial acting in every reaction shot
• old Technicolor swashbuckling comedy, not modern action and not cartoon slapstick
• Medianoche remains identical to @Image1 throughout
• no face, mask, hairstyle, body or costume drift
• cape remains attached throughout
• rapier remains sheathed at the right hip after Shot 1
• no teleportation between locations or actions
• horse must arrive riderless
• Medianoche must remain visibly on the ground until the horse fully stops
• show her complete jump and saddle contact without obstruction
• she lands facing the horse's tail and remains backward
• branch strikes her upper back and shoulders because she is facing backward
• realistic horse anatomy, gait, weight and hoof contact
• authentic human weight during vault, kick, window impact, saddle landing and fall
• no subtitles, captions, logos or on-screen text
• no extra dialogue
• no background music during "Wait! Wait for me!"`,
    },
  },
  // 查重别名(本帖引用的同作者同角色另一部片，酒馆打斗跳马追马，已做本地包 nastassiavideo-medianoche-saloon-escape)：https://x.com/nastassiavideo/status/2095368017739653337
  {
    id: "nastassiavideo-medianoche-saloon-porch-gag",
    title: "蒙面女侠 · 酒馆门廊出糗",
    subtitle: "X · @nastassiavideo · Seedance 2.5 · 19秒 · 16:9",
    description:
      "蒙面女侠帅气推门出场却扑倒在地，起身装没事，躲拳让劫匪互殴，最后捡帽退场。",
    video: "/tutorials/nastassiavideo-medianoche-saloon-porch-gag/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-medianoche-saloon-porch-gag/poster.jpg",
    duration: "19秒",
    durationSec: 19,
    styleLabel: "复古喜剧",
    shots: 6,
    references: 1,
    model: "Seedance 2.5（帖文：视频 Seedance 2.5，角色卡 GPT 2）",
    style: "早期彩色冒险片 · 西部酒馆门廊 · 肢体喜剧",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2096952053687808223",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 2591,
    sourceStats: { asOf: "2026-09-27", likes: 31, reposts: 4, bookmarks: 13 },
    formats: ["角色表演", "电影叙事"],
    hook: {
      structure: "帅气出场 → 绊倒 → 装没事 → 躲拳误伤 → 披风绊倒一堆 → 捡帽退场",
      opening: "第 0–1.5 秒酒馆双开门被推开，蒙面女侠披着斗篷大步走出来；约 2 秒她扑倒向镜头，帽子飞到镜头前。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3–5s 近景里她扶正帽子和眼罩，抬下巴装作一切顺利；约 5.5–7s 劫匪挥拳，她低头躲过，拳头打在后面另一个劫匪身上。", at: 3 },
        { title: "披风绊倒一堆", text: "约 8.5–12s 高角度门廊全景：她拔剑，披风甩开，披条纹披毯的劫匪扑过来，最后几个人摔在木桶旁。", at: 8.5 },
        { title: "结尾怎么收", text: "约 13–15.5s 脸部特写挑眉；约 16–17.5s 收剑从画面左边走出；约 18–19s 一只黑手套拿着帽子伸进画面，圆形遮罩收成黑场。", at: 13 },
      ],
      copyThis: "每个镜头都用 vfx / camera_motion / action_visual / exit 四行写，exit 写清这一镜最后一个动作和转场方式（HARD CUT、MATCH CUT、WHIP PAN），镜头之间就能接得顺。",
      approx: true,
    },
    tags: [
      "19秒 · 西部喜剧",
      "16:9 横屏",
      "6 个镜头",
      "Seedance 2.5",
      "复古胶片圆形遮罩",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备角色卡",
        description:
          "@Image1 用的是同一张 Medianoche 角色卡（正脸、侧脸、背面、全身正背面，身高 158cm、声音、性格说明），帖文写角色卡用 GPT 2 做。角色卡已收录（原图 1672x941，压到 1600px），出图提示词没公开。",
      },
      {
        number: 2,
        title: "第二步：写全局设定和 4 个角色",
        description:
          "先写一句 @Image1 要保留的所有外观细节，再写 SCENE 的情节线（出场 → 出糗 → 打斗 → 淡定 → 退场笑点）、SHOT STRUCTURE（6 个镜头、20 秒）、GLOBAL STYLE NOTES（正午硬光、早期彩色片调色、门廊布景、环境音），最后给女主和 3 个劫匪各写一行 visual_anchors。",
      },
      {
        number: 3,
        title: "第三步：6 个镜头按四行格式写",
        description:
          "HOOK 出场摔倒 → PUNCHLINE 起身装没事 → RISING 躲拳误伤 → SIGNATURE 剑勾披风绊倒三人 → CALLBACK 特写挑眉 → RESOLUTION 收剑、退场、捡帽、圆形遮罩。结尾用 GENERATE FIRST 写明先生成第 4、5、6 镜。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-medianoche-porch-image1",
        number: "1",
        title: "@Image1 · Medianoche 角色卡",
        subtitle: "作者帖内图片原件 HRnetSpbkAEnwzc（1600px 压缩）· 与《酒馆脱逃》同一张 AI 角色卡",
        image: "/tutorials/nastassiavideo-medianoche-saloon-porch-gag/refs/image1-medianoche-charsheet.jpg",
        prompt: "作者未公开出图提示词（帖文写角色卡用 GPT 2 做）。视频提示词中的用法：@Image1 is the masked heroine reference — hat, eye mask, cape, corset bodice, trousers, gloves, boots.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–1.5s 酒馆双开门推开，女侠大步走出。" },
      { number: 2, description: "2s 扑倒向镜头，帽子飞到镜头前。" },
      { number: 3, description: "3–5s 近景，扶正帽子和眼罩。" },
      { number: 4, description: "5.5–8s 劫匪挥拳，她低头躲开，拳头打中另一个劫匪。" },
      { number: 5, description: "8.5–12s 高角度门廊全景，拔剑甩披风，劫匪们摔在木桶旁。" },
      { number: 6, description: "13–15.5s 脸部特写，身后劫匪虚焦。" },
      { number: 7, description: "15.5–17.5s 收剑，从画面左边走出。" },
      { number: 8, description: "18–19s 黑手套拿着帽子伸进画面，圆形遮罩收成黑场。" },
    ],
    constraints:
      "女主的帽子、眼罩、披风、紧身胸衣、长靴、右腰的剑每个镜头都一样；3 个劫匪按各自服装区分（小胡子背带、棕马甲红领巾、条纹披毯）；全程复古胶片质感。与成片不符：提示词写 4:3、20 秒，成片是 16:9、约 19.3 秒；剑勾住披风、披风盖住劫匪头的过程在高角度全景里看不清；提示词写捡回帽子戴到头上，成片最后只看到手拿着帽子伸进画面；收剑两次插不进没有明显表现。缺口：角色卡出图提示词没公开。",
    video_prompt: {
      title: "Medianoche · Heroic Entrance to Exit Gag",
      subtitle: "Seedance 2.5 · 提示词写 4:3（成片 16:9）· 英文完整提示词（主帖第二张图，逐字转录）",
      content: `@Image1 is the masked heroine reference — keep the black flat-crown wide-brim hat, black eye mask, black cape tied at the neck, black corset bodice, fitted black trousers, black gloves, knee-high black heeled boots, rapier at the right hip, shoulder-length wavy chestnut hair, and pale steady-eyed face identical in every shot.

SCENE 1 (0:00-0:20) — HEROIC ENTRANCE → HUMILIATION → SLAPSTICK FIGHT → DEADPAN CONTROL → EXIT GAG

SHOT STRUCTURE: 6 shots, 20 seconds, 4:3

GLOBAL STYLE NOTES:
• lighting_philosophy: hard midday sun from above-left, dusty bounce fill from street, mild halation around bright sky.
• color_grade: aged early-color adventure palette — ochre wood, dusty reds, faded sky blue, warm skin, deep black costume.
• setting: frontier saloon exterior, wooden porch 30 cm above the street, swing doors center, barrels frame right, hitching post frame left, midday dust in the air.
• ambience: boots on wood, cloth rustle, barrel thumps, light street murmur, distant horse snort.

characters:
• character_1:
visual_anchors: black flat-crown wide-brim hat, black eye mask, black cape tied at the neck, black corset bodice, fitted black trousers, black leather gloves, knee-high black heeled boots, rapier at the right hip, shoulder-length wavy chestnut hair, pale composed face.
• character_2:
visual_anchors: thick mustache, dusty tan shirt with rolled sleeves, dark suspenders.
• character_3:
visual_anchors: brown vest, red neckerchief.
• character_4:
visual_anchors: striped serape, dark trousers.

SEQUENCE LIST:

SHOT 1 (0-3s) HOOK — Wide Shot
• vfx: aged color film texture, visible 35mm grain, gate weave, light scratches, subtle flicker; speed: 18fps undercranked look, brief speed ramp (deceleration) to 70% on the fall.
• camera_motion: low-angle dolly in from street level toward the saloon doors, ending 60 cm from character_1.
• action_visual: saloon doors burst open. Character_1 strides out in full heroic posture, cape trailing. On the second step her heel catches the porch edge and she drops straight forward toward camera, boots kicking up dust on impact.
• exit: her gloved hand reaches toward the fallen hat brim near lens. (HARD CUT TO)

SHOT 2 (3-5s) PUNCHLINE — Medium Close-Up
• vfx: aged color film texture continues; stacked effect: tiny impact aftershake settling into near-static frame.
• camera_motion: side-view locked-off tripod at chest height with one slight corrective wobble as she rises.
• action_visual: character_1 lies frozen for one beat, then calmly stands. She straightens the hat, aligns the eye mask, tightens the cape knot, and lifts her chin as if the entrance went perfectly.
• exit: she finishes the adjustment and turns left toward the incoming attack. (MATCH CUT TO)

SHOT 3 (5-9s) RISING — Medium Wide Shot
• vfx: aged color film texture continues; stacked effect: brief handheld jolt on the punch impact.
• camera_motion: 35mm lateral dolly right, tracking parallel to the porch as character_2 charges from frame right.
• action_visual: character_2 throws a wide punch. Character_1 ducks under it without hurry. The punch lands on character_3 behind her. She rises into frame center, shifts half a step left, and character_3 stumbles into a barrel with a loud wooden crack.
• exit: the barrel roll drives the frame rightward and bridges into the next angle. (WHIP PAN TO)

SHOT 4 (9-13s) SIGNATURE — Full Shot
• vfx: aged color film texture continues; stacked effect: slight top-frame shake as bodies collide.
• camera_motion: high-angle static view from 45° above the porch, holding the full slapstick geometry.
• action_visual: character_1 draws the rapier for a clean flourish, but the blade hooks into her own cape. She tugs once, then harder. The cape flips over character_4's head. Blind under black fabric, character_4 flails and crashes into character_2 and character_3, knocking all three into a heap. Add one small background visual gag with a bystander casually stepping back to protect a drink.
• exit: character_1 turns her head 10° toward the fallen bandits while everything settles beneath her. (HARD CUT TO)

SHOT 5 (13-16s) CALLBACK — Close-Up
• vfx: aged color film texture continues; speed: normal 18fps cadence with stable focus on her eyes.
• camera_motion: 85mm subtle push-in from CU to tighter CU, no more than 15 cm travel.
• action_visual: character_1 stays perfectly composed in sharp focus. Behind her, the bandits remain blurred figures trying to untangle themselves. She raises one eyebrow, smooths the collar edge with two fingers, and gives a tiny satisfied exhale.
• exit: her hand drops from the collar to the rapier hilt. (MATCH CUT TO)

SHOT 6 (16-20s) RESOLUTION — Wide Shot
• vfx: aged color film texture continues; stacked effect: brief 80% speed beat on the final hat-recovery gag; end with iris close.
• camera_motion: eye-level dolly out from full figure to wider porch view, ending with the doorway and street both visible.
• action_visual: character_1 tries to sheath the rapier and misses the scabbard twice. She glances sideways for one beat, succeeds on the third try, pivots with full swashbuckler pride, and walks out frame left. One second later a hard off-screen stumble is heard. After a pause, her black-gloved hand reaches back into frame, retrieves the fallen hat, places it neatly on her head just inside the edge of frame, and disappears again.
• exit: iris close to black on the restored hat silhouette. (IRIS CLOSE TO BLACK)

GENERATE FIRST: Shot 4 (cape entanglement slapstick geometry), Shot 5 (deadpan eyebrow reaction), Shot 6 (final stumble and hat recovery).`,
    },
  },
  {
    id: "nastassiavideo-suede-bag-ugc-review",
    title: "麂皮手提包 · UGC 开箱口播",
    subtitle: "X · @nastassiavideo · 模型未标注 · 20秒 · 9:16",
    description:
      "博主坐在床边拆盒取出麂皮手提包，边讲边展示缝线和内袋，再到镜子前试背，20 秒种草口播。",
    video: "/tutorials/nastassiavideo-suede-bag-ugc-review/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-suede-bag-ugc-review/poster.jpg",
    duration: "20秒",
    durationSec: 20,
    styleLabel: "真人风",
    shots: 1,
    references: 4,
    model: "未标注（作者未公开）",
    style: "UGC 博主测评 · 卧室暖光 · 手机手持竖拍",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/nastassiavideo/status/2096179182992527601",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 1990,
    sourceStats: { asOf: "2026-09-27", likes: 50, reposts: 5, bookmarks: 22 },
    formats: ["产品广告", "手机POV·Vlog"],
    hook: {
      structure: "拆盒 → 细节展示 → 打开看内袋 → 镜前试背 → 举包收尾",
      opening: "第 0 秒她坐在床边，腿上放着一个白色纸盒，对着镜头笑着开口说话。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1–4s 打开盒子取出包；约 4.5–8.5s 把包横在镜头前转动，展示前片、明线和手柄；约 9–11.5s 打开磁扣，把包口朝向镜头看内袋。", at: 1 },
        { title: "上身效果", text: "约 12–15.5s 她站起来把包背上肩，走到落地镜前侧身照。", at: 12 },
        { title: "结尾怎么收", text: "约 16–17.5s 回到床边把包放下再拿起；约 18–20s 把包举到镜头前说最后一句。", at: 16 },
      ],
      copyThis: "把商品参数写死：材质（仿麂皮、哑光绒面）、配件（两根细圆手柄、两个前片小搭扣、磁扣、内侧拉链袋）和尺寸（37×17.5×10.5 cm），再让每句台词对应一个展示动作。",
      approx: true,
    },
    tags: [
      "20秒 · 带货口播",
      "9:16 竖屏",
      "一镜到底",
      "商品参考图",
      "UGC 开箱",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备人物图和商品图",
        description:
          "作者在主帖放了一张 2×2 拼图：三张包的棚拍图（斜侧、内部、正面）和一张女性面部特写。四张都已收录（面部特写是 AI 生成的人物参考）。作者没有标注用的视频模型。",
      },
      {
        number: 2,
        title: "第二步：锁定人物和商品",
        description:
          "第一段写人物参考要保留的脸、发型、妆容和服装（奶白针织上衣、直筒牛仔裤、细金饰）；第二段把包的材质、颜色、手柄、搭扣、磁扣、内袋和尺寸全部写死，要求每个镜头都一样。",
      },
      {
        number: 3,
        title: "第三步：按台词顺序写动作",
        description:
          "场景写明卧室、黄金时段暖光、手机手持轻微晃动。之后按顺序写 5 句台词，每句配一个动作：拆盒、转包看细节、打开磁扣看内袋、镜前试背、看镜头说收尾句。最后写声音（温暖的中音）、画面质感和「不要字幕、Logo、水印」。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-suede-bag-image1-angle",
        number: "1",
        title: "手提包 · 斜侧面",
        subtitle: "主帖拼图左上格裁出",
        image: "/tutorials/nastassiavideo-suede-bag-ugc-review/refs/image1-bag-angle.jpg",
        prompt: "作者上传的商品图，不是生成图，没有出图提示词。",
      },
      {
        id: "nastassiavideo-suede-bag-image2-interior",
        number: "2",
        title: "手提包 · 内部与内袋",
        subtitle: "主帖拼图左下格裁出",
        image: "/tutorials/nastassiavideo-suede-bag-ugc-review/refs/image2-bag-interior.jpg",
        prompt: "作者上传的商品图，不是生成图，没有出图提示词。",
      },
      {
        id: "nastassiavideo-suede-bag-image3-front",
        number: "3",
        title: "手提包 · 正面",
        subtitle: "主帖拼图右下格裁出",
        image: "/tutorials/nastassiavideo-suede-bag-ugc-review/refs/image3-bag-front.jpg",
        prompt: "作者上传的商品图，不是生成图，没有出图提示词。",
      },
      {
        id: "nastassiavideo-suede-bag-image4-face",
        number: "4",
        title: "人物参考 · 面部特写",
        subtitle: "主帖拼图右上格裁出（512x540）· AI 人物参考",
        image: "/tutorials/nastassiavideo-suede-bag-ugc-review/refs/image4-face-closeup.jpg",
        prompt: "作者未公开出图提示词。提示词第一段按这张图锁定脸、发型、妆容。",
      },
    ],
    storyboard: [
      { number: 1, description: "0–1s 坐在床边，腿上放白盒子，看镜头开口。" },
      { number: 2, description: "1–4s 打开盒子，取出麂皮包。" },
      { number: 3, description: "4.5–8.5s 把包横在镜头前转动，展示前片和明线。" },
      { number: 4, description: "9–11.5s 打开磁扣，展示内部和拉链内袋。" },
      { number: 5, description: "12–13s 站起来把包背上肩。" },
      { number: 6, description: "13.5–15.5s 在落地镜前侧身照。" },
      { number: 7, description: "16–17.5s 回到床边，把包放到盒子旁再拿起。" },
      { number: 8, description: "18–20s 把包举到镜头前说收尾句。" },
    ],
    constraints:
      "人物脸、发型、妆容、服装全程一致；包的形状、颜色、绒面、明线、手柄、磁扣每个镜头都一样；不要字幕、Logo、水印。与成片不符：提示词写不要字幕，成片全程有逐词弹出的大字幕，应该是后期加的；结尾是她把包举到镜头前，不是提示词写的镜头推近后淡出。缺口：作者没有标注视频模型；口型和台词没有逐句核对。",
    video_prompt: {
      title: "Suede Shoulder Bag · UGC Review",
      subtitle: "模型未标注 · 9:16 · 英文完整提示词（主帖第一张图，逐字转录）",
      content: `Use the uploaded reference image as the exact character reference. Preserve her facial identity, hairstyle, eye color, makeup, skin tone, body proportions, wardrobe, and accessories consistently throughout the video. Wardrobe stays clean and neutral to complement the bag: a fitted cream knit top, tailored straight leg jeans in a neutral wash, delicate gold jewelry, rings, and a thin bracelet.

Use the uploaded handbag images as the locked product reference. The product is a long rectangular shoulder bag in dark espresso brown imitation suede, with a soft matte nap, two thin rolled shoulder handles, light contrast topstitching, two small front flap tabs, a magnetic snap closure, and a fabric lined interior with one inner zip pocket. Keep the shape, proportions, suede texture, color, stitching, handles, and closure identical in every shot. The bag is a slim east to west silhouette, roughly 37 cm wide, 17.5 cm tall, 10.5 cm deep.

Create an authentic UGC creator review filmed inside a bright modern bedroom with warm golden hour sunlight, soft natural shadows, and a calm premium lifestyle feel. The camera behaves like a handheld smartphone with subtle natural sway while staying steady enough to read the product clearly.

The video begins with the woman sitting on the edge of the bed, a plain matte white box with no branding resting on her lap. Smiling at the camera she says, "Okay, I genuinely did not expect to love a bag this much." She lifts the lid off the white box, sets it beside her, and slowly draws the handbag out, running her hand across the suede.

She rotates the bag in front of the camera, showing the front tabs, the topstitching, and the two handles as soft light glides across the nap. She smiles and says, "The suede feels so soft, and up close the stitching is actually really nice."

She opens the magnetic snap and tips the bag toward the camera to show the lined interior and the inner zip pocket, then says, "Two handles, a magnetic snap, and a zip pocket inside, so it honestly holds everything."

She stands, slides the handles onto her shoulder, and walks to a full length mirror. Looking at her reflection she settles the bag against her hip and says, "And the shape just goes with everything."

She turns slightly left and right so the suede catches the light from different angles, then walks back to the bed, sets the bag down beside the open white box, and picks it up one more time, holding it beside her.

Looking directly into the camera she smiles warmly and says, "Honestly, my favorite bag this season." The camera slowly pushes in on the bag before the shot fades out.

Voice: warm upbeat alto, a genuine note of surprise on the opening line, settling into relaxed confidence by the end. Accurate lip sync on every line.

Authentic UGC fashion content, handheld smartphone framing, shallow depth of field with the bag in sharp focus and the background soft, realistic suede texture and soft light reflections, expressive natural facial animation, warm natural color, vertical 9:16.

no subtitles, no captions, no on-screen text, no logos, no watermarks, no identity changes, no wardrobe changes, no product changes.`,
    },
  },
  {
    id: "nastassiavideo-pink-after-dark-rap-minimax-h3",
    title: "粉色夜城说唱 MV · MiniMax H3",
    subtitle: "X · @nastassiavideo · MiniMax H3 · 12秒 · 16:9",
    description:
      "粉色霓虹夜城说唱 MV：每句歌词换一个雨夜场景，大字歌词印在她身后的墙、围栏和楼上。",
    video: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/poster.jpg",
    duration: "12秒",
    durationSec: 12,
    styleLabel: "真人风",
    shots: 11,
    references: 10,
    model: "MiniMax H3",
    style: "雨夜霓虹 · 酸性玫瑰粉 + 黑 · 35mm 胶片颗粒 · 巨型歌词排版",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2093364039187308582",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 2020,
    sourceStats: { asOf: "2026-09-27", likes: 33, reposts: 4, bookmarks: 10 },
    formats: ["字效·片头", "角色表演"],
    hook: {
      structure: "每句歌词一个场景 → 歌词大字落在她身后的真实表面 → 卡在拍点上硬切",
      opening: "第 0 秒她站在砖墙小巷里，身后一道竖向粉色霓虹；0.25 秒起「PINK AFTER DARK」三行大字从积水倒影里升起，贴到左边墙上。",
      openingAt: 0,
      beats: [
        { title: "场景怎么换", text: "约 1.75s 切到地铁站近景，她整理马甲领口；2.5s 砖墙上贴出「CITY ON MY SKIN」海报；3.25s 铁丝网横幅「YOU CAN'T PULL ME IN」；3.75s 雨夜斑马线「I WALK LIKE THUNDER」，脚下一圈粉色涟漪。", at: 1.75 },
        { title: "中段", text: "约 5s 天台粉烟里浮出「BLACK SKY BURNING」；6.25s 地下车库，「HEARTBEAT IN THE STREET」外套银色心电圆环；7.25s 玻璃大楼窗格拼出「I OWN THE NIGHT」，她摸头顶墨镜，随后窗格一排排熄灭。", at: 5 },
        { title: "结尾怎么收", text: "约 8.5s 地下通道壁画上斜着落下「MOVE TO MY RHYTHM」；9.75s 切到隧道口；10–12.3s 近景，身后巨型「CONCRETE」和小字「WATCH ME LIGHT THE」，她看着镜头唱完最后一句。", at: 8.5 },
      ],
      copyThis: "把字写成场景的一部分：规定字体（超窄粗黑体、粉色填充 + 细银边）、字在她身后的哪种表面上（墙、横幅、窗格、壁画），并要求字离镜头比人远、不挡脸、拼写正确。",
      approx: true,
    },
    tags: [
      "12秒 · 说唱 MV",
      "16:9 横屏",
      "11 个镜头",
      "歌词大字排版",
      "角色卡 + 音频驱动",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备角色卡、歌词场景图和音轨",
        description:
          "作者在主帖放了三张图：一张角色卡（全身 + 脸部特写 + 半身，粉色马甲造型）、一张 3×3 歌词场景图（9 个场景各配一句歌词大字），和一张提示词长图。角色卡和 9 张场景图都已收录。提示词里的 @Audio1 是说唱音轨，作者没有公开。",
      },
      {
        number: 2,
        title: "第二步：写一段三次生成都用的公共设定",
        description:
          "开头的 SHARED BLOCK 每次生成都贴：@Image1 只管脸、发色、妆和服装，@Audio1 只管节奏和口型；每个场景只有一个酸性玫瑰粉霓虹光源、积水从下往上补光；色调约 70% 黑 + 27% 粉 + 3% 银；写明服装细节、字体规则和机位范围；音乐 160 BPM、每个切点落在小节第一拍、不要模型自己生成音乐。",
      },
      {
        number: 3,
        title: "第三步：分三次生成，每次 3 个镜头",
        description:
          "RUN A、B、C 各写 3 个镜头（5 秒、5 秒、6 秒），每个镜头都写：机位和镜头焦段、灯光变化、运镜、动作和要唱的歌词、字怎么出现、怎么转到下一个镜头（硬切、甩镜、光扫、烟雾转场、匹配剪辑、推镜爆闪）。结尾统一贴技术限制：只出现列出的字、不要字幕、水印、Logo、多余的人、不要换装换脸。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-pink-after-dark-image1-nastya",
        number: "@Image1",
        title: "@Image1 · 角色卡 Nastya",
        subtitle: "主帖第一张图原件 HQ0fbK0WUAAsL00（1536x1024）· 全身 + 脸部特写 + 半身，AI 角色卡",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/image1-character-card-nastya.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@Image1 = character card. Controls face, grey blue eyes, ash brown hair, makeup and wardrobe only; the backdrop of @Image1 stays out of the output.",
      },
      {
        id: "nastassiavideo-pink-after-dark-map1",
        number: "1",
        title: "歌词场景图 · PINK AFTER DARK",
        subtitle: "砖墙小巷 + 竖向粉色霓虹；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map1-pink-after-dark.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map2",
        number: "2",
        title: "歌词场景图 · CITY ON MY SKIN",
        subtitle: "黑砖墙 + 三条粉色海报；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map2-city-on-my-skin.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map3",
        number: "3",
        title: "歌词场景图 · I WALK LIKE THUNDER",
        subtitle: "雨夜斑马线 + 粉色涟漪；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map3-i-walk-like-thunder.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map4",
        number: "4",
        title: "歌词场景图 · YOU CAN'T PULL ME IN",
        subtitle: "铁丝网 + 粉色横幅；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map4-you-cant-pull-me-in.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map5",
        number: "5",
        title: "歌词场景图 · BLACK SKY BURNING",
        subtitle: "天台 + 粉色烟雾；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map5-black-sky-burning.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map6",
        number: "6",
        title: "歌词场景图 · HEARTBEAT IN THE STREET",
        subtitle: "地下车库 + 银色圆环心电线；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map6-heartbeat-in-the-street.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map7",
        number: "7",
        title: "歌词场景图 · I OWN THE NIGHT",
        subtitle: "玻璃大楼窗格亮字；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map7-i-own-the-night.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map8",
        number: "8",
        title: "歌词场景图 · MOVE TO MY RHYTHM",
        subtitle: "地下通道几何壁画；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map8-move-to-my-rhythm.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
      {
        id: "nastassiavideo-pink-after-dark-map9",
        number: "9",
        title: "歌词场景图 · WATCH ME LIGHT THE CONCRETE",
        subtitle: "隧道口粉色天际 + 巨型字；主帖第二张 3×3 拼图裁出",
        image: "/tutorials/nastassiavideo-pink-after-dark-rap-minimax-h3/refs/map9-watch-me-light-the-concrete.jpg",
        prompt: "作者没有公开这张图的出图提示词。",
      },
    ],
    storyboard: [
      { number: 1, description: "0–1.6s 砖墙小巷，竖向粉色霓虹；「PINK AFTER DARK」从积水倒影里升起贴到墙上。" },
      { number: 2, description: "1.75–2.4s 地铁站近景，背后列车掠过，她整理马甲领口。" },
      { number: 3, description: "2.5–3.1s 黑砖墙，「CITY / ON MY / SKIN」三条粉色海报贴在她身后。" },
      { number: 4, description: "3.25–3.6s 铁丝网前，粉色横幅「YOU CAN'T PULL ME IN」。" },
      { number: 5, description: "3.75–4.9s 雨夜斑马线，她朝镜头走来，「I WALK LIKE THUNDER」斜体大字，脚下粉色涟漪扩散。" },
      { number: 6, description: "5–5.9s 天台低角度，粉色烟雾里浮出「BLACK SKY BURNING」，风吹起头发。" },
      { number: 7, description: "6–7.1s 地下车库粉色灯管，「HEARTBEAT IN THE STREET」外套银色圆环和心电线。" },
      { number: 8, description: "7.25–8.3s 玻璃大楼窗格拼出「I OWN THE NIGHT」，她摸头顶墨镜，窗格一排排熄灭。" },
      { number: 9, description: "8.5–9.6s 地下通道几何壁画，「MOVE / TO MY / RHYTHM」斜着落下，她甩手腕转身。" },
      { number: 10, description: "9.75s 隧道口，远处粉色天际，隧道灯依次亮起。" },
      { number: 11, description: "10–12.3s 近景，身后巨型「CONCRETE」和小字「WATCH ME LIGHT THE」，她看镜头唱完最后一句。" },
    ],
    constraints:
      "只出现列出的字，拼写正确，不要字幕、水印、Logo；字不挡脸；只有她一个人，不换装不换脸；不要模型自己生成音乐。与成片不符：提示词写 9:16、分三次生成（5+5+6 秒），成片是一条 12 秒 16:9 横屏；成片里的字是整句歌词（如「YOU CAN'T PULL ME IN」），提示词只写了部分关键词（如「PULL ME IN」）；「CITY ON MY SKIN」在成片里是地铁近景后另切一个砖墙镜头，不是贴在地铁瓷砖上；成片把铁丝网镜头放在斑马线之前。缺口：@Audio1 音轨没有公开；9 张歌词场景图怎么用（是否作为参考图上传）作者没说；口型和歌词没有逐句核对。",
    video_prompt: {
      title: "Pink After Dark · Rap Music Video",
      subtitle: "MiniMax H3 · 提示词写 9:16（成片 16:9）· 英文完整提示词（主帖第三张图，逐字转录）",
      content: `=== SHARED BLOCK – paste at the top of all three runs ===

REFS:
@Image1 = character card. Controls face, grey blue eyes, ash brown hair, makeup and wardrobe only.
@Audio1 = the track for this segment. Controls tempo, flow, phrasing and every lip position only.
ACTIVE REFERENCES: @Image1 100%; @Audio1 100%. Framing is fresh in every shot, the backdrop of @Image1 stays out of the output.

GLOBAL STYLE NOTES:
lighting_philosophy: one acid rose neon source per location, the brightest thing in frame, wet ground returning it as fill from below, everything outside its throw falling to black
color_grade: 35mm film still, push processed, fine grain, halation off every pink source. ~70% black and carbon in asphalt, brick and concrete + ~27% acid rose in the neon, the lettering and the wet reflections, powder pink on her wardrobe + ~3% chrome silver on rings and letter outlines
setting: rain soaked black city at night, a new location on every cut, real time
ambience: rain on asphalt at three distances, tyre hiss, vent hum, dripping concrete, swapping on the same frame as every cut
characters: <Nastya> corresponds to @Image1. Powder pink cropped puffer vest open over a powder pink long sleeve crop top, oversized powder pink parachute trousers, pink and grey plaid shirt knotted at her hips, grey faux fur boots with pink laces, black sunglasses pushed up on her head, silver rings, long ash brown layered hair loose in the wind, visible pores. Keep identical in every shot. She is the only person in the video.
typography: ultra condensed heavyweight sans in capitals, acid rose fill with a thin chrome silver outline. The words live on a real surface behind her, painted, printed, projected or lit, always further from the lens than she is. They land in the first half of the shot and hold crisp and correctly spelled to the cut. Nothing crosses her face.
camera_character: handheld throughout, operator breath, hand tremor, small live reframes in every shot
location_map: she holds the centre of the vertical frame, x 25% to 75%, the lettering and the neon behind her in the upper and outer thirds

MUSIC_LAYER:
instrumental: supplied by @Audio1, 160 BPM half time, minor key, sub bass, tight kick, dry clap. Generate no music of your own.
lyrics: rapped to @Audio1, one line per shot as listed
vocal_style: rapping, percussive consonants, cold and unhurried, hitting the beat rather than sliding across it
audio_visual_sync: every cut lands on the first beat of a bar, 36 frames apart, kick on each cut, the words locking on the clap
lip_sync_mode: rapping, English, every consonant matched to @Audio1


=== RUN A ===

PINK AFTER DARK, SEGMENT A: IGNITION > CLAIM > SURGE
SHOT STRUCTURE: 3 shots, 5 seconds, 9:16, 24 fps, exactly as listed, no added shots

SEQUENCE LIST:
SHOT 1 (0 to 1.5s) HOOK
camera: waist up, eye level, three quarter 45. lens: 47 standard, no focal drift
camera_motion: slow push in
action_visual: brick alley, one vertical acid rose slit burning at the far end, rain falling through three depth planes into breaking puddles. She rolls one shoulder forward, turns into the lens and raps: 'Pink after dark'
text: 'PINK AFTER DARK' stacked in three lines, rising out of the wet pavement reflection and locking upright on the brick wall at frame left
exit: her chin drops on the last syllable
(HARD CUT TO)
SHOT 2 (1.5 to 3s) SETUP
camera: medium close up, eye level, frontal 0. lens: 29 short telephoto
LIGHT SHIFT: fluorescent tube overhead, one flicker, pink bleeding off wet subway tile
camera_motion: small arc around her left shoulder
action_visual: black subway tile, a train passing as a blurred band behind glass. She straightens her vest collar and raps: 'City on my skin'
text: 'CITY', 'ON MY' and 'SKIN' printed on three pink poster strips that slide in from three directions and flatten onto the tile behind her, corners lifting in the airflow
exit: the bottom poster corner peels and whips past the lens
(WHIP PAN TO)
SHOT 3 (3 to 5s) RISING
camera: knees up medium wide, hip height, profile 90 turning frontal. lens: 65 moderate wide
LIGHT SHIFT: distant pink signals, long reflections running the wet crosswalk
camera_motion: retreating dolly, she closes the gap
action_visual: rainwater sheeting across crosswalk stripes, mist off a street vent. She steps into the lens, shoulder rolling through it, and raps: 'I walk like thunder'
text: 'THUNDER' in heavy oblique capitals slams down onto the wet crosswalk behind her, one acid rose ripple leaving the impact
exit: her boot lands and the ripple widens past the frame


=== RUN B ===

PINK AFTER DARK, SEGMENT B: RESISTANCE > ELEVATION > PULSE
SHOT STRUCTURE: 3 shots, 5 seconds, 9:16, 24 fps, exactly as listed, no added shots

SEQUENCE LIST:
SHOT 1 (0 to 1.5s)
camera: waist up, eye level, three quarter 45 from her right. lens: 47 standard
LIGHT SHIFT: pink headlight streaks sweeping behind chain link
camera_motion: lateral track right, holding her frame left
action_visual: rain beading down black wire, the fence shivering as a vehicle passes. She turns one shoulder away, looks straight back into the lens and raps: 'You can't pull me in'
text: 'PULL ME IN' printed across a pink banner zip tied to the chain link behind her, stretching taut with the fence then snapping flat on the clap
exit: a headlight streak slices the frame horizontally
(LIGHT WIPE TO)
SHOT 2 (1.5 to 3s) SIGNATURE
camera: medium close up, low angle, frontal 0. lens: 29 short telephoto
LIGHT SHIFT: acid rose city glow from below, matte black cloud above
camera_motion: slow rise, tilting with her chin
action_visual: rooftop under fast carbon cloud, pink smoke rolling along the deck, wind lifting her hair and collar. She raises her chin into it and raps: 'Black sky burning'
text: 'BLACK SKY' above 'BURNING', revealing bottom to top through the rolling pink smoke behind her
exit: smoke rushes the lens and fills the frame
(SMOKE WIPE TO)
SHOT 3 (3 to 5s)
camera: waist up, eye level, three quarter 45. lens: 47 standard
LIGHT SHIFT: pink ceiling tubes pulsing down the garage in sequence
camera_motion: handheld hold, breathing only
action_visual: black concrete pillars, vent fog crossing the floor, puddles trembling on the bass. She pulses both shoulders twice on the kick and raps: 'Heartbeat in the street'
text: 'HEARTBEAT' inside a thin chrome silver ring behind her, the ring expanding once on the kick and freezing around the word
exit: the tubes darken toward her one by one


=== RUN C ===

PINK AFTER DARK, SEGMENT C: OWNERSHIP > RELEASE > SIGNATURE
SHOT STRUCTURE: 3 shots, 6 seconds, 9:16, 24 fps, exactly as listed, no added shots

SEQUENCE LIST:
SHOT 1 (0 to 1.5s) CLIMAX
camera: tight medium close up, eye level, frontal 0. lens: 29 short telephoto
LIGHT SHIFT: a grid of dark windows behind her, single cells lighting bubblegum pink
camera_motion: push in to a stop
action_visual: black glass tower, traffic reflections crossing the facade, fine rain sliding down it. She touches the sunglasses on her head without lowering them and raps: 'I own the night'
text: 'I OWN THE NIGHT' assembled from individual lit window cells across the tower grid behind her, one word per floor
exit: the lit windows switch off in a wave, one vertical pink column left burning
(MATCH CUT TO)
SHOT 2 (1.5 to 3s)
camera: medium, eye level, profile 90 turning three quarter. lens: 65 moderate wide
LIGHT SHIFT: hard pink projection sweeping a geometric mural
camera_motion: arc right around her, ending frontal
action_visual: concrete underpass, black and pink mural planes, ground fog sliding through. She shifts her weight, flicks one wrist and turns back into the lens rapping: 'Move to my rhythm'
text: 'MOVE', 'TO MY' and 'RHYTHM' in three oblique lines dropping onto the mural planes from three directions and locking together on the clap
exit: the projection sweeps diagonally off the lens
(ZOOM BURST TO)
SHOT 3 (3 to 6s) RESOLUTION
camera: close up, eye level, frontal 0. lens: 29 short telephoto
camera_motion: push in for two seconds, then settle and hold
action_visual: tunnel mouth opening onto a saturated pink horizon, tunnel lights flickering in sequence toward it, fog drawn forward past her, wet pavement carrying the reflection to the lens. She raps the full line into the lens: 'Watch me light the concrete'
text: 'CONCRETE' in monumental condensed capitals rising vertically out of the wet pavement behind her, 'WATCH ME LIGHT THE' small and crisp on the line above it
reaction: the last syllable releases, her shoulders drop, a controlled half smile arriving a beat late while her eyes stay on the lens
exit: the pavement reflection pulses once and settles, holding her gaze for the final eight frames


=== TECHNICAL CONSTRAINTS – paste at the bottom of all three runs ===

only the words listed appear in frame, spelled exactly as written, no captions, no subtitles, no misspelled or invented letters, no text over her face, no watermark, no logos, no generated music, no extra people, no costume changes, no identity changes`,
    },
  },
  {
    id: "nastassiavideo-brown-loafers-unboxing-seedance-2-5",
    title: "棕色乐福鞋 · 开箱试穿种草 · Seedance 2.5",
    subtitle: "X · @nastassiavideo · Seedance 2.5 · 23秒 · 9:16",
    description:
      "棕色乐福鞋开箱种草：拆盒、看细节、试穿、走到镜头前，手机手持拍法，配口播和大字幕。",
    video: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/poster.jpg",
    duration: "23秒",
    durationSec: 23,
    styleLabel: "真人风",
    shots: 10,
    references: 5,
    model: "Seedance 2.5",
    style: "卧室晨光 · 暖中性色 + 棕色皮革 + 靛蓝牛仔 · 手机手持 UGC",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/nastassiavideo/status/2092993847475257425",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 1826,
    sourceStats: { asOf: "2026-09-27", likes: 33, reposts: 2, bookmarks: 7 },
    formats: ["产品广告", "手机POV·Vlog"],
    hook: {
      structure: "抱盒开口 → 拆盒 → 手持看鞋 → 微距看细节 → 穿上 → 俯视看脚 → 走到镜头前",
      opening: "第 0 秒她坐在床边，把米色鞋盒捧到胸前，对着镜头说「Okay, these finally came」。",
      openingAt: 0,
      beats: [
        { title: "拆盒和看鞋", text: "约 3–6.3s 俯拍掀盖、再切到她坐在地板上翻开白色包装纸；6.5–8.3s 一只手把鞋举起，四分之三侧面对镜头。", at: 3 },
        { title: "细节", text: "约 8.5–10.8s 微距，指尖沿着鞋面横带和冲孔滑过；11–12.3s 翻过来看黑色锯齿大底；12.5–14.8s 双手拿鞋举到镜头前。", at: 8.5 },
        { title: "上脚和收尾", text: "约 15–17.3s 低机位看脚伸进鞋里踩实；17.5–19.8s 站着往下拍两只鞋；20–23.4s 低机位全身，她从左边走进来站定面对镜头。", at: 15 },
      ],
      copyThis: "把鞋的四个视角分别当参考图，并写清每张图对应哪个角度；每个镜头都写机位、焦段、手在哪、光从哪来，让手持手机的质感贯穿全片。",
      approx: true,
    },
    tags: [
      "23秒 · 开箱种草",
      "9:16 竖屏",
      "10 个镜头",
      "商品四视图参考",
      "Seedance 2.5",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备人物和鞋子参考图",
        description:
          "作者的流程：用 Recraft 做人物，用 GPT-2 做鞋子映射，Seedance 2.5 生成视频，ElevenLabs 配音，CapCut 剪辑。回复区给了三张图：人物脸部特写、提示词长图、一张鞋子四视图（正面、四分之三侧、俯视、正侧面）。人物特写原图收录；鞋子四视图裁成四张收录。",
      },
      {
        number: 2,
        title: "第二步：锁定鞋子，写全局设定",
        description:
          "REFS 写明每张鞋图对应的角度，要求全片是同一双鞋：鞋头形状、带钥匙孔和冲孔的横带、皮纹、中棕色和擦色边、黑色锯齿大底；棚拍背景和灯光不要带进画面。全局设定写：左边一扇窗的上午阳光、手机视频质感、卧室橡木地板、人物服装（米白罗纹毛衣、卷边靛蓝牛仔裤、米白袜、右手两枚银戒），脸只在第 1 和第 8 镜出现。",
      },
      {
        number: 3,
        title: "第三步：按 8 个镜头写开箱到上脚",
        description:
          "8 个镜头共 30 秒：抱盒开口 → 俯拍掀盖 → 翻开包装纸取鞋 → 侧面转鞋 → 横带微距 → 脚伸进鞋 → 俯视双脚 → 低机位看她走进画面。每镜写景别、角度、焦段、手持方式、动作和声音；只有第 1 镜有一句台词，最后要求不要字幕、不要背景音乐。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-brown-loafers-image5-girl",
        number: "5",
        title: "@[Image 5] · 人物脸部特写",
        subtitle: "作者回复区第一张图原件 HQvO0dDWcAIWFHx（896x1216）· 作者说人物用 Recraft 做",
        image: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/refs/image5-girl-face.jpg",
        prompt: "作者未公开出图提示词（主帖写人物用 Recraft 生成）。视频提示词中的用法：REFS: @[Image 5]girl。编号对应是按提示词推断，作者没有单独标注。",
      },
      {
        id: "nastassiavideo-brown-loafers-shoe1-front",
        number: "1",
        title: "乐福鞋 · 正面",
        subtitle: "提示词里对应 @[Image 4]front；回复区商品四视图按四等分裁出",
        image: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/refs/shoe1-front.jpg",
        prompt: "作者说鞋图用 GPT-2 做了映射，没有公开出图提示词。",
      },
      {
        id: "nastassiavideo-brown-loafers-shoe2-three-quarter",
        number: "2",
        title: "乐福鞋 · 四分之三侧",
        subtitle: "提示词里对应 @[Image 1](three quarter；回复区商品四视图按四等分裁出",
        image: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/refs/shoe2-three-quarter.jpg",
        prompt: "作者说鞋图用 GPT-2 做了映射，没有公开出图提示词。",
      },
      {
        id: "nastassiavideo-brown-loafers-shoe3-overhead",
        number: "3",
        title: "乐福鞋 · 俯视",
        subtitle: "提示词里写作 @overhead，没有编号；回复区商品四视图按四等分裁出",
        image: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/refs/shoe3-overhead.jpg",
        prompt: "作者说鞋图用 GPT-2 做了映射，没有公开出图提示词。",
      },
      {
        id: "nastassiavideo-brown-loafers-shoe4-profile",
        number: "4",
        title: "乐福鞋 · 正侧面",
        subtitle: "提示词里对应 @[Image 2]profile；回复区商品四视图按四等分裁出",
        image: "/tutorials/nastassiavideo-brown-loafers-unboxing-seedance-2-5/refs/shoe4-profile.jpg",
        prompt: "作者说鞋图用 GPT-2 做了映射，没有公开出图提示词。",
      },
    ],
    storyboard: [
      { number: 1, description: "0–3s 坐在床边，捧着鞋盒对镜头说第一句。" },
      { number: 2, description: "3–4.3s 俯拍，戴银戒的手掀开盒盖，露出白色包装纸。" },
      { number: 3, description: "4.5–6.3s 她坐在地板上，双手翻开包装纸。" },
      { number: 4, description: "6.5–8.3s 手把一只鞋举起，四分之三侧面对镜头。" },
      { number: 5, description: "8.5–10.8s 微距，指尖沿鞋面横带和冲孔滑过。" },
      { number: 6, description: "11–12.3s 把鞋翻过来，展示黑色锯齿大底。" },
      { number: 7, description: "12.5–14.8s 站着双手拿鞋，举到镜头前。" },
      { number: 8, description: "15–17.3s 低机位，穿米白袜的脚伸进鞋里踩实。" },
      { number: 9, description: "17.5–19.8s 站着往下拍两只鞋。" },
      { number: 10, description: "20–23.4s 低机位全身，她从左边走进画面站定。" },
    ],
    constraints:
      "同一双鞋贯穿全片；人物服装不变；脸只在开头和结尾出现；不要字幕、不要背景音乐。与成片不符：提示词是 8 镜 30 秒，成片 23 秒、约 10 个镜头（多了坐在地板上拆纸、看鞋底、举鞋到镜头前）；提示词只有第 1 镜一句台词，成片全程有口播（作者说配音用 ElevenLabs）；提示词写不要字幕，成片有逐词弹出的大字幕，应是 CapCut 后期加的；提示词写深棕中分及肩直发，成片是及肩以下的卷发，和人物参考图一致。原文 SHOT 3 里「Tissue cracklre」是原图拼写，照录。缺口：@[Image 5] 对应脸部特写是按提示词推断，作者没有说明编号对应；口播台词没有逐句核对。",
    video_prompt: {
      title: "Unboxing → Reveal → Wear → Walk",
      subtitle: "Seedance 2.5 · 9:16 · 英文完整提示词（作者回复区第二张图，逐字转录）",
      content: `UNBOXING → REVEAL → WEAR → WALK
SHOT STRUCTURE: 8 shots, 30 seconds, 9:16, exactly as listed, no added shots

REFS: @[Image 5]girl
@[Image 4]front, @overhead, @[Image 1](three quarter, @[Image 2]profile. One pair of loafers, the same pair in every shot. They control toe shape, penny strap with keyhole and perforated dots, leather grain, mid brown with burnished edges, black lug sole and tread. Nothing else: the studio background and studio lighting stay out, and every shot builds fresh framing of its own.

ACTIVE REFERENCES: @[Image 4](image_4) to @[Image 1](image_1) all 100%

GLOBAL STYLE NOTES:
- lighting_philosophy: one window screen left, late morning sun through thin curtain, warm bounce off the oak floor
- color_grade: modern phone video, faint sensor noise in shadows. ~60% warm neutral (linen, oak, wall) + ~30% mid brown (leather) + ~10% indigo (denim).
- setting: bright bedroom, wide oak floorboards, unmade linen bed, matte sand shoe box
- ambience: quiet room tone, muffled street through glass
- characters: <Girl> cream ribbed knit sweater, sleeves at mid forearm, indigo jeans cuffed once, cream ribbed socks, short almond nails in milky nude, two thin silver rings on the RIGHT index and middle finger, dark brown centre parted shoulder length hair. Keep identical in every shot. Face visible only in SHOT 1 and SHOT 8.
- hand_behaviour: hands are already in contact whenever visible, fingers together, pads flat on leather, lid or floor
- camera_character: handheld phone throughout, real hand tremor, small live reframes

SEQUENCE LIST:
SHOT 1 (0 to 3s) HOOK. MCU, high angle as if arm held, frontal 0 degrees, 65 degree wide. Handheld with breathing. Girl on the bed edge x 25% to 80%, closed box at her chest, hands flat on the lid sides. Window light rakes the left of her face, catchlight in both eyes. She lifts the box toward the lens, then tips it out of frame bottom.
- dialog: Dialogue language: American English. Girl (light young alto, conversational) lifts the box a fraction, then says: 'Okay, these finally came.'
(MATCH CUT TO)

SHOT 2 (3 to 7s). CU, overhead 90 degrees. Handheld, drifting 5 cm closer. Hands lie flat on the lid, silver rings catching light. The lid lifts out of frame, white tissue folded over the pair beneath. Dry cardboard drag, one paper crackle. Fingertips settle on the fold.
(HARD CUT TO)

SHOT 3 (7 to 11s). MS, low angle at floor height, three quarter 45 degrees. Handheld, slow push toward the box. Fingers peel the tissue open and the rounded toe rises out of the paper, burnished edge catching light first. Tissue cracklre, then quiet. The hand closes on the shoe and lifts.
(CUT TO)

SHOT 4 (11 to 15s). CU, eye level, profile 90 degrees, 29 degree short telephoto, background compressed to a soft wash. Locked handheld while the shoe turns. One loafer held up, fingers round the heel counter, rotating 30 degrees toward the lens. The highlight travels the burnished edge from toe to heel, lug sole staying dark underneath. Rotation stops with the strap facing the lens.
(MATCH CUT TO)

SHOT 5 (15 to 19s) SIGNATURE. Macro, three quarter 45 degrees on the penny strap, close focus, depth of field a few centimetres. Handheld, tiny reframe, no travel. The strap fills frame. A fingertip already resting beside the keyhole draws along the strap edge. Perforated dots stay sharp, grain falls soft at frame edge. The finger lifts, frame settling on the keyhole.
(CUT TO)

SHOT 6 (19 to 22s). MS, low angle from the floor, three quarter 45 degrees on the lower leg. Handheld, static with breathing. Cream sock on the foot, jean cuff above the ankle. The foot slides in and the heel drops, lug sole taking weight on the oak, contact shadow forming under it. One dull sole tap. The foot presses down and holds.
(CUT TO)

SHOT 7 (22 to 26s). CU, POV straight down 90 degrees from standing height. Handheld, gentle body sway. Both loafers on the oak floor from above, cream socks and cuffed jeans above them, straps and keyholes reading clearly. A long highlight lies across both vamps. One foot pivots and settles.
(CUT TO)

SHOT 8 (26 to 30s) RESOLUTION. WS, very low angle with the lens 20 cm off the floor, frontal 0 degrees, 65 degree wide, floorboards running into the lens. Locked low handheld, framing identical at first and last frame. The floor sits empty, then Girl walks in from screen left, stops centre and turns to the lens. The loafers sit nearest camera and largest in frame, lug sole and burnished vamp both clear, a contact shadow travelling with each sole. Her head reads high and slightly softer than her feet. Two flat sole steps, then quiet. She settles her weight, one shoulder dropping.

TECHNICAL:
no subtitles, no captions, no on screen text, no background music, no extra dialogue beyond the line in SHOT 1`,
    },
  },
  // 查重别名(同帖同提示词 WAN 3.0 版，未收录)：https://x.com/nastassiavideo/status/2092170146768921015 对比视频下半屏（约 20.1–40.1s 播放）
  {
    id: "nastassiavideo-steampunk-airship-bar-seedance-2-5",
    title: "蒸汽朋克飞艇酒吧 · 小猴帮打 · Seedance 2.5",
    subtitle: "X · @nastassiavideo · Seedance 2.5（对比视频上半屏裁出）· 20秒 · 16:9",
    description:
      "飞艇酒吧里，大汉伸手抓她手腕，肩上的小猴一口咬下，她一肘反击放倒对方，回座举杯。",
    video: "/tutorials/nastassiavideo-steampunk-airship-bar-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-steampunk-airship-bar-seedance-2-5/poster.jpg",
    duration: "20秒",
    durationSec: 20,
    styleLabel: "真人风",
    shots: 1,
    references: 2,
    model: "Seedance 2.5",
    style: "蒸汽朋克 · 黄铜吊灯顶光 · Kodak 500T 胶片颗粒 · 手持一镜到底",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2092170146768921015",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 883,
    sourceStats: { asOf: "2026-09-27", likes: 26, reposts: 1, bookmarks: 3 },
    formats: ["电影叙事", "角色表演"],
    hook: {
      structure: "吧台独饮 → 大汉搭讪 → 抓手腕被猴咬 → 肘击 → 勾腿放倒 → 回座举杯",
      opening: "第 0 秒镜头从吧台上方往下拍她握着酒杯的手，黄铜台面反着灯光。",
      openingAt: 0,
      beats: [
        { title: "冲突怎么起", text: "约 2.5–7s 平视中近景，小猴蹲在她右肩，大胡子大汉从旁边凑过来；她抬眼看他。", at: 2.5 },
        { title: "动作段", text: "约 7.5–8s 特写他抓她手腕，小猴咬住他手指；8.5–12s 她一肘顶上他下巴；12.5–15.5s 他扑空倒下，帽子被小猴扣到眼睛上，踉跄后退。", at: 7.5 },
        { title: "结尾怎么收", text: "约 16–20s 回到吧台正面，她坐回原位，小猴回到肩上，她举杯喝酒。", at: 16 },
      ],
      copyThis: "每一拍都写时间段 + 机位高度 + 动作 + 音效（SFX），并把左右手、左右肩写死（酒杯在左手、小猴在右肩、大汉在右侧），打斗方向就不会乱。",
      approx: true,
    },
    tags: [
      "20秒 · 动作短剧",
      "16:9 横屏",
      "一镜到底",
      "双角色设定图",
      "Seedance 2.5 vs WAN 3.0",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：准备两张角色设定图",
        description:
          "作者在主帖放了两张设定图：@[Image 1] 女主 Nastassia（脸部特写 + 全身正背面，护目镜、奶白高领衬衫、棕色皮马甲、暗红裙摆、长靴），@[Image 2] 小猴（戴黄铜护目镜的绿帽、棕皮马甲、围巾，正面特写 + 正背面）。大汉只用文字描述。出图提示词没有公开。",
      },
      {
        number: 2,
        title: "第二步：写全局设定和镜头规则",
        description:
          "光只来自吧台上方的黄铜吊灯；Kodak Vision3 500T 胶片颗粒，色彩约 50% 黄铜琥珀 + 30% 棕色皮革 + 20% 深蓝窗光；场景是飞行中的飞艇吊舱酒吧。写明三个角色的服装、声音和身高（170 / 195 / 40 cm）。镜头是一次手持运动，从吧台上方降到平视、到她下巴下方、到地板、再回平视，肘击那 0.4 秒降到 40% 速度。",
      },
      {
        number: 3,
        title: "第三步：按 6 拍写动作和台词",
        description:
          "0–3s 坐着喝酒、大汉凑近；3–6.6s 放下杯子转头、起身；6.6–7.3s 他抓手腕、小猴咬手指；7.3–9.3s 肘击下巴；9.3–12.5s 他挥空、她勾腿放倒；12.5–20s 小猴把帽子扣他眼睛上、他仰倒、她举杯。台词两句：「Hey doll, let's play.」「Yeah. Right now.」最后写不要剪切、不要血和武器、不要字幕和音乐。作者用同一段提示词对比了 Seedance 2.5 和 WAN 3.0。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-steampunk-image1-nastassia",
        number: "1",
        title: "@[Image 1] · 女主 Nastassia 设定图",
        subtitle: "主帖第一张图原件 HQjhl7hXwAAMC6R（1536x1024）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-steampunk-airship-bar-seedance-2-5/refs/image1-nastassia-steampunk-sheet.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@[Image 1]= Nastassia, controls face, hair and wardrobe only, full close up fidelity in every framing.",
      },
      {
        id: "nastassiavideo-steampunk-image2-monkey",
        number: "2",
        title: "@[Image 2] · 小猴设定图",
        subtitle: "主帖第二张图原件 HQjhl7VXUAALb3z（1536x1024）· AI 角色设定图",
        image: "/tutorials/nastassiavideo-steampunk-airship-bar-seedance-2-5/refs/image2-monkey-sheet.jpg",
        prompt: "作者未公开出图提示词。视频提示词中的用法：@[Image 2]= the Monkey, controls face, fur and outfit only.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2s 吧台上方俯拍，她握着酒杯的手。" },
      { number: 2, description: "2.5–7s 平视，小猴在她右肩，大汉从旁边凑近，她抬眼看他。" },
      { number: 3, description: "7.5–8s 特写：他抓她手腕，小猴咬住他手指。" },
      { number: 4, description: "8.5–12s 她一肘顶上他下巴，他头往后仰。" },
      { number: 5, description: "12.5–14.5s 快速晃动，他倒向地面，小猴抢过帽子。" },
      { number: 6, description: "15–16s 帽子扣在他眼睛上，他踉跄后退。" },
      { number: 7, description: "16–20s 吧台正面，她坐回原位，小猴回到肩上，她举杯喝酒。" },
    ],
    constraints:
      "角色脸和服装全程一致；酒杯在左手、小猴在右肩、大汉在她右侧；一镜到底不剪切；不要血和武器，不要字幕、水印、Logo 和音乐。来源说明：原帖视频是 1080x1440 上下分屏对比，中间有「Seedance 2.5 /Wan 3.0」标签条；上半屏 Seedance 2.5 在 0–20.07s 播放（下半屏静止），下半屏 WAN 3.0 在 20.07–40.1s 播放。本页成片只裁出上半屏 0–20.07s（1080x606，去掉标签条和黑边），音频是原视频同一时段音轨，未改动。与成片不符：成片里她大部分时间坐着，提示词写的「起身、凳子被踢翻」看不清；中段有几次快速甩镜，是否有硬切没有逐帧确认。缺口：两张设定图的出图提示词没公开；台词没有逐句核对。",
    video_prompt: {
      title: "Steampunk Airship Bar · Nastassia & the Monkey",
      subtitle: "Seedance 2.5（与 WAN 3.0 共用同一段提示词）· 英文完整提示词（主帖第三张图，逐字转录）",
      content: `REFS: @[Image 1]= Nastassia, controls face, hair and wardrobe only, full close up fidelity in every framing. @[Image 2]= the Monkey, controls face, fur and outfit only. Framing of both stays out.
ACTIVE REFERENCES: @[Image 1] @[Image 2] 100%; 100%

GLOBAL STYLE NOTES:
- lighting_philosophy: brass lamps over the counter are the only source, faces lit from above, room dark behind
- color_grade: 35mm film still, Kodak Vision3 500T, grain, halation on the lamps. ~50% brass and amber (lamps, counter) + ~30% brown leather (crowd) + ~20% deep blue (windows)
- setting: a bar in an airship gondola in flight, riveted hull, brass counter, bottles behind
- characters:
<Nastassia> per , focal. Goggles on the forehead, cream high collar blouse, brown leather vest with brass clasps, hair pinned up. Keep identical throughout. voice: quiet alto, flat
<Monkey> per . Green cap with brass goggles, tan leather vest. Keep identical throughout
<Patron> secondary: heavy man in an oiled canvas coat, brace on his RIGHT forearm. voice: loud gravel baritone
- SCALE: Nastassia 170 cm, the Patron 195 cm, the Monkey 40 cm. It climbs and leaps, grips with hands and tail, no flight

SHOT:
- azimuth: three quarter 45° on her at the start, then orbiting to profile 90°, always by physically moving around her
- camera_motion: one handheld move, operator weight, a whip reframe onto every contact. Height arc: above the counter looking down, to eye level, under her chin as she stands, to the boards on his fall, back to eye level
- speed_timing: 100%, dropping to approximately 40% for 0.4s on the elbow contact, back to 100% immediately after

ACTIONS:
- action_sequence:
beat (0.0s to 3.0s):
dynamic_framing: high over the brass on her hands, sinking to eye level as he arrives, a drinker's back wiping the frame
visual_action: Nastassia sits at the brass, glass in her LEFT hand, the Monkey on her RIGHT shoulder, the Patron slides in at her RIGHT elbow, his hand landing on the counter. SFX: glass on brass
beat (3.0s to 6.6s):
dynamic_framing: close up at eye level, held still, then under her chin as she rises, filling the frame against the lamps
visual_action: she first sets the glass down without looking, then turns her head to him, jaw setting and the Monkey flattening its ears, finally comes up off the stool into his space, the stool kicking back. SFX: wood clattering over
beat (6.6s to 7.3s):
dynamic_framing: low, snaps to a close up on his hand and her wrist on the brass
visual_action: the Patron grabs for her wrist and the Monkey bites his index finger. SFX: one shriek, a sharp breath
beat (7.3s to 9.3s):
dynamic_framing: stays low, orbits to profile 90° on the elbow, his jaw against the lamps
visual_action: she twists out through his thumb and drives her elbow up into his jaw, his head going with it. SFX: room tone drops one beat, then a dense smack, short tail
beat (9.3s to 12.5s):
dynamic_framing: gives ground, swings with the miss, sinks to the boards as he folds, looking up past her boot
visual_action: he swings wide, the air moving her hair, she ducks under and hooks his knee with her boot, he folds sideways. SFX: a low whoosh past the mic, timber taking him
beat (12.5s to 20.0s):
dynamic_framing: rises off the floor to eye level and back to wide, bodies crossing the foreground
visual_action: the Monkey yanks his cap over his eyes, he goes back blind over a stool, crowd silhouettes surge in, the Monkey lands on her RIGHT shoulder with the cap, she lifts her glass. SFX: bodies on timber, crowd swelling
- dialog: Dialogue language: English. Patron (loud gravel baritone), leaning in, says: "Hey doll, let's play." Pause. Nastassia (quiet alto), eyes up to his, says: "Yeah. Right now." Ambience ducks under the lines.

TECHNICAL:
- continuous_shot: no cuts, one handheld motion first frame to last
- no blood, no weapons, no subtitles, no captions, no watermark, no logos, no music`,
    },
  },
  {
    id: "nastassiavideo-corset-hangar-vhs-seedance-2-0",
    title: "黑色束腰机库大片 · VHS 复古手持 · Seedance 2.0",
    subtitle: "X · @nastassiavideo · Seedance 2.0 · 24秒 · 16:9 · 提示词为反推",
    description:
      "黑色皮革束腰 × 私人飞机机库：手持 VHS 摄像机质感的复古时装短片，带橙色时间码。",
    video: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/demo-web.mp4",
    poster: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/poster.jpg",
    duration: "24秒",
    durationSec: 24,
    styleLabel: "真人风",
    shots: 14,
    references: 5,
    model: "Seedance 2.0",
    style: "机库逆光 · 青橙调 · 90 年代摄像机 VHS 颗粒 · 橙色时间码",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/nastassiavideo/status/2090778378701832651",
    sourceAuthor: "@nastassiavideo",
    sourcePlatform: "X",
    sourceImpressions: 731,
    sourceStats: { asOf: "2026-09-27", likes: 16, reposts: 0, bookmarks: 4 },
    formats: ["时尚大片", "产品广告"],
    hook: {
      structure: "背影走向飞机 → 逆光特写 → 机翼剪影 → 局部特写串联 → 奔跑甩镜 → 机库大门剪影收尾",
      opening: "第 0 秒低机位从背后拍她走过机库、走向白色私人飞机，回头看镜头；右下角是橙色摄像机时间码「PM 2:29」。",
      openingAt: 0,
      beats: [
        { title: "逆光和剪影", text: "约 2–4s 靠在机身上撩头发，身后强烈暖色逆光；4–5.5s 超低机位，她站在机翼上举起双臂，顶棚天窗打下光柱。", at: 2 },
        { title: "局部特写串联", text: "约 5.5–13.8s 连续特写：手穿过发丝、一道光条横过眼睛、脖颈和金链、坐在舷梯扶手上、手指拉紧束腰上的两个银扣。", at: 5.5 },
        { title: "节奏和收尾", text: "约 14–16s 她跑过机库，甩镜加运动模糊转场；之后正面走来、嘴唇特写、束腰特写、站在机头旁；21.5–23.6s 两台发动机之间，她的剪影站在敞开的机库大门口。", at: 14 },
      ],
      copyThis: "作者公开的复古质感关键词：handheld camera, shaky cam, VHS style, 90s camcorder, timestamp, motion blur。再把服装单独做成一张商品图当参考，锁定束腰的扣子和轮廓。",
      approx: true,
    },
    tags: [
      "24秒 · 时装短片",
      "16:9 横屏",
      "VHS 复古手持",
      "提示词为反推",
      "角色一致性测试",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：作者公开的流程和图片",
        description:
          "作者写的流程：用 Recraft 做人物，用 Seedream 4.5 出了几张写真，用 Seedance 2.0 生成视频测角色一致性，CapCut 剪辑。主帖附了三张图：束腰商品图、人物脸部特写、坐在飞机舷梯上的定妆照。三张原图都已收录，出图提示词作者没公开，本页按图反推（见参考图说明和 PROMPT_REVERSED.txt）。作者没有公开视频提示词，只公开了复古质感关键词。",
      },
      {
        number: 2,
        title: "第二步：作者公开的复古关键词",
        description:
          "作者原文：handheld camera, shaky cam, VHS style, 90s camcorder, timestamp, motion blur。成片里的对应效果：全程手持轻晃、VHS 颗粒和色边、右下角橙色时间码（远景 PM 2:29，特写 PM 2:34）、奔跑和转场时的运动模糊。",
      },
      {
        number: 3,
        title: "第三步：按成片反推的分镜写法（作者未公开，此为按成片反推）",
        description:
          "作者未公开，此为按成片反推。按 2fps 逐帧看成片，拆成 14 个镜头并写时间码：场景是午后的飞机机库，天窗和敞开的大门打进低角度硬光，有烟雾和光柱；青橙调色；每镜写景别、机位、动作和光线。成片应是多段生成后在 CapCut 剪在一起的，分段方式也是推测。反推的英文提示词见下方视频提示词。",
      },
    ],
    references_detail: [
      {
        id: "nastassiavideo-corset-hangar-image1-corset",
        number: "1",
        title: "黑色皮革束腰 · 商品图",
        subtitle: "作者主帖第一张图原件",
        image: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/refs/image1-corset-HQPvdE2XEAAMf57.jpg",
        prompt: "作者未公开，此为按成片反推。（本条按作者原图反推出图提示词）Studio product photo of a black high-gloss leather corset top shown on an invisible mannequin, front view, centred on a seamless white background. Sculpted rounded cups with a deep V between them, front cord lacing visible in the gap, two horizontal leather belts with polished silver pin buckles across the ribs, curved panel seams, flared peplum hips, loose lace ends hanging below the hem. Soft even softbox lighting with long specular highlights on the leather, gentle floor shadow, e-commerce clarity, 3:4.",
      },
      {
        id: "nastassiavideo-corset-hangar-image2-face",
        number: "2",
        title: "人物脸部特写 · 作者原图",
        subtitle: "作者主帖第二张图原件 HQPvdE9WcAAmodJ（896x1216）· 作者说人物用 Recraft 做",
        image: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/refs/image2-face-HQPvdE9WcAAmodJ.jpg",
        prompt: "作者未公开，此为按成片反推。（本条按作者原图反推出图提示词）Editorial beauty close-up portrait of a young adult woman, face tilted slightly, voluminous tousled golden-blonde curls with wispy bangs, hazel-green eyes with defined lashes, light freckles, dewy skin with visible pores, glossy nude lips slightly parted. Hard directional daylight from the upper left casting a deep shadow over one side of the face, off-white background, shot on 85mm, shallow depth of field, fashion magazine realism, 3:4.",
      },
      {
        id: "nastassiavideo-corset-hangar-image3-jet-stairs",
        number: "3",
        title: "飞机舷梯定妆照 · 作者原图",
        subtitle: "作者主帖第三张图原件 HQPvdEzWoAA2EQ6（1290x1717）· 作者说写真用 Seedream 4.5 做",
        image: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/refs/image3-jet-stairs-HQPvdEzWoAA2EQ6.jpg",
        prompt: "作者未公开，此为按成片反推。（本条按作者原图反推出图提示词）Fashion editorial photo, low angle: the same curly blonde woman (@Image2) sits on the steel roll-in stairs of a white private jet with a navy stripe inside a hangar, forearm resting on her knee, cool direct gaze. She wears the black leather corset (@Image1) over a black glossy bodysuit and black high-gloss thigh-high stiletto boots. Polished handrails frame her, haze and warm backlight glow from the left, hangar windows behind, cinematic contrast, 3:4.",
      },
      {
        id: "nastassiavideo-corset-hangar-frame-13s",
        number: "4",
        title: "束腰银扣特写 · 成片截帧",
        subtitle: "成片第 13 秒截帧，不是作者的原参考图",
        image: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/refs/frame-13s-corset-buckles.jpg",
        prompt: "作者未公开，此为按成片反推。（成片截帧，不是原参考图）Extreme close-up of the black leather corset belts with two polished silver pin buckles, a hand with dark burgundy nails tugging the lower strap, shallow depth of field, warm side light, VHS grain, orange camcorder timestamp \"PM 2:34\" bottom right, 16:9.",
      },
      {
        id: "nastassiavideo-corset-hangar-frame-22s",
        number: "5",
        title: "机库大门剪影 · 成片截帧",
        subtitle: "成片第 22.5 秒截帧，不是作者的原参考图",
        image: "/tutorials/nastassiavideo-corset-hangar-vhs-seedance-2-0/refs/frame-22s-hangar-door-silhouette.jpg",
        prompt: "作者未公开，此为按成片反推。（成片截帧，不是原参考图）Wide symmetrical shot from deep inside a dark aircraft hangar, two jet engine nacelles as dark shapes in the foreground left and right, a small silhouette of a woman standing in the bright open hangar door, warm sunset sky and haze outside, industrial windows on the door panels, VHS grain, orange camcorder timestamp \"PM 2:29\" bottom right, 16:9.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–2s 低机位背影，她走向白色私人飞机，回头看镜头。" },
      { number: 2, description: "2–4s 靠在机身上撩头发，暖色逆光光晕。" },
      { number: 3, description: "4–5.5s 超低机位，站在机翼上举起双臂，天窗光柱。" },
      { number: 4, description: "5.5–7s 手穿过逆光的发丝。" },
      { number: 5, description: "7–8.5s 眼睛大特写，一道光条横过双眼。" },
      { number: 6, description: "8.5–9.5s 脖颈、肩膀和金链特写。" },
      { number: 7, description: "9.5–11.5s 低机位，坐在飞机舷梯上，手臂搭在扶手上。" },
      { number: 8, description: "11.5–13.8s 手指拉紧束腰腰带，两个银扣占满画面。" },
      { number: 9, description: "14–15.8s 侧面跟拍她跑过机库，甩镜运动模糊。" },
      { number: 10, description: "16–17s 正面，她朝镜头走来。" },
      { number: 11, description: "17–18s 嘴唇大特写。" },
      { number: 12, description: "18–20s 束腰正面特写，双手抚平腰部。" },
      { number: 13, description: "20–21.5s 全身，站在机头旁。" },
      { number: 14, description: "21.5–23.6s 两台发动机之间，她的剪影站在敞开的机库大门口，保持到结尾。" },
    ],
    constraints:
      "作者未公开视频提示词；本页视频提示词、分镜时间码和出图提示词均为按成片反推，不是作者原文。作者原文只有一句复古关键词：handheld camera, shaky cam, VHS style, 90s camcorder, timestamp, motion blur。成片截帧（第 13 秒、第 22.5 秒）不是作者的原参考图。缺口：音轨是持续配乐、没有对白，具体曲目无法确认；是否分多段生成无法确认；评论区检索没有找到作者的补充说明。",
    video_prompt: {
      title: "Corset × Hangar · Retro VHS (Reverse-engineered)",
      subtitle: "作者未公开，此为按成片反推 · 按作者标注的 Seedance 2.0 写 · 16:9",
      content: `[作者未公开，此为按成片反推]
Reverse-engineered from the finished 23.6 s 16:9 video (frame-by-frame at 2 fps). NOT the author's original prompt.
Tool: the author states Seedance 2.0 (character consistency test) with Recraft for the model, Seedream 4.5 for stills and CapCut for the final edit. Written for Seedance 2.0 reference-to-video; the multi-shot structure is an assumption — the final cut was assembled in CapCut and was probably generated as several clips.
The only wording confirmed by the author is the animation token line: handheld camera, shaky cam, VHS style, 90s camcorder, timestamp, motion blur.

=== REFS ===
@Image1 = character: young adult woman, voluminous shoulder-length curly golden-blonde hair with curtain bangs, hazel-green eyes, light freckles, glossy nude lips, dark burgundy nails. Controls face, hair and skin only.
@Image2 = wardrobe: black high-gloss leather corset top, sculpted cups, front lacing, two horizontal belts with silver pin buckles across the ribs, flared peplum hem. Keep identical in every shot.
Styling: black high-cut glossy bodysuit worn under the corset, black glossy thigh-high stiletto boots, thin gold chain necklace.

=== GLOBAL STYLE ===
setting: vast industrial aircraft hangar in the afternoon, white private jet with a navy stripe, steel roll-in stairs, open hangar doors, skylight grid in the roof, drifting haze and dust
lighting: hard low sun raking through the skylights and the open doors, visible god rays in haze, warm amber lens flares from behind her, cool blue-grey shadows inside the hangar
color_grade: teal-and-amber, lifted blacks, soft halation on highlights, slight VHS chroma bleed and fine tape noise
camera: handheld camera, shaky cam, VHS style, 90s camcorder, timestamp, motion blur. Small live reframes, occasional quick push-ins, shallow depth of field on close-ups
overlay: orange camcorder timestamp in the bottom-right corner, "PM 2:29" on wide and medium shots, "PM 2:34" on close-ups
mood: confident retro fashion editorial, sultry but calm, no dialogue
audio: continuous music bed only (added in edit), faint hangar room tone; no dialogue, no voice-over

=== SHOT LIST (timecodes of the final cut) ===
SHOT 1 (0.0–2.0s) WIDE, low angle from behind. She walks away from camera across the hangar floor toward the white jet, looks back over her shoulder. Sun flares through the skylights top frame. Camera follows handheld, slight sway.
SHOT 2 (2.0–4.0s) MEDIUM CLOSE-UP. She leans her shoulder against the jet fuselage, one hand buried in her curls, eyes to lens. Strong amber backlight flare behind her head, face in soft shade.
SHOT 3 (4.0–5.5s) WIDE, very low angle across the wing surface. She stands on top of the jet wing, arms stretched overhead, silhouetted against a burst of god rays through the roof grid; haze rolls across the wing.
SHOT 4 (5.5–7.0s) CLOSE-UP. Her hand slowly combs through backlit hair; strands glow gold, heavy lens flare, motion blur on the hand.
SHOT 5 (7.0–8.5s) EXTREME CLOSE-UP of her eyes. A hard horizontal stripe of sunlight falls across the eyes, the rest of the face in shadow; she looks straight into the lens.
SHOT 6 (8.5–9.5s) CLOSE-UP of neck and bare shoulder, curls falling, gold chain catching light; camera drifts down.
SHOT 7 (9.5–11.5s) MEDIUM, low angle from the tarmac. She sits sideways on the aircraft stairs, forearm draped over the steel railing, boots on the treads; the roof skylights glare behind her.
SHOT 8 (11.5–13.8s) INSERT CLOSE-UP. Burgundy-nailed fingers trace the corset and tug the lower belt; the two silver buckles fill the frame, leather gloss highlights.
SHOT 9 (14.0–15.8s) WIDE, side-on tracking. She runs across the hangar through haze and floor-level sunlight; fast whip pan with strong motion blur that smears into the next shot.
SHOT 10 (16.0–17.0s) MEDIUM, frontal. She walks toward camera in the corset, hair bouncing, hangar lights behind; quick handheld push-in.
SHOT 11 (17.0–18.0s) EXTREME CLOSE-UP of glossy lips parting slightly, visible freckles and skin texture.
SHOT 12 (18.0–20.0s) CLOSE-UP of the corset front, her hands smoothing the leather at the waist; shallow focus.
SHOT 13 (20.0–21.5s) FULL SHOT. She stands beside the jet's nose, weight on one hip, looking to lens; cool daylight on the fuselage.
SHOT 14 (21.5–23.6s) WIDE, symmetrical. From deep inside the hangar, framed between two dark jet engines in the foreground, her small silhouette stands in the bright open hangar door against a warm sunset sky. Hold to end.

=== CONSTRAINTS ===
same face, hair and corset in every shot; only one person; camcorder timestamp is the only on-screen text; no subtitles, no logos, no watermark; real VHS artefacts rather than digital glitches`,
    },
  },
  // 查重别名(同模板另两条 take，未收录)：Filmera f963cb32 GEN 1 take0 36efb177（节点 best_take=0）、take1 344087eb；本条用 take2 3777f407（模板封面 card2 同片）
  {
    id: "filmera-pvz-sunflowers-redemption-seedance-2-5",
    title: "植物大战僵尸 · 向日葵的救赎 · Seedance 2.5",
    subtitle: "Filmera 模板 · Seedance 2.5 + GPT Image 2.5 · 30秒 · 16:9",
    description:
      "植物大战僵尸真人版：戴锅的 Dave 挡在豌豆射手前护住黑化的向日葵，一枪阳光后重回花园。",
    video: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "真人风",
    shots: 14,
    references: 8,
    model: "Seedance 2.5（bytedance/seedance-2.5，480p，生成音频）+ GPT Image 2.5 Flare（参考图）",
    style: "游戏 IP 真人化 · 原片直出感 · 低对比低饱和 · 剧烈手持晃动",
    aspectRatio: "16/9",
    sourceUrl: "https://www.filmera.ai/templates/f963cb32-3319-432d-93e6-ce858f1e2342",
    sourceAuthor: "Filmera 模板（未署名创作者）",
    sourcePlatform: "Filmera",
    sourceImpressions: 155,
    sourceStats: { asOf: "2026-09-27" },
    formats: ["电影叙事", "角色表演"],
    hook: {
      structure: "门廊砸僵尸 → 冲进后院 → 张开双臂护住黑化向日葵 → 被扑倒、枪口顶下巴 → 阳光一枪 → 回到往日花园",
      opening: "第 0 秒机位在 Dave 右肩后，僵尸拖着步子走到拱形前门，Dave 用猎枪枪托砸过去，僵尸仰面摔下台阶。",
      openingAt: 0,
      beats: [
        { title: "冲突怎么起", text: "约 4–5s 跟着他穿过昏暗走廊推开后门；6–7s 后院篱笆边，黑化向日葵转头，两眼发白光，两侧豌豆射手转向它；8–10s 他跑到中间张开双臂挡住。", at: 4 },
        { title: "反转", text: "约 11–17s 低机位近景，他求豌豆射手别开火，又端起猎枪对准它们；18–19s 黑化向日葵从背后起身把他扑倒；20s 插入一段金色向日葵的回忆。", at: 11 },
        { title: "结尾怎么收", text: "约 23–26s 向日葵用叶子举枪顶住他下巴，白光眼慢慢变成暖琥珀色；27–28s 枪口喷出金色阳光，他在光里散成光点；29–30s 回到阳光后院，他把脸贴在笑着的向日葵上。", at: 23 },
      ],
      copyThis: "先给每个角色、道具、场景各出一张设定图，再在视频提示词开头用 @Image1–8 逐个绑定；情绪只写成看得见的动作（喘气、吞口水、手抖），不写「害怕」「难过」这类词。",
      approx: true,
    },
    tags: [
      "30秒 · 短片",
      "16:9 横屏",
      "14 个镜头",
      "8 张参考图",
      "Seedance 2.5",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：用 GPT Image 2.5 出 8 张参考图",
        description:
          "模板分三组：角色（Dave、僵尸）、道具（正常向日葵、黑化向日葵、豌豆射手、双管猎枪）、场景（前门廊、后院空景）。都用 openai/gpt-image-2.5-flare、3:2 出图；设定图统一写「浅奶油色背景、多视角、英文标签」，并要求像未修图的真实照片。每张的完整出图提示词见下方参考图。",
      },
      {
        number: 2,
        title: "第二步：视频提示词先写全局规则",
        description:
          "[GLOBAL] 段写：原片直出感、低对比低饱和、不调色、剧烈手持晃动；逐个写出 8 个对象的外观并标「match @ImageN exactly」；表演要像真人（呼吸、眨眼、吞咽、手收紧），情绪只写动作；英文台词对口型；不要字幕、不要背景音乐，只要现场声。",
      },
      {
        number: 3,
        title: "第三步：写 14 个镜头，一次生成 30 秒",
        description:
          "Shot 1–14 每条写景别、机位、动作和音效（CRACK、THUD、CLICK-CLACK、HUM），台词三句：「Please… don't hurt her.」「Don't hurt her. Trust me… she'll turn back.」「No…」。在 Seedance 2.5 里选 16:9、30 秒、480p、打开生成音频。模板里同一提示词跑了 3 条，本页用的是模板封面那条。",
      },
    ],
    references_detail: [
      {
        id: "filmera-pvz-sunflower-image1-dave",
        number: "1",
        title: "@Image1 · Dave 人物设定图",
        subtitle: "人物：姜色大胡子、倒扣铁锅当头盔、白 Polo 衫、卡其裤；模板节点「01 · DAVE」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/01-dave.jpg",
        prompt: "Character-design reference sheet layout on a clean light cream background, neatly organized like an official character model sheet, all views showing the SAME man, fully consistent. Layout: top-left a title block reading \"DAVE\" with a short info list (NAME: Dave / AGE: 32 / ROLE: the gardener who raised the sunflower / PERSONALITY: soft-hearted, stubborn, talks to his plants); below it a COLOR PALETTE section with labeled swatch rows for HAIR, EYES, SKIN, OUTFIT; center: a large FRONT VIEW bust portrait and a SIDE VIEW bust portrait, labeled; right: a full-body FRONT VIEW holding a double-barrel shotgun loosely at his side, and a full-body BACK VIEW, labeled; bottom: a DETAILS strip of four captioned close-up panels (the dented steel saucepan worn upside down as a helmet with its handle sticking out to his right, the white polo shirt collar, worn brown work boots, his hands with soil under the nails). The character: a man in his early thirties, a thick full ginger beard, short ginger hair, warm blue eyes, fair freckled skin, a dented stainless-steel saucepan worn upside down on his head with the handle pointing to his right, a clean white short-sleeved polo shirt, khaki work trousers, brown work boots; an original character, not resembling any real person. Every panel is a REAL candid photograph of the same person — soft natural daylight, slightly low contrast and low saturation, natural skin, no retouching, unedited photo look. Clean minimal English labels only, no other text.",
      },
      {
        id: "filmera-pvz-sunflower-image2-sunflower",
        number: "2",
        title: "@Image2 · 向日葵（正常）",
        subtitle: "种子盘天然长成笑脸的真向日葵；模板节点「02 · SUNFLOWER」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/02-sunflower.jpg",
        prompt: "Creature reference sheet on a clean light cream background, the same living plant shown four ways, labeled: a FULL VIEW, a THREE-QUARTER VIEW, a CLOSE-UP of the face, and a CLOSE-UP of the stem and leaves. The creature: a real sunflower as tall as a man's chest on a thick fuzzy green stem with broad heart-shaped leaves; a large head ringed with bright golden petals; the dark brown seed disc naturally forms a gentle face: two small arcs of darker seeds as smiling closed eyes, a soft curved line of seeds as a smile, a faint warm blush of orange seeds on the cheeks. Real plant textures, fine hairs on the stem, pollen dust on the petals. Every panel is a REAL photograph of the same plant — soft natural daylight, slightly low contrast and low saturation, no retouching, unedited photo look. Clean minimal English labels only, no other text.",
      },
      {
        id: "filmera-pvz-sunflower-image3-sunflower-turned",
        number: "3",
        title: "@Image3 · 黑化向日葵",
        subtitle: "紫黑卷曲花瓣、裂口獠牙、白光眼；模板节点「03 · SUNFLOWER TURNED」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/03-sunflower-turned.jpg",
        prompt: "Creature reference sheet on a clean light cream background, the same living plant shown four ways, labeled: a FULL VIEW, a THREE-QUARTER VIEW, a CLOSE-UP of the face with the mouth open, and a CLOSE-UP of a leaf curled tight around a stick. The creature: a tall sunflower that has turned, with the same stem, leaf shape and head size as a healthy sunflower as tall as a man's chest: its petals now dark purple-black, curled, torn and leathery; the seed disc split across into a wide mouth ringed with sharp seed-shell fangs and a dark wet throat; two deep pits in the disc glowing solid white as eyes; the stem darkened with purple veins and grey patches of rot; the broad leaves thickened, curled and strong enough to grip. Practical-effects creature look, wet organic surfaces. Every panel is a REAL photograph of the same plant — soft natural daylight, slightly low contrast and low saturation, no retouching, unedited photo look. Clean minimal English labels only, no other text.",
      },
      {
        id: "filmera-pvz-sunflower-image4-pea-plant",
        number: "4",
        title: "@Image4 · 豌豆射手",
        subtitle: "齐腰高、木质炮口的真实植物；模板节点「04 · PEA PLANT」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/04-pea-plant.jpg",
        prompt: "Creature reference sheet on a clean light cream background, the same living plant shown four ways, labeled: a FULL VIEW planted in dark soil, a SIDE VIEW with the head reared back to fire, a CLOSE-UP of the muzzle, and a CLOSE-UP of the stem base and roots. The creature: a waist-high plant with a thick fibrous green stem the width of a forearm, veined and glistening with sap; the head is a bulbous green pod the size of a football with a single round hollow wooden muzzle at the front, its lips ringed with tiny fibres; two ragged leaves at the base; a smooth green pea the size of a golf ball rests in the muzzle. Practical-effects creature look, wet organic surfaces, real soil. Every panel is a REAL photograph of the same plant — soft natural daylight, slightly low contrast and low saturation, no retouching, unedited photo look. Clean minimal English labels only, no other text.",
      },
      {
        id: "filmera-pvz-sunflower-image5-zombie",
        number: "5",
        title: "@Image5 · 僵尸设定图",
        subtitle: "灰绿皮肤、棕西装、红条纹领带；模板节点「05 · ZOMBIE」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/05-zombie.jpg",
        prompt: "Character-design reference sheet layout on a clean light cream background, neatly organized like an official character model sheet, all views showing the SAME undead man, fully consistent. Layout: top-left a title block reading \"ZOMBIE\" with a short info list (TYPE: suburban walker / STATE: weeks dead / BEHAVIOUR: shuffles, jaw hanging); below it a COLOR PALETTE section with labeled swatch rows for SKIN, EYES, CLOTHES, TIE; center: a large FRONT VIEW bust portrait and a SIDE VIEW bust portrait, labeled; right: a full-body FRONT VIEW shuffling with arms low, and a full-body SIDE VIEW falling backwards, labeled; bottom: a DETAILS strip of four captioned close-up panels (the grey-green face with milky eyes and slack jaw, the frayed brown suit jacket, the red striped tie, a hand with black fingernails). The character: an adult male corpse with grey-green mottled skin, sunken milky eyes, a few thin strands of hair, a slack jaw with crooked teeth, an old brown suit, a stained white shirt and a red striped tie; a generic undead figure, not resembling any real person. Every panel is a REAL candid photograph of the same figure — soft natural daylight, slightly low contrast and low saturation, natural skin texture, practical make-up look, no retouching. Clean minimal English labels only, no other text.",
      },
      {
        id: "filmera-pvz-sunflower-image6-shotgun",
        number: "6",
        title: "@Image6 · 双管猎枪",
        subtitle: "外露双击锤、胡桃木枪托；模板节点「06 · SHOTGUN」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/06-shotgun.jpg",
        prompt: "Prop reference sheet on a clean light cream background, the same object shown three ways, labeled: a SIDE VIEW, a THREE-QUARTER VIEW, and a CLOSE-UP of the twin muzzles and hammers. The object: an old side-by-side double-barrel shotgun with twin exposed hammers, a scuffed walnut stock and fore-end, worn blued steel barrels with patches of rust. Every panel is a REAL photograph of the same prop — soft natural daylight, slightly low contrast and low saturation, no retouching, unedited photo look. Clean minimal English labels only, no other text.",
      },
      {
        id: "filmera-pvz-sunflower-image7-front-porch",
        number: "7",
        title: "@Image7 · 前门廊空景",
        subtitle: "灰色护墙板房子、拱形木门；模板节点「07 · FRONT PORCH」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/07-front-porch.jpg",
        prompt: "Empty scene plate, no people, no creatures, no text, no logos: the front porch of a pale grey clapboard suburban house, a dark wooden arched front door with small glass panes and black iron hinges, worn painted porch boards, three wooden steps down to a stone path, a potted shrub beside the door, low late-afternoon sun raking across the siding. Photoreal, natural light only, slightly low contrast and low saturation, unedited photo look. No other text.",
      },
      {
        id: "filmera-pvz-sunflower-image8-back-yard",
        number: "8",
        title: "@Image8 · 后院空景",
        subtitle: "草坪、白色尖桩篱笆、洒水壶；模板节点「08 · BACK YARD」，openai/gpt-image-2.5-flare 3:2",
        image: "/tutorials/filmera-pvz-sunflowers-redemption-seedance-2-5/refs/08-back-yard.jpg",
        prompt: "Empty scene plate, no people, no creatures, no text, no logos: the back yard of the same pale grey clapboard house seen from its arched back door, a lush green lawn in low warm afternoon sun, a white picket fence along the far side with neighbouring rooftops behind it, dark soil garden beds along the fence and on both sides of the lawn, a green watering can on the grass, the house wall with white window frames at the left edge. Photoreal, natural light only, slightly low contrast and low saturation, unedited photo look. No other text.",
      },
    ],
    storyboard: [
      { number: 1, description: "0–3.5s 门廊：僵尸走到前门，Dave 用枪托砸倒它，转身进屋。" },
      { number: 2, description: "4–5.5s 跟拍穿过昏暗走廊，推开后门，阳光涌进来。" },
      { number: 3, description: "6–7s 后院全景：篱笆边的黑化向日葵转头，两眼白光。" },
      { number: 4, description: "8–10s 他跑上草坪，站在豌豆射手和向日葵之间张开双臂。" },
      { number: 5, description: "11–14s 低机位近景，前景是模糊的豌豆射手，他喘着气求它们别开火。" },
      { number: 6, description: "15s 豌豆射手特写，炮口对准。" },
      { number: 7, description: "16–17s 他端起猎枪对准豌豆射手，双手发抖。" },
      { number: 8, description: "18–19s 黑化向日葵从背后起身把他扑倒，獠牙和白光眼压到镜头上方。" },
      { number: 9, description: "20s 回忆：阳光下金色的向日葵。" },
      { number: 10, description: "21–22s 俯拍他仰躺在草地上，锅歪在头上。" },
      { number: 11, description: "23–24s 贴地侧拍：向日葵用叶子举枪顶住他下巴。" },
      { number: 12, description: "25–26s 向日葵脸部特写，白光眼变成暖琥珀色。" },
      { number: 13, description: "27–28s 枪口喷出金色阳光，他在光里大喊、散成光点。" },
      { number: 14, description: "29–30s 往日的后院，他把脸贴在笑着的向日葵上。" },
    ],
    constraints:
      "8 个对象都要和各自参考图一致；原片直出感、不调色、剧烈手持；情绪只写成动作；英文台词对口型；不要字幕、不要背景音乐。与提示词对照：第 14 镜提示词写他穿干净白衬衫、手拿洒水壶跪在花旁，成片里是他俯身把脸贴在花上，没看到洒水壶，是否跪着看不清；第 12 镜「一片花瓣变回金色」在成片里不明显。版本说明：模板 GEN 1 同一提示词有 3 条 take（都是 854x480、30 秒），节点标记的 best_take 是第 1 条，模板封面预览与第 3 条同片；本页用第 3 条，因为它更贴近提示词后半段（黑化向日葵举枪、眼睛变色、人散成光点），第 1 条后半段直接变成金色向日葵举枪。存疑：8 张出图时作者还附了另一段视频的截帧作为输入参考，这些截帧未在模板里单独公开，本页没有收录；模板没有署名创作者。",
    video_prompt: {
      title: "Sunflower's Redemption · GEN 1",
      subtitle: "Seedance 2.5 · 16:9 · 30s · 480p · 生成音频 · Filmera 模板页原文",
      content: `[GEN 1 — SUNFLOWER'S REDEMPTION]
[GLOBAL] Photoreal, raw unedited camera footage — natural and practical light only, slightly low contrast and low saturation, flat muted natural tones, NO color grading, not cinematic, looks like real untouched footage straight off the camera; very shaky handheld camera — constant organic jitter, drift and breathing sway, never smooth, never stabilized. DAVE: a man in his early thirties with a thick ginger beard, a dented steel saucepan worn upside down on his head with the handle pointing to his right, a white short-sleeved polo shirt and khaki trousers (match @Image1 exactly). SUNFLOWER: a tall real sunflower with golden petals whose seed disc forms a gentle smiling face (match @Image2 exactly). SUNFLOWER TURNED: a tall sunflower with dark purple-black torn petals, a split seed disc ringed with seed-shell fangs, two glowing white eyes and broad leaves that curl and grip (match @Image3 exactly). PEA PLANT: the waist-high pea plants guarding the yard, each with a hollow wooden muzzle (match @Image4 exactly). ZOMBIE: grey-green skin, milky eyes, an old brown suit and a red striped tie (match @Image5 exactly). SHOTGUN: DAVE's double-barrel shotgun (match @Image6 exactly). FRONT PORCH: the front porch and arched front door (match @Image7 exactly). BACK YARD: the sunlit back yard with its lawn and white picket fence (match @Image8 exactly). The performance must read as real human behaviour — natural breathing that visibly moves the chest and shoulders, natural blinking at a rate matching the emotion, small involuntary movements (swallowing, a hand tightening on the SHOTGUN, a flinch), micro-expressions flickering across the face. Describe emotion ONLY as visible physical behaviour — never name a feeling. Even when described as still, DAVE is NEVER absolutely still. Dialogue in English, lips in sync. No on-screen text, captions or subtitles. No background music — diegetic sound only.

Shot 1 — Medium, camera behind DAVE's right shoulder on the FRONT PORCH: a ZOMBIE shuffles up to the arched front door, jaw hanging; DAVE drives the SHOTGUN's wooden stock into the ZOMBIE's face with a hard CRACK, the ZOMBIE topples backwards off the porch steps, and DAVE blows out one sharp breath, turns and pushes in through the door.

Shot 2 — Close follow shot behind DAVE's back through the dark hallway, DAVE's white shirt the only bright shape, floorboards CREAKING under quick steps; DAVE opens the back door and the afternoon sun floods in around DAVE's silhouette.

Shot 3 — Wide, camera behind DAVE's shoulder in the back doorway, facing the sunlit BACK YARD: by the white picket fence the SUNFLOWER TURNED stands with its back to the camera, dark petals twitching, one PEA PLANT standing right beside it; the SUNFLOWER TURNED turns its head toward the camera, two white eyes glowing, while the PEA PLANTS in the beds on both sides swivel their muzzles toward the SUNFLOWER TURNED with a wet creak.

Shot 4 — Medium, camera following DAVE from behind as DAVE runs onto the lawn and stops between the PEA PLANTS and the SUNFLOWER TURNED, flinging both arms wide, the SHOTGUN swinging from DAVE's right hand.

Shot 5 — Medium close-up, camera low in front of DAVE, PEA PLANTS blurred in the near left foreground: arms still wide, chest heaving, DAVE looks from one PEA PLANT to the other, swallows, and says breathless and pleading, "Please… don't hurt her."

Shot 6 — Close-up over DAVE's shoulder on one PEA PLANT: its head rears back, the stem tightening with a wet creak.

Shot 7 — Medium close-up on DAVE, low angle, a PEA PLANT blurred in the foreground: DAVE swings the SHOTGUN level at the PEA PLANTS, both hands shaking on the stock, and says with a cracking voice, "Don't hurt her. Trust me… she'll turn back." Over DAVE's right shoulder the SUNFLOWER TURNED rises up, fanged mouth parting, and shoves DAVE down.

Shot 8 — Low angle from the grass: DAVE falls flat on the lawn with a heavy THUD, and the SUNFLOWER TURNED lunges over DAVE, fanged face and glowing eyes filling the frame above the lens.

Shot 9 — Close-up, a warm memory in bright sun by the fence: the SUNFLOWER alone, golden petals stirring in the breeze, smiling seed face, head tilting a little toward the camera, pollen drifting through the light; the camera stays on the golden SUNFLOWER for the whole shot.

Shot 10 — Overhead close-up looking straight down at DAVE lying face up in the grass, the back of the SUNFLOWER TURNED's head blurred in the foreground, the saucepan knocked crooked: DAVE blinks up, dazed, grass on one cheek.

Shot 11 — Side view at ground level: the SUNFLOWER TURNED lifts the SHOTGUN with one curled leaf and presses the twin barrels under DAVE's chin with a metallic CLICK-CLACK as the hammers cock; DAVE's eyes find the glowing eyes above, DAVE's mouth trembles, and on a breath DAVE says, "No…"

Shot 12 — Close-up on the SUNFLOWER TURNED's face above the barrels: one petal at the edge of the dark head flushes back to gold, the white glow in the eyes softens to a warm amber, and the curled leaf tightens on the trigger.

Shot 13 — Close-up on DAVE from above: DAVE screams "NO!" as the barrels release a blast of warm golden sunlight with a deep ringing HUM; the light pours over DAVE's face and DAVE's whole body breaks into thousands of floating golden motes drifting up through the grass, the scream thinning into the hum.

Shot 14 — Close-up on DAVE in warm afternoon sun, the BACK YARD as it once was: DAVE in a clean white shirt, a watering can in one hand, kneels on the lawn beside the smiling SUNFLOWER, closes both eyes and rests one cheek against the golden petals, and the SUNFLOWER bends its head down against DAVE's.`,
    },
  },
  {
    id: "naiknelofar788-me-time-dark-circles-seedance",
    title: "报复性熬夜 · 黑眼圈越刷越深 · Seedance 2.5",
    subtitle: "X · @Naiknelofar788 · Seedance 2.5 · 30秒 · 16:9",
    description:
      "Seedance 2.5 熬夜刷手机小短剧：下班后舍不得睡，黑眼圈随时间一路加深，最后黑屏字幕收梗。",
    video: "/tutorials/naiknelofar788-me-time-dark-circles-seedance/demo-web.mp4",
    poster: "/tutorials/naiknelofar788-me-time-dark-circles-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实生活",
    shots: 5,
    references: 0,
    model: "Seedance 2.5",
    style: "写实生活喜剧 · 暖色卧室转冷色手机光 · 网络梗短剧",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Naiknelofar788/status/2103770487117713631",
    sourceAuthor: "@Naiknelofar788",
    sourcePlatform: "X",
    sourceImpressions: 1846,
    sourceStats: { asOf: "2026-09-27", likes: 51, reposts: 0, bookmarks: 30 },
    formats: ["角色表演", "电影叙事"],
    hook: {
      structure: "下班瘫倒 → 手机光下黑眼圈加深 → 照镜子又解锁 → 黑屏字幕收梗",
      opening: "开场是暖黄台灯的卧室，女孩下班进门、跪上床再整个人趴倒——先用一个人人都有过的「终于到家」动作把人拉进来。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4.6s 切到黑暗里被手机照亮的脸，她笑着刷手机，屏上字幕「Me: I should sleep early tonight.」；机位几乎不动，约 13–20s 黑眼圈一点点加深成墨色，字幕换成「But I didn't get enough ME TIME today.」。", at: 4.6 },
        { title: "照镜子又解锁", text: "约 21s 前景举着亮屏手机，后面暗色镜面里是满眼黑眼圈的自己；她看看自己、又低头把手机点亮继续刷。", at: 21 },
        { title: "结尾怎么收", text: "约 26s 贴脸大特写，只剩被屏幕照亮的黑眼圈；约 28.8s 切黑屏，白字「Tomorrow's problem.」和一行小字 Me time / Sleep / Regrets: loading…。", at: 28.8 },
      ],
      copyThis: "同一个机位、同一张被手机照亮的脸，只让黑眼圈一路加深来表现时间流逝，最后用黑屏字幕把梗说破。",
      approx: true,
    },
    tags: [
      "30秒 · 生活喜剧",
      "16:9 横屏",
      "Seedance 2.5",
      "纯文生视频",
      "熬夜刷手机",
      "黑屏字幕收梗",
    ],
    steps: [
      {
        number: 1,
        title: "先用一句话定题，再分 5 场写剧情",
        description:
          "提示词开头一句定调：一个下班后终于有自己时间、所以不肯睡觉的年轻女孩，幽默写实生活短片。然后按 Scene 1–5 写：下班瘫倒 → 「Finally, Me Time」刷手机 → 时间小偷（时间跳跃）→ 视觉比喻（照镜子后又解锁手机）→ 笑点收尾。纯文生视频，没有参考图。",
      },
      {
        number: 2,
        title: "把屏幕字幕和时间跳字原样写进提示词",
        description:
          "要出现的字都用引号写死：「Me: I should sleep early tonight.」「But I didn't get enough ME TIME today.」、结尾黑屏「Tomorrow's problem.」和三行小字。时间写成 11:47 PM → 12:38 AM → 1:52 AM → 3:07 AM，并要求每跳一次黑眼圈更深、手机始终明亮。注意：成片里时间数字没有清晰渲染，结尾小字也出现了错字。",
      },
      {
        number: 3,
        title: "最后写风格、画幅和「黑眼圈变钟影」的小花招",
        description:
          "Style 段写暖色卧室光混冷色手机光、夸张但不过火的黑眼圈、表情表演、浅景深和少量手持感，并写了 9:16、15–20 秒；最后的 Extra visual trick 要求黑眼圈逐渐像时钟阴影。实际成片是 16:9、30 秒，黑眼圈只是一路加深，没有出现时钟形状——跟做时画幅和时长要在平台参数里单独设。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "约 0–4.6s 暖黄卧室：女孩下班进门，跪上床后趴倒，放松地翻身。" },
      { number: 2, description: "约 4.6–13s 黑暗中手机照亮的脸，她笑着刷手机，字幕「Me: I should sleep early tonight.」。" },
      { number: 3, description: "约 13–21s 同一机位，黑眼圈逐渐加深成墨色，字幕换成「But I didn't get enough ME TIME today.」。" },
      { number: 4, description: "约 21–26s 前景亮屏手机，后方暗色镜面里满眼黑眼圈的自己，她又把手机点亮继续刷。" },
      { number: 5, description: "约 26–30s 贴脸大特写后切黑屏，白字「Tomorrow's problem.」与小字 Me time / Sleep / Regrets: loading…。" },
    ],
    constraints:
      "写实生活喜剧质感，暖色卧室光与冷色手机光对比；黑眼圈随时间逐步加深但保持夸张得体；屏幕字幕与结尾黑屏文字按引号原文；表情表演为主，浅景深，少量手持。缺口：纯文生视频无参考图；提示词写 9:16、15–20 秒，成片为 16:9、30 秒；时间跳字未清晰出现，『手机变大人变小』与『黑眼圈变时钟阴影』未在成片中呈现；结尾小字渲染为『Me l time』；音频（耳语台词）未转录。",
    video_prompt: {
      title: "熬夜刷手机 · Seedance 2.5 提示词",
      subtitle: "Scene 1–5 · Seedance 2.5 · 纯文生视频 · 英文完整提示词（主帖原文）",
      content: `Create a short cinematic, humorous lifestyle video about a young woman who refuses to sleep because she finally has time for herself after work.
Scene 1 — After Work
Late evening. A tired young woman arrives home after a long workday, drops her bag, changes into comfortable clothes and finally collapses onto her bed. Warm, cozy bedroom lighting. She looks exhausted but relieved.
Scene 2 — “Finally, Me Time”
She picks up her phone and smiles. The room becomes darker and quieter while the phone screen illuminates her face. She scrolls through videos, messages, memes and social media.
Add subtle on-screen text:
“Me: I should sleep early tonight.”
She checks the time: 11:47 PM.
She shrugs and keeps scrolling.
Scene 3 — The Time Thief
Time passes rapidly through a cinematic time-lapse.
11:47 PM → 12:38 AM → 1:52 AM → 3:07 AM
With every time jump, make her eyes slightly more tired and the dark circles underneath them progressively darker.
The phone remains perfectly bright and addictive.
On-screen text:
“But I didn’t get enough ME TIME today.”
Scene 4 — Visual Metaphor
Make the concept surreal and funny: the phone slowly grows larger while she becomes smaller, as if the phone is consuming the night.
Her dark circles become exaggerated like soft ink shadows beneath her eyes.
She looks at herself in the mirror.
She is exhausted, hair slightly messy, huge dark circles under her eyes.
She looks at the phone.
Then back at herself.
Then immediately unlocks the phone again.
Scene 5 — The Punchline
Close-up of her face glowing from the phone at 3:47 AM.
She whispers:
“Tomorrow I’ll fix my sleep schedule.”
Cut to black.
Text appears:
“Tomorrow’s problem.”
Tiny final text:
“Me time: 4 hours
Sleep: 3 hours
Regrets: loading…”
Style: cinematic realistic lifestyle film, relatable internet humor, warm bedroom lighting mixed with cool phone light, subtle exaggerated dark circles, expressive facial acting, smooth camera movements, realistic skin and fabric, shallow depth of field, natural handheld moments, tasteful comedy, premium social-media reel aesthetic, 9:16 vertical, 15–20 seconds, seamless time transitions, highly polished visual storytelling.
Extra visual trick: make the dark circles progressively resemble a clock shadow under her eyes. It makes the joke more visually unique instead of just showing someone looking tired.`,
    },
  },
  // 查重别名(提示词自回复帖): https://x.com/ShamsAmin56/status/2103849855114518601
  {
    id: "shamsamin56-tharog-hunter-cave-chase-seedance",
    title: "别惹 THAROG · 猎人射兽逃进山洞 · Seedance 2.5",
    subtitle: "X · @ShamsAmin56 · Seedance 2.5 · videoduck · 30秒 · 16:9",
    description:
      "Seedance 2.5 写实奇幻追逐：猎人一箭射中巨兽 THAROG 后被一路狂追，扑进山洞，巨兽撞上洞口。",
    video: "/tutorials/shamsamin56-tharog-hunter-cave-chase-seedance/demo-web.mp4",
    poster: "/tutorials/shamsamin56-tharog-hunter-cave-chase-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "史诗写实",
    shots: 13,
    references: 2,
    model: "Seedance 2.5（videoduck）",
    style: "写实奇幻 · 荒漠峡谷猎人与巨兽追逐 · 电影感运镜",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ShamsAmin56/status/2103849845467537562",
    sourceAuthor: "@ShamsAmin56",
    sourcePlatform: "X",
    sourceImpressions: 15070,
    sourceStats: { asOf: "2026-09-27", likes: 201, reposts: 24, bookmarks: 68 },
    formats: ["电影叙事"],
    hook: {
      structure: "潜伏拉弓 → 射中怒吼 → 追逐 → 逃进山洞",
      opening: "第 0 秒猎人蹲在前景巨石后，远处荒漠里一头长着巨角的怪兽正站着——一眼就知道有人要惹大麻烦。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1–6s 从猎人脸推到抽箭、搭弦、越肩瞄准、满弓手部特写；约 6–8s 松弦，镜头跟着箭飞过峡谷，巨兽越来越大；约 8.5s 箭扎进它眼睛上方。", at: 1 },
        { title: "怒吼与追逐", text: "约 10s 低角度正面怒吼，扬起尘土；约 12–14s 它发现猎人，猎人转身狂奔；约 15–22s 侧跟、低机位、俯拍轮番切，巨兽撞断枯树越追越近，山洞在崖壁上出现。", at: 10 },
        { title: "结尾怎么收", text: "约 23–26s 从洞内往外拍，猎人扑进洞口翻滚，巨兽冲到洞口撞上岩壁、扬尘糊满画面；约 28.5s 洞内逆光剪影，猎人喘气，巨兽被卡在明亮的洞口外。", at: 23 },
      ],
      copyThis: "提示词按每 1 秒写一格，并规定每一秒都从上一秒的位置和动作接着来——30 秒追逐的空间方向和箭伤位置才能一直连得上。",
      approx: true,
    },
    tags: [
      "30秒 · 奇幻追逐",
      "16:9 横屏",
      "Seedance 2.5",
      "videoduck",
      "双角色设定图",
      "逐秒时间轴",
    ],
    steps: [
      {
        number: 1,
        title: "先准备猎人和巨兽两张设定图，开头锁死参考",
        description:
          "作者在提示词回复里附了两张设定图：猎人（多角度全身、脸部特写、弓箭细节）和 THAROG（侧/正/背/俯视图、身高对比、头角与爪细节）。提示词开头 STRICT REFERENCE LOCK 要求两者外观完全照参考，并提前规定箭射中后一直插在同一只眼上。注意：提示词里写 HUNTER=image2、THAROG=image1，和 X 帖的发图顺序相反，上传时按图内容对应。",
      },
      {
        number: 2,
        title: "每 1 秒写一格：机位 + 动作 + 转场",
        description:
          "00:00–00:30 每一秒都写 CAMERA（焦段、机位）、动作和 TRANSITION（这一秒怎么接到下一秒），例如松弦时镜头跟箭飞、冲进洞口前镜头先进洞里回拍。整条片几乎不用无关硬切，靠运镜和扬尘、碎木、灰尘把镜头接起来。",
      },
      {
        number: 3,
        title: "最后写连续性规则，防止位置和伤势重置",
        description:
          "CONTINUITY RULE 把 30 秒当成一个连续事件：每一秒继承上一秒的位置、方向、动作惯性、镜头轨迹、扬尘、箭伤位置和角的损伤；山洞必须先在远景出现、追逐中逐渐看清，最后才成为逃生口；角只在 27–28 秒断裂。",
      },
    ],
    references_detail: [
      {
        id: "ref-shamsamin56-hunter",
        number: "1",
        title: "猎人角色设定图",
        subtitle: "作者提示词回复帖第 1 张 · 对应 [REFERENCE 1 — HUNTER]",
        image: "/tutorials/shamsamin56-tharog-hunter-cave-chase-seedance/refs/ref-hunter.jpg",
        prompt: "作者未公开这张设定图的出图提示词。视频提示词中的用法：[REFERENCE 1 — HUNTER] Use the supplied Hunter reference exactly: same face, hair, beard, physique, fur-and-leather clothing, bow, arrows, quiver and materials.（提示词里标为 image2，与 X 帖发图顺序相反。）",
      },
      {
        id: "ref-shamsamin56-tharog",
        number: "2",
        title: "THAROG 巨兽设定图",
        subtitle: "作者提示词回复帖第 2 张 · 对应 [REFERENCE 2 — THAROG]",
        image: "/tutorials/shamsamin56-tharog-hunter-cave-chase-seedance/refs/ref-tharog.jpg",
        prompt: "作者未公开这张设定图的出图提示词。视频提示词中的用法：[REFERENCE 2 — THAROG] Use the supplied THAROG reference exactly: same giant proportions, skull, crescent horns, armored dorsal plates, fur, hide coloration, limbs and tail.（提示词里标为 image1，与 X 帖发图顺序相反。）",
      },
    ],
    storyboard: [
      { number: 1, description: "约 0–1s 猎人蹲在前景巨石后，远处巨兽站在荒漠中。" },
      { number: 2, description: "约 1–4s 推到猎人脸，抽箭、搭弦。" },
      { number: 3, description: "约 4–6s 越肩瞄准，满弓手部特写。" },
      { number: 4, description: "约 6–8s 松弦，镜头跟随箭飞过峡谷，巨兽迎面变大。" },
      { number: 5, description: "约 8–10s 慢动作特写：箭扎进眼睛上方，头猛地后仰。" },
      { number: 6, description: "约 10–12s 低角度正面，巨兽仰头怒吼，尘土震落。" },
      { number: 7, description: "约 12–14s 独眼搜寻，发现巨石旁的猎人，猎人转身逃跑。" },
      { number: 8, description: "约 14–18s 巨兽冲锋，侧跟与低机位追逐，距离拉近。" },
      { number: 9, description: "约 18–20s 俯拍/正面跟拍，巨兽撞断枯树，崖壁上的洞口出现。" },
      { number: 10, description: "约 20–23s 猎人看到山洞，加速冲刺，猎人—巨兽—洞口同框。" },
      { number: 11, description: "约 23–26s 洞内往外拍，猎人扑进洞口翻滚，巨兽冲到洞口。" },
      { number: 12, description: "约 26–28s 巨兽撞上洞口岩壁，扬尘糊满画面。" },
      { number: 13, description: "约 28–30s 洞内逆光剪影，猎人喘气握弓，巨兽被卡在明亮洞口外。" },
    ],
    constraints:
      "两张设定图严格锁定猎人与 THAROG 外观；箭从命中起一直插在同一只眼；每一秒从上一秒的位置与动作继续，不重置人物、镜头地理和方向；14 秒起猎人始终朝同一处崖壁山洞跑，巨兽沿同一追逐轴线；山洞先在远景出现再成为逃生口；角只在 27–28 秒撞断；避免过度血腥；30.00 秒切黑。缺口：设定图出图词未公开；提示词 image1/image2 编号与发帖顺序相反；成片中箭看起来插在眼睛上方、角断裂细节被扬尘遮住，巨兽角形与设定图不完全一致；音频未转录。",
    video_prompt: {
      title: "猎人 vs THAROG · Seedance 2.5 逐秒提示词",
      subtitle: "30s · 16:9 · Seedance 2.5 on videoduck · 2 张设定图参考 · 英文完整提示词（作者楼中楼）",
      content: `STRICT REFERENCE LOCK

[REFERENCE 1 — HUNTER] image2 
Use the supplied Hunter reference exactly: same face, hair, beard, physique, fur-and-leather clothing, bow, arrows, quiver and materials.

[REFERENCE 2 — THAROG] image1 
Use the supplied THAROG reference exactly: same giant proportions, skull, crescent horns, armored dorsal plates, fur, hide coloration, limbs and tail.

The arrow must remain embedded in THAROG's SAME injured eye after the hit.

Every second below begins from the physical position and movement established in the previous second. Never reset character positions, camera geography, direction of travel or environment.

00:00–00:01 — ESTABLISH

CAMERA: 24mm extreme-wide, low aerial descent.

Hunter crouches behind a foreground boulder on FRAME LEFT. THAROG stands approximately 30–35 meters away on FRAME RIGHT.

A cliff containing a small dark cave entrance is faintly visible far behind Hunter's eventual escape direction.

TRANSITION → Camera continues descending toward Hunter rather than cutting to a different location.

00:01–00:02 — FIND HUNTER

CAMERA: Descending wide naturally becomes an 85mm-feeling compressed close-up through a motivated push-in.

Hunter remains behind THE SAME boulder.

He slowly raises his head and studies THAROG.

THAROG remains visible as a blurred shape behind him.

TRANSITION → Hunter's eyes move downward toward his quiver; camera follows his gaze.

00:02–00:03 — TAKE ARROW

CAMERA: Tilt/pan downward into macro hand detail.

Without changing position, Hunter reaches over his shoulder and smoothly pulls ONE arrow from the quiver.

THAROG remains unaware.

TRANSITION → Camera follows the arrow downward from quiver to bow.

00:03–00:04 — NOCK

CAMERA: Close three-quarter shot of Hunter's hands and torso.

The SAME arrow enters frame continuously and is placed onto the bowstring.

Hunter begins rising from his crouched position behind the SAME rock.

TRANSITION → Camera rises simultaneously with Hunter and settles behind his shoulder.

00:04–00:05 — ACQUIRE TARGET

CAMERA: Over Hunter's right shoulder.

Hunter brings the bow upward.

THAROG's head becomes centered between the bow limbs.

Hunter starts drawing the string.

TRANSITION → Camera pushes along the arrow shaft toward Hunter's drawing fingers.

00:05–00:06 — FULL DRAW

CAMERA: Extreme close-up.

Hunter reaches full draw.

Forearm tendons tighten. Bow limbs bend. String reaches maximum tension.

His breathing briefly stops.

TRANSITION → Stay on the hand until the fingers open, using the bowstring release itself as the transition.

00:06–00:07 — RELEASE

CAMERA: 120fps profile close-up transitioning immediately into arrow tracking.

Hunter releases.

String snaps forward.

Arrow exits the bow.

Camera accelerates alongside it instead of introducing an unrelated angle.

TRANSITION → Camera rotates from side-follow to directly behind the SAME flying arrow.

00:07–00:08 — ARROW FLIGHT

CAMERA: Arrow-follow POV.

The arrow flies through the valley.

THAROG's head rapidly grows larger in frame.

Background streaks naturally from velocity.

TRANSITION → Camera gradually overtakes the arrow and swings around toward THAROG's face immediately before impact.

00:08–00:09 — EYE IMPACT

CAMERA: 120fps extreme three-quarter close-up.

The SAME arrow enters THAROG's ONE EYE.

No excessive gore.

Eyelids contract violently.

Head begins snapping backward.

TRANSITION → Do NOT cut away. Maintain the slow-motion close-up as THAROG's head continues backward.

00:09–00:10 — PAIN REACTION

CAMERA: Slow-motion close-up widening slightly.

THAROG completes the backward head movement.

Arrow remains embedded in the SAME injured eye.

Neck muscles tighten.

Nostrils expand.

Its front foot shifts backward from the shock.

TRANSITION → Slow motion ramps smoothly back toward real time while camera drops lower.

00:10–00:11 — ROAR

CAMERA: 24mm low-angle frontal creature shot.

THAROG violently throws its head upward.

It unleashes a huge territorial roar.

Chest expands.

Dust shakes from armor and nearby stones.

TRANSITION → As the roar ends, THAROG lowers its head directly toward camera.

00:11–00:12 — SEARCH

CAMERA: Slow push toward THAROG's face.

THAROG lowers its head.

One eye remains injured with the arrow embedded.

The functional eye scans left-to-right.

Its breathing becomes increasingly aggressive.

TRANSITION → Camera moves toward the functional eye until the eye fills frame.

00:12–00:13 — THAROG SEES HUNTER

CAMERA: Match transition through THAROG's functional eye into THAROG POV.

Through drifting dust, Hunter is visible beside the SAME boulder from which he fired.

THAROG visually locks onto him.

Hunter realizes he has been detected.

TRANSITION → THAROG POV surges slightly forward; cut on Hunter's reaction.

00:13–00:14 — HUNTER RUNS

CAMERA: 85mm Hunter close-up immediately matching his previous position.

Hunter's eyes widen.

He drops the firing posture but KEEPS THE BOW.

He pivots away from THAROG and begins sprinting.

TRANSITION → Camera swings around Hunter during his pivot and follows behind him.

00:14–00:15 — THAROG CHARGES

CAMERA: Brief reverse tracking shot past Hunter toward THAROG.

Hunter enters foreground while THAROG launches into pursuit behind him.

THAROG lowers its massive horns.

First enormous stride hits the ground.

TRANSITION → Impact vibration becomes camera shake as camera turns back into Hunter's running direction.

00:15–00:16 — CHASE BEGINS

CAMERA: 35mm lateral tracking.

Hunter runs left-to-right across uneven terrain.

THAROG follows along EXACTLY the same travel direction.

Hunter remains approximately 20 meters ahead.

TRANSITION → Camera gradually falls behind Hunter rather than changing screen direction.

00:16–00:17 — CLOSING DISTANCE

CAMERA: Ground-level rear chase shot.

Hunter's boots dominate foreground.

THAROG's enormous legs pound the earth behind him.

The distance decreases.

Hunter jumps over a small rock.

TRANSITION → Camera rises above Hunter as he lands, producing the next overhead view.

00:17–00:18 — REVEAL ESCAPE ROUTE

CAMERA: Rising crane into top-down aerial.

Hunter continues along the SAME path.

THAROG follows.

Ahead, the previously established cliff becomes clearly visible.

A narrow cave entrance can now be seen in the rock wall.

Hunter has NOT noticed it yet.

TRANSITION → Camera dives from overhead toward Hunter's front.

00:18–00:19 — THAROG GETS CLOSER

CAMERA: Front-facing tracking shot moving backward.

Hunter runs directly toward camera.

He glances over his shoulder.

THAROG is now frighteningly close behind.

Each footfall shakes the camera.

TRANSITION → Hunter turns forward again; camera follows his gaze toward the cliff.

00:19–00:20 — VIOLENT PURSUIT

CAMERA: Side tracking with Hunter foreground and THAROG background.

A small dead tree lies directly in THAROG's path.

Hunter passes it.

THAROG does NOT divert.

It smashes straight through it.

TRANSITION → Flying wood fragments cross lens, providing natural foreground wipe.

00:20–00:21 — HUNTER SEES CAVE

CAMERA: Foreground debris clears into Hunter POV.

The narrow cave entrance is now directly ahead.

Hunter immediately recognizes that it can fit him but cannot accommodate THAROG's huge horn crown.

TRANSITION → Rapid push toward cave followed by snap back to Hunter's face.

00:21–00:22 — DECISION

CAMERA: Tight 85mm tracking close-up.

Hunter's eyes lock onto the cave.

No stopping.

No dialogue.

He leans his torso forward and accelerates.

THAROG remains directly behind him.

TRANSITION → Camera pulls sideways while Hunter accelerates, opening into a wide profile.

00:22–00:23 — FINAL SPRINT

CAMERA: Wide 35mm side-tracking shot.

Hunter → THAROG → cave entrance are ALL visible in the SAME composition.

This explicitly establishes geography.

Hunter approaches the cave.

THAROG closes to only several meters behind him.

TRANSITION → Camera accelerates past Hunter and enters the cave BEFORE him.

00:23–00:24 — CAVE APPROACH

CAMERA: 18mm from immediately INSIDE the cave looking outward.

Hunter runs directly toward lens.

THAROG fills more and more of the exterior background.

Hunter prepares to jump.

THAROG's horns remain lowered.

TRANSITION → Camera retreats deeper inside the cave as Hunter launches toward it.

00:24–00:25 — DESPERATE LEAP

CAMERA: 120fps slow-motion backward tracking from inside cave.

Hunter jumps through the narrow opening.

Both feet leave the ground.

Bow stays firmly in one hand.

THAROG's horn crown appears dangerously close behind him.

TRANSITION → Continue tracking backward with Hunter's airborne body until he crosses the cave threshold.

00:25–00:26 — HUNTER ENTERS CAVE

CAMERA: Interior cave, returning smoothly toward normal speed.

Hunter hits the rocky floor.

Momentum carries him into a shoulder roll.

He slides deeper inside.

Outside, THAROG reaches the entrance but is still moving too quickly to stop.

TRANSITION → Keep Hunter foreground while focus racks through the entrance onto THAROG.

00:26–00:27 — THAROG TRIES TO BRAKE

CAMERA: Focus passes through cave opening to exterior side angle.

THAROG desperately plants all four feet.

Claws dig trenches through loose soil.

Its huge body continues sliding because of inertia.

Horn crown remains aimed at the rock surrounding the entrance.

TRANSITION → Track WITH the sliding skull directly toward the cave wall.

00:27–00:28 — HORN IMPACT

CAMERA: 18mm exterior three-quarter impact shot.

THAROG's massive horns COLLIDE with solid stone.

CRASH.

Camera violently shakes.

Rock fractures.

Dust explodes outward.

Several OUTER horn sections crack and break away.

The primary horn bases remain attached.

TRANSITION → Dust from impact completely fills frame, creating a natural dust wipe into the cave interior.

00:28–00:29 — AFTERMATH

CAMERA: Inside cave through settling dust.

Hunter raises one arm to protect his face.

Broken horn fragments fall outside the entrance.

THAROG pulls its injured head backward.

The SAME arrow remains embedded in its injured eye.

THAROG releases another furious roar.

TRANSITION → Camera begins continuously dollying backward deeper into darkness.

00:29–00:30 — END FRAME

CAMERA: Slow backward dolly from inside cave.

Hunter remains foreground, breathing heavily and gripping his bow.

The bright cave entrance frames THAROG outside.

THAROG cannot enter because of its enormous body and remaining horns.

It aggressively strikes and scrapes around the entrance while broken horn fragments lie on the ground.

Camera continues withdrawing until Hunter becomes a dark silhouette against the entrance.

CUT TO BLACK AT EXACTLY 30.00.

CONTINUITY RULE:

Treat 00:00–00:30 as ONE continuous physical event rather than 30 independent generated shots.

Every second inherits:
• exact subject position from previous second
• exact direction of movement
• current body pose and momentum
• current camera trajectory
• accumulated dust and environmental damage
• Hunter's bow/quiver state
• THAROG's injured eye
• embedded arrow position
• progressive horn damage
• established cave location

Never reset either subject between timestamps.

Hunter travels consistently toward the same cliff/cave from 00:14 onward.

THAROG follows the exact same chase axis.

The cave must first exist in the distant geography, become increasingly visible during pursuit, and only then become Hunter's escape route.

The arrow remains in the SAME eye from 00:08 through 00:30.

Horn damage occurs ONLY at 00:27–00:28 and remains visible afterward.

Maintain [REFERENCE 1 — HUNTER] and [REFERENCE 2 — THAROG] exactly throughout.`,
    },
  },
  // 查重别名(引用帖：海报与角色设定图指示书): https://x.com/ai_lifehack55/status/2103328089979961698
  {
    id: "ai-lifehack55-shibuya-billboard-wink-wan3",
    title: "我怎么上广告牌了 · 涩谷夜景海报眨眼",
    subtitle: "X · @ai_lifehack55 · ChatGPT 出图 → WAN3.0（SJinn）· 15秒 · 1:1",
    description:
      "WAN3.0 夜景广告短片：涩谷路人纷纷回头，女孩抬头发现自己登上巨幅广告牌，海报里的她眨了下眼。",
    video: "/tutorials/ai-lifehack55-shibuya-billboard-wink-wan3/demo-web.mp4",
    poster: "/tutorials/ai-lifehack55-shibuya-billboard-wink-wan3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "时尚广告",
    shots: 7,
    references: 1,
    model: "ChatGPT 图像生成 → WAN3.0（SJinn）",
    style: "夜晚涩谷街头 · 时尚杂志海报 · 写实电影感广告",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/ai_lifehack55/status/2103685792665329715",
    sourceAuthor: "@ai_lifehack55",
    sourcePlatform: "X",
    sourceImpressions: 8250,
    sourceStats: { asOf: "2026-09-27", likes: 171, reposts: 20, bookmarks: 63 },
    formats: ["时尚大片"],
    hook: {
      structure: "路人回头 → 困惑张望 → 抬头看广告牌 → 海报眨眼",
      opening: "第 0 秒是俯拍的夜晚涩谷十字路口，人潮里一个穿西装的短发女孩正常走着，周围已经有人开始看她。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1.8s 横向跟拍，旁边的西装男回头看她；约 3.5s 正脸特写，她眼神往旁边瞟；约 5s 斜俯拍街道；约 6.3s 斜前方跟拍，她左右张望、一脸困惑。", at: 1.8 },
        { title: "成品揭晓", text: "约 8.3s 更近的脸部特写，视线往上抬；约 9.6s 硬切到大楼外墙的巨幅广告牌，上面是她的「COUTURE」时尚海报，镜头一路推近。", at: 8.3 },
        { title: "结尾怎么收", text: "约 11.5s 推到海报人物的脸，画面静止；约 13.4s 海报里的她单眼眨了一下，随后恢复静止结束。", at: 13.4 },
      ],
      copyThis: "先用一连串短镜头攒「大家为什么都在看我」的疑问，最后抬头把答案放在广告牌上，只让海报里的人眨一次眼收尾。",
      approx: true,
    },
    tags: [
      "15秒 · 时尚广告",
      "1:1 方屏",
      "ChatGPT 出图 → WAN3.0",
      "海报 + 角色设定图 → 成片",
      "广告牌眨眼 · 夜晚涩谷",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：用 ChatGPT 生成时尚杂志海报（image2）",
        description:
          "上传一张成人人物照片，把「参考图」卡片 ① 的完整海报指示书贴进 ChatGPT 图像生成，在开头「选择」里选一种 TYPE（1 TREND / 2 SHIFT / 3 MODE / 4 COUTURE）。输出竖版 3:4 的写实时尚杂志海报，只放该 TYPE 固定的一个单词。成片里广告牌上的就是 TYPE 4「COUTURE」。",
      },
      {
        number: 2,
        title: "第二步：生成简易角色设定图（image1）",
        description:
          "用「参考图」卡片 ② 的角色设定图指示书生成一张 16:9 的简易角色设定图（三视图 + 两张脸部特写），用来锁定主角的脸、发型、体型、服装和鞋。作者未公开设定图，卡片 ② 的配图是成片截帧，不是参考图。",
      },
      {
        number: 3,
        title: "第三步：image1 + image2 + 视频提示词交给 WAN3.0",
        description:
          "在 SJinn 上选 WAN3.0（或 Seedance2.0），<image1> 放角色设定图、<image2> 放海报，贴下方完整视频提示词，提示词里的 <image1><image2> 要改成平台里对应的图片引用。提示词按秒写了 7 个硬切镜头：路人渐渐回头、指她，她越来越困惑，最后抬头看到广告牌，只有海报里的人眨一次眼。作者体感眨眼成功率 WAN3.0 约 40%、Seedance2.0 约 70%，不成功就多抽几次。",
      },
    ],
    references_detail: [
      {
        id: "ai-lifehack55-poster-couture",
        number: "1",
        title: "时尚杂志海报 · ① ChatGPT 海报指示书（image2）",
        subtitle: "作者引用帖示例图 TYPE 4「COUTURE」1086×1448 · 成片广告牌上显示的就是这张",
        image: "/tutorials/ai-lifehack55-shibuya-billboard-wink-wan3/refs/ref-poster-couture.jpg",
        prompt: `【ポスタータイプ選択】
選択：［TYPE 1 / TYPE 2 / TYPE 3 / TYPE 4］

【出力仕様】
フォトリアルな実写写真ベースのファッション・エディトリアルポスターを生成する。縦3:4固定。完成画像は1枚のみ。比較画像、分割画像、複数案、制作過程画像は生成しない。

【入力】
本指示書と同時に、成人人物が1人だけ全身で写った人物画像を1枚添付する。頭頂から靴底まで切れず、顔・髪・衣装・靴を確認できる画像を使用する。添付画像内の人物を以下「参照人物」と呼ぶ。画像が未添付、2枚以上、複数人物、または全身を確認できない場合は生成せず、条件を満たす画像1枚の添付を求める。

【目的】
参照人物を唯一の人物参照として使用し、選択されたTYPE専用の構図、背景、配色、タイポグラフィを適用した完成ポスターを1枚生成する。人物とタイポグラフィを二大視覚要素として扱い、両者のサイズ差、前後関係、透過、裁ち落とし、余白設計によって、ファッション誌のエディトリアルページのような強い誌面デザインを作る。選択されていないTYPEの要素は混在させない。

【人物同一性】
参照人物の顔立ち、目元、鼻、口元、輪郭、年齢感、肌色、髪型、髪色、髪の長さ、体型、身長感、頭身、肩幅、胴体と脚の比率を維持する。衣装、靴、色、形状、素材感、重なり、シルエットも維持する。選択TYPEの構図に応じて写る範囲と自然な姿勢のみ変更し、人物や衣装そのものを再設計しない。

【共通デザイン】
人物をポスターの主役として見せるが、タイポグラフィも添え物にせず、誌面を構成する主要グラフィックとして強く扱う。タイポグラフィは読むための見出しではなく、空間を埋め、人物・余白・背景をつなぐデザイン要素として扱う。人物に積極的に重ねてよいが、軽い透過によって顔、衣装、輪郭の視認性は保つ。文字の太さそのものではなく、分割、大小差、改行、積層、ずらし、裁ち落とし、前後関係、局所背景プレートによって構造変化を作る。
タイポグラフィは各TYPEに固定された英大文字1語のみを使用する。1語を横一列にベタ置きせず、複数の文字群へ分割してよい。単語内で文字サイズは完全均一にせず、一部の文字または文字群だけを大きく、他をやや小さくしてリズムを作る。必要に応じて軽い透過を使用する。文字形そのものを極端に変形せず、湾曲、多重アウトライン、立体文字、過剰な影、装飾過多は行わない。
文字専用の局所背景プレートは1TYPEにつき最大1個とし、単語全体を囲わず、1文字または1文字群だけに用いる。背景プレートは背景装飾ではなくタイポグラフィ構造の一部として扱う。
背景は単色にせず、明るいベース色の上に、大きな色面、円弧、斜め面、矩形、余白を整理して構成する。細かな模様、細線、小図形の反復、複雑な抽象模様、写真背景、コラージュは使用しない。背景は単独で目立つためではなく、人物とタイポグラフィの空間を成立させるために使う。
ポージングの大胆さではなく、人物サイズ、トリミング、タイポグラフィのレイヤー処理、背景色面の配置、余白によってデザイン性を作る。全体の印象は、安価なテンプレートではなく、ファッション誌の1ページやギャラリーポスターのような洗練された誌面とする。

【TYPE 1 — TREND】
使用する文字は「TREND」のみ。
構図：胸上から頭頂までのクローズポートレート。人物を完全な中央には置かず、画面中心からやや左右へオフセットする。肩はごく軽く斜め、顔はカメラ方向。手は顔周辺へ入れない。顔と上半身を大きく見せ、人物の存在感を最優先で確保する。
タイポグラフィ構造：COMPACT LAYER GRID。TRENDを横一列に置かず、3段のずれた文字ブロックとして扱う。基本構造は「TR / EN / D」。Tを最大、Rをそれより少し小さく、ENを中サイズの文字群、Dを独立した大きめのアクセントとする。全体を人物の肩〜胸付近と片側の余白へまたがらせる。基本透過は70〜80％程度とし、Dだけやや濃くしてよい。Dの背後だけに縦長または正方形寄りの淡いコーラル色プレートを置き、文字とプレートは少しずらす。文字の一部は人物前面に、一部は背後に回してよい。顔、目、鼻、口は隠さない。
背景：明るいウォームグレージュを主面とする。画面片側に淡いコーラル〜サーモン系の縦色面を画面幅の15〜20％程度で入れる。反対側には大きなペールベージュ〜アプリコットの円弧を一部だけ見せる。円弧の中心は画面外に置き、背景の隅へ曲線だけが入り込むようにする。TRENDの文字ブロックは色面とニュートラル面の境界付近へ置き、文字自体が誌面構造の一部になるようにする。
印象：洗練、誌面性、軽やかさ、都会的なファッション広告。文字ブロックそのものがグラフィックオブジェクトとして成立している状態にする。

【TYPE 2 — SHIFT】
使用する文字は「SHIFT」のみ。
構図：腰上から頭頂まで。人物をやや大きめに配置する。身体をわずかに斜めへ向け、片肩を少し前に出す程度とする。腕は交差させず、自然で安定した形を維持する。人物のシルエットが背景や文字に埋もれないようにする。
タイポグラフィ構造：SPLIT SCALE。SHIFTを一列に置かず、「SH / IFT」の大小2ブロックとして扱う。SHを非常に大きくし、IFTの文字高はSHの文字高の約70〜80％とする。上下の開始位置は揃えない。SHは画面上端または左右端で大胆に裁ち落とし、IFTは人物の肩〜胴体周辺へ入り込ませる。SHは比較的薄く、IFTは少し濃くして不透明度差を作る。「IF」の背後だけに朱赤〜オレンジレッドの小さな矩形プレートを入れる。SHは人物の背後寄り、IFTは人物の前面へ軽く重なる構成にする。
背景：少しくすんだサフラン〜マスタードを主面とする。そこへ右上から左下へ向かう朱赤〜コーラルレッドの大きな台形状の斜面を入れ、画面の約25〜35％を占める大きな面として扱う。さらに反対側に淡いクリームの大きな三角形または斜め色面を一部だけ入れる。黄の主面、赤の大きな斜面、淡いクリームの補助面の3面構成とし、文字群はその色面境界を横断するように配置する。
印象：大胆、グラフィック、エディトリアル、広告的。大きな文字塊と小さな文字塊の構造差で画面を二分し、背景面との交差によって誌面の緊張感を作る。

【TYPE 3 — MODE】
使用する文字は「MODE」のみ。
構図：膝上から頭頂まで。自然な立位。片脚へ軽く重心を移す程度とする。腰や胴体を大きくひねらず、腕は身体から大きく離さない。人物を縦方向に美しく見せる。
タイポグラフィ構造：TRANSPARENT COLOR LAYERS。MODEの白い一列見出しは使用しない。基本構造は「M   O /   D   E」のような非対称2段構造とし、きれいなグリッドには揃えない。Mは中サイズ、Oを最大サイズ、DはMより少し大きく、Eは中〜小サイズとする。Oは文字形そのものを最大サイズで扱い、人物の胸〜腰へ大きく重ねる。Oとは別の円形図形に置換したり、Oを補う別の円を追加したりしない。色は青紫→紫→マゼンタの狭い色域のみを使い、Mはブルーパープル、Oはバイオレット、Dはパープル、Eはマゼンタ寄りとする。全体の透過は55〜70％程度の半透明とし、人物の胸、腰、スカートにかなり重ねてよい。Dの背後だけに薄いラベンダーまたはマゼンタ系の半透明矩形プレートを入れる。Mは人物背後、Oは人物前面、Dは人物前面＋背景プレート、Eは画面右端寄りの人物背後に配置して前後差をつける。単語を読む前に、透明な紫系グラフィックが人物の周囲を漂っているように見せる。
背景：ダスティローズ〜ソフトマゼンタのなだらかな同系色空間とする。上側をやや明るく、下側を少し深いローズ〜ワイン寄りにするが、明確な横線で二分しない。境界は柔らかく、同色域の中で明暗が移行するようにする。画面上部または片側に、背景より少しだけ明るい巨大なソフトピンクの円弧を一部だけ入れてよいが、低コントラストで背景に溶け込ませる。背景は静かに保ち、主なグラフィック色面はMODEの半透明文字自体とする。
印象：華やか、誌面的、女性誌的。4TYPEの中で最もレイヤー表現が強く、文字そのものが色面として空間を埋めるTYPEにする。

【TYPE 4 — COUTURE】
使用する文字は「COUTURE」のみ。
構図：頭頂から靴底まで完全に入る全身。人物を画面中心から左右どちらかへずらし、反対側に意図的な余白を作る。片脚に軽く重心を置く自然な立位。腕は自然に下ろすか片腕だけ軽く曲げる。人物を小さくしすぎず、全身がポスターの主要要素として十分な大きさになるようにする。
タイポグラフィ構造：SPACED GRID + PLATE。COUTUREを一列に置かず、「C O U / T U R E」の2段ワイドグリッドとする。文字は中〜大型、字間は大きく、上下段の開始位置は少しずらし、完全な左右対称にはしない。上段中央のOだけを他の文字より少し大きくし、下段は比較的均一とする。白文字を75〜85％程度の軽い透過で用いる。上段のUの背後にだけ、赤〜マゼンタの縦長矩形プレートを入れる。矩形は文字より上下に長く、文字専用の色面として使う。追加の細い縦線は使用しない。文字列の一部が人物の肩や腕へ軽く重なってもよいが、すべてを人物へ乗せず、人物＋空白＋文字グリッドの三者で構成する。
背景：ペールブルー〜スモーキーブルーを主面とする。人物とは反対側へ、少し濃いブルーグリーンの広い縦色面を画面端から20〜30％程度入れる。背景側には赤い矩形を置かない。赤〜マゼンタの矩形はCOUTUREのUに付随するタイポグラフィ用プレートとしてだけ使う。背景そのものは青系だけで整理し、余白を広く使い、面と人物のバランスで高級感を出す。
印象：クリーン、モード、洗練。派手さではなく、字間、余白、局所プレートの位置関係で高級感を作る。

【優先順位】
1. 参照人物の同一性と衣装維持
2. 人物とタイポグラフィの両方が魅力として成立していること
3. 顔・髪・衣装の視認性
4. 選択TYPEのタイポグラフィ構造と背景構成
5. 全体が安っぽく見えず、誌面として洗練されていること

【禁止事項】
複数人物化しない。各TYPEに固定された1語以外の文字、数字、説明文、疑似文字、ランダム文字列を生成しない。人物の顔や主要な身体輪郭を文字や図形で大きく隠さない。参照人物の顔、髪型、体型、衣装、靴を別物へ変更しない。背景を単純な安価なテンプレート風ベタ塗りにしない。単純な1列見出しを置いただけのタイポグラフィ処理にしない。分割レイアウト、4連ポスター、比較表示、複数案を生成しない。`,
      },
      {
        id: "ai-lifehack55-character-sheet",
        number: "2",
        title: "简易角色设定图 · ② 角色设定图指示书（image1）",
        subtitle: "作者未公开设定图，此为成片截帧（约 3.8s），不是参考图",
        image: "/tutorials/ai-lifehack55-shibuya-billboard-wink-wan3/refs/frame-heroine-NOT-a-reference.jpg",
        prompt: `Title: WIDESCREEN_CHARACTER_SHEET_3VIEW_DOUBLE_CLOSEUP_v1_2

【出力仕様】
シンプルなキャラクターシートを1枚生成する。アスペクト比は16:9固定。完成画像を1枚だけ生成する。デザイン性を加えたポスター風表現、装飾的な背景、演出用グラフィック、複数案、比較画像、制作過程画像は生成しない。

【入力】
本指示書と同時に、成人人物が1人だけ写った人物画像を1枚添付する。頭頂から靴底まで切れず、顔・髪・衣装・靴を確認できる画像を使用する。添付画像内の人物を、以下「参照人物」と呼ぶ。画像が未添付、2枚以上、複数人物、または全身を確認できない場合は生成せず、条件を満たす人物画像1枚の添付を求める。

【目的】
参照人物を唯一の人物参照として使用し、動画制作で使いやすいシンプルなキャラクターシートを1枚生成する。1枚の中に、正面全身、側面全身、背面全身、正面顔アップ、側面顔アップの5要素を必ず含める。

【人物同一性】
参照人物の顔立ち、目元、鼻、口元、輪郭、年齢感、肌色、髪型、髪色、髪の長さ、体型、身長感、頭身、肩幅、胴体と脚の比率を維持し、同一人物として明確に認識できるようにする。衣装、靴、色、素材感、シルエットも維持する。正面・側面・背面・顔アップのすべてで同じ人物、同じ衣装として統一する。

【シート構成】
16:9の横長キャンバス内に、左側へ3面図、右側へ2つの顔アップを整理して配置する。左側には正面全身・側面全身・背面全身を横並びで配置し、右側には顔アップを上下2段で配置して、上に正面顔アップ、下に側面顔アップを置く。全身3体は同じ縮尺感でそろえ、頭頂位置と足元位置もできるだけそろえる。顔アップ2点は、正面と側面の顔立ち・髪型・輪郭・耳まわりが分かりやすい大きさで見せる。レイアウトはシンプルにし、情報整理を優先する。余計な装飾は加えない。

【3面図の条件】
正面全身：人物は真正面を向いた自然な直立姿勢にする。頭頂から靴底まで完全に入れる。腕や脚を大きく開かず、衣装形状と体型が分かりやすい中立的な立ち姿にする。
側面全身：人物は真横を向いた自然な直立姿勢にする。顔と身体は同じ方向を向き、正確な側面として見えるようにする。頭頂から靴底まで完全に入れる。奥側の手足の位置関係が不自然にならないようにする。
背面全身：人物は真後ろを向いた自然な直立姿勢にする。後頭部、背中、衣装の後ろ側、靴の後ろ側が分かるようにする。頭頂から靴底まで完全に入れる。

【顔アップの条件】
正面顔アップ：顔は正面向きとする。顔全体、髪型、前髪、耳まわり、首元が分かるようにする。表情は落ち着いた自然な表情とする。誇張した笑顔や強い感情表現は避ける。
側面顔アップ：顔は側面全身と同じ向きの真横とする。横顔の輪郭、鼻筋、口元、耳、髪の流れ、首元が分かるようにする。斜め顔ではなく、側面として明確に認識できる向きにする。

【背景・見た目】
背景は白、薄いグレー、またはごく淡い無地背景とする。3面図と顔アップを見やすくするため、背景は装飾しない。ライティングは均一で明るく、人物の形状と衣装が見やすい状態にする。影は弱く、シンプルにする。

【文字・表示】
最小限の実用表示のみ許可する。各ビューには「FRONT」「SIDE」「BACK」「FACE FRONT」「FACE SIDE」の簡潔なラベルを付ける。それ以外の長文説明、装飾文字、不要な情報表示は加えない。

【出力の方向性】
動画制作の参照用として使いやすい、正確で見やすいキャラクターシートにする。ポーズの格好よさやアート性よりも、人物同一性、衣装形状、体型バランス、各方向の見え方の分かりやすさを優先する。

【禁止事項】
複数人物化しない。参照人物を別人化しない。衣装、髪型、体型、靴を大きく変更しない。3面図を斜め角度にしない。正面・側面・背面を不正確な向きにしない。顔アップを斜め顔にしない。動きのあるポーズ、演技的なポーズ、過度な手振りを入れない。背景を装飾しない。ポスター風、広告風、デザインボード風にしない。不要な小物、武器、装飾要素を追加しない。比較画像、複数案、分割された別画像を生成しない。`,
      },
    ],
    storyboard: [
      { number: 1, description: "0–1.8s 俯拍夜晚涩谷十字路口，女孩在人潮里正常走，周围有人开始看她。" },
      { number: 2, description: "1.8–3.5s 横向跟拍，旁边的西装男回头看她，她还没察觉。" },
      { number: 3, description: "3.5–5s 正脸特写，她察觉到视线，眼神往旁边瞟。" },
      { number: 4, description: "5–6.3s 斜俯拍街道，路人纷纷看向她。" },
      { number: 5, description: "6.3–8.3s 斜前方跟拍，她左右张望，一脸困惑。" },
      { number: 6, description: "8.3–9.6s 更近的脸部特写，视线往上抬。" },
      { number: 7, description: "9.6–15s 大楼外墙巨幅广告牌显示「COUTURE」海报，镜头推近到海报人物的脸，约 13.4s 她单眼眨眼一次后恢复静止。" },
    ],
    constraints:
      "image1 只继承人物的脸、发型、体型、服装和鞋，设定图里的文字、标签、背景不能出现在画面里；image2 海报要原样显示在广告牌上，字体、背景、配色、构图全部不变；前中段用短镜头硬切，路人反应要克制、写实；结尾只有海报人物眨一次眼，其余保持静止；不要淡入淡出等柔和转场。缺口：作者没公开角色设定图原图；成片里街上的女孩穿黑西装白衬衫，海报人物穿印花吊带裙，衣服对不上；路人指她的动作在成片里不明显；音频没有转录。",
    video_prompt: {
      title: "③ WAN3.0 / Seedance2.0 视频提示词",
      subtitle: "15s · 1:1 · <image1> 角色设定图 + <image2> 海报 · 日文完整提示词（主帖）",
      content: `Title: 01_V8_City_Billboard_Wink
[REFERENCE]
<image1> → 主人公の唯一の人物参照。人物の顔、髪、体型、身長感、衣装、靴、人物同一性だけを引き継ぐ。スタイルシート内の文字、ラベル、背景、レイアウトは映像へ表示・転写しない。
<image2> → 街頭ビルボードに表示する唯一の完成ポスター参照。建物外壁などに設置された大型デジタル広告画面の表示内容として、完成ポスター全体をそのまま使用する。タイポグラフィ、背景、配色、構図、レイアウトを維持する。

[CONDITION]
15秒。1:1スクエア。高品質な実写。シネマティック、フォトリアル、都会的で洗練された広告映像。全ショットを通して人物同一性、都市空間、光、色調、質感、撮影トーンを統一し、ショット間に統一感のある視覚連続性を保つ。
舞台は夜の渋谷の繁華街を思わせる、人通りと大型デジタルビルボードのある都市空間。街全体は明るいビルの照明、看板、街頭ビルボードの光によって自然にライトアップされている。主人公の表情、周囲の反応、ビルボードの表示内容がはっきり視認できる夜の街とする。
主人公は普通に街を歩いているが、周囲の通行人が次第に主人公へ視線を向け、振り返り、数人が自然に指をさす。主人公は理由が分からず、歩きながら少しずつ戸惑う。
前半から中盤は短いショットをハードカットで連結する。正面、横追従、やや高い視点、斜め前、顔寄りへ視点を切り替え、人物の表情と周囲の反応をテンポよく見せる。群衆の反応は自然な範囲に抑える。
終盤で主人公が上方へ視線を向け、その先の大型デジタルビルボードに参照ポスターが大きく表示されていることを明かす。ビルボードは夜の街の中で明るくライトアップされ、参照ポスターの表示内容がはっきり見える状態とする。最後はビルボードへ寄り、静止していた参照ポスター内の人物だけが一度ウィンクする。

[SHOT FLOW]
[Shot 1｜0.00~1.70秒]
やや高い位置から夜の都市歩道と人の流れを捉える。主人公が人混みの中を普通に歩く。周囲の数人が主人公へ視線を向け始める。ハードカット。

[Shot 2｜1.70~3.30秒]
横方向から主人公を追従する。手前を横切る通行人が振り返り、奥の人物が主人公を自然に指さす。主人公はまだ理由に気づかず歩き続ける。ハードカット。

[Shot 3｜3.30~4.90秒]
正面寄りの顔アップ。歩きながら周囲の視線に気づき、表情にわずかな戸惑いが現れる。視線だけを横へ動かす。ハードカット。

[Shot 4｜4.90~6.60秒]
やや高い斜め俯瞰。主人公は歩き続ける。周囲の複数人が主人公を見て振り返り、そのうち数人だけが自然に指をさす。反応は控えめで現実的。ハードカット。

[Shot 5｜6.60~8.50秒]
斜め前から近めに追従する。主人公は歩きながら左右の人々を確認し、なぜ注目されているのか分からず戸惑う。最後に周囲ではなく上方へ意識が移り始める。ハードカット。

[Shot 6｜8.50~10.80秒]
顔を中心にさらに寄る。主人公の視線が明確に上へ移動し、戸惑いから何かに気づいた表情へ変化する。その視線方向を残してハードカット。

[Shot 7｜10.80~15.00秒]
主人公の視線の先にある建物外壁の大型デジタルビルボードを見せる。ビルボードの広告画面全体には参照ポスターが完成デザインのまま大きく表示され、最初は完全な静止広告として見える。カメラはそのビルボードへ連続的にプッシュインし、ポスター内の人物が確認できる大きさまで寄る。寄り切った後にカメラを安定させ、参照ポスター内の人物だけが一度、明確に小さくウィンクする。ウィンク以外の人物動作は行わず、タイポグラフィ、背景、配色、構図、レイアウトは最後まで静止したまま維持する。ウィンク後は人物も再び静止して終了する。

[SOUND]
都会的でシネマティックなBGMあり。都市の環境音と必要な効果音を入れる。

[NEGATIVE]
参照人物の別人化、人物参照シートの文字や背景の転写、参照ポスターの別デザイン化、主ビルボード表示の差し替え、ポスター構成の崩れ、過剰な群衆リアクション、フェードやソフトトランジションを避ける。`,
    },
  },
  {
    id: "studio-oneroom-copypaste-motion-graphics-h3",
    title: "复制粘贴就能做的动态图形片头 · MiniMax H3",
    subtitle: "X · @studio_oneroom · MiniMax H3 (2k) · Domo AI · 15秒 · 16:9",
    description:
      "MiniMax H3 纯文字生成的扁平动态图形片头：黑白三次反转，字块砸入、碎裂、对撞，15 秒一镜不剪。",
    video: "/tutorials/studio-oneroom-copypaste-motion-graphics-h3/demo-web.mp4",
    poster: "/tutorials/studio-oneroom-copypaste-motion-graphics-h3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "扁平动态图形",
    shots: 9,
    references: 0,
    model: "MiniMax H3 (2k)（Domo AI）",
    style: "扁平图形动态设计 · 白 / 黑 / 橙三色 · 粗几何无衬线字",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/studio_oneroom/status/2092220604309205341",
    sourceAuthor: "@studio_oneroom",
    sourcePlatform: "X",
    sourceImpressions: 167166,
    sourceStats: { asOf: "2026-09-27", likes: 988, reposts: 103, bookmarks: 1441 },
    formats: ["字效·片头"],
    hook: {
      structure: "线条漩涡 → 标题拼装 → 字块连砸 → 品牌对撞定版",
      opening: "第 0 秒黑底上白色线条从四周涌向中心形成漩涡，约 0.5s 一个巨大的橙色圆砸进画面。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1–2s 线条拼成「MiniMax H3」，底色翻成白；约 2.5s 急推到橙色「H3」占满全屏；约 4.5s 竖条把画面切成三列；约 5.5s「MOTION」整屏砸入。", at: 1 },
        { title: "节奏加速", text: "约 6.5s 硬切黑底，白色线框网格往纵深延伸，「GRAPHICS」沿网格成片复制；约 8–9.5s 字卡连闪「NO EDIT」「ONE SHOT」「コピペで」「超簡単！」。", at: 6.5 },
        { title: "结尾怎么收", text: "约 10.5s 橙底上「ONEROOM」从两侧对撞成一行，碎片像玻璃一样四散；约 12.5s 翻回白底，「AI STUDIO」在上、「ONEROOM」在下，中间一条橙色短线，静止到结束。", at: 10.5 },
      ],
      copyThis: "开头把 9 段要出现的文字全列成变量，只锁 3 色、1 种字体和 3 层不同速度，每镜只写一句动作加时间点，细节交给模型发挥。",
      approx: true,
    },
    tags: [
      "15秒 · 片头 / 标题 Logo",
      "16:9 横屏",
      "MiniMax H3 (2k)",
      "纯文生视频 · 无参考图",
      "改开头 9 个字符串就能套用",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：改掉 subject_definitions 里的 9 个字符串",
        description:
          "下方完整提示词开头定义了强调色（饱和橙）和第 1–9 个字符串（MiniMax H3 / MOTION / GRAPHICS / NO EDIT / ONE SHOT / コピペで / 超簡単！ / ONEROOM / AI STUDIO），换成你自己的标题、口号和品牌名即可；分屏竖条取自第 1 个字符串里大写 H 的竖笔。",
      },
      {
        number: 2,
        title: "第二步：整段贴进 MiniMax H3，纯文字生成",
        description:
          "不需要参考图。作者在 Domo AI 上用 MiniMax H3 (2k) 生成，说生成偏慢、但画面很干净。提示词锁死了只用 9 个字符串、1 种粗几何无衬线字、白 / 黑 / 橙 3 色、底色黑白反转 3 次，以及背景、装饰、文字 3 层用不同速度运动。",
      },
      {
        number: 3,
        title: "第三步：少写细节，多抽几次",
        description:
          "作者的经验是这类提示词不要写太满，留给 H3 自由发挥再多抽几次更有意思，这次特意删到不足 3000 字。每镜只给时间点和一句动作（00:01 拼标题 … 00:12 定版），最后 13.8–15s 全画面静止。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "0–1s 黑底，白色线条从四边涌向中心形成漩涡，巨大橙色圆砸入，画面震动。" },
      { number: 2, description: "1–2.5s 线条拼成「MiniMax H3」，底色由黑翻白，「H3」为橙色。" },
      { number: 3, description: "2.5–3.5s 急推到橙色「H3」，放大到占满全屏。" },
      { number: 4, description: "3.5–5.2s 白底，竖条贯穿全高，把画面切成三列上下滚动，其余字母被甩出画面。" },
      { number: 5, description: "5.2–6.4s 三列急停，「MOTION」整屏砸入并定住。" },
      { number: 6, description: "6.4–8s 硬切黑底，白色线框网格倾斜延伸向纵深，「GRAPHICS」沿网格成片复制涌来。" },
      { number: 7, description: "8–10s 字卡快闪：「NO EDIT」「ONE SHOT」「コピペで」「超簡単！」。" },
      { number: 8, description: "10–12s 橙底，「ONEROOM」从左右两侧高速对撞成一行，碎片像玻璃一样四散。" },
      { number: 9, description: "12–15s 黑底「ONEROOM」落到下半屏，随后翻白底，「AI STUDIO」在上、中间一条橙色短线，静止到结束。" },
    ],
    constraints:
      "画面上只能出现 9 个指定字符串，拼写、大小写、空格都要一字不差，不能乱码、多字或少字；「第 1 个字符串」这类称呼本身不能画到画面上；只用 1 种粗几何无衬线字体（日文用粗黑体），只用米白、墨黑、强调色 3 色；底色黑白反转 3 次；背景、装饰、文字 3 层始终以不同速度运动，只有最后 13.8–15s 全部静止；背景是空心描边的「ONEROOM」超低速从右往左流动；9 镜构图不能重复；字形不能随机故障。与成片不符：提示词只让第 1 个字符串的最后一个字是强调色，成片里「H3」两个字都是橙色；Shot 7 要求一卡一词，成片里「コピペで」和「ONE SHOT」、「超簡単！」出现在同一张卡上。",
    video_prompt: {
      title: "MiniMax H3 完整提示词（纯文生视频）",
      subtitle: "15s · 16:9 · 无参考图 · 日文完整提示词（主帖长文）",
      content: `subject_definitions:
この映像の設定は以下の通りである。
アクセント色は彩度の高いオレンジである。
第1の文字列は "MiniMax H3" である。
第2の文字列は "MOTION" である。
第3の文字列は "GRAPHICS" である。
第4の文字列は "NO EDIT" である。
第5の文字列は "ONE SHOT" である。
第6の文字列は "コピペで" である。
第7の文字列は "超簡単！" である。
第8の文字列は "ONEROOM" である。
第9の文字列は "AI STUDIO" である。
画面を3分割する縦棒は、第1の文字列に含まれる大文字 H の縦棒である。

画面に登場する文字列は上の9つだけであり、これ以外の文字・単語・記号・数字は一切出現しない。すべて上に書いた通りの綴りで、大文字と小文字の別も空白の有無もそのまま正確に保ち、平坦・鮮明・安定した状態で描画する。崩れたり、文字が増減したり、文字化けしたりすることは決してない。
「第1の文字列」「第2の文字列」などの呼び方は、この指示書の中だけで使う呼称である。画面に描くのは必ずその呼称に割り当てられた文字列そのものであり、「第1」「文字列」といった呼称の語や数字が画面に描かれることは決してない。
書体は太いジオメトリックサンセリフ1種類のみで、欧文はすべて大文字。ただし固有名詞にもともと小文字が含まれる場合は、その混在をそのまま正確に保つ。日本語は太いゴシック体1種類のみ。
色はオフホワイト、インクブラック、アクセント色の3色のみ。この3色以外は一切使わない。地の色は映像の途中で白と黒のあいだで3回反転し、そのたびに文字色も反転する。
画面には常に3つの層がある。奥の背景層、中間の装飾層、手前の文字層。この3層は必ず異なる速度で動き、3層すべてが同時に静止する瞬間は最後のホールドだけである。
背景層には第8の文字列が、塗りのない輪郭線だけで描かれ、画面幅の3倍の大きさで横倒しに寝そべり、右から左へ超低速で流れ続けている。これは背景の壁紙であり、手前の文字層とは別物である。重複した単語ではない。
中間の装飾層には、細いバーコードの帯、極小のUIティックの列、レジストレーションマーク、ハーフトーンのドット網、テクニカルな円弧、データ数値のティックが常時いずれか複数存在し、文字層とは別の速度で動いている。

summary:
15秒の爆発的なフラットグラフィック・モーションデザイン。9つのカットすべてが構図的に全く異なり、地の白黒が3回反転し、背景の巨大なアウトライン文字が全編流れ続ける。文字は硬い物体として叩きつけられ、圧縮され、砕け、跳ね返り、増殖し、最後に激突する。ばらばらの線分が第1の文字列を組み上げ、縦棒が画面を3分割し、第2の文字列が叩き込まれ、第3の文字列がワイヤーフレームのグリッド上で増殖し、カードが連打され、収束した光点から第8の文字列が左右から激突して生まれ、最後に第9の文字列を上、第8の文字列を下に置いた2行のロックアップで着地する。

retention_analysis:
各文字列が出現するショットは次の通りであり、増殖・複製された文字もすべて同じ綴りを保つ。
第1の文字列は [Shot 2]、[Shot 3]、[Shot 4] に出現する。
第2の文字列は [Shot 5] に出現する。
第3の文字列は [Shot 6] に出現する。
第4、第5、第6、第7の文字列は [Shot 7] に出現し、いずれも完全に読める状態で保持される。
第8の文字列は背景層に全編出現し、手前の文字層としては [Shot 8]、[Shot 9] に出現する。背景層のものは輪郭線のみ、手前のものは塗りつぶしであり、同じ綴りだが別の層である。誤って重複した単語として扱わない。
第9の文字列は [Shot 9] に出現する。

detailed_description:
本映像は高密度で攻撃的なフラットグラフィックモーションデザインである。エネルギーはすべてタイポグラフィの物理から生み出す。9つのショットはすべて構図が異なっていなければならず、同じ構図、同じスケール、同じ配置を二度使わない。各ショットの演出の細部はここでは指定しない。

[Shot 1] 地は黒。黒い線分の群れが四辺すべてから爆発的に飛び込み、渦を巻きながら中央へ加速して吸い込まれていく。巨大なアクセント色の円が画面外から叩きつけられて着弾し、強いインパクトシェイクが走る。

[Shot 2] At 00:01.000, 渦の中心で線分が一斉に噛み合い、第1の文字列が画面いっぱいに組み上がる。組み上がった瞬間、地が黒から白へ一気に反転する。第1の文字列の最後の1字だけがアクセント色である。

[Shot 3] At 00:02.600, スナップズームでそのアクセント色の1字へ急速に寄り、その1字が画面全体を覆い尽くすまで巨大化する。画面全体が一度だけフリーズする。

[Shot 4] At 00:03.400, 地は白。縦棒が上下へ伸び上がって画面の全高を貫き、画面を3つの縦列に切り分ける。第1の文字列の残りの文字は左へ弾き飛ばされて画面外へ消える。3つの縦列はそれぞれ異なる速度で上下にスクロールする。

[Shot 5] At 00:05.200, 3つの縦列が一斉に急停止し、第2の文字列が画面いっぱいに正面から叩き込まれ、完全に読める状態で静止する。

[Shot 6] At 00:06.400, ハードカットで黒地へ反転する。巨大な白いワイヤーフレームのグリッドが3次元的に傾きながら奥へ伸び、その面に沿って第3の文字列が格子状に増殖して手前へ流れてくる。

[Shot 7] At 00:08.000, グラフィックカードが4枚、ハードカットで連打される。1枚ごとに構図もスケールも配置も異なり、第4、第5、第6、第7の文字列が1枚に1つずつ、画面の中央に大きく現れる。各カードの切り替わりはシャッターフラッシュで区切られる。

[Shot 8] At 00:10.000, 4枚のカードが中央へ一気に吸い込まれ、1つのアクセント色の光点に凝縮する。光点から左右へ、第8の文字列が2つの塊に分かれて超高速で飛び込み、画面中央で激突して一行に綴られる。アクセント色の同心円の衝撃波が中央から外へ炸裂し、砕けた平面の破片がガラスのように四方へ飛び散る。

[Shot 9] At 00:12.000, 破片が画面外へ抜け、第8の文字列が画面の下半分へ落下して着地し、その真上により小さいサイズで第9の文字列が固定される。2行が中央揃えで積み重なる。地が黒から白へ最終反転する。2行のあいだに短いアクセント色の罫線が1本割り込む。00:13.800 から 00:15.000 まで、背景層も含めて画面上のすべてが一切動かない状態を保持する。字形がランダムにグリッチすることは決してない。`,
    },
  },
  // 查重别名(引用帖：同作者 Seedance2.0 威尼斯微缩城，未附提示词): https://x.com/ai_lifehack55/status/2083529174221001156
  {
    id: "ai-lifehack55-miniature-coronation-portrait-wan3",
    title: "微缩城市的戴冠式 · 巨幅公主肖像揭幕",
    subtitle: "X · @ai_lifehack55 · WAN3.0（SJinn）· 15秒 · 1:1",
    description:
      "WAN3.0 微缩城市延时：广场上的小人搭起脚手架、挂上巨幕，烟花升空后幕布落下，露出公主巨幅肖像。",
    video: "/tutorials/ai-lifehack55-miniature-coronation-portrait-wan3/demo-web.mp4",
    poster: "/tutorials/ai-lifehack55-miniature-coronation-portrait-wan3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "微缩模型",
    shots: 11,
    references: 0,
    model: "WAN3.0（SJinn）",
    style: "微缩城市大场景 · 施工进度跳切 · 烟花揭幕",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/ai_lifehack55/status/2103806816731681212",
    sourceAuthor: "@ai_lifehack55",
    sourcePlatform: "X",
    sourceImpressions: 2240,
    sourceStats: { asOf: "2026-09-27", likes: 73, reposts: 9, bookmarks: 7 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "空广场 → 搭架装框 → 挂幕布 → 烟花 → 幕落揭幕",
      opening: "第 0 秒高位斜俯拍一座密密麻麻的微缩城市，中央广场只堆着建材，小人们正把木料往里搬。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "每一刀都跳一大段工期：约 1.5s 多层脚手架已搭好、工人在顶层固定横杆；约 2.5s 巨大的竖版金色画框吊装到位；约 4s 工人把整块幕布拉开盖住画框；约 6s 广场挂满彩旗，人群开始聚集。", at: 1.5 },
        { title: "蓄势", text: "约 7.5s 镜头升高后拉，广场、街区和远处城市全部入画，满场观众；约 9.5s 天色转暗，一发烟花从城市深处升空，约 10.5s 在画框上空炸开。", at: 7.5 },
        { title: "成品揭晓", text: "约 11.2s 幕布往下滑落，露出头戴王冠、身穿白色礼服的公主肖像；约 12.3s 切近到整幅画框，观众举手欢呼，纸屑飘落到结束。", at: 11.2 },
      ],
      copyThis: "每个镜头只拍当前工期剩下的最后一步，一刀跳一大段进度；肖像一直用幕布盖住，攒到烟花炸开后再一次性揭开。",
      approx: true,
    },
    tags: [
      "15秒 · 微缩城市",
      "1:1 方屏",
      "WAN3.0（SJinn）",
      "1 张 3:4 图 → 揭幕肖像",
      "施工跳切 · 烟花揭幕",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：需自备一张 3:4 竖图作 image1",
        description:
          "需自备一张 3:4 竖图作 image1，它只作为最后揭幕的巨幅肖像内容，不影响城市、建筑、居民和装饰。作者没有公开自己用的这张图，也没有给出图提示词；成片里揭开的是一位头戴王冠、身穿白色礼服、手持权杖的公主全身像。",
      },
      {
        number: 2,
        title: "第二步：image1 + 下方完整提示词交给 WAN3.0",
        description:
          "在 SJinn 上选 WAN3.0，把提示词里的 <image1> 改成平台里对应的图片引用，贴下方完整提示词。它按 11 个镜头写死了施工进度（0% → 30% → 50% → 70% → 85% → 100%），每个镜头从已完成的部分开始，只拍剩下的最后一步；全程用远景大广角，肖像在揭幕前一直被不透明幕布完全遮住。",
      },
      {
        number: 3,
        title: "第三步：烟花、揭幕和收尾按秒控制",
        description:
          "9.5s 起一发烟花升空、10.7s 炸开，11.5s 幕布整块落下，12.3–15s 镜头缓慢推近，但始终让 3:4 画框完整留在画面里。作者提醒生成结果会有波动、复现性基本没验证过，WAN3.0 也还做不好高速蒙太奇。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "0–1.5s 高位斜俯拍微缩城市，中央广场只有建材，工人把木料、纸板、绳子运进来。" },
      { number: 2, description: "1.5–2.5s 跳切：多层脚手架已搭好，工人在顶层固定最后一根横杆。" },
      { number: 3, description: "2.5–3.8s 跳切：脚手架里吊起巨大的竖版金色画框，工人扶着固定顶梁。" },
      { number: 4, description: "3.8–5s 跳切：工人把幕布从上往下展开，盖满画框正面。" },
      { number: 5, description: "5–6s 侧面高位：外侧脚手架大多已拆，工人挂最后的彩旗和纸饰。" },
      { number: 6, description: "6–7.3s 远景：彩旗挂满，工人离场，居民开始聚集到广场。" },
      { number: 7, description: "7.3–9.5s 最大远景，镜头升高后拉：广场挤满观众，街区和远处城市全部入画。" },
      { number: 8, description: "9.5–10.5s 天色转暗，一发烟花从城市深处升空，观众抬头看。" },
      { number: 9, description: "10.5–11.2s 烟花在画框上空炸开，幕布仍然盖着。" },
      { number: 10, description: "11.2–12.3s 幕布往下滑落，露出头戴王冠、身穿白色礼服的公主肖像。" },
      { number: 11, description: "12.3–15s 切近到整幅画框，观众举手欢呼，纸屑飘落，定格到结束。" },
    ],
    constraints:
      "image1 只用作最后揭幕的肖像内容，揭幕前不能露出，幕布不能透光，也不能把参考图的内容用到城市、建筑、居民和装饰上；城市要做出剪纸、纸板、布料拼贴的手工质感，不要光滑的 3DCG 模型或游戏渲染；全程远景大广角，不能只拍画框；不要魔法式的自动建造，不要画面文字、Logo、字幕；只能出现一幅肖像。与成片不符：成片更像普通微缩模型，纸张拼贴的质感不明显；约 12.3s 是直接切近到画框，不是提示词写的从远景缓慢推近，最后画框约占画面高度 95%，超过要求的 75–80%；烟花段天色突然变暗，揭幕后又回到白天；前景道路上不止一辆车。缺口：作者没公开 image1 原图，也没有出图提示词；音频没有转录。",
    video_prompt: {
      title: "WAN3.0 完整视频提示词",
      subtitle: "15s · 1:1 · <image1> 3:4 竖版肖像图 · 日文完整提示词（主帖长文）",
      content: `[DECLARATION]
15秒、1:1スクエア。切った紙、厚紙、印刷紙、布、紙片を貼り合わせて作った広大な紙コラージュ都市を、物理的な大型セットとして撮影した高品質なエディトリアル映像。建物、道路、屋根、階段、橋、広場まで紙とクラフト素材で構成し、紙の繊維、断面、折り、重なり、歪み、接着跡、手仕事の不均一さが見える。整った一般的な建築模型ではなく、巨大な紙コラージュ作品の内部に本物の町が存在しているような世界。都市中央の大広場で町の人々が巨大な制作物を完成させる過程を、時間が大きく進む短いハードカットでつなぎ、最後に祝祭的な公開へ到達する。

[REFERENCE]
<image1> → 3:4縦長の参照画像。最終除幕後に公開される巨大肖像画の画面内容としてのみ使用する。除幕前の都市、建物、広場、住民、足場、幕、装飾には反映しない。

[CONDITION]
舞台は広場だけで完結せず、道路、建物、階段、橋、複数街区と多数の住民が奥まで続く広大な紙コラージュ都市。中央広場は都市の一部分として存在する。全編を通して制作物から十分に離れた遠距離ワイドを基本とし、巨大制作物だけで画面を埋めない。左右の広場と街区、前景道路、奥の建物群まで同時に見せ、町の人々は小さく見せる。
前半のハードカットは連続作業の分割ではなく、カットごとに時間と制作進捗が大きく進む。各SHOTはすでに完成した部分から始め、その段階で残る最後の作業だけを見せる。
巨大な3:4縦長制作物の正面は公開まで厚い不透明幕で完全に覆い、内部の画像、色、人物、輪郭を見せない。

[SHOT FLOW]
[Shot 1｜0.00~1.60秒]
[START]
制作進捗0%。広大な都市中央の大広場に資材だけが集まっている。
[MAIN EVENT]
遠距離ワイド。左右の街区、前景道路、奥の建物群を入れた高めの斜め俯瞰から、ゆっくり広場へ前進。多数の作業員が紙、厚紙、木材、ロープ、足場部品を運び込み建設を始める。
[END]
都市の大きさと中央広場の制作現場が同時に見える。

[Shot 2｜1.60~2.70秒]
[START]
HARD CUT。制作進捗30%。巨大な多層足場の下部と中段は完成済み。
[MAIN EVENT]
遠距離の斜め側面から軽く横移動。足場と周辺街区を同時に見せ、作業員が残る最上段の横桟だけを固定する。
[END]
巨大な多層足場が100%完成する。

[Shot 3｜2.70~3.80秒]
[START]
HARD CUT。制作進捗50%。足場内部の巨大な3:4縦長フレームは約70%完成。
[MAIN EVENT]
制作物から十分に距離を取ったワイド。左右の広場と背後の街並みを残し、ロープで吊られた最後の大型上部フレームを作業員が誘導して固定する。
[END]
巨大な3:4縦長フレームが100%完成する。

[Shot 4｜3.80~4.90秒]
[START]
HARD CUT。制作進捗70%。巨大フレームは完成し、正面の約半分まで不透明幕が取り付けられている。
[MAIN EVENT]
遠距離ワイド。広場の左右と周辺街区を残し、作業員が残りの幕を上から下へ広げ、左右から引いてロープと留め具で固定する。
[END]
巨大制作物の正面が一枚幕で100%完全に覆われる。

[Shot 5｜4.90~6.10秒]
[START]
HARD CUT。制作進捗85%。幕は固定済み。外側の足場はすでに大半が撤去済みで、残るのは最後の祝祭装飾だけ。
[MAIN EVENT]
高めの遠距離ワイドで短く横移動。複数チームが最後の旗と紙飾りを取り付ける。奥の都市を残す。
[END]
祝祭装飾が完成し、公開準備が整う。

[Shot 6｜6.10~7.30秒]
[START]
HARD CUT。制作進捗100%。足場は撤去済み。幕付き巨大制作物と広場の祝祭装飾が完成している。
[MAIN EVENT]
非常に広い遠距離ワイド。巨大制作物は画面中央の一部に留め、左右の広場、周辺街区、奥の都市まで見せる。作業員が広場を離れ、住民が集まり始める。
[END]
完成した広場へ観衆が集まり、公開直前になる。

[Shot 7｜7.30~9.50秒]
[START]
完成した幕付き巨大制作物を中心に観衆が集まっている。
[MAIN EVENT]
最も広い遠距離ワイド。広場全体、左右の街区、前景道路、奥の都市を収めたまま、ゆっくり大きくクレーンアップ＋ドリーアウト。前景道路を小さな車が一台だけ走り抜ける。
[END]
巨大制作物は画面高の約25〜30%に留まり、広場全体、左右の複数街区、前景道路、奥の都市まで広く見える。

[Shot 8｜9.50~10.70秒]
[START]
十分に引いたワイド位置。幕は完全に閉じている。
[MAIN EVENT]
カメラ位置と画角を維持したまま、一発の花火が都市の奥から上空へ上昇する。観衆が空を見上げ、幕は動かない。
[END]
花火が巨大制作物の上空へ到達する。

[Shot 9｜10.70~11.50秒]
[START]
花火が上空へ到達。カメラはワイド位置、幕は完全に閉じている。
[MAIN EVENT]
カメラを動かさず、花火だけが大きく華やかに爆発する。都市、広場、観衆、幕付き巨大制作物、満開の花火を一つのワイド画面で見せる。
[END]
花火が完全に開いた全景。幕はまだ閉じたまま。

[Shot 10｜11.50~12.30秒]
[START]
花火爆発直後。カメラは同じワイド位置。幕はまだ閉じている。
[MAIN EVENT]
ここで初めて幕の上部固定が外れ、厚い一枚幕が前方から下へ勢いよく剥がれ落ちる。カメラは動かさない。
[END]
幕が完全に落ち切り、巨大な3:4肖像画の額縁全体が上下左右とも切れずに初めて公開される。カメラはまだ同じワイド位置。

[Shot 11｜12.30~15.00秒]
[START]
幕は完全に落ち切り、3:4肖像画の額縁全体が広場の中で見えている。カメラはまだワイド位置。
[MAIN EVENT]
ここで初めて巨大肖像画へゆっくり前進しながら控えめにズームインする。3:4の額縁全体を常に画面内に保持し、上端・下端を切らない。観衆は旗を振り、少量の紙吹雪と花火の余韻だけが残る。顔や上半身だけのアップにはしない。
[END]
最終フレームで3:4肖像画は画面高の約75〜80%に留め、額縁全体と周囲の広場を少量残した状態で終了する。

[SOUND]
BGMあり。前半は制作進行を支える明確なリズム、後半は公開へ向けて高揚。紙、厚紙、木材、ロープ、布、足場の工作音、町の環境音、観衆のざわめき、花火の上昇・破裂音、幕が落ちる布音、公開後の歓声と拍手。

[NEGATIVE]
除幕前に参照画像の内容を見せない。幕を透過させない。参照画像の内容を都市、建物、住民、装飾へ流用しない。滑らかな3DCG模型、ゲーム風レンダリング、均一なプラスチック質感、狭い広場だけで完結する構図、巨大肖像画の複数生成、魔法のような自動建設、過度な発光、画面内テキスト、ロゴ、字幕は禁止。`,
    },
  },
  // 查重别名(用户提交的参考图 + 简版创意帖): https://x.com/magnific/status/2103889158972580030
  // 查重别名(Claude Opus 5.5 完整版 + 提示词回复帖): https://x.com/magnific/status/2103889213309739134
  // 查重别名(同线程 GPT-6 Astra 版 + 提示词回复帖): https://x.com/magnific/status/2103889266334130518
  {
    id: "magnific-mayday-hot-sauce-claude-opus",
    title: "一滴辣酱，全员警报 · MAYDAY 辣酱广告",
    subtitle: "X · @magnific · Claude Opus 5.5 → Magnific · 30秒 · 16:9",
    description:
      "Claude Opus 5.5 写分镜、Magnific 出片的辣酱广告：一滴辣酱落向塔可，控制室拉响最高警报。",
    video: "/tutorials/magnific-mayday-hot-sauce-claude-opus/demo-web.mp4",
    poster: "/tutorials/magnific-mayday-hot-sauce-claude-opus/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实广告",
    shots: 6,
    references: 4,
    model: "Claude Opus 5.5（写提示词）→ Magnific",
    style: "复古 70 年代控制室 · 钴蓝 / 信号红 / 奶油色 · 海报大字叠实拍",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/magnific/status/2103889116022931629",
    sourceAuthor: "@magnific",
    sourcePlatform: "X",
    sourceImpressions: 10798,
    sourceStats: { asOf: "2026-09-27", likes: 108, reposts: 11, bookmarks: 80 },
    formats: ["产品广告"],
    hook: {
      structure: "辣酱将滴 → 控制室警报 → 全力抢险 → 咬一口破防 → 任务完成 → 产品定版",
      opening: "第 0 秒是极近的慢镜头：红色辣酱瓶斜在一只脆皮塔可上方，瓶口一滴辣酱正在成形，约 3s 巨大的红字「T-MINUS 3」铺满背景。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 5s 切到复古控制室，留小胡子的主管起身拍下红色按钮，约 7s 满屏「SPICE LEVEL / CRITICAL」；约 10s 巨型风扇全速转动，约 12s 闸门放水，约 13s 红字「EMERGENCY」横扫画面。", at: 5 },
        { title: "包袱", text: "约 15s 那一滴终于落到塔可上；约 17s 卷发小哥咬一口、若无其事地嚼，约 19s 突然瞪大眼睛，叠上「too MUCH」。", at: 15 },
        { title: "结尾怎么收", text: "约 20s 控制室欢呼、纸片乱飞，约 23s 小哥含泪竖大拇指，「MISSION ACCOMPLISHED」配手写「barely」；约 25s 钴蓝底上单瓶定版，身后是巨大品牌字，下方「ONE DROP. FULL ALERT.」。", at: 20 },
      ],
      copyThis: "把「吃辣」这件小事当成灾难片来拍：每镜都配一句铺满全屏的大字，四角加小编号标签，全程只用 3 种颜色，最后回到一瓶酱的定版。",
      approx: true,
    },
    tags: [
      "30秒 · 产品广告",
      "16:9 横屏",
      "Claude Opus 5.5 → Magnific",
      "简版创意 + 4 张风格参考 → 6 镜提示词",
      "辣酱 · 控制室警报喜剧",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：一句创意 + 4 张风格参考图交给大模型",
        description:
          "Magnific 给 Claude Opus 5.5 和 GPT-6 Astra 的是同一句简版创意：30 秒辣酱广告，一滴辣酱落到塔可上，引发控制室紧急事态，动作片式幽默、原创品牌和动态图形，英文字幕、无对白，参考但不照抄。另附 4 张风格参考图，它们的出图提示词写在帖子每张图的 ALT 文字里，见「参考图」卡片。",
      },
      {
        number: 2,
        title: "第二步：让模型写出 6 镜分镜提示词",
        description:
          "Claude 把品牌定为 MAYDAY，写成 6 个 5 秒镜头（T-MINUS 3 → SPICE LEVEL CRITICAL → EMERGENCY → TOO MUCH → MISSION ACCOMPLISHED → ONE DROP. FULL ALERT.）。每镜都重复同一段风格描述（电影机、光晕、胶片颗粒、钴蓝 / 信号红 / 奶油色）、四角小标签文字、一句满屏大字和声音，并写明无对白、无黑边。",
      },
      {
        number: 3,
        title: "第三步：在 Magnific 里逐镜生成并拼成 30 秒",
        description:
          "把下方完整提示词按镜头在 Magnific 里生成。帖子没说 Magnific 内部具体用了哪个视频模型。成片左上角有「Claude Opus 5.5」标签、右上角有 Magnific 水印；同线程还有 GPT-6 Astra 版（品牌 GOTA），可以对比同一个创意的不同写法。",
      },
    ],
    references_detail: [
      {
        id: "magnific-ref-01-stands-nugget",
        number: "1",
        title: "看台观众与蘸酱的她 · 出图提示词（图片 ALT 文字）",
        subtitle: "作者原图 2688×1520 · 编辑风看台群像",
        image: "/tutorials/magnific-mayday-hot-sauce-claude-opus/refs/ref-01-stands-nugget.jpg",
        prompt: `Wide 16:9 editorial campaign photo: ten stylish spectators packed in three tiers of outdoor stands, all looking right at an off-frame match. Hazy pale blue seaside sky, warm golden-hour sun. Preppy vintage tennis-club wardrobe in cream, butter yellow, forest green, navy and sky blue: cable-knit cricket sweaters and vests with striped V-necks, polo collars, green Harrington jacket, yellow windbreaker, sweater tied over shoulders, white bucket hat, white cap, navy cap. Almost all wear retro tortoiseshell or black sunglasses. Diverse ages and ethnicities, including a mustached man, a woman with a dark bob and gold hoops, a bearded older man with salt-and-pepper hair, a blonde with a scrunchie ponytail, a grey-haired woman with a low bun. Everyone serious except a curly red-haired woman in a bright turquoise terry zip jacket, eyes closed, blissfully dipping a chicken nugget into a ketchup cup. Medium format film, soft grain, faded warm grade.`,
      },
      {
        id: "magnific-ref-02-office-football",
        number: "2",
        title: "办公室走廊踢球 · 出图提示词（图片 ALT 文字）",
        subtitle: "作者原图 2688×1520 · 35mm 低机位广角 · 注意：这段 ALT 正好 1000 字符（X 上限），「holding a roll」后面接的是另一段描述，原文不完整",
        image: "/tutorials/magnific-mayday-hot-sauce-claude-opus/refs/ref-02-office-football.jpg",
        prompt: `Wide 16:9 editorial fashion photo on 35mm film, low wide-angle from floor level, slight Dutch tilt. Late-90s office hallway: beige walls, drop ceiling, grey filing cabinets, burnt orange carpet. Left foreground, a man with long dark wavy hair kicks a football mid-strike, leaning back, leg toward camera; royal blue sleeveless jersey with white trim, red shorts with white stripes, white crew socks, chunky white retro sneakers. The ball flies, slightly blurred. Back right, an open steel elevator is the goal: a dark-haired goalkeeper crouches inside in ready stance, white gloves, white retro football jersey, blue shorts, sneakers, eyes on the ball. Middle background, a couple leans on the wall chatting, ignoring it: a man in a mint-green oversized V-neck sweater and grey trousers, a blonde woman with messy updo in black turtleneck, black pleated mini skirt and heels holding a roll adults in an office space, one person kicks a soccer ball while another prepares to catch it near an elevator.`,
      },
      {
        id: "magnific-ref-03-poster-todo-cambia",
        number: "3",
        title: "「TODO CAMBIA」字效海报 · 出图提示词（图片 ALT 文字）",
        subtitle: "作者原图 2048×1152 · 橙色压字 + 草坡照片",
        image: "/tutorials/magnific-mayday-hot-sauce-claude-opus/refs/ref-03-poster-todo-cambia.jpg",
        prompt: `Wide 16:9 editorial poster. Background: 35mm film photo of a vast, gently curved green grassy hill under a deep blue sky with wispy cirrus clouds. A tiny lone man stands on the crest at the right third, looking down: red knit sweater, off-white trousers, navy cap, hands in pockets, dwarfed by empty space. Over the photo, a massive condensed all-caps grotesque sans-serif headline fills the canvas edge to edge in three tightly stacked lines: "TODO CAMBIA" / "CUANDO" / "LO MIRAS BIEN". Letters in warm saturated orange with crumpled paper risograph texture, white speckles, scuffed ink dropouts and slight transparency so sky and grass show through. A loose hand-drawn cream marker loop circles "TODO" and the "C" of "CUANDO". Tiny centered white spaced-out caps at the bottom: "OTRA PERSPECTIVA". Crinkled paper overlay, film grain, muted analog colors, faded 90s print feel. Bold graphic design meets documentary photography.`,
      },
      {
        id: "magnific-ref-04-poster-otra-mirada",
        number: "4",
        title: "「OTRA MIRADA」字效海报 · 出图提示词（图片 ALT 文字）",
        subtitle: "作者原图 2048×1152 · 动态模糊奔跑 + 奶油色粗圆体",
        image: "/tutorials/magnific-mayday-hot-sauce-claude-opus/refs/ref-04-poster-otra-mirada.jpg",
        prompt: `Wide 16:9 cinematic poster. Background: heavily motion-blurred photo of a woman running in profile left to right along a beach at golden hour, long-exposure panning shot, her silhouette smeared into horizontal streaks of warm orange and dark brown with ghosted trails. Deep teal-green sky in the upper two thirds, a pale blurred light band across the middle, burnt orange sand below, dark vignette. Heavy analog grain, saturated 70s color grade. Typography: ultra-bold wide rounded heavy sans-serif in cream, all caps, tight tracking. Upper left: "OTRA" / "MIRADA" stacked. Lower right: "MISMO" / "MUNDO" stacked, overlapping the runner's legs. Small spaced-out cream caps top right: "CAMBIA LA PERSPECTIVA". Small spaced-out cream caps bottom left: "TODO EMPIEZA EN CÓMO LO VES." Sharp clean type against the dreamy blurred photo, editorial sports-campaign aesthetic.`,
      },
    ],
    storyboard: [
      { number: 1, description: "0–5s 极近慢镜头：红色辣酱瓶斜在塔可上方，一滴辣酱成形、颤动、滴落，背景铺满红字「T-MINUS 3」。" },
      { number: 2, description: "5–10s 复古 70 年代控制室，红色连体服操作员，留小胡子的主管拍下红色按钮，红色警灯转起，满屏「SPICE LEVEL / CRITICAL」。" },
      { number: 3, description: "10–15s 动作蒙太奇：巨型风扇全速转动、钢闸门放出水墙、操作员双手拉杆，红字「EMERGENCY」横扫，叠红色手写字。" },
      { number: 4, description: "15–20s 辣酱落在塔可上，卷发红运动服小哥咬一口，先淡定后瞪眼、流汗、头发被风吹起，急推脸部，叠「too MUCH」。" },
      { number: 5, description: "20–25s 快切：控制室欢呼拥抱、纸片乱飞，主管擦汗，小哥含泪竖大拇指，「MISSION ACCOMPLISHED」配手写「barely」。" },
      { number: 6, description: "25–30s 钴蓝底单瓶产品定版，身后巨大红色品牌字，下方奶油色「ONE DROP. FULL ALERT.」。" },
    ],
    constraints:
      "每镜都重复同一段风格描述：电影机拍摄、光晕、暖调胶片颗粒、钴蓝 / 信号红 / 奶油色、海报式大字叠实拍、四角小标签；画面里只能有一瓶酱，不出现其他品牌；无对白，只有音效和音乐；无黑边、无强暗角；第 5 镜用全画幅，不分屏、不用圆形画框。与成片不符：定版的品牌字和瓶身标签是「MAYAM」，不是提示词写的「MAYDAY」；「EMERGENCY」上方的手写字不是提示词写的「obviously」，拼写不清；第 5 镜四角标签的编号有错（左下写成 SP-03）。缺口：帖子没说 Magnific 内部用的是哪个视频模型；4 张参考图是给大模型的风格参考，帖子没说是否直接喂给了视频模型；参考图 2 的 ALT 正好 1000 字符，原文不完整；音频没有转录。",
    video_prompt: {
      title: "Claude Opus 5.5 写的 6 镜视频提示词",
      subtitle: "30s · 16:9 · 6 × 5s · 英文完整提示词（线程第 3 帖长文）",
      content: `SHOT 1 · T-MINUS 3 · 0–5s
Shot on cinema camera, halation effect, warm analog film grain, saturated cobalt blue, signal red and butter cream palette, editorial poster typography layered over live action, tiny uppercase micro labels in the four corners reading “SP-01”, “HOT SAUCE”, “LEVEL 5”, “EST. 2026”. Extreme macro slow motion on a clean cream kitchen counter against a cobalt blue wall: a glossy red glass bottle labeled MAYDAY tilts over a crispy taco; one bright red drop forms at the tip, trembles and detaches. Giant full-bleed tightly tracked bold red grotesk uppercase text “T-MINUS 3” fills the whole frame behind the drop, edge to edge. No other bottles, no other brands. No dialogue, no speech, only a deep trailer boom and a ticking clock. No black borders, no strong vignette.

SHOT 2 · SPICE LEVEL CRITICAL · 5–10s
Shot on cinema camera, halation effect, warm analog film grain, saturated cobalt blue, signal red and butter cream palette, editorial poster typography layered over live action, tiny uppercase micro labels in the four corners reading “SP-02”, “CONTROL”, “ALERT”, “02/06”. Wide shot of a retro 70s mission control room with cobalt blue walls and cream consoles, operators in red jumpsuits with headsets. A serious mustached chief in a cream uniform rises in slow motion and slams a giant red button, red beacons start spinning. Huge wide rounded extra-bold butter cream words “SPICE LEVEL” stacked over giant bold red grotesk uppercase “CRITICAL” spanning the full frame width. No dialogue, no speech, only an alarm siren. No black borders, no strong vignette.

SHOT 3 · EMERGENCY · 10–15s
Shot on cinema camera, halation effect, warm analog film grain, saturated cobalt blue, signal red and butter cream palette, editorial poster typography layered over live action, tiny uppercase micro labels in the four corners reading “SP-03”, “FANS ON”, “GATES OPEN”, “03/06”. Fast action montage with crash zooms and horizontal motion blur streaks: enormous industrial fans spin up to full speed, then heavy steel floodgates slide open and release a powerful wall of cool water, an operator in a red jumpsuit pulls a big lever with both hands. Giant full-bleed bold red grotesk uppercase text “EMERGENCY” slides across the frame, with a flowing red handwritten script word “obviously” overlaid on top. No numbers, no gauges. No dialogue, no speech, only roaring fans, rushing water and siren. No black borders, no strong vignette.

SHOT 4 · TOO MUCH · 15–20s
Shot on cinema camera, halation effect, warm analog film grain, saturated cobalt blue, signal red and butter cream palette, editorial poster typography layered over live action, tiny uppercase micro labels in the four corners reading “SP-04”, “IMPACT”, “CONFIRMED”, “04/06”. Clean kitchen with a cobalt blue wall and cream counter, nothing else on the counter. The red drop lands on the taco with a tiny splash in slow motion. A young man with curly hair in a red tracksuit picks up the taco and takes a big bite, chews calmly, then his eyes widen dramatically, a bead of sweat rolls down, a strong wind blows his hair back. Crash zoom into his face. Huge wide rounded extra-bold butter cream words “too” stacked over giant bold red uppercase “MUCH” filling the frame. No dialogue, no speech, only a deep bass hit then silence. No black borders, no strong vignette.

SHOT 5 · MISSION ACCOMPLISHED · 20–25s
Shot on cinema camera, halation effect, warm analog film grain, saturated cobalt blue, signal red and butter cream palette, editorial poster typography layered over live action, tiny uppercase micro labels in the four corners reading “SP-05”, “STATUS”, “STABLE”, “05/06”. Fast rhythmic cuts: the control room operators cheering and hugging as papers fly through the air, the mustached chief calmly wiping his brow with a handkerchief, the young man in the red tracksuit smiling with teary eyes and giving a thumbs up. Full-frame images, no split screen, no circular frames. Giant full-bleed bold red grotesk uppercase text “MISSION ACCOMPLISHED” across the frame with a flowing red script word “barely” overlaid on top. No dialogue, no speech, only a triumphant brass hit. No black borders, no strong vignette.

SHOT 6 · ONE DROP. FULL ALERT. · 25–30s
Shot on cinema camera, halation effect, warm analog film grain, saturated cobalt blue, signal red and butter cream palette, editorial poster typography layered over live action, tiny uppercase micro labels in the four corners reading “SP-06”, “HOT SAUCE”, “ONE DROP”, “06/06”. Clean product packshot: a single glossy red glass MAYDAY hot sauce bottle stands centered on a smooth cobalt blue background with a soft shadow, one red drop glistening at its tip, a light horizontal motion blur streak passes across. Behind it, a giant full-bleed tightly tracked bold red grotesk uppercase wordmark “MAYDAY” fills the entire frame edge to edge, with a small butter cream uppercase tagline underneath: “ONE DROP. FULL ALERT.” Only one bottle, no other brands. No dialogue, no speech, only a short siren blip and final beat. No black borders, no strong vignette.`,
    },
  },
  // 提示词回复帖: https://x.com/iamsofiaijaz/status/2103686813600944332
  {
    id: "iamsofiaijaz-museum-steps-frozen-crowd-seedance",
    title: "博物馆台阶上的静止人群 · Seedance 2.5",
    subtitle: "X · @iamsofiaijaz · Seedance 2.5 · OpenArt · 30秒 · 16:9",
    description:
      "Seedance 2.5 两镜超现实短片：女主穿过台阶上静止的古装人群站到正中，下一镜全场疯狂甩身、她纹丝不动。",
    video: "/tutorials/iamsofiaijaz-museum-steps-frozen-crowd-seedance/demo-web.mp4",
    poster: "/tutorials/iamsofiaijaz-museum-steps-frozen-crowd-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "超现实",
    shots: 2,
    references: 0,
    model: "Seedance 2.5（OpenArt）",
    style: "写实古装群演 · 静止人群与失控人群 · 冷调胶片感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/iamsofiaijaz/status/2103685419695280351",
    sourceAuthor: "@iamsofiaijaz",
    sourcePlatform: "X",
    sourceImpressions: 1251,
    sourceStats: { asOf: "2026-09-26", likes: 22, reposts: 0, bookmarks: 10 },
    formats: ["角色表演", "电影叙事"],
    hook: {
      structure: "近景抽烟 → 拉远穿过静止人群 → 全场失控而她不动",
      opening: "第 0 秒是戴细框眼镜的女子正脸大特写，叼着烟吸一口，约 2–3s 把烟雾直接吐向镜头，糊住整个画面。",
      openingAt: 0,
      beats: [
        { title: "静止人群揭晓", text: "约 3–6s 烟散开、镜头后拉，身后台阶上挤满红军装、芭蕾舞裙、胸甲的古装人群，全部一动不动盯着镜头。", at: 3 },
        { title: "过程怎么推进", text: "约 6–13s 她转身背对镜头，从人群缝里侧身挤上台阶，没人让路，走到正中后回身站定。", at: 6 },
        { title: "几段怎么切换", text: "约 14s 硬切到远景：全场人群突然前后弯腰甩身、此起彼伏，镜头一路拉远到整座博物馆立面，只有正中的她站着不动。", at: 14 },
      ],
      copyThis: "第一镜让所有人绝对静止、只有主角在动；第二镜反过来，所有人失控、只有主角不动——同一套站位，动静对调。",
      approx: true,
    },
    tags: [
      "30秒 · 两镜",
      "16:9 横屏",
      "Seedance 2.5",
      "OpenArt",
      "静止人群",
      "动静对调",
    ],
    steps: [
      {
        number: 1,
        title: "准备主角参考图，写死所有群演站位",
        description:
          "两段提示词都以「参考图里的角色就是主角，脸、发型、服装每一帧保持一致」开头（作者没有公开这张参考图，跟做需自备）。然后按前排、第二排、第三排从左到右逐个写群演装扮，并把第三排正中标成主角的站位；第二镜要求「完全同一批人、同一位置」。",
      },
      {
        number: 2,
        title: "SHOT 1（14 秒）：全场静止，只有主角移动",
        description:
          "时间轴：0–3s 正脸特写抽烟吐烟；3–6s 烟散镜头后拉，露出身后静止的人群；6–7s 转身；7–12s 以正常步速侧身挤过人群上台阶（写明路线经过哪些人）；12–14s 到达正中、回身站定。反向约束：人群绝不移动、不让路、不留通道，主角不能慢动作。",
      },
      {
        number: 3,
        title: "SHOT 2（15 秒）：全场失控，只有主角不动",
        description:
          "第一帧就是远景且人群已在剧烈甩身：头后仰到底 → 上身猛折到膝盖 → 再弹回，循环不停，不同区块错开相位形成波浪；0–10s 镜头后拉上升到整座立面，10–15s 锁定。主角全程站在正中不动。两镜都要求无音乐，只留环境声。两段分别生成后在第一次动作处硬切拼接。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "SHOT 1（约 0–14s）：正脸特写吸烟吐烟 → 后拉露出台阶上静止的古装人群 → 转身挤过人群上台阶 → 在第三排正中回身站定。" },
      { number: 2, description: "SHOT 2（约 14–30s）：硬切远景，全场人群前后弯腰甩身、此起彼伏，镜头拉远上升到整座博物馆立面后锁定，主角在正中始终不动。" },
    ],
    constraints:
      "主角脸、发型、服装按参考图全程一致；群演站位、服装、顺序两镜完全相同；第一镜人群绝对静止、不让路、不留通道，主角正常步速不慢动作；第二镜人群全程剧烈甩身不停、不整齐划一，主角不动不跳舞；写实真人质感，禁止油画/插画/CGI/蜡像感；无音乐、无字幕水印。缺口：作者未公开主角参考图；成片人群以重复的红军装、芭蕾裙、胸甲为主，提示词里的名画人物基本认不出；音频未转录。",
    video_prompt: {
      title: "静止人群两镜 · Seedance 2.5 提示词",
      subtitle: "SHOT 1 14s + SHOT 2 15s · 16:9 · Seedance 2.5 on OpenArt · 需主角参考图 · 英文完整提示词（作者楼中楼）",
      content: `=== SHOT 1 — 14 SECONDS ===
Live-action film footage from a period drama set. ARRI Alexa, 50mm spherical lens,
natural overcast daylight, cool desaturated grade, 35mm film grain. Real
photography of real human beings — visible skin pores and texture, stubble, fine
flyaway hairs, real catchlights in the eyes, subsurface light through ears and
fingers, natural blemishes and asymmetry, real fabric weave and wrinkles. A
photograph of real actors on a real location. Not a painting, not a render, not an
illustration.
The character in the reference image is the hero — keep their face, hair and
outfit exactly as shown, consistent in every frame.
LOCATION: A grand neoclassical museum façade — tall columns, triangular pediment,
arched doorway — above a wide grey stone staircase.
FIXED CAST AND BLOCKING (identical positions in every frame, never rearranged).
Hundreds of costumed background actors — ordinary real people, working actors and
extras, dressed by a wardrobe department in screen-accurate historical costume,
each styled to resemble a figure from a famous painting. They stand shoulder to
shoulder in tight rows filling the staircase edge to edge, only body-width gaps
between them, no aisle, no cleared path:
FRONT ROW, left to right: an elderly actress in a full black mourning dress and
white lace cap · a ballet dancer in a white tulle tutu and black ribbon choker · an
actor in a black suit and red tie with a bowler hat and a real green apple hanging
on a fine wire in front of his face as a practical prop · a gaunt actor with a real
red beard, straw hat and worn blue workman's jacket · a stunt performer in real
gilded plate armor.
SECOND ROW, left to right: a heavyset bearded actor in a gold-embroidered doublet,
fur collar and flat jewelled cap · an actress in a dark green-brown Renaissance
gown and sheer veil, hands folded, faint closed-lipped smile · an actress in a
yellow bodice, blue apron and white linen cap.
THIRD ROW, left to right: an actress in a red embroidered Mexican dress with fresh
flowers braided into her hair and strong dark brows · [THE HERO'S MARK — dead
center] · an actor in a bicorne hat and blue and white military uniform.
BEHIND THEM, hundreds deep: women in crimson turbans and white linen bonnets, men
in black coats with starched white ruffs, a young actress in a blue and gold
headwrap with a single pearl earring, rows of men in Edwardian tweed.
Every face is a real human face with its own bone structure, weight and age.
Nobody's skin is smooth or flat.
TIMING:
0:00–0:03 — CLOSE-UP on the hero's face filling the frame, facing camera front-on,
standing at the bottom of the steps. Background soft and unreadable. They take a
slow drag from a cigarette, lower it, and exhale a plume of smoke across the lens.
0:03–0:06 — The camera smoothly PULLS BACK and widens as the smoke clears,
revealing the hundreds of costumed figures packed on the staircase behind and
around the hero — completely frozen, statue-still, unblinking, staring into camera.
Settles into a medium shot, hero waist-up, crowd sharp and clearly visible behind.
0:06–0:07 — The hero turns around, putting their back to camera.
0:07–0:12 — They walk up the steps at a NORMAL, BRISK WALKING PACE — natural
real-time speed. They squeeze between the frozen bodies, turning their torso to
slip through, brushing shoulders. Their route: up between the ballerina in the
white tutu and the man with the green apple in front of his face, past the
gold-doubleted king on their left and the woman in the green-brown Renaissance gown
on their right, brushing the gilded armor as they pass. Nobody steps aside for
them. Nobody moves.
0:12–0:14 — They arrive at their mark, dead center of the third row, with the
woman in the red embroidered Mexican dress on their left and the man in the bicorne
hat on their right. They stop and turn back around to face camera. Hold. The hero
motionless, surrounded on all four sides, the crowd still completely frozen. END.
Sound: no music, no soundtrack. Only wind across stone and shoes on the steps.
DO NOT include any of the following. Nobody may look painted, illustrated, drawn,
brushstroked, flat, 2D, smoothed, airbrushed, waxy, plastic, doll-like, CGI,
rendered, cartoon or anime. No canvas texture, no brushstrokes, no oil-paint sheen,
no picture frames. The crowd must not move at all in this shot and must not change
position, costume or order. The crowd must not part, form an aisle, or leave empty
space around the hero. The hero must not be in slow motion or drift slowly. No
cuts, no camera shake, no morphing faces, no text, no watermark.
=== SHOT 2 — 15 SECONDS — CUT ON THE FIRST MOVE ===
Live-action film footage from a period drama set. ARRI Alexa, 50mm spherical lens,
natural overcast daylight, cool desaturated grade, 35mm film grain. Real
photography of real human beings — visible skin pores and texture, stubble, fine
flyaway hairs, real catchlights in the eyes, natural blemishes and asymmetry, real
fabric weave and wrinkles. Not a painting, not a render, not an illustration.
The character in the reference image is the hero — identical face, hair and outfit
to the previous shot.
LOCATION: The same grand neoclassical museum façade — tall columns, triangular
pediment, arched doorway — above the same wide grey stone staircase.
FIXED CAST AND BLOCKING — exactly the same people in exactly the same positions as
before, nobody added, removed or rearranged. Hundreds of costumed background actors
— ordinary real people in screen-accurate historical costume, each styled to
resemble a figure from a famous painting — standing shoulder to shoulder in tight
rows filling the staircase edge to edge, only body-width gaps, no aisle:
FRONT ROW, left to right: an elderly actress in a full black mourning dress and
white lace cap · a ballet dancer in a white tulle tutu and black ribbon choker · an
actor in a black suit and red tie with a bowler hat and a real green apple hanging
on a fine wire in front of his face · a gaunt actor with a real red beard, straw hat
and worn blue workman's jacket · a stunt performer in real gilded plate armor.
SECOND ROW, left to right: a heavyset bearded actor in a gold-embroidered doublet,
fur collar and flat jewelled cap · an actress in a dark green-brown Renaissance gown
and sheer veil · an actress in a yellow bodice, blue apron and white linen cap.
THIRD ROW, left to right: an actress in a red embroidered Mexican dress with fresh
flowers in her hair · THE HERO, dead center · an actor in a bicorne hat and blue and
white military uniform.
BEHIND THEM, hundreds deep: women in crimson turbans and white linen bonnets, men
in black coats with starched white ruffs, a young actress in a blue and gold
headwrap with a single pearl earring, rows of men in Edwardian tweed.
TIMING:
0:00 — Open on a WIDE SHOT of the full façade and the entire staircase, already in
motion. On the very first frame the whole crowd is mid-convulsion. No build-up, no
lead-in, nobody standing still.
0:00–0:10 — The crowd performs a wild, continuous, full-body rolling motion. The
cycle: heads thrown ALL THE WAY BACK, chins pointed up at the sky, spines arched
backward — then the entire torso whips forward and folds almost double at the hips,
heads hanging down near their knees, hair and hats flying — then the body unrolls
back up and the head snaps back again, chin to the sky. Over and over, without
pause, never resting at neutral. Arms hang loose and swing and flail with the
momentum. Loose, rubbery, boneless, possessed. Different sections of the staircase
are out of phase, so one block is folded double while the block beside it is arched
back with heads up, and the motion ripples across the crowd. Meanwhile the camera
pulls back and rises slightly, widening to take in the whole façade.
0:10–0:15 — The camera settles and holds locked off. The crowd keeps convulsing at
full intensity to the last frame. The hero has not moved once — standing relaxed and
unbothered at the dead center, facing camera, hands down, not dancing, not bending,
not reacting.
Sound: no music, no soundtrack. Only fabric snapping, armor rattling, breath and
shoes scuffing stone.
DO NOT include any of the following. Nobody may look painted, illustrated, drawn,
flat, 2D, smoothed, waxy, plastic, CGI, rendered, cartoon or anime. Nobody may
change position, costume or order from the previous shot. The crowd must never bow,
curtsy, nod, greet, dip gently, bend shallowly, keep their heads level, move
stiffly, or move in robotic unison, and must never stand still. The hero must not
dance, bend or move, must not stand off to one side or at the edge of frame, and
must not be in close-up. The crowd must not part, form an aisle, or leave empty
space around the hero. No slow motion, no cuts within the shot, no camera shake, no
morphing faces, no text, no watermark.`,
    },
  },
  // 提示词回复帖: https://x.com/aimikoda/status/2103512353920754134
  {
    id: "aimikoda-sky-duel-seedance-2-5",
    title: "红发双刀 vs 单刀武士 · 云端空战剑斗 · Seedance 2.5",
    subtitle: "X · @aimikoda · Seedance 2.5 · 30秒 · 16:9",
    description:
      "Seedance 2.5 二次元空战剑斗：双刀红发剑士与单刀武士六镜追打，逆光剪影与彩色近身缠斗交替切换。",
    video: "/tutorials/aimikoda-sky-duel-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/aimikoda-sky-duel-seedance-2-5/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "手绘动漫",
    shots: 6,
    references: 2,
    model: "Seedance 2.5",
    style: "手绘厚涂二次元 · 高空追逐剑斗 · sakuga 作画",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/aimikoda/status/2103512083778216062",
    sourceAuthor: "@aimikoda",
    sourcePlatform: "X",
    sourceImpressions: 2508,
    sourceStats: { asOf: "2026-09-26", likes: 51, reposts: 0, bookmarks: 27 },
    formats: ["电影叙事", "角色表演"],
    hook: {
      structure: "剪影追击 → 彩色近身缠斗 → 剪影回收拉远",
      opening: "第 0 秒就是淡蓝天空里两道逆光黑剪影对冲：长发双刀的一方从左上俯冲，单刀武士从右下迎上，刀已经碰在一起——没有铺垫直接开打。",
      openingAt: 0,
      beats: [
        { title: "剪影追击怎么推进", text: "约 0–10s 全程逆光剪影，镜头横向跟拍两人在空中追砍、翻滚、互相绕到身后，只靠轮廓和刀线读动作。", at: 3 },
        { title: "转彩色近身缠斗", text: "约 10.5s 突然切进彩色近景：红发 Erza 双刀与棕衣 Saito 贴身交错，约 15s 刀刃相撞迸出火花，之后连续翻身、下坠、换位。", at: 10.5 },
        { title: "结尾怎么收", text: "约 26s 回到剪影对冲，约 27.5s 猛然拉远到云海全景：两条细长的刀痕弧线划过天空，两人变成小黑点继续飞开。", at: 27.5 },
      ],
      copyThis: "六镜都写清「谁从哪条路线逃、谁封住哪个出口」，再用一个开场同构的大全景收尾：两道交叉刀痕把天空「划开」。",
      approx: true,
    },
    tags: [
      "30秒 · 六镜空战",
      "16:9 横屏",
      "Seedance 2.5",
      "双角色参考图",
      "Midjourney 角色",
      "sakuga 剑斗",
    ],
    steps: [
      {
        number: 1,
        title: "先准备两张角色参考图，只借外观和画风",
        description:
          "作者用自己引用帖里 Midjourney v8.2 出的两张角色图：@[char1 ref] = Erza（红发、双刀），@[char2 ref] = Saito（单刀武士）。提示词第一段就声明：参考图只提供外观、武器和厚涂动漫画风，不提供姿势——要求重新画全身动作轮廓，不要把参考图里的蹲姿平移或旋转。",
      },
      {
        number: 2,
        title: "设置 30 秒 · 六镜 · 16:9，把一句话剧情写在最前",
        description:
          "开头先交代总剧情：Saito 反复从 Erza 左臂下方钻到身后偷袭；被他踢翻后，Erza 故意露出同一个空档当诱饵，用第二把刀封住出口。再写统一的动作规范（实时 sakuga、不慢动作、不长时间对刀）和「刚好三把刀」的武器约束，防止刀凭空多出或脱手乱飞。",
      },
      {
        number: 3,
        title: "逐镜写时间段 + 路线，最后写画风与声音",
        description:
          "Shot 1–6 按 0-4s / 4-10s / 10-14s / 14-20s / 20-25s / 25-30s 写，每镜都说明镜头怎么跟（斜向追、横向跟拍、侧面全身、跟着下坠等）和两人路线变化；Shot 6 复刻开场斜向构图并拉远，交叉刀痕划破云层收尾。末段写淡蓝灰天空、手绘阴影、无能量光束，音效只要破空、布料、金属声，无对白、字幕、音乐。",
      },
    ],
    references_detail: [
      {
        id: "ref-aimikoda-erza",
        number: "1",
        title: "@[char1 ref] · Erza（红发双刀）",
        subtitle: "引用帖 Midjourney v8.2 · 第 3 张",
        image: "/tutorials/aimikoda-sky-duel-seedance-2-5/refs/ref-erza.jpg",
        prompt: `作者引用帖原文（只公开了风格参数，没有公开这张图的完整出图词）：
Midjourney v8.2

A new mix:
--sref 1448908625 3123598145 387469134 3207844525 --profile kxxcnp9 --stylize 250

And a tip for poses: Use keywords like mid-air action pose, mid-air combat pose for more dynamic poses.

注：作者未点名 4 张图中哪两张是 char1/char2；按提示词描述（Erza 双刀）与成片比对判定为第 3 张。`,
      },
      {
        id: "ref-aimikoda-saito",
        number: "2",
        title: "@[char2 ref] · Saito（单刀武士）",
        subtitle: "引用帖 Midjourney v8.2 · 第 2 张",
        image: "/tutorials/aimikoda-sky-duel-seedance-2-5/refs/ref-saito.jpg",
        prompt: `作者引用帖原文（只公开了风格参数，没有公开这张图的完整出图词）：
Midjourney v8.2

A new mix:
--sref 1448908625 3123598145 387469134 3207844525 --profile kxxcnp9 --stylize 250

And a tip for poses: Use keywords like mid-air action pose, mid-air combat pose for more dynamic poses.

注：作者未点名 4 张图中哪两张是 char1/char2；按提示词描述（Saito 单刀）与成片比对判定为第 2 张。`,
      },
    ],
    storyboard: [
      { number: 1, description: "0–4s 斜向追击大全景：Erza 从左上俯冲下劈，Saito 从右下迎上格挡，从她左臂下方滚到身后（成片此段为逆光剪影）。" },
      { number: 2, description: "4–10s 横向跟拍追砍：Erza 连续转胯挥刀，Saito 后仰闪避后反撩，再次钻到她左肩后方（仍为剪影）。" },
      { number: 3, description: "10–14s 侧面全身（成片约 10.5s 切进彩色）：Saito 从身后划破 Erza 左袖并侧踢她上臂，Erza 翻滚下坠、回头盯住对手收刀调整。" },
      { number: 4, description: "14–20s 跟随下坠：Erza 重复右手下劈、故意露出左臂下空档，Saito 走老路线时她用蓄着的左刀封住出口，刀刃相撞迸出火花（约 15s），他被迫螺旋翻身闪开。" },
      { number: 5, description: "20–25s 上升：Saito 改为头顶下劈，Erza 侧身滚到刀下、右刀引开、左刀横扫回程路线，擦碰后两人沿相反弧线分开又再次对冲。" },
      { number: 6, description: "25–30s 复刻开场斜向构图（成片回到剪影）：交叉一击后猛拉远到云海全景，两道细长刀痕交叉划过天空，两人仍在飞行中。" },
    ],
    constraints:
      "参考图只提供外观、武器与厚涂画风，不提供姿势；全程刚好三把刀（Erza 双手各一、Saito 右手一把、左手空着），刀柄不离手，禁止掉落/合并/复制/漂浮武器；实时 sakuga，禁慢动作、顿帧、对视僵持、长时间对刀、重复蹲姿轮廓；两人始终在空中移动，接触与踢击改变轨迹；淡蓝灰天空、漫射日光、手绘阴影，无能量光束或传送门；只要破空/布料/金属/踢击音效，无对白、字幕、屏幕文字或音乐。缺口：引用帖只公开 Midjourney 风格参数，未公开两张角色图出图词；char1/char2 对应哪张图为比对判断；成片开头与结尾的逆光剪影段提示词未要求，是模型自发处理。",
    video_prompt: {
      title: "Erza vs Saito 云端空战 · Seedance 2.5 提示词",
      subtitle: "30s · 16:9 · Seedance 2.5 · 2 张角色参考图 · 六镜英文完整提示词（作者楼中楼）",
      content: `Use @[char1 ref] for Erza's appearance and two swords; use @[char2 ref] for Saito's appearance and single katana. Both supply the painterly anime style, not poses. Animate new full-body silhouettes rather than sliding or rotating the reference crouches.

30 seconds, six shots. Saito repeatedly escapes under Erza's left arm to attack from behind. After his counter sends her tumbling, she uses that habit as bait and closes the exit with her second blade. Show this reversal through their changed routes.

Fast real-time sakuga combat: explosive travel, full torso and hip turns, extended limbs, deep foreshortening and directional smears resolving into clear anatomy at contact. Carry parries into displacement and recoveries into attacks. No slow motion, hit-stop, suspended staring, prolonged blade locks or repeated crouching silhouettes. Both fight while travelling through the sky; contacts, kicks and body rotation redirect their trajectories.

Exactly three swords: Erza holds one separate katana in each hand; Saito holds one in his right hand, his left hand empty for balance. Hilts stay in their owning hands. Erza's blades work independently, one engaging his weapon while the other threatens an opening. No dropped, merged, duplicated or floating weapons.

Shot 1, 0-4s. Wide diagonal chase, camera rushing alongside the bodies. Erza dives from upper left in a stretched silhouette, cutting down with her right blade while opening the left for a follow-up. Saito rises from lower right, deflects the first blade and rolls sideways beneath her left arm. He shoots out behind her left shoulder as she overshoots. Show the passage and changed positions together; both immediately twist back toward the fight.

Shot 2, 4-10s. Fast lateral tracking through a horizontal pursuit. Erza chases with alternating cuts, her hips turning each missed swing into the next. Saito arches backward beneath a sweep, stretches sideways through the opening and answers with a rising slash. Erza cartwheels her body over that counter and attacks out of the inversion. Saito again slips under her left arm and emerges behind her left shoulder, forcing her to reverse while he is already attacking. Long extended silhouettes snap into sharp folds.

Shot 3, 10-14s. Side-on full-body view preserving the escape direction. From behind her left shoulder, Saito slices the edge of Erza's left sleeve and drives a side kick into her upper arm. The kick throws her forward into an uncontrolled end-over-end tumble; he recoils into pursuit. Track her fall as she turns her head to keep him in view and pulls both swords close to recover. Her torn sleeve persists as the tumble carries directly into recovery.

Shot 4, 14-20s. Drop with Erza's tumble, following her turn back into Saito's approach. She repeats the right-hand descending attack and exposes the same space beneath her left arm, but keeps the left blade drawn back. Saito takes the familiar low route. Erza rotates her torso toward his destination and snaps the delayed left blade across his exit. He must parry immediately and corkscrew sideways out of the lane, legs flung overhead by his evasive rotation. Keep both bodies visible: she takes the route and forces him away, blades touching and separating instantly.

Shot 5, 20-25s. Rise with Saito's corkscrew as he changes tactics, extending out of it into an overhead descending slash. Erza rolls side-on beneath the attack, redirects his katana with her right sword and sweeps her separate left blade across his return path. He twists clear and answers on the way past; she ducks through the return without stopping. Glancing contact sends them apart on opposing arcs. Both convert separation straight into converging attacks across the cut.

Shot 6, 25-30s. Reprise the opening's wide diagonal geometry at greater speed. Saito commits to his crossing cut; Erza turns it aside with her right sword, then closes his familiar low escape with the delayed left. A violent crossing contact snaps directly into follow-through. Erza drives through the centre while Saito is forced to corkscrew off to the side. Pull wide with their separating bodies so the changed outcome reads before the effect: two thin brushlike slash trails cross through displaced cloud haze, briefly making the sky seem torn. End with both still travelling, hair and torn hems whipping.

Pale blue-gray sky, diffuse daylight, soft clouds, elastic sketch contours and compact hand-painted shading. Sparse thin arcs, silhouette smears and tiny flecks sourced from motion or contact. No energy beams or portals. Rapid air cuts, cloth snaps, dry steel cracks and a blunt kick impact; short sound tails keep the next attack audible. No dialogue, subtitles, on-screen text or music.`,
    },
  },
  {
    id: "just-sharon7-samurai-cat-reeds-seedance-2-5",
    title: "斗笠武士橘猫 · 芦苇荡斗忍者 · Seedance 2.5",
    subtitle: "X · @Just_sharon7 · Seedance 2.5 · TapNow · 30秒 · 16:9",
    description:
      "Seedance 2.5 写实武士猫动作短片：斗笠橘猫在芦苇荡连闪忍者、空中翻腾，落上小船后直立走向镜头。",
    video: "/tutorials/just-sharon7-samurai-cat-reeds-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/just-sharon7-samurai-cat-reeds-seedance-2-5/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实动作",
    shots: 8,
    references: 0,
    model: "Seedance 2.5（TapNow）",
    style: "写实毛发 · 日式芦苇荡武侠动作 · 史诗又荒诞",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Just_sharon7/status/2103453974980591826",
    sourceAuthor: "@Just_sharon7",
    sourcePlatform: "X",
    sourceImpressions: 38728,
    sourceStats: { asOf: "2026-09-26", likes: 413, reposts: 25, bookmarks: 77 },
    formats: ["电影叙事", "角色表演"],
    hook: {
      structure: "静态亮相 → 追打翻腾 → 落船直立收尾",
      opening: "开场是斗笠橘猫侧坐在青苔石上的近景，嘴里叼根芦苇、背着小武士刀，约 1–2 秒慢慢转头盯向镜头——一只猫摆出浪人架势，第一眼就好笑又带感。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 切远景，猫从大石后冲出；约 3–6s 在两个黑衣忍者之间高速穿梭，低机位贴地冲刺、刀光和泥土飞溅。", at: 2 },
        { title: "空中翻腾", text: "约 7–14s 钻进芦苇丛再跃起，仰拍逆天空螺旋翻滚，斗笠甩成圆盘飞离，忍者挥刀扑空。", at: 7 },
        { title: "结尾怎么收", text: "约 18–20s 最后一跳，俯拍落向湖面小船；约 20.7s 一群忍者慢动作扑来，猫落在船头后直立起来，一步步走向镜头推近，身后忍者落水。", at: 20.7 },
      ],
      copyThis: "开头用一个「静止转头盯镜头」的角色亮相，结尾用同样的正面凝视+慢慢推近收，中间才放高速动作。",
      approx: true,
    },
    tags: [
      "30秒 · 武士猫动作",
      "16:9 横屏",
      "Seedance 2.5",
      "TapNow",
      "纯文生视频",
      "芦苇荡忍者",
    ],
    steps: [
      {
        number: 1,
        title: "先写死角色与场景外观",
        description:
          "提示词第一段一次性锁定：橘猫白胸白爪、绿金色眼睛，戴编织斗笠，皮带斜背小武士刀，嘴里叼一根干芦苇；场景是起雾的日式湿地、阴天、高高的米色芦苇、青苔石，低饱和大地色、胶片颗粒、浅景深、快速动作带运动模糊。纯文生视频，作者没有用参考图。",
      },
      {
        number: 2,
        title: "按段落写动作顺序，每段一个画面任务",
        description:
          "依次写：石头上侧脸转头 → 从巨石后冲向镜头 → 两名黑衣忍者间穿梭 → 钻芦苇隧道后高跳旋转 → 空中翻腾与仰拍剪影 → 忍者挥刀、猫空中闪避 → 最后一跳落上小船、忍者慢动作扑来 → 船头低姿态盯镜头后走向镜头。每段一个清楚动作，Seedance 会按顺序剪成快切动作片。",
      },
      {
        number: 3,
        title: "最后统一写镜头语言和声音",
        description:
          "末段列出机位组合（定机位肖像、低机位跟拍、手持追逐感、低角度、俯拍翻滚、结尾慢推脸）、自然阴天光、雾、湿表面、写实毛发与布料、24fps 胶片感、略去饱和，基调「史诗又有点荒诞」；声音只要风声、芦苇沙沙、水花和远处刀声，无对白。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "约 0–2s 开场近景：斗笠橘猫侧坐青苔石上，叼芦苇、背刀，缓缓转头盯镜头。" },
      { number: 2, description: "约 2–3s 远景：猫从大青苔石后跃下冲向镜头，芦苇分开。" },
      { number: 3, description: "约 3–6.5s 两个黑衣蒙面忍者出现，猫在他们之间高速穿梭，低机位贴地冲过、泥土飞溅。" },
      { number: 4, description: "约 6.5–9s 猫压低身子钻进芦苇丛，再冲出跃起，背着刀在灰天前旋转。" },
      { number: 5, description: "约 9–13s 空中翻腾、螺旋跳，仰拍剪影；斗笠被甩离，忍者挥刀扑空。" },
      { number: 6, description: "约 14–17s 快切：猫在忍者腿间奔跑、滑铲，再次起跳。" },
      { number: 7, description: "约 18–22s 最后一跳，俯拍落向湖面小木船；一群忍者从芦苇岸边慢动作跃向小船。" },
      { number: 8, description: "约 23–30s 猫落在船头，随后后腿直立沿船中线一步步走向镜头，镜头慢推到脸，身后忍者落水。" },
    ],
    constraints:
      "纯文生视频，无参考图；角色外观一次写全（橘猫白胸白爪绿金眼、编织斗笠、斜背小武士刀、叼芦苇）；阴天雾气湿地、米色芦苇、低饱和、胶片颗粒、运动模糊；每段一个动作按顺序推进；结尾正面凝视+慢推脸；只要风声、芦苇、水花、远处刀声，无对白。缺口：作者未发布参考图（成片截帧不作参考图）；线程内无补充提示词；成片结尾猫为后腿直立行走，提示词未写直立；帖文称是『broken heart cat』系列续集，前作未收录。",
    video_prompt: {
      title: "斗笠武士猫 · Seedance 2.5 提示词",
      subtitle: "30s · 16:9 · Seedance 2.5 on TapNow · 纯文生视频 · 英文完整提示词（主帖原文）",
      content: `A cinematic 30-second action sequence in a misty Japanese wetland. An orange tabby cat with a white chest, white paws, and intense green-gold eyes wears a traditional woven straw conical kasa hat and a small katana strapped diagonally across its back with a leather harness. A thin stalk of dry reed hangs from its mouth like a toothpick. Overcast gray sky, dense tall beige reeds, moss-covered rocks, damp earth, light fog, muted earthy palette, filmic grain, shallow depth of field, motion blur on fast movement.

Opening close-up: the cat sits in profile on a mossy rock, hat low over its eyes, looking off to the side. It slowly turns its head to face the camera with a calm, knowing stare.

Cut to a tracking shot as the cat walks then sprints toward camera from behind a large mossy boulder, hat bouncing, tail up, reeds parting.

Two black-clad ninjas in full face-covering outfits appear in the reeds. The cat weaves between them at high speed, sword flashing, kicking up dirt and leaves. Low-angle ground-level shots with heavy motion blur as the cat dashes past.

The cat drops low and sprints through a dense bamboo-like reed tunnel, hat almost covering its face, then bursts out and leaps high into the air, body stretched, sword on its back, spinning against the gray sky.

Mid-air flips and corkscrew jumps through tall swaying reeds. One shot from below as the cat silhouettes against the overcast sky. Another as it twists and lands rolling on the wet grass.

A ninja swings a katana; the cat dodges in mid-air, hat flying slightly off-center. Quick cuts of the cat running, sliding, leaping again.

The cat soars high one last time and lands on the bow of a small dark wooden rowboat floating on a still, misty lake. Ripples spread. Several ninjas leap from the reed bank toward the boat in dramatic slow-motion, swords drawn, bodies mid-jump.

The cat lands in a low, wide stance on the wet wooden planks, front paws planted, staring straight into the camera. Hat slightly tilted. It then walks slowly and confidently forward along the center of the boat toward the lens, sword still on its back, expression unreadable and slightly menacing. Background reeds and fogged water. Distant ninjas splash or fall behind it.

Cinematic camera work throughout: mix of locked-off portraits, low tracking shots, handheld chase energy, dramatic low angles, overhead flips, and a final slow push-in on the cat’s face. Natural overcast lighting, soft fog, wet surfaces, photorealistic fur and fabric texture, 24fps film look, slightly desaturated, epic yet slightly absurd tone. No dialogue, only wind, rustling reeds, splashes, and distant sword sounds.`,
    },
  },
  // 查重别名(用户提交的视频提示词回复帖): https://x.com/husky__create/status/2103422119476641974
  // 分镜提示词回复帖: https://x.com/husky__create/status/2103422116876222566
  {
    id: "husky-minori-foods-tomato-baton",
    title: "一颗番茄的接力 · MINORI FOODS 食品企业广告",
    subtitle: "X · @husky__create · GPT Image 2.5 → Gemini Omni 1.1 Flash · 10秒 · 16:9",
    description:
      "GPT Image 2.5 出九宫格分镜、Gemini Omni 成片：一颗番茄从农田接力到餐桌的日本食品企业广告。",
    video: "/tutorials/husky-minori-foods-tomato-baton/demo-web.mp4",
    poster: "/tutorials/husky-minori-foods-tomato-baton/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "写实广告",
    shots: 9,
    references: 1,
    model: "GPT Image 2.5 → Gemini Omni 1.1 Flash",
    style: "日本食品企业广告 · 纪录片式暖调实拍质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/husky__create/status/2103422112312541342",
    sourceAuthor: "@husky__create",
    sourcePlatform: "X",
    sourceImpressions: 2679,
    sourceStats: { asOf: "2026-09-26", likes: 35, reposts: 2, bookmarks: 36 },
    formats: ["产品广告"],
    hook: {
      structure: "农田采摘 → 运输质检 → 厨房上桌 → 品牌字卡",
      opening: "第 0 秒是晨光番茄田的大远景，农夫抱着空木箱从两排番茄架中间朝镜头走来，镜头缓慢前推。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约每 1 秒一镜：约 1s 手摘番茄，约 2s 掌心番茄微距，约 3s 木箱放进白色冷藏车，约 4s 戴白手套在秤上质检，约 5s 厨师切番茄，约 6s 俯拍淋橄榄油的番茄意面。", at: 1 },
        { title: "结尾怎么收", text: "约 7s 一家三口吃饭、女儿咬一口意面；约 8.5s 石桌上的意面和整颗番茄，背景是黄昏农田，左侧淡入「一皿の向こう側。/ MINORI FOODS」。", at: 8.5 },
      ],
      copyThis: "同一颗番茄当「接力棒」串起 9 个 1 秒镜头，每镜只做一个动作，最后留左侧空白放标语。",
      approx: true,
    },
    tags: [
      "10秒 · 企业广告",
      "16:9 横屏",
      "GPT Image 2.5 → Gemini Omni 1.1 Flash",
      "九宫格分镜 → 成片",
      "番茄接力 · 食品农业",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：用 GPT Image 2.5 生成 3×3 九宫格分镜",
        description:
          "把「参考图」卡片里的完整分镜提示词（① GPT Image 2.5）贴进 GPT Image 2.5：一张 16:9 图里排 9 格，每格也是 16:9，象牙色细边、左上角白色编号 01–09。提示词写全了农夫、厨师、一家三口的外观，以及 01 晨光农田 → 09 品牌字卡的 9 个画面。",
      },
      {
        number: 2,
        title: "第二步：把分镜图 + 视频提示词交给 Gemini Omni 1.1 Flash",
        description:
          "上传九宫格分镜，贴下方完整视频提示词（② Gemini Omni 1.1 Flash）。它要求从左到右、从上到下读 Shot 01–09，每格还原成全屏实拍镜头，成片里绝不出现九宫格、边框和编号；镜头之间用干净硬切，禁止人或物变形过渡。",
      },
      {
        number: 3,
        title: "第三步：按时间轴锁节奏，声音一起生成",
        description:
          "视频提示词给每镜写了精确秒数（0.0–1.1s 农田 … 8.5–10.0s 品牌定帧），每镜只做一个动作；音乐（木吉他 + 钢琴 + 手鼓，约 92 BPM）、环境音、扫码「嘀」声、切菜声，以及约 0.5s 和 6.4s 两句日文女声旁白，都由 Gemini Omni 一并生成。结尾左侧留白放「一皿の向こう側。/ MINORI FOODS」。",
      },
    ],
    references_detail: [
      {
        id: "husky-minori-storyboard-9grid",
        number: "1",
        title: "九宫格分镜 · ① GPT Image 2.5 提示词",
        subtitle: "作者原图 1672×941 · 3×3 镜头 01–09",
        image: "/tutorials/husky-minori-foods-tomato-baton/refs/storyboard.jpg",
        prompt: `Create a production-ready photo storyboard for a 10-second corporate commercial for the fictional Japanese food and agriculture company “MINORI FOODS.”

CONCEPT

The central message is “Beyond Every Plate.”

Follow one perfectly ripe red tomato as a visual baton connecting a farmer’s harvest, refrigerated transportation, quality inspection, professional cooking and a family dinner table.

The commercial should communicate that one meal is made possible by the care and craftsmanship of many people, from the producer to the consumer.

STORYBOARD FORMAT

Create one landscape 16:9 image containing exactly nine storyboard panels.

Arrange the panels in a perfectly even 3-column × 3-row grid. Each individual panel must be composed as a cinematic horizontal 16:9 frame.

Use thin ivory-colored gutters between the panels.

Place small white panel numbers “01” through “09” in the upper-left corner of each panel, ordered from left to right, top row to bottom row.

Do not include captions, arrows, production notes, watermarks or additional logos.

Every panel must look like a high-quality photographic frame extracted from the same finished live-action commercial—not nine unrelated stock photographs.

VISUAL WORLD

The commercial begins at a quiet tomato farm in rural Japan, moves through a clean food quality-control facility and a professional restaurant kitchen, and ends at a warm contemporary family dining table.

Time progresses naturally from cool early-morning light to warm evening light.

The same ripe red tomato serves as the visual thread throughout the sequence.

Use a restrained color palette of natural leaf green, rich tomato red, earthy brown, stainless-steel silver, warm wood and clean off-white.

CHARACTER CONTINUITY

Farmer:

A Japanese man approximately 58 years old. He has a naturally sun-weathered face, short salt-and-pepper hair and a calm, sincere expression.

He wears the same dark indigo work shirt, beige work trousers and olive-green rubber boots in every relevant panel.

His face, hairstyle, body proportions, hands and clothing must remain consistent. He should look like a real working farmer rather than a fashion model.

Chef:

A Japanese woman approximately 34 years old. She has a natural, approachable face, minimal makeup and straight black hair tied in a neat low ponytail.

She wears the same clean white chef jacket in every kitchen scene. Preserve her face, hairstyle, physique and wardrobe.

Family:

A Japanese couple in their 30s and their elementary-school-age daughter. They live in a contemporary but warm and realistic home.

Their expressions should be subtle and natural, without exaggerated advertising smiles.

NINE STORYBOARD PANELS

01 — DAWN AT THE FARM

A wide environmental shot of a Japanese tomato farm at dawn.

Long rows of tomato plants extend toward distant low mountains. The low morning sun shines through the leaves, and a light mist remains between the rows.

The farmer walks toward the camera carrying an empty wooden harvest crate.

Use a cinematic wide composition that establishes the location and atmosphere.

02 — HARVEST

A medium close-up of the same farmer gently twisting one ripe red tomato from the vine.

Show his calm, focused expression, realistic leaves and warm backlight outlining his hands and face.

The image should capture one simple, precise harvesting action.

03 — THE TOMATO

An extreme macro photograph of the freshly harvested tomato resting in the farmer’s open palm.

Render tiny dew droplets, natural skin texture, subtle imperfections, the green calyx and the authentic texture of his working hands.

The tomato must look fresh, moist and completely photorealistic—not glossy plastic.

04 — REFRIGERATED DELIVERY

A low-angle close shot beside a small white refrigerated delivery van.

The farmer places a wooden crate filled with matching ripe tomatoes into the clean cargo area.

Show one controlled lifting-and-placing action. Do not display any existing company logos or vehicle branding.

05 — QUALITY CONTROL

Inside a modern and hygienic food quality-control facility.

White-gloved hands carefully inspect and weigh one tomato on a stainless-steel workstation. Include a realistic digital scale, a small lot-label scanner and clean food-processing equipment.

The scene should feel credible, practical and sanitary—not futuristic or science-fictional.

06 — PREPARATION

A close-up inside a professional restaurant kitchen.

The same female chef slices the tomato on a wooden cutting board using a stainless-steel chef’s knife.

Render the tomato flesh, seeds, moisture, juice and metal reflections precisely.

Her hands and fingers must be anatomically correct and positioned safely.

07 — PLATING

A top-down overhead food composition.

The chef finishes a simple, elegant tomato pasta dish with fresh basil and pours one thin stream of olive oil over the plate.

Show gentle steam, moist tomato pieces, the sheen of olive oil and refined but realistic restaurant presentation.

08 — THE DINNER TABLE

An intimate medium shot at a warm family dinner table.

The young daughter takes her first bite of the tomato pasta while her parents watch and smile naturally.

The plated tomato dish should remain clearly visible.

Capture a genuine moment of quiet happiness rather than an exaggerated commercial performance.

09 — FINAL BRAND FRAME

A premium food-advertising hero shot on a textured stone tabletop.

Place the finished tomato pasta, one whole ripe tomato and a few fresh green leaves on the right side of the frame.

Use a softly blurred evening farm landscape in the background.

Reserve generous clean negative space on the left side.

In the left-side negative space, display only the following exact text:

“一皿の向こう側。”

Below it:

“MINORI FOODS”

Use refined dark-brown Japanese Mincho-style typography for the Japanese copy and an elegant serif typeface for the company name.

Do not add any other words, claims or logos.

PHOTOGRAPHY AND LIGHTING

Ultra-photorealistic premium Japanese food advertising with warm documentary realism.

Use realistic 35mm and 50mm lens perspectives for people and locations, and a 90mm macro-lens look for the tomato, food and hands.

Use shallow depth of field where appropriate, smooth highlight roll-off and deep but readable shadows.

Lighting should progress naturally from fresh golden morning light at the farm to clean neutral light in the quality-control facility and warm evening light in the kitchen and home.

Preserve natural skin texture, fine food moisture, leaf veins, soil, wood grain, stainless steel and fabric detail.

Add subtle cinematic film grain.

Keep the color grading restrained and sophisticated.

CONTINUITY REQUIREMENTS

All nine panels must belong to the same visual story.

Maintain consistent character identities, clothing, tomato appearance, locations, lighting direction and photographic style.

Create visual rhythm by alternating wide shots, medium shots, macro details, process shots, overhead food photography, an emotional reaction and a final product hero frame.

Each panel should contain only one clearly readable action.

AVOID

Malformed hands or fingers, extra limbs, duplicated or fused tomatoes, inconsistent faces, changing wardrobe, plastic-looking food, excessive saturation, heavy orange color grading, artificial CGI glow, fantasy effects, unhygienic food handling, unsafe knife positions, futuristic holograms, object morphing, split screens inside individual panels, unwanted text, extra logos and watermarks.`,
      },
    ],
    storyboard: [
      { number: 1, description: "0–1s 晨光番茄田大远景，农夫抱空木箱走来，缓慢前推。" },
      { number: 2, description: "1–2s 中近景：农夫手轻轻拧下一颗红番茄。" },
      { number: 3, description: "2–3s 固定微距：番茄躺在农夫掌心，带露珠。" },
      { number: 4, description: "3–4s 低角度：农夫把一箱番茄放进白色冷藏车货厢。" },
      { number: 5, description: "4–5s 质检车间：白手套转动番茄放上不锈钢秤。" },
      { number: 6, description: "5–6s 厨房近景：女厨师在木砧板上切番茄。" },
      { number: 7, description: "6–7s 俯拍：橄榄油细流淋在罗勒番茄意面上。" },
      { number: 8, description: "7–8.5s 家庭晚餐：女儿吃一口意面，父母相视微笑。" },
      { number: 9, description: "8.5–10s 石桌上的意面与整颗番茄，背景黄昏农田，慢推，左侧字卡「一皿の向こう側。/ MINORI FOODS」。" },
    ],
    constraints:
      "九宫格只作参考：成片不得出现网格、边框、编号或拼贴；每格还原为全屏实拍镜头、干净硬切、禁止变形过渡；农夫（约58岁、靛蓝工作衫、米色裤、橄榄绿胶靴）贯穿 01–04，女厨师（约34岁、低马尾、白厨师服）贯穿 06–07；同一颗番茄做视觉锚点；每镜一个动作，禁止急推、快速环绕、延时、漂浮食材；色调叶绿/番茄红/土褐/不锈钢银/暖木/奶白，低饱和；左侧留白放「一皿の向こう側。/ MINORI FOODS」，不加其他文字。缺口：旁白音频未转录核对。",
    video_prompt: {
      title: "② Gemini Omni 1.1 Flash 视频提示词",
      subtitle: "10s · 16:9 · 上传九宫格分镜作参考 · 英文完整提示词（作者线程第 3 帖）",
      content: `Create an exactly 10-second, 16:9, ultra-photorealistic Japanese corporate commercial for the fictional food and agriculture company “MINORI FOODS.”

TITLE AND CENTRAL IDEA:
“Beyond Every Plate.”
Follow one ripe red tomato as a visual baton traveling from a Japanese farmer at dawn, through refrigerated delivery and careful quality control, into a restaurant kitchen, and finally to a family dinner table.

REFERENCE STORYBOARD:
Use the uploaded 3×3 storyboard as the strict visual reference for character identity, wardrobe, tomato appearance, locations, camera compositions, lighting, color palette and art direction.

Read the storyboard from left to right, top row to bottom row: Shot 01 through Shot 09.
The finished video must never display the full storyboard, grid, collage, split screen, ivory borders, frame numbers or production notes. Reconstruct every panel as a separate full-screen cinematic live-action shot.

Connect the scenes with clean editorial cuts. Never morph one person, object or location into another.

CONTINUITY:
The same Japanese farmer appears in Shots 01–04: approximately 58 years old, naturally sun-weathered face, short salt-and-pepper hair, dark indigo work shirt, beige work trousers and olive rubber boots.

The same Japanese female chef appears in Shots 06–07: approximately 34 years old, natural appearance, black hair tied in a low ponytail and a clean white cook jacket.

The same ripe red tomato is the recurring visual anchor. Preserve its realistic size, red skin, green calyx, moisture and natural imperfections.
Lighting progresses naturally from cool golden dawn at the farm to clean neutral light in the quality-control facility, then to warm evening light in the kitchen and home. Preserve realistic food, skin, stainless steel, wood, soil, leaves and glass textures.

SHOT TIMING:

0.0–1.1 seconds — SHOT 01
A wide cinematic view of a Japanese tomato farm at dawn. Low sunlight moves gently through the leaves. The farmer walks slowly between the rows carrying one empty wooden harvest crate. Use a stable, subtle forward dolly.

1.1–2.1 seconds — SHOT 02
Medium close-up. The farmer gently twists one ripe tomato from the vine. One simple hand movement only. Leaves shift slightly in the morning breeze.

2.1–3.1 seconds — SHOT 03
Locked extreme macro. The tomato rests in the farmer’s open palm. Tiny dew beads slowly roll across the natural skin. Preserve realistic fingertips and working-hand texture.

3.1–4.1 seconds — SHOT 04
Low close shot beside a small white refrigerated delivery van. The farmer places one wooden crate of tomatoes into the clean cargo area. Use a single controlled lifting and placing action.
4.1–5.1 seconds — SHOT 05
Inside a hygienic food quality-control facility. White-gloved hands rotate one tomato slightly and place it on a stainless weighing platform. A small scanner light activates once. No futuristic holograms.

5.1–6.1 seconds — SHOT 06
Kitchen close-up. The female chef makes one clean slice through the tomato. Juice and seeds catch the side light. The knife and fingers remain physically correct and safe.
6.1–7.2 seconds — SHOT 07
Overhead food shot. The chef pours one thin stream of olive oil over freshly plated tomato pasta with basil. Gentle steam rises from the plate.

7.2–8.5 seconds — SHOT 08
Warm family dinner. The young daughter takes one bite of the tomato pasta. Her parents exchange a subtle smile. Keep the acting intimate and natural, never exaggerated.
8.5–10.0 seconds — SHOT 09
Final hero frame. The finished tomato pasta, one whole ripe tomato and green leaves rest on a textured stone table. A softly blurred evening farm fills the background. Make a very slow cinematic push toward the plate and hold the final composition steadily.

Leave clean negative space on the left for the exact copy:
“一皿の向こう側。”
“MINORI FOODS”
Do not generate any additional text or claims. If exact Japanese typography cannot remain stable, output a completely clean left-side negative space so the copy can be added during post-production.

CAMERA AND IMAGE QUALITY:
Premium Japanese live-action food advertising with documentary warmth. Use realistic 35mm and 50mm lenses for people and environments, and a 90mm macro look for the tomato, hands and food details. Natural perspective, shallow depth of field, smooth highlight roll-off, detailed shadows and fine cinematic film grain.
Color palette: leaf green, tomato red, soil brown, stainless silver, warm wood and creamy white. Keep saturation restrained. No artificial CGI glow, excessive orange grading or fantasy effects.

MOTION RULES:
One readable physical action per shot. Stable short dolly, restrained slider, locked macro or deliberate overhead camera. No crash zooms, fast orbiting, time-lapse, floating ingredients, teleportation or object transformation. Preserve faces, hands, wardrobe, food geometry and location continuity.
AUDIO:
Original gentle corporate music built from acoustic guitar, soft piano and restrained hand percussion, approximately 92 BPM. Begin with quiet morning ambience and birds. Add subtle leaf movement, the wooden crate touching the van floor, one scanner beep, one precise knife sound and a soft kitchen sizzle. Let the food sounds briefly lead the mix.

VOICEOVER:
Use one calm, warm Japanese adult female voice. Natural and sincere, not overly dramatic.
From approximately 0.5 seconds:
「つくる人から、食べる人へ。」

From approximately 6.4 seconds:
「一皿の向こう側に、私たちがいる。」
Do not add improvised dialogue. End with a gentle musical resolution and hold the final brand frame until exactly 10.0 seconds.`,
    },
  },
  // 分镜提示词回复帖: https://x.com/husky__create/status/2102337239443522023
  // 视频提示词回复帖: https://x.com/husky__create/status/2102337252340994249
  {
    id: "husky-nexarc-construction-brand",
    title: "从一条线到一座城 · NEXARC 建设公司广告",
    subtitle: "X · @husky__create · GPT Image 2.5 → Gemini Omni 1.1 Flash · 10秒 · 16:9",
    description:
      "GPT Image 2.5 出九宫格分镜、Gemini Omni 成片：从一条蓝色画线到落成街区的日本建筑公司广告。",
    video: "/tutorials/husky-nexarc-construction-brand/demo-web.mp4",
    poster: "/tutorials/husky-nexarc-construction-brand/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "企业品牌",
    shots: 9,
    references: 1,
    model: "GPT Image 2.5 → Gemini Omni 1.1 Flash",
    style: "日本建设企业广告 · 电影感实拍质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/husky__create/status/2102337226311180568",
    sourceAuthor: "@husky__create",
    sourcePlatform: "X",
    sourceImpressions: 21118,
    sourceStats: { asOf: "2026-09-26", likes: 275, reposts: 42, bookmarks: 302 },
    formats: ["产品广告"],
    hook: {
      structure: "画图 → 施工推进 → 落成街区 → 品牌字卡",
      opening: "第 0 秒是晨光工作室里的建筑师中景，约 0.4s 切到手握蓝色笔沿尺子画线的特写——从一支笔开场。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约每 1 秒一镜：约 1.1s 地面上的钴蓝测量线与工人靴子，约 2s 泵车浇筑地基，约 3s 仰拍吊装钢梁，约 4s 幕墙玻璃吸盘安装，约 5s 广场种树铺地。", at: 1.1 },
        { title: "结尾怎么收", text: "约 6s 建筑师推开大堂玻璃门走出，约 7.2s 金色黄昏的街区人来人往，约 8.3s 切到对称蓝调时刻的塔楼夜景，居中白字「NEXARC CONSTRUCTION / まだない景色を、つくる。」。", at: 8.3 },
      ],
      copyThis: "用一条蓝线把「纸上画线」和「工地测量线」硬切对上（match cut），后面按施工顺序每秒一镜推进到落成。",
      approx: true,
    },
    tags: [
      "10秒 · 企业广告",
      "16:9 横屏",
      "GPT Image 2.5 → Gemini Omni 1.1 Flash",
      "九宫格分镜 → 成片",
      "建设施工 · 匹配剪辑",
    ],
    steps: [
      {
        number: 1,
        title: "第一步：用 GPT Image 2.5 生成 3×3 九宫格分镜",
        description:
          "把「参考图」卡片里的完整分镜提示词（① GPT Image 2.5）贴进 GPT Image 2.5：一张 16:9 图、9 个等大 16:9 格子、象牙色细边、左上角白色编号 01–09。提示词锁定同一位 36 岁建筑师的外观与安全装备、同一组 18 层主楼 + 两栋 6 层副楼的建筑造型，以及贯穿全片的钴蓝色线条。",
      },
      {
        number: 2,
        title: "第二步：把分镜图 + 视频提示词交给 Gemini Omni 1.1 Flash",
        description:
          "上传九宫格分镜，贴下方完整视频提示词（② Gemini Omni 1.1 Flash）。它要求逐格还原为全屏实拍镜头，绝不显示九宫格、边框或编号；镜头之间用硬切，只有「纸上画线 → 地面测量线」一处匹配剪辑，禁止人、机械或建筑互相变形。",
      },
      {
        number: 3,
        title: "第三步：按时间轴锁节奏，安全与声音一起写",
        description:
          "视频提示词给 9 镜写了精确秒数（0.0–1.1s 画线 … 8.5–10.0s 蓝调字卡），并反复强调正确的安全装备与吊装规范；配乐约 104 BPM，8.4s 加日文男声旁白「まだない景色を、つくる。ネクサーク・コンストラクション。」。作者回复说本片是多次抽卡选出的，旁白也不稳定，跟做时多生成几次。",
      },
    ],
    references_detail: [
      {
        id: "husky-nexarc-storyboard-9grid",
        number: "1",
        title: "九宫格分镜 · ① GPT Image 2.5 提示词",
        subtitle: "作者原图 1672×940 · 3×3 镜头 01–09",
        image: "/tutorials/husky-nexarc-construction-brand/refs/storyboard.jpg",
        prompt: `Create one premium photorealistic 3×3 storyboard for a 10-second Japanese construction-company corporate commercial.

Brand: “NEXARC CONSTRUCTION”
Audience: commercial-property owners, developers, business leaders and engineering recruits.
Central message: disciplined design and construction create the places where tomorrow’s work and life begin.

LAYOUT
One overall landscape 16:9 image. Exactly nine equal 16:9 panels arranged in three columns and three rows. Thin ivory gutters. Small white panel numbers 01–09 in the upper-left corner of each panel. Read left to right, top row to bottom row.

No captions, arrows, watermarks or production notes. Only panel numbers and the final brand typography in panel 09.

CONTINUITY
Recurring lead architect: the same 36-year-old Japanese man, lean build, calm intelligent face, short neatly parted black hair and natural skin texture. He wears a crisp white shirt, dark navy work jacket and charcoal trousers. At the active construction site, add the same white safety helmet, reflective charcoal vest, gloves and safety boots.

The recurring development contains one central 18-story rectangular office tower with blue-gray glass, vertical silver fins and a transparent entrance canopy, plus two six-story side buildings, a pedestrian plaza, warm timber accents and young street trees.

Keep this building geometry consistent through every construction phase.

A thin cobalt-blue line is the visual motif. It appears first on tracing paper and then as a physical survey line at the construction site. It never magically transforms into a building.

NINE PANELS
01 — Overhead macro in a dawn architecture studio. The architect draws one precise cobalt-blue line across translucent tracing paper using a ruler and technical pencil.

02 — Low close-up at an empty prepared construction site. A surveyor wearing correct PPE marks one straight cobalt-blue line on the ground. Survey tripod behind.

03 — Wide active foundation stage with excavation, rebar, formwork and concrete pumping. Workers remain in organized safe zones.

04 — Low-angle steel erection. A crane lifts one steel beam into position while properly equipped riggers guide it from safe positions. No worker beneath the load.

05 — Detailed façade installation. Workers using approved lifting equipment and fall protection install one blue-gray glass panel and silver vertical fins.

06 — Elevated wide of the nearly finished development. Crews install pale stone paving, timber benches and young trees around the coherent completed buildings.

07 — Finished office lobby. The same architect, without his helmet but wearing the navy jacket, opens the glass entrance as the first office workers enter.

08 — Grand golden-hour wide of the completed district. Office workers, pedestrians, parked bicycles and a café terrace bring the architecture to life.

09 — Symmetrical blue-hour hero shot of the completed district. Illuminated offices and plaza. Stable centered white text: “NEXARC CONSTRUCTION”. Beneath it: “まだない景色を、つくる。”

PHOTOGRAPHY
High-end live-action Japanese corporate commercial. Natural full-frame cinema-camera perspective, realistic concrete, structural steel, glass, timber, cables, asphalt and foliage. Cool dawn progressing through clear daylight, golden hour and blue hour. Key light consistently from frame left. Architectural white, graphite, silver, blue-gray glass, warm timber and restrained cobalt blue. Smooth highlight roll-off, moderate depth of field and subtle film grain.

SAFETY
All construction activity must be physically believable. Correct PPE, fall protection, crane rigging, exclusion zones and stable scaffolding. No workers beneath suspended loads.

AVOID
Magical construction, object morphing, teleporting materials, instant trees, collapsing structures, demolition, unsafe workers, missing helmets, floating beams, bent cranes, impossible machinery, inconsistent architecture, changing façade colors, duplicate people, malformed hands, CGI-plastic surfaces, miniature-diorama appearance, cartoon styling, futuristic fantasy cities, extra logos, unreadable text or panels other than 01–09.`,
      },
    ],
    storyboard: [
      { number: 1, description: "0–1.1s 晨光工作室：建筑师中景，切手部特写沿尺子画线。" },
      { number: 2, description: "1.1–2.1s 硬切到平整地面上的钴蓝测量线，测量员低机位完成标记。" },
      { number: 3, description: "2.1–3.1s 地基大全景：泵车向模板浇筑混凝土。" },
      { number: 4, description: "3.1–4.1s 仰拍钢结构：塔吊吊着钢梁缓缓就位。" },
      { number: 5, description: "4.1–5.1s 幕墙安装：吸盘吊具把蓝灰玻璃板移入框架，工人系安全绳引导。" },
      { number: 6, description: "5.1–6.1s 俯瞰近完工广场：铺地、扶正新种的小树。" },
      { number: 7, description: "6.1–7.2s 落成大堂：建筑师推开玻璃门走出，镜头后退跟拍。" },
      { number: 8, description: "7.2–8.3s 金色黄昏的街区外景，行人、单车、咖啡座，慢推向主楼。" },
      { number: 9, description: "约 8.3–10s 对称蓝调时刻塔楼夜景，居中白字「NEXARC CONSTRUCTION」与「まだない景色を、つくる。」。" },
    ],
    constraints:
      "九宫格只作参考：成片不得出现网格、边框、编号；硬切为主，仅一处画线→测量线匹配剪辑，禁止变形；同一建筑师（36 岁、藏青工作夹克、白衬衫，工地加白色安全帽与反光背心）；同一组 18 层蓝灰玻璃主楼 + 两栋 6 层副楼，造型不得变化；主光始终来自画面左侧，清晨→白天→黄昏→蓝调时刻；正确安全装备与吊装、吊物下无人；字卡居中白字且稳定不逐字动画。缺口：作者自述多次抽卡、旁白不稳定，另可给重机单独参考图（未公开）；音频未转录。",
    video_prompt: {
      title: "② Gemini Omni 1.1 Flash 视频提示词",
      subtitle: "10s · 16:9 · 24fps · 上传九宫格分镜作参考 · 英文完整提示词（作者线程第 3 帖）",
      content: `Create an exact 10-second, high-end photorealistic Japanese corporate commercial for the fictional architecture and construction company “NEXARC CONSTRUCTION.”

REFERENCE BOARD
The uploaded 3×3 storyboard strictly controls the recurring architect, wardrobe, PPE, construction site, building geometry, shot composition, lighting progression, materials, colors and final architecture.

Read the board from left to right across the top row, then the middle row, then the bottom row.

Never display the complete storyboard. Never show a grid, collage, split screen, ivory gutters, panel numbers or production notes. Reconstruct each reference panel as one full-screen live-action 16:9 shot.

Connect different stages using precise hard cuts and one design-line match cut. Never morph people, machinery, steel, glass or buildings from one object into another.

FORMAT
Exactly 10.0 seconds.
Landscape 16:9.
24 fps.
Premium live-action commercial realism.

CONTINUITY
The recurring lead architect is the same 36-year-old Japanese man with a lean build, calm intelligent face, short neatly parted black hair and natural skin texture.

In the design studio, he wears a white shirt, dark navy work jacket and charcoal trousers. On the active site, he adds the same white safety helmet, reflective charcoal vest, protective gloves and safety boots. In the finished lobby, he removes only the helmet and safety vest and returns to the same navy jacket and white shirt.

The project remains one coherent development: a central rectangular 18-story tower with blue-gray glass, vertical silver fins and a transparent entrance canopy, flanked by two six-story buildings, a pedestrian plaza, timber accents and young street trees.

Never change the tower’s height, proportions, façade pattern, entrance position or surrounding geography.

LIGHT AND TIME
Progress naturally from cool dawn in the studio and empty site, through clear daytime construction, warm golden-hour occupation and a blue-hour final hero shot. Key light always comes from frame left.

TIMELINE

0.0–1.1 seconds — Shot 01
Overhead macro in the architecture studio. The architect’s right hand draws one precise cobalt-blue line across tracing paper using a ruler. Camera makes a restrained downward push. Let the pencil sound lead the mix.

1.1–2.1 seconds — Shot 02
Hard match cut from the drawn line to a real cobalt-blue survey line on prepared ground. A surveyor completes one short marking movement. Low locked camera; no magical transformation.

2.1–3.1 seconds — Shot 03
Wide foundation stage. A concrete pump delivers material into prepared formwork while workers monitor from safe positions. Use a short controlled lateral camera move.

3.1–4.1 seconds — Shot 04
Low-angle steel erection. A crane lowers one beam a short controlled distance toward its connection point. Workers remain outside the suspended-load zone. Camera tilts upward slightly.

4.1–5.1 seconds — Shot 05
Close process shot. A glass façade panel moves slowly into its mounting position using approved lifting equipment. Workers guide it safely with fall protection. Keep the camera stable.

5.1–6.1 seconds — Shot 06
Elevated view of the nearly completed plaza. A paving unit is placed while another worker adjusts one young tree support. Do not make plants or buildings appear instantly. Use a subtle forward glide.

6.1–7.2 seconds — Shot 07
Inside the finished office lobby, the architect opens the glass entrance door once and the first office workers walk through. Warm daylight enters from frame left. Camera tracks backward gently.

7.2–8.5 seconds — Shot 08
Grand golden-hour exterior. People walk through the plaza, bicycles remain parked and trees move lightly in the wind. Make a slow cinematic push toward the central tower.

8.5–10.0 seconds — Shot 09
Clean cut to the symmetrical blue-hour hero view. Office lights glow across the same completed buildings. Hold the frame steadily.

Display only this exact centered white typography:
“NEXARC CONSTRUCTION”

Below it, display:
“まだない景色を、つくる。”

Keep the typography perfectly stable. Do not animate individual letters. If reliable text rendering is unavailable, output a clean text-free hero plate with centered negative space so the brand and Japanese copy can be composited in post-production.

CAMERA AND IMAGE QUALITY
Use full-frame cinema-camera realism. Environmental shots use restrained 24–35mm perspectives; human shots use natural 50mm perspective; design and material details use 85–100mm macro rendering.

Smooth highlight roll-off, realistic motion blur, restrained contrast, natural depth of field, subtle fine film grain and physically accurate materials. No exaggerated time-lapse streaks.

SOUND
Original contemporary corporate score at approximately 104 BPM: restrained piano pulse, low strings, subtle industrial percussion and a warm final chord.

Use motivated sounds sparingly: technical pencil, survey marking, concrete pump, controlled steel impact, glass suction equipment, footsteps and office ambience.

At 8.4 seconds, add a calm adult Japanese male voiceover:
「まだない景色を、つくる。ネクサーク・コンストラクション。」

End the music and voice together at exactly 10.0 seconds.

SAFETY AND AVOID
Correct PPE, crane rigging, fall protection, exclusion zones and realistic construction sequencing.

No worker beneath a suspended load. No unsafe climbing, missing helmets, floating beams, malformed machinery, collapsing structures, magical construction, teleportation, object morphing, instant vegetation, inconsistent building geometry, changing façade design, distorted hands, duplicate architect, CGI-plastic materials, miniature appearance, cartoon style, futuristic fantasy city, extra claims, extra text, watermarks or fake logos.`,
    },
  },
  // 查重别名(用户提交的提示词回复帖): https://x.com/husky__create/status/2101876857004319206
  {
    id: "husky-nexbuild-city-timelapse-seedance",
    title: "从空地到一座城 · NEXBUILD 建设延时广告 · Seedance 2.5",
    subtitle: "X · @husky__create · Seedance 2.5 · BytePlus Lumina · 30秒 · 9:16",
    description:
      "Seedance 2.5 竖屏建筑延时广告：同一块空地从夜里放线到高楼林立，最后航拍拉起露出 NEXBUILD。",
    video: "/tutorials/husky-nexbuild-city-timelapse-seedance/demo-web.mp4",
    poster: "/tutorials/husky-nexbuild-city-timelapse-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实延时",
    shots: 10,
    references: 0,
    model: "Seedance 2.5（BytePlus Lumina）",
    style: "建设企业广告 · 固定工地延时 · 写实建筑摄影",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/husky__create/status/2101876852029825290",
    sourceAuthor: "@husky__create",
    sourcePlatform: "X",
    sourceImpressions: 8180,
    sourceStats: { asOf: "2026-09-26", likes: 52, reposts: 2, bookmarks: 29 },
    formats: ["拆装·制作过程", "产品广告"],
    hook: {
      structure: "空地 → 地基与主体 → 幕墙与街道 → 航拍揭晓品牌",
      opening: "第 0 秒是天亮前的俯拍空地：围挡、工作灯、成堆钢材，几个小小的工人在裸土上走动——画面几乎是空的，等着被填满。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "机位基本不动：约 3s 挖掘机开挖，约 5–7s 地基和柱子立起、塔吊就位，约 9–12s 钢结构一层层长高，约 13–14s 玻璃幕墙包满整栋楼。", at: 3 },
        { title: "街道和广场成形", text: "约 15–21s 转到楼前：大道从土方到铺沥青画线，再铺草坪、水景和树，傍晚大楼亮灯。", at: 15 },
        { title: "结尾怎么收", text: "约 22s 一名白盔工程师背影仰望大楼，约 25s 镜头拉升成航拍，整片办公街区铺满竖屏，中央浮现「NEXBUILD CORPORATION」。", at: 25 },
      ],
      copyThis: "整条片子锁在同一块地、同一个机位上延时建造，最后才拉起航拍——开头的「空」和结尾的「满」形成对照。",
      approx: true,
    },
    tags: [
      "30秒 · 建设延时",
      "9:16 竖屏",
      "Seedance 2.5",
      "BytePlus Lumina",
      "纯文生视频",
      "空地到城市",
    ],
    steps: [
      {
        number: 1,
        title: "本片没有分镜图：一条长提示词直接出片",
        description:
          "作者这条没有用 GPT Image 分镜，只在 BytePlus Lumina 上用 Seedance 2.5 跑一条约 1.2 万字符的英文提示词，直接生成 30 秒 9:16 竖屏成片。提示词先定概念「FROM NOTHING TO A CITY.」，要求整座城从零可见地建起来，建造过程本身就是主角。",
      },
      {
        number: 2,
        title: "先锁定同一块工地和空间布局",
        description:
          "LOCATION CONTINUITY 一段规定全片只在一块固定工地上、不重置环境：中央是未来广场，左侧中层办公楼群，右侧标志性玻璃塔，背景高层，前景主干道与步行区；最终画面里的每栋楼都必须来自前面出现过的施工区，不允许凭空冒出。",
      },
      {
        number: 3,
        title: "按 3 秒一段写 10 个施工阶段，最后才出品牌",
        description:
          "时间轴从 0–3s ZERO、3–6s GROUNDWORK 一直写到 27–30s GRAND REVEAL / BRAND，每段写清工种、机械和镜头运动；品牌名 NEXBUILD CORPORATION 要求到最后一场才出现，最后 1.5 秒压暗字标背后的中心区域。",
      },
    ],
    references_detail: [],
    storyboard: [
      { number: 1, description: "约 0–3s 天亮前俯拍空地：围挡、工作灯、钢材堆，工人放线测量。" },
      { number: 2, description: "约 3–5s 挖掘机同时开挖，基坑成形。" },
      { number: 3, description: "约 5–8s 地基浇筑、柱子立起，塔吊就位，天色渐亮。" },
      { number: 4, description: "约 8–12s 钢结构逐层升高。" },
      { number: 5, description: "约 12–15s 玻璃幕墙包覆整栋塔楼。" },
      { number: 6, description: "约 15–18s 楼前主干道：土方 → 铺沥青 → 画标线。" },
      { number: 7, description: "约 18–21s 广场、草坪、水景和行道树铺设，傍晚大楼亮灯。" },
      { number: 8, description: "约 21–24s 白盔工程师背影站在完工广场上仰望大楼。" },
      { number: 9, description: "约 24–27s 镜头后退并拉升，街区与行人车流出现。" },
      { number: 10, description: "约 27–30s 航拍整片办公街区铺满竖屏，中央字标「NEXBUILD CORPORATION」。" },
    ],
    constraints:
      "30 秒 9:16 竖屏；全片同一块工地、不重置环境，最终所有建筑必须来自先前施工区、不得凭空出现；写实材质与建筑摄影质感，禁卡通、奇幻、玩具感、科幻；品牌名只在最后一场出现，最后 1.5 秒压暗字标背后区域。缺口：本帖无分镜图、无分镜提示词（纯文生视频）；提示词要求的『微缩小人』质感在成片中不明显；成片结尾节奏比提示词时间轴略早；音频未转录。",
    video_prompt: {
      title: "NEXBUILD 从空地到城市 · Seedance 2.5 提示词",
      subtitle: "30s · 9:16 · Seedance 2.5 on BytePlus Lumina · 纯文生视频 · 英文完整提示词（作者线程第 2 帖）",
      content: `Create a 30-second vertical 9:16 ultra-photorealistic cinematic construction company brand film.

CONCEPT:

“FROM NOTHING TO A CITY.”

Hundreds of tiny realistic construction workers, engineers, architects, cranes, excavators and construction vehicles physically transform a completely empty urban site into a sophisticated modern business district filled with premium office towers.

The entire city must be built visibly from zero.

The construction process itself is the hero.

The film should communicate:

engineering excellence,
precision,
coordination,
technology,
safety,
scale,
speed,
and the ability to create the future of a city.
This is a premium corporate advertisement for a fictional Japanese construction company.
FINAL FICTIONAL COMPANY NAME:
NEXBUILD CORPORATION
Do NOT display the company name until the final scene.
VISUAL STYLE
Ultra-photorealistic.
Premium architectural commercial.

Real construction-site photography combined with realistic miniature macro cinematography.

The workers and machinery should feel like an extremely detailed handcrafted miniature construction world photographed with a real cinema camera.

Real:

concrete,
steel,
glass,
asphalt,
soil,
gravel,
construction machinery,
scaffolding,
safety barriers,
trees,
water,
metal,
reflections.

Natural physical materials.

Extremely realistic shadows.

High-end architectural photography.

Clean modern Japanese metropolitan atmosphere.

Sophisticated.

Powerful.

Precise.

Professional.
NOT cartoon.
NOT fantasy.
NOT toy-like.
NOT futuristic sci-fi.
The completed district should look like a believable near-future Japanese office district that could realistically exist today.
LOCATION CONTINUITY
The entire 30-second film takes place on ONE fixed urban development site.
Never reset the environment.
Initial geography:
a huge empty development site surrounded by a distant existing city skyline.
CENTER:
future central business plaza.
LEFT:
future cluster of medium-rise office buildings.

RIGHT:
future signature glass skyscraper.

BACKGROUND:
future high-rise office towers.

FOREGROUND:
future main boulevard and landscaped pedestrian zone.

All buildings seen in the final shot must originate from construction zones introduced earlier.

No buildings may suddenly appear.

0–3 SEC — ZERO

Begin before sunrise.

Extreme wide macro aerial shot.

A massive empty urban development site.

Bare soil.

Construction markings.

Temporary fences.

Stacks of steel beams and concrete materials.

A few work lights illuminate the site.

Tiny engineers wearing helmets and reflective safety clothing walk across the empty land carrying plans.

Surveyors place markers.

Laser surveying equipment measures the terrain.

Architects inspect large construction drawings on a temporary site table.

Excavators and cranes stand ready.

Slow cinematic push forward.
The message should feel:

“Everything begins here.”
3–6 SEC — GROUNDWORK

Construction starts simultaneously across the entire site.
Excavators dig deep foundations.

Dump trucks remove soil.
Workers install temporary retaining structures.

Foundation piles are driven into the ground.
Large reinforcement cages are lowered into excavation zones.

Concrete trucks arrive.

Workers pour concrete into foundations.

Road crews begin defining the future main boulevard.

Small construction vehicles move naturally along temporary routes.

Extremely dense coordinated activity.

No chaos.

Every worker has a purpose.

6–9 SEC — STRUCTURAL FOUNDATIONS

Continue from the exact same site.

Concrete foundations harden through realistic accelerated time-lapse.

Massive structural columns begin rising.

Tower cranes rotate slowly.

Steel beams are lifted from storage areas.

Teams guide each beam into position.

Bolts are physically installed.

Welders work along structural joints.

Multiple buildings are now at different stages of construction.

Some only foundations.

Some first floors.

Some several floors high.

This variation is important.

Do NOT complete all buildings simultaneously.

9–12 SEC — THE CITY RISES

The camera moves vertically alongside one office tower.

Floor after floor is physically assembled.

Steel framework rises upward.

Concrete floor slabs are installed.

Temporary scaffolding grows around the structure.

Construction elevators move workers between floors.

Cranes lift steel and materials.

In the background, other buildings are rising at different speeds.

The visual should communicate enormous scale and precise coordination.

No instant growth.

Every floor must visibly belong to the structure beneath it.

12–15 SEC — ARCHITECTURE

Move closer to the facade.

Workers begin installing the exterior skin.

Large glass curtain-wall panels are lifted by cranes.

Workers guide each panel into place.

Glass sections gradually cover the steel structure.

Other workers install aluminum framing.

Completed floors reflect the surrounding city and sky.

The raw construction frame progressively becomes a sophisticated modern office tower.

Nearby buildings undergo the same logical transformation:

structure
→ facade
→ windows
→ completed exterior.

15–18 SEC — INFRASTRUCTURE

Shift toward street level.

Road crews construct the surrounding business district.

Underground utilities are installed.

Drainage systems are completed.

Curbs are placed.

Road foundations are compacted.

Asphalt is laid.

Lane markings are applied.

Sidewalk paving is installed piece by piece.

Streetlights are erected.

Traffic signals are installed.

Workers construct entrances to office buildings.

The city now begins connecting together.

18–21 SEC — PUBLIC SPACE

Landscape teams begin transforming the spaces between buildings.

Soil is delivered.

Trees arrive on trucks.

Workers use cranes and small machinery to position mature trees.

Trees are physically planted and secured.

Grass is installed.

Planters are positioned.

Benches are assembled.

Pedestrian plazas are paved.

A shallow architectural water feature is completed.

Bicycle parking and street furniture are installed.

The previously industrial construction zone starts becoming a human-centered modern business district.

21–24 SEC — FINAL CONSTRUCTION

The district is almost complete.

Workers install final entrance glass.

Technicians test building systems.
Electricians finish lighting.
Cleaning crews remove protective coverings from windows.
Road crews remove temporary barriers.

Construction signs are taken away.

Scaffolding is progressively dismantled.

Tower cranes complete their final lifts.

Building lights begin turning on floor by floor.

The transition from construction site to functioning city must feel physically believable.

24–27 SEC — THE CITY COMES ALIVE

Morning transitions toward bright late-afternoon sunlight.

The finished business district becomes active.

Office workers walk through plazas.

People enter modern glass office buildings.

Cyclists pass through landscaped paths.

Electric buses move along the main boulevard.

Cars travel naturally through intersections.

People sit on benches.

Trees move gently in the wind.

Architectural glass reflects the surrounding buildings.

The district should feel premium, sustainable and prosperous.

The construction workers who built the city remain briefly visible completing final inspections.

Camera smoothly travels through the completed boulevard.

27–30 SEC — GRAND REVEAL / BRAND

Begin close behind one construction engineer standing on the completed central plaza.

The engineer wears a clean white helmet and looks upward.

Camera begins moving backward.

Then smoothly accelerate upward and backward.

Reveal the entire completed modern office district.

Multiple contemporary office towers.

One iconic glass skyscraper.

Wide landscaped boulevard.

Pedestrian plazas.

Green trees.

Modern street furniture.

Active offices.

Vehicles.

People.

Reflections across glass architecture.

Warm golden-hour sunlight spreads between the skyscrapers.

The enormous business district now occupies the same land that was completely empty at the beginning.

Camera continues rising until the complete city development fills the vertical frame.

Then slowly stabilize.

The urban activity continues naturally.

Do not freeze the environment.

For the final 1.5 seconds:

subtly darken the center background behind the typography area without changing the physical environment.

A clean premium corporate title appears in the center:

NEXBUILD

Below in smaller text:

CORPORATION

Typography:

modern geometric sans-serif,
bold,
clean,
minimal,
architectural,
white or brushed-metal appearance,
perfectly centered,
high-end Japanese corporate branding.

No additional text.

No slogans.

No random characters.

No fake Japanese writing.

Hold the final city and company name long enough to clearly read.

CONSTRUCTION CONTINUITY

Every building:

surveying
→ excavation
→ foundation
→ structural columns
→ steel framework
→ floors
→ facade
→ glass
→ interior completion
→ landscaping.

Every road:

excavation
→ underground infrastructure
→ base material
→ compaction
→ asphalt
→ markings.

Every tree:

transport
→ positioning
→ planting
→ securing.

Every public space:

ground preparation
→ paving
→ furniture
→ landscaping.

Previously completed structures must remain present.

No structural resets.

No disappearing cranes.

No disappearing materials without being physically used or removed.

Construction equipment must move naturally around the site.

CAMERA

9:16 vertical composition.

Premium cinematic architectural cinematography.

Use:

macro construction close-ups,
low-angle crane shots,
ground-level tracking shots,
vertical tower-rise tracking,
smooth overhead movement,
slow push-ins,
controlled orbiting shots,
subtle rack focus,
final dramatic aerial pull-back.

Camera movement must always feel physically achievable.

Smooth transitions between work areas.

No random teleporting camera.

No excessive speed ramps.

No excessive camera shake.

Use vertical architecture strongly within the 9:16 composition.

Skyscrapers should feel tall and imposing.

LIGHTING PROGRESSION

0–6 sec:
blue-hour early morning.

6–15 sec:
soft morning daylight.

15–24 sec:
clear daytime sunlight.

24–30 sec:
warm premium golden hour.

The changing light subtly communicates the passage of time and progress.

No abrupt lighting changes.

STRICT NEGATIVE
No magical construction.
No instant skyscrapers.
No buildings popping into existence.
No morphing structures.
No floating steel beams.
No autonomous materials.
No teleporting workers.

No duplicated workers.

No giant humans.

No giant construction equipment.

No malformed machinery.

No physically impossible cranes.

No inconsistent building sizes.

No randomly changing architecture.

No collapsing buildings.

No melting glass.
No warped roads.
No changing geography.
No fantasy city.
No cyberpunk.
No neon sci-fi city.
No cartoon.
No anime.
No plastic toy appearance.
No Lego appearance.

No exaggerated miniature toys.

No random logos.
No text until final brand reveal.
No illegible signage.
No excessive futuristic vehicles.
No empty lifeless city at the end.
FINAL QUALITY TARGET

The result should look like a world-class Japanese construction company commissioned a premium brand film demonstrating its ability to transform empty land into a complete modern business district.

The visual hook is the extraordinary miniature-scale construction activity.
The corporate message is:
precision,
engineering,
coordination,
trust,
and city-building capability.
The emotional progression should be:

nothing
→ groundwork
→ structure
→ architecture
→ infrastructure
→ city
→ future.

The final impression should feel ambitious, sophisticated and credible.
The construction process should create visual satisfaction.
The final city reveal should create awe.
The company name should feel like the natural signature on everything that has just been built.`,
    },
  },
  {
    id: "garylau-rei-tongue-minimax-h3",
    title: "绫波丽双次吐舌表情深度驱动 · MiniMax H3",
    subtitle: "X · @GaryLau0101 · MiniMax H3 ReferenceToVideo · 15秒 · 16:9",
    description:
      "MiniMax H3 表情驱动短片：一张参考图锁定绫波丽外观，深度动画带动她两次俏皮吐舌。",
    video: "/tutorials/garylau-rei-tongue-minimax-h3/demo-web.mp4",
    poster: "/tutorials/garylau-rei-tongue-minimax-h3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "真人风",
    shots: 1,
    references: 5,
    model: "MiniMax H3（ReferenceToVideo）",
    style: "深度动画驱动表情 · 固定机位写实中近景",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/GaryLau0101/status/2103326557783925108",
    sourceAuthor: "@GaryLau0101",
    sourcePlatform: "X",
    sourceImpressions: 2272,
    sourceStats: { asOf: "2026-09-25", likes: 53, reposts: 4, bookmarks: 66 },
    formats: ["角色表演"],
    hook: {
      structure: "固定机位 · 两次吐舌表情",
      opening: "白墙前的自拍式正面近景，黑长直女孩穿浅蓝针织衫直视镜头，约 3s 就眨眼吐舌——第一个表情来得很快。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "吐舌后闭眼说话，约 7s 抬手指戳脸颊，约 8–9s 手指点脸再吐一次舌，比第一次更夸张。", at: 3 },
        { title: "结尾怎么收", text: "约 11s 手比「一点点」，之后放松微笑对镜头说话，没有额外剪辑。", at: 11 },
      ],
      copyThis: "机位和构图全程不动，只靠脸部表情撑住：两次吐舌卡在约 3s 和约 8.5s。",
      approx: true,
    },
    tags: [
      "15秒 · 表情驱动",
      "16:9 横屏",
      "MiniMax H3",
      "ReferenceToVideo",
      "深度动画驱动",
      "双次吐舌",
    ],
    steps: [
      {
        number: 1,
        title: "先锁定身份与环境，只让 Picture 1 决定外观",
        description:
          "提示词的 subject_definitions 把 <Subject 1>（绫波丽：同一张脸、自然肤质、深色眼睛、黑长直齐刘海、浅蓝圆领针织衫、银项链）和 <Subject 2>（白色纹理墙与沙发边）都绑定到 <Picture 1>，并声明 Picture 1 决定身份、服装、背景、光线、构图和首帧。实际复刻时先准备一张稳定的正面中近景 Picture 1 作为唯一外观基准。注意：作者没有公开这张 Picture 1，本页 refs 只是成片截帧，不能当作原始参考图。",
      },
      {
        number: 2,
        title: "把动作和外观分层：Video 1 只提供动作与时间",
        description:
          "<Video 1> 是带面部运动曲线和舌头轮廓的深度诊断动画，提示词明确“只把它读作动作及其时间的指引；所有可见表面、颜色、面部比例和光照都只来自 Picture 1”。retention_analysis 进一步要求保持原有下颌宽度、脸颊体积和下巴长度，并把动作转译为自然皮肤与针织面料。这是避免模型把灰度深度图、彩色曲线或点直接渲染进成片的关键。",
      },
      {
        number: 3,
        title: "用时间码写两次吐舌，最后写负向连续性",
        description:
          "detailed_description 用时间码约束：0.00–3.20 秒舌头在口内；约 3.20 秒伸出、约 4.07 秒收回；约 8.81–10.68 秒第二次伸出、短暂停留并收回；10.68–15.00 秒按原节奏继续其余表情。强调“Two tongue cycles only”，禁止循环、变速、重置和结尾冻结；固定机位与脸部尺度，不改毛衣和墙面；禁止灰度深度图、彩色面部曲线、点、遮罩、文字、图形、断开的舌头和变形手臂。原声音频由作者外部添加，提示词要求不生成对白。",
      },
    ],
    references_detail: [
      {
        id: "ref-garylau-tongue-frame-01",
        number: "1",
        title: "开场中近景",
        subtitle: "t≈1s · 成片截帧",
        image: "/tutorials/garylau-rei-tongue-minimax-h3/refs/film-frame-01.jpg",
        prompt: "成片截帧（非作者参考图/非 Picture 1）：固定机位、写实中近景，绫波丽黑长直齐刘海、浅蓝针织衫，白色纹理墙与沙发边，舌头仍在口内，只有细微眼神与头部动作。从作者发布的彩色成片抽帧，仅作跟随拆解；作者未公开静态 Picture 1。",
      },
      {
        id: "ref-garylau-tongue-frame-02",
        number: "2",
        title: "第一次吐舌",
        subtitle: "t≈3.5–4s · 成片截帧",
        image: "/tutorials/garylau-rei-tongue-minimax-h3/refs/film-frame-02.jpg",
        prompt: "成片截帧（非作者参考图/非 Picture 1）：第一轮吐舌（提示词约 3.20–4.07 秒）：单眼眨眼、粉色舌头伸过下唇，头部微侧，脸型与服装保持不变。从作者发布的彩色成片抽帧，仅作跟随拆解；作者未公开静态 Picture 1。",
      },
      {
        id: "ref-garylau-tongue-frame-03",
        number: "3",
        title: "两次吐舌之间",
        subtitle: "t≈7s · 成片截帧",
        image: "/tutorials/garylau-rei-tongue-minimax-h3/refs/film-frame-03.jpg",
        prompt: "成片截帧（非作者参考图/非 Picture 1）：两轮吐舌之间的过渡表情：舌头已收回，嘴唇微张，正视镜头，机位与脸部尺度与开场一致。从作者发布的彩色成片抽帧，仅作跟随拆解；作者未公开静态 Picture 1。",
      },
      {
        id: "ref-garylau-tongue-frame-04",
        number: "4",
        title: "第二轮吐舌区间",
        subtitle: "t≈10s · 成片截帧",
        image: "/tutorials/garylau-rei-tongue-minimax-h3/refs/film-frame-04.jpg",
        prompt: "成片截帧（非作者参考图/非 Picture 1）：处于提示词第二轮吐舌区间（约 8.81–10.68 秒）附近：嘴部张开、表情变化，肩部和针织袖子保持连续。从作者发布的彩色成片抽帧，仅作跟随拆解；作者未公开静态 Picture 1。",
      },
      {
        id: "ref-garylau-tongue-frame-05",
        number: "5",
        title: "收尾细微表情",
        subtitle: "t≈13s · 成片截帧",
        image: "/tutorials/garylau-rei-tongue-minimax-h3/refs/film-frame-05.jpg",
        prompt: "成片截帧（非作者参考图/非 Picture 1）：10.68 秒之后的收尾段：闭眼、嘴部细微动作，继续原节奏的眼、嘴、头部表情，无循环或结尾冻结。从作者发布的彩色成片抽帧，仅作跟随拆解；作者未公开静态 Picture 1。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "完整 15 秒单镜头（固定机位、平视、16:9 写实中近景）：从 Picture 1 首帧开始。0.00–3.20 秒完成最初的眼部、嘴唇和细微头部动作，舌头在口内；约 3.20 秒嘴唇分开，自然粉色舌头伸过下唇，约 4.07 秒收回；中间继续表情与小手势；约 8.81–10.68 秒第二次伸舌、短暂停留并收回；10.68–15.00 秒按原节奏继续其余眼、嘴、头和手部动作。全程同一张脸、黑发、浅蓝毛衣、项链和白墙，无对白、无剪切、无循环或结尾冻结。",
      },
    ],
    constraints:
      "Picture 1 是唯一外观来源（脸/发型/浅蓝针织衫/银项链/白墙/光线/首帧）；Video 1 深度诊断动画只读动作与时间，不得渲染灰度深度图、彩色面部曲线、点、遮罩、文字或图形；仅两次吐舌（约3.20–4.07秒、约8.81–10.68秒），无循环/变速/重置/结尾冻结；固定机位与原脸部尺度；保持下颌宽度、脸颊体积、下巴长度与连续针织袖子；禁止断开的舌头和变形手臂；原声音频由作者外部添加，不生成对白。缺口：作者未公开静态 Picture 1，refs 全部为成片截帧（非参考图）；Video 1 深度/面部曲线动画随帖发布但为视频而非静态参考图，未在本页收录；未发现 quoted post 或额外提示词；demo-web.mp4 为网页压缩版，音频未做转录。",
    video_prompt: {
      title: "Rei 双次吐舌 · ReferenceToVideo 提示词",
      subtitle: "15s · 16:9 · MiniMax H3 ReferenceToVideo · Picture 1 + Video 1 · 英文完整提示词",
      content: `subject_definitions:
<Subject 1> is Rei in <Picture 1>: the exact same face, natural skin, dark eyes, straight long black hair with blunt bangs, light-blue crewneck knitted sweater and silver necklace.
<Subject 2> is the white textured wall and sofa edge in <Picture 1>.
<Picture 1> defines identity, clothing, background, lighting, framing and the opening image.
<Video 1> is a diagnostic depth animation with facial motion curves and a tongue silhouette. Read it only as a guide to movements and their timing; all visible surfaces, colors, facial proportions and illumination come exclusively from <Picture 1>.

summary:
[reference generation] A continuous fifteen-second photorealistic medium close-up of <Subject 1>, fixed eye-level camera, landscape 16:9. Keep the same face, black hair, light-blue sweater, necklace and white wall throughout. She makes two brief playful tongue-out gestures at the original reference times, retracts her tongue after each and continues subtle facial expressions. No speech or cuts.

retention_analysis:
Fully preserve <Picture 1> appearance and environment. Change only facial expression and small head movements. Preserve natural shoulders and continuous knitted sleeves. Translate the motion into natural skin and knitted cloth. The visible result is a normally illuminated color photograph of Rei, with her original jaw width, cheek volume and chin length.

detailed_description:
[Shot 1]
Begin from <Picture 1>, then smoothly perform the expression. From 0.00 to 3.20 seconds, perform the initial eye, lip and small head movements with the tongue inside the mouth. Around 3.20 seconds the lips part and a naturally pink tongue extends over the lower lip; it retracts around 4.07 seconds. Continue the intervening expressions and small gestures. Around 8.81 to 10.68 seconds, perform the second tongue extension, brief hold and retraction. From 10.68 to 15.00 seconds, continue the remaining eye, mouth, head and hand gestures at the original pace. Two tongue cycles only, naturally connected inside the mouth. No looping, speed change, reset or forced freeze at the end. Keep the face recognizable and skin realistic. Keep the camera fixed and the original face scale. Do not change the light-blue sweater or white wall. No gray depth-map rendering, colored facial curves, dots, masks, text or graphics. No detached tongue or distorted arms. Original audio is added separately; do not generate speech.`,
    },
  },
  {
    id: "ailifehack-manga-book-escape-minimax-h3",
    title: "漫画本脱出剧 · MiniMax H3",
    subtitle: "X · @ai_lifehack55 · MiniMax H3 · 15秒 · 1:1",
    description:
      "MiniMax H3 漫画脱出剧：女孩推破漫画页走进现实卧室，回头发现书里还有一个自己。",
    video: "/tutorials/ailifehack-manga-book-escape-minimax-h3/demo-web.mp4",
    poster: "/tutorials/ailifehack-manga-book-escape-minimax-h3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "真人×漫画",
    shots: 10,
    references: 4,
    model: "MiniMax H3",
    style: "实写 × 黑白漫画融合 · 脱出喜剧",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/ai_lifehack55/status/2094985989404205107",
    sourceAuthor: "@ai_lifehack55",
    sourcePlatform: "X",
    sourceImpressions: 60638,
    sourceStats: { asOf: "2026-09-25", likes: 412, reposts: 72, bookmarks: 289 },
    formats: ["破壁出屏"],
    hook: {
      structure: "漫画里 → 破页而出 → 反转",
      opening: "客厅地板上立着一本巨大的漫画书，书页里的黑白女孩在格子中推着页边——第一帧就是「人被困在漫画里」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1–2s 切漫画特写她惊慌推墙，约 4s 撕开书页，约 5–6s 变成真人冲出来，配「バンッ!」拟声大字。", at: 1 },
        { title: "反转", text: "约 10s 她回头指着书，页里还站着一个黑白的自己在问「あなた…誰？」；约 11–12s 漫画版震惊脸。", at: 10 },
        { title: "结尾怎么收", text: "约 13s 切回真人同款震惊脸，约 14s 背景变漫画速度线加「!?」，真人和漫画风叠在一起收。", at: 13 },
      ],
      copyThis: "漫画格和真人来回切：同一个表情先画成漫画、再给真人版，拟声字和速度线直接叠在实拍上。",
      approx: true,
    },
    tags: [
      "15秒 · 漫画脱出",
      "1:1 方形",
      "MiniMax H3",
      "2K 限定",
      "5 图参照",
      "实写×漫画",
    ],
    steps: [
      {
        number: 1,
        title: "先生成 4 张场景锚点图 + 准备女性全身锚点",
        description:
          "按引用帖的 GPT-Image2 指示书（原文已放在下方各参考图的提示词里）配合你自己的女性全身图，依次生成 01 困在书中、02 推破纸面、03 走出书页、04 互相指认四张 1:1 场景图；再准备 05 / WOMAN_MASTER 女性全身锚点——它是脸、发型、年龄感、肤色、体型、全身比例、服装、材质、配色和鞋子的唯一正本。作者没有公开自己的 05 锚点，本页只收录真实公开的 01–04 场景图。",
      },
      {
        number: 2,
        title: "投入 5 张图，理解 ID 引用规则",
        description:
          "主提示词要求把 image1~5 替换成对应图片：Image1–4 = 01–04 场景锚点，Image5 = 05 WOMAN_MASTER；06 / MANGA_SELF 与 07 / REAL_SELF 是 05 的两种状态（黑白漫画 / 实写），08 / BOOK_ROOM 是 01–04 共用的巨大展开书与卧室。每个镜头只用 ID 引用；从 01–04 的女性身上只取位置、姿势和动作，不取外观；人物同一性以 05 优先；不要使用场景锚点里的对白气泡、印刷文字、分格框和白色分割边距。作者强调必须用 2K，768P 参照太弱。",
      },
      {
        number: 3,
        title: "粘贴完整提示词，逐段检查时间轴",
        description:
          "使用下方完整原文（含作者日文说明与【REFERENCE】→【NEGATIVE】各段）。重点检查：0.0–4.6 秒全身必须是书页内的平面黑白漫画，4.6 秒起才出现肤色、实写服装、立体化和落地；4.6–6.8 秒按手→脸→上半身→腿连续变换，破裂时手绘「バリッ！」0.35 秒内碎成墨片消失；10.3 秒唱片刮擦急停，仅 0.2 秒静音；结尾巨大「！？」弹出。画面文字只允许「バリッ！」与「！？」，不得出现第三个女性或同一状态重复。",
      },
    ],
    references_detail: [
      {
        id: "ref-ailifehack-manga-scene-01",
        number: "1",
        title: "01 / SCENE_TRAPPED · 困在书中",
        subtitle: "Image1 · 作者场景图",
        image: "/tutorials/ailifehack-manga-book-escape-minimax-h3/refs/scene-01-trapped.jpg",
        prompt: `真实作者参考图（非成片截帧）：作者在引用帖 https://x.com/ai_lifehack55/status/2094632873458602046 公开的四张场景图之一，对应主提示词的 01 / SCENE_TRAPPED：巨大展开漫画书中的第一场景，女性仍是书页内的黑白漫画人物（吹き出し「ここは… どこ？」「出られない…！」），卧室实景作为共同环境。

以下为引用帖中生成此图的 GPT-Image2 指示书原文（逐字）：

GPT-Image2 カスタムプロンプト公開
マンガ本に閉じ込められた女性の脱出劇

これも動画化するために作ったのですが、ちょっと色々な不具合があるので動画は公開しないかもしれません😭
※使い方
・全身画像を用意
・各指示書と一緒に投入
・全部で4枚の画像を生成

※1枚目指示書
👇️👇️👇️
【指示書】STORYBOARD_PANEL_1_INTRO

【前提条件】
対象キャラクターの「全身の参照画像」を読み込ませること。

【目的】
物語の導入シーン。巨大な漫画本の中に、参照画像の人物が2Dの漫画キャラクターとして閉じ込められている状況を生成する。（※このカットでは、まだ実写3Dの人物は外に存在しない）

【基本設定と画質】
・画質: Ultra-realistic 8K.
・アスペクト比: 1:1（スクエア固定）
・背景: 美しく整頓された寝室。木目の床。自然光。

【シーンと構図の完全指定】
・漫画本の配置: 巨大な漫画本が見開き状態で、画面奥から手前へ斜めに立てかけられている（V4と同一の背景・構造）。
・アクションと状況: 本の前に実写の人物はいない。焦点は「本の中のページ」に当てられている。
・破壊表現: まだ紙面は破れていない。完全な状態のページ。

【漫画世界側の描写とセリフ指定】
・漫画の仕様: スクリーントーンと太いインク線、コマ割りを持つ日本式モノクロ漫画。
・漫画内の人物: 参照画像と同一人物（2D線画）。自分が漫画の中にいることに気づき、周囲を見渡して困惑している表情。
・吹き出しのテキスト（以下の日本語をコマ内に配置）:
 1. 「ここは… どこ？」
 2. 「出られない…！」

【出力における絶対条件】
・実写の人物を登場させず、3Dの部屋と2Dの漫画本という空間を描写すること。

----- ↑ ここまで ↑ -----`,
      },
      {
        id: "ref-ailifehack-manga-scene-02",
        number: "2",
        title: "02 / SCENE_BREAKTHROUGH · 推破纸面",
        subtitle: "Image2 · 作者场景图",
        image: "/tutorials/ailifehack-manga-book-escape-minimax-h3/refs/scene-02-breakthrough.jpg",
        prompt: `真实作者参考图（非成片截帧）：作者在引用帖 https://x.com/ai_lifehack55/status/2094632873458602046 公开的四张场景图之一，对应主提示词的 02 / SCENE_BREAKTHROUGH：漫画中的女性从纸面内侧向外推，纸面开始鼓起与破裂，展示突破动作与紧张表情。

以下为引用帖中生成此图的 GPT-Image2 指示书原文（逐字）：



※2枚目指示書
👇️👇️👇️
【指示書】STORYBOARD_PANEL_2_STRUGGLE

【前提条件】
対象キャラクターの「全身の参照画像」を読み込ませること。

【目的】
漫画の中にいる人物が現実世界に気づき、コマの枠や紙面を内側から強く押して破ろうとしている、ブレイクアウト直前のシーンを生成する。

【基本設定と画質】
・画質: Ultra-realistic 8K, photorealistic.
・アスペクト比: 1:1（スクエア固定）
・背景: 美しく整頓された寝室。木目の床。自然光。

【シーンと構図の完全指定】
・漫画本の配置: 巨大な漫画本が見開き状態で、斜めに立てかけられている（V4と同一の背景・構造）。
・アクションと状況: 漫画の中の人物（2D）が、紙面の裏側から外の世界に向かって両手を強く押し当てている。
・破壊・立体表現: 人物が押している部分の紙面が、わずかに外側（3D空間側）に向かって盛り上がり、紙が少し破れ始めている。モノクロの世界から、押している手や体の一部だけがほんの少しフルカラー（実写）に変化し始めている予兆を描く。

【漫画世界側の描写とセリフ指定】
・漫画の仕様: スクリーントーンと太いインク線、コマ割りを持つ日本式モノクロ漫画。
・漫画内の人物: 参照画像と同一人物。外に出ようと必死な表情。
・吹き出しのテキスト（以下の日本語をコマ内に配置）:
 1. 「外の世界…！？」
 2. 「開いて…！」

【出力における絶対条件】
・「2Dから3Dへ次元の壁を押し破ろうとしている」境界の緊張感を描くこと。

----- ↑ ここまで ↑ -----`,
      },
      {
        id: "ref-ailifehack-manga-scene-03",
        number: "3",
        title: "03 / SCENE_EMERGENCE · 走出书页",
        subtitle: "Image3 · 作者场景图",
        image: "/tutorials/ailifehack-manga-book-escape-minimax-h3/refs/scene-03-emergence.jpg",
        prompt: `真实作者参考图（非成片截帧）：作者在引用帖 https://x.com/ai_lifehack55/status/2094632873458602046 公开的四张场景图之一，对应主提示词的 03 / SCENE_EMERGENCE：实写女性已从书页破洞踏到现实木地板，漫画中的自己仍留在书页中，展示破洞与落地位置。

以下为引用帖中生成此图的 GPT-Image2 指示书原文（逐字）：



※3枚目指示書
👇️👇️👇️
【指示書】STORYBOARD_PANEL__V3_PERFECT_BALANCE

【前提条件】
本プロンプトの実行時には、必ず対象キャラクターの「全身の参照画像」を読み込ませること。

【目的】
実写側の人体プロポーションの完全維持と、巨大な漫画本の構造（コマ割り・見開き）を両立させたシーンを生成する。

【キャラクターのプロポーション維持（最重要）】
・体型指定: 参照画像の人物が持つ「高頭身」「長い脚」「細身でスタイリッシュな骨格」を、実写側と漫画側の両方で完全に再現すること。
・パース崩れの禁止: 実写の人物が本から足を踏み出す際、遠近法による脚の極端な短縮、胴長化、関節の不自然な曲がり、体型の崩れを厳格に禁止する。

【基本設定と画質】
・画質: Ultra-realistic 8K, photorealistic.
・アスペクト比: 1:1（スクエア固定）
・背景: 美しく整頓された寝室。木目の床。自然光。

【シーンと構図の完全指定】
・漫画本の配置: 巨大な漫画本が「見開き状態」で、画面奥から手前へ斜めに立てかけられている構図。単なる1枚の分厚いボードにならないよう、本のページとしての構造を保つこと。
・アクションとポーズ: 実写の人物が、ページの枠内から画面の手前（左下方向）に向かって力強く足を踏み出している。視線は足元へ。片手は破れた紙の縁に添える。
・破壊表現: 人物が踏み出した部分のページ「だけ」が破れており、本全体の構造は崩壊していないこと。

【漫画世界側の描写とセリフ指定（レイアウト構造の維持）】
・漫画の仕様: 必ず「複数の四角いコマ割り（パネル枠線）」を持つ、本格的な日本式のモノクロ漫画レイアウトにすること。1枚絵のポスターにならないこと。
・漫画内の人物: 参照画像と同一人物（2D線画）。困惑して立ち尽くしているポーズ。
・吹き出しのテキスト（以下の日本語をコマ内に配置）:
 1. 「あれ…？」
 2. 「私… どうしてこんなところ…!?」
 3. 「ここは… マンガの中…？」
 4. 「どうやって出たらいいの…？」

【出力における絶対条件】
・「見開きの本とコマ割り」の構造を維持しつつ、「手前への踏み出しとプロポーション」を崩さないこと。
・実写のフルカラーと漫画のモノクロ2Dの強烈なコントラストを描くこと。

----- ↑ ここまで ↑ -----`,
      },
      {
        id: "ref-ailifehack-manga-scene-04",
        number: "4",
        title: "04 / SCENE_ENCOUNTER · 互相指认",
        subtitle: "Image4 · 作者场景图",
        image: "/tutorials/ailifehack-manga-book-escape-minimax-h3/refs/scene-04-encounter.jpg",
        prompt: `真实作者参考图（非成片截帧）：作者在引用帖 https://x.com/ai_lifehack55/status/2094632873458602046 公开的四张场景图之一，对应主提示词的 04 / SCENE_ENCOUNTER：现实女性与书中的漫画自我面对面互相指认，保留巨大展开书、破洞和左右关系。

以下为引用帖中生成此图的 GPT-Image2 指示书原文（逐字），末尾附引用帖同时公开的 2×2 分镜排版指示书原文：



※4枚目指示書
👇️👇️👇️
【指示書】MANGA_BREAKOUT_FINALE_PUNCHLINE

【前提条件】
対象キャラクターの「全身の参照画像」を読み込ませること。

【目的】
本から抜け出した実写の人物と、本の中にいる漫画の人物が対面し、互いに指をさし合って驚くユーモラスな「オチ」のシーンを生成する。V4で確立したプロポーションと本の構造を維持する。

【基本設定と画質】
・画質: Ultra-realistic 8K, photorealistic.
・アスペクト比: 1:1（スクエア固定）
・背景: 美しく整頓された寝室。木目の床。自然光。

【シーンと構図の完全指定】
・漫画本の配置: 巨大な漫画本が「見開き状態」で斜めに立てかけられている（V4と同じ背景構造）。
・アクションとポーズ: 
 実写の人物は本から完全に抜け出し、振り返って漫画のページと対面している。
 実写の人物と漫画内の人物が、互いに顔を見合わせ、目を丸くして驚きながら「互いに指をさし合っている（pointing at each other）」ポーズ。
・破壊表現: ページの一部は破れたままであること。

【漫画世界側の描写とセリフ指定】
・漫画の仕様: スクリーントーンと太いインク線、コマ割りを持つ日本式モノクロ漫画。
・漫画内の人物: 参照画像と同一人物（2D線画）。実写の自分を見て驚愕している。
・吹き出しのテキスト（以下の日本語をコマ内に配置）:
 1. 「えぇっ！？」
 2. 「まさか… 本当に出てきた！？」
 3. 「あなた… 誰！？」

【出力における絶対条件】
・実写側の人体プロポーション（高頭身・長い脚）を崩さないこと。
・「フルカラー実写」と「モノクロ2D漫画」の対比を明確にすること。

----- ↑ ここまで ↑ -----

【指示書】4-IMAGE_STORYBOARD_2X2_LAYOUT_COMPACT

【配置】
アップロードされた4枚の参照画像を使用し、1枚の4パネル・ストーリーボードに整理する。4パネルの2×2構成とし、1枚目＝左上、2枚目＝右上、3枚目＝左下、4枚目＝右下に配置する。アップロード順を変更しない。

【画像の扱い】
各参照画像のアスペクト比を変更しない。引き伸ばし、変形、再構成をしない。不要なクロップを避け、各画像全体が見えるように各パネル内へ収める。パネル比率と合わない余白は白で補う。

【背景・余白】
ストーリーボード全体の背景は白。各パネルの間に約16pxの白いマージンを設ける。黒線や装飾枠は不要。

【維持条件】
人物、顔、髪型、体型、衣装、ポーズ、背景、色味、構図、画質を変更しない。画像内の要素を追加・削除しない。タイトル、番号、キャプション、ロゴ、説明文など新規テキストは追加しない。元画像内にもともとある文字はそのまま維持する。

【最重要条件】
4枚の参照画像の比率を変えない。背景は白。各パネル間は約16pxの白マージン。2×2の4パネル構成。アップロード順に左上→右上→左下→右下へ配置する。参照画像を勝手に描き直さない。`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0.0–1.0秒【参照：01、06、08】低角度广角展示巨大漫画书，高速推进到书中；MANGA_SELF 困惑地环顾，眉头紧皱、呼吸变浅。",
      },
      {
        number: 2,
        description:
          "1.0–3.3秒【参照：01、06】硬切脸部、摸索边界的手、推纸面的侧脸；目光游移、嘴角颤抖，隔着纸说「ここは……どこ？　出られない……」；找到接缝，由恐惧转为决心。",
      },
      {
        number: 3,
        description:
          "3.3–4.6秒【参照：02、06、08】低斜前方连切三镜：用力踩稳的鞋、嵌进纸面的手指、咬紧牙关的脸；「あいて……！」；集中线与黑墨压力环从手部扩散。",
      },
      {
        number: 4,
        description:
          "4.6–6.8秒【参照：02、05、06、07、08】纸面向现实鼓起，手、脸、上半身、腿依次由平面墨线与纸纤维连续转换成 07 的皮肤、头发和服装，边界处网点变为彩色粒子；镜头绕裂口半周、景深变浅；破裂时手绘「バリッ！」飞向镜头并在 0.35 秒内碎成墨片消失。",
      },
      {
        number: 5,
        description:
          "6.8–8.4秒【参照：03、05、07、08】REAL_SELF 落到纸片与地板上微微踉跄；低角度跟拍推近到脸，确认双手与服装，惊讶转为安心和小小的笑：「出られた……？」。",
      },
      {
        number: 6,
        description:
          "8.4–10.3秒【参照：05、07、08】干脆的翻页声；笑容凝固、嘴角下垂、眉毛上扬、只有眼珠转向书；咽口水后战战兢兢回头，从脸快速甩镜到书，越肩衔接 10.3 秒的 04。",
      },
      {
        number: 7,
        description:
          "10.3–11.2秒【参照：04、05、06、07、08】左右关系清楚的中广角：左侧 REAL_SELF 与书中央 MANGA_SELF 同时指向对方，末端短暂停顿（hit stop）；BGM 用唱片刮擦急停。",
      },
      {
        number: 8,
        description:
          "11.2–12.8秒【参照：04、05、06】猛推到 MANGA_SELF：眼睛和嘴张大、脸颊排线增加，隔着纸说「まさか……本当に出てきた！？」，背后放射状漫画线。",
      },
      {
        number: 9,
        description:
          "12.8–14.0秒【参照：04、05、07】约 85mm 猛推到 REAL_SELF 脸部：保持 05 的脸部比例，眉毛跳起、瞳孔收缩、嘴张开、肩膀后缩；短暂停顿后以室内声说「あなた……誰？」。",
      },
      {
        number: 10,
        description:
          "14.0–15.0秒【参照：04、05、07】85mm 再近一档的惊讶脸：脸和服装保持彩色，只有背景变成黑白网点与集中线；巨大「！？」从脑后弹出一次；书→镜头→书两次回看，以一记滑稽音效结束。",
      },
    ],
    constraints:
      "仅限 2K（768P 画面参照太弱，人物还原无法保证）；共 5 张参照：01–04 场景锚点 + 05 WOMAN_MASTER（需自行替换）；01–04 只取位置/姿势/动作，外观以 05 为准，06/07 为同一人的漫画/实写两态；0.0–4.6 秒保持书页内平面黑白漫画，4.6 秒起才实写化；画面文字只允许「バリッ！」「！？」，无字幕/气泡/logo/水印；无第三位女性或同一状态重复；约 90 BPM 悬疑喜剧 BGM，仅 10.3 秒唱片刮擦后 0.2 秒静音。缺口：05 WOMAN_MASTER 独立原图作者未公开；MiniMax H3 具体入口/UI 参数/seed/采样与音频设置未公开；4 张场景图的生成输入与参数未公开（仅公开了 GPT-Image2 指示书）；原视频工程与未压缩音轨未公开。原片 1440×1440，本页 demo 压缩为 1280×1280。",
    video_prompt: {
      title: "漫画本脱出剧",
      subtitle: "15秒 · 1:1 · MiniMax H3",
      content: `MiniMax H3 動画プロンプト公開
マンガ本に閉じ込められた女性の脱出劇

こちら2K限定になります。理由は768Pは画像参照が弱すぎて人物の再現性が担保できないため🎥

簡易ストーリーボードを使ったのですが、マンガ内の文字が認識できないのでアンカー画像参照に方向転換😅

※動画化の進め方
・参照元の指示書で4枚の画像を生成
・生成された画像とアンカー画像が必要
・合計5枚の画像を参照させます

※投入用プロンプト（image1~5 置換え必須）
👇️👇️👇️
【REFERENCE】
Image1 \`01 / SCENE_TRAPPED\`：本の中に閉じ込められた第一場面、巨大本、室内、人物の位置とポーズ。
Image2 \`02 / SCENE_BREAKTHROUGH\`：ページを押し破る第二場面、動作、紙の亀裂。
Image3 \`03 / SCENE_EMERGENCE\`：現実へ出た第三場面、破れ穴、着地位置。
Image4 \`04 / SCENE_ENCOUNTER\`：本の中の自分と対面する第四場面の左右、指差し、巨大本。
Image5 \`05 / WOMAN_MASTER\`：利用者が差し替える女性全身アンカー。顔、髪、年齢感、肌、体型、全身比率、衣装、素材、配色、靴の唯一の正本。
\`06 / MANGA_SELF\`：05を同じ人物・衣装のままモノクロ漫画化した状態。
\`07 / REAL_SELF\`：05を正確に維持した実写状態。
\`08 / BOOK_ROOM\`：01～04共通の巨大な見開き本、木製床、寝具、カーテン、植物、暖かな昼光の寝室。

各ショットはIDだけで参照する。01～04の女性からは位置、ポーズ、動作だけを使い、外見は使わない。人物同一性は05を最優先し、06と07を同一人物の二状態とする。女性アンカーの差し替えごとに05から読み直す。場面アンカーの吹き出し、印刷文字、コマ枠、白い分割余白は使わない。

【CONDITION DEFINITION】
15秒、1:1。シネマティック実写と精密なモノクロ漫画の融合。実写は自然な肌、布、髪、暖かな立体光、漫画は紙目、網点、インク線を明瞭に分ける。4パネルは物語アンカーで、カット数は4つに限定しない。前半は真剣な脱出劇、最後は「自分が本の中に残る」不条理を驚きとパロディーへ転換。表情は困惑→恐怖→決意→安堵→違和感→強い驚き。顔を変形させず眉、瞳、口、顎、肩、呼吸を連動する。0.0～4.6秒は全身を本の印刷面内に閉じ込めた平面モノクロ漫画とし、紙の内側から現実側へ押す。肌色、実写衣装、立体化、身体突出、床への接地は4.6秒から。

【SHOT / FLOW】
0.0～1.0秒【参照：01、06、08】巨大本を低い広角で見せ、本の中へ高速プッシュイン。MANGA_SELFは困惑して見回し、眉が寄り呼吸が浅くなる。
1.0～3.3秒【参照：01、06】顔、境界を探る手、紙を押す横顔をハードカット。目が泳ぎ口元が震える。紙越しに「ここは……どこ？　出られない……」。継ぎ目を見つけ、恐怖から決意へ。
3.3～4.6秒【参照：02、06、08】低い斜め前方。踏ん張る靴、紙へ食い込む指、歯を食いしばる顔を三連続で切る。「あいて……！」。集中線と黒インクの圧力リングが手から広がる。
4.6～6.8秒【参照：02、05、06、07、08】紙が現実側へ膨らみ、手、顔、上半身、脚の順に平面のインクと紙繊維が07の肌、髪、衣装へ連続変換。境界で網点が色粒子へ変わる。カメラは裂け目を半周し、立体化に合わせ被写界深度を浅くする。破裂時、手描きの\`バリッ！\`が手前へ飛び、黒インク片へ砕け0.35秒以内に消える。女性は一人のまま05を維持する。
6.8～8.4秒【参照：03、05、07、08】REAL_SELFが紙片と床へ着地し少しよろける。低い追従から顔へ寄る。両手と参照衣装を確認し、驚きが安堵と小さな笑みへ。「出られた……？」。
8.4～10.3秒【参照：05、07、08】乾いたページ音。BGMに合わせ笑みが止まり、口角が落ち、眉が上がり、瞳だけ本へ動く。つばを飲み恐る恐る振り向く。顔から本へ高速ホイップパンし、肩越しのまま10.3秒の04へ接続。安堵が違和感へ変わる。
10.3～11.2秒【参照：04、05、06、07、08】左右が読める中広角。左のREAL_SELFと本の中央のMANGA_SELFが同時に指を差し、終端で短くヒットストップ。BGMはレコードスクラッチで急停止。
11.2～12.8秒【参照：04、05、06】MANGA_SELFへスマッシュズーム。目と口を大きく開き、頬のハッチングが増える。紙越しに「まさか……本当に出てきた！？」。背後に放射状の漫画線。
12.8～14.0秒【参照：04、05、07】85mm相当でREAL_SELFの顔へスマッシュズーム。05の顔比率を保ち、眉が跳ね、瞳孔が縮み、口が開き、肩が引ける。短い間の後、室内音声で「あなた……誰？」。
14.0～15.0秒【参照：04、05、07】85mmのまま一段近い驚き顔。顔と衣装はカラー、背景だけ白黒ハーフトーンと集中線へ変わり、巨大な\`！？\`が頭の後ろから出て一度弾む。本、カメラ、本の順に二度見し、コミカルな一音で終了。

【CAMERA / EDITING】
広角、顔、手元、低角度、短い回り込み、ホイップパン、交互スマッシュズームを使い、同じ中広角を続けない。動作か表情変化で切り、長い静止、スロー、無目的な360度回転、フェードなし。最終4.7秒は対面、交互リアクション、驚き顔アップの順に加速。

【MOTION GRAPHICS / TYPOGRAPHY】
集中線、ハーフトーン、インクの圧力リング、短いヒットストップ、紙片の奥行きを使う。\`バリッ！\`は黒インク、\`！？\`は白文字に赤いずれ影。わずかにオーバーシュートし、顔を隠さない。表示文字はこの二つだけで字幕や吹き出しにしない。

【SOUND】
overall_soundscape:
紙越しと室内の声は同じ基礎声質で距離感だけ変える。紙の張り、破裂、紙片、着地、衣擦れ、ページ音を画面へステレオ同期。台詞を重ねず、追加の声や笑い声なし。
non_diegetic_music:
0.2秒の演出無音を除き全編に約90 BPMのミステリーコメディーBGMを連続使用。ピチカート弦、バスクラリネット、チェレスタ、軽い打楽器。脱出まで上昇し、破裂で低音と打楽器を同期、着地後は一瞬明るくする。10.3秒でレコードスクラッチ後0.2秒だけ無音、以後は低いピチカート、最後は乾いた一音。台詞中はダッキング。

【NEGATIVE】
場面アンカーの吹き出し、縦書き文字、複数コマ、白い分割余白を出さない。許可した\`バリッ！\`と\`！？\`以外の文字、字幕、ロゴ、透かしなし。第三の女性、同一状態の重複、01～04の人物外見流用、別人化、05の人物・衣装・配色の逸脱、広角による顔変形、4.6秒前の肌色・実写化・立体化・身体突出・床接地、解剖学的変形、無表情、10.3秒以降の長い同一構図、指定0.2秒以外のBGM欠落、イベント順の変更を避ける。`,
    },
  },
  {
    id: "diplomeme-front-row-girl-seedance-2-5",
    title: "前排女孩与歌手的瞬间对视 · Seedance 2.5",
    subtitle: "X · @Diplomeme · Seedance 2.5 · Flovaai · 30秒 · 16:9",
    description:
      "Seedance 2.5 演唱会手机自拍：前排女孩与歌手短暂对视，全程真实手机抖动质感。",
    video: "/tutorials/diplomeme-front-row-girl-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/diplomeme-front-row-girl-seedance-2-5/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "手机实拍",
    shots: 12,
    references: 5,
    model: "Seedance 2.5",
    style: "手机第一人称演唱会自拍 · 真实手机质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Diplomeme/status/2102613869365772296",
    sourceAuthor: "@Diplomeme",
    sourcePlatform: "X",
    sourceImpressions: 11056,
    sourceStats: { asOf: "2026-09-25", likes: 223, reposts: 19, bookmarks: 187 },
    formats: ["手机POV·Vlog", "角色表演"],
    hook: {
      structure: "自拍尖叫 ↔ 手机录舞台 交替",
      opening: "演唱会人群里的前置自拍，女孩对镜头大笑，身后全是举手机的观众——一开场就是现场的兴奋感。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 3s 转成她举手机拍台上歌手，约 8s 切回自拍尖叫，之后「拍舞台 ↔ 自拍」反复交替。", at: 3 },
        { title: "关键变化", text: "约 13.5s 歌手走到台前，朝她的镜头伸手一指，约 15.5s 立刻切她捂不住的尖叫。", at: 13.5 },
        { title: "结尾怎么收", text: "约 18–21s 插一段全场灯海大全景，再回到举手机和大笑自拍，红光里收住。", at: 18 },
      ],
      copyThis: "全程用观众视角：一手自拍一手录，歌手的每个动作都立刻接一个她的反应镜头。",
      approx: true,
    },
    tags: [
      "30秒 · 演唱会",
      "16:9 横屏",
      "Seedance 2.5",
      "Flovaai",
      "手机自拍",
      "前排对视",
    ],
    steps: [
      {
        number: 1,
        title: "理解真实手机拍摄质感的核心约束",
        description:
          "本片的价值在于完整复刻真实手机演唱会录像：CAMERA段落定义前后置镜头翻转、自然手臂运动、手持抖动、构图不完美、偶尔裁脸、自动对焦/曝光呼吸、滚动快门、手指误入；VISUAL CHARACTER段落要求高ISO噪点、数码锐化、压缩失真、运动模糊和曝光泵动。明确排除云台、无人机和专业演唱会摄影。不要在跟随时先删除这些'瑕疵'段落，因为它们正是真实感的来源。",
      },
      {
        number: 2,
        title: "锁定角色与场景的持续一致性",
        description:
          "CHARACTER锁定女观众（20多岁、长黑发、金色圈耳环、黑色演唱会装+皮夹克）和虚构男歌手（原创外观、深色卷发、短胡须、黑色舞台装）；SETTING锁定夜间体育场、前排护栏、红白灯光、烟雾、密集人群。CONTINUITY段落要求同一女孩、服装、首饰、位置、歌手和手机；前后置镜头切换必须有物理动机（翻手机）；人群逐渐混乱、头发和衣服自然凌乱。",
      },
      {
        number: 3,
        title: "粘贴完整提示词并注意画幅不一致",
        description:
          "使用下方完整 30 秒提示词（含 STORY 的 12 个 2.5 秒节拍、CAMERA、CHARACTER、SETTING、LIGHTING、HUMAN PERFORMANCE、AUDIO、VISUAL CHARACTER、CONTINUITY 和 NO 清单）。注意：提示词开头标注 9:16 竖屏，但作者 X 发布视频实际为 1280×720、16:9 横屏。本包按实际媒体保持 16:9 并诚实注明；若需竖屏效果请根据自己目标调整。生成后检查两条硬连续性：前后置镜头翻转有物理动机、女孩和歌手外观一致；以及节拍对照 refs/ 成片截帧（非作者参考图）。",
      },
    ],
    references_detail: [
      {
        id: "ref-front-row-frame-01",
        number: "1",
        title: "开场前排自拍",
        subtitle: "t≈0s · 前置自拍",
        image: "/tutorials/diplomeme-front-row-girl-seedance-2-5/refs/film-frame-01.jpg",
        prompt: "成片截帧（非作者参考图/角色卡）：女孩在前排护栏前举手臂自拍，背后可见舞台和人群；她兴奋喊话'I'M SO CLOSE!'。从作者发布视频抽帧，仅作跟随拆解；不是角色卡/参考图。",
      },
      {
        id: "ref-front-row-frame-02",
        number: "2",
        title: "翻到后置拍歌手",
        subtitle: "t≈6s · 后置镜头变焦",
        image: "/tutorials/diplomeme-front-row-girl-seedance-2-5/refs/film-frame-02.jpg",
        prompt: "成片截帧（非作者参考图/角色卡）：翻到后置镜头，数码变焦拍摄虚构歌手接近舞台边缘，红色灯光照亮，手机微抖并失焦。从作者发布视频抽帧，仅作跟随拆解；不是角色卡/参考图。",
      },
      {
        id: "ref-front-row-frame-03",
        number: "3",
        title: "对视瞬间与反应",
        subtitle: "t≈12s · 短暂对视",
        image: "/tutorials/diplomeme-front-row-girl-seedance-2-5/refs/film-frame-03.jpg",
        prompt: "成片截帧（非作者参考图/角色卡）：虚构歌手看向前排区域，短暂对视后女孩翻回前置自拍，失控大笑，红色舞台光照亮一侧脸，头发凌乱。从作者发布视频抽帧，仅作跟随拆解；不是角色卡/参考图。",
      },
      {
        id: "ref-front-row-frame-04",
        number: "4",
        title: "灯光爆发与追拍",
        subtitle: "t≈18s · 红白光爆发",
        image: "/tutorials/diplomeme-front-row-girl-seedance-2-5/refs/film-frame-04.jpg",
        prompt: "成片截帧（非作者参考图/角色卡）：舞台红白灯光爆发，虚构歌手站在前台，女孩举高手机拍摄，画面短暂过曝。从作者发布视频抽帧，仅作跟随拆解；不是角色卡/参考图。",
      },
      {
        id: "ref-front-row-frame-05",
        number: "5",
        title: "收尾举高录制",
        subtitle: "t≈24s · 最后举高",
        image: "/tutorials/diplomeme-front-row-girl-seedance-2-5/refs/film-frame-05.jpg",
        prompt: "成片截帧（非作者参考图/角色卡）：女孩与朋友在前排举高手机录制，红色灯光下虚构歌手在舞台中央，手部和其他手机部分遮挡画面，最后手机因跳跃突然下落。从作者发布视频抽帧，仅作跟随拆解；不是角色卡/参考图。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:02.5 自拍开场：前置自拍，她已在前排，直视镜头微笑。头发随人群和舞台风扇飘动。她举起一只手臂兴奋尖叫：'I'M SO CLOSE!'。背后可见舞台。",
      },
      {
        number: 2,
        description:
          "00:02.5–00:05 歌手出现：快速翻到后置镜头。虚构歌手走向舞台前沿。巨大红光照亮他。手机挣扎曝光场景。她的手因兴奋而抖动。几部观众手机出现在镜头前。",
      },
      {
        number: 3,
        description:
          "00:05–00:07.5 拉近：她数码变焦拍虚构歌手。他接近舞台边缘。镜头短暂失焦。重新锁定他。他只有几米远。女人在画外尖叫。",
      },
      {
        number: 4,
        description:
          "00:07.5–00:10 翻回自拍：翻回前置。她失控大笑尖叫。眼睛睁大兴奋。背后人群跳跃。她微微侧转镜头，试图同时框入自己和舞台。",
      },
      {
        number: 5,
        description:
          "00:10–00:12.5 演出时刻：后置镜头。虚构歌手直接对前排表演。他把麦克风朝向观众。人群跟唱。手机因她跳跃剧烈抖动。一只举起的手臂短暂遮挡整个画面。",
      },
      {
        number: 6,
        description:
          "00:12.5–00:15 眼神接触：她把手机绕过遮挡物。虚构歌手再次可见。他直视前排区域。短暂瞬间，他似乎与她对视。手机变得出奇稳定。她冻结半秒。然后尖叫。",
      },
      {
        number: 7,
        description:
          "00:15–00:17.5 混乱反应：前置镜头。她把镜头转回自己。她失控大笑。头发凌乱。红色舞台光照亮她一侧脸。她喊道：'NO WAY!'。镜头剧烈抖动。",
      },
      {
        number: 8,
        description:
          "00:17.5–00:20 黑场手机灯海：后置镜头。舞台突然黑暗。全场数千手机闪光灯亮起。镜头缓慢扫过观众。粉丝一起唱歌。她的呼吸和笑声靠近麦克风清晰可闻。",
      },
      {
        number: 9,
        description:
          "00:20–00:22.5 灯光爆发：舞台突然爆发强烈红白光。虚构歌手出现在舞台前沿。人群爆发。她举高手机。画面短暂过曝。",
      },
      {
        number: 10,
        description:
          "00:22.5–00:25 前排追拍：虚构歌手直接沿舞台边缘走。镜头跟随他。粉丝向他伸手。下方可见保安。她的手机在手、手机和表演者之间挣扎对焦。自然运动模糊。",
      },
      {
        number: 11,
        description:
          "00:25–00:27.5 自拍反应：翻回前置。她完全不知所措，大笑喊叫同时试图喘气。背后朋友可见。所有人都在尖叫。肩膀上方舞台依然可见。",
      },
      {
        number: 12,
        description:
          "00:27.5–00:30 最后录制：后置镜头。虚构歌手站在巨大红光下。护栏后数千手机发光。女人尽可能举高手机。画面倾斜。手部部分遮挡表演者。人群尖叫。手机因她跳跃突然稍微下落。录制突然结束。",
      },
    ],
    constraints:
      "提示词标注9:16但实际发布为16:9（本包按实际媒体诚实保留）；手机前后置翻转需有物理动机；手持抖动/失焦/曝光泵动/高ISO/数码锐化/压缩失真/滚动快门保留真实感；排除云台/无人机/专业摄影；女孩和虚构歌手外观/服装/首饰全程一致；原始手机声音（人群/歌手/低音失真/削波/呼吸笑声），无后配乐；作者未公开角色卡/参考图/negative prompt/seed/UI参数；Flovaai具体设置未披露。",
    video_prompt: {
      title: "FRONT ROW GIRL",
      subtitle: "30s · 9:16 (prompt) / 16:9 (actual) · Seedance 2.5 · Smartphone Concert POV",
      content: `"FRONT ROW GIRL"
30 SECONDS | 9:16 | PHOTOREALISTIC SMARTPHONE CONCERT VIDEO | SEEDANCE 2.5 | MULTISHOT
CAMERA
The entire video is captured on a modern smartphone by a beautiful young adult woman standing directly against the front-row barricade at a massive sold-out concert featuring a fictional male singer.
It feels like authentic personal phone footage uploaded immediately after the concert.
Front-facing selfie camera mixed with quick flips to the rear camera.
Natural arm movement.
Handheld shake.
Imperfect framing.
Occasional face cropping.
Autofocus hunting.
Exposure pumping from intense stage lights.
Digital sharpening.
High-ISO noise in dark areas.
Rolling-shutter distortion during fast movement.
Accidental fingers near the lens.
No professional camera.
No cinematic gimbal.
No drone.
No polished concert-film cinematography.
CHARACTER
YOUNG WOMAN:
Beautiful adult woman in her 20s.
Long dark hair.
Natural attractive facial features.
Minimal glamorous concert makeup.
Gold hoop earrings.
Simple necklace.
Fitted black concert outfit with a stylish leather jacket.
She looks like a real concertgoer, not a professional model.
Natural skin texture.
Slight perspiration from the heat and crowd.
Her hair becomes increasingly messy as she moves and dances.
She is genuinely excited to be seeing the fictional headliner from the front row.
FICTIONAL HEADLINER:
Original male singer in his late 20s.
Dark curly hair.
Short beard.
Black layered stage outfit.
Distinctive but completely original appearance.
Handheld microphone.
Confident live-performance presence.
He performs directly toward the front-row audience.
Do not resemble any real-world singer or celebrity.
SETTING
Massive sold-out stadium concert at night.
She is standing directly against the barricade.
The stage is only a few meters away.
The fictional singer is performing directly in front of her.
Thousands of fans behind her.
Hands and smartphones constantly entering the frame.
Security personnel between the barricade and stage.
Huge LED screens.
Deep red stage lighting.
White spotlights.
Heavy atmospheric haze.
Smoke drifting through the stage lights.
The entire environment feels loud, crowded and physically overwhelming.
STORY
00:00–00:02.5 — SELFIE
Front-facing smartphone camera.
She is already in the front row, smiling directly into the camera.
Her hair moves from the crowd and stage fans.
She raises one arm and screams excitedly:
"I'M SO CLOSE!"
The stage is visible behind her.

00:02.5–00:05 — THE SINGER APPEARS
She quickly flips the camera to the rear camera.
The fictional singer walks toward the front of the stage.
Massive red lights illuminate him.
The phone struggles to expose the scene.
Her hand shakes from excitement.
Several fans' phones appear in front of the lens.

00:05–00:07.5 — CLOSE
She digitally zooms toward the fictional singer.
He approaches the edge of the stage.
The camera briefly loses focus.
It locks back onto him.
He is only a few meters away.
The woman screams off-camera.

00:07.5–00:10 — BACK TO SELFIE
The phone flips back to her face.
She is laughing and screaming.
Her eyes are wide with excitement.
The crowd behind her is jumping.
She turns the camera slightly sideways, trying to fit herself and the stage into the same frame.

00:10–00:12.5 — THE PERFORMANCE
Rear camera again.
The fictional singer performs directly toward the front row.
He holds the microphone toward the audience.
The crowd sings along.
The phone shakes heavily as she jumps.
A raised arm briefly blocks the entire frame.

00:12.5–00:15 — EYE CONTACT
She moves the phone around the obstruction.
The fictional singer becomes visible again.
He looks directly toward the front-row section.
For a brief moment, he appears to make eye contact with her.
The phone becomes surprisingly steady.
She freezes for half a second.
Then screams.

00:15–00:17.5 — CHAOS
Front-facing camera.
She turns the camera back toward herself.
She is laughing uncontrollably.
Her hair is messy.
Red stage light illuminates one side of her face.
She shouts:
"NO WAY!"
The camera shakes violently.

00:17.5–00:20 — LIGHTS OUT
Rear camera.
The stage suddenly goes dark.
Thousands of phone flashlights appear throughout the stadium.
The camera slowly moves across the audience.
Fans are singing together.
Her breathing and laughter are audible close to the microphone.

00:20–00:22.5 — LIGHT EXPLOSION
The stage suddenly erupts in intense red and white light.
The fictional singer appears at the front of the stage.
The crowd explodes.
She raises her phone higher.
The image briefly becomes overexposed.

00:22.5–00:25 — FRONT ROW
The fictional singer walks directly along the edge of the stage.
The camera follows him.
Fans reach toward him.
Security is visible below.
Her phone struggles to focus between hands, phones and the performer.
Natural motion blur.

00:25–00:27.5 — SELFIE REACTION
The phone flips back to her.
She is completely overwhelmed, laughing and shouting while trying to catch her breath.
Her friends are visible behind her.
Everyone is screaming.
The stage remains visible over her shoulder.

00:27.5–00:30 — FINAL RECORDING
Rear camera.
The fictional singer stands beneath enormous red lights.
Thousands of phones glow behind the barricade.
The woman holds her phone as high as possible.
The frame is tilted.
Hands partially block the performer.
The crowd screams.
The phone suddenly drops slightly as she jumps.
The recording ends abruptly.
LIGHTING
Authentic live-concert lighting.
Deep red dominant lighting.
White spotlights.
Dark shadows.
LED screen illumination.
Strong backlighting.
Stage haze.
Occasional lens flare.
Bright lights causing temporary smartphone exposure clipping.
Natural skin tones whenever lighting allows.
No beauty lighting.
HUMAN PERFORMANCE
The woman must behave like a genuine excited fan.
She laughs.
She screams.
She dances.
She loses her framing.
She forgets the camera is recording.
She reacts naturally to the fictional singer.
She does not constantly pose.
She does not behave like an influencer filming an advertisement.
The surrounding crowd behaves independently.
AUDIO
RAW SMARTPHONE AUDIO.
Massive crowd screaming.
Fans singing.
The fictional singer's amplified voice.
Heavy bass distortion.
Microphone clipping.
Nearby fans shouting.
The woman's laughter and screaming close to the microphone.
Occasional muffled audio when the phone moves against clothing or another person.
No studio-quality vocals.
No added soundtrack.
No cinematic sound design.
VISUAL CHARACTER
Photorealistic modern smartphone footage.
Natural smartphone HDR.
High-ISO noise.
Digital sharpening.
Subtle compression artifacts.
Rolling-shutter distortion.
Autofocus hunting.
Exposure pumping.
Natural motion blur.
Occasional blown highlights.
Realistic skin texture.
Realistic hair movement.
No beauty-filter smoothing.
No plastic skin.
No perfect framing.
No professional camera look.
The footage should look indistinguishable from a real fan's concert video.
CONTINUITY
Same woman throughout.
Same hairstyle.
Same outfit.
Same jewelry.
Same concert.
Same front-row position.
The phone remains the only recording device.
The fictional singer remains consistent.
Selfie camera and rear camera transitions must feel physically motivated by the woman flipping her phone.
The crowd becomes progressively more chaotic as the performance intensifies.
The woman's hair and clothing become naturally more disheveled from dancing and crowd movement.
NO MUSIC VIDEO.
NO PROFESSIONAL CONCERT FILM.
NO MODEL POSES.
NO STAGED REACTIONS.
NO PERFECT CAMERA MOVEMENT.
NO AI-SLOP.`,
    },
  },
  {
    id: "geekcatx-whitemodel-greenscreen-h3",
    title: "白模绿幕抠像 · 动作复刻 · MiniMax H3",
    subtitle: "X · @GeekCatX · MiniMax H3 · 8秒 · 16:9",
    description:
      "MiniMax H3 白模绿幕：照参考视频逐帧复刻动作，生成绿幕前的白模，方便后期抠像。",
    video: "/tutorials/geekcatx-whitemodel-greenscreen-h3/demo-web.mp4",
    poster: "/tutorials/geekcatx-whitemodel-greenscreen-h3/poster.jpg",
    duration: "8秒",
    durationSec: 8,
    styleLabel: "白模动画",
    shots: 1,
    references: 4,
    model: "MiniMax H3",
    style: "白模绿幕抠像 · 动作复刻",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/GeekCatX/status/2103055823928995843",
    sourceAuthor: "@GeekCatX",
    sourcePlatform: "X",
    sourceImpressions: 5036,
    sourceStats: { asOf: "2026-09-25", likes: 56, reposts: 3, bookmarks: 69 },
    formats: ["角色表演"],
    hook: {
      structure: "白模绿幕 · 连续舞蹈动作",
      opening: "纯绿幕上一只灰白色无贴图的猫白模，第一帧就摆出 dab 姿势——一眼看出是做抠像素材用的。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1.5–2s 猫爪朝镜头甩过来几乎占满画面，接着出拳、扭身、摆手，动作一个接一个不停。", at: 1.5 },
        { title: "结尾怎么收", text: "约 6.5s 又一次举爪冲镜头，之后身体越来越靠近镜头，8 秒里没有切镜。", at: 6.5 },
      ],
      copyThis: "背景保持纯绿、角色用无材质白模，只看动作；再让爪子朝镜头甩出来制造纵深。",
      approx: true,
    },
    tags: [
      "8秒 · 白模绿幕",
      "16:9 横屏",
      "MiniMax H3",
      "动作复刻",
      "绿幕抠像",
    ],
    steps: [
      {
        number: 1,
        title: "理解输入与输出的关系",
        description:
          "本片是 OUTPUT 演示，不是输入教程。作者上传了未公开的参考视频 Video 1 作为动作来源，MiniMax H3 将主体转换为白模并放在纯绿幕背景前。提示词中的 <Video 1> 标记保留，表示需要你自己准备参考视频。白模是未上色的有机雕塑（哑光浅灰白 #E6E6E6），去掉眼睛/五官/毛发纹理/衣物/花纹/颜色，但保留轮廓/比例/体态/肌肉起伏。",
      },
      {
        number: 2,
        title: "准备参考视频与 MiniMax H3",
        description:
          "准备你自己的参考视频作为动作来源（作者未公开 Video 1）。使用 MiniMax H3 平台。提示词要求：动作要求每帧姿态、朝向、重心与原视频同一时刻一致，保留柔韧性和自然形变，节奏卡点重合。绿幕规范：背景纯色 #00B140，亮度均匀无渐变/暗角/地平线/地面纹理；无投影/光遮蔽暗区；主体无绿色反光/溢色/绿边/半透明/拖影；细长部位（耳朵/尾巴/翅膀边缘/手指）边缘清晰。镜头与画面逐帧匹配原视频，用均匀柔和正面光。音频完整保留参考视频原始音频，不替换/不重新生成，严格同步画面。",
      },
      {
        number: 3,
        title: "粘贴完整提示词并上传参考视频",
        description:
          "使用下方完整中文提示词（保留 <Video 1> 标记）。上传你准备的参考视频。禁止：机械关节/球形关节/拼接缝/分段结构/机器人/木偶/人偶/玩具/低多边形；僵硬动作；保留原场景和文字；出现五官/毛发纹理/衣物；背景出现绿色以外的颜色。检查输出：主体动作逐帧匹配参考视频；白模材质哑光浅灰白无接缝；背景纯色 #00B140 均匀无渐变；边缘清晰无溢色；原始音频保留。",
      },
    ],
    references_detail: [
      {
        id: "ref-geekcatx-still-01",
        number: "1",
        title: "早期动作节拍",
        subtitle: "t≈1s · 成片截帧",
        image: "/tutorials/geekcatx-whitemodel-greenscreen-h3/refs/still-01.jpg",
        prompt: "成片截帧（非角色卡）：约1秒动作节拍，白模主体在纯绿幕背景前，哑光浅灰白材质，无五官/毛发纹理/衣物，保留轮廓和比例。",
      },
      {
        id: "ref-geekcatx-still-02",
        number: "2",
        title: "中段动作节拍",
        subtitle: "t≈3s · 成片截帧",
        image: "/tutorials/geekcatx-whitemodel-greenscreen-h3/refs/still-02.jpg",
        prompt: "成片截帧（非角色卡）：约3秒动作节拍，白模主体动作变化，背景纯色 #00B140 均匀无渐变，边缘清晰无溢色。",
      },
      {
        id: "ref-geekcatx-still-03",
        number: "3",
        title: "后段动作节拍",
        subtitle: "t≈5s · 成片截帧",
        image: "/tutorials/geekcatx-whitemodel-greenscreen-h3/refs/still-03.jpg",
        prompt: "成片截帧（非角色卡）：约5秒动作节拍，展示白模动作的柔韧性和自然形变，脊柱弯曲/伸展收缩符合真实运动。",
      },
      {
        id: "ref-geekcatx-still-04",
        number: "4",
        title: "收尾动作节拍",
        subtitle: "t≈7s · 成片截帧",
        image: "/tutorials/geekcatx-whitemodel-greenscreen-h3/refs/still-04.jpg",
        prompt: "成片截帧（非角色卡）：约7秒动作节拍，白模完成动作序列，细长部位（手指等）边缘清晰，无拼接缝/机械关节感。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "完整 8 秒：白模主体按照上传参考视频 Video 1 的动作序列，在纯 #00B140 绿幕背景前逐帧复刻每个姿态、朝向、重心变化。白模为哑光浅灰白色（#E6E6E6）一体成型有机雕塑，表面平滑无接缝，去掉眼睛、五官、毛发纹理、衣物、花纹和颜色，但保留原主体的轮廓、比例、体态和肌肉起伏。动作柔韧自然，脊柱弯曲、伸展收缩、落地缓冲等形变真实。背景整片纯色 #00B140，亮度均匀无渐变/暗角/地平线/地面纹理，无投影和光遮蔽暗区。主体边缘清晰无绿色反光/溢色/绿边/半透明/拖影，细长部位（手指/耳朵等）边缘精确。镜头机位、景别、运动、构图、画幅比例与原视频逐帧一致，使用均匀柔和正面光。完整保留参考视频原始音频，与画面严格同步。",
      },
    ],
    constraints:
      "需要自备参考视频 Video 1（作者未公开输入）；白模哑光浅灰白 #E6E6E6 无接缝；去掉五官/毛发纹理/衣物/花纹/颜色；保留轮廓/比例/体态/肌肉起伏；动作每帧与原视频同一时刻一致，保留柔韧性和自然形变；背景纯色 #00B140 均匀无渐变/暗角/投影；边缘清晰无溢色/绿边；镜头逐帧匹配原视频；保留原始音频严格同步；禁止机械关节/拼接缝/僵硬动作/保留原场景。",
    video_prompt: {
      title: "白模绿幕提示词",
      subtitle: "MiniMax H3 · 白模绿幕动作复刻 · 中文完整提示词",
      content: `白模绿幕提示词

请以我上传的参考视频<Video 1>为唯一动作来源，将【转换主体】转换为3D白模，放在纯绿幕背景前，完美复刻原视频中每个主体的位置、动作、节奏卡点、运动轨迹和镜头构图,方便后期抠像。

【白模形象】
白模是未上色的一体成型有机雕塑，材质为哑光浅灰白色（接近#E6E6E6）：表面平滑无接缝，身体各部分自然过渡；去掉眼睛、五官、毛发纹理、羽毛、衣物、花纹和颜色；保留主体原有的轮廓、比例、体态和肌肉起伏，一眼能认出是什么主体。有毛动物保留毛发撑出的外轮廓体积，只去掉毛发纹理。主体的数量和种类与原视频一一对应。

【动作要求】
- 每一帧的姿态、朝向、重心，以及四肢、尾巴、翅膀的位置，都与原视频同一时刻一致；
- 保留动作的柔韧性和自然形变（脊柱弯曲、伸展收缩、落地缓冲、尾巴甩动）；
- 节奏卡点完全重合，主体之间的位置和遮挡关系与原视频一致。

【绿幕规范】
- 背景整片是纯色色键绿（#00B140），亮度均匀，无渐变、无暗角、无地平线、无地面纹理；
- 背景上没有投影，也没有环境光遮蔽造成的暗区；
- 主体身上没有绿色反光或溢色，边缘没有绿边、半透明或拖影；
- 耳朵、尾巴、翅膀边缘、手指等细长部位也要边缘清晰。

【镜头与画面】
机位、景别、镜头运动、构图、画幅比例、时长和帧率与原视频逐帧一致，用均匀柔和的正面光。

【音频要求】
完整保留参考视频的原始音频，不替换、不重新生成，与画面严格同步。

【禁止】
不得出现机械关节、球形关节、拼接缝、分段结构，也不能有机器人、木偶、人偶、玩具或低多边形的感觉；动作不能僵硬；不得保留原场景和文字；不得出现五官、毛发纹理、衣物；背景不得出现绿色以外的任何颜色。`,
    },
  },
  {
    id: "iqrasaifi-baroque-photoshoot-seedance",
    title: "鎏金巴洛克聚光高定十姿 · Seedance 2.5",
    subtitle: "X · @IqrasaifiAI · Seedance 2.5 · 15秒 · 16:9",
    description:
      "Seedance 2.5 高定时装片：鎏金巴洛克厅里十种姿态，聚光灯、薄雾与节奏闪光。",
    video: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "时装摄影",
    shots: 10,
    references: 5,
    model: "Seedance 2.5",
    style: "高定时装摄影 · 十姿态巴洛克",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2103273778440540415",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 1098,
    sourceStats: { asOf: "2026-09-25", likes: 30, reposts: 1, bookmarks: 30 },
    formats: ["时尚大片"],
    hook: {
      structure: "聚光开场 → 快切十个姿势",
      opening: "漆黑舞台上一束顶光打下，红丝绒长裙的模特站在正中、红幕两侧——约 1s 画面转成粉色烟雾。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约每 1s 一个新机位：约 2s 黑手套托腮侧脸，约 3–4s 俯拍躺在金色贵妃榻上，约 6s 坐姿全景。", at: 2 },
        { title: "关键变化", text: "约 7–8s 推到背后金线刺绣的微距，手套抚过纹样；约 9s 起回到金色墙板前连续摆姿。", at: 7 },
        { title: "结尾怎么收", text: "约 12s 仰拍举臂入光，约 14s 模特正对镜头站定对视收尾。", at: 12 },
      ],
      copyThis: "一镜一姿势、约 1 秒一切：全景、特写、俯拍、面料微距轮流上，同一套红裙金绣贯穿。",
      approx: true,
    },
    tags: [
      "15秒 · 时装摄影",
      "16:9 横屏",
      "Seedance 2.5",
      "巴洛克",
      "高定十姿",
    ],
    steps: [
      {
        number: 1,
        title: "理解十姿态节奏与光影控制",
        description:
          "本片核心是10个姿态的快速流畅切换（约1.5秒/姿态）与巴洛克光影美学。Setting 定义昏暗鎏金厅堂、天鹅绒帷幔、单一强烈聚光灯穿过薄雾、节奏化柔和摄影闪光。The 10 Poses 段落按顺序定义：地面水平视角命令式站姿 → 极端侧脸手托下巴特写 → 俯拍贵妃榻旋转镜头 → 前景手部首饰透视 → 低旋转角度快速翘腿 → 紧身特写手指描摹领口刺绣 → 回旋展示服装背面 → 肩部前倾后头部急转凝视 → 向上伸展聚光灯倾斜高调广角 → 最后直视镜头强烈表情。最后一句要求表演快速但液态流动，用运动匹配剪辑、光晕和轻微镜头遮挡平滑过渡。",
      },
      {
        number: 2,
        title: "准备角色参考（提示词占位符 [ ref]）",
        description:
          "提示词使用 '[ ref]' 占位符，表示需要角色参考。作者原帖未公开发布角色图或角色卡（唯一公开回复来自 @ichelpark 的纯文本互动评论，非作者自回复，无媒体）。refs/ 内 5 张图全部为成片截帧，明确标注'film frame, not character card'。若需复现，请准备你自己的角色参考图（成人角色、服装、配饰）并在提示词中附加或替换 [ ref] 占位符。",
      },
      {
        number: 3,
        title: "粘贴完整提示词到 Seedance 2.5",
        description:
          "使用下方完整英文提示词（含 Setting、The 10 Poses、最后过渡指令和独立句点）。平台未披露，但确认为 Seedance 2.5 模型。生成后检查两条核心：10个姿态按顺序完成且每个约1.5秒流畅切换；巴洛克鎏金墙面与天鹅绒帷幔光影、单一聚光灯穿过薄雾、节奏化摄影闪光营造高定摄影氛围。对照 refs/ 成片截帧（非角色卡）检查姿态1/2/3/7/10的关键画面与光影是否匹配。",
      },
    ],
    references_detail: [
      {
        id: "ref-iqrasaifi-baroque-still-01",
        number: "1",
        title: "姿态1 — 命令式站姿",
        subtitle: "t≈1.5s · 地面水平视角",
        image: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/refs/still-01-standing-floor-level.jpg",
        prompt: "成片截帧（非角色卡）：姿态1 — 地面水平浮动广角视角拍摄的命令式站姿；film frame, not a character card.",
      },
      {
        id: "ref-iqrasaifi-baroque-still-02",
        number: "2",
        title: "姿态2 — 极端侧脸手托下巴",
        subtitle: "t≈4.5s · 特写",
        image: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/refs/still-02-chin-side-profile.jpg",
        prompt: "成片截帧（非角色卡）：姿态2 — 一只手优雅托在下巴下，极端侧脸特写；film frame, not a character card.",
      },
      {
        id: "ref-iqrasaifi-baroque-still-03",
        number: "3",
        title: "姿态3 — 俯拍贵妃榻斜躺",
        subtitle: "t≈7.5s · 俯拍旋转",
        image: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/refs/still-03-chaise-overhead.jpg",
        prompt: "成片截帧（非角色卡）：姿态3 — 贵妃榻上流畅斜躺，俯拍视角镜头缓慢旋转；film frame, not a character card.",
      },
      {
        id: "ref-iqrasaifi-baroque-still-04",
        number: "4",
        title: "姿态7 — 回旋展示服装背面",
        subtitle: "t≈10.5s · 背面回旋",
        image: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/refs/still-04-pirouette-back.jpg",
        prompt: "成片截帧（非角色卡）：姿态7 — 缓慢刻意回旋离开镜头，展示服装背面；film frame, not a character card.",
      },
      {
        id: "ref-iqrasaifi-baroque-still-05",
        number: "5",
        title: "姿态10 — 最后直视镜头戏剧性凝视",
        subtitle: "t≈13.5s · 最后凝视",
        image: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/refs/still-05-final-camera-gaze.jpg",
        prompt: "成片截帧（非角色卡）：姿态10 — 最后直视镜头的戏剧性凝视，强烈表情；film frame, not a character card.",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "姿态1（0–1.5s）：地面水平浮动广角视角拍摄的命令式站姿。",
      },
      {
        number: 2,
        description:
          "姿态2（1.5–3s）：一只手优雅托在下巴下，极端侧脸特写。",
      },
      {
        number: 3,
        description:
          "姿态3（3–4.5s）：贵妃榻上流畅斜躺，直接俯拍视角镜头缓慢旋转。",
      },
      {
        number: 4,
        description:
          "姿态4（4.5–6s）：一只手向镜头伸展，首饰或手套细节通过透视占据前景主导。",
      },
      {
        number: 5,
        description:
          "姿态5（6–7.5s）：快速优雅翘腿和调整裙摆，从低旋转角度拍摄。",
      },
      {
        number: 6,
        description:
          "姿态6（7.5–9s）：指尖轻轻描摹领口精致刺绣，紧身特写镜头。",
      },
      {
        number: 7,
        description:
          "姿态7（9–10.5s）：缓慢刻意回旋离开镜头，展示服装背面。",
      },
      {
        number: 8,
        description:
          "姿态8（10.5–12s）：肩部引领向镜头前倾，随后头部急转凝视。",
      },
      {
        number: 9,
        description:
          "姿态9（12–13.5s）：向聚光灯方向拉长向上伸展，尖锐倾斜高调广角镜头展现。",
      },
      {
        number: 10,
        description:
          "姿态10（13.5–15s）：最后戏剧性直视镜头姿态，强烈表情。表演快速但液态流动。用运动匹配剪辑、光晕和轻微镜头遮挡平滑过渡。",
      },
    ],
    constraints:
      "需要角色参考替换 [ ref] 占位符（作者未公开角色图）；10个姿态按顺序约1.5秒/姿态流畅切换；昏暗鎏金巴洛克厅堂、天鹅绒帷幔；单一强烈聚光灯穿过薄雾；节奏化柔和摄影闪光；运动匹配剪辑、光晕、轻微镜头遮挡；refs/ 全部为成片截帧非角色卡；平台/UI/负面词/seed未披露。",
    video_prompt: {
      title: "Baroque Spotlight High-Fashion Photoshoot",
      subtitle: "15s · 16:9 · Seedance 2.5 · 10 Poses · Editorial Film",
      content: `Create a 15-second ethereal and high-fashion editorial film starring the adult character in [ ref]. Preserve their exact appearance, outfit, and accessories.
Setting: A dimly lit baroque chamber with gilded walls and velvet drapery. A single, powerful spotlight illuminates the subject, cutting through the haze. Rhythmic, soft photographic flashes.
The 10 Poses:
A commanding standing pose, filmed from floor level with a gentle, floating wide-angle perspective.
One hand resting gracefully beneath the chin, captured in an extreme side-profile close-up.
A graceful, flowing recline on a chaise lounge, seen directly overhead as the camera slowly rotates.
One hand extended toward the lens, the jewelry or glove detail dominating the foreground through foreshortening.
A quick, elegant leg cross and adjustment of dress, captured from a low, swirling angle.
Fingertips gently tracing the intricate embroidery of the collar, framed in a tight detail shot.
A slow, deliberate pirouette away from the camera, revealing the back of the outfit.
A forward lean toward the lens, leading with the shoulder, followed by the head turning sharply to gaze.
An elongated upward reach toward the spotlight, revealed in a sharply tilted, high-key wide shot.
A final, dramatic pose looking directly into the camera with an intense expression.
Keep the performance fast but with a liquid flow. Transition smoothly with movement-matched cuts, light flares, and subtle lens occlusion.
.`,
    },
  },
  {
    id: "krevix-interior-origami-gemini-omni",
    title: "未完工空间的折纸焕新 · Gemini Omni",
    subtitle: "X · @KrevixAi · Gemini Omni · 10秒 · 16:9",
    description:
      "Gemini Omni 室内变形：一个响指，未完工房间像折纸一样逐件展开成奢华空间。",
    video: "/tutorials/krevix-interior-origami-gemini-omni/demo-web.mp4",
    poster: "/tutorials/krevix-interior-origami-gemini-omni/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "写实室内",
    shots: 1,
    references: 2,
    model: "Gemini Omni",
    style: "室内折纸变形 · 第一人称 POV",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2103165342570651828",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 2697,
    sourceStats: { asOf: "2026-09-25", likes: 66, reposts: 7, bookmarks: 67 },
    formats: ["折叠·变形", "拆装·制作过程"],
    hook: {
      structure: "空房 → 折纸式展开 → 成品卧室",
      opening: "空荡的清水混凝土毛坯房，一只黑手套入画打了个响指——约 0.5s 木地板像纸一样从地上翻折铺开。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 胡桃木墙板折出来，约 3–4.5s 床头柜和单椅从地面立起，约 5–6.5s 床像纸盒一样展开成形。", at: 2 },
        { title: "成品揭晓", text: "约 7–8.5s 挂画、地毯、窗帘、台灯、绿植陆续补齐，约 9s 灯带亮起转暖光，完整卧室出现。", at: 7 },
        { title: "结尾怎么收", text: "约 9.5s 黑手套再次入画，与开头呼应。", at: 9.5 },
      ],
      copyThis: "响指当开关，机位全程固定，家具一件件按「地面→墙→大件→软装→灯光」的顺序折出来。",
      approx: true,
    },
    tags: [
      "10秒 · 室内变形",
      "16:9 横屏",
      "Gemini Omni",
      "折纸焕新",
      "空间生成",
    ],
    steps: [
      {
        number: 1,
        title: "理解输入图与有序空间生成",
        description:
          "本片需要两张真实输入图：Reference 1 未完工房间、Reference 2 翻新后房间（作者在自回复 2103165346735604031 中公开发布，已原样放在 pack/refs/）。提示词开头锁定'10-second ultra-photorealistic MONOLITHIC ORIGAMI transformation'，把成片类型、写实质感、核心折纸变形和10秒时长一次说清。输入锚点：exact unfinished room in Reference 1 → exact luxury living room in Reference 2（注：提示词写 luxury living room，但作者 Reference 2 与成片实际为带床的卧室式空间，包内诚实保留原文）。static locked first-person POV camera 固定视角避免镜头运动破坏前后对照。有序的空间生成：floor → feature walls → built-ins → coffee table → armchair → HERO sofa → rug → curtains → decor → lighting，one element at a time。",
      },
      {
        number: 2,
        title: "准备 Reference 1/2 与 Gemini Omni",
        description:
          "使用作者公开的 Reference 1（未完工房间）和 Reference 2（翻新后房间），已存放在 refs/ 目录。平台/工具：Gemini Omni（具体版本/参数/seed未披露）。提示词包含：触发动作（ONE finger snap，黑手套手，唯一启动手势）；材质与物理（折叠硬几何变为 stone/wood/metal；沙发/扶手椅软化为 upholstery/cushions，补上 weight、settling、realistic physics、contact shadows）；负向约束（no paper/cardboard look, particles, magic, glow, flying objects, extra gestures or camera movement，同时要求 calm、precise folds）；收尾与停留（最后暖光完成，并在最后一秒 hold exact completed room 给结尾留出展示停帧）。",
      },
      {
        number: 3,
        title: "粘贴完整提示词并上传 Reference 1/2",
        description:
          "使用下方完整英文提示词（单句90词，含输入锚点、POV 镜头、响指触发、有序生成序列、材质变形、物理约束、负向清单和收尾停留）。上传 Reference 1 和 Reference 2 到 Gemini Omni 的 Create Video。生成后检查：0–1秒锁定未装修空间/第一人称构图/黑手套响指；1–7秒按顺序逐件展开（先地面墙体，再内建/桌椅/主沙发，最后地毯/窗帘/装饰/灯光，不同时所有物件爆发）；7–9秒检查材质从硬折面过渡到石材/木材/金属/软包，要求接触阴影/重量/落位；最后1秒暖光稳定/完整房间保持不动，对照 Reference 2 对齐程度。",
      },
    ],
    references_detail: [
      {
        id: "ref-krevix-before",
        number: "1",
        title: "Reference 1 — 未完工房间",
        subtitle: "真实参考图 · 作者自回复",
        image: "/tutorials/krevix-interior-origami-gemini-omni/refs/ref-01-before-unfinished-room.jpg",
        prompt: "真实参考图：Reference 1 未完工房间（作者自帖 self-reply 2103165346735604031 公开发布）。这是作者上传到 Gemini Omni 的 TRUE 输入参考图，不是成片截帧。",
      },
      {
        id: "ref-krevix-after",
        number: "2",
        title: "Reference 2 — 翻新后房间",
        subtitle: "真实参考图 · 作者自回复",
        image: "/tutorials/krevix-interior-origami-gemini-omni/refs/ref-02-after-renovated-room.jpg",
        prompt: "真实参考图：Reference 2 翻新后房间（作者自帖 self-reply 2103165346735604031 公开发布）。这是作者上传到 Gemini Omni 的 TRUE 输入参考图，不是成片截帧。注：提示词写 luxury living room，但此图与成片实际展示带床的卧室式空间；本包诚实保留原文，不擅自改写观察结果冒充作者。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "完整 10 秒：静态锁定第一人称 POV 镜头，从 Reference 1 未完工房间到 Reference 2 翻新后奢华空间的超写实单体折纸变形。黑手套手完成一次响指触发，然后大型高级建筑平面按顺序展开并生成：地板 → 特色墙 → 内建家具 → 咖啡桌 → 扶手椅 → 主沙发 → 地毯 → 窗帘 → 装饰 → 灯光，一次一件。硬折叠几何变形为真实石材、木材和金属；沙发和扶手椅可见软化为高级软包和座垫，带真实重量和落位。大块冷静精确折叠，真实物理和接触阴影。无纸/纸板感、粒子、魔法、发光、飞行物体、额外手势或镜头运动。暖光完成，最后一秒保持完整奢华空间（注：提示词写 luxury living room，实际为带床卧室式空间，诚实保留原文）。",
      },
    ],
    constraints:
      "需要作者公开的 Reference 1（未完工）和 Reference 2（翻新后）真实参考图；static locked first-person POV camera 固定视角；黑手套手一次响指触发；有序生成 floor → walls → built-ins → table → armchair → HERO sofa → rug → curtains → decor → lighting，一次一件；硬折叠几何变石材/木材/金属，沙发/扶手椅软化软包座垫带重量落位；大块冷静精确折叠；真实物理接触阴影；无纸板感/粒子/魔法/发光/飞行物体/额外手势/镜头运动；暖光完成最后1秒停留；提示词写 luxury living room 但实际为卧室式空间（诚实保留原文）；Gemini Omni 版本/参数/seed/帧率/音频设置未披露。",
    video_prompt: {
      title: "MONOLITHIC ORIGAMI INTERIOR TRANSFORMATION",
      subtitle: "10s · 16:9 · Gemini Omni · Reference 1 + Reference 2 → Video",
      content: `Create a 10-second ultra-photorealistic MONOLITHIC ORIGAMI transformation from the exact unfinished room in Reference 1 to the exact luxury living room in Reference 2, static locked first-person POV camera; a black-gloved hand performs ONE finger snap, then large premium architectural planes sequentially unfold and become the floor → feature walls → built-ins → coffee table → armchair → HERO sofa → rug → curtains → decor → lighting; hard folded geometry transforms into real stone, wood and metal, while the sofa and armchair visibly soften into premium upholstery and cushions with realistic weight and settling; large calm precise folds, one element at a time, realistic physics and contact shadows, no paper/cardboard look, particles, magic, glow, flying objects, extra gestures or camera movement; finish with warm light and hold the exact completed luxury living room for the final second.`,
    },
  },
  {
    id: "diplomeme-iphone18-pro-max-seedance-25",
    title: "绛红手机的一日漫游广告 · Seedance 2.5",
    subtitle: "X · @Diplomeme · Seedance 2.5 · OpenArt · 30秒 · 16:9",
    description:
      "Seedance 2.5 手机广告风：旅行者用酒红 iPhone 从清晨拍到夜晚，12 个镜头。",
    video: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/demo-web.mp4",
    poster: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实广告",
    shots: 12,
    references: 5,
    model: "Seedance 2.5",
    style: "高端 Apple 产品广告 · 电影级旅行片",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Diplomeme/status/2103143771781382285",
    sourceAuthor: "@Diplomeme",
    sourcePlatform: "X",
    sourceImpressions: 2396,
    sourceStats: { asOf: "2026-09-25", likes: 78, reposts: 5, bookmarks: 37 },
    formats: ["产品广告"],
    hook: {
      structure: "清晨 → 夜晚 · 一天城市漫游",
      opening: "晨光窗台上立着一台绛红色手机，背后是城市天际线——约 1s 一只手入画把它拿起。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "按时间推进：约 3s 街头取景，约 8s 蒸汽小吃摊，约 10s 咖啡馆拍朋友，约 12s 山顶，约 15s 夕阳。", at: 3 },
        { title: "几段怎么切换", text: "多次插入手机屏幕取景画面；约 18s 疾驰列车糊过画面，转进约 20s 灯笼夜市。", at: 18 },
        { title: "结尾怎么收", text: "约 22–27s 河边夜景天际线下举手机拍照、看屏幕微笑，约 28s 拉成大远景背影收。", at: 22 },
      ],
      copyThis: "产品只在开头露一次正脸，之后全靠「一天时间线」+ 屏幕取景画面带出拍照能力。",
      approx: true,
    },
    tags: [
      "30秒 · 产品广告",
      "16:9 横屏",
      "Seedance 2.5",
      "OpenArt",
      "iPhone 18 Pro Max",
      "旅行片",
    ],
    steps: [
      {
        number: 1,
        title: "理解产品一致性与真实使用动作的骨架",
        description:
          "本片不是'手机特写合集'，核心叙事是旅行者从清晨走到夜晚持续用同一台酒红色 iPhone 18 Pro Max 记录旅程。CHARACTER 锁定旅行者（炭灰外衫/中性裤/干净运动鞋/紧凑斜挎包，同一面容/发型/比例/配饰全程不变）；旅行者全程自然携带酒红 iPhone 18 Pro Max，不得虚构额外 Apple 产品/配件/品牌。SETTING 定义现代城市与自然风景连续旅程：清晨公寓 → 繁忙街道 → 现代咖啡馆 → 食物市场 → 高处观景点 → 高铁平台 → 金色时刻风景 → 活力夜间区 → 照明河岸天际线。STORY 用12个2.5秒beat从00:00到00:30写出产品钩子 → 早晨捕捉 → 运动跟拍 → 街头生活 → 人物瞬间 → 风景揭示 → 产品瞬间 → 动作捕捉 → 夜间过渡 → 低光瞬间 → 城市能量 → 最后揭示，每段写清镜头焦段/动作/手机如何被拿起拍摄查看/如何回到人物动作。",
      },
      {
        number: 2,
        title: "准备 Seedance 2.5 (OpenArt) 并掌握摄影约束",
        description:
          "使用 Seedance 2.5 on OpenArt 平台（具体档位/seed/采样参数未披露）。CAMERA 段落：24mm 负责空间和运动，35/50mm 负责跟拍与人物，85mm 负责产品/脸部压缩；浅景深特写/深焦广角风景；手持与物理驱动跟踪运动；自然微抖/不完美构图/轻微自动对焦调整/真实曝光适应/偶尔前景遮挡；排除不可能的镜头运动/漂浮无人机美学。COLOR GRADE：电影中性偏暖，绿色轻微自然克制，酒红 iPhone 在中性环境中保持丰富精致，金色时刻脸部和产品边缘金边，蓝调时刻与夜景冷氛围；维持真实肤色和自然环境色，无过度饱和或人工 HDR。MOTION：180度电影快门，头发/衣服/移动车辆自然运动模糊，24fps；排除肥皂剧60fps观感；手机交互必须物理准确，可信手部运动/重量/惯性。",
      },
      {
        number: 3,
        title: "粘贴完整提示词并检查三条硬连续性",
        description:
          "使用下方完整 30 秒英文提示词（含交付规格、CHARACTER、SETTING、12段 STORY beat、CAMERA、VISUAL/COLOR SETTING、COLOR GRADE、MOTION、LIGHTING、AUDIO、REALISM、BRAND CONTROL、EDITING、CONTINUITY、FINAL QUALITY TARGET）。生成后检查三条'硬连续性'：(1) 旅行者脸和衣服不变；(2) 酒红手机尺寸/镜头系统/材质不变；(3) 光线按 daylight → golden hour → blue hour → night 日夜顺序推进。检查产品使用是否真实：抬手机/取景/录制/查看/锁屏/放下都要有重量与惯性，不能只让手机悬在画面里。剪辑以走路方向/反射/蒸汽/手机手势/建筑形状/光线变化做 match cut；不要用泛化 AI 转场覆盖连续性问题。对照 refs/ 成片帧（非作者参考图）检查关键beat的构图/光线/手机使用动作。",
      },
    ],
    references_detail: [
      {
        id: "ref-iphone18-frame-01",
        number: "1",
        title: "清晨窗边手机开场",
        subtitle: "t≈2s · 85mm产品特写",
        image: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/refs/film-frame-01.jpg",
        prompt: "成片截帧（非作者发布的参考图/角色卡）：清晨窗边酒红 iPhone 18 Pro Max 特写，柔和阳光穿过玻璃和金属边缘，旅行者伸手入画拿起手机看向明亮城市外景。",
      },
      {
        id: "ref-iphone18-frame-02",
        number: "2",
        title: "街头/食物摊蒸汽段",
        subtitle: "t≈8s · 50mm观察镜头",
        image: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/refs/film-frame-02.jpg",
        prompt: "成片截帧（非作者发布的参考图/角色卡）：旅行者穿过拥挤街区，附近食物摊贩准备热气腾腾食物，旅行者短暂停下举起 iPhone 录制准备过程，蒸汽穿过前景。",
      },
      {
        id: "ref-iphone18-frame-03",
        number: "3",
        title: "绿色山谷与举机取景",
        subtitle: "t≈15s · 24mm深焦风景",
        image: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/refs/film-frame-03.jpg",
        prompt: "成片截帧（非作者发布的参考图/角色卡）：旅行者走上长石阶穿过茂密绿植，镜头从后跟随，到达顶部时广阔风景穿过凉爽大气薄雾显现，旅行者举起 iPhone 框住整个山谷。",
      },
      {
        id: "ref-iphone18-frame-04",
        number: "4",
        title: "蓝调/夜间街区",
        subtitle: "t≈22s · 50mm手持街拍",
        image: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/refs/film-frame-04.jpg",
        prompt: "成片截帧（非作者发布的参考图/角色卡）：蓝调时刻手持街拍，旅行者进入活力夜间区，暖灯笼/冷环境光/摩托车/行人创造层次深度，旅行者举起 iPhone 拍摄照明街道。",
      },
      {
        id: "ref-iphone18-frame-05",
        number: "5",
        title: "河岸夜景收束",
        subtitle: "t≈28s · 24mm广角构图",
        image: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/refs/film-frame-05.jpg",
        prompt: "成片截帧（非作者发布的参考图/角色卡）：从旅行者背后拍摄的24mm广角构图，他们在河边短暂停下向照明天际线举起酒红 iPhone 18 Pro Max，镜头缓慢后退，旅行者捕捉最后一张图片/放下手机/继续走动，音乐达到最后节拍，城市填满背景。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–02.5 特写钩子：85mm 特写酒红 iPhone 18 Pro Max 靠窗摆放在柔和清晨阳光中。光线自然穿过玻璃和金属边缘。旅行者伸手入画拿起手机看向明亮城市外景。酒红表面捕捉轻微暖反射，第一个节拍开始。",
      },
      {
        number: 2,
        description:
          "02.5–05 早晨捕捉：24mm 广角镜头旅行者清晨穿过活泼城市街道。建筑间阳光破开。旅行者自然举起 iPhone 捕捉瞬间。短暂切到手机显示屏显示同一场景被框住。旅行者放下手机继续走动。随音乐精确剪辑。",
      },
      {
        number: 3,
        description:
          "05–07.5 运动跟拍：35mm 手持跟拍旅行者穿过繁忙路口。真实行人自然过马路。自行车/出租车/公交车在背景移动。旅行者边走边开始用 iPhone 录制视频。镜头稍微跟在后面而非完美框住主体。旅行者转向经过的对象同时保持手机自然使用中。",
      },
      {
        number: 4,
        description:
          "07.5–10 街头生活：50mm 观察镜头。旅行者穿过拥挤街区，附近食物摊贩准备热气腾腾食物。旅行者短暂停下，举起 iPhone 录制准备过程。蒸汽穿过前景。旅行者检查捕捉的片段片刻，自然微笑并继续移动。",
      },
      {
        number: 5,
        description:
          "10–12.5 人物瞬间：50mm 特写。旅行者在咖啡馆遇到当地人并自然举起 iPhone 捕捉肖像。短暂切到手机显示屏上捕捉的图像。自然肤质，真实发丝和柔和环境分离。旅行者放下手机，对象自然笑。浅景深，暖肤色，真实背景活动和轻微手持运动。",
      },
      {
        number: 6,
        description:
          "12.5–15 风景揭示：24mm 深焦风景。旅行者走上长石阶穿过茂密绿植。镜头从后跟随。旅行者到达顶部时，广阔风景穿过凉爽大气薄雾显现。旅行者举起 iPhone 框住整个山谷。短暂手机显示视角展示风景被自然构图后返回真实世界广角镜头。",
      },
      {
        number: 7,
        description:
          "15–17.5 产品瞬间：50mm 侧跟踪镜头在金色阳光中。旅行者沿高处观景点走动，酒红 iPhone 自然握在身侧。金色边缘光捕捉头发、肩膀和手机轻微金属边缘。自然风吹动衣服。酒红表面与深绿植被对比而不感觉人工突出。",
      },
      {
        number: 8,
        description:
          "17.5–20 动作捕捉：24mm 广角镜头从真实高架平台拍摄高铁开始穿过场景。旅行者举起 iPhone 录制经过的列车。短暂切到手机显示屏列车快速穿过画面。反射滑过列车窗户，真实运动模糊跟随运动。返回旅行者，列车消失在远处。",
      },
      {
        number: 9,
        description:
          "20–22.5 夜间过渡：50mm 手持街拍蓝调时刻。旅行者进入活力夜间区。暖灯笼，冷环境光，摩托车和行人创造层次深度。旅行者举起 iPhone 拍摄照明街道。音乐强度增加，真实街道氛围保持在下方。",
      },
      {
        number: 10,
        description:
          "22.5–25 低光瞬间：35mm 跟踪镜头旅行者走在现代河岸区旁。反射在水面波动。现代塔楼在他们身后照明，船只自然穿过画面。旅行者短暂停下用 iPhone 捕捉天际线。酒红手机捕捉周围城市灯光的小反射。",
      },
      {
        number: 11,
        description:
          "25–27.5 城市能量：50mm 特写旅行者边穿过夜间区边查看捕捉的图像。屏幕光轻微照亮脸部。旅行者自然微笑，锁定手机并继续走动。镜头移动在他们旁边，实用灯光、行人和反射创造层次电影深度。",
      },
      {
        number: 12,
        description:
          "27.5–30 最后揭示：24mm 广角构图从旅行者背后。他们在河边短暂停下向照明天际线举起酒红 iPhone 18 Pro Max。镜头缓慢后退而非向上飞。旅行者捕捉最后一张图像，放下手机并继续走动，音乐达到最后节拍。酒红 iPhone 在手中保持自然可见，城市填满背景。",
      },
    ],
    constraints:
      "单一长 prompt 复现包，无输入图工作流（成片帧仅作审美参考非角色卡/产品ref）；旅行者面容/发型/服装/比例/配饰全程一致；酒红 iPhone 18 Pro Max 尺寸/比例/材质/镜头系统/表面全程一致；光线按 daylight → golden hour → blue hour → night 顺序推进；镜头 24/35/50/85mm 物理驱动手持跟踪；中性偏暖调色/克制绿/丰富酒红/真实肤色；180度电影快门24fps自然运动模糊；真实手机交互重量惯性；音乐驱动剪辑配位置环境声；无 CGI/塑料皮肤/美颜平滑/额外手指/扭曲手机几何/变化镜头系统/人工人群同步/不可能反射/漂浮物体/过度景深；原帖/线程无角色卡/产品参考图/negative prompt/seed/UI参数；OpenArt档位/音乐后期未披露。",
    video_prompt: {
      title: "iPhone 18 Pro Max Cinematic Travel Film",
      subtitle: "30s · 16:9 · Seedance 2.5 · Premium Apple Product Campaign",
      content: `30 seconds | 16:9 | premium Apple product film / cinematic lifestyle advertisement | 2026 commercial grade | MULTISHOT CORE CONCEPT A young traveler experiences a visually rich day through an energetic but natural sequence of movement, city life, architecture, food, people and landscapes — captured through the Apple iPhone 18 Pro Max in a sophisticated burgundy finish. The film feels like a flagship Apple product campaign combined with an elite cinematic travel film. The iPhone is always physically present and naturally used throughout the journey. Every location feels photographed rather than generated. Music drives the edit, but the footage retains the imperfections and spontaneity of real travel photography. CHARACTER ONE TRAVELER — young adult international traveler wearing a contemporary minimal travel outfit: premium charcoal overshirt, neutral trousers, clean sneakers, compact crossbody bag. Natural hair, realistic skin texture, minimal accessories. Same face, clothing, hairstyle, proportions and accessories throughout the entire film. The traveler carries the burgundy Apple iPhone 18 Pro Max naturally throughout the journey. Do not invent additional Apple products, accessories or branding. SETTING Modern urban environments and natural landscapes: early-morning apartment, busy city streets, contemporary café, food market, elevated viewpoint, high-speed train platform, golden-hour landscape, vibrant nighttime district and illuminated riverside skyline. Real pedestrians, vendors, commuters, vehicles and local activity. Locations feel naturally connected through the journey. The environments provide realistic opportunities for the traveler to photograph, record and experience the world with the iPhone. STORY — MUSIC-DRIVEN MULTISHOT VISUALS 00:00–02.5 — CLOSE-UP HOOK 85mm close-up of the burgundy iPhone 18 Pro Max resting beside a window in soft early-morning sunlight. Light travels naturally across the glass and metallic edges. The traveler reaches into frame, picks up the phone and looks toward the bright city outside. The burgundy finish catches a subtle warm reflection as the first beat begins. 02.5–05 — MORNING CAPTURE 24mm wide shot as the traveler walks through a lively city street during early morning. Sunlight breaks between buildings. The traveler naturally raises the iPhone and captures the moment. Cut briefly to the phone display showing the same scene being framed. The traveler lowers the phone and continues walking. Cut precisely with the music. 05–07.5 — MOVEMENT 35mm handheld follow shot as the traveler moves through a busy intersection. Real pedestrians cross naturally. Bicycles, taxis and buses move through the background. The traveler begins recording video on the iPhone while walking. The camera follows slightly behind rather than perfectly framing the subject. The traveler turns toward a passing subject while keeping the phone naturally in use. 07.5–10 — STREET LIFE 50mm observational shot. Traveler moves through a crowded neighborhood while a food vendor prepares steaming food nearby. Traveler briefly stops, raises the iPhone and records the preparation. Steam passes across the foreground. The traveler checks the captured footage for a moment, smiles naturally and continues moving. 10–12.5 — HUMAN MOMENT 50mm close-up. The traveler meets a local person at a café and naturally raises the iPhone to capture a portrait. Cut briefly to the captured image on the phone display. Natural skin texture, realistic hair strands and soft environmental separation. The traveler lowers the phone as the subject laughs naturally. Shallow depth of field, warm skin tones, authentic background activity and subtle handheld movement. 12.5–15 — LANDSCAPE REVEAL 24mm deep-focus landscape. Traveler walks up a long stone staircase through dense greenery. Camera follows from behind. As the traveler reaches the top, a vast landscape emerges through cool atmospheric mist. The traveler raises the iPhone and frames the entire valley. Brief phone-display perspective reveals the landscape composed naturally before returning to the real-world wide shot. 15–17.5 — PRODUCT MOMENT 50mm side-tracking shot in golden sunlight. Traveler walks along the elevated viewpoint holding the burgundy iPhone naturally at their side. Golden rim light catches the hair, shoulders and subtle metallic edges of the phone. Natural wind moves clothing. The burgundy finish contrasts against deep green vegetation without feeling artificially highlighted. 17.5–20 — ACTION CAPTURE 24mm wide shot from a realistic elevated platform as a high-speed train begins moving through the scene. Traveler raises the iPhone and records the passing train. Cut briefly to the phone display as the train moves rapidly through frame. Reflections slide across the train windows while realistic motion blur follows the movement. Return to the traveler as the train disappears into the distance. 20–22.5 — NIGHT TRANSITION 50mm handheld street shot at blue hour. Traveler enters a lively nighttime district. Warm lanterns, cool ambient light, scooters and pedestrians create layered depth. The traveler raises the iPhone to photograph the illuminated street. Music increases in intensity while authentic street ambience remains underneath. 22.5–25 — LOW-LIGHT MOMENT 35mm tracking shot as the traveler walks beside a modern riverside district. Reflections ripple across the water. Modern towers illuminate behind them while boats move naturally through the frame. Traveler stops briefly and uses the iPhone to capture the skyline. The burgundy phone catches small reflections from surrounding city lights. 25–27.5 — CITY ENERGY 50mm close-up of the traveler checking the captured images while walking through the nighttime district. Screen light subtly illuminates the face. The traveler smiles naturally, locks the phone and continues walking. Camera moves alongside them as practical lights, pedestrians and reflections create layered cinematic depth. 27.5–30 — FINAL REVEAL 24mm wide composition from behind the traveler. They stop briefly at the riverside and raise the burgundy iPhone 18 Pro Max toward the illuminated skyline. Camera slowly moves backward rather than flying upward. Traveler captures one final image, lowers the phone and continues walking as the music reaches its final beat. The burgundy iPhone remains naturally visible in hand as the city fills the background. CAMERA 35mm and 50mm for portraits and human moments, 24mm for landscapes, architecture and movement, occasional 85mm compression on faces and product details. Shallow DOF on close-ups, deep focus on landscape wides. Handheld and physically motivated tracking movement. Natural camera micro-movement, imperfect framing, subtle autofocus adjustment, realistic exposure adaptation and occasional foreground obstruction. No impossible camera movement, no floating drone aesthetic. VISUAL / COLOR SETTING Premium Apple product film / cinematic lifestyle campaign, 2026 commercial grade. Look: photoreal cinema, slight filmic grain, mild halation on highlights, neutral-to-cool city tones, sophisticated burgundy accents, deep forest greens, warm skin, controlled blacks and natural environmental color. COLOR GRADE Cinematic neutral-and-warm, greens slightly natural and restrained, burgundy iPhone remains rich and sophisticated against neutral environments, golden rim on faces and product edges in sunlight, cool atmosphere during blue hour and nighttime scenes. Maintain realistic skin tones and natural environmental color. No excessive saturation or artificial HDR. MOTION 180-degree cinematic shutter, natural motion blur on hair, clothing and moving vehicles, 24fps. No soap-opera 60fps look. Movement should retain the subtle imperfections of real location photography. Smartphone interaction must feel physically accurate, with believable hand movement, weight and momentum. LIGHTING Natural daylight, soft overcast city light, warm direct sunlight, golden-hour rim light, cool atmospheric light, practical lanterns and nighttime city illumination. Lighting must originate naturally from the environment. Reflections on the burgundy iPhone must respond naturally to surrounding light sources. AUDIO Premium contemporary cinematic soundtrack with subtle modern electronic textures. Music drives the transitions and rhythm. Keep authentic location sound underneath: footsteps, traffic, train ambience, station announcements, bicycles, vendors, cooking sounds, crowd chatter, wind, birds, distant city noise and riverside ambience. Environmental sound should occasionally become prominent during intimate moments. Subtle natural camera and shutter interaction sounds may accompany key captures without becoming exaggerated. REALISM No CGI look, no plastic skin, no beauty-filter smoothing, no extra fingers, no warped phone geometry, no changing camera system, no artificial crowd synchronization, no impossible reflections, no floating objects, no exaggerated depth of field. Realistic skin pores, hair strands, fabric texture, glass reflections, metallic surfaces, screen brightness, water reflections, atmospheric perspective and human movement. The iPhone must behave like a real physical smartphone with believable weight, grip, reflections and interaction with light. BRAND CONTROL The only Apple branding visible is the existing Apple logo and the authentic iPhone 18 Pro Max itself. Do not invent additional Apple branding, advertisements, storefront branding or branded products. Do not add fictional accessories, random UI, watermarks or random text. Preserve the burgundy finish and premium Apple product identity. The device must remain visually consistent throughout the entire film. EDITING Music-synchronized commercial editing without excessive effects. Cuts are motivated by movement, reflections, steam, phone gestures, architectural shapes, walking direction and changes in light. Use clean match cuts and occasional speed changes only when physically believable. Avoid generic AI transitions, artificial zooms, excessive whip transitions and over-edited montage pacing. CONTINUITY The traveler remains identical throughout all shots. Preserve face, hairstyle, clothing, trousers, sneakers, bag and accessories. Maintain the same burgundy iPhone 18 Pro Max throughout the entire film with consistent proportions, materials, camera system and finish. Maintain realistic weather and lighting progression from daylight → golden hour → blue hour → night. Each location should feel like part of one continuous journey, while every interaction with the iPhone remains physically and visually consistent. FINAL QUALITY TARGET The final film should look like genuine footage captured by an elite commercial filmmaker for a major Apple product campaign—not a collection of AI-generated beauty shots. The iPhone 18 Pro Max should feel like a real object being naturally used to experience and capture the world, rather than a product artificially inserted into every shot. The realism comes first; the commercial polish comes from cinematography, product design, color, music, editing and art direction.`,
    },
  },
  {
    id: "iqrasaifi-period-drama-silk-seedance",
    title: "古装红纱闺房 · 六镜眼神戏 · Seedance 2.5",
    subtitle: "X · @IqrasaifiAI · Seedance 2.5 · Higgsfield · 30秒 · 16:9",
    description:
      "Seedance 2.5 古装闺房眼神戏：六段镜头穿过红纱、铜镜、花窗与烛光。",
    video: "/tutorials/iqrasaifi-period-drama-silk-seedance/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-period-drama-silk-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "古装真人",
    shots: 6,
    references: 6,
    model: "Seedance 2.5",
    style: "古装红纱闺房 · 眼神戏六镜",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2102921306593505613",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 61789,
    sourceStats: { asOf: "2026-09-25", likes: 391, reposts: 21, bookmarks: 349 },
    formats: ["角色表演"],
    hook: {
      structure: "床榻 → 铜镜 → 月窗 → 回床榻",
      opening: "红纱帘后，着红色纱衣的女子伏在床榻上，约 2–3s 缓缓回头看向镜头——第一眼就是眼神戏。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 6–7s 红纱扫过画面转场，约 11–15s 烛光铜镜前梳头，约 16–21s 背影推开月下花窗。", at: 6 },
        { title: "关键变化", text: "约 22s 她回身正对镜头凝视，这是全片唯一一次正面直视。", at: 22 },
        { title: "结尾怎么收", text: "约 23–27s 回到床榻，纱衣旋开坐下，约 28–29s 画面渐暗收。", at: 23 },
      ],
      copyThis: "用飘过镜头的红纱做转场，几个场景都以「背影/侧脸 → 回头看镜头」来收每段。",
      approx: true,
    },
    tags: [
      "30秒 · 古装",
      "16:9 横屏",
      "Seedance 2.5",
      "Higgsfield",
      "眼神戏",
      "红纱闺房",
    ],
    steps: [
      {
        number: 1,
        title: "理解六镜眼神戏结构",
        description:
          "本片是六段连贯的古装闺房眼神场景：Shot 1 透纱回眸、Shot 2 纱帘穿行、Shot 3 铜镜对视、Shot 4 花窗月光、Shot 5 烛光旋转、Shot 6 收镜凝视淡出。角色外貌（深色长卷发、温柔诱人眼神、轻薄红纱长袍与披肩）完全写在提示词中，无需单独上传角色卡。",
      },
      {
        number: 2,
        title: "准备 Seedance 2.5 / Higgsfield",
        description:
          "使用 Higgsfield 平台的 Seedance 2.5 模型。本片为古装期刊美学：红色透纱与悬垂帘幕、青铜古镜、木质雕花窗、烛光暖调；镜头运动流畅（推进、穿帘、环绕、弧形特写）；每镜聚焦眼神表演；柔和景深虚化前景纱幕。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整六镜提示词。包含：Shot 1（透纱初见 · 侧卧回眸）、Shot 2（穿行纱帘 · 推帘锁眼）、Shot 3（铜镜对视 · 梳发微笑）、Shot 4（花窗月光 · 回望弧线特写）、Shot 5（烛光旋转 · 披肩滑落）、Shot 6（收镜凝视 · 纱幕淡出黑场）。每段都有详细的机位、动作、眼神和情绪描述。",
      },
    ],
    references_detail: [
      {
        id: "ref-silk-still-01",
        number: "1",
        title: "透纱回眸",
        subtitle: "Shot 1 · t≈2s",
        image: "/tutorials/iqrasaifi-period-drama-silk-seedance/still-01-silk-glance.jpg",
        prompt: "成片截帧：透过飘浮红纱看到她侧卧丝绸榻上，转身回眸镜头，眼神磁性诱人。",
      },
      {
        id: "ref-silk-still-02",
        number: "2",
        title: "纱帘穿行",
        subtitle: "Shot 2 · t≈7s",
        image: "/tutorials/iqrasaifi-period-drama-silk-seedance/still-02-veil-curtains.jpg",
        prompt: "成片截帧：推开透纱帘幕，侧头锁定镜头眼神后步过画面，纱幕划过镜头。",
      },
      {
        id: "ref-silk-still-03",
        number: "3",
        title: "铜镜对视",
        subtitle: "Shot 3 · t≈12s",
        image: "/tutorials/iqrasaifi-period-drama-silk-seedance/still-03-bronze-mirror.jpg",
        prompt: "成片截帧：梳妆台前梳发，眼神从青铜镜中抬起对视镜头，唇边微笑。",
      },
      {
        id: "ref-silk-still-04",
        number: "4",
        title: "花窗月光",
        subtitle: "Shot 4 · t≈17s",
        image: "/tutorials/iqrasaifi-period-drama-silk-seedance/still-04-lattice-window.jpg",
        prompt: "成片截帧：推开雕花木窗，月光洒在皮肤上，回望镜头，弧形特写脸颊唇颈。",
      },
      {
        id: "ref-silk-still-05",
        number: "5",
        title: "烛光回旋",
        subtitle: "Shot 5 · t≈22s",
        image: "/tutorials/iqrasaifi-period-drama-silk-seedance/still-05-candlelight-turn.jpg",
        prompt: "成片截帧：烛光中转身旋转，长裙与披肩在空中飞舞，披肩滑落肩头。",
      },
      {
        id: "ref-silk-still-06",
        number: "6",
        title: "收镜凝视",
        subtitle: "Shot 6 · t≈27s",
        image: "/tutorials/iqrasaifi-period-drama-silk-seedance/still-06-final-gaze.jpg",
        prompt: "成片截帧：回到丝绸榻上侧卧，抬头直视镜头，红纱幕推入柔焦淡出黑场。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "Shot 1 — 透纱初见：镜头位于飘浮透纱层后，她侧卧丝绸榻边背身，手轻抚披肩，夜风吹起发丝和披肩。感知到注视，她转身回眸，眼神磁性诱人。镜头穿纱推进到亲密特写。",
      },
      {
        number: 2,
        description:
          "Shot 2 — 纱帘穿行：延续眼神接触，她起身穿行重叠纱帘，单手推开透纱，剪影显现。镜头后退跟随，纱幕反复划过镜头。临近时侧头锁眼后步过画面，镜头摇移跟随背影与纱尾。",
      },
      {
        number: 3,
        description:
          "Shot 3 — 铜镜对视：她坐到青铜梳妆台前，披肩滑落肩头，凝视镜中自己，手指抚过颈边发丝，拿木梳慢梳长发。镜头横移到肩后，捕捉真实侧影与镜中面容双重构图。她放下梳子，眼神从镜中抬起对视镜头，唇边微笑。",
      },
      {
        number: 4,
        description:
          "Shot 4 — 花窗月光：她从梳妆台起身走向雕花木窗，长裙扫地，镜头紧跟身后。推开窗扇，冷月光洗面，夜风吹拂发丝、披肩和帘幕。单手轻靠窗框，微倾身入风，闭眼享受，再缓缓睁眼。回望镜头，眼神魅力与自信。镜头弧线移动到侧面特写颧骨唇颈肌肤。",
      },
      {
        number: 5,
        description:
          "Shot 5 — 烛光旋转：她走到房间中央，沐浴金色烛光，闪烁火焰在长裙上投影。听到风中低语，她转身，长裙与黑发在空中飞旋。镜头环绕旋转配合她的转身。轻薄披肩滑落肩头，她指尖接住，保持诱人姿态一拍后让它滑下手臂，动作自然优雅。",
      },
      {
        number: 6,
        description:
          "Shot 6 — 收镜凝视：她缓步回到丝绸榻边，转身拢裙侧卧软枕，一臂靠枕支撑，另手把玩胸前发丝。眼神最初下垂沉思。镜头从前景飘浮红纱帘后缓推。推到亲密特写时她抬头直视镜头，眼神凝视慵懒不可抗拒。保持直视。微风推红纱幕划过画面，柔焦覆盖她的脸直至黑场。",
      },
    ],
    constraints:
      "角色外貌写在提示词中无需角色卡；六镜连贯眼神戏；古装闺房美学（红纱、丝绸、青铜镜、木窗、烛光）；柔和推进穿帘环绕机位；前景纱幕虚化；无配乐纯场景音；最后纱幕淡出黑场。",
    video_prompt: {
      title: "Period Drama Silk Boudoir · Six Gaze-Driven Shots",
      subtitle: "30s · 16:9 · Seedance 2.5 on Higgsfield · Sheer Crimson Gauze",
      content: `Seedance 2.5 on @higgsfield_ai 

Prompt:

Shot 1 — Sensual First Glimpse Through Sheer Silk
The camera is positioned behind layers of floating translucent red gauze, creating a dreamy, blurred foreground frame.
She rests sideways on the edge of the silk daybed with her back partially turned, her hand gently tracing the soft fabric of her loose silk shawl.
A light night breeze softly lifts the loose hair framing her bare shoulders.
Sensing a glance, her movements pause. She slowly rotates her body, her shoulders turning smoothly before her head follows.
She looks back over her bare shoulder directly into the lens.
Her eyes hold an intense, magnetic, and subtly seductive expression as her gaze meets the camera.
The camera glides slowly closer through the sheer curtains, coming to a tight, intimate close-up on her alluring face, framed by flowing hair and crimson fabric.
Shot 2 — Gliding Through Hanging Veil Curtains
Continuing from her intense eye contact, she softly lets her gaze slip downward, pushes off the bed with one hand, and gracefully rises to her feet.
Her sheer crimson robe flows down to touch the floorboards as the lightweight silk shawl softly trails behind her along the bedding.
She turns and glides through overlapping layers of hanging silk veils.
With one slender hand, she pushes aside a translucent curtain in front of her, revealing her silhouette.
The camera tracks backward ahead of her, continuously capturing her movement as translucent silk repeatedly sweeps across the lens.
As she gets close, she tilts her head slightly, locking eyes with the camera before stepping past the frame.
The camera pans fluidly to follow her from behind as the silk fabric trails past the lens.
Shot 3 — Intimate Moment at the Bronze Mirror
She moves to the antique bronze vanity and lowers herself into a seat, her silk shawl slipping softly past her shoulders.
She studies her reflection in the warm metallic mirror, her fingers gently stroking a strand of hair along her neck.
She takes a carved wooden comb and slowly draws it down her long hair, accentuating her neckline and shoulders.
The camera moves in a smooth lateral tracking shot behind her shoulder, bringing both her real profile and her reflected face into a captivating dual composition.
She sets the comb down softly on the vanity.
Without turning around, her eyes slowly rise in the bronze mirror to meet the camera's gaze through the reflection.
A subtle, mesmerizing, seductive smile curves the edge of her lips.
Shot 4 — Moonlit Allure by the Lattice Window
She rises from the vanity and walks toward the carved wooden lattice window, her gown sweeping the floor as the camera follows closely behind.
She pushes open the wooden window pane, letting cool pale moonlight wash over her skin.
The night air stirs her loose hair, gossamer shawl, and the hanging curtains behind her.
She rests one delicate hand against the window frame, leaning slightly into the breeze while looking into the moonlit night.
She closes her eyes, letting the cool wind trace her face and bare neck, before slowly reopening them.
She glances back over her shoulder toward the camera, her gaze brimming with charm and quiet confidence.
The camera arcs gracefully to a close profile shot, highlighting her cheekbones, full lips, smooth neck, and moonlit skin.
Shot 5 — A Fluid Turn in Candlelight
She steps into the center of the room, bathing in the warm, golden candlelight.
She pauses as the flickering flame casts soft shadows across her flowing gown.
Hearing a faint whisper in the wind, she turns her body around.
Her long silk dress and cascading dark hair swirl through the air in a fluid, hypnotic arc.
The camera orbits smoothly around her figure as she rotates to match its arc.
Her lightweight silk shawl slowly slides off one shoulder; she casually catches it with her fingertips, holding the seductive pose for a heart-beat before letting it drift down her arm.
The motion feels completely organic, graceful, and captivating.
Shot 6 — Seductive Final Gaze
She slowly walks back toward the plush silk daybed.
She turns gracefully, gathers the folds of her gown, and lowers herself sideways onto the soft cushions.
One arm leans back onto a silk pillow for support while her other hand casually twirls a lock of dark hair falling across her chest.
Her eyes initially remain lowered in quiet contemplation.
The camera pushes in slowly from behind a floating crimson curtain in the foreground.
When the camera reaches an intimate close-up, she lifts her head, looking straight into the lens with a piercing, languid, irresistibly attractive gaze.
She holds the direct gaze.
A gentle breeze pushes the sheer silk veil across the frame, slowly covering her face in a soft-focus blur until the screen fades smoothly to black.`,
    },
  },
  {
    id: "iqrasaifi-minimax-h3-typography",
    title: "字筑暴走 · 二次元时装动作 · MiniMax H3",
    subtitle: "X · @IqrasaifiAI · MiniMax H3 · Higgsfield · 15秒 · 16:9",
    description:
      "MiniMax H3 二次元时装动作：角色在巨型立体字上跑跳斩击，字母碰撞碎裂。",
    video: "/tutorials/iqrasaifi-minimax-h3-typography/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-minimax-h3-typography/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "二次元",
    shots: 4,
    references: 4,
    model: "MiniMax H3",
    style: "超动感二次元 · 字筑物理建筑",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2100169159552466978",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 2256,
    sourceStats: { asOf: "2026-09-25", likes: 31, reposts: 2, bookmarks: 33 },
    formats: ["字效·片头"],
    hook: {
      structure: "3D 字 → PARADOX → 碎镜 → 书法字",
      opening: "暗底火星四溅，绿发二次元女孩在一排转动的巨型白色 3D 字母上奔跑——开场就是「人踩着字跑」。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 4s 近景后，约 5–8s 切亮黄底「PARADOX」立体大字，她挥出蓝色刀光，颜料飞溅。", at: 5 },
        { title: "关键变化", text: "约 9–11s 画面碎成镜面碎片，每块碎片里是她不同造型（含粉色裙装）。", at: 9 },
        { title: "结尾怎么收", text: "约 12–14s 粉/黄底配黑色书法大字，刀光弧线绕着她旋转收住。", at: 12 },
      ],
      copyThis: "每 3–4 秒换一种字效场景，字始终是场景本身，角色和刀光在字上穿过。",
      approx: true,
    },
    tags: [
      "15秒 · 二次元",
      "16:9 横屏",
      "MiniMax H3",
      "Higgsfield",
      "时装动作",
      "字筑建筑",
    ],
    steps: [
      {
        number: 1,
        title: "理解字筑物理建筑概念",
        description:
          "本片将字母作为物理建筑：OVERRIDE 作为跃踏的踏板字筑屋顶、PARADOX 在空中翻滚被斩开、BREAK 踩碎镜头玻璃、汉字从刀刃涌出压碎文字。字母不是装饰而是真实的建筑踏板、碰撞物、碎片，具有重量、碰撞、弹簧、火花。角色外貌写在提示词中（解构夹克、巨大靴子、黑红挑染发）。",
      },
      {
        number: 2,
        title: "准备 MiniMax H3 / Higgsfield",
        description:
          "使用 Higgsfield 平台的 MiniMax H3 模型。本片为超动感二次元时装动作：极端鱼眼低角贴地跟踪、360° 荷兰角桶滚、踩碎镜头玻璃、快速多向斩击；字体动力学（字母物理掉落碰撞旋转碎裂）；pop-art 色彩转换（洋红虚空→酸黄→纯白→黑红水墨）；sakuga 动画美学与极限速度线。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整四镜字筑提示词。包含：Shot 1（OVERRIDE 字筑屋顶跃踏 · 鱼眼贴地跟踪 · 洋红虚空 · 踩字弹簧震颤火花）、Shot 2（PARADOX 零重力斩开 · 360° 荷兰角桶滚 · 字母翻滚斩半 · 酸黄背景）、Shot 3（BREAK 踩碎镜头 · 第四面墙碎片 · 纯白虚空 · 反射多套服装）、Shot 4（汉字墨刃风暴 · 快速多向斩击 · 水墨汉字压碎文字 · 闪白）。完整 sakuga 动画指令在结尾。",
      },
    ],
    references_detail: [
      {
        id: "ref-typo-still-01",
        number: "1",
        title: "OVERRIDE 字筑屋顶",
        subtitle: "Shot 1 · t≈2s",
        image: "/tutorials/iqrasaifi-minimax-h3-typography/still-01-override-rooftop.jpg",
        prompt: "成片截帧：鱼眼低角贴地跟踪，巨大靴底踩踏 OVERRIDE 金属立体字母，字母弹簧下陷震颤火花，洋红虚空背景。",
      },
      {
        id: "ref-typo-still-02",
        number: "2",
        title: "PARADOX 零重力斩字",
        subtitle: "Shot 2 · t≈7.5s",
        image: "/tutorials/iqrasaifi-minimax-h3-typography/still-02-paradox-slice.jpg",
        prompt: "成片截帧：360° 荷兰角桶滚，重力倒转跃起，拔发光青蓝光刃斩开空中翻滚的 PARADOX 字母，酸黄背景。",
      },
      {
        id: "ref-typo-still-03",
        number: "3",
        title: "踩碎镜头玻璃",
        subtitle: "Shot 3 · t≈10s",
        image: "/tutorials/iqrasaifi-minimax-h3-typography/still-03-lens-stomp-shatter.jpg",
        prompt: "成片截帧：镜头俯冲贴地，她从空中踩碎镜头玻璃，碎片多边形反射她不同服装，纯白虚空。",
      },
      {
        id: "ref-typo-still-04",
        number: "4",
        title: "汉字墨刃风暴",
        subtitle: "Shot 4 · t≈13s",
        image: "/tutorials/iqrasaifi-minimax-h3-typography/still-04-kanji-ink-storm.jpg",
        prompt: "成片截帧：透过碎镜快速多向斩击，黑色水墨汉字从刀刃涌出膨胀压碎文字，闪白光爆。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "Shot 1（字筑屋顶跃踏）：极低角鱼眼贴地跟踪洋红虚空。穿解构夹克巨大锯齿靴的二次元女孩向前奔跑，用巨大金属立体字母 OVERRIDE 作为踏板跳跃。每次靴底踩字，字母液压弹簧下扣，引发镜头震颤、火花与霓虹漆溅入镜头。",
      },
      {
        number: 2,
        description:
          "Shot 2（零重力斩字倒转）：镜头快速后退同时执行 360° 荷兰角桶滚。重力翻转倒挂，她跃入空中拔巨大发光青蓝光刃。巨大 3D 字母 PARADOX 在三维空间中翻滚冲向镜头，她凌空斩开字母两半，两半爆炸飞出镜头两侧，露出酸黄背景。",
      },
      {
        number: 3,
        description:
          "Shot 3（踩碎镜头玻璃）：镜头俯冲贴地。她从天空坠落，踏步踩入镜头玻璃。整个屏幕碎裂成飘浮锯齿多边形碎片，反射她穿不同服装的镜像版本。",
      },
      {
        number: 4,
        description:
          "Shot 4（墨刃汉字风暴）：透过碎镜她进行快速多向斩击。巨大爆炸黑色水墨汉字从刀刃涌出，膨胀向外压碎飘浮文字成尘埃后甩入闪白光爆。动态 sakuga 动画、极限速度线、鲜艳 pop-art 色彩转换、4k、60fps。",
      },
    ],
    constraints:
      "字母作为物理建筑（踏板、碰撞物、碎片）；极端鱼眼贴地跟踪；360° 荷兰角桶滚；踩碎镜头玻璃；快速多向斩击；字体动力学（掉落碰撞旋转碎裂）；pop-art 色彩转换；sakuga 动画美学；极限速度线；4k 60fps。",
    video_prompt: {
      title: "Typography Architecture Rampage · Anime Fashion Action",
      subtitle: "15s · 16:9 · MiniMax H3 on Higgsfield · Kinetic Typography",
      content: `on @higgsfield_ai 

"Surreal, hyper-kinetic anime fashion action sequence where typography acts as physical architecture.
Shot 1 (Typography Rooftop Vault): Extreme low-angle fisheye tracking shot skimming inches above a seamless hot-magenta void. An anime girl in an oversized deconstructed bomber jacket and massive jagged-tread boots sprints forward, using giant 3D extruded metallic letters reading 'OVERRIDE' as stepping stones. Each time her boot stomps on a letter, the character buckles downward on hydraulic springs, causing violent camera-shake tremors and sending sparks and neon paint splatters flying into the lens.
Shot 2 (Zero-G Inversion & Letter Slice): The camera rapidly pulls backward while executing a continuous 360-degree Dutch barrel roll. Gravity flips upside down; she leaps into the air, drawing an oversized glowing cyan beam-blade. As the massive 3D word 'PARADOX' tumbles end-over-end through 3D space toward the camera, she cleanly cleaves the word in half mid-air. The bisected halves blast outward past both sides of the camera lens with intense motion smear and chromatic aberration, exposing a stark acid-yellow background behind it.
Shot 3 (Fourth-Wall Stomp & Screen Shatter): The camera plunges straight down to floor level. She drops from the sky, driving her platform boot directly down into the 'glass' of the camera lens. The entire screen fractures into floating jagged polygonal shards that reflect alternate versions of her in different outfits.
Shot 4 (Ink-Blade Storm & Kanji Compression): Through the cracked lens, she delivers a rapid-fire multi-directional slash. Giant, explosive black sumi-e Kanji characters erupt from her blade strokes, swelling outward to crush the floating 3D text into dust before whipping into a blinding flash of white light. Dynamic sakuga animation, extreme speed lines, vibrant pop-art color shifts, 4k, 60fps."`,
    },
  },
  {
    id: "iqrasaifi-minimax-h3-2d-intro",
    title: "二次元动态片头 · 字效踩点 · MiniMax H3",
    subtitle: "X · @IqrasaifiAI · MiniMax H3 · Higgsfield · 15秒 · 16:9",
    description:
      "MiniMax H3 二次元片头：四个极端运镜配 3D 字效，RIOT 砸地、BREAK 碎裂。",
    video: "/tutorials/iqrasaifi-minimax-h3-2d-intro/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-minimax-h3-2d-intro/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "二次元",
    shots: 4,
    references: 4,
    model: "MiniMax H3",
    style: "超动感二次元片头 · 字效踩点",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2100030154668159256",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 6484,
    sourceStats: { asOf: "2026-09-25", likes: 132, reposts: 6, bookmarks: 139 },
    formats: ["字效·片头"],
    hook: {
      structure: "一个词一场景 · RIOT → VOID → BREAK",
      opening: "暗红背景里黑红发少女朝镜头走来，约 1s 身后巨型石质「RIOT」大字破地而起，烟尘四起。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 4–7s 切荧光黄底，色散「VOID」字飞入；约 8–9s 她抬腿踢向镜头，红色鞋底占满画面。", at: 4 },
        { title: "关键变化", text: "约 10s 墨笔「BREAK」+ 红色圆日，她落地蹲姿，约 11s 画面碎裂炸开。", at: 10 },
        { title: "结尾怎么收", text: "约 12–14s 红黑墨迹旋转包住她，最后停在书法字与墨圈的构图上。", at: 12 },
      ],
      copyThis: "每个英文词配一种材质（石头/色散/墨笔）和一种底色，用踢向镜头的动作接下一段。",
      approx: true,
    },
    tags: [
      "15秒 · 二次元",
      "16:9 横屏",
      "MiniMax H3",
      "Higgsfield",
      "动态片头",
      "字效踩点",
    ],
    steps: [
      {
        number: 1,
        title: "理解字效踩点片头结构",
        description:
          "本片是四镜超动感二次元动态片头：Shot 1 贴地靴底跟踪 RIOT 字母砸地、Shot 2 荷兰角前冲 VOID 旋转划过、Shot 3 靴底擦镜 BREAK 碎裂、Shot 4 拔刀 360° 旋转水墨汉字斩击。每镜都配合极端运镜（贴地鱼眼、快速旋转、靴底擦镜、360° 跟踪）与反应式字效（字母物理掉落碰撞旋转碎裂）。作者声称'上传角色即可生成大胆机位片头'但未公开角色卡，角色外貌写在提示词中。",
      },
      {
        number: 2,
        title: "准备 MiniMax H3 / Higgsfield",
        description:
          "使用 Higgsfield 平台的 MiniMax H3 模型。本片为超动感二次元片头：贴地鱼眼、快速 snap 变焦直冲眼睛或靴底、快速旋转 360° 滚动、突然甩镜；字体动力学（字母物理掉落碰撞旋转碎裂）；视觉转场（靴底擦镜、碎裂玻璃、宽幅水墨书法）；高对比赛璐珞、激进速度线、4k 60fps。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整四镜字效踩点提示词。包含：Shot 1（贴地鱼眼靴底跟踪 · RIOT 字母砸地 · 震颤扬尘）、Shot 2（45° 荷兰角前冲 · VOID 旋转划过 · 侧眼眨眼 · 酸绿背景）、Shot 3（靴底擦镜 · BREAK 碎裂 · 纯白虚空蹲踞红台座）、Shot 4（拔刀 360° 旋转 · 水墨汉字斩击 · 黑红笔触）。完整镜头物理、字体动力学、视觉转场指令在结尾，最后一行 in @higgsfield。",
      },
    ],
    references_detail: [
      {
        id: "ref-intro-still-01",
        number: "1",
        title: "RIOT 靴底砸地",
        subtitle: "Shot 1 · t≈2s",
        image: "/tutorials/iqrasaifi-minimax-h3-2d-intro/still-01-riot-boots.jpg",
        prompt: "成片截帧：贴地鱼眼后退跟踪巨大厚底平台靴，RIOT 混凝土立体字母从空中砸向红色地板，镜头震颤扬尘。",
      },
      {
        id: "ref-intro-still-02",
        number: "2",
        title: "VOID 荷兰角旋转",
        subtitle: "Shot 2 · t≈5s",
        image: "/tutorials/iqrasaifi-minimax-h3-2d-intro/still-02-void-dutch.jpg",
        prompt: "成片截帧：45° 荷兰角前冲钻过伸展手臂，她侧眼眨眼，VOID 巨大字母旋转划过镜头，酸绿背景。",
      },
      {
        id: "ref-intro-still-03",
        number: "3",
        title: "BREAK 靴底擦镜",
        subtitle: "Shot 3 · t≈9s",
        image: "/tutorials/iqrasaifi-minimax-h3-2d-intro/still-03-break-stomp.jpg",
        prompt: "成片截帧：靴底擦过镜头转场，纯白虚空她低蹲红台座上，BREAK 字母碎裂成飘浮碎片。",
      },
      {
        id: "ref-intro-still-04",
        number: "4",
        title: "汉字拔刀旋转",
        subtitle: "Shot 4 · t≈13s",
        image: "/tutorials/iqrasaifi-minimax-h3-2d-intro/still-04-kanji-katana.jpg",
        prompt: "成片截帧：砸碎玻璃转场，拔刀 360° 旋转跟踪，黑红水墨汉字涌现沿刀刃弯曲路径扭曲。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "Shot 1（贴地靴底跟踪）：地面鱼眼镜头后退，紧贴在叛逆二次元女孩（黑红挑染层叠发）的重厚平台靴下方。巨大混凝土质感 RIOT 立体字母从空中砸向无缝红色地板，镜头震颤扬尘，字母落在她脚跟寸后。",
      },
      {
        number: 2,
        description:
          "Shot 2（荷兰角前冲旋转字）：瞬间上甩镜 45° 荷兰角，酸绿背景。镜头前冲钻过她伸展手臂下方，她侧眼眨眼玩味。巨大 VOID 字母从屏外横扫旋转划过镜头，强烈运动模糊与色差。",
      },
      {
        number: 3,
        description:
          "Shot 3（靴底擦镜碎裂）：切纯白虚空，镜头快速后退荷兰角，她向前踏步逼近镜头。巨大靴底短暂遮蔽画面转场。她落到鲜红台座低蹲，飘浮 BREAK 字母碎裂成碎片。",
      },
      {
        number: 4,
        description:
          "Shot 4（拔刀旋转汉字）：砸碎玻璃屏幕转场。她拔发光红刃武士刀旋转 360° 旋转跟踪。巨大黑红水墨汉字涌现扯过画面，三维扭曲沿刀刃弯曲斩击路径。高对比赛璐珞、激进速度线、快速 snap 变焦、4k、60fps。",
      },
    ],
    constraints:
      "上传角色即可生成大胆机位片头（作者声称，但未公开角色卡）；镜头物理（贴地鱼眼、快速旋转 360° 滚动、突然甩镜）；字体动力学（字母物理掉落碰撞旋转碎裂）；视觉转场（靴底擦镜、碎裂玻璃、宽幅水墨书法）；高对比赛璐珞；激进速度线；快速 snap 变焦；4k 60fps。",
    video_prompt: {
      title: "2D Anime Dynamic Intro · Kinetic Typography",
      subtitle: "15s · 16:9 · MiniMax H3 on Higgsfield · Upload Your Character",
      content: `PROMPT:

High-speed, hyper-kinetic anime sequence with extreme camera acrobatics and reactive 3D typography.
Shot 1 (Low-Angle Shoe Tracking): Ground-level fisheye lens tracks backward at breakneck speed right beneath the heavy, lug-soled platform boots of a rebellious anime girl with wild black-and-neon-red layered hair. Massive concrete-textured 3D letters spelling 'RIOT' slam violently downward out of thin air, crashing onto the seamless red studio floor with camera-shake impact dust just inches behind her heels.
Shot 2 (Dynamic Lens Tilt & Word Spin): Instant whip-pan upward with a 45-degree Dutch angle tilt against an acid-lime backdrop. The camera barrels forward, diving under her outstretched arm as she throws a playful side-eye wink. The giant 3D word 'VOID' sweeps in from off-screen in a rapid rotational pivot, skimming past the lens with intense motion blur and chromatic aberration.
Shot 3 (Step-Through & Text Smash): Cut to a stark white void; the camera pulls back fast on a low Dutch tilt as she stomps forward directly toward the lens. The oversized sole of her boot eclipses the frame for a split-second transition. She drops into a low crouch atop a bright-red pedestal; floating jagged 3D letters spelling 'BREAK' violently fracture into floating debris behind her.
Shot 4 (Kinetic Combat & Ink-Brush Kanji): Smash zoom into a fractured-glass screen transition. The anime girl draws a glowing crimson-edged katana, spinning through a 360-degree rotational tracking shot. Massive black-and-blood-red brush-ink Kanji characters surge and rip across the frame, warping in three dimensions to follow the sword's curved slash path. High-contrast cel shading, aggressive speed lines, sharp snap zooms, 4k resolution, 60fps."
Camera & Motion Directives for Generation
Camera Physics: Ground-skimming fisheye, rapid snap-zooms directly into character eyes or boot soles, fast rotational 360-degree rolls, and abrupt whip-pans.
Typography Dynamics: Kinetic typography that physically drops, collides with the floor, spins into the camera axis, and explodes into fragments upon impact.
Visual Transitions: Boot-sole screen wipes, fractured glass impacts, and wide-swiping calligraphy ink ribbons that guide the cut to the next shot.

in @higgsfield`,
    },
  },
  {
    id: "iqrasaifi-magic-carpet-city",
    title: "飞毯穿城 · 史诗幻想航拍 · 15s",
    subtitle: "X · @IqrasaifiAI · 模型未公开 · 15秒 · 16:9",
    description:
      "史诗幻想航拍：骑手驾飞毯穿云，掠过镀金尖顶的巨型城市。模型未公开。",
    video: "/tutorials/iqrasaifi-magic-carpet-city/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-magic-carpet-city/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "奇幻航拍",
    shots: 3,
    references: 3,
    model: "未公开",
    style: "史诗幻想飞毯航拍 · FPV 无人机运动",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2087491291986993632",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 12114,
    sourceStats: { asOf: "2026-09-25", likes: 248, reposts: 18, bookmarks: 210 },
    formats: ["电影叙事"],
    hook: {
      structure: "空飞毯 → 跳上 → 穿城 → 拉远",
      opening: "云海里一张红色飞毯空荡荡地悬着，约 1s 穿橙衣的女孩从上方跳下落到毯上。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3s 俯冲进未来都市，约 5–7s 贴身跟拍她戴草帽大笑，约 8–10s 贴着河面和大桥低飞。", at: 3 },
        { title: "结尾怎么收", text: "约 11s 转到她背后迎着太阳，约 12–14s 镜头拉到高空，飞毯缩成逆光小点悬在城市上。", at: 11 },
      ],
      copyThis: "先给空飞毯吊胃口再让人跳上去；中段贴身跟拍，结尾拉远给全景。",
      approx: true,
    },
    tags: [
      "15秒 · 幻想",
      "16:9 横屏",
      "模型未公开",
      "飞毯穿城",
      "史诗航拍",
    ],
    steps: [
      {
        number: 1,
        title: "理解史诗飞毯穿城结构",
        description:
          "本片是三段史诗幻想飞毯航拍：00:00–00:05 穿云俯冲掠过镀金尖顶、00:05–00:10 从 360° 环绕到肩后视角织行天桥、00:10–00:15 高速反向拉升鹤升突破云层揭示大陆级城市日晕。提示词为结构化 JSON 格式（prompt_metadata、shot_structure ×3、camera、environment、lighting、characters_and_props、audio_cues）。模型与平台未公开，不捏造 MiniMax/Seedance。",
      },
      {
        number: 2,
        title: "理解 JSON 提示词结构",
        description:
          "本片提示词为结构化 JSON：prompt_metadata（时长、画幅、风格、情绪）、shot_structure（三段时间码 + shot_type + description）、camera（24mm 变形宽镜头、f/8、动态 FPV 无人机运动、180° 快门角）、environment（高空、大陆级城市、多层云、湍流风）、lighting（正午阳光、5800K、高对比边缘光）、characters_and_props（骑手草帽橙袍、飞毯波斯编织流苏）、audio_cues（狂风、重布甩击、低频呼啸）。",
      },
      {
        number: 3,
        title: "粘贴完整 JSON 提示词",
        description:
          "使用下方完整 JSON 提示词。包含：explore whole city with magical carpet 标题行 + Prompt: 标签 + JSON 对象（prompt_metadata、shot_structure 三段、camera、environment、lighting、characters_and_props、audio_cues）。提示词为同一帖 note_tweet 内容，非自回复。模型与平台未公开，meta.model = 未公开 / undisclosed，不捏造工具名。",
      },
    ],
    references_detail: [
      {
        id: "ref-carpet-still-01",
        number: "1",
        title: "穿云俯冲尖顶",
        subtitle: "00:00–00:05 · t≈2.5s",
        image: "/tutorials/iqrasaifi-magic-carpet-city/still-01-cloud-swoop-spires.jpg",
        prompt: "成片截帧：飞毯穿云俯冲，云雾撕裂，掠过镀金尖顶与拥挤城门，烟雾升向天空。",
      },
      {
        id: "ref-carpet-still-02",
        number: "2",
        title: "橙袍织行天桥",
        subtitle: "00:05–00:10 · t≈7.5s",
        image: "/tutorials/iqrasaifi-magic-carpet-city/still-02-saffron-weave-bridges.jpg",
        prompt: "成片截帧：360° 旋转到肩后视角，橙袍狂飙织行天桥与方尖碑，河流闪光。",
      },
      {
        id: "ref-carpet-still-03",
        number: "3",
        title: "鹤升全城日晕",
        subtitle: "00:10–00:15 · t≈12.5s",
        image: "/tutorials/iqrasaifi-magic-carpet-city/still-03-crane-city-flare.jpg",
        prompt: "成片截帧：高速反向拉升鹤升突破云层，揭示大陆级城市全景，日晕镜头光晕。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:05 低角动态跟踪：飞毯穿云急速俯冲，高速转弯，云雾暴力撕裂边缘。掠过古代未来混合大都会的镀金尖顶。",
      },
      {
        number: 2,
        description:
          "00:05–00:10 360° 旋转环绕到肩后视角：镜头快速螺旋环绕骑手，捕捉橙袍在狂风中飞舞。转为紧凑肩后视角，飞毯在巨大天桥与方尖碑间织行，下方宽阔河流闪光。",
      },
      {
        number: 3,
        description:
          "00:10–00:15 高速反向拉升 + 垂直鹤升：飞毯直冲天空，突破上层云层。镜头暴力后退并火箭升空，执行史诗连续鹤升，揭示下方大陆级城市全景，日晕镜头光晕。",
      },
    ],
    constraints:
      "模型与平台未公开，不捏造 MiniMax/Seedance；结构化 JSON 提示词；24mm 变形宽镜头 f/8；动态 FPV 无人机运动 + 快速鹤升；厚重丝绸布料物理；古代未来混合建筑；多层云体积光；高空湍流风；正午阳光 5800K 边缘光；狂风重布甩击低频呼啸。",
    video_prompt: {
      title: "Magic Carpet City Flight · Epic Fantasy Aerial",
      subtitle: "15s · 16:9 · Model undisclosed · Structured JSON Prompt",
      content: `explore whole city with magical carpet 

Prompt:

{   "prompt_metadata": {     "duration": "15 seconds",     "aspect_ratio": "16:9",     "style": "Cinematic fantasy action, high-octane photorealistic CGI, 8K resolution",     "mood": "Exhilarating, majestic, high-speed adventure, wondrous, liberating"   },   "shot_structure": {     "sequence_breakdown": [       {         "timeframe": "00:00 - 00:05",         "shot_type": "Low-angle dynamic tracking shot",         "description": "The carpet swoops sharply downward through a layer of volumetric clouds, banking hard at high speed. Wisps of vapor violently pull off the edges of the carpet as it skims over the gilded spires of an ancient-futuristic metropolis."       },       {         "timeframe": "00:05 - 00:10",         "shot_type": "360-degree rotational whip-cam to over-the-shoulder",         "description": "The camera rapidly spirals 360 degrees around the rider, capturing her saffron robes whipping violently in the gale. The camera transitions into a tight over-the-shoulder shot as the carpet weaves sharply between massive sky-bridges and towering obelisks over a wide, sunlit river."       },       {         "timeframe": "00:10 - 00:15",         "shot_type": "High-speed continuous reverse-pull & vertical crane ascension",         "description": "The carpet accelerates straight up into the open sky, breaking through the upper cloud deck. The camera violently pulls back and rockets skyward, executing an epic continuous crane out to reveal the continent-spanning city below framed by a blinding solar lens flare."       }     ]   },   "camera": {     "lens": "24mm Anamorphic (ultra-wide distortion)",     "aperture": "f/8",     "movement": "Dynamic FPV-style drone motion combined with fast sweeping crane moves, rapid tracking, hard banking turns, and seamless focal depth pulls.",     "shutter_angle": "180 degrees (cinematic motion blur during high-speed maneuvers)"   },   "environment": {     "location": "High-altitude airspace over a continent-spanning mega-city",     "city": "A sprawling metropolis fusing ancient grand architecture with modern soaring spires, bisected by a glistening river filled with animated rivercraft.",     "clouds": "Dense, multi-layered volumetric cloudscape with dynamic airflow disruption caused by the high-speed flight of the carpet.",     "atmosphere": "Turbulent high-altitude wind currents, intense clear daylight, air resistance dynamics."   },   "lighting": {     "primary_source": {       "type": "Direct Midday Sun",       "color_temperature": "5800K",       "effects": "High-contrast rim lighting on floating cloud edges, bright glints reflecting off the river, dynamic motion shadows across the cityscape."     }   },   "characters_and_props": [     {       "entity": "Rider",       "details": "A woman leaning dynamically into high-speed turns, wearing a wide-brimmed straw hat secured tightly against the force of the wind.",       "materials": "Saffron-colored heavy silk robes with hyper-realistic high-velocity cloth physics simulation, flowing and snapping sharply in the wind."     },     {       "entity": "Magic Carpet",       "details": "Intricately woven Persian rug with vibrant reds, golds, and blues, dynamically rippling and bending under high aerodynamic pressure.",       "materials": "Individual thread detail with animated corner tassels trailing violently along wind vector trajectories."     }   ],   "audio_cues": {     "sound_design": "Rushing dynamic wind, heavy cloth snapping rapidly, low-frequency atmospheric swooshes, subtle echoing ambiance of the distant city below."   } }`,
    },
  },
  {
    id: "chengzilhy-butterfly-corridor-seedance",
    title: "走廊蓝蝶化身 · 红眼亮灯出场 · Seedance 2.5",
    subtitle: "X · @Chengzilhy · Seedance 2.5 · 16秒 · 3:4 竖屏",
    description:
      "Seedance 2.5 一镜到底：走廊灯灭，蓝蝶的红眼纹化作男子双眼，灯亮时他现身。",
    video: "/tutorials/chengzilhy-butterfly-corridor-seedance/demo-web.mp4",
    poster: "/tutorials/chengzilhy-butterfly-corridor-seedance/poster.jpg",
    duration: "16秒",
    durationSec: 16,
    styleLabel: "暗黑写实",
    shots: 5,
    references: 5,
    model: "Seedance 2.5",
    style: "一镜到底走廊化身 · 蝶眼接人眼",
    aspectRatio: "3/4",
    sourceUrl: "https://x.com/Chengzilhy/status/2103031689467355647",
    sourceAuthor: "@Chengzilhy",
    sourcePlatform: "X",
    sourceImpressions: 7719,
    sourceStats: { asOf: "2026-09-25", likes: 48, reposts: 7, bookmarks: 26 },
    formats: ["折叠·变形"],
    hook: {
      structure: "蝴蝶飞远 → 熄灯红眼 → 亮灯出场",
      opening: "昏暗长走廊正中，一只红黑色大蝴蝶正对镜头扇翅——竖屏对称构图，第一帧就有压迫感。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "蝴蝶往走廊深处飞去，约 5–6s 顶灯一盏盏熄灭，约 7–9s 全黑里只剩一对红色眼睛。", at: 5 },
        { title: "关键变化", text: "约 10s 灯重新亮起，黑袍红领、戴护额的红眼男子站在走廊中央。", at: 10 },
        { title: "结尾怎么收", text: "约 11–13s 缓推到脸部特写，约 14–15s 他伸出手指戳向镜头，画面虚焦。", at: 14 },
      ],
      copyThis: "用熄灯全黑做停顿，只留一对红眼，再亮灯揭晓角色；最后伸手戳镜头打破第四面墙。",
      approx: true,
    },
    tags: [
      "16秒 · 化身",
      "3:4 竖屏",
      "Seedance 2.5",
      "走廊灯光",
      "红眼亮灯",
    ],
    steps: [
      {
        number: 1,
        title: "理解蝶眼接人眼化身结构",
        description:
          "本片是一镜到底走廊化身：0–5s 远处蓝蝶（红黑三勾玉眼纹）扑翼 → 5–7.5s 走廊灯逐盏熄灭至纯黑 → 7.5–10s 纯黑中两处微弱红眼纹无缝接成男性角色双眼 → t=10s 灯亮揭示近处人形 → 10–15s 近景电影肖像红眼三勾玉虹膜。作者公开两张参考图（蝴蝶眼纹 + 男性角色全身黑袍红衬金属额带）。作者回复提及勾玉还原困难 + 版权限制（写轮眼 / 鼬服装被卡）。",
      },
      {
        number: 2,
        title: "准备 Seedance 2.5 + 两张参考图",
        description:
          "使用 Seedance 2.5 模型。本片为真人电影实拍质感一镜到底：战争纪实式肩扛手持摄影（轻微呼吸起伏重心偏移构图修正）、中长焦电影镜头空间压缩、狭长封闭走廊纵深光区、冷白带青光、克制反射、灯逐盏熄灭后纯黑只留两处夜光般微弱红眼纹、第10秒灯亮揭示人形、10–15s 近景双眼清晰锁焦。上传两张作者公开的参考图：蝴蝶眼纹（提示词改底色为深蓝宝石蓝）+ 男性角色全身（黑袍红衬金属额带红眼）。",
      },
      {
        number: 3,
        title: "粘贴完整中文时间轴提示词",
        description:
          "使用下方完整中文时间轴提示词。包含：角色/服装锁定（黑色长发、金属额带、黑袍暗红内衬、网眼内衫、腰封、露趾鞋）、眼睛红色三勾玉虹膜详细描述、蝴蝶参考改色深蓝宝石蓝、【电影摄影与光影】（真人实拍质感、肩扛手持、中长焦空间压缩、狭长走廊纵深光区、冷白带青、克制反射、灯熄纯黑）、【蝴蝶与眼纹】（蝶翼红黑三勾玉眼纹随展翅时隐时现）、【0—5秒】远处扑翼、【5—7.5秒】灯逐盏熄灭空间落实、【7.5—10秒】纯黑无缝衔接、【第10秒】灯亮揭示、【10—15秒】人形电影肖像、【声音与连续性】（低沉底噪电流通电微弱呼吸、无背景音乐对白字幕、结尾无烟雾粒子闪白转场）。",
      },
    ],
    references_detail: [
      {
        id: "ref-butterfly-pub",
        number: "1",
        title: "蝴蝶眼纹参考",
        subtitle: "作者公开参考图（非成片）",
        image: "/tutorials/chengzilhy-butterfly-corridor-seedance/ref-butterfly.jpg",
        prompt: "作者自回复公开的参考图1：红黑三勾玉眼纹蝴蝶。提示词将底色改为深蓝/宝石蓝，保留三勾玉眼纹结构。",
      },
      {
        id: "ref-character-pub",
        number: "2",
        title: "男性角色参考",
        subtitle: "作者公开参考图（非成片）",
        image: "/tutorials/chengzilhy-butterfly-corridor-seedance/ref-character.jpg",
        prompt: "作者自回复公开的参考图2：男性角色全身（黑袍红衬、金属额带、红眼三勾玉）— TRUE 角色参考卡。",
      },
      {
        id: "ref-butterfly-still-01",
        number: "3",
        title: "蓝蝶走廊扑翼",
        subtitle: "成片截帧 · t≈2.5s",
        image: "/tutorials/chengzilhy-butterfly-corridor-seedance/still-01-butterfly-corridor.jpg",
        prompt: "成片截帧：远处走廊中后段蓝蝶自然扑翼，红黑三勾玉眼纹随展翅时隐时现。",
      },
      {
        id: "ref-butterfly-still-02",
        number: "4",
        title: "第10秒灯亮揭示",
        subtitle: "成片截帧 · t=10.2s",
        image: "/tutorials/chengzilhy-butterfly-corridor-seedance/still-02-lights-reveal.jpg",
        prompt: "成片截帧：第10秒走廊灯突然亮起，揭示已站在镜头前的男性角色，两处蝶翼眼纹无缝接成他的双眼。",
      },
      {
        id: "ref-butterfly-still-03",
        number: "5",
        title: "红眼近景肖像",
        subtitle: "成片截帧 · t≈13.5s",
        image: "/tutorials/chengzilhy-butterfly-corridor-seedance/still-03-red-eyes-portrait.jpg",
        prompt: "成片截帧：10–15秒近景电影肖像，双眼清晰锁焦，红色三勾玉虹膜稳定可辨。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–5s 远处扑翼：蓝蝶在走廊中后段自然扑翼，双翼上抬收合再向下扑动展开，带动身体轻微升降与横向漂移，整体不向镜头逼近。拍翼轻快连续有节奏变化，翼根带动翼尖，薄翼微小弯曲，翼缘运动模糊。远处顶灯掠过蓝色翼面，鳞粉光泽短暂显现。左右红色三勾玉眼纹时而同时露出时而只看见一侧随后又随收翅消失。镜头微幅手持捕捉，背景灯光柔和虚化但灯具排列明暗光区与走廊纵深仍可辨。",
      },
      {
        number: 2,
        description:
          "5–7.5s 灯逐盏熄灭：走廊灯光突然异常。最远处一盏灯先逐渐暗下，接着下一盏再下一盏，沿纵深由远到近缓慢熄灭。每盏灯有短暂亮度衰减，相邻灯之间清楚时间差。灯光衰减落实到整个空间：对应墙面亮区收暗门框高光消失地面反射逐渐减弱黑暗一段一段向镜头推进。不是整幅画面统一降低亮度。蝴蝶仍在远处自然扑翼被尚未熄灭的灯短暂照到。蓝色翼面逐渐不可见红色三勾玉眼纹随展翅间歇显露。最后一盏灯熄灭空间彻底全黑。墙壁地面门框顶灯蝶翼与蝴蝶身体全部消失。没有应急灯轮廓光空气光或残留反射。曝光不自动抬高不把黑暗提成灰色。",
      },
      {
        number: 3,
        description:
          "7.5–10s 纯黑无缝衔接：画面只剩两处微弱红色眼纹，像夜光涂层在暗处留下的余辉，低亮度柔和细小。可以勉强辨认红色虹膜区域黑色圆形中心与三枚黑色勾玉结构。没有明显光晕不照亮周围不呈现霓虹或火焰质感。最初两处微光仍随最后几次扑翼产生轻微角度变化与小幅起伏随后运动自然收缓。始终是同一对微光不熄灭后重现不叠入另一对眼睛。借助纯黑隐藏身体和空间距离的变化让蝶翼眼纹连续成为男性角色的红色三勾玉虹膜。两处微光的颜色纹样与画面轨迹延续一致间距和大小只作平滑克制的调整不突然跳位不夸张放大不像光圈冲向镜头。三枚黑色勾玉随整组眼纹自然衔接不单独旋转不重新排列不突然生成。男性角色已经在黑暗中完成转换并站在镜头前但此时看不见他的眼白眼睑鼻梁脸头发服装或身体。画面始终只有纯黑与两处夜光般微弱的红色眼纹。摄影机的细微手持运动持续不断微光自然响应同一套摄影机运动不固定贴在屏幕上。焦点在纯黑遮蔽下自然转移至近处为亮灯后的双眼做好清晰衔接不出现可见的反复寻焦。",
      },
      {
        number: 4,
        description:
          "第10秒灯亮揭示：整条走廊的灯突然同时恢复正常照明。不是闪白不是渐渐显出一张透明脸而是真实灯光瞬间照见已经站在镜头前的男性角色。男性角色正面直视镜头胸部以上中近景。亮灯前的两处微光准确接成亮灯后他双眼中的红色三勾玉虹膜位置形状和运动轨迹连续。直到这一刻观众才发现远处蝴蝶已经化为近处的男性角色。近处侧上方顶灯为他形成有方向的电影主光：额头鼻梁一侧颧骨与上唇边缘接住柔和亮面另一侧面颊落入深而自然的阴影保留必要肤色细节。他身后的顶灯在发丝和肩线形成细窄克制的边缘亮度将人物从幽深走廊中分离。背景恢复交替排列的亮区与暗区突出纵深。肤色保持自然与冷青灰背景形成细微色温差不把脸整体染成蓝色。双眼清晰：黑色圆形瞳孔外围为深红至鲜红的真实虹膜三枚黑色勾玉围绕中央瞳孔均匀排列。三枚勾玉彼此分离圆头与弯曲尾部清楚与中央瞳孔之间保留红色间隔。眼白眼睑睫毛虹膜纤维与角膜反光真实自然。红色虹膜保留克制微光与正常照明融合不照亮整张脸不糊成两个光球。蝴蝶已完全消失。",
      },
      {
        number: 5,
        description:
          "10–15秒人形电影肖像：完整人形保持约5秒。男性角色原地正面直视镜头嘴唇自然闭合只有微表情轻微呼吸与少量发丝运动。不走动不转头不抬手不触碰镜头不继续变形。摄影师保持原地肩扛手持细微呼吸起伏贯穿始终。景别稳定焦点锁在双眼。两只眼睛同时处于清晰焦点范围黑色圆形瞳孔边缘明确红色虹膜中的三枚黑色勾玉各自完整可辨。勾玉数量形状弯曲方向和排列保持稳定彼此不粘连不与中央瞳孔糊成黑团。图案贴合真实虹膜曲面位于透明角膜之下。虹膜不旋转不闪烁不扩散不改变图案。脸部光影自然皮肤纹理发丝层次与服装褶皱清楚可见。背景适度虚化保留走廊光区的纵深节奏。以男性角色近景和清晰的红色三勾玉眼睛结束。不冻结成照片不提前黑屏不淡出。",
      },
    ],
    constraints:
      "真人电影实拍质感；战争纪实式肩扛手持（轻微呼吸重心偏移构图修正）；中长焦空间压缩；一镜到底；狭长走廊纵深光区；冷白带青光；灯逐盏熄灭落实空间；灯熄后纯黑只留两处夜光般微弱红眼纹；纯黑中蝶眼无缝接人眼；第10秒灯亮瞬间揭示人形；10–15s 近景双眼清晰锁焦；红眼三勾玉虹膜稳定；无烟雾粒子闪白转场；无背景音乐对白字幕。作者回复提及勾玉还原困难 + 版权限制（写轮眼/鼬服装被卡）。",
    video_prompt: {
      title: "Corridor Blue Butterfly Morph · Red-Eye Lights-On Reveal",
      subtitle: "16s · 3:4 竖屏 · Seedance 2.5 · 一镜到底走廊化身",
      content: `参考男性角色的外貌、脸型、发型、身形与整套服装，锁定为同一个男性角色。保留黑色长发、金属额带、黑色高领长袍、暗红色内衬和红色细窄包边、黑色交领内搭、网眼内衫、缠绕式腰封、宽松长裤、灰白色小腿缠布与黑色露趾鞋。服装面料有细微暗纹与厚实垂坠感，袍身不增加其他图案。不采用参考图的灰色背景。

眼睛是人物出现后的视觉重点。参考男性角色的红色眼睛：黑色圆形瞳孔，外围为深红至鲜红的虹膜，虹膜内有三枚清楚的黑色勾玉，围绕中央瞳孔均匀排列。每枚勾玉具有饱满圆头和逐渐收细的弯曲尾部，三枚沿同一环向排列，彼此分离，与中央瞳孔之间保留可见红色间隔。两只眼睛采用相同图案结构，数量、形状与排列全程稳定。保留真实虹膜纤维、眼白、眼睑、睫毛和角膜反光。

 参考蝴蝶的真实身体结构、蝶翼形状、翅脉、鳞粉质感和天然眼状斑纹的分布。蝴蝶底色调整为深蓝与宝石蓝，左右翅面各有一处主要眼状花纹，改为与男性角色虹膜相同的红黑三勾玉结构：黑色圆心，外围红色区域内分布三枚黑色勾玉。

花纹自然融入蝶翼鳞粉，随蝶翼弯折、收合和改变透视。不采用参考图的白色背景。不使用参考视频。

【电影摄影与光影】

真人电影实拍质感，悬疑长镜头。真实皮肤、细腻发丝、厚实衣料与自然昆虫质感，细微胶片颗粒，柔和高光过渡，深沉纯净的黑位，避免锐化过度、塑料质感与廉价CG感。

全程采用战争纪实式肩扛手持摄影，摄影机具有真实重量：轻微呼吸起伏、不规则重心偏移、小幅构图修正，动作有惯性和缓冲。克制而紧张，保持清晰的画面组织，不剧烈甩镜。

摄影师始终留在原地，一镜到底，不向蝴蝶推进，不变焦。使用中长焦电影镜头的空间压缩感，沿走廊纵深拍摄，让远处蝴蝶可辨，同时保留它与镜头之间明确的距离。焦点随主体变化自然衔接，最终落在近处男性角色双眼。

狭长封闭走廊，两侧房门与天花板形成强烈纵深线条。顶灯彼此间隔，每盏灯在墙面和地面形成独立光区，明亮光区与深暗间隙交替延伸。

冷白光略带青色，墙面保留低饱和灰蓝，蝴蝶的蓝色与眼纹的红色形成精准冷暖对比。地面有克制的柔和反射，灯具高光不过曝，暗部层次由真实光源建立，不使用均匀环境补光。

灯亮时，侧上方的走廊灯在主体表面形成有方向的明暗；灯灭时，对应光区与反射真实消退。最后一盏灯熄灭后，整个空间必须彻底全黑。

电影光影不能成为保留轮廓光、蓝色底光或额外补光的理由。

【蝴蝶与眼纹】

全片只有一个主体，由一只蓝色蝴蝶连续化为同一个男性角色。

蝴蝶身体纤细，触角自然，两对宽薄蝶翼协调运动，具有真实翅脉、细密鳞粉和柔软翼缘。蝴蝶始终停留在走廊中后段的小范围内，一扑一扑地飞动，不飞到镜头面前。

左右翅面各有一个主要眼状花纹：黑色圆心，外围红色区域内有三枚黑色勾玉。图案结构与男性角色虹膜一致。

花纹始终存在于翅面上，随翅膀弯折、收合和改变透视。只有在部分展翅角度，才能短暂看清两个像眼睛的花纹；收翅或侧转时，自然被遮挡。

花纹不是浮在翼面外的图标，不是立体眼球。

【0—5秒：远处扑翼】

蝴蝶在走廊中后段自然飞动，双翼上抬收合，再向下扑动展开，带动身体轻微升降，伴随小幅横向漂移与方向修正，整体不向镜头逼近。

拍翼轻快、连续，有节奏变化，翼根带动翼尖，薄翼发生微小弯曲，翼缘带自然运动模糊。不要慢动作摊翅，不要机械悬停。

远处顶灯从不同角度掠过蓝色翼面，鳞粉光泽随拍翼短暂显现。

左右红色三勾玉眼纹时而同时露出，时而只看见一侧，随后又随收翅消失。

镜头以微幅手持捕捉这一过程，背景灯光柔和虚化，但灯具排列、明暗光区与走廊纵深仍然可辨。

【5—7.5秒：光区逐段消失】

走廊灯光突然开始出现异常。

最远处一盏灯先逐渐暗下，接着下一盏，再下一盏，沿纵深由远到近缓慢熄灭。每盏灯有短暂亮度衰减，相邻灯之间存在清楚的时间差。

灯光衰减落实到整个空间：对应墙面的亮区收暗，门框高光消失，地面反射逐渐减弱，黑暗一段一段向镜头推进。不是整幅画面统一降低亮度。

蝴蝶仍在远处自然扑翼，被尚未熄灭的灯短暂照到。蓝色翼面逐渐不可见，红色三勾玉眼纹随展翅间歇显露。

最后一盏灯熄灭，空间彻底全黑。

墙壁、地面、门框、顶灯、蝶翼与蝴蝶身体全部消失。

没有应急灯、轮廓光、空气光或残留反射。曝光不自动抬高，不把黑暗提成灰色。

【7.5—10秒：纯黑中的无缝衔接】

画面只剩两处微弱的红色眼纹，像夜光涂层在暗处留下的余辉，低亮度、柔和、细小。

可以勉强辨认红色虹膜区域、黑色圆形中心与三枚黑色勾玉结构。没有明显光晕，不照亮周围，不呈现霓虹或火焰质感。

最初，两处微光仍随最后几次扑翼产生轻微角度变化与小幅起伏，随后运动自然收缓。

始终是同一对微光，不熄灭后重现，不叠入另一对眼睛。

借助纯黑隐藏身体和空间距离的变化，让蝶翼眼纹连续成为男性角色的红色三勾玉虹膜。

两处微光的颜色、纹样与画面轨迹延续一致，间距和大小只作平滑、克制的调整，不突然跳位，不夸张放大，不像光圈冲向镜头。

三枚黑色勾玉随整组眼纹自然衔接，不单独旋转、不重新排列、不突然生成。

男性角色已经在黑暗中完成转换并站在镜头前，但此时看不见他的眼白、眼睑、鼻梁、脸、头发、服装或身体。

画面始终只有纯黑与两处夜光般微弱的红色眼纹。

摄影机的细微手持运动持续不断，微光自然响应同一套摄影机运动，不固定贴在屏幕上。

焦点在纯黑遮蔽下自然转移至近处，为亮灯后的双眼做好清晰衔接，不出现可见的反复寻焦。

【第10秒：灯亮揭示】

整条走廊的灯突然同时恢复正常照明。

不是闪白，不是渐渐显出一张透明脸，而是真实灯光瞬间照见已经站在镜头前的男性角色。

男性角色正面直视镜头，胸部以上中近景。

亮灯前的两处微光，准确接成亮灯后他双眼中的红色三勾玉虹膜，位置、形状和运动轨迹连续。

直到这一刻，观众才发现远处蝴蝶已经化为近处的男性角色。

近处侧上方顶灯为他形成有方向的电影主光：额头、鼻梁、一侧颧骨与上唇边缘接住柔和亮面，另一侧面颊落入深而自然的阴影，保留必要肤色细节。

他身后的顶灯在发丝和肩线形成细窄、克制的边缘亮度，将人物从幽深走廊中分离。

背景恢复交替排列的亮区与暗区，突出纵深。肤色保持自然，与冷青灰背景形成细微色温差，不把脸整体染成蓝色。

双眼清晰：黑色圆形瞳孔，外围为深红至鲜红的真实虹膜，三枚黑色勾玉围绕中央瞳孔均匀排列。

三枚勾玉彼此分离，圆头与弯曲尾部清楚，与中央瞳孔之间保留红色间隔。

眼白、眼睑、睫毛、虹膜纤维与角膜反光真实自然。

红色虹膜保留克制微光，与正常照明融合，不照亮整张脸，不糊成两个光球。

蝴蝶已完全消失。

【10—15秒：人形电影肖像】

完整人形保持约5秒。

男性角色原地正面直视镜头，嘴唇自然闭合，只有微表情、轻微呼吸与少量发丝运动。

不走动、不转头、不抬手、不触碰镜头、不继续变形。

摄影师保持原地肩扛手持，细微呼吸起伏贯穿始终。景别稳定，焦点锁在双眼。

两只眼睛同时处于清晰焦点范围，黑色圆形瞳孔边缘明确，红色虹膜中的三枚黑色勾玉各自完整可辨。

勾玉数量、形状、弯曲方向和排列保持稳定，彼此不粘连，不与中央瞳孔糊成黑团。

图案贴合真实虹膜曲面，位于透明角膜之下。

虹膜不旋转、不闪烁、不扩散、不改变图案。

脸部光影、自然皮肤纹理、发丝层次与服装褶皱清楚可见。背景适度虚化，保留走廊光区的纵深节奏。

以男性角色近景和清晰的红色三勾玉眼睛结束。

不冻结成照片，不提前黑屏，不淡出。

【声音与连续性】

走廊低沉环境底噪、灯具逐盏衰减的细微电流声、整体亮灯时短促通电声，最后保留微弱呼吸。

远处蝴蝶不配夸张振翅声。

无背景音乐，无对白，不要字幕。

全程真人电影质感、肩扛手持、一镜到底。

蝴蝶留在远处自然扑翼，眼纹始终存在于蝶翼上，但随展翅、收翅和侧转时隐时现。

灯逐盏熄灭后必须纯黑，只留两处夜光般微弱的红色三勾玉眼纹。黑暗中不提前显露人形。

第10秒灯光突然整体恢复，男性角色已经站在镜头前，两处蝶翼眼纹无缝接成他的双眼。

10—15秒人物只保持近距离电影肖像，不走近、不触碰镜头、不增加额外表演动作。

人物外貌、服装、眼睛结构与空间关系连续稳定。

无烟雾、无粒子爆炸、无闪白转场。`,
    },
  },
  {
    id: "bmx-troy-2026-vlog-seedance",
    title: "特洛伊战地 Vlog · 2026 穿越 · Seedance 2.5",
    subtitle: "X · @bmx_ai13 · Seedance 2.5 · Dreamina · 30秒 · 16:9",
    description:
      "Seedance 2.5 穿越 Vlog：2026 年的旅行者用手机自拍记录特洛伊战争现场。",
    video: "/tutorials/bmx-troy-2026-vlog-seedance/demo-web.mp4",
    poster: "/tutorials/bmx-troy-2026-vlog-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "手机 Vlog",
    shots: 5,
    references: 2,
    model: "Seedance 2.5",
    style: "手持穿越战地 Vlog · 手机第一人称",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/bmx_ai13/status/2102790595412680764",
    sourceAuthor: "@bmx_ai13",
    sourcePlatform: "X",
    sourceImpressions: 1738,
    sourceStats: { asOf: "2026-09-25", likes: 61, reposts: 8, bookmarks: 40 },
    formats: ["手机POV·Vlog", "电影叙事"],
    hook: {
      structure: "穿越者自拍 → 战场躲藏 → POV 录城内",
      opening: "穿连帽衫的女孩举着手机自拍，身后是冒黑烟的古城城墙，她一脸震惊对镜头说话——一眼看出是「穿越 vlog」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 5–11s 她躲在岩石后，士兵从身边冲过，海滩上排满营帐；约 12–16s 城内人群奔逃、妇孺缩在墙角。", at: 5 },
        { title: "几段怎么切换", text: "约 17–23s 切第一人称：坐在城墙上双脚悬空，手机拍夕阳海面上的船队；约 24s 用扫描线闪屏转场。", at: 17 },
        { title: "结尾怎么收", text: "约 25–28s 举着手机录城内小巷的居民，约 29s 黑场。", at: 25 },
      ],
      copyThis: "把「现代人+手机」放进古代场景：自拍说话开场，后面改成手持手机的第一人称视角。",
      approx: true,
    },
    tags: [
      "30秒 · 时空穿越",
      "16:9 横屏",
      "Seedance 2.5",
      "Dreamina",
      "手持 Vlog",
      "特洛伊战争",
    ],
    steps: [
      {
        number: 1,
        title: "理解角色锁定方式",
        description:
          "本片角色一致性完全写在提示词 CHARACTER LOCK 段落中，无需单独角色卡。主角：25 岁日裔女性，黑色马尾低扎，银色耳钉，旧炭灰卫衣，宽松工装裤，帆布背包，全程手持现代手机。面容、发型、服装、口音（温柔日本口音英语）全程一致。",
      },
      {
        number: 2,
        title: "准备 Seedance 2.5 / Dreamina",
        description:
          "使用 Dreamina 平台的 Seedance 2.5 模型。本片为手持手机 Vlog 质感：自然抖动、偶尔失焦、镜头灰尘、曝光变化；青铜时代材质（石墙、木门、亚麻、皮革、青铜、陶器、木车木船）；战斗保持远景，聚焦 Vlogger 视角所能见证的场景。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 30 秒提示词。包含：Style（Gen Z 旅人从 2026 穿越到特洛伊战争），CHARACTER LOCK（日裔女性 Vlogger 完整描述），5 段时间码分镜（00:00–00:05 光晕闪烁穿越，00:05–00:11 城墙外士兵与海岸木船，00:11–00:17 城门内平民生活，00:17–00:24 城墙上远眺战场，00:24–00:30 城内巷弄准备回归），VISUAL & AUDIO DIRECTION（手持手机拍摄、青铜时代场景、纯场景声无配乐、对话精确口型同步），LAST FRAME（城市巷弄消失在白光闪烁后黑场），AVOID（现代物品除外、中世纪盔甲、神话生物、出名英雄、伤口特写、夸张口音、喜剧反应、换脸换衣、扭曲手、过度抖动、胜利叙事）。",
      },
    ],
    references_detail: [
      {
        id: "ref-bmx-still-01",
        number: "1",
        title: "开场穿越自拍",
        subtitle: "t≈2s · 特洛伊城墙",
        image: "/tutorials/bmx-troy-2026-vlog-seedance/still-01-arrival-selfie.jpg",
        prompt: "成片截帧示意（非原角色卡）：光晕闪烁后手持自拍，背后是特洛伊高耸城墙与拥挤城门，烟雾升向天空。",
      },
      {
        id: "ref-bmx-still-02",
        number: "2",
        title: "城外士兵与木船",
        subtitle: "t≈8s · 平原战场",
        image: "/tutorials/bmx-troy-2026-vlog-seedance/still-02-troy-walls-soldiers.jpg",
        prompt: "成片截帧示意：躲在石头后拍摄青铜甲士兵穿越平原，远处海岸线停靠木船，箭矢落在附近。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:05 穿越降临：光晕闪烁，她跌落到尘土山坡，手持手机自拍。背后是特洛伊高耸城墙与拥挤城门，烟雾升向明亮天空。VLOGGER：'好…我五秒前还在 2026。'号角声响，她转向镜头拍摄士兵冲过身边。",
      },
      {
        number: 2,
        description:
          "00:05–00:11 城墙外：她躲在石头后。宽不稳定手机画面显示青铜甲士兵举盾穿越平原，箭矢落在附近土地。远处海岸线排满搁浅木船。VLOGGER（低声）：'那是特洛伊。这是战争。'她低头躲避一群人冲过，尘土短暂遮住镜头。",
      },
      {
        number: 3,
        description:
          "00:11–00:17 城门内：快切跟随平民穿过城门：手拉沉重木门、陶匠扛工具、父母抱孩子上车。手机挣扎对焦。VLOGGER：'所有人都谈论英雄…'她注意到街上等待的恐惧家庭。VLOGGER（更轻）：'…但人们住在这里。'",
      },
      {
        number: 4,
        description:
          "00:17–00:24 城墙上：从城墙避难位置拍摄远景战场。阳光在盾牌上闪光，号角回应。她放低手机，画面停在她沾尘鞋上，脚步与喊叫指令从周围经过。VLOGGER：'我以为我想看历史。我不知道那意味着什么。'",
      },
      {
        number: 5,
        description:
          "00:24–00:30 归途：她举起手机对准城市：窄巷上方晾晒衣物，屋顶外烟雾，人们帮彼此搬水罐。带她来的同样光开始在画面边缘闪烁。VLOGGER：'我要回家了。我会记住他们。'手机画面破碎成光。切到黑。",
      },
    ],
    constraints:
      "角色锁定在提示词正文无需角色卡；手持手机拍摄偶尔失焦；青铜时代材质（石/木/亚麻/皮革/青铜/陶器）；战斗保持远景；纯场景声无配乐；对话精确口型同步；最后光闪烁后黑场。",
    video_prompt: {
      title: "A 2026 VLOG FROM TROY",
      subtitle: "30s · 16:9 · Seedance 2.5 · Handheld Time-Travel Vlog · Diegetic Audio Only",
      content: `Style: A Gen Z traveler from 2026 records a spontaneous handheld vlog during the legendary Trojan War. Photorealistic, grounded, urgent. Natural daylight. Diegetic audio only; no music.

CHARACTER LOCK — VLOGGER
Japanese woman, 25, straight black hair tied low, small silver stud earrings. Worn charcoal hoodie, loose cargo trousers, canvas backpack. She holds a modern phone throughout. Same face, hair, voice, and clothing in every shot. She speaks conversational English with a gentle, natural Japanese accent. Her reactions are curious at first, then shaken and sincere.
00:00–00:05 — THE ARRIVAL
A sharp burst of light glitches across her phone camera. Handheld selfie: she stumbles onto a dusty hillside. Behind her, the towering walls of Troy rise above a crowded gate. Smoke trails into the bright sky.
 VLOGGER: "Okay… I was in 2026 five seconds ago."
A horn sounds. She turns the camera toward soldiers rushing past.

00:05–00:11 — OUTSIDE THE WALLS
She moves behind a stone outcrop. Wide, unstable phone footage shows bronze-armored soldiers crossing the plain, shields raised. Arrows strike the earth nearby. The distant shoreline is lined with beached wooden ships.
 VLOGGER (under her breath): "That's Troy. This is the war."
She ducks as a group runs past. Dust briefly obscures the lens.
00:11–00:17 — INSIDE THE GATE
Quick cuts as she follows civilians through the gate: hands pulling a heavy wooden door, a potter carrying his tools, a parent lifting a child onto a cart. Her phone struggles to refocus.
 VLOGGER: "Everyone talks about the heroes…"
She notices frightened families waiting in the street.
 VLOGGER (quieter): "…but people live here."
00:17–00:24 — THE WALL
From a sheltered position on the wall, she films the battlefield in a distant wide shot. Sunlight flashes on shields. A horn answers another across the plain. She lowers the phone, and the image rests on her dusty shoes while footsteps and shouted orders pass around her.
 VLOGGER: "I thought I wanted to see history. I don't think I understood what that meant."
00:24–00:30 — THE RETURN
She raises the phone toward the city: laundry stirring above a narrow lane, smoke beyond the rooftops, people helping one another move water jars. The same light that brought her here begins to flicker at the edge of frame.
 VLOGGER: "I'm going home. I'll remember them."
The phone image breaks into light. CUT TO BLACK.

VISUAL & AUDIO DIRECTION
Handheld phone footage with occasional autofocus hunting, dust on the lens, and natural exposure changes. Bronze Age materials and architecture: stone walls, timber gates, linen, leather, bronze, clay vessels, wooden carts and ships. Keep combat mostly distant; focus on what the vlogger can plausibly witness. Sound is entirely from the scene: wind, sandals on stone, carts, horns, shouted orders, arrows, and breathing. Dialogue must be clearly audible and precisely lip-synchronized.
LAST FRAME
The city lane vanishes into a brief white flicker, then black. No text, captions, logos, subtitles, watermarks, or music.
AVOID
Modern objects other than the vlogger's clothing, backpack, and phone; medieval armor or castles; magical creatures; named heroes appearing without context; graphic injuries; exaggerated accents; comedic reactions; changing faces or clothing; distorted hands; excessive camera shake; or a triumphant portrayal of the battle.`,
    },
  },
  {
    id: "tsubaki-korean-outfit-lookbook-seedance",
    title: "韩风穿搭 Lookbook 转盘 · Seedance 2.5",
    subtitle: "X · @AI__TSUBAKI · GPT Image 2.5 + Seedance 2.5 · 17秒 · 3:4",
    description:
      "GPT Image 2.5 出海报，Seedance 2.5 让模特原地转身，单品同步旋转展示。",
    video: "/tutorials/tsubaki-korean-outfit-lookbook-seedance/demo-web.mp4",
    poster: "/tutorials/tsubaki-korean-outfit-lookbook-seedance/poster.jpg",
    duration: "17秒",
    durationSec: 17,
    styleLabel: "时尚展示",
    shots: 1,
    references: 1,
    model: "Seedance 2.5",
    style: "高端时尚 Lookbook 转盘 · 电商产品展示",
    aspectRatio: "3/4",
    sourceUrl: "https://x.com/AI__TSUBAKI/status/2102459655700287648",
    sourceAuthor: "@AI__TSUBAKI",
    sourcePlatform: "X",
    sourceImpressions: 58890,
    sourceStats: { asOf: "2026-09-25", likes: 1177, reposts: 162, bookmarks: 1171 },
    formats: ["时尚大片", "产品广告"],
    hook: {
      structure: "五套造型轮播 · 单品卡 + 模特转身",
      opening: "灰底画面左侧是一张单品平铺卡，右侧金发模特穿水手领毛衣背心和格裙，顶部写着名字「YURI」——一开场就是穿搭拆解。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约每 3s 换一套：约 3s SEOYUN 绿背心牛仔裤，约 7s HARIN 棕格西装，约 10s RENA 黑色套装，约 14s HAEIN 黄色开衫。", at: 3 },
        { title: "过程怎么推进", text: "每套里模特原地转身看背面再转回来，左侧卡片同步换成这一套的单品。", at: 1 },
      ],
      copyThis: "固定版式：左单品卡、右全身模特、上方名字；每套 3 秒，转身一圈就切下一套。",
      approx: true,
    },
    tags: [
      "17秒 · 时尚展示",
      "3:4 竖屏",
      "GPT Image 2.5",
      "Seedance 2.5",
      "韩风穿搭",
      "Lookbook 转盘",
    ],
    steps: [
      {
        number: 1,
        title: "准备角色表并替换 [NAME]",
        description:
          "准备你自己的角色表（面部/发型/穿搭身份）。作者未公开本演示所用角色表。将 board 提示词中所有 [NAME] 替换为你的主体名称/品牌字标。",
      },
      {
        number: 2,
        title: "GPT Image 2.5 生成 Lookbook 静帧",
        description:
          "上传角色表 + PROMPT_BOARD_GPT_IMAGE（下方 references_detail[0].prompt）→ 生成垂直 3:4 时尚 Lookbook 海报（奶油色单品面板左侧，全身模特右侧，皇冠字标顶部）。这是 I2V 的起始帧。",
      },
      {
        number: 3,
        title: "Seedance 2.5 图生视频（Lookbook → 转盘）",
        description:
          "将完成的 Lookbook 静帧作为起始帧/image1，配合下方完整视频提示词。模特原地 360° 转身；每件单品同步绕竖轴转一圈；面板/说明文字/字标保持固定；摄影机锁定。演示约 17 秒 3:4。",
      },
    ],
    references_detail: [
      {
        id: "ref-tsubaki-board",
        number: "0",
        title: "Lookbook 静帧 / 分镜板",
        subtitle: "GPT Image 2.5 · 起始帧",
        image: "/tutorials/tsubaki-korean-outfit-lookbook-seedance/board.jpg",
        prompt: `Attach a character sheet and replace [NAME].

Use the attached character sheet as the identity and outfit reference for [NAME]. Keep her face, hair and outfit exactly as shown.

A vertical 3:4 fashion lookbook poster on a soft, pale warm-gray studio backdrop with gentle even lighting and a subtle floor shadow.

[NAME] stands full-body on the right half of the frame, shot from a low camera angle at about knee height, tilted slightly upward, with a 35mm lens. The perspective makes her legs look long and her head look small, giving an elongated, model-like silhouette. She is slightly angled toward the camera in a relaxed model pose. Her feet sit close to the bottom edge of the frame, and her head sits well below the top edge. Calm expression, looking down into the lens.

On the left side, a tall rounded-corner panel in soft cream, like an e-commerce item card, divided into rows by thin lines. Each garment and accessory from her outfit appears as a clean product cutout, up to two per row, with a tiny gray one-word caption under each. A small minimalist crest icon sits at the top of each row.

Above the panel, a thin elegant white serif wordmark "[NAME]" with a small delicate crown icon above it.

Clean, airy composition, high-end fashion product page aesthetic, sharp fabric texture, natural skin, photorealistic.`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "完整 17 秒：整体版式保持完全如起始帧显示：相同背景、相同奶油色单品面板、相同说明文字、相同皇冠图标、相同字标、相同取景。右侧模特像真实时装模特在片场那样原地完整 360° 转身：她自然迈步脚步绕圈，重心在两腿间转移，双臂自由活动，肩部放松。转到背面时她回眸看镜头，转回正面时她停到一个新的、不同的自信模特姿势。自然姿态，真实布料物理；头发、下摆和配饰随运动摆动并归位。她始终保持在相同位置和相同画面大小。同时，单品面板内每件产品抠图在其竖轴上原地旋转，像奢侈品产品展示渲染，展示正面、侧面和背面。每件单品保持在自己槽位中心，保持大小，与模特转身同步完成恰好一整圈，结束时回到原始方向。面板、分隔线、说明文字、皇冠图标和字标保持完全固定；只有模特移动和产品旋转。摄影机锁定，无缩放，无平移。柔和影棚光照，模特和产品下方有真实阴影。流畅自然运动，干净商业时尚广告美学，超清晰细节，奢华目录展示。",
      },
    ],
    constraints:
      "需要角色表 + 替换 [NAME]；整体版式锁定（背景/面板/文字/图标/字标不变）；模特原地 360° 转身（自然迈步/重心转移/自由手臂/放松肩膀/回眸/新姿势）；单品同步竖轴旋转一圈；摄影机锁定无缩放平移；柔和影棚光；真实布料物理和阴影；高端电商美学。",
    video_prompt: {
      title: "KOREAN OUTFIT LOOKBOOK TURNTABLE",
      subtitle: "17s · 3:4 · Seedance 2.5 · Fashion Product Display Animation",
      content: `A clean, premium 4-second fashion lookbook animation starting from the first frame. The entire layout stays exactly as shown: same background, same cream item panel, same captions, same crown icons, same wordmark, same framing.

The model on the right turns a full 360° on the spot the way a real fashion model does on set: she steps her feet around naturally, shifting her weight from one leg to the other as she turns, her arms moving freely and her shoulders relaxed. As she comes around to the back she glances over her shoulder, and as she returns to face the camera she settles into a new, different confident model pose. Natural posture, realistic cloth physics; hair, hems and accessories swing and settle with the motion. She stays in the same spot and at the same size in frame throughout.

At the same time, every product cutout inside the item panel rotates in place on its own vertical axis, like a luxury product display render, revealing front, side and back. Each item stays centered in its own slot, keeps its size, and completes exactly one full rotation in sync with the model's turn, ending in its original orientation.

The panel, divider lines, captions, crown icons and wordmark stay perfectly fixed; only the model moves and the products rotate. Camera locked off, no zoom, no pan. Soft studio lighting with realistic shadows under the model and the products. Smooth, natural motion, clean commercial fashion-ad aesthetic, ultra-sharp details, luxury catalog presentation.`,
    },
  },
  {
    id: "johnagi-car-eye-contact-seedance",
    title: "车内密戏眼神拉扯 · Seedance 2.5",
    subtitle: "X · @johnAGI168 · Seedance 2.5 · Pollo MCP · 22秒 · 16:9",
    description:
      "Seedance 2.5 车内密戏：固定长镜头，两人眼神试探拉扯，最后主动靠近轻吻。",
    video: "/tutorials/johnagi-car-eye-contact-seedance/demo-web.mp4",
    poster: "/tutorials/johnagi-car-eye-contact-seedance/poster.jpg",
    duration: "22秒",
    durationSec: 22,
    styleLabel: "真人风",
    shots: 1,
    references: 2,
    model: "Seedance 2.5",
    style: "电影级车内双人表演 · 固定机位长镜头",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/johnAGI168/status/2102720575110299823",
    sourceAuthor: "@johnAGI168",
    sourcePlatform: "X",
    sourceImpressions: 62060,
    sourceStats: { asOf: "2026-09-25", likes: 575, reposts: 62, bookmarks: 263 },
    formats: ["角色表演"],
    hook: {
      structure: "字幕独白 → 眼神拉扯 → 吻",
      opening: "夜里车后座，女孩双手托腮冲镜头挥手，旁边男生闭眼；字幕「他送我到家楼下…想自拍一下」——像一条真实自拍。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "她几次偷看男生又转回镜头，字幕接「我有点怔住了」「我不知道他什么意思 有点失落」。", at: 4 },
        { title: "关键变化", text: "约 11s 字幕「但又觉得不对 我能看见他一直看我」，约 17s 男生转头看她。", at: 11 },
        { title: "结尾怎么收", text: "约 19s 男生托住她下巴，出现「^>///<^」害羞贴纸，约 20s 吻上去收尾。", at: 19 },
      ],
      copyThis: "用第一人称字幕讲心理活动，画面只有托腮和偷看；最后一个动作兑现前面的铺垫。",
      approx: true,
    },
    tags: [
      "22秒 · 情感短片",
      "16:9 横屏",
      "Seedance 2.5",
      "Pollo MCP",
      "车内密戏",
      "眼神拉扯",
      "演员表演",
    ],
    steps: [
      {
        number: 1,
        title: "理解角色与表演动机",
        description:
          "角色绑定：@图片1 为男主角色卡，@图片2 为女主角色卡（作者未公开为单独附件，需自备）。两位成年角色外貌、发型、服装严格遵循各自角色卡，全程保持一致。表演动机：两人尚处于彼此试探的暧昧阶段。男主从回避镜头逐渐转为持续关注女主；女主维持自拍托腮姿势，通过余光确认他的注意。情绪推进始终克制。",
      },
      {
        number: 2,
        title: "准备 Seedance 2.5 / Pollo MCP",
        description:
          "使用 Pollo MCP 平台的 Seedance 2.5 模型。本片为固定机位单长镜头，手机固定在两人前方正面双人中近景，同时容纳两人头部、肩胸和女主托腮的双手。全程不切镜、不推拉、不环绕，距离缩短由演员倾身完成。无对话，只有轻微车内环境底噪、细小衣料摩擦声与自然呼吸。",
      },
      {
        number: 3,
        title: "粘贴完整 ACTOR PERFORMANCE PROMPT",
        description:
          "使用下方完整 22 秒逐秒表演提示词。包含：时长/画幅/镜头（固定机位单连续长镜头）、Subject 角色绑定（@图片1/@图片2）、Environment 场景（夜间车内前排座椅，车顶阅读灯柔和正面光）、Camera/Style 摄影（手机固定正面双人中近景，不切镜不推拉不环绕）、Dramatic Engine 表演动机（暧昧试探阶段，从回避到关注到再次对视到靠近）、Action/Performance 逐秒表演（0–3s 她准备自拍他转开脸，3–5s 他转回来先垂眼再抬眼，5–8s 第一次对视她先结束，8–13s 她继续托腮他持续注视，13–14s 她再次确认他的目光，14–17s 第二次对视停下来，17–19s 先倾身再托脸，19–22s 轻吻保持贴近），Audio 声音（轻微车内环境底噪），Performance Constraints 表演约束，Negative 避免。",
      },
    ],
    references_detail: [
      {
        id: "ref-johnagi-still-01",
        number: "1",
        title: "开场自拍托腮",
        subtitle: "t≈1.5s · 女主看镜头",
        image: "/tutorials/johnagi-car-eye-contact-seedance/still-01-open-selfie.jpg",
        prompt: "成片截帧示意（非原角色卡）：开场女主靠近男主一侧的手松握成拳支在下巴与下颊旁，另一只手从镜头前方收回放到另一侧下颌附近，形成双手围着脸的自拍姿势。女主看镜头，男主转开脸看窗外。",
      },
      {
        id: "ref-johnagi-still-04",
        number: "2",
        title: "第二次对视停顿",
        subtitle: "t≈15s · 两人对视",
        image: "/tutorials/johnagi-car-eye-contact-seedance/still-04-second-eye-lock.jpg",
        prompt: "成片截帧示意：第二次对视，两人安静看着彼此，这次对视明显长于第一次。女主眼睛保持睁开，嘴唇轻合，托腮的手不放下。男主嘴角出现一点很浅的上扬。停顿的结束状态是两人仍在对视，靠近还没有发生。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s 她准备自拍，他转开脸：开场两人面向镜头。女主靠近男主一侧的手已经松握成拳支在下巴与下颊旁；另一只手从镜头前方收回，手指自然弯曲，放到另一侧下颌附近，形成双手围着脸的自拍姿势。女主看着镜头，嘴唇从微微分开变为轻轻合拢，自然眨眼。男主起初神情平静，随后把头转向画面左侧的侧窗，肩膀与上身基本留在原位。女主继续面对镜头，没有跟着大幅转身，也没有立即露出明显失落表情。结束状态：男主看向窗外，女主仍托着脸看镜头，两人尚未接触。",
      },
      {
        number: 2,
        description:
          "3–5s 他转回来，先垂眼再抬眼：男主从窗外方向转回正面，转回途中视线先落低，头略微低着，停稳后再抬眼看向前方。嘴唇闭合，表情安静，不刻意摆出冷脸或笑脸。女主维持托腮姿势，唇角只有一点点变化，偶尔自然眨眼。两人的呼吸平缓，身体没有主动靠近。结束状态：两人重新面向前方，气氛安静，保留尚未确认对方意图的停顿。",
      },
      {
        number: 3,
        description:
          "5–8s 第一次对视，她先结束：女主先把眼神移向画面左侧的男主，头稍后才跟着转过去。男主也转头看向她，两人的视线短暂对上。对视时嘴唇仍轻轻闭合，眉毛没有夸张上挑，不立即微笑或靠近。短暂停留后，女主先把眼神落低，伴随一次轻轻眨眼，将脸转回镜头；双手仍然托在脸侧。男主没有跟着转回去，保持侧脸看她，目光继续停在她脸上。结束状态：女主面向镜头，男主侧头看女主。一定保留两人结束对视的时间差。",
      },
      {
        number: 4,
        description:
          "8–13s 她继续托腮，他持续注视：女主把两只松握的拳头略向内、向上调整，更对称地抵住下颊。脸颊受到轻微挤压，下巴稍收，嘴唇自然形成很小的抿拢与微噘。这个嘴部变化由托腮动作带出，幅度轻，不演成夸张嘟嘴索吻。她继续看镜头，间或眨眼，保持姿势，却能通过余光察觉男主仍在看她。男主保持侧向她的姿态，只有自然眨眼、轻微呼吸和很小的嘴角变化，不咬唇、不反复吞咽、不来回摇头。镜头持续停留，让'她看镜头，他看她'的关系充分成立。",
      },
      {
        number: 5,
        description:
          "13–14s 她再次确认他的目光：女主先眨一下眼，睁开后眼神再次向男主方向移动，然后才慢慢带动头转过去。双拳继续托着下颊，身体没有整体转向男主。男主仍然看着她，因此她转过去便接住他的视线。这次女主没有马上把脸转回镜头。结束状态：两人保持近距离对视，身体尚未进一步靠近。",
      },
      {
        number: 6,
        description:
          "14–17s 第二次对视，停下来：两人安静看着彼此，让这次对视明显长于第一次。女主眼睛保持睁开，嘴唇轻合，托腮的手不放下。目光留在男主脸上，眼睑和唇角仅有极小变化。男主嘴角出现一点很浅的上扬，然后自然放松，视线有轻微下移，再停留在她面部。呼吸和胸肩只有细小起伏。不要在这段安排多余手势，也不要提前闭眼等待接吻。停顿的结束状态是两人仍在对视，靠近还没有发生。",
      },
      {
        number: 7,
        description:
          "17–19s 先倾身，再托脸：前半拍继续保留对视，然后男主主动将上身和头向女主方向倾过去，逐渐缩短距离。必须先发生倾身，再抬手。距离缩短后，男主一只手从画面下方抬起，轻托女主下颌，手指与掌侧顺势移到她面颊侧面，温柔承托，不抓住下巴猛拉。女主保持看着他的视线，双拳仍在脸颊附近。她随接近轻轻抬起下巴，头部略微后仰、侧转，调整两张脸接近的角度，没有大幅迎上去，也没有退开再被追上。男主低头并略偏头，两人鼻尖自然错开。接触前女主眼睛仍然睁着，不让两人从远处便同步闭眼。",
      },
      {
        number: 8,
        description:
          "19–22s 轻吻，保持贴近：两人的嘴唇清楚地轻轻贴合，呈现真实、克制的接吻。男主保持托住女主侧脸，女主维持微抬下巴的姿势，双手仍停在下颊附近，不突然放下手抱住他的脖子。接吻后继续贴近，身体只有轻微自然调整和呼吸起伏。保留人物面部轮廓、手与脸的正确接触关系。以两人仍贴近亲吻的状态结束，不补分开大笑、再次追吻或额外拥抱。",
      },
    ],
    constraints:
      "需要男女主角色卡（未公开需自备）；固定机位单长镜头不切镜不推拉不环绕；手机固定正面双人中近景；夜间车内车顶阅读灯柔和正面光；眼神先移动头部随后跟上；第一轮对视短第二轮对视长；女主第一次先收回目光男主继续看她第二次她留下来对视；前段无亲密接触最后才发生倾身托下颌贴近和接吻；男主先倾身后抬手不颠倒顺序；情绪依靠一两个细微信号逐步变化；保留真实停顿人物有呼吸与自然眨眼。",
    video_prompt: {
      title: "SEEDANCE 2.5 ACTOR PERFORMANCE PROMPT",
      subtitle: "22s · 16:9 · Fixed Wide · Single Continuous Take · No Dialogue",
      content: `SEEDANCE 2.5 ACTOR PERFORMANCE PROMPT

时长：22秒
画幅：16:9
镜头：固定机位，单个连续长镜头
对白：无对白、无旁白，以目光、停顿、呼吸和身体距离完成表演。

【Subject｜角色绑定】
@图片1为男主角色卡，@图片2为女主角色卡。两位成年角色的外貌、发型、服装分别严格遵循各自角色卡，全程保持一致。

【Environment｜场景】
夜间车内，两人并排坐在前排座椅，男主位于画面左侧，女主位于画面右侧。后方是座椅头枕和暗色车厢，车顶阅读灯亮着，柔和正面光照亮两人的脸，窗外昏暗。

【Camera / Style｜摄影】
手机固定在两人前方，正面双人中近景，同时容纳两人的头部、肩胸和女主托腮的双手。男主转头、倾身和两人最后接吻始终留在同一画面内。

固定焦段、固定构图，真实手机拍摄质感，自然肤质、柔和明暗。全程不切镜、不推拉、不环绕。距离缩短由演员倾身完成，相机保持不动，让观众完整看见细微反应。

【Dramatic Engine｜表演动机】
两人尚处于彼此试探的暧昧阶段。
男主从回避镜头，逐渐转为持续关注女主，等到再次对视后才主动靠近。
女主维持自拍托腮的姿势，通过余光确认他的注意；第一次对视很快收回，第二次则留下来回应。
情绪推进：各自面对镜头 → 短暂错开 → 第一次试探对视 → 她收回、他继续看 → 再次确认 → 安静靠近 → 轻吻。
表演强度始终克制，最明显的变化留到最后的主动靠近。

【Action / Performance｜逐秒表演】

0—3秒｜她准备自拍，他转开脸
开场两人面向镜头。女主靠近男主一侧的手已经松握成拳，支在下巴与下颊旁；另一只手从镜头前方收回，手指自然弯曲，放到另一侧下颌附近，形成双手围着脸的自拍姿势。

女主看着镜头，嘴唇从微微分开变为轻轻合拢，自然眨眼。
男主起初神情平静，随后把头转向画面左侧的侧窗，肩膀与上身基本留在原位。女主继续面对镜头，没有跟着大幅转身，也没有立即露出明显失落表情。

结束状态：男主看向窗外，女主仍托着脸看镜头，两人尚未接触。

3—5秒｜他转回来，先垂眼再抬眼
男主从窗外方向转回正面，转回途中视线先落低，头略微低着，停稳后再抬眼看向前方。嘴唇闭合，表情安静，不刻意摆出冷脸或笑脸。

女主维持托腮姿势，唇角只有一点点变化，偶尔自然眨眼。两人的呼吸平缓，身体没有主动靠近。

结束状态：两人重新面向前方，气氛安静，保留尚未确认对方意图的停顿。

5—8秒｜第一次对视，她先结束
女主先把眼神移向画面左侧的男主，头稍后才跟着转过去。男主也转头看向她，两人的视线短暂对上。

对视时嘴唇仍轻轻闭合，眉毛没有夸张上挑，不立即微笑或靠近。
短暂停留后，女主先把眼神落低，伴随一次轻轻眨眼，将脸转回镜头；双手仍然托在脸侧。
男主没有跟着转回去，保持侧脸看她，目光继续停在她脸上。

结束状态：女主面向镜头，男主侧头看女主。一定保留两人结束对视的时间差。

8—13秒｜她继续托腮，他持续注视
女主把两只松握的拳头略向内、向上调整，更对称地抵住下颊。脸颊受到轻微挤压，下巴稍收，嘴唇自然形成很小的抿拢与微噘。

这个嘴部变化由托腮动作带出，幅度轻，不演成夸张嘟嘴索吻。
她继续看镜头，间或眨眼，保持姿势，却能通过余光察觉男主仍在看她。
男主保持侧向她的姿态，只有自然眨眼、轻微呼吸和很小的嘴角变化，不咬唇、不反复吞咽、不来回摇头。

镜头持续停留，让"她看镜头，他看她"的关系充分成立。

13—14秒｜她再次确认他的目光
女主先眨一下眼，睁开后眼神再次向男主方向移动，然后才慢慢带动头转过去。双拳继续托着下颊，身体没有整体转向男主。

男主仍然看着她，因此她转过去便接住他的视线。
这次女主没有马上把脸转回镜头。

结束状态：两人保持近距离对视，身体尚未进一步靠近。

14—17秒｜第二次对视，停下来
两人安静看着彼此，让这次对视明显长于第一次。

女主眼睛保持睁开，嘴唇轻合，托腮的手不放下。目光留在男主脸上，眼睑和唇角仅有极小变化。
男主嘴角出现一点很浅的上扬，然后自然放松，视线有轻微下移，再停留在她面部。

呼吸和胸肩只有细小起伏。不要在这段安排多余手势，也不要提前闭眼等待接吻。
停顿的结束状态是两人仍在对视，靠近还没有发生。

17—19秒｜先倾身，再托脸
前半拍继续保留对视，然后男主主动将上身和头向女主方向倾过去，逐渐缩短距离。

必须先发生倾身，再抬手。
距离缩短后，男主一只手从画面下方抬起，轻托女主下颌，手指与掌侧顺势移到她面颊侧面，温柔承托，不抓住下巴猛拉。

女主保持看着他的视线，双拳仍在脸颊附近。她随接近轻轻抬起下巴，头部略微后仰、侧转，调整两张脸接近的角度，没有大幅迎上去，也没有退开再被追上。

男主低头并略偏头，两人鼻尖自然错开。接触前女主眼睛仍然睁着，不让两人从远处便同步闭眼。

19—22秒｜轻吻，保持贴近
两人的嘴唇清楚地轻轻贴合，呈现真实、克制的接吻。
男主保持托住女主侧脸，女主维持微抬下巴的姿势，双手仍停在下颊附近，不突然放下手抱住他的脖子。

接吻后继续贴近，身体只有轻微自然调整和呼吸起伏。保留人物面部轮廓、手与脸的正确接触关系。
以两人仍贴近亲吻的状态结束，不补分开大笑、再次追吻或额外拥抱。

【Audio｜声音】
轻微车内环境底噪，细小衣料摩擦声与自然呼吸。可有音量很低、无人声的柔和配乐，不用音乐骤然拔高代替演员表演。不添加台词、旁白、夸张喘息或夸张亲吻音效。

【Performance Constraints｜表演约束】
眼神先移动，头部随后跟上；第一轮对视短，第二轮对视长。
女主第一次先收回目光，男主继续看她；第二次她留下来对视。
前段无亲密接触，最后才发生倾身、托下颌、贴近和接吻。
男主先倾身后抬手，不颠倒顺序。
女主托腮动作从单侧支撑逐渐调整为双拳轻挤下颊，接吻时仍保留手的位置。
情绪依靠一两个细微信号逐步变化，不把每种微表情同时堆在脸上。
保留真实停顿，人物有呼吸与自然眨眼，不能变成静止照片。

【Negative｜避免】
夸张挑眉、持续咬唇、反复嘟嘴、大笑、突然哭泣、机械眨眼、同步转头、同步闭眼、频繁闪躲、额外对白、提前接吻、突然拥抱、强拉头部、头部穿插、嘴唇融合、手指畸形、多余手臂、角色换脸、服装变化、突然变焦、镜头切换、磨皮塑料感、字幕、文字、遮脸贴纸、水印。`,
    },
  },
  {
    id: "krevix-bmw-offroad-reels-seedance",
    title: "宝马变越野 · 汽修 Reels · Seedance 2.0",
    subtitle: "X · @KrevixAi · Seedance 2.0 · 10秒 · 16:9",
    description:
      "Seedance 2.0 汽修 Reels：第一人称技师视角，灰色宝马改装成深红越野车。",
    video: "/tutorials/krevix-bmw-offroad-reels-seedance/demo-web.mp4",
    poster: "/tutorials/krevix-bmw-offroad-reels-seedance/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "写实广告",
    shots: 18,
    references: 1,
    model: "Seedance 2.0",
    style: "汽修 Reels · 第一人称技师 POV · ASMR 快剪",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2102690184231890952",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 1808,
    sourceStats: { asOf: "2026-09-25", likes: 50, reposts: 7, bookmarks: 43 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "拆 → 改装 → 喷漆 → 成品揭晓",
      opening: "白色车间里一台灰色宝马轿车，戴黑手套的手拿电动扳手拧轮毂——约 0.5s 旁边已换上越野大胎。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "每约 0.5s 一个改装步骤：黑轮毂、拆翼子板、约 2.5–3.5s 高避震、刹车盘、红卡钳，约 4.5s 前杠加灯排。", at: 0.5 },
        { title: "关键变化", text: "约 6s 喷枪把车身喷成酒红色，约 7s 手按车钥匙。", at: 6 },
        { title: "成品揭晓", text: "约 7.5–9s 酒红越野版宝马停在车间、灯排亮起，约 9.5s 推到车头灯特写收。", at: 7.5 },
      ],
      copyThis: "每个改装零件只给半秒特写，用黑手套贯穿；最后按车钥匙当揭晓开关。",
      approx: true,
    },
    tags: [
      "10秒 · 汽修改装",
      "16:9 横屏",
      "Seedance 2.0",
      "宝马拉力改装",
      "第一人称 POV",
      "ASMR 快剪",
    ],
    steps: [
      {
        number: 1,
        title: "上传分镜板到 Seedance 2.0",
        description:
          "将 18 格分镜板（board.jpg / refs/storyboard.jpg — 标题 BMW: Engineered for Further）上传到 Seedance 2.0 的 Create Video 部分。",
      },
      {
        number: 2,
        title: "粘贴视频提示词",
        description:
          "粘贴下方完整提示词（来自作者自回复 note_tweet 2102690187885039676）。10 秒超写实 16:9 宝马灰→深红拉力改装，第一人称技师 POV，黑色手套，快速高级 ASMR 剪辑，只有真实物理改装，无变形/魔法/粒子或漂浮零件。",
      },
    ],
    references_detail: [
      {
        id: "ref-krevix-board",
        number: "0",
        title: "18 格分镜板",
        subtitle: "BMW: Engineered for Further",
        image: "/tutorials/krevix-bmw-offroad-reels-seedance/board.jpg",
        prompt: "18 格分镜板：STOCK BMW → THE PROBLEM/HOOK → WHEEL ARCH COMPASS → … → FINAL BEAST。面板标题与部分说明文字是分镜板标签，非 Seedance 粘贴提示词。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "起始：一台无菌白色车间内的原厂灰色宝马；移除前轮 → 滚入一个巨大全地形轮胎并尝试安装，但它物理上无法装入原厂轮拱 → 用机械指南针在更大轮拱上做标记 → 切割翼子板 → 安装加固宽履带副车架、长行程悬架、巨大刹车和铆接宽体翼子板 → 将完全相同的超大轮胎成功安装 → 更换保险杠为激进拉力车身套件、防滑板、通风引擎盖、LED 拉力灯、后部保护、性能排气和紧凑尾翼 → 贴黑色车窗膜 → 降下升降机，悬架压缩并沉降成高宽 Safari 姿态 → 展示完成的改装宝马仍为灰色 → 物理喷漆整车深红/深红色，涂清漆并抛光 → 最终低角度前方 3/4 英雄镜头：黑手套手按宝马钥匙，引擎启动，悬架震动，LED 大灯打开，巨大轮胎旋转，红色宝马猛烈加速直冲向镜头 → 硬切黑场。保留可识别的宝马设计、真实工具、重力、金属接触、悬架物理和湿漆。无文字、UI、投影、传送或 VFX。",
      },
    ],
    constraints:
      "18 格分镜板引导；第一人称技师 POV 黑手套；快速 ASMR 剪辑；只有真实物理改装无变形魔法粒子漂浮零件；保留宝马设计真实工具重力金属接触悬架物理湿漆；同款巨型轮装不上→扩轮眉→成功装上；灰→深红喷漆；最后钥匙启动加速冲镜头→硬切黑；无文字 UI 投影传送 VFX。",
    video_prompt: {
      title: "BMW → OFF-ROAD RALLY TRANSFORMATION",
      subtitle: "10s · 16:9 · Seedance 2.0 · First-Person Mechanic POV · ASMR Fast Edit",
      content: `Create a 10-second ultra-photorealistic BMW rally transformation video, 16:9, in one sterile white workshop. Same BMW throughout: factory GREY → finished deep RUBY RED. First-person mechanic POV, black gloves, fast premium ASMR editing, only real physical modifications, no morphing, magic, particles or floating parts. Start with stock grey BMW; remove front wheel → roll in one huge all-terrain wheel and try to install it, but it physically cannot fit the stock arch → mark a larger arch with a mechanical compass → cut the fender → install reinforced wide-track subframe, long-travel suspension, huge brakes and riveted widebody flare → return the EXACT SAME oversized wheel and install it successfully → replace bumpers with aggressive rally bodywork, skid plate, vented hood, LED rally lights, rear protection, performance exhaust and compact spoiler → apply black window tint → lower the lift, suspension compresses and settles into a high wide Safari stance → show completed modified BMW still grey → physically spray-paint the entire car deep RUBY/CRIMSON RED, apply clear coat and polish → final low front 3/4 hero shot: black-gloved hand presses BMW key, engine starts, suspension shudders, LED headlights switch on, huge tires rotate and the red BMW violently accelerates straight toward camera → hard cut to black. Preserve recognizable BMW design, realistic tools, gravity, metal contact, suspension physics and wet paint. No text, UI, projections, teleportation or VFX.`,
    },
  },
  {
    id: "joshesye-colorcard-outfit-change",
    title: "陶阿狗色卡变装 · 行者AI拆解",
    subtitle: "X · @joshesye · Codex 生图 + Seedance/H3/Wan 3.0 图生视频 · 11秒 · 9:16",
    description:
      "色卡变装拆解：Codex 批量出换装分镜，再用 Seedance / H3 / Wan 3.0 生成视频。",
    video: "/tutorials/joshesye-colorcard-outfit-change/demo-web.mp4",
    poster: "/tutorials/joshesye-colorcard-outfit-change/poster.jpg",
    duration: "11秒",
    durationSec: 11,
    styleLabel: "时尚变装",
    shots: 4,
    references: 4,
    model: "Seedance / H3 / Wan 3.0",
    style: "色卡变装 Lookbook · 垂直 9:16",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/joshesye/status/2102406681476956299",
    sourceAuthor: "@joshesye",
    sourcePlatform: "X",
    sourceImpressions: 45721,
    sourceStats: { asOf: "2026-09-25", likes: 375, reposts: 55, bookmarks: 431 },
    formats: ["变装·换装", "时尚大片"],
    hook: {
      structure: "五套造型 · 色卡跟着衣服变",
      opening: "白底上女孩穿米色西装站在一扇打开的潘通色卡上，橙红到玫红的色卡扇形铺在脚下——色卡就是舞台。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 2s 她转身，约 2.5s 换迷彩上衣+卡其工装裤，身后的色块变成橄榄绿、卡其、红，和衣服一一对应。", at: 2 },
        { title: "过程怎么推进", text: "约 4.5s 牛仔套装配蓝/棕色块，约 6.5s 红格毛衣背心，约 9s 黄卫衣+藏青裤，底部色卡扇也跟着换色。", at: 4.5 },
      ],
      copyThis: "每套衣服抽 2–3 个主色做成色卡块摆在身后，转身即换装，约 2 秒一套。",
      approx: true,
    },
    tags: [
      "11秒 · 色卡变装",
      "9:16 竖屏",
      "Codex 生图",
      "Seedance",
      "H3",
      "Wan 3.0",
      "多巴胺穿搭",
    ],
    steps: [
      {
        number: 1,
        title: "收集穿搭与参考",
        description:
          "小红书搜「秋季多巴胺穿搭」保存喜欢的搭配；准备模特图（可含三视图）与原视频截图（姿势/站位/构图比例）。",
      },
      {
        number: 2,
        title: "批量出图（主场景 + 4 换装分镜）",
        description:
          "用 references_detail[1] 批量生图提示词：［模特图］定脸，［场景与分镜参考图］定姿势构图，［穿搭参考图］换装；每张色卡按新穿搭配色重绘，保留位置与数量。也可单张用 references_detail[2] 单张调整提示词。",
      },
      {
        number: 3,
        title: "人工确认分镜",
        description:
          "检查人物是否变样、衣服是否对应、画面中人物大小位置、色卡是否已换成新配色。",
      },
      {
        number: 4,
        title: "图生视频",
        description:
          "用下方完整图生视频提示词 + 参考视频/已确认分镜。作者前期用 Seedance，后测 H3 / Wan 3.0。出片后检查顺序、转场脸、色卡与服装对应。",
      },
      {
        number: 5,
        title: "可选 Agent 一揽子",
        description:
          "references_detail[3] Agent 端到端提示词：先拆结构分镜→生图确认→再生成视频。也可接 Hypit / 即梦 CLI。",
      },
    ],
    references_detail: [
      {
        id: "ref-joshesye-board",
        number: "0",
        title: "分镜板 · 色卡换装",
        subtitle: "已确认分镜（含色卡新配色）",
        image: "/tutorials/joshesye-colorcard-outfit-change/board.jpg",
        prompt: "已确认的4张换装分镜静帧：每张图中的色卡按该张图的新穿搭配色重新生成，保留参考画面中色卡的位置和数量。",
      },
      {
        id: "ref-joshesye-batch",
        number: "1",
        title: "批量生图提示词",
        subtitle: "Codex 批量出主场景+4换装分镜",
        image: "/tutorials/joshesye-colorcard-outfit-change/07_codex-batch-chat.png",
        prompt: `请根据我上传的素材，生成一张主场景静帧和四张换装分镜图。用［模特图］确定人物长相，保持同一个人的五官、发型和身形比例。

［场景与分镜参考图］用于参考姿势、动作、站位和构图。［穿搭参考图］用于更换服装，请先列出四张分镜各自对应哪套穿搭，确认后再出图。

每张图中的色卡，请按该张图的新穿搭配色重新生成。保留对应参考画面中色卡的位置和数量。`,
      },
      {
        id: "ref-joshesye-single",
        number: "2",
        title: "单张调整提示词",
        subtitle: "Codex / canvas {{Image}} 单张换装",
        image: "/tutorials/joshesye-colorcard-outfit-change/05_outfit-dopamine-refs.jpg",
        prompt: `使用 {{Image}} 中的人物作为模特，穿上 {{Image 2}} 中的服装。

人物的姿势、动作、站位和构图比例参考 {{Image 1}}，保持模特原有的五官、发型和身形比例。根据 {{Image 2}} 中的服装配色重新生成色卡，效果参考 {{Image 1}}，保留色卡的位置和数量。`,
      },
      {
        id: "ref-joshesye-agent",
        number: "3",
        title: "Agent 端到端提示词",
        subtitle: "先拆结构分镜→生图→再生成视频",
        image: "/tutorials/joshesye-colorcard-outfit-change/01_article-cover.jpg",
        prompt: `请参考我上传的色卡变装视频，先拆出视频结构与分镜，保留其中的镜头和景别安排。人物使用［模特图］，服装参考［穿搭图］重新搭配。［色卡参考图］只用于参考色卡的样式与排布，具体颜色要和新服装对应。先整理分镜与穿搭的对应关系，再生成图片。等我确认图片后，再继续生成视频。`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "第一段 · 首套穿搭：模特展示第一套服装，色卡显示对应配色。镜头运动与转场节奏保留参考视频原有风格。",
      },
      {
        number: 2,
        description:
          "第二段 · 第二套穿搭：模特展示第二套服装，色卡切换为新配色。人物脸、发型和身形比例与第一段保持一致。",
      },
      {
        number: 3,
        description:
          "第三段 · 第三套穿搭：模特展示第三套服装，色卡再次更新配色。背景、镜头运动与转场节奏与参考视频对应。",
      },
      {
        number: 4,
        description:
          "第四段 · 第四套穿搭：模特展示最后一套服装，色卡显示最后一组配色。人物受光方向、明暗和阴影与场景匹配，边缘干净，无明显贴图感。",
      },
    ],
    constraints:
      "需要模特图/穿搭原图/原视频分镜截图（未单独发布，需自备或从文章配图/成片反推）；人物脸发型身形比例前后统一；四套服装按顺序出现；色卡使用已确认分镜新配色；受光方向明暗阴影与场景匹配边缘干净；转场顺序可能与参考视频不完全对齐需按片段重生成细调。",
    video_prompt: {
      title: "色卡变装图生视频",
      subtitle: "11s · 9:16 · Seedance / H3 / Wan 3.0 · I2V",
      content: `参考我上传的视频，将主体人物替换为［模特图］中的人物。尽量保留参考视频的背景、镜头运动和转场节奏，各段时长与原视频对应。人物的脸、发型和身形比例需要前后统一，以模特图为准。四套服装按［第一套穿搭图］、［第二套穿搭图］、［第三套穿搭图］、［第四套穿搭图］的顺序出现，对应参考视频中的四次造型展示。色卡使用已确认分镜中的新配色，与当前服装对应，位置和数量保持一致。人物的受光方向、明暗和阴影要与场景匹配，边缘干净，不要出现明显的贴图感。`,
    },
  },
  {
    id: "codewithhajra-road-between-us-seedance",
    title: "我们之间的路——暴风雨中相遇的两个陌生人",
    subtitle: "X · @codewithhajra · Seedance 2.5 / OpenArt · 30秒 · 16:9",
    description:
      "Seedance 2.5 沙漠公路情感短片：两个陌生人被沙尘暴困进同一个哨所，无对白。",
    video: "/tutorials/codewithhajra-road-between-us-seedance/demo-web.mp4",
    poster: "/tutorials/codewithhajra-road-between-us-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "电影感",
    shots: 9,
    references: 0,
    model: "Seedance 2.5",
    style: "电影级冒险音乐视频 · 沙漠公路",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/codewithhajra/status/2101954857233957230",
    sourceAuthor: "@codewithhajra",
    sourcePlatform: "X",
    sourceImpressions: 15821,
    sourceStats: { asOf: "2026-09-25", likes: 92, reposts: 4, bookmarks: 16 },
    formats: ["电影叙事"],
    hook: {
      structure: "沙暴相遇 → 同行几天 → 并肩上路",
      opening: "沙漠公路上一辆满是灰尘的越野车开过，约 1s 后视镜里是女主的眼睛——开场就交代了人物和路。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3–5s 沙暴里摩托车男子停在车旁和她搭话，约 7s 沙暴吞没画面，约 8s 黑场。", at: 3 },
        { title: "几段怎么切换", text: "约 9–11s 夜晚篝火、银河；约 14s 起白天废墟、约 16s 峡谷里他拉她一把、约 20s 两人笑着冲下沙丘。", at: 9 },
        { title: "结尾怎么收", text: "约 23–25s 越野车和摩托并排开在公路上，约 26–29s 夕阳下的空路收尾。", at: 23 },
      ],
      copyThis: "用「车+摩托」两个交通工具代表两个人：开头分开、结尾并排；中间用黑场分段。",
      approx: true,
    },
    tags: [
      "30秒 · 情感短片",
      "16:9 横屏",
      "Seedance 2.5",
      "沙漠公路",
      "双人情感旅程",
    ],
    steps: [
      {
        number: 1,
        title: "角色一致性设定",
        description:
          "女主角(上传参考图):黑色宽松夹克、白色 T 恤、深色牛仔裤、皮靴,自然风尘仆仆。男主角:深橄榄夹克、炭灰 T 恤、深色工装裤、沙漠靴,自然吸引人但不过度风格化。两人面部、发型、体型、服装在所有镜头中保持完全一致。",
      },
      {
        number: 2,
        title: "9 段连续镜头叙事",
        description:
          "Shot 1:黄金时段空旷公路,女人驾驶老旧越野车。Shot 2:沙暴来临,远处男人骑摩托车现身。Shot 3:两人竞速到废弃哨所避难。Shot 4:夜晚篝火,星空下分享沉默。Shot 5:黎明发现隐藏峡谷标记。Shot 6:红岩峡谷徒步。Shot 7:高处俯瞰世界。Shot 8:沙丘奔跑。Shot 9:路分两条,两人各自离开。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 30–40 秒提示词。核心:超写实真人、电影摄影、35mm/50mm 镜头、自然皮肤质感、物理级沙漠环境、真实车辆物理、自然风与衣物互动、黄金时段琥珀光、深蓝夜色、自然火光、柔和日出薄雾。无对话,只有能量感电影电子配乐 + 自然环境音(引擎、轮胎、沙、风、火、脚步、鸟鸣)。硬切,无人工转场。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s 最后的光:巨大空旷沙漠公路,黄金时段。女人独自驾驶老旧尘土飞扬的越野车穿过无尽景观。摄影机从车外广角跟踪镜头开始。切入内部:手握方向盘特写、换挡、阳光穿过挡风玻璃。后视镜反射身后消失的道路。引擎自然震动。切到巨大广角:越野车在橙色沙丘和远山前变得微小。太阳低悬。音乐以深沉大气音调开始。",
      },
      {
        number: 2,
        description:
          "3–6s 路上有东西:沙漠公路被吹沙掩盖。女人减速。远处沙尘中出现黑色轮廓。切近:英俊年轻男人骑粗犷深色摩托车。夹克在风中剧烈飘动。他减速停下,摘下墨镜看向她。女人下车。他们相距几米。无对话,只有风声。短暂对视。然后男人身后出现巨大尘墙。沙尘暴直接向他们袭来。",
      },
      {
        number: 3,
        description:
          "6–10s 竞速避难:硬切。女人跳回越野车。男人发动摩托车。两人向远处可见的废弃哨所冲刺。快速电影切换:越野车轮胎在松沙中打滑、摩托车悬挂在崎岖地形压缩、尘土在两车后爆炸、女人眼睛检查后视镜、男人消失在尘云中、前灯切开风暴。越野车越过小沙丘,摩托车跟随。风暴变暗。天空几乎完全被尘土填满。两人在风暴吞没道路前到达废弃石头建筑。女人停车,男人将摩托车拉入避难所。风声变得震耳欲聋。硬切到黑暗。",
      },
      {
        number: 4,
        description:
          "10–15s 夜晚:寂静。风暴已过。夜晚完全降临。废弃哨所在巨大星空下。女人和男人坐在外面小篝火旁。车辆停在附近,覆盖尘土。温暖火光自然在脸上移动。女人抬头看,男人随视线。摄影机缓慢倾斜向天空。巨大银河横跨沙漠。音乐变得柔和大气。火花向上漂浮特写。女人手在火旁取暖特写。男人尘土靴子在她旁边特写。风轻柔吹动衣物。两人交换微妙微笑。无对话,无强迫浪漫。只是两个陌生人分享这一刻的奇异美丽。",
      },
      {
        number: 5,
        description:
          "15–19s 沙中秘密:第一缕黎明出现。男人绕废弃建筑行走。金属物在微弱蓝光中闪烁。他跪下刷掉沙子。风化金属标记在表面下显露,指向沙丘外隐藏的偏远峡谷。女人靠近,看标记,然后看向远山。男人看向她,小微笑。她拿起背包。两人决定继续同行。越野车和摩托车发动,消失向远处峡谷。",
      },
      {
        number: 6,
        description:
          "19–24s 红色峡谷:第一缕光。景观完全改变。巨大红岩地层从沙漠升起。两人徒步穿过狭窄峡谷。摄影机从后跟随他们在高耸岩壁间行走。清晨阳光缓慢到达峡谷底。尘埃粒子在光束中漂浮。他们攀过不平整岩石。男人先到达困难部分,转身向她伸手。她握住他的手。他帮她攀登。她差点滑倒后自然笑。他微笑。两人继续向上。瞬间自然而人性化,不浪漫。两个陌生人在旅程中逐渐成为同伴。",
      },
      {
        number: 7,
        description:
          "24–26s 世界之上:他们从峡谷出现,站在巨大高处观景点。沙漠在下方无尽延伸。山脉消失在远方。沙丘在景观上形成巨大图案。下方远处可见微小废弃道路。车辆几乎微观。摄影机从两人身后近处开始,缓慢后拉,然后升高、更高、更高。景观完全填满画面。太阳终于从地平线升起。音乐戏剧性扩展。",
      },
      {
        number: 8,
        description:
          "26–28s 随风奔跑:硬切。女人跑下巨大沙丘,自然笑。黑夹克在风中剧烈飘动,头发吹过脸。男人追她,在软沙中稍失平衡。她回头笑。他赶上。两人并肩向沙丘底部跑。他们停下,大口呼吸。看向地平线。远处可见车辆。风继续吹过沙丘。瞬间自由、自发、难忘。",
      },
      {
        number: 9,
        description:
          "28–30s 两条路:日出。他们回到车辆。女人进入越野车,男人发动摩托车。引擎咆哮。两人并排穿过长长空旷沙漠公路。摄影机沿侧跟踪。短暂瞬间,两车一起移动。然后路分叉——一条左转,另一条继续向山。两人停下,看向彼此,安静微笑。无对话,无戏剧性告别。女人将越野车转向左路,男人将摩托车转向右路。两人缓慢彼此远离。音乐几乎完全降低,只剩引擎和风。最终镜头:两人旅程间切换。女人向日出驾驶。切到男人独自骑行在另一远处山脊。女人、男人间切换。两个分离轮廓在巨大沙漠中移动。摄影机开始越升越高。车辆变小、更小,最终成为广阔景观中微小移动点。日出填满地平线。沙漠无尽。在巨大景观上保持几秒。音乐到达最终情感高峰,然后缓慢淡出。切到黑。",
      },
    ],
    constraints:
      "两个角色完全一致性:面部、发型、体型、服装在所有镜头保持;超写实真人摄影;自然皮肤质感与表情;物理准确沙漠环境、车辆物理、沙移位;黄金时段、夜晚、日出自然光;无对话;电影电子配乐 + 环境音;硬切无人工转场;24fps 电影运动。",
    video_prompt: {
      title: "THE ROAD BETWEEN US",
      subtitle: "30–40s · 16:9 · 4K · 24fps · Photorealistic · Cinematic Adventure Music Video",
      content: `Two strangers met in a storm, then left with an unforgettable memory.

Created with Seedance 2.5 on @openart_ai 

Prompt:
THE ROAD BETWEEN US

30–40 SECONDS | 16:9 | 4K | 24FPS | PHOTOREALISTIC LIVE-ACTION | CINEMATIC ADVENTURE MUSIC VIDEO
CORE CONCEPT
Two strangers take the same forgotten desert road for completely different reasons.
A young woman travels alone in an old vintage 4x4, chasing the final light of the day. Miles away, a handsome young man is crossing the same desert on a rugged motorcycle.
They never planned to meet.
But as a powerful sandstorm suddenly moves across the desert, their separate journeys collide. Forced to take shelter together in an abandoned desert outpost, they discover a forgotten route leading toward an ancient canyon.

One night.

One unexpected connection.

Two completely different roads waiting at sunrise.

The story should feel emotional, mysterious, adventurous and cinematic without becoming an exaggerated romance.

CHARACTER CONSISTENCY

WOMAN — MAIN CHARACTER

Use the uploaded reference image as the exact identity reference.

Preserve her exact face, facial structure, eyes, nose, lips, skin tone, hairstyle, hair texture, body proportions and overall identity throughout the entire video.

Her appearance must remain completely consistent across every shot, angle, lighting condition and environment.

She wears:

Black oversized jacket

Simple white T-shirt

Dark jeans

Worn leather boots

Her clothing becomes naturally dusty throughout the journey.

Keep her appearance realistic and understated.

MAN — SECOND CHARACTER

A handsome young man in his mid-20s with naturally attractive features, a defined jawline, expressive eyes, slightly messy dark hair and subtle light stubble.

Athletic but realistic build.

He wears:

Weathered dark olive jacket

Charcoal T-shirt

Dark cargo pants

Rugged desert boots

His face, hairstyle, body proportions and clothing must remain completely consistent throughout every scene.

Do not make him look like a model or overly stylized character. He should feel like a real traveler caught in an extraordinary situation.

SHOT 1 — THE LAST LIGHT

Open on an enormous empty desert highway during golden hour.

The young woman drives alone through an endless landscape in an old dusty vintage 4x4.

The camera begins outside the vehicle with a wide cinematic tracking shot as the 4x4 moves across the empty highway.

Cut inside.

Close-up of her hands gripping the worn steering wheel.

Her fingers shift the gear.

Warm sunlight passes through the windshield and moves naturally across her face.

Close-up of her eyes.

The rearview mirror reflects the empty road disappearing behind her.

The engine vibrates naturally.

Dust begins to rise behind the vehicle.

Cut to a huge wide shot.

The 4x4 becomes tiny against enormous orange dunes and distant mountains.

The sun hangs low on the horizon.

The music begins quietly with deep atmospheric tones.

SHOT 2 — SOMETHING ON THE ROAD

The desert road slowly disappears beneath blowing sand.

The woman slows the 4x4.

She looks through the windshield.

Something moves in the distance.

A dark silhouette emerges through the dust.

Cut closer.

It is the handsome young man riding a rugged dark motorcycle.

His jacket moves violently in the wind.

He slows down and stops.

The woman steps out of the 4x4.

The man removes his sunglasses and looks toward her.

They stand several meters apart.

No dialogue.

Only the sound of the wind.

For a brief moment, neither moves.

Then a massive wall of dust appears behind the man.

He turns toward it.

She follows his gaze.

The sandstorm is coming directly toward them.

SHOT 3 — THE RACE TO SHELTER

Hard cut.

The woman jumps back into the 4x4.

The man starts his motorcycle.

They race toward an abandoned desert outpost visible far across the landscape.

Rapid cinematic cuts:

The 4x4 tires sliding through loose sand.

The motorcycle suspension compressing over rough terrain.

Dust exploding behind both vehicles.

The woman's eyes checking the rearview mirror.

The man disappearing inside the dust cloud.

His headlight cutting through the storm.

The 4x4 powers over a small dune.

The motorcycle follows.

The storm grows darker.

The sky becomes almost completely filled with dust.

They reach the abandoned stone structure just as the storm swallows the road.

The woman stops the vehicle.

The man pulls the motorcycle inside the shelter.

The wind becomes deafening.

Hard cut to darkness.

SHOT 4 — THE NIGHT

Silence.

The storm has passed.

Night has completely taken over.

The abandoned outpost sits beneath an enormous star-filled sky.

The woman and man sit outside beside a small campfire.

Their vehicles are parked nearby, covered in dust.

Warm firelight moves naturally across their faces.

The woman looks upward.

The man follows her gaze.

The camera slowly tilts toward the sky.

An enormous Milky Way stretches across the desert.

The music becomes softer and more atmospheric.

Close-up of sparks floating upward.

Close-up of the woman's hand warming beside the fire.

Close-up of the man's dusty boots beside hers.

The wind gently moves their clothing.

They exchange a subtle smile.

No dialogue.

No forced romance.

Just two strangers sharing the strange beauty of the moment.

SHOT 5 — THE SECRET IN THE SAND

The first hint of dawn begins to appear.

The man walks around the abandoned structure.

Something metallic catches the faint blue light.

He kneels and brushes away the sand.

A weathered metal marker is revealed beneath the surface.

It points toward a remote canyon hidden beyond the dunes.

The woman approaches.

She looks at the marker.

Then looks toward the distant mountains.

The man looks at her.

A small smile.

She grabs her backpack.

They decide to continue together.

The 4x4 and motorcycle start.

They disappear toward the distant canyon.

SHOT 6 — THE RED CANYON

First light.

The landscape changes completely.

Huge red-rock formations rise from the desert.

The two characters hike through a narrow canyon.

The camera follows behind them as they walk between towering rock walls.

Early sunlight slowly reaches the canyon floor.

Dust particles float through the beams of light.

They climb over uneven rocks.

The man reaches a difficult section first.

He turns around and reaches his hand toward her.

She takes his hand.

He helps her climb.

She laughs naturally after nearly slipping.

He smiles.

They continue upward.

The moment feels spontaneous and human.

Not romantic.

Two strangers gradually becoming companions through the journey.

SHOT 7 — ABOVE THE WORLD

They emerge from the canyon.

They stand on a massive high viewpoint.

The desert stretches endlessly beneath them.

Mountains fade into the distance.

Dunes form enormous patterns across the landscape.

The tiny abandoned road is visible far below.

Their vehicles appear almost microscopic.

The camera begins close behind the two characters.

Slowly pull backward.

Then rise higher.

Higher.

Higher.

The landscape completely fills the frame.

The sun finally breaks over the horizon.

The music expands dramatically.

SHOT 8 — RUNNING WITH THE WIND

Hard cut.

The woman runs down a huge sand dune.

She laughs naturally.

Her black jacket moves violently in the wind.

Her hair blows across her face.

The man runs after her.

He loses his balance slightly in the soft sand.

She looks back and laughs.

He catches up.

They run side by side toward the bottom of the dune.

They stop.

Breathing heavily.

They look toward the horizon.

Their vehicles are visible in the distance.

The wind continues moving across the dunes.

The moment feels free, spontaneous and unforgettable.

SHOT 9 — TWO ROADS

Sunrise.

They return to the vehicles.

The woman gets into the vintage 4x4.

The man starts his motorcycle.

The engines roar to life.

They travel side by side across a long empty desert road.

The camera tracks alongside them.

For a brief moment, both vehicles move together.

Then the road divides.

One path turns left.

The other continues toward the mountains.

They stop.

Both characters look at each other.

A quiet smile.

No dialogue.

No dramatic goodbye.

The woman turns her 4x4 toward the left road.

The man turns his motorcycle toward the right.

They slowly move away from each other.

The music drops almost completely.

Only engines and wind remain.

FINAL SHOT — KEEP GOING

Cut between the two journeys.

The woman drives toward the rising sun.

Cut to the man riding alone across another distant ridge.

Cut back to the woman.

Cut back to the man.

Two separate silhouettes moving through the enormous desert.

The camera begins rising higher and higher.

The vehicles become smaller.

Then smaller.

Eventually they become tiny moving points within the vast landscape.

The sunrise fills the horizon.

The desert appears endless.

Hold on the enormous landscape for several seconds.

The music reaches its final emotional peak.

Then slowly fades.

Cut to black.

VISUAL STYLE

Premium cinematic adventure music video.

Ultra-photorealistic live-action.

Feature-film cinematography.

35mm and 50mm cinematic lens character.

Natural skin texture.

Realistic facial expressions.

Physically accurate desert environments.

Realistic human movement.

Realistic vehicle physics.

Natural wind interaction with hair and clothing.

Realistic sand displacement.

Detailed tire tracks.

Atmospheric dust particles.

Golden-hour amber lighting.

Deep blue night tones.

Natural firelight.

Soft sunrise haze.

Realistic depth of field.

Subtle cinematic film grain.

Natural lens imperfections.

Controlled handheld camera mixed with smooth tracking shots.

Large-scale aerial-style landscape movements.

Intimate close-ups mixed with enormous environmental wides.

Natural motion blur.

24fps cinematic motion.

Premium Hollywood adventure-film visual quality.

Hard cuts only. No artificial transitions.

AUDIO

Energetic cinematic electronic soundtrack that gradually builds throughout the journey.

Deep atmospheric bass.

Organic percussion.

Subtle acoustic textures.

Atmospheric synth layers.

The music should evolve with the story:

Quiet and mysterious at the beginning.

More intense during the sandstorm.

Warm and emotional around the campfire.

Expansive during the canyon and sunrise sequences.

Powerful during the final aerial landscape.

Natural diegetic sounds should remain audible underneath the music:

4x4 engine.

Motorcycle engine.

Tires moving through sand.

Desert wind.

Footsteps.

Clothing moving in the wind.

Fire crackling.

Small rocks shifting beneath boots.

Distant birds at sunrise.

No dialogue.

No voice-over.

The music and natural environmental sound should tell the story.

CAMERA LANGUAGE

Use a mixture of:

Extreme wide desert landscapes.

Low vehicle tracking shots.

Handheld intimate close-ups.

Interior vehicle shots.

Over-the-shoulder shots.

Slow cinematic push-ins.

Side tracking shots.

Low-angle motorcycle shots.

Wide canyon compositions.

Natural close-ups of eyes, hands and expressions.

Smooth crane-like rises.

Large-scale aerial-style pullbacks.

Keep camera movement motivated and physically believable.

Avoid excessive slow motion.

Avoid overly dramatic camera movements that feel artificial.

COLOR & LIGHTING

Golden desert amber during the opening.

Warm orange and dusty brown tones during the storm.

Deep navy and subtle moonlight during the night.

Warm firelight on skin.

Cool blue dawn.

Rich red and orange canyon tones.

Soft golden sunrise.

Natural cinematic contrast.

Preserve realistic skin tones throughout.

TEXT & GRAPHICS

Absolutely no text anywhere in the video.

No title cards.

No typography.

No captions.

No subtitles.

No end titles.

No logos.

No symbols.

No graphic overlays.

No written signs.

No visible words.

The final sunrise must remain completely clean with only the natural landscape.

NEGATIVE PROMPT

No CGI look. No video-game aesthetic. No plastic skin. No beauty-filter skin. No artificial faces. No identity drift. No face changes. No character morphing. No inconsistent characters. No inconsistent clothing. No hairstyle changes. No age changes. No distorted anatomy. No watermark. No title. No end card. No graphic overlays. No artificial transitions. No fade transitions between shots.

Maintain exact character identity and visual continuity from beginning to end.`,
    },
  },
  {
    id: "umesh-fold-ocean-blanket-seedance",
    title: "把海洋和天空折叠成一条毯子",
    subtitle: "X · @umesh_ai · Seedance 2.5 / Runway · 15秒 · 16:9",
    description:
      "Seedance 2.5 纯文生超现实片：女人把海和天空像布一样折起，盖在男人身上。",
    video: "/tutorials/umesh-fold-ocean-blanket-seedance/demo-web.mp4",
    poster: "/tutorials/umesh-fold-ocean-blanket-seedance/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "超现实",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "超现实电影 · 海边客厅",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/umesh_ai/status/2102003383024648654",
    sourceAuthor: "@umesh_ai",
    sourcePlatform: "X",
    sourceImpressions: 6247,
    sourceStats: { asOf: "2026-09-25", likes: 89, reposts: 6, bookmarks: 59 },
    formats: ["折叠·变形"],
    hook: {
      structure: "海上沙发 → 捏起海面 → 原来是毯子",
      opening: "一张白沙发摆在一望无际的海中央，一对男女坐着看书休息，落地灯立在水里，天上一朵白云——第一帧就超现实。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2–3s 女人放下书走进水里，约 5–7s 伸手捏住海面，像捏布料一样把水面提起来。", at: 2 },
        { title: "反转", text: "约 8–11s 她把整片海像床单一样拉起抖开，约 12s 切俯拍：海和天空其实是一条印着海景的毯子。", at: 8 },
        { title: "结尾怎么收", text: "约 13–14s 俯拍里她在木地板房间把毯子铺到沙发上。", at: 13 },
      ],
      copyThis: "先把超现实场景当真拍，再用「捏起水面」这个手部特写把海变成布料，最后俯拍揭晓。",
      approx: true,
    },
    tags: [
      "15秒 · 超现实",
      "16:9 横屏",
      "Seedance 2.5",
      "纯T2V",
      "物理不可能",
    ],
    steps: [
      {
        number: 1,
        title: "建立海边客厅场景",
        description:
          "柔软白色三座沙发直立在浅透明绿蓝海水中。奶油色软垫、极简落地灯、一本书。海洋无限延伸到笔直地平线。上方是深青蓝天空,一朵巨大雕塑感白云。两个成年人:女人穿宽松浅蓝亚麻衣物,坐中左座位读书;男人穿轻松象牙衬衫,靠右侧休息。场景必须最初看起来真实广阔,没有迹象表明景观是布料。",
      },
      {
        number: 2,
        title: "7个连续镜头",
        description:
          "Shot 1 (0–2s):摄影机缓慢向前滑过海水到沙发。Shot 2 (2–4s):沿沙发垫侧向近角度,女人合书放下站起。Shot 3 (4–6s):低跟踪经过落地灯底座到女人赤脚接近小波浪。Shot 4 (6–8s):极端特写,手指捏起波峰——水面弯曲成布料褶。Shot 5 (8–10s):广角侧视,女人站起继续提升,折痕传播,地平线向上弯曲,天空和云随之。Shot 6 (10–12s):女人肩后,她将聚集的海景(包含移动海水、云)向沙发展开像毯子,海景遮挡镜头。Shot 7 (12–15s):完美垂直俯拍,同一客厅现在有木地板,海景已成为覆盖男人和沙发的柔软家用毯子——但仍包含活生生的移动海水、地平线、天空和漂移的云。女人坐回,指尖触碰处有微小真实波浪破碎。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 15 秒超现实电影提示词。关键:光写实、自然皮肤质感、物理可信布料运动、透明浅水、细节白色装饰、柔和自然阳光、大气景深、克制电影胶片颗粒。超现实必须来自不可能物理事件在完全现实世界中发生。女人是折叠海洋和天空的人。海洋最初必须看起来真实广阔无限,只有当女人物理提起波峰时才揭示第二个不可能属性:整个海洋、地平线、天空、反射和云可以像布料弯曲、褶皱、聚集和折叠,同时仍保持可见活着。转换通过连续物理互动发生,而非视觉效果溶解或魔法转场。小波浪在毯子褶皱中继续移动。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–2s 没有墙的客厅:从略高于水线开始,电影中宽视角。摄影机缓慢向前滑过轻柔波纹浅海水到白沙发。女人坐中左座位读书。男人靠右扶手休息,眼睛轻柔闭合,一只手自然放在胃部。细长落地灯立在沙发左侧。巨大白云直接悬在他们上方略后。小波浪自然在沙发腿周围移动。女人静静翻一页。一切感觉宽敞、平静、有形、完全真实。声音:小波浪、翻页、柔和远风。",
      },
      {
        number: 2,
        description:
          "2–4s 小家务细节:无缝切换到沿沙发垫运行的近侧角度。保持相同角色位置和光线。女人轻轻合书放在旁边。她短暂舒适地向休息男人倾斜。阳光揭示白色装饰的详细编织和柔软。下方海水刷沙发脚。垫子和座面保持完全干燥。女人然后自然从沙发站起,赤脚走进浅水向落地灯。男人保持完全相同位置。她的移动自然继续到下一镜头建立的方向。声音:柔软亚麻移动、书安静合上、赤脚进入浅水、小波浪。",
      },
      {
        number: 3,
        description:
          "4–6s 灯和地平线:在女人继续移动时切换到经过落地灯窄底座的低跟踪镜头。其反射在水面真实延伸。摄影机向女人赤脚行进,她接近一个小来波。白沙发、休息男人、巨大云和书在她身后仍可识别。她在波浪旁顺利蹲下。手指移向其波峰。就在触碰前,那一个小波峰变得奇怪静止,而所有周围水继续自然移动。她平静地向其伸手。声音:风逐渐淡出。正常波浪继续。在水声下出现几乎察觉不到的布料沙沙声。",
      },
      {
        number: 4,
        description:
          "6–8s 可以抓住的东西:切到极端特写,精确匹配上一镜头女人手位置。她的拇指和食指轻轻捏起波峰。水面不是穿过手指,而是保持在一起。她只提升几厘米。透明表面向上弯曲成柔软布料褶。阳光反射在提升表面自然延伸和扭曲。精致白色泡沫线沿折叠边缘聚集,视觉类似缝合而不成为字面线程。没有水滴从提升部分落下。周围海洋继续移动。她的手势完全随意,像从地板拿起毯子角。提升的褶皱继续向上移动,自然引发下一切换。",
      },
      {
        number: 5,
        description:
          "8–10s 地平线弯曲:在继续向上运动时切换到包含女人、沙发、男人、海洋、地平线、云和灯的广角侧视。女人顺利站起同时继续提升同一片海洋。手位置或移动必须没有重置。宽广物理折痕从她手向外传播过海洋。折痕向距离传播,如张力穿过巨大布单。然后笔直地平线开始随上升材料向上弯曲。天空随之抬升。巨大白云在折痕中弯曲和轻柔折皱,同时保持在提升表面内的真实移动云。效果应该物理不可能但视觉令人信服。沙发上男人保持平静,不戏剧性反应。他可能微妙睁眼,好像注意到正在准备的毯子,但完全当作普通。声音:深沉柔和冲刺,结合海浪与大床单捕捉空气的声音。",
      },
      {
        number: 6,
        description:
          "10–12s 世界靠近:在女人肩后切换,同时保持上升景观的确切方向和动量。她用双手将提升的海景向沙发牵引。海洋、地平线、青蓝天空、阳光、反射和巨大白云聚集成她手间流动的大褶皱。每个褶皱仍包含移动的水。微小波浪继续穿过弯曲表面。反射随变形材料正确移动。云继续缓慢漂过聚集的天空。当海景从地面提升,普通干燥木质客厅地板在海洋曾在的正下方显露。地板应该通过提升动作自然暴露,而非通过溶解生成。沙发和灯保持在完全相同位置物理锚定。女人将聚集的海景像巨大毯子一样向男人和沙发轻柔摆动。移动的蓝绿材料直接向镜头经过,直到完全填满画面。使用此物理遮挡作为无缝视觉桥梁进入最后镜头。无淡出、无溶解、无魔法转场。",
      },
      {
        number: 7,
        description:
          "12–15s 俯拍揭示:匹配布料向下运动进入完美垂直俯拍角度。同一白沙发和同一落地灯现在存在于普通、柔和照明的客厅内,有新显露的木地板。一切必须在空间上与之前环境对齐。同样奶油色软垫保持原始排列。同样合上的书保持在女人原始座位旁。同一男人保持在沙发右侧穿同样象牙衣物。同一女人完成将聚集的蓝绿材料降低过他腿和沙发空置中央部分。它已成为柔软家用毯子,但无误包含实际活生生的海景。毯子包含移动的绿蓝海水、原始地平线、部分深青蓝天空和同一巨大白云。真实波浪持续穿过其褶皱。云缓慢漂过毯子,经过男人膝盖。女人然后平静坐在左侧座位他旁边。她用手掌平滑毯子中一个折痕。在她指尖触碰布料的确切点,一个微小真实波浪向前滚动,轻柔破碎对抗她手指。微小波浪必须像实际海水行为,包括一丝白色泡沫。保持完美垂直俯拍构图到最后一秒。声音:安静室内房间音调、落地灯微弱电气嗡嗡、柔软布料定居、一个微小波浪破碎在不应存在波浪的地方。",
      },
    ],
    constraints:
      "恰好两人全程出现并保持同两人:面部、发型、体型、年龄、服装、肤色一致;沙发、落地灯、软垫、书、云、角色位置完全连续;客厅占据与原始海边相同物理空间;沙发和灯永不瞬移;女人物理聚集看似无限海洋和天空成家用毯子;最终毯子不是印花布料、屏幕、投影、绘画或纹理贴图,而是物理不可能的活现实片段——真实波浪继续在褶皱内移动、光继续在水面移动、原始云继续漂过;最终微小波浪触碰女人指尖确认这不是海的图像,而是海本身;每个切换保持从前镜头的运动方向和身体位置;使用运动匹配切换;保持相同时间、阳光方向、色温、服装、头发、面部、家具比例、软垫位置、灯位置、书位置;从不重置场景;从不引入无解释物体移动;避免角色姿势跳切;海洋到毯子转换渐进而非瞬时;最终客厅揭示感觉像发现海洋下一直物理存在的东西;整个15秒感觉像一个连续超现实电影事件,而非七个独立生成片段。",
    video_prompt: {
      title: "Fold the Ocean and Sky Like a Blanket",
      subtitle: "15s · 16:9 · Photorealistic Surreal Cinema · Pure T2V",
      content: `Prompt : Create a surreal, photorealistic 15-second cinematic film that begins as a peaceful seaside living-room scene and ends with one person folding the entire ocean and sky into a blanket.  This is a pure text-to-video generation. There is no reference image or supplied visual. Establish the complete environment from the description below and maintain perfect visual continuity throughout the entire film.  Scene foundation:  A soft white three-seat sofa stands directly in shallow, transparent green-blue seawater. Loosely arranged cream cushions rest naturally across the sofa. A slender minimalist floor lamp stands to the left of the sofa, its base partially surrounded by water. The ocean appears limitless and extends toward a perfectly straight horizon. Above it is a deep teal-blue sky dominated by one enormous sculptural white cloud floating directly above and slightly behind the sofa.  The sofa, cushions, lamp, book, clothing, people, lighting direction, cloud shape, horizon, and spatial relationships must remain visually consistent from shot to shot.  Exactly two adults appear in the entire film. Never create additional people, reflections resembling extra people, background figures, duplicates, or altered versions of the characters.  People:  A woman wears loose pale-blue linen clothing and is barefoot. At the beginning she sits comfortably near the middle-left portion of the sofa reading a book. Her demeanor is calm, familiar, and completely at home in the impossible environment.  A man wears a relaxed ivory shirt and light neutral trousers. He is barefoot and rests against the right side of the sofa, peaceful and slightly sleepy, with one hand resting naturally near his stomach.  Their behavior should remain quiet, understated, and domestic. Neither behaves as though the surreal transformation is unusual.  The woman is the person who eventually gathers and folds the ocean and sky.  Visual style:  Photorealistic surreal cinema.  Soft natural sunlight. Detailed white upholstery. Visible linen texture. Natural human skin texture. Transparent shallow water. Subtle caustics and reflections. Physically believable fabric movement. Soft atmospheric depth. Restrained cinematic film grain. Realistic lens behavior. Natural motion blur.  Avoid miniature appearance, artificial tilt-shift, cartoon styling, fantasy glow, magical particles, obvious morphing effects, dream-transition filters, excessive slow motion, or synthetic-looking transformations.  The surrealism must come from an impossible physical event occurring inside an otherwise completely realistic world.  Central illusion:  For most of the film, the ocean and sky must appear genuinely vast, physical, and limitless.  There must initially be no indication that the landscape is fabric.  Only when the woman physically lifts the crest of a wave should the world reveal an impossible second physical property: the ocean, horizon, sky, reflections, and cloud can bend, pleat, gather, and fold like an enormous piece of soft fabric while still remaining visibly alive.  The transformation must happen through continuous physical interaction rather than a visual-effects dissolve or magical transition.  Aspect ratio: 16:9  Duration: Exactly 15 seconds.  Exactly seven shots with six motivated cuts.  Transitions, character positions, object positions, gestures, fabric movement, eyelines, and camera direction must feel seamless and continuous.  Shot 1 | 00:00-00:02 | A living room without walls  Begin slightly above the waterline with a cinematic medium-wide view.  The camera glides slowly forward through gently rippling shallow seawater toward the white sofa.  The woman sits near the middle-left seat reading her book.  The man rests against the right arm of the sofa with his eyes softly closed, one hand resting near his stomach.  The slender floor lamp stands to the sofa's left.  The enormous white cloud hangs directly above and slightly behind them.  Small waves move naturally around the sofa legs.  The woman quietly turns one page.  Everything feels spacious, peaceful, tangible, and completely real.  Sound: Small waves. A page turning. Soft distant wind.  Shot 2 | 00:02-00:04 | Small domestic details  Cut seamlessly to a close side angle running along the sofa cushions.  Maintain identical character positions and lighting.  The woman gently closes her book and places it beside her on the sofa.  She briefly leans comfortably toward the resting man.  Sunlight reveals the detailed weave and softness of the white upholstery.  Below them, seawater brushes the sofa feet.  The cushions and seating surface remain perfectly dry.  The woman then rises naturally from the sofa and steps barefoot into the shallow water toward the floor lamp.  The man remains resting in exactly the same position.  Her movement continues naturally into the direction established for the next shot.  Sound: Soft linen movement. The quiet closing of the book. Bare feet entering shallow water. Small waves.  Shot 3 | 00:04-00:06 | The lamp and the horizon  Cut on the woman's continuing movement to a low tracking shot passing close to the floor lamp's narrow base.  Its reflection stretches realistically across the water.  The camera travels toward the woman's bare feet as she approaches a small incoming wave.  The white sofa, resting man, enormous cloud, and book remain recognizable behind her.  She crouches smoothly beside the wave.  Her fingers move toward its crest.  Just before touching it, that one small crest becomes strangely still while all surrounding water continues moving naturally.  She calmly reaches toward it.  Sound: The wind gradually fades. Normal waves continue. A nearly imperceptible fabric-like rustle appears beneath the sound of the water.  Shot 4 | 00:06-00:08 | Something to hold  Cut to an extreme close-up precisely matching the woman's hand position from the previous shot.  Her thumb and forefinger gently pinch the crest of the wave.  Instead of passing through her fingers, the water holds together.  She lifts it only several centimeters.  The transparent surface bends upward into a soft fabric-like pleat.  Sun reflections stretch and distort naturally across the lifted surface.  A delicate line of white foam collects along the folding edge, visually resembling stitching without becoming literal thread.  No droplets fall from the lifted section.  The surrounding ocean continues moving.  Her gesture is completely casual, like picking up the corner of a blanket from the floor.  The lifted fold continues moving upward and naturally motivates the next cut.  Shot 5 | 00:08-00:10 | The horizon bends  Cut on the continuing upward motion to a wide side view containing the woman, sofa, man, ocean, horizon, cloud, and lamp.  The woman smoothly stands while continuing to lift the same piece of ocean.  There must be no reset in hand position or movement.  A broad physical fold travels outward from her hands across the ocean.  The fold propagates toward the distance like tension traveling through an enormous sheet.  Then the perfectly straight horizon begins curving upward with the rising material.  The sky lifts with it.  The enormous white cloud bends and softly creases across the fold while remaining a real moving cloud inside the lifted surface.  The effect should be physically impossible but visually convincing.  The man on the sofa remains calm and does not react dramatically.  He may subtly open his eyes as though noticing the blanket being prepared, but he treats it as completely ordinary.  Sound: A deep soft rush combining ocean surf with the sound of a large bedsheet catching air.  Shot 6 | 00:10-00:12 | The world comes closer  Cut behind the woman's shoulder while preserving the exact direction and momentum of the rising landscape.  She draws the lifted seascape toward the sofa using both hands.  The ocean, horizon, teal sky, sunlight, reflections, and enormous white cloud gather into large flowing folds between her hands.  Every fold still contains moving water.  Tiny waves continue traveling across the bending surface.  Reflections move correctly with the deforming material.  The cloud continues drifting slowly across the gathered sky.  As the seascape lifts away from the ground, an ordinary dry wooden living-room floor is revealed directly beneath where the ocean had been.  The floor should appear naturally exposed by the lifting action, not generated through a dissolve.  The sofa and lamp remain physically anchored in exactly the same positions.  The woman swings the gathered seascape gently toward the man and sofa like an enormous blanket.  The moving blue-green material passes directly toward the lens until it completely fills the frame.  Use this physical occlusion as the seamless visual bridge into the final shot.  No fade. No dissolve. No magical transition.  Shot 7 | 00:12-00:15 | Overhead reveal  Match the downward motion of the fabric into a perfectly vertical overhead camera angle.  The same white sofa and same floor lamp now exist inside an ordinary, softly illuminated living room with the newly revealed wooden floor.  Everything must align spatially with the previous environment.  The same cream cushions remain in their original arrangement.  The same closed book remains beside the woman’s original seating position.  The same man remains on the right side of the sofa in the same ivory clothing.  The same woman finishes lowering the gathered blue-green material across his legs and the empty central portion of the sofa.  It has become a soft household blanket, but it unmistakably contains the actual living seascape.  The blanket contains moving green-blue ocean water, the original horizon, portions of the deep teal sky, and the same enormous white cloud.  Real waves travel continuously through its folds.  The cloud slowly drifts across the blanket and passes over the man's knees.  The woman then sits calmly in the left-hand seat beside him.  She smooths one crease in the blanket with her palm.  At the exact point where her fingertip touches the fabric, a tiny real wave rolls forward and breaks gently against her finger.  The tiny wave must behave like actual seawater, including a trace of white foam.  Hold the perfectly vertical overhead composition through the final second.  Sound: Quiet interior room tone. A faint electrical hum from the floor lamp. Soft fabric settling. One tiny wave breaking where no wave should exist.  Continuity and reveal requirements:  Exactly two people appear throughout the entire film.  They must remain the same two people in every shot with consistent facial identity, hairstyle, body proportions, age, clothing, and skin tone.  Do not duplicate either person.  Maintain exact continuity of the sofa, floor lamp, cream cushions, closed book, clothing, cloud, and character positions.  The living room revealed beneath the ocean must occupy the same physical space as the original seaside setting.  The sofa and lamp never teleport.  The transformation must feel like the surface of the environment itself has been physically picked up.  The woman physically gathers the seemingly limitless ocean and sky into a household blanket.  Do not portray the final blanket as printed fabric, a screen, projection, painting, texture map, or static ocean image.  It remains a physically impossible piece of living reality.  Real waves continue moving inside its folds.  Light continues shifting across the water.  The original cloud continues drifting across it.  The final tiny wave touching the woman's fingertip confirms that this is not an image of the sea.  It is the sea itself.  Seamlessness requirements:  Every cut must preserve motion direction and body position from the preceding shot.  Use movement-matched cuts whenever possible.  Maintain identical time of day, sunlight direction, color temperature, wardrobe, hair, facial identity, furniture proportions, cushion placement, lamp position, and book position throughout.  Never reset the scene between shots.  Never introduce unexplained object movement.  Avoid jump cuts in character posture.  The woman's movement from sitting, standing, crouching, lifting, gathering, covering, and sitting again must form one continuous physical action.  The ocean-to-blanket transformation must be progressive rather than instantaneous.  The final living room reveal should feel like discovering what was physically beneath the ocean all along.  The entire 15 seconds should feel like one continuous surreal cinematic event rather than seven independently generated clips.`,
    },
  },
  {
    id: "krevix-sofa-workshop-reels-seedance",
    title: "奢侈沙发拆装工坊 Reels · Seedance 2.0",
    subtitle: "X · @KrevixAi · Seedance 2.0 · 10秒 · 16:9",
    description:
      "Seedance 2.0 第一人称家具广告：黑手套一挥，破沙发拆散、重组成奢华真皮沙发。",
    video: "/tutorials/krevix-sofa-workshop-reels-seedance/demo-web.mp4",
    poster: "/tutorials/krevix-sofa-workshop-reels-seedance/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "产品 CGI",
    shots: 1,
    references: 1,
    model: "Seedance 2.0",
    style: "商业产品CGI · 第一人称POV",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2102063967766024619",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 7182,
    sourceStats: { asOf: "2026-09-25", likes: 122, reposts: 14, bookmarks: 138 },
    formats: ["拆装·制作过程", "产品广告"],
    hook: {
      structure: "拆 → 装 → 成品揭晓",
      opening: "固定机位，破烂皮沙发摆在昏暗工坊中央；约 0.5s 两只黑手套抬起，约 1s 沙发当场炸开，碎片飞出画面。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "碎片清空后手套一招，胡桃木板件从空中飞来，约 4s 拼成沙发框架；约 5s 一整张棕色皮革从上方落下，罩住框架。", at: 2.5 },
        { title: "成品揭晓", text: "约 6s 已是一张完整的干邑色皮沙发，双手把靠垫推到位，然后退到画面两侧停住。", at: 6 },
        { title: "结尾怎么收", text: "约 8.5s 镜头推近到皮面特写，双手按在坐垫上，用质感收尾，不加字幕。", at: 8.5 },
      ],
      copyThis: "手势当遥控器：炸开、拼框、罩皮每一步都由手套的动作带出来；前 8 秒机位不动，注意力全在东西怎么飞。",
      approx: true,
    },
    tags: [
      "10秒 · 一镜到底",
      "16:9 横屏",
      "Seedance 2.0",
      "第一人称POV",
      "豪华家具商业",
    ],
    steps: [
      {
        number: 1,
        title: "上传故事板到 Seedance 2.0",
        description:
          "将故事板图像上传为参考图。故事板展示从破旧沙发爆炸到最终组装完成豪华沙发的关键帧序列。",
      },
      {
        number: 2,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 10 秒 I2V 提示词。固定第一人称 POV,20–24mm 镜头,无摄影机运动。关键:手是控制界面——展开手掌猛烈分开使沙发爆炸、手腕旋转控制旋转部件、猛烈滑动扔掉损坏部件、强拉手势从各方向牵引新组件、推和猛击组装、双拳握紧锁定框架、手抓拉使整个沙发向POV摄影机加速、手掌向前STOP手势刹车沙发。每个物体移动必须与强大手势精确同步。重真实质量、惯性、冲击、尘埃、木粒、皮革变形、空气位移、运动模糊、激进速度斜坡、豪华汽车商业CGI/VFX 真实感。",
      },
    ],
    references_detail: [
      {
        id: "storyboard",
        number: "参考",
        title: "故事板",
        subtitle: "作者提供 · 视频参考图",
        image: "/tutorials/krevix-sofa-workshop-reels-seedance/storyboard.jpg",
        prompt: "",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0.0–0.6s 破旧沙发立在中央 3–4 米远。手向其升起。",
      },
      {
        number: 2,
        description:
          "0.6–1.2s 手猛烈向两侧分开:沙发爆炸成真实组件——撕裂布料、软垫、填充、弹簧、螺栓和破木。",
      },
      {
        number: 3,
        description:
          "1.2–1.8s 组件形成大爆炸视图。手腕旋转控制和旋转各个部件。",
      },
      {
        number: 4,
        description:
          "1.8–2.4s 猛烈手滑将损坏部件扔出画面。碎片飞近镜头。",
      },
      {
        number: 5,
        description:
          "2.4–3.0s 剩余结构在中央干净对齐。",
      },
      {
        number: 6,
        description:
          "3.0–3.6s 手做强拉手势。巨大深胡桃木梁和黑金属配件从各方向快速飞入,狭窄经过摄影机。",
      },
      {
        number: 7,
        description:
          "3.6–4.2s 手旋转、推和猛击组件到位。胡桃木梁猛撞进精确接头;螺栓和支架射入到位。",
      },
      {
        number: 8,
        description:
          "4.2–4.8s 双拳握紧:完成的胡桃木框架以一次重冲击和震动锁定。",
      },
      {
        number: 9,
        description:
          "4.8–5.4s 巨大干邑皮革片直接飞过摄影机,短暂覆盖镜头。",
      },
      {
        number: 10,
        description:
          "5.4–6.0s 手向外向下拉,拉伸和包裹皮革紧绕框架。",
      },
      {
        number: 11,
        description:
          "6.0–6.6s 快速手指弹命令皮革软垫从不同方向飞入,猛击到位。",
      },
      {
        number: 12,
        description:
          "6.6–7.2s 快速手腕旋转和手指手势安装黑金属硬件和最终胡桃木细节。",
      },
      {
        number: 13,
        description:
          "7.2–7.8s 完成豪华沙发立在中央:深胡桃木、干邑皮革、黑金属。手冻结张开短暂停顿。",
      },
      {
        number: 14,
        description:
          "7.8–8.8s 手猛烈抓并向后拉。整个沙发加速直向固定POV摄影机,在地板滑动带巨大尘迹。",
      },
      {
        number: 15,
        description:
          "8.8–9.2s 手立即向前扔掌STOP手势。沙发在摄影机一米前刹车带过冲、震动和软垫反弹。",
      },
      {
        number: 16,
        description:
          "9.2–10.0s 保持干邑皮革、拼接、胡桃木纹和黑金属细节溢价特写。",
      },
    ],
    constraints:
      "一个固定第一人称POV,20–24mm,无摄影机运动;深石墨工坊,戏剧性边缘光,深阴影,体积尘埃;只有两只戴哑光黑手套的男性手可见;无人物、无文字、无标志、无魔法、无发光或能量效果;真实物理:重真实质量、惯性、冲击、尘埃、木粒、皮革变形、空气位移、运动模糊、激进速度斜坡;豪华汽车商业CGI/VFX 真实感;手是控制界面,每个物体移动必须与强大手势精确同步。",
    video_prompt: {
      title: "Luxury Sofa Workshop Reels",
      subtitle: "10s · 16:9 · Seedance 2.0 · Ultra-Photorealistic Furniture Commercial",
      content: `Create a 10-second ultra-photorealistic luxury furniture commercial, 16:9, following the reference storyboard. ONE fixed first-person POV, 20–24mm, no camera movement. Dark graphite workshop, dramatic rim light, deep shadows, volumetric dust. Only two masculine hands in matte-black gloves visible. No people, text, logos, magic, glow or energy effects. Realistic physics.
0.0–0.6 — A filthy broken sofa stands centered 3–4m away. Hands rise toward it.
0.6–1.2 — Hands violently spread apart: sofa explodes into real components — torn fabric, cushions, stuffing, springs, bolts and broken wood.
1.2–1.8 — Components form a large exploded view. Wrist rotations control and rotate individual parts.
1.8–2.4 — Aggressive hand swipes throw damaged parts out of frame. Debris flies close to lens.
2.4–3.0 — Remaining structure aligns cleanly in the center.
3.0–3.6 — Hands make a strong PULL gesture. Massive dark-walnut beams and black-metal fittings fly rapidly from all directions, narrowly passing the camera.
3.6–4.2 — Hands rotate, push and slam components together. Walnut beams crash into precise joints; bolts and brackets shoot into place.
4.2–4.8 — Both fists CLENCH: completed walnut frame locks with one heavy impact and vibration.
4.8–5.4 — Huge cognac-leather sheet flies directly over camera, briefly covering the lens.
5.4–6.0 — Hands pull outward and downward, stretching and wrapping leather tightly around the frame.
6.0–6.6 — Rapid finger flicks command leather cushions to fly in from different directions and slam into position.
6.6–7.2 — Fast wrist rotations and finger gestures install black-metal hardware and final walnut details.
7.2–7.8 — Finished luxury sofa stands centered: dark walnut, cognac leather, black metal. Hands freeze open for a short pause.
7.8–8.8 — Hands aggressively GRAB and PULL backward. Entire sofa accelerates straight toward the fixed POV camera, sliding across the floor with a huge dust trail.
8.8–9.2 — Hands instantly throw palms forward in a STOP gesture. Sofa brakes one meter from camera with overshoot, vibration and cushion rebound.
9.2–10.0 — Hold premium close-up of cognac leather, stitching, walnut grain and black-metal details.
Hands are the control interface: SPREAD = disassemble, SWIPE = throw, ROTATE = rotate parts, FLICK = launch, PUSH = accelerate, PULL = attract, CLENCH = lock, OPEN PALMS = stop. Every object movement must synchronize exactly with a powerful hand gesture. Heavy realistic mass, inertia, impacts, dust, wood particles, leather deformation, air displacement, motion blur, aggressive speed ramps, luxury automotive-commercial CGI/VFX realism.
`,
    },
  },
  {
    id: "charaspower-tidal-water-typo-h3",
    title: "潮汐水字 TIDAL · Minimax H3 流体字效",
    subtitle: "X · @CharaspowerAI · MiniMax H3 · 15秒 · 16:9",
    description:
      "MiniMax H3 流体字效：两面海墙对撞，塑成 TIDAL 巨字，再爆散成雾。",
    video: "/tutorials/charaspower-tidal-water-typo-h3/demo-web.mp4",
    poster: "/tutorials/charaspower-tidal-water-typo-h3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "流体特效",
    shots: 1,
    references: 0,
    model: "MiniMax H3",
    style: "IMAX 电影 VFX · 流体模拟",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/CharaspowerAI/status/2102352395439120566",
    sourceAuthor: "@CharaspowerAI",
    sourcePlatform: "X",
    sourceImpressions: 2966,
    sourceStats: { asOf: "2026-09-25", likes: 38, reposts: 8, bookmarks: 22 },
    formats: ["字效·片头"],
    hook: {
      structure: "海面起浪 → 巨浪 → 水字 TIDAL → 溃散",
      opening: "暗色风暴海面，镜头贴着水面往前推，约 1s 一道白色浪痕从中间划开海面。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2–4s 浪越涌越高，约 5–7s 巨浪炸开占满画面，约 8s 水流卷成一个圆环冲向镜头。", at: 2 },
        { title: "成品揭晓", text: "约 9s 穿过水环，海面上立起由水构成的「TIDAL」大字，浪花在字边翻卷。", at: 9 },
        { title: "结尾怎么收", text: "约 13–14s 字母从左到右化成浪花溃散。", at: 13 },
      ],
      copyThis: "字不直接出现：先让浪一路蓄力，再穿过水环揭晓水字，结尾让字还原成浪。",
      approx: true,
    },
    tags: [
      "15秒 · 标题序列",
      "16:9 横屏",
      "MiniMax H3",
      "流体VFX",
      "水字效",
    ],
    steps: [
      {
        number: 1,
        title: "理解流体动作节拍",
        description:
          "0–3s:海洋分裂;两面山大小水墙升起。3–6s:摄影机在墙间扫过;水滴 + 折射。6–9s:墙碰撞;液体冲击波。9–12s:流塑造巨大单词 TIDAL。12–15s:压力脉冲从左到右依次引爆字母成雾。",
      },
      {
        number: 2,
        title: "粘贴完整提示词",
        description:
          "使用下方完整提示词。关键:光写实流体模拟、巨大自然力量、IMAX 规模电影 VFX。水在做所有字体排版。无金属、无火焰、无粒子遮挡转场。只有两面巨大海墙碰撞,然后将自己塑造成 TIDAL,整个标题在爆炸回雾之前。MiniMax H3 + 流体 VFX 是疯狂组合。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s 史诗流体动作标题序列从巨大黑海洋突然从中心分裂开始,两面山一样大的水墙在画面两侧升起。",
      },
      {
        number: 2,
        description:
          "3–6s 摄影机在它们之间扫过,数十亿水滴向下雨,阳光通过透明液体结构折射。",
      },
      {
        number: 3,
        description:
          "6–9s 两墙猛烈向彼此崩塌,产生壮观水、泡沫和压力碰撞,向天空发射液体冲击波。",
      },
      {
        number: 4,
        description:
          "9–12s 摄影机快速绕爆炸轨道,悬浮水被拉进巨大旋转流。这些流扭曲、碰撞并将自己塑造成巨大单词'TIDAL',每个字母由猛烈循环透明海水构成,白泡沫缠绕其边缘。标题保持一个巨大英雄瞬间。",
      },
      {
        number: 5,
        description:
          "12–15s 一个看不见的压力脉冲从左到右撕裂它,依次引爆每个字母成巨大水和雾爆炸。",
      },
    ],
    constraints:
      "光写实流体模拟;巨大自然力量;IMAX 规模电影 VFX;无金属、无火焰、无粒子遮挡转场;只有水做所有字体排版;两面巨大海墙碰撞然后塑造成 TIDAL 再爆炸回雾。",
    video_prompt: {
      title: "TIDAL Water Typography · Minimax H3",
      subtitle: "15s · 16:9 · Epic Fluid VFX Title Sequence",
      content: `Epic fluid-action title sequence beginning with an enormous black ocean suddenly splitting down the center as two mountain-sized walls of water rise on opposite sides of frame. The camera sweeps between them while billions of droplets rain downward and sunlight refracts through transparent liquid structures. Both walls violently collapse toward each other, creating a spectacular collision of water, foam and pressure that launches a liquid shockwave into the sky. The camera rapidly orbits the explosion as the suspended water is pulled into gigantic rotating streams. These streams twist, collide and sculpt themselves into the monumental word "TIDAL", every letter composed of violently circulating transparent seawater with white foam wrapped around its edges. The title holds for one massive hero moment before an invisible pressure pulse tears through it from left to right, detonating each letter sequentially into enormous explosions of water and mist. Photorealistic fluid simulation, colossal natural power, IMAX-scale cinematic VFX.
`,
    },
  },
  {
    id: "ailifehack-fashion-editorial-board-h3",
    title: "时尚编辑板分镜 · MiniMax H3（1:1）",
    subtitle: "X · @ai_lifehack55 · MiniMax H3 · 15秒 · 1:1",
    description:
      "GPT-Image2 做时尚编辑板，MiniMax H3 生成 1:1 视频：同一模特四套造型横移切换。",
    video: "/tutorials/ailifehack-fashion-editorial-board-h3/demo-web.mp4",
    poster: "/tutorials/ailifehack-fashion-editorial-board-h3/poster.jpg",
    duration: "15秒",
    durationSec: 15,
    styleLabel: "时尚编辑",
    shots: 8,
    references: 2,
    model: "MiniMax H3",
    style: "时尚编辑板分镜 · 1:1 方形",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/ai_lifehack55/status/2099698171094143303",
    sourceAuthor: "@ai_lifehack55",
    sourcePlatform: "X",
    sourceImpressions: 56095,
    sourceStats: { asOf: "2026-09-25", likes: 674, reposts: 114, bookmarks: 654 },
    formats: ["时尚大片", "变装·换装"],
    hook: {
      structure: "四套 LOOK 海报版式 · 播两轮",
      opening: "一开场就是杂志海报：巨大黑体「FASHION」压在模特头顶，左下标「LOOK 01」，黑色阔腿连身裤。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 1s 紫色色块横扫转场，约 2s LOOK 02 紫裤白衬衫配空心大号「02」，约 3s LOOK 03 酒红裙，约 5s LOOK 04「IN MOTION」。", at: 1 },
        { title: "过程怎么推进", text: "约 7s 起四套按原顺序再来一轮，节奏放慢、机位更近。", at: 7 },
        { title: "结尾怎么收", text: "约 12–14s 停在 LOOK 04，镜头推近，模特双手叉腰站定。", at: 12 },
      ],
      copyThis: "每套造型配一版独立海报版式（大字/编号/底色），用色块横扫切换，第一轮快、第二轮慢。",
      approx: true,
    },
    tags: [
      "15秒 · 8镜头",
      "1:1 方形",
      "MiniMax H3",
      "时尚编辑",
      "双提示词工作流",
    ],
    steps: [
      {
        number: 1,
        title: "准备 4 张全身造型照片",
        description:
          "准备 4 张完成的成年女性全身时尚照片,按希望的板顺序(LOOK_01–04)。原始 4 张输入照片未被作者发布。",
      },
      {
        number: 2,
        title: "GPT-Image2 生成编辑板",
        description:
          "上传 4 张图片按顺序 + 下方 GPT-Image2 编辑板提示词指令到 GPT-Image2(作者使用 GPT-5.6 Sol)。输出:一张 1:1 的 2×2 时尚编辑板。参考本教程的 board.jpg / refs/board.jpg。",
      },
      {
        number: 3,
        title: "MiniMax H3 以板为 image1 生成视频",
        description:
          "将完成的板作为 image1,配合下方 MiniMax H3 视频提示词(integrated_multimodal_description)。15s 1:1 24fps,8 镜头,PANEL_01→04 两次。作者提示:自定义到 8–9 面板可能比 4×2 循环更好。",
      },
    ],
    references_detail: [
      {
        id: "board",
        number: "参考",
        title: "4 面板时尚编辑板 — GPT-Image2 生成提示词",
        subtitle: "Step 1: GPT-Image2 生成 2×2 编辑板 · 1:1 方形",
        image: "/tutorials/ailifehack-fashion-editorial-board-h3/board.jpg",
        prompt: `GPT-Image2 カスタムプロンプト公開
FASHION EDITORIAL BOARD

動画用素材、それなりに揺らぎはありますが動画素材としては問題ないはずです🤣

※使い方
・全身画像を4枚用意してください
・並べたい順番に画像をアップロード
・指示書を同時投入

※投入用指示書（GPT-5.6 Sol使用）
👇️👇️👇️
【入力】
本指示書と同時に、完成済みの成人女性ファッション画像を4枚添付する。
@image1 → LOOK_01：左上
@image2 → LOOK_02：右上
@image3 → LOOK_03：左下
@image4 → LOOK_04：右下

【最優先実行ルール】
@image1 〜 @image4 の4枚で入力完了とする。人物マスター、衣装参照、5枚目の画像を要求しない。「次の画像を追加してください」などの確認、質問、説明、保留を行わず、直ちに完成画像を1枚生成する。4枚を衣装生成用の参考資料ではなく、すでに完成した人物素材として扱う。

画像生成は1回だけ実行し、生成枚数を指定できる場合は1枚に設定する。別案、比較案、バリエーションを生成しない。内部仕様で複数候補が返った場合は、人物数、入力との一致、文字精度、下記デザイン条件への適合を内部で比較し、最も適合する1枚だけを提示する。ユーザーに候補選択を求めない。

【目的】
4枚の人物素材を使い、ファッション映像の構図・配色・タイポグラフィ・視覚的リズムを同時に示す、1:1スクエアの4パネル・ファッションエディトリアルボードを1枚作成する。単なる人物一覧、証明写真、商品カタログ、無地背景のコンタクトシートにはしない。国際的なファッション誌の見開きと現代的なキャンペーンポスターを統合した、強いアートディレクションを持つ一枚にする。

【人物素材の固定】
各画像から人物だけを精密に切り抜き、指定パネルへ配置する。元画像の顔、髪、年齢感、肌色、体型、頭身、頭部と身体の比率、衣装、靴、アクセサリー、ポーズ、手足、撮影角度を変更しない。再描画、別人化、着せ替え、ポーズ変更、身体補完、顔の美化、頭部拡大・縮小を行わない。変更してよいのは元背景の除去、人物全体の比例拡大・比例縮小、パネル内の位置だけとする。人物を増殖させず、各パネルに対応する1人だけを置く。

完成画像内の人物表現は、@image1 〜 @image4 由来の全身像4体だけとする。顔アップ、目や口の拡大、モノクロの顔写真、人物の断片、鏡像、人物シルエット、影としての別人物、複製人物、追加人物を生成しない。

【固定レイアウト】
完成画像は1:1スクエア。画面を均等な2×2に分け、各パネルも1:1スクエアとする。配置順はLOOK_01＝左上、LOOK_02＝右上、LOOK_03＝左下、LOOK_04＝右下で固定する。外枠、パネル間の隙間、白いマージン、立体的な額縁、太い区切り線は作らない。4面は接したまま、背景の色面、文字、細線、矩形が隣接パネルへ連続し、全体が一枚の統合された版面に見えるようにする。

4つの人物像を同じ中央位置・同じ倍率で並べない。各人物は全身を基本とし、頭頂、両手、靴を画面内に保つ。人物の高さは各パネルのおよそ72〜88%の範囲で変化させ、左右へのオフセット、余白量、文字との重なりをパネルごとに変える。ただし衣装の主要シルエットを隠さず、顔には文字やグラフィックを重ねない。

【エディトリアル・グラフィックシステム】
黒、ペーパーホワイト、グラファイトを全体の基調とし、各LOOKの衣装色から抽出したアクセントを対応パネルだけへ限定的に使う。4パネルを別々のテンプレートにせず、以下を一つの統一されたグラフィック言語として扱う。
・大小差の大きい英字タイポグラフィ
・塗り文字とアウトライン文字
・非対称な矩形ブロック
・細いグリッド、クロスヘア、座標線、印刷用のクロップマーク
・1か所だけのバーコード
・粗いハーフトーン、紙、インク、走査線の限定的な質感

これらを人物の上へ無意味に貼る装飾にはしない。人物の輪郭、衣装の縫い目、脚線、パネル境界から細線や矩形を発生させ、次のパネルの文字や色面へ接続する。バーコードは4LOOKを束ねるカタログ索引、数字はパネル識別、クロスヘアとクロップマークは誌面の構図基準として機能させる。人物、背景、文字、線を同じ版面の構成要素として統合する。

【文字】
画像内の文字は英語と数字だけを使用し、次の文字列以外を生成しない。
FASHION
IN MOTION
LOOK 01
LOOK 02
LOOK 03
LOOK 04

全ての文字と数字は「Helvetica Neue Condensed」だけを使う。「FASHION」「IN MOTION」はBlack、「LOOK 01」〜「LOOK 04」はMedium、巨大な「02」「03」は同ファミリーの細いアウトラインとする。他書体を混在させない。

【固定タイポグラフィ配置と視覚リズム】
LOOK_01：人物を右寄せに大きく置き、上部背景へ黒塗りの「FASHION」をパネル幅の90〜105%で配置する。白、黒、グラファイトの矩形とハーフトーンで高密度にする。「LOOK 01」は左上寄り。
LOOK_02：人物を少し小さくし、右側45〜55%を衣装のアクセント色面にする。色面へ二桁が読める巨大なアウトライン「02」を置き、左側はペーパーホワイトの余白。「LOOK 02」は上部。
LOOK_03：アクセント色とグラファイトの太い斜め色面、左側に二桁が読める巨大なアウトライン「03」。人物は少し右、バーコードは左下に1つ。「LOOK 03」は左上。
LOOK_04：ペーパーホワイトと淡いアクセント色のハーフトーン色面。人物は中央付近。下部背景へ黒塗りの「IN MOTION」をパネル幅の90〜105%で置き、細線を収束させる。「LOOK 04」は右上。

巨大背景文字の役割を入れ替えない。「FASHION」「IN MOTION」は各1回。LOOK_02／03へ「FASHION」「FAS」等の巨大英字を置かず、「02」「03」を一桁や不明な図形へ変えない。LOOK_01／04へ巨大番号を加えない。主要文字は画面内で判読可能にし、顔には重ねない。高密度→余白→高密度→収束を維持する。

【品質】
高品質な実写ファッション広告。切り抜き境界、髪の毛先、指、靴、生地の輪郭を自然に処理する。人物と新しい背景の光、接地影、色温度をなじませるが、人物そのものの色や衣装を塗り替えない。文字は鮮明で、背景と十分なコントラストを持たせる。

【禁止事項】
4枚の人物素材の再生成、別人化、4枚を別の一人へ統一する再描画、衣装変更、ポーズ変更、頭身変更、頭部サイズ変更、手足の欠損、人物の複製、追加人物、顔アップ、人物断片、鏡像、人物シルエット、顔を覆う文字、衣装を隠す過密な装飾、均一な4枚のカード構成、無地グレー背景のままの配置、安価なECカタログ風、学校新聞風、スクラップブック風、サイバーパンクHUD、ネオン、過剰なホログラム、実在ブランド、ロゴ、透かしは禁止する。

【出力】
完成した1:1スクエアの4パネル・ファッションエディトリアルボード1枚だけを出力する。会話文、確認文、説明文、追加画像の要求、別案、比較案は出力しない。`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "Shot 1 (00:00.000) PANEL_01。全身略右寄。参照姿势半步动,重心臂位变,肩视线向机成别姿止。机与人反向短横移。FASHION 和 LOOK 01 成立后,文矩左半屏移,右入 LOOK_02 色面。",
      },
      {
        number: 2,
        description:
          "Shot 2 (00:01.700) PANEL_02。余白保全身。横向一步动身 3/4 振,手位变看正面。弧、基调色面、细线与人异速横移。终端背景横退,反向 PANEL_03 斜面横入。",
      },
      {
        number: 3,
        description:
          "Shot 3 (00:03.400) PANEL_03。开始女全身画中右,不追背景滑。不走,正面寄姿片膝松腰重心寄,手腰置,外视回机。发裾遅一揺。无画外入、横移、急旋。短推入。03、斜面、半调、条码横加速,条带横滑开 LOOK_04。",
      },
      {
        number: 4,
        description:
          "Shot 4 (00:05.100) PANEL_04。全身。一步出肩开,臂足配变姿著地。短拉回。弧、淡色面、IN MOTION 左右移,终端右半退,左 LOOK_01 格再起。",
      },
      {
        number: 5,
        description:
          "Shot 5 (00:06.800) PANEL_01。3/4〜中景。短推入中上捻,片臂位视线速变,成第一巡异姿。FASHION、矩、格逆向横パラ移,接 LOOK_02 矩。",
      },
      {
        number: 6,
        description:
          "Shot 6 (00:08.600) PANEL_02。中景到全身拉回。机一步进,肩手位变到别全身姿著地。基调色面、弧、细线三层左右異速移,终端背景横退,反向 PANEL_03 斜面横入。",
      },
      {
        number: 7,
        description:
          "Shot 7 (00:10.400) PANEL_03。开始女画中央,不追背景。膝上到全身引间,同位片足軸约 90 度缓回,身後顔正面。両臂自然下直立姿止。長裾遅大弧一描。振幅最大,人速不上げ。无画外入、歩行、高速横移。机短横移。03、斜面、半调、条码左右交,弧面横開接 LOOK_04。",
      },
      {
        number: 8,
        description:
          "Shot 8 (00:12.300) PANEL_04。中景到全身缓引。女一步前臂足重心変,第一巡异ヒーロ姿收束。弧細線横移減速,IN MOTION 完全可読最終画終端 0.5 秒だけ保持。4 面板不戻。",
      },
    ],
    constraints:
      "1:1 方形,不上首页filmstrip(16:9 only);15秒 8 SHOT 24fps;各 SHOT'开始姿→明确时尚动作→异结束姿',静止仅终 0.5s;横向面板运动基础,无纵滚;切换时旧 LOOK 图形 40–55% 留半,次反向横入 0.2–0.35s 不均分屏;人物衣装硬切无变形;显示文字仅 FASHION/IN MOTION/LOOK 01–04/02/03;Helvetica Neue Condensed 系;主文字动前先完全可读不盖脸;同女脸发年龄肤色体型全 LOOK 维持,各 PANEL 衣鞋配景构基调色配文対応 LOOK のみ継承;PANEL 内姿撮角开始视觉参照不固定;人衣色本文侧新规設定せず,PANEL 间脸身衣色混ぜず;使用順 PANEL_01→02→03→04→01→02→03→04;2×2 板、境界、複数人、シート上パンズーム映像内へ出さず,各 SHOT で対応 PANEL を独立 1:1 空間へ展開。",
    video_prompt: {
      title: "Fashion Editorial Board · MiniMax H3",
      subtitle: "15s · 1:1 · 8 SHOT · integrated_multimodal_description",
      content: `integrated_multimodal_description:
【REFERENCE】
image1 は、同じ成人女性が4種類の衣装を着た完成済み1:1スクエア、2列×2段の4パネル・ファッションエディトリアルボード。左上をPANEL_01／LOOK_01、右上をPANEL_02／LOOK_02、左下をPANEL_03／LOOK_03、右下をPANEL_04／LOOK_04と定義する。全LOOKで同じ女性の顔、髪、年齢感、肌色、体型、頭身を維持し、各PANELの衣装、靴、アクセサリー、背景構成、基調色、アクセント色、文字は対応LOOKだけに継承する。PANEL内のポーズと撮影角度は開始時の視覚参照であり固定しない。人物・衣装・色を本文側で新規設定せず、PANEL間で顔、身体、衣装、色を混ぜない。使用順はPANEL_01→02→03→04→01→02→03→04。2×2ボード、境界、複数人物、シート上のパンやズームは映像内へ出さず、各SHOTで対応PANELを独立した1:1空間へ展開する。

【CONDITION】
15秒、1:1スクエア、24fps、全8SHOT、高品質な実写ファッションエディトリアル映像。8枚の静止ポスターを切り替える映像にしない。各SHOTは「開始ポーズ→一つの明確なファッション動作→開始時と異なる終了ポーズ」を必ず成立させ、静止保持は最終0.5秒だけ。人物は自然な一歩または半歩、身体・肩の方向転換、腕と手の位置変更、重心移動、頭と視線、髪と衣装の揺れを組み合わせる。ダンスではない。人物、カメラ、文字、色面を同時に動かす。
横方向のパネル運動を全編の基本とし、縦スクロールは行わない。各SHOT内でも文字、色面、矩形、線を左右へ8〜20%ずつ異なる速度で動かす。各切替では旧LOOKのグラフィック面を左右どちらかへ画面幅40〜55%だけずらして約半分残し、次LOOKの色面と文字を反対側から横方向へ進入させ、0.2〜0.35秒の不均等な分割画面を経て次LOOKを全面化する。方向、幅、速度を切替ごとに変え、同じ全画面ワイプを反復しない。分割中も人物は一人だけ。人物と衣装は編集点でハードカットし、モーフやクロスフェードを使わない。
表示文字はFASHION、IN MOTION、LOOK 01、LOOK 02、LOOK 03、LOOK 04、02、03だけ。採用ボードと同じHelvetica Neue Condensed系。主要文字は動かす前に一度完全に読ませ、顔を覆わない。

【SHOT FLOW】
[Shot 1] PANEL_01。全身をやや右寄せ。参照姿勢から半歩動き、重心と腕の位置を変え、肩と視線をカメラへ向けた別ポーズで止まる。カメラは人物と反対方向へ短く横移動。FASHIONとLOOK 01成立後、文字と矩形が左へ半画面ずれ、右からLOOK_02の色面が入る。

[Shot 2] At 00:01.700, PANEL_02。余白を保った全身。横方向へ一歩動きながら身体を3/4へ振り、手の位置を変えて正面を見る。円弧、基調色面、細線は人物と異なる速度で横移動。終端でこれらの背景要素を横へ退場させ、反対側からPANEL_03の斜面を横方向へ進入させる。

[Shot 3] At 00:03.400, PANEL_03。開始時から女性の全身は画面中央右に収まり、背景スライドに追従しない。歩かず、正面寄りの姿勢で片膝を緩めて腰へ重心を預け、片手を腰に置き、外していた視線をカメラへ戻す。髪と裾は遅れて自然に一度揺れる。画面外からの進入、横移動、急旋回は禁止。短いプッシュイン。03、斜面、ハーフトーン、バーコードが横方向へ加速し、バーコード帯が横滑りしてLOOK_04を開く。

[Shot 4] At 00:05.100, PANEL_04。全身。一歩踏み出して肩を開き、腕と足の配置を変えたポーズへ着地。短いプルバック。円弧、淡色面、IN MOTIONが左右へずれ、終端で画面右へ半分退き、左からLOOK_01のグリッドを再起動する。

[Shot 5] At 00:06.800, PANEL_01。3/4〜ミディアム。短いプッシュイン中に上体をひねり、片腕の位置と視線を素早く変え、第一巡と異なるポーズを作る。FASHION、矩形、グリッドを逆方向のパララックスで横移動し、LOOK_02の矩形へ接続する。

[Shot 6] At 00:08.600, PANEL_02。ミディアムから全身へプルバック。カメラへ一歩進み、肩と手の位置を変えて別の全身ポーズに着地。基調色面、円弧、細線の三層を左右へ異速移動し、終端でこれらの背景要素を横へ退場させ、反対側からPANEL_03の斜面を横方向へ進入させる。

[Shot 7] At 00:10.400, PANEL_03。開始時から女性は画面中央におり、背景スライドに追従しない。膝上から全身へ引く間、同じ位置で片足を軸に約90度をゆっくり回り、身体の後から顔を正面へ向ける。両腕を自然に下ろして直立ポーズで止まる。長い裾だけが遅れて大きな弧を一度描く。振れ幅は最大、人物の速度は上げない。画面外からの進入、歩行、高速横移動は禁止。カメラも短く横移動。03、斜面、ハーフトーン、バーコードを左右へ交差させ、円弧面を横から開いてLOOK_04へ接続する。

[Shot 8] At 00:12.300, PANEL_04。ミディアムから全身へゆっくり引く。女性が一歩前へ出て腕、足、重心を変え、第一巡と異なるヒーローポーズへ収束。円弧と細線は横移動を減速し、IN MOTIONを完全に読める最終画面で終端0.5秒だけ保持する。4パネルへ戻らない。

【NEGATIVE】
静止画像の連続、各SHOTの長い静止、参照ポーズの反復、切替時だけの動き、縦スクロール、2×2ボード表示、複数人物、人物複製、シート上のパン／ズーム、読み順変更、追加人物・衣装・色・文字、PANEL間の混在、別人化、顔・衣装・身体のモーフ、クロスフェード、全SHOT同じ中央全身・同倍率、同一方向の全画面ワイプ、文字切れ、顔を覆う文字、字幕、ブランド、ロゴ、透かし、手足変形を禁止する。

overall_soundscape: Very soft, brief clicks and fabric swishes occur only at shot changes, mixed clearly below the music. No dialogue, narration, or system voice.

non_diegetic_music: A continuous instrumental fashion beat led by a dry kick drum, tight closed hi-hats, and a steady synth-bass pulse at 118 BPM. It starts at a clearly audible level on the first frame, remains the dominant audio layer without ducking or fading, and continues through the final frame. No vocals.`,
    },
  },
  {
    id: "zephyra-macbook-pro-unbox",
    title: "MacBook Pro 开箱 · 创作者向评测",
    subtitle: "X · @ZephyraLeigh · Seedance 2.5 · 约15秒 · 16:9",
    description:
      "Seedance 2.5 创作者向 MacBook Pro 开箱评测：从拆箱到上手剪辑。",
    video: "/tutorials/zephyra-macbook-pro-unbox/demo-web.mp4",
    poster: "/tutorials/zephyra-macbook-pro-unbox/poster.jpg",
    duration: "约15秒",
    durationSec: 15,
    styleLabel: "科技开箱",
    shots: 5,
    references: 0,
    model: "Seedance 2.5",
    style: "YouTube 科技评测 · 创作者向",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2099759853103194265",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 4717,
    sourceStats: { asOf: "2026-09-25", likes: 62, reposts: 4, bookmarks: 49 },
    formats: ["产品广告"],
    hook: {
      structure: "口播开场 → 开箱+产品特写 → 上手使用 → 口播收",
      opening: "女博主坐在灯光工作室里，双手按着桌上的 MacBook Pro 包装盒直视镜头；约 1s 切到脸部近景开口说话。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4s 切俯拍双手掀盒盖取出机身；约 6–8s 连着三个微距：机身、键盘、侧面接口。", at: 4 },
        { title: "上手使用", text: "约 9s 回到中景开盖，约 11–12s 屏幕上打开剪辑软件，手在触控板上操作。", at: 9 },
        { title: "结尾怎么收", text: "约 13s 回到博主正面，合上电脑，双手放在机身上结束。", at: 13 },
      ],
      copyThis: "口播镜头和开箱俯拍、产品微距交替切，每个画面只停约 1–2 秒，像真博主剪辑节奏。",
      approx: true,
    },
    tags: [
      "约15秒 · 专业开箱",
      "16:9 横屏",
      "Seedance 2.5",
      "YouTube 评测风格",
      "创作者工作流",
    ],
    steps: [
      {
        number: 1,
        title: "设定 YouTube 科技评测工作室",
        description:
          "干净的桌面、专业摄像机、桌面麦克风、显示器和精致的创作者设备背景。Zephyra 穿着全新的高级创作者服装:黑色无袖高领上衣、炭灰色高腰阔腿裤、银色手表和耳环。",
      },
      {
        number: 2,
        title: "强烈视觉钩子 + 开箱",
        description:
          "从 MacBook 盒子的特写开始,拉开密封条、打开盒盖、取出笔记本。展示铝合金机身、键盘、触控板和端口的细节微距镜头。",
      },
      {
        number: 3,
        title: "创作者功能 + 实测",
        description:
          "连接外置 SSD,打开大型视频项目,在编辑软件和多个浏览器窗口间流畅切换。展示高分辨率显示屏、强大性能和长续航对创作者的实际价值。",
      },
      {
        number: 4,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 YouTube Shorts 笔记本开箱提示词。专业摄影、自然产品互动、真实的创作者评测语言。Zephyra 只在开场介绍时说全名,之后保持自然对话。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–4s 强烈视觉钩子:特写 MacBook 盒子滑向镜头,拉开密封条(咔哒声)。切回 Zephyra 脸部:'嘿大家好,我是 Zephyra Leigh——今天我们开箱 MacBook Pro。'",
      },
      {
        number: 2,
        description:
          "4–9s 开箱:俯拍角度,掀开盒盖,取出笔记本,打开显示屏,手指滑过键盘。'哇...这真的很简洁。'展示薄铝机身、键盘、触控板、端口。",
      },
      {
        number: 3,
        description:
          "9–14s 盒内物品:整齐摆放内容物。'里面有 MacBook、USB-C 电源适配器、充电线和说明书。'连接充电线并打开笔记本。",
      },
      {
        number: 4,
        description:
          "14–21s 功能 + 益处:显示屏和键盘特写,浏览桌面,打开视频编辑时间线并流畅擦洗高分辨率片段。'对编辑来说,好处很简单——处理高要求视频项目的同时保持快速便携。'",
      },
      {
        number: 5,
        description:
          "21–26s 快速创作者测试:连接外置 SSD,打开大型视频项目,在编辑软件和多个浏览器窗口间切换。'目前多任务处理感觉非常流畅。'首次评价:'第一印象?高级构建、漂亮显示屏、充足动力。现在想看它如何处理完整编辑工作负载。'自然自信微笑。",
      },
    ],
    video_prompt: {
      title: "MacBook Pro Unboxing · Creator Review · ~15s",
      subtitle: "Seedance 2.5 · 16:9 · YouTube Shorts Tech Review",
      content: `Seedance 2.5 Video PROMPT:

Create an ultra-realistic professional YouTube Shorts laptop unboxing featuring Zephyra Leigh, the same female technology creator. Preserve her exact face, hairstyle, body proportions, voice, personality, and recognizable creator identity.

OUTFIT: Give Zephyra a completely new premium creator outfit: a fitted black sleeveless mock-neck top, high-waisted charcoal wide-leg trousers, elegant silver watch, small silver earrings, and a thin bracelet. Polished soft waves hairstyle, natural professional makeup. Keep the outfit identical throughout the entire video.

She is filming in a sophisticated professional tech-review studio with a clean desk, professional camera, desk microphone, monitor, and subtle creator equipment in the background.

0–4s — STRONG VISUAL HOOK

Start with an extreme close-up of Zephyra sliding the sealed MacBook box directly toward the camera.

She quickly peels the pull-tab.

CLICK.

The lid begins to rise.

Cut immediately to her face as she reacts naturally:

"Hey everyone, I'm Zephyra Leigh — today we're unboxing a MacBook Pro. Let's see if this is actually creator-worthy."

4–9s — THE UNBOXING

Overhead shot.

She lifts the lid, revealing the laptop perfectly positioned inside.

She removes the MacBook, lifts off the protective paper, opens the display, and runs her fingers across the keyboard.

"Wow… this is seriously clean."

Show the thin aluminum body, keyboard, trackpad, display, ports, and charging connector through detailed macro shots.

9–14s — WHAT'S IN THE BOX

She places the contents neatly beside the laptop.

"Inside, you've got the MacBook, the USB-C power adapter, charging cable, and documentation."

She connects the charging cable and opens the laptop.

14–21s — FEATURES & BENEFITS

Close-up of the display and keyboard while she navigates the desktop.

She says:

"The big reasons creators look at this are the high-resolution display, powerful processor, fast storage, and long battery life."

She opens a video-editing timeline and smoothly scrubs through a high-resolution clip.

"For editing, the benefit is simple — you can work with demanding video projects while keeping everything fast and portable."

21–26s — QUICK CREATOR TEST

Show her connecting an external SSD, opening a large video project, and switching between editing software and multiple browser windows.

She says:

"Multitasking feels really smooth so far."

26–30s — FIRST VERDICT

She closes the laptop halfway, looks directly into the camera, and says:

"First impression? Premium build, beautiful display, and plenty of power. Now I want to see how it handles a full editing workload."

Natural confident smile.

CAMERA: professional YouTube tech-review cinematography, cinematic talking-head shot, overhead unboxing camera, extreme macro product details, smooth slider movement, realistic autofocus and focus breathing.

AUDIO: crystal-clear professional female creator voice, realistic cardboard sounds, pull-tab peel, lid opening, protective-paper movement, keyboard clicks, charging connection sound, subtle studio ambience.

PERFORMANCE: Zephyra behaves like an experienced technology and creator-focused reviewer. She speaks naturally, explains what each feature is, how it works, and the practical benefit for creators, without sounding like a commercial.

VISUAL QUALITY: ultra-photorealistic, premium YouTube production, realistic skin texture, accurate hands and fingers, physically accurate laptop, realistic metal and glass reflections, natural facial expressions, believable product handling.

IMPORTANT: Say "Zephyra Leigh" only during the opening introduction. After that, use only "Zephyra" if referring to her. Keep her new outfit consistent. No sci-fi elements, no holograms, no exaggerated reactions, no cartoon, no anime, no distorted hands, no extra fingers, no glitches, no fake-looking product interaction.`,
    },
  },
  {
    id: "zephyra-india-1907-well",
    title: "1907 印度村落打水 · 仿古默片",
    subtitle: "X · @ZephyraLeigh · 推测早期电影模型 · 约15秒 · 16:9",
    description:
      "仿 1907 年默片：印度村妇到石井打水，黑白颗粒、划痕与字幕卡的手摇胶片质感。",
    video: "/tutorials/zephyra-india-1907-well/demo-web.mp4",
    poster: "/tutorials/zephyra-india-1907-well/poster.jpg",
    duration: "约15秒",
    durationSec: 15,
    styleLabel: "黑白默片",
    shots: 5,
    references: 0,
    model: "未在原帖标明（仿古默片系列）",
    style: "1907 早期电影 · 村落纪实",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2099016930506260750",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 2916,
    sourceStats: { asOf: "2026-09-25", likes: 33, reposts: 3, bookmarks: 7 },
    formats: ["电影叙事"],
    hook: {
      structure: "标题字幕 → 井边打水 → 顶罐回家 → 黑场",
      opening: "泛黄颗粒的默片质感：三名裹纱丽的妇女提着陶罐走向水井，画面中间直接压一行字幕「A Morning in the Village — 1907.」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3–8s 固定机位看她们在井边拉绳打水、把罐子装满，动作慢、不切镜。", at: 3 },
        { title: "几段怎么切换", text: "约 9s 换到顶罐走回村子的背影，字幕「The journey home was never hurried.」；约 13s 在土屋前放下罐子。", at: 9 },
        { title: "结尾怎么收", text: "约 14.5s 淡出到黑场，没有额外字卡。", at: 14.5 },
      ],
      copyThis: "开头就用一行「地点 — 年份」字幕定时代，配旧胶片颗粒和褪色棕调，镜头少切、动作放慢。",
      approx: true,
    },
    tags: [
      "约15秒 · 历史还原",
      "16:9 横屏",
      "1907 仿古默片",
      "手摇电影质感",
      "南亚村落纪实",
    ],
    steps: [
      {
        number: 1,
        title: "设定 1907 年印度村庄场景",
        description:
          "石井、土砖房、土路、陶罐、编织篮、树木,远处几辆牛车。三位成年村妇穿 1900 年代初真实南亚服饰:长棉纱丽、朴素披肩、传统首饰、整齐包发。服装历史准确且实用。",
      },
      {
        number: 2,
        title: "还原早期手摇电影视觉风格",
        description:
          "黑白加淡褐色调、厚重颗粒、尘点、划痕、闪烁曝光、柔焦、不均匀帧率、轻微暗角、不稳定画面对齐。无现代物品、科技或当代服装。",
      },
      {
        number: 3,
        title: "静态三脚架机位 + 手摇抖动",
        description:
          "早期电影摄影机放在井边三脚架上,主要静态取景,村妇穿过画面时缓慢平移。手摇胶片的轻微抖动、过曝阳光、轻微画面跳动、偶尔的损坏胶片闪烁。",
      },
      {
        number: 4,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 1907 村落打水提示词。尊重历史、朴实日常劳作、实用服装、安静协作、真实的早期电影缺陷。默片呈现,仅视觉字幕卡。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s:胶片打开一条安静村路,三位村妇提陶罐走向井边,远处一辆牛车缓慢移动。字幕卡出现:'A Morning in the Village — 1907'。",
      },
      {
        number: 2,
        description:
          "3–6s:村妇们小心放下绳索和水桶入井。一位村妇稳住绳索,另一位观察水位,第三位调整头巾并朝镜头短暂微笑。",
      },
      {
        number: 3,
        description:
          "6–9s:装满陶罐并在井边排列好。一个罐子轻微倾斜,少量水洒出。村妇们交换了一个会心的眼神,温和地把它扶正。",
      },
      {
        number: 4,
        description:
          "9–12s:村妇们沿土路搬运装满的陶罐。一位停下帮另一位更舒适地平衡罐子。字幕卡:'The journey home was never hurried'。",
      },
      {
        number: 5,
        description:
          "12–15s:她们到达房屋附近的阴凉处放下陶罐。一位村妇朝镜头看并轻轻挥手。胶片闪烁,画面跳动,划痕铺满画面后淡出黑场。",
      },
    ],
    video_prompt: {
      title: "A Morning in the Village — 1907 · India",
      subtitle: "推测早期电影模型 · 16:9 · Hand-Cranked Silent Film",
      content: `Main Subject(s): Three adult women from the same village, wearing authentic early-1900s South Asian clothing: long cotton saris, simple shawls, traditional jewelry, and neatly covered hair. Keep the clothing historically accurate and practical.

Location: An ordinary village in northern India, around 1907. A stone well, mud-brick homes, dusty paths, clay water pots, woven baskets, trees, and a few bullock carts in the background.

Visual Style: Ultra-realistic early-1900s hand-cranked motion-picture footage. Black-and-white with a subtle sepia tint, heavy film grain, dust, scratches, flickering exposure, soft focus, uneven frame rate, slight vignetting, and unstable frame alignment. No modern objects, technology, or contemporary clothing.

Camera Style: Early motion-picture camera positioned on a tripod beside the village well. Mostly static framing with a slow pan as the women move through the scene. Jerky hand-cranked movement, overexposed sunlight, slight film jitter, and occasional damaged-film flickers.

Timeline

00:00–00:03
The film opens on a quiet village path as the three women walk toward the well carrying clay pots. A bullock cart moves slowly in the distant background. An intertitle appears: "A Morning in the Village — 1907."

00:03–00:06
The women carefully lower a rope and bucket into the well. One woman steadies the rope while another watches the water level. The third adjusts the cloth covering her head and smiles briefly toward the camera.

00:06–00:09
They fill the clay pots and arrange them beside the well. One pot tilts slightly, causing a small amount of water to spill. The women exchange amused looks and gently correct it.

00:09–00:12
The women carry the filled pots along the dusty path. One pauses to help another balance her pot more comfortably. An intertitle appears: "The journey home was never hurried."

00:12–00:15
They reach a shaded area near the houses and set the pots down. One woman looks toward the camera and gives a small, friendly wave. The film flickers, the frame jumps, and scratches spread across the image before it fades to black.

Audio: No synchronized sound or recorded dialogue. Silent-film presentation only, with visual intertitles. Optional faint projector ambience may accompany the footage.

Goal: Create a respectful, historically grounded 1907 village memory–ordinary daily work, practical clothing, quiet cooperation, and authentic early-motion-picture imperfections.`,
    },
  },
  {
    id: "zephyra-paris-1906-market",
    title: "1906 巴黎早市 · 仿古默片",
    subtitle: "X · @ZephyraLeigh · MiniMax H3 Max · 约15秒 · 16:9",
    description:
      "MiniMax H3 Max 仿 1906 年默片：三位姑娘逛巴黎早市，手摇胶片质感。",
    video: "/tutorials/zephyra-paris-1906-market/demo-web.mp4",
    poster: "/tutorials/zephyra-paris-1906-market/poster.jpg",
    duration: "约15秒",
    durationSec: 15,
    styleLabel: "黑白默片",
    shots: 5,
    references: 0,
    model: "MiniMax H3 Max",
    style: "1906 早期电影 · 家庭生活",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2097919526432370965",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 6028,
    sourceStats: { asOf: "2026-09-25", likes: 52, reposts: 2, bookmarks: 23 },
    formats: ["电影叙事"],
    hook: {
      structure: "街景 → 片名字卡 → 早市群像 → 俏皮字卡 → 收尾",
      opening: "黑白旧胶片里的巴黎街道，马车、行人在石板路上穿过；约 2s 切黑底白字片名卡「A Morning in Paris — 1906.」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4–8s 早市里女士们在面包摊、花摊前挑选；约 9s 三位女士坐在长凳上翻看小纸包，其中一位对镜头笑。", at: 4 },
        { title: "字幕卡", text: "约 11s 插一张默片式字卡「The shopping was not a complete success.」，用文字制造一点幽默。", at: 11 },
        { title: "结尾怎么收", text: "约 13s 两位提篮子的女士站在老式汽车旁，白衣女士回头朝镜头笑。", at: 13 },
      ],
      copyThis: "学默片用黑底衬线字卡分段：一张定时间地点，一张写一句俏皮旁白，比配音更有年代感。",
      approx: true,
    },
    tags: [
      "约15秒 · 历史还原",
      "16:9 横屏",
      "MiniMax H3 Max",
      "1906 仿古默片",
      "巴黎市集日常",
    ],
    steps: [
      {
        number: 1,
        title: "设定 1906 年巴黎市集场景",
        description:
          "鹅卵石街道、木制市场摊位、蔬菜花卉面包篮、马车、早期汽车、穿着时代服装的行人。三位年轻成年女性穿 1900 年代初真实服饰:及踝长裙、高领衬衫、合身夹克、宽檐帽、手套、简单皮鞋。",
      },
      {
        number: 2,
        title: "还原早期手摇电影视觉风格",
        description:
          "黑白加淡褐色调、厚重颗粒、闪烁曝光、划痕、尘点、不均匀帧率、柔焦、轻微暗角、不稳定画面亮度。静态或缓慢repositioned三脚架摄影机。无现代物品、汽车、标识或科技。",
      },
      {
        number: 3,
        title: "温馨日常 + 小意外",
        description:
          "三位女性走向市场摊位购物,其中一位意外掉落苹果滚过鹅卵石。其他人无声大笑并赶紧捡回。在长椅短暂休息分享面包,其中一位朝镜头挥手致意。",
      },
      {
        number: 4,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 1906 巴黎早市提示词。时代服装、普通市场差事、小幽默意外、完美还原现代电影诞生前的家庭影像质感。默片呈现,仅视觉字幕卡。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s:胶片打开一条繁忙的鹅卵石街道,一辆马车缓慢经过镜头前,行人穿过画面。短字幕卡:'A Morning in Paris — 1906'。",
      },
      {
        number: 2,
        description:
          "3–6s:三位女性提小编织篮走向市场摊位。一位停下调整帽子,另一位指向面包展示。她们的动作轻微抖动自然,匹配早期胶片格式。",
      },
      {
        number: 3,
        description:
          "6–9s:她们在木摊位检查蔬菜和花卉。一位女性意外掉落一个苹果,它滚过鹅卵石。其他人无声大笑并赶紧捡回,镜头保持固定。",
      },
      {
        number: 4,
        description:
          "9–12s:女性们在市集附近的长椅短暂坐下,分享一条面包并翻看小纸质购物清单。一位朝镜头转身并礼貌挥手。第二张字幕卡:'The shopping was not a complete success'。",
      },
      {
        number: 5,
        description:
          "12–15s:她们提篮离开市场,一辆早期汽车缓慢从背后经过。一位女性回头看镜头并做了一个顽皮的鞠躬。胶片闪烁,短暂冻结,划痕铺满画面后结束。",
      },
    ],
    video_prompt: {
      title: "A Morning in Paris — 1906 · Market Day",
      subtitle: "MiniMax H3 Max · 16:9 · Hand-Cranked Silent Film",
      content: `Main Subject(s): Three young adult women, sisters and cousins, wearing authentic early-1900s clothing: long ankle-length skirts, high-neck blouses, fitted jackets, wide-brimmed hats, gloves, and simple leather shoes.

Location: An ordinary morning market in Paris, France, around 1906. Wooden market stalls, baskets of vegetables, flowers, bread, horse-drawn carts, early automobiles, cobblestone streets, and pedestrians in period clothing.

Visual Style: Ultra-realistic early-1900s hand-cranked motion-picture footage. Black-and-white with a subtle sepia tint, heavy film grain, flickering exposure, scratches, dust particles, uneven frame rate, soft focus, slight vignetting, and unstable image brightness. Silent-film intertitles appear between scenes. No modern objects, cars, signage, or technology.

Camera Style: Static or slowly repositioned early motion-picture camera on a tripod. Slightly jerky movement from hand-cranked film, imperfect framing, occasional overexposure, film jitter, and brief damaged-film flickers. The footage should feel like a rare personal film discovered in an old archive.

Timeline

00:00–00:03
The film opens on a busy cobblestone street. A horse-drawn cart passes slowly in front of the camera while pedestrians move through the frame. A brief intertitle appears: "A Morning in Paris — 1906."

00:03–00:06
The three women walk toward a market stall carrying small woven baskets. One woman pauses to adjust her hat while another points toward a bread display. Their movements are slightly jerky and natural, matching the early film format.

00:06–00:09
They examine vegetables and flowers at a wooden stall. One woman accidentally drops an apple, and it rolls across the cobblestones. The others laugh silently and hurry to retrieve it as the camera remains fixed.

00:09–00:12
The women sit briefly on a bench near the market, sharing a loaf of bread and looking through a small paper shopping list. One woman turns toward the camera and waves politely. A second intertitle appears: "The shopping was not a complete success."

00:12–00:15
They leave the market carrying their baskets as an early automobile slowly passes behind them. One woman looks back at the camera and gives a playful bow. The film flickers, briefly freezes, and ends with scratches across the frame.

Audio: No recorded dialogue or synchronized sound. Silent-film presentation only, with visual intertitles. Optional subtle projector ambience may be added outside the footage, but the scene itself remains silent.

Goal: Create the feeling of a rare, authentic 1906 family film–period clothing, ordinary market errands, small humorous accidents, and imperfect early cinema captured before modern filmmaking existed.`,
    },
  },
  {
    id: "zephyra-sony-headphones-unbox",
    title: "Sony 旗舰耳机开箱 · YouTube Shorts",
    subtitle: "X · @ZephyraLeigh · Wan 3.0 · 约25秒 · 16:9",
    description:
      "Wan 3.0 做的 Sony 降噪耳机开箱评测，YouTube Shorts 风格。",
    video: "/tutorials/zephyra-sony-headphones-unbox/demo-web.mp4",
    poster: "/tutorials/zephyra-sony-headphones-unbox/poster.jpg",
    duration: "约25秒",
    durationSec: 25,
    styleLabel: "科技开箱",
    shots: 5,
    references: 0,
    model: "Wan 3.0",
    style: "YouTube Shorts · 科技开箱",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2097876054295843315",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 4690,
    sourceStats: { asOf: "2026-09-25", likes: 52, reposts: 4, bookmarks: 38 },
    formats: ["产品广告"],
    hook: {
      structure: "开箱特写 → 口播 → 取出+配件 → 佩戴 → App → 口播收",
      opening: "开场第一帧就是双手捧着 Sony 耳机包装盒，约 1s 切近景手指掀开盒盖，露出耳机。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2–5s 博主口播；约 6s 俯拍从盒里取出耳机，约 8–11s 耳机、收纳盒和线材在桌上排开。", at: 2 },
        { title: "关键画面", text: "约 12–15s 手持耳机特写再戴上耳朵，约 16s 切一个大 SONY 品牌画面，约 18–20s 笔记本上操作配套 App。", at: 12 },
        { title: "结尾怎么收", text: "约 21–24s 回到博主正面口播，微笑收尾。", at: 21 },
      ],
      copyThis: "第一秒先给「手+盒子」的开箱特写再切口播，后面按取出→配件→佩戴→App 的顺序排镜头。",
      approx: true,
    },
    tags: [
      "约25秒 · 开箱评测",
      "16:9 横屏",
      "Wan 3.0",
      "YouTube Shorts 风格",
      "音频产品评测",
    ],
    steps: [
      {
        number: 1,
        title: "设定专业创作者工作室",
        description:
          "高端创作者工作室桌面,摄像机正在录制、专业麦克风、笔记本、柔和工作室灯光、品味音频设备背景。Zephyra 保持相同的脸部、发型、身材、声音、个性和视觉身份。",
      },
      {
        number: 2,
        title: "强烈视觉钩子 + 快速开箱",
        description:
          "从 Sony 耳机盒特写开始,手指撕开密封条(令人满意的声音)。Zephyra 直视镜头介绍:'嘿大家好,我是 Zephyra Leigh——这些是 Sony 旗舰降噪耳机。看看里面有什么。'",
      },
      {
        number: 3,
        title: "配件展示 + 功能讲解",
        description:
          "俯拍展示耳机、保护套、充电线、音频线和说明书。Zephyra 戴上耳机,轻拍耳罩在降噪与透明模式间切换,打开配套 App 调整音质。",
      },
      {
        number: 4,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 Sony 耳机开箱提示词。专业 YouTube 创作者拍摄、电影级中景对谈镜头、俯拍开箱角度、微距耳机特写、流畅控制的相机运动、真实自动对焦。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–4s 强烈视觉钩子 + 介绍:密封 Sony 耳机盒特写已在 Zephyra 手中,她快速将盒子推向镜头直到盒子几乎填满画面。切到微距:拇指撕开密封条(胶带剥离声)。回到脸部,直视镜头,微抬眉:'嘿大家好,我是 Zephyra Leigh——这些是 Sony 旗舰降噪耳机。看看里面有什么。'立即将盒子放在桌上。",
      },
      {
        number: 2,
        description:
          "4–8s 开箱:干净的俯拍产品镜头。她撕掉密封条,打开盒子,小心取出耳机。她说:'好的,这些看起来真的很高级。'展示耳机、保护套、充电线、音频线和说明书。",
      },
      {
        number: 3,
        description:
          "8–13s 盒内物品:她整齐摆放内容物。她说:'你会得到耳机、保护套、充电线、音频线和常规说明书。'她拿起耳机并自然折叠。",
      },
      {
        number: 4,
        description:
          "13–19s 功能 + 益处:耳机微距特写。Zephyra 戴上耳机,轻拍耳罩,在降噪与透明模式间切换。她说:'重点是主动降噪、环境音模式和长续航。这意味着你可以在嘈杂地方专注,需要时听到周围环境,听几小时不用经常充电。'她短暂打开配套 App 调整声音设置。",
      },
      {
        number: 5,
        description:
          "19–25s 首次印象:她摘下耳机并直视镜头。'首次印象?舒适度和降噪感觉非常有前途。接下来,我们测试音质。'自然自信微笑。",
      },
    ],
    video_prompt: {
      title: "Sony Flagship Headphones Unboxing · YouTube Shorts",
      subtitle: "Wan 3.0 · 16:9 · Professional Tech Review",
      content: `Create an ultra-realistic professional YouTube Shorts tech unboxing featuring the same female technology creator Zephyra Leigh. Preserve her exact face, hairstyle, body proportions, voice, personality, and visual identity throughout the entire video.

She sits at a premium professional creator studio desk with a camera recording her, professional microphone, laptop, soft studio lighting, and tasteful audio equipment in the background.

0–4s — STRONG VISUAL HOOK + INTRO

Start with an extreme close-up of the sealed Sony headphone box already in Zephyra's hands. She quickly brings it toward the camera until the box nearly fills the frame.

Cut to a macro shot of her thumb breaking the security seal. The adhesive peels with a satisfying sound.

Cut back to her face. She looks directly into the camera, slightly raises her eyebrows, and says:

"Hey everyone, I'm Zephyra Leigh — and these are Sony's flagship noise-canceling headphones. Let's see what's inside."

She immediately places the box on the desk.

4–8s — UNBOXING

Cut to a clean overhead product shot.

She removes the seal, opens the box, and carefully lifts out the headphones.

She says:

"Okay, these look seriously premium."

Show the headphones, protective case, charging cable, audio cable, and documentation.

8–13s — WHAT'S IN THE BOX

She neatly lays out the contents.

She says:

"You get the headphones, a protective case, charging cable, audio cable, and the usual documentation."

She picks up the headphones and folds them naturally.

13–19s — FEATURES & BENEFITS

Macro close-up of the headphones.

Zephyra puts them on, taps the earcup, and switches between noise cancellation and transparency mode.

She says:

"The big highlights are active noise cancellation, ambient sound mode, and long battery life. That means you can focus in noisy places, hear your surroundings when you need to, and listen for hours without constantly charging."

She briefly opens the companion app and adjusts the sound settings.

19–25s — FIRST IMPRESSION

She removes the headphones and looks directly into the camera.

"First impression? The comfort and noise cancellation feel really promising. Next, we're testing the sound quality."

Natural confident smile.

CAMERA: professional YouTube creator setup, cinematic medium talking-head shot, overhead unboxing angle, macro headphone close-ups, smooth controlled camera movement, realistic autofocus, natural focus breathing.

SETTING: premium creator studio, clean desk, professional microphone, laptop, audio equipment subtly visible, sophisticated but realistic environment.

LIGHTING: professional soft key light, natural fill, subtle background practical lighting, controlled product lighting with realistic reflections.

AUDIO: crystal-clear natural female voice, professional microphone recording, realistic packaging sounds, headphone folding clicks, earcup touch sounds, subtle room ambience.

PERFORMANCE: Zephyra behaves like an experienced technology and audio reviewer — confident, knowledgeable, concise, and genuinely excited. She explains features in terms of real-world benefits, not marketing language.

VISUAL QUALITY: ultra-photorealistic, premium YouTube production, realistic skin texture, accurate hands and fingers, physically accurate headphones and accessories, realistic reflections, natural facial expressions.

IMPORTANT: Say "Zephyra Leigh" only in the opening introduction. After that, never introduce her again by her full name. Use natural creator dialogue. No sci-fi elements, no holograms, no exaggerated reactions, no cartoon, no anime, no distorted hands, no extra fingers, no glitches, no fake-looking product interaction.`,
    },
  },
  {
    id: "zephyra-ten-poses-fashion",
    title: "十姿态时尚闪拍 · 角色一致性",
    subtitle: "X · @ZephyraLeigh · Seedance 2.5 · 约15秒 · 16:9",
    description:
      "Seedance 2.5 时尚闪拍：同一角色 10 个姿势快切，需要角色参考图。",
    video: "/tutorials/zephyra-ten-poses-fashion/demo-web.mp4",
    poster: "/tutorials/zephyra-ten-poses-fashion/poster.jpg",
    duration: "约15秒",
    durationSec: 15,
    styleLabel: "时装摄影",
    shots: 10,
    references: 1,
    model: "Seedance 2.5",
    style: "高时尚编辑 · 摄影闪拍",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2096574835543757089",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 15293,
    sourceStats: { asOf: "2026-09-25", likes: 147, reposts: 14, bookmarks: 135 },
    formats: ["时尚大片"],
    hook: {
      structure: "十个姿势快切 · 同一角色",
      opening: "灰色棚景里，粉发女孩站在反光地面上的全身远景；约 2s 直接跳到侧脸特写，节奏一上来就是快切。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 1s 一个镜头：蹲姿、白色厚底鞋微距、坐姿、衣扣细节、挎包、约 10s 伸手指向镜头，景别在全身和特写间来回跳。", at: 2 },
        { title: "结尾怎么收", text: "约 13–14s 拉回远景，她站在暗下来的棚里中央，定格收住。", at: 13 },
      ],
      copyThis: "同一套服装、同一张脸，每 1 秒换一个姿势和景别，远景开头远景收尾。",
      approx: true,
    },
    tags: [
      "约15秒 · 10 个姿势",
      "16:9 横屏",
      "Seedance 2.5",
      "需要角色参考图",
      "时尚摄影节奏剪辑",
    ],
    steps: [
      {
        number: 1,
        title: "准备角色参考图",
        description:
          "使用 @[char ref] 上传角色参考图。保持她的确切脸部、发型、身材比例、肤色、服装、配饰和视觉风格。参考图是唯一角色参考。整部影片以其美学呈现,真实皮肤、自然解剖结构、物理准确的头发和面料。无动漫、无卡通、无服装更换。",
      },
      {
        number: 2,
        title: "设定极简奢华工作室",
        description:
          "反光地板、大胆方向照明、节奏性摄影闪光、真实摄影电影摄影。每个姿势持续一瞬间但保持清晰可读。通过鞭打摇镜、运动匹配剪辑、快速缩放、闪光和镜头遮挡连接角度。",
      },
      {
        number: 3,
        title: "10 个不同时尚姿势",
        description:
          "1) 地面视角自信站姿 2) 手放脸旁极端侧面特写 3) 非对称坐姿俯拍旋转 4) 一腿伸向镜头前景主导 5) 快速流畅交叉腿低对角 6) 指尖捕捉现有袖口紧密细节 7) 后四分之三转身决定性回望 8) 向前倾身手掌短暂遮住镜头 9) 拉长向上伸展锐利倾斜宽镜 10) 指挥性全身英雄姿势俯视镜头快速拉回。",
      },
      {
        number: 4,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 Seedance 2.5 提示词。保持表演快速、自信、节奏紧密。无重复姿势或额外姿势变化。在姿势间加速并在每次保持时急刹。朝第十姿势建立动量后骤停清晰最终保持。同时从示例中提取 ref-char-from-demo.jpg(约 2s 清晰脸部帧)。",
      },
    ],
    references_detail: [
      {
        id: "char-ref",
        number: "@[参考图]",
        title: "角色一致性参考图",
        subtitle: "从你自己的示例视频中提取 · 必需",
        image: "/tutorials/zephyra-ten-poses-fashion/ref-char-from-demo.jpg",
        prompt:
          "从示例视频约 2 秒处提取清晰的脸部特写帧,作为 @[char ref] 参考图上传。保持她的确切脸部、发型、身材、肤色、服装和配饰在整个 10 姿势序列中一致。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "姿势 1 (0–1.5s):自信站姿,从地面视角拍摄,戏剧性广角透视。全身照明,反光地板,音乐重拍落下。",
      },
      {
        number: 2,
        description:
          "姿势 2 (1.5–3s):一只手在脸旁,极端侧面特写捕捉。鞭打摇镜从站姿过渡,闪光标记切换。",
      },
      {
        number: 3,
        description:
          "姿势 3 (3–4.5s):非对称坐姿,直接俯拍镜头旋转。大胆侧光,从地板反射向脸扫过。",
      },
      {
        number: 4,
        description:
          "姿势 4 (4.5–6s):一腿伸向镜头,参考鞋通过戏剧性前缩主导前景。快速缩放从俯拍俯冲到低角度。",
      },
      {
        number: 5,
        description:
          "姿势 5 (6–7.5s):快速流畅交叉腿,从低对角捕捉。运动匹配剪辑,闪光强调腿部动作。",
      },
      {
        number: 6,
        description:
          "姿势 6 (7.5–9s):指尖捕捉现有袖边或领口边缘,紧密细节镜头框住。侧光照亮手和面料细节。",
      },
      {
        number: 7,
        description:
          "姿势 7 (9–10.5s):后四分之三转身决定性回望镜头。镜头围绕她的转身轨道,闪光冻结瞬间。",
      },
      {
        number: 8,
        description:
          "姿势 8 (10.5–12s):向前倾身朝镜头,手掌短暂遮住它作为过渡。镜头遮挡创造快速黑场切换。",
      },
      {
        number: 9,
        description:
          "姿势 9 (12–13.5s):拉长向上伸展,在锐利倾斜宽镜中显露,强侧光。从低处猛冲到俯拍到地板视角。",
      },
      {
        number: 10,
        description:
          "姿势 10 (13.5–15s):指挥性全身英雄姿势,俯视镜头快速拉回。音乐建立顶峰,尖锐最终重拍,清晰保持。",
      },
    ],
    video_prompt: {
      title: "10-Pose Fashion Flash · Character Consistency",
      subtitle: "Seedance 2.5 · 16:9 · Requires Character Reference",
      content: `Seedance 2.5 Video PROMPT:

Create a 15-second high-fashion editorial film starring the adult female character in @[char ref]. Preserve her exact face, hairstyle, body proportions, skin tone, outfit, accessories, and visual style. Use the reference as the ONLY character reference. Render the entire film in its aesthetic, with realistic skin, natural anatomy, and physically accurate hair and fabric. No anime, no cartoon, no outfit changes.

Minimal luxury studio, reflective floor, bold directional lighting, rhythmic photographic flashes, photorealistic fashion cinematography. Exactly 10 distinct fashion poses, each with a different silhouette and camera angle:

1. Confident standing pose, filmed from floor level with dramatic wide-angle perspective.
2. One hand beside her face, captured in an extreme side-profile close-up.
3. Asymmetric seated pose, seen directly overhead as the camera rotates.
4. One leg extended toward the lens, her reference footwear dominating the foreground through dramatic foreshortening.
5. Quick, fluid leg cross, captured from a low diagonal angle.
6. Fingertips catching the edge of an existing sleeve or collar, framed in a tight detail shot.
7. Rear three-quarter turn with a deliberate glance back into the camera.
8. Forward lean toward the lens, ending with her palm briefly covering it.
9. Elongated upward stretch, revealed in a sharply tilted wide shot with strong side lighting.
10. Commanding full-body hero pose, looking down into the lens as the camera rapidly pulls back.

Keep the performance fast, confident, and rhythmically tight. Each pose lasts only a fraction of a second while remaining clearly readable. No repeated poses or additional pose changes. Connect the angles through whip pans, movement-matched cuts, snap zooms, flashes, and lens occlusions. Orbit against her turn, sweep from her floor reflection toward her face, and plunge from overhead to floor level. Alternate intimate details with dramatic wide compositions. Accelerate between poses and brake sharply on each hold.

Keep all gestures quick, confident, and fully clothed. Hair and fabric react naturally to movement. No slow motion, lingering shots, or gradual camera drift. Build momentum toward the tenth pose, then stop sharply for a crisp final hold.

Stable identity, anatomy, and outfit throughout. No added accessories, no text, no logos, no AI artifacts. Sound: driving 140 BPM fashion beat, rhythmic shutter clicks, subtle fabric movement, and a sharp final beat.

Also extract ref-char-from-demo.jpg from a clear face frame (~2s).`,
    },
  },
  {
    id: "lufzzliz-dunhuang-group-dance-white-mesh",
    title: "敦煌群舞白膜成片 · MiniMax Design 全流程",
    subtitle: "X · @LufzzLiz · 约20秒成片 · 16:9",
    description:
      "敦煌五人群舞：白膜动作参考 + 五人角色图，MiniMax H3 全能参考生成。",
    video: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/demo-web.mp4",
    poster: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/poster.jpg",
    duration: "约20秒",
    durationSec: 20,
    styleLabel: "古风写实",
    shots: 0,
    references: 5,
    model: "MiniMax H3（全能参考）",
    style: "敦煌群舞 · 白膜流程",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/LufzzLiz/status/2099466952309903560",
    sourceAuthor: "@LufzzLiz",
    sourcePlatform: "X",
    sourceImpressions: 18269,
    sourceStats: { asOf: "2026-09-25", likes: 161, reposts: 27, bookmarks: 184 },
    formats: ["角色表演"],
    hook: {
      structure: "群舞全景 ↔ 领舞近景交替",
      opening: "壁画洞窟前一群身着飞天服饰的舞者同时抬臂起舞，第一帧就是满画面的红绿彩带和群像。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 7–10s 切到领舞近景，彩带划过镜头；约 11–15s 又拉回群舞全景，远近景来回交替。", at: 7 },
        { title: "结尾怎么收", text: "约 16–19s 领舞甩起长绸，身后群舞跟着动作，在群像中结束。", at: 16 },
      ],
      copyThis: "群舞全景和领舞近景交替剪，近景时让彩带扫过镜头做转场。",
      approx: true,
    },
    tags: [
      "约20秒 · 敦煌群舞成片",
      "16:9 横屏",
      "白膜动作参考流程",
      "五人角色生图 + H3视频",
      "MiniMax Design / GPT Image",
    ],
    steps: [
      {
        number: 1,
        title: "理解白膜（motion reference）",
        description:
          "白膜是纯白色人物模型动作参考视频，只负责舞蹈动作、姿态、人物前后关系、镜头顺序、相机运动和节奏。不保留白模外观，成片第一帧即是真人。提供原片白膜动作参考（前10秒 + 后10秒），理解完整时间轴和音乐节奏。参考：https://x.com/LufzzLiz/status/2099466975722500141",
      },
      {
        number: 2,
        title: "GPT Image 2.5 生成五人角色图",
        description:
          "使用 GPT Image 2.5 + 群舞参考图，生成五位成年女性真人摄影角色图。每人有独特脸型、五官、发型和服装色彩：01 中央领舞（朱砂珊瑚/杏金，清艳灵动）、02 后排左侧（石青/珊瑚，英气自信）、03 后排右侧（赭金/青绿，明丽温暖）、04 前排左侧跪坐（桃色/石绿，温婉舒展）、05 前排右侧跪坐（象牙白/碧罗，清冷秀美）。五条完整生图提示词见下方参考资料。参考：https://x.com/LufzzLiz/status/2099466958877995211 https://x.com/LufzzLiz/status/2099466966172151947 https://x.com/LufzzLiz/status/2099466972862025914",
      },
      {
        number: 3,
        title: "MiniMax Design / H3 全能参考双段生成",
        description:
          "将五张角色图 + 白膜动作参考上传到 MiniMax Design，使用 MiniMax H3 全能参考模式。单段最长15秒，生成 2×10秒@16:9 片段组成约20秒成片。每段绑定同一组5张单人图 + 对应动作参考视频（前10s / 后10s）。五人身份必须一一绑定并在遮挡、转身、绕镜和队形变化中保持稳定。左右仅指原片开场队形，不随屏幕左右变化交换身份。完整视频提示词见下方。参考：https://x.com/LufzzLiz/status/2099466975722500141",
      },
      {
        number: 4,
        title: "合成与超分",
        description:
          "用 ffmpeg 按原时间轴合成20秒完整视频，回填原音乐。进行 2K 超分（upscale）提升画质。核验五人对应关系和身份稳定性。MMD 也可用于配音。最终交付约20秒 16:9 敦煌群舞成片。",
      },
    ],
    references_detail: [
      {
        id: "image-01",
        number: "01",
        title: "中央领舞 · 生图提示词",
        subtitle:
          "GPT Image 2.5 · 朱砂珊瑚上衣/杏金裙裤/青绿披帛 · 清艳灵动",
        image: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/group_ref.jpg",
        prompt: `生图提示词（也可以自己DIY）：
 01_中间主舞 
Create ONE extraordinarily beautiful standalone LIVE-ACTION PHOTOGRAPH of EXACTLY ONE adult Chinese female Dunhuang dancer. This is portrait 01 in a series of five different women. The user specifically wants every woman to have her OWN distinctive, striking beauty. Prioritize breathtaking but believable real human facial beauty and clear individual difference over reproducing the low-detail faces in the reference.

REFERENCE ROLE:

The provided GROUP photo is ONLY a source for which dancer to select, her costume colors, coiffure, headdress and dance spirit. It is NOT a requirement to copy its similar-looking faces. Use the requested dancer's clothes and visual role, and cast a beautiful new DISTINCT adult face according to the precise face direction below. Render only this single woman. No other people anywhere, no other dancers, no background human figures or statues, no extra heads or faces, no collage, no grid.
DANCER SELECTION AND COSTUME:

Select ONLY the CENTRAL standing lead dancer (face approximately 52% across the image).  Her costume is the dusty coral / cinnabar bandeau with delicate gold-turquoise embroidery, champagne-apricot layered silk lower garment, narrow jeweled belt, pale celadon ribbons. Create a beautiful full-length SOLO dance portrait: a gentle S-curve through the waist, one arm gracefully curved overhead, the other extended diagonally to shoulder height with a soft classical dance wrist. Head turned slightly toward the camera, quiet living gaze. Silk and ribbons lift gently with her movement. She is standing gracefully, weight on one leg and the other foot lightly pointed. Keep the costume, hairstyle and identity from this particular woman; only adapt the pose into an elegant solo portrait.
Use the reference for COSTUME and DANCE selection. Face direction below takes priority over any request to match the old face. Framing direction below takes priority over full-length / entire body wording above.
INDIVIDUAL FACE — ESSENTIAL:

Her beauty is strikingly refined and luminous: a softly sculpted oval face, elegant long almond eyes with subtly lifted outer corners, beautifully tapered arched brows, a delicate straight nose, naturally defined cupid's-bow lips and softly rounded cheeks. A small quiet self-assured smile and an alive direct three-quarter gaze. She has classical grace with an arresting presence. Face distinction: oval shape, long lifted almond eyes, delicate arched brows, defined cupid's bow. This is the clear, luminous central beauty.
She is an unmistakably ADULT woman about 25–32. Exquisitely balanced real features, individual and memorable, naturally attractive rather than a standardized beauty-filter face. Real dark irises, beautifully detailed eyelashes, tiny eye catchlights, natural lip texture, fine skin pores with subtle warm tonal variation, a few soft hairline strands, realistic earlobes and subtle facial asymmetry. Refined understated classical dance makeup, muted warm rose lips, only a tiny traditional forehead decoration. A real living person with intelligent feeling in her eyes. No giant eyes, pointed V-shaped chin, exaggerated lips or airbrushed plastic skin. Beauty should be arresting and emotionally alive while entirely believable.
PORTRAIT FRAMING — FACE IS THE FOCUS:

ONE vertical 3:4 editorial portrait. Bring the camera closer than the group photo: use a head-to-hip / elegant three-quarter dance portrait, or head-to-knee for the kneeling dancer, with the full crown and both expressive hands comfortably inside the image. Her face is large, crisp, beautifully lit and immediately the visual focus, about 15–20 percent of the image height. Ensure her face is not obscured by an arm, crown, ribbon or excessive profile angle. Soft three-quarter face angle allows both eyes to read. Hands, flowing silk and the graceful curve of her body frame her beauty. It is fine to crop trailing fabric and lower legs to bring the face closer. Elegant, natural, warm living posture, subtly expressive wrists and anatomically correct fingers. Adapt the selected dance pose modestly so it serves the face and portrait.
MATERIALS AND PHOTOGRAPHY:

Photograph of a flesh-and-blood professional female dancer on a real set. Finely embroidered wearable silk, weightless translucent gauze, tasteful small real gold-toned metal ornaments, believable pearls / turquoise / coral details. Cloth has real weave and beautiful light transmission. Preserve each selected dancer's costume palette from the reference, with refined mineral teal, celadon, muted coral, warm ochre, peach and ivory.
Quiet softly blurred warm sandstone / plaster arch far behind her with faint abstract traces of worn mineral pigments; no discernible human wall paintings. Very restrained background. Broad soft daylight from upper left, delicate catchlights and sculpting fill on the face, fine luminous edges along hair and gauze. Warm-neutral true skin color, sophisticated subtle contrast, no heavy orange filter.
High-end medium-format portrait photography, 85mm lens feeling, optical detail on eyes, lips and skin, gentle shallow depth of field, subtle photographic grain. The most beautiful light, excellent casting, graceful choreography, real couture fabric. A compelling single-person fine-art dance portrait suitable for a premium fashion editorial.
NO sculpture, statues, clay, ceramics, porcelain, wax, doll, mannequin, CGI, 3D render, illustration, airbrushed look, fantasy glow, glitter, fake skin. No text, labels, signatures, watermark, frames or panels. Exactly ONE adult woman, visually distinct from the other portraits.`,
      },
      {
        id: "image-02",
        number: "02",
        title: "后排左侧 · 生图提示词",
        subtitle: "GPT Image 2.5 · 石青服装/珊瑚披帛 · 英气自信",
        image: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/dancer_02.jpg",
        prompt: `===== 02 后排左侧舞者 | 02_后排左侧_石青流光.png =====
Create ONE extraordinarily beautiful standalone LIVE-ACTION PHOTOGRAPH of EXACTLY ONE adult Chinese female Dunhuang dancer. This is portrait 02 in a series of five different women. The user specifically wants every woman to have her OWN distinctive, striking beauty. Prioritize breathtaking but believable real human facial beauty and clear individual difference over reproducing the low-detail faces in the reference.

REFERENCE ROLE:

The provided GROUP photo is ONLY a source for which dancer to select, her costume colors, coiffure, headdress and dance spirit. It is NOT a requirement to copy its similar-looking faces. Use the requested dancer's clothes and visual role, and cast a beautiful new DISTINCT adult face according to the precise face direction below. Render only this single woman. No other people anywhere, no other dancers, no background human figures or statues, no extra heads or faces, no collage, no grid.
DANCER SELECTION AND COSTUME:

Select ONLY the STANDING dancer BEHIND THE LEFT KNEELING WOMAN (face approximately 37% across, 24% down). This is the woman with her outside arm reaching high toward the upper LEFT of the group image.  She wears a mineral teal silk lower garment, a muted teal / ochre embroidered bodice, coral shoulder drape and pale green airy ribbons. Create a full-length SOLO portrait preserving her signature pose: outside arm elegantly reaching upward toward the upper left corner, the other arm extending outward lower down with a graceful wrist, head turned and eyes looking toward the raised hand. Gently curved neck, poised shoulders and soft S-shaped torso. All hands, crown, flowing hems and feet inside the image. Fine ribbons describe one or two spacious curves beside her. Preserve her distinct beauty and her teal/coral outfit, and do not use the central woman's face or peach outfit.
Use the reference for COSTUME and DANCE selection. Face direction below takes priority over any request to match the old face. Framing direction below takes priority over full-length / entire body wording above.
INDIVIDUAL FACE — ESSENTIAL:

Her beauty is striking, confident and slightly androgynous in its strength: a refined gently angular face, naturally defined cheekbones and a clean jaw line, long straight dark brows, deep clear narrow-almond eyes, a beautifully defined straight nose, fuller lower lip. A proud but gentle expression and direct, focused three-quarter gaze with parted relaxed lips. Elegant strong bone structure while unmistakably feminine and adult. Face distinction: angular jaw, straight brows, deeper eyes, more sculpted cheekbones. This is the charismatic, spirited beauty.
She is an unmistakably ADULT woman about 25–32. Exquisitely balanced real features, individual and memorable, naturally attractive rather than a standardized beauty-filter face. Real dark irises, beautifully detailed eyelashes, tiny eye catchlights, natural lip texture, fine skin pores with subtle warm tonal variation, a few soft hairline strands, realistic earlobes and subtle facial asymmetry. Refined understated classical dance makeup, muted warm rose lips, only a tiny traditional forehead decoration. A real living person with intelligent feeling in her eyes. No giant eyes, pointed V-shaped chin, exaggerated lips or airbrushed plastic skin. Beauty should be arresting and emotionally alive while entirely believable.
PORTRAIT FRAMING — FACE IS THE FOCUS:

ONE vertical 3:4 editorial portrait. Bring the camera closer than the group photo: use a head-to-hip / elegant three-quarter dance portrait, or head-to-knee for the kneeling dancer, with the full crown and both expressive hands comfortably inside the image. Her face is large, crisp, beautifully lit and immediately the visual focus, about 15–20 percent of the image height. Ensure her face is not obscured by an arm, crown, ribbon or excessive profile angle. Soft three-quarter face angle allows both eyes to read. Hands, flowing silk and the graceful curve of her body frame her beauty. It is fine to crop trailing fabric and lower legs to bring the face closer. Elegant, natural, warm living posture, subtly expressive wrists and anatomically correct fingers. Adapt the selected dance pose modestly so it serves the face and portrait.
MATERIALS AND PHOTOGRAPHY:

Photograph of a flesh-and-blood professional female dancer on a real set. Finely embroidered wearable silk, weightless translucent gauze, tasteful small real gold-toned metal ornaments, believable pearls / turquoise / coral details. Cloth has real weave and beautiful light transmission. Preserve each selected dancer's costume palette from the reference, with refined mineral teal, celadon, muted coral, warm ochre, peach and ivory.
Quiet softly blurred warm sandstone / plaster arch far behind her with faint abstract traces of worn mineral pigments; no discernible human wall paintings. Very restrained background. Broad soft daylight from upper left, delicate catchlights and sculpting fill on the face, fine luminous edges along hair and gauze. Warm-neutral true skin color, sophisticated subtle contrast, no heavy orange filter.
High-end medium-format portrait photography, 85mm lens feeling, optical detail on eyes, lips and skin, gentle shallow depth of field, subtle photographic grain. The most beautiful light, excellent casting, graceful choreography, real couture fabric. A compelling single-person fine-art dance portrait suitable for a premium fashion editorial.
NO sculpture, statues, clay, ceramics, porcelain, wax, doll, mannequin, CGI, 3D render, illustration, airbrushed look, fantasy glow, glitter, fake skin. No text, labels, signatures, watermark, frames or panels. Exactly ONE adult woman, visually distinct from the other portraits.`,
      },
      {
        id: "image-03",
        number: "03",
        title: "后排右侧 · 生图提示词",
        subtitle: "GPT Image 2.5 · 赭金服装/青绿装饰 · 明丽温暖",
        image: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/dancer_03.jpg",
        prompt: `===== 03 后排右侧舞者 | 03_后排右侧_赭金映玉.png =====

Create ONE extraordinarily beautiful standalone LIVE-ACTION PHOTOGRAPH of EXACTLY ONE adult Chinese female Dunhuang dancer. This is portrait 03 in a series of five different women. The user specifically wants every woman to have her OWN distinctive, striking beauty. Prioritize breathtaking but believable real human facial beauty and clear individual difference over reproducing the low-detail faces in the reference.
REFERENCE ROLE:

The provided GROUP photo is ONLY a source for which dancer to select, her costume colors, coiffure, headdress and dance spirit. It is NOT a requirement to copy its similar-looking faces. Use the requested dancer's clothes and visual role, and cast a beautiful new DISTINCT adult face according to the precise face direction below. Render only this single woman. No other people anywhere, no other dancers, no background human figures or statues, no extra heads or faces, no collage, no grid.

DANCER SELECTION AND COSTUME:
Select ONLY the STANDING dancer BEHIND THE RIGHT KNEELING WOMAN (face approximately 73% across, 25% down), with her outside arm extended high toward the upper RIGHT of the group image.  Her signature costume is mellow ochre-gold silk with refined mineral teal / gold embroidered trim, subtle muted coral sashes and celadon gauze. Create a full-length SOLO photograph of her real living dance pose: the outside arm reaches high toward the upper right, the inner arm extends outward and slightly downward with a relaxed expressive wrist, her body turns three-quarters and face tilts toward the raised hand. Elegant grounded stance with a lightly pointed foot. Preserve this woman's ochre outfit and distinctive face; do not replace her with the central dancer. Entire headdress, fingers, lower garment and feet comfortably visible, with natural breathing room.

Use the reference for COSTUME and DANCE selection. Face direction below takes priority over any request to match the old face. Framing direction below takes priority over full-length / entire body wording above.
INDIVIDUAL FACE — ESSENTIAL:
Her beauty is radiant and expressive: a softly heart-shaped face, fuller upper cheeks, large bright rounded-almond eyes, delicately curved shorter brows, a refined softly rounded nose tip, naturally full rose-colored lips. A small spontaneous smile that reaches her eyes, open warm gaze turned back toward the camera. Warm energetic charm without exaggeration. Face distinction: heart-shaped face, rounder bright eyes, fuller cheeks, joyful soft mouth. This is the dazzling, radiant beauty.

She is an unmistakably ADULT woman about 25–32. Exquisitely balanced real features, individual and memorable, naturally attractive rather than a standardized beauty-filter face. Real dark irises, beautifully detailed eyelashes, tiny eye catchlights, natural lip texture, fine skin pores with subtle warm tonal variation, a few soft hairline strands, realistic earlobes and subtle facial asymmetry. Refined understated classical dance makeup, muted warm rose lips, only a tiny traditional forehead decoration. A real living person with intelligent feeling in her eyes. No giant eyes, pointed V-shaped chin, exaggerated lips or airbrushed plastic skin. Beauty should be arresting and emotionally alive while entirely believable.
PORTRAIT FRAMING — FACE IS THE FOCUS:
ONE vertical 3:4 editorial portrait. Bring the camera closer than the group photo: use a head-to-hip / elegant three-quarter dance portrait, or head-to-knee for the kneeling dancer, with the full crown and both expressive hands comfortably inside the image. Her face is large, crisp, beautifully lit and immediately the visual focus, about 15–20 percent of the image height. Ensure her face is not obscured by an arm, crown, ribbon or excessive profile angle. Soft three-quarter face angle allows both eyes to read. Hands, flowing silk and the graceful curve of her body frame her beauty. It is fine to crop trailing fabric and lower legs to bring the face closer. Elegant, natural, warm living posture, subtly expressive wrists and anatomically correct fingers. Adapt the selected dance pose modestly so it serves the face and portrait.

MATERIALS AND PHOTOGRAPHY:
Photograph of a flesh-and-blood professional female dancer on a real set. Finely embroidered wearable silk, weightless translucent gauze, tasteful small real gold-toned metal ornaments, believable pearls / turquoise / coral details. Cloth has real weave and beautiful light transmission. Preserve each selected dancer's costume palette from the reference, with refined mineral teal, celadon, muted coral, warm ochre, peach and ivory.

Quiet softly blurred warm sandstone / plaster arch far behind her with faint abstract traces of worn mineral pigments; no discernible human wall paintings. Very restrained background. Broad soft daylight from upper left, delicate catchlights and sculpting fill on the face, fine luminous edges along hair and gauze. Warm-neutral true skin color, sophisticated subtle contrast, no heavy orange filter.
High-end medium-format portrait photography, 85mm lens feeling, optical detail on eyes, lips and skin, gentle shallow depth of field, subtle photographic grain. The most beautiful light, excellent casting, graceful choreography, real couture fabric. A compelling single-person fine-art dance portrait suitable for a premium fashion editorial.
NO sculpture, statues, clay, ceramics, porcelain, wax, doll, mannequin, CGI, 3D render, illustration, airbrushed look, fantasy glow, glitter, fake skin. No text, labels, signatures, watermark, frames or panels. Exactly ONE adult woman, visually distinct from the other portraits.`,
      },
      {
        id: "image-04",
        number: "04",
        title: "前排左侧跪坐 · 生图提示词",
        subtitle: "GPT Image 2.5 · 桃色绢裙/石绿上衣 · 温婉舒展",
        image: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/dancer_04.jpg",
        prompt: `===== 04 前排左侧舞者 | 04_前排左侧_桃绢含章.png =====
Create ONE extraordinarily beautiful standalone LIVE-ACTION PHOTOGRAPH of EXACTLY ONE adult Chinese female Dunhuang dancer. This is portrait 04 in a series of five different women. The user specifically wants every woman to have her OWN distinctive, striking beauty. Prioritize breathtaking but believable real human facial beauty and clear individual difference over reproducing the low-detail faces in the reference.

REFERENCE ROLE:

The provided GROUP photo is ONLY a source for which dancer to select, her costume colors, coiffure, headdress and dance spirit. It is NOT a requirement to copy its similar-looking faces. Use the requested dancer's clothes and visual role, and cast a beautiful new DISTINCT adult face according to the precise face direction below. Render only this single woman. No other people anywhere, no other dancers, no background human figures or statues, no extra heads or faces, no collage, no grid.
DANCER SELECTION AND COSTUME:

Select ONLY the KNEELING woman at the FRONT LEFT of the group (face approximately 22% across, 45% down).  Her costume has a mineral teal and old-gold embroidered bodice, translucent champagne sleeves, a peach/apricot silk skirt with pale green accents, muted coral and celadon sashes. Create a single-person full-figure portrait of this SAME woman in her elegant low kneeling / seated dance pose: one knee lifted softly beneath the draped peach skirt, her hands held at distinct chest and waist levels making delicate authentic dance gestures, head turned slightly toward the left and downward with a serene, alive expression. Include the complete crown and the full beautiful spread of silk pooling on the stone floor. Visibly separate realistic fingers. Preserve her individual beauty and warm peach clothing, not the other kneeling woman's mostly ivory costume. The flowing fabric should create a beautiful asymmetrical fan around her, with airy silk rather than bulky rigid folds.
Use the reference for COSTUME and DANCE selection. Face direction below takes priority over any request to match the old face. Framing direction below takes priority over full-length / entire body wording above.
INDIVIDUAL FACE — ESSENTIAL:

Her beauty is gentle and deeply affecting: a balanced soft oval face with a slightly rounder lower cheek contour, flowing willow-shaped eyebrows, soft crescent-almond eyes, a small elegantly proportioned nose, naturally small rosebud lips. A subtle tender smile and warm slightly lowered three-quarter gaze toward the camera, rather than closing her eyes or hiding her face. Mature graceful warmth. Face distinction: softer lower cheeks, long curved willow brows, crescent eyes, small rosebud lips. This is the serene, tender beauty.
She is an unmistakably ADULT woman about 25–32. Exquisitely balanced real features, individual and memorable, naturally attractive rather than a standardized beauty-filter face. Real dark irises, beautifully detailed eyelashes, tiny eye catchlights, natural lip texture, fine skin pores with subtle warm tonal variation, a few soft hairline strands, realistic earlobes and subtle facial asymmetry. Refined understated classical dance makeup, muted warm rose lips, only a tiny traditional forehead decoration. A real living person with intelligent feeling in her eyes. No giant eyes, pointed V-shaped chin, exaggerated lips or airbrushed plastic skin. Beauty should be arresting and emotionally alive while entirely believable.
PORTRAIT FRAMING — FACE IS THE FOCUS:

ONE vertical 3:4 editorial portrait. Bring the camera closer than the group photo: use a head-to-hip / elegant three-quarter dance portrait, or head-to-knee for the kneeling dancer, with the full crown and both expressive hands comfortably inside the image. Her face is large, crisp, beautifully lit and immediately the visual focus, about 15–20 percent of the image height. Ensure her face is not obscured by an arm, crown, ribbon or excessive profile angle. Soft three-quarter face angle allows both eyes to read. Hands, flowing silk and the graceful curve of her body frame her beauty. It is fine to crop trailing fabric and lower legs to bring the face closer. Elegant, natural, warm living posture, subtly expressive wrists and anatomically correct fingers. Adapt the selected dance pose modestly so it serves the face and portrait.
MATERIALS AND PHOTOGRAPHY:

Photograph of a flesh-and-blood professional female dancer on a real set. Finely embroidered wearable silk, weightless translucent gauze, tasteful small real gold-toned metal ornaments, believable pearls / turquoise / coral details. Cloth has real weave and beautiful light transmission. Preserve each selected dancer's costume palette from the reference, with refined mineral teal, celadon, muted coral, warm ochre, peach and ivory.
Quiet softly blurred warm sandstone / plaster arch far behind her with faint abstract traces of worn mineral pigments; no discernible human wall paintings. Very restrained background. Broad soft daylight from upper left, delicate catchlights and sculpting fill on the face, fine luminous edges along hair and gauze. Warm-neutral true skin color, sophisticated subtle contrast, no heavy orange filter.
High-end medium-format portrait photography, 85mm lens feeling, optical detail on eyes, lips and skin, gentle shallow depth of field, subtle photographic grain. The most beautiful light, excellent casting, graceful choreography, real couture fabric. A compelling single-person fine-art dance portrait suitable for a premium fashion editorial.
NO sculpture, statues, clay, ceramics, porcelain, wax, doll, mannequin, CGI, 3D render, illustration, airbrushed look, fantasy glow, glitter, fake skin. No text, labels, signatures, watermark, frames or panels. Exactly ONE adult woman, visually distinct from the other portraits.`,
      },
      {
        id: "image-05",
        number: "05",
        title: "前排右侧跪坐 · 生图提示词",
        subtitle: "GPT Image 2.5 · 象牙白裙/碧罗青绿装饰 · 清冷秀美",
        image: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/dancer_05.jpg",
        prompt: `===== 05 前排右侧舞者 | 05_前排右侧_碧罗凝香.png =====

Create ONE extraordinarily beautiful standalone LIVE-ACTION PHOTOGRAPH of EXACTLY ONE adult Chinese female Dunhuang dancer. This is portrait 05 in a series of five different women. The user specifically wants every woman to have her OWN distinctive, striking beauty. Prioritize breathtaking but believable real human facial beauty and clear individual difference over reproducing the low-detail faces in the reference.
REFERENCE ROLE:

The provided GROUP photo is ONLY a source for which dancer to select, her costume colors, coiffure, headdress and dance spirit. It is NOT a requirement to copy its similar-looking faces. Use the requested dancer's clothes and visual role, and cast a beautiful new DISTINCT adult face according to the precise face direction below. Render only this single woman. No other people anywhere, no other dancers, no background human figures or statues, no extra heads or faces, no collage, no grid.

DANCER SELECTION AND COSTUME:
Select ONLY the KNEELING woman at the FRONT RIGHT of the group (face approximately 86% across, 47% down).  Her costume is an embroidered teal-and-gold bodice with translucent ivory sleeves, mostly ivory flowing lower silk garments, muted celadon, dusty coral and teal sashes. Create a single-person full-figure portrait of this SAME woman in a gracefully composed kneeling dance pose: torso upright and softly turned, head tilted slightly down toward the right, hands held at chest and lower waist in the graceful separate classical finger gestures seen in the reference, a subtle affectionate quiet expression. Keep both hands fully readable and anatomically natural. Full crown and entire draped lower figure visible. Ivory silk pools in a broad soft arc with a contrasting teal/coral diagonal sash. Preserve this woman's identity and her ivory/teal palette instead of the left woman's warmer peach outfit.

Use the reference for COSTUME and DANCE selection. Face direction below takes priority over any request to match the old face. Framing direction below takes priority over full-length / entire body wording above.
INDIVIDUAL FACE — ESSENTIAL:
Her beauty is cool, sophisticated and mesmerizing: an elegant slightly longer oval face, refined higher cheekbones, beautifully spaced elongated phoenix-like eyes, gently rising brows with a fine tail, a straight sculpted nose bridge, delicately shaped medium-full lips with a restrained neutral expression. A calm penetrating three-quarter gaze directly toward the camera, subtle strength and mystery in her eyes. Face distinction: longer face, higher cheekbones, elongated eyes, longer nose line, calm unsmiling mouth. This is the poised, cool beauty.

She is an unmistakably ADULT woman about 25–32. Exquisitely balanced real features, individual and memorable, naturally attractive rather than a standardized beauty-filter face. Real dark irises, beautifully detailed eyelashes, tiny eye catchlights, natural lip texture, fine skin pores with subtle warm tonal variation, a few soft hairline strands, realistic earlobes and subtle facial asymmetry. Refined understated classical dance makeup, muted warm rose lips, only a tiny traditional forehead decoration. A real living person with intelligent feeling in her eyes. No giant eyes, pointed V-shaped chin, exaggerated lips or airbrushed plastic skin. Beauty should be arresting and emotionally alive while entirely believable.
PORTRAIT FRAMING — FACE IS THE FOCUS:
ONE vertical 3:4 editorial portrait. Bring the camera closer than the group photo: use a head-to-hip / elegant three-quarter dance portrait, or head-to-knee for the kneeling dancer, with the full crown and both expressive hands comfortably inside the image. Her face is large, crisp, beautifully lit and immediately the visual focus, about 15–20 percent of the image height. Ensure her face is not obscured by an arm, crown, ribbon or excessive profile angle. Soft three-quarter face angle allows both eyes to read. Hands, flowing silk and the graceful curve of her body frame her beauty. It is fine to crop trailing fabric and lower legs to bring the face closer. Elegant, natural, warm living posture, subtly expressive wrists and anatomically correct fingers. Adapt the selected dance pose modestly so it serves the face and portrait.

MATERIALS AND PHOTOGRAPHY:
Photograph of a flesh-and-blood professional female dancer on a real set. Finely embroidered wearable silk, weightless translucent gauze, tasteful small real gold-toned metal ornaments, believable pearls / turquoise / coral details. Cloth has real weave and beautiful light transmission. Preserve each selected dancer's costume palette from the reference, with refined mineral teal, celadon, muted coral, warm ochre, peach and ivory.

Quiet softly blurred warm sandstone / plaster arch far behind her with faint abstract traces of worn mineral pigments; no discernible human wall paintings. Very restrained background. Broad soft daylight from upper left, delicate catchlights and sculpting fill on the face, fine luminous edges along hair and gauze. Warm-neutral true skin color, sophisticated subtle contrast, no heavy orange filter.
High-end medium-format portrait photography, 85mm lens feeling, optical detail on eyes, lips and skin, gentle shallow depth of field, subtle photographic grain. The most beautiful light, excellent casting, graceful choreography, real couture fabric. A compelling single-person fine-art dance portrait suitable for a premium fashion editorial.
NO sculpture, statues, clay, ceramics, porcelain, wax, doll, mannequin, CGI, 3D render, illustration, airbrushed look, fantasy glow, glitter, fake skin. No text, labels, signatures, watermark, frames or panels. Exactly ONE adult woman, visually distinct from the other portraits.`,
      },
    ],
    storyboard: [],
    constraints:
      "白膜只负责动作/节奏，成片第一帧即是真人；五人身份必须稳定一一绑定；左右指原片开场队形不随屏幕变化；H3单段最长15秒需拆分2×10秒；优先1080P；来源 @LufzzLiz / X / 17360 曝光。",
    video_prompt: {
      title: "MiniMax H3 全能参考 · 生视频提示词",
      subtitle: "MiniMax Design · H3 全能参考模式 · 2×10秒@16:9 · 完整可复制",
      content: `生视频提示词：
请用当前 MiniMax Design 的 MiniMax H3 全能参考模式，完成一版约20秒的真人敦煌群舞视频。
附件按文件名前缀01-08识别，上传顺序可能倒序，不可按上传顺序分配身份。01-05为五位成年女性的真人摄影角色图；06是原片前10秒动作参考；07是后10秒动作参考；08是完整原片，用于理解总时间轴和取回原音乐。原视频的白色人物模型只负责舞蹈动作、姿态、人物前后关系、镜头顺序、相机运动和节奏；成片第一帧即是五位真人，不保留白模外观，不做从白模逐渐变人的过程。每个角色脸型、五官、发型和服装以自己的单人图为准。
五个角色必须一一绑定，身份在遮挡、转身、绕镜和队形变化中保持稳定。左右仅指原片开场队形，不能随着屏幕左右变化交换身份：
01 中央领舞：朱砂珊瑚上衣、杏金裙裤、青绿披帛，清艳灵动。
02 后排左侧：石青服装、珊瑚披帛，轮廓英气、自信专注。
03 后排右侧：赭金服装、青绿装饰，明丽温暖。
04 前排左侧开场跪坐：桃色绢裙、石绿上衣，温婉舒展。
05 前排右侧开场跪坐：象牙白裙、碧罗青绿装饰，清冷秀美。
最重要的是自然灵动的眼神与各自独特的美：视线有合理落点，自然看向指尖、手势方向或转身落点，双眼协调对焦，轻柔扫视并有自然停顿；在转身或视线改变间隙短暂完整眨眼，五人不要同步。眉梢、眼睑、嘴角有细微协调变化，保持克制笑意和真实皮肤纹理，避免全程盯镜头、空洞玻璃眼、固定假笑、瞳孔乱动或面部漂移。五人不能都长成同一张脸。
视觉：电影摄影般真实的敦煌石窟群舞，温暖自然光、矿物颜料壁画、精美金饰、轻盈丝绸披帛、真实衣料动态；保留原片五人的角色、舞蹈和关系。无新增人物、字幕、logo、对白。
先实际看完五图及两个动作片段，加载应用当前的 H3 全能参考提示规范再执行。单段最长15秒，因此生成2条各10秒、16:9的片段组成这一版。每段都绑定同一组5张单人图，并使用对应06或07视频作动作参考。优先1080P；若当前模式只提供768P，使用768P并如实记录，不上采样冒称1080P。只用MiniMax H3，不改为Max、Turbo、Wan或其他模型。
先生成前10秒并核对五人映射；后10秒继续原舞蹈，保持身份、服装、光线与镜头衔接。若支持，可增加前段真实生成末帧作为后段连续性辅助，但五人身份仍以原五图为准。只生成这一版所需的2条，不自行批量生成候选。如果全能参考不能同时接收一个参考视频和这5张图，先报告实际限制，不能擅自降级成纯文生视频或单张首帧动画。
生成后保存两个原始H3视频、完整实际提示词、实际模型/模式/输入/参数和可见消耗，未知费用写unknown。用本机已有ffmpeg按原时间轴合成20秒，回填08的原音乐；完成解码与五人对应关系抽帧核验。把两段和完整成片加入画布，并报告真实绝对路径和任务ID。实际完成生成和交付，不停在方案。`,
    },
  },
  {
    id: "flova-mona-lisa-neighbors",
    title: "蒙娜丽莎搬进街坊 · Flova 分屏教程",
    subtitle: "X · @Flovaai（@AIwithkhan 转引）· 约30秒提示 / 成片约60秒 · 16:9",
    description:
      "Flova + Seedance 2.5：巴黎 POV 撞车后遇到蒙娜丽莎等名画邻居。提示词由成片 OCR 拼出。",
    video: "/tutorials/flova-mona-lisa-neighbors/demo-web.mp4",
    poster: "/tutorials/flova-mona-lisa-neighbors/poster.jpg",
    duration: "约30秒提示 / 成片约60秒",
    durationSec: 60,
    styleLabel: "超现实",
    shots: 0,
    references: 5,
    model: "Seedance 2.5",
    style: "巴黎 POV · 名画邻居 · 黑色幽默",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Flovaai/status/2095863022531260717",
    sourceAuthor: "@Flovaai",
    sourcePlatform: "X",
    sourceImpressions: 327310,
    sourceStats: { asOf: "2026-09-25", likes: 153, reposts: 21, bookmarks: 24 },
    formats: ["手机POV·Vlog", "破壁出屏"],
    hook: {
      structure: "前半成片（约 0–23s）→ 后半 Flova 操作录屏（约 25s 起）",
      opening: "第一人称坐在驾驶座开过巴黎街道，约 1s 引擎盖已经撞皱，约 2s 推门下车——一开场就是追尾事故。",
      openingAt: 0,
      beats: [
        { title: "名画角色逐个登场", text: "被追尾的车里坐着蒙娜丽莎（约 3s）；随后换场：约 7s《呐喊》脸的警察，约 9s 湖边长椅上抱白貂的女子，约 12s 热狗摊边吃热狗的戴珍珠耳环少女，场景之间用甩镜模糊衔接。", at: 3 },
        { title: "成片怎么收", text: "约 17–19s 快速回闪前面几位名画角色，再一个甩镜，珍珠耳环少女举着热狗冲镜头眨眼（约 21s），约 23s 黑场。", at: 17 },
        { title: "后半：Flova 录屏", text: "黑场后是 Flova 界面录屏：输入一段需求 → 角色与场景参考图 → 分镜提示词 → 配乐层 → 时间线 → 导出。", at: 25 },
      ],
      copyThis: "全程第一人称视角，用甩镜把场景串起来，每隔几秒揭晓一位新的名画角色，最后让角色直视镜头眨眼收住。",
      approx: true,
    },
    tags: [
      "约30秒提示 / 成片约60秒",
      "16:9 横屏",
      "Seedance 2.5 + Flova.ai",
      "巴黎 POV · 名画邻居",
      "黑色幽默 · 超现实",
      "分屏教程片",
      "OCR 提示词",
    ],
    steps: [],
    references_detail: [
      {
        id: "image_1",
        number: "1",
        title: "蒙娜丽莎",
        subtitle: "达芬奇 · Mona Lisa",
        image: "/tutorials/flova-mona-lisa-neighbors/ref-01.jpg",
        prompt: "参考 image_1 的面部特征、神秘微笑、中分长发、端庄姿态",
      },
      {
        id: "image_2",
        number: "2",
        title: "呐喊",
        subtitle: "爱德华·蒙克 · The Scream",
        image: "/tutorials/flova-mona-lisa-neighbors/ref-02.jpg",
        prompt: "参考 image_2 的拉长头骨、空洞恐惧眼睛、张开尖叫嘴型、憔悴特征",
      },
      {
        id: "image_3",
        number: "3",
        title: "睡莲",
        subtitle: "克劳德·莫奈 · Water Lilies",
        image: "/tutorials/flova-mona-lisa-neighbors/ref-03.jpg",
        prompt: "参考 image_3 的色彩调色板、浮动睡莲、粉黄色水莲花、深蓝绿倒影水面",
      },
      {
        id: "image_4",
        number: "4",
        title: "抱貂的女子",
        subtitle: "达芬奇 · Lady with an Ermine",
        image: "/tutorials/flova-mona-lisa-neighbors/ref-04.jpg",
        prompt: "参考 image_4 的精致面部、光滑苍白肤色、带头巾的整洁帽子、黑色珠项链、红蓝文艺复兴风格服装、准确的四分之三身体姿态",
      },
      {
        id: "image_5",
        number: "5",
        title: "戴珍珠耳环的少女",
        subtitle: "约翰内斯·维米尔 · Girl with a Pearl Earring",
        image: "/tutorials/flova-mona-lisa-neighbors/ref-05.jpg",
        prompt: "参考 image_5 的柔和棕色眼睛、标志性回眸注视、顶部打结的蓝金色包头巾、单颗大珍珠耳环、温暖肤色",
      },
    ],
    storyboard: [],
    constraints:
      "提示词通过 OCR 从 Khan 转引视频（@AIwithkhan/status/2095931990839357639）右侧 Flova 面板提取，覆盖 intro + BEAT 1–3 + TRANSITION 01–03（约30秒 9:16 提示词）；成片为约60秒 16:9 分屏教程片，额外时长无对应提示词文本；参考五幅经典画作（Mona Lisa、Scream、Water Lilies、Ermine、Pearl）作为 image_1…image_5；来源 @Flovaai / X / 325575 曝光。",
    video_prompt: {
      title: "巴黎 POV 名画邻居 · 完整提示词",
      subtitle: "Seedance 2.5 · 30秒 9:16 提示词（成片60秒 16:9 分屏）",
      content: `Photorealistic live-action first-person POV continuous single take, no cuts, no fades, no dissolves, no teleportation, no morphing — all transitions are physical first-person head movement through real continuous space. Vertical 9:16, 1080p, 30 seconds. Fast pacing, smooth physical camera movement, premium European cinema look, cinematic surreal deadpan comedy, grounded surrealism, realistic modern French street atmosphere, natural daylight, realistic environmental lighting and shadows throughout. No subtitles, no watermark, no music.

BEAT 1 [Seconds 0-7]
First-person POV from inside a modern car, driver seat. Hands on steering wheel, modern French city street visible through windshield, midday daylight, realistic Parisian boulevard with Haussmann buildings, parked cars, traffic lights. Car is stopped at a red traffic light. Suddenly — BANG — violent rear impact jolt; camera lurches sharply forward; the protagonist's forehead strikes the steering wheel — impact blur, disorientation. Camera recovers. No dialogue. No music.

BEAT 2 [Seconds 7-14]
First-person POV: protagonist opens car door, steps out onto the French street, walks in controlled angry strides toward the car behind. Camera is at head height, looking forward as a real person would walk. Protagonist knocks on the driver window. Window rolls down smoothly. Inside the car sits a fully three-dimensional, photorealistic real woman physically present in the vehicle, referencing the face, serene expression, long dark hair center-parted, subtle enigmatic smile, and folded-hands poise of image_1 — she is a living human being with realistic skin texture, pores, hair strands, natural subsurface scattering, fabric folds, contact shadows, and receives the full natural French street daylight exactly as the real environment does. She looks mildly embarrassed, glances down, then up at camera, and says clearly: "Sorry, I just got my driver's license." Protagonist's POV freezes in a long deadpan stare of total disbelief. No music.

BEAT 3 [Seconds 14-18]
Without cutting, footsteps approach from behind protagonist; a French police officer walks into frame from behind the protagonist's left shoulder — fully photorealistic volumetric 3D human, wearing a realistic modern French police uniform (dark navy jacket, kepi cap, badge, radio), referencing the elongated skull-like face, wide terrified hollow eyes, dramatically open screaming mouth, and gaunt features of image_2 — but he behaves with complete professional calm, entirely deadpan, as a normal officer responding to a fender-bender. He surveys the crashed cars methodically, glances at the Mona Lisa woman, then turns and looks directly into the camera with grave seriousness. His face fully receives French street ambient daylight, realistic shadows under the kepi brim, specular highlights on the uniform buttons. No dialogue. No music.

SEAMLESS TRANSITION 01 [Seconds 18-21]
Without any cut, protagonist turns head sharply to the right; camera executes a fast smooth physical 360-degree whip-pan following the head rotation through real continuous street space; the police officer exits frame naturally at the left edge; the spinning motion reveals the Parisian sidewalk along the boulevard. As the whip-pan completes and the camera stabilizes, several people are standing on the sidewalk going about ordinary contemporary life — each is a fully photorealistic volumetric 3D human whose face unmistakably references the elongated skull, wide hollow terrified eyes, and iconic open-mouth expression of image_2 — one wears a business suit carrying a briefcase, one in streetwear scrolling a phone, one in a beige trench coat, one in cycling lycra with a helmet, one in casual clothes eating a baguette — all completely calm and normal in behavior, all receiving identical French street natural daylight, all casting real contact shadows on the pavement. Camera keeps moving forward, no cut. No dialogue. No music.

SEAMLESS TRANSITION 02 [Seconds 21-25]
Without cutting, protagonist continues walking forward; the Parisian boulevard naturally opens at its side into a modern urban public park adjacent to a large urban lake. The lake's surface is a photorealistic physical real-world recreation inspired by the color palette, floating lily pads, pink and yellow water lily blooms, and deep blue-green reflective water of image_3 — actual water with natural ripple physics, real flower petals, natural cloud reflections, integrated seamlessly under the same French daylight. On a modern wooden park bench beside the lake sits a fully three-dimensional photorealistic real woman, referencing the refined facial features, smooth pale complexion, neat cap with headband, dark bead necklace, red and blue Renaissance-style clothing, and precise three-quarter body posture of image_4 — she holds a small living white ermine in her lap, the animal physically present with real fur texture, small claws, alert eyes. She receives full natural park daylight, realistic fabric folds, contact shadows on the bench. Protagonist's POV hand reaches slowly toward the ermine. She immediately and sharply taps the back of his hand away and says firmly: "Don't touch it." Protagonist recoils. No music.

SEAMLESS TRANSITION 03 [Seconds 25-30]
Without cutting, protagonist pulls hand back and turns head; a fast smooth physical whip-pan swings the camera left and slightly forward through continuous park-to-street space; the urban park transitions physically into a lively modern French pedestrian street. A contemporary hot-dog stand with a red-and-yellow awning is visible. Behind the counter stands a fully three-dimensional photorealistic real woman, referencing the soft brown eyes with characteristic over-the-shoulder glance, the wrapped blue and gold headscarf tied at the top, the dangling single large pearl earring, and the warm skin tone of image_5 — she is entirely real with realistic skin, hair escaping the scarf edges, fabric texture, natural French street lighting. She smiles warmly, holds out a hot dog toward the camera, and says cheerfully: "Try our hot dogs, handsome!" Protagonist's POV freezes. Camera slowly pans in a wide deliberate look around — left, right, ahead — revealing all the impossible painting-inspired characters simply living ordinary modern French lives in this sunlit Parisian street. Deadpan stillness. No music. No dialogue after her line.`,
    },
  },
  {
    id: "just-sharon7-venice-sphere",
    title: "威尼斯折叠成球 · 粉发女孩送信",
    subtitle: "X · @Just_sharon7 · 约30秒 · 16:9",
    description:
      "Seedance 2.5：粉发女孩送信，威尼斯像盗梦空间一样折叠成球。需人脸参考图。",
    video: "/tutorials/just-sharon7-venice-sphere/demo-web.mp4",
    poster: "/tutorials/just-sharon7-venice-sphere/poster.jpg",
    duration: "约30秒",
    durationSec: 30,
    styleLabel: "复古胶片",
    shots: 10,
    references: 1,
    model: "Seedance 2.5",
    style: "1940s 威尼斯 · 折叠建筑 · 胶片",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Just_sharon7/status/2100541954685895043",
    sourceAuthor: "@Just_sharon7",
    sourcePlatform: "X",
    sourceImpressions: 52870,
    sourceStats: { asOf: "2026-09-25", likes: 651, reposts: 55, bookmarks: 347 },
    formats: ["折叠·变形"],
    hook: {
      structure: "一路奔跑送信 → 送达 → 航拍揭晓全貌",
      opening: "粉发女孩背着包沿水边奔跑，天空里是倒挂的另一半城市和行人，一把红伞漂在空中——第一帧就是奇观。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "一路换场景跑：约 4s 窄巷，约 7s 台阶连同两侧房子卷成弧形、她往上爬，约 10s 拱桥上空倒挂着城市，约 13s 在两堵高墙之间腾空飞跃，约 15s 穿过水果市集，约 18s 钟楼与倒挂的天际线。", at: 4 },
        { title: "信送到了", text: "约 22s 落到开满红玫瑰的露台，把信交给正在浇花的老奶奶，约 26s 花瓣飘起。", at: 22 },
        { title: "结尾怎么收", text: "约 28s 镜头拉上高空俯拍，整座威尼斯卷成一个环，运河绕成圆圈——最后才给全貌。", at: 28 },
      ],
      copyThis: "第一帧就露出「天上倒挂的城市」这个奇观，全貌留到最后 2 秒航拍才揭晓；中间用「送信」这条简单任务线带观众一路跟着跑。",
      approx: true,
    },
    tags: [
      "约30秒 · 威尼斯场景",
      "16:9 横屏",
      "Seedance 2.5",
      "Fish Creative",
      "需人脸参考图",
    ],
    steps: [
      {
        number: 1,
        title: "准备人脸参考图 Image 1",
        description:
          "原帖要求上传自己的 Image 1 脸部参考图，用于锁定主角面部特征。本教程提供的 ref-face-from-demo.jpg 仅为示例人脸参考（成片截帧），跟做时需替换为自己的人脸照片。",
      },
      {
        number: 2,
        title: "理解折叠建筑核心规则",
        description:
          "Inception 式折叠：威尼斯城市像盗梦空间一样翻折成球形，建筑悬挂在空中倒置。主角始终在正常重力下行动，而世界围绕她折叠。连续镜头运动，无硬切。",
      },
      {
        number: 3,
        title: "设置与平台",
        description:
          "16:9 横屏 · 约30秒 · Seedance 2.5 模型 · Fish Creative HQ 平台。1940s 威尼斯金色时刻，琥珀与青蓝电影调色，35mm 变形宽银幕胶片质感，浅景深，体积光，细颗粒感。",
      },
      {
        number: 4,
        title: "粘贴完整时间线提示词",
        description:
          "使用下方完整 30 秒分镜提示词。每个时间段都有明确的镜头运动、场景描述和折叠效果。保持连续摄影机运动，保持主角形象与 Image 1 一致。",
      },
    ],
    references_detail: [
      {
        id: "Image1",
        number: "Image 1",
        title: "示例人脸参考 · 成片截帧",
        subtitle: "仅供参考 · 跟做需替换为自己的脸",
        image: "/tutorials/just-sharon7-venice-sphere/ref-face-from-demo.jpg",
        prompt: "原帖要求上传自己的 Image 1 脸部参考图。本图为成片截帧示例，展示人物应有的面部特征、发型和造型。跟做时需上传自己的人脸照片作为 Image 1。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s 运河边奔跑：横向跟踪拍摄，金色时刻大运河石堤。粉发女孩 @Image1 抓着黄色信封冲过镜头，头顶整座城市倒挂。戴礼帽的男人遛腊肠犬走在倒置街道上。红伞在两个世界间无重力漂浮。鸽子在琥珀光线中飞散。",
      },
      {
        number: 2,
        description:
          "3–6s 小巷深处：镜头跟随她进入狭窄威尼斯小巷，枯叶在身后旋转。远端街道向天空剥离，建筑像窗户墙一样垂直堆叠。脚步声在石墙间回荡。",
      },
      {
        number: 3,
        description:
          "6–9s 镜头旋转90度：小巷墙变成她脚下的地面，她继续奔跑毫不惊慌。镜头继续进入环绕轨道，她跑上悬浮在半空的螺旋石阶，威尼斯红陶屋顶碎片像万花筒一样在她周围旋转。",
      },
      {
        number: 4,
        description:
          "9–12s 拱桥剪影：极广角。她跑过横跨宽阔运河的石拱桥顶，逆光对着落日。镜像城市同时悬挂在拱桥上方和下方。倒置平面上，孤独的行人朝相反方向走。慢镜头鸟群爆发穿过画面。",
      },
      {
        number: 5,
        description:
          "12–15s 垂直跃起：低角度直视两栋高耸建筑墙之间，天空是一条明亮细缝。她跃过垂直峡谷，双臂展开，外套和头发飞扬，挎包摆动。镜头定住她对着天空。风声呼啸。",
      },
      {
        number: 6,
        description:
          "15–18s 市场穿梭：手持推进穿过拥挤的1940s里亚托市场街——商贩堆苹果箱，晾衣绳在建筑间挂着。她在模糊的前景购物者间穿梭，背离镜头奔跑。苹果滚过鹅卵石。",
      },
      {
        number: 7,
        description:
          "18–21s 钟楼远眺：镜头沿着宏伟砖砌钟楼向上仰拍——威尼斯钟楼——周围城市折叠环绕。女孩在塔楼边缘显得渺小，对着太阳停顿，然后朝屋顶迈步。钟声开始响起。",
      },
      {
        number: 8,
        description:
          "21–24s 屋顶花园：玫瑰藤架框出的屋顶露台花园。灰色开衫的老妇人用铁罐浇灌鲜艳花床。身后威尼斯和圣马可大教堂圆顶在日落时分闪耀，倒置城市悬挂头顶。年轻女孩沿着石栏杆平衡行走，双臂伸展，然后跳下露台。",
      },
      {
        number: 9,
        description:
          "24–27s 递送信封：她递出黄色信封。老妇人转身，放下浇水罐，接过信封。两人温暖微笑。玫瑰花瓣向上飘过她们，朝倒置的天空落去。",
      },
      {
        number: 10,
        description:
          "27–30s 城市成球：镜头快速后拉上升。整座城市折叠旋转，变成威尼斯运河和街道卷曲成球的俯视图。两个小小的人影留在露台上。慢慢淡入温暖光线。",
      },
    ],
    constraints:
      "需人脸参考图 Image 1（成片包含示例截帧，跟做需上传自己的脸）；1940s 威尼斯金色时刻；琥珀与青蓝电影调色；35mm 变形宽银幕胶片质感；Inception 式折叠建筑；主角始终正常重力；连续镜头运动无硬切；16:9 横屏；来源 @Just_sharon7 / X / 50522 曝光。",
    video_prompt: {
      title: "威尼斯折叠成球 · 30s 时间线提示词",
      subtitle: "Seedance 2.5 · 16:9 · Fish Creative HQ · 需 Image 1 人脸参考",
      content: `[Image 1](image_1) is the face and identity reference. A young Korean woman in her early twenties with EXACTLY the face of @[Image 1](image_1) — same facial structure, same features, natural Korean skin, no glasses. Long pastel pink hair, wearing a 1940s teal-orange wool coat-dress with white collar, a brown leather satchel worn cross-body, grey knee socks, black leather shoes, holding a folded yellow envelope. Every shot of her matches @[Image 1](image_1).
1940s Venice at golden hour. Amber and teal cinematic grade, anamorphic 35mm film look, shallow depth of field, volumetric god rays, fine film grain. Inception-style folding architecture — the Venetian city curls upward and hangs inverted overhead like a mirrored ceiling. The woman always stays under normal gravity while the world folds around her. Continuous camera motion, no hard cuts.
[TIMELINE PROMPT]
0–3s: Lateral tracking shot along a stone quay by the Grand Canal at sunset. The young woman @[Image 1](image_1) in a teal coat sprints past camera, clutching a yellow envelope. Above her the entire city hangs upside down, mirrored — a man in a bowler hat walks a dachshund across the inverted street. A red umbrella drifts weightlessly between the two worlds. Pigeons scatter through the amber light.
3–6s: Camera follows behind her into a narrow Venetian alley, dry leaves swirling in her wake. At the far end the street peels upward into the sky, buildings stacking vertically like a wall of windows. Her footsteps echo between the stone walls.
6–9s: The camera slowly rolls 90 degrees. The alley wall becomes the ground beneath her feet; she keeps running, unfazed. The roll continues into a wide orbit as she races up a floating spiral stone staircase suspended in mid-air, fragments of terracotta Venetian rooftops rotating around her like a kaleidoscope.
9–12s: Extreme wide silhouette. She runs across the top of an arched stone bridge over a wide canal against the blazing setting sun. The mirrored city hangs both above and below the arch. On the inverted plane, a lone pedestrian walks the opposite direction. Birds burst across the frame in slow motion.
12–15s: Low angle looking straight up between two towering building walls, the sky a thin bright strip. She leaps across the vertical chasm, arms spread wide, coat and hair flying, satchel swinging. Camera holds on her against the sky. Wind roars.
15–18s: Handheld push-in through a crowded 1940s Rialto market street — vendors stacking crates of apples, laundry strung overhead between the buildings. She weaves between blurred foreground shoppers, running away from camera. An apple rolls loose across the cobblestones.
18–21s: Camera tilts up a grand brick bell tower — a Venetian campanile — as the surrounding city folds and curls around it. The woman appears tiny on the tower ledge, pauses against the sun, then steps off toward the rooftops. Bells begin to ring.
21–24s: Rooftop terrace garden framed by a rose-covered arbor. An elderly woman in a grey cardigan waters a bed of vivid flowers with a tin can. Behind her, Venice and the domes of St Mark's Basilica glow at sunset over the lagoon while the inverted city hangs overhead. The young woman balances along the stone balustrade, arms out, then jumps down onto the terrace.
24–27s: She holds out the yellow envelope. The old woman turns, sets down the watering can, and takes it. Both smile warmly at each other. Rose petals drift upward past them, falling toward the inverted sky.
27–30s: Camera pulls back and rises fast. The whole city folds and rotates until it becomes a top-down aerial of Venice's canals and streets curling into a sphere. The two tiny figures remain on the terrace. Slow fade to warm light.`,
    },
  },
  {
    id: "techiebysa-logo-embroidery-sew",
    title: "刺绣缝 Logo · 线自己爬上织物",
    subtitle: "X · @TechieBySA · 约10秒 · 16:9",
    description:
      "Gemini Omni Flash 1.1 微距：丝线自己爬上布面，绣出你的 Logo。需上传 Logo 图。",
    video: "/tutorials/techiebysa-logo-embroidery-sew/demo-web.mp4",
    poster: "/tutorials/techiebysa-logo-embroidery-sew/poster.jpg",
    duration: "约10秒",
    durationSec: 11,
    styleLabel: "刺绣微距",
    shots: 1,
    references: 0,
    model: "Gemini Omni Flash 1.1",
    style: "刺绣微距 · Logo 缝线成型",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/TechieBySA/status/2093388159602041067",
    sourceAuthor: "@TechieBySA",
    sourcePlatform: "X",
    sourceImpressions: 225607,
    sourceStats: { asOf: "2026-09-25", likes: 642, reposts: 77, bookmarks: 726 },
    formats: ["拆装·制作过程", "产品广告"],
    hook: {
      structure: "三个 Logo 依次绣出",
      opening: "米色布面上几根绿、橙色线头自己扭动着钻进布里，约 1s 已经绣出多邻国猫头鹰的轮廓。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2–3s 线继续爬出「duolingo」字样；约 3.5s 换成红线，约 5–7s 针带着线绣出 YouTube 图标和字；约 7.5s 蓝线开始绣小鸟。", at: 2 },
        { title: "成品揭晓", text: "约 9.5–10s 蓝色 Twitter 小鸟绣完，最后一段线收进布面。", at: 9.5 },
      ],
      copyThis: "线头像活物一样自己爬、自己缝，每个 Logo 约 3 秒绣完就换下一个颜色。",
      approx: true,
    },
    tags: [
      "约10秒",
      "16:9 横屏",
      "Gemini Omni Flash 1.1",
      "Pika",
      "需上传 Logo 参考图",
    ],
    steps: [
      {
        number: 1,
        title: "准备 Logo 参考图",
        description:
          "上传你的 Logo 图片。可以是公司标志、品牌 Logo、个人标志或任何你想要刺绣效果的图形。建议使用清晰、轮廓分明的设计。",
      },
      {
        number: 2,
        title: "在 Pika 平台设置 Gemini Omni Flash 1.1",
        description:
          "打开 Pika，选择 Gemini Omni Flash 1.1 模型。上传你的 Logo 参考图作为引导图像。这将确保刺绣线编织出你想要的图案。",
      },
      {
        number: 3,
        title: "粘贴完整提示词生成",
        description:
          "使用下方完整提示词，确保包含所有细节：极限微距拍摄、编织棉布、彩色刺绣线自主编织、紧密缎纹针迹、慢镜头延时节奏、柔和侧光、浅景深、可见织物纤维和真实丝线光泽。提示词来自 @TechieBySA 自回复（https://x.com/TechieBySA/status/2093388166036382197），创意由 @StevenWommack 提供。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "整段一镜：起始时编织棉布空白。彩色刺绣线从表面升起，自主编织就位，逐排铺设紧密缎纹针迹，勾勒 Logo 轮廓。缝线区域稳步扩展，丝线拉紧成立体刺绣纹理，直至完整 Logo 完成。镜头保持稳定，慢镜头延时节奏，令人满足。柔和自然侧光，浅景深，可见织物纤维和真实丝线光泽。无人手，丝线自主运动。一镜到底无场景切换。",
      },
    ],
    constraints:
      "需上传你的 Logo 参考图；极限微距固定机位；丝线自主编织无人手；一镜到底无场景切换；柔和侧光浅景深；16:9 横屏；约10秒；来源 @TechieBySA / X / 224974 曝光；提示词来自 https://x.com/TechieBySA/status/2093388166036382197 自回复；创意 @StevenWommack。",
    video_prompt: {
      title: "Logo 刺绣编织微距 · 约10秒 · 16:9",
      subtitle: "Gemini Omni Flash 1.1 · Pika · 需上传 Logo 参考图",
      content: `Extreme macro shot of woven cotton shirt fabric, empty at first. Colored embroidery threads rise from the surface and weave themselves into place, laying down tight satin stitches row by row, tracing out the logo. The stitched area grows steadily across the frame, thread pulling taut and raising into dimensional embroidered texture, until the full logo is complete. Camera holds steady, slow satisfying timelapse pace. Soft natural side light, shallow depth of field, visible fabric fibers and realistic thread sheen. No hands, thread moves on its own. One shot no scene change.`,
    },
  },
  {
    id: "aiwithkhan-rope-name-smiling",
    title: "红绳拼字 Smiling · 定格小人工坊",
    subtitle: "X · @AIwithkhan · 约10秒 · 16:9",
    description:
      "Seedance 2.5 定格风：粘土小人拉扯红绳拼出 Smiling，可换成你的名字。",
    video: "/tutorials/aiwithkhan-rope-name-smiling/demo-web.mp4",
    poster: "/tutorials/aiwithkhan-rope-name-smiling/poster.jpg",
    duration: "约10秒",
    durationSec: 10,
    styleLabel: "定格动画",
    shots: 1,
    references: 1,
    model: "Seedance 2.5",
    style: "定格动画 · 红绳编织 · 小人工坊",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/AIwithkhan/status/2100069812152197146",
    sourceAuthor: "@AIwithkhan",
    sourcePlatform: "X",
    sourceImpressions: 13490,
    sourceStats: { asOf: "2026-09-25", likes: 203, reposts: 32, bookmarks: 148 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "小人拉绳 → 逐字成形 → 成品揭晓",
      opening: "白底上一根红色粗绳散着，几个戴绿帽的黏土小人抓着绳头拖动，第一帧就能看出它们在「干活」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "小人们合力拖拽、弯折绳子，约 2s 出「Sm」，约 4s「Smil」，约 5.5s 写到「Smiling」，一个字母一个字母往后推。", at: 2 },
        { title: "成品揭晓", text: "约 7s 红绳花体字「Smiling」完整成形，小人们走开，剩下干净的字。", at: 7 },
      ],
      copyThis: "让小人当「工人」拖绳，字从左往右一个字母一个字母写出来，最后留白给成品。",
      approx: true,
    },
    tags: [
      "约10秒 · 单镜头",
      "16:9 横屏",
      "Seedance 2.5",
      "定格动画美学",
      "需参考图（最终帧）",
    ],
    steps: [
      {
        number: 1,
        title: "准备最终帧参考图",
        description:
          "关键要求：必须提供与成片最后一帧完全吻合的参考图。图中应清晰展示红绳编织完成的单词样式、字母走向、绳子交叉与负空间。如果要把 Smiling 替换成自己的名字，也需要准备对应的最终成型参考图。",
      },
      {
        number: 2,
        title: "设定定格动画元素",
        description:
          "一根粗红编织绳 + 4-5个身穿简单绳绿色工作服的迷你粘土小人，面部无明显特征。纯白无缝背景，柔和影棚光，绳下有细微阴影。小人物需在编织过程中攀爬、拉扯、打结，具备玩味的定格动画动作感。",
      },
      {
        number: 3,
        title: "粘贴完整提示词生成",
        description:
          "使用下方完整英文提示词，并上传最终帧参考图。提示词强调：参考图作为精确最终帧（Using the reference image as the exact final frame）；绳子从散乱逐步变形成草书字母；小人物协作动作；镜头完全静止俯拍；无剪辑、无独立文字生成、无额外物体。",
      },
    ],
    references_detail: [
      {
        id: "ref-final-frame",
        number: "参考图 1",
        title: "最终帧红绳成品参考",
        subtitle: "必需 · 与成片最后一帧精确匹配",
        image: "/tutorials/aiwithkhan-rope-name-smiling/ref-final-frame.jpg",
        prompt:
          "提供红绳编织完成后的最终成型样式，清晰展示单词 Smiling 的字母走向、绳子交叉、打结位置与负空间。这是整个生成的核心参考，必须与成片最后一帧完全吻合。",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "开场：红绳散乱松散，以柔和环状铺散在画面中，4-5个迷你粘土人物站在绳子周围。随后小人物迅速抓住绳子，共同协作拉扯、盘绕、扭转、打结，绳子逐步变形成草书字母 S-m-i-l-i-n-g，从左到右依次成型。小人物在编织过程中攀爬绳子、围绕动作。最后1-2秒，小人物完成 g 字母的最后一个结，后退并跳走，留下完成的 Smiling 红绳作品，清晰可见并与参考图匹配。镜头完全静止俯拍，柔和影棚光，无剪辑、无摄像机运动、无独立生成文字、无额外物体。流畅连续运动，触感绳子物理，真实纤维，玩味迷你定格动画美学融合精致 CGI。",
      },
    ],
    constraints:
      "必须上传最终帧参考图；红绳编织字母需与参考图完全匹配；4-5个迷你粘土人物协作动作；纯白无缝背景；镜头完全静止俯拍；无剪辑、无独立文字、无额外物体；来源 @AIwithkhan / X / 12994 曝光。",
    video_prompt: {
      title: "红绳拼字定格动画提示词",
      subtitle: "Seedance 2.5 · 16:9 横屏 · 完整可复制提示词",
      content: `Using the reference image as the exact final frame, create a 10-second stop-motion-inspired fluid CGI animation of a single thick red braided rope forming the word "Smiling" on a pure white seamless background. At the beginning, the rope is loose and unformed, scattered in soft loops across the frame, with 4–5 tiny clay-like miniature characters wearing simple rope-green overalls and no distinct facial features standing around it. They quickly grab the rope and work together, pulling, stretching, coiling, twisting, and tying it into shape. The rope progressively transforms into the cursive letters "S-m-i-l-i-n-g", moving smoothly from left to right. Each letter must be created entirely from the same continuous rope, with realistic braided fibers, intricate knots, overlapping loops, natural crossings, and clean negative spaces matching the reference image. The characters playfully climb over and around the rope while shaping each letter, coordinating their movements as the word becomes recognizable. The camera remains completely static and top-down, with consistent soft studio lighting, subtle shadows beneath the rope, and no background elements. In the final 1–2 seconds, the characters finish the last knot on the "g," step back and hop away, leaving the completed "Smiling" rope artwork clearly visible and matching the reference image. No cuts, no camera movement, no independently generated text, no extra objects. Smooth continuous motion, tactile rope physics, realistic fibers, playful miniature stop-motion aesthetic blended with polished CGI.`,
    },
  },
  {
    id: "techhalla-french-polynesia-adventure",
    title: "法属波利尼西亚冒险 · 碎切度假记忆",
    subtitle: "X · @techhalla · 约30秒 · 16:9",
    description:
      "Seedance 2.5 度假记忆快剪：法属波利尼西亚冒险，每 0.5–1 秒硬切一个场景。",
    video: "/tutorials/techhalla-french-polynesia-adventure/demo-web.mp4",
    poster: "/tutorials/techhalla-french-polynesia-adventure/poster.jpg",
    duration: "约30秒",
    durationSec: 30,
    styleLabel: "手持实拍",
    shots: 60,
    references: 0,
    model: "Seedance 2.5",
    style: "found-footage 冒险 · 快切碎片化记忆",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/techhalla/status/2096599863639068764",
    sourceAuthor: "@techhalla",
    sourcePlatform: "X",
    sourceImpressions: 15226,
    sourceStats: { asOf: "2026-09-25", likes: 64, reposts: 6, bookmarks: 61 },
    formats: ["手机POV·Vlog"],
    hook: {
      structure: "一天的度假碎片 · 从日出到夜晚",
      opening: "水上屋露台望向粉色日出的海面，约 2s 切白色纱帘、约 3s 光脚踩上湿木地板——第一人称醒来的感觉。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 1s 一个镜头快切：约 4s 骑摩托 POV，约 7s 白沙滩上女孩指向远方，约 8s 水下，约 14s 砍椰子，约 16s 下雨，约 20s 泻湖航拍。", at: 4 },
        { title: "结尾怎么收", text: "约 23s 日落栈桥，约 24s 烤鱼晚餐，约 26–27s 夜里手拨动发光的海水，约 29s 天花板吊扇收尾。", at: 23 },
      ],
      copyThis: "按时间顺序排碎片：日出醒来开头、夜里吊扇结尾，中间每个镜头只留约 1 秒。",
      approx: true,
    },
    tags: [
      "约30秒 · 60+ 快切场景",
      "16:9 横屏",
      "Seedance 2.5",
      "found-footage 度假记忆",
      "法属波利尼西亚冒险",
    ],
    steps: [
      {
        number: 1,
        title: "理解快切剪辑规则",
        description:
          "核心机制：每 0.5-1 秒强制硬切到全新场景或微时刻。全程 30 秒约 60 个场景片段，节奏紧凑但不失温柔。无溶解、无慢动作、无文字贴纸、无调色特效，纯粹的记忆碎片堆叠。",
      },
      {
        number: 2,
        title: "锁定角色与世界设定",
        description:
          "角色：27 岁冒险型旅行者，晒伤雀斑肤、盐渍凌乱发、明亮好奇眼神，轻量泳装 + 防晒衣 + 礁鞋，贝壳项链，防水腰包。世界：法属波利尼西亚真实地理元素（莫雷阿山峰剪影、水上屋桩柱、黑珍珠店、香草种植园、motu 沙洲、va'a 独木舟、poisson cru 生鱼沙拉等）。",
      },
      {
        number: 3,
        title: "粘贴完整提示词生成",
        description:
          "使用下方完整 60 分镜提示词（含时间轴）。提示词已包含完整 0.0-30.0 秒的分镜设计。注意：完整提示词分两段发布（Part 1 主规则 + Part 2 时间轴），本教程已整合为单文件。原始 Part 2 链接：https://x.com/techhalla/status/2096599868370260027（引用早期夏季记忆帖作为语境，不替换本视频）。",
      },
    ],
    references_detail: [],
    storyboard: [],
    constraints:
      "每 0.5-1 秒硬切新场景；found-footage 手机/运动相机质感（盐渍镜头、水滴、曝光、镜头喘息）；法属波利尼西亚地理文化元素准确；27 岁冒险型角色稳定；约 30 秒 60 镜；来源 @techhalla / X / 14836 曝光。",
    video_prompt: {
      title: "法属波利尼西亚冒险快切记忆 · 完整提示词",
      subtitle: "Seedance 2.5 · 16:9 横屏 · 0.5-1s 硬切规则",
      content: `[STYLE + CAMERA + ATMOSPHERE]
Real found-footage adventure vacation in French Polynesia (Tahiti / Moorea / Bora Bora waters and islands) — phone and compact action-cam. Looks like a real memory dump from someone living an active island trip: salt on the lens, water droplets, harsh noon blowouts, green jungle shadows, humid haze, wind roar in mic, outboard motor, reef hush, rain on tin roofs. RAPID-FIRE EDITING ONLY: hard cut every 0.5 to 1.0 seconds to a NEW shot/scene for the entire duration — staccato, restless, exciting but gentle; no dissolves, no whip-flash gimmicks, no slow-motion, no speed ramps, no text, no stickers, no color-grade tricks, no sparkles. Aesthetic = raw Instagram adventure dump, breathless, joyful, curious. Mood: adventurous, exploratory, calm adrenaline, wonder — never aggressive, never violent, never scary, never romantic-cliché resort brochure.

[SUBJECT]
Primary character slightly shifted from a soft beach-holiday girl into an athletic 27-year-old adventure traveler: sun-freckled skin, salt-crusted wavy hair often tied messy, bright curious eyes, light athletic build, practical swimwear and quick-dry shorts, rashguard sometimes on, thin shell necklace, waterproof pouch, barefoot or reef shoes. She moves with energy — climbing into boats, adjusting mask, pointing at lagoon colors, laughing at rain — always kind, never performing aggression. Occasional brief companions (local guide, friend) only as real background humans.

[WORLD — FRENCH POLYNESIA ADVENTURE]
Overwater bungalow stilts, black-pearl shop windows, ferry wake, volcanic green peaks (Moorea silhouette), turquoise lagoon over sandbars, coral heads, vanilla plantation edge, breadfruit trees, motu sand spits, outrigger canoe (va'a), scooter on coastal road, market poisson cru, warm night rain, phosphorescent shoreline hints, church bells far away, roosters, gecko chirps — specific, lived-in, wet, salty, real.

[EDIT RULE — MANDATORY]
Every 0.5–1.0s = hard cut to a completely new framing or micro-moment. Pack the full 30 seconds as a continuous barrage of tiny real clips. No shot should linger longer than one second.

[RAPID-FIRE SHOT LIST — ~0.5–1s EACH, FULL 30s]
0.0–0.7: dawn over lagoon from bungalow deck, pink water. Cut.
0.7–1.4: her hand slides open wooden shutter, humid air hits lens. Cut.
1.4–2.1: bare feet on wet wood planks, walking fast. Cut.
2.1–2.8: coffee in metal cup, steam, ocean behind. Cut.
2.8–3.5: scooter kickstart, coastal road blur of palms. Cut.
3.5–4.2: helmet chin strap click, smile sideways. Cut.
4.2–4.9: ferry gangway, rope, salt spray. Cut.
4.9–5.6: outboard throttle, wake splitting turquoise. Cut.
5.6–6.3: Moorea peaks framed through spray. Cut.
6.3–7.0: she points at a sandbar, wind in hair. Cut.
7.0–7.7: jumping from small boat into warm lagoon. Cut.
7.7–8.4: underwater phone glimpse — blurry coral, bubbles, real murk. Cut.
8.4–9.1: snorkel surface gasp, laugh, mask fog. Cut.
9.1–9.8: reef shoes on sharp black rock, careful step. Cut.
9.8–10.5: climbing into outrigger canoe, paddle drip. Cut.
10.5–11.2: paddle dig, canoe surges, shoulder muscles. Cut.
11.2–11.9: guide's hand pointing at distant motu. Cut.
11.9–12.6: beach landing, canoe scrape on sand. Cut.
12.6–13.3: running across empty motu spit, footprints. Cut.
13.3–14.0: shade under palms, drinking coconut water. Cut.
14.0–14.7: close coconut husk fibers, knife work nearby (safe, practical). Cut.
14.7–15.4: market stall — poisson cru lime, hands pass plate. Cut.
15.4–16.1: first bite, eyes close happy. Cut.
16.1–16.8: vanilla vine leaves, fingers touch green pods. Cut.
16.8–17.5: sudden warm rain starts, fat drops on lens. Cut.
17.5–18.2: she runs laughing under tin eave, soaked shirt. Cut.
18.2–18.9: rain curtain off roof edge, feet splashing puddle. Cut.
18.9–19.6: sky clears fast, sun flare through wet hair. Cut.
19.6–20.3: scooter again, wet road reflections. Cut.
20.3–21.0: hillside lookout, lagoon rings of blue. Cut.
21.0–21.7: binoculars / phone zoom fail, soft blur then pull back. Cut.
21.7–22.4: hiking short muddy trail, holding vine for balance. Cut.
22.4–23.1: waterfall trickle (gentle), hands under cold water. Cut.
23.1–23.8: golden hour overwater path, long shadows. Cut.
23.8–24.5: hanging wet towel, sunset bounce on stilts. Cut.
24.5–25.2: dinner on plastic table, grilled fish, string lights start. Cut.
25.2–25.9: gecko on wall, phone finds it, soft giggle. Cut.
25.9–26.6: night lagoon edge, small waves, distant ukulele. Cut.
26.6–27.3: she dips feet in black water, kicks once. Cut.
27.3–28.0: bioluminescent sparkle when she swirls water with hand (subtle, real). Cut.
28.0–28.7: walking back on dock, torch phone light bouncing. Cut.
28.7–29.4: bungalow door, mosquito net, tired happy face. Cut.
29.4–30.0: last clip — dark room, ceiling fan, sea hiss through window, recording ends mid-breath.

[REALISM / TONE LOCK]
French Polynesia adventure vacation memories, rapid-fire hard cuts every 0.5–1 second, found-footage phone/action-cam only, energetic but gentle, just real salt, rain, lagoon, boats, food, night air, and breathless joy.`,
    },
  },
  {
    id: "techhalla-room214-stop-motion",
    title: "ROOM 214 · H3 定格收拾行李",
    subtitle: "X · @techhalla · 约15秒 · 16:9",
    description:
      "MiniMax H3 定格动画：汽车旅馆里衣物自己跳进行李箱，JSON 提示词控制。",
    video: "/tutorials/techhalla-room214-stop-motion/demo-web.mp4",
    poster: "/tutorials/techhalla-room214-stop-motion/poster.jpg",
    duration: "约15秒",
    durationSec: 15,
    styleLabel: "定格动画",
    shots: 1,
    references: 0,
    model: "MiniMax Hailuo H3",
    style: "定格动画 · 逐帧抖动",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/techhalla/status/2094743725138178491",
    sourceAuthor: "@techhalla",
    sourcePlatform: "X",
    sourceImpressions: 10858,
    sourceStats: { asOf: "2026-09-25", likes: 174, reposts: 9, bookmarks: 142 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "固定机位定格：乱床 → 自动装箱 → 合箱",
      opening: "固定机位看酒店房间，床上摊着衬衫、牛仔裤、袜子和一个打开的空行李箱，门牌写着 ROOM 214。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "衣物以定格方式一件件跳进箱子折好，约 4s 衬衫飞起，椅子上的衣服也跟着消失；百叶窗的光条在床上慢慢移动。", at: 4 },
        { title: "成品揭晓", text: "约 13s 箱子里叠得整整齐齐，约 14s 已合上的蓝色行李箱立在空床中央。", at: 13 },
      ],
      copyThis: "机位全程不动，只让物件逐帧跳动，用窗光移动暗示时间流逝。",
      approx: true,
    },
    tags: [
      "约15秒 · 定格动画",
      "16:9 横屏",
      "MiniMax H3",
      "stop-motion 收拾行李",
      "无人手 · 锁定机位",
      "JSON 结构化提示词",
    ],
    steps: [
      {
        number: 1,
        title: "读懂定格节奏：小件→中件→大件→合盖",
        description:
          "真正的定格动画是物体在帧间「瞬移」几厘米，而非平滑滑动。收拾顺序：袜子、内裤、T恤、腰带先跳入箱中；衬衫、牛仔裤、毛衣分两三步折叠入箱；冲锋衣、帽子最后压顶；箱盖三段硬合。",
      },
      {
        number: 2,
        title: "粘贴完整 JSON 提示词到 MiniMax H3",
        description:
          "将下方 JSON 提示词完整复制到 MiniMax Hailuo H3 生成。JSON 结构包含 archetype、concept、camera、grade、audio、constraints 六大模块，精准定义定格抖动、节奏结构、禁用平滑运动。",
      },
      {
        number: 3,
        title: "注意三大约束：真定格抖动 · 无手 · 锁定机位",
        description:
          "constraints 明确要求：物体逐帧瞬移而非漂浮滑行；画面中不得出现人手、手臂或身体；相机完全锁定，禁止推拉摇移。可读文字仅限 ROOM 214、DESERT INN / FLAGSTAFF、CHECKOUT 11AM。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0-2s：锁定广角。ROOM 214 黄铜门牌。海军蓝硬壳行李箱敞开在床罩上。度假衣物散落床面、椅子、地板。窗帘条纹阳光。画面已有细微逐帧闪烁。",
      },
      {
        number: 2,
        description:
          "2-6s：小件先跳。白色运动袜 pop-pop 跳入箱中；藏青内裤折一次跃入；乐队 T恤咔嚓折成方块掉落；棕色皮带盘卷落箱顶。每件都是瞬移硬切，带硬阴影。",
      },
      {
        number: 3,
        description:
          "6-10s：中件分步折叠。浅蓝牛津衬衫自己扣纽两帧 pop 后折叠；深色牛仔裤三段硬切折好滑入；芥末黄毛衣压缩堆叠。书桌记事本翻页：空白→手写 CHECKOUT 11AM→定格。",
      },
      {
        number: 4,
        description:
          "10-13s：大件最后。橄榄绿冲锋衣两口崩塌掉入；棒球帽翻转落堆顶；椅子上剩余袜子、背心从椅子跳过来。箱子明显满了。",
      },
      {
        number: 5,
        description:
          "13-15s：箱盖三段硬合。盖子第一段 slam、第二段 slam、第三段完全合上。最终定格：合上的海军蓝箱、黄铜 ROOM 214、记事本冻结在 CHECKOUT 11AM。结束。",
      },
    ],
    constraints:
      "真正定格抖动：物体逐帧瞬移数厘米，禁止平滑漂浮；无人手、手臂或身体入镜；相机完全锁定，禁止推拉摇移；可读文字仅 ROOM 214 / DESERT INN / FLAGSTAFF / CHECKOUT 11AM；收拾顺序可见：袜子内衣 T恤腰带 → 衬衫牛仔裤毛衣 → 冲锋衣帽子；箱盖合前箱子需显示已满；来源 @techhalla / X / 10727 曝光。",
    video_prompt: {
      title: "ROOM 214 定格动画提示词",
      subtitle: "MiniMax Hailuo H3 · JSON 结构化提示词",
      content: `{
  "archetype": "Stop-motion / frame-by-frame jitter of real objects moved between frames",
  "concept": {
    "title": "ROOM 214",
    "world": "A roadside motel room in Flagstaff, Arizona, late afternoon. Brass ROOM 214 on the interior door. Desk notepad stamped DESERT INN / FLAGSTAFF. Navy hard-shell suitcase open on the bedspread. Sun stripes through vertical blinds. Vacation clothes already scattered: socks, underwear, t-shirt, oxford shirt, jeans, coiled belt, knit sweater, windbreaker, cap.",
    "story": "Every garment packs itself in true stop-motion pops. No human hands. Small pieces jump first, then mid layers fold in two or three frame-steps, then bulk pieces stack. The suitcase fills until the lid slams in three hard bites. The DESERT INN notepad flips to CHECKOUT 11AM.",
    "rhythm_structure": {
      "0-2s": "Locked wide. ROOM 214. Open navy suitcase. Vacation clothes laid out on bed, chair, floor. Subtle frame flicker already on.",
      "2-6s": "Smalls first, discrete jumps with hard shadows: white athletic socks pop-pop into the case; navy boxers fold once and hop in; faded band t-shirt snaps into a rectangle and drops; brown leather belt coils and lands on top.",
      "6-10s": "Mids in jerky folds: light-blue oxford shirt buttons itself in two frame pops then folds; dark-wash jeans fold in three hard steps and slide in; mustard knit sweater compresses and stacks. Notepad pages flip: blank → CHECKOUT 11AM handwritten → hold.",
      "10-13s": "Bulk last: olive windbreaker collapses in two bites and drops in; baseball cap flips onto the pile; leftover sock and undershirt jump from the chair. Case now visibly full.",
      "13-15s": "Lid closes in three stop-frame slams. Final still: closed navy case, brass ROOM 214, notepad frozen on CHECKOUT 11AM. End."
    }
  },
  "camera": {
    "shot_type": "One 15s locked wide of the motel room, 16:9",
    "lens_language": "Still-tripod 32mm, harsh blind stripes across bed and case",
    "camera_journey": "Locked. Only objects change position between frames.",
    "forbidden_moves": [
      "No smooth continuous motion of objects",
      "No hands, arms, or body in frame",
      "No claymation characters",
      "No camera push, pan, tilt, or handheld"
    ]
  },
  "grade": {
    "stock": "Sun-faded motel print, slight strobe between frames",
    "palette": [
      "Desert ochre walls",
      "Brass 214",
      "Navy suitcase",
      "White notepad",
      "Faded cotton, denim indigo, mustard knit, olive nylon"
    ],
    "texture": "Carpet nap, brass, paper, cotton knit, denim, leather belt, nylon shell"
  },
  "audio": {
    "native": true,
    "bed": "Highway hush, AC rattle",
    "accents": [
      "Hard per-frame fabric ticks",
      "Denim fold thumps",
      "Belt coil tap",
      "Paper flip",
      "Lid slam in three hits"
    ],
    "forbidden": [
      "No cartoon boings",
      "No music",
      "No voices"
    ]
  },
  "constraints": [
    "Readable text only: ROOM 214, DESERT INN / FLAGSTAFF, CHECKOUT 11AM",
    "True stop-motion jitter: objects teleport a few centimeters per frame, never float or slide",
    "Packing order visible: socks + underwear + t-shirt + belt, then oxford + jeans + sweater, then windbreaker + cap",
    "Suitcase must look full before the lid closes"
  ]
}`,
    },
  },
  {
    id: "pixelaigc-dunhuang-desktop-fail",
    title: "敦煌飞天桌面壁纸翻车 · H3",
    subtitle: "X · @PixelAigc · 约10秒 · 16:9",
    description:
      "GPT Image 2.5 + H3 桌面喜剧：敦煌飞天跳舞震落图标，慌忙摆回却摆歪了。",
    video: "/tutorials/pixelaigc-dunhuang-desktop-fail/demo-web.mp4",
    poster: "/tutorials/pixelaigc-dunhuang-desktop-fail/poster.jpg",
    duration: "约10秒",
    durationSec: 10,
    styleLabel: "桌面动画",
    shots: 1,
    references: 0,
    model: "MiniMax Hailuo H3 (图生视频) + GPT Image 2.5 (生图)",
    style: "图生视频 · 喜剧叙事 · 桌面动画",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/PixelAigc/status/2100051139547054118",
    sourceAuthor: "@PixelAigc",
    sourcePlatform: "X",
    sourceImpressions: 430296,
    sourceStats: { asOf: "2026-09-25", likes: 1629, reposts: 135, bookmarks: 980 },
    formats: ["破壁出屏"],
    hook: {
      structure: "静态壁纸 → 飞天走出来碰掉图标 → 捡回去 → 回到壁纸",
      opening: "看起来就是一张普通 Mac 桌面：左侧一列 App 图标，右边是敦煌飞天壁纸，前 1.5s 几乎不动。",
      openingAt: 0,
      beats: [
        { title: "关键变化", text: "约 2s 壁纸像布一样鼓起褶皱，飞天从画里走出来，左边图标全被碰掉在屏幕底部。", at: 2 },
        { title: "过程怎么推进", text: "约 3.5–7s 她蹲下把图标一个个捡起，重新摆回左侧那一列。", at: 3.5 },
        { title: "结尾怎么收", text: "约 8.5–9.5s 她回到原位摆回飞天姿势，桌面恢复成开头的样子，可循环。", at: 8.5 },
      ],
      copyThis: "开头先给 1–2 秒完全静止的真实桌面，让人以为是截图，再让壁纸人物动起来碰桌面元素。",
      approx: true,
    },
    tags: [
      "约10秒 · 桌面动画喜剧",
      "16:9 横屏",
      "H3 图生视频",
      "GPT Image 2.5 生图",
      "敦煌飞天 · 翻车叙事",
    ],
    steps: [
      {
        number: 1,
        title: "GPT Image 2.5 生成桌面壁纸静帧",
        description:
          "用 GPT Image 2.5 生成苹果电脑桌面图：左侧两列常用 APP 图标，右侧敦煌飞天舞女全身图，背景为苹果经典渐变简洁背景，16:9 比例。提示词：「生成一张苹果电脑的桌面图，左边是两列常用APP的图标，右边是一个敦煌飞天舞女全身图，背景是苹果电脑经典的渐变简洁背景，16：9」。",
      },
      {
        number: 2,
        title: "H3 图生视频 + 贴视频提示词",
        description:
          "将上一步生成的桌面图上传至 MiniMax H3，选择图生视频模式，粘贴下方完整视频提示词。重点描述飞天舞蹈动作、幕布抖动、图标震落、慌忙收拾、按歪图标、返回原位强颜欢笑的完整叙事节拍，配合背景音乐从传统敦煌音乐到诙谐风趣曲风的转变。",
      },
      {
        number: 3,
        title: "注意「图标震落又摆歪」喜剧节拍",
        description:
          "这个片子的核心是喜剧叙事节奏：飞天舞步踩动幕布 → 图标震落 → 双手捂嘴惊吓 → 停舞跑去收拾 → 匆忙按回但两个按歪 → 返回原位勉强微笑。提示词必须完整描述这一连串动作，才能让 H3 理解喜剧时间线与情绪转折。背景音乐风格变化也是关键辅助。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "飞天在桌面右侧跳舞，舞步踩动时扯动屏幕幕布，幕布抖动震落左侧图标全部掉落地上，飞天双手捂嘴惊吓表情，立即停止舞蹈，跑到左侧逐个捡起图标按回原位，但因太匆忙有两个图标按歪了，她马上返回右侧原位重新摆好开始姿势，表情勉强微笑，轻风吹来衣服和披帛飘动，固定机位，背景音乐从开始的传统敦煌音乐到后面的诙谐风趣曲风。",
      },
    ],
    constraints:
      "完整叙事节拍：舞步踩动 → 幕布抖动震落图标 → 惊吓捂嘴 → 停舞收拾 → 匆忙按回但两个按歪 → 返回原位勉强微笑；音乐风格从传统敦煌到诙谐转变；固定机位；来源 @PixelAigc / X / 418704 曝光。",
    video_prompt: {
      title: "完整 H3 图生视频提示词",
      subtitle: "MiniMax Hailuo H3 · 图生视频模式 · 完整可复制提示词",
      content: `飞天在跳舞，当她的脚踩下时，扯动了屏幕背景的幕布，幕布抖动，把左边的图标全都震落在地上，飞天吓得双手捂嘴，连忙停下舞蹈，跑到左边，把地上的图标一个个重新按回原来的位置，但由于太匆忙，有两个图标按歪了，她马上返回原来的右边位置，重新摆好开始的POSE，表情勉强微笑，轻风吹来，她的衣服和披帛飘动，固定机位，背景音乐从开始的传统敦煌音乐到后面的诙谐风趣曲风`,
    },
  },
  {
    id: "umesh-again-nature-ad",
    title: "AGAIN · 单图自然广告",
    subtitle: "X · @umesh_ai · 约30秒 · 16:9",
    description:
      "单张图片生成 30 秒自然广告：巨树雨雾景观的 15 个镜头，从水滴微距到航拍揭示，最后回归参考构图。成片 16:9 横屏，进入胶片条候选。",
    video: "/tutorials/umesh-again-nature-ad/demo-web.mp4",
    poster: "/tutorials/umesh-again-nature-ad/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实广告",
    shots: 15,
    references: 1,
    model: "图生视频 / 单图 master reference",
    style: "电影级自然广告 · 雨雾氛围",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/umesh_ai/status/2100823564505248175",
    sourceAuthor: "@umesh_ai",
    sourcePlatform: "X",
    sourceImpressions: 28296,
    sourceStats: { asOf: "2026-09-25", likes: 268, reposts: 30, bookmarks: 258 },
    formats: ["产品广告", "电影叙事"],
    hook: {
      structure: "微距开场 → 走向大树 → 触摸细节 → 全景 + 品牌字",
      opening: "草叶上挂着露珠的低角度微距，下面是积水倒影；约 2s 一滴雨落进水洼，倒影里是一棵树。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4s 揭出雾中草地上孤零零的大树；约 8s 靴子踩过草地走近，约 14s 穿橙色外套的男人背影，约 16s 手掌贴上树皮。", at: 4 },
        { title: "结尾怎么收", text: "约 25s 拉回大树全景，人变成树下一个小点，约 27s 左下角出「AGAIN / Come back.」。", at: 25 },
      ],
      copyThis: "从露珠、水滴这类小细节进，最后拉到大全景给品牌字，中间用手摸树皮这种触感镜头。",
      approx: true,
    },
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
      "Seedance 2.5 六镜头时尚大片：1960 年代意大利里维埃拉，Kodachrome 胶片感。",
    video: "/tutorials/abxxai-riviera-fashion-campaign/demo-web.mp4",
    poster: "/tutorials/abxxai-riviera-fashion-campaign/poster.jpg",
    duration: "约24秒",
    durationSec: 24,
    styleLabel: "复古胶片",
    shots: 6,
    references: 3,
    model: "Seedance 2.5",
    style: "1960s 时尚大片 · 胶片质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/abxxai/status/2100600840373535136",
    sourceAuthor: "@abxxai",
    sourcePlatform: "X",
    sourceImpressions: 52628,
    sourceStats: { asOf: "2026-09-25", likes: 375, reposts: 46, bookmarks: 594 },
    formats: ["时尚大片"],
    hook: {
      structure: "海岸四个场景 → 摘墨镜对视收尾",
      opening: "戴墨镜、系红丝巾的金发女子坐在薄荷绿老爷敞篷车上，身后是地中海海岸，第一帧就是 60 年代杂志大片的构图。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "每段约 4s：约 4s 从车门边走开，约 8s 包头巾侧脸望海上游艇，约 12s 手搭方向盘特写，约 16s 走在海边公路上回头。", at: 4 },
        { title: "结尾怎么收", text: "约 20s 大特写，她双手拉下玳瑁墨镜，约 22s 露出眼睛直视镜头。", at: 20 },
      ],
      copyThis: "红色单品（丝巾、裤子）贯穿每个场景，结尾留一个「摘墨镜看镜头」的特写收住。",
      approx: true,
    },
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
      "Seedance 2.5 纯文生动漫美食片：老上海弄堂葱油饼，从揉面到掰开酥层。",
    video: "/tutorials/shanghai-scallion-pancake/demo-web.mp4",
    poster: "/tutorials/shanghai-scallion-pancake/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "日式动漫",
    shots: 10,
    references: 0,
    model: "Seedance 2.5",
    style: "日式动漫美食 · 老上海街边",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/369Serena/status/2100887564274348245",
    sourceAuthor: "@369Serena",
    sourcePlatform: "X",
    sourceImpressions: 5024,
    sourceStats: { asOf: "2026-09-25", likes: 18, reposts: 1, bookmarks: 6 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "和面 → 擀卷 → 煎烤 → 掰开 → 成品",
      opening: "手绘动画风的老厨房，窗前一双手揉着面团，约 1s 面团被放在案板上。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4s 切葱花，约 6–8s 擀面皮、刷油、撒葱，约 9–11s 卷起再盘成圈，约 14s 下锅，约 17s 翻面，约 19s 放进炉里烤。", at: 4 },
        { title: "成品揭晓", text: "约 24–26s 双手把金黄的饼掰开，露出一层层葱花；约 27s 几块饼装在竹篮里放在窗前。", at: 24 },
      ],
      copyThis: "每个步骤只给一个近景，按做饭顺序剪；成品前加一个「掰开看层次」的特写。",
      approx: true,
    },
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
      "Seedance 2.5 纯文生动漫美食片：日式猪排饭全流程，配 80 年代城市流行乐。",
    video: "/tutorials/anime-katsudon/demo-web.mp4",
    poster: "/tutorials/anime-katsudon/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实美食",
    shots: 11,
    references: 0,
    model: "Seedance 2.5",
    style: "日式动漫美食 · 快节奏",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Goodmanprotocol/status/2098845134326808734",
    sourceAuthor: "@Goodmanprotocol",
    sourcePlatform: "X",
    sourceImpressions: 10451516,
    sourceStats: { asOf: "2026-09-25", likes: 4973, reposts: 274, bookmarks: 9563 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "拍肉 → 裹粉炸 → 切开 → 淋蛋 → 盖饭",
      opening: "开场就是锤子敲打一块生猪排的特写，约 1s 切到拍薄的肉片。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3s 裹蛋液，约 4s 滚面包糠，约 6–8s 下油锅，约 9–11s 刀切开露出白嫩切面，约 12s 洋葱汤汁，约 16s 蛋液淋上猪排。", at: 3 },
        { title: "成品揭晓", text: "约 21s 把猪排滑到米饭上，约 24s 热气腾起，约 27s 摆上一撮葱丝的整碗成品。", at: 21 },
      ],
      copyThis: "全程只拍食物和手，每步一个近景；关键节点放「切开的切面」和「淋蛋」两个特写。",
      approx: true,
    },
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
      "GPT Image 2.5 出九宫格分镜，Gemini Omni 生成日本精密部品企业品牌片。",
    video: "/tutorials/husky-kisaragi-precision-brand/demo-web.mp4",
    poster: "/tutorials/husky-kisaragi-precision-brand/poster.jpg",
    duration: "约10秒",
    durationSec: 10,
    styleLabel: "企业品牌",
    shots: 9,
    references: 1,
    model: "GPT Image 2.5 → Gemini Omni 1.1 Flash",
    style: "企业品牌片 · 实拍质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/husky__create/status/2100519237131395288",
    sourceAuthor: "@husky__create",
    sourcePlatform: "X",
    sourceImpressions: 41910,
    sourceStats: { asOf: "2026-09-25", likes: 403, reposts: 46, bookmarks: 540 },
    formats: ["产品广告"],
    hook: {
      structure: "走进工厂 → 加工/检测细节 → 团队 → 品牌字卡",
      opening: "晨光里一名女员工背影走向写着 KISARAGI 的厂房，约 1s 切到她走在两排数控机床之间。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2.5s 她戴上护目镜，约 3.5s 切削特写，约 5s 千分尺测量，约 6s 对照图纸，约 7s 团队围桌讨论，约 8.5s 她手捧零件看镜头。", at: 2.5 },
        { title: "结尾怎么收", text: "约 9s 黑底上零件特写，左侧日文字「見えない場所に、私たちの精度。」和 KISARAGI INDUSTRIES。", at: 9 },
      ],
      copyThis: "10 秒里每个镜头约 1 秒：人→机器→测量→团队，最后黑底产品 + 一句标语收。",
      approx: true,
    },
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
      "MiniMax H3 K-pop 女团 MV：三人组合，地下杂志风，主打文字包装特效。",
    video: "/tutorials/minimax-h3-mv-typography/demo-web.mp4",
    poster: "/tutorials/minimax-h3-mv-typography/poster.jpg",
    duration: "约15秒",
    durationSec: 15,
    styleLabel: "MV 字效",
    shots: 0,
    references: 0,
    model: "MiniMax Hailuo H3 / Design",
    style: "MV 文字包装特效",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/liandeli2/status/2083070647660609837",
    sourceAuthor: "@liandeli2",
    sourcePlatform: "X",
    sourceImpressions: 15846,
    sourceStats: { asOf: "2026-09-25", likes: 96, reposts: 15, bookmarks: 60 },
    formats: ["字效·片头"],
    hook: {
      structure: "巨型字 + 舞者快切",
      opening: "白底上满屏黑色粗体大字「NO」，黑发女孩站在字前；约 1s 切到另一成员特写，旁边是「SIGNAL」。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "每约 1s 换一个成员或队形，每个镜头都配一个大字：CTRL、约 5s 红色「LOST」、约 7s「ZERO MERCY」，字压在人前或人后。", at: 2 },
        { title: "结尾怎么收", text: "约 13s 三人群舞配「NO SIGNAL」，约 14s「ECLIPSE MODE」大字压在三人前面结束。", at: 13 },
      ],
      copyThis: "每个镜头配一个满屏粗体英文词，字和人前后穿插，换词就换镜头。",
      approx: true,
    },
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
      "Seedance 竖屏舞蹈动作迁移：先做灰白深度捕捉，再重建人物，音轨后期加。",
    video: "/tutorials/seedance-dance-mocap-migration/demo-v2.mp4",
    poster: "/tutorials/seedance-dance-mocap-migration/poster-v2.jpg",
    duration: "约8秒",
    durationSec: 20,
    styleLabel: "真人舞蹈",
    shots: 1,
    references: 0,
    model: "Seedance",
    style: "舞蹈动作迁移 · 竖屏",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/369Serena/status/2100805668206731346",
    sourceAuthor: "@369Serena",
    sourcePlatform: "X",
    sourceImpressions: 8707,
    sourceStats: { asOf: "2026-09-25", likes: 42, reposts: 1, bookmarks: 70 },
    formats: ["角色表演"],
    hook: {
      structure: "上班装扮 → 甩包扔工牌 → 放开跳",
      opening: "白墙前穿工牌、拎黑色托特包的女孩，画面上方一直挂着大字「我要辞职了！！！」，第一秒就交代了情绪。",
      openingAt: 0,
      beats: [
        { title: "关键变化", text: "约 1s 张开双臂，约 1.5s 把包甩到地上，约 3s 扯下挂绳工牌往上一扔。", at: 1 },
        { title: "过程怎么推进", text: "约 4s 起单人固定机位整段舞蹈，踢腿、转身、摆手，动作连贯不切镜。", at: 4 },
      ],
      copyThis: "开头先用「甩包、扔工牌」两个动作点题，再接整段舞；顶部一句大字幕全程不换。",
      approx: true,
    },
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
        video: "/tutorials/seedance-dance-mocap-migration/douyin-v2.mp4",
        poster: "/tutorials/seedance-dance-mocap-migration/douyin-poster-v2.jpg",
        aspectRatio: "9/16",
      },
      {
        number: 2,
        title: "制作灰白深度捕捉片",
        description:
          "将原片转为灰白深度图/姿态捕捉版本（用深度估计或姿态提取工具）。这是关键：必须先做灰白捕捉，不要直接将彩色原片迁移到 Seedance，否则动作会失真。",
        video: "/tutorials/seedance-dance-mocap-migration/gray-v2.mp4",
        poster: "/tutorials/seedance-dance-mocap-migration/gray-poster-v2.jpg",
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
      "竖屏顶视换装：借吊扇扇叶遮挡换 5 套衣服，动作卡音乐节拍。",
    video: "/tutorials/creative-fan-outfit-swap/demo-web.mp4",
    poster: "/tutorials/creative-fan-outfit-swap/poster.jpg",
    duration: "约28秒",
    durationSec: 28,
    styleLabel: "真人换装",
    shots: 7,
    references: 0,
    model: "未知（推测创意特效模型）",
    style: "创意换装 · 竖屏 · 固定机位",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/YangOnchain/status/2100696904648786291",
    sourceAuthor: "@YangOnchain",
    sourcePlatform: "X",
    sourceImpressions: 1689,
    sourceStats: { asOf: "2026-09-25", likes: 7, reposts: 2, bookmarks: 10 },
    formats: ["变装·换装"],
    hook: {
      structure: "俯拍躺姿 · 吊扇扫过一次换一套",
      opening: "正上方俯拍，女孩躺在地毯上；约 1s 一片木色吊扇叶从画面前扫过，约 2s 旁边出现红白竖排字「灰调日常」。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "扇叶每扫过一次换一套：约 4s「可可学院」、约 7s「薄荷假日」、约 11s「蓝莓甜酷」、约 15s「条纹叛逆」、约 19s「周末出逃」，包和鞋也跟着换。", at: 4 },
        { title: "结尾怎么收", text: "最后一套不再换，约 25s 她举起手机比耶自拍收尾。", at: 25 },
      ],
      copyThis: "用吊扇叶挡住画面的一瞬间换装，每套配一个竖排小标题写风格+单品。",
      approx: true,
    },
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
    durationSec: 10,
    styleLabel: "写实广告",
    shots: 5,
    references: 1,
    model: "推测家电广告模型",
    style: "奢华产品广告 · 竖屏",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/HeyRu0by/status/2101186330025922663",
    sourceAuthor: "@HeyRu0by",
    sourcePlatform: "X",
    sourceImpressions: 16136,
    sourceStats: { asOf: "2026-09-25", likes: 237, reposts: 35, bookmarks: 152 },
    formats: ["产品广告"],
    hook: {
      structure: "推近开门 → 食材微距 → 冷气流动 → 标语",
      opening: "昏暗的高级厨房里一台黑色对开门冰箱，镜头缓缓推近，前 1.5s 只有门缝的光。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2.5s 冰箱门打开，冷雾涌出；约 4s 生菜、约 4.5s 带水珠的番茄、约 5s 玻璃瓶牛奶的微距。", at: 2.5 },
        { title: "关键画面", text: "约 6–7.5s 蓝色光带在各层架子间流动，把「保鲜气流」画出来。", at: 6 },
        { title: "结尾怎么收", text: "约 8s 门关上，约 8.5s 冰箱上方出「FRESHNESS.」，约 9s 补上「PERFECTED.」。", at: 8.5 },
      ],
      copyThis: "把看不见的卖点（冷气）做成可见的蓝色光带，标语分两拍出字。",
      approx: true,
    },
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
      "纯文生写实社媒片：整脊诊所一次完整治疗，真实接触物理与自然微表情。",
    video: "/tutorials/chiropractic-clinic-social/demo-web.mp4",
    poster: "/tutorials/chiropractic-clinic-social/poster.jpg",
    duration: "约30秒",
    durationSec: 30,
    styleLabel: "真人风",
    shots: 7,
    references: 0,
    model: "Seedance 2.5（推测）",
    style: "写实观察式 · 诊所社媒",
    aspectRatio: "16/9",
    sourceUrl: "https://evolink.ai/seedance-2-5-prompts",
    sourceAuthor: "@bmx_ai13",
    sourcePlatform: "Evolink",
    formats: ["产品广告"],
    hook: {
      structure: "迎客 → 颈部调整 → 背部按压 → 起身放松",
      opening: "明亮的诊所大厅全景，医生迎上前和患者握手，第一秒交代场景和人物关系。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4s 患者坐着、医生手放肩上；约 8s 侧面近景调整颈部，约 11s 患者露出笑容；约 12s 趴在理疗床上按压背部，约 17s 切手部特写。", at: 4 },
        { title: "结尾怎么收", text: "约 22s 仰躺头部调整，约 26s 患者坐起转动肩膀，一脸轻松，医生站在身后。", at: 26 },
      ],
      copyThis: "按一次就诊流程排镜头：握手→坐姿→趴→躺→坐起，每步给一个手部或表情近景。",
      approx: true,
    },
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
      "纯文生战斗片：暮色草原上游牧女王骑射破阵，真实骑术，无超能力。",
    video: "/tutorials/steppe-warrior-queen/demo-web-v2.mp4",
    poster: "/tutorials/steppe-warrior-queen/poster-v2.jpg",
    duration: "约30秒",
    durationSec: 30,
    styleLabel: "史诗写实",
    shots: 7,
    references: 0,
    model: "Luma AI（推测）",
    style: "史诗骑战 · 暮光草原",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/azed_ai/status/2101309410434044158",
    sourceAuthor: "@azed_ai",
    sourcePlatform: "X",
    sourceImpressions: 26219,
    sourceStats: { asOf: "2026-09-25", likes: 372, reposts: 35, bookmarks: 325 },
    formats: ["电影叙事"],
    hook: {
      structure: "驰骋 → 骑射 → 冲阵 → 正面收束",
      opening: "暮色草原，侧跟镜头贴着栗色战马狂奔，马背上长发女战士，远处一排骑兵和烟尘——第一帧就是战场。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 推近脸部，约 6–11s 马背上拉弓连射；约 12s 起冲进敌骑阵，约 16s 穿过燃烧的辎重车，约 20s 起在扬尘里混战。", at: 2 },
        { title: "结尾怎么收", text: "约 24s 举弯刀冲向对面骑兵，约 27s 正面骑行逼近，约 28s 停在镜头前，火光与旗帜作背景，满脸尘土直视镜头。", at: 24 },
      ],
      copyThis: "每段只给一个动作（奔、射、冲、挥刀），全程暮色逆光+扬尘统一质感，最后收在正面近景。",
      approx: true,
    },
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
      "Seedance 2.5 纯文生生活片：深夜戴耳机煮泡面，食物特写配 Lo-Fi 与 ASMR。",
    video: "/tutorials/late-night-ramen/demo-web.mp4",
    poster: "/tutorials/late-night-ramen/poster.jpg",
    duration: "约29秒",
    durationSec: 29,
    styleLabel: "暖光写实",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "暖光深夜 · Lo-Fi + ASMR",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Shorelyn_/status/2099013056013672761",
    sourceAuthor: "@Shorelyn_",
    sourcePlatform: "X",
    sourceImpressions: 2488,
    sourceStats: { asOf: "2026-09-25", likes: 59, reposts: 10, bookmarks: 31 },
    formats: ["拆装·制作过程"],
    hook: {
      structure: "人物 → 食物特写煮面 → 吃第一口 → 字幕收",
      opening: "深夜昏暗房间，戴白色耳机的女孩坐在小桌前，旁边一只电水壶和台灯——安静的正面构图先立氛围。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3s 撕开红色调料包，约 5–7s 粉末倒进面饼、热水冲下，约 8s 俯拍面碗，约 11–12s 打入鸡蛋，中间穿插她等待的镜头。", at: 3 },
        { title: "成品揭晓", text: "约 19s 荷包蛋泡面特写，约 20–22s 筷子挑起面条拉丝，约 23–25s 她低头吸面。", at: 19 },
        { title: "结尾怎么收", text: "约 26s 回到开场正面构图，闭眼嚼面，字幕「深夜裡，最溫柔的一口。」", at: 26 },
      ],
      copyThis: "开头和结尾用同一个正面机位首尾呼应，中间全是食物大特写，最后一句字幕点题。",
      approx: true,
    },
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
      "Gemini Omni + Seedance 2.0：黑棚里黑手套「遥控」白色无脸男模换四套造型。",
    video: "/tutorials/invisible-fitting-room/demo-web.mp4",
    poster: "/tutorials/invisible-fitting-room/poster.jpg",
    duration: "10 秒",
    durationSec: 10,
    styleLabel: "时装展示",
    shots: 5,
    references: 1,
    model: "Gemini Omni · Seedance 2.0",
    style: "时装展示 · 黑棚遥控",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2101361201271677294",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 556,
    sourceStats: { asOf: "2026-09-25", likes: 5, reposts: 0, bookmarks: 16 },
    formats: ["变装·换装", "时尚大片"],
    hook: {
      structure: "四套造型轮换 → 终套 → 牵手挡镜",
      opening: "黑棚里一个白色无脸假人只穿短裤，约 0.5s 两只黑手套一挥，衬衫和裤子从空中飞来往身上套。",
      openingAt: 0,
      beats: [
        { title: "几套怎么切换", text: "约 1.5s 衣服卸落在地，约 2.5s 换皮夹克，约 3.5–4s 长外套绕身套上，约 4.5s 换马甲；每套卸下都堆在脚边。", at: 1.5 },
        { title: "成品揭晓", text: "约 6s 终套到位：深棕长外套+橙色马甲+领带，手套在两侧微调，约 7s 定格全身。", at: 6 },
        { title: "结尾怎么收", text: "约 8.5s 手伸进来牵住假人往前走，约 9.5s 外套和马甲贴满画面，胸针特写收尾。", at: 8.5 },
      ],
      copyThis: "机位全程不动，只有衣服在飞；每套卸下的衣服堆在地上，观众能数出换了几套。",
      approx: true,
    },
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
    id: "krevix-luxury-sofa-carousel",
    title: "奢侈沙发轮播选型 · 黑手套 POV",
    subtitle: "X · KrevixAi · 10秒 · 16:9",
    description:
      "Gemini Omni 第一人称家具广告：黑手套滑选沙发，整个客厅围绕它拼装成形。",
    video: "/tutorials/krevix-luxury-sofa-carousel/demo-web.mp4",
    poster: "/tutorials/krevix-luxury-sofa-carousel/poster.jpg",
    duration: "10 秒",
    durationSec: 10,
    styleLabel: "写实广告",
    shots: 6,
    references: 1,
    model: "Gemini Omni",
    style: "家具商业 · POV 遥控",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2099935072010822040",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 12113,
    sourceStats: { asOf: "2026-09-25", likes: 254, reposts: 36, bookmarks: 341 },
    formats: ["产品广告", "拆装·制作过程"],
    hook: {
      structure: "滑动选款 → 选定 → 房间长出来",
      opening: "黑底上一张白色毛绒沙发，黑手套一划，约 1s 一排沙发像转盘一样横着滑过——像在手机上刷款式。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2.5s 滑到焦糖色皮沙发，约 3.5s 停在灰褐色布艺沙发；约 5s 手套按压坐垫，给面料特写。", at: 2.5 },
        { title: "成品揭晓", text: "约 6s 沙发落到木地台上，约 6.5–8s 地毯、墙面、茶几和单椅依次出现，约 9s 成为一整间客厅。", at: 6 },
      ],
      copyThis: "用手套横划当「翻页」选款，选定后再让整间房围着沙发长出来。",
      approx: true,
    },
    tags: [
      "10 秒 · 6 节拍 · 第一人称 POV",
      "1 张分镜静帧",
      "Gemini Omni",
      "家具商业 · POV 遥控",
    ],
    steps: [
      {
        number: 1,
        title: "上传分镜图到 Gemini Omni",
        description:
          "打开 Gemini Omni Create Video 功能,先上传分镜静帧图(storyboard.jpg)作为视觉参考。设置:10 秒 · 16:9。",
      },
      {
        number: 2,
        title: "粘贴完整视频提示词",
        description:
          "在提示词框粘贴下方完整英文提示词。核心:26–28mm 第一人称男性 POV;黑手套滑动轮播;真实物理惯性;hero 沙发保持 100% 同一件;房间物理拼装而非沙发变形。",
      },
      {
        number: 3,
        title: "强调 hero 沙发全程不变",
        description:
          "关键约束:第四款 taupe/mocha 沙发选定后,这件沙发必须保持 100% 相同外观直到片尾,房间是围绕它物理组装,而不是沙发本身变形或替换。真实重量、惯性、摩擦力和机械停止感,禁止魔法、变形、传送、粒子、烟雾。",
      },
    ],
    references_detail: [
      {
        id: "storyboard",
        number: "分镜静帧",
        title: "15 格分镜参考",
        subtitle: "分镜静帧(作者帖内配图) · 视觉参考",
        image: "/tutorials/krevix-luxury-sofa-carousel/refs/storyboard.jpg",
        prompt: "",
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "00:00–00:08 秒:white-cream cloud 沙发居中悬浮,黑手套滑动,沙发快速左旋同时 ivory modular 沙发从右飞入停中;再滑动换 curved latte boucle 沙发;再滑动换 warm caramel leather 沙发。教练提示:固定 26–28mm 第一人称男性 POV 黑棚;每次滑动触发真实轨道惯性,不是瞬移。",
      },
      {
        number: 2,
        description:
          "00:32–00:42 秒:第四款 taupe/mocha hero 沙发缓慢飞入、旋转到正面并带重量感停止。教练提示:这是全片 hero 沙发,后续必须保持 100% 同款同外观,不能变形或替换。",
      },
      {
        number: 3,
        description:
          "00:42–00:50 秒:张开手掌做 STOP 手势冻结轮播,其他候选沙发消失到远处。教练提示:手势触发机械停止,不是魔法光效。",
      },
      {
        number: 4,
        description:
          "00:50–00:58 秒:手掌按压并滑过 hero 沙发扶手,面料真实压缩回弹。教练提示:布料物理响应,可见压痕和恢复。",
      },
      {
        number: 5,
        description:
          "00:58–00:66 秒:沙发落地;walnut 地板从底部滑入对齐,taupe 地毯向前展开铺平。教练提示:地面是滑入沙发下方,不是沙发移动。",
      },
      {
        number: 6,
        description:
          "00:66–00:85 秒:保持 hero 沙发 100% 静止不变,奢华客厅围绕它物理组装——walnut 和 travertine 墙面滑入,coffee table 和 latte 椅子进场,置物架锁定,吊灯降下,窗帘和装饰物归位。教练提示:房间组件物理滑入/降下/锁定,hero 沙发绝不变形、变色或替换。",
      },
      {
        number: 7,
        description:
          "00:85–01:00 秒:全景窗打开,暖色日光涌入完整的 quiet-luxury 室内;镜头缓慢后拉展示全貌。教练提示:真实质量、惯性、摩擦力和机械停止;禁魔法、变形、传送、粒子、烟雾、UI、文字、logo、人物、剪辑或机位变化。",
      },
    ],
    constraints:
      "26–28mm 第一人称男性 POV;黑棚黑手套;真实物理惯性摩擦;hero 沙发全程 100% 同一件;房间物理拼装而非沙发变形;禁魔法/粒子/传送/变形/UI/剪辑/机位变化;来源:KrevixAi/Gemini Omni。",
    video_prompt: {
      title: "LUXURY SOFA CAROUSEL · 10s · 16:9 · First-person POV",
      subtitle: "Gemini Omni · Storyboard uploaded first, then prompt",
      content: `Create a 10-second ultra-photorealistic 16:9 luxury furniture commercial, one continuous first-person male POV, 26–28mm lens, black studio, matte-black leather gloves, realistic physics only. 0–0.8s: white-cream cloud sofa floats centered; hand swipes left. 0.8–1.6s: sofa rapidly orbits left as a warm ivory modular sofa arrives from right and stops center. 1.6–2.4s: another swipe replaces it with a curved latte boucle sofa. 2.4–3.2s: swipe brings in a warm caramel leather sofa. 3.2–4.2s: final taupe/mocha hero sofa arrives slowly, rotates frontal and stops with heavy inertia. 4.2–5.0s: open-palm STOP gesture freezes the carousel; other sofas disappear into distance. 5.0–5.8s: hand presses and slides across hero sofa armrest, realistic fabric compression. 5.8–6.6s: sofa lands; walnut floor slides beneath it and taupe rug unrolls. 6.6–8.5s: KEEP THE EXACT SAME HERO SOFA stationary while the luxury room physically assembles around it—walnut and travertine walls slide in, coffee table and latte chairs enter, shelving locks into place, pendant descends, curtains and decor move into position. 8.5–10s: panoramic window opens, warm daylight floods the completed quiet-luxury interior; slow dolly backward reveals the full room. Hero sofa remains 100% identical throughout. Real mass, inertia, friction and mechanical stops; no magic, morphing, teleportation, particles, smoke, UI, text, logos, people, cuts or camera-angle changes.`,
    },
  },
  {
    id: "watch-her-reset-73",
    title: "两次失误后的复位",
    subtitle: "Pollo · Seedance 2.5 · 30秒",
    description:
      "Seedance 2.5 情绪短片：麦田射手两次失误后闭眼调整，第三发击碎瓶子。",
    video: "/tutorials/watch-her-reset-73/demo-web.mp4",
    poster: "/tutorials/watch-her-reset-73/poster.jpg",
    duration: "30 秒",
    durationSec: 30,
    styleLabel: "电影感",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "电影感 · 黄金时段",
    aspectRatio: "16/9",
    sourcePlatform: "Pollo",
    formats: ["角色表演"],
    hook: {
      structure: "开枪不中 → 闭眼复位 → 击碎瓶子 → 余韵",
      opening: "黄金时段的麦田，女人站在中央举枪瞄准，远处一排空瓶——广角先交代射手和目标。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3–10s 肩后中景持枪瞄准射击，远处瓶子一直立着没倒；约 11s 切脸部大特写，她闭眼，约 12s 睁眼。", at: 3 },
        { title: "关键变化", text: "约 13–17s 扳机和手指的极近特写，慢慢压下；约 18–21s 瓶子特写被击碎，玻璃慢动作飞散。", at: 13 },
        { title: "结尾怎么收", text: "约 25s 回到麦田远景，她垂下枪站着，约 28s 逆光剪影收尾。", at: 25 },
      ],
      copyThis: "情绪转折用两个特写讲：闭眼的脸 → 扣扳机的手指，只有最后命中那一枪给慢动作。",
      approx: true,
    },
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
      "Seedance 2.5 观众 iPhone 视角：一镜记录体育场说唱。原提示词有截断。",
    video: "/tutorials/pov-stadium-rap-137/demo-web.mp4",
    poster: "/tutorials/pov-stadium-rap-137/poster.jpg",
    duration: "30 秒",
    durationSec: 30,
    styleLabel: "手机实拍",
    shots: 5,
    references: 0,
    model: "Seedance 2.5",
    style: "iPhone POV · 现场感",
    aspectRatio: "3/4",
    sourcePlatform: "Pollo",
    formats: ["手机POV·Vlog"],
    hook: {
      structure: "观众手机视角 → 跟拍表演 → 拉开全场",
      opening: "体育场人群里一片举起的手机，约 1s 镜头直接怼近前排一部手机屏幕，失焦穿过去——点明「观众 iPhone 视角」。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2.5s 焦点落到台上白衣说唱者，之后竖屏手持一路跟着他：约 5–17s 边唱边做手势，约 18–20s 蹲低。", at: 2.5 },
        { title: "关键变化", text: "约 21s 站起抬手指向看台，约 23s 高举手臂，约 24s 镜头拉远，约 25s 甩镜。", at: 21 },
        { title: "结尾怎么收", text: "约 26s 起换成体育场高位全景，满场灯海，人物已看不见。", at: 26 },
      ],
      copyThis: "开头先拍「别人的手机」再穿过去对焦舞台，一下子交代这是观众在拍。",
      approx: true,
    },
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
      "Seedance 2.5 一镜到底：黑大衣人走过六个不同色调的房间。原提示词有截断。",
    video: "/tutorials/seedance-six-rooms-89/demo-web.mp4",
    poster: "/tutorials/seedance-six-rooms-89/poster.jpg",
    duration: "30 秒",
    durationSec: 30,
    styleLabel: "电影感",
    shots: 1,
    references: 0,
    model: "Seedance 2.5",
    style: "一镜到底 · 空间变换",
    aspectRatio: "16/9",
    sourcePlatform: "Pollo",
    formats: ["电影叙事"],
    hook: {
      structure: "推门 → 六个房间逐个穿过 → 白房间 → 品牌卡",
      opening: "穿黑大衣的男人从门口走进一间刺眼白光的房间——第一帧就是「门」，暗示接下来要一间间穿过去。",
      openingAt: 0,
      beats: [
        { title: "几个房间怎么切换", text: "约 2s 蓝调房里被人扑倒又撂倒，约 6s 向日葵房有卡通画家，约 11s 暗房，约 14s 花海房，约 17s 水下房，约 21s 烛光派对；每次都借门框遮挡换场。", at: 2 },
        { title: "结尾怎么收", text: "约 24s 走进一间全白空房，约 27s 停住，约 28s 黑底「seedance」字卡。", at: 24 },
      ],
      copyThis: "人物一直往一个方向走，每过一道门框就换一个世界，门框就是转场。",
      approx: true,
    },
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
      "Seedance 2.5 荒诞纪录片风：麦当劳员工在停车场大战巨型汉堡怪兽。",
    video: "/tutorials/burger-monster-battle-185/demo-web.mp4",
    poster: "/tutorials/burger-monster-battle-185/poster.jpg",
    duration: "30 秒",
    durationSec: 30,
    styleLabel: "荒诞写实",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "iPhone 纪录片 · 荒诞魔幻",
    aspectRatio: "1/1",
    sourcePlatform: "Pollo",
    formats: ["电影叙事", "手机POV·Vlog"],
    hook: {
      structure: "上半成片 + 下半提示词滚动 → 怪兽出现 → 薯条反击 → 品牌收",
      opening: "分屏：上半是端着汉堡薯条托盘的麦当劳女店员走出门店，下半是参考图和逐句滚动的英文提示词。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "她在停车场找位置，约 11s 背后地面裂开、巨型汉堡怪兽冒出来，车辆翻飞，她神色平静。", at: 11 },
        { title: "高潮", text: "约 17s 她拿起一根薯条发光，约 19–21s 成群发光薯条绕着她飞，约 23s 射向怪兽，怪兽炸开。", at: 17 },
        { title: "结尾怎么收", text: "约 25s 顾客回来，约 28s 她咬一口巨无霸，约 29s 麦当劳 M 标出现。下半提示词始终与画面同步。", at: 25 },
      ],
      copyThis: "下半屏按画面进度滚动对应的提示词句子，观众边看成片边对照每句写了什么。",
      approx: true,
    },
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
      "Seedance 2.5 纯文生灾难片：装甲车在巨型沙尘暴中逃亡，飞跃沙丘后切黑。",
    video: "/tutorials/epic-desert-scene-38/demo-web.mp4",
    poster: "/tutorials/epic-desert-scene-38/poster.jpg",
    duration: "15 秒",
    durationSec: 15,
    styleLabel: "史诗写实",
    shots: 3,
    references: 0,
    model: "Seedance 2.5",
    style: "IMAX 史诗 · 灾难动作",
    aspectRatio: "16/9",
    sourcePlatform: "Pollo",
    formats: ["电影叙事"],
    hook: {
      structure: "远景立威胁 → 车内近景 → 车被卷上天",
      opening: "广角沙漠，巨大的黑色沙暴墙压在地平线上，一列小小的车队沿沙丘脊线奔逃——尺度对比先把危险立住。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 4s 切车内：戴头盔护目镜的司机在裂开的挡风玻璃后嘶吼；约 6–7s 驾驶位视角，玻璃继续炸裂，前方有车。", at: 4 },
        { title: "关键变化", text: "约 9s 一辆装甲车被卷离地面，约 12s 沙暴里闪电劈下，车悬在半空；约 14s 切黑。", at: 9 },
      ],
      copyThis: "先用超远景给「沙暴 vs 小车」的尺度，再切到司机脸和驾驶位，最后回到外部看车被卷走。",
      approx: true,
    },
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
      "Seedance 2.5：首尔黄金时刻，广告牌里的模特把芒果汁递到画外真人手里。",
    video: "/tutorials/seoul-aurora-mango-billboard/demo-web.mp4",
    poster: "/tutorials/seoul-aurora-mango-billboard/poster.jpg",
    duration: "10 秒",
    durationSec: 10,
    styleLabel: "写实广告",
    shots: 5,
    references: 1,
    model: "Seedance 2.5",
    style: "真人摄影 · 街头广告",
    aspectRatio: "16/9",
    formats: ["破壁出屏", "产品广告"],
    hook: {
      structure: "街景广告牌 → 伸手 → 递瓶出屏",
      opening: "城市街口的巨型广告牌上，女人侧躺着，旁边写 AURORA MANGO，下方黄色出租车和行人来往——看着就是普通户外广告。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 6.5s 她在屏幕里拿起一瓶芒果汁，约 7s 镜头前伸进一只手。", at: 6.5 },
        { title: "关键变化", text: "约 7.5s 瓶子从屏幕里递到了现实的手中，约 8–10s 手握 AURORA MANGO 瓶身占据前景，广告牌作背景。", at: 7.5 },
      ],
      copyThis: "前 6 秒完全当普通街景拍，最后 2 秒让产品从广告牌「递」到镜头前的手里。",
      approx: true,
    },
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
      "Seedance 2.5 一镜到底：时代广场变形 LED 屏里的模特探身，把面霜递给路人。",
    video: "/tutorials/hr-replasty-anamorphic-billboard/demo-web.mp4",
    poster: "/tutorials/hr-replasty-anamorphic-billboard/poster.jpg",
    duration: "30 秒",
    durationSec: 30,
    styleLabel: "写实广告",
    shots: 6,
    references: 3,
    model: "Seedance 2.5 · 连续一镜",
    style: "真人摄影 · 户外变形广告",
    aspectRatio: "16/9",
    formats: ["破壁出屏", "产品广告"],
    hook: {
      structure: "3D 广告牌表演 → 递出产品 → 接住 → 欢呼",
      opening: "雨夜时代广场式街口，转角裸眼 3D 大屏里女人侧躺，像要从屏幕里探出来；下方满街黄色出租车。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2–16s 她在屏里换姿势：坐起、站立、张开双臂、跪姿、伸懒腰，始终贴着屏幕边缘表演。", at: 2 },
        { title: "关键变化", text: "约 18s 她捧出一个黑色罐子伸出屏外，约 22s 镜头前的手伸上去，约 23s 接住，罐子到了现实里。", at: 18 },
        { title: "结尾怎么收", text: "约 25s 她在屏里举手欢呼，手握罐子在前景，约 28s 她退回屏中站好。", at: 25 },
      ],
      copyThis: "前半段只做「人在转角屏里」的立体感，产品留到后半从屏幕递到观众手里。",
      approx: true,
    },
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
      "Seedance 2.5 一镜到底：面无表情的姜色小猫坐摩托后座，在金门大桥上扫射追兵。",
    video: "/tutorials/ride-or-paws/demo-web.mp4",
    poster: "/tutorials/ride-or-paws/poster.jpg",
    duration: "28 秒",
    durationSec: 27,
    styleLabel: "写实动作",
    shots: 7,
    references: 3,
    model: "Seedance 2.5 · 连续一镜",
    style: "真人摄影 · 动作追逐",
    aspectRatio: "16/9",
    formats: ["电影叙事"],
    hook: {
      structure: "猫坐摩托 → 开火 → 爆炸 → 继续狂飙",
      opening: "金门大桥上，一只橘猫坐在摩托后座、抱着一把枪，旁边黑衣车手紧追——第一秒就是荒诞动作片设定。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 镜头侧倾，追兵翻车；约 4–5s 猫朝追兵开枪，约 8–9s 连续开火，约 11s 扛起火箭筒。", at: 2 },
        { title: "高潮", text: "约 13s 火箭弹命中，画面被爆炸火球填满；约 16s 起换枪继续射击，桥塔在背景里掠过。", at: 13 },
        { title: "结尾怎么收", text: "约 25s 又一团爆炸火光吞没画面，约 26s 猫穿过烟雾继续向前。", at: 25 },
      ],
      copyThis: "机位一直贴在摩托后方跟着猫，所有追车、爆炸都在猫身后背景里发生。",
      approx: true,
    },
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
    durationSec: 30,
    styleLabel: "真人版卡通",
    shots: 13,
    references: 5,
    model: "Seedance 2.5 · 16:9",
    style: "真人摄影质感",
    aspectRatio: "16/9",
    formats: ["电影叙事"],
    hook: {
      structure: "画隧道 → 老鼠穿过 → 猫追 → 撞墙",
      opening: "路面低机位，一把刷子在碎石路上刷出黄色中线，一只猫握着刷子倒退着刷——开场就是动画式的恶作剧。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 猫用红色长柄滚筒在岩壁上画，约 5–8s 画出一个带黄线的隧道口；约 9s 躲到石头后，约 11–13s 老鼠沿路跑来。", at: 2 },
        { title: "反转", text: "约 14s 老鼠直接跑进画出来的隧道，约 16s 镜头跟进隧道里，是真的通的；约 18–20s 猫在石头后惊呆。", at: 14 },
        { title: "结尾怎么收", text: "约 25s 猫冲刺追进去，约 26.5s 整只糊在隧道画上，约 28–29s 顺着墙滑下来瘫在地上。", at: 25 },
      ],
      copyThis: "照搬经典卡通笑点：同一个画出来的隧道，老鼠能进，猫一头撞墙。",
      approx: true,
    },
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
  {
    id: "crazykaomei-furniture-blindbox-asmr",
    title: "粉色毛绒沙发盲盒选款 · ASMR 电商",
    subtitle: "X · @CrazyKaomei · Google Flow (Omni Flash) · 10秒 · 16:9",
    description:
      "Google Flow 电商 ASMR：白手套滑选粉色毛绒沙发，按压后铺开整个粉色客厅。",
    video: "/tutorials/crazykaomei-furniture-blindbox-asmr/demo-web.mp4",
    poster: "/tutorials/crazykaomei-furniture-blindbox-asmr/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "产品 CGI",
    shots: 1,
    references: 1,
    model: "Google Flow (Omni Flash)",
    style: "商业产品摄影 · ASMR 质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/CrazyKaomei/status/2101842849079923104",
    sourceAuthor: "@CrazyKaomei",
    sourcePlatform: "X",
    sourceImpressions: 5739,
    sourceStats: { asOf: "2026-09-25", likes: 41, reposts: 8, bookmarks: 51 },
    formats: ["产品广告", "拆装·制作过程"],
    hook: {
      structure: "横划选款 → 选定毛绒沙发 → 房间长出来",
      opening: "白色圆形取景里，白手套伸进来划过一张粉色扶手椅，约 1s 换成旋转木马家具，像拆盲盒一样一款款翻。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 2s 翻到猫耳懒人沙发，约 3s 停在玫红长毛沙发；约 4.5s 手套抚摸长毛，其他椅子飞离画面，约 5s 毛发特写。", at: 2 },
        { title: "成品揭晓", text: "约 6s 沙发落到地台上，约 6.5–8.5s 粉色地毯、兔耳椅、墙面柜依次出现，约 9s 窗外景色打开，成为整间粉色客厅。", at: 6 },
      ],
      copyThis: "手套划一下换一款，选定后先给摸毛的触感特写，再让整间房围绕它搭起来。",
      approx: true,
    },
    tags: [
      "10秒 · 一镜到底",
      "16:9 横屏",
      "Google Flow",
      "ASMR 商业摄影",
      "产品电商视频",
    ],
    steps: [
      {
        number: 1,
        title: "先文生 12 格故事板",
        description:
          "用完整的 T2I 提示词生成 12 格分镜板:迷你粉色沙发产品系列、白手套操作、纯白工作室、商业产品摄影风格。参考图展示分镜布局。",
      },
      {
        number: 2,
        title: "上传故事板,选择图生视频模式",
        description:
          "在 Google Flow 选择 Image-to-Video,上传生成的 12 格故事板作为唯一参考图。",
      },
      {
        number: 3,
        title: "粘贴完整 I2V 提示词",
        description:
          "使用下方完整的 10 秒图生视频提示词。关键:手套滑动挑选→定格→深按毛绒→场景组装→全景窗开启。真实物理、无魔法变形、无剪辑。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "参考 01",
        title: "12 格故事板",
        subtitle: "T2I 生成 · 1200×670",
        image: "/tutorials/crazykaomei-furniture-blindbox-asmr/ref-storyboard.jpg",
        prompt: `12-panel grid storyboard, product commercial shot, ultra photorealistic, 8k, sharp focus, soft clean studio lighting, white seamless background, series of miniature pink fluffy fur sofas, matte white leather gloved human hands interacting with furniture, timeline numbered frames,
Frame1: small pink plush single sofa, hand pointing
Frame2: rotating display turntable with multiple tiny pink plush sofas, gloved hand pointing
Frame3: pink bunny ear plush armchair
Frame4: pink cat ear round fluffy sofa
Frame5: large pink bubble marshmallow long-fur hero sofa
Frame6: open palm stop gesture in front of hero sofa
Frame7: close-up shot, white gloved hand pressing and sinking into pink fluffy fur fabric, realistic fur compression
Frame8: hero pink bubble sofa placed on white platform
Frame9: hero sofa inside minimalist pastel room, curved blue checkered mirror
Frame10: same hero sofa, matching pink bunny chair, cloud-shaped coffee table
Frame11: full room set, small doll figurines, wall art, pastel decor
Frame12: complete cute living room with hero sofa, panoramic window, soft daylight
All sofas are thick long pink faux lama fur, puffy segmented bubble shape, cute miniature dollhouse furniture style, clean white studio, soft shadow, commercial furniture photography, no distortion, no text artifacts, clean composition`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–0.8s:淡粉模块扶手椅浮在中央;白手套向左滑动",
      },
      {
        number: 2,
        description:
          "0.8–1.6s:扶手椅快速左旋,迷你天鹅绒粉色沙发(心形&兔子形)从右滑入并定在中央",
      },
      {
        number: 3,
        description:
          "1.6–2.4s:又一次滑动,替换成毛茸玫瑰粉豆袋猫耳沙发",
      },
      {
        number: 4,
        description:
          "2.4–3.2s:最后一次滑动,鲜洋红模块长毛沙发滑入",
      },
      {
        number: 5,
        description:
          "3.2–4.2s:英雄毛绒洋红沙发缓慢旋转正面、惯性停住",
      },
      {
        number: 6,
        description:
          "4.2–5.0s:白手套张开手掌做STOP手势,旋转木马冻结;其他单品消失在远处",
      },
      {
        number: 7,
        description:
          "5.0–5.8s:白手套深按并滑过毛绒沙发扶手,展示真实毛绒压缩与柔软物理",
      },
      {
        number: 8,
        description:
          "5.8–6.6s:沙发落地;白色地板从下方滑入,浅粉地毯铺开",
      },
      {
        number: 9,
        description:
          "6.6–8.5s:英雄毛绒粉沙发 100% 静止不动,极简房间组装——蓝色镜子、白咖啡桌和兔子椅滑入就位,搁板锁定",
      },
      {
        number: 10,
        description:
          "8.5–10s:大全景窗打开,明亮日光淹没完成的鲜艳粉色室内;摄影机缓慢后退展示全房间",
      },
    ],
    video_prompt: {
      title: "Pink Fluffy Sofa Blind-Box Pick · ASMR Furniture Commerce · 10s",
      subtitle: "Google Flow (Omni Flash) · 16:9 · I2V from 12-panel storyboard",
      content: `平台：Google Flow（Omni Flash 模型）

1、先文生图，生成详细的故事分镜板
12-panel grid storyboard, product commercial shot, ultra photorealistic, 8k, sharp focus, soft clean studio lighting, white seamless background, series of miniature pink fluffy fur sofas, matte white leather gloved human hands interacting with furniture, timeline numbered frames,
Frame1: small pink plush single sofa, hand pointing
Frame2: rotating display turntable with multiple tiny pink plush sofas, gloved hand pointing
Frame3: pink bunny ear plush armchair
Frame4: pink cat ear round fluffy sofa
Frame5: large pink bubble marshmallow long-fur hero sofa
Frame6: open palm stop gesture in front of hero sofa
Frame7: close-up shot, white gloved hand pressing and sinking into pink fluffy fur fabric, realistic fur compression
Frame8: hero pink bubble sofa placed on white platform
Frame9: hero sofa inside minimalist pastel room, curved blue checkered mirror
Frame10: same hero sofa, matching pink bunny chair, cloud-shaped coffee table
Frame11: full room set, small doll figurines, wall art, pastel decor
Frame12: complete cute living room with hero sofa, panoramic window, soft daylight
All sofas are thick long pink faux lama fur, puffy segmented bubble shape, cute miniature dollhouse furniture style, clean white studio, soft shadow, commercial furniture photography, no distortion, no text artifacts, clean composition

2、再引用生成的故事板，选择图生视频模式——
Ultra-photorealistic 10-second 16:9 luxury furniture commercial, one continuous first-person female POV, 26–28mm lens, bright white studio background, white silk gloves, realistic physics only. 

0–0.8s: A sleek pale pink modular armchair floats centered; a white-gloved hand swipes left. 
0.8–1.6s: The armchair rapidly orbits left as a carousel with miniature velvet pink armchairs (heart and bunny shapes) arrives from the right and stops center. 
1.6–2.4s: Another swipe replaces it with a fluffy rose-pink beanbag chair with cat ears. 
2.4–3.2s: A final swipe brings in a vibrant magenta modular sofa with long-pile fluffy fur. 
3.2–4.2s: The hero fluffy magenta sofa arrives slowly, rotates frontal, and stops with heavy inertia. 
4.2–5.0s: An open-palm STOP gesture freezes the carousel; other pieces disappear into the distance. 
5.0–5.8s: A white-gloved hand presses deep and slides across the fluffy sofa armrest, showing realistic fur compression and soft physics. 
5.8–6.6s: The sofa lands; a sleek white floor slides beneath it and a light pink rug unrolls. 
6.6–8.5s: The hero fluffy pink sofa stays 100% stationary as the minimalist room assembles—sleek blue mirrors, white coffee tables, and bunny chairs slide into place and shelving locks in. 
8.5–10s: A large panoramic window opens, bright daylight floods the completed vibrant pink interior; a slow dolly backward reveals the full room. 

No magic, morphing, or cuts. High-quality textures, real mass and friction.`,
    },
  },
  {
    id: "charaspower-restaurant-drama-seedance",
    title: "餐厅情侣对峙 · 30秒一镜到底",
    subtitle: "X · @CharaspowerAI · Seedance 2.5 / Dreamina · 30秒 · 16:9",
    description:
      "Seedance 2.5 一镜到底 30 秒：餐厅情侣从压着火到爆发争吵，英语口型同步。",
    video: "/tutorials/charaspower-restaurant-drama-seedance/demo-web.mp4",
    poster: "/tutorials/charaspower-restaurant-drama-seedance/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "真人风",
    shots: 1,
    references: 0,
    model: "Seedance 2.5 / Dreamina",
    style: "高档餐厅夜戏 · 一镜到底对话",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/CharaspowerAI/status/2101733174912979337",
    sourceAuthor: "@CharaspowerAI",
    sourcePlatform: "X",
    sourceImpressions: 5609,
    sourceStats: { asOf: "2026-09-25", likes: 88, reposts: 8, bookmarks: 53 },
    formats: ["角色表演"],
    hook: {
      structure: "一镜到底：低声对话 → 他探身 → 近距离对峙",
      opening: "烛光餐厅，男女隔着小桌侧面对坐，背景坐满客人，两人压低声音说话——固定双人镜直接进戏。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 0–15s 镜头几乎不动，两人你一句我一句，她身体前倾、他手搭在桌边，情绪慢慢绷紧。", at: 0 },
        { title: "关键变化", text: "约 17s 他猛地探身压过桌面，镜头随之绕低推近，这段声音也最响；约 20s 起两人脸贴很近对视。", at: 17 },
        { title: "结尾怎么收", text: "约 24–29s 维持近距离侧脸对峙，没有剪切，停在两人对视。", at: 24 },
      ],
      copyThis: "不切镜头，用人物身体前倾 + 镜头缓慢推近来表现冲突升级。",
      approx: true,
    },
    tags: [
      "30秒 · 一镜到底",
      "16:9 横屏",
      "Seedance 2.5",
      "双人对话",
      "情感表演测试",
    ],
    steps: [
      {
        number: 1,
        title: "设定高档餐厅夜景",
        description:
          "优雅拥挤的餐厅夜晚、温暖琥珀实用光、蜡烛、深色木材、白桌布、酒杯和餐具。附近其他情侣用餐,服务员自然穿过背景。房间保持精致平静,使情侣渐增的紧张更加不适。",
      },
      {
        number: 2,
        title: "一镜到底摄影机运动",
        description:
          "从桌侧中景双人镜头开始,摄影机缓慢向前靠近。随着争吵升级,逐步环绕桌子约 70–90 度。水杯倒下时摄影机自然下倾跟随动作,然后平滑恢复到角色。最后缓慢情感推进。保持正确画面方向、桌面地理和背景连续性。",
      },
      {
        number: 3,
        title: "粘贴完整 30 秒提示词",
        description:
          "使用下方完整提示词。六段情感节拍:0–5s 安静敌意 → 5–11s 压力上升 → 11–17s 争吵破防 → 17–22s 物理升级(水杯倾倒) → 22–27s 情感逆转 → 27–30s 最终击破。极度真实的关系争吵,避免戏剧性喊叫,两人最初在公共场合压抑愤怒,通过微表情建立:紧咬下巴、中断眼神接触、浅呼吸、紧张吞咽、苦涩半笑、轻微颤抖的手、痛苦陈述前的停顿。对话在争吵时刻轻微重叠,但每条重要台词必须保持清晰。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–5s 安静敌意:桌侧中景双人,摄影机缓慢靠近。女方盯着他,明显压抑愤怒:'You lied to me.' 男方低头看饮料,鼻子呼气,不看她回答:'I didn't lie.' 她前倾:'You looked me in the eye and said nothing happened.'",
      },
      {
        number: 2,
        description:
          "5–11s 压力上升:摄影机缓慢从桌子环向女方侧,保持双人在画。他终于直视她:'Because every time I try to explain something, you decide what happened before I even finish.' 一拍。她给出苦涩半笑:'Oh, so this is my fault now?' 他下巴收紧:'That's not what I said.'",
      },
      {
        number: 3,
        description:
          "11–17s 争吵破防:摄影机微妙地在两人之间推近。她立即打断,更大声:'It's always what you mean.' 附近食客短暂看过来。男方降低声音,对注意力感到尴尬:'Can you not do this here?' 她难以置信地盯着他:'Do what? React?' 她锐利地做手势,不小心碰到水杯。",
      },
      {
        number: 4,
        description:
          "17–22s 物理升级:水杯自然倾倒。摄影机本能地随运动下倾,不切镜。水洒过桌布流向他的手机。他快速抓起手机,从桌子推开。椅腿刮擦地板。餐具移位。蜡烛闪烁。他看着混乱,然后看着她。冷冷地:'This. This is exactly what I'm talking about.' 女方僵住。愤怒变成羞辱。",
      },
      {
        number: 5,
        description:
          "22–27s 情感逆转:摄影机缓慢升回眼平线,移入更紧的双人镜头。她现在说得更安静:'You know what hurts the most?' 他不回答。'You don't even care that I'm upset.' 他表情变化。愤怒软化成内疚,但他仍无法道歉。'I care. I'm just tired of being punished for everything.' 她立即回答:'Then stop giving me reasons.'",
      },
      {
        number: 6,
        description:
          "27–30s 最终击破:沉默。餐厅环境音在混音中略微低沉。摄影机做最后一次非常缓慢的推进到两人之间的空间。女方直视他,眼睛湿润但克制,几乎耳语:'Maybe we shouldn't be together anymore.' 男方完全静止。不切镜。保持被蜡烛在前景分隔的两张脸上,远处餐厅声音逐渐回归,定格在震惊沉默上。",
      },
    ],
    constraints:
      "30 秒单镜连续不切;缓慢环桌摄影机运动;水杯倾倒时自然下倾跟随;极度真实关系争吵,微表情建立;精确英语口型同步;自然声音叠加;无背景音乐。",
    video_prompt: {
      title: "Restaurant couple confrontation · 30s continuous single take",
      subtitle: "Seedance 2.5 / Dreamina · 16:9 · #DreaminaCPP · precise lip sync",
      content: `ultra-realistic relationship drama, upscale restaurant at night, premium feature-film cinematography, tense intimate atmosphere, naturalistic acting, physically believable movement, precise English lip sync. One continuous uninterrupted shot — no cuts.

A couple in their early 30s sits face-to-face at a small restaurant table. Their argument has already been building before the shot begins. They are trying not to make a public scene, but both are close to losing control. Preserve identical faces, hairstyles, body proportions, clothing and accessories throughout. No character identity drift.

Elegant crowded restaurant at night, warm amber practical lights, candles, dark wood, white tablecloths, wine glasses and silverware. Other couples dine nearby. Waiters move naturally through the background. The room remains sophisticated and calm, making the couple's growing tension feel even more uncomfortable.

Warm candlelight and overhead tungsten practicals shape their faces. Soft cool city light enters through windows behind them. Cinematic contrast, realistic skin, subtle reflections in glassware, creamy background bokeh, shallow depth of field.

0–5s — Quiet hostility
Begin in a medium two-shot from the side of the table, camera slowly creeping closer.
The woman stares at him, visibly holding back anger.
Woman, controlled and quiet:
"You lied to me."
The man looks down at his drink, exhales through his nose, then answers without looking at her.

Man:
"I didn't lie."
She leans forward.

Woman:
"You looked me in the eye and said nothing happened."

5–11s — Pressure rises
The camera slowly arcs around the table toward the woman's side, maintaining both characters in frame.
He finally looks directly at her.
Man, frustrated:
"Because every time I try to explain something, you decide what happened before I even finish."

A beat.
She gives a bitter half-laugh.
Woman:
"Oh, so this is my fault now?"
His jaw tightens.

Man:
"That's not what I said."

11–17s — Argument breaks containment
The camera subtly pushes closer between them.
She interrupts immediately:
Woman, louder:
"It's always what you mean."

Nearby diners briefly glance over.
The man lowers his voice, embarrassed by the attention.
Man:
"Can you not do this here?"
She stares at him in disbelief.

Woman:
"Do what? React?"
She gestures sharply and accidentally clips her water glass.

17–22s — Physical escalation
The glass tips over naturally. The camera instinctively dips with the movement without cutting.
Water spreads across the tablecloth toward his phone.
He grabs the phone quickly and pushes back from the table.
Chair legs scrape against the floor. Silverware shifts. The candle flickers.
He looks at the mess, then at her.

Man, cold:
"This. This is exactly what I'm talking about."
The woman freezes.
Her anger turns into humiliation.

22–27s — Emotional reversal
The camera slowly rises back to eye level and moves into a tighter two-shot.
She speaks more quietly now.
Woman:
"You know what hurts the most?"
He doesn't answer.

Woman:
"You don't even care that I'm upset."
His expression changes. Anger softens into guilt, but he still cannot bring himself to apologize.
He says:

Man:
"I care. I'm just tired of being punished for everything."

She immediately answers:
Woman:
"Then stop giving me reasons."

27–30s — Final blow
Silence.
Restaurant ambience becomes slightly muffled in the mix.
the camera makes a very slow final push toward the space between them.
The woman looks directly at him, eyes wet but controlled.
Woman, almost whispering:
"Maybe we shouldn't be together anymore."
The man goes completely still.
Do not cut away.
Hold on the stunned silence between both characters as distant restaurant sounds gradually return.
End the shot on their faces separated by the candle in the foreground.

Single continuous take for the entire 30 seconds. Start with a medium two-shot, eye-level, 50mm cinematic lens feeling. Slow controlled handheld movement, barely perceptible instability. Gradually orbit approximately 70–90 degrees around the table as the argument escalates. When the glass falls, naturally dip the camera toward the action, then smoothly recover to the characters. Finish with a slow emotional push-in. Maintain correct screen direction, table geography and background continuity. No teleportation, no impossible camera movement, no hidden cuts.

Extremely realistic relationship argument. Avoid theatrical shouting. Both characters initially suppress their anger because they are in public. Build through micro-expressions: clenched jaw, interrupted eye contact, shallow breathing, nervous swallowing, bitter half-smiles, slight trembling hands, pauses before painful statements. Emotional progression: suspicion → defensiveness → accusation → public embarrassment → anger → vulnerability → emotional shock.

Dialogue must overlap slightly at moments like a real argument, but every important line must remain intelligible.

Natural English dialogue with accurate lip synchronization and intimate voice performance.
Layered restaurant ambience: low conversations, soft cutlery, glass clinks, footsteps, distant kitchen noise, subtle ventilation and room reverb.
Detailed Foley: hand touching glass, glass tipping, liquid spill, silverware movement, chair scraping, fabric movement, controlled breathing.

No background music.`,
    },
  },
  {
    id: "garylau-rei-city-travel-h3",
    title: "绫波丽城市换装旅行 · H3 深度驱动",
    subtitle: "X · @GaryLau0101 · MiniMax H3 Singularity · 12秒 · 9:16",
    description:
      "MiniMax H3 深度驱动：绫波丽 12 秒连续变装，穿过巴黎、罗马、开罗、悉尼。",
    video: "/tutorials/garylau-rei-city-travel-h3/demo-web.mp4",
    poster: "/tutorials/garylau-rei-city-travel-h3/poster.jpg",
    duration: "12秒",
    durationSec: 12,
    styleLabel: "真人换装",
    shots: 7,
    references: 2,
    model: "MiniMax H3 Singularity",
    style: "竖屏换装旅行 · 深度驱动",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/GaryLau0101/status/2101872019981889672",
    sourceAuthor: "@GaryLau0101",
    sourcePlatform: "X",
    sourceImpressions: 40250,
    sourceStats: { asOf: "2026-09-25", likes: 26, reposts: 3, bookmarks: 32 },
    formats: ["变装·换装"],
    hook: {
      structure: "白底定位 → 地图 App 换城市 → 换装",
      opening: "白底上黑发女孩穿黑色水手服低头刷手机，约 2s 头顶冒出一个红色地图定位针。",
      openingAt: 0,
      beats: [
        { title: "几段怎么切换", text: "约 4s 切进地图 App 界面：搜索栏「巴黎」，她换条纹衫站在埃菲尔铁塔前；约 6s「罗马」绿裙，约 8s「开罗」，约 10.5s「悉尼」。", at: 4 },
        { title: "关键变化", text: "每换一座城市，搜索栏、底部卡片、地标背景和她的服装一起换，姿势跟着城市变。", at: 6 },
      ],
      copyThis: "用地图 App 的搜索栏当转场：输入一个城市名，背景和衣服就跟着换。",
      approx: true,
    },
    tags: [
      "12秒 · 7段变装",
      "9:16 竖屏",
      "MiniMax H3 Singularity",
      "深度视频驱动",
      "城市换装旅行",
    ],
    steps: [
      {
        number: 1,
        title: "准备角色参考图 Picture1–6",
        description:
          "Picture1 定义 Rei 开场黑色水手服、黑贝雷帽、百褶裙、白膝袜、黑乐福鞋,以及精确脸型、五官、长直黑发与刘海。Picture2–5 定义巴黎、罗马、开罗、悉尼四城的服装、正面姿势、道具、城市地图与 UI。Picture6 是未修改的标准脸部裁剪,作为所有服装的最高优先级面部身份参考。注意:帖内未附这些参考图,需自备或参考原作者素材。",
      },
      {
        number: 2,
        title: "准备深度视频 Video1",
        description:
          "黑白相对深度参考视频,仅用于身体运动、摄影机后拉和时间节奏。深度亮度代表距离,不是肤色或脸部细节。使用场景图片解析每次转身后她的脸和胸部朝向。帖内有深度视频参考。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 12 秒提示词。关键约束:生成一个连续 12 秒竖屏视频,下方分镜标签是连续阶段不是插入剪辑指令。保持参考时间线原速,不压缩开场。只有 Rei 旋转,摄影机不环绕她。背面是旋转中的短暂经过方向,不是停留姿势。每次完成变装后展示她的脸和新服装正面。服装、手持道具、城市地图与城市名 UI 一起更换。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "参考 01",
        title: "深度视频缩略图",
        subtitle: "黑白深度参考 · 9:16",
        image: "/tutorials/garylau-rei-city-travel-h3/ref-depth-thumb.jpg",
        prompt: `黑白相对深度参考视频缩略图,仅用于身体运动、摄影机后拉和时间节奏。深度亮度代表距离,不是肤色或脸部细节。完整深度视频见 ref-depth-web.mp4。`,
      },
      {
        id: "ref2",
        number: "参考 02",
        title: "原帖引用的求图请求帖",
        subtitle: "单图 · 非 Picture1–6 参考集",
        image: "/tutorials/garylau-rei-city-travel-h3/ref-source-request.jpg",
        prompt: `作者 Gary Lau 引用的 @weiyux2021 原帖是一个求图请求帖,仅有单图,不是 Picture1–6 角色换装参考集。Picture1–6 需自备或参考原作者素材。`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0.00–2.50s:纯白工作室与开场黑色水手服(Picture1)。Rei 看着胸前手机。跟随开场摄影机后拉。她的躯干保持大致面向摄影机;允许原始小幅手机和头部手势。此区间无全身旋转、无定位针、无城市背景、无服装更换。",
      },
      {
        number: 2,
        description:
          "2.50–3.15s:红色定位针出现在 Rei 上方。此事件仅添加定位针。她继续在纯白工作室看手机,仍穿开场黑色水手服。定位针不触发旋转或场景变化。不在此处开始变装。",
      },
      {
        number: 3,
        description:
          "3.15–4.05s:跟随小的准备性侧向枢轴,然后回到朝向摄影机的起始方向,同时握着手机。这是准备运动,不是快速变装旋转。保持开场黑色水手服、白背景和红色定位针贯穿此区间。4.05 秒前无巴黎地图或夏季服装。",
      },
      {
        number: 4,
        description:
          "4.05–6.00s:4.05 秒开始跟随 Video1 的快速变装旋转。连续穿过侧面和背面方向不停顿。约 4.25 秒,在此旋转中,一起更换为巴黎服装、饮料、墨镜、地图和导航 UI(Picture2)。到 4.50 秒完成旋转并展示 Rei 面向摄影机,她的脸和海军象牙条纹上衣正面可见。4.50–6.00 秒保持正面/四分之三正面展示,带饮料和墨镜手势。奶油全长裤、条纹上衣和红色颈巾完全替换开场黑色水手服。无背面停留、无手机、无开场黑色水手服在巴黎展示期间。顶部搜索栏和底部位置卡都读作'巴黎'。",
      },
      {
        number: 5,
        description:
          "6.00–8.00s:6.00 秒开始下一次参考转身。约 6.25 秒更换服装、道具、城市和 UI 为罗马(Picture3)。到 6.55 秒完成转身进入正面/四分之三正面视角,展示 Rei 的脸、鼠尾草绿中长连衣裙与棕色腰带。直到 8.00 秒使用罗马姿势,带纸质指南和温暖的图拉真柱与罗马广场地图。两个城市标签都读作'罗马'。背面帧仅在转身进行中出现;转身后无停止的背面视角。",
      },
      {
        number: 6,
        description:
          "8.00–10.00s:8.00 秒开始下一次参考转身。约 8.25 秒一起更换为象牙亚麻衬衫、米色全长裤、赭石围巾、购物袋、开罗地图和 UI(Picture4)。到 8.55 秒展示她的脸和象牙亚麻衬衫正面。保持正面/四分之三展示与自然小动作直到 10.00 秒。两个城市标签都读作'开罗'。保持开罗服装和地图在一起;不引入之前的衣服或提前引入悉尼。",
      },
      {
        number: 7,
        description:
          "10.00–12.00s:10.00 秒开始最后一次参考转身。约 10.25 秒替换开罗衣服和购物袋、城市和标签为悉尼天蓝色衬衫、白色 T 恤、藏青及膝短裤和白色运动鞋、悉尼塔地图和 UI(Picture5)。到 10.55 秒面向摄影机,天蓝色衬衫下的白色 T 恤可见,双手抬起一腿向后弯曲如 Picture5。保持此正面悉尼展示与微妙自然运动贯穿 12.00 秒。两个城市标签都读作'悉尼'。此最终展示后无额外旋转、目的地或服装更换。",
      },
    ],
    constraints:
      "参考图 Picture1–6 未在原帖附件中,需自备;引用的 weiyux2021 帖仅为求图请求帖(单图),非 Picture1–6 角色换装参考集;深度视频仅用于运动和时间节奏,渲染自然全彩色使用 Pictures;每次变装后展示脸部和服装正面,不停留在背面视角。",
    video_prompt: {
      title: "Rei City Travel Outfit Changes · 12s · Depth-Driven",
      subtitle: "MiniMax H3 Singularity · 9:16 vertical · Picture1–6 + Video1 refs",
      content: `<Picture 1> defines Rei's original opening black sailor uniform, black beret, pleated skirt, white knee socks and black loafers, as well as her exact face, natural facial proportions, long straight black hair and bangs throughout. Use this uniform for the white-studio opening only; do not reproduce the character-sheet layout. <Picture 2> defines her Paris outfit, front-facing presentation pose, drink, sunglasses, city map and UI. <Picture 3> defines her Rome outfit, front/three-quarter presentation pose, props, city map and UI. <Picture 4> defines her Cairo outfit, presentation pose, shopping bags, city map and UI. <Picture 5> defines her Sydney outfit, front-facing finishing pose, city map and UI. <Picture 6> is an unmodified slightly turned standard face crop from the original Rei character card. It is the highest-priority facial identity reference for ALL outfits: preserve its eye shape and spacing, eyelids, nose, lips and natural proportions without beautification. Picture 1 supplies the same identity and opening uniform. Pictures 2–5 supply new city outfits and environments, never a substitute face. These are the same person in different clothes.

<Video 1> is a black-and-white relative-depth reference for body movement, camera pullback and chronological timing only. Depth brightness represents distance, not skin color or face detail. Render natural full color using the pictures. A featureless face in the depth map must not become the back of Rei's head. Use the scene pictures to resolve which way her face and chest point after each turn.

Generate ONE continuous 12-second vertical video. The timed Shot labels below are successive phases of this one output, not instructions to insert camera cuts. Keep the reference timeline at its original speed. Do not compress the opening to make room for the cities. Only Rei rotates during transformation; the camera must not orbit her. A back view is a brief passing orientation during a spin, never a held destination pose. Each completed transformation reveals her face and the FRONT of the new outfit, as in its corresponding picture. Change clothing, handheld props, city map and city-name UI together; do not change only the background while leaving the previous outfit.

Shot 1 [0.00–2.50 seconds]: White studio and opening black sailor uniform from <Picture 1>. Rei looks at the phone held in front of her chest. Follow the opening camera pullback in <Video 1>. Her torso remains generally facing the camera; allow the original small phone and head gestures. This interval contains no full-body spin, no location pin yet, no city background and no wardrobe change.

Shot 2 [2.50–3.15 seconds]: The red location pin appears above Rei. This event ONLY adds the pin. She continues looking at her phone in the white studio, still wearing the opening black sailor uniform. The pin does not trigger a spin or a scene change. Do not begin the transformation here.

Shot 3 [3.15–4.05 seconds]: Follow the small preparatory side pivot in <Video 1>, then return toward the camera-facing starting orientation while holding the phone. This is the preparatory movement, not the rapid transformation spin. Retain the opening black sailor uniform, white background and red pin throughout this interval. No Paris map or summer outfit before 4.05 seconds.

Shot 4 [4.05–6.00 seconds]: At 4.05 seconds begin the rapid transformation rotation following <Video 1>. Pass continuously through the side and back orientations without pausing. Around 4.25 seconds, during this rotation, change together into the Paris outfit, drink, sunglasses, map and navigation UI from <Picture 2>. By 4.50 seconds complete the rotation and reveal Rei FACING THE CAMERA, with her face and the front of her navy-and-ivory striped top visible. From 4.50 to 6.00 seconds remain in this front/three-quarter FRONT presentation, with the drink and sunglasses gesture from <Picture 2>. The cream full-length trousers, striped top and red neck scarf replace the opening black sailor uniform completely. No back-facing hold, no phone, no opening black sailor uniform during the Paris presentation. The top search bar and bottom location card both read 巴黎.

Shot 5 [6.00–8.00 seconds]: Begin the next reference turn at 6.00 seconds. Around 6.25 seconds change outfit, props, city and UI to Rome from <Picture 3>. Complete the turn by 6.55 seconds into a front/three-quarter FRONT view showing Rei's face, sage-green midi dress with brown belt. Until 8.00 seconds use the Rome pose with the paper guide and warm Trajan column and Roman Forum map. Both city labels read 罗马. Back-facing frames occur only while the turn is in progress; no stopped back view after the turn.

Shot 6 [8.00–10.00 seconds]: Begin the next reference turn at 8.00 seconds. Around 8.25 seconds change together to the ivory linen shirt, beige full-length trousers, ochre scarf, shopping bags, Cairo map and UI from <Picture 4>. By 8.55 seconds reveal her face and the front of the ivory linen shirt. Hold the front/three-quarter presentation with natural small movements until 10.00 seconds. Both city labels read 开罗. Keep the Cairo outfit and map together; do not introduce previous clothes or Sydney early.

Shot 7 [10.00–12.00 seconds]: Begin the final reference turn at 10.00 seconds. Around 10.25 seconds replace the Cairo clothes and shopping bags, city and labels with the Sydney sky-blue overshirt, white T-shirt, navy knee-length shorts and white sneakers, Sydney Tower map and UI from <Picture 5>. By 10.55 seconds face the camera with the white T-shirt beneath the sky-blue overshirt visible, hands raised and one leg bent backward as in <Picture 5>. Keep this front-facing Sydney presentation with subtle natural movement through 12.00 seconds. Both city labels read 悉尼. No additional spin, destination or wardrobe change after this final reveal.

Keep Rei's identity and long hair throughout. Do not reproduce character-sheet panels, extra people, face closeups or depth-map gray colors. Keep the city UI style consistent; update both location labels at each city change. No generated speech or music.

The angle in Picture 6 describes identity only, NOT a fixed head pose. Face direction, expression, head tilt, hand gestures and full body movement follow Video 1. In Paris the sunglasses are opaque black and fully cover both eyes and eye sockets; no eyes visible through the lenses or above the rims. Keep the sunglasses on.`,
    },
  },
  {
    id: "strength04-tomjerry-mac-desktop-h3",
    title: "猫和老鼠搞乱 Mac 桌面 · H3",
    subtitle: "X · @Strength04_X · MiniMax H3 on Flova · 10秒 · 16:9",
    description:
      "MiniMax H3 桌面动画：Tom 追 Jerry 撞飞 Mac 桌面图标，再一个个偷偷放回。",
    video: "/tutorials/strength04-tomjerry-mac-desktop-h3/demo-web.mp4",
    poster: "/tutorials/strength04-tomjerry-mac-desktop-h3/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "桌面动画",
    shots: 1,
    references: 1,
    model: "MiniMax H3 on Flova (#flovaCPP)",
    style: "桌面互动 · 卡通角色",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Strength04_X/status/2101913634293297466",
    sourceAuthor: "@Strength04_X",
    sourcePlatform: "X",
    sourceImpressions: 660494,
    sourceStats: { asOf: "2026-09-25", likes: 6048, reposts: 620, bookmarks: 2831 },
    formats: ["破壁出屏"],
    hook: {
      structure: "壁纸动起来 → 图标被撞飞 → 汤姆看镜头",
      opening: "Mac 桌面，左侧图标、底部 Dock 都在，壁纸是猫和老鼠的客厅，约 0.5s 汤姆扑向杰瑞——壁纸自己动了。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1.5s 汤姆扑空，Dock 上的图标被撞得弹起来；约 4.5–8.5s 他捡起桌面图标当武器扔向杰瑞，图标散落在壁纸地板上。", at: 1.5 },
        { title: "结尾怎么收", text: "约 9s 汤姆站定，双手背后，对着屏幕外的人一脸心虚，杰瑞在旁边。", at: 9 },
      ],
      copyThis: "让卡通角色直接碰到真实的桌面图标和 Dock，图标被撞飞才让人意识到「壁纸活了」。",
      approx: true,
    },
    tags: [
      "10秒 · 一镜到底",
      "16:9 横屏",
      "MiniMax H3",
      "桌面互动",
      "Tom 和 Jerry",
    ],
    steps: [
      {
        number: 1,
        title: "先生成 macOS 桌面参考图",
        description:
          "使用完整的桌面参考图提示词生成高端 16:9 macOS 桌面截图。特色 Tom 和 Jerry 作为主角,电影化卡通客厅日落环境,左侧 18 个应用图标(3 列 6 行),macOS 菜单栏和底部 Dock。Tom 和 Jerry 在右侧处于表现力的玩耍时刻,保留经典卡通外观、比例、颜色、表情和原始 2D 动画美学。",
      },
      {
        number: 2,
        title: "上传桌面图作为第一帧",
        description:
          "在 MiniMax H3(Flova 或其他平台)上传生成的桌面图作为精确第一帧和视觉参考。保持参考桌面完全如图所示,包括温暖日落客厅、木地板、沙发、窗户、书籍、爆米花盒、散落爆米花、macOS 菜单栏、左侧应用网格、底部 Dock 和所有桌面元素。",
      },
      {
        number: 3,
        title: "粘贴完整 10 秒视频提示词",
        description:
          "使用下方完整提示词。关键:静态正面摄影机,一镜连续不切。Tom 追 Jerry → Jerry 变向 → Tom 滑行踢爆米花 → 卡通气流震飞 Gmail/Discord/Teams 三图标 → Tom 冻结震惊 → 逐个拾起并放回原位(每次清楚点击声) → Tom 回右侧假装无事。保持 Tom 和 Jerry 经典卡通外观、比例、颜色、表情不变。真实物理,每个移动图标必须可见离开原位置、空中落下、着陆、被拾起、携带、放回。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "参考 01",
        title: "Tom 和 Jerry macOS 桌面",
        subtitle: "参考图 · 16:9 · 电影化客厅日落",
        image: "/tutorials/strength04-tomjerry-mac-desktop-h3/ref-desktop.jpg",
        prompt: `Create a high-end 16:9 macOS desktop screenshot featuring Tom and Jerry as the main characters.

Build an original cinematic cartoon living-room environment at sunset, with warm window light entering from one side, wooden flooring, cozy furniture, soft shadows, scattered playful objects, and subtle atmospheric depth.

Place Tom and Jerry together on the RIGHT side in an expressive playful moment, preserving their recognizable classic cartoon appearance, proportions, colors, facial expressions, clothing/details, and original 2D animation aesthetic.

Tom should be reacting dramatically while Jerry appears mischievous, creating a natural storytelling moment. Keep both characters fully visible and avoid cropping faces, hands, tails, or important details.

Use warm golden-orange lighting mixed with deep brown, cream, muted red, and soft blue accents. Add subtle cinematic lighting and depth while keeping the artwork clearly cartoon-styled.

Reserve the LEFT side for desktop shortcuts. Add exactly 18 applications in three columns and six rows:

Chrome | Safari | Gmail
YouTube | Spotify | Discord
Slack | Zoom | Microsoft Teams
Notion | Word | Excel
Instagram | Reddit | Netflix
Steam | Dropbox | Google Drive

Use clean recognizable application logos, identical sizing, generous spacing, and crisp white labels.

Add a realistic translucent macOS menu bar across the top:
Apple logo, Finder, File, Edit, View, Go, Window, Help
with Wi-Fi, battery, control icons, and clock on the right.

Add a floating translucent Dock along the bottom, positioned toward the LEFT so Tom and Jerry remain unobstructed.

Dock:
Finder, Safari, Messages, Mail, Photos, Calendar, System Settings, separator, Downloads, Trash.

Final style: premium animated-film artwork combined with a realistic macOS interface, cinematic composition, clean typography, strong character integration, polished lighting, detailed environment, and balanced negative space.

No laptop, monitor, keyboard, mouse, open applications, extra characters, duplicate icons, large titles, advertisements, banners, or watermark.

Output one finished high-resolution 16:9 edge-to-edge desktop image.`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–1.5s:Tom 继续在客厅地板上追逐 Jerry。Tom 看起来坚定且略微沮丧。Jerry 快速向右跑持奶酪。Jerry 回头向 Tom 露出淘气微笑。Tom 的手臂、腿、耳朵、尾巴和表情随夸张经典卡通动画自然移动。",
      },
      {
        number: 2,
        description:
          "1.5–2.5s:Jerry 突然变向向左跑。Tom 戏剧性地反应并试图停下自己。Tom 的脚在木地板上滑行,意外向前踢飞散落的爆米花。突然夸张的卡通空气运动朝桌面左侧行进。",
      },
      {
        number: 3,
        description:
          "2.5–3.2s:空气运动意外震飞三个桌面图标:Gmail、Discord、Microsoft Teams。三个图标物理离开它们在最右桌面图标列的原始位置。它们分别在空中旋转并落入底部 Dock 上方中心偏左的开放桌面区域。每个图标分别着陆带小弹跳。它们的原始网格位置现在明显空空的。",
      },
      {
        number: 4,
        description:
          "3.2–4.2s:Tom 意识到发生了什么后冻结。他的眼睛睁大。Jerry 也停下一会儿看着掉落的图标。Tom 缓慢地向观众看来带尴尬表情。Jerry 带淘气地看着 Tom,好像对情况感到好笑。Tom 立即决定修复问题。",
      },
      {
        number: 5,
        description:
          "4.2–7.8s:Tom 逐个修复三个掉落的图标。首先 Gmail:Tom 小心地向掉落的 Gmail 图标伸手。他用一只爪子单独拾起 Gmail。图标必须可见地离开桌面表面。Tom 携带 Gmail 穿过桌面到其原始空位置。他小心地将 Gmail 放回其精确原始位置。Gmail 标识和标签保持不变。听到柔和点击声。只有在 Gmail 完全修复后 Tom 才伸手拿下一个图标。",
      },
      {
        number: 6,
        description:
          "7.8s 继续:第二个 Discord:Tom 向下伸手并单独拾起掉落的 Discord 图标。他携带 Discord 到其原始空位置。他小心地将它按回正确的网格位置。听到第二个温和点击声。Jerry 持奶酪站在附近观看 Tom。",
      },
      {
        number: 7,
        description:
          "7.8s 继续:第三个 Microsoft Teams:Tom 再次向下伸手。他单独拾起 Microsoft Teams。他将它携带回其原始位置。他小心地将它释放到空网格位置。听到第三个温和点击声。显示所有三个单独的拾起并替换动作清楚。",
      },
      {
        number: 8,
        description:
          "7.8–10s:放置 Microsoft Teams 回位置后,Tom 快速回到右侧。Jerry 持奶酪跑开短距离。Tom 挺直自己并试图恢复尊严。他看向修复的图标。然后他直接向观众看来带无辜、略微尴尬的表情。Jerry 短暂回头向 Tom 看来带淘气微笑。Tom 假装什么都没发生。保持最终姿势剩余时刻。最终桌面必须紧密匹配原始第一帧。",
      },
    ],
    constraints:
      "先生成桌面参考图,再用作第一帧;静态正面摄影机无运动;保持 Tom 和 Jerry 经典卡通外观不变;只有 Gmail/Discord/Teams 允许移动,其他一切保持静止;每个移动图标必须可见离开、落下、着陆、被拾起、携带、放回;Tom 必须分别修复三个图标;无自动修复、无瞬移、无同时移动多图标。",
    video_prompt: {
      title: "Tom and Jerry Mac Desktop Chaos · 10s · One Shot",
      subtitle: "MiniMax H3 on Flova (#flovaCPP) · 16:9 · Desktop reference first frame",
      content: `Platform / Model: MiniMax H3 on Flova (#flovaCPP)
Aspect Ratio: 16:9
Source: https://x.com/Strength04_X/status/2101913634293297466
Reference image prompt reply: https://x.com/Strength04_X/status/2101913745794740629
Video prompt reply: https://x.com/Strength04_X/status/2101913903802499214

========== REFERENCE IMAGE PROMPT ==========

Create a high-end 16:9 macOS desktop screenshot featuring Tom and Jerry as the main characters.

Build an original cinematic cartoon living-room environment at sunset, with warm window light entering from one side, wooden flooring, cozy furniture, soft shadows, scattered playful objects, and subtle atmospheric depth.

Place Tom and Jerry together on the RIGHT side in an expressive playful moment, preserving their recognizable classic cartoon appearance, proportions, colors, facial expressions, clothing/details, and original 2D animation aesthetic.

Tom should be reacting dramatically while Jerry appears mischievous, creating a natural storytelling moment. Keep both characters fully visible and avoid cropping faces, hands, tails, or important details.

Use warm golden-orange lighting mixed with deep brown, cream, muted red, and soft blue accents. Add subtle cinematic lighting and depth while keeping the artwork clearly cartoon-styled.

Reserve the LEFT side for desktop shortcuts. Add exactly 18 applications in three columns and six rows:

Chrome | Safari | Gmail
YouTube | Spotify | Discord
Slack | Zoom | Microsoft Teams
Notion | Word | Excel
Instagram | Reddit | Netflix
Steam | Dropbox | Google Drive

Use clean recognizable application logos, identical sizing, generous spacing, and crisp white labels.

Add a realistic translucent macOS menu bar across the top:
Apple logo, Finder, File, Edit, View, Go, Window, Help
with Wi-Fi, battery, control icons, and clock on the right.

Add a floating translucent Dock along the bottom, positioned toward the LEFT so Tom and Jerry remain unobstructed.

Dock:
Finder, Safari, Messages, Mail, Photos, Calendar, System Settings, separator, Downloads, Trash.

Final style: premium animated-film artwork combined with a realistic macOS interface, cinematic composition, clean typography, strong character integration, polished lighting, detailed environment, and balanced negative space.

No laptop, monitor, keyboard, mouse, open applications, extra characters, duplicate icons, large titles, advertisements, banners, or watermark.

Output one finished high-resolution 16:9 edge-to-edge desktop image.


========== VIDEO PROMPT ==========

Create a 10-second horizontal 16:9 cinematic video using the provided Tom and Jerry macOS desktop image as the EXACT first frame and visual reference.

IMPORTANT:

Preserve the reference desktop exactly as shown, including the warm sunset living room, wooden floor, sofa, window, books, popcorn box, scattered popcorn, macOS menu bar, left-side application grid, bottom Dock, and all desktop elements.

Keep Tom and Jerry's exact recognizable classic cartoon appearance, proportions, colors, facial features, expressions, poses, and original 2D animation style. Do not redesign, modernize, photorealize, or change their visual style.

Begin with Tom running dramatically toward Jerry on the RIGHT side while Jerry runs away carrying a piece of cheese.

CAMERA:

Static front-facing camera.
One continuous shot.
No camera movement.
No zoom.
No pan.
No cuts.

TIMELINE:

0–1.5s:
Tom continues chasing Jerry across the living-room floor.

Tom looks determined and slightly frustrated.
Jerry runs quickly toward the RIGHT while holding the cheese.
Jerry looks back at Tom with a mischievous smile.

Tom's arms, legs, ears, tail, and facial expression move naturally with exaggerated classic cartoon animation.

1.5–2.5s:
Jerry suddenly changes direction and runs toward the LEFT.

Tom reacts dramatically and tries to stop himself.

Tom's feet slide across the wooden floor and he accidentally kicks the scattered popcorn forward.

A sudden exaggerated cartoon air movement travels toward the LEFT side of the desktop.

The air movement accidentally knocks THREE desktop icons loose:

Gmail
Discord
Microsoft Teams

The three icons physically leave their original positions in the RIGHTMOST desktop-icon column.

They rotate separately through the air and fall into the open desktop area above the Dock near the center-left.

Each icon lands separately with a small bounce.

Their original grid positions are now visibly empty.

2.5–3.2s:
Tom freezes after realizing what happened.

His eyes widen.

Jerry also stops for a moment and looks at the fallen icons.

Tom slowly looks toward the viewer with an embarrassed expression.

Jerry looks at Tom mischievously as if amused by the situation.

Tom immediately decides to fix the problem.

3.2–7.8s:
Tom restores the three fallen icons ONE AT A TIME.

FIRST — Gmail:

Tom carefully reaches toward the fallen Gmail icon.

He picks up Gmail individually with one paw.

The icon must visibly leave the desktop surface.

Tom carries Gmail across the desktop toward its original empty position.

He carefully places Gmail back into its exact original location.

The Gmail logo and label remain unchanged.

A soft click is heard.

Only after Gmail is completely restored does Tom reach for the next icon.

SECOND — Discord:

Tom reaches down and individually picks up the fallen Discord icon.

He carries Discord toward its original empty position.

He carefully presses it back into the correct grid position.

A second gentle click is heard.

Jerry watches Tom while standing nearby with the cheese.

THIRD — Microsoft Teams:

Tom reaches down once more.

He picks up Microsoft Teams individually.

He carries it back to its original position.

He carefully releases it into the empty grid position.

A third gentle click is heard.

Show all three separate pickup-and-replace actions clearly.

IMPORTANT PHYSICAL ACTION RULES:

Every moving icon must visibly:

leave its original position
fall through the air
land on the desktop
be physically picked up
be carried by Tom
be placed back into its original position

Do NOT:
- restore icons automatically
- teleport icons
- make icons snap back from a distance
- move multiple icons simultaneously
- scoop multiple icons together
- stack icons
- duplicate icons
- morph logos
- change labels

Tom must restore Gmail, Discord, and Microsoft Teams separately.

His paws must remain anatomically consistent with the original cartoon style.

No extra paws.
No extra fingers.
No stretched limbs.
No distorted characters.

Jerry remains nearby and reacts naturally while Tom fixes the desktop.

7.8–10s:
After placing Microsoft Teams back into position, Tom quickly returns to the RIGHT side.

Jerry runs a short distance away while still holding the cheese.

Tom straightens himself and tries to regain his dignity.

He looks toward the restored icons.

Then he looks directly at the viewer with an innocent, slightly embarrassed expression.

Jerry briefly looks back at Tom with a mischievous smile.

Tom pretends nothing happened.

Hold the final pose for the remaining moment.

The final desktop must closely match the original first frame.

DESKTOP PRESERVATION:

Only Gmail, Discord, and Microsoft Teams are allowed to move.

Everything else must remain completely stationary:

Chrome
Safari
YouTube
Spotify
Slack
Zoom
Notion
Microsoft Word
Microsoft Excel
Instagram
Reddit
Netflix
Steam
Dropbox
Google Drive

The macOS menu bar must remain stationary.

The Dock must remain stationary.

The wallpaper and all furniture must remain stationary.

Do not change application logos or labels.

Do not duplicate any icons.

AUDIO:

Light playful cartoon piano and pizzicato music.

Fast playful rhythm during Tom's chase.

A short cartoon sliding sound when Tom loses balance.

A brief airy whoosh as the three icons are knocked loose.

Three soft landing sounds as the icons fall.

Three distinct gentle clicks as Tom restores Gmail, Discord, and Microsoft Teams.

Music briefly pauses during Tom's shocked reaction, then resumes with a playful rhythm.

No dialogue.
No subtitles.
No text overlays.

VISUAL QUALITY:

Premium cinematic cartoon animation integrated into the existing macOS desktop.

Keep Tom and Jerry clearly 2D while maintaining the cinematic lighting of the environment.

Natural squash-and-stretch animation.
Smooth character motion.
Clean cartoon outlines.
Consistent colors.
Natural shadows.
Subtle floor reflections.
Realistic interaction with the environment.

FINAL FRAME:

All three icons must be restored to their exact original positions.

Tom and Jerry remain on the RIGHT side.

Tom looks embarrassed but tries to appear innocent.

Jerry remains mischievous.

No missing icons.
No duplicate icons.
No changed logos.
No extra characters.
No extra objects.
No camera movement.
No cuts.

The final frame should closely match the original reference image.`,
    },
  },
  {
    id: "strength04-cat-sneeze-desktop-h3",
    title: "猫打喷嚏搞乱 Mac 桌面 · H3",
    subtitle: "X · @Strength04_X · MiniMax Hailuo H3 Max on ImagineArt · 10秒 · 16:9",
    description:
      "MiniMax H3 Max：猫一个喷嚏震飞 Mac 桌面图标，慌忙放回后装作无辜。",
    video: "/tutorials/strength04-cat-sneeze-desktop-h3/demo-web.mp4",
    poster: "/tutorials/strength04-cat-sneeze-desktop-h3/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "桌面动画",
    shots: 1,
    references: 1,
    model: "MiniMax Hailuo H3 Max on ImagineArt",
    style: "桌面互动 · 真实猫",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Strength04_X/status/2101868703482876376",
    sourceAuthor: "@Strength04_X",
    sourcePlatform: "X",
    sourceImpressions: 21062,
    sourceStats: { asOf: "2026-09-25", likes: 463, reposts: 34, bookmarks: 161 },
    formats: ["破壁出屏"],
    hook: {
      structure: "壁纸里的猫 → 打喷嚏 → 图标被吹飞",
      opening: "Mac 桌面，壁纸是夜景书桌前戴耳机的虎斑猫，左侧一列图标、底部 Dock——开场像一张普通壁纸。",
      openingAt: 0,
      beats: [
        { title: "关键变化", text: "约 1.5s 猫一个喷嚏，约 1.8s 左侧一排图标被喷飞，约 2.5s 散落在壁纸桌面上。", at: 1.5 },
        { title: "过程怎么推进", text: "约 3s 猫盯着图标看，约 5–9s 伸爪一个个拨弄，把图标推来推去，约 9.5s 回到原位坐好。", at: 3 },
      ],
      copyThis: "先让壁纸静止一秒装普通，然后一个小动作（喷嚏）把真实桌面图标弄乱。",
      approx: true,
    },
    tags: [
      "10秒 · 一镜到底",
      "16:9 横屏",
      "MiniMax H3 Max",
      "桌面互动",
      "真实猫动物",
    ],
    steps: [
      {
        number: 1,
        title: "先生成 macOS 桌面参考图",
        description:
          "使用完整的桌面参考图提示词生成高级 16:9 macOS 桌面环境。从上传的图像提取主体(猫戴耳机),保留精确身份、面部特征、比例、颜色、服装、发型、配饰、渲染风格和整体个性。桌面构图:电影化宽屏桌面壁纸,主体位于最右侧占约 42% 画面,中心保持开放呼吸空间,左侧 45% 留给 18 个桌面快捷方式(3 列 6 行),顶部 macOS 菜单栏和底部 Dock。",
      },
      {
        number: 2,
        title: "上传桌面图作为第一帧",
        description:
          "在 MiniMax H3 Max(ImagineArt 或其他平台)上传生成的桌面截图作为精确第一帧和视觉参考。保持参考图像完全如起始帧。不重新设计、替换或重新生成桌面环境。保持相同山湖背景、温暖日落光线、木桌、毛茸棕白猫戴大号银色耳机、MacBook、植物、书籍、咖啡杯、macOS 菜单栏、18 个桌面应用图标和底部 Dock。",
      },
      {
        number: 3,
        title: "粘贴完整 10 秒视频提示词",
        description:
          "使用下方完整提示词。关键:静态正面摄影机无运动。猫保持精确外观、毛皮图案、脸、眼睛、耳朵、耳机、身体比例、光线和位置。0–1.5s 猫完全平静原姿势,缓慢眨眼,鼻子轻微抽动。1.5–2.5s 猫突然打喷嚏,头快速向前略向左,小型可见柔和气团从猫朝桌面图标飞去,意外震飞 Gmail/Discord/Teams 三图标,它们物理旋转落下到 Dock 上方中心偏左开放桌面区域。3.3–7.8s 猫匆忙逐个修复:伸爪触碰拾起、携带、精确放回原位,每次温和点击声。7.8–10s 修复 Teams 后猫快速回到 MacBook 旁原位,坐直耳机正确就位,试图看起来完全无辜。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "参考 01",
        title: "猫戴耳机 macOS 桌面",
        subtitle: "参考图 · 16:9 · 山湖日落背景",
        image: "/tutorials/strength04-cat-sneeze-desktop-h3/ref-desktop.jpg",
        prompt: `Create a premium 16:9 macOS desktop environment using the uploaded image as the visual reference for the main subject.

Extract the primary subject with clean, natural edges while preserving its exact identity, facial features, proportions, colors, outfit, hairstyle, accessories, rendering style, and overall personality. If the reference is anime, illustration, or photography, maintain the same medium and visual character. Remove all original background elements, borders, text, panels, and interface clutter. If multiple subjects are interacting, preserve their relationship and positioning.

DESKTOP COMPOSITION:
Build a cinematic widescreen desktop wallpaper with the subject positioned on the FAR RIGHT, taking roughly 42% of the frame. Keep the center open as visual breathing space. Reserve the LEFT 45% for desktop shortcuts. Maintain comfortable margins around the subject and ensure no face, hand, or important detail is hidden behind interface elements.

BACKGROUND DESIGN:
Generate an original macOS-inspired abstract environment based on colors found in the reference subject. Use layered translucent ribbons, soft glass-like shapes, subtle depth, flowing gradients, atmospheric lighting, and refined curved forms. Avoid generic blue macOS wallpaper styling. Match the background mood to the subject automatically:
cute = soft pastel atmosphere
futuristic = luminous gradients and subtle glow
dark = charcoal, deep violet, burgundy, or muted emerald
bright = clean warm gradients with controlled highlights
natural = earthy muted tones

Keep the LEFT area darker and visually simple so desktop labels remain readable. Add only subtle thematic shapes related to the subject.

DESKTOP SHORTCUTS:
Place exactly 18 application shortcuts in a precise 3-column × 6-row layout on the LEFT.

Row 1:
Chrome | Safari | Gmail

Row 2:
YouTube | Spotify | Discord

Row 3:
Slack | Zoom | Microsoft Teams

Row 4:
Notion | Microsoft Word | Microsoft Excel

Row 5:
Instagram | Reddit | Netflix

Row 6:
Steam | Dropbox | Google Drive

Use recognizable modern application logos, uniform visual scale, consistent spacing, and small clean white labels beneath every icon. No missing icons, duplicates, substitutions, or additional shortcuts.

TOP SYSTEM BAR:
Create a realistic slim translucent macOS menu bar spanning the entire width. On the left show:
Apple logo, Finder, File, Edit, View, Go, Window, Help

On the right show subtle Wi-Fi, battery, control/status symbols and a realistic clock. Keep the bar understated and integrated into the wallpaper.

BOTTOM DOCK:
Add a compact glass-style macOS Dock centered near the bottom, positioned slightly toward the LEFT if needed to prevent overlap with the subject.

Dock contents:
Finder, Safari, Messages, Mail, Photos, Calendar, System Settings, separator, Downloads, Trash

Use realistic macOS icon styling, subtle translucency, soft reflections, and restrained size.

VISUAL QUALITY:
Photorealistic desktop screenshot presentation, ultra-clean edges, accurate icon geometry, crisp typography, natural shadows, subtle glassmorphism, high dynamic range, refined lighting, balanced negative space, premium Apple-inspired design language.

The final image must look like a real personalized macOS desktop rather than a poster or mockup.

No computer hardware, monitor frame, keyboard, mouse, perspective view, open windows, browser tabs, banners, advertisements, large text, wallpapers containing duplicate characters, extra subjects, or additional desktop icons.

Output: one finished high-resolution 16:9 edge-to-edge desktop screenshot.`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–1.5s:猫在原姿势保持完全平静。它坐在 MacBook 旁最右侧,耳机环绕耳朵。眼睛缓慢眨眼。鼻子轻微抽动。耳朵做小的自然运动。桌面壁纸、菜单栏、所有图标、Dock、MacBook、书籍、杯子和背景保持完全静止。",
      },
      {
        number: 2,
        description:
          "1.5–2.5s:猫突然打喷嚏。头快速向前移动并略微向左。耳朵抽动,耳机自然弹跳。毛皮和胡须对喷嚏做出反应。小型可见柔和气团从猫朝桌面图标飞去。气团意外震飞只有三个桌面图标:Gmail、Discord、Microsoft Teams。这三个图标离开它们在最右桌面图标列的原始位置。它们物理旋转并向下落入 Dock 上方中心偏左的开放桌面区域。每个图标分别移动。每个图标带小的真实弹跳着陆。它们的原始位置变得明显空空的。所有其他图标必须保持完美静止。",
      },
      {
        number: 3,
        description:
          "2.5–3.3s:猫打喷嚏后立即冻结。眼睛变得略微更大。耳朵向后倾斜。它看向掉落的图标带惊讶和尴尬的表情。猫短暂地向观众看来好像假装什么都没发生。然后它回看掉落的图标。",
      },
      {
        number: 4,
        description:
          "3.3–7.8s:猫匆忙修复三个掉落的图标逐个。首先 Gmail:猫向掉落的 Gmail 图标伸爪。它的爪子小心触碰并抓住图标。它从桌面提起 Gmail。猫携带 Gmail 到其原始空位置。它精确地将 Gmail 放回其原始位置。Gmail 标识和标签保持不变。听到小的温和点击声。",
      },
      {
        number: 5,
        description:
          "7.8s 继续:第二个 Discord:只有在 Gmail 被修复后,猫向掉落的 Discord 图标向下伸爪。它单独拾起 Discord。它携带 Discord 回其原始空位置。它精确地将 Discord 释放到位。听到第二个温和点击声。",
      },
      {
        number: 6,
        description:
          "7.8s 继续:第三个 Microsoft Teams:只有在 Discord 被修复后,猫伸爪拿 Teams 图标。它单独拾起 Teams 图标。它携带它回其原始位置。它小心地将它释放到空网格位置。听到第三个温和点击声。",
      },
      {
        number: 7,
        description:
          "7.8–10s:修复 Microsoft Teams 后,猫快速回到 MacBook 旁原位置。它再次坐直,耳机正确就位。猫试图看起来完全无辜。它轻轻眨眼。耳朵安定下来。胡须和毛皮停止移动。猫短暂地瞥向修复的图标,然后再次向前看。以猫坐在几乎完全相同的姿势如第一帧结束。最终桌面必须匹配原始参考构图。",
      },
    ],
    constraints:
      "先生成桌面参考图,再用作第一帧;静态正面摄影机无运动;保持猫精确外观、毛皮图案、脸、眼睛、耳朵、耳机不变;只有 Gmail/Discord/Teams 允许移动;每个移动图标必须可见离开原位、空中落下、着陆、被拾起、携带、放回;猫必须分别与每个图标互动;猫的爪子保持解剖学自然;无额外爪子、无拉伸肢体、无扭曲身体、无不可能的伸展。",
    video_prompt: {
      title: "Cat Sneeze Mac Desktop Chaos · 10s · One Shot",
      subtitle: "MiniMax Hailuo H3 Max on ImagineArt · 16:9 · Desktop reference first frame",
      content: `Platform / Model: MiniMax Hailuo H3 Max on ImagineArt
Aspect Ratio: 16:9
Source: https://x.com/Strength04_X/status/2101868703482876376
Reference image prompt reply: https://x.com/Strength04_X/status/2101868833103602102
Video prompt reply: https://x.com/Strength04_X/status/2101869064616542690

========== REFERENCE IMAGE PROMPT ==========

Create a premium 16:9 macOS desktop environment using the uploaded image as the visual reference for the main subject.

Extract the primary subject with clean, natural edges while preserving its exact identity, facial features, proportions, colors, outfit, hairstyle, accessories, rendering style, and overall personality. If the reference is anime, illustration, or photography, maintain the same medium and visual character. Remove all original background elements, borders, text, panels, and interface clutter. If multiple subjects are interacting, preserve their relationship and positioning.

DESKTOP COMPOSITION:
Build a cinematic widescreen desktop wallpaper with the subject positioned on the FAR RIGHT, taking roughly 42% of the frame. Keep the center open as visual breathing space. Reserve the LEFT 45% for desktop shortcuts. Maintain comfortable margins around the subject and ensure no face, hand, or important detail is hidden behind interface elements.

BACKGROUND DESIGN:
Generate an original macOS-inspired abstract environment based on colors found in the reference subject. Use layered translucent ribbons, soft glass-like shapes, subtle depth, flowing gradients, atmospheric lighting, and refined curved forms. Avoid generic blue macOS wallpaper styling. Match the background mood to the subject automatically:
cute = soft pastel atmosphere
futuristic = luminous gradients and subtle glow
dark = charcoal, deep violet, burgundy, or muted emerald
bright = clean warm gradients with controlled highlights
natural = earthy muted tones

Keep the LEFT area darker and visually simple so desktop labels remain readable. Add only subtle thematic shapes related to the subject.

DESKTOP SHORTCUTS:
Place exactly 18 application shortcuts in a precise 3-column × 6-row layout on the LEFT.

Row 1:
Chrome | Safari | Gmail

Row 2:
YouTube | Spotify | Discord

Row 3:
Slack | Zoom | Microsoft Teams

Row 4:
Notion | Microsoft Word | Microsoft Excel

Row 5:
Instagram | Reddit | Netflix

Row 6:
Steam | Dropbox | Google Drive

Use recognizable modern application logos, uniform visual scale, consistent spacing, and small clean white labels beneath every icon. No missing icons, duplicates, substitutions, or additional shortcuts.

TOP SYSTEM BAR:
Create a realistic slim translucent macOS menu bar spanning the entire width. On the left show:
Apple logo, Finder, File, Edit, View, Go, Window, Help

On the right show subtle Wi-Fi, battery, control/status symbols and a realistic clock. Keep the bar understated and integrated into the wallpaper.

BOTTOM DOCK:
Add a compact glass-style macOS Dock centered near the bottom, positioned slightly toward the LEFT if needed to prevent overlap with the subject.

Dock contents:
Finder, Safari, Messages, Mail, Photos, Calendar, System Settings, separator, Downloads, Trash

Use realistic macOS icon styling, subtle translucency, soft reflections, and restrained size.

VISUAL QUALITY:
Photorealistic desktop screenshot presentation, ultra-clean edges, accurate icon geometry, crisp typography, natural shadows, subtle glassmorphism, high dynamic range, refined lighting, balanced negative space, premium Apple-inspired design language.

The final image must look like a real personalized macOS desktop rather than a poster or mockup.

No computer hardware, monitor frame, keyboard, mouse, perspective view, open windows, browser tabs, banners, advertisements, large text, wallpapers containing duplicate characters, extra subjects, or additional desktop icons.

Output: one finished high-resolution 16:9 edge-to-edge desktop screenshot.

========== VIDEO PROMPT ==========

Create a 10-second horizontal 16:9 cinematic video using the provided macOS desktop screenshot as the EXACT first frame and visual reference.

IMPORTANT:
Preserve the reference image exactly as the starting frame. Do not redesign, replace, or regenerate the desktop environment. Maintain the same mountain lake background, warm sunset lighting, wooden desk, fluffy brown-and-white cat wearing large silver headphones, laptop, plant, books, coffee mug, macOS menu bar, 18 desktop application icons, and bottom Dock.

CHARACTER:
Keep the exact cat appearance, fur pattern, face, eyes, ears, headphones, body proportions, lighting, and position from the reference. The cat is sitting on the FAR RIGHT side of the desktop beside the laptop.

CAMERA:
Static front-facing camera.
No camera movement.
No zoom.
No pan.
No cuts.
One continuous shot.
Maintain exact 16:9 composition.

TIMELINE:

0–1.5s:
The cat remains completely calm in its original pose.
It sits beside the laptop with the headphones around its ears.
Its eyes slowly blink.
Its nose twitches slightly.
The ears make a tiny natural movement.
The desktop wallpaper, menu bar, all icons, Dock, laptop, books, mug and background remain completely stationary.

1.5–2.5s:
The cat suddenly sneezes.

Its head quickly moves forward and slightly toward the LEFT.
Its ears twitch and its headphones bounce naturally.
Its fur and whiskers react to the sneeze.
A small visible soft air puff travels from the cat toward the desktop icons.

The air puff accidentally knocks ONLY THREE desktop icons loose:

Gmail
Discord
Microsoft Teams

These three icons leave their original positions in the RIGHTMOST desktop-icon column.

They physically rotate and fall downward into the open desktop area above the Dock near the center-left.

Each icon moves separately.
Each icon lands with a small realistic bounce.

Their original positions become visibly empty.

ALL OTHER ICONS MUST REMAIN PERFECTLY STATIONARY.

2.5–3.3s:
The cat immediately freezes after sneezing.

Its eyes become slightly wider.
Its ears tilt backward.
It looks toward the fallen icons with a surprised and embarrassed expression.

The cat briefly looks toward the viewer as if pretending nothing happened.

Then it looks back at the fallen icons.

3.3–7.8s:
The cat hurriedly fixes the three fallen icons ONE AT A TIME.

FIRST — Gmail:
The cat reaches toward the fallen Gmail icon.
Its paw carefully touches and grips the icon.
It lifts Gmail from the desktop.
The cat carries Gmail toward its original empty position.
It places Gmail precisely back into its original location.
The Gmail logo and label remain unchanged.
A small gentle click is heard.

SECOND — Discord:
Only after Gmail has been restored, the cat reaches down toward the fallen Discord icon.
It picks Discord up individually.
It carries Discord back to its original empty position.
It releases Discord precisely into place.
A second gentle click is heard.

THIRD — Microsoft Teams:
Only after Discord has been restored, the cat reaches for Microsoft Teams.
It picks the Teams icon up individually.
It carries it back to its original position.
It carefully releases it into the empty grid position.
A third gentle click is heard.

IMPORTANT PHYSICAL ACTION RULES:
Every icon must visibly leave its original position, fall, land, be physically picked up, carried, and placed back.

Do NOT:
- restore icons automatically
- teleport icons
- make icons snap back from a distance
- move multiple icons simultaneously
- scoop multiple icons together
- stack icons
- duplicate icons
- morph logos
- change icon labels

The cat must interact with each icon separately.

The cat's paws must remain anatomically natural.
No extra paws.
No stretched limbs.
No distorted body.
No impossible reach.

7.8–10s:
After restoring Microsoft Teams, the cat quickly returns to its original position beside the laptop.

It sits upright again with the headphones correctly positioned.

The cat tries to look completely innocent.

It gently blinks.
Its ears settle.
Its whiskers and fur stop moving.

The cat briefly glances toward the restored icons, then looks forward again.

End with the cat sitting calmly in almost exactly the same pose as the first frame.

The final desktop must match the original reference composition.

VISUAL STYLE:
Photorealistic cinematic desktop environment.
Natural animal movement.
Realistic fur physics.
Subtle headphone movement.
Natural paw interaction.
Soft warm sunset lighting.
Realistic shadows.
Realistic depth of field.
Premium Apple-style desktop presentation.

PRESERVE:
- exact macOS menu bar
- exact desktop wallpaper
- exact 18 application icons
- exact icon positions
- exact labels
- exact Dock
- laptop
- books
- mug
- plant
- cat
- headphones
- lighting
- colors
- composition

ONLY Gmail, Discord and Microsoft Teams are allowed to move.

AUDIO:
Light playful piano and subtle pizzicato music.
One cute realistic cat sneeze.
Short airy whoosh during the sneeze.
Three soft icon landing sounds.
Three distinct gentle clicks when Gmail, Discord and Microsoft Teams are restored.
Brief music pause during the cat's shocked reaction.
No dialogue.
No subtitles.
No text overlays.

FINAL FRAME:
All three icons must be restored to their exact original positions.
No missing icons.
No duplicated icons.
No changed logos.
No extra objects.
The cat returns to its original pose and looks innocent.

The final frame should closely match the first frame.`,
    },
  },
  {
    id: "yangonchain-oriental-leaf-tea-moment",
    title: "东方树叶概念广告 · 把这一刻还给自己",
    subtitle: "X · @YangOnchain · 未标明模型 / 概念广告 · 30秒 · 16:9",
    description:
      "东方树叶非官方概念广告：水墨小茶客走出瓶标，提醒刷手机的女孩放下手机。",
    video: "/tutorials/yangonchain-oriental-leaf-tea-moment/demo-web.mp4",
    poster: "/tutorials/yangonchain-oriental-leaf-tea-moment/poster.jpg",
    duration: "30秒",
    durationSec: 30,
    styleLabel: "写实水墨",
    shots: 7,
    references: 1,
    model: "未标明 / 概念广告",
    style: "写实商业摄影 · 2.5D 水墨角色",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/YangOnchain/status/2101913629717381374",
    sourceAuthor: "@YangOnchain",
    sourcePlatform: "X",
    sourceImpressions: 3736,
    sourceStats: { asOf: "2026-09-25", likes: 26, reposts: 1, bookmarks: 14 },
    formats: ["产品广告", "破壁出屏"],
    hook: {
      structure: "刷手机 → 小人提醒 → 放下手机喝茶 → 品牌卡",
      opening: "野餐毯上，女孩趴着刷手机，前景一瓶东方树叶，瓶身上的水墨小人走下来，扛着一片茶叶。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 3s 字幕「人出来了」，约 4s「心还在手机里」；约 5–6s 小人举起叶子挡到她手机前，约 7s 她笑了。", at: 3 },
        { title: "关键变化", text: "约 8s 她坐起来拧开茶，约 14–16s 茶汤和茶叶微距，约 17s 手机扣在毯上，和朋友们野餐。", at: 8 },
        { title: "结尾怎么收", text: "约 26s 米白底品牌卡「东方树叶」，约 27s 标语「把这一刻，还给自己」。", at: 26 },
      ],
      copyThis: "让瓶身上的插画小人走进实拍画面当「推动者」，两句字幕就把痛点说清。",
      approx: true,
    },
    tags: [
      "30秒 · 7段叙事",
      "16:9 横屏",
      "概念广告",
      "2.5D 水墨角色",
      "产品广告叙事",
    ],
    steps: [
      {
        number: 1,
        title: "准备 5 张参考图 01–05",
        description:
          "01_多多身份:负责多多的脸型、五官、肤色与发色。02_绿白穿搭:负责衣服、鞋子,不继承为人物脸。03_东方树叶绿茶_实物参考:唯一产品外观依据,透明有棱面 PET 瓶、透明浅色旋盖、绿色瓶颈标签、奶油白长标签和下部建筑插画。04_小茶客:唯一动画角色的造型,8-10cm 高原创 2.5D 水墨角色,黑色手绘轮廓、米白纸感填色、圆软帽、小背包、布鞋。05_无人野餐场景:负责环境、摆设与光向;场景参考中无人是素材分工要求,成片仍应出现多多与三位好友。注意:帖内未附 01–05 参考图文件,仅文字指定按文件名识别,需自备参考图。",
      },
      {
        number: 2,
        title: "理解叙事结构与时间线",
        description:
          "30 秒包含连续推进的新事件,不把 18 秒内容减速拉长,不增加无信息空镜,不使用全程慢动作。始终在同一片城市公园草坪,奶油白野餐垫、浅藤色篮子、三明治、绿色葡萄、青苹果、合上的书和薄餐巾,大树在右后方,阳光从右后方斜入。前段声音较窄、画面略克制,放下手机后逐步打开色彩与环境声。",
      },
      {
        number: 3,
        title: "粘贴完整 30 秒提示词",
        description:
          "使用下方完整提示词。关键约束:只有同一瓶和同一瓶盖,状态依次:垫上封盖→右手持瓶、左手开盖→喝一口、左掌留盖→右手放回开盖瓶→空右手揭餐巾→左手旋紧盖→产品稳定留在原位。盖子不落地、不瞬移,手机反扣后不再亮屏。小茶客始终一个,衣帽、背包、纸感和比例不变;出入标签是广告中的绘画空间表现,除此之外只在现实表面行走,不飞行、不魔法、不变成真人。它的离开与返回不能改变包装品牌字、瓶型或建筑图案。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "参考 01",
        title: "提示词卡片截图",
        subtitle: "原帖附图 · 文字提示词卡片",
        image: "/tutorials/yangonchain-oriental-leaf-tea-moment/ref-prompt-card.png",
        prompt: `原帖附图为提示词文字卡片截图,非可视参考图。帖内自述按上传文件名识别素材:01_多多身份、02_绿白穿搭、03_东方树叶绿茶_实物参考、04_小茶客、05_无人野餐场景,但帖内未附这些文件,需自备。`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0—3s:瓶身低机位近景,产品在前景右侧清晰,多多在后景左侧低头刷手机,三位朋友再后方自然分享食物。镜头轻微向瓶身推进:小茶客从标签下部建筑插画的门洞探出头,先看手机方向,再扶着画面边缘跨出、脚落到野餐垫上;本来是印刷画面的入口恢复平整,不留破洞。一片小绿叶被真实微风吹到瓶旁。首三秒完成'包装中的空间走出一个小人'的可见钩子,不用空镜铺垫。极轻纸张掀动、布面落脚声。女声画外音自然略带笑意:'人出来了,心还在手机里?' 音乐只有轻拨弦和稀疏打击,朋友声轻而远。",
      },
      {
        number: 2,
        description:
          "3—7s:贴着垫面的侧向跟拍,保持从瓶子朝多多手机的方向运动。小茶客一脚踩叶、另一脚蹬垫面,借一阵风向多多滑去,抬手招呼;多多仍在刷屏,没有看见。小茶客滑过了她视线,立即用一脚蹭垫面减速,身体微微前倾停住,回头发现白招呼了,扶正帽子。动作轻巧而真实,不摔飞、不用速度线。叶片摩擦布纹,音乐在它回头时轻轻空半拍,拒绝夸张卡通摔倒声。",
      },
      {
        number: 3,
        description:
          "7—10s:多多与垫边的小茶客同框的中近景,机位固定。小茶客从叶子上下来,站在手机旁的垫面上,双手把叶子举高,在多多视线下沿挥两下,再指向三位朋友,随后把同一片叶子平放在自己脚边。多多拇指停住,视线落到它身上,忍不住笑;小茶客先退开手机落点,多多才将手机屏幕朝下放到自己左侧的野餐垫上。手机从此不再被拿起。手机接触垫面的清楚'嗒'声是音乐打开的拍点,贝斯、吉他和自然环境声加入;不为了拍情绪额外停顿。",
      },
      {
        number: 4,
        description:
          "10—14s:多多人物近景,镜头轻微前推。多多右手拿起同一瓶绿茶,左手握住旋盖逆时针旋开,瓶盖完整留在左掌;右手送瓶口到嘴边,喝一口并自然吞咽,然后瓶口离开嘴唇。她听见朋友笑声,顺势把目光转向朋友,肩膀自然舒展。以动作完成情绪变化,不昂头灌、不把瓶身挤扁。先是握瓶轻响和旋盖'咔',再一次轻微吞咽;音乐舒展,风吹树叶和远处鸟鸣变清楚,无新增旁白。喝完后液位只略降一次,之后保持。",
      },
      {
        number: 5,
        description:
          "14—17s:硬切同一瓶上的冷凝水珠特写,水珠亮部匹配切到独立的茶汤意象微距。清透浅金黄色液面形成轻盈弧面,两片嫩茶叶在流动里轻轻翻转,镜头沿曲面向前,叶片掠过镜头完成遮挡。此处是茶香与茶汤质感的广告意象,不表示实际瓶里突然出现固体茶叶;不出现汽水泡、牛奶、果汁、冰块或浑浊液体。小茶客不进入液体世界。仅细腻液体声和少量清亮音乐音色,保持三秒紧凑,不长时间慢放。",
      },
      {
        number: 6,
        description:
          "17—21s:叶片遮挡切回同一垫边,固定中近景,小茶客与多多右手可见。先看见多多把开盖瓶用右手稳稳放回右前方原位置;左手继续握着瓶盖。餐巾已经摊开一个薄角,一阵风只掀起这张餐巾的单层薄角,落下恰好罩住小茶客,餐巾鼓起一个小包,它从边角顶出歪帽子。多多用已经空出的右手捏起餐巾一角,将它揭开并压回垫面。小茶客扶正帽子,站直,装作刚才什么也没发生,多多短促轻笑。必须先放瓶再揭餐巾,不能同时握瓶和揭餐巾。布料轻扑声、小脚摩擦声与笑声清楚,音乐给动作留空间,不加惊吓声。",
      },
      {
        number: 7,
        description:
          "21—30s:同侧广一点的四人野餐中景,镜头沿垫边轻微横移。多多先用右手扶稳瓶身,左手将一直握着的同一个瓶盖顺时针旋紧,随后双手离开、产品仍直立原位置。后中的浅蓝衬衫朋友递来一颗绿色葡萄,多多用空出的右手接过,抬头接上大家的话题,自然笑起来。前景小茶客坐到瓶旁,拾起脚边同一片叶子举作小遮阳棚,往阴影里挪半步,也终于歇下来。手机仍反扣在多多左侧。音乐最舒展,盖子旋紧声、轻笑与树叶声自然可闻。26—30s:产品英雄近景,瓶子居画面左侧,瓶身占画面高约六成,完整瓶盖和瓶底都在画内,右侧留干净浅草色虚化空间。人物保持在后方原位置自然聊天、轻微虚焦。小茶客回头确认多多没有再刷手机,满意点头,收起叶子,把叶子留在垫上,走到标签下部同一个建筑入口,逐步压回二维画中并消失在门内,包装恢复实物参考的原貌;不要在标签上多印一个小人,不溶解品牌文字。镜头前段轻推,最后约 1.5 秒稳定展示。右侧出现两行清楚的深墨绿文字:'东方树叶''把这一刻,还给自己。' 这句是本概念片文案,不加官方广告或联名署名。画外女声:'东方树叶,把这一刻还给自己。' 音乐减鼓点,以轻柔两音收束,保留风和朋友笑声;自创收尾音,不冒充品牌已有声标。",
      },
    ],
    constraints:
      "帖内未附 01–05 参考图文件,仅文字指定按文件名识别,需自备;全片只有同一瓶和同一瓶盖,盖子不落地、不瞬移;手机反扣后不再亮屏;小茶客始终一个,出入标签是绘画空间表现,除此之外只在现实表面行走,不飞行、不魔法;它的离开与返回不能改变包装品牌字、瓶型或建筑图案;全片只有一个公园空间、同一光源方向与同一野餐布置。",
    video_prompt: {
      title: "Oriental Leaf Tea Concept Ad · Return This Moment to Yourself · 30s",
      subtitle: "Unspecified model / Concept ad · 16:9 · Picture01–05 refs (not attached in post)",
      content: `平台/说明:非官方东方树叶绿茶 AI 概念短片《把这一刻,还给自己》(作者 @YangOnchain)。成片为 30 秒 16:9。跟做需自备参考图:01_多多身份、02_绿白穿搭、03_东方树叶绿茶_实物参考、04_小茶客、05_无人野餐场景(帖内自述按文件名识别)。

提示词全文:

生成一条完整 30 秒、16:9 横屏的东方树叶绿茶概念广告《把这一刻,还给自己》。30 秒包含连续推进的新事件,不把 18 秒内容减速拉长,不增加无信息空镜,不使用全程慢动作。写实商业摄影与一位克制的 2.5D 水墨角色结合。画面目标为清晰细腻的商业广告质感,实际输出分辨率及帧率由生成界面设置,不用 "4K" 替代真实参数。 按上传文件名识别素材:01_多多身份只负责多多的脸型、五官、肤色与发色;02_绿白穿搭只负责衣服、鞋子,不继承为人物脸;03_东方树叶绿茶_实物参考是唯一产品外观依据;04_小茶客负责唯一动画角色的造型;05_无人野餐场景负责环境、摆设与光向。场景参考中无人是素材分工要求,成片仍应出现多多与三位好友。不要把素材排列成拼图、轮播或逐张转场,不照搬身份卡的证件照构图。 始终在同一片城市公园草坪。奶油白野餐垫、浅藤色篮子、三明治、绿色葡萄、青苹果、合上的书和薄餐巾的位置参考场景图。大树在右后方,阳光从右后方斜入。草地有细微不整齐的纹理,食物和餐具是真正正在使用的状态。自然草绿、鼠尾草绿、奶油白、清透金黄色茶汤与柔和暖金阳光;人物真实肤质,绿叶有透光层次,瓶身折射可信,不荧光、不磨皮。前段声音较窄、画面略克制,放下手机后逐步打开色彩与环境声,不能改变天气和太阳方向。 原创轻盈 indie pop 与轻电子配乐,约 100 BPM,木质打击、轻贝斯、少量吉他拨弦与空气感音色;不模仿现成歌曲。仅指定的两句普通话画外音可朗读,其他文字都是导演说明。朋友可有模糊交谈与笑声,不额外生成可辨识对白,不显示旁白字幕。 【主体定义】 多多:唯一主角,严格沿用 01 身份卡的成年中国女性外貌,自然黑色中长发、轻微卷度、清透日常妆;穿 02 的鼠尾草绿短袖针织上衣、奶油白宽松长裙、浅棕平底鞋。原身份卡的白色上衣不继承。表演从拇指机械刷屏、没接住朋友目光,逐步变为主动看人、动手帮忙、加入聊天,情绪在动作中发生,不专门停下来摆 "放松" 的表情。 三位好友为固定背景配角:短发米白衬衫女生在垫后左;低马尾浅蓝衬衫女生在后中;黑短发浅卡其上衣男生在后右。多多在前左,身体朝向好友。全片同四位真人,好友不换脸、不换装、不交换位置,镜头保持同侧观察,不做越轴反打。 产品:全片同一瓶 03 中的 500ml 东方树叶绿茶,透明有棱面 PET 瓶,透明浅色旋盖、绿色瓶颈标签、奶油白长标签和下部建筑插画。品牌 "东方树叶"、绿茶名称、瓶型、标识位置与清透金黄色茶汤以实物参考为准。不能沿用 nōni 虚构包装、奶油白盖或浅绿色荧光茶汤。瓶身少量细密冷凝水珠,不改造成玻璃瓶或汽水。产品从首镜开始在多多右前方、靠镜头的垫边直立,标签朝镜头,手机在多多右手;其余位置不出现第二瓶饮料。 小茶客:04 所示唯一 8—10 厘米高的原创 2.5D 水墨角色,黑色手绘轮廓、米白纸感填色、圆软帽、小背包、布鞋,只有极浅体积。它是本支概念广告的原创角色,不是宣称真实包装本来印有的官方人物。它从标签下部建筑插画的画中空间走出来,结束后回到同一画中入口;标签文字、建筑布局不重绘、不移动。它有重量和落脚点,会跑、蹬地、扶帽和举叶子,不说话、不发光、不瞬移。整片只有同一个小茶客和同一片滑行用落叶。 【时间线分镜与声音】 0—3 秒|瓶身低机位近景,产品在前景右侧清晰,多多在后景左侧低头刷手机,三位朋友再后方自然分享食物。镜头轻微向瓶身推进:小茶客从标签下部建筑插画的门洞探出头,先看手机方向,再扶着画面边缘跨出、脚落到野餐垫上;本来是印刷画面的入口恢复平整,不留破洞。一片小绿叶被真实微风吹到瓶旁。首三秒完成 "包装中的空间走出一个小人" 的可见钩子,不用空镜铺垫。极轻纸张掀动、布面落脚声。女声画外音自然略带笑意:"人出来了,心还在手机里?" 音乐只有轻拨弦和稀疏打击,朋友声轻而远。 3—7 秒|贴着垫面的侧向跟拍,保持从瓶子朝多多手机的方向运动。小茶客一脚踩叶、另一脚蹬垫面,借一阵风向多多滑去,抬手招呼;多多仍在刷屏,没有看见。小茶客滑过了她视线,立即用一脚蹭垫面减速,身体微微前倾停住,回头发现白招呼了,扶正帽子。动作轻巧而真实,不摔飞、不用速度线。叶片摩擦布纹,音乐在它回头时轻轻空半拍,拒绝夸张卡通摔倒声。 7—10 秒|多多与垫边的小茶客同框的中近景,机位固定。小茶客从叶子上下来,站在手机旁的垫面上,双手把叶子举高,在多多视线下沿挥两下,再指向三位朋友,随后把同一片叶子平放在自己脚边。多多拇指停住,视线落到它身上,忍不住笑;小茶客先退开手机落点,多多才将手机屏幕朝下放到自己左侧的野餐垫上。手机从此不再被拿起。手机接触垫面的清楚 "嗒" 声是音乐打开的拍点,贝斯、吉他和自然环境声加入;不为了拍情绪额外停顿。 10—14 秒|多多人物近景,镜头轻微前推。多多右手拿起同一瓶绿茶,左手握住旋盖逆时针旋开,瓶盖完整留在左掌;右手送瓶口到嘴边,喝一口并自然吞咽,然后瓶口离开嘴唇。她听见朋友笑声,顺势把目光转向朋友,肩膀自然舒展。以动作完成情绪变化,不昂头灌、不把瓶身挤扁。先是握瓶轻响和旋盖 "咔",再一次轻微吞咽;音乐舒展,风吹树叶和远处鸟鸣变清楚,无新增旁白。喝完后液位只略降一次,之后保持。 14—17 秒|硬切同一瓶上的冷凝水珠特写,水珠亮部匹配切到独立的茶汤意象微距。清透浅金黄色液面形成轻盈弧面,两片嫩茶叶在流动里轻轻翻转,镜头沿曲面向前,叶片掠过镜头完成遮挡。此处是茶香与茶汤质感的广告意象,不表示实际瓶里突然出现固体茶叶;不出现汽水泡、牛奶、果汁、冰块或浑浊液体。小茶客不进入液体世界。仅细腻液体声和少量清亮音乐音色,保持三秒紧凑,不长时间慢放。 17—21 秒|叶片遮挡切回同一垫边,固定中近景,小茶客与多多右手可见。先看见多多把开盖瓶用右手稳稳放回右前方原位置;左手继续握着瓶盖。餐巾已经摊开一个薄角,一阵风只掀起这张餐巾的单层薄角,落下恰好罩住小茶客,餐巾鼓起一个小包,它从边角顶出歪帽子。多多用已经空出的右手捏起餐巾一角,将它揭开并压回垫面。小茶客扶正帽子,站直,装作刚才什么也没发生,多多短促轻笑。必须先放瓶再揭餐巾,不能同时握瓶和揭餐巾。布料轻扑声、小脚摩擦声与笑声清楚,音乐给动作留空间,不加惊吓声。 21—26 秒|同侧广一点的四人野餐中景,镜头沿垫边轻微横移。多多先用右手扶稳瓶身,左手将一直握着的同一个瓶盖顺时针旋紧,随后双手离开、产品仍直立原位置。后中的浅蓝衬衫朋友递来一颗绿色葡萄,多多用空出的右手接过,抬头接上大家的话题,自然笑起来;不要求这几秒内再完成吃葡萄的动作。前景小茶客坐到瓶旁,拾起脚边同一片叶子举作小遮阳棚,往阴影里挪半步,也终于歇下来。手机仍反扣在多多左侧。音乐最舒展,盖子旋紧声、轻笑与树叶声自然可闻。 26—30 秒|产品英雄近景,瓶子居画面左侧,瓶身占画面高约六成,完整瓶盖和瓶底都在画内,右侧留干净浅草色虚化空间。人物保持在后方原位置自然聊天、轻微虚焦。小茶客回头确认多多没有再刷手机,满意点头,收起叶子,把叶子留在垫上,走到标签下部同一个建筑入口,逐步压回二维画中并消失在门内,包装恢复实物参考的原貌;不要在标签上多印一个小人,不溶解品牌文字。镜头前段轻推,最后约 1.5 秒稳定展示。右侧出现两行清楚的深墨绿文字:"东方树叶""把这一刻,还给自己。" 这句是本概念片文案,不加官方广告或联名署名。画外女声:"东方树叶,把这一刻还给自己。" 音乐减鼓点,以轻柔两音收束,保留风和朋友笑声;自创收尾音,不冒充品牌已有声标。 【统一约束】 人物保持多多身份与独立服装参考一致;三位好友固定后左、后中、后右,整片四位真人。表演连续且有生活感,不能复制多多、换脸或用静止肖像代替动作。 只有同一瓶和同一瓶盖。状态依次:垫上封盖→右手持瓶、左手开盖→喝一口、左掌留盖→右手放回开盖瓶→空右手揭餐巾→左手旋紧盖→产品稳定留在原位。盖子不落地、不瞬移,手机反扣后不再亮屏。左右手指和瓶口接触正确,不穿模。 小茶客始终一个,衣帽、背包、纸感和比例不变;出入标签是广告中的绘画空间表现,除此之外只在现实表面行走,不飞行、不魔法、不变成真人。它的离开与返回不能改变包装品牌字、瓶型或建筑图案。 全片只有一个公园空间、同一光源方向与同一野餐布置。转场依靠动作、遮挡或明确硬切,不用连续叠化伪装空间变化,不添加发光线、粒子或无意义旋转。除瓶身原有印刷和最后两行片尾文字,不生成其他字幕、水印、二维码或虚构功效卖点。瓶标微小文字以实物参考保留,不另写伪造内容。`,
    },
  },
  {
    id: "krevix-auto-service-reels-omni",
    title: "汽车服务创意 Reels · 迷你宝马 ASMR 组装到全尺寸硬切",
    subtitle: "X · @KrevixAi · Gemini Omni · 10秒 · 16:9",
    description:
      "Gemini Omni 汽车 ASMR：手中组装迷你宝马、喷红，再硬切成真车冲向镜头。",
    video: "/tutorials/krevix-auto-service-reels-omni/demo-web.mp4",
    poster: "/tutorials/krevix-auto-service-reels-omni/poster.jpg",
    duration: "10秒",
    durationSec: 10,
    styleLabel: "写实广告",
    shots: 3,
    references: 1,
    model: "Gemini Omni",
    style: "ASMR 产品组装 · 匹配硬切",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2101930638022410525",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 12504,
    sourceStats: { asOf: "2026-09-25", likes: 230, reposts: 26, bookmarks: 265 },
    formats: ["拆装·制作过程", "产品广告"],
    hook: {
      structure: "微缩组装 ASMR → 喷漆抛光 → 硬切成真车",
      opening: "白色台面上，黑手套正在组装一台白色微缩宝马，约 0.5s 直接怼到打开的引擎舱特写。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1.5s 装刹车盘，约 2s 红色卡钳，约 2.5–3s 装轮毂拧螺丝，约 3.5s 内饰，约 4s 大灯；约 5.5s 白车完工。", at: 1.5 },
        { title: "关键变化", text: "约 6s 喷枪喷成红色，约 6.5s 抛光机打磨；约 7.3s 手指还捏着小车，约 8s 硬切到影棚转台上的红车，看起来已是真车尺寸。", at: 6 },
        { title: "结尾怎么收", text: "约 9–9.5s 推到车头格栅特写，约 9.8s 又切回白车大灯特写。", at: 9 },
      ],
      copyThis: "前 7 秒全用手部特写建立「这是模型」，最后一刀硬切到转台大全景，尺寸感瞬间翻转。",
      approx: true,
    },
    tags: [
      "10秒 · ASMR 组装",
      "16:9 横屏",
      "Gemini Omni",
      "匹配硬切",
      "汽车产品视频",
    ],
    steps: [
      {
        number: 1,
        title: "可选:先生成 16 格故事板",
        description:
          "作者原帖提供了完成的 16 格故事板图片(1280×720,标题 BMW — THE PERFECT CLICK x MICRO PAINT LAB),但未发布生成故事板的文生图提示词。可自行设计故事板或直接用文字提示词生成视频。参考故事板见下方。",
      },
      {
        number: 2,
        title: "在 Gemini Omni Create Video 生成",
        description:
          "如有故事板,上传到 Gemini Omni 的 Create Video 部分。粘贴完整视频提示词。如无故事板,直接用文字提示词生成。",
      },
      {
        number: 3,
        title: "粘贴完整 10 秒提示词",
        description:
          "使用下方完整提示词。关键:第一人称 POV,26–28mm 镜头,明亮白色工作室背景,白色丝绸手套,仅真实物理。0–5s 快速组装微型白色宝马,展示极端微距细节和明显微缩比例尺。5s 完成的白色宝马被喷涂真实湿润深红汽车漆,清楚地从白色→红色变化,然后抛光成深镜面光泽。8.5s 展示微型红色宝马前四分之三英雄角度→硬剪切匹配到完全相同角度的全尺寸真实红色宝马。引擎启动,车身振动,LED 大灯打开,然后宝马猛烈直冲向镜头→硬剪切黑场。快速剪辑,真实物理,金属、碳纤维、皮革、橡胶和玻璃,强烈咔哒/啪/咔哒 ASMR,高级德国精密,无魔法、变形、粒子或数字变换。",
      },
    ],
    references_detail: [
      {
        id: "ref1",
        number: "参考 01",
        title: "16 格故事板",
        subtitle: "作者提供 · 1280×720",
        image: "/tutorials/krevix-auto-service-reels-omni/storyboard.jpg",
        prompt: `16 格故事板,作者原帖附图,标题 BMW — THE PERFECT CLICK x MICRO PAINT LAB。注意:作者未发布生成此故事板的文生图提示词,仅发布了完成的故事板图片与视频生成提示词。`,
      },
    ],
    storyboard: [
      {
        number: 1,
        description:
          "0–1s:纯白工作室,黑手套巨大男性双手持微型白色宝马引擎块,插入→咔哒",
      },
      {
        number: 2,
        description:
          "1–2s:连接微型电子零件到底盘→啪,特写微距细节",
      },
      {
        number: 3,
        description:
          "2–3s:安装红色刹车卡钳和车轮→咔,清楚微缩比例尺:整车小于一只手",
      },
      {
        number: 4,
        description:
          "3–4s:装配方向盘和大灯→啪,快速剪辑保持节奏",
      },
      {
        number: 5,
        description:
          "4–5s:装配前保险杠并合上引擎盖→咔哒,完成的白色宝马微缩车",
      },
      {
        number: 6,
        description:
          "5–6.5s:真实湿润深红汽车漆喷涂微型白色宝马,清楚地从白色→红色变化,湿漆流动可见",
      },
      {
        number: 7,
        description:
          "6.5–8.5s:抛光成深镜面光泽,手套在红色车身表面擦拭,反射清晰",
      },
      {
        number: 8,
        description:
          "8.5s:微型红色宝马前四分之三英雄角度展示",
      },
      {
        number: 9,
        description:
          "8.5s:→硬剪切匹配到完全相同角度的全尺寸真实红色宝马在大型白色工作室内",
      },
      {
        number: 10,
        description:
          "8.5–9.5s:引擎启动轰鸣,车身振动,LED 大灯闪亮打开",
      },
      {
        number: 11,
        description:
          "9.5–10s:宝马猛烈直冲向镜头加速→硬剪切黑场结束",
      },
    ],
    constraints:
      "作者未发布生成故事板的文生图提示词,仅有完成的故事板图片与视频提示词;快速剪辑、真实物理、无魔法变形;5s 喷漆必须清楚地从白色→红色变化;8.5s 硬剪切匹配必须完全相同角度。",
    video_prompt: {
      title: "Auto Service Creative Reels · Mini BMW ASMR → Full-Size Match Cut · 10s",
      subtitle: "Gemini Omni Create Video · 16:9 · Optional 16-panel storyboard upload",
      content: `Create a 10-second ultra-photorealistic 16:9 automotive ASMR video, first-person POV in a clean white studio. Giant male hands in matte-black gloves rapidly assemble a tiny realistic 1:12 white BMW: insert engine → THUNK, connect electronics → SNAP, install red brake calipers and wheels → CLICK, attach steering wheel and headlights → SNAP, fit front bumper and close hood → THUNK. Show extreme macro details and obvious miniature scale: the whole car is smaller than a hand. At 5s the finished white BMW is spray-painted with real wet crimson-red automotive paint, clearly changing WHITE → RED, then polished to a deep mirror gloss. At 8.5s show the tiny red BMW in front three-quarter hero angle → HARD MATCH CUT to a full-size real red BMW in exactly the same angle inside a large white studio. Engine starts, body vibrates, LED headlights turn on, then the BMW launches aggressively straight toward the camera → HARD CUT TO BLACK. Fast cuts, realistic physics, metal, carbon, leather, rubber and glass, strong CLICK/SNAP/THUNK ASMR, premium German precision, no magic, morphing, particles or digital transformation.`,
    },
  },
  {
    id: "noorwithwifi-wendys-cheeseburger-seedance",
    title: "Wendy's 双层芝士汉堡广告",
    subtitle: "X · @noorwithwifi · Seedance 2.5 · 13秒 · 4:3",
    description:
      "Seedance 2.5 食品广告：戴黑手套的厨师做 Wendy's 双层芝士汉堡，4:3 复古画幅。",
    video: "/tutorials/noorwithwifi-wendys-cheeseburger-seedance/demo-web.mp4",
    poster: "/tutorials/noorwithwifi-wendys-cheeseburger-seedance/poster.jpg",
    duration: "13秒",
    durationSec: 13,
    styleLabel: "写实广告",
    shots: 1,
    references: 0,
    model: "Seedance 2.5",
    style: "商业食品广告 · 4:3 复古画幅",
    aspectRatio: "4/3",
    sourceUrl: "https://x.com/noorwithwifi/status/2101955160696336440",
    sourceAuthor: "@noorwithwifi",
    sourcePlatform: "X",
    sourceImpressions: 7751,
    sourceStats: { asOf: "2026-09-25", likes: 161, reposts: 18, bookmarks: 91 },
    formats: ["产品广告", "拆装·制作过程"],
    hook: {
      structure: "逐层组装 → 成品举到镜头前",
      opening: "黑手套按住一只烤得金黄的汉堡面包，背景是穿制服的店员——开场就是食物大特写。",
      openingAt: 0,
      beats: [
        { title: "过程怎么推进", text: "约 1s 生牛肉饼，约 2s 压扁煎，约 3–5s 芝士片落下融化，约 6–7s 挤酱，约 8s 盖上生菜番茄和面包。", at: 1 },
        { title: "成品揭晓", text: "约 9s 双手捧起双层芝士汉堡正对镜头，约 11s 镜头拉开露出店员的脸，约 12s 画面收在人和汉堡。", at: 9 },
      ],
      copyThis: "每一层只给 1 秒特写，芝士融化给足 2 秒，最后双手把成品举到镜头正中。",
      approx: true,
    },
    tags: [
      "13秒 · 商业广告",
      "4:3 复古画幅",
      "Seedance 2.5",
      "食品广告",
      "ASMR 质感",
    ],
    steps: [
      {
        number: 1,
        title: "设定 Wendy's 商业厨房场景",
        description:
          "厨师穿黑手套和 Wendy's 制服,在热平板烤架上工作。纯白或中性商业厨房背景,温暖光线照亮食材和烤架,柔焦背景突出产品。电影角度拍摄制备过程。",
      },
      {
        number: 2,
        title: "理解 4:3 复古广告画幅",
        description:
          "此视频为 4:3 画幅(960×720),不是常见的 16:9。4:3 复古画幅适合经典商业广告风格,聚焦产品和手部动作,减少水平空间干扰。",
      },
      {
        number: 3,
        title: "粘贴完整提示词",
        description:
          "使用下方完整 Seedance 2.5 提示词。关键要素:黑手套、Wendy's 制服、芝麻面包烤制、方形牛肉饼按压滋滋作响冒蒸汽、黄色美式奶酪融化、蛋黄酱涂抹底部面包、层叠两片奶酪肉饼与生菜番茄洋葱泡菜番茄酱蛋黄酱、加上顶部面包、最后厨师手持完成汉堡朝镜头带微妙微笑。温暖光线、光泽质感、电影角度、柔焦背景。",
      },
    ],
    references_detail: [],
    storyboard: [
      {
        number: 1,
        description:
          "0–3s:芝麻面包在热平板烤架上烤制,黑手套厨师手翻动面包,烤制痕迹出现",
      },
      {
        number: 2,
        description:
          "3–6s:新鲜方形牛肉饼放在烤架上,黑手套手按压肉饼,滋滋作响冒蒸汽,肉饼表面焦化",
      },
      {
        number: 3,
        description:
          "6–8s:黄色美式奶酪片放在热肉饼上,逐渐融化流动,奶酪边缘微微卷起",
      },
      {
        number: 4,
        description:
          "8–10s:蛋黄酱涂抹在底部芝麻面包上,层叠第一片奶酪肉饼,加生菜、番茄片、洋葱圈、泡菜片",
      },
      {
        number: 5,
        description:
          "10–11s:层叠第二片奶酪肉饼,加番茄酱和蛋黄酱,盖上顶部芝麻面包",
      },
      {
        number: 6,
        description:
          "11–13s:动态特写:厨师戴黑手套双手手持完成的双层芝士汉堡朝向镜头,带微妙微笑,温暖光线,光泽质感,柔焦背景,汉堡层次清晰可见",
      },
    ],
    video_prompt: {
      title: "Wendy's Double Cheeseburger Commercial · 13s",
      subtitle: "Seedance 2.5 · 4:3 vintage ad aspect ratio · commercial ASMR",
      content: `Seedance 2.5

Prompt:

Create a commercial-style food video of a cook in black gloves and a Wendy's uniform preparing a double cheeseburger on a hot flat-top grill. Show sesame buns toasting, fresh square beef patties being pressed and sizzling with steam, yellow American cheese melting, mayonnaise spread on the bottom bun, then layer two cheesy patties with lettuce, tomato, onions, pickles, ketchup, and mayonnaise before adding the top bun. Finish with a dynamic close-up of the chef holding the completed burger toward the camera with a subtle smile, using warm lighting, glossy textures, cinematic angles, and a soft-focus background.`,
    },
  },
];

export function getTutorialById(id: string): Tutorial | undefined {
  return tutorials.find((tutorial) => tutorial.id === id);
}
