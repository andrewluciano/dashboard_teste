import { styled } from '@stitches/react';

export const Container = styled("div", { 
  position:'relative',
  display: "flex",
  flexDirection: "row",
  fontSize: "3rem",
  height: "auto",
  width:'95vw',
  backgroundColor:'#F4F4F4',
  borderRadius:'10px',
  boxSizing:'border-box',
  padding:'30px',
  margin:'50px 0 20px 0',
  gap:'20px',
  flexWrap:'wrap',
  flex:'1'
});

export const AreaDireita = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap:'20px',
  flex:'3'
  
});
