import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Title = ({text})=>{

  return(

    <h3 className = "title">

      {text}


    </h3>

    )

}



const Ligne_Titre = ({rang,text_colone2,text_colone3,text_colone4,className})=>{
  return(
      
      <>
         <div className= {className}>

             <span>N</span><sup>o</sup>{rang}

         </div>

          <div className={className}>

             {text_colone2}

         </div>


          <div className="Caracteristique">

             {text_colone3}

         </div>


          <div className= {className}>

             {text_colone4}

         </div>




      </>

    )
}



const Ligne = ({rang,text_colone2,text_colone3,text_colone4,className})=>{
  return(
      
      <>
         <div className= "rang">

            {rang}

         </div>

          <div className= {className}>

             {text_colone2}

         </div>


          <div className= {className}>

             {text_colone3}

         </div>


          <div className= {className}>

             {text_colone4}

         </div>




      </>

    )
}





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "div_app" >

          <Title text ="Inventaire des  Matériels Utilisés à la porte 208 " className = "title1 title" />

          <div className = "tableau">

            <Ligne_Titre text_colone2 = "Appareil" text_colone3="Caractéristique" text_colone4 = "Qté" className ="colone_titre" />

            <Ligne rang ="1" text_colone2 = "Cordon de brassage" text_colone3="2m/bleu" text_colone4 = "3" className = "colone" />

             <Ligne rang ="2" text_colone2 = "Cordon de brassage" text_colone3="3m/gris" text_colone4 = "2" className = "colone" />

            <Ligne rang ="3" text_colone2 = "Connecteurs" text_colone3="cat 6" text_colone4 = "11" className = "colone" />
             <Ligne rang ="4" text_colone2 = "Connecteurs" text_colone3="6A" text_colone4 = "5" className = "colone" />


            <Ligne rang ="5" text_colone2 = "Connecteurs" text_colone3="UY 3M" text_colone4 = "80" className = "colone" />

            <Ligne rang ="6" text_colone2 = "Raccord RJ45 FTP" text_colone3="." text_colone4 = "5" className = "colone" />


            <Ligne rang ="7" text_colone2 = "Câble Electrique" text_colone3="3/25mm" text_colone4 = "15m" className = "colone" />

            
            <Ligne rang ="8" text_colone2 = "Fiche Mâle" text_colone3="." text_colone4 = "1" className = "colone" />

            <Ligne rang ="9" text_colone2 = "Fiche Femelle" text_colone3="." text_colone4 = "1" className = "colone" />

            <Ligne rang ="10" text_colone2 = "Une Rallonge" text_colone3="7 ports" text_colone4 = "1" className = "colone" />


            <Ligne rang ="11" text_colone2 = "Câble FTP" text_colone3="6A/bleu" text_colone4 = "150m" className = "colone" />


            <Ligne rang ="12" text_colone2 = "Câble FTP" text_colone3="6/jaune" text_colone4 = "30m" className = "colone" />


            <Ligne rang ="13" text_colone2 = "Cable FTP" text_colone3="6/gris" text_colone4 = "100m" className = "colone" />



            <Ligne rang ="14" text_colone2 = "Manchons " text_colone3="." text_colone4 = "8" className = "colone" />

            <Ligne rang ="15" text_colone2 = "Goulottes" text_colone3="40x100" text_colone4 = "2.5" className = "colone" />

            <Ligne rang ="16" text_colone2 = "Goulottes" text_colone3="40x85" text_colone4 = "2" className = "colone" />

            <Ligne rang ="17" text_colone2 = "Balai" text_colone3="." text_colone4 = "?" className = "colone" />


            <Ligne rang ="18" text_colone2 = "Cheville/vis" text_colone3="." text_colone4 = "22" className = "colone" />









          </div>


    </div>
  )
}

export default App
