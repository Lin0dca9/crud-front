import Styled from 'styled-components';

export const Container = Styled.div`
    display:flex;
    width:100vw; 
    background:#f3f3f3;
    flex-direction:collunm;
    align-items:center;
    justify-content:center;
`;

export const Card = Styled.div`
    flex-direction:collunm;
    background:#F2CDA0;
    /* left:50%; */
  
    height:400px;
    width: 300px;
    padding:8%;
    border-radius:2%; 
    margin-top:10% ;
    margin:30% ;
    align-items:center;
    padding-top:90px;
    text-align:center;

    h2{
   
    text-align:center;
    margin-top:-60px;
    color:black;
    position:absolute;
    font-size:2.5rem;
    }

    input{
    flex-direction:collunm;
    background-color:BF8FF65;
    padding:4%;
    border-radius:10px;
    margin:9%;
    left:-2%;
    align-items:center;
    text-align:center;
    transform: translate(-15%, -50%);
    
   }
   button{
       height:40px;
       width: 100%;
        align-self:flex-end;
       border-radius:30px;
       background-color:#BF8F65; 
       cursor:pointer;   
       font-family:'Nunito', sans-serif;
       font-size:1rem;
      
}   
`;



export  const Form = Styled.div`

` 
