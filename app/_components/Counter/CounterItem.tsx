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
        className="text-primary font-medium text-5xl md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center "
      />
      <p className="text-white text-xl mt-2 md:text-center sm:text-center sm:text-lg">
        {children}
      </p>
    </li>
  );
}

export default CounterItem;
