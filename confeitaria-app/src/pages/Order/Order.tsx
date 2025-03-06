import { Container, Grid, Row } from "./style"

export const Order = () => {
    return (
        <Container>
            <h1>Pedidos</h1>
            <Grid>
                <Row>
                    <h2>Cliente</h2>
                </Row>
                <Row>
                    <h2>Produto</h2>
                </Row>
                <Row>
                    <h2>Data de Entrega</h2>
                </Row>
            </Grid>
        </Container>
    )
}