import { ReactNode } from "react";
import Button from "../ui/Button";

interface IContactFormSectionProps {
  children: ReactNode;
}

function ContactFormSection({ children }: IContactFormSectionProps) {
  return (
    <section id="contact" className="pb-32 xl:pb-16 lg:pb-16 md:pb-10 sm:pb-10">
      <div className="max-w-[976px] rounded-3xl mx-auto py-12 px-8 bg-primary flex flex-col xl:max-w-[904px] lg:max-w-[704px] md:max-w-[448px] sm:max-w-[272px]">
        <h3 className="font-semibold text-[32px] text-black mb-3 sm:text-2xl sm:text-center">
          {children}
        </h3>
        <p className="text-black leading-normal sm:text-sm sm:text-center">
          Залиште свою заявку і наша команда зв’яжеться з Вами у найближчі 24
          години
        </p>

        <form
          action=""
          className="flex gap-7 mt-8 xl:flex-wrap lg:flex-wrap md:flex-wrap sm:flex-wrap"
        >
          <input
            type="text"
            className="bg-transparent border-2 rounded-2xl leading-normal py-4 px-8 border-black text-black placeholder:text-black xl:w-[48%] lg:w-[47%] md:w-full sm:w-full"
            placeholder="Ім'я*"
            required
          />
          <input
            type="text"
            className="bg-transparent border-2 rounded-2xl leading-normal p-4 px-8 border-black text-black  placeholder:text-black xl:w-[48%] lg:w-[47%] md:w-full sm:w-full"
            placeholder="Телефон*"
            required
          />
          <Button type="button">Залишити заявку</Button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
