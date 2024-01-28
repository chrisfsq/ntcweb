import Carousel from "@/components/carousel.component";
import Header from "@/components/Header";
import Aicon from "@/components/Icons/Aicon";
import Bicon from "@/components/Icons/Bicon";
import Dicon from "@/components/Icons/Dicon";
import Ficon from "@/components/Icons/Ficon";
import Content from "@/components/SectionContent"

export default function App() {
  let slides = [
    "https://i.imgur.com/a6Iasxn.png",
    "https://i.imgur.com/3uUTPzy.png",
  ];

  return (
    <>
      <main>
        <h1>Ola</h1>
        <Header />
      </main>
      <section>
        <Carousel slides={slides} />
        
      </section>

      <div className="flex">

        <Content
          text="Fazemos avaliação no conforto da sua casa."
          icon={<Aicon />}
        />

        <Content
          text="Ampla gama de peças de reposição em estoque."
          icon={<Bicon />}
        />

        <Content
          text="Diagnóstico preciso e sem troca de peças desnecessárias."
          icon={<Dicon />}
        />

        <Content
          text="Suporte técnico interno dedicado disponível."
          icon={<Ficon />}
        />
      </div>

      <div className="div-divider"></div>
    </>
  )
}