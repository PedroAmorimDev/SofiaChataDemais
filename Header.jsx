import {Cabeca, Logo, Lista, Buttons, Paragraph, Span} from '../styles/Cabeca'

const Header = ({sobre, calculadora, provas, autor}) =>{
return (
     <Cabeca>
          <Logo><Span>QUE</Span>ST.</Logo>
          <Lista>
               <Paragraph>{sobre}</Paragraph>
               <Paragraph>{autor}</Paragraph>
               <Paragraph>{calculadora}</Paragraph>
               <Paragraph>{provas}</Paragraph>
          </Lista>
          <Buttons>Sing up</Buttons>
     </Cabeca>
)
}

export default Header