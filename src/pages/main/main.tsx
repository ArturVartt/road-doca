const MainPage = () => {
  return (
    <main className="flex-1 p-4 bg-main-light overflow-auto">
      <section>
        <div className="mx-auto max-w-[1200px]">
          <div className="h-full flex flex-col items-center ">
            <h1 className="py-15 text-3xl font-medium">
              Привет, это RoadDoca!{" "}
            </h1>

            <div className="h-[100px] flex flex-col gap-3 text-xl">
              <p>
                RoadDoca создана для изучения языка в определенном порядке,
                который позволит максимально эффективно вкатится в фронтенд
              </p>

              <p>
                Tут ты встретишь все что необходимо начиная от обычного чтения
                документации, заканчивая задачами, ни один собеседующий не
                сможет сломить тебя на собесе, после качественного прохождения
                RoadDoca!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
