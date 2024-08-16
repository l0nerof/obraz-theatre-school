import CounterItem from "./CounterItem";

function CounterList() {
  return (
    <ul className="flex gap-9 xl:grid xl:grid-cols-5 xl:grid-rows-2">
      <CounterItem end={15} className="xl:col-start-1 xl:col-end-2">
        років успішної театральної практики в Києві
      </CounterItem>
      <CounterItem
        end={65}
        className="xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3"
      >
        випускних вистав
      </CounterItem>
      <CounterItem end={597} className="xl:col-start-3 xl:col-end-4">
        відкритих показів
      </CounterItem>
      <CounterItem
        end={37}
        className="xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3"
      >
        нагород на фестивалях і конкурсах
      </CounterItem>
      <CounterItem end={76} className="xl:col-start-5 xl:col-end-5">
        студентів вступило до театралних ВНЗ
      </CounterItem>
    </ul>
  );
}

export default CounterList;
