import styled from "styled-components";

export const Carrinho = styled.section`
    display: block; /* block */
    padding-top: 30px;
    width: 100%;
    height: 100%;
    margin-block: 20px;
    padding-inline: 20px;

    h2 {
    margin-bottom: 10px;
}
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    tr, th, td {
        border: 1px solid #ccc;
        height: 40px;
    }

    td {
        padding-inline: 10px;
    }
`

export const ColunaApagar = styled.td`
    width: 65px;
    text-align: center;

    span:hover {
        cursor: pointer;
        color: red;
    }
`

export const ColunaApagarTh = styled.th`
    width: 65px;
    text-align: center;
`

export const Tfoot = styled.tfoot`
    text-align: right;
`