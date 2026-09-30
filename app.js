/**
 * NOCTURNE CABINET — APPLICATION STATE & INTERACTION ENGINE
 * Project: Birthday Website
 * Architecture: Zero-dependency Single Page Experience
 */

(function () {
  'use strict';

  // Screen identifier mapping in chronological sequence
  const SCREENS = [
    'screen-opening',
    'screen-welcome',
    'screen-the-files',
    'screen-file-01',
    'screen-file-02',
    'screen-file-03',
    'screen-file-04',
    'screen-file-05',
    'screen-file-06',
    'screen-file-07',
    'screen-final-letter'
  ];

  let currentScreenIndex = 0;
  let isTransitioning = false;

  // Cache DOM references
  const screens = SCREENS.map(id => document.getElementById(id));
  const btnEnter = document.getElementById('btn-enter');
  const btnStart = document.getElementById('btn-start');
  const btnFile07Continue = document.getElementById('btn-file-07-continue');
  const fileNodes = document.querySelectorAll('.file-node');
  const fileBackTriggers = document.querySelectorAll('[data-action="archive"]');
  const fileNextTriggers = document.querySelectorAll('[data-action="next"]');

  /**
   * Reset all animated elements in a screen so they can re-animate gracefully
   */
  function resetScreenAnimations(screenEl) {
    if (!screenEl) return;
    const animItems = screenEl.querySelectorAll('.anim-fade-item, .letter-paragraph');
    animItems.forEach(el => {
      el.classList.remove('visible');
    });
  }

  /**
   * Run specific entrance animations for each screen
   */
  function triggerScreenEntrance(screenId, screenEl) {
    if (!screenEl) return;

    if (screenId === 'screen-welcome') {
      const sequences = [
        { id: 'welcome-item-1', delay: 200 },
        { id: 'welcome-item-2', delay: 900 },
        { id: 'welcome-item-3', delay: 1600 },
        { id: 'welcome-item-4', delay: 2300 },
        { id: 'welcome-item-5', delay: 3000 }
      ];
      sequences.forEach(seq => {
        setTimeout(() => {
          const el = document.getElementById(seq.id);
          if (el) el.classList.add('visible');
        }, seq.delay);
      });
      return;
    }

    if (screenId === 'screen-the-files') {
      const heading = document.getElementById('files-heading');
      if (heading) {
        setTimeout(() => heading.classList.add('visible'), 150);
      }
      fileNodes.forEach((node, idx) => {
        setTimeout(() => {
          node.classList.add('visible');
        }, 350 + (idx * 110));
      });
      return;
    }

    if (screenId === 'screen-final-letter') {
      setupFinalLetterObserver(screenEl);
      return;
    }

    // Generic staggered fade for Dossier Files 01 through 07
    const items = screenEl.querySelectorAll('.anim-fade-item');
    items.forEach((item, idx) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, 120 + (idx * 140));
    });
  }

  /**
   * IntersectionObserver setup for Final Letter
   */
  let letterObserver = null;
  function setupFinalLetterObserver(letterScreenEl) {
    const paragraphs = letterScreenEl.querySelectorAll('.letter-paragraph');

    if (letterObserver) {
      letterObserver.disconnect();
    }

    if ('IntersectionObserver' in window) {
      letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            letterObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      });

      paragraphs.forEach((p, idx) => {
        if (idx < 2) {
          setTimeout(() => {
            p.classList.add('visible');
          }, idx * 250);
        } else {
          letterObserver.observe(p);
        }
      });
    } else {
      // Fallback if IntersectionObserver is unsupported
      paragraphs.forEach((p, idx) => {
        setTimeout(() => p.classList.add('visible'), idx * 200);
      });
    }
  }

  /**
   * Transition cleanly to a target screen
   */
  function navigateTo(targetIndex) {
    if (isTransitioning) return;
    if (targetIndex < 0 || targetIndex >= SCREENS.length) return;
    if (targetIndex === currentScreenIndex && screens[targetIndex].classList.contains('active')) return;

    isTransitioning = true;
    const currentScreen = screens[currentScreenIndex];
    const targetScreen = screens[targetIndex];

    // Fade out current screen
    if (currentScreen) {
      currentScreen.style.opacity = '0';
      currentScreen.style.transform = 'translateY(-6px)';
    }

    setTimeout(() => {
      if (currentScreen) {
        currentScreen.classList.remove('active');
        currentScreen.style.display = 'none';
        resetScreenAnimations(currentScreen);
      }

      currentScreenIndex = targetIndex;

      // Scroll window to top on all potential targets
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Display and fade in new screen
      targetScreen.style.display = 'flex';
      // Force repaint
      void targetScreen.offsetWidth;

      targetScreen.classList.add('active');
      targetScreen.style.opacity = '1';
      targetScreen.style.transform = 'translateY(0)';

      triggerScreenEntrance(SCREENS[targetIndex], targetScreen);

      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }, 400);
  }

  // --- BUTTON ACTIONS ---

  // Screen 1: ENTER -> WELCOME
  if (btnEnter) {
    btnEnter.addEventListener('click', () => {
      btnEnter.style.opacity = '0.4';
      btnEnter.style.transform = 'scale(0.96)';
      setTimeout(() => {
        btnEnter.style.opacity = '1';
        btnEnter.style.transform = 'scale(1)';
        navigateTo(1); // Screen 2: Welcome
      }, 350);
    });
  }

  // Screen 2: START -> THE FILES
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      navigateTo(2); // Screen 3: The Files
    });
  }

  // Screen 3: THE FILES -> Direct File Selection
  fileNodes.forEach(node => {
    node.addEventListener('click', function () {
      const fileNum = parseInt(this.getAttribute('data-file'), 10);
      if (fileNum >= 1 && fileNum <= 7) {
        // Highlight active selection momentarily
        fileNodes.forEach(n => n.style.backgroundColor = '');
        this.style.backgroundColor = 'rgba(139, 30, 34, 0.25)';

        setTimeout(() => {
          this.style.backgroundColor = '';
          // File 01 is index 3 in SCREENS array
          navigateTo(2 + fileNum);
        }, 220);
      }
    });
  });

  // Files 01–07: Return to THE FILES
  fileBackTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateTo(2); // Screen 3: The Files
    });
  });

  // Files 01–06: Next File Trigger
  fileNextTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentScreenIndex >= 3 && currentScreenIndex < 9) {
        navigateTo(currentScreenIndex + 1);
      }
    });
  });

  // File 07: CONTINUE -> FINAL LETTER
  if (btnFile07Continue) {
    btnFile07Continue.addEventListener('click', () => {
      navigateTo(10); // Final Letter
    });
  }

  // --- DESKTOP KEYBOARD NAVIGATION ---
  window.addEventListener('keydown', (e) => {
    // If currently on Opening or Welcome screen, let Enter or Space trigger button
    if (currentScreenIndex === 0 && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      btnEnter.click();
      return;
    }
    if (currentScreenIndex === 1 && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      btnStart.click();
      return;
    }

    // When inside any File (Files 01–07):
    if (currentScreenIndex >= 3 && currentScreenIndex <= 9) {
      if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        navigateTo(2); // Return to The Files
        return;
      }
      // Only horizontal Arrow keys for forward/back file navigation
      // NEVER intercept ArrowDown, ArrowUp, PageDown, or PageUp!
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentScreenIndex === 9) {
          // File 07 -> Final Letter
          navigateTo(10);
        } else {
          navigateTo(currentScreenIndex + 1);
        }
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentScreenIndex === 3) {
          navigateTo(2); // File 01 -> The Files
        } else {
          navigateTo(currentScreenIndex - 1);
        }
        return;
      }
    }
  });

  // --- MOBILE TOUCH SWIPE GESTURES ---
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipeGesture();
  }, { passive: true });

  function handleSwipeGesture() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Strict Guard: If there is any noticeable vertical movement (> 30px),
    // this gesture was a vertical scroll, NOT a horizontal swipe!
    if (Math.abs(deltaY) > 30) {
      return;
    }

    // Must be a deliberate, predominantly horizontal swipe with minimal vertical displacement
    if (Math.abs(deltaX) > 75 && Math.abs(deltaX) > Math.abs(deltaY) * 2.5) {
      // Swiping only inside Files 01–07
      if (currentScreenIndex >= 3 && currentScreenIndex <= 9) {
        if (deltaX < 0) {
          // Swipe Left -> Next
          if (currentScreenIndex === 9) {
            navigateTo(10);
          } else {
            navigateTo(currentScreenIndex + 1);
          }
        } else {
          // Swipe Right -> Prev / Back to Files
          if (currentScreenIndex === 3) {
            navigateTo(2);
          } else {
            navigateTo(currentScreenIndex - 1);
          }
        }
      }
    }
  }

  // --- SPECIAL INTERACTION: FILE 05 GLOW EFFECT ---
  const lovesItems = document.querySelectorAll('.loves-item, .loves-highlight');
  lovesItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.textShadow = '0 0 16px rgba(139, 30, 34, 0.45)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.textShadow = 'none';
    });
    item.addEventListener('touchstart', () => {
      item.style.textShadow = '0 0 16px rgba(139, 30, 34, 0.45)';
    }, { passive: true });
    item.addEventListener('touchend', () => {
      setTimeout(() => {
        item.style.textShadow = 'none';
      }, 300);
    });
  });

  // --- INITIALIZE AT OPENING SCREEN ---
  // Ensure we always start at opening screen on reload
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  screens.forEach((s, idx) => {
    if (idx === 0) {
      s.classList.add('active');
      s.style.display = 'flex';
      s.style.opacity = '1';
      s.style.transform = 'translateY(0)';
    } else {
      s.classList.remove('active');
      s.style.display = 'none';
      s.style.opacity = '0';
      resetScreenAnimations(s);
    }
  });

})();
