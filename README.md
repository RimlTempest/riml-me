# riml-me

このプロジェクトは、Next.js App Routerを使用したモダンなウェブアプリケーションです。

## 技術スタック

- **フロントエンド**
  - Next.js 15.2 (App Router)
  - React v19
  - TailwindCSS 3.4.4
  - TypeScript 5.5.4

- **開発ツール**
  - pnpm 20.1.2 (パッケージマネージャー)
  - Biome (フォーマッター)
  - ESLint (リンター)
  - Vitest (テストフレームワーク)

## プロジェクト構成

```
/
├── apps/                      # アプリケーションコード
│   └── app/                   # メインアプリケーション
│       ├── src/              # ソースコード
│       │   ├── app/         # Next.js App Router
│       │   └── components/  # 共通コンポーネント
│       ├── public/          # 静的ファイル
│       └── ...
├── packages/                  # 共有パッケージ
│   ├── biome-config          # Biomeの設定
│   ├── eslint-config         # ESLintの設定
│   └── vitest-config         # Vitestの設定
└── ... (設定ファイル類)
```

## セットアップ

### 必要条件

- Node.js 20.18.0
- pnpm 20.1.2

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/xxxxx/riml-me.git
cd riml-me

# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
# 開発サーバーの起動
pnpm dev
```

アプリケーションは http://localhost:3000 で起動します。

### テストの実行

```bash
# ユニットテストの実行
pnpm test

# テストカバレッジの確認
pnpm test:coverage
```

### リントとフォーマット

```bash
# リントの実行
pnpm lint

# フォーマットの実行
pnpm format
```

## 開発ガイドライン

- コンポーネントは`src/components`に配置
- ページは`src/app`に配置
- 型定義は各ファイル内で管理
- テストファイルは`.test.ts`または`.test.tsx`の拡張子を使用

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
