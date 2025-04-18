import { Sandpack } from "@codesandbox/sandpack-react";
import { ecoLight } from "@codesandbox/sandpack-themes";

const IntroPage = () => {
  const files = {
    "/App.js": `export default function App() {
  return (
<>           <h1 >
                Введение в JavaScript
              </h1>
              <p>
                Давайте посмотрим, что такого особенного в JavaScript, чего
                можно достичь с его помощью и какие другие технологии хорошо с
                ним работают.
              </p></>
   
        
  )}`,
  };
  return (
    <main className="flex-1 p-4 bg-main-light overflow-auto">
      <section>
        <div className="mx-auto max-w-[1100px]">
          <div className="h-full flex flex-col items-center text-[17px] pt-4 gap-6">
            <div>
              <h1 className=" pb-5 text-4xl font-medium ">
                Введение в JavaScript
              </h1>
              <p>
                Давайте посмотрим, что такого особенного в JavaScript, чего
                можно достичь с его помощью и какие другие технологии хорошо с
                ним работают.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold pb-1">
                Что такое JavaScript?
              </h2>
              <p>
                Изначально был создан, чтобы
                <em>«сделать веб-страницы живыми»</em>. Программы на этом языке
                называются скриптами. Они могут встраиваться в HTML и
                выполняться автоматически при загрузке веб-страницы. Скрипты
                распространяются и выполняются, как простой текст. Им не нужна
                специальная подготовка или компиляция для запуска.
              </p>

              <div className="p-3 border rounded-sm my-2">
                <h5 className="text-xl font-semibold pb-3">
                  Как работают движки?
                </h5>
                <div className="flex flex-col gap-1.5">
                  <p>
                    Движок применяет оптимизации на каждом этапе. Он даже
                    просматривает скомпилированный скрипт во время его работы,
                    анализируя проходящие через него данные, и применяет
                    оптимизации к машинному коду, полагаясь на полученные
                    знания. В результате скрипты работают очень быстро.
                  </p>
                  <p>
                    Со временем JavaScript стал полностью независимым языком со
                    своей собственной спецификацией, называющейся ECMAScript, и
                    сейчас не имеет никакого отношения к Java.
                  </p>
                </div>
              </div>

              <p>
                Сегодня JavaScript может выполняться не только в браузере, но и
                на сервере или на любом другом устройстве, которое имеет
                специальную программу, называющуюся «движком» JavaScript. У
                браузера есть собственный движок, который иногда называют
                «виртуальная машина JavaScript».
              </p>
              <p>
                У браузера есть собственный движок, который иногда называют
                «виртуальная машина JavaScript».
              </p>
              <div className="p-3 border rounded-sm my-2">
                <h5 className="text-xl font-semibold pb-3">
                  Как работают движки?
                </h5>
                <div className="flex flex-col gap-1.5">
                  <p>
                    Движок применяет оптимизации на каждом этапе. Он даже
                    просматривает скомпилированный скрипт во время его работы,
                    анализируя проходящие через него данные, и применяет
                    оптимизации к машинному коду, полагаясь на полученные
                    знания. В результате скрипты работают очень быстро.
                  </p>
                  <p>
                    Со временем JavaScript стал полностью независимым языком со
                    своей собственной спецификацией, называющейся ECMAScript, и
                    сейчас не имеет никакого отношения к Java.
                  </p>
                </div>
              </div>
              <Sandpack files={files} theme={ecoLight} template="react" />
              <h2 className="text-2xl font-semibold pb-1">
                Что такое JavaScript?
              </h2>
              <p>
                Изначально был создан, чтобы
                <em>«сделать веб-страницы живыми»</em>. Программы на этом языке
                называются скриптами. Они могут встраиваться в HTML и
                выполняться автоматически при загрузке веб-страницы. Скрипты
                распространяются и выполняются, как простой текст. Им не нужна
                специальная подготовка или компиляция для запуска.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IntroPage;
