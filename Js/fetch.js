// const url="https://dummyjson.com/users?limit=1"
// const pr=fetch(url);
// pr.then((res)=>{
//    return res.json();
// }).then((data)=>{
//    console.log("Name:",data.users[0].firstName);
//    console.log("Email:",data.users[0].email);
//    console.log("IP Address:",data.users[0].ip);
//    console.log("MAC Address",data.users[0].macAddress);
// })
// .catch((err)=>{
//    console.error("Error:",err.message);
// })
const url="https://dummyjson.com/users?limit=1"
const f1=async()=>{
   try{
   const res=await fetch(url);
   const jsondata=await res.json();
   jsondata.users.forEach((data)=>{
      console.log("Name=",data.firstName)
      console.log("Email=",data.email)
      console.log("IP Address=",data.ip)
      console.log("MAC Address=",data.macAddress)
   })
 }
 catch(err){
   console.error("Error:",err.message);
 }
}
f1();