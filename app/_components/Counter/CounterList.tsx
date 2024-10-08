import CounterItem from "./CounterItem";

function CounterList() {
  return (
    <ul className="flex gap-9 xl:grid xl:grid-cols-5 xl:grid-rows-2 lg:grid lg:grid-cols-5 lg:grid-rows-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
      <CounterItem
        end={15}
        className="xl:col-start-1 xl:col-end-2 lg:col-start-1 lg:col-end-2"
      >
        років успішної театральної практики в Києві
      </CounterItem>
      <CounterItem
        end={65}
        className="xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"
      >
        випускних вистав
      </CounterItem>
      <CounterItem
        end={597}
        className="xl:col-start-3 xl:col-end-4 lg:col-start-3 lg:col-end-4"
      >
        відкритих показів
      </CounterItem>
      <CounterItem
        end={37}
        className="xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3"
      >
        нагород на фестивалях і конкурсах
      </CounterItem>
      <CounterItem
        end={76}
        className="xl:col-start-5 xl:col-end-5 lg:col-start-5 lg:col-end-5"
      >
        студентів вступило до театралних ВНЗ
      </CounterItem>
    </ul>
  );
}

export default CounterList;
