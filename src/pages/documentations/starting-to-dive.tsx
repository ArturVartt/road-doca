import CodeTable from "../../features/code-table/ui/code-table";
import Container from "../../shared/ui/container/ui/constainer";
import InformationTable from "../../shared/ui/information-table/ui/information-table";
import TopicSection from "../../shared/ui/topic-section/ui/topic-section";
import TopicTitle from "../../shared/ui/topic-title/ui/topic-title";

const code = [
  "<!DOCTYPE html>",
  ' <html lang="en">',
  "   <body>",
  "     <h1>Hello!</h1>",
  '     <script src="main.js"></script>',
  "  </body>",
  "</html>",
];
const codeMainAlert = ['alert("Hello world!");'];
const codeMainLog = ['console.log("Hello world!");'];

const StartingToDive = () => {
  return (
    <div className="flex-1 bg-main-light overflow-auto">
      <main className="p-4 mb-6 ">
        <Container>
          <TopicTitle
            title="Начинаем нырять в JavaScript"
            text={
              <p>
                Сегодня вы узнаете как написать свою первую строчку когда и как
                вывести ее в браузере, начиная эту часть я подразумеваю что у
                вас уже скачена ваша IDE и вы умеете запускать файл в браузере.
              </p>
            }
          />
          <TopicSection title="JavaScript - <script>?">
            <p>
              Теперь, когда вы точно определились, что хотите продолжать
              углубляться в JavaScript, давайте напишем первую строчку кода. Но
              перед этим — вы задумывались, почему в названии языка присутствует
              слово script?
              <br />
              Ага, вот теперь задумались! Возможно, кто-то уже догадался, что
              JavaScript — это скриптовый язык. Для его подключения и выполнения
              в браузере используется специальный тег
              <code>&lt;script&gt;</code>.
              <br />
              Давайте попробуем подключить ваш JS-файл к HTML-документу.
            </p>
            <p>
              Для этого создадим js файл и назовем его main.js
              <br />
              Теперь в HTML файле подключим наш main.js с помощью тега
              <code>&lt;script&gt;</code>.
            </p>
            <CodeTable fileName="index.js" code={code} />
            <p>
              Отлично! Вы смогли подключить свой первый JS-файл. Но какой смысл
              в пустом файле? Давайте напишем в нём что-нибудь.
              <br />
              Для этого мы воспользуемся функциями <code>alert</code> и{" "}
              <code>console.log</code>.
            </p>

            <p>
              Откройте файл <code>main.js</code> и напишите в нём:
              <code>alert("Hello world!")</code>
            </p>

            <CodeTable fileName="main.js" code={codeMainAlert} />

            <p>
              Вуаля! Теперь при заходе на сайт вас встречает всплывающее окно с
              текстом, который вы указали в <code>alert</code>.
            </p>

            <InformationTable
              title="Что такое alert"
              text={
                <p>
                  <code>alert</code> — это встроенная функция, которая
                  показывает модальное окно с сообщением и кнопкой "ОК".
                  <br />
                  Когда браузер выполнит эту строку, на экране появится
                  всплывающее окно с текстом <code>"Привет, мир!"</code>, и
                  выполнение кода приостановится до тех пор, пока пользователь
                  не нажмёт "ОК".
                </p>
              }
            />

            <p>
              Теперь давайте выведем это же сообщение в консоль. Для этого
              используем <code>console.log()</code>.
            </p>

            <CodeTable fileName="main.js" code={codeMainLog} />

            <p>
              Чтобы увидеть ваш текст, нажмите правой кнопкой мыши на странице
              выберите посмотреть код или просто нажмите на клавишу, F12
              откройте панель разработчика и перейдите во вкладку <i>Console</i>
              . Та-дам! Вы увидите своё сообщение.
            </p>

            <InformationTable
              title="Что такое console.log()"
              text={
                <p>
                  <code>console.log()</code> — это встроенный метод в
                  JavaScript, который используется для вывода информации в
                  консоль браузера.
                  <br />
                  Чаще всего его применяют для отладки кода — например, чтобы
                  проверить значения переменных или убедиться, что определённый
                  участок кода был выполнен.
                </p>
              }
            />
          </TopicSection>
        </Container>
      </main>
    </div>
  );
};
export default StartingToDive;
