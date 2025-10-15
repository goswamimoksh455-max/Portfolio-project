import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // Check initial theme
    checkTheme();

    const handleResize = () => {
      generateStars();
    };

    // Monitor theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const checkTheme = () => {
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const duration = Math.random() * 2 + 4;
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: -(Math.random() * duration), // Negative delay for immediate start
        animationDuration: duration,
      });
    }

    setMeteors(newMeteors);
  };

  const starClass = isDark ? 'star-dark' : 'star-light';
  const meteorClass = isDark ? 'meteor-dark' : 'meteor-light';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${starClass} animate-pulse-subtle absolute rounded-full`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`${meteorClass} animate-meteor absolute rounded-full`}
          style={{
            width: meteor.size * 38 + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};