export interface Tutorial {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  video: string;
  poster: string;
  duration: string;
  /** 成片文件真实时长（秒，ffprobe 四舍五入），用于详情页标题副行 */
  durationSec?: number;
  /** 风格短标签（2–5 字），用于详情页标题副行，如「真人风」「二次元」「定格动画」 */
  styleLabel?: string;
  shots: number;
  references: number;
  model: string;
  style: string;
  tags: string[];
  steps: Step[];
  references_detail: Reference[];
  storyboard: Shot[];
  constraints?: string;
  video_prompt: VideoPrompt;
  aspectRatio?: string;
  sourceUrl?: string;
  sourceAuthor?: string;
  sourcePlatform?: string;
  /** 原帖播放/曝光数快照；有 sourceStats 时即为 sourceStats.asOf 当天的播放数 */
  sourceImpressions?: number;
  /** 原帖数据快照（X 帖经 fxtwitter 抓取）；拿不到就不填，页面不显示 */
  sourceStats?: SourceStats;
  /** 套路标签：第 1 个为主套路，可选第 2 个为副套路 */
  formats?: TutorialFormat[];
  /** 「钩子在哪」拆解：只写抽帧真实看到的画面 */
  hook?: HookBreakdown;
}

export interface HookBeat {
  /** 按成片真实结构起名，如「过程怎么推进」「成品揭晓」「几段怎么切换」「反转」「结尾怎么收」 */
  title: string;
  text: string;
  /** 约第几秒（数字，秒），chip 可跳转播放器 */
  at?: number;
}

export interface HookBreakdown {
  /** 开场钩子：前 1–2 秒靠什么抓人（具体画面），固定第一张 */
  opening: string;
  openingAt?: number;
  /** 中间 1–3 段，标题跟随成片真实结构；没有真反转就不写「反转」；结尾卡可选 */
  beats: HookBeat[];
  /** 跟做时最该照抄的一点 */
  copyThis: string;
  /** 时间点为抽帧估计 */
  approx?: boolean;
  /** 结构短标签，显示在标题下，如「过程推进 → 成品揭晓」 */
  structure?: string;
}

/** 首页「按套路挑」筛选条的分类与顺序 */
export const TUTORIAL_FORMATS = [
  "产品广告",
  "拆装·制作过程",
  "电影叙事",
  "角色表演",
  "破壁出屏",
  "时尚大片",
  "手机POV·Vlog",
  "变装·换装",
  "折叠·变形",
  "字效·片头",
] as const;

export type TutorialFormat = (typeof TUTORIAL_FORMATS)[number];

export interface SourceStats {
  /** 抓取日期 YYYY-MM-DD */
  asOf: string;
  likes?: number;
  reposts?: number;
  bookmarks?: number;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  video?: string;
  poster?: string;
  aspectRatio?: string;
}

export interface Reference {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  prompt: string;
}

export interface Shot {
  number: number;
  description: string;
}

export interface VideoPrompt {
  title: string;
  subtitle: string;
  content: string;
}
