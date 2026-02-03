import { useState } from 'react'
import { Modal, Button } from "antd";


import { useNavigate } from 'react-router-dom'

const StartGame = () => {

   const navigate= useNavigate();
   const [open, setopen] = useState <boolean>(true);

   const startgame=()=>{
    setopen(false);
    navigate("/game");
    
   }

  return (
    
      <Modal open={open}
          footer={null}
          closable= {false}
          centered
          className="transparent-modal"
          maskStyle={{backdropFilter: "blur(6px)"}}>

            <div style={{textAlign:"center"}}>
              <Button
              type="primary"
              size="large"
              onClick={startgame}
              >

                Start Typing
              </Button>


            </div>
          

      </Modal>
        
      
    
  )
}

export default StartGame
