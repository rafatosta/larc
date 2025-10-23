import { Link } from "react-router-dom";
import { Button, Label, TextInput, Card } from "flowbite-react";
import { ChevronLeft } from "lucide-react";

function Recuperar() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center">
            <Link className="absolute top-5 left-5 flex items-center hover:text-primary-800 text-md" to="/"> <ChevronLeft size={24} /> Voltar</Link>
            <Card className="max-w-sm">
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Recuperar senha
                        </h5>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                            Digite seu email abaixo para recuperar sua senha
                        </p>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Email</Label>
                        </div>
                        <TextInput id="email" type="email" placeholder="nome@exemplo.com" required />
                    </div>

                    <Button type="submit">Recuperar</Button>
                </form>

                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Não tem uma conta? <Link to="/cadastro" className="hover:underline" >Cadastre-se</Link>
                </p>
            </Card>
        </div>
    );
}

export default Recuperar;