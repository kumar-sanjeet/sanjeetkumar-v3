/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContentType, ReactionType, ShareType } from '@/types';

// Dummy functions with implicit returns to satisfy 'arrow-body-style'
export const getContentMeta = async (_slug: string) => ({
  views: 0,
  shares: 0,
  reactions: 0,
});

export const addView = async (_slug: string) => null;

export const addShare = async (_slug: string, _type: ShareType) => null;

export const addReaction = async (
  _slug: string,
  _type: ReactionType,
  _section: string
) => null;
