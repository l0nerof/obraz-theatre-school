import { ReactNode } from "react";
import Button from "./Button";

interface IContactFormSectionProps {
  children: ReactNode;
}

function ContactFormSection({ children }: IContactFormSectionProps) {
  return (
    <section id="contact" className="py-[120px]">
      <div className="max-w-[1124px] rounded-3xl mx-auto py-12 px-8 bg-primary flex flex-col items-center">
        <h3 className="text-center font-semibold text-5xl text-black mb-3">
          {children}
        </h3>
        <p className="text-center text-xl text-black">
          Залиште свою заявку і наша команда зв’яжеться з Вами у найближчі 24
          години
        </p>

        <form action="" className="flex gap-7 mt-8">
          <input
            type="text"
            className="bg-transparent border-2 rounded-[20px] text-lg p-4 border-black text-black placeholder:text-black"
            placeholder="Ім'я*"
            required
          />
          <input
            type="text"
            className="bg-transparent border-2 rounded-[20px] text-lg p-4 border-black text-black  placeholder:text-black"
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
