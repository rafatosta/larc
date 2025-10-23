import { Link } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import RegisterForm from "@renderer/components/RegisterForm";
import { Card, Label } from "flowbite-react";

function Cadastro() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center">


            <Link className="absolute top-5 left-5 flex items-center hover:text-primary-800 text-md" to="/"> <ChevronLeft size={24} /> Voltar</Link>
            <Card className="w-1/2 md:w-1/3 ">
                <div className="pb-6">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Criar novo usuário
                    </h5>
                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                        Informe seus dados para acessar o Sistema Larc
                    </p>
                </div>
                <RegisterForm />

            </Card>


        </div>
    );
}

export default Cadastro;