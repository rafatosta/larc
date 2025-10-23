import { useState } from "react";
import { Button, Label, TextInput, Datepicker, Select } from "flowbite-react";
import { ButtonGroup } from "flowbite-react";
import { ArrowRight, ArrowLeft, User, Briefcase, MapPin, Lock } from "lucide-react";
import { Link } from "react-router-dom";


export default function CadastroUsuario() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: "",
        nascimento: "",
        cpf: "",
        email: "",
        telefone: "",
        conselho: "",
        ufRegistro: "",
        numeroRegistro: "",
        endereco: "",
        cidade: "",
        uf: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados enviados:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Barra de progresso */}
            <div className="flex flex-col items-center mb-6">
                <ButtonGroup>
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="flex items-center">
                            {/* Círculo numerado */}
                            <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors select-none 
            ${n <= currentStep
                                        ? "bg-primary-600 text-white"
                                        : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                                    }`}
                            >
                                {n}
                            </div>

                            {/* Linha conectora */}
                            {n < 4 && (
                                <div
                                    className={`w-6 xl:w-12 h-[2px] transition-colors 
              ${n < currentStep
                                            ? "bg-primary-500"
                                            : "bg-gray-200 dark:bg-gray-700"
                                        }`}
                                ></div>
                            )}
                        </div>
                    ))}
                </ButtonGroup>
            </div>

            {currentStep === 1 && (
                <div className="grid gap-6">
                    <Label className="flex items-center gap-2"> <User size={14} /> Dados pessoais</Label>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nome">Nome completo*</Label>
                            </div>
                            <TextInput id="nome" type="text" required value={formData.nome} onChange={handleChange} />
                        </div>

                        <div className="grid grid-cols-2 gap-5 mt-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="nascimento">Data de nascimento*</Label>
                                </div>
                                <Datepicker id="nascimento" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="cpf">CPF*</Label>
                                </div>
                                <TextInput id="cpf" type="text" required value={formData.cpf} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="mb-2 block">
                                <Label htmlFor="email">Email*</Label>
                            </div>
                            <TextInput id="email" type="email" placeholder="nome@exemplo.com" required value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="mt-4">
                            <div className="mb-2 block">
                                <Label htmlFor="telefone">Celular*</Label>
                            </div>
                            <TextInput id="telefone" type="text" required value={formData.telefone} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <div className="grid gap-6">
                    <Label className="flex items-center gap-2"> <Briefcase size={14} /> Dados profissionais</Label>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="conselho">Conselho profissional*</Label>
                            </div>
                            <Select id="conselho" required value={formData.conselho} onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="medicina">Medicina</option>
                                <option value="odontologia">Odontologia</option>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-5 mt-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="ufRegistro">UF do registro*</Label>
                                </div>
                                <TextInput id="ufRegistro" type="text" required value={formData.ufRegistro} onChange={handleChange} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="numeroRegistro">Nº do registro*</Label>
                                </div>
                                <TextInput id="numeroRegistro" type="text" required value={formData.numeroRegistro} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 3 && (
                <div className="grid gap-6">
                    <Label className="flex items-center gap-2"> <MapPin size={14} /> Local de atendimento</Label>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="endereco">Endereço do estabelecimento*</Label>
                            </div>
                            <TextInput id="endereco" type="text" required value={formData.endereco} onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="cidade">Cidade*</Label>
                                </div>
                                <TextInput id="cidade" type="text" required value={formData.cidade} onChange={handleChange} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="uf">UF*</Label>
                                </div>
                                <TextInput id="uf" type="text" required value={formData.uf} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 4 && (
                <div className="grid gap-6">
                    <Label className="flex items-center gap-2"> <Lock size={14} /> Segurança</Label>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="senha">Senha*</Label>
                            </div>
                            <TextInput id="senha" type="password" required value={formData.senha} onChange={handleChange} />
                        </div>

                        <div className="mt-4">
                            <div className="mb-2 block">
                                <Label htmlFor="confirmarSenha">Confirmar senha*</Label>
                            </div>
                            <TextInput id="confirmarSenha" type="password" required value={formData.confirmarSenha} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-between mt-8 items-center">
                {currentStep > 1 ? (
                    <Button color="red" onClick={prevStep} outline>
                        Voltar
                    </Button>
                ) : (
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Já sou cadastrado. <Link to="/" className="hover:underline font-bold" >Quero fazer login!</Link>
                    </p>
                )}

                {currentStep < 4 ? (
                    <Button onClick={nextStep} type="button">
                        Continuar
                    </Button>
                ) : (
                    <Button type="submit" color="green">
                        Finalizar Cadastro
                    </Button>
                )}
            </div>
        </form>
    );
}
