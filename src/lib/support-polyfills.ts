

export const initSupportPolyfills = () => {
  if (typeof window === 'undefined') return;

  
  if (!('StorageType' in window)) {
    (window as unknown as { StorageType: unknown }).StorageType = {
      persistent: 'persistent',
      temporary: 'temporary'
    };
  }

  
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
      
    }
  }
};
