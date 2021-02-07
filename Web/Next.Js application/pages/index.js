import Head from 'next/head'
import {useState} from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {

    //Data of name
    const [first, setFirst] = useState('');
    const [firstDirty, setFirstDirty] = useState(false);
    const [firstError, setFirstError] = useState('Name can`t be empty');
    //Data of surname
    const [second, setSecond] = useState('');
    const [secondDirty, setSecondDirty] = useState(false);
    const [secondError, setSecondError] = useState('Surname can`t be empty');
    //Data of email
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email can`t be empty');
    //Data of password
    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Password can`t be empty');
    //Data of date     
    const [date, setDate] = useState('');
    const [dateDirty, setDateDirty] = useState(false);
    const [dateError, setDateError] = useState('Date is incorrect');
    //Data of each teh
    const [teh1, setTeh1] = useState('');
    const [teh2, setTeh2] = useState('');
    const [teh3, setTeh3] = useState('');
    const [teh4, setTeh4] = useState('');
    const [teh5, setTeh5] = useState('');
    const [teh6, setTeh6] = useState('');
    //Data of error by teh
    const [TehError, setTehError] = useState('Choose more teh');

    //validation

    //Check every field
    const firstHandler = (e) => {
        //Initialization of name
        setFirst(e.target.value);
        if (!e.target.value.length) {
            setFirstError('Name can`t be empty');
        } else {
            setFirstError("");
        }
    }
    const secondHandler = (e) => {
        //Initialization of surname
        setSecond(e.target.value);
        if (!e.target.value.length) {
            setSecondError('Surname can`t be empty');
        } else {
            setSecondError("");
        }
    }
    const emailHandler = (e) => {
        //Initialization of email
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase()) && e.target.value.length) {
            setEmailError('Email is incorrect');
        } else if (!e.target.value.length) {
            setEmailError('Email can`t be empty');
        } else {
            setEmailError("");
        }
    }
    const passwordHandler = (e) => {
        //Initialization of password
        setPassword(e.target.value);

        if (e.target.value.length < 8 && e.target.value.length) {
            setPasswordError('Password can`t be short');
        } else if (e.target.value.length > 16 && e.target.value.length) {
            setPasswordError('Password can`t be too long');
        } else if (!e.target.value.length) {
            setPasswordError('Password can`t be empty');
        } else {
            setPasswordError("");
        }
    }
    const dateHandler = (e) => {
        //Initialization of date
        setDate(e.target.value);
        let now = new Date();
        let dob = new Date(date);
        //counting years 
        let age = now.getFullYear() - dob.getFullYear();
        //checks for normal errors
        if (!e.target.value.length) {
            setDateError('Date can`t be empty');
        } else if (age < 18) {
            setDateError('You are too young')
        } else {
            setDateError("");
        }
    }

//Initialization of each teh 
    const teh1Handler = (e) => {
        //if its already checked we give null. We need it for normal count   
        if (teh1)
            setTeh1(null);
        else
            setTeh1('teh1');
    }
    const teh2Handler = (e) => {
        //if its already checked we give null. We need it for normal count
        if (teh2)
            setTeh2(null);
        else
            setTeh2('teh2');
    }
    const teh3Handler = (e) => {
        //if its already checked we give null. We need it for normal count
        if (teh3)
            setTeh3(null);
        else
            setTeh3('teh3');
    }
    const teh4Handler = (e) => {
        //if its already checked we give null. We need it for normal count
        if (teh4)
            setTeh4(null);
        else
            setTeh4('teh4');
    }
    const teh5Handler = (e) => {
        //if its already checked we give null. We need it for normal count
        if (teh5)
            setTeh5(null);
        else
            setTeh5('teh5');
    }
    const teh6Handler = (e) => {
        //if its already checked we give null. We need it for normal count
        if (teh6)
            setTeh6(null);
        else
            setTeh6('teh6');
    }

//Initialization errors
    const BlurHandler = (e) => {
        switch (e.target.name) {
            case 'first':
                setFirstDirty(true);
                break
            case 'second':
                setSecondDirty(true);
                break
            case 'email':
                setEmailDirty(true);
                break
            case 'password':
                setPasswordDirty(true);
                break
            case 'date':
                setDateDirty(true);
                break
        }
    }

//Counting of technologies
    function Count() {
        let count = 0;
        if (teh1)
            count += 1;
        if (teh2)
            count += 1;
        if (teh3)
            count += 1;
        if (teh4)
            count += 1;
        if (teh5)
            count += 1;
        if (teh6)
            count += 1;
        return count;
    }

