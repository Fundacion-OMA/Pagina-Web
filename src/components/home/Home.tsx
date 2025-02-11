import BoxButton from "../utils/box/BoxButton";

const Home = () => {
  return (
    <>
      <header className="py-[32px]">
        <h1 className="text-black text-8xl font-extrabold font-['Neue Regrade']">
          OMA
        </h1>
        <h2 className="text-black text-2xl font-medium font-['Neue Regrade']">
          Olimpíada Matemática Argentina
        </h2>
      </header>
      <main className="grid grid-cols-2 gap-y-[20px] gap-x-[25px]">
        <BoxButton
          url="/calendario"
          iconLink="/icons/calendar.svg"
          text="Calendario"
          className="bg-oma-blue col-span-full text-3xl"
        />
        <BoxButton
          url="/libros"
          iconLink="/icons/books.svg"
          text="Libros"
          className="bg-oma-pink text-2xl"
        />
        <BoxButton
          url="/enunciados"
          iconLink="/icons/ribbon.svg"
          text="Problemas Viejos"
          className="bg-oma-green text-2xl"
        />
      </main>
    </>
  );
};

export default Home;
