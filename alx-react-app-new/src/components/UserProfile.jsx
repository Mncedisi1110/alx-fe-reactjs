const UserProfile = (props) => {
   return (
     <div style = {{ border: '2px solid red', padding: '10px', margin: '20px' }}>
       <h2 style={{ color: 'blue' }}>{props.name}</h2>
       <p>Age:<span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;