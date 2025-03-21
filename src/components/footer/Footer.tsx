import FooterSocialItem from "./FooterSocialItem";
import CV from "src/assets/cv/cv.pdf";

const links = [
  {
    name: "Github",
    href: "https://github.com/SisandaSH/MyPortfolio",
    icon: "devicon-github-original",
  },
  {
    name: "Telegram",
    href: "https://t.me/dimar1150",
    icon: "bx bxl-telegram",
  },
  {
    name: "WhatsApp",
    href: "0633920364",
    icon: "bx bxl-whatsapp",
  },
  {
    name: "Email",
    href: "sisandashwala4@gmail.com",
    icon: "bx bx-envelope",
  },
  {
    name: "Resume",
    href: CV,
    icon: "bx bx-file",
  },
];

export default function Footer() {
  return (
    <footer className="bg-container-clr transition-colors duration-500 border-t-2 border-black/10 py-12">
      <div className="custom-container flex flex-col gap-8">
        <div className="flex justify-center gap-12 phone:gap-8">
          {links.map((link) => {
            return (
              <FooterSocialItem
                name={link.name}
                href={link.href}
                icon={link.icon}
                key={link.name}
              />
            );
          })}
        </div>
        <span className="text-center uppercase text-sm text-text-clr transition-colors duration-500">
          Sisanda Vukile Shwala © 2025
        </span>
      </div>
    </footer>
  );
}
