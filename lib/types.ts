export interface Tutorial {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  video: string;
  poster: string;
  duration: string;
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
}

export interface Step {
  number: number;
  title: string;
  description: string;
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
