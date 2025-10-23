import { Link } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import RegisterForm from "@renderer/components/RegisterForm";
import { Card, Label } from "flowbite-react";

function Cadastro() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center">


            <Link className="absolute top-5 left-5 flex items-center hover:text-primary-800 text-md" to="/"> <ChevronLeft size={24} /> Voltar</Link>
            <Card className="w-1/2 md:w-1/3 ">
                <Label className=" text-center text-2xl pb-5">
                    Cadastro de usuário
                </Label>
                <RegisterForm />
               
            </Card>


        </div>
    );
}

export default Cadastro;