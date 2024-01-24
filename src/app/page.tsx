import Carousel from "@/components/carousel.component";
import Header from "@/components/Header";
import Aicon from "@/components/Icons/Aicon";
import Bicon from "@/components/Icons/Bicon";
import Dicon from "@/components/Icons/Dicon";
import Ficon from "@/components/Icons/Ficon";
import Content from "@/components/SectionContent"

export default function App() {
  let slides = [
    "https://i.imgur.com/RYJYM6w.png",
    "https://i.imgur.com/nOZVqsh.png",
    "https://i.imgur.com/3ZeiIsq.png"
  ];

  return (
    <>
      <main className="bg-cyan-500">
        <Header />
      </main>
      <section className="bg-cyan-500">
        <div className="w-full h-[600px]">
        <Carousel slides={slides} />
        </div>
      </section>

      <div className="flex mt-5">
        <div className="flex">
        <Content
          text="Fazemos avaliação no conforto da sua casa."
          icon={<Aicon />}
        />
        </div>
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