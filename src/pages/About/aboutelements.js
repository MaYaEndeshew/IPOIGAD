import styled from 'styled-components'

 
 export const Section = styled.section `
 margin-left:5px;
 margin-right:5px;
 width:100%;
 height:100%;
 padding: 4rem 0rem;
//  background: #000d1a;
background:blueviolet;
 
 `;
export const Container = styled.div`
display:grid;
padding 3rem calc((100vw-1300px)/2);
grid-template-columns : 1fr 1fr;
 grid-template-rows: 600px;

@media screen and (max-width: 768px){
  grid-template-columns:1fr;
}
`;

export const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
line-height:1.4;
padding: 1rem 2rem;
background:teal;
// background: rgba(6, 51, 51, 0.83);
color:whitesmoke;
order:${({reverse})=> (reverse ? '2' : '1')};
h1{
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
  margin-bottom: 2rem;
}
`;

export const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({reverse})=> (reverse ? '1' : '2')};
display:flex;
justify-content:center;
align-items: center;

@media screen and (max-width: 768px){
order: ${({ reverse }) => (reverse ? '1' : '2')};
}
img{
  width:100%;
  height:100%;
  object-fit:cover;


  @media screen and (max-width: 768px){
    width:90%;
    height:100%;
     object-fit:cover;
  }
}
`;






















// export const Maincontent = styled.div`
//      width:100%;
//     h3{
//        position: absolute;
//         left: 30%;
//         color: #fff;
//         font-size: 8.5vw;
//         margin-top: 250px
//     }

// `;
// export const Servcontainer = styled.div `


// box-sizing:border-box;
// background-color:blue;
// `;

// export  const Servcontent = styled.div`
//             // position: relative;
//             width: 70%;
//               //height:200px;
//             background: red;
//             outline: 1px solid transparent;
//             display: grid;
//             grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
//             grid-gap: 240px;
//             -webkit-align-items: center;
//             -webkit-box-align: center;
//             -ms-flex-align: center;
//             align-items: center;
//             margin-top: 150px;
//             margin-left: 200px;
            

//   &:after{
//   content:'';
//   display:block;
//   }
//   `




// export  const Card= styled.div`

     
//     background-color: antiquewhite;
//     // position: relative;
//     // width:96%;
//     // padding-bottom: 110.851%; /* =  width / sin(60) */
//     margin:0 2%;
//     overflow: hidden;
//     // visibility: hidden;
//     outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
//     -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);

//  `; 


// export const Cardimg = styled.div`        
      
//          padding-left: 100px;
//            -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
// }
//         // margin-top:-5vw;
//         //  width:100%;
//         // height:150px;
 
// `;


  
// export const Cardheader = styled.div `
// background-color: #8ab88a;
// display: block;
// text-align: center;
// color: #fff;
// overflow: hidden;
// -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
// margin-left: -40px;
//   `;  
// export const Hero2 = styled.h2`
  
//         font-size:18px;
    
//     `;
// export const Par = styled.p`
//         font-size:14px;
//         text-align:center;
//         color:green;
//         margin:8px 0;
//   `;

    
 
//     export const Sharebtn= styled.div`
//             background-color:green;
//             color:#fff;
//             width:30px;
//     height:35px;
//     border-radius:50px;
//     outline:none;
//     border:none;
//     cursor:pointer;
//     top:0;
//     right:0;
//     transition: all 0.2s ease-in-out;

//     &:hover{
//     transition:all 0.2s ease-in-out;
//     // background:${({ primary }) => (primary ? '#ff512D' : '#01BF71')};
//     width:40px;
//     height:50px;
//     }
//     `;

//     export const Servadd = styled.div`
//     position:relative;
//     width:50%;
//     // height:100%;
//     // margin:50px auto;
//     // padding:50px 0 0;
//     box-sizing:border-box;
//     justify-content: space-between;
//   display:block
//     background:yellow;

// `;

// export const Bookmarkbtn = styled.div`
// width:30px;
// height:35px;
// font-size:14px;
// border-radius:35px;
// color:#fff;
// background-color:orange;
// cursor:pointer;
// position:relative;
// transition:background-color .3s ease;
// overflow:hidden;
// &:hover{
// transition:all 0.2s ease-in-out;
// // background:${({ primary }) => (primary ? '#ff512D' : '#01BF71')};
// width:40px;
// height:50px;
// }
// `;