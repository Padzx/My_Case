import React from 'react';
import './aboutmeComponent.css' // Container Styles

const Aboutme = () => {
  return (
    <div className="container">
        <h1>
            About Me
        </h1>
        <Mytext />
    </div>
  );
};

export default Aboutme;








export const Mytext = () => {
  return (
    <p>
      Olá a todos!

      Me chamo Gabriel Padilha de Siqueira e tenho 21 anos. Atualmente, estou imerso no universo fascinante da Ciência de Dados, estudando na <span className="yellow-text">Faculdade de Informática e Administração Paulista (FIAP)</span>. Aqui, tenho tido a oportunidade de aprimorar minha capacidade analítica, mergulhando fundo em áreas como machine learning e deep learning.

      Embora meu foco principal seja <span className="yellow-text">Data Science</span>, sou alguém que gosta de explorar diferentes facetas da tecnologia. Atuo como <span className="yellow-text">Devops</span>, o que me proporcionou uma compreensão mais ampla do ciclo de vida do desenvolvimento de software. Essa experiência me permitiu adquirir conhecimentos sólidos em áreas como desenvolvimento e análise de dados.

      Além disso, tenho me dedicado ao estudo de tecnologias de nuvem, especialmente na <span className="yellow-text">AWS (Amazon Web Services)</span>. Acredito que compreender e dominar essas plataformas é essencial para construir soluções robustas e escaláveis.

      Sou uma pessoa analítica por natureza, sempre buscando compreender os dados de forma crítica e aprofundada. Acredito que essa abordagem minuciosa é fundamental para o desenvolvimento de aplicações eficazes e impactantes.

      A cada dia, busco aperfeiçoar minhas habilidades e conhecimentos, com o objetivo de tornar minhas aplicações tão eficazes quanto possível. Estou animado para continuar minha jornada no mundo da tecnologia e contribuir para avanços significativos neste campo em constante evolução.
    </p>
  );
};