//Check number of teh
    function CheckTeh(count) {
        if (count < 3) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Form</title>
                <meta charset="utf-8"/>
                <link rel="web icon" href="https://icons8.com/iconizer/files/DelliOS_System_Icons/orig/html.png"
                      type="image/png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                      crossorigin="anonymous"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"/>
            </Head>
            <main className={styles.main}>
                <div class="p-x-1 p-y-3">
                    <form class="card card-block m-x-auto bg-faded form-width" name="postForm">
                        <legend class="m-b-1 text-xs-center">Регистрация</legend>
                        <div class="form-group input-group">
                <span class="has-float-label">
                    <input onChange={e => firstHandler(e)} onBlur={e => BlurHandler(e)} value={first}
                           class="form-control" id="first" type="text" name="first" placeholder="Имя"/>
                    <label for="first">Имя</label>
                    <div class="errorDiv">&nbsp;{(firstDirty && firstError) && firstError}</div>
                </span>
                            <span class="has-float-label">
                    <input onChange={e => secondHandler(e)} onBlur={e => BlurHandler(e)} value={second}
                           class="form-control" id="last" type="text" name="second" placeholder="Фамилия"/>
                    <label for="last">Фамилия</label>
                    <div class="errorDiv">&nbsp;{(secondDirty && secondError) && secondError}</div>
                </span>
                        </div>
                        <div class="form-group input-group">
                            <div>
                                <span class="input-group-addon">@</span>
                                <span class="has-float-label">
                        <input onChange={e => emailHandler(e)} onBlur={e => BlurHandler(e)} value={email}
                               class="form-control" id="email" type="email" name="email"
                               placeholder="name@example.com"/>
                        <label for="email">E-mail</label>
                    </span>
                            </div>
                            <div class="errorDiv">&nbsp;{(emailDirty && emailError) && emailError}</div>
                        </div>
                        <div class="form-group has-float-label input-group">
                            <div>
                    <span class="input-group-addon">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </span>
                                <span class="has-float-label">
                        <input onChange={e => passwordHandler(e)} onBlur={e => BlurHandler(e)} value={password}
                               class="form-control" id="password" type="password" name="password"
                               placeholder="••••••••"/>
                        <label for="password">Пароль</label>
                    </span>
                            </div>
                            <div class="errorDiv">&nbsp;{(passwordDirty && passwordError) && passwordError}</div>
                        </div>
                        <div class="form-group has-float-label input-group">
                            <div>
                    <span class="input-group-addon">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </span>
                                <span class="has-float-label">
                        <input onChange={e => passwordHandler(e)} onBlur={e => BlurHandler(e)} value={password}
                               class="form-control" id="password" type="password" name="password"
                               placeholder="••••••••"/>
                        <label for="password">Повторите пароль</label>
                    </span>
                            </div>
                            <div class="errorDiv">&nbsp;{(passwordDirty && passwordError) && passwordError}</div>
                        </div>
                        <div class="form-group has-float-label">
                            <input onChange={e => dateHandler(e)} onBlur={e => BlurHandler(e)} value={date}
                                   class="form-control" id="date" type="date" name="date"/>
                            <label for="date">Дата</label>
                            <div class="errorDiv">&nbsp;{(dateDirty && dateError) && dateError}</div>
                        </div>
                        <div class="d-flex justify-content-center gender">
                            <div class="flex-fill"><img src="https://bootstraptema.ru/snippets/icons/2016/mia/3.png"
                                                        class="img-responsive" alt="Мультяшная иконка аватарка 3"/>
                            </div>
                            <div class="flex-fill"><img src="https://bootstraptema.ru/snippets/icons/2016/mia/7.png"
                                                        class="img-responsive" alt="Мультяшная иконка аватарка 7"/>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">

                                    <input class="custom-control-input" type="radio" name="gender" checked="checked"/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Мужской</span>
                                </label>
                            </div>
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input class="custom-control-input" type="radio" name="gender"/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Женский</span>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div>Технологии</div>
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input onChange={e => teh1Handler(e)} onBlur={e => BlurHandler(e)}
                                           class="custom-control-input" type="checkbox" name="teh" value={teh1}/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">C/C++</span>
                                </label>
                            </div>
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input onChange={e => teh2Handler(e)} onBlur={e => BlurHandler(e)}
                                           class="custom-control-input" type="checkbox" name="teh" value={teh2}/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">C#</span>
                                </label>
                            </div>
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input onChange={e => teh3Handler(e)} onBlur={e => BlurHandler(e)}
                                           class="custom-control-input" type="checkbox" name="teh" value={teh3}/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Java</span>
                                </label>
                            </div>
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input onChange={e => teh4Handler(e)} onBlur={e => BlurHandler(e)}
                                           class="custom-control-input" type="checkbox" name="teh" value={teh4}/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Java Script</span>
                                </label>
                            </div>
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input onChange={e => teh5Handler(e)} onBlur={e => BlurHandler(e)}
                                           class="custom-control-input" type="checkbox" name="teh" value={teh5}/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">PHP</span>
                                </label>
                            </div>
                            <div class="p-2 flex-fill">
                                <label class="custom-control custom-checkbox">
                                    <input onChange={e => teh6Handler(e)} onBlur={e => BlurHandler(e)}
                                           class="custom-control-input" type="checkbox" name="teh" value={teh6}/>
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">SQL/noSQL</span>
                                </label>
                            </div>
                        </div>
                        <div class="errorDiv">&nbsp;{(CheckTeh(Count()) && TehError) && TehError}</div>
                        <div class="text-xs-center">
                            <button value={"submit_btn"} class="btn btn-block btn-primary" type="submit"
                                    name="submit_btn">Регистрация
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <script>
            </script>
        </div>
    )
}