/**
 * Hero Frames Utility
 * Manages the laptop animation frames for the HeroScrollAnimation component
 * Total: 154 frames (ezgif-frame-001.jpg through ezgif-frame-154.jpg)
 */

/**
 * Generates the array of all animation frame image paths
 * @returns Array of 154 frame paths from the heroImages folder
 */
export const generateFramePaths = (): string[] => {
  const frames: string[] = [];
  for (let i = 1; i <= 154; i++) {
    const frameNumber = String(i).padStart(3, "0");
    frames.push(`/heroImages/ezgif-frame-${frameNumber}.jpg`);
  }
  return frames;
};

// Memoized frames array - prevents re-creation on every render
export const HERO_FRAMES = generateFramePaths();

/**
 * Gets the frame index based on scroll progress (0 to 1)
 * Maps scroll progress linearly to frame range
 * @param progress Scroll progress from 0 to 1
 * @returns Frame index (0-153)
 */
export const getFrameIndexFromProgress = (progress: number): number => {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const frameIndex = Math.round(clampedProgress * (HERO_FRAMES.length - 1));
  return frameIndex;
};

/**
 * Gets the frame path for a given progress value
 * @param progress Scroll progress from 0 to 1
 * @returns Path to the current frame image
 */
export const getFrameFromProgress = (progress: number): string => {
  const index = getFrameIndexFromProgress(progress);
  return HERO_FRAMES[index];
};

/**
 * Preloads all images into memory for smooth scroll-driven animation
 * Returns a promise that resolves when all frames are loaded
 * @returns Promise that resolves when all frames are loaded
 */
export const preloadFrames = (): Promise<void> => {
  return new Promise((resolve) => {
    // Return immediately if running on server
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    let loadedCount = 0;
    const totalFrames = HERO_FRAMES.length;

    if (totalFrames === 0) {
      resolve();
      return;
    }

    HERO_FRAMES.forEach((framePath) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          resolve();
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          resolve();
        }
      };
      img.src = framePath;
    });
  });
};
