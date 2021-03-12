import styled from 'styled-components'

export const ContainerApplicationFormPage = styled.div`
       width: 100vw;
       height:100vh;      
`

export const  FormContainer = styled.div`       
       width: 35vw;
       height:680px;
       border:1px solid #000;
       margin: 80px auto; 
       display: flex;
       justify-content: flex-start;
       align-items:center;
       flex-direction: column;
       
       h1{
           text-align:center;
           padding:30px 0;   
       }       
`
      
export const Form = styled.form`
       display: flex;
       justify-content: flex-start;
       align-items:center;
       flex-direction: column;
       height:380px;
       width: 30vw;
       margin: 40px auto;
`
export const InputForm = styled.div`
       margin-bottom: 30px;
       font-size: 22px;

       label {
              margin-right: 30px;
       }

       input {
              font-size: 19px;
              width: 260px;
              height: 30px;              
       }

       textarea {
              resize:none;
       }
`

export const ButtonLogin = styled.button`
       width: 100px;
       height:30px;
       margin-top: 20px;
       font-size: 19px;

`




