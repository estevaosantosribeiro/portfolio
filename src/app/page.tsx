import Formacao from "@/components/formacao";
import Header from "@/components/header";
import Main from "@/components/main";
import Projetos from "@/components/projetos";
import Carrosel from "@/components/carrosel";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Main />
      <Formacao />
      <Projetos />
      <Carrosel />
      <Footer />
    </div>
  );
}
