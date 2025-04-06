import type { UserConfig } from 'vitest/config';

export interface VitestConfigOptions {
  setupFiles?: string[];
  include?: string[];
  exclude?: string[];
}

export declare function createVitestConfig(options?: VitestConfigOptions): UserConfig;
export default UserConfig; 