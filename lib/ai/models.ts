export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
  {
    id: 'openai-gpt-4o',
    name: 'OpenAI (GPT-4o)',
    description: 'Chat using OpenAI GPT-4o',
  },
  {
    id: 'anthropic-claude-3-opus',
    name: 'Anthropic (Claude 3 Opus)',
    description: 'Chat using Anthropic Claude 3 Opus',
  },
  {
    id: 'google-gemini-1.5-pro',
    name: 'Google (Gemini 1.5 Pro)',
    description: 'Chat using Google Gemini 1.5 Pro',
  },
  {
    id: 'groq-llama3-70b',
    name: 'Groq (Llama 3 70b)',
    description: 'Chat using Groq Llama 3 70b',
  },
];
