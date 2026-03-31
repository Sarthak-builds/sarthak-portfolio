import { useMemo } from 'react';
import { prepare, layout } from '@chenglou/pretext';

interface UsePretextOptions {
  fontSize: string;
  fontFamily: string;
  lineHeight: number;
  maxWidth: number;
}

export const usePretext = (text: string, options: UsePretextOptions) => {
  const { fontSize, fontFamily, lineHeight, maxWidth } = options;

  return useMemo(() => {
    if (maxWidth <= 0) return { height: 0, lineCount: 0 };

    const fontString = `${fontSize} ${fontFamily}`;
    try {
      const prepared = prepare(text, fontString);
      return layout(prepared, maxWidth, lineHeight);
    } catch (e) {
      console.warn('Pretext measurement failed:', e);
      return { height: 0, lineCount: 0 };
    }
  }, [text, fontSize, fontFamily, lineHeight, maxWidth]);
};
