import { styled, keyframes } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const ScaleGrow = keyframes`
0% {
   -webkit-transform: translateZ(0) translateY(0); 
           transform: translateZ(0) translateY(0); 
}
100% {
   -webkit-transform: translateZ(160px) translateY(-10px); 
           transform: translateZ(160px) translateY(-10px); 
}
`;

export const BoxWrapper = styled(Box)({
  Width: "345px",
  Height: "450px",
  cursor: "pointer",
});

export const CardWrapper = styled(Card)({
  maxWidth: "345px",
  maxHeight: "450px",
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  flexDirection: "column",

  boxShadow: "1px 0px 5px 4px rgba(0,0,0,0.45)",

  padding: "10px",

  ":hover": {
    animation: `${ScaleGrow} 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },

  "img":{
    height: "200px",
    width: "90%",
    marginLeft: "15px",
  },
});

export const MovieTitle = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "center",
  maxWidth: "320px",
});

export const CardImage = styled(CardMedia)({});