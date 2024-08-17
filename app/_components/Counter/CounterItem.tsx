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
        className="text-primary font-medium text-5xl md:flex md:flex-col md:items-center"
      />
      <p className="text-white text-xl mt-2 md:text-center">{children}</p>
    </li>
  );
}

export default CounterItem;
