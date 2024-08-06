"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AnimationContextProps {
  triggerAnimation: boolean;
  toggleAnimation: () => void;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(
  undefined
);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const toggleAnimation = () => {
    setTriggerAnimation((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleAnimation();
    }, 3000); // Adjust the interval to match your animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContext.Provider value={{ triggerAnimation, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
