import { useEffect, useState } from "react";
import { ColumnTitle, Container, Header, GridRow } from "./style";
import axios from "axios";
import { OrderModal } from "../../components/Modal/Modal";
import { Form } from "../../components/Form/Form";

interface IOrder {
    id: string;
    clientId: string;
    client: { id: string; name: string; phone: string };
    product: string;
    date: string;
}

export const Order = () => {
    const titles = ["Cliente", "Produto", "Data de entrega"];
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios.get("http://localhost:3000/orders")
            .then(response => setOrders(response.data))
            .catch(error => console.error("Error fetching orders:", error));
    };

    return (
        <Container>
            <Header>
                Pedidos
                <button onClick={() => setIsModalOpen(true)}>Adicionar Pedido</button>
            </Header>


            <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Form onClose={() => setIsModalOpen(false)} onOrderCreated={fetchOrders} />
            </OrderModal>

            <GridRow isTitle>
                {titles.map((title) => <ColumnTitle key={title}>{title}</ColumnTitle>)}
            </GridRow>

            {orders.map((order) => (
                <GridRow key={order.id}>
                    <span>{order.client.name}</span>
                    <span>{order.product}</span>
                    <span>{order.date ? new Date(order.date).toLocaleDateString() : "Sem data"}</span>
                </GridRow>
            ))}
        </Container>
    );
};
