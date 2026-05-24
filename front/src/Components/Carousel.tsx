import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import TaskCard from "./TaskCard";
import { MockTasks } from "../data/MockTasks";

const tasks = MockTasks;

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", onScroll).on("scroll", onScroll).on("select", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              title={task.header}
              description={task.body}
              status={task.status}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <div className="relative h-2 w-52 max-w-[90%] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700 shadow-[inset_0_0_0_2px_#e2e8f0] dark:shadow-[inset_0_0_0_2px_#334155]">
          <div
            className="absolute top-0 bottom-0 w-full bg-accent rounded-2xl"
            style={{ transform: `translate3d(${scrollProgress - 100}%,0,0)` }}
          />
        </div>
      </div>
    </div>
  );
}
