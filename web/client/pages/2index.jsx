import Link from 'next/link';
import Head from "next/head";
import { useState, useEffect } from "react";

export default function MyButton() {

    //save state all users 
    const [users, setUsers] = useState([]);

    //get request on users
    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:3001");
            const jsonData = await response.json();

            setUsers(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
            </Head>

            <div id="users">
                <h1 >Users:</h1>

                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </div>

            {" "}

            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>email</th>
                        <th>dateofbirth</th>
                        <th>sex</th>
                        <th>technologies</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.dateofbirth).toString()} </td>
                            <td>{user.sex}</td>
                            <td>{user.technologies}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
