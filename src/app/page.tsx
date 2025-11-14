import Homepage from "@/components/home/Homepage";
import Aboutpage from "@/components/about/Aboutpage";
import Contactpage from "@/components/contact/Contactpage";
import Projectspage from "@/components/projects/Projectspage";
export default function Home() {
  return (
    <>
      <Homepage />
      <Aboutpage/>
      <Projectspage/>
      <Contactpage/>
    </>
  );
}
