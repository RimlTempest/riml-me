import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Page from './page';

test('Page', () => {
  render(<Page />);
  
  // Next.jsロゴの存在確認
  expect(screen.getByAltText('Next.js logo')).toBeDefined();
  
  // "Get started by editing"のテキストを含む要素を検索
  expect(screen.getByText(/get started by editing/i)).toBeDefined();
  
  // "Deploy now"リンクの存在確認
  const deployLink = screen.getByRole('link', {
    name: /vercel logomark deploy now/i
  });
  expect(deployLink).toBeDefined();
}); 