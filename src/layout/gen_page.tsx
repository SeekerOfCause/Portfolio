import React, { useState } from "react";

type weaponInput = {
  type: string,
  magic: string,
  anchient: string,
  userDescription: string
}

let input: weaponInput;

export default function GenPage() { 

  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState("");
  const [weaponType, setType] = useState("");
  const onTypeChange = e => {
    setType(e.target.value)
  }
  const [magical, setMagical] = useState(false);
  const [ancient, setAncient] = useState(false);
  const [userDesc, setUserDesc] = useState("");

  const handleUserDesc = event => {
    let userinput: string = event.target.value;
    setUserDesc(userinput);
  }

  const handleMagicalChange = event => {
    if (event.target.checked) {
      setMagical(true);
    } else {
      setMagical(false);
    }
  };

  const handleAncientChange = event => {
    if (event.target.checked) {
      setAncient(true);
    } else {
      setAncient(false);
    }
  };

  let isAnchient: string;
  let isMagical: boolean;
  let userDescription: string;




    return (
        <div >
          <div style={{display: displayResult? "block":"none"}}>
            <div>
              <button onClick={reset}>return</button>
            {result}
            </div>
            </div>
          <div style={{display: displayResult? "none":"block"}}>
        <form>
  <div className="form-group">
    <label htmlFor="select">Select</label> 
    <div>
      <select id="select" name="select" className="custom-select" onChange={onTypeChange}>
        <option value="Short Sword">Short Sword</option>
        <option value="Long Sword">Long Sword</option>
        <option value="Broad Sword">Broad Sword</option>
        <option value="Rapier">Rapier</option>
        <option value="Dagger">Dagger</option>
        <option value="Long Bow">Long Bow</option>
        <option value="Bow">Bow</option>
        <option value="Battle Axe">Battle Axe</option>
        <option value="Scimitar">Scimitar</option>
        <option value="Staff">Staff</option>
        <option value="Lance">Lance</option>
        <option value="Spell Book">Spell Book</option>
      </select>
    </div>
  </div>
  <div className="form-group">
    <label>Checkboxes</label> 
    <div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_0" type="checkbox" className="custom-control-input" value="is ancient" /> 
        <label htmlFor="checkbox_0" className="custom-control-label" onChange={handleAncientChange}>Ancient</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_1" type="checkbox" className="custom-control-input" value="Magical" /> 
        <label htmlFor="checkbox_1" className="custom-control-label" onChange={handleMagicalChange}>Magical</label>
      </div>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="userDescription"></label> 
    <textarea id="userDescription" name="userDescription"  aria-describedby="userDescriptionHelpBlock" className="form-control"></textarea> 
    <span id="userDescriptionHelpBlock" className="form-text text-muted">Enter anything specific you would like to add</span>
  </div> 
  <div className="form-group">
    <button name="submit" type="submit" className="btn btn-primary" onClick={setDescription}>Submit</button>
  </div>
</form>
</div>
</div>
    );

    function setDescription() {
      let input: weaponInput;
      let magic: string = isMagical? "it is magical": "it is not magical";
      let ancientThing: string = isAnchient? "it is ancient": "it is not ancient";
      let userDesc: string;

      input = {
        type: weaponType,
        magic: magic,
        anchient: ancientThing,
        userDescription: userDesc,
      }
    
      return getDescription(input);
    }

    function getDescription(input: weaponInput) {

      JSON.stringify({ requestInput: input });
      console.log(input);
      onSubmit();

    }

    async function onSubmit() {


      try {
        //const to capture response from API after submitting animalInput
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          //Stringify our input into .json format for submission to API
          body: 
          
        });
    
        //Const awaiting .json info from response object
        const data = await response.json();
        //throw error if no response heard
        if (response.status !== 200) {
          throw (
            data.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }
    
        //set our result to the result from data .json reponse from API
        setResult(data.result);
      } catch (error) {
        // Implement error handling logic here
        console.error(error);
        alert(error.message);
      }
    }

    async function reset() {
      setDisplayResult(false);
      setResult("");
    }

}






