import { useState } from "react";
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("teste@exemplo.com");
    const [password, setPassword] = useState("123456");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Tentando login com:", { email, password });

        // Exemplo: se o login for válido, redireciona o usuário
        if (email === "teste@exemplo.com" && password === "123456") {
            navigate("/dashboard"); // 👈 navega para outra rota
        } else {
            alert("Credenciais inválidas!");
        }
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center">
            <Card className="max-w-sm w-full">
                <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Entre na sua conta
                        </h5>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                            Digite seu email abaixo para acessar sua conta
                        </p>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Email</Label>
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="nome@exemplo.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex justify-between">
                            <Label htmlFor="password">Senha</Label>
                            <Link
                                className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline"
                                to="/recuperar"
                            >
                                Esqueceu sua senha?
                            </Link>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Lembre-me</Label>
                    </div>

                    <Button type="submit">Entrar</Button>
                </form>

                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 text-center">
                    Não tem uma conta?{" "}
                    <Link to="/cadastro" className="hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </Card>
        </div>
    );
}

export default Login;
