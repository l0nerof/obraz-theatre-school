import CourseItem from "./CourseItem";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-32">
      <div className="max-w-[1124px] mx-auto">
        <h2 className="uppercase text-center text-primary font-semibold text-5xl">
          Наші курси
        </h2>

        <ul className="grid items-start gap-x-8 gap-y-16 mt-8 grid-cols-3">
          <CourseItem photoUrl="bg-[url('/courses/course1.jpg')]">
            Акторська майстерність для дорослих
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course2.jpg')]">
            Курси ораторської майстерності
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course3.jpg')]">
            Курси тілесної терапії
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course4.jpg')]">
            Акторська майстерність для дітей
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course5.jpg')]">
            Акторський кіно-табір для дітей 2024
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course6.jpg')]">
            Індивідуальні заняття
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course7.jpg')]">
            Майстер-класи та фестивалі
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course8.jpg')]">
            Подарункові сертифікати
          </CourseItem>

          <CourseItem photoUrl="bg-[url('/courses/course9.jpg')]">
            Корпоративні тренінги для компаній
          </CourseItem>
        </ul>
      </div>
    </section>
  );
}
