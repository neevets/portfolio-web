import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


if (typeof window !== 'undefined' && !('StorageType' in window)) {
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
    void 0;
  }
}

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
