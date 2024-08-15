import CourseItem from "./CourseItem";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-32">
      <div className="max-w-[1124px] mx-auto">
        <h2 className="uppercase text-center text-primary font-semibold text-5xl">
          Наші курси
        </h2>

        <ul className="grid items-start gap-x-8 gap-y-16 mt-8 grid-cols-3">
          <CourseItem photoUrl="bg-[url('/show.jpg')]">
            Акторська майстерність для дорослих
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/camp.jpg')]">
            Курси ораторської майстерності
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/show.jpg')]">
            Курси тілесної терапії
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/camp.jpg')]">
            Акторська майстерність для дітей
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/show.jpg')]">
            Акторський кіно-табір для дітей 2024
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/camp.jpg')]">
            Індивідуальні заняття
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/show.jpg')]">
            Майстер-класи та фестивалі
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/camp.jpg')]">
            Подарункові сертифікати
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/show.jpg')]">
            Корпоративні тренінги для компаній
          </CourseItem>
        </ul>
      </div>
    </section>
  );
}
