import Carousel from "@/components/carousel.component";
import Header from "@/components/Header";

export default function App(){
  let slides = [
    "https://www.aihr.com/wp-content/uploads/employee-assistance-program-cover.png",
    "https://www.insperity.com/wp-content/uploads/EAP_1200x630.png",
    "https://www.hrmagazine.co.uk/media/sy1iw4b1/article-images-2f231988-2f1562208520_employeecare.jpg?width=1002&height=564&bgcolor=White&rnd=133210262172530000"
  ];

  return(
    <>
    <main>
      <Header/>
    </main>
    <section className="w-[50%] m-auto pt-11">
      <Carousel slides={slides}/>
    </section>
    </>
  )
}