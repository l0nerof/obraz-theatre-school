import { ReactNode } from "react";
import Button from "../ui/Button";

interface IContactFormSectionProps {
  children: ReactNode;
}

function ContactFormSection({ children }: IContactFormSectionProps) {
  return (
    <section className="pb-32 xl:pb-16">
      <div className="max-w-[976px] rounded-3xl mx-auto py-12 px-8 bg-primary flex flex-col xl:max-w-[904px]">
        <h3 className="font-semibold text-[32px] text-black mb-3">
          {children}
        </h3>
        <p className="text-black leading-normal">
          Залиште свою заявку і наша команда зв’яжеться з Вами у найближчі 24
          години
        </p>

        <form action="" className="flex gap-7 mt-8">
          <input
            type="text"
            className="bg-transparent border-2 rounded-2xl leading-normal py-4 px-8 border-black text-black placeholder:text-black"
            placeholder="Ім'я*"
            required
          />
          <input
            type="text"
            className="bg-transparent border-2 rounded-2xl leading-normal p-4 px-8 border-black text-black  placeholder:text-black"
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
