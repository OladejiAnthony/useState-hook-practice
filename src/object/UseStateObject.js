import React,{useState} from "react";

//Question: update company value alone from the user details on button click
//Spread operator
function UseStateObject () {
  const [profile, setProfile] = useState({
    name: "John Doe",
    job: "Web dev",
    company: "Google",
  });
  //console.log(profile);
  //console.log(profile.name)

  //You can Destructure
  //const {name, job, company} = profile;


  const updateCompany = () => {
    setProfile({ ...profile, company: "Microsoft" }); 
    //spread operator to update the properties in an object and add new values to it
    //...profile fills the screen with our initial name and job values
    //while we reset our company property alone.
    console.log(profile.company)
  };

 
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", background: "blue"}}>
      <h2>
        useState in Object
      </h2>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", height: "200px", width: "200px", gap: "0px", padding: "2px 10px", background: "white"}}>
        <h2>Name: {profile.name}</h2>
        <h4>Job: {profile.job}</h4>
        <h4>Company: {profile.company}</h4>
      </div>
      <div>
        <button
          style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "50px", width: "300px", gap: "5px", padding: "2px 10px", background: "white", borderRadius: "5px"}}
          onClick={updateCompany}
        >
          Change Company
        </button>
      </div>
    </div>
  )
}

export default UseStateObject;


//const [com, setCom] = useState("Google")
  //console.log(com);
  //const changeCompany = () => {
    //setCom("Microsoft");
    //console.log("Microsoft")
  //}

