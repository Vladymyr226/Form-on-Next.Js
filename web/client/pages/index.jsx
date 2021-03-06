import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  //Data of name
  const [first, setFirst] = useState("");
  const [firstError, setFirstError] = useState("");
  //Data of surname
  const [second, setSecond] = useState("");
  const [secondError, setSecondError] = useState("");
  //Data of email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  //Data of password
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  //Data of date
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  //Data of error by teh
  const [TehError, setTehError] = useState("Choose more technologies");
  const [selectedTeh, setSelectedTeh] = useState({});
  const [CountTeh, setCountTeh] = useState(0);

  const [Gender, setGender] = useState("Male");
  //validation

  //Check every field
  const firstHandler = (e) => {
    //Initialization of name
    setFirst(e.target.value);
    if (!e.target.value.length) {
      setFirstError("Name can`t be empty");
    } else {
      setFirstError("");
    }
  };
  const secondHandler = (e) => {
    //Initialization of surname
    setSecond(e.target.value);
    if (!e.target.value.length) {
      setSecondError("Surname can`t be empty");
    } else {
      setSecondError("");
    }
  };
  const emailHandler = (e) => {
    //Initialization of email
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !re.test(String(e.target.value).toLowerCase()) &&
      e.target.value.length
    ) {
      setEmailError("Email is incorrect");
    } else if (!e.target.value.length) {
      setEmailError("Email can`t be empty");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    //Initialization of password
    setPassword(e.target.value);
    if (e.target.value.length > 7 && e.target.value.length < 16) {
      setPasswordError("");
    } else {
      setPasswordError("Password is incorrect");
    }
  };
  const passwordHandlerCheck = (e) => {
    setPasswordCheck(e.target.value);
    if (
      e.target.value.length > 7 &&
      e.target.value.length < 16 &&
      e.target.value == password
    ) {
      setPasswordCheckError("");
    } else if (
      e.target.value.length > 7 &&
      e.target.value.length < 16 &&
      e.target.value != password
    ) {
      setPasswordCheckError("Passwords are not same");
    } else {
      setPasswordCheckError("Password is incorrect");
    }
  };
  const dateHandler = (e) => {
    //Initialization of date
    setDate(e.target.value);
    let now = new Date();
    let dob = new Date(date);
    //counting years
    let age = now.getFullYear() - dob.getFullYear();
    //checks for normal errors
    if (!e.target.value.length) {
      setDateError("Date can`t be empty");
    } else if (age < 18) {
      setDateError("You are too young");
    } else {
      setDateError("");
    }
  };
  const genderHandlerFemale = (e) => {
    setGender("Female");
  };
  const genderHandlerMale = (e) => {
    setGender("Male");
  };

  const tehHandlerCPlus = (e) => {
    setSelectedTeh({
      ...selectedTeh,
      CPlus: e.target.checked
    });
  };
  const tehHandlerCSharp = (e) => {
    setSelectedTeh({
      ...selectedTeh,
      CSharp: e.target.checked
    });
  };
  const tehHandlerJava = (e) => {
    setSelectedTeh({
      ...selectedTeh,
      Java: e.target.checked
    });
  };
  const tehHandlerJS = (e) => {
    setSelectedTeh({
      ...selectedTeh,
      JS: e.target.checked
    });
  };
  const tehHandlerPhp = (e) => {
    setSelectedTeh({
      ...selectedTeh,
      php: e.target.checked
    });
  };
  const tehHandlerSql = (e) => {
    setSelectedTeh({
      ...selectedTeh,
      sql: e.target.checked
    });
  };

  function CountSelectedTeh() {
    var count = 0;
    for (let i = 0; i < Object.keys(selectedTeh).length; i++) {
      if (Object.values(selectedTeh)[i]) { count += 1; }
    }
    return count;
  }
  function SelectedTeh() {
    var teh = "";
    if (selectedTeh.CPlus) {
      teh += "C/C++ ";
    }
    if (selectedTeh.CSharp) {
      teh += "C# ";
    }
    if (selectedTeh.Java) {
      teh += "Java ";
    }
    if (selectedTeh.JS) {
      teh += "Java Script ";
    }
    if (selectedTeh.php) {
      teh += "PHP ";
    }
    if (selectedTeh.sql) {
      teh += "SQL/noSQL ";
    }
    return teh;
  }

  function submitRegister(e) {
    e.preventDefault();
    const URL = "http://localhost:3001";
    var Tehno = SelectedTeh();

    if (
      !firstError &&
      !secondError &&
      !emailError &&
      !passwordCheckError &&
      !passwordError &&
      !dateError &&
      CountSelectedTeh() >= 3
    ) {
      fetch(`${URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first,
          second,
          email,
          password,
          date,
          Gender,
          Tehno,
        }),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          alert(data);
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
          console.log("Not Found");
        });
    } else {
      alert("Not all fields are correct");
    }
  }
  //----------------------------------Html----------------------------------
  return (
    <div className={styles.container}>
      <Head>
        <title>Form</title>
        <meta charset="utf-8" />
        <link
          rel="web icon"
          href="https://icons8.com/iconizer/files/DelliOS_System_Icons/orig/html.png"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"
        />
      </Head>

      <main className={styles.main}>
        <div className="p-x-1 p-y-3">
          <form
            className="card card-block m-x-auto bg-faded form-width"
            name="postForm"
          >
            <legend className="m-b-1 text-xs-center">Регистрация</legend>

            <div className="form-group input-group">
              <span className="has-float-label">
                <input
                  onChange={(e) => firstHandler(e)}
                  value={first}
                  className="form-control"
                  id="first"
                  type="text"
                  name="first"
                  placeholder="Имя"
                />

                <label htmlFor="first">Имя</label>

                <div className="errorDiv">&nbsp;{firstError}</div>
              </span>
              <span className="has-float-label">
                <input
                  onChange={(e) => secondHandler(e)}
                  value={second}
                  className="form-control"
                  id="last"
                  type="text"
                  name="second"
                  placeholder="Фамилия"
                />
                <label htmlFor="last">Фамилия</label>
                <div className="errorDiv">&nbsp;{secondError}</div>
              </span>
            </div>

            <div className="form-group input-group">
              <div>
                <span className="input-group-addon">@</span>
                <span className="has-float-label">
                  <input
                    onChange={(e) => emailHandler(e)}
                    value={email}
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email">E-mail</label>
                </span>
              </div>
              <div className="errorDiv">&nbsp;{emailError}</div>
            </div>

            <div className="form-group has-float-label input-group">
              <div>
                <span className="input-group-addon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-key"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
                    />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </span>
                <span className="has-float-label">
                  <input
                    onChange={(e) => passwordHandler(e)}
                    value={password}
                    className="form-control"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                  />
                  <label htmlFor="password">Пароль</label>
                </span>
              </div>
              <div className="errorDiv">&nbsp;{passwordError}</div>
            </div>

            <div className="form-group has-float-label input-group">
              <div>
                <span className="input-group-addon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-key"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
                    />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </span>
                <span className="has-float-label">
                  <input
                    onChange={(e) => passwordHandlerCheck(e)}
                    value={passwordCheck}
                    className="form-control"
                    id="passwordCheck"
                    type="password"
                    name="passwordCheck"
                    placeholder="••••••••"
                  />
                  <label htmlFor="password">Повторите пароль</label>
                </span>
              </div>
              <div className="errorDiv">
                &nbsp;{passwordCheckError}
              </div>
            </div>

            <div className="form-group has-float-label">
              <input
                onChange={(e) => dateHandler(e)}
                value={date}
                className="form-control"
                id="date"
                type="date"
                name="date"
              />
              <label htmlFor="date">Дата</label>
              <div className="errorDiv">&nbsp;{dateError}</div>
            </div>

            <div className="d-flex justify-content-center">
              <div>Технологии</div>
            </div>

            <div className="d-flex flex-wrap">
              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => tehHandlerCPlus(e)}
                    className="custom-control-input"
                    type="checkbox"
                    name="teh"
                    value="C/C++"
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">C/C++</span>
                </label>
              </div>
              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => tehHandlerCSharp(e)}
                    className="custom-control-input"
                    type="checkbox"
                    name="teh"
                    value="C#"
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">C#</span>
                </label>
              </div>
              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => tehHandlerJava(e)}
                    className="custom-control-input"
                    type="checkbox"
                    name="teh"
                    value="Java"
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">Java</span>
                </label>
              </div>
              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => tehHandlerJS(e)}
                    className="custom-control-input"
                    type="checkbox"
                    name="teh"
                    value="Java Script"
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">Java Script</span>
                </label>
              </div>
              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => tehHandlerPhp(e)}
                    className="custom-control-input"
                    type="checkbox"
                    name="teh"
                    value="PHP"
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">PHP</span>
                </label>
              </div>
              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => tehHandlerSql(e)}
                    className="custom-control-input"
                    type="checkbox"
                    name="teh"
                    value="SQL/noSQL"
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">SQL/noSQL</span>
                </label>
              </div>
            </div>
            <div className="errorDiv">&nbsp;{(CountSelectedTeh() < 3) && TehError}</div>

            <br></br>

            <div className="d-flex justify-content-center gender">
              <div className="flex-fill">
                <img
                  src="https://bootstraptema.ru/snippets/icons/2016/mia/3.png"
                  className="img-responsive"
                  alt="Мультяшная иконка аватарка 3"
                />
              </div>
              <div className="flex-fill">
                <img
                  src="https://bootstraptema.ru/snippets/icons/2016/mia/7.png"
                  className="img-responsive"
                  alt="Мультяшная иконка аватарка 7"
                />
              </div>
            </div>


            <div className="d-flex justify-content-center">

              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="gender"
                    checked={(Gender == "Male") && "checked"}
                    onChange={(e) => genderHandlerMale(e)}
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">Мужской</span>
                </label>
              </div>

              <div className="p-2 flex-fill">
                <label className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="gender"
                    checked={(Gender == "Female") && "checked"}
                    onChange={(e) => genderHandlerFemale(e)}
                  />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">Женский</span>
                </label>
              </div>

            </div>

            <div className="text-xs-center">
              <button
                value={"submit_btn"}
                className="btn btn-block btn-primary"
                onClick={(e) => submitRegister(e)}
                name="submit_btn"
              >
                Регистрация
              </button>
            </div>

          </form>
        </div>

        <h1 className="title">
          Read{' '}
          <Link href="/2index">
            <a>list of users!</a>
          </Link>
        </h1>

      </main>
    </div>
  );
}
