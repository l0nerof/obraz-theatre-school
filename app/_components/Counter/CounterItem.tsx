import { ReactNode } from "react";
import CountUp from "react-countup";

interface ICounterItemProps {
  children: ReactNode;
  className?: string;
  end: number;
}

function CounterItem({ children, end, className }: ICounterItemProps) {
  return (
    <li className={`${className}`}>
      <CountUp
        start={0}
        end={end}
        separator=""
        enableScrollSpy
        scrollSpyOnce={true}
        className="text-primary font-medium text-5xl"
      />
      <p className="text-white text-xl mt-2">{children}</p>
    </li>
  );
}

export default CounterItem;
