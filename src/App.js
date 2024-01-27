import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Result = styled.div`
  margin-top: 20px;
`;

const calcularClassificacao = (imc) => {
  if (imc < 18.5) return "Magreza";
  if (imc < 24.9) return "Normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade Grau I";
  if (imc < 39.9) return "Obesidade Grau II";
  return "Obesidade Grau III";
};

const App = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();

    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imc = peso / (alturaMetros * alturaMetros);

      setResultado({
        imc: imc.toFixed(2),
        classificacao: calcularClassificacao(imc),
      });
    } else {
      setResultado(null);
    }
  };

  return (
    <Container>
      <Form onSubmit={calcularIMC}>
        <Label>Altura (cm):</Label>
        <Input
          type="number"
          placeholder="Digite sua altura - Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <Label>Peso (kg):</Label>
        <Input
          type="number"
          placeholder="Digite seu peso - Ex: 80"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <Button type="submit">Calcular IMC</Button>
      </Form>

      {resultado && (
        <Result>
          <p>IMC: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </Result>
      )}
    </Container>
  );
};

export default App;
