import CourseItem from "./CourseItem";

export default function CoursesSection() {
  return (
    <section id="courses" className="pb-[120px]">
      <div className="max-w-[1124px] mx-auto">
        <h2 className="uppercase text-center text-primary font-extrabold text-5xl">
          Наші курси
        </h2>

        <ul className="grid items-start gap-[67px] mt-12 grid-cols-3">
          <CourseItem>Акторська майстерність для дорослих</CourseItem>
          <CourseItem>Курси ораторської майстерності</CourseItem>
          <CourseItem>Курси тілесної терапії</CourseItem>
          <CourseItem>Акторська майстерність для дітей</CourseItem>
          <CourseItem>Акторський кіно-табір для дітей 2024</CourseItem>
          <CourseItem>Індивідуальні заняття</CourseItem>
          <CourseItem>Майстер-класи та фестивалі</CourseItem>
          <CourseItem>Подарункові сертифікати</CourseItem>
          <CourseItem>Корпоративні тренінги для компаній</CourseItem>
        </ul>
      </div>
    </section>
  );
}
