"use client";

import { useEffect, useState } from "react";

type Step = { id: string; label: string };

export function StepIndicator({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(steps[0]?.id ?? "");

  useEffect(() => {
    const elements = steps
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps]);

  return (
    <aside
      aria-hidden
      className="hidden lg:block sticky top-32 self-start"
    >
      <ol className="relative flex flex-col gap-6 pl-6">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        {steps.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="relative flex items-center gap-3 text-xs">
              <span
                className={`absolute -left-[1px] grid place-items-center w-4 h-4 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-accent border-2 border-accent scale-125"
                    : "bg-ink-2 border-2 border-border"
                }`}
              />
              <span
                className={`pl-6 font-display transition-colors ${
                  isActive ? "text-cream" : "text-muted"
                }`}
              >
                <span className="text-accent mr-2">{s.id.replace("step-", "")}</span>
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
