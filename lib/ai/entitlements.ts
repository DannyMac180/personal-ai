import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 20,
    availableChatModelIds: [
      'chat-model',
      'chat-model-reasoning',
      'openai-gpt-4o',
      'anthropic-claude-3-opus',
      'google-gemini-1.5-pro',
      'groq-llama3-70b',
    ],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 100,
    availableChatModelIds: [
      'chat-model',
      'chat-model-reasoning',
      'openai-gpt-4o',
      'anthropic-claude-3-opus',
      'google-gemini-1.5-pro',
      'groq-llama3-70b',
    ],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
