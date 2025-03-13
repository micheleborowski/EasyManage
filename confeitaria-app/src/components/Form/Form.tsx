import { useState } from "react";
import axios from "axios";

interface FormProps {
    onClose: () => void;
    onOrderCreated: () => void;
}

export const Form = ({ onClose, onOrderCreated }: FormProps) => {
    const [formData, setFormData] = useState({
        clientName: "",
        clientPhone: "",
        product: "",
        date:   "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/orders", {
                "client": {
                  "name": formData.clientName,
                  "phone": formData.clientPhone
                },
                "product": formData.product,
                "date": formData.date
              }
              );
            alert("Pedido criado com sucesso!");
            onOrderCreated();
            onClose(); 
        } catch (error) {
            console.error("Erro ao criar pedido:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Novo Pedido</h2>
            <div>
                <label>Nome do Cliente</label>
                <input type="text" name="clientName" onChange={handleChange} required />
            </div>
            <div>
                <label>Produto</label>
                <input type="text" name="product" onChange={handleChange} required />
            </div>
            <div>
                <label>Data de Entrega</label>
                <input type="date" name="date" onChange={handleChange} required />
            </div>
            <button type="submit">Criar Pedido</button>
        </form>
    );
};
