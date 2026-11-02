import { useSyncExternalStore } from "react";

// Consentimiento de cookies y contenidos de terceros.
// "external": contenidos incrustados de terceros que pueden instalar cookies (Google Maps).
export type Consent = { external: boolean; decidedAt: string };

const STORAGE_KEY = "hdlf-consent-v1";
const listeners = new Set<() => void>();
let settingsOpen = false;

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

let current: Consent | null = typeof window === "undefined" ? null : read();

const emit = () => listeners.forEach((l) => l());

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export function saveConsent(external: boolean) {
  current = { external, decidedAt: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Sin almacenamiento disponible: la decisión se mantiene solo durante la visita.
  }
  settingsOpen = false;
  emit();
}

export function openConsentSettings() {
  settingsOpen = true;
  emit();
}

export function closeConsentSettings() {
  settingsOpen = false;
  emit();
}

export const useConsent = () => useSyncExternalStore(subscribe, () => current, () => null);

export const useConsentSettingsOpen = () =>
  useSyncExternalStore(subscribe, () => settingsOpen, () => false);
