/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="vite/client" />

export interface Config {
  appVersion: string;
}

export type CharacterRouteParams = { params: { id: string } };

// Rozszerzenie obiektu import.meta.env przez nową zmienną środowiskową
interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Zmienna globalna wystawiona przez konfigurację "define"
declare const __APP_VERSION__: string;
