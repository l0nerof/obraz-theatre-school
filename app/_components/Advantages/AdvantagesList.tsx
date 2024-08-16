import AdvantagesItem from "./AdvantagesItem";

function AdvantagesList() {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-8">
      <AdvantagesItem iconPath="support-agent">
        Залишайте <span className="text-primary">заявку</span> на сайті, по
        телефону чи в соц. мережах
      </AdvantagesItem>
      <AdvantagesItem iconPath="comedy-mask">
        Відвідайте <span className="text-primary">безкоштовне пробне</span>{" "}
        заняття
      </AdvantagesItem>
      <AdvantagesItem iconPath="emoji-people">
        Знайомтесь з атмосферою, програмами курсів та майстрами
      </AdvantagesItem>
      <AdvantagesItem iconPath="task">
        Разом с майстром обирайте тривалість та програму занять
      </AdvantagesItem>
    </ul>
  );
}

export default AdvantagesList;
