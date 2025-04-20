// packages/core/types/user.ts
export type ProfileType = 'personal' | 'pro_personal' | 'pro_business';

export interface UserProfile {
  id: string;
  user_id: string;
  name: string;
  profile_type: ProfileType;
  avatar_url?: string | null;
  created_at: string;
}
