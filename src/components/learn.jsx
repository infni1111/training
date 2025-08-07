import React,{useState} from 'react';

import  './learn.css'





//console.log("list",list_intro_shell)


const Ligne = ({question,reponse})=>{


    const [checked,setChecked] = useState(0)





  return (

        <details className="div_details">
            <summary className ="div_question">
                <div className="question">{question} </div> 
                <div className ="div_check center">< input type="checkbox" defaultChecked /></div>


            </summary>



            <div className = "div_reponse">

              {reponse} 

            </div>

        </details>
    )
}



const Learn = ({title,list}) => {

  return (
    <>

      <div
      className ="div_container_learn"
      >

          <h4 className="div_title">{title}</h4>

          {list.map((question_reponse, index) => (
            <Ligne
              key={index} // Ajoute une clé pour React
              question={question_reponse[0]}
              reponse={question_reponse[1]}
            />
          ))}



      </div>
    </>
  );
};

export default Learn;
