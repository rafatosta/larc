import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";

function Login() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center">
            <Card className="max-w-sm">
                <form className="flex max-w-md flex-col gap-4">
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
                        <TextInput id="email" type="email" placeholder="nome@exemplo.com" required />
                    </div>
                    <div>
                        <div className="mb-2 flex justify-between">
                            <Label htmlFor="password">Senha</Label>
                            <a className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline" href="">Esqueceu sua senha?</a>
                        </div>
                        <TextInput id="password" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Lembre-me</Label>
                    </div>
                    <Button type="submit">Entrar</Button>
                </form>

                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Não tem uma conta? <a href="" className="hover:underline">Cadastre-se</a>
                </p>
            </Card>
        </div>);
}

export default Login;