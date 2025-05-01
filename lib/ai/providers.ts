import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { groq } from '@ai-sdk/groq';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': xai('grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
      },
    });

// OpenAI provider stub
export const openAIProvider = customProvider({
  languageModels: {
    'chat-model': openai('gpt-4o'),
  },
});

// Anthropic provider stub
export const anthropicProvider = customProvider({
  languageModels: {
    'chat-model': anthropic('claude-3-opus-20240229'),
  },
});

// Google provider stub
export const googleProvider = customProvider({
  languageModels: {
    'chat-model': google('gemini-1.5-pro-latest'),
  },
});

// Groq provider stub
export const groqProvider = customProvider({
  languageModels: {
    'chat-model': groq('llama3-70b-8192'),
  },
});
