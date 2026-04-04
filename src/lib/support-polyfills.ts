/**
 * Centralized polyfills and security patches for the portfolio.
 * Includes fixes for CSP and deprecated browser APIs.
 */

export const initSupportPolyfills = () => {
  if (typeof window === 'undefined') return;

  // 1. Fix StorageType.persistent deprecation (Legacy FileSystem API)
  if (!('StorageType' in window)) {
    (window as unknown as { StorageType: unknown }).StorageType = {
      persistent: 'persistent',
      temporary: 'temporary'
    };
  }

  // 2. Polyfill webkitPersistentStorage (Legacy Chrome API)
  if (typeof navigator !== 'undefined' && !('webkitPersistentStorage' in navigator)) {
    try {
      (navigator as unknown as { webkitPersistentStorage: unknown }).webkitPersistentStorage = {
        queryUsageAndQuota: (callback: (usage: number, quota: number) => void) => {
          if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(estimate => {
              callback(estimate.usage || 0, estimate.quota || 0);
            });
          }
        },
        requestQuota: (_: number, callback: (quota: number) => void) => {
          if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(estimate => {
              callback(estimate.quota || 0);
            });
          }
        }
      };
    } catch {
      // Silently fail if navigator is read-only or doesn't support storage
    }
  }
};
