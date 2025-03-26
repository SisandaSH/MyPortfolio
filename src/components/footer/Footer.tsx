import FooterSocialItem from "./FooterSocialItem";
import CV from "src/assets/cv/cv.pdf";

const links = [
  {
    name: "Github",
    href: "https://github.com/SisandaSH/MyPortfolio",
    icon: "devicon-github-original",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+27633920364",
    icon: "bx bxl-whatsapp",
  },
  {
    name: "Email",
    href: "mailto:sisandashwala4@gmail.com",
    icon: "bx bx-envelope",
  },
  {
    name: "Resume",
    href: CV,
    icon: "bx bx-file",
  },
  {
    name: "LinkedIn",
    href: "linkedin.com/in/sisanda-shwala-4b290625b",
    icon: "bx bxl-linkedin",
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
