import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
  {
    id: "garylau-rei-tongue-minimax-h3",
    title: "绫波丽双次吐舌表情深度驱动 · MiniMax H3",
    subtitle: "X · @GaryLau0101 · MiniMax H3 ReferenceToVideo · 15秒 · 16:9",
    description:
      "GaryLau0101 用 MiniMax H3 的 ReferenceToVideo 节点制作的表情驱动短片：<Picture 1> 负责锁定绫波丽的脸、黑长直齐刘海、浅蓝针织衫、银项链、白色纹理墙与沙发边，以及首帧和光线；<Video 1> 是一段带面部运动曲线与舌头轮廓的深度诊断动画，只被读取为“动作与时间”的指引，外观全部来自 Picture 1。成片为固定机位的写实中近景，约 3.20–4.07 秒和 8.81–10.68 秒各做一次俏皮吐舌并收回，其余时间保持细微的眼神、嘴部、头部和手势。作者没有公开可确认的静态 Picture 1，本页 refs 全部是成片截帧；深度诊断视频（Video 1）同帖发布，但未作为静态参考图收录。",
    video: "/tutorials/garylau-rei-tongue-minimax-h3/demo-web.mp4",
    poster: "/tutorials/garylau-rei-tongue-minimax-h3/poster.jpg",
    duration: "15秒",
    shots: 1,
    references: 5,
    model: "MiniMax H3（ReferenceToVideo）",
    style: "深度动画驱动表情 · 固定机位写实中近景",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/GaryLau0101/status/2103326557783925108",
    sourceAuthor: "@GaryLau0101",
    sourcePlatform: "X",
    sourceImpressions: 31,
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
      "AIライフハック（@ai_lifehack55）公开的 MiniMax H3 动画提示词：一位女性被困在巨大的展开漫画书里，从纸面内侧推破页面、由黑白漫画连续变换为实写人物走进现实卧室，最后回头发现“书里还留着一个自己”，两人互相指认，以夸张的惊讶和漫画式特效收尾。作者说明仅限 2K（768P 画面参照太弱、人物还原度无法保证），原本用简易分镜但漫画内文字无法被识别，于是改为“锚点图片参照”：先用引用帖的 GPT-Image2 指示书生成 4 张场景图，再加 1 张可替换的女性全身锚点，共 5 张参考图投入。本页 4 张 refs 是作者公开的真实场景参考图；05 / WOMAN_MASTER 女性锚点作者未公开，需要自行准备。",
    video: "/tutorials/ailifehack-manga-book-escape-minimax-h3/demo-web.mp4",
    poster: "/tutorials/ailifehack-manga-book-escape-minimax-h3/poster.jpg",
    duration: "15秒",
    shots: 10,
    references: 4,
    model: "MiniMax H3",
    style: "实写 × 黑白漫画融合 · 脱出喜剧",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/ai_lifehack55/status/2094985989404205107",
    sourceAuthor: "@ai_lifehack55",
    sourcePlatform: "X",
    sourceImpressions: 58641,
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
      "Diplomeme 创作的 Seedance 2.5 演唱会第一人称手机自拍：一位前排女观众用手机记录与虚构男歌手的短暂对视瞬间。全片用真实手机质感拍摄——前置自拍与后置镜头快速翻转、自然抖动、失焦呼吸、曝光泵动、偶尔裁脸与手指误入、滚动快门。舞台红白灯光、烟雾、密集人群、不断进画的手机。从兴奋自拍到变焦追歌手、短暂对视、失控反应、黑场手机灯海、灯光爆发、沿台边跟拍，最后举高手机录制。提示词开头标注9:16，但实际发布成片为16:9横屏；本包按实际媒体保持16:9，诚实注明画幅不一致。",
    video: "/tutorials/diplomeme-front-row-girl-seedance-2-5/demo-web.mp4",
    poster: "/tutorials/diplomeme-front-row-girl-seedance-2-5/poster.jpg",
    duration: "30秒",
    shots: 12,
    references: 5,
    model: "Seedance 2.5",
    style: "手机第一人称演唱会自拍 · 真实手机质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Diplomeme/status/2102613869365772296",
    sourceAuthor: "@Diplomeme",
    sourcePlatform: "X",
    sourceImpressions: 182,
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
      "知识猫AI实验室创作的 MiniMax H3 白模绿幕输出：以作者未公开的上传参考视频 Video 1 作为唯一动作来源，逐帧复刻主体动作、节奏与构图，生成纯 #00B140 绿幕背景上的白模（哑光浅灰白#E6E6E6）并保留原始音频，便于后期抠像。白模是未上色的有机雕塑，去掉眼睛、五官、毛发纹理、衣物和花纹，但保留轮廓、比例和肌肉起伏。动作要求每帧姿态与原视频同一时刻一致，节奏卡点重合。绿幕规范要求纯色均匀无渐变、无投影、无溢色、边缘清晰。镜头与画面逐帧匹配原视频，使用均匀柔和正面光。",
    video: "/tutorials/geekcatx-whitemodel-greenscreen-h3/demo-web.mp4",
    poster: "/tutorials/geekcatx-whitemodel-greenscreen-h3/poster.jpg",
    duration: "8秒",
    shots: 1,
    references: 4,
    model: "MiniMax H3",
    style: "白模绿幕抠像 · 动作复刻",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/GeekCatX/status/2103055823928995843",
    sourceAuthor: "@GeekCatX",
    sourcePlatform: "X",
    sourceImpressions: 2350,
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
      "Iqra Saifi 创作的 Seedance 2.5 高级时装摄影短片：鎏金巴洛克厅堂中的十种姿态，以强烈聚光灯穿过薄雾、节奏化摄影闪光，配合液态动作、运动匹配剪辑、光晕与轻微镜头遮挡。10个姿态包括：地面水平视角命令式站姿、极端侧脸手托下巴、俯拍贵妃榻流畅斜躺、前景手部首饰透视、低旋转角度快速翘腿、紧身特写手指描摹领口刺绣、回旋展示服装背面、肩部前倾后头部急转凝视、向上伸展聚光灯倾斜高调广角、最后直视镜头戏剧性凝视。提示词使用 [ ref] 占位符表示需要角色参考，但作者未公开发布角色图；refs/ 内全部为成片截帧。",
    video: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-baroque-photoshoot-seedance/poster.jpg",
    duration: "15秒",
    shots: 10,
    references: 5,
    model: "Seedance 2.5",
    style: "高定时装摄影 · 十姿态巴洛克",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2103273778440540415",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 182,
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
      "Krevix 创作的 Gemini Omni 室内折纸变形短片：从作者公开的 Reference 1 未完工房间到 Reference 2 翻新后奢华空间，使用静态锁定第一人称 POV 镜头。黑手套手完成一次响指，然后大型建筑平面按顺序展开并生成地板 → 特色墙 → 内建家具 → 咖啡桌 → 扶手椅 → 主沙发 → 地毯 → 窗帘 → 装饰 → 灯光。硬折叠几何变形为真实石材、木材和金属，沙发和扶手椅可见软化为高级软包座垫并带真实重量和落位。大块冷静精确折叠，一次一件，真实物理和接触阴影，无纸板感/粒子/魔法/发光/飞行物体/额外手势或镜头运动；暖光完成并在最后一秒保持完整奢华空间。提示词写 luxury living room 但 Reference 2 和成片实际展示带床的卧室式空间；包内诚实保留原文不擅自改写。",
    video: "/tutorials/krevix-interior-origami-gemini-omni/demo-web.mp4",
    poster: "/tutorials/krevix-interior-origami-gemini-omni/poster.jpg",
    duration: "10秒",
    shots: 1,
    references: 2,
    model: "Gemini Omni",
    style: "室内折纸变形 · 第一人称 POV",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2103165342570651828",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
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
      "Diplomeme 创作的 Seedance 2.5 高端 Apple 产品广告风格短片：一位年轻旅行者从清晨走到夜晚，持续用酒红色 iPhone 18 Pro Max 记录城市、食物、人、风景和夜景。30秒12个镜头beat：清晨窗边手机特写 → 早晨街道举机拍摄 → 繁忙路口跟拍录制 → 街头食物摊蒸汽场景 → 咖啡馆人物肖像 → 绿色阶梯山谷风景 → 金色阳光产品瞬间 → 高铁平台动作捕捉 → 蓝调时刻夜间过渡 → 河岸现代区倒影 → 夜间街区查看图片 → 河岸天际线最后举机。旅行者面容/发型/服装/比例/配饰全程一致，酒红手机尺寸/镜头系统/材质/光泽全程一致，光线按日夜顺序推进（daylight → golden hour → blue hour → night）。镜头使用24/35/50/85mm；手持与物理驱动跟踪运动；中性偏暖调色；真实肤色与环境色；音乐驱动剪辑配合真实位置环境声。",
    video: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/demo-web.mp4",
    poster: "/tutorials/diplomeme-iphone18-pro-max-seedance-25/poster.jpg",
    duration: "30秒",
    shots: 12,
    references: 5,
    model: "Seedance 2.5",
    style: "高端 Apple 产品广告 · 电影级旅行片",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Diplomeme/status/2103143771781382285",
    sourceAuthor: "@Diplomeme",
    sourcePlatform: "X",
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
      "Iqra Saifi 创作的 Seedance 2.5 古装红纱闺房眼神戏：六段连贯镜头穿过透纱、纱帘、铜镜、花窗、烛光到收镜凝视。每一段都是独立的眼神场景——透纱初见回眸、穿行垂帘、铜镜对视微笑、月光花窗回望、烛光中旋转捕纱、最终凝视淡出黑场。角色外貌写在提示词中无需单独角色卡；无配乐纯场景音；古装闺房美学（红纱、丝绸、青铜镜、木质花窗、烛台）；每镜聚焦眼神表演。",
    video: "/tutorials/iqrasaifi-period-drama-silk-seedance/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-period-drama-silk-seedance/poster.jpg",
    duration: "30秒",
    shots: 6,
    references: 6,
    model: "Seedance 2.5",
    style: "古装红纱闺房 · 眼神戏六镜",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2102921306593505613",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 10839,
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
      "Iqra Saifi 创作的 MiniMax H3 二次元时装动作：字母作为物理建筑——跃踏 OVERRIDE 字筑屋顶、零重力斩开翻滚 PARADOX、踩碎第四面墙镜头、墨刃汉字风暴压碎文字闪白。超广鱼眼贴地跟踪、360° 荷兰角桶滚、踩碎玻璃镜头、快速多向斩击；字体动力学（字母物理掉落碰撞旋转碎裂）；pop-art 色彩转换与极限速度线；sakuga 动画美学。",
    video: "/tutorials/iqrasaifi-minimax-h3-typography/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-minimax-h3-typography/poster.jpg",
    duration: "15秒",
    shots: 4,
    references: 4,
    model: "MiniMax H3",
    style: "超动感二次元 · 字筑物理建筑",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2100169159552466978",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 2212,
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
      "Iqra Saifi 创作的 MiniMax H3 超动感二次元动态片头：四镜极端运镜 + 反应式 3D 字效（RIOT 砸地、VOID 旋转、BREAK 碎裂、水墨汉字）。贴地鱼眼靴底跟踪 RIOT 字母砸地、45° 荷兰角前冲 VOID 旋转划过、靴底擦镜 BREAK 碎裂、拔刀 360° 旋转水墨汉字斩击。上传角色即可生成大胆机位片头；镜头物理（贴地鱼眼、快速旋转、靴底擦镜）；字体动力学（字母掉落碰撞旋转碎裂）；高对比赛璐珞、激进速度线、快速 snap 变焦、4k 60fps。",
    video: "/tutorials/iqrasaifi-minimax-h3-2d-intro/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-minimax-h3-2d-intro/poster.jpg",
    duration: "15秒",
    shots: 4,
    references: 4,
    model: "MiniMax H3",
    style: "超动感二次元片头 · 字效踩点",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2100030154668159256",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 6443,
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
      "Iqra Saifi 创作的史诗幻想飞毯穿城航拍：穿云俯冲镀金尖顶 → 360° 环绕橙袍织行天桥 → 拉升鹤升全城日晕。低角动态跟踪飞毯穿云掠过镀金尖顶、360° 旋转环绕骑手（橙袍狂飙织行天桥）、高速反向拉升鹤升突破云层揭示大陆级城市日晕。结构化 JSON 提示词（24mm 变形宽镜头、FPV 无人机运动、厚重丝绸布料物理、青铜时代与未来尖塔融合、正午阳光）。模型与平台未公开，不捏造 MiniMax/Seedance。",
    video: "/tutorials/iqrasaifi-magic-carpet-city/demo-web.mp4",
    poster: "/tutorials/iqrasaifi-magic-carpet-city/poster.jpg",
    duration: "15秒",
    shots: 3,
    references: 3,
    model: "未公开",
    style: "史诗幻想飞毯航拍 · FPV 无人机运动",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/IqrasaifiAI/status/2087491291986993632",
    sourceAuthor: "@IqrasaifiAI",
    sourcePlatform: "X",
    sourceImpressions: 12096,
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
      "小宇Chengzi 创作的 Seedance 2.5 一镜到底走廊化身：远处蓝蝶（红黑三勾玉眼纹）扑翼 → 走廊灯逐盏熄灭至纯黑 → 纯黑中两处微弱红眼纹无缝接成男性角色双眼 → 第10秒灯亮揭示近处人形红眼。作者公开两张参考图（蝴蝶眼纹 + 男性角色全身）与完整中文时间轴提示词。引用 Magncsans 仅作出场形式灵感，不打包其成片。作者回复提及勾玉还原困难 + 版权限制（写轮眼 / 鼬服装被卡）。",
    video: "/tutorials/chengzilhy-butterfly-corridor-seedance/demo-web.mp4",
    poster: "/tutorials/chengzilhy-butterfly-corridor-seedance/poster.jpg",
    duration: "16秒",
    shots: 5,
    references: 5,
    model: "Seedance 2.5",
    style: "一镜到底走廊化身 · 蝶眼接人眼",
    aspectRatio: "3/4",
    sourceUrl: "https://x.com/Chengzilhy/status/2103031689467355647",
    sourceAuthor: "@Chengzilhy",
    sourcePlatform: "X",
    sourceImpressions: 2520,
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
      "BMX 创作的 Seedance 2.5 手持时空穿越 Vlog：一位来自 2026 年的日裔 Gen Z 旅行者用手机自拍记录特洛伊战争现场。从突然穿越到城墙外青铜甲士兵，进入城门见到平民生活，登上城墙远眺战场，最后回到城内巷弄准备回归。角色一致性完全锁定在提示词文本中，无需角色卡；纯场景音，无配乐；手持手机拍摄质感，固定机位单镜头，自然对焦与曝光变化。",
    video: "/tutorials/bmx-troy-2026-vlog-seedance/demo-web.mp4",
    poster: "/tutorials/bmx-troy-2026-vlog-seedance/poster.jpg",
    duration: "30秒",
    shots: 5,
    references: 2,
    model: "Seedance 2.5",
    style: "手持穿越战地 Vlog · 手机第一人称",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/bmx_ai13/status/2102790595412680764",
    sourceAuthor: "@bmx_ai13",
    sourcePlatform: "X",
    sourceImpressions: 539,
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
      "TSUBAKI 创作的韩风时尚 Lookbook 转盘动画：先用 GPT Image 2.5 生成垂直 3:4 时尚海报（左侧奶油色单品面板 + 右侧全身模特 + 顶部品牌字标与皇冠图标），再用 Seedance 2.5 图生视频让模特原地 360° 转身展示穿搭，同时面板内每件单品同步绕竖轴旋转一圈，版式锁定不变。低角度 35mm 镜头拍摄，模特腿部修长，高端电商产品页美学，布料质感清晰，自然肤质，摄影写实。",
    video: "/tutorials/tsubaki-korean-outfit-lookbook-seedance/demo-web.mp4",
    poster: "/tutorials/tsubaki-korean-outfit-lookbook-seedance/poster.jpg",
    duration: "17秒",
    shots: 1,
    references: 1,
    model: "Seedance 2.5",
    style: "高端时尚 Lookbook 转盘 · 电商产品展示",
    aspectRatio: "3/4",
    sourceUrl: "https://x.com/AI__TSUBAKI/status/2102459655700287648",
    sourceAuthor: "@AI__TSUBAKI",
    sourcePlatform: "X",
    sourceImpressions: 39252,
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
      "John 创作的 Seedance 2.5 演员表演提示词：夜间车内固定机位单长镜头；眼神拉扯、微表情、倾身轻吻。ChatGPT + Seedance 2.5 on Pollo MCP。两人尚处于彼此试探的暧昧阶段，男主从回避镜头逐渐转为持续关注女主，等到再次对视后才主动靠近；女主维持自拍托腮姿势，通过余光确认他的注意，第一次对视很快收回，第二次则留下来回应。情绪推进克制，表演强度始终低调，最明显的变化留到最后的主动靠近。无对话，只有轻微车内环境底噪和自然呼吸。",
    video: "/tutorials/johnagi-car-eye-contact-seedance/demo-web.mp4",
    poster: "/tutorials/johnagi-car-eye-contact-seedance/poster.jpg",
    duration: "22秒",
    shots: 1,
    references: 2,
    model: "Seedance 2.5",
    style: "电影级车内双人表演 · 固定机位长镜头",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/johnAGI168/status/2102720575110299823",
    sourceAuthor: "@johnAGI168",
    sourcePlatform: "X",
    sourceImpressions: 6632,
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
      "KreviX 创作的 Seedance 2.0 汽修 Reels：18 格分镜板 → 16:9 成片。白净车间里灰色原厂宝马经过真实改装（同款巨型越野轮装不上 → 扩轮眉 → 宽体/长行程悬架 → 喷成深红）变成越野 Safari 姿态，最后硬切黑场。10 秒超写实 16:9 宝马灰→深红拉力改装，第一人称技师 POV，黑色手套，快速高级 ASMR 剪辑，只有真实物理改装，无变形/魔法/粒子或漂浮零件。",
    video: "/tutorials/krevix-bmw-offroad-reels-seedance/demo-web.mp4",
    poster: "/tutorials/krevix-bmw-offroad-reels-seedance/poster.jpg",
    duration: "10秒",
    shots: 18,
    references: 1,
    model: "Seedance 2.0",
    style: "汽修 Reels · 第一人称技师 POV · ASMR 快剪",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2102690184231890952",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 566,
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
      "行者AI视频拆解陶阿狗君色卡变装：小红书找穿搭参考 → 模特图+场景参考 → Codex 批量出主场景静帧与四张换装分镜（色卡随新穿搭重绘）→ 确认后图生视频（Seedance / H3 / Wan 3.0）。流程分四个阶段：批量生图（主场景+4套换装分镜，色卡按新穿搭配色）、单张调整（用 {{Image}} 参考）、图生视频（参考视频+已确认分镜）、可选 Agent 一揽子（先拆结构分镜→生图确认→再生成视频，也可接 Hypit / 即梦 CLI）。",
    video: "/tutorials/joshesye-colorcard-outfit-change/demo-web.mp4",
    poster: "/tutorials/joshesye-colorcard-outfit-change/poster.jpg",
    duration: "11秒",
    shots: 4,
    references: 4,
    model: "Seedance / H3 / Wan 3.0",
    style: "色卡变装 Lookbook · 垂直 9:16",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/joshesye/status/2102406681476956299",
    sourceAuthor: "@joshesye",
    sourcePlatform: "X",
    sourceImpressions: 38021,
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
      "H A J R A 制作的 Seedance 2.5 沙漠公路情感短片。两个陌生人因不同原因走上同一条被遗忘的沙漠公路:年轻女人独自驾驶老式越野车追逐最后的日光,英俊年轻男人骑粗犷摩托车穿越同一片沙漠。强大沙尘暴突然席卷,迫使两人在废弃哨所避难,发现一条通往古老峡谷的路线。一夜、一次意外连接、两条完全不同的路在日出时等待。情感、神秘、冒险电影级音乐视频,无对话,环境音与大气音乐叙事。",
    video: "/tutorials/codewithhajra-road-between-us-seedance/demo-web.mp4",
    poster: "/tutorials/codewithhajra-road-between-us-seedance/poster.jpg",
    duration: "30秒",
    shots: 9,
    references: 0,
    model: "Seedance 2.5",
    style: "电影级冒险音乐视频 · 沙漠公路",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/codewithhajra/status/2101954857233957230",
    sourceAuthor: "@codewithhajra",
    sourcePlatform: "X",
    sourceImpressions: 7922,
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
      "Umesh 制作的 Seedance 2.5 超现实海边客厅短片。纯文生视频,无参考图。柔软白色三座沙发直接立在浅层透明绿蓝海水中,巨大雕塑感白云漂浮在沙发后上方。一个女人坐在沙发上读书,一个男人在右侧休息。女人站起,走向小波浪,用拇指和食指轻轻捏起波峰——水面保持形状,可以像布料一样被提起。她站起继续提升,折痕传播过整个海洋,笔直地平线随之向上弯曲,天空随之抬升,巨大白云在折痕中弯曲。她将聚集的海景(仍包含移动的海水、地平线、天空和云)像毯子一样轻柔地盖在男人和沙发上。俯拍最终揭示:普通客厅木地板,同一沙发和台灯,但毯子中包含活生生的海景——波浪继续移动,云继续漂移,女人指尖触摸处有微小真实波浪破碎。",
    video: "/tutorials/umesh-fold-ocean-blanket-seedance/demo-web.mp4",
    poster: "/tutorials/umesh-fold-ocean-blanket-seedance/poster.jpg",
    duration: "15秒",
    shots: 7,
    references: 0,
    model: "Seedance 2.5",
    style: "超现实电影 · 海边客厅",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/umesh_ai/status/2102003383024648654",
    sourceAuthor: "@umesh_ai",
    sourcePlatform: "X",
    sourceImpressions: 1649,
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
      "KreviX 制作的 Seedance 2.0 奢华家具商业广告。10 秒超写实豪华家具组装演示,第一人称固定视角,20–24mm 镜头,无摄影机运动。深石墨工坊,戏剧性边缘光,深阴影,体积尘埃。只有两只戴哑光黑手套的男性手可见,无人物、无文字、无魔法发光。真实物理:破旧沙发在中央爆炸成真实组件(撕裂布料、软垫、填充、弹簧、螺栓、破木)→手腕旋转控制和旋转各个部件→猛烈手滑将损坏部件扔出画面→强拉手势从各方向快速牵引巨大深胡桃木梁和黑金属配件→手旋转、推、猛击组件到位→双拳握紧:完成胡桃木框架锁定→巨大干邑皮革片直接飞过摄影机短暂覆盖镜头→手向外向下拉,拉伸和包裹皮革紧绕框架→快速手指弹命令皮革软垫从不同方向飞入猛击到位→手腕旋转和手指手势安装黑金属硬件→完成豪华沙发:深胡桃木、干邑皮革、黑金属→手猛抓向后拉,整个沙发加速直向固定POV摄影机,在地板滑动带巨大尘迹→手立即向前扔掌STOP手势,沙发在摄影机一米前刹车带过冲、震动、软垫反弹→保持干邑皮革、拼接、胡桃木纹和黑金属细节溢价特写。手是控制界面:展开=拆解、滑=扔、旋转=旋转部件、弹=发射、推=加速、拉=吸引、握紧=锁定、张开掌=停止。",
    video: "/tutorials/krevix-sofa-workshop-reels-seedance/demo-web.mp4",
    poster: "/tutorials/krevix-sofa-workshop-reels-seedance/poster.jpg",
    duration: "10秒",
    shots: 1,
    references: 1,
    model: "Seedance 2.0",
    style: "商业产品CGI · 第一人称POV",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2102063967766024619",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 1159,
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
      "Pierrick Chevallier 制作的 MiniMax H3 流体字效标题序列。水字标题序列:两面海墙对撞、塑形为 TIDAL、再爆散成雾。MiniMax H3 + 流体 VFX。无金属/火焰/粒子遮挡转场,只有两面巨大海墙碰撞,然后将自己塑造成 TIDAL,整个标题在爆炸回雾之前。史诗流体动作标题序列从巨大黑海洋突然从中心分裂开始,两面山一样大的水墙在画面两侧升起。摄影机在它们之间扫过,数十亿水滴向下雨,阳光通过透明液体结构折射。两墙猛烈向彼此崩塌,产生壮观水、泡沫和压力碰撞,向天空发射液体冲击波。摄影机快速绕爆炸轨道,悬浮水被拉进巨大旋转流。这些流扭曲、碰撞并将自己塑造成巨大单词'TIDAL',每个字母由猛烈循环透明海水构成,白泡沫缠绕其边缘。标题保持一个巨大英雄瞬间,然后一个看不见的压力脉冲从左到右撕裂它,依次引爆每个字母成巨大水和雾爆炸。光写实流体模拟,巨大自然力量,IMAX 规模电影 VFX。",
    video: "/tutorials/charaspower-tidal-water-typo-h3/demo-web.mp4",
    poster: "/tutorials/charaspower-tidal-water-typo-h3/poster.jpg",
    duration: "15秒",
    shots: 1,
    references: 0,
    model: "MiniMax H3",
    style: "IMAX 电影 VFX · 流体模拟",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/CharaspowerAI/status/2102352395439120566",
    sourceAuthor: "@CharaspowerAI",
    sourcePlatform: "X",
    sourceImpressions: 1026,
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
      "AIライフハック 制作的 MiniMax H3 时尚编辑板分镜视频。GPT-Image2 做 2×2 时尚编辑板 → MiniMax H3 以 board 为 image1 生成 1:1 成片:同一模特四套造型,PANEL_01→04 两周,横移图形转场。4 面板时尚编辑板(GPT-Image2)→ MiniMax H3 1:1 视频:同一模特 4 套造型,两次 PANEL_01→04 循环,横向图形转场。15 秒、1:1 方形、24fps、全 8 SHOT、高品质实写时尚编辑视频。每 SHOT 是'开始姿势→一个明确时尚动作→不同结束姿势',静止保持仅最终 0.5 秒。人物结合自然一步或半步、身体/肩转向、臂手位置改变、重心移动、头视线、发衣摆动。不是舞蹈。人物、摄影机、文字、色面同时移动。横向面板运动全编基础,无纵滚。各 SHOT 内文字、色面、矩形、线以 8–20% 不同速度左右移动。切换时旧 LOOK 图形面左右移 40–55% 画幅留约半,次 LOOK 色面文字反向横入,0.2–0.35s 不均分屏经次 LOOK 全面化。方向、宽、速每切换变,不反复同全屏划。分割中人物只一人。人物衣装硬切,无变形/交叉淡。显示文字仅 FASHION、IN MOTION、LOOK 01/02/03/04、02、03。采用板同 Helvetica Neue Condensed 系。主文字动前先完全可读,不盖脸。",
    video: "/tutorials/ailifehack-fashion-editorial-board-h3/demo-web.mp4",
    poster: "/tutorials/ailifehack-fashion-editorial-board-h3/poster.jpg",
    duration: "15秒",
    shots: 8,
    references: 2,
    model: "MiniMax H3",
    style: "时尚编辑板分镜 · 1:1 方形",
    aspectRatio: "1/1",
    sourceUrl: "https://x.com/ai_lifehack55/status/2099698171094143303",
    sourceAuthor: "@ai_lifehack55",
    sourcePlatform: "X",
    sourceImpressions: 40424,
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
      "Zephyra Leigh 带来的 MacBook Pro 专业开箱评测视频。从开箱到首次上手,展示高分辨率显示屏、强大处理器与快速存储等创作者关注的核心特性。包含实际视频编辑工作流测试,自然流畅的产品展示风格。",
    video: "/tutorials/zephyra-macbook-pro-unbox/demo-web.mp4",
    poster: "/tutorials/zephyra-macbook-pro-unbox/poster.jpg",
    duration: "约15秒",
    shots: 5,
    references: 0,
    model: "Seedance 2.5",
    style: "YouTube 科技评测 · 创作者向",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2099759853103194265",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 3737,
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
      "1907 年印度北部村庄的真实生活场景:三位村妇前往石井打水,装满陶罐,互相帮扶返回家中。黑白加淡褐色调、厚重颗粒、闪烁曝光、划痕尘点、不均匀帧率、柔焦与暗角,完美还原早期手摇电影摄影机的质感。带默片字幕卡。",
    video: "/tutorials/zephyra-india-1907-well/demo-web.mp4",
    poster: "/tutorials/zephyra-india-1907-well/poster.jpg",
    duration: "约15秒",
    shots: 5,
    references: 0,
    model: "未在原帖标明（仿古默片系列）",
    style: "1907 早期电影 · 村落纪实",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2099016930506260750",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 2739,
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
      "1906 年巴黎早晨市集的温馨家庭片段:三位年轻女性(姐妹和表姐妹)逛市场、买菜、意外掉落苹果引发小欢笑,最后在长椅分享面包。黑白加淡褐色调、厚重颗粒、闪烁、划痕、不均帧率、柔焦暗角,完美还原 1900 年代初手摇电影质感。",
    video: "/tutorials/zephyra-paris-1906-market/demo-web.mp4",
    poster: "/tutorials/zephyra-paris-1906-market/poster.jpg",
    duration: "约15秒",
    shots: 5,
    references: 0,
    model: "MiniMax H3 Max",
    style: "1906 早期电影 · 家庭生活",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2097919526432370965",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 5917,
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
      "Zephyra Leigh 的专业 Sony 旗舰降噪耳机开箱评测。从强烈视觉钩子开场,展示完整拆箱流程、配件清单、主动降噪与环境音模式切换、App 调音,到首次佩戴体验。自然的创作者语言,实用的功能讲解,真实的产品互动。",
    video: "/tutorials/zephyra-sony-headphones-unbox/demo-web.mp4",
    poster: "/tutorials/zephyra-sony-headphones-unbox/poster.jpg",
    duration: "约25秒",
    shots: 5,
    references: 0,
    model: "Wan 3.0",
    style: "YouTube Shorts · 科技开箱",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2097876054295843315",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 4569,
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
      "15 秒高时尚编辑短片,展示角色参考图中的成年女性角色通过 10 个不同的时尚姿势和极端摄影机角度。极简奢华工作室、反光地板、大胆方向照明、节奏性摄影闪光。快速自信全程着装表演,通过鞭打摇镜、运动匹配剪辑、快速缩放、闪光和镜头遮挡连接。需要角色参考图。",
    video: "/tutorials/zephyra-ten-poses-fashion/demo-web.mp4",
    poster: "/tutorials/zephyra-ten-poses-fashion/poster.jpg",
    duration: "约15秒",
    shots: 10,
    references: 1,
    model: "Seedance 2.5",
    style: "高时尚编辑 · 摄影闪拍",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/ZephyraLeigh/status/2096574835543757089",
    sourceAuthor: "@ZephyraLeigh",
    sourcePlatform: "X",
    sourceImpressions: 15143,
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
      "岚叔公开白膜→五人角色图→H3全能参考群舞全流程。含5条生图提示词 + H3生视频提示词。工具链 MiniMax Design / GPT Image / H3。",
    video: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/demo-web.mp4",
    poster: "/tutorials/lufzzliz-dunhuang-group-dance-white-mesh/poster.jpg",
    duration: "约20秒",
    shots: 0,
    references: 5,
    model: "MiniMax H3（全能参考）",
    style: "敦煌群舞 · 白膜流程",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/LufzzLiz/status/2099466952309903560",
    sourceAuthor: "@LufzzLiz",
    sourcePlatform: "X",
    sourceImpressions: 17360,
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
      "Flova.ai + Seedance 2.5；巴黎 POV 撞车后遇到蒙娜丽莎等名画邻居。提示词从成片右侧面板 OCR 拼出（约6400字）。成片为分屏教程片（左生成片、右参考+提示词）。",
    video: "/tutorials/flova-mona-lisa-neighbors/demo-web.mp4",
    poster: "/tutorials/flova-mona-lisa-neighbors/poster.jpg",
    duration: "约30秒提示 / 成片约60秒",
    shots: 0,
    references: 5,
    model: "Seedance 2.5",
    style: "巴黎 POV · 名画邻居 · 黑色幽默",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Flovaai/status/2095863022531260717",
    sourceAuthor: "@Flovaai",
    sourcePlatform: "X",
    sourceImpressions: 325575,
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
      "Seedance 2.5 威尼斯折叠建筑片；粉发女孩送信，城市像盗梦空间一样翻折成球。需人脸参考图 Image 1。平台 Fish Creative HQ。",
    video: "/tutorials/just-sharon7-venice-sphere/demo-web.mp4",
    poster: "/tutorials/just-sharon7-venice-sphere/poster.jpg",
    duration: "约30秒",
    shots: 10,
    references: 1,
    model: "Seedance 2.5",
    style: "1940s 威尼斯 · 折叠建筑 · 胶片",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Just_sharon7/status/2100541954685895043",
    sourceAuthor: "@Just_sharon7",
    sourcePlatform: "X",
    sourceImpressions: 50522,
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
      "极限微距镜头记录刺绣线自主编织 Logo 的魔法时刻：彩色丝线从棉布表面升起，逐排铺设紧密缎纹针迹，勾勒标志轮廓，拉紧成立体纹理直至完整。由 Gemini Omni Flash 1.1 在 Pika 平台生成。需上传你的 Logo 参考图。",
    video: "/tutorials/techiebysa-logo-embroidery-sew/demo-web.mp4",
    poster: "/tutorials/techiebysa-logo-embroidery-sew/poster.jpg",
    duration: "约10秒",
    shots: 1,
    references: 0,
    model: "Gemini Omni Flash 1.1",
    style: "刺绣微距 · Logo 缝线成型",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/TechieBySA/status/2093388159602041067",
    sourceAuthor: "@TechieBySA",
    sourcePlatform: "X",
    sourceImpressions: 224974,
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
      "10秒红绳拼字定格动画：粗红编织绳 + 4-5个迷你粘土人物共同编织单词 Smiling。绳子从散乱松散循序变形为草书字母，小人物攀爬拉扯打结。需提供与成片最后一帧完全吻合的参考图。教练提示：把 Smiling 替换成你的名字，仍需匹配的最终帧参考图。",
    video: "/tutorials/aiwithkhan-rope-name-smiling/demo-web.mp4",
    poster: "/tutorials/aiwithkhan-rope-name-smiling/poster.jpg",
    duration: "约10秒",
    shots: 1,
    references: 1,
    model: "Seedance 2.5",
    style: "定格动画 · 红绳编织 · 小人工坊",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/AIwithkhan/status/2100069812152197146",
    sourceAuthor: "@AIwithkhan",
    sourcePlatform: "X",
    sourceImpressions: 12994,
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
      "30s 度假记忆硬切剪辑：法属波利尼西亚（塔希提/莫雷阿/波拉波拉）found-footage 冒险风格。每 0.5-1 秒硬切至新场景，密集呈现礁湖、独木舟、市场、雨季、夜潜荧光等碎片化体验。Seedance 2.5 高强度剪辑规则 + 角色世界锁定。",
    video: "/tutorials/techhalla-french-polynesia-adventure/demo-web.mp4",
    poster: "/tutorials/techhalla-french-polynesia-adventure/poster.jpg",
    duration: "约30秒",
    shots: 60,
    references: 0,
    model: "Seedance 2.5",
    style: "found-footage 冒险 · 快切碎片化记忆",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/techhalla/status/2096599863639068764",
    sourceAuthor: "@techhalla",
    sourcePlatform: "X",
    sourceImpressions: 14836,
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
      "ROOM 214 沙漠汽车旅馆房间内，衣物自己跳进行李箱。无人手、无平滑运动，纯正定格动画节奏：小件先跳、中件折叠、大件压顶、箱盖三段合上。MiniMax H3 通过 JSON 结构化提示词精准控制定格抖动质感。",
    video: "/tutorials/techhalla-room214-stop-motion/demo-web.mp4",
    poster: "/tutorials/techhalla-room214-stop-motion/poster.jpg",
    duration: "约15秒",
    shots: 1,
    references: 0,
    model: "MiniMax Hailuo H3",
    style: "定格动画 · 逐帧抖动",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/techhalla/status/2094743725138178491",
    sourceAuthor: "@techhalla",
    sourcePlatform: "X",
    sourceImpressions: 10727,
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
      "桌面壁纸动画翻车喜剧：敦煌飞天在苹果桌面跳舞，舞步踩动幕布震落图标，慌忙收拾却按歪两个，强颜欢笑摆回原位。GPT Image 2.5 生成桌面静帧 → H3 图生视频。注意「图标震落又摆歪」的喜剧节拍。",
    video: "/tutorials/pixelaigc-dunhuang-desktop-fail/demo-web.mp4",
    poster: "/tutorials/pixelaigc-dunhuang-desktop-fail/poster.jpg",
    duration: "约10秒",
    shots: 1,
    references: 0,
    model: "MiniMax Hailuo H3 (图生视频) + GPT Image 2.5 (生图)",
    style: "图生视频 · 喜剧叙事 · 桌面动画",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/PixelAigc/status/2100051139547054118",
    sourceAuthor: "@PixelAigc",
    sourcePlatform: "X",
    sourceImpressions: 418704,
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
    shots: 15,
    references: 1,
    model: "图生视频 / 单图 master reference",
    style: "电影级自然广告 · 雨雾氛围",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/umesh_ai/status/2100823564505248175",
    sourceAuthor: "@umesh_ai",
    sourcePlatform: "X",
    sourceImpressions: 26912,
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
    sourceImpressions: 3659,
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
    sourceImpressions: 10434418,
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
    video: "/tutorials/seedance-dance-mocap-migration/demo-v2.mp4",
    poster: "/tutorials/seedance-dance-mocap-migration/poster-v2.jpg",
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
    id: "krevix-luxury-sofa-carousel",
    title: "奢侈沙发轮播选型 · 黑手套 POV",
    subtitle: "X · KrevixAi · 10秒 · 16:9",
    description:
      "第一人称 POV 黑棚奢侈家具商业片:黑手套滑动轮播四款沙发,暂停选定 hero 沙发后按压测试面料,沙发落地,最后整个奢华客厅围绕同一件沙发物理拼装。强调真实物理惯性、同一 hero 件贯穿始终、房间滑入而非沙发变形。",
    video: "/tutorials/krevix-luxury-sofa-carousel/demo-web.mp4",
    poster: "/tutorials/krevix-luxury-sofa-carousel/poster.jpg",
    duration: "10 秒",
    shots: 6,
    references: 1,
    model: "Gemini Omni",
    style: "家具商业 · POV 遥控",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2099935072010822040",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 11749,
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
  {
    id: "crazykaomei-furniture-blindbox-asmr",
    title: "粉色毛绒沙发盲盒选款 · ASMR 电商",
    subtitle: "X · @CrazyKaomei · Google Flow (Omni Flash) · 10秒 · 16:9",
    description:
      "疯狂的烤妹儿的 Google Flow 盲盒家具电商视频。白色真丝手套在纯白工作室内滑动挑选迷你粉色毛绒沙发,从心形扶手椅、兔耳豆袋、猫耳圆沙发一路滑到最终的气泡泡芙长毛沙发,手掌STOP定格后深按毛绒展示真实压缩物理,随后场景从工作室组装到完整粉色极简客厅,全景窗透入白日光。先文生 12 格故事板、再图生视频,商业摄影质感的 ASMR 产品演示。",
    video: "/tutorials/crazykaomei-furniture-blindbox-asmr/demo-web.mp4",
    poster: "/tutorials/crazykaomei-furniture-blindbox-asmr/poster.jpg",
    duration: "10秒",
    shots: 1,
    references: 1,
    model: "Google Flow (Omni Flash)",
    style: "商业产品摄影 · ASMR 质感",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/CrazyKaomei/status/2101842849079923104",
    sourceAuthor: "@CrazyKaomei",
    sourcePlatform: "X",
    sourceImpressions: 1109,
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
      "Pierrick Chevallier 制作的 Seedance 2.5 连续 30 秒双人对话表演测试。高档餐厅夜戏,30 多岁情侣面对面坐在小桌前,争吵已开始但都在极力不公开吵架。从安静敌意 → 压力上升 → 争吵破防 → 水杯倾倒物理升级 → 情感逆转 → 最终击破,一镜到底完整覆盖六段情感节拍,精确英语口型同步,无剪辑连续镜头,摄影机缓慢环桌运动。极度真实的关系争吵,微表情、克制愤怒、公共场合压抑、自然声音叠加。",
    video: "/tutorials/charaspower-restaurant-drama-seedance/demo-web.mp4",
    poster: "/tutorials/charaspower-restaurant-drama-seedance/poster.jpg",
    duration: "30秒",
    shots: 1,
    references: 0,
    model: "Seedance 2.5 / Dreamina",
    style: "高档餐厅夜戏 · 一镜到底对话",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/CharaspowerAI/status/2101733174912979337",
    sourceAuthor: "@CharaspowerAI",
    sourcePlatform: "X",
    sourceImpressions: 3380,
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
      "Gary Lau 制作的绫波丽(Rei)城市换装旅行短片。MiniMax H3 Singularity 深度视频驱动,12 秒竖屏连续变装。从纯白工作室黑色水手服开场,红色定位针出现后快速旋转变装依次穿过巴黎(海军条纹上衣+奶油长裤)、罗马(鼠尾草绿连衣裙)、开罗(象牙亚麻衬衫+米色长裤)、悉尼(天蓝色衬衫+藏青短裤),每个城市配对应城市地图与导航 UI。作者自述脸部后段一致性差因 GPT 生图角色卡;复刻可用深度视频,从零可用 Blender。",
    video: "/tutorials/garylau-rei-city-travel-h3/demo-web.mp4",
    poster: "/tutorials/garylau-rei-city-travel-h3/poster.jpg",
    duration: "12秒",
    shots: 7,
    references: 2,
    model: "MiniMax H3 Singularity",
    style: "竖屏换装旅行 · 深度驱动",
    aspectRatio: "9/16",
    sourceUrl: "https://x.com/GaryLau0101/status/2101872019981889672",
    sourceAuthor: "@GaryLau0101",
    sourcePlatform: "X",
    sourceImpressions: 1681,
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
      "Strength04 制作的 Tom 和 Jerry macOS 桌面互动视频。MiniMax H3 on Flova(#flovaCPP)一镜到底 10 秒。Tom 追逐 Jerry 穿过电影化卡通客厅(日落窗光、木地板、舒适家具),意外踢飞爆米花,卡通气流震飞 Gmail、Discord、Microsoft Teams 三个桌面图标。Tom 冻结反应后决定修复,一个一个拾起图标、携带并放回原位,每次清楚点击声。Jerry 在旁观看持奶酪。最后 Tom 回到右侧,假装什么都没发生。先生成 macOS 桌面参考图,再用作第一帧喂给视频模型。",
    video: "/tutorials/strength04-tomjerry-mac-desktop-h3/demo-web.mp4",
    poster: "/tutorials/strength04-tomjerry-mac-desktop-h3/poster.jpg",
    duration: "10秒",
    shots: 1,
    references: 1,
    model: "MiniMax H3 on Flova (#flovaCPP)",
    style: "桌面互动 · 卡通角色",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Strength04_X/status/2101913634293297466",
    sourceAuthor: "@Strength04_X",
    sourcePlatform: "X",
    sourceImpressions: 607,
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
      "Strength04 制作的猫打喷嚏 macOS 桌面互动视频。MiniMax Hailuo H3 Max on ImagineArt 一镜到底 10 秒。毛茸棕白猫戴大号银色耳机坐在桌面最右侧 MacBook 旁,突然打喷嚏,小型可见柔和气团从猫朝桌面图标飞去,意外震飞 Gmail、Discord、Microsoft Teams 三个图标。猫立即冻结、眼睛略大、耳朵向后倾、看向掉落图标带惊讶尴尬表情。随后猫匆忙逐个修复三图标:伸爪触碰拾起、携带、精确放回原位,每次温和点击声。最后猫快速回到 MacBook 旁原位,耳机正确就位,试图看起来完全无辜。先生成桌面参考图,再用作第一帧。",
    video: "/tutorials/strength04-cat-sneeze-desktop-h3/demo-web.mp4",
    poster: "/tutorials/strength04-cat-sneeze-desktop-h3/poster.jpg",
    duration: "10秒",
    shots: 1,
    references: 1,
    model: "MiniMax Hailuo H3 Max on ImagineArt",
    style: "桌面互动 · 真实猫",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/Strength04_X/status/2101868703482876376",
    sourceAuthor: "@Strength04_X",
    sourcePlatform: "X",
    sourceImpressions: 5228,
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
      "Yang Onchain 制作的东方树叶绿茶 AI 概念短片《把这一刻,还给自己》,非官方概念作品。30 秒 16:9 写实商业摄影与克制的 2.5D 水墨角色结合。唯一主角多多(成年中国女性,自然黑色中长发、轻微卷度)穿鼠尾草绿短袖针织上衣、奶油白宽松长裙,与三位好友在城市公园草坪野餐。原创 8-10cm 高 2.5D 水墨小茶客从东方树叶瓶标签下部建筑画中空间走出,举落叶滑到多多手机旁挥叶提醒;多多停止刷屏放下手机,拿起同一瓶绿茶旋开盖喝一口,听见朋友笑声转向朋友舒展;硬切茶汤微距意象;回到野餐垫,一阵风掀起餐巾罩住小茶客,多多揭开餐巾,旋紧瓶盖,接过朋友递来的葡萄加入话题;小茶客回头确认多多没再刷手机,满意收叶走回标签建筑入口压回画中,包装恢复原貌,右侧出现「东方树叶 / 把这一刻,还给自己。」文案与画外女声。",
    video: "/tutorials/yangonchain-oriental-leaf-tea-moment/demo-web.mp4",
    poster: "/tutorials/yangonchain-oriental-leaf-tea-moment/poster.jpg",
    duration: "30秒",
    shots: 7,
    references: 1,
    model: "未标明 / 概念广告",
    style: "写实商业摄影 · 2.5D 水墨角色",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/YangOnchain/status/2101913629717381374",
    sourceAuthor: "@YangOnchain",
    sourcePlatform: "X",
    sourceImpressions: 1302,
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
      "KreviX 制作的 Gemini Omni 汽车 ASMR 短片。超真实 10 秒 16:9 第一人称 POV,纯白工作室内巨大男性双手戴哑光黑手套快速组装微型真实 1:12 白色宝马:插入引擎→咔哒,连接电子→啪,安装红色刹车卡钳和车轮→咔,装配方向盘和大灯→啪,装配前保险杠并合上引擎盖→咔哒。展示极端微距细节和明显的微缩比例尺:整车小于一只手。5 秒时完成的白色宝马被真实湿润深红汽车漆喷涂,清楚地从白色→红色变化,然后抛光成深镜面光泽。8.5 秒时展示微型红色宝马前四分之三英雄角度→硬剪切匹配到完全相同角度的全尺寸真实红色宝马在大型白色工作室内。引擎启动,车身振动,LED 大灯打开,然后宝马猛烈直冲向镜头→硬剪切黑场。",
    video: "/tutorials/krevix-auto-service-reels-omni/demo-web.mp4",
    poster: "/tutorials/krevix-auto-service-reels-omni/poster.jpg",
    duration: "10秒",
    shots: 3,
    references: 1,
    model: "Gemini Omni",
    style: "ASMR 产品组装 · 匹配硬切",
    aspectRatio: "16/9",
    sourceUrl: "https://x.com/KrevixAi/status/2101930638022410525",
    sourceAuthor: "@KrevixAi",
    sourcePlatform: "X",
    sourceImpressions: 1808,
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
      "NoorAI 制作的 Seedance 2.5 商业风格食品视频。厨师戴黑手套穿 Wendy's 制服在热平板烤架上制备双层芝士汉堡。展示芝麻面包烤制、新鲜方形牛肉饼被按压并滋滋作响冒蒸汽、黄色美式奶酪融化、蛋黄酱涂抹在底部面包上,然后层叠两片奶酪肉饼与生菜、番茄、洋葱、泡菜、番茄酱和蛋黄酱,最后加上顶部面包。以厨师手持完成的汉堡朝向镜头带微妙微笑的动态特写结束,使用温暖光线、光泽质感、电影角度和柔焦背景。4:3 复古广告画幅,商业摄影 ASMR 质感。",
    video: "/tutorials/noorwithwifi-wendys-cheeseburger-seedance/demo-web.mp4",
    poster: "/tutorials/noorwithwifi-wendys-cheeseburger-seedance/poster.jpg",
    duration: "13秒",
    shots: 1,
    references: 0,
    model: "Seedance 2.5",
    style: "商业食品广告 · 4:3 复古画幅",
    aspectRatio: "4/3",
    sourceUrl: "https://x.com/noorwithwifi/status/2101955160696336440",
    sourceAuthor: "@noorwithwifi",
    sourcePlatform: "X",
    sourceImpressions: 1518,
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
